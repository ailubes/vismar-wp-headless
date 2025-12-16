# TECHNICAL ASSIGNMENT: Vismar Aqua Website Development
## Headless WordPress + Next.js 14 Implementation

**Project:** Vismar Aqua Corporate Website Redesign  
**Developer:** Claude Code  
**Environment:** Windows with Docker Desktop  
**Timeline:** Phased development (aligned with content creation)

---

## 📋 PROJECT OVERVIEW

### Objective
Build a modern, bilingual (EN/UA) corporate website for Vismar Aqua using:
- **Backend:** Headless WordPress (for content management)
- **Frontend:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **i18n:** next-intl for internationalization
- **Deployment:** Self-hosted (Docker containers)

### Key Requirements
- ✅ Fully bilingual (English & Ukrainian) with same URL slugs
- ✅ Headless WordPress CMS for easy content management
- ✅ Modern, fast, SEO-optimized Next.js frontend
- ✅ All services, projects, and blog content managed via WordPress
- ✅ 301 redirects from old site structure
- ✅ Docker-based development environment
- ✅ Production-ready deployment configuration

---

## 🏗️ ARCHITECTURE

### Tech Stack

```
┌─────────────────────────────────────┐
│         FRONTEND (Next.js 14)       │
│  - App Router                       │
│  - React Server Components          │
│  - Tailwind CSS                     │
│  - next-intl (i18n)                 │
│  - TypeScript                       │
└─────────────────┬───────────────────┘
                  │
                  │ GraphQL / REST API
                  │
┌─────────────────┴───────────────────┐
│      BACKEND (WordPress Headless)   │
│  - WordPress 6.4+                   │
│  - WPGraphQL plugin                 │
│  - ACF (Advanced Custom Fields)     │
│  - Polylang / WPML (multilingual)   │
│  - Custom Post Types                │
└─────────────────┬───────────────────┘
                  │
                  │
┌─────────────────┴───────────────────┐
│         DATABASE (MySQL 8.0)        │
└─────────────────────────────────────┘

All running in Docker containers on Windows
```

### Why This Stack?

**Headless WordPress:**
- ✅ Familiar CMS interface for content team
- ✅ Powerful content management capabilities
- ✅ Multilingual support (Polylang/WPML)
- ✅ Custom post types for services, projects, species
- ✅ Easy media management
- ✅ Can migrate existing WordPress content

**Next.js 14:**
- ✅ Best-in-class performance (SSG, ISR, SSR)
- ✅ Excellent SEO capabilities
- ✅ React ecosystem & component reusability
- ✅ Built-in image optimization
- ✅ API routes for additional functionality

**Docker:**
- ✅ Consistent development environment
- ✅ Easy setup on Windows
- ✅ Production-ready containerization
- ✅ Easy to deploy anywhere

---

## 📂 PROJECT STRUCTURE

```
vismar-aqua/
├── docker/
│   ├── docker-compose.yml
│   ├── nginx/
│   │   └── nginx.conf
│   └── wordpress/
│       └── Dockerfile
│
├── wordpress/                    # WordPress installation
│   ├── wp-content/
│   │   ├── themes/
│   │   │   └── vismar-headless/  # Minimal theme for headless
│   │   ├── plugins/
│   │   │   ├── wpgraphql/
│   │   │   ├── wp-graphql-acf/
│   │   │   ├── polylang/
│   │   │   └── vismar-custom-post-types/  # Custom plugin
│   │   └── uploads/
│   └── ...
│
├── frontend/                     # Next.js application
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx      # Services overview
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Individual service pages
│   │   │   ├── software/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── species/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── insights/
│   │   │   │   ├── page.tsx      # Blog listing
│   │   │   │   ├── category/
│   │   │   │   │   └── [slug]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Blog post
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx        # Locale layout
│   │   ├── api/                  # API routes
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── layout.tsx            # Root layout
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── ... (shadcn/ui components)
│   │
│   ├── lib/
│   │   ├── wordpress/
│   │   │   ├── api.ts            # WordPress API functions
│   │   │   ├── queries.ts        # GraphQL queries
│   │   │   └── types.ts          # TypeScript types
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── messages/
│   │   ├── en.json               # English translations
│   │   └── ua.json               # Ukrainian translations
│   │
│   ├── public/
│   │   └── images/
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── middleware.ts             # i18n & redirects
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
│
├── docs/
│   ├── content-audit.md          # Reference documentation
│   └── api-documentation.md
│
└── README.md
```

