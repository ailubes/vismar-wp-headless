# WordPress Plugin Installation Summary

**Date:** 2025-11-14
**Status:** Successfully Completed

## Installed Plugins

All essential plugins for the headless WordPress setup have been successfully installed and activated.

### Core GraphQL Plugins

| Plugin | Version | Status | Description |
|--------|---------|--------|-------------|
| **WPGraphQL** | 2.5.1 | Active | Core GraphQL API for WordPress |
| **WPGraphQL IDE** | 4.0.3 | Active | GraphQL IDE interface for testing queries |
| **WPGraphQL for ACF** | 2.4.1 | Active | Exposes ACF fields via GraphQL |
| **WPGraphQL Polylang** | 0.7.1 | Active | Polylang integration for GraphQL (multilingual) |

### Content Management Plugins

| Plugin | Version | Status | Description |
|--------|---------|--------|-------------|
| **Advanced Custom Fields** | 6.6.2 | Active | Custom field management (Free version) |
| **Polylang** | 3.7.5 | Active | Multilingual content management |

### WordPress Configuration

- **Permalinks:** Set to "Post name" structure (`/%postname%/`)
- **Rewrite rules:** Flushed and updated
- **GraphQL Endpoint:** `http://localhost:8080/graphql`
- **GraphQL IDE:** `http://localhost:8080/wp-admin/admin.php?page=graphiql-ide`

## Installation Script

The installation script is located at:
```
/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/install-plugins.sh
```

This script:
- Installs WP-CLI in the container
- Verifies WordPress installation
- Configures permalinks
- Installs and activates all required plugins
- Provides detailed output and error handling

To re-run the installation:
```bash
cd /mnt/g/www/vismar-aqua-wp-headless
./docker/scripts/install-plugins.sh
```

## WordPress Admin Credentials

**URL:** http://localhost:8080/wp-admin
**Username:** admin
**Password:** admin123
**Email:** admin@vismaraqua.com

> **Security Note:** These are development credentials. Change them for production use.

## Manual Configuration Required

### 1. Polylang Language Setup

**Priority:** HIGH - Required for multilingual functionality

**Steps:**
1. Log into WordPress admin: http://localhost:8080/wp-admin
2. Navigate to: **Settings > Languages**
3. Add languages:
   - **Norwegian (Norsk)** - Set as default
   - **English (English)**
4. Configure language options:
   - Set URL modifications (recommended: language code in URL)
   - Enable language switcher
   - Set up language order
5. Save settings

### 2. ACF Pro Upgrade (Optional)

**Priority:** MEDIUM - Only if advanced ACF features are needed

**Current:** ACF Free (6.6.2) is installed and functional

**To upgrade to ACF Pro:**
1. Purchase ACF Pro license from: https://www.advancedcustomfields.com/pro/
2. Download ACF Pro zip file
3. In WordPress admin: **Plugins > Add New > Upload Plugin**
4. Deactivate ACF Free first
5. Upload and activate ACF Pro
6. Enter license key in: **Custom Fields > Updates**

**Note:** ACF Free provides most functionality needed for this project. Only upgrade if you need:
- Repeater fields
- Flexible content
- Gallery fields
- Clone fields

### 3. WPGraphQL Settings

**Priority:** MEDIUM - Review recommended but defaults are functional

**Steps:**
1. Navigate to: **GraphQL > Settings**
2. Review schema settings:
   - **Public Introspection:** Enable for development
   - **GraphQL Endpoint:** Verify it's `/graphql`
   - **Enable GraphQL Debug Mode:** Enable for development
3. Configure post types/taxonomies to expose via GraphQL:
   - Navigate to: **GraphQL > Settings > Post Types**
   - Enable "Show in GraphQL" for desired content types
4. Save settings

### 4. Test GraphQL Endpoint

**Priority:** HIGH - Verify everything works

**Method 1: Using GraphQL IDE (Recommended)**
1. Visit: http://localhost:8080/wp-admin/admin.php?page=graphiql-ide
2. Test with this query:
```graphql
query TestQuery {
  generalSettings {
    title
    url
    language
  }
  contentNodes(first: 5) {
    nodes {
      ... on Post {
        id
        title
        date
      }
    }
  }
}
```

**Method 2: Using cURL**
```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ generalSettings { title url } }"}'
```

**Expected Response:**
```json
{
  "data": {
    "generalSettings": {
      "title": "Vismar Aqua",
      "url": "http://localhost:8080"
    }
  }
}
```

## Verification Tests

### Plugin Status Check
```bash
docker exec vismar-wordpress wp plugin list --allow-root
```

All essential plugins should show status: **active**

### GraphQL Endpoint Test
```bash
curl -s http://localhost:8080/graphql
```

Should return HTTP 200 response.

### WP-CLI Availability
```bash
docker exec vismar-wordpress wp --info --allow-root
```

Should display WP-CLI version information.

## Troubleshooting

### GraphQL Returns 404
**Cause:** Permalinks not configured
**Solution:** Run:
```bash
docker exec vismar-wordpress wp rewrite flush --allow-root
```

### Plugin Won't Activate
**Cause:** Missing dependencies or conflicts
**Solution:** Check plugin requirements:
```bash
docker exec vismar-wordpress wp plugin status <plugin-name> --allow-root
```

### WPGraphQL Polylang Not Working
**Cause:** Polylang languages not configured
**Solution:** Complete Polylang language setup (see Manual Configuration section)

### GraphQL IDE Not Accessible
**Cause:** Plugin not activated or permalink issue
**Solution:**
```bash
docker exec vismar-wordpress wp plugin activate wpgraphql-ide --allow-root
docker exec vismar-wordpress wp rewrite flush --allow-root
```

## Next Steps

1. **Configure Polylang languages** (Norwegian as default, English as secondary)
2. **Test GraphQL queries** in the GraphQL IDE
3. **Create custom post types** for Vismar Aqua content (Products, Services, etc.)
4. **Create ACF field groups** for custom post types
5. **Verify GraphQL schema** exposes all needed fields
6. **Set up Next.js frontend** to consume GraphQL API

## Additional Resources

- **WPGraphQL Documentation:** https://www.wpgraphql.com/docs/introduction
- **ACF Documentation:** https://www.advancedcustomfields.com/resources/
- **Polylang Documentation:** https://polylang.pro/doc/
- **WPGraphQL for ACF:** https://github.com/wp-graphql/wpgraphql-acf
- **WPGraphQL Polylang:** https://github.com/valu-digital/wp-graphql-polylang

## File Locations

- **Plugin Installation Script:** `/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/install-plugins.sh`
- **WordPress wp-content:** `/mnt/g/www/vismar-aqua-wp-headless/wordpress/wp-content`
- **Docker Compose:** `/mnt/g/www/vismar-aqua-wp-headless/docker/docker-compose.yml`
- **Environment Config:** `/mnt/g/www/vismar-aqua-wp-headless/.env`

---

**Installation completed successfully!** All essential plugins are active and ready for configuration.
