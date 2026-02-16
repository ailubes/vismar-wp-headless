import { Organization, WebSite, Article, Service, BreadcrumbList, WithContext } from 'schema-dts';

const SITE_URL = 'https://vismar-aqua.com';

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(locale: string): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Vismar Aquaculture OÜ',
    alternateName: 'Vismar Aqua',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
      width: '180',
      height: '48',
    },
    image: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
    description:
      locale === 'en'
        ? 'Professional aquaculture engineering company specializing in RAS systems, HFTS technology, hatcheries, water treatment, and custom aquaculture software solutions. 15+ years of experience, 50+ projects worldwide.'
        : 'Професійна інженерна компанія з аквакультури, що спеціалізується на системах RAS, технології HFTS, інкубаторіях, водопідготовці та розробці програмного забезпечення для аквакультури. 15+ років досвіду, 50+ проектів по всьому світу.',
    foundingDate: '2007',
    email: 'vismaraqua@gmail.com',
    telephone: '+380675024730',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Harju maakond, Lasnamäe linnaosa, Sepapaja tn 6',
        addressLocality: 'Tallinn',
        postalCode: '15551',
        addressCountry: 'EE',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Kyiv',
        addressCountry: 'UA',
      },
    ],
    sameAs: [
      'https://linkedin.com/company/vismaraqua',
      'https://facebook.com/vismaraqua',
      'https://youtube.com/@vismaraqua',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+380675024730',
      contactType: 'sales',
      email: 'vismaraqua@gmail.com',
      availableLanguage: ['English', 'Ukrainian'],
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '50.4501',
        longitude: '30.5234',
      },
      geoRadius: '10000000',
    },
    knowsAbout: [
      'Recirculating Aquaculture Systems (RAS)',
      'HFTS Technology',
      'Aquaculture Engineering',
      'Fish Farming',
      'Hatchery Design',
      'Water Treatment Systems',
      'Aquaculture Software',
      'Fish Counting AI',
      'IoT Monitoring',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: '10',
      maxValue: '50',
    },
  } as any;
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(locale: string): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Vismar Aqua',
    url: SITE_URL,
    description:
      locale === 'en'
        ? 'Expert aquaculture engineering solutions - RAS systems, hatcheries, water treatment, and custom software for fish farming'
        : 'Експертні інженерні рішення для аквакультури - системи RAS, інкубатори, водопідготовка та програмне забезпечення для рибництва',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: [
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en',
      },
      {
        '@type': 'Language',
        name: 'Ukrainian',
        alternateName: 'uk',
      },
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/${locale}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  } as any;
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
  const articleUrl = `${SITE_URL}/${locale}/blog/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': articleUrl,
    headline: data.title,
    description: data.excerpt || data.content?.substring(0, 160),
    url: articleUrl,
    datePublished: data.publishedDate,
    dateModified: data.modifiedDate || data.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Vismar Aqua',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Vismar Aquaculture OÜ',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
      },
    },
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
        },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: data.categories?.[0] || 'Aquaculture',
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
  const serviceUrl = `${SITE_URL}/${locale}/services/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceUrl,
    name: data.title,
    description: data.description,
    url: serviceUrl,
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Vismar Aquaculture OÜ',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: 'Aquaculture Engineering',
    category: 'Professional Services',
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
        },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/${locale}/contact`,
      servicePhone: '+380675024730',
      availableLanguage: ['English', 'Ukrainian'],
    },
  } as any;
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  locale: string,
  items: Array<{ name: string; url?: string }>
): WithContext<BreadcrumbList> {
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
  const productUrl = `${SITE_URL}/${locale}/software/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': productUrl,
    name: data.title,
    description: data.description,
    url: productUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD',
      description: locale === 'en' ? 'Contact for pricing' : 'Зверніться для отримання ціни',
      seller: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Vismar Aquaculture OÜ',
      },
    },
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
        },
  };
}

/**
 * Generate LocalBusiness schema (for Contact page)
 */
export function generateLocalBusinessSchema(locale: string): WithContext<any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'Vismar Aquaculture OÜ',
    image: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
    url: SITE_URL,
    telephone: '+380675024730',
    email: 'vismaraqua@gmail.com',
    priceRange: '$$$',
    description: locale === 'en'
      ? 'Professional aquaculture engineering and consulting services specializing in RAS systems, hatcheries, and water treatment'
      : 'Професійні інженерні та консультаційні послуги з аквакультури, що спеціалізуються на системах RAS, інкубаторіях та водопідготовці',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harju maakond, Lasnamäe linnaosa, Sepapaja tn 6',
      addressLocality: 'Tallinn',
      postalCode: '15551',
      addressCountry: 'EE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '59.4370',
      longitude: '24.7536',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://linkedin.com/company/vismaraqua',
      'https://facebook.com/vismaraqua',
      'https://youtube.com/@vismaraqua',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aquaculture Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Engineering Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAS Systems Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HFTS Technology' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hatchery Engineering' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Treatment' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Software Solutions',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Farm Management' } },
            { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'AI Fish Counting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'IoT Monitoring' } },
          ],
        },
      ],
    },
  };
}

/**
 * Generate Project/CaseStudy schema
 */
export function generateProjectSchema(
  locale: string,
  data: {
    title: string;
    slug: string;
    description?: string;
    featuredImage?: string;
    location?: string;
    dateCompleted?: string;
  }
): WithContext<any> {
  const projectUrl = `${SITE_URL}/${locale}/projects/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': projectUrl,
    name: data.title,
    description: data.description,
    url: projectUrl,
    creator: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
    ...(data.location && {
      locationCreated: {
        '@type': 'Place',
        name: data.location,
      },
    }),
    ...(data.dateCompleted && { dateCreated: data.dateCompleted }),
    image: data.featuredImage
      ? {
          '@type': 'ImageObject',
          url: data.featuredImage,
        }
      : {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/vismar-logo-horizontal-text.png`,
        },
  };
}

/**
 * Helper to render JSON-LD script tag
 */
export function renderJsonLd(data: WithContext<any>): string {
  return JSON.stringify(data);
}
