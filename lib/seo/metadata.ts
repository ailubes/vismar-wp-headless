import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

interface MetadataParams {
  title: string;
  description?: string;
  locale: string;
  slug?: string;
  type?: 'website' | 'article';
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
}

/**
 * Get locale code for Open Graph
 */
function getOGLocale(locale: string): string {
  return locale === 'en' ? 'en_US' : 'uk_UA';
}

/**
 * Get alternate locale for hreflang
 */
function getAlternateLocale(locale: string): string {
  return locale === 'en' ? 'uk_UA' : 'en_US';
}

/**
 * Generate canonical URL
 */
function getCanonicalUrl(locale: string, path?: string): string {
  const localePrefix = locale === 'en' ? 'en' : 'uk';
  if (!path) return `${SITE_URL}/${localePrefix}`;
  return `${SITE_URL}/${localePrefix}/${path}`;
}

/**
 * Generate alternate language URLs
 */
function getAlternateUrls(path?: string) {
  return {
    'en': path ? `${SITE_URL}/en/${path}` : `${SITE_URL}/en`,
    'uk': path ? `${SITE_URL}/uk/${path}` : `${SITE_URL}/uk`,
  };
}

/**
 * Base metadata generator
 */
export function generateMetadata({
  title,
  description,
  locale,
  slug,
  type = 'website',
  images,
  author,
  publishedTime,
  modifiedTime,
  section,
  tags,
  noIndex = false,
}: MetadataParams): Metadata {
  const canonicalUrl = getCanonicalUrl(locale, slug);
  const ogImages = images && images.length > 0
    ? images
    : [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: title }];

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      url: canonicalUrl,
      images: ogImages,
      locale: getOGLocale(locale),
      alternateLocale: getAlternateLocale(locale),
      siteName: 'Vismar Aqua',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map(img => img.url),
    },
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateUrls(slug),
    },
  };

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      authors: author ? [author] : undefined,
      publishedTime,
      modifiedTime,
      section,
      tags,
    };
  }

  // Add robots meta if noIndex is true
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

/**
 * Generate metadata for homepage
 */
export async function generateHomeMetadata(locale: string, data?: any): Promise<Metadata> {
  const title = locale === 'en'
    ? 'Vismar Aqua - Expert Aquaculture Solutions & Services'
    : 'Vismar Aqua - Експертні рішення та послуги в аквакультурі';

  const description = locale === 'en'
    ? 'Leading provider of aquaculture solutions, water quality management, and sustainable fish farming technology. Expert consultation and advanced monitoring systems.'
    : 'Провідний постачальник рішень для аквакультури, управління якістю води та технологій сталого рибництва. Експертні консультації та передові системи моніторингу.';

  return generateMetadata({
    title,
    description,
    locale,
    type: 'website',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: 1200,
          height: 630,
          alt: title,
        }]
      : undefined,
  });
}

/**
 * Generate metadata for pages
 */
export async function generatePageMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const title = data?.title || 'Vismar Aqua';
  const description = data?.excerpt || data?.content?.substring(0, 160);

  return generateMetadata({
    title: `${title} - Vismar Aqua`,
    description,
    locale,
    slug,
    type: 'website',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : undefined,
    modifiedTime: data?.modified,
  });
}

/**
 * Generate metadata for blog posts
 */
export async function generatePostMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const { optimizeMetaDescription, generatePostKeywords } = await import('@/lib/seo/description-optimizer');

  const title = data?.title || 'Blog Post';
  const rawDescription = data?.excerpt || data?.content?.substring(0, 160) || '';
  const author = data?.author?.node?.name;
  const categories = data?.categories?.nodes || [];
  const tags = data?.tags?.nodes || [];

  // Optimize meta description with keywords
  const description = optimizeMetaDescription({
    excerpt: rawDescription,
    categories: categories.map((cat: any) => ({ slug: cat.slug, name: cat.name })),
    locale,
    title,
  });

  // Generate keywords based on categories and tags
  const keywords = generatePostKeywords(
    categories.map((cat: any) => ({ slug: cat.slug, name: cat.name })),
    tags,
    locale
  );

  const metadata = generateMetadata({
    title: `${title} - Vismar Aqua Blog`,
    description,
    locale,
    slug: `blog/${slug}`,
    type: 'article',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : undefined,
    author,
    publishedTime: data?.date,
    modifiedTime: data?.modified,
    section: categories[0]?.name,
    tags: tags.map((tag: any) => tag.name),
  });

  // Add keywords to metadata
  return {
    ...metadata,
    keywords: keywords.join(', '),
  };
}

/**
 * Generate metadata for services
 */
