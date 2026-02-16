# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vismar Aqua is a **bilingual (EN/UK) headless WordPress frontend** built with Next.js 14, TypeScript, Tailwind CSS, and next-intl for internationalization. It connects to a WordPress backend via GraphQL using Apollo Client.

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm start                # Start production server
npm run lint             # ESLint check
npm run type-check       # TypeScript type checking
npm run validate:translations   # Validate translation files
```

## Architecture

### Routing & Internationalization
- **App Router** with locale prefix: `/[locale]/` (en, uk)
- All routes require locale prefix - middleware handles redirects
- Legacy URLs (ru, ua, .html extensions) redirect to new structure via `middleware.ts`
- Translation files: `messages/en.json`, `messages/uk.json`
- i18n config: `lib/i18n.ts` defines supported locales

### Data Layer
- **Apollo Client** connects to WordPress GraphQL (`lib/wordpress/client.ts`)
- GraphQL queries in `lib/wordpress/queries.ts`
- Type definitions in `lib/wordpress/types.ts`
- Environment: `WORDPRESS_API_URL` or `WORDPRESS_GRAPHQL_URL`

### Content Types (Custom Post Types)
The site uses WordPress ACF for structured content:
- **Services**: `/[locale]/services/[slug]/` - aquaculture engineering services
- **Projects**: `/[locale]/projects/[slug]/` - completed project case studies
- **Species**: `/[locale]/species/[slug]/` - fish species information
- **Software**: `/[locale]/software/[slug]/` - digital solutions
- **Blog**: `/[locale]/blog/[slug]/` - news and articles

### Key Directories
```
app/[locale]/           # Page routes with locale segments
components/
  layout/               # Header, Footer, LanguageSwitcher
  ui/                   # Reusable components (Button, Card, Section, etc.)
lib/
  wordpress/            # Apollo client, queries, types
  seo/                  # Metadata utilities, structured data
  redirects/            # URL mapping utilities
messages/               # i18n translation JSON files
```

## Styling

### Design System Colors (tailwind.config.ts)
```typescript
brand: {
  primary: '#1B4B63',    // Deep Ocean Blue (main brand)
  secondary: '#00A8B5',  // Aqua/Cyan (highlights, links)
  accent: '#FF6B35',     // Coral Orange (CTAs)
  success: '#4ECDC4',    // Seafoam Green
}
```

### Fonts
- **Headings**: Playfair Display (var: `--font-playfair`)
- **Body**: Manrope (var: `--font-manrope`)

## Middleware Behavior

`middleware.ts` handles:
1. Legacy URL redirects (ru→uk, .html removal, old WordPress paths)
2. Locale prefix enforcement (always prefixed)
3. Default locale: English (en), but root `/` redirects to `/uk`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `WORDPRESS_API_URL` | WordPress GraphQL endpoint |
| `WORDPRESS_GRAPHQL_URL` | Alternative GraphQL URL |
| `NEXT_PUBLIC_SITE_URL` | Site URL for revalidation |

## Testing

- Playwright available (`@playwright/test`) for E2E testing
- Test files: `*.spec.js` in project root

---

## Orchestration Workflow

When given implementation tasks, follow this workflow:

### Step 1: Plan with TodoWrite
Create detailed, actionable todo items using TodoWrite

### Step 2: Delegate to Subagents
- **coder**: Implement one todo item at a time
- **tester**: Verify implementation with Playwright after each coder task
- **stuck**: Escalate to human when blocked or tests fail

### Step 3: Iterate
- Mark todos complete after successful tests
- Move to next todo item
- Repeat until all tasks done

### Critical Rules
- Always create pages for every header/footer link (no 404s)
- Test every implementation with the tester subagent
- Use stuck agent when encountering errors or needing decisions
