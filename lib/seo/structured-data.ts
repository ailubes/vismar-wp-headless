import { Organization, WebSite, Article, Service, BreadcrumbList, WithContext } from 'schema-dts';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(locale: string): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vismar Aqua',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      locale === 'en'
        ? 'Expert aquaculture solutions, water quality management, and sustainable fish farming technology.'
        : 'Експертні рішення для аквакультури, управління якістю води та технології сталого рибництва.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
    },
    sameAs: [
      'https://www.facebook.com/vismaraqua',
      'https://www.linkedin.com/company/vismar-aqua',
      'https://twitter.com/vismaraqua',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'uk'],
    },
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(locale: string): WithContext<WebSite> {
  const localePrefix = locale === 'en' ? 'en' : 'uk';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Vismar Aqua',
    url: `${SITE_URL}/${localePrefix}`,
    description:
      locale === 'en'
        ? 'Expert aquaculture solutions and services'
        : 'Експертні рішення та послуги в аквакультурі',
    inLanguage: locale === 'en' ? 'en-US' : 'uk-UA',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/${localePrefix}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    } as any,
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(
  locale: string,
  data: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    author?: string;
    publishedDate?: string;
    modifiedDate?: string;
    featuredImage?: string;
    categories?: string[];
  }
): WithContext<Article> {
  const localePrefix = locale === 'en' ? 'en' : 'uk';
  const articleUrl = `${SITE_URL}/${localePrefix}/blog/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.excerpt || data.content?.substring(0, 160),
    url: articleUrl,
    datePublished: data.publishedDate,
    dateModified: data.modifiedDate || data.publishedDate,
    author: {
      '@type': 'Person',
      name: data.author || 'Vismar Aqua Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vismar Aqua',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: data.categories?.[0],
    inLanguage: locale === 'en' ? 'en-US' : 'uk-UA',
  };
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
  locale: string,
  data: {
    title: string;
    slug: string;
    description?: string;
    featuredImage?: string;
  }
): WithContext<Service> {
  const localePrefix = locale === 'en' ? 'en' : 'uk';
  const serviceUrl = `${SITE_URL}/${localePrefix}/services/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    url: serviceUrl,
    provider: {
      '@type': 'Organization',
      name: 'Vismar Aqua',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Ukraine',
    },
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : undefined,
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  locale: string,
  items: Array<{ name: string; url?: string }>
): WithContext<BreadcrumbList> {
  const localePrefix = locale === 'en' ? 'en' : 'uk';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Product schema (for software solutions)
 */
export function generateProductSchema(
  locale: string,
  data: {
    title: string;
    slug: string;
    description?: string;
    featuredImage?: string;
  }
): WithContext<any> {
  const localePrefix = locale === 'en' ? 'en' : 'uk';
  const productUrl = `${SITE_URL}/${localePrefix}/software/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: data.title,
    description: data.description,
    url: productUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Vismar Aqua',
      },
    },
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : undefined,
  };
}

/**
 * Helper to render JSON-LD script tag
 */
export function renderJsonLd(data: WithContext<any>): string {
  return JSON.stringify(data);
}
