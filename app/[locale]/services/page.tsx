import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SERVICES, GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'services' },
    });

    const page = data?.page;

    return {
      title: page?.seo?.title || page?.title || (locale === 'en' ? 'Our Services' : 'Наші послуги'),
      description: page?.seo?.metaDesc || (locale === 'en'
        ? 'Comprehensive water treatment solutions tailored to your needs'
        : 'Комплексні рішення для очищення води, адаптовані до ваших потреб'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Our Services' : 'Наші послуги',
    };
  }
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let servicesData: any = null;
  let pageData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch services
    const servicesResult = await client.query({
      query: GET_ALL_SERVICES,
      variables: { language: languageCode },
    });
    servicesData = servicesResult.data;

    // Try to fetch page content for services page
    try {
      const pageResult = await client.query({
        query: GET_PAGE_BY_SLUG,
        variables: { slug: 'services' },
      });
      pageData = pageResult.data;
    } catch (pageError) {
      console.log('Services page content not found, using default content');
    }
  } catch (error) {
    console.error('Error fetching services data:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load services. Please try again later.'
      : 'Не вдалося завантажити послуги. Будь ласка, спробуйте пізніше.';
  }

  const services = servicesData?.services?.nodes || [];
  const page = pageData?.page;

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Page Header */}
      {page?.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-64 md:h-96 bg-gradient-primary">
          <Image
            src={page.featuredImage.node.sourceUrl}
            alt={page.featuredImage.node.altText || page.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900/80 flex items-center justify-center">
            <div className="container-custom text-center">
              <h1 className="text-white font-bold">
                {page.title || (locale === 'en' ? 'Our Services' : 'Наші послуги')}
              </h1>
              {page.excerpt && (
                <p className="text-white/90 text-xl mt-4 max-w-3xl mx-auto">
                  {page.excerpt.replace(/<[^>]*>/g, '')}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section className="section bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h1 className="mb-4 font-bold">
              {page?.title || (locale === 'en' ? 'Our Services' : 'Наші послуги')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Comprehensive water treatment solutions tailored to your needs'
                : 'Комплексні рішення для очищення води, адаптовані до ваших потреб'}
            </p>
          </div>
        </section>
      )}

      {/* Page Content (if exists) */}
      {page?.content && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div
              className="prose prose-lg prose-primary max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service: any) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  learnMoreText={t('learnMore')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                {locale === 'en' ? 'No services available at the moment.' : 'На даний момент послуги відсутні.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              {locale === 'en'
                ? 'Need a Custom Solution?'
                : 'Потрібне індивідуальне рішення?'}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              {locale === 'en'
                ? 'Contact us to discuss your specific water treatment requirements.'
                : "Зв'яжіться з нами, щоб обговорити ваші специфічні потреби."}
            </p>
            <a href={`/${locale}/contact`} className="btn-primary text-lg px-8 py-4">
              {t('getQuote')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
