# Polylang Configuration Documentation

## Overview

This document describes the Polylang bilingual content setup for Vismar Aqua headless WordPress.

## Configured Languages

### English (Default)
- **Language Code:** `en` (ISO 639-1)
- **Locale:** `en_US`
- **Flag:** `us`
- **URL Structure:** `/en/page-slug/`
- **GraphQL Code:** `EN`

### Ukrainian
- **Language Code:** `uk` (ISO 639-1)
- **Locale:** `uk`
- **Flag:** `ua`
- **URL Structure:** `/uk/page-slug/`
- **GraphQL Code:** `UK`

## Important Notes on Language Codes

### ISO 639-1 Standard
Polylang follows the ISO 639-1 standard where Ukrainian is represented as **`uk`**, not `ua`.

- `uk` = Ukrainian language code (ISO 639-1)
- `ua` = Ukraine country code (ISO 3166-1)

### Frontend URL Mapping
If your Next.js frontend needs `/ua/` URLs instead of `/uk/`, you have two options:

1. **In Next.js router:** Map `/ua/*` routes to query Polylang's `uk` language
2. **WordPress rewrite rules:** Add custom rewrite rules to accept both `/ua/` and `/uk/`

Example Next.js mapping:
```javascript
// In your Next.js app
const LANG_MAP = {
  'ua': 'uk',  // Frontend uses /ua/, WordPress uses uk
  'en': 'en',
};

function getWordPressLanguage(frontendLang) {
  return LANG_MAP[frontendLang] || frontendLang;
}
```

## Polylang Settings

### URL Configuration
- **Force language in URL:** Enabled (`force_lang: 1`)
- **Language slug position:** In URL path (e.g., `/en/page/`)
- **Hide default language:** Disabled (both `/en/` and `/uk/` shown in URLs)
- **Rewrite rules:** Enabled

### Content Translation
- **Media translation:** Enabled
- **Browser language detection:** Disabled
- **Automatic redirect:** Disabled

### Enabled Post Types
All custom post types are enabled for translation:
- `page` - Pages
- `post` - Blog posts
- `service` - Services
- `project` - Projects
- `software` - Software
- `species` - Fish Species

### Enabled Taxonomies
- `category` - Categories
- `post_tag` - Tags

## GraphQL Integration

### Query Languages
```graphql
{
  languages {
    code      # EN, UK
    name      # English, Українська
    locale    # en_US, uk
    slug      # en, uk
  }
}
```

### Query Posts with Language
```graphql
{
  pages {
    nodes {
      id
      title
      language {
        code
        name
        slug
      }
      translations {
        id
        title
        language {
          code
          slug
        }
        uri
      }
    }
  }
}
```

### Query by Language
```graphql
{
  pages(where: {language: EN}) {
    nodes {
      title
      uri
    }
  }
}
```

## Scripts

### configure-polylang.sh
Main configuration script that sets up languages and post types.

**Location:** `/docker/scripts/configure-polylang.sh`

**Usage:**
```bash
./docker/scripts/configure-polylang.sh
```

**What it does:**
1. Creates English and Ukrainian languages
2. Sets English as default
3. Enables all custom post types for translation
4. Enables taxonomies for translation
5. Configures URL structure
6. Flushes rewrite rules

**Can be re-run safely:** Yes, script checks for existing languages.

### create-test-pages.php
Creates test pages in both languages to verify setup.

**Location:** `/docker/scripts/create-test-pages.php`

**Usage:**
```bash
docker cp docker/scripts/create-test-pages.php vismar-wordpress:/tmp/
docker exec vismar-wordpress wp eval-file /tmp/create-test-pages.php --allow-root
```

## Creating Bilingual Content

### In WordPress Admin

1. **Create content in default language (English):**
   - Create page/post as normal
   - Save/publish

2. **Add translation:**
   - Look for "Languages" meta box in editor
   - Click "+" icon next to Ukrainian flag
   - WordPress creates new post in Ukrainian
   - Add Ukrainian translation
   - Save/publish

3. **Link existing content:**
   - Edit post in one language
   - Use language meta box to select corresponding translation
   - Save

