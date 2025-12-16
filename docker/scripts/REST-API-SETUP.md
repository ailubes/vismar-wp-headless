# WordPress REST API - Project Population Setup

This guide explains how to use the `populate-projects-api.js` script to create projects using the WordPress REST API instead of WP-CLI.

## Why REST API Instead of WP-CLI?

- Works from outside the Docker container
- No need to exec into containers
- Can be integrated into CI/CD pipelines
- More portable and easier to automate
- Uses standard WordPress authentication

## Prerequisites

1. **WordPress 5.6+** (has built-in Application Passwords support)
2. **ACF Pro plugin** installed and activated
3. **Project custom post type** registered
4. **Node.js** installed on your system

## Step 1: Generate an Application Password

Application Passwords are a built-in WordPress feature (since WP 5.6) that allows you to authenticate with the REST API without exposing your main password.

### How to Generate:

1. Log in to WordPress admin panel:
   ```
   http://localhost:8080/wp-admin
   ```

2. Go to **Users → Profile** (or click your profile in the top right)

3. Scroll down to the **"Application Passwords"** section

4. Enter an application name (e.g., "REST API Script" or "Project Importer")

5. Click **"Add New Application Password"**

6. **Copy the generated password immediately!**
   - Format: `xxxx xxxx xxxx xxxx` (with spaces)
   - You won't be able to see it again after closing the dialog
   - Example: `AbC1 dEf2 GhI3 jKl4`

