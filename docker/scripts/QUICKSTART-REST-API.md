# Quick Start Guide: Populate Projects via REST API

Follow these steps to populate the UAE Shrimp Farm project using the WordPress REST API.

## Prerequisites Checklist

- [ ] WordPress is running: `docker-compose ps`
- [ ] ACF Pro plugin is installed and activated
- [ ] Custom post type 'project' is registered
- [ ] Node.js is installed on your system

## Step-by-Step Instructions

### 1. Enable ACF REST API Access (Choose One Option)

#### Option A: Install Plugin (Fastest)
```bash
docker exec wordpress wp plugin install acf-to-rest-api --activate
```

#### Option B: Manual Configuration
Edit `/docker/scripts/acf-fields-projects.php` and add `'show_in_rest' => 1,` to each field group.

See `ACF-REST-API-NOTE.md` for detailed instructions.

### 2. Generate Application Password

1. Open WordPress admin: http://localhost:8080/wp-admin
2. Log in with your credentials (default: admin/admin)
3. Go to **Users → Profile**
4. Scroll down to **"Application Passwords"** section
5. Enter name: `REST API Script`
6. Click **"Add New Application Password"**
7. **Copy the generated password** (format: `xxxx xxxx xxxx xxxx`)

**Important:** Save this password! You won't see it again.

### 3. Run the Script

Open your terminal and run:

```bash
WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx' node docker/scripts/populate-projects-api.js
```

Replace `xxxx-xxxx-xxxx-xxxx` with the password you copied in step 2.

**Tip:** You can paste the password with or without spaces - both work!

### 4. Verify Success

You should see output like this:

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

========================================
🎉 ALL PROJECTS CREATED SUCCESSFULLY!
========================================
```

### 5. Check in WordPress

1. Go to WordPress admin: http://localhost:8080/wp-admin
2. Click **Projects** in the left menu
3. You should see "UAE Shrimp Farm RAS Design"
4. Open it to verify all fields are populated

### 6. Test GraphQL Query

Verify the data is accessible via GraphQL:

```bash
docker exec wordpress wp eval-file docker/scripts/test-graphql.php
```

Or check in your Next.js frontend once it's running.

## Troubleshooting

### Problem: "WP_APP_PASSWORD environment variable is required"

**Solution:** You forgot to set the password. Run with:
```bash
WP_APP_PASSWORD='your-password' node docker/scripts/populate-projects-api.js
```

### Problem: "Authentication failed" (401 error)

**Possible causes:**
- Application Password is wrong
- Username is incorrect
- Application Passwords disabled in WordPress

**Solution:**
1. Verify the password you copied is correct
2. Try with username: `WP_USERNAME='admin' WP_APP_PASSWORD='...' node ...`
3. Check WordPress Users → Profile to ensure Application Passwords is available

### Problem: "Failed to update ACF fields" (400 error)

**Cause:** ACF fields not exposed to REST API

**Solution:**
- Install plugin: `docker exec wordpress wp plugin install acf-to-rest-api --activate`
- Or manually add `show_in_rest` to field groups (see `ACF-REST-API-NOTE.md`)

### Problem: "Connection refused" or ECONNREFUSED

**Cause:** WordPress not running or wrong URL

**Solution:**
1. Start WordPress: `docker-compose up -d`
2. Check status: `docker-compose ps`
3. Test access: `curl http://localhost:8080`

### Problem: Node.js not found

**Solution:** Install Node.js from https://nodejs.org/

## Environment Variables Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `WP_URL` | `http://localhost:8080` | WordPress URL |
| `WP_USERNAME` | `admin` | WordPress username |
| `WP_APP_PASSWORD` | *(required)* | Application Password from WordPress |

**Example with all variables:**
```bash
WP_URL='http://localhost:8080' \
WP_USERNAME='admin' \
WP_APP_PASSWORD='AbC1 dEf2 GhI3 jKl4' \
node docker/scripts/populate-projects-api.js
```

## What Gets Created

The script creates one project with complete data:

**Basic Info:**
- Title: UAE Shrimp Farm RAS Design
- Client: Aqua Bridge / Confidential Client, UAE
- Location: United Arab Emirates
- Year: 2022
- Status: Design Completed, Construction Phase

**Technical Specs:**
- System Type: Super-Intensive Indoor RAS
- Species: Pacific White Shrimp
- Annual Production: 250 tonnes
- Water Volume: 4,000 m³
- FCR: ≤1.55
- And 15+ more technical fields...

**Financial Data:**
- CAPEX: $1.24M USD
- OPEX: $917K/year
- Revenue: $1.69M/year
- Profit: $652K/year
- ROI: ~2 years

**Content:**
- Project Overview (multi-paragraph)
- Challenge description
- Solution details
- Results (technical + financial + environmental)
- Technical details (system components)

**Repeater Fields:**
- 4 Engineering Challenges
- 3 Deliverables
- Testimonial with author

**Total:** ~40 fields populated with real data from PROJECTS.md

## Next Steps

After successfully populating the project:

1. **Test in Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   Visit http://localhost:3000/projects

2. **Add More Projects:**
   Edit `populate-projects-api.js` and add functions for:
   - Pakistan Shrimp Farm
   - Beluga Caviar Facility
   - Trout Farm

3. **Configure Frontend:**
   Update GraphQL queries in your Next.js app to fetch project data

4. **Add Images:**
   Upload featured images for projects in WordPress admin

## Documentation

For more detailed information, see:

- **`REST-API-SETUP.md`** - Complete setup guide with troubleshooting
- **`ACF-REST-API-NOTE.md`** - ACF REST API configuration details
- **`IMPLEMENTATION-SUMMARY.md`** - Technical implementation details
- **`populate-projects-api.js`** - The actual script (well-commented)

## Support

If you encounter issues not covered here:

1. Check the error message carefully
2. Read the detailed documentation in `REST-API-SETUP.md`
3. Check WordPress logs: `docker-compose logs wordpress`
4. Verify ACF configuration in WordPress admin

## Summary: 3 Commands to Success

```bash
# 1. Install plugin (if not using manual config)
docker exec wordpress wp plugin install acf-to-rest-api --activate

# 2. Generate Application Password in WordPress admin (manual step)
# Go to: http://localhost:8080/wp-admin → Users → Profile → Application Passwords

# 3. Run the script
WP_APP_PASSWORD='your-password-here' node docker/scripts/populate-projects-api.js
```

That's it! Your project should now be populated with complete data.

---

**Need help?** Check `REST-API-SETUP.md` for comprehensive troubleshooting and documentation.
