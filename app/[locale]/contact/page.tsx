import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import ContactForm from '@/components/ContactForm';
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
      variables: { slug: 'contact' },
    });

    const page = data?.page;

    return {
      title: page?.seo?.title || page?.title || (locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами"),
      description: page?.seo?.metaDesc || (locale === 'en'
        ? 'Get in touch with our team for water treatment solutions'
        : "Зв'яжіться з нашою командою для отримання рішень з очищення води"),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами",
    };
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  let pageData: any = null;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'contact' },
    });
    pageData = data;
  } catch (error) {
    console.log('Contact page content not found, using default content');
  }

  const page = pageData?.page;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      {page?.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-64 md:h-80 bg-gradient-primary">
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
                {page.title || (locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами")}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <section className="section bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h1 className="mb-4 font-bold">
              {page?.title || (locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами")}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Get in touch with our team for water treatment solutions'
                : "Зв'яжіться з нашою командою для отримання рішень з очищення води"}
            </p>
          </div>
        </section>
      )}

      {/* Contact Content Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              {page?.content ? (
                <div
                  className="prose prose-lg prose-primary max-w-none
                    prose-headings:font-semibold
                    prose-h2:text-2xl prose-h2:mb-4
                    prose-p:text-neutral-700 prose-p:mb-4
                    prose-a:text-primary-600
                    prose-ul:my-4 prose-ul:list-none prose-ul:pl-0
                    prose-li:text-neutral-700 prose-li:mb-3 prose-li:flex prose-li:items-start"
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              ) : (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold mb-6">
                      {locale === 'en' ? 'Get in Touch' : "Зв'яжіться з нами"}
                    </h2>
                    <p className="text-neutral-700 text-lg mb-6">
                      {locale === 'en'
                        ? 'Have questions about our water treatment solutions? Our team is here to help. Fill out the form and we\'ll get back to you as soon as possible.'
                        : 'Маєте питання щодо наших рішень для очищення води? Наша команда готова допомогти. Заповніть форму, і ми зв\'яжемося з вами якнайшвидше.'}
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                          {locale === 'en' ? 'Email' : 'Електронна пошта'}
                        </h3>
                        <a href="mailto:info@vismar-aqua.com" className="text-primary-600 hover:text-primary-700">
                          info@vismar-aqua.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                          {locale === 'en' ? 'Phone' : 'Телефон'}
                        </h3>
                        <a href="tel:+380123456789" className="text-primary-600 hover:text-primary-700">
                          +380 12 345 67 89
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                          {locale === 'en' ? 'Address' : 'Адреса'}
                        </h3>
                        <p className="text-neutral-700">
                          {locale === 'en'
                            ? 'Kyiv, Ukraine'
                            : 'Київ, Україна'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                      {locale === 'en' ? 'Business Hours' : 'Години роботи'}
                    </h3>
                    <div className="space-y-2 text-neutral-700">
                      <div className="flex justify-between">
                        <span>{locale === 'en' ? 'Monday - Friday' : 'Понеділок - П\'ятниця'}</span>
                        <span>9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'en' ? 'Saturday' : 'Субота'}</span>
                        <span>10:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'en' ? 'Sunday' : 'Неділя'}</span>
                        <span>{locale === 'en' ? 'Closed' : 'Вихідний'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be added later) */}
      {/*
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            Map embed here
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
