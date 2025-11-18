/**
 * Legacy URL Mappings for Vismar Aqua Website
 *
 * This file contains explicit mappings for specific legacy URLs
 * that require custom handling beyond pattern-based redirects.
 */

export interface UrlMapping {
  from: string;
  to: string;
  permanent?: boolean;
}

/**
 * Specific page redirects that don't follow standard patterns
 */
export const specificPageMappings: UrlMapping[] = [
  // Old about/contact pages
  { from: '/about', to: '/uk/about', permanent: true },
  { from: '/contact', to: '/uk/contact', permanent: true },
  { from: '/ru/about', to: '/uk/about', permanent: true },
  { from: '/ru/contact', to: '/uk/contact', permanent: true },
  { from: '/ua/about', to: '/uk/about', permanent: true },
  { from: '/ua/contact', to: '/uk/contact', permanent: true },

  // Old service pages
  { from: '/services', to: '/uk/services', permanent: true },
  { from: '/ru/services', to: '/uk/services', permanent: true },
  { from: '/ua/services', to: '/uk/services', permanent: true },

  // Old project pages
  { from: '/projects', to: '/uk/projects', permanent: true },
  { from: '/ru/projects', to: '/uk/projects', permanent: true },
  { from: '/ua/projects', to: '/uk/projects', permanent: true },

  // Old species pages
  { from: '/species', to: '/uk/species', permanent: true },
  { from: '/ru/species', to: '/uk/species', permanent: true },
  { from: '/ua/species', to: '/uk/species', permanent: true },

  // Old software pages
  { from: '/software', to: '/uk/software', permanent: true },
  { from: '/ru/software', to: '/uk/software', permanent: true },
  { from: '/ua/software', to: '/uk/software', permanent: true },
];

/**
 * Category name mappings (old slug -> new slug)
 * Used when category slugs have changed
 */
export const categoryMappings: Record<string, string> = {
  'novini': 'novini',
  'stati': 'stati',
  'proekti': 'proekti',
  'bez-kategoriyi': 'bez-kategoriyi',
  'ras-uk': 'ras-uk',
  'ryba': 'ryba',
  'barabanni-filtri': 'barabanni-filtri',
  'bakterialni-zasobi-uk': 'bakterialni-zasobi-uk',
  'news-en-2': 'news-en-2',
  'blogs': 'blogs',
};

/**
 * Post slug mappings for posts that have been renamed
 * Old slug -> New slug
 */
export const postSlugMappings: Record<string, string> = {
  // Add specific post redirects if slugs changed
  // Example:
  // 'old-post-slug': 'new-post-slug',
};

/**
 * Language code mappings
 * Maps old language codes to new ones
 */
export const languageMappings: Record<string, string> = {
  'ru': 'uk',
  'ua': 'uk',
  'uk': 'uk',
  'en': 'en',
};

/**
 * URL patterns that should be preserved (no redirect)
 * These are already in the correct format
 */
export const preservedPatterns = [
  /^\/uk\/.+/,  // Already has uk prefix
  /^\/en\/.+/,  // Already has en prefix
  /^\/api\/.+/, // API routes
  /^\/wp-content\/uploads\/.+/, // Media files
  /^\/_next\/.+/, // Next.js internals
];

/**
 * Helper function to get the new URL for a legacy URL
 */
export function getMappedUrl(oldUrl: string): string | null {
  // Check specific mappings first
  const specificMapping = specificPageMappings.find(m => m.from === oldUrl);
  if (specificMapping) {
    return specificMapping.to;
  }

  // Check if URL should be preserved
  if (preservedPatterns.some(pattern => pattern.test(oldUrl))) {
    return null;
  }

  return null;
}
