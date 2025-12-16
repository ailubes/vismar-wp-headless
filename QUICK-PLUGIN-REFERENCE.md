# Quick Plugin Reference

## URLs
- **WordPress Admin:** http://localhost:8080/wp-admin
- **GraphQL Endpoint:** http://localhost:8080/graphql
- **GraphQL IDE:** http://localhost:8080/wp-admin/admin.php?page=graphiql-ide

## Login Credentials
- **Username:** admin
- **Password:** admin123

## Active Plugins

| Plugin | Version | Purpose |
|--------|---------|---------|
| WPGraphQL | 2.5.1 | GraphQL API |
| WPGraphQL IDE | 4.0.3 | GraphQL Testing Interface |
| Advanced Custom Fields | 6.6.2 | Custom Fields |
| WPGraphQL for ACF | 2.4.1 | ACF in GraphQL |
| Polylang | 3.7.5 | Multilingual Support |
| WPGraphQL Polylang | 0.7.1 | Translations in GraphQL |

## Quick Commands

### List all plugins
```bash
docker exec vismar-wordpress wp plugin list --allow-root
```

### Test GraphQL
```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ generalSettings { title url } }"}'
```

### Flush permalinks
```bash
docker exec vismar-wordpress wp rewrite flush --allow-root
```

### Reinstall all plugins
```bash
/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/install-plugins.sh
```

## Next Steps
1. Configure Polylang languages (Settings > Languages)
2. Test GraphQL IDE
3. Create custom post types