export async function generateServiceMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const title = data?.title || 'Service';
  const description = data?.serviceDetails?.serviceDescriptionShort
    || data?.excerpt
    || data?.content?.substring(0, 160);

  return generateMetadata({
    title: `${title} - Vismar Aqua Services`,
    description,
    locale,
    slug: `services/${slug}`,
    type: 'website',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : data?.serviceDetails?.serviceIcon?.node?.sourceUrl
      ? [{
          url: data.serviceDetails.serviceIcon.node.sourceUrl,
          width: 1200,
          height: 630,
          alt: data.serviceDetails.serviceIcon.node.altText || title,
        }]
      : undefined,
  });
}

/**
 * Generate metadata for projects
 */
export async function generateProjectMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const title = data?.title || 'Project';
  const description = data?.excerpt || data?.content?.substring(0, 160);
  const location = data?.projectDetails?.projectLocation;
  const client = data?.projectDetails?.projectClient;

  const fullDescription = location && client
    ? `${description} - Project for ${client} in ${location}`
    : description;

  return generateMetadata({
    title: `${title} - Vismar Aqua Projects`,
    description: fullDescription,
    locale,
    slug: `projects/${slug}`,
    type: 'article',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : undefined,
    publishedTime: data?.date,
  });
}

/**
 * Generate metadata for software solutions
 */
export async function generateSoftwareMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const title = data?.title || 'Software Solution';
  const description = data?.softwareDetails?.softwareDescriptionShort
    || data?.excerpt
    || data?.content?.substring(0, 160);

  return generateMetadata({
    title: `${title} - Vismar Aqua Software`,
    description,
    locale,
    slug: `software/${slug}`,
    type: 'website',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : data?.softwareDetails?.softwareIcon?.node?.sourceUrl
      ? [{
          url: data.softwareDetails.softwareIcon.node.sourceUrl,
          width: 1200,
          height: 630,
          alt: data.softwareDetails.softwareIcon.node.altText || title,
        }]
      : undefined,
  });
}

/**
 * Generate metadata for species
 */
export async function generateSpeciesMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const title = data?.title || 'Species';
  const scientificName = data?.speciesDetails?.speciesScientificName;
  const description = scientificName
    ? `${data.excerpt || data.content?.substring(0, 160)} Scientific name: ${scientificName}`
    : data?.excerpt || data?.content?.substring(0, 160);

  return generateMetadata({
    title: `${title} - Vismar Aqua Species`,
    description,
    locale,
    slug: `species/${slug}`,
    type: 'article',
    images: data?.featuredImage?.node?.sourceUrl
      ? [{
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails?.width || 1200,
          height: data.featuredImage.node.mediaDetails?.height || 630,
          alt: data.featuredImage.node.altText || title,
        }]
      : data?.speciesDetails?.speciesImage?.node?.sourceUrl
      ? [{
          url: data.speciesDetails.speciesImage.node.sourceUrl,
          width: 1200,
          height: 630,
          alt: data.speciesDetails.speciesImage.node.altText || title,
        }]
      : undefined,
  });
}

/**
 * Generate metadata for blog category pages
 */
export async function generateCategoryMetadata(locale: string, slug: string, data: any): Promise<Metadata> {
  const categoryName = data?.name || 'Category';
  const description = data?.description || `Browse all articles in ${categoryName} category`;

  return generateMetadata({
    title: `${categoryName} - Vismar Aqua Blog`,
    description,
    locale,
    slug: `blog/category/${slug}`,
    type: 'website',
  });
}

/**
 * Generate default site metadata
 */
export function generateDefaultMetadata(locale: string): Metadata {
  const title = locale === 'en'
    ? 'Vismar Aqua - Expert Aquaculture Solutions'
    : 'Vismar Aqua - Експертні рішення в аквакультурі';

  const description = locale === 'en'
    ? 'Leading provider of aquaculture solutions, water quality management, and sustainable fish farming technology.'
    : 'Провідний постачальник рішень для аквакультури, управління якістю води та технологій сталого рибництва.';

  return {
    title: {
      default: title,
      template: '%s | Vismar Aqua',
    },
    description,
    keywords: locale === 'en'
      ? 'aquaculture, fish farming, water quality, RAS, recirculating aquaculture systems, sustainable aquaculture'
      : 'аквакультура, рибництво, якість води, РАС, рециркуляційні системи, сталий розвиток',
    authors: [{ name: 'Vismar Aqua' }],
    creator: 'Vismar Aqua',
    publisher: 'Vismar Aqua',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    openGraph: {
      type: 'website',
      locale: getOGLocale(locale),
      alternateLocale: getAlternateLocale(locale),
      siteName: 'Vismar Aqua',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vismaraqua',
      creator: '@vismaraqua',
    },
  };
}
