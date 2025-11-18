#!/usr/bin/env node

/**
 * Translation Validation Script
 *
 * Validates that all translation files have matching keys and proper structure.
 * Run this script before committing translation changes.
 *
 * Usage: node scripts/validate-translations.js
 */

const fs = require('fs');
const path = require('path');

const MESSAGES_DIR = path.join(__dirname, '..', 'messages');
const LOCALES = ['en', 'uk'];

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getAllKeys(obj, prefix = '') {
  if (typeof obj !== 'object' || obj === null) {
    return [prefix];
  }

  return Object.keys(obj).flatMap((key) => {
    const newPrefix = prefix ? `${prefix}.${key}` : key;
    return getAllKeys(obj[key], newPrefix);
  });
}

function findMissingKeys(source, target) {
  const sourceKeys = getAllKeys(source).sort();
  const targetKeys = getAllKeys(target).sort();

  const missingInTarget = sourceKeys.filter((key) => !targetKeys.includes(key));
  const missingInSource = targetKeys.filter((key) => !sourceKeys.includes(key));

  return { missingInTarget, missingInSource };
}

function checkEmptyValues(obj, path = '') {
  const emptyKeys = [];

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key;

    if (typeof value === 'object' && value !== null) {
      emptyKeys.push(...checkEmptyValues(value, currentPath));
    } else if (typeof value === 'string' && value.trim() === '') {
      emptyKeys.push(currentPath);
    }
  }

  return emptyKeys;
}

async function validateTranslations() {
  log('\n=== Translation Validation ===\n', 'cyan');

  let hasErrors = false;
  const warnings = [];

  // Load all translation files
  const translations = {};

  for (const locale of LOCALES) {
    const filePath = path.join(MESSAGES_DIR, `${locale}.json`);

    if (!fs.existsSync(filePath)) {
      log(`✗ Missing translation file: ${locale}.json`, 'red');
      hasErrors = true;
      continue;
    }

    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      translations[locale] = JSON.parse(content);
      log(`✓ Loaded ${locale}.json`, 'green');
    } catch (error) {
      log(`✗ Invalid JSON in ${locale}.json: ${error.message}`, 'red');
      hasErrors = true;
    }
  }

  // Check for missing keys between locales
  log('\n--- Checking Key Parity ---\n', 'cyan');

  const locales = Object.keys(translations);

  for (let i = 0; i < locales.length; i++) {
    for (let j = i + 1; j < locales.length; j++) {
      const locale1 = locales[i];
      const locale2 = locales[j];

      const { missingInTarget, missingInSource } = findMissingKeys(
        translations[locale1],
        translations[locale2]
      );

      if (missingInTarget.length > 0) {
        log(`✗ Keys in ${locale1} but missing in ${locale2}:`, 'red');
        missingInTarget.forEach(key => log(`  - ${key}`, 'red'));
        hasErrors = true;
      }

      if (missingInSource.length > 0) {
        log(`✗ Keys in ${locale2} but missing in ${locale1}:`, 'red');
        missingInSource.forEach(key => log(`  - ${key}`, 'red'));
        hasErrors = true;
      }

      if (missingInTarget.length === 0 && missingInSource.length === 0) {
        log(`✓ ${locale1} and ${locale2} have matching keys`, 'green');
      }
    }
  }

  // Check for empty values
  log('\n--- Checking for Empty Values ---\n', 'cyan');

  for (const [locale, data] of Object.entries(translations)) {
    const emptyKeys = checkEmptyValues(data);

    if (emptyKeys.length > 0) {
      warnings.push(`Empty values in ${locale}: ${emptyKeys.join(', ')}`);
      log(`⚠ Empty values in ${locale}:`, 'yellow');
      emptyKeys.forEach(key => log(`  - ${key}`, 'yellow'));
    } else {
      log(`✓ No empty values in ${locale}`, 'green');
    }
  }

  // Check required top-level keys
  log('\n--- Checking Required Structure ---\n', 'cyan');

  const requiredKeys = ['common', 'navigation', 'homepage', 'footer', 'language', 'pages', 'contact'];

  for (const [locale, data] of Object.entries(translations)) {
    const missingRequired = requiredKeys.filter(key => !(key in data));

    if (missingRequired.length > 0) {
      log(`✗ Missing required top-level keys in ${locale}: ${missingRequired.join(', ')}`, 'red');
      hasErrors = true;
    } else {
      log(`✓ All required top-level keys present in ${locale}`, 'green');
    }
  }

  // Summary
  log('\n=== Validation Summary ===\n', 'cyan');

  if (hasErrors) {
    log('✗ Validation FAILED - Please fix the errors above', 'red');
    process.exit(1);
  } else if (warnings.length > 0) {
    log(`⚠ Validation PASSED with ${warnings.length} warning(s)`, 'yellow');
    warnings.forEach(warning => log(`  - ${warning}`, 'yellow'));
    process.exit(0);
  } else {
    log('✓ Validation PASSED - All translations are valid!', 'green');
    process.exit(0);
  }
}

// Run validation
validateTranslations().catch(error => {
  log(`\n✗ Validation script failed: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});
