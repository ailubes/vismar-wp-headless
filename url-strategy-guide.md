# VISMAR AQUA - URL Strategy & Implementation Guide

**Date:** November 13, 2025  
**Bilingual Approach:** English & Ukrainian

---

## 📐 URL STRUCTURE STRATEGY

### Core Principle: Same Slugs, Different Content

All pages use **English URL slugs** across both languages. Only the language prefix changes:
- English: `/en/`
- Ukrainian: `/ua/`

**Example:**
```
English:  /en/services/ras-systems/
Ukrainian: /ua/services/ras-systems/
          ↑ Same slug, different language prefix
```

---

## ✅ WHY THIS APPROACH?

### 1. **Simpler Maintenance**
- Only one URL structure to manage
- Developers work with consistent paths
- Less confusion in codebase

### 2. **Better for SEO**
- Consistent URL pattern across languages
- Easier to track in analytics
- Clear language signals with hreflang tags

### 3. **Industry Best Practice**
Major international sites use this approach:
- GitHub: `/en/about` and `/ja/about`
- Airbnb: `/en-us/about` and `/uk-ua/about`  
- Stripe: `/en/about` and `/ja/about`

### 4. **Developer-Friendly**
```javascript
// Easy routing in Next.js
/[locale]/services/[slug]

// Works for both:
/en/services/ras-systems
/ua/services/ras-systems
```

### 5. **Cleaner Analytics**
Group by path regardless of language:
- `/services/ras-systems/` → see combined traffic
- Filter by language when needed

---

## 🗺️ COMPLETE URL MAP

### Homepage
```
EN: /en/
UA: /ua/
```

### About
```
EN: /en/about/
UA: /ua/about/
```

### Services (Engineering)
```
EN: /en/services/
UA: /ua/services/

EN: /en/services/design/
UA: /ua/services/design/

EN: /en/services/build/
UA: /ua/services/build/

EN: /en/services/operate/
UA: /ua/services/operate/

EN: /en/services/transfer/
UA: /ua/services/transfer/

EN: /en/services/ras-systems/
UA: /ua/services/ras-systems/

EN: /en/services/hfts-technology/
UA: /ua/services/hfts-technology/

EN: /en/services/hatchery-design/
UA: /ua/services/hatchery-design/

EN: /en/services/water-treatment/
UA: /ua/services/water-treatment/

EN: /en/services/processing-facilities/
UA: /ua/services/processing-facilities/

EN: /en/services/feed-mill-design/
UA: /ua/services/feed-mill-design/

EN: /en/services/equipment-design/
UA: /ua/services/equipment-design/
```

### Software Solutions (NEW)
```
EN: /en/software/
UA: /ua/software/

EN: /en/software/ai-counting/
UA: /ua/software/ai-counting/

EN: /en/software/farm-management/
UA: /ua/software/farm-management/

EN: /en/software/iot-monitoring/
UA: /ua/software/iot-monitoring/

EN: /en/software/biofloc-control/
UA: /ua/software/biofloc-control/

EN: /en/software/feed-planning/
UA: /ua/software/feed-planning/

EN: /en/software/genetic-tracking/
UA: /ua/software/genetic-tracking/

EN: /en/software/custom-development/
UA: /ua/software/custom-development/
```

### Projects
```
EN: /en/projects/
UA: /ua/projects/

EN: /en/projects/neusatz-aqua-hatchery/
UA: /ua/projects/neusatz-aqua-hatchery/

EN: /en/projects/catfish-farm-cherkasy/
UA: /ua/projects/catfish-farm-cherkasy/

EN: /en/projects/sturgeon-farm-azerbaijan/
UA: /ua/projects/sturgeon-farm-azerbaijan/

EN: /en/projects/modular-catfish-kyiv/
UA: /ua/projects/modular-catfish-kyiv/

EN: /en/projects/shrimp-farm-lithuania/
UA: /ua/projects/shrimp-farm-lithuania/

EN: /en/projects/ras-lab-modernization/
UA: /ua/projects/ras-lab-modernization/
```

### Species
```
EN: /en/species/
UA: /ua/species/

EN: /en/species/shrimp/
UA: /ua/species/shrimp/

EN: /en/species/shrimp/vannamei/
UA: /ua/species/shrimp/vannamei/

EN: /en/species/shrimp/macrobrachium/
UA: /ua/species/shrimp/macrobrachium/

EN: /en/species/tilapia/
UA: /ua/species/tilapia/

EN: /en/species/catfish/
UA: /ua/species/catfish/

EN: /en/species/sturgeon/
UA: /ua/species/sturgeon/

EN: /en/species/eel/
UA: /ua/species/eel/

EN: /en/species/salmon-trout/
UA: /ua/species/salmon-trout/

EN: /en/species/marine-fish/
UA: /ua/species/marine-fish/
```