### Via WP-CLI and PHP

```php
// Create English post
$en_id = wp_insert_post([
    'post_title'   => 'English Title',
    'post_content' => 'English content',
    'post_status'  => 'publish',
    'post_type'    => 'page',
]);

// Set language
pll_set_post_language($en_id, 'en');

// Create Ukrainian post
$uk_id = wp_insert_post([
    'post_title'   => 'Українська назва',
    'post_content' => 'Український контент',
    'post_status'  => 'publish',
    'post_type'    => 'page',
]);

// Set language
pll_set_post_language($uk_id, 'uk');

// Link as translations
pll_save_post_translations([
    'en' => $en_id,
    'uk' => $uk_id,
]);
```

## Verification

### Check Languages via WP-CLI
```bash
docker exec vismar-wordpress wp term list language --allow-root
```

### Check Settings
```bash
docker exec vismar-wordpress wp option get polylang --format=json --allow-root
```

### Test GraphQL
```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ languages { code name slug } }"}'
```

### Test Translation Links
```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ pages { nodes { title language { code } translations { title language { code } } } } }"}'
```

## Troubleshooting

### WP-CLI Polylang Commands Not Available
The `wp pll` commands require the Polylang CLI package, which needs Git to install. If Git is not available in the container, use the provided PHP scripts with `wp eval-file` instead.

### Languages Not Showing in GraphQL
1. Ensure `wp-graphql-polylang` plugin is active
2. Check languages exist: `wp term list language --allow-root`
3. Flush permalinks: `wp rewrite flush --allow-root`

### Translations Not Linking
1. Verify both posts have language set: Check in admin or via `pll_get_post_language($post_id)`
2. Use `pll_save_post_translations()` to link them
3. Check that posts are published (drafts may not show in queries)

### URL Structure Issues
1. Flush rewrite rules: `wp rewrite flush --allow-root`
2. Check Polylang settings: `force_lang` should be `1`
3. Verify `.htaccess` or nginx config supports rewrite rules

## Next.js Integration Tips

### Language Detection
```javascript
// Get language from URL
export function getLanguageFromPath(path) {
  const match = path.match(/^\/(en|uk|ua)\//);
  return match ? match[1] : 'en';
}

// Map frontend language to WordPress language
export function mapToWordPressLanguage(lang) {
  return lang === 'ua' ? 'uk' : lang;
}
```

### GraphQL Query with Language
```javascript
import { gql } from '@apollo/client';

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!, $language: LanguageCodeFilterEnum!) {
    pages(where: { name: $slug, language: $language }) {
      nodes {
        id
        title
        content
        language {
          code
          slug
        }
        translations {
          id
          slug
          language {
            code
            slug
          }
        }
      }
    }
  }
`;
```

### Language Switcher Component
```javascript
export function LanguageSwitcher({ currentLang, translations }) {
  return (
    <div>
      {translations.map(translation => (
        <Link
          key={translation.language.code}
          href={translation.uri}
        >
          {translation.language.code}
        </Link>
      ))}
    </div>
  );
}
```

## Maintenance

### Re-run Configuration
If you need to reconfigure Polylang (e.g., after database reset):

```bash
./docker/scripts/configure-polylang.sh
```

### Add More Post Types
Edit `configure-polylang-eval.php` and add to the `post_types` array:

```php
$options['post_types'] = [
    'page',
    'post',
    'your_new_post_type',  // Add here
];
```

Then re-run the configuration script.

### Add More Languages
To add more languages, add entries in `configure-polylang-eval.php`:

```php
// Add Spanish
$es_args = [
    'name'       => 'Español',
    'slug'       => 'es',
    'locale'     => 'es_ES',
    'rtl'        => 0,
    'flag'       => 'es',
    'term_group' => 2,
];
$result = $model->add_language($es_args);
```

## Resources

- [Polylang Documentation](https://polylang.pro/doc/)
- [WPGraphQL Polylang Plugin](https://github.com/valu-digital/wp-graphql-polylang)
- [ISO 639-1 Language Codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- [ISO 3166-1 Country Codes](https://en.wikipedia.org/wiki/ISO_3166-1)
