# WordPress Sample Content Scripts

This directory contains scripts for creating and managing sample content for the Vismar Aqua WordPress backend.

## Quick Start

### Create All Sample Content

```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/create-sample-content.php
```

This creates:
- 16 pages (8 EN + 8 UK)
- 8 services (4 EN + 4 UK)
- 4 projects (2 EN + 2 UK)
- 4 software solutions (2 EN + 2 UK)
- 4 species (2 EN + 2 UK)
- 2 navigation menus

### Verify Content Was Created

```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/verify-content.php
```

### Test GraphQL Integration

```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/test-graphql.php
```

## Files in This Directory

### Scripts

1. **create-sample-content.php**
   - Main content creation script
   - Creates all pages, services, projects, software, species
   - Populates ACF fields
   - Creates navigation menus
   - Links translations

2. **verify-content.php**
   - Verifies content was created
   - Shows counts by type and language
   - Lists all titles and IDs

3. **test-graphql.php**
   - Tests GraphQL integration
   - Verifies WPGraphQL is active
   - Checks ACF fields are accessible
   - Shows sample queries

4. **configure-polylang-eval.php**
   - Configures Polylang languages (EN/UK)
   - Sets up language options
   - Enables post types for translation

5. **create-test-pages.php**
   - Simple test script for Polylang
   - Creates 2 test pages with translations

### Documentation

1. **README.md** (this file)
   - Overview of all scripts
   - Quick start guide

2. **SAMPLE-CONTENT-GUIDE.md**
   - Complete guide to sample content
   - Detailed content breakdown
   - Usage instructions
   - Troubleshooting

3. **CONTENT-CREATION-SUMMARY.md**
   - Summary of content created
   - Post IDs reference
   - Statistics and metrics
   - Verification results

4. **graphql-queries.md**
   - 15+ GraphQL query examples
   - Frontend integration examples
   - Testing instructions

5. **POLYLANG-SETUP.md**
   - Polylang configuration guide
   - Language setup instructions

## Content Overview

### Pages Created

| Page | English ID | Ukrainian ID |
|------|-----------|--------------|
| Home | 8 | 9 |
| About | 10 | 11 |
| Services | 12 | 13 |
| Projects | 14 | 15 |
| Software | 16 | 17 |
| Species | 18 | 19 |
| Contact | 20 | 21 |
| Privacy | 22 | 23 |

### Custom Post Types

- **Services** (4 pairs): RAS Systems, Hatchery, Water Treatment, Turnkey
- **Projects** (2 pairs): Neusatz Aqua (featured), Alpine Trout Farm
- **Software** (2 pairs): AI Fish Counting, AquaMonitor Pro
- **Species** (2 pairs): Rainbow Trout, Nile Tilapia

### ACF Fields

All custom post types have ACF fields populated with realistic data:
- Services: tagline, icon, description, features, benefits, CTA
- Projects: client, location, year, size, challenge, solution, results, featured
- Software: tagline, icon, description, features, benefits, tech stack, URLs
- Species: scientific name, parameters, growth data, advantages, challenges

## Accessing Content

### WordPress Admin

- **Pages**: http://localhost:8080/wp-admin/edit.php?post_type=page
- **Services**: http://localhost:8080/wp-admin/edit.php?post_type=service
- **Projects**: http://localhost:8080/wp-admin/edit.php?post_type=project
- **Software**: http://localhost:8080/wp-admin/edit.php?post_type=software
- **Species**: http://localhost:8080/wp-admin/edit.php?post_type=species
- **Menus**: http://localhost:8080/wp-admin/nav-menus.php

### GraphQL IDE

http://localhost:8080/graphql

**Test Query:**
```graphql
query {
  pages(first: 10, where: {language: EN}) {
    nodes {
      id
      title
      uri
    }
  }
}
```

## Common Tasks

### Add More Content

Run the creation script again to add more content:
```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/create-sample-content.php
```

Note: This will create duplicate content. To avoid duplicates, manually delete existing content first.

### Delete All Content

To start fresh:

```bash
# Delete all pages
docker exec vismar-wordpress wp post delete $(docker exec vismar-wordpress wp post list --post_type=page --format=ids) --force

# Delete all services
docker exec vismar-wordpress wp post delete $(docker exec vismar-wordpress wp post list --post_type=service --format=ids) --force

# Delete all projects
docker exec vismar-wordpress wp post delete $(docker exec vismar-wordpress wp post list --post_type=project --format=ids) --force
```