### Blog (Insights)
```
EN: /en/insights/
UA: /ua/insights/

EN: /en/insights/category/engineering/
UA: /ua/insights/category/engineering/

EN: /en/insights/category/software/
UA: /ua/insights/category/software/

EN: /en/insights/category/species/
UA: /ua/insights/category/species/

EN: /en/insights/category/technology/
UA: /ua/insights/category/technology/

EN: /en/insights/category/projects/
UA: /ua/insights/category/projects/

EN: /en/insights/category/industry-news/
UA: /ua/insights/category/industry-news/

Individual blog posts:
EN: /en/insights/hfts-game-changer/
UA: /ua/insights/hfts-game-changer/

EN: /en/insights/biofloc-technology-explained/
UA: /ua/insights/biofloc-technology-explained/
```

### Utility Pages
```
EN: /en/contact/
UA: /ua/contact/

EN: /en/privacy/
UA: /ua/privacy/

EN: /en/terms/
UA: /ua/terms/
```

---

## 🔄 301 REDIRECTS MAP

All old URLs must redirect to new structure:

### Core Pages
```
OLD: /en/about-company
NEW: /en/about/

OLD: /ru/vismar-aqua-ltd-ukraine
NEW: /ua/about/

OLD: /en/services
NEW: /en/services/

OLD: /en/projects
NEW: /en/projects/

OLD: /en/contacts
NEW: /en/contact/

OLD: /en/equipment
NEW: /en/services/equipment-design/ (repositioned as service, not sales)
```

### Articles
```
OLD: /hfts-technology-can-be-a-game-changer.html
NEW: /en/insights/hfts-game-changer/

OLD: /en/mini-farm-for-growing-shrimp.html
NEW: /en/guides/mini-shrimp-farm/ (or TBD based on decision)
```

### Russian to Ukrainian
```
OLD: /ru/*
NEW: /ua/* (same slug)

Examples:
/ru/tilyapiya → /ua/species/tilapia/
/ru/barabannye-filtry-vismar-ecodrum.html → /ua/services/water-treatment/
/ru/proekt-ugor-10 → /ua/species/eel/
```

---

## 🛠️ IMPLEMENTATION IN NEXT.JS

### Folder Structure
```
app/
├── [locale]/
│   ├── page.tsx (homepage)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx (overview)
│   │   ├── ras-systems/
│   │   │   └── page.tsx
│   │   ├── hfts-technology/
│   │   │   └── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx (dynamic)
│   ├── software/
│   │   ├── page.tsx (overview)
│   │   └── [slug]/
│   │       └── page.tsx (dynamic)
│   ├── projects/
│   │   ├── page.tsx (overview)
│   │   └── [slug]/
│   │       └── page.tsx (dynamic)
│   └── contact/
│       └── page.tsx
└── middleware.ts (language detection & redirects)
```

### Middleware Example (Language Detection)
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ua']
const defaultLocale = 'ua'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname has locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if no locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

### 301 Redirects Example
```typescript
// next.config.js
module.exports = {
  async redirects() {
    return [
      // Old about page redirects
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
      // Simplify contacts
      {
        source: '/en/contacts',
        destination: '/en/contact/',
        permanent: true,
      },
      // Russian to Ukrainian with same slug
      {
        source: '/ru/:path*',
        destination: '/ua/:path*',
        permanent: true,
      },
      // HFTS article
      {
        source: '/hfts-technology-can-be-a-game-changer.html',
        destination: '/en/insights/hfts-game-changer/',
        permanent: true,
      },
      // Add more as needed...
    ]
  },
}
```

### i18n Configuration (next-intl)
```typescript
// i18n.ts
import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ua'];

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
```

### Example messages files:
```json
// messages/en.json
{
  "nav": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "software": "Software",
    "projects": "Projects",
    "contact": "Contact"
  },
  "homepage": {
    "hero": {
      "title": "Engineering Tomorrow's Aquaculture, Today",
      "subtitle": "Complete facility design + custom software solutions"
    }
  }
}

// messages/ua.json
{
  "nav": {
    "home": "Головна",
    "about": "Про нас",
    "services": "Послуги",
    "software": "Програмне забезпечення",
    "projects": "Проєкти",
    "contact": "Контакти"
  },
  "homepage": {
    "hero": {
      "title": "Проектуємо майбутнє аквакультури сьогодні",
      "subtitle": "Повний цикл проектування + власні програмні рішення"
    }
  }
}
```

---

## 🔍 SEO IMPLEMENTATION

### Hreflang Tags
Every page should have hreflang tags:

```html
<!-- English page -->
<link rel="alternate" hreflang="en" href="https://vismar-aqua.com/en/services/ras-systems/" />
<link rel="alternate" hreflang="uk" href="https://vismar-aqua.com/ua/services/ras-systems/" />
<link rel="alternate" hreflang="x-default" href="https://vismar-aqua.com/en/services/ras-systems/" />

<!-- Ukrainian page -->
<link rel="alternate" hreflang="en" href="https://vismar-aqua.com/en/services/ras-systems/" />
<link rel="alternate" hreflang="uk" href="https://vismar-aqua.com/ua/services/ras-systems/" />
<link rel="alternate" hreflang="x-default" href="https://vismar-aqua.com/en/services/ras-systems/" />
```

Note: Use `uk` (not `ua`) for Ukrainian in hreflang tags (ISO 639-1 language code).

### Language Switcher
```tsx
// LanguageSwitcher.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  
  // Remove current locale from pathname
  const pathWithoutLocale = pathname.replace(/^\/(en|ua)/, '');
  
  return (
    <div className="language-switcher">
      <Link 
        href={`/en${pathWithoutLocale}`}
        className={locale === 'en' ? 'active' : ''}
      >
        EN
      </Link>
      <Link 
        href={`/ua${pathWithoutLocale}`}
        className={locale === 'ua' ? 'active' : ''}
      >
        UA
      </Link>
    </div>
  );
}
```

---

## 📋 CHECKLIST FOR IMPLEMENTATION

### Development Phase:
- [ ] Set up Next.js with App Router
- [ ] Configure i18n with next-intl
- [ ] Create folder structure with [locale] param
- [ ] Implement language detection middleware
- [ ] Create all 301 redirects in next.config.js
- [ ] Add hreflang tags to all pages
- [ ] Build language switcher component
- [ ] Test all redirects work correctly
- [ ] Test language switching on all pages

### Content Phase:
- [ ] Create translation files (en.json, ua.json)
- [ ] Ensure all slugs are in English
- [ ] No Ukrainian slugs in URL structure
- [ ] Consistent naming across both languages
- [ ] Test URLs in both languages

### Testing Phase:
- [ ] Test all old URLs redirect correctly
- [ ] Test no 404 errors
- [ ] Test language switcher
- [ ] Test hreflang tags render correctly
- [ ] Test SEO meta tags in both languages
- [ ] Test analytics tracking
- [ ] Test on mobile devices

### Launch Checklist:
- [ ] All redirects live
- [ ] Monitor 404s for missed redirects
- [ ] Check Search Console for crawl errors
- [ ] Verify sitemap includes both languages
- [ ] Submit sitemaps to Google
- [ ] Monitor ranking changes
- [ ] Set up alerts for broken pages

---

## 📊 ANALYTICS SETUP

### Google Analytics 4
Track language as dimension:
```javascript
gtag('config', 'GA_MEASUREMENT_ID', {
  'user_properties': {
    'language': locale // 'en' or 'ua'
  }
});
```

### URL Grouping
Group by path without locale:
```
/en/services/ras-systems/ } Group as: /services/ras-systems/
/ua/services/ras-systems/ }
```

This lets you see:
- Total traffic per page
- Language split per page
- Conversion by language

---

## ✅ ADVANTAGES SUMMARY

### For Users:
✅ Clean, predictable URLs
✅ Easy to share links
✅ Language clear from URL
✅ No confusion

### For Developers:
✅ One URL structure to maintain
✅ Simpler routing logic
✅ Consistent patterns
✅ Easier to debug

### For SEO:
✅ Clear language signals
✅ Proper hreflang implementation
✅ Better indexing
✅ Cleaner analytics

### For Business:
✅ Professional appearance
✅ International standard
✅ Scalable (add more languages easily)
✅ Lower maintenance costs

---

## ❓ FAQ

**Q: Why English slugs for Ukrainian pages?**
A: Industry best practice. Makes development easier, SEO clearer, and is what users expect from international sites.

**Q: Won't Ukrainian users find it strange?**
A: No - this is standard for bilingual sites. Users see the content in their language, which is what matters. The slug is just technical.

**Q: Can we add more languages later?**
A: Yes! Just add /es/, /de/, /pl/ etc. Same slug structure, different content.

**Q: What about URL keywords for SEO?**
A: Google understands content language from hreflang tags and actual content, not URL slugs. English slugs don't hurt Ukrainian SEO.

**Q: What if we want Ukrainian slugs later?**
A: Would require major refactoring and all new redirects. Better to start with this approach and stick with it.

---

**Document Version:** 1.0  
**Last Updated:** November 13, 2025  
**For:** Vismar Aqua Website Redesign
