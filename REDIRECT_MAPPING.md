# URL Redirect Mapping Documentation

This document describes the URL redirect strategy for the Vismar Aqua headless WordPress + Next.js migration.

## Old URL Structure (WordPress)

The old WordPress site used the following URL patterns:

### Posts
- **Format**: `/ru/{slug}.html`
- **Example**: `https://vismar-aqua.com/ru/prefiltr-ultrasieve.html`
- **Count**: ~92 posts

### Pages
- **Format**: `/ru/{slug}`
- **Example**: `https://vismar-aqua.com/ru/about`
- **Count**: ~38 pages

### Categories
- **Format**: `/category/{slug}`
- **Example**: `https://vismar-aqua.com/category/novini`

### Attachments (Images)
- **Format**: `/{parent-slug}.html/{attachment-slug}`
- **Example**: `https://vismar-aqua.com/prefiltr-ultrasieve.html/ultrasieveextra`

### Language Codes
- **Old**: `/ru/` (Russian)
- **Old**: `/uk/` (Ukrainian)
- **Old**: `/en/` (English)

## New URL Structure (Next.js)

The new headless Next.js site uses:

### Posts
- **Format**: `/{locale}/{slug}`
- **Example**: `https://vismar-aqua.com/ua/prefiltr-ultrasieve`
- **Locales**: `en`, `ua`

### Pages
- **Format**: `/{locale}/{slug}`
- **Example**: `https://vismar-aqua.com/ua/about`

### Blog Categories
- **Format**: `/{locale}/blog/category/{slug}`
- **Example**: `https://vismar-aqua.com/ua/blog/category/novini`

### Services
- **Format**: `/{locale}/services/{slug}`
- **Example**: `https://vismar-aqua.com/ua/services/proektirovanie`

### Projects
- **Format**: `/{locale}/projects/{slug}`
- **Example**: `https://vismar-aqua.com/ua/projects/project-name`

### Species
- **Format**: `/{locale}/species/{slug}`
- **Example**: `https://vismar-aqua.com/ua/species/tilyapiya`

### Software
- **Format**: `/{locale}/software/{slug}`
- **Example**: `https://vismar-aqua.com/ua/software/software-name`

### Language Codes
- **New**: `/ua/` (Ukrainian - replaces `/ru/` and `/uk/`)
- **New**: `/en/` (English)

## Redirect Patterns Implemented

### 1. Posts with .html Extension
**Old**: `/ru/{slug}.html` or `/{slug}.html`
**New**: `/ua/{slug}`
**Status**: 301 Permanent Redirect
**Example**:
- `/ru/prefiltr-ultrasieve.html` → `/ua/prefiltr-ultrasieve`
- `/barabannye-filtry-vismar-ecodrum.html` → `/ua/barabannye-filtry-vismar-ecodrum`

### 2. Language Code Migration
**Old**: `/ru/{path}` or `/uk/{path}`
**New**: `/ua/{path}`
**Status**: 301 Permanent Redirect
**Example**:
- `/ru/about` → `/ua/about`
- `/uk/contact` → `/ua/contact`

### 3. Category URLs
**Old**: `/category/{slug}`
**New**: `/ua/blog/category/{slug}`
**Status**: 301 Permanent Redirect
**Example**:
- `/category/novini` → `/ua/blog/category/novini`
- `/category/stati` → `/ua/blog/category/stati`

### 4. Attachment URLs
**Old**: `/{post-slug}.html/{attachment-slug}`
**New**: `/ua/{post-slug}`
**Status**: 301 Permanent Redirect
**Example**:
- `/prefiltr-ultrasieve.html/ultrasieveextra` → `/ua/prefiltr-ultrasieve`

### 5. Blog Root
**Old**: `/blog`
**New**: `/ua/blog`
**Status**: 301 Permanent Redirect

### 6. Root Homepage
**Old**: `/`
**New**: `/ua`
**Status**: 301 Permanent Redirect

### 7. Query Parameter URLs
**Old**: `/?post_type=...`
**New**: `/ua/`
**Status**: 301 Permanent Redirect

### 8. Paths Without Language Prefix
**Old**: `/{slug}` (no language code)
**New**: `/ua/{slug}`
**Status**: 301 Permanent Redirect
**Example**:
- `/about` → `/ua/about`
- `/services` → `/ua/services`

### 9. English Content Preservation
**Old**: `/en/{slug}.html` or `/en/{slug}`
**New**: `/en/{slug}`
**Status**: 301 Permanent Redirect
**Example**:
- `/en/about.html` → `/en/about`

## Implementation Details

### Middleware (`frontend/middleware.ts`)
The middleware handles all redirect logic before the request reaches the Next.js routing system.

**Features**:
- Pattern-based redirects for common URL structures
- 301 permanent redirects for SEO preservation
- Language code mapping (ru/uk → ua)
- Extension removal (.html → clean URLs)
- Query parameter handling
- Trailing slash normalization

**Execution Order**:
1. Check for legacy URL patterns
2. Apply 301 redirect if match found
3. Pass to next-intl middleware for locale handling
4. Continue to Next.js routing

### URL Mappings (`frontend/lib/redirects/url-mappings.ts`)
Contains explicit mappings for:
- Specific pages that don't follow patterns
- Category slug changes
- Post slug changes
- Language code mappings

## Testing Redirect Patterns

You can test redirects using curl or browser:

```bash
# Test .html removal
curl -I https://vismar-aqua.com/ru/prefiltr-ultrasieve.html
# Expected: 301 redirect to /ua/prefiltr-ultrasieve

# Test language code migration
curl -I https://vismar-aqua.com/ru/about
# Expected: 301 redirect to /ua/about

# Test category redirect
curl -I https://vismar-aqua.com/category/novini
# Expected: 301 redirect to /ua/blog/category/novini

# Test root redirect
curl -I https://vismar-aqua.com/
# Expected: 301 redirect to /ua
```

## SEO Considerations

1. **301 Permanent Redirects**: All redirects use 301 status to preserve SEO rankings
2. **No Redirect Chains**: Redirects go directly from old URL to new URL
3. **Query Parameters**: Preserved when applicable
4. **Canonical URLs**: New pages should include canonical meta tags
5. **Sitemap**: Update XML sitemap with new URLs
6. **Google Search Console**: Submit new sitemap and monitor crawl errors

## Categories from WordPress Export

Based on the WordPress export, these categories exist:

- `blogs` (505)
- `news-en-2` (504)
- `bakterialni-zasobi-uk` (385)
- `barabanni-filtri` (407)
- `bez-kategoriyi` (362)
- `novini` (382)
- `proekti` (399)
- `ras-uk` (388)
- `ryba` (378)
- `stati` (373)

All category URLs redirect: `/category/{slug}` → `/ua/blog/category/{slug}`

## Known Limitations

1. **Media Files**: URLs like `/wp-content/uploads/...` are preserved (no redirect)
2. **Query Parameters**: Complex WordPress query URLs redirect to homepage
3. **404 Handling**: If new URL doesn't exist, standard 404 page is shown
4. **Admin URLs**: `/wp-admin/` URLs are not redirected (should be blocked)

## Future Improvements

1. Add redirect analytics to track which old URLs are still being accessed
2. Create a redirect dashboard to monitor 404 errors
3. Add automated redirect testing
4. Consider using a redirect database for complex mappings
5. Implement redirect monitoring and alerts

## Maintenance

When adding new content:
- Use clean URLs without extensions
- Always include language prefix (`/en/` or `/ua/`)
- Follow the established URL structure
- Update this documentation if URL patterns change

Last Updated: 2025-11-14
