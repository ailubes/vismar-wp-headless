# Vismar Aqua - Docker Quick Start Guide

Get your full-stack headless WordPress development environment running in 5 minutes!

## Prerequisites Check

Before starting, verify you have:

- [ ] Docker Desktop installed and running
- [ ] 8GB+ RAM available
- [ ] 20GB+ disk space free
- [ ] Ports 80, 3001, 3306, 8080, 8081 are available

## Step-by-Step Setup

### 1. Clone/Navigate to Project

```bash
cd /mnt/g/www/vismar-aqua-wp-headless
```

### 2. Configure Environment

```bash
# Copy the environment template
cp .env.example .env

# Edit the .env file (IMPORTANT: Change passwords!)
nano .env  # or use your preferred editor
```

**Minimum changes required in `.env`:**

```env
MYSQL_ROOT_PASSWORD=your_secure_root_password
WORDPRESS_DB_PASSWORD=your_secure_wp_password
```

### 3. Start Docker Environment

```bash
# Make scripts executable (first time only)
chmod +x docker/scripts/*.sh

# Start all services
./docker/scripts/start.sh
```

This will:
- Create necessary directories
- Pull Docker images (first time only)
- Start all 5 services: WordPress, MySQL, phpMyAdmin, Next.js Frontend, and Nginx
- Show you the access URLs

### 4. Wait for Services to Start

Initial startup takes 2-3 minutes. You'll know it's ready when:

```bash
# Check service health
cd docker
docker-compose ps
```

All services should show "Up" or "Up (healthy)".

### 5. Complete WordPress Installation

1. Open http://localhost:8080 in your browser
2. Select your language (English or Ukrainian)
3. Fill in the WordPress installation form:
   - **Site Title:** Vismar Aqua
   - **Username:** admin (or your preferred username)
   - **Password:** (use a strong password)
   - **Email:** your-email@example.com
4. Click "Install WordPress"
5. Log in to wp-admin

### 6. Install Required WordPress Plugins

Access WordPress admin at http://localhost:8080/wp-admin

**Install these plugins:**

```bash
# Option 1: Via WP-CLI (recommended)
cd docker
docker-compose exec wordpress wp plugin install wpgraphql --activate
docker-compose exec wordpress wp plugin install wp-graphql-acf --activate
docker-compose exec wordpress wp plugin install advanced-custom-fields --activate
docker-compose exec wordpress wp plugin install polylang --activate

# Option 2: Via WordPress admin
# Go to Plugins > Add New and search for each plugin
```

**Required plugins:**
- WPGraphQL
- WPGraphQL for ACF
- Advanced Custom Fields (ACF)
- Polylang

### 7. Configure WordPress Permalinks

```bash
# Via WP-CLI
docker-compose exec wordpress wp rewrite structure '/%postname%/'

# OR via admin:
# Settings > Permalinks > Select "Post name" > Save
```

### 8. Verify GraphQL Endpoint

Visit: http://localhost:8080/graphql

You should see the GraphQL IDE (GraphiQL).

### 9. Verify Full Stack Setup Complete

Your full-stack headless WordPress application is now operational!

Visit http://localhost to see your Next.js frontend powered by WordPress backend.

## Access Your Services

Once everything is running:

| Service | URL | Purpose | Status |
|---------|-----|---------|--------|
| Next.js Frontend (via Nginx) | http://localhost | Website frontend (proxied) | Active |
| Next.js Frontend (direct) | http://localhost:3001 | Website frontend (direct) | Active |
| WordPress | http://localhost:8080 | Headless CMS | Active |
| WordPress Admin | http://localhost:8080/wp-admin | Content management | Active |
| GraphQL API | http://localhost:8080/graphql | API endpoint | Active |
| phpMyAdmin | http://localhost:8081 | Database management | Active |

## Common Commands

### View Logs

```bash
# All services
./docker/scripts/logs.sh

# Specific service
./docker/scripts/logs.sh wordpress
./docker/scripts/logs.sh frontend
```

### Stop Environment

```bash
./docker/scripts/stop.sh
```

### Restart Environment

```bash
cd docker
docker-compose restart
```

### Backup Database

```bash
./docker/scripts/backup.sh
```

### Clean/Reset Everything

**⚠️ WARNING: This deletes all data!**

```bash
./docker/scripts/clean.sh
```

## Troubleshooting

### Ports Already in Use

If you get "port already in use" errors:

```bash
# Windows - Check what's using the port
netstat -ano | findstr :8080

# Linux/Mac
lsof -i :8080

# Kill the process or change ports in docker-compose.yml
```

### Services Won't Start

```bash
# Check Docker is running
docker --version
docker-compose --version

# View detailed logs
cd docker
docker-compose logs
```

### Database Connection Errors

```bash
# Wait for MySQL to fully start
docker-compose logs db

# Restart if needed
docker-compose restart db wordpress
```

### Permission Issues

```bash
# Fix WordPress file permissions
docker-compose exec wordpress chown -R www-data:www-data /var/www/html/wp-content
```

### Reset and Start Fresh

```bash
./docker/scripts/clean.sh
./docker/scripts/start.sh
```

## Next Steps

Once your backend environment is running:

1. **Configure Custom Post Types** - Create Services, Projects, Species, Software
2. **Set up ACF Fields** - Define custom fields for each post type
3. **Configure Polylang** - Set up EN/UA languages
4. **Create Navigation Menus** - Header and footer menus for both languages
5. **Add Sample Content** - Test data for development
6. **Test GraphQL Queries** - Ensure all data is accessible via GraphQL
7. **Develop Next.js Components** - Build pages and components for frontend

## Useful WP-CLI Commands

```bash
# List plugins
docker-compose exec wordpress wp plugin list

# List users
docker-compose exec wordpress wp user list

# Create new admin user
docker-compose exec wordpress wp user create john john@example.com --role=administrator

# Export database
docker-compose exec wordpress wp db export - > backup.sql

# Search and replace URLs
docker-compose exec wordpress wp search-replace 'http://old-url.com' 'http://new-url.com'
```

## Environment Files

- **`.env`** - Your local configuration (never commit!)
- **`.env.example`** - Template with all available options
- **`docker-compose.yml`** - Main Docker configuration
- **`docker-compose.override.yml`** - Development-specific settings

## Getting Help

- Check `docker/README.md` for detailed documentation
- View logs with `./docker/scripts/logs.sh`
- Join the ISS AI Automation School community
- Review the technical-assignment-claude-code.md

## Production Deployment

For production deployment, see:
- `docker/README.md` - Production section
- Update `.env` with production URLs
- Enable SSL/HTTPS
- Set `WORDPRESS_DEBUG=0`

---

**Ready to develop?** All services should now be running! Start building your Next.js frontend and WordPress backend.

**Questions?** Check `docker/README.md` for comprehensive documentation.
