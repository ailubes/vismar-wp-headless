# Translation Documentation

This document provides comprehensive guidance on managing translations for the Vismar Aqua Next.js frontend.

## Table of Contents

1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Adding a New Language](#adding-a-new-language)
4. [Translation Key Structure](#translation-key-structure)
5. [Best Practices](#best-practices)
6. [Validation & Testing](#validation--testing)
7. [Common Patterns](#common-patterns)

---

## Overview

The Vismar Aqua frontend uses **next-intl** for internationalization (i18n). All translations are stored as JSON files in this directory, with one file per language.

### Current Languages

- **English (en)**: `en.json` - Primary language
- **Ukrainian (uk)**: `uk.json` - Secondary language

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **i18n Library**: next-intl
- **Configuration**: `/lib/i18n.ts`
- **Type Definitions**: `/lib/translation-types.ts`
- **Validation**: `/lib/translation-validator.ts`
- **Helpers**: `/lib/translation-helper.ts`

---

## File Structure

```
frontend/
├── messages/
│   ├── en.json           # English translations
│   ├── uk.json           # Ukrainian translations
│   └── README-TRANSLATIONS.md  # This file
├── lib/
│   ├── i18n.ts           # i18n configuration
│   ├── translation-types.ts    # TypeScript types
│   ├── translation-validator.ts # Validation utilities
│   └── translation-helper.ts   # Helper utilities
└── app/
    └── [locale]/         # Locale-based routing
```

---

## Adding a New Language

Follow these steps to add a new language (e.g., Polish):

### Step 1: Create Translation File

1. Copy the structure from `en.json` or use the template:

```bash
# From the frontend directory
cp messages/en.json messages/pl.json
```

2. Translate all values in `pl.json` to Polish

### Step 2: Update i18n Configuration

Edit `/lib/i18n.ts`:

```typescript
// Before
export const locales = ['en', 'uk'] as const;

// After
export const locales = ['en', 'uk', 'pl'] as const;
```

### Step 3: Update Language Configuration

Edit `/lib/translation-helper.ts`, add to `AVAILABLE_LANGUAGES`:

```typescript
{
  code: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  direction: 'ltr',
}
```

### Step 4: Update Language Names

Add the new language name to **all** language files:

**In `en.json`:**
```json
{
  "language": {
    "switchTo": "Switch to",
    "en": "English",
    "uk": "Ukrainian",
    "pl": "Polish"  // Add this
  }
}
```

**In `uk.json`:**
```json
{
  "language": {
    "switchTo": "Перемкнути на",
    "en": "Англійська",
    "uk": "Українська",
    "pl": "Польська"  // Add this
  }
}
```

**In `pl.json`:**
```json
{
  "language": {
    "switchTo": "Przełącz na",
    "en": "Angielski",
    "uk": "Ukraiński",
    "pl": "Polski"  // Add this
  }
}
```

### Step 5: Validate

```bash
# Validate JSON syntax
node -e "require('./messages/pl.json')"

# Run translation validator (if you have a test script)
npm run validate:translations
```

---

## Translation Key Structure

All translation files must have the **exact same structure** with matching keys. Only the values (translations) should differ.

### Root-Level Keys

```json
{
  "common": {},       // Common UI elements
  "navigation": {},   // Navigation-related text
  "homepage": {},     // Homepage-specific content
  "footer": {},       // Footer content
  "language": {},     // Language switcher
  "pages": {},        // Page-specific translations
  "contact": {}       // Contact form and info
}
```

### Complete Structure

```json
{
  "common": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "projects": "Projects",
    "contact": "Contact",
    "learnMore": "Learn More",
    "readMore": "Read More",
    "getQuote": "Get a Quote",
    "copyright": "All rights reserved.",
    "loading": "Loading...",
    "error": "An error occurred",
    "notFound": "Page not found"
  },
  "navigation": {
    "mainMenu": "Main Menu",
    "skipToContent": "Skip to content"
  },
  "homepage": {
    "hero": { ... },
    "stats": { ... },
    "software": { ... },
    "services": { ... },
    "projects": { ... },
    "cta": { ... }
  },
  "footer": {
    "company": "Vismar Aqua",
    "tagline": "Professional Water Treatment Solutions",
    "address": "Address",
    "phone": "Phone",
    "email": "Email",
    "followUs": "Follow Us"
  },
  "language": {
    "switchTo": "Switch to",
    "en": "English",
    "uk": "Ukrainian"
  },
  "pages": {
    "about": { ... },
    "services": { ... },
    "projects": { ... },
    "equipment": { ... },
    "whatIsRas": { ... },
    "contact": { ... }
  },
  "contact": {
    "form": { ... },
    "info": { ... }
  }
}
```

---

## Best Practices

### 1. Consistency is Key

- **ALWAYS** maintain the same key structure across all language files
- If you add a key to one file, add it to ALL language files
- Use the validation utilities to check for missing keys

### 2. Professional Tone

- Use business-appropriate language
- Avoid slang or overly casual phrases
- Maintain consistency in terminology (e.g., always use "RAS" or always spell out "Recirculating Aquaculture Systems")

### 3. Formatting Guidelines

- **Capitalization**: Use title case for headings, sentence case for descriptions
- **Punctuation**: Be consistent (all sentences end with periods, or none do)
- **Placeholders**: Keep placeholder text helpful and clear
- **CTAs**: Use action verbs (e.g., "Get Started", "Learn More", "Contact Us")

### 4. Technical Terminology

Create a glossary for technical terms:

| English | Ukrainian | Polish | Notes |
|---------|-----------|--------|-------|
| RAS | УЗВ | RAS | Recirculating Aquaculture System |
| Aquaculture | Аквакультура | Akwakultura | Fish farming |
| Biofilter | Біофільтр | Biofiltr | Biological filter |
| Equipment | Обладнання | Sprzęt | Hardware/equipment |

### 5. Context Matters

- Consider the context where the text will appear
- Button text should be concise (1-3 words)
- Descriptions can be longer (1-2 sentences)
- Tooltips should be brief but informative

### 6. Testing Translations

- Test all translations in the UI to check for:
  - Text overflow (some languages are longer)
  - Line breaking issues
  - Cultural appropriateness
  - Grammatical correctness

---

## Validation & Testing

### Manual Validation

1. **JSON Syntax**: Ensure valid JSON
```bash
node -e "require('./messages/en.json')"
node -e "require('./messages/uk.json')"
```

2. **Key Parity**: Check both files have the same keys
```bash
# Run from frontend directory
node -e "
const en = require('./messages/en.json');
const uk = require('./messages/uk.json');
console.log('EN keys:', Object.keys(en).sort());
console.log('UK keys:', Object.keys(uk).sort());
"
```

### Automated Validation

Use the built-in validator:

```typescript
import { validateTranslations } from '@/lib/translation-validator';

const result = await validateTranslations();
if (!result.isValid) {
  console.error('Translation errors:', result.errors);
}
if (result.warnings.length > 0) {
  console.warn('Translation warnings:', result.warnings);
}
```

### Type Checking

TypeScript types are auto-generated in `/lib/translation-types.ts`. Use them for type safety:

```typescript
import type { TranslationMessages } from '@/lib/translation-types';

// This will give you autocomplete and type checking
const messages: TranslationMessages = require('./messages/en.json');
```

---

## Common Patterns

### 1. Using Translations in Components

```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');

  return <button>{t('learnMore')}</button>;
}
```

### 2. Nested Translations

```typescript
const t = useTranslations('pages.equipment');

return (
  <div>
    <h1>{t('title')}</h1>
    <p>{t('description')}</p>
  </div>
);
```

### 3. Dynamic Content

```typescript
const t = useTranslations('contact.form');

return (
  <form>
    <input placeholder={t('namePlaceholder')} />
    <button>{t('submit')}</button>
  </form>
);
```

### 4. Page Metadata

```typescript
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'pages.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
```

---

## Troubleshooting

### Missing Translation Warnings

If you see warnings about missing translations:

1. Check which key is missing
2. Add it to the appropriate language file
3. Ensure the key path is correct (case-sensitive)

### Translation Not Showing

1. Verify the translation exists in the JSON file
2. Check the namespace is correct
3. Clear Next.js cache: `rm -rf .next && npm run dev`
4. Verify the locale parameter is being passed correctly

### Type Errors

1. Update `/lib/translation-types.ts` if you add new keys
2. Run TypeScript check: `npm run type-check`
3. Ensure all language files have matching structure

---

## Migration Notes

### From WordPress WPML

If migrating from WordPress with WPML:

1. Export translations from WPML
2. Map WPML translation strings to the JSON structure
3. Use the WordPress posts' language metadata to determine locale
4. Keep slug naming consistent with WordPress for SEO

### Adding Translations for WordPress Content

WordPress content (posts, pages) is pulled dynamically. For static UI elements:

1. Add keys to this JSON structure
2. For dynamic content, ensure WordPress has WPML or Polylang configured
3. Use the language slug from WordPress to match Next.js locale

---

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Translation Best Practices](https://www.w3.org/International/questions/qa-i18n)

---

## Support

For questions or issues with translations:

1. Check this documentation first
2. Review the TypeScript types in `/lib/translation-types.ts`
3. Run the validator in `/lib/translation-validator.ts`
4. Consult the team lead or project maintainer

---

**Last Updated**: 2025-11-16
**Maintainer**: Development Team
**Status**: Active
