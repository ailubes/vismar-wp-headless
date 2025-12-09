# Deployment Guide - Vismar Aqua Headless WordPress Project

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Development Setup](#local-development-setup)
4. [WordPress Configuration](#wordpress-configuration)
5. [Production Deployment Options](#production-deployment-options)
6. [Environment Variables for Production](#environment-variables-for-production)
7. [Build and Optimization](#build-and-optimization)
8. [Troubleshooting](#troubleshooting)
9. [Maintenance](#maintenance)
10. [Key Features Documentation](#key-features-documentation)

---

## Project Overview

### Architecture

This is a modern headless WordPress project that separates the content management backend (WordPress) from the presentation layer (Next.js frontend). This architecture provides:

- **Better Performance**: Static generation and SSR capabilities with Next.js
- **Enhanced Security**: WordPress admin is isolated from the public frontend
- **Scalability**: Frontend and backend can be scaled independently
- **Modern DX**: React/TypeScript for the frontend, GraphQL for data fetching

**Architecture Diagram:**
```
┌─────────────────┐          ┌─────────────────┐
│   WordPress     │          │    Next.js      │
│   (Backend)     │◄────────►│   (Frontend)    │
│                 │          │                 │
│  - Content CMS  │  GraphQL │  - App Router   │
│  - WPGraphQL    │  Queries │  - SSR/SSG      │
│  - Polylang     │          │  - next-intl    │
│  - ACF          │          │  - Tailwind CSS │
└─────────────────┘          └─────────────────┘
        │                             │
        ▼                             ▼
    MySQL 8.0                    User Browsers
```

### Tech Stack

**Frontend (Next.js):**
- **Next.js 14.2.18** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.6.3** - Type safety
- **Apollo Client 3.11.8** - GraphQL client
- **next-intl 3.23.5** - Internationalization (i18n)
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Lucide React** - Icon library

**Backend (WordPress):**
- **WordPress 6.4+** - Content management system
- **WPGraphQL** - GraphQL API for WordPress
- **Polylang** - Multilingual support
- **Advanced Custom Fields (ACF)** - Custom content fields

**Infrastructure:**
- **MySQL 8.0** - Database
- **Docker** - Containerization
- **Node.js 20+** - JavaScript runtime

### Key Features

- **Multilingual Support**: English (EN) and Ukrainian (UK) with Polylang + next-intl
- **Blog Pagination**: 12 posts per page with path-based routing (`/blog/page/2`)
- **Language Filtering**: GraphQL queries filtered by language code
- **Custom Post Types**: Projects, Services, Software Solutions, Species
- **Image Optimization**: Next.js Image component with WordPress media
- **SEO Optimized**: Dynamic metadata, sitemaps, robots.txt
- **Type Safety**: Full TypeScript implementation
- **Modern Routing**: Next.js App Router with async server components

---

## Prerequisites

### Required Software

1. **Node.js**: Version 20.0.0 or higher
   ```bash
   node --version  # Should be >= 20.0.0
   ```

2. **npm**: Version 10.0.0 or higher
   ```bash
   npm --version  # Should be >= 10.0.0
   ```

3. **Git**: For version control
   ```bash
   git --version
   ```

4. **Docker & Docker Compose** (for local development):
   - Docker Desktop (Windows/Mac) or Docker Engine (Linux)
   - Docker Compose v2.0+
   - Minimum 8GB RAM (16GB recommended)
   - 20GB free disk space

### WordPress Backend Requirements

Your WordPress instance must have:

- **WPGraphQL Plugin** (v1.14.0+) - Exposes WordPress data via GraphQL
- **Polylang Plugin** (v3.4+) - Multilingual content management
- **WPGraphQL Polylang Extension** - Integrates Polylang with WPGraphQL
- **Advanced Custom Fields (ACF)** - Optional but recommended for custom fields
- **PHP 8.0+** - Required for WPGraphQL
- **WordPress 6.0+** - Latest stable version recommended

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-org/vismar-aqua-wp-headless.git
cd vismar-aqua-wp-headless
```

### Step 2: Environment Configuration

#### Root Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and update the following critical values:

```bash
# General Settings
NODE_ENV=development
PROJECT_NAME=vismar-aqua

# MySQL Database Configuration
MYSQL_ROOT_PASSWORD=your_secure_root_password
WORDPRESS_DB_NAME=wordpress
WORDPRESS_DB_USER=wordpress
WORDPRESS_DB_PASSWORD=your_secure_db_password

# WordPress Configuration
WORDPRESS_DEBUG=1
WP_HOME=http://localhost:8080
WP_SITEURL=http://localhost:8080

# WordPress API Endpoints (Docker internal)
WORDPRESS_API_URL=http://wordpress
WORDPRESS_GRAPHQL_URL=http://wordpress/graphql

# Next.js Frontend Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WP_URL=http://localhost:8080
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:8080/graphql

# Internationalization
NEXT_PUBLIC_DEFAULT_LOCALE=uk
NEXT_PUBLIC_LOCALES=en,uk
```

#### Frontend Environment Variables

Navigate to the frontend directory:

```bash
cd frontend
cp .env.local.example .env.local
```

Edit `frontend/.env.local`:

```bash
# WordPress GraphQL API URL
WORDPRESS_API_URL=http://localhost:8080/graphql

# Next.js URL (for revalidation, etc.)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# WordPress Preview Secret (optional - for draft preview)
# WORDPRESS_PREVIEW_SECRET=your-secret-key-here
```

**Important Notes:**
- For Docker: Use `http://wordpress/graphql` for internal container communication
- For local dev outside Docker: Use `http://localhost:8080/graphql`
- Never commit `.env` or `.env.local` files to version control

### Step 3: Start Docker Environment

From the project root:

```bash
# Make scripts executable (Linux/Mac)
chmod +x docker/scripts/*.sh

# Start all services
./docker/scripts/start.sh
```

Or manually:

```bash
cd docker
docker-compose up -d
```

This will start:
- **WordPress**: http://localhost:8080
- **MySQL**: Port 3306
- **phpMyAdmin**: http://localhost:8081
- **Next.js**: http://localhost:3001 (or 3000 if running locally)

**Wait for services to be healthy** (check with `docker-compose ps`).

### Step 4: Configure WordPress

1. **Access WordPress Admin**:
   - URL: http://localhost:8080/wp-admin
   - Complete the installation wizard
   - Set admin credentials (save these securely!)

2. **Install Required Plugins**:
   ```bash
   # Via WP-CLI in Docker
   docker-compose exec wordpress wp plugin install wp-graphql --activate
   docker-compose exec wordpress wp plugin install polylang --activate
   docker-compose exec wordpress wp plugin install wp-graphql-polylang --activate
   ```

   Or install manually via WordPress admin.

3. **Configure Polylang**:
   - Go to **Languages** in WordPress admin
   - Add languages: English (en_US) and Ukrainian (uk)
   - Set default language to Ukrainian (UK)
   - Enable **"The language is set from content"** option

4. **Verify GraphQL Endpoint**:
   - Visit: http://localhost:8080/graphql
   - You should see the GraphiQL IDE

### Step 5: Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Step 6: Run Development Server

#### Option A: Docker (Recommended for full stack)

Already running if you used `docker-compose up -d`.

Access at: http://localhost:3001

#### Option B: Local Node.js (Recommended for frontend development)

```bash
cd frontend
npm run dev
```

Access at: http://localhost:3000

**This is better for frontend development** as it provides:
- Faster hot module replacement (HMR)
- Better debugging
- Easier log access

### Step 7: Verify Setup

Visit these URLs to confirm everything works:

- **Frontend Homepage**: http://localhost:3000/uk (or /en)
- **Blog Page**: http://localhost:3000/uk/blog
- **Blog Pagination**: http://localhost:3000/uk/blog/page/2
- **WordPress Admin**: http://localhost:8080/wp-admin
- **GraphQL IDE**: http://localhost:8080/graphql

### Common Development Commands

```bash
# Frontend commands (run from /frontend directory)
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run validate:translations  # Validate translation files

# Docker commands (run from /docker directory)
docker-compose up -d           # Start all services
docker-compose down            # Stop all services
docker-compose logs -f         # View logs (all services)
docker-compose logs -f frontend  # View frontend logs only
docker-compose restart frontend  # Restart frontend service
docker-compose exec wordpress bash  # Access WordPress container
docker-compose exec wordpress wp plugin list  # WP-CLI commands

# Helper scripts (run from project root)
./docker/scripts/start.sh   # Start environment
./docker/scripts/stop.sh    # Stop environment
./docker/scripts/logs.sh    # View logs
./docker/scripts/backup.sh  # Backup database
./docker/scripts/clean.sh   # Clean/reset (WARNING: destructive!)
```

---

## WordPress Configuration

### Required Plugins

1. **WPGraphQL** (v1.14.0+)
   - **Purpose**: Exposes WordPress data via GraphQL API
   - **Installation**:
     ```bash
     docker-compose exec wordpress wp plugin install wp-graphql --activate
     ```
   - **Configuration**: No additional configuration needed

2. **Polylang** (v3.4+)
   - **Purpose**: Multilingual content management
   - **Installation**:
     ```bash
     docker-compose exec wordpress wp plugin install polylang --activate
     ```
   - **Configuration**:
     - Add languages: English (en_US) and Ukrainian (uk)
     - Set default language to Ukrainian
     - Configure language switcher behavior
     - Translate all posts, pages, and custom post types

3. **WPGraphQL Polylang Extension**
   - **Purpose**: Adds language filtering to GraphQL queries
   - **Installation**: Manual installation (included in `wordpress/wp-content/plugins/`)
   - **Configuration**: Works automatically once both WPGraphQL and Polylang are active

4. **Advanced Custom Fields (ACF)** - Optional
   - **Purpose**: Custom fields for Projects, Services, etc.
   - **Installation**:
     ```bash
     docker-compose exec wordpress wp plugin install advanced-custom-fields --activate
     ```

### GraphQL Endpoint Setup

The GraphQL endpoint is automatically available at:

```
http://your-domain.com/graphql
```

**Test the endpoint**:

```bash
curl -X POST http://localhost:8080/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ generalSettings { title } }"}'
```

**Expected response**:
```json
{
  "data": {
    "generalSettings": {
      "title": "Your Site Title"
    }
  }
}
```

### CORS Configuration

For production, you may need to configure CORS to allow the frontend domain to access the WordPress GraphQL API.

Add to `wp-config.php`:

```php
// Allow CORS for GraphQL (adjust domain as needed)
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
```

**Better approach for production**: Use the **WPGraphQL CORS** plugin or configure Nginx/Apache to handle CORS headers.

### Content Structure Requirements

For the frontend to work correctly, ensure:

1. **Languages Configured**:
   - English (EN) with language code `en_US`
   - Ukrainian (UK) with language code `uk`

2. **Blog Posts**:
   - Create at least 12 blog posts in each language for pagination testing
   - Assign featured images
   - Categorize posts

3. **Pages**:
   - Create translations for all pages (About, Contact, etc.)
   - Link translations in Polylang

4. **Custom Post Types** (if using):
   - Projects: Translate and configure ACF fields
   - Services: Translate service details
   - Software Solutions: Translate features

5. **Menus**:
   - Create menus for each language
   - Assign menu locations

### Performance Optimization

In production WordPress, enable:

1. **Object Caching** (Redis/Memcached):
   ```bash
   docker-compose exec wordpress wp plugin install redis-cache --activate
   docker-compose exec wordpress wp redis enable
   ```

2. **GraphQL Query Depth Limit**:
   ```php
   // In wp-config.php
   define('GRAPHQL_QUERY_DEPTH_MAX', 15);
   ```

3. **Disable Unused Features**:
   ```php
   // Disable REST API if only using GraphQL
   add_filter('rest_authentication_errors', function() {
       return new WP_Error('rest_disabled', 'REST API is disabled', ['status' => 403]);
   });
   ```

---

## Production Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the easiest and most optimized platform for Next.js applications.

#### Prerequisites
- Vercel account (free tier available)
- Git repository (GitHub, GitLab, or Bitbucket)
- WordPress backend already deployed and accessible

#### Step-by-Step Deployment

1. **Push Code to Git Repository**:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project to Vercel**:
   - Visit https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Next.js

3. **Configure Build Settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install`

4. **Set Environment Variables**:

   In Vercel Dashboard → Settings → Environment Variables:

   ```bash
   # Required
   WORDPRESS_API_URL=https://your-wordpress-domain.com/graphql
   NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app

   # Optional
   WORDPRESS_PREVIEW_SECRET=your-secret-key
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

   **Important**: Use your production WordPress domain, not localhost!

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a URL like: `https://your-project.vercel.app`

6. **Custom Domain** (Optional):
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Vercel automatically provisions SSL certificates

7. **Verify Deployment**:
   - Visit your Vercel URL
   - Check all routes work: `/en`, `/uk`, `/blog`, `/blog/page/2`
   - Verify images load from WordPress
   - Test language switching

#### Vercel-Specific Optimizations

1. **Enable Edge Caching**:
   ```javascript
   // In next.config.js
   export const revalidate = 3600; // Revalidate every hour
   ```

2. **Set up Incremental Static Regeneration (ISR)**:
   ```typescript
   // In page.tsx
   export const revalidate = 3600; // Regenerate page every hour
   ```

3. **Configure Image Optimization**:
   - Vercel automatically optimizes Next.js images
   - Ensure WordPress images are accessible publicly
   - Update `next.config.js` image domains:
     ```javascript
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'your-wordpress-domain.com',
           pathname: '/wp-content/uploads/**',
         },
       ],
     }
     ```

#### Continuous Deployment

Vercel automatically redeploys when you push to Git:

```bash
git add .
git commit -m "Update feature"
git push origin main
# Vercel automatically starts deployment
```

### Option 2: Custom Server (Node.js)

Deploy Next.js on your own VPS or cloud server.

#### Prerequisites
- Ubuntu 22.04+ server with root access
- Domain name pointed to server IP
- 2GB+ RAM minimum

#### Installation Steps

1. **Install Node.js 20+**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   node --version  # Verify
   ```

2. **Install PM2 (Process Manager)**:
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone and Build**:
   ```bash
   cd /var/www
   git clone https://github.com/your-org/vismar-aqua-wp-headless.git
   cd vismar-aqua-wp-headless/frontend
   npm install
   npm run build
   ```

4. **Create `.env.production`**:
   ```bash
   WORDPRESS_API_URL=https://your-wordpress.com/graphql
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NODE_ENV=production
   ```

5. **Start with PM2**:
   ```bash
   pm2 start npm --name "vismar-frontend" -- start
   pm2 save
   pm2 startup  # Follow instructions to enable on boot
   ```

6. **Configure Nginx Reverse Proxy**:

   Create `/etc/nginx/sites-available/vismar-frontend`:

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable and restart:
   ```bash
   sudo ln -s /etc/nginx/sites-available/vismar-frontend /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **SSL with Let's Encrypt**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

8. **Verify Deployment**:
   ```bash
   pm2 status
   pm2 logs vismar-frontend
   curl http://localhost:3000
   ```

#### PM2 Management Commands

```bash
pm2 status                 # Check status
pm2 logs vismar-frontend   # View logs
pm2 restart vismar-frontend  # Restart app
pm2 stop vismar-frontend   # Stop app
pm2 delete vismar-frontend # Remove from PM2
pm2 monit                  # Monitor resources
```

### Option 3: Docker Production Deployment

Deploy both WordPress and Next.js using Docker Compose on a server.

#### Production `docker-compose.yml`

Create a production-specific compose file:

```yaml
version: '3.8'

services:
  wordpress:
    image: wordpress:6.4-apache
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_NAME: ${WORDPRESS_DB_NAME}
      WORDPRESS_DB_USER: ${WORDPRESS_DB_USER}
      WORDPRESS_DB_PASSWORD: ${WORDPRESS_DB_PASSWORD}
      WORDPRESS_DEBUG: 0
    volumes:
      - wordpress_data:/var/www/html
    networks:
      - app-network

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: ${WORDPRESS_DB_NAME}
      MYSQL_USER: ${WORDPRESS_DB_USER}
      MYSQL_PASSWORD: ${WORDPRESS_DB_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - app-network

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.production
    restart: always
    environment:
      NODE_ENV: production
      WORDPRESS_API_URL: http://wordpress/graphql
      NEXT_PUBLIC_SITE_URL: ${NEXT_PUBLIC_SITE_URL}
    depends_on:
      - wordpress
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
    depends_on:
      - wordpress
      - frontend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  wordpress_data:
  db_data:
```

#### Production Dockerfile for Frontend

Create `frontend/Dockerfile.production`:

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built app from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Note**: This requires `output: 'standalone'` in `next.config.js`.

#### Deployment

```bash
# On your server
cd /var/www/vismar-aqua-wp-headless
git pull origin main

# Create production .env file
nano .env

# Build and start
docker-compose -f docker-compose.production.yml up -d --build

# View logs
docker-compose -f docker-compose.production.yml logs -f
```

---

## Environment Variables for Production

### Required Variables

#### Frontend Environment Variables

Create `frontend/.env.production`:

```bash
# WordPress API (REQUIRED)
WORDPRESS_API_URL=https://your-wordpress-domain.com/graphql

# Site URL (REQUIRED)
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com

# Node Environment
NODE_ENV=production

# WordPress Preview (OPTIONAL - for draft preview)
WORDPRESS_PREVIEW_SECRET=generate-a-secure-random-string

# Analytics (OPTIONAL)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Image Optimization (OPTIONAL - Vercel handles this)
NEXT_IMAGE_DOMAINS=your-wordpress-domain.com
```

#### WordPress Environment Variables

In your WordPress `.env` or `wp-config.php`:

```bash
# Production URLs
WP_HOME=https://your-wordpress-domain.com
WP_SITEURL=https://your-wordpress-domain.com

# Disable Debug in Production
WORDPRESS_DEBUG=0
WP_DEBUG=false
WP_DEBUG_LOG=false
WP_DEBUG_DISPLAY=false

# Database
WORDPRESS_DB_NAME=production_db_name
WORDPRESS_DB_USER=production_db_user
WORDPRESS_DB_PASSWORD=strong_secure_password_here
WORDPRESS_DB_HOST=localhost

# Security Keys (generate at https://api.wordpress.org/secret-key/1.1/salt/)
AUTH_KEY=...
SECURE_AUTH_KEY=...
LOGGED_IN_KEY=...
NONCE_KEY=...
AUTH_SALT=...
SECURE_AUTH_SALT=...
LOGGED_IN_SALT=...
NONCE_SALT=...

# Security
DISALLOW_FILE_EDIT=true
FORCE_SSL_ADMIN=true

# Performance
WP_MEMORY_LIMIT=256M
WP_MAX_MEMORY_LIMIT=512M

# Caching (if using Redis)
WP_REDIS_HOST=127.0.0.1
WP_REDIS_PORT=6379
WP_CACHE=true
```

### Security Considerations

1. **Never commit `.env` files**:
   - Add to `.gitignore`
   - Use environment variable injection in CI/CD

2. **Generate Strong Secrets**:
   ```bash
   # Generate random string for secrets
   openssl rand -base64 32
   ```

3. **Use Different Credentials Per Environment**:
   - Development, staging, and production should have unique passwords
   - Never use the same database password across environments

4. **Restrict CORS Origins**:
   ```javascript
   // Only allow your frontend domain
   const allowedOrigins = ['https://your-production-domain.com'];
   ```

5. **Enable HTTPS Everywhere**:
   - Force SSL in WordPress: `define('FORCE_SSL_ADMIN', true);`
   - Use HTTPS URLs in all environment variables

### Environment Variable Checklist

Before deploying to production, verify:

- [ ] `WORDPRESS_API_URL` points to production WordPress
- [ ] `NEXT_PUBLIC_SITE_URL` is correct production domain
- [ ] All WordPress security salts are unique and strong
- [ ] Database credentials are secure and different from dev
- [ ] `NODE_ENV=production` is set
- [ ] Debug mode is disabled (`WORDPRESS_DEBUG=0`)
- [ ] HTTPS is enforced (`FORCE_SSL_ADMIN=true`)
- [ ] Analytics IDs are configured (if using)
- [ ] Preview secrets are set (if using draft preview)

---

## Build and Optimization

### Production Build Process

#### 1. Build the Next.js Application

```bash
cd frontend
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Bundles and minifies code
- Generates static pages for SSG routes
- Optimizes images
- Creates production-ready `.next` folder

**Expected Output**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    137 B          87.3 kB
├ ƒ /[locale]/blog                       1.2 kB        88.5 kB
├ ƒ /[locale]/blog/page/[[...page]]      1.5 kB        88.8 kB
└ ○ /sitemap.xml                         0 B            0 B

Legend:
○ Static  - prerendered as static content
ƒ Dynamic - server-rendered on demand
```

#### 2. Start Production Server

```bash
npm run start
```

This starts the Next.js production server on port 3000.

### Image Optimization

#### WordPress Media Configuration

1. **Enable WebP Format** (optional but recommended):
   ```bash
   # Install WebP support in WordPress container
   docker-compose exec wordpress apt-get update
   docker-compose exec wordpress apt-get install -y webp
   ```

2. **Configure Image Sizes**:
   In WordPress `functions.php`:
   ```php
   // Add custom image sizes
   add_image_size('blog-card', 400, 300, true);
   add_image_size('project-hero', 1200, 600, true);
   add_image_size('thumbnail-large', 600, 600, true);
   ```

3. **Enable Image Lazy Loading**:
   Already implemented in Next.js Image component:
   ```tsx
   <Image
     src={imageUrl}
     alt={altText}
     width={400}
     height={300}
     loading="lazy"  // Automatic lazy loading
   />
   ```

#### Next.js Image Optimization

The project uses the `getOptimizedImageUrl` helper function:

```typescript
// lib/image-url.ts
export function getOptimizedImageUrl(url: string | undefined): string {
  if (!url) return '';

  // Rewrite localhost URLs for Docker environments
  if (typeof window === 'undefined' && url.includes('localhost:8080')) {
    return url.replace('localhost:8080', 'host.docker.internal:8080');
  }

  return url;
}
```

**Usage in components**:
```tsx
import { getOptimizedImageUrl } from '@/lib/image-url';

<Image
  src={getOptimizedImageUrl(post.featuredImage?.node?.sourceUrl)}
  alt={post.featuredImage?.node?.altText || ''}
  width={400}
  height={300}
/>
```

#### Image Domain Configuration

Update `next.config.js` for production:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-wordpress-domain.com',
      pathname: '/wp-content/uploads/**',
    },
  ],
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

### Static Generation vs Server-Side Rendering

#### Current Configuration

The project uses a **hybrid approach**:

1. **Static Pages** (pre-rendered at build time):
   - Homepage (`/[locale]`)
   - About page
   - Static content pages

2. **Server-Side Rendered Pages**:
   - Blog listing (`/[locale]/blog`)
   - Blog pagination (`/[locale]/blog/page/[num]`)
   - Individual blog posts (`/[locale]/blog/[slug]`)
   - Project pages
   - Service pages

#### Optimize for Static Generation

For better performance, enable ISR (Incremental Static Regeneration):

```typescript
// In any page.tsx file
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage({ params }: Props) {
  // Your page logic
}
```

**Benefits**:
- Pages are served as static HTML
- Regenerated in background every 3600 seconds (1 hour)
- Near-instant page loads
- Reduced server load

#### Dynamic Routes Generation

For dynamic routes (e.g., blog posts), use `generateStaticParams`:

```typescript
// app/[locale]/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const client = getClient();

  // Fetch all blog post slugs for both languages
  const { data } = await client.query({
    query: GET_ALL_POSTS,
    variables: { language: 'EN', first: 100 }
  });

  const posts = data.posts.nodes;

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
```

### Performance Best Practices

1. **Enable Compression in Nginx**:
   ```nginx
   gzip on;
   gzip_vary on;
   gzip_proxied any;
   gzip_comp_level 6;
   gzip_types text/plain text/css text/xml text/javascript
              application/json application/javascript application/xml+rss;
   ```

2. **Implement Caching Headers**:
   ```nginx
   location /_next/static/ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }

   location /static/ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

3. **Use CDN for Static Assets**:
   - Vercel automatically provides edge caching
   - For custom servers, use Cloudflare or similar CDN

4. **Optimize GraphQL Queries**:
   ```typescript
   // Only fetch fields you need
   query GetPosts {
     posts {
       nodes {
         id
         title
         excerpt  # Don't fetch full content for listings
         featuredImage {
           node {
             sourceUrl
             # Don't fetch full mediaDetails if not needed
           }
         }
       }
     }
   }
   ```

5. **Enable React Strict Mode** (already enabled):
   ```javascript
   // next.config.js
   reactStrictMode: true,
   ```

### Bundle Analysis

Analyze your bundle size:

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

Open the generated report to identify large dependencies.

---

## Troubleshooting

### Common Issues and Solutions

#### 1. GraphQL Connection Errors

**Symptom**: "Failed to fetch" or "Network error" when loading pages.

**Solutions**:

1. **Verify WordPress GraphQL endpoint**:
   ```bash
   curl http://localhost:8080/graphql
   ```
   Should return HTML (GraphiQL interface).

2. **Check environment variables**:
   ```bash
   # In frontend/.env.local
   echo $WORDPRESS_API_URL
   ```
   Should print the correct URL.

3. **Verify Polylang language codes**:
   - Go to WordPress Admin → Languages
   - Ensure codes are `EN` and `UK` (uppercase)
   - Match the codes used in GraphQL queries

4. **Enable GraphQL debugging**:
   ```typescript
   // lib/wordpress/client.ts
   const apolloClient = new ApolloClient({
     // ... other config
     defaultOptions: {
       query: {
         errorPolicy: 'all',  // Show all errors
       },
     },
   });
   ```

5. **Check CORS headers** (if WordPress and frontend on different domains):
   ```bash
   curl -I -X OPTIONS http://your-wordpress.com/graphql \
     -H "Origin: http://your-frontend.com"
   ```
   Should include `Access-Control-Allow-Origin` header.

#### 2. Images Not Loading

**Symptom**: Broken image icons or 404 errors for images.

**Solutions**:

1. **Verify image domain configuration**:
   ```javascript
   // next.config.js
   images: {
     remotePatterns: [
       {
         protocol: 'https',  // Change to 'http' for local dev
         hostname: 'your-wordpress-domain.com',
         pathname: '/wp-content/uploads/**',
       },
     ],
   }
   ```

2. **Check image URLs in console**:
   ```bash
   # View Next.js logs
   npm run dev
   ```
   Look for image optimization errors.

3. **Use `getOptimizedImageUrl` helper**:
   ```tsx
   import { getOptimizedImageUrl } from '@/lib/image-url';

   <Image src={getOptimizedImageUrl(imageUrl)} ... />
   ```

4. **Verify WordPress media files exist**:
   ```bash
   curl -I http://localhost:8080/wp-content/uploads/2024/01/image.jpg
   ```

5. **Docker-specific issue** - Use `host.docker.internal`:
   ```bash
   # In frontend/.env.local
   WORDPRESS_API_URL=http://host.docker.internal:8080/graphql
   ```

#### 3. Language Switching Issues

**Symptom**: Wrong content displayed or 404 when switching languages.

**Solutions**:

1. **Verify Polylang translations exist**:
   - In WordPress Admin, check each post/page has translations
   - Link translations in Polylang interface

2. **Check LanguageSwitcher component**:
   ```tsx
   // Should preserve current page path
   <a href={`/${otherLocale}${currentPath}`}>
     {otherLocale === 'en' ? 'English' : 'Українська'}
   </a>
   ```

3. **Verify language codes in queries**:
   ```typescript
   const languageCode = locale === 'en' ? 'EN' : 'UK';

   const { data } = await client.query({
     query: GET_ALL_POSTS,
     variables: { language: languageCode }  // Must be uppercase
   });
   ```

4. **Check next-intl configuration**:
   ```typescript
   // middleware.ts
   export default createMiddleware({
     locales: ['en', 'uk'],  // Must match your locales
     defaultLocale: 'uk',
   });
   ```

#### 4. 404 Errors on Blog Pagination

**Symptom**: `/blog/page/2` shows 404 error.

**Solutions**:

1. **Verify dynamic route structure**:
   ```
   app/[locale]/blog/page/[[...page]]/page.tsx
   ```
   The `[[...page]]` is an optional catch-all route.

2. **Check pagination logic**:
   ```typescript
   const pageNumber = pageParam?.[0];
   const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;

   // Validate page exists
   if (currentPage > totalPages && totalPages > 0) {
     notFound();  // Shows 404
   }
   ```

3. **Ensure sufficient blog posts**:
   - Need at least 13 posts for page 2 to exist (12 per page)
   - Check both languages have posts

4. **Verify URL structure**:
   ```
   /en/blog        → Page 1 (correct)
   /en/blog/page/2 → Page 2 (correct)
   /en/blog/2      → 404 (incorrect - should use /page/2)
   ```

5. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

#### 5. Build Errors

**Symptom**: `npm run build` fails with TypeScript or other errors.

**Solutions**:

1. **Type checking errors**:
   ```bash
   npm run type-check
   ```
   Fix all TypeScript errors before building.

2. **Missing environment variables**:
   ```bash
   # Ensure .env.production exists
   cat .env.production
   ```

3. **GraphQL query errors during build**:
   - Verify WordPress is accessible during build
   - Check GraphQL queries return valid data
   - Use `fallback` data for build errors:
     ```typescript
     try {
       const { data } = await client.query({ ... });
     } catch (error) {
       console.error('Build-time GraphQL error:', error);
       return { posts: [] };  // Fallback
     }
     ```

4. **Out of memory errors**:
   ```bash
   # Increase Node.js memory
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

5. **Dependency conflicts**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Cache Clearing

#### Next.js Cache

```bash
# Development
rm -rf .next
npm run dev

# Production
rm -rf .next
npm run build
```

#### WordPress Cache

If using caching plugin (Redis, WP Super Cache, etc.):

```bash
# Via WP-CLI
docker-compose exec wordpress wp cache flush

# Via Redis CLI
docker-compose exec redis redis-cli FLUSHALL
```

#### Browser Cache

Clear browser cache or use incognito mode for testing.

### GraphQL Query Debugging

#### Using GraphiQL IDE

1. Visit: http://localhost:8080/graphql
2. Test queries directly:
   ```graphql
   query TestQuery {
     posts(where: { language: EN }, first: 10) {
       nodes {
         id
         title
         language {
           code
         }
       }
     }
   }
   ```

#### Enable Apollo Client DevTools

```typescript
// lib/wordpress/client.ts
const apolloClient = new ApolloClient({
  // ... config
  connectToDevTools: process.env.NODE_ENV === 'development',
});
```

Then use [Apollo Client DevTools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm) browser extension.

#### Log GraphQL Responses

```typescript
const { data } = await client.query({
  query: GET_ALL_POSTS,
  variables: { language: languageCode },
});

console.log('GraphQL Response:', JSON.stringify(data, null, 2));
```

### Docker Issues

#### Container Won't Start

```bash
# Check logs
docker-compose logs wordpress
docker-compose logs frontend

# Restart services
docker-compose restart

# Rebuild from scratch
docker-compose down
docker-compose up -d --build
```

#### Port Conflicts

```bash
# Check what's using port 3000
lsof -i :3000
sudo kill -9 <PID>

# Or change port in docker-compose.yml
ports:
  - "3001:3000"  # Maps host 3001 to container 3000
```

#### Database Connection Errors

```bash
# Verify MySQL is healthy
docker-compose exec db mysql -u wordpress -pwordpress -e "SHOW DATABASES;"

# Reset database (WARNING: destructive!)
docker-compose down
docker volume rm vismar-db-data
docker-compose up -d
```

---

## Maintenance

### Updating Dependencies

#### Frontend Dependencies

```bash
cd frontend

# Check for outdated packages
npm outdated

# Update Next.js (use caution, test thoroughly)
npm install next@latest react@latest react-dom@latest

# Update all packages to latest (within semver range)
npm update

# Update specific package
npm install @apollo/client@latest

# Update all packages (including major versions - be careful!)
npm install -g npm-check-updates
ncu -u
npm install
```

**After updating, always**:
```bash
npm run type-check  # Check TypeScript
npm run lint        # Check linting
npm run build       # Test build
npm run dev         # Test in dev mode
```

#### WordPress Plugin Updates

```bash
# Via WP-CLI in Docker
docker-compose exec wordpress wp plugin list
docker-compose exec wordpress wp plugin update --all

# Or via WordPress Admin
# Dashboard → Plugins → Update Available
```

**Important**: Test on staging first, especially for:
- WPGraphQL updates
- Polylang updates
- ACF updates

### WordPress Plugin Updates

#### Critical Plugins to Monitor

1. **WPGraphQL**:
   - Breaking changes common between major versions
   - Always check [changelog](https://github.com/wp-graphql/wp-graphql/releases)
   - Test GraphQL queries after updating

2. **Polylang**:
   - Language code format may change
   - Verify language switching still works
   - Check translations are preserved

3. **Advanced Custom Fields**:
   - Field structure changes can break GraphQL queries
   - Export field groups before updating
   - Test all custom fields after update

#### Safe Update Process

1. **Backup Database**:
   ```bash
   ./docker/scripts/backup.sh
   ```

2. **Update on Staging First**:
   ```bash
   # On staging environment
   wp plugin update wp-graphql
   # Test thoroughly
   ```

3. **Test GraphQL Queries**:
   ```bash
   curl -X POST http://staging.com/graphql \
     -H "Content-Type: application/json" \
     -d '{"query": "{ posts(first: 5) { nodes { title } } }"}'
   ```

4. **Update Production** (only if staging passed):
   ```bash
   docker-compose exec wordpress wp plugin update wp-graphql
   ```

### Monitoring and Logging

#### Next.js Application Logs

**Development**:
```bash
npm run dev
# Logs appear in terminal
```

**Production with PM2**:
```bash
pm2 logs vismar-frontend
pm2 logs vismar-frontend --lines 100  # Last 100 lines
pm2 logs vismar-frontend --err        # Only errors
```

**Production with Docker**:
```bash
docker-compose logs -f frontend
docker-compose logs --tail=100 frontend
```

#### WordPress Logs

**Enable WordPress Debug Logging**:
```php
// wp-config.php (only for debugging, not in production!)
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

**View logs**:
```bash
# In Docker
docker-compose exec wordpress tail -f /var/www/html/wp-content/debug.log

# Or directly
tail -f wordpress/wp-content/debug.log
```

#### Error Monitoring Services

Consider integrating:

1. **Sentry** (JavaScript errors):
   ```bash
   npm install @sentry/nextjs
   ```

   ```javascript
   // sentry.client.config.js
   import * as Sentry from '@sentry/nextjs';

   Sentry.init({
     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
     tracesSampleRate: 1.0,
   });
   ```

2. **LogRocket** (User session replay):
   ```bash
   npm install logrocket
   ```

3. **New Relic** (Full-stack monitoring)

4. **Datadog** (Infrastructure + APM)

#### Performance Monitoring

**Next.js Built-in Analytics**:
```javascript
// next.config.js
module.exports = {
  experimental: {
    instrumentationHook: true,
  },
};
```

**Google Analytics**:
```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Backup Procedures

#### Automated Daily Backups

**Database Backup Script** (`docker/scripts/backup.sh`):
```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"

mkdir -p $BACKUP_DIR

# Backup MySQL database
docker-compose exec -T db mysqldump \
  -u wordpress -pwordpress wordpress \
  > $BACKUP_DIR/db_backup_$DATE.sql

# Backup WordPress uploads
docker cp vismar-wordpress:/var/www/html/wp-content/uploads \
  $BACKUP_DIR/uploads_$DATE

echo "Backup completed: $DATE"
```

**Cron Job** (run daily at 2 AM):
```bash
crontab -e

# Add this line:
0 2 * * * cd /var/www/vismar-aqua-wp-headless && ./docker/scripts/backup.sh
```

#### Manual Backup

```bash
# Database
docker-compose exec -T db mysqldump -u wordpress -pwordpress wordpress > backup.sql

# WordPress files
docker cp vismar-wordpress:/var/www/html/wp-content ./wp-content-backup

# Frontend build
tar -czf frontend-build.tar.gz frontend/.next
```

#### Restore from Backup

```bash
# Restore database
docker-compose exec -T db mysql -u wordpress -pwordpress wordpress < backup.sql

# Restore WordPress uploads
docker cp ./wp-content-backup/uploads vismar-wordpress:/var/www/html/wp-content/
```

#### Off-site Backup Storage

Use cloud storage for redundancy:

```bash
# AWS S3
aws s3 cp backup.sql s3://my-bucket/backups/$(date +%Y%m%d)/

# Google Cloud Storage
gsutil cp backup.sql gs://my-bucket/backups/$(date +%Y%m%d)/

# Rsync to remote server
rsync -avz backup.sql user@remote-server:/backups/
```

---

## Key Features Documentation

### Blog Pagination System

#### URL Structure

The blog pagination follows this URL pattern:

```
/[locale]/blog                    → Page 1 (12 posts)
/[locale]/blog/page/2             → Page 2 (posts 13-24)
/[locale]/blog/page/3             → Page 3 (posts 25-36)
...
```

**Examples**:
- English: `/en/blog`, `/en/blog/page/2`
- Ukrainian: `/uk/blog`, `/uk/blog/page/2`

#### Implementation Details

**Route Structure**:
```
app/[locale]/blog/page/[[...page]]/page.tsx
```

The `[[...page]]` is an **optional catch-all route** that matches:
- `/blog` (no page param → defaults to page 1)
- `/blog/page/2` (page param = `['2']`)
- `/blog/page/3` (page param = `['3']`)

**Page Component** (`app/[locale]/blog/page/[[...page]]/page.tsx`):

```typescript
export default async function BlogPage({ params }: Props) {
  const { locale, page: pageParam } = await params;

  // Extract page number from URL
  const pageNumber = pageParam?.[0];
  const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;

  // Validate page number
  if (pageNumber && (isNaN(currentPage) || currentPage < 1)) {
    notFound();  // Show 404 for invalid page numbers
  }

  // Fetch posts (100 posts total for client-side pagination)
  const postsPerPage = 12;
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

  // Validate page is within range
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    notFound();  // Show 404 if page doesn't exist
  }

  // Render posts and pagination
}
```

**Pagination Controls**:

```tsx
{/* Previous Button */}
{currentPage > 1 && (
  <a
    href={currentPage === 2 ? `/${locale}/blog` : `/${locale}/blog/page/${currentPage - 1}`}
    className="btn-secondary"
  >
    {locale === 'en' ? 'Previous' : 'Попередня'}
  </a>
)}

{/* Page Numbers */}
{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
  const pageUrl = pageNum === 1 ? `/${locale}/blog` : `/${locale}/blog/page/${pageNum}`;

  return (
    <a
      key={pageNum}
      href={pageUrl}
      className={pageNum === currentPage ? 'active' : ''}
    >
      {pageNum}
    </a>
  );
})}

{/* Next Button */}
{currentPage < totalPages && (
  <a
    href={`/${locale}/blog/page/${currentPage + 1}`}
    className="btn-secondary"
  >
    {locale === 'en' ? 'Next' : 'Наступна'}
  </a>
)}
```

**Key Points**:
- Page 1 uses `/blog` (not `/blog/page/1`)
- Invalid pages show 404
- Empty pages (no posts) show "No posts available"
- Pagination adapts to total post count

### Language Filtering Implementation

#### GraphQL Language Codes

The project uses **uppercase language codes** in GraphQL queries:

```typescript
const languageCode = locale === 'en' ? 'EN' : 'UK';
```

**Important**: Polylang must be configured to use `EN` and `UK` (uppercase) codes.

#### GraphQL Query with Language Filter

```typescript
import { GET_ALL_POSTS } from '@/lib/wordpress/queries';

const { data } = await client.query({
  query: GET_ALL_POSTS,
  variables: {
    language: languageCode,  // 'EN' or 'UK'
    first: 100,
  },
});
```

**Query Definition** (`lib/wordpress/queries.ts`):

```graphql
query GetAllPosts($language: LanguageCodeFilterEnum!, $first: Int = 100) {
  posts(where: { language: $language, status: PUBLISH }, first: $first) {
    nodes {
      id
      title
      slug
      excerpt
      date
      language {
        code
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
```

#### Verifying Language Filtering

Test in GraphiQL (http://localhost:8080/graphql):

```graphql
query TestEnglishPosts {
  posts(where: { language: EN }, first: 5) {
    nodes {
      title
      language {
        code
      }
    }
  }
}
```

Expected response:
```json
{
  "data": {
    "posts": {
      "nodes": [
        {
          "title": "English Post Title",
          "language": {
            "code": "EN"
          }
        }
      ]
    }
  }
}
```

### LanguageSwitcher Behavior for Blog Posts

#### Component Location

```
components/LanguageSwitcher.tsx
```

#### Behavior

The LanguageSwitcher preserves the current page path when switching languages:

```tsx
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  // Remove current locale from pathname
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');

  // Determine other locale
  const otherLocale = locale === 'en' ? 'uk' : 'en';

  return (
    <a href={`/${otherLocale}${pathWithoutLocale}`}>
      {otherLocale === 'en' ? 'English' : 'Українська'}
    </a>
  );
}
```

**Examples**:

| Current URL | Locale | After Switch | New Locale |
|-------------|--------|--------------|------------|
| `/en/blog` | EN | `/uk/blog` | UK |
| `/uk/blog/page/2` | UK | `/en/blog/page/2` | EN |
| `/en/about` | EN | `/uk/about` | UK |

**For Blog Posts with Translations**:

If a blog post has a linked translation in Polylang, the LanguageSwitcher can navigate to the translated post:

```tsx
// Fetch post with translations
const post = await getPostBySlug(slug, locale);

// In component
{post.translations && (
  <a href={`/${otherLocale}/blog/${post.translations[0].slug}`}>
    {otherLocale === 'en' ? 'Read in English' : 'Читати українською'}
  </a>
)}
```

### Image Optimization with getOptimizedImageUrl

#### Purpose

The `getOptimizedImageUrl` helper function ensures images load correctly in all environments:

- **Development (local)**: Direct WordPress URLs work
- **Development (Docker)**: Rewrites `localhost` to `host.docker.internal`
- **Production**: Uses production WordPress domain

#### Implementation

**Function** (`lib/image-url.ts`):

```typescript
export function getOptimizedImageUrl(url: string | undefined): string {
  if (!url) return '';

  // When running in Docker, rewrite localhost URLs
  if (typeof window === 'undefined' && url.includes('localhost:8080')) {
    return url.replace('localhost:8080', 'host.docker.internal:8080');
  }

  return url;
}
```

**Explanation**:
- `typeof window === 'undefined'`: Check if running on server (not browser)
- `url.includes('localhost:8080')`: Check if URL is local WordPress
- `replace(...)`: Rewrite to Docker-accessible URL

#### Usage

**In React Components**:

```tsx
import Image from 'next/image';
import { getOptimizedImageUrl } from '@/lib/image-url';

export default function BlogCard({ post }) {
  const imageUrl = getOptimizedImageUrl(post.featuredImage?.node?.sourceUrl);

  return (
    <Image
      src={imageUrl || '/placeholder.jpg'}
      alt={post.featuredImage?.node?.altText || post.title}
      width={400}
      height={300}
      className="object-cover"
    />
  );
}
```

**In Background Images**:

```tsx
<div
  style={{
    backgroundImage: `url(${getOptimizedImageUrl(heroImage)})`
  }}
>
  Hero Content
</div>
```

**Or using Next.js Image for backgrounds**:

```tsx
import Image from 'next/image';
import { getOptimizedImageUrl } from '@/lib/image-url';

<div className="relative">
  <Image
    src={getOptimizedImageUrl(heroImage)}
    alt="Hero background"
    fill
    className="object-cover"
    priority
  />
  <div className="relative z-10">
    Hero Content
  </div>
</div>
```

#### Next.js Image Configuration

Ensure WordPress domain is allowed in `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'http',
      hostname: 'localhost',
      port: '8080',
      pathname: '/wp-content/uploads/**',
    },
    {
      protocol: 'http',
      hostname: 'host.docker.internal',
      port: '8080',
      pathname: '/wp-content/uploads/**',
    },
    {
      protocol: 'https',
      hostname: 'your-production-wordpress.com',
      pathname: '/wp-content/uploads/**',
    },
  ],
}
```

---

## Additional Resources

### Documentation Links

- **Next.js Documentation**: https://nextjs.org/docs
- **WPGraphQL Documentation**: https://www.wpgraphql.com/docs/introduction
- **Polylang Documentation**: https://polylang.pro/doc/
- **Apollo Client Documentation**: https://www.apollographql.com/docs/react/
- **next-intl Documentation**: https://next-intl-docs.vercel.app/
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs

### Community & Support

- **Next.js Discord**: https://nextjs.org/discord
- **WPGraphQL Slack**: https://wpgql-slack.herokuapp.com/
- **WordPress Support Forums**: https://wordpress.org/support/

### Performance Testing Tools

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/
- **Lighthouse CI**: https://github.com/GoogleChrome/lighthouse-ci

### Deployment Checklist

Before deploying to production:

- [ ] All environment variables configured correctly
- [ ] WordPress GraphQL endpoint accessible from frontend
- [ ] Polylang languages configured (EN, UK)
- [ ] All blog posts have translations
- [ ] Images load correctly (test in incognito mode)
- [ ] Blog pagination works (`/blog/page/2`, `/blog/page/3`)
- [ ] Language switcher works on all pages
- [ ] SEO metadata configured (titles, descriptions)
- [ ] Sitemap generates correctly (`/sitemap.xml`)
- [ ] Robots.txt accessible (`/robots.txt`)
- [ ] 404 page displays for invalid routes
- [ ] Analytics configured (Google Analytics, GTM)
- [ ] SSL certificates installed and HTTPS enforced
- [ ] Performance testing completed (Lighthouse score > 90)
- [ ] Security headers configured (CSP, HSTS, etc.)
- [ ] Backup procedures in place
- [ ] Monitoring and alerting configured
- [ ] Documentation updated for any customizations

---

## Conclusion

This deployment guide covers everything needed to deploy and maintain the Vismar Aqua headless WordPress project. For questions or issues not covered here, consult the official documentation or community resources listed above.

**Need Help?**

1. Check the [Troubleshooting](#troubleshooting) section
2. Review WordPress and Next.js logs
3. Test GraphQL queries in GraphiQL
4. Consult official documentation
5. Reach out to the development team

**Good luck with your deployment!**
