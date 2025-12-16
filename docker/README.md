# Vismar Aqua - Docker Environment

This directory contains the Docker configuration for the Vismar Aqua headless WordPress + Next.js project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Services](#services)
- [Configuration](#configuration)
- [Helper Scripts](#helper-scripts)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [Production Deployment](#production-deployment)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Docker Desktop** (Windows/Mac) or **Docker Engine** (Linux)
  - Version 20.10.0 or higher
  - [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Docker Compose** (usually included with Docker Desktop)
  - Version 2.0.0 or higher
- **Git** (for version control)
- **Node.js 20+** (for local Next.js development, optional)

### System Requirements

- **RAM:** 8GB minimum, 16GB recommended
- **Disk Space:** 20GB free space
- **OS:** Windows 10/11, macOS 10.15+, or Linux

## Quick Start

### 1. Initial Setup

```bash
# Navigate to the project root
cd /mnt/g/www/vismar-aqua-wp-headless

# Copy environment template
cp .env.example .env

# Edit .env and update values (especially passwords!)
nano .env  # or use your preferred editor
```

### 2. Start the Environment

```bash
# Using the helper script (recommended)
./docker/scripts/start.sh

# OR manually
cd docker
docker-compose up -d
```

### 3. Access Services

Once started, access the following services:

- **WordPress Admin:** http://localhost:8080/wp-admin
- **phpMyAdmin:** http://localhost:8081
- **Next.js Frontend:** http://localhost:3000
- **Nginx Proxy:** http://localhost

### 4. Complete WordPress Installation

1. Visit http://localhost:8080
2. Follow the WordPress installation wizard
3. Create your admin account
4. Install required plugins (see [WordPress Setup](#wordpress-setup))

## Services

The Docker environment includes the following services:

### WordPress (Port 8080)

- **Image:** wordpress:6.4-apache
- **Purpose:** Headless CMS backend
- **Access:** http://localhost:8080
- **Admin:** http://localhost:8080/wp-admin
- **GraphQL:** http://localhost:8080/graphql (after WPGraphQL plugin installed)

### MySQL Database (Port 3306)

- **Image:** mysql:8.0
- **Purpose:** WordPress database
- **Port:** 3306 (accessible for external tools)
- **Credentials:** Set in `.env` file

### phpMyAdmin (Port 8081)

- **Image:** phpmyadmin:latest
- **Purpose:** Database management interface
- **Access:** http://localhost:8081
- **Login:** Use root credentials from `.env`

### Next.js Frontend (Port 3000)

- **Image:** Custom (Node 20 Alpine)
- **Purpose:** Frontend application
- **Access:** http://localhost:3000
- **Hot Reload:** Enabled in development mode

### Nginx Reverse Proxy (Port 80)

- **Image:** nginx:alpine
- **Purpose:** Unified proxy for all services
- **Access:** http://localhost
- **Routes:**
  - `/wp-admin` → WordPress
  - `/graphql` → WordPress GraphQL
  - `/wp-json` → WordPress REST API
  - Everything else → Next.js

## Configuration

### Environment Variables

All configuration is managed through the `.env` file in the project root.

**Key variables:**

```env
# Database
MYSQL_ROOT_PASSWORD=your_secure_password
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=your_secure_password

# WordPress
WP_HOME=http://localhost:8080
WP_SITEURL=http://localhost:8080

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WORDPRESS_GRAPHQL_URL=http://wordpress/graphql
```

See `.env.example` for all available options.

### WordPress Setup

After initial installation, install these required plugins:

1. **WPGraphQL** - GraphQL API
2. **WPGraphQL for ACF** - Expose ACF fields to GraphQL
3. **Advanced Custom Fields (ACF)** - Custom fields
4. **Polylang** - Multilingual support (EN/UA)
5. **Custom Post Types UI** - Or create custom plugin

**Installation via WP-CLI:**

```bash
docker-compose exec wordpress wp plugin install wpgraphql --activate
docker-compose exec wordpress wp plugin install wp-graphql-acf --activate
docker-compose exec wordpress wp plugin install advanced-custom-fields --activate
docker-compose exec wordpress wp plugin install polylang --activate
```

### Permalinks Configuration

Set permalinks to "Post name" for clean URLs:

```bash
docker-compose exec wordpress wp rewrite structure '/%postname%/'
docker-compose exec wordpress wp rewrite flush
```

## Helper Scripts

Located in `docker/scripts/`:

### start.sh

Start the entire environment:

```bash
./docker/scripts/start.sh
```

### stop.sh

Stop all services:

```bash
./docker/scripts/stop.sh
```

### logs.sh

View logs for all or specific services:

```bash
# All services
./docker/scripts/logs.sh

# Specific service
./docker/scripts/logs.sh wordpress
./docker/scripts/logs.sh frontend
./docker/scripts/logs.sh db
```

### backup.sh

Create backup of database and uploads:

```bash
./docker/scripts/backup.sh
```

Backups are saved to `backups/` directory.

### clean.sh

**⚠️ WARNING:** Removes all data (database, volumes):

```bash
./docker/scripts/clean.sh
```

## Common Tasks

### Restart a Specific Service

```bash
cd docker
docker-compose restart wordpress
docker-compose restart frontend
```

### View Container Status

```bash
cd docker
docker-compose ps
```

### Execute Commands in Containers

**WordPress (WP-CLI):**

```bash
docker-compose exec wordpress wp --info
docker-compose exec wordpress wp plugin list
docker-compose exec wordpress wp user list
```

**MySQL:**

```bash
docker-compose exec db mysql -u root -p
```

**Next.js:**

```bash
docker-compose exec frontend npm install
docker-compose exec frontend npm run build
```

### Access Container Shell

**WordPress:**

```bash
docker-compose exec wordpress bash
```

**Frontend:**

```bash
docker-compose exec frontend sh
```

### Import Database Backup

```bash
# From SQL file
docker-compose exec -T db mysql -u wordpress -pwordpress wordpress < backup.sql

# From gzipped file
gunzip < backup.sql.gz | docker-compose exec -T db mysql -u wordpress -pwordpress wordpress
```

### Update Docker Images

```bash
cd docker
docker-compose pull
docker-compose up -d --build
```

## Troubleshooting

### Services Won't Start

**Check if ports are in use:**

```bash
# Windows
netstat -ano | findstr :8080
netstat -ano | findstr :3000
netstat -ano | findstr :3306

# Linux/Mac
lsof -i :8080
lsof -i :3000
lsof -i :3306
```

**Solution:** Stop conflicting services or change ports in `docker-compose.yml`.

### WordPress Installation Loop

If WordPress keeps asking to install:

```bash
docker-compose down -v
docker-compose up -d
```

This removes volumes and starts fresh.

### Permission Issues

If you encounter permission errors with wp-content:

```bash
# Fix ownership
docker-compose exec wordpress chown -R www-data:www-data /var/www/html/wp-content
```

### Database Connection Errors

Check database is healthy:

```bash
docker-compose ps db
docker-compose logs db
```

Verify credentials in `.env` match docker-compose.yml.

### Frontend Won't Connect to WordPress

Ensure WordPress GraphQL plugin is installed and activated:

```bash
docker-compose exec wordpress wp plugin list
```

Check GraphQL endpoint:

```bash
curl http://localhost:8080/graphql
```

### Container Keeps Restarting

View logs to see the error:

```bash
docker-compose logs -f [service-name]
```

### Reset Everything

If all else fails, clean reset:

```bash
./docker/scripts/clean.sh
./docker/scripts/start.sh
```

## Production Deployment

### Production Docker Compose

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  wordpress:
    environment:
      WORDPRESS_DEBUG: 0
      WP_HOME: https://vismar-aqua.com
      WP_SITEURL: https://vismar-aqua.com

  frontend:
    build:
      target: production
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_SITE_URL: https://vismar-aqua.com

  nginx:
    ports:
      - "443:443"
    volumes:
      - ./nginx/nginx.prod.conf:/etc/nginx/nginx.conf:ro
      - /etc/letsencrypt:/etc/letsencrypt:ro
```

### SSL/HTTPS Setup

Use Let's Encrypt with Certbot:

```bash
# Install certbot
sudo apt-get install certbot

# Get SSL certificate
sudo certbot certonly --standalone -d vismar-aqua.com -d www.vismar-aqua.com
```

Update nginx configuration for HTTPS.

### Environment Variables

Never commit production `.env` to version control. Use secure methods:

- Docker secrets
- Environment variable management tools
- Server-side configuration

### Security Checklist

- [ ] Change all default passwords
- [ ] Set `WORDPRESS_DEBUG=0`
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall rules
- [ ] Set up automated backups
- [ ] Enable WordPress security plugins
- [ ] Restrict database access
- [ ] Use strong authentication

### Monitoring

Set up monitoring for:

- Container health
- Resource usage (CPU, RAM, Disk)
- Database performance
- Application errors
- Uptime

Tools: Docker Stats, Prometheus, Grafana, New Relic, etc.

## Additional Resources

- [WordPress Documentation](https://wordpress.org/documentation/)
- [WPGraphQL Docs](https://www.wpgraphql.com/docs/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Polylang Documentation](https://polylang.pro/doc/)

## Support

For issues or questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review Docker logs
3. Consult the technical assignment documentation
4. Contact the development team

---

**Last Updated:** 2025-11-14
**Version:** 1.0
