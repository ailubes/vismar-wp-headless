# Translation Quick Start Guide

Quick reference for working with translations in the Vismar Aqua frontend.

## Running Validation

```bash
# Validate all translations
npm run validate:translations
```

## Using Translations in Components

### Client Components

```typescript
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('pages.equipment');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Server Components

```typescript
import { getTranslations } from 'next-intl/server';

export default async function MyPage({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'pages.equipment' });

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Metadata (SEO)

```typescript
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'pages.equipment' });

  return {
    title: t('title'),
    description: t('description'),
  };
}
```

## Available Translation Namespaces

```typescript
// Common UI elements
useTranslations('common')
// home, about, services, projects, contact, learnMore, readMore, etc.

// Navigation
useTranslations('navigation')
// mainMenu, skipToContent

// Homepage sections
useTranslations('homepage.hero')
useTranslations('homepage.stats')
useTranslations('homepage.software')
useTranslations('homepage.services')
useTranslations('homepage.projects')
useTranslations('homepage.cta.consultation')
useTranslations('homepage.cta.demo')

// Footer
useTranslations('footer')
// company, tagline, address, phone, email, followUs

// Language switcher
useTranslations('language')
// switchTo, en, uk

// Page-specific content
useTranslations('pages.about')
useTranslations('pages.services')
useTranslations('pages.projects')
useTranslations('pages.equipment')
useTranslations('pages.whatIsRas')
useTranslations('pages.contact')

// Contact form
useTranslations('contact.form')
useTranslations('contact.info')
```

## Adding a New Translation Key

1. **Add to English** (`messages/en.json`):
```json
{
  "pages": {
    "equipment": {
      "title": "Equipment",
      "newKey": "New translation value"  // ← Add here
    }
  }
}
```

2. **Add to Ukrainian** (`messages/uk.json`):
```json
{
  "pages": {
    "equipment": {
      "title": "Обладнання",
      "newKey": "Нове значення перекладу"  // ← Add here
    }
  }
}
```

3. **Validate**:
```bash
npm run validate:translations
```

4. **Use in code**:
```typescript
const t = useTranslations('pages.equipment');
return <p>{t('newKey')}</p>;
```

## Adding a New Language

See detailed instructions in `/messages/README-TRANSLATIONS.md`

**Quick steps:**
1. Copy `messages/en.json` to `messages/pl.json` (for Polish)
2. Translate all values
3. Update `lib/i18n.ts` - add `'pl'` to locales array
4. Update `lib/translation-helper.ts` - add Polish config
5. Run `npm run validate:translations`

## Current Languages

- **English (en)**: Primary language
- **Ukrainian (uk)**: Secondary language

## Common Translation Patterns

### Button Text
```typescript
const t = useTranslations('common');
<button>{t('learnMore')}</button>
```

### Form Labels
```typescript
const t = useTranslations('contact.form');
<input placeholder={t('namePlaceholder')} />
```

### Dynamic Content
```typescript
const t = useTranslations('pages.whatIsRas.benefits');
const benefits = [
  t('waterEfficiency'),
  t('yearRound'),
  t('biosecurity'),
  t('environmental')
];
```

## Type Safety

Import types for autocomplete:

```typescript
import type { TranslationMessages } from '@/lib/translation-types';
import type { TranslationKeyPath } from '@/lib/translation-types';
```

## Validation Utilities

```typescript
import {
  validateTranslations,
  findMissingKeys,
  getTranslationValue
} from '@/lib/translation-validator';

// Validate all translations
const result = await validateTranslations();

// Compare two translation objects
const { missingInTarget, missingInSource } = findMissingKeys(en, uk);

// Get translation by path
const value = getTranslationValue(messages, 'pages.equipment.title');
```

## Files Overview

| File | Purpose |
|------|---------|
| `messages/en.json` | English translations |
| `messages/uk.json` | Ukrainian translations |
| `messages/README-TRANSLATIONS.md` | Full documentation |
| `lib/i18n.ts` | i18n configuration |
| `lib/translation-types.ts` | TypeScript types |
| `lib/translation-validator.ts` | Validation utilities |
| `lib/translation-helper.ts` | Helper functions |
| `scripts/validate-translations.js` | Validation script |

## Need Help?

1. Check `/messages/README-TRANSLATIONS.md` for detailed docs
2. Run `npm run validate:translations` to check for errors
3. Check TypeScript errors for translation key issues
4. Review existing components for usage examples

---

**Last Updated**: 2025-11-16