---

## 🎯 DEVELOPMENT PHASES

### Phase 0: Environment Setup (Week 1, Days 1-2)
**Agent:** Setup Agent

**Tasks:**
1. Initialize project structure
2. Configure Docker environment
3. Set up WordPress with required plugins
4. Initialize Next.js 14 project with TypeScript
5. Configure Tailwind CSS
6. Set up next-intl for i18n
7. Create base Docker compose configuration
8. Verify local development environment works

**Deliverables:**
- Working Docker environment
- WordPress accessible at `http://localhost:8080/wp-admin`
- Next.js dev server at `http://localhost:3000`
- Documentation for running locally

---

### Phase 1: WordPress Backend Configuration (Week 1, Days 3-5)
**Agent:** Backend Agent

**Tasks:**

#### 1.1 WordPress Setup
- Install and configure required plugins:
  - WPGraphQL
  - WPGraphQL for ACF
  - Polylang (for multilingual)
  - Advanced Custom Fields (ACF)
  - Custom Post Types UI (or custom plugin)

#### 1.2 Custom Post Types
Create custom post types with proper fields:

**Services** (`service`)
- Title (multilingual)
- Content (multilingual)
- Service Category (taxonomy: engineering / software)
- Featured Image
- Icon
- Order (number)

**Projects** (`project`)
- Title (multilingual)
- Content (multilingual)
- Location
- Year
- Client (optional)
- Featured Image
- Gallery (ACF Gallery)
- Technologies Used (repeater)
- Project Status (taxonomy: completed / in-progress)
- Featured (boolean)

**Species** (`species`)
- Title (multilingual)
- Content (multilingual)
- Scientific Name
- Category (taxonomy: shrimp / fish / other)
- Featured Image
- Farming Requirements (ACF group)
- Suitable Systems (checkboxes: RAS / HFTS / Pond)

**Software Solutions** (`software`)
- Title (multilingual)
- Content (multilingual)
- Features (repeater)
- Screenshots (gallery)
- Demo URL (optional)
- Featured Image

#### 1.3 ACF Field Groups
Define custom fields for each post type

#### 1.4 Navigation Menus
- Create menu locations: `header-en`, `header-ua`, `footer-en`, `footer-ua`

#### 1.5 GraphQL Schema
- Configure WPGraphQL settings
- Test GraphQL queries in GraphiQL
- Document all available queries

**Deliverables:**
- Fully configured WordPress backend
- Custom post types created
- ACF fields configured
- Sample content for testing
- GraphQL schema documentation

---

### Phase 2: Next.js Frontend Foundation (Week 2)
**Agent:** Frontend Foundation Agent

**Tasks:**

#### 2.1 Project Initialization
```bash
# Initialize Next.js with TypeScript
npx create-next-app@latest frontend --typescript --tailwind --app --no-src-dir

# Install dependencies
cd frontend
npm install @apollo/client graphql
npm install next-intl
npm install sharp
npm install @tailwindcss/typography
npm install clsx tailwind-merge
```

#### 2.2 Configure i18n
- Set up next-intl
- Create language routing with `[locale]` dynamic segment
- Configure middleware for language detection
- Create translation files (en.json, ua.json)

#### 2.3 WordPress API Integration
Create API layer to fetch WordPress data:

