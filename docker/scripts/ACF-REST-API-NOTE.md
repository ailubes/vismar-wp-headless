# ACF REST API Configuration Note

## Current Status

The ACF fields in `/docker/scripts/acf-fields-projects.php` are currently configured with:
- ✅ `show_in_graphql` enabled (for WPGraphQL queries)
- ❓ `show_in_rest` may need to be added (for REST API access)

## What You Need to Do

### Option 1: Add `show_in_rest` to ACF Field Groups (Recommended)

Edit the file `/docker/scripts/acf-fields-projects.php` and add `'show_in_rest' => 1` to each field group array.

**Example:**

```php
acf_add_local_field_group(array(
    'key' => 'group_project_basic',
    'title' => 'Project Basic Information',
    'show_in_graphql' => 1,           // Already exists
    'show_in_rest' => 1,              // ADD THIS LINE
    'graphql_field_name' => 'projectDetails',
    // ... rest of the configuration
));
```

Do this for all field groups:
- `group_project_basic`
- `group_project_technical`
- `group_project_financial`
- `group_project_content`
- `group_project_challenges`
- `group_project_deliverables`
- `group_project_testimonial`

### Option 2: Install ACF to REST API Plugin

Alternatively, install the "ACF to REST API" plugin which automatically exposes ACF fields:

```bash
docker exec wordpress wp plugin install acf-to-rest-api --activate
```

This plugin:
- Automatically exposes all ACF fields to REST API
- No code changes required
- Works with existing ACF configuration

## How to Verify REST API Access

After enabling REST API for ACF fields, test with:

```bash
curl -u admin:YOUR_APP_PASSWORD http://localhost:8080/wp-json/wp/v2/project
```

You should see ACF fields in the response under the `acf` key:

```json
{
  "id": 123,
  "title": {...},
  "acf": {
    "projectClient": "Aqua Bridge",
    "projectLocation": "UAE",
    ...
  }
}
```

## When to Enable REST API

You need REST API access enabled **before** running the `populate-projects-api.js` script.

The script will fail with an error if ACF fields are not accessible via REST API:

```
❌ Failed to update ACF fields: Bad Request
⚠️  ACF fields may not be exposed to REST API.
```

## Recommendation

**Best approach:**
1. Add `'show_in_rest' => 1` to all ACF field groups
2. This gives you control over which fields are exposed
3. More secure than exposing all fields via plugin

**Quick approach:**
1. Install the "ACF to REST API" plugin
2. No code changes needed
3. Good for development/testing

## Files to Modify

If you choose Option 1, edit this file:
```
/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/acf-fields-projects.php
```

Add `'show_in_rest' => 1,` to each `acf_add_local_field_group()` array, right after `'show_in_graphql' => 1,`.

## Testing After Configuration

1. Enable REST API for ACF (via Option 1 or 2)
2. Restart WordPress (if you modified PHP files):
   ```bash
   docker-compose restart wordpress
   ```
3. Test REST API access:
   ```bash
   curl http://localhost:8080/wp-json/wp/v2/project
   ```
4. Run the population script:
   ```bash
   WP_APP_PASSWORD='xxxx' node docker/scripts/populate-projects-api.js
   ```

## See Also

- `REST-API-SETUP.md` - Complete setup instructions
- `populate-projects-api.js` - The actual script
- ACF Documentation: https://www.advancedcustomfields.com/resources/rest-api/
