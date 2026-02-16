// JSON-LD Structured Data Components for Rich Results
// https://developers.google.com/search/docs/appearance/structured-data

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vismar-aqua.com/#organization',
    name: 'Vismar Aquaculture OÜ',
    alternateName: 'Vismar Aqua',
    url: 'https://vismar-aqua.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
      width: 180,
      height: 48,
    },
    image: 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    description: 'Professional aquaculture engineering company specializing in RAS systems, hatcheries, water treatment, and custom aquaculture software solutions.',
    foundingDate: '2007',
    email: 'vismaraqua@gmail.com',
    telephone: '+380675024730',
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'EE',
        addressLocality: 'Tallinn',
        streetAddress: 'Harju maakond, Lasnamäe linnaosa, Sepapaja tn 6',
        postalCode: '15551',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'UA',
        addressLocality: 'Kyiv',
        streetAddress: 'Kyiv, Ukraine',
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
        latitude: 50.4501,
        longitude: 30.5234,
      },
      geoRadius: '10000',
    },
    knowsAbout: [
      'Recirculating Aquaculture Systems (RAS)',
      'Aquaculture Engineering',
      'Fish Farming',
      'Hatchery Design',
      'Water Treatment Systems',
      'Aquaculture Software',
      'HFTS Technology',
    ],
  };

  return <JsonLd data={data} />;
}

// WebSite Schema with SearchAction
export function WebSiteJsonLd({ locale }: { locale: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vismar-aqua.com/#website',
    url: 'https://vismar-aqua.com',
    name: 'Vismar Aqua',
    description: locale === 'en'
      ? 'Expert aquaculture engineering and software solutions'
      : 'Професійні інженерні та програмні рішення для аквакультури',
    publisher: {
      '@id': 'https://vismar-aqua.com/#organization',
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
        urlTemplate: `https://vismar-aqua.com/${locale}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLd data={data} />;
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

// Service Schema
interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  locale: string;
}

export function ServiceJsonLd({ name, description, url, image, locale }: ServiceJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url,
    name,
    description,
    url,
    image: image || 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    provider: {
      '@id': 'https://vismar-aqua.com/#organization',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    serviceType: 'Aquaculture Engineering',
    category: 'Professional Services',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `https://vismar-aqua.com/${locale}/contact`,
      servicePhone: '+380675024730',
      availableLanguage: ['English', 'Ukrainian'],
    },
  };

  return <JsonLd data={data} />;
}

// Article/BlogPosting Schema
interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Vismar Aqua',
}: ArticleJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: title,
    description,
    url,
    image: image || 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://vismar-aqua.com',
    },
    publisher: {
      '@id': 'https://vismar-aqua.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <JsonLd data={data} />;
}

// LocalBusiness Schema (for Contact page)
export function LocalBusinessJsonLd({ locale }: { locale: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://vismar-aqua.com/#localbusiness',
    name: 'Vismar Aquaculture OÜ',
    image: 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    url: 'https://vismar-aqua.com',
    telephone: '+380675024730',
    email: 'vismaraqua@gmail.com',
    priceRange: '$$$',
    description: locale === 'en'
      ? 'Professional aquaculture engineering and consulting services'
      : 'Професійні інженерні та консультаційні послуги з аквакультури',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Harju maakond, Lasnamäe linnaosa, Sepapaja tn 6',
      addressLocality: 'Tallinn',
      postalCode: '15551',
      addressCountry: 'EE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.4370,
      longitude: 24.7536,
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
  };

  return <JsonLd data={data} />;
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

// Product/Software Schema
interface SoftwareJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  locale: string;
}

export function SoftwareJsonLd({ name, description, url, image, locale }: SoftwareJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': url,
    name,
    description,
    url,
    image: image || 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: locale === 'en' ? 'Contact for pricing' : 'Зверніться для отримання ціни',
    },
    author: {
      '@id': 'https://vismar-aqua.com/#organization',
    },
  };

  return <JsonLd data={data} />;
}

// Project/Case Study Schema
interface ProjectJsonLdProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  location?: string;
  dateCompleted?: string;
}

export function ProjectJsonLd({ name, description, url, image, location, dateCompleted }: ProjectJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': url,
    name,
    description,
    url,
    image: image || 'https://vismar-aqua.com/images/vismar-logo-horizontal-text.png',
    creator: {
      '@id': 'https://vismar-aqua.com/#organization',
    },
    ...(location && {
      locationCreated: {
        '@type': 'Place',
        name: location,
      },
    }),
    ...(dateCompleted && { dateCreated: dateCompleted }),
  };

  return <JsonLd data={data} />;
}
