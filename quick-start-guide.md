# QUICK START GUIDE - Vismar Aqua Local Development

**For:** Windows with Docker Desktop  
**Timeline:** 30-60 minutes to get running locally

---

## ✅ PREREQUISITES

Before starting, ensure you have:

- [ ] **Windows 10/11** (with WSL2 enabled)
- [ ] **Docker Desktop** installed and running
- [ ] **Node.js 18+** installed
- [ ] **Git** installed
- [ ] **Code editor** (VS Code recommended)
- [ ] **8GB+ RAM** available

### Installing Docker Desktop on Windows

1. Download Docker Desktop: https://www.docker.com/products/docker-desktop/
2. Install and restart your computer
3. Enable WSL2 when prompted
4. Verify Docker is running:
```bash
docker --version
docker-compose --version
```

---

## 🚀 STEP-BY-STEP SETUP

### Step 1: Create Project Directory

```bash
# Open PowerShell or Windows Terminal
cd C:\Projects  # or wherever you keep projects
mkdir vismar-aqua
cd vismar-aqua
```

---

### Step 2: Give Assignment to Claude Code

Open Claude Code (command line) and provide this command:

```bash
claude-code read C:\path\to\technical-assignment-claude-code.md
```

Then say:

> "I need you to act as the **Setup Agent** and complete Phase 0 of the Vismar Aqua website development. Create the full project structure, configure Docker with WordPress and MySQL, initialize the Next.js frontend, and get everything running locally on my Windows machine."

---

### Step 3: What Setup Agent Will Do

The Setup Agent will:

1. **Create Project Structure:**
```
vismar-aqua/
├── docker/
│   ├── docker-compose.yml
│   ├── nginx/
│   └── wordpress/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
├── wordpress/
└── README.md
```

2. **Configure Docker Compose** with:
   - WordPress container
   - MySQL database
   - phpMyAdmin
   - Next.js dev container

3. **Initialize Next.js Project** with:
   - TypeScript
   - Tailwind CSS
   - next-intl
   - All required dependencies

4. **Start Everything Up:**
```bash
docker-compose up -d
```

---

### Step 4: Access Your Local Environment

Once Setup Agent completes, you should have:

**WordPress Admin:**
- URL: http://localhost:8080/wp-admin
- Username: admin
- Password: (Setup Agent will provide)

**phpMyAdmin:**
- URL: http://localhost:8081
- Username: root
- Password: rootpassword

**Next.js Frontend:**
- URL: http://localhost:3000

---

### Step 5: Backend Agent - Configure WordPress

Next, tell Claude Code:

> "Now act as the **Backend Agent** and complete Phase 1. Install and configure all WordPress plugins, create custom post types for services, projects, species, and software solutions. Set up ACF fields, configure Polylang for bilingual support, and configure WPGraphQL."

The Backend Agent will:
1. Install plugins via WP-CLI in Docker
2. Configure Polylang (EN/UA)
3. Create custom post types
4. Set up ACF field groups
5. Configure WPGraphQL
6. Add sample content for testing
7. Provide GraphQL endpoint: http://localhost:8080/graphql

---

### Step 6: Frontend Foundation Agent

Tell Claude Code:

> "Now act as the **Frontend Foundation Agent** and complete Phase 2. Set up the WordPress API integration, configure i18n with next-intl, create the base layout components (Header, Footer, LanguageSwitcher), and configure Tailwind theme."

You'll get:
- Working i18n (EN/UA)
- WordPress data fetching
- Base components
- Can navigate between languages

---

### Step 7: Pages Implementation (Iterative)

As content becomes ready, activate **Pages Implementation Agent**:

> "Act as the **Pages Implementation Agent** and create the homepage with content from WordPress. Include Hero section, Services overview, Featured project section, and CTAs."

Then continue page by page:
- About page
- Services pages
- Projects pages
- etc.

---

## 📝 DAILY WORKFLOW

### Starting Your Day:

```bash
# Navigate to project
cd C:\Projects\vismar-aqua

# Start Docker containers
docker-compose up -d

# Check status
docker-compose ps

# View logs if needed
docker-compose logs -f
```

### Accessing Services:
- **WordPress:** http://localhost:8080/wp-admin
- **Frontend:** http://localhost:3000
- **phpMyAdmin:** http://localhost:8081
- **GraphQL:** http://localhost:8080/graphql

### Making Changes:

1. **WordPress Content:** Edit in WordPress admin
2. **Frontend Code:** Edit files in `frontend/` directory
3. **See Changes:** Next.js hot-reloads automatically

### Ending Your Day:

```bash
# Stop containers (keeps data)
docker-compose stop

# Or stop and remove (but keep data in volumes)
docker-compose down
```

---

## 🔧 USEFUL DOCKER COMMANDS

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f wordpress
docker-compose logs -f frontend

# Restart a service
docker-compose restart wordpress

# Access WordPress container bash
docker-compose exec wordpress bash

# Access MySQL
docker-compose exec db mysql -u root -p

# Rebuild containers (if you change Dockerfile)
docker-compose up -d --build

# Stop everything
docker-compose down

# Stop and remove volumes (CAUTION: deletes database!)
docker-compose down -v
```

---

## 🐛 TROUBLESHOOTING

### Issue: Docker containers won't start
```bash
# Check Docker Desktop is running
# Check for port conflicts
netstat -ano | findstr :8080
netstat -ano | findstr :3000

# Kill process using port if needed
taskkill /PID <process_id> /F
```

### Issue: WordPress shows database connection error
```bash
# Check MySQL container is running
docker-compose ps

# Check MySQL logs
docker-compose logs db