```typescript
// lib/wordpress/api.ts
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export async function getPage(slug: string, locale: string) {
  const { data } = await client.query({
    query: gql`
      query GetPage($slug: String!, $language: LanguageCodeFilterEnum!) {
        pageBy(uri: $slug) {
          title(language: $language)
          content(language: $language)
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,
    variables: { slug, language: locale.toUpperCase() },
  });
  return data.pageBy;
}

// Similar functions for:
// - getServices()
// - getService(slug)
// - getProjects()
// - getProject(slug)
// - getPosts()
// - getPost(slug)
// etc.
```

#### 2.4 Layout Components
Create core layout components:
- `Header.tsx` with navigation
- `Footer.tsx` with footer content
- `LanguageSwitcher.tsx` for EN/UA toggle
- Responsive mobile menu

#### 2.5 Base Styling
- Configure Tailwind theme (colors, fonts, spacing)
- Create global CSS
- Set up typography plugin for blog content

**Deliverables:**
- Next.js project configured
- i18n working (EN/UA routes)
- WordPress API connection working
- Basic layout components
- Can fetch and display WordPress content

---

### Phase 3: Core Pages Implementation (Week 3)
**Agent:** Pages Implementation Agent

Implement pages in priority order as content becomes available:

#### 3.1 Homepage (`/[locale]/page.tsx`)
Sections:
- Hero with value proposition
- Services overview (engineering + software)
- Featured project (Neusatz Aqua)
- Technology highlights
- Client testimonials
- CTA sections

#### 3.2 About Page (`/[locale]/about/page.tsx`)
- Company story
- Mission & vision
- DBOT methodology
- Team overview
- Timeline/milestones

#### 3.3 Services Overview (`/[locale]/services/page.tsx`)
- DBOT framework explanation
- Service categories
- Links to individual services

#### 3.4 Individual Service Pages (`/[locale]/services/[slug]/page.tsx`)
Dynamic page that fetches service data from WordPress:
- RAS Systems
- HFTS Technology
- Hatchery Design
- Water Treatment
- Processing Facilities
- Feed Mill Design
- Equipment Design

#### 3.5 Software Overview (`/[locale]/software/page.tsx`)
- IT department announcement
- Software capabilities
- Solution listings

#### 3.6 Individual Software Pages (`/[locale]/software/[slug]/page.tsx`)
- AI Counting
- Farm Management
- IoT Monitoring
- etc.

#### 3.7 Projects (`/[locale]/projects/`)
- Projects listing page
- Individual project pages
- Featured: Neusatz Aqua case study

#### 3.8 Contact Page (`/[locale]/contact/page.tsx`)
- Multiple contact forms (general, engineering, software)
- Contact information
- Form submission via API route

#### 3.9 Legal Pages
- Privacy Policy
- Terms of Service

**Deliverables:**
- All Phase 1 critical pages implemented
- Pages pull content from WordPress
- Forms functional
- SEO meta tags on all pages
- Responsive design

---

### Phase 4: Blog & Species Pages (Week 4)
**Agent:** Content Pages Agent

#### 4.1 Blog Implementation
- Blog listing page with pagination
- Category pages
- Individual blog post page with proper typography
- Related posts
- Table of contents for long posts

#### 4.2 Species Pages
- Species listing
- Individual species pages
- Filtering by category

#### 4.3 Search Functionality
- Implement search across services, projects, blog

**Deliverables:**
- Blog fully functional
- Species pages working
- Search implemented

---

### Phase 5: Advanced Features (Week 5)
**Agent:** Features Agent

#### 5.1 SEO Optimization
- Generate sitemap.xml dynamically
- robots.txt
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Canonical URLs
- Hreflang tags (EN/UA)

#### 5.2 Performance Optimization
- Image optimization (Next.js Image)
- Lazy loading
- Code splitting
- Font optimization
- Caching strategies

#### 5.3 Analytics
- Google Analytics 4 integration
- Tag Manager setup
- Event tracking

#### 5.4 Forms & Email
- Contact form submissions
- Email notifications
- Form validation
- CAPTCHA/spam protection

**Deliverables:**
- Excellent SEO scores
- Fast page loads (<3s)
- Analytics working
- Forms sending emails

---

### Phase 6: Migration & Redirects (Week 6)
**Agent:** Migration Agent

#### 6.1 Content Migration
- Export content from old WordPress site
- Import into new WordPress
- Verify all content migrated
- Optimize images

#### 6.2 301 Redirects
Implement all redirects in `next.config.js`:

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/en/about-company',
        destination: '/en/about/',
        permanent: true,
      },
      {
        source: '/ru/vismar-aqua-ltd-ukraine',
        destination: '/ua/about/',
        permanent: true,
      },
      {
        source: '/en/contacts',
        destination: '/en/contact/',
        permanent: true,
      },
      {
        source: '/ru/:path*',
        destination: '/ua/:path*',
        permanent: true,
      },
      {
        source: '/hfts-technology-can-be-a-game-changer.html',
        destination: '/en/insights/hfts-game-changer/',
        permanent: true,
      },
      // ... all other redirects from content audit
    ];
  },
};
```

