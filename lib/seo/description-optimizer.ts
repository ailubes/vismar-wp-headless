/**
 * Meta Description Optimizer
 *
 * Optimizes meta descriptions for SEO with targeted aquaculture keywords
 * and regional focus on Ukraine and Eastern Europe.
 */

/**
 * Category-specific keyword mapping for aquaculture industry
 */
const CATEGORY_KEYWORDS: Record<string, Record<string, string[]>> = {
  en: {
    'ras-systems': ['recirculating aquaculture Ukraine', 'RAS technology', 'fish farming systems'],
    'water-quality': ['water treatment', 'aquaculture filtration', 'water management'],
    'fish-species': ['fish farming Ukraine', 'aquaculture species', 'fish cultivation'],
    'tilapia': ['tilapia farming Ukraine', 'tilapia aquaculture', 'tilapia production'],
    'sturgeon': ['sturgeon farming', 'sturgeon aquaculture Ukraine', 'caviar production'],
    'trout': ['trout farming', 'rainbow trout Ukraine', 'trout aquaculture'],
    'catfish': ['catfish farming', 'clarias catfish', 'African catfish aquaculture'],
    'shrimp': ['shrimp farming Ukraine', 'vannamei shrimp', 'shrimp aquaculture'],
    'crayfish': ['crayfish farming', 'freshwater crayfish', 'crayfish aquaculture'],
    'technology': ['aquaculture automation', 'fish farm technology', 'smart aquaculture'],
    'equipment': ['aquaculture equipment', 'fish farm equipment Ukraine', 'RAS components'],
    'consulting': ['aquaculture consulting Ukraine', 'fish farm design', 'aquaculture expert'],
    'default': ['aquaculture Ukraine', 'fish farming', 'sustainable aquaculture']
  },
  uk: {
    'ras-systems': ['рециркуляційна аквакультура Україна', 'РАС технологія', 'системи рибництва'],
    'water-quality': ['очищення води', 'фільтрація в аквакультурі', 'управління водою'],
    'fish-species': ['розведення риби Україна', 'види аквакультури', 'вирощування риби'],
    'tilapia': ['вирощування тиляпії Україна', 'аквакультура тиляпії', 'тиляпія'],
    'sturgeon': ['осетрівництво', 'розведення осетра Україна', 'виробництво ікри'],
    'trout': ['форелівництво', 'райдужна форель Україна', 'вирощування форелі'],
    'catfish': ['вирощування сома', 'кларієвий сом', 'африканський сом'],
    'shrimp': ['вирощування креветок Україна', 'креветка ваннамей', 'креветочна ферма'],
    'crayfish': ['раківництво', 'прісноводні раки', 'розведення раків'],
    'technology': ['автоматизація аквакультури', 'технології рибництва', 'смарт аквакультура'],
    'equipment': ['обладнання для аквакультури', 'устаткування для риборозведення', 'РАС обладнання'],
    'consulting': ['консалтинг аквакультури Україна', 'проектування ферм', 'експерт аквакультури'],
    'default': ['аквакультура Україна', 'рибництво', 'сталий розвиток аквакультури']
  }
};

/**
 * Map category slug to keyword group
 */
function getCategoryKeywordGroup(categorySlug: string): string {
  // Check for exact matches first
  if (categorySlug in CATEGORY_KEYWORDS.en) {
    return categorySlug;
  }

  // Check for partial matches
  const lowercaseSlug = categorySlug.toLowerCase();

  if (lowercaseSlug.includes('ras') || lowercaseSlug.includes('system')) {
    return 'ras-systems';
  }
  if (lowercaseSlug.includes('water') || lowercaseSlug.includes('quality')) {
    return 'water-quality';
  }
  if (lowercaseSlug.includes('tilapia') || lowercaseSlug.includes('тиляпі')) {
    return 'tilapia';
  }
  if (lowercaseSlug.includes('sturgeon') || lowercaseSlug.includes('осетр')) {
    return 'sturgeon';
  }
  if (lowercaseSlug.includes('trout') || lowercaseSlug.includes('форел')) {
    return 'trout';
  }
  if (lowercaseSlug.includes('catfish') || lowercaseSlug.includes('сом')) {
    return 'catfish';
  }
  if (lowercaseSlug.includes('shrimp') || lowercaseSlug.includes('креветк')) {
    return 'shrimp';
  }
  if (lowercaseSlug.includes('crayfish') || lowercaseSlug.includes('рак')) {
    return 'crayfish';
  }
  if (lowercaseSlug.includes('technology') || lowercaseSlug.includes('технолог')) {
    return 'technology';
  }
  if (lowercaseSlug.includes('equipment') || lowercaseSlug.includes('обладнан')) {
    return 'equipment';
  }
  if (lowercaseSlug.includes('consult') || lowercaseSlug.includes('консалт')) {
    return 'consulting';
  }

  return 'default';
}

/**
 * Strip HTML tags and decode HTML entities from text
 */