7. Save it somewhere secure (you'll need it to run the script)

### Important Notes:

- Application Passwords are **different** from your WordPress login password
- They can be revoked at any time without affecting your main password
- Each Application Password can have a descriptive name for easy management
- You can create multiple Application Passwords for different purposes

## Step 2: Enable ACF Fields in REST API

By default, ACF fields may not be exposed to the REST API. You have two options:

### Option A: Enable in ACF Field Groups (Recommended)

1. Go to **Custom Fields → Field Groups** in WordPress admin
2. Edit the **"Project Details"** field group
3. Scroll to **"Settings"** section
4. Find **"Show in REST API"** option
5. Set it to **"Yes"**
6. Click **"Update"**

### Option B: Install ACF to REST API Plugin

If you're using an older version of ACF or want more control:

1. Install the **"ACF to REST API"** plugin:
   ```bash
   docker exec wordpress wp plugin install acf-to-rest-api --activate
   ```

2. This plugin automatically exposes ACF fields via REST API

## Step 3: Run the Script

### Basic Usage:

```bash
WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx' node docker/scripts/populate-projects-api.js
```

Replace `xxxx-xxxx-xxxx-xxxx` with your actual Application Password.

**Note:** You can use the password with or without spaces:
- ✅ `AbC1 dEf2 GhI3 jKl4` (with spaces)
- ✅ `AbC1dEf2GhI3jKl4` (without spaces)

Both formats work - the script automatically removes spaces.

### Using Environment Variables:

If you prefer, you can set environment variables:

```bash
export WP_USERNAME='admin'
export WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx'
node docker/scripts/populate-projects-api.js
```

### Custom WordPress URL:

If your WordPress is not at `http://localhost:8080`:

```bash
WP_URL='https://example.com' WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx' node docker/scripts/populate-projects-api.js
```

## Step 4: Verify the Results

After running the script successfully, you should see:

```
🚀 Starting project population via WordPress REST API...
   WordPress URL: http://localhost:8080
   Username: admin

🔐 Testing authentication...
✅ Authentication successful

========================================
🦐 PROJECT 1: UAE Shrimp Farm RAS Design
========================================

📝 Creating project post...
✅ Created post with ID: 123
🔧 Updating ACF fields...
✅ ACF fields updated successfully

✅ SUCCESS: UAE Shrimp Farm project created!
   Project ID: 123
   Project URL: http://localhost:8080/project/uae-shrimp-farm-ras-design/

Fields populated:
  ✓ Basic Information (client, location, year, status, etc.)
  ✓ Technical Specifications (system type, species, production data)
  ✓ Performance Metrics
  ✓ Financial Performance
  ✓ Project Content Sections (overview, challenge, solution, results)
  ✓ Engineering Challenges (4 items)
  ✓ Deliverables (3 items)
  ✓ Testimonial

========================================
🎉 ALL PROJECTS CREATED SUCCESSFULLY!
========================================
```

## Troubleshooting

### Error: "WP_APP_PASSWORD environment variable is required"

**Solution:** You forgot to set the Application Password. Run the script with:
```bash
WP_APP_PASSWORD='your-password-here' node docker/scripts/populate-projects-api.js
```

### Error: "Authentication failed" (401 Unauthorized)

**Possible causes:**
1. Application Password is incorrect
2. Username is wrong (default is 'admin')
3. Application Passwords are disabled in WordPress

**Solution:**
- Verify your Application Password
- Check username: `WP_USERNAME='yourusername' WP_APP_PASSWORD='...' node ...`
- Ensure Application Passwords feature is enabled in WordPress

### Error: "Failed to update ACF fields" (400 Bad Request)

**Cause:** ACF fields are not exposed to REST API

**Solution:**
1. Enable "Show in REST API" in ACF field groups (see Step 2)
2. Or install the "ACF to REST API" plugin
3. Make sure ACF Pro is installed and activated

### Error: "Cannot find module" or Node.js errors

**Cause:** Node.js is not installed or path issues

**Solution:**
- Install Node.js: https://nodejs.org/
- Or use the Node.js version in the frontend container:
  ```bash
  docker exec frontend node /app/../docker/scripts/populate-projects-api.js
  ```

### Error: Connection refused or ECONNREFUSED

**Cause:** WordPress is not running or wrong URL

**Solution:**
- Start WordPress: `docker-compose up -d`
- Verify WordPress is accessible: `curl http://localhost:8080`
- Check if URL is correct: `WP_URL='http://localhost:8080' ...`

## Script Features

The script will create the **UAE Shrimp Farm RAS Design** project with:

### Basic Information
- Client: Aqua Bridge / Confidential Client, UAE
- Location: United Arab Emirates
- Year: 2022
- Status: Design Completed, Construction Phase
- Subtitle: Aqua Bridge - 250 MT Annual Production
- Featured: Yes

### Technical Specifications
- System Type: Super-Intensive Indoor RAS
- Species: Pacific White Shrimp (Litopenaeus vannamei)
- Annual Production: 250 tonnes
- Production Cycles: 6 cycles per year
- Growth Period: 12 weeks
- Water Volume: 4,000 m³
- Feed Conversion Ratio: ≤1.55
- And many more detailed specs...

### Financial Data
- CAPEX: $1.24M USD
- OPEX: $917K USD annually
- Revenue: $1.69M annually
- Profit: $652K annually
- Profit Margin: 38.65%
- ROI: ~2 years

### Content Sections
- Project Overview
- Challenge
- Solution
- Results
- Technical Details

### Repeater Fields
- Engineering Challenges (4 items)
- Deliverables (3 items)
- Testimonial with author and title

## Next Steps

After successfully running this script:

1. **Verify in WordPress Admin:**
   - Go to **Projects** in the admin panel
   - Check that the UAE Shrimp Farm project appears
   - Open it and verify all fields are populated

2. **Test GraphQL Query:**
   ```bash
   docker exec wordpress wp eval-file docker/scripts/test-graphql.php
   ```

3. **View in Frontend:**
   - Start the Next.js frontend: `cd frontend && npm run dev`
   - Navigate to the projects page
   - Verify the project displays correctly

4. **Add More Projects:**
   - Edit the `populate-projects-api.js` script
   - Add functions for other projects from PROJECTS.md
   - Follow the same pattern as `createUAEShrimpFarm()`

## Security Best Practices

1. **Never commit Application Passwords to git**
   - Use environment variables
   - Add `.env` files to `.gitignore`

2. **Revoke unused Application Passwords**
   - Regularly review and delete old passwords in WordPress
   - Users → Profile → Application Passwords

3. **Use HTTPS in production**
   - Application Passwords should always be used over HTTPS
   - Local development over HTTP is acceptable

4. **Limit permissions**
   - Only give Application Passwords to trusted systems
   - Create separate user accounts with limited roles if needed

## Comparison: REST API vs WP-CLI

| Feature | REST API | WP-CLI |
|---------|----------|--------|
| **Access** | External (any machine) | Internal (Docker container only) |
| **Authentication** | Application Password | Direct access (no auth) |
| **Portability** | Works anywhere | Requires WP-CLI |
| **Automation** | Easy to integrate | Requires Docker exec |
| **Security** | Token-based | Full access |
| **Speed** | Network overhead | Direct PHP |

Both methods work - choose based on your needs!

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Application Passwords Documentation](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)
- [ACF REST API Documentation](https://www.advancedcustomfields.com/resources/rest-api/)

## Support

If you encounter issues:

1. Check the error message in the console
2. Review the troubleshooting section above
3. Verify WordPress is running: `docker-compose ps`
4. Check WordPress logs: `docker-compose logs wordpress`
5. Test WordPress REST API manually: `curl http://localhost:8080/wp-json/`

---

**Ready to populate your projects?** Generate an Application Password and run the script!

```bash
WP_APP_PASSWORD='your-password-here' node docker/scripts/populate-projects-api.js
```
