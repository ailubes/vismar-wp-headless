import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_SERVICE_BY_SLUG, GET_ALL_SERVICES } from '@/lib/wordpress/queries';
import { generateServiceMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Generate metadata for the service detail page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_SERVICE_BY_SLUG,
      variables: { slug },
    });

    const service = data?.service;

    if (!service) {
      return {
        title: locale === 'en' ? 'Service Not Found' : 'Послугу не знайдено',
      };
    }

    return generateServiceMetadata(locale, slug, service);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Service' : 'Послуга',
    };
  }
}

// Generate static params for all services in both languages
export async function generateStaticParams() {
  const client = getClient();

  try {
    // Get services for both languages
    const enResult = await client.query({
      query: GET_ALL_SERVICES,
      variables: { language: 'EN' }
    });

    const ukResult = await client.query({
      query: GET_ALL_SERVICES,
      variables: { language: 'UK' }
    });

    const enServices = enResult.data?.services?.nodes || [];
    const ukServices = ukResult.data?.services?.nodes || [];

    return [
      ...enServices.map((service: any) => ({
        locale: 'en',
        slug: service.slug,
      })),
      ...ukServices.map((service: any) => ({
        locale: 'uk',
        slug: service.slug,
      })),
    ];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let service: any = null;
  let otherServices: any[] = [];

  try {
    const client = getClient();

    // Fetch the specific service
    const { data } = await client.query({
      query: GET_SERVICE_BY_SLUG,
      variables: { slug },
    });

    service = data?.service;

    // If service not found, show 404
    if (!service) {
      notFound();
    }

    // Fetch other services for the "Other Services" section
    try {
      const otherServicesResult = await client.query({
        query: GET_ALL_SERVICES,
        variables: { language: languageCode },
      });
      otherServices = otherServicesResult.data?.services?.nodes?.filter(
        (s: any) => s.slug !== slug
      ) || [];
    } catch (error) {
      console.error('Error fetching other services:', error);
    }
  } catch (error) {
    console.error('Error fetching service:', error);
    notFound();
  }

  // Generate JSON-LD structured data
  const serviceSchema = generateServiceSchema(locale, {
    title: service.title,
    slug,
    description: service.serviceDetails?.serviceDescriptionShort || service.excerpt?.replace(/<[^>]*>/g, ''),
    featuredImage: service.featuredImage?.node?.sourceUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Services' : 'Послуги', url: `/${locale}/services` },
    { name: service.title },
  ]);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-primary-600 transition-colors">
              {locale === 'en' ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary-600 transition-colors">
              {locale === 'en' ? 'Services' : 'Послуги'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Featured Image or Gradient */}
      {service.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-96 bg-gradient-primary">
          <Image
            src={service.featuredImage.node.sourceUrl}
            alt={service.featuredImage.node.altText || service.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900/80 flex items-center">
            <div className="container-custom text-center">
              <h1 className="text-white font-bold mb-4">{service.title}</h1>
              {service.serviceDetails?.serviceTagline && (
                <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                  {service.serviceDetails.serviceTagline}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section className="section bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h1 className="mb-4 font-bold">{service.title}</h1>
            {service.serviceDetails?.serviceTagline && (
              <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                {service.serviceDetails.serviceTagline}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main Content */}
      {service.content && (
        <section className="section bg-white">
          <div className="container-custom">
            <div
              className="prose prose-lg prose-primary max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-primary-600
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>
        </section>
      )}

      {/* Features Section */}
      {service.serviceDetails?.serviceFeatures && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Key Features' : 'Ключові особливості'}
            </h2>
            <div
              className="prose prose-lg prose-primary max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-primary-600
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700
                prose-li:marker:text-primary-600"
              dangerouslySetInnerHTML={{ __html: service.serviceDetails.serviceFeatures }}
            />
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {service.serviceDetails?.serviceBenefits && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Benefits' : 'Переваги'}
            </h2>
            <div
              className="prose prose-lg prose-primary max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-primary-600
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700
                prose-li:marker:text-primary-600"
              dangerouslySetInnerHTML={{ __html: service.serviceDetails.serviceBenefits }}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              {locale === 'en' ? 'Ready to Get Started?' : 'Готові розпочати?'}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Contact us to discuss how we can help with your project.'
                : 'Зв\'яжіться з нами, щоб обговорити, як ми можемо допомогти з вашим проектом.'}
            </p>
            <a
              href={service.serviceDetails?.serviceCtaLink || `/${locale}/contact`}
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors"
            >
              {service.serviceDetails?.serviceCtaText || (locale === 'en' ? 'Contact Us' : 'Зв\'яжіться з нами')}
            </a>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      {otherServices.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Other Services' : 'Інші послуги'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.slice(0, 3).map((otherService: any) => (
                <Link
                  key={otherService.id}
                  href={`/${locale}/services/${otherService.slug}`}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <div className="w-8 h-8 bg-primary-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {otherService.title}
                  </h3>
                  {otherService.serviceDetails?.serviceTagline && (
                    <p className="text-primary-600 font-medium mb-3">
                      {otherService.serviceDetails.serviceTagline}
                    </p>
                  )}
                  {otherService.serviceDetails?.serviceDescriptionShort && (
                    <p className="text-neutral-600 line-clamp-2">
                      {otherService.serviceDetails.serviceDescriptionShort}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${locale}/services`}
                className="btn-secondary text-lg px-8 py-3"
              >
                {locale === 'en' ? 'View All Services' : 'Переглянути всі послуги'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
