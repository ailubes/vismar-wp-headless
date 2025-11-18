import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SOFTWARE, GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import SoftwareCard from '@/components/SoftwareCard';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Activity, TrendingUp, Zap, BarChart, Brain, Eye, Cpu, Cloud } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'software' },
    });

    const page = data?.page;

    return {
      title: page?.seo?.title || page?.title || (locale === 'en' ? 'Software Solutions' : 'Програмні рішення'),
      description: page?.seo?.metaDesc || (locale === 'en'
        ? 'Advanced technology solutions for modern aquaculture operations'
        : 'Передові технологічні рішення для сучасних аквакультурних операцій'),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Software Solutions' : 'Програмні рішення',
    };
  }
}

export default async function SoftwarePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let softwareData: any = null;
  let pageData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch software solutions
    const softwareResult = await client.query({
      query: GET_ALL_SOFTWARE,
      variables: { language: languageCode },
    });
    softwareData = softwareResult.data;

    // Try to fetch page content for software page
    try {
      const pageResult = await client.query({
        query: GET_PAGE_BY_SLUG,
        variables: { slug: 'software' },
      });
      pageData = pageResult.data;
    } catch (pageError) {
      console.log('Software page content not found, using default content');
    }
  } catch (error) {
    console.error('Error fetching software data:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load software solutions. Please try again later.'
      : 'Не вдалося завантажити програмні рішення. Будь ласка, спробуйте пізніше.';
  }

  const softwareSolutions = softwareData?.softwareSolutions?.nodes || [];
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
        <div className="relative h-64 md:h-96 bg-gradient-to-r from-purple-600 to-blue-600">
          <Image
            src={page.featuredImage.node.sourceUrl}
            alt={page.featuredImage.node.altText || page.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-blue-900/80 flex items-center justify-center">
            <div className="container-custom text-center">
              <h1 className="text-white font-bold">
                {page.title || (locale === 'en' ? 'Software Solutions' : 'Програмні рішення')}
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
        <section className="section bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container-custom text-center">
            <h1 className="mb-4 font-bold">
              {page?.title || (locale === 'en' ? 'Software Solutions' : 'Програмні рішення')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Advanced technology solutions for modern aquaculture operations'
                : 'Передові технологічні рішення для сучасних аквакультурних операцій'}
            </p>
          </div>
        </section>
      )}

      {/* Page Content (if exists) */}
      {page?.content && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold
                prose-p:text-neutral-700
                prose-a:text-purple-600"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
        </section>
      )}

      {/* Section 1: Benefits of Digital Transformation */}
      <Section background="light" spacing="xl">
        <ScrollReveal>
          <SectionHeader
            title={locale === 'en' ? 'Why Digital Transformation in Aquaculture?' : 'Чому цифрова трансформація в аквакультурі?'}
            description={locale === 'en'
              ? 'Transform your aquaculture operation with intelligent software solutions that increase efficiency, reduce costs, and maximize yields.'
              : 'Трансформуйте свою аквакультурну операцію за допомогою інтелектуальних програмних рішень, які підвищують ефективність, знижують витрати та максимізують врожайність.'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="text-center">
              <Activity className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Real-Time Decision Making' : 'Прийняття рішень у реальному часі'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Monitor and control operations 24/7 from anywhere'
                  : 'Моніторинг та контроль операцій 24/7 звідусіль'
                }
              </p>
            </Card>
            <Card className="text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Predictive Insights' : 'Прогнозна аналітика'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'AI-powered forecasting prevents losses before they occur'
                  : 'Прогнозування на основі AI запобігає втратам до їх виникнення'
                }
              </p>
            </Card>
            <Card className="text-center">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Automated Operations' : 'Автоматизовані операції'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Reduce manual labor by 50% with smart automation'
                  : 'Зменшення ручної праці на 50% за допомогою інтелектуальної автоматизації'
                }
              </p>
            </Card>
            <Card className="text-center">
              <BarChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Data-Driven Optimization' : 'Оптимізація на основі даних'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Improve FCR by 10-15% through analytics'
                  : 'Покращення FCR на 10-15% через аналітику'
                }
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Section>

      {/* Section 2: Technology Showcase */}
      <Section background="white" spacing="xl">
        <ScrollReveal>
          <SectionHeader
            title={locale === 'en' ? 'Powered by Cutting-Edge Technology' : 'Працює на передових технологіях'}
            description={locale === 'en'
              ? 'Our software solutions leverage the latest in AI, IoT, and cloud computing to deliver unparalleled performance.'
              : 'Наші програмні рішення використовують найновіші досягнення в AI, IoT та хмарних обчисленнях для забезпечення неперевершеної продуктивності.'
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <Brain className="w-16 h-16 mx-auto text-brand-primary mb-3" />
              <p className="font-semibold text-gray-800">
                {locale === 'en' ? 'AI & Machine Learning' : 'AI та машинне навчання'}
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <Eye className="w-16 h-16 mx-auto text-purple-600 mb-3" />
              <p className="font-semibold text-gray-800">
                {locale === 'en' ? 'Computer Vision' : 'Комп\'ютерний зір'}
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <Cpu className="w-16 h-16 mx-auto text-orange-500 mb-3" />
              <p className="font-semibold text-gray-800">
                {locale === 'en' ? 'IoT & Sensors' : 'IoT та сенсори'}
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <Cloud className="w-16 h-16 mx-auto text-blue-500 mb-3" />
              <p className="font-semibold text-gray-800">
                {locale === 'en' ? 'Cloud Computing' : 'Хмарні обчислення'}
              </p>
            </div>
            <div className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <Activity className="w-16 h-16 mx-auto text-green-600 mb-3" />
              <p className="font-semibold text-gray-800">
                {locale === 'en' ? 'Real-time Analytics' : 'Аналітика в реальному часі'}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Section 3: Success Metrics */}
      <Section background="light" spacing="xl">
        <ScrollReveal>
          <SectionHeader
            title={locale === 'en' ? 'Proven Results' : 'Доведені результати'}
            description={locale === 'en'
              ? 'Our software solutions deliver measurable improvements across key performance indicators.'
              : 'Наші програмні рішення забезпечують вимірювані покращення ключових показників ефективності.'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Card className="text-center">
              <div className="text-5xl font-bold text-brand-primary mb-2">95%</div>
              <p className="text-gray-600 font-medium">
                {locale === 'en' ? 'AI Accuracy' : 'Точність AI'}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">50%</div>
              <p className="text-gray-600 font-medium">
                {locale === 'en' ? 'Time Savings' : 'Економія часу'}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">
                {locale === 'en' ? 'Monitoring' : 'Моніторинг'}
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">15%</div>
              <p className="text-gray-600 font-medium">
                {locale === 'en' ? 'FCR Improvement' : 'Покращення FCR'}
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </Section>

      {/* Section 4: 4-Phase Implementation */}
      <Section background="white" spacing="xl">
        <ScrollReveal>
          <SectionHeader
            title={locale === 'en' ? 'Implementation Approach' : 'Підхід до впровадження'}
            description={locale === 'en'
              ? 'Gradual adoption pathway for digital transformation - start small, scale as you grow.'
              : 'Поступовий шлях впровадження для цифрової трансформації - почніть з малого, масштабуйте по мірі зростання.'
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="relative text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Monitoring' : 'Моніторинг'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Install cameras & sensors, collect baseline data'
                  : 'Встановлення камер та сенсорів, збір базових даних'
                }
              </p>
            </div>
            <div className="relative text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Analysis' : 'Аналіз'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Introduce AI tools for behavior & anomaly detection'
                  : 'Впровадження інструментів AI для виявлення поведінки та аномалій'
                }
              </p>
            </div>
            <div className="relative text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Optimization' : 'Оптимізація'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Use AI insights to adjust feeding, aeration, operations'
                  : 'Використання AI-інсайтів для коригування годівлі, аерації, операцій'
                }
              </p>
            </div>
            <div className="relative text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {locale === 'en' ? 'Automation' : 'Автоматизація'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Integrate AI directly with farm equipment & systems'
                  : 'Інтеграція AI безпосередньо з обладнанням та системами ферми'
                }
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Software Solutions Grid */}
      <section className="section">
        <div className="container-custom">
          {softwareSolutions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareSolutions.map((software: any) => (
                <SoftwareCard
                  key={software.id}
                  software={software}
                  learnMoreText={t('learnMore')}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                {locale === 'en' ? 'No software solutions available at the moment.' : 'На даний момент програмні рішення відсутні.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">
              {locale === 'en'
                ? 'Need a Custom Software Solution?'
                : 'Потрібне індивідуальне програмне рішення?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'We develop tailored software solutions for your specific aquaculture needs.'
                : "Ми розробляємо індивідуальні програмні рішення для ваших специфічних потреб у аквакультурі."}
            </p>
            <a href={`/${locale}/contact`} className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors">
              {t('getQuote')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