Note: This requires WP-CLI to be installed in the container.

### Regenerate Menus

If menus are not working:

1. Go to: http://localhost:8080/wp-admin/nav-menus.php
2. Delete existing menus
3. Run creation script again

### Refresh GraphQL Schema

If GraphQL queries aren't working:

1. Go to: http://localhost:8080/wp-admin/admin.php?page=graphql-settings
2. Click "Refresh Schema" or similar option
3. Test queries again in GraphQL IDE

## Troubleshooting

### Content Not Showing in GraphQL

1. **Check post type is exposed:**
   - Go to post type settings
   - Ensure "Show in GraphQL" is enabled
   - Check "GraphQL Single Name" is set

2. **Check ACF fields are exposed:**
   - Go to ACF Field Groups
   - Ensure "Show in GraphQL" is checked
   - Check "GraphQL Field Name" is set

3. **Regenerate schema:**
   - Visit GraphQL settings
   - Refresh schema

### Translations Not Linked

1. **Check Polylang is active:**
   - Go to: http://localhost:8080/wp-admin/plugins.php
   - Ensure Polylang is activated

2. **Check languages are configured:**
   - Go to: http://localhost:8080/wp-admin/admin.php?page=mlang
   - Ensure EN and UK are active

3. **Re-run configuration:**
   ```bash
   docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/configure-polylang-eval.php
   ```

### ACF Fields Not Populated

1. **Check ACF is active:**
   - Go to: http://localhost:8080/wp-admin/plugins.php
   - Ensure ACF Pro is activated

2. **Check field groups exist:**
   - Go to: http://localhost:8080/wp-admin/edit.php?post_type=acf-field-group
   - Ensure all field groups are present

3. **Check field names match:**
   - Field names in script must match ACF field names exactly
   - Check for typos or case sensitivity

### Script Errors

1. **Check WordPress is running:**
   ```bash
   docker ps | grep vismar-wordpress
   ```

2. **Check PHP errors:**
   ```bash
   docker logs vismar-wordpress
   ```

3. **Check file permissions:**
   ```bash
   ls -la /mnt/g/www/vismar-aqua-wp-headless/wordpress/wp-content/scripts/
   ```

## Development Workflow

### Step 1: Create Content
```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/create-sample-content.php
```

### Step 2: Verify Content
```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/verify-content.php
```

### Step 3: Test GraphQL
```bash
docker exec vismar-wordpress php -f /var/www/html/wp-content/scripts/test-graphql.php
```

### Step 4: Test Queries in IDE
1. Open: http://localhost:8080/graphql
2. Run queries from `graphql-queries.md`
3. Verify data is correct

### Step 5: Frontend Integration
Use queries in Next.js frontend to fetch content

## Key Post IDs

Quick reference for important content:

- **Home (EN)**: 8
- **Home (UK)**: 9
- **RAS Service (EN)**: 24
- **RAS Service (UK)**: 25
- **Neusatz Project (EN)**: 32 (Featured)
- **Neusatz Project (UK)**: 33 (Featured)
- **AI Counting (EN)**: 36
- **AI Counting (UK)**: 37
- **Rainbow Trout (EN)**: 40
- **Rainbow Trout (UK)**: 41

## Support

For issues or questions:

1. Check the relevant documentation file
2. Review WordPress error logs
3. Test with GraphQL IDE
4. Verify plugin configuration

## Related Files

- **Docker Compose**: `/docker/docker-compose.yml`
- **WordPress Volume**: `/wordpress/wp-content/`
- **Plugin Installation**: `/docker/scripts/install-plugins.sh`
- **ACF Configuration**: WordPress Admin → ACF

## Additional Resources

- WPGraphQL Docs: https://www.wpgraphql.com/
- ACF Docs: https://www.advancedcustomfields.com/
- Polylang Docs: https://polylang.pro/doc/
- WordPress REST API: http://localhost:8080/wp-json/

---

**Last Updated**: November 14, 2025
**Status**: ✅ All systems operational
**Content**: 40 items created (20 pairs EN/UK)