#### 6.3 Testing
- Test all old URLs redirect correctly
- Check for 404s
- Verify content displays correctly
- Cross-browser testing
- Mobile testing

**Deliverables:**
- All content migrated
- All redirects working
- No 404 errors
- Site tested and ready

---

### Phase 7: Deployment (Week 7)
**Agent:** DevOps Agent

#### 7.1 Production Docker Configuration
- Production-ready docker-compose.yml
- Nginx reverse proxy configuration
- SSL certificate setup
- Environment variables management
- Backup strategy

#### 7.2 Deployment Documentation
- Server requirements
- Deployment steps
- Rollback procedures
- Monitoring setup

#### 7.3 Go Live
- Deploy to production
- DNS configuration
- SSL verification
- Final testing
- Performance monitoring

**Deliverables:**
- Production site live
- Monitoring configured
- Documentation complete
- Backup system running

---

## 🤖 CLAUDE CODE AGENTS

### Agent 1: Setup Agent
**Responsibility:** Project initialization and environment setup

**Files to Create:**
- `docker/docker-compose.yml`
- `docker/nginx/nginx.conf`
- `docker/wordpress/Dockerfile`
- `frontend/package.json`
- `frontend/next.config.js`
- `frontend/tailwind.config.js`
- `frontend/tsconfig.json`
- `.env.example`
- `README.md`

**Commands:**
```bash
# Create project structure
# Initialize Docker configuration
# Set up WordPress in Docker
# Initialize Next.js project
# Install dependencies
# Verify everything runs
```

---

### Agent 2: Backend Agent
**Responsibility:** WordPress backend configuration

**Tasks:**
- Install and configure WordPress plugins
- Create custom post types
- Configure ACF fields
- Set up multilingual (Polylang)
- Configure WPGraphQL
- Create sample content
- Test GraphQL queries

**Deliverables:**
- WordPress admin fully configured
- Custom post types working
- GraphQL API accessible
- Sample content for testing

---

### Agent 3: Frontend Foundation Agent
**Responsibility:** Next.js foundation

**Files to Create:**
- `frontend/lib/wordpress/api.ts`
- `frontend/lib/wordpress/queries.ts`
- `frontend/lib/wordpress/types.ts`
- `frontend/middleware.ts`
- `frontend/messages/en.json`
- `frontend/messages/ua.json`
- `frontend/components/layout/Header.tsx`
- `frontend/components/layout/Footer.tsx`
- `frontend/components/layout/LanguageSwitcher.tsx`

**Tasks:**
- Configure next-intl
- Set up WordPress API integration
- Create base components
- Configure Tailwind theme
- Test data fetching

---

### Agent 4: Pages Implementation Agent
**Responsibility:** Build all core pages

**Files to Create:**
- All page files in `frontend/app/[locale]/`
- Reusable section components
- UI components

