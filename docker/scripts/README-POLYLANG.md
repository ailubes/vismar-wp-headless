# Polylang Scripts Usage Guide

## Quick Start

### 1. Configure Polylang (First Time Setup)

```bash
cd /mnt/g/www/vismar-aqua-wp-headless
./docker/scripts/configure-polylang.sh
```

This script will:
- Add English (en) and Ukrainian (uk) languages
- Set English as default
- Enable all custom post types for translation
- Configure URL structure
- Enable media translation

### 2. Create Test Content

```bash
docker cp docker/scripts/create-test-pages.php vismar-wordpress:/tmp/
docker exec vismar-wordpress wp eval-file /tmp/create-test-pages.php --allow-root
```

This creates:
- Test page in English at `/en/test-page-english/`
- Test page in Ukrainian at `/uk/тестова-сторінка/`
- Links them as translations

### 3. Verify Configuration

```bash
# Check languages
docker exec vismar-wordpress wp term list language --allow-root

# Check settings
docker exec vismar-wordpress wp option get polylang --format=json --allow-root

# Test GraphQL
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ languages { code name slug } }"}'
```

## Files Overview

### configure-polylang.sh
**Purpose:** Main configuration script
**Location:** `/docker/scripts/configure-polylang.sh`
**Usage:** `./docker/scripts/configure-polylang.sh`
**Re-runnable:** Yes

### configure-polylang-eval.php
**Purpose:** PHP script that does the actual configuration
**Location:** `/docker/scripts/configure-polylang-eval.php`
**Usage:** Called by configure-polylang.sh (via wp eval-file)
**Direct usage:**
```bash
docker cp docker/scripts/configure-polylang-eval.php vismar-wordpress:/tmp/
docker exec vismar-wordpress wp eval-file /tmp/configure-polylang-eval.php --allow-root
```

### create-test-pages.php
**Purpose:** Creates test pages in both languages
**Location:** `/docker/scripts/create-test-pages.php`
**Usage:**
```bash
docker cp docker/scripts/create-test-pages.php vismar-wordpress:/tmp/
docker exec vismar-wordpress wp eval-file /tmp/create-test-pages.php --allow-root
```

### POLYLANG-SETUP.md
**Purpose:** Complete documentation
**Location:** `/docker/scripts/POLYLANG-SETUP.md`
**Contains:**
- Language code reference
- GraphQL examples
- Next.js integration tips
- Troubleshooting guide

## Common Tasks

### Add a New Post Type for Translation

1. Edit `configure-polylang-eval.php`
2. Add your post type to the `post_types` array
3. Re-run: `./docker/scripts/configure-polylang.sh`

### Reset/Reconfigure Polylang

Simply re-run the configuration script:
```bash
./docker/scripts/configure-polylang.sh
```

The script checks for existing languages and won't duplicate them.

### Query Content by Language in GraphQL

```graphql
# Get all pages in English
{
  pages(where: { language: EN }) {
    nodes {
      title
      uri
    }
  }
}

# Get all pages in Ukrainian
{
  pages(where: { language: UK }) {
    nodes {
      title
      uri
    }
  }
}

# Get page with translations
{
  pages(where: { name: "about" }) {
    nodes {
      title
      language {
        code
        slug
      }
      translations {
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

## Language Code Reference

| Language   | Polylang Code | GraphQL Code | Locale | Flag | URL         |
|------------|---------------|--------------|--------|------|-------------|
| English    | `en`          | `EN`         | en_US  | us   | `/en/...`   |
| Ukrainian  | `uk`          | `UK`         | uk     | ua   | `/uk/...`   |

**Important:** Polylang uses `uk` (ISO 639-1 language code), not `ua` (ISO 3166-1 country code).

If your frontend needs `/ua/` URLs, map them in Next.js:
```javascript
const langMap = { 'ua': 'uk', 'en': 'en' };
```

## Troubleshooting

### "pll is not a registered wp command"
This is expected. The WP-CLI Polylang package requires Git to install, which isn't in the container. Use the provided PHP scripts with `wp eval-file` instead.

### Languages not showing in admin
1. Check Polylang is activated
2. Flush permalinks: `docker exec vismar-wordpress wp rewrite flush --allow-root`
3. Re-run configuration script

### GraphQL not returning language data
1. Verify `wp-graphql-polylang` is active
2. Check languages exist: `docker exec vismar-wordpress wp term list language --allow-root`
3. Clear GraphQL cache if enabled

## Next Steps

1. **Create real content** in WordPress admin using the language meta boxes
2. **Update Next.js** to query content by language
3. **Implement language switcher** in frontend using translation links from GraphQL
4. **Test URLs** for both languages

See `POLYLANG-SETUP.md` for complete documentation including Next.js integration examples.
