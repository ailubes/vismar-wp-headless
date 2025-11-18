/**
 * Translation Helper Utility
 *
 * Utilities to help with adding new languages and managing translations.
 */

import type { TranslationMessages } from './translation-types';
import type { Locale } from './i18n';

/**
 * Language configuration
 */
export interface LanguageConfig {
  code: Locale;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

/**
 * Available languages configuration
 */
export const AVAILABLE_LANGUAGES: LanguageConfig[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
  },
  {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    direction: 'ltr',
  },
];

/**
 * Default language
 */
export const DEFAULT_LANGUAGE: Locale = 'en';

/**
 * Get language config by code
 */
export function getLanguageConfig(code: string): LanguageConfig | undefined {
  return AVAILABLE_LANGUAGES.find((lang) => lang.code === code);
}

/**
 * Check if a language code is supported
 */
export function isSupportedLanguage(code: string): code is Locale {
  return AVAILABLE_LANGUAGES.some((lang) => lang.code === code);
}

/**
 * Template for new language file
 * Copy this structure when adding a new language
 */
export const TRANSLATION_TEMPLATE: TranslationMessages = {
  common: {
    home: '',
    about: '',
    services: '',
    projects: '',
    contact: '',
    learnMore: '',
    readMore: '',
    getQuote: '',
    copyright: '',
    loading: '',
    error: '',
    notFound: '',
  },
  navigation: {
    mainMenu: '',
    skipToContent: '',
  },
  homepage: {
    hero: {
      title: '',
      tagline: '',
      subtitle: '',
      description: '',
      cta: '',
      ctaSecondary: '',
    },
    stats: {
      experience: '',
      projects: '',
      countries: '',
      software: '',
    },
    software: {
      title: '',
      subtitle: '',
      description: '',
      cta: '',
    },
    services: {
      title: '',
      subtitle: '',
      description: '',
    },
    projects: {
      title: '',
      subtitle: '',
      description: '',
      viewAll: '',
    },
    cta: {
      consultation: {
        title: '',
        description: '',
        button: '',
      },
      demo: {
        title: '',
        description: '',
        button: '',
      },
    },
  },
  footer: {
    company: '',
    tagline: '',
    address: '',
    phone: '',
    email: '',
    followUs: '',
  },
  language: {
    switchTo: '',
    en: '',
    uk: '',
  },
  pages: {
    about: {
      title: '',
      description: '',
      subtitle: '',
    },
    services: {
      title: '',
      description: '',
      subtitle: '',
      cta: '',
    },
    projects: {
      title: '',
      description: '',
      subtitle: '',
      cta: '',
    },
    equipment: {
      title: '',
      description: '',
      subtitle: '',
      content: '',
      cta: '',
    },
    whatIsRas: {
      title: '',
      description: '',
      subtitle: '',
      content: '',
      benefits: {
        title: '',
        waterEfficiency: '',
        yearRound: '',
        biosecurity: '',
        environmental: '',
      },
      cta: '',
    },
    contact: {
      title: '',
      description: '',
      subtitle: '',
    },
  },
  contact: {
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
      submit: '',
      namePlaceholder: '',
      emailPlaceholder: '',
      subjectPlaceholder: '',
      messagePlaceholder: '',
      success: '',
      error: '',
    },
    info: {
      title: '',
      address: '',
      phone: '',
      email: '',
      hours: '',
    },
  },
};

/**
 * Generate a template JSON file for a new language
 * Usage: Copy this output to messages/{language-code}.json and fill in translations
 */
export function generateLanguageTemplate(): string {
  return JSON.stringify(TRANSLATION_TEMPLATE, null, 2);
}

/**
 * Instructions for adding a new language
 */
export const ADD_LANGUAGE_INSTRUCTIONS = `
# How to Add a New Language

## Step 1: Create Translation File
1. Copy the template structure from TRANSLATION_TEMPLATE
2. Create a new file: messages/{language-code}.json
3. Fill in all translation values

## Step 2: Update i18n Configuration
1. Open lib/i18n.ts
2. Add the new language code to the 'locales' array
   Example: export const locales = ['en', 'uk', 'pl'] as const;

## Step 3: Update Language Configuration
1. Open lib/translation-helper.ts
2. Add the new language to AVAILABLE_LANGUAGES array
   Example:
   {
     code: 'pl',
     name: 'Polish',
     nativeName: 'Polski',
     direction: 'ltr',
   }

## Step 4: Update Language Switcher
1. Update the language.switchTo translations in all language files
2. Add the new language name to the language object
   Example: "pl": "Polish" (in en.json) or "pl": "Польська" (in uk.json)

## Step 5: Validate
1. Run the translation validator to ensure all keys match
2. Test the language switcher in the application
3. Verify all pages render correctly in the new language

## Example: Adding Polish

1. Create messages/pl.json with all translations in Polish
2. Update lib/i18n.ts: locales = ['en', 'uk', 'pl']
3. Add to AVAILABLE_LANGUAGES in lib/translation-helper.ts
4. Update all JSON files to include "pl": "Polish" / "Польська" / "Polski"
5. Test and validate
`;
