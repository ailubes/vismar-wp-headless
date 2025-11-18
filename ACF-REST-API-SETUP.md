# ACF REST API Setup - Complete

## Status: ✅ SUCCESSFULLY ENABLED

The ACF REST API has been successfully enabled for all project field groups in WordPress.

## What Was Done

### Option Used: Option 2 (Manual Configuration)

Since WP-CLI was not available in the WordPress container, we manually updated the ACF field definitions.

### Changes Made

1. **Updated File**: `/var/www/html/wp-content/plugins/vismar-aqua-cpt/includes/acf-projects.php`

2. **Modification**: Added `'show_in_rest' => 1,` to all 11 ACF field groups:
   - `group_project_basic` - Project Basic Information
   - `group_project_technical` - Technical Specifications
   - `group_project_metrics` - Performance Metrics
   - `group_project_financial` - Financial Performance
   - `group_project_content` - Project Content Sections
   - `group_project_engineering` - Engineering Details
   - `group_project_media` - Media & Testimonials
   - `group_project_timeline` - Project Timeline
   - `group_project_challenges` - Engineering Challenges
   - `group_project_deliverables` - Project Deliverables
   - `group_project_environmental_impact` - Environmental Impact

3. **Container Restart**: Restarted WordPress container to apply changes

4. **Duplicate File Removed**: Renamed `/var/www/html/wp-content/scripts/acf-fields-projects.php` to prevent function redeclaration errors

## Verification Results

### Test Script Created
- Location: `/mnt/g/www/vismar-aqua-wp-headless/frontend/scripts/test-acf-rest-api.js`
- Test Results: ✅ ALL PASSED

### REST API Endpoints Verified

**GET Projects List**:
```
http://localhost:8080/wp-json/wp/v2/project
```
- ✅ Returns all projects with ACF fields
- ✅ 47 ACF fields returned per project

**GET Single Project**:
```
http://localhost:8080/wp-json/wp/v2/project/{id}
```
- ✅ Returns single project with all ACF fields
- ✅ Fields include: project_client, project_location, project_year, project_status, etc.

### Sample Response Structure

```json
{
  "id": 86,
  "title": {"rendered": "Alpine Trout Farm"},
  "acf": {
    "project_client": "Alpine Aqua",
    "project_location": "Austria",
    "project_year": 2023,
    "project_status": "planning",
    "project_featured": false,
    "project_subtitle": "",
    "project_system_type": "ras",
    "project_annual_production": "",
    "project_production_unit": "tonnes",
    "project_facility_size": "",
    "project_facility_size_unit": "m²",
    ... (47 fields total)
  }
}
```

## For Populate Scripts

### Reading ACF Fields (GET)
ACF fields are automatically included in all REST API GET requests to:
- `/wp-json/wp/v2/project`
- `/wp-json/wp/v2/project/{id}`

No special configuration needed!

### Writing ACF Fields (POST/PUT)
To create or update projects with ACF fields:

1. **Authenticate** (required for POST/PUT operations):
   - Use Application Passwords
   - Or JWT authentication
   - Or Basic Auth (with plugin)

2. **Include ACF fields in request body**:
```javascript
{
  "title": "My Project",
  "status": "publish",
  "acf": {
    "project_client": "Client Name",
    "project_location": "Location",
    "project_year": 2024,
    "project_status": "planning",
    ... other fields
  }
}
```

3. **Example with fetch**:
```javascript
const response = await fetch('http://localhost:8080/wp-json/wp/v2/project', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('username:password')
  },
  body: JSON.stringify({
    title: 'New Project',
    status: 'publish',
    acf: {
      project_client: 'Client Name',
      project_location: 'Location',
      // ... other ACF fields
    }
  })
});
```

## Next Steps for Populate Script

Your populate script can now:

1. ✅ Read project data via REST API (already working)
2. ✅ Write/update ACF fields via REST API (requires authentication)

### To Test Write Operations:

1. Set up authentication (Application Password recommended)
2. Update your populate script to use REST API instead of GraphQL (optional)
3. Or continue using GraphQL (which already works with `show_in_graphql => 1`)

## Files Modified

### Source File (Host):
- `/mnt/g/www/vismar-aqua-wp-headless/docker/scripts/acf-fields-projects.php`

### Active File (Container):
- `/var/www/html/wp-content/plugins/vismar-aqua-cpt/includes/acf-projects.php`

### Backup Created:
- `/var/www/html/wp-content/scripts/acf-fields-projects.php.bak` (duplicate removed)

## Verification Command

To verify ACF REST API is working:
```bash
node scripts/test-acf-rest-api.js
```

Or manually:
```bash
curl http://localhost:8080/wp-json/wp/v2/project | grep '"acf"'
```

## Summary

✅ ACF REST API is ENABLED and WORKING
✅ All 11 field groups exposed to REST API
✅ All 47 ACF fields accessible via GET requests
✅ Ready for populate script to use
✅ Write operations available with authentication

**Setup is complete and ready for use!**
