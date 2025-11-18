import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_SOFTWARE_BY_SLUG, GET_ALL_SOFTWARE } from '@/lib/wordpress/queries';
import { generateSoftwareMetadata } from '@/lib/seo/metadata';
import { generateProductSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Generate metadata for the software detail page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_SOFTWARE_BY_SLUG,
      variables: { slug },
    });

    const software = data?.softwareSolution;

    if (!software) {
      return {
        title: locale === 'en' ? 'Software Not Found' : 'Програму не знайдено',
      };
    }

    return generateSoftwareMetadata(locale, slug, software);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Software' : 'Програма',
    };
  }
}

// Generate static params for all software solutions
export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const languageCode = params.locale === 'en' ? 'EN' : 'UK';

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_ALL_SOFTWARE,
      variables: { language: languageCode },
    });

    return data.softwareSolutions.nodes.map((software: any) => ({
      slug: software.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function SoftwareDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let software: any = null;
  let otherSoftware: any[] = [];

  try {
    const client = getClient();

    // Fetch the specific software solution
    const { data } = await client.query({
      query: GET_SOFTWARE_BY_SLUG,
      variables: { slug },
    });

    software = data?.softwareSolution;

    // If software not found, show 404
    if (!software) {
      notFound();
    }

    // Fetch other software solutions for the "Other Solutions" section
    try {
      const otherSoftwareResult = await client.query({
        query: GET_ALL_SOFTWARE,
        variables: { language: languageCode },
      });
      otherSoftware = otherSoftwareResult.data?.softwareSolutions?.nodes?.filter(
        (s: any) => s.slug !== slug
      ) || [];
    } catch (error) {
      console.error('Error fetching other software:', error);
    }
  } catch (error) {
    console.error('Error fetching software:', error);
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-purple-600 transition-colors">
              {locale === 'en' ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/software`} className="hover:text-purple-600 transition-colors">
              {locale === 'en' ? 'Software' : 'Програми'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{software.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Featured Image or Gradient */}
      {software.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-96 bg-gradient-to-r from-purple-600 to-blue-600">
          <Image
            src={software.featuredImage.node.sourceUrl}
            alt={software.featuredImage.node.altText || software.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/80 flex items-center">
            <div className="container-custom text-center">
              <h1 className="text-white font-bold mb-4">{software.title}</h1>
              {software.softwareDetails?.softwareTagline && (
                <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                  {software.softwareDetails.softwareTagline}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section className="section bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container-custom text-center">
            <h1 className="mb-4 font-bold text-white">{software.title}</h1>
            {software.softwareDetails?.softwareTagline && (
              <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                {software.softwareDetails.softwareTagline}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Main Content */}
      {software.content && (
        <section className="section bg-white">
          <div className="container-custom">
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-purple-600
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700"
              dangerouslySetInnerHTML={{ __html: software.content }}
            />
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {software.softwareDetails?.softwareKeyFeatures && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Key Features' : 'Ключові особливості'}
            </h2>
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-purple-600
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700
                prose-li:marker:text-purple-600"
              dangerouslySetInnerHTML={{ __html: software.softwareDetails.softwareKeyFeatures }}
            />
          </div>
        </section>
      )}

      {/* Technology Stack Section */}
      {software.softwareDetails?.softwareTechnologyStack && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Technology Stack' : 'Технологічний стек'}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-700 text-center">
                {software.softwareDetails.softwareTechnologyStack}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {software.softwareDetails?.softwarePricing && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Pricing' : 'Ціни'}
            </h2>
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-purple-600"
              dangerouslySetInnerHTML={{ __html: software.softwareDetails.softwarePricing }}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 text-white">
              {locale === 'en' ? 'Interested in This Solution?' : 'Зацікавлені в цьому рішенні?'}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Contact us to learn more or request a demo.'
                : 'Зв\'яжіться з нами, щоб дізнатися більше або запросити демо.'}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {software.softwareDetails?.softwareDemoUrl && (
                <a
                  href={software.softwareDetails.softwareDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                >
                  {locale === 'en' ? 'View Demo' : 'Переглянути демо'}
                </a>
              )}
              {software.softwareDetails?.softwareDocumentationUrl && (
                <a
                  href={software.softwareDetails.softwareDocumentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  {locale === 'en' ? 'Documentation' : 'Документація'}
                </a>
              )}
              <a
                href={`/${locale}/contact`}
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                {locale === 'en' ? 'Contact Sales' : 'Зв\'язатися з відділом продажу'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Software Solutions Section */}
      {otherSoftware.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {locale === 'en' ? 'Other Solutions' : 'Інші рішення'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherSoftware.slice(0, 3).map((otherSoft: any) => (
                <Link
                  key={otherSoft.id}
                  href={`/${locale}/software/${otherSoft.slug}`}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-secondary-200 transition-colors">
                    <div className="w-8 h-8 bg-secondary-500 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary-600 transition-colors">
                    {otherSoft.title}
                  </h3>
                  {otherSoft.softwareDetails?.softwareTagline && (
                    <p className="text-secondary-600 font-medium mb-3">
                      {otherSoft.softwareDetails.softwareTagline}
                    </p>
                  )}
                  {otherSoft.softwareDetails?.softwareDescriptionShort && (
                    <p className="text-neutral-600 line-clamp-2">
                      {otherSoft.softwareDetails.softwareDescriptionShort}
                    </p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${locale}/software`}
                className="btn-secondary text-lg px-8 py-3"
              >
                {locale === 'en' ? 'View All Software' : 'Переглянути всі програми'}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