# Restart MySQL
docker-compose restart db
```

### Issue: Next.js won't connect to WordPress
```bash
# Check WORDPRESS_GRAPHQL_URL in frontend/.env.local
# Should be: http://wordpress:80/graphql (in Docker network)
# Or: http://localhost:8080/graphql (from host)

# Verify GraphQL is accessible
curl http://localhost:8080/graphql
```

### Issue: Changes not showing
```bash
# Next.js: Should hot-reload automatically
# If not, restart:
docker-compose restart frontend

# WordPress: Clear cache if using cache plugin
# Or restart container:
docker-compose restart wordpress
```

### Issue: Out of disk space
```bash
# Clean up Docker
docker system prune -a --volumes

# Be careful - this removes unused containers, images, and volumes
```

---

## 📁 PROJECT STRUCTURE REFERENCE

```
vismar-aqua/
├── docker/
│   ├── docker-compose.yml          ← Main Docker config
│   ├── nginx/
│   │   └── nginx.conf              ← Nginx config
│   └── wordpress/
│       └── Dockerfile              ← WordPress container config
│
├── wordpress/                       ← WordPress files (volume mount)
│   ├── wp-admin/
│   ├── wp-content/
│   │   ├── plugins/
│   │   ├── themes/
│   │   └── uploads/
│   └── wp-config.php
│
├── frontend/                        ← Next.js application
│   ├── app/
│   │   ├── [locale]/               ← Localized pages
│   │   │   ├── page.tsx            ← Homepage
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   └── ...
│   │   └── layout.tsx
│   ├── components/
│   ├── lib/
│   │   └── wordpress/
│   │       ├── api.ts              ← WordPress API functions
│   │       └── queries.ts          ← GraphQL queries
│   ├── messages/
│   │   ├── en.json                 ← English translations
│   │   └── ua.json                 ← Ukrainian translations
│   ├── .env.local                  ← Environment variables
│   ├── next.config.js
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 🎯 WHAT EACH AGENT DOES

### Phase 0: Setup Agent (Day 1)
- ✅ Creates entire project structure
- ✅ Configures Docker
- ✅ Initializes Next.js
- ✅ Gets everything running

### Phase 1: Backend Agent (Days 2-3)
- ✅ Configures WordPress plugins
- ✅ Creates custom post types
- ✅ Sets up multilingual (Polylang)
- ✅ Configures GraphQL
- ✅ Adds sample content

### Phase 2: Frontend Foundation Agent (Days 4-5)
- ✅ Connects to WordPress API
- ✅ Sets up i18n
- ✅ Creates base components
- ✅ Configures styling

### Phase 3: Pages Implementation Agent (Week 2)
- ✅ Builds all pages
- ✅ Implements designs
- ✅ Makes responsive
- ✅ Adds SEO

### Phase 4: Content Pages Agent (Week 3)
- ✅ Blog functionality
- ✅ Species pages
- ✅ Search

### Phase 5: Features Agent (Week 4)
- ✅ Forms
- ✅ SEO optimization
- ✅ Analytics
- ✅ Performance

### Phase 6: Migration Agent (Week 5)
- ✅ Content migration
- ✅ Redirects
- ✅ Testing

### Phase 7: DevOps Agent (Week 6)
- ✅ Production deployment
- ✅ Monitoring
- ✅ Backups

---

## 💡 PRO TIPS

1. **Keep Docker Desktop running** - Set it to start on boot
2. **Use VS Code** - Install Docker extension for easy container management
3. **Check logs often** - `docker-compose logs -f` is your friend
4. **Backup database regularly** - Export from phpMyAdmin
5. **Use Git** - Commit after each agent completes their phase
6. **Test both languages** - Always check EN and UA versions
7. **Mobile first** - View on mobile browser (localhost:3000 from phone on same network)

---

## 🔐 DEFAULT CREDENTIALS

**WordPress:**
- URL: http://localhost:8080/wp-admin
- User: admin
- Pass: (Set during WordPress installation)

**MySQL:**
- Host: localhost:3306
- Database: wordpress
- User: wordpress
- Pass: wordpress
- Root Pass: rootpassword

**phpMyAdmin:**
- URL: http://localhost:8081
- User: root
- Pass: rootpassword

---

## 📞 GETTING HELP

If you encounter issues:

1. **Check Docker is running**
2. **Check logs:** `docker-compose logs`
3. **Restart containers:** `docker-compose restart`
4. **Check port availability:** `netstat -ano | findstr :8080`
5. **Ask Claude Code** for debugging help with specific error messages

---

## ✅ VERIFICATION CHECKLIST

After Setup Agent completes, verify:

- [ ] Docker containers are running (`docker-compose ps` shows all "Up")
- [ ] WordPress admin accessible at localhost:8080/wp-admin
- [ ] phpMyAdmin accessible at localhost:8081
- [ ] Next.js dev server accessible at localhost:3000
- [ ] Can log into WordPress
- [ ] Can access database via phpMyAdmin
- [ ] Next.js shows default page (or welcome message)

After Backend Agent completes, verify:

- [ ] Plugins installed and activated
- [ ] Custom post types appear in WordPress admin
- [ ] Polylang configured (can see language switcher)
- [ ] ACF field groups created
- [ ] GraphQL endpoint works (test at localhost:8080/graphql)
- [ ] Sample content added

After Frontend Foundation Agent completes, verify:

- [ ] Can access /en/ and /ua/ routes
- [ ] Language switcher works
- [ ] Can fetch WordPress data in Next.js
- [ ] Header and footer render
- [ ] Tailwind styles working

---

**You're now ready to start development! 🚀**

Begin by running the Setup Agent, then proceed through each phase as content becomes available.

---

**Document Version:** 1.0  
**Date:** November 13, 2025  
**For:** Local Windows Development Setup