**For Each Page:**
1. Create page file with proper TypeScript types
2. Fetch data from WordPress
3. Implement responsive design
4. Add SEO meta tags
5. Test on mobile
6. Verify i18n works

---

### Agent 5: Content Pages Agent
**Responsibility:** Blog, species, and dynamic content

**Files to Create:**
- Blog listing and post pages
- Species pages
- Category pages
- Search functionality

---

### Agent 6: Features Agent
**Responsibility:** Advanced features, SEO, forms

**Files to Create:**
- `frontend/app/sitemap.ts`
- `frontend/app/robots.ts`
- `frontend/app/api/contact/route.ts`
- Analytics components
- Form components with validation

---

### Agent 7: Migration Agent
**Responsibility:** Content migration and redirects

**Tasks:**
- Migrate content from old site
- Implement all 301 redirects
- Test all old URLs
- Cross-browser testing
- Fix any issues

---

### Agent 8: DevOps Agent
**Responsibility:** Production deployment

**Files to Create:**
- Production docker-compose
- Nginx production config
- Deployment scripts
- Backup scripts
- Monitoring configuration

---

## 📝 WORDPRESS GRAPHQL QUERIES

### Example Queries for Agent Reference

```graphql
# Get all services
query GetServices($language: LanguageCodeFilterEnum!) {
  services(where: {language: $language}) {
    nodes {
      id
      title
      slug
      excerpt
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      serviceFields {
        icon
        order
        serviceCategory
      }
    }
  }
}

# Get single service by slug
query GetService($slug: ID!, $language: LanguageCodeFilterEnum!) {
  service(id: $slug, idType: SLUG) {
    title(language: $language)
    content(language: $language)
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    serviceFields {
      icon
      technologies
      caseStudies
    }
  }
}

# Get all projects
query GetProjects($language: LanguageCodeFilterEnum!) {
  projects(where: {language: $language}) {
    nodes {
      id
      title
      slug
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      projectFields {
        location
        year
        featured
      }
    }
  }
}

# Get blog posts
query GetPosts($language: LanguageCodeFilterEnum!, $first: Int = 10) {
  posts(where: {language: $language}, first: $first) {
    nodes {
      id
      title
      slug
      date
      excerpt
      content
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
          slug
        }
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

---

## 🔧 CONFIGURATION FILES

### docker-compose.yml
```yaml
version: '3.8'

services:
  wordpress:
    build:
      context: ./docker/wordpress
    container_name: vismar-wordpress
    restart: always
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - ./wordpress:/var/www/html
    depends_on:
      - db

  db:
    image: mysql:8.0
    container_name: vismar-mysql
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: rootpassword
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306"

  phpmyadmin:
    image: phpmyadmin:latest
    container_name: vismar-phpmyadmin
    restart: always
    ports:
      - "8081:80"
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: rootpassword
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
    container_name: vismar-frontend
    restart: always
    ports:
      - "3000:3000"
    environment:
      WORDPRESS_GRAPHQL_URL: http://wordpress/graphql
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - wordpress
    command: npm run dev

volumes:
  db_data:
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vismar-aqua.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'vismar-aqua.com',
      },
    ],
  },
  async redirects() {
    return [
      // All redirects from content audit
      {
        source: '/en/about-company',
        destination: '/en/about/',
        permanent: true,
      },
      {
        source: '/ru/:path*',
        destination: '/ua/:path*',
        permanent: true,
      },
      // ... more redirects
    ];
  },
};

module.exports = nextConfig;
```

### middleware.ts
```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ua'],
  defaultLocale: 'ua',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

---

## ✅ ACCEPTANCE CRITERIA

### For Each Phase:

**Phase 0:** ✅ Docker containers running, WordPress accessible, Next.js dev server running

**Phase 1:** ✅ All custom post types created, ACF configured, GraphQL queries working, sample content added

**Phase 2:** ✅ Next.js fetches data from WordPress, i18n works (EN/UA), base layout renders

