# Vismar Aqua - SSH Deployment Guide

Complete guide to deploy the Vismar Aqua headless WordPress + Next.js application to a dedicated server via SSH.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Server Setup](#server-setup)
3. [Database Setup](#database-setup)
4. [Application Deployment](#application-deployment)
5. [SSL/HTTPS Configuration](#ssltls-configuration)
6. [Verification](#verification)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### On Your Local Machine
- SSH access to the dedicated server
- Database dump: `wordpress-production.sql` (6.6MB)
- WordPress content: `wordpress/wp-content/` directory
- Frontend code: Pushed to GitHub at `ailubes/vismar-wp-headless`

### On the Dedicated Server
- Ubuntu 20.04 LTS or later (or similar Linux distribution)
- Docker and Docker Compose installed
- Git installed
- Sufficient disk space (at least 10GB)
- Port access: 80, 443, 3000, 8080

---

## Server Setup

### 1. SSH into Your Dedicated Server
```bash
ssh user@your-production-domain.com
```

### 2. Clone the Repository
```bash
cd /var/www
git clone https://github.com/ailubes/vismar-wp-headless.git vismar-aqua
cd vismar-aqua
```

### 3. Create Production Environment File
```bash
cp .env.example .env
```

Edit `.env` with your production settings:
```bash
nano .env
```

**Critical production settings to update:**

```env
# MYSQL DATABASE
MYSQL_ROOT_PASSWORD=<GENERATE_STRONG_PASSWORD>
WORDPRESS_DB_PASSWORD=<GENERATE_STRONG_PASSWORD>

# WORDPRESS URLS (CHANGE THESE!)
WP_HOME=https://vismar-aqua.com
WP_SITEURL=https://vismar-aqua.com

# NEXT.JS URLS (CHANGE THESE!)
NEXT_PUBLIC_SITE_URL=https://vismar-aqua.com
NEXT_PUBLIC_WP_URL=https://vismar-aqua.com
NEXT_PUBLIC_GRAPHQL_URL=https://vismar-aqua.com/graphql

# DISABLE DEBUG IN PRODUCTION
WORDPRESS_DEBUG=0

# FRONTEND URLs
WORDPRESS_API_URL=http://wordpress/graphql
NEXT_PUBLIC_SITE_URL=https://vismar-aqua.com

# SECURITY
NEXTAUTH_SECRET=<GENERATE_RANDOM_SECRET>
WP_APPLICATION_PASSWORD=<GENERATE_STRONG_PASSWORD>

# EMAIL (Update with your SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@vismar-aqua.com
SMTP_PASSWORD=<YOUR_EMAIL_PASSWORD>
```

### 4. Make .env Secure
```bash
chmod 600 .env
```

---

## Database Setup

### 1. Transfer Database Dump to Server

**From your local machine:**
```bash
scp wordpress-production.sql user@your-production-domain.com:/var/www/vismar-aqua/
```

### 2. Start MySQL Container (if not running)
```bash
cd /var/www/vismar-aqua
docker-compose up -d db
```

Wait 30 seconds for MySQL to start.

### 3. Import Database
```bash
docker exec vismar-mysql mysql -u root -p${MYSQL_ROOT_PASSWORD} wordpress < wordpress-production.sql
```

**Verify import:**
```bash
docker exec vismar-mysql mysql -u root -p${MYSQL_ROOT_PASSWORD} -e "SELECT COUNT(*) as post_count FROM wordpress.wp_posts;"
```

---

## Application Deployment

### 1. Build and Start All Services
```bash
cd /var/www/vismar-aqua

# Pull latest frontend code
git pull origin master

# Build and start all containers
docker-compose up --build -d
```

### 2. Verify Services Are Running
```bash
docker ps
```

Expected containers:
- `vismar-wordpress` (port 8080)
- `vismar-mysql` (port 3306)
- `vismar-frontend` (port 3001)
- `vismar-nginx` (port 80)
- `vismar-phpmyadmin` (port 8081)

### 3. Check Logs for Errors
```bash
# WordPress logs
docker logs vismar-wordpress

# Frontend logs
docker logs vismar-frontend

# MySQL logs
docker logs vismar-mysql
```

### 4. Verify WordPress GraphQL
```bash
curl -X POST https://vismar-aqua.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ posts(first: 5) { nodes { id title } } }"}'
```

Should return JSON with posts.

---

## SSL/TLS Configuration

### 1. Install Certbot
```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx -y
```

### 2. Generate SSL Certificate
```bash
sudo certbot certonly --standalone -d vismar-aqua.com -d www.vismar-aqua.com
```

### 3. Update Nginx Configuration
Edit `docker/nginx/nginx.conf`:

```nginx
server {
    listen 443 ssl http2;
    server_name vismar-aqua.com www.vismar-aqua.com;

    ssl_certificate /etc/letsencrypt/live/vismar-aqua.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vismar-aqua.com/privkey.pem;

    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://frontend:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /wp-admin {
        proxy_pass http://wordpress:80;
        proxy_set_header Host $host;
    }

    location /graphql {
        proxy_pass http://wordpress:80/graphql;
        proxy_set_header Host $host;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name vismar-aqua.com www.vismar-aqua.com;
    return 301 https://$server_name$request_uri;
}
```

### 4. Mount SSL Certificates in Docker
Update `docker-compose.yml`:

```yaml
nginx:
  volumes:
    - /etc/letsencrypt:/etc/letsencrypt:ro
    - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
```

### 5. Restart Nginx
```bash
docker-compose restart nginx
```

---

## Verification

### 1. Test Frontend
```bash
curl https://vismar-aqua.com
```

Should return HTML of the site.

### 2. Test WordPress API
```bash
curl https://vismar-aqua.com/graphql -X POST \
  -H "Content-Type: application/json" \
  -d '{"query":"{ posts(first: 1) { nodes { title } } }"}'
```

Should return post data.

### 3. Access WordPress Admin
Navigate to: `https://vismar-aqua.com/wp-admin`

Login with credentials from `.env`:
- Username: `admin`
- Password: `<WORDPRESS_ADMIN_PASSWORD>`

### 4. Check Frontend URL
Navigate to: `https://vismar-aqua.com`

Should see the homepage with:
- Header with navigation
- Hero section
- Blog posts from database
- Footer with Ukrainian office info

---

## Backup & Maintenance

### Daily Database Backup
Create `/usr/local/bin/backup-wordpress.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/backups/wordpress"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/wordpress_$DATE.sql"

mkdir -p $BACKUP_DIR

docker exec vismar-mysql mysqldump -u root -p${MYSQL_ROOT_PASSWORD} wordpress > $BACKUP_FILE

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete

echo "Backup completed: $BACKUP_FILE"
```

Make executable and add to crontab:
```bash
chmod +x /usr/local/bin/backup-wordpress.sh

# Edit crontab
crontab -e

# Add: Daily backup at 2 AM
0 2 * * * /usr/local/bin/backup-wordpress.sh
```

### Update Frontend Code
```bash
cd /var/www/vismar-aqua
git pull origin master
docker-compose restart frontend
```

---

## Troubleshooting

### Posts Not Showing in Dashboard

**Issue:** WordPress admin shows no posts/pages

**Solution:**
1. Verify database import succeeded:
   ```bash
   docker exec vismar-mysql mysql -u root -p${MYSQL_ROOT_PASSWORD} wordpress -e "SELECT COUNT(*) FROM wp_posts WHERE post_type='post';"
   ```

2. Check post status filter in wp-admin (should be "All", not "Draft")

3. Verify GraphQL endpoint returns posts:
   ```bash
   curl https://vismar-aqua.com/graphql -X POST -d '{"query":"{ posts(first: 5) { nodes { title } } }"}'
   ```

### SSL Certificate Issues

**Issue:** "Not secure" warning or SSL errors

**Solution:**
```bash
# Verify certificate
sudo certbot certificates

# Renew if needed
sudo certbot renew --dry-run

# Restart nginx
docker-compose restart nginx
```

### Frontend/WordPress Not Communicating

**Issue:** Frontend shows "Failed to fetch posts"

**Solution:**
1. Verify WordPress container is running:
   ```bash
   docker logs vismar-wordpress
   ```

2. Check GraphQL URL in frontend `.env`:
   ```bash
   echo $NEXT_PUBLIC_GRAPHQL_URL
   ```

3. Verify CORS headers in WordPress `.env`:
   ```env
   WP_HOME=https://vismar-aqua.com
   ```

### Database Connection Error

**Issue:** "Error establishing database connection"

**Solution:**
```bash
# Check MySQL container
docker logs vismar-mysql

# Verify credentials in .env
grep MYSQL_ .env

# Restart MySQL
docker-compose restart db
```

---

## Security Checklist

- [ ] Change all default passwords in `.env`
- [ ] Enable SSL/HTTPS
- [ ] Set `WORDPRESS_DEBUG=0`
- [ ] Disable XML-RPC in WordPress
- [ ] Set up regular backups
- [ ] Enable two-factor authentication for WordPress admin
- [ ] Configure firewall to allow only necessary ports
- [ ] Set up monitoring and alerts
- [ ] Enable WordPress security plugins (e.g., Wordfence)
- [ ] Keep Docker images updated

---

## Support

For issues, check:
1. Container logs: `docker logs <container_name>`
2. Database access: `http://your-domain:8081` (phpMyAdmin)
3. GraphQL playground: `http://your-domain:8080/graphql`