function stripHtml(html: string): string {
  if (!html) return '';

  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');

  // Decode common HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

  // Replace multiple spaces with single space
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Truncate text to target length while keeping words intact
 */
function truncateToLength(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Find the last space before maxLength
  let truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0 && lastSpace > maxLength * 0.8) {
    // If we found a space in the last 20%, use it
    truncated = truncated.substring(0, lastSpace);
  } else {
    // Otherwise, just hard truncate
    truncated = text.substring(0, maxLength - 3);
  }

  return truncated.trim() + '...';
}

/**
 * Generate post keywords based on categories and tags
 */
export function generatePostKeywords(
  categories: Array<{ slug: string; name: string }> | undefined,
  tags: Array<{ name: string }> | undefined,
  locale: string
): string[] {
  const keywords: string[] = [];
  const lang = locale === 'en' ? 'en' : 'uk';

  // Add category-based keywords
  if (categories && categories.length > 0) {
    const primaryCategory = categories[0];
    const keywordGroup = getCategoryKeywordGroup(primaryCategory.slug);
    const categoryKeywords = CATEGORY_KEYWORDS[lang][keywordGroup] || CATEGORY_KEYWORDS[lang]['default'];

    keywords.push(...categoryKeywords);
  } else {
    // Use default keywords if no categories
    keywords.push(...CATEGORY_KEYWORDS[lang]['default']);
  }

  // Add tag names as keywords (limit to 5 most relevant)
  if (tags && tags.length > 0) {
    tags.slice(0, 5).forEach(tag => {
      keywords.push(tag.name);
    });
  }

  // Add general aquaculture keywords
  if (lang === 'en') {
    keywords.push('Eastern Europe aquaculture', 'fish farming solutions', 'sustainable fish farming');
  } else {
    keywords.push('аквакультура Східна Європа', 'рішення для рибництва', 'сталий розвиток рибництва');
  }

  // Remove duplicates and limit total keywords
  return [...new Set(keywords)].slice(0, 15);
}

interface OptimizeDescriptionParams {
  excerpt: string;
  categories?: Array<{ slug: string; name: string }>;
  locale: string;
  title?: string;
}

/**
 * Optimize meta description for SEO
 *
 * Target: 155-160 characters (Google's optimal length)
 * Includes category-specific keywords naturally
 * Adds regional targeting for Ukraine/Eastern Europe
 */
export function optimizeMetaDescription(params: OptimizeDescriptionParams): string {
  const { excerpt, categories, locale, title } = params;
  const lang = locale === 'en' ? 'en' : 'uk';

  // Strip HTML from excerpt
  let description = stripHtml(excerpt);

  // If description is empty, try to create one from title
  if (!description && title) {
    description = stripHtml(title);
  }

  // If still empty, use default description
  if (!description) {
    if (lang === 'en') {
      description = 'Expert aquaculture solutions and fish farming technology from Vismar Aqua. Serving Ukraine and Eastern Europe with sustainable RAS systems.';
    } else {
      description = 'Експертні рішення для аквакультури та технології рибництва від Vismar Aqua. Обслуговуємо Україну та Східну Європу сталими РАС системами.';
    }
    return description;
  }

  // Target length: 155-160 characters
  const targetMin = 155;
  const targetMax = 160;

  // If description is already good length, return it
  if (description.length >= targetMin && description.length <= targetMax) {
    return description;
  }

  // If description is too long, truncate it
  if (description.length > targetMax) {
    return truncateToLength(description, targetMax);
  }

  // If description is too short, try to enhance it with keywords
  if (description.length < targetMin) {
    // Get category-specific keyword
    let keyword = '';

    if (categories && categories.length > 0) {
      const primaryCategory = categories[0];
      const keywordGroup = getCategoryKeywordGroup(primaryCategory.slug);
      const categoryKeywords = CATEGORY_KEYWORDS[lang][keywordGroup] || CATEGORY_KEYWORDS[lang]['default'];

      // Pick the first keyword that fits
      for (const kw of categoryKeywords) {
        const testDescription = `${description} ${kw}`;
        if (testDescription.length <= targetMax) {
          keyword = kw;
          break;
        }
      }
    }

    // Add keyword if we found one and it fits
    if (keyword) {
      description = `${description}. ${keyword.charAt(0).toUpperCase() + keyword.slice(1)}`;
    }

    // If still too short, add regional targeting
    if (description.length < targetMin) {
      const regional = lang === 'en' ? ' | Ukraine' : ' | Україна';
      if (description.length + regional.length <= targetMax) {
        description += regional;
      }
    }
  }

  // Final length check and truncate if needed
  if (description.length > targetMax) {
    description = truncateToLength(description, targetMax);
  }

  return description;
}

/**
 * Generate optimized Open Graph description (can be slightly longer)
 */
export function optimizeOGDescription(params: OptimizeDescriptionParams): string {
  const { excerpt, locale, title } = params;

  let description = stripHtml(excerpt);

  if (!description && title) {
    description = stripHtml(title);
  }

  // OG description can be up to 200 characters
  const maxLength = 200;

  if (description.length > maxLength) {
    return truncateToLength(description, maxLength);
  }

  return description;
}
