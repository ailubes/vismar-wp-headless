/**
 * Translation Validation Utility
 *
 * Ensures all translation files have matching keys and structure.
 * Run this during build or testing to catch missing translations.
 */

import type { TranslationMessages } from './translation-types';

/**
 * Get all keys from an object recursively
 */
function getAllKeys(obj: any, prefix = ''): string[] {
  if (typeof obj !== 'object' || obj === null) {
    return [prefix];
  }

  return Object.keys(obj).flatMap((key) => {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    return getAllKeys(obj[key], newPrefix);
  });
}

/**
 * Compare two translation objects and find missing keys
 */
export function findMissingKeys(
  source: any,
  target: any,
  sourceName = 'source',
  targetName = 'target'
): {
  missingInTarget: string[];
  missingInSource: string[];
} {
  const sourceKeys = getAllKeys(source).sort();
  const targetKeys = getAllKeys(target).sort();

  const missingInTarget = sourceKeys.filter((key) => !targetKeys.includes(key));
  const missingInSource = targetKeys.filter((key) => !sourceKeys.includes(key));

  return { missingInTarget, missingInSource };
}

/**
 * Validate all translation files have matching keys
 */
export async function validateTranslations(): Promise<{
  isValid: boolean;
  errors: string[];
  warnings: string[];
}> {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    // Import all translation files
    const en = (await import('@/messages/en.json')).default;
    const uk = (await import('@/messages/uk.json')).default;

    // Compare EN and UK
    const { missingInTarget: missingInUk, missingInSource: missingInEn } =
      findMissingKeys(en, uk, 'en', 'uk');

    if (missingInUk.length > 0) {
      errors.push(
        `Missing keys in UK translation: ${missingInUk.join(', ')}`
      );
    }

    if (missingInEn.length > 0) {
      errors.push(
        `Missing keys in EN translation: ${missingInEn.join(', ')}`
      );
    }

    // Check for empty values
    const checkEmptyValues = (obj: any, lang: string, path = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key;
        if (typeof value === 'object' && value !== null) {
          checkEmptyValues(value, lang, currentPath);
        } else if (typeof value === 'string' && value.trim() === '') {
          warnings.push(`Empty value in ${lang}: ${currentPath}`);
        }
      }
    };

    checkEmptyValues(en, 'en');
    checkEmptyValues(uk, 'uk');

  } catch (error) {
    errors.push(`Failed to load translation files: ${error}`);
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Type guard to check if an object matches TranslationMessages interface
 */
export function isValidTranslationMessages(
  obj: any
): obj is TranslationMessages {
  return (
    obj &&
    typeof obj === 'object' &&
    'common' in obj &&
    'navigation' in obj &&
    'homepage' in obj &&
    'footer' in obj &&
    'language' in obj &&
    'pages' in obj &&
    'contact' in obj
  );
}

/**
 * Get a translation value by dot notation path
 * Example: getValue(messages, 'pages.about.title')
 */
export function getTranslationValue(
  messages: TranslationMessages,
  path: string
): string | undefined {
  const keys = path.split('.');
  let value: any = messages;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }

  return typeof value === 'string' ? value : undefined;
}