**Phase 3:** ✅ All critical pages render with content from WordPress, forms work, responsive on mobile

**Phase 4:** ✅ Blog posts display correctly, species pages work, search returns results

**Phase 5:** ✅ Sitemap generates, Lighthouse score >90, forms send emails, analytics tracking

**Phase 6:** ✅ Old URLs redirect correctly, no 404s, all content migrated, tested on multiple browsers

**Phase 7:** ✅ Site live on production, SSL working, backups configured, monitoring active

---

## 🧪 TESTING CHECKLIST

### For Each Agent:

- [ ] Code runs without errors
- [ ] TypeScript types are correct
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] i18n works (both EN and UA content displays)
- [ ] Images load and are optimized
- [ ] Links work correctly
- [ ] Forms validate and submit
- [ ] SEO meta tags present
- [ ] Accessibility (WCAG AA compliance)
- [ ] Performance (Lighthouse >90)

---

## 📚 DOCUMENTATION REQUIREMENTS

### README.md
Must include:
- Project overview
- Prerequisites
- Installation steps
- Running locally
- Environment variables
- Deployment instructions
- Troubleshooting

### For Developers:
- API documentation
- Component documentation
- WordPress custom fields reference
- GraphQL schema reference
- Deployment guide

---

## 🚨 IMPORTANT NOTES

### For All Agents:

1. **Always use TypeScript** - No `any` types, proper interfaces
2. **Follow Next.js 14 best practices** - Use Server Components where possible
3. **Optimize images** - Always use Next.js Image component
4. **SEO is critical** - Every page needs proper meta tags
5. **Mobile-first** - Design for mobile, enhance for desktop
6. **Test i18n** - Verify both languages work on every page
7. **Use environment variables** - Never hardcode URLs or keys
8. **Error handling** - Graceful fallbacks for missing content
9. **Loading states** - Show loading indicators when fetching data
10. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

### Don't:
- ❌ Don't use client components unnecessarily
- ❌ Don't fetch data on client side if possible
- ❌ Don't hardcode content in components (fetch from WordPress)
- ❌ Don't skip error handling
- ❌ Don't forget to test both languages

---

## 🎯 SUCCESS METRICS

### Technical:
- Lighthouse Performance Score: >90
- Lighthouse SEO Score: 100
- Lighthouse Accessibility Score: >95
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- No 404 errors
- All old URLs redirect correctly

### Business:
- Content team can easily manage content via WordPress
- Site loads fast on mobile
- All services/projects/content properly showcased
- Contact forms receive submissions
- Analytics tracking works

---

## 📞 SUPPORT & QUESTIONS

If Claude Code agents encounter issues:

1. Check WordPress is running: `http://localhost:8080`
2. Check GraphQL endpoint: `http://localhost:8080/graphql`
3. Check Next.js dev server: `http://localhost:3000`
4. Review environment variables in `.env.local`
5. Check Docker logs: `docker-compose logs -f`

---

## 🚀 GETTING STARTED

### For Claude Code:

```bash
# Step 1: Clone/create project
mkdir vismar-aqua && cd vismar-aqua

# Step 2: Run Setup Agent
# - Create project structure
# - Initialize Docker
# - Set up WordPress
# - Initialize Next.js

# Step 3: Run Backend Agent
# - Configure WordPress
# - Create custom post types
# - Set up GraphQL

# Step 4: Run Frontend Foundation Agent
# - Configure Next.js
# - Set up i18n
# - Create base components

# Step 5: Run Pages Implementation Agent
# - Build all pages
# - Implement designs

# Continue through all phases...
```

---

**This technical assignment provides everything Claude Code needs to build the Vismar Aqua website from scratch, using a proper headless WordPress + Next.js architecture that matches the original requirements.**

---

**Document Version:** 1.0  
**Date:** November 13, 2025  
**For:** Claude Code Development  
**Project:** Vismar Aqua Website Redesign
