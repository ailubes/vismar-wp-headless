import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SERVICES, GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, Fish, Factory, Waves, Settings, Building, Cog, TreePine, FileText, Award, Users, Globe, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

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
        ? '9 aquaculture engineering services: RAS systems, HFTS technology, hatchery design, water treatment, processing facilities, feed mills & more.'
        : '9 послуг з інженерії аквакультури: системи RAS, технологія HFTS, проектування інкубаторів, водопідготовка, переробні підприємства та інше.'),
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

  // Static services data as fallback
  const staticServices = [
    {
      id: 'ras-systems',
      slug: 'ras-systems',
      title: {
        en: 'RAS Systems',
        uk: 'РАС системи'
      },
      description: {
        en: 'Design and engineering of Recirculating Aquaculture Systems for sustainable fish farming with optimal water quality control and resource efficiency.',
        uk: 'Проектування та інжиніринг рециркуляційних систем аквакультури для сталого рибництва з оптимальним контролем якості води та ефективністю ресурсів.'
      },
      icon: Droplets,
      uri: '/services/ras-systems'
    },
    {
      id: 'hfts',
      slug: 'hfts',
      title: {
        en: 'HFTS Technology',
        uk: 'Технологія HFTS'
      },
      description: {
        en: 'Hybrid Flow-Through Systems combining the best of traditional and modern aquaculture for enhanced productivity and sustainability.',
        uk: 'Гібридні проточні системи, що поєднують найкраще з традиційної та сучасної аквакультури для підвищення продуктивності та сталості.'
      },
      icon: Waves,
      uri: '/services/hfts'
    },
    {
      id: 'hatchery',
      slug: 'hatchery',
      title: {
        en: 'Hatchery Engineering',
        uk: 'Інжиніринг інкубаторіїв'
      },
      description: {
        en: 'Complete fish hatchery design and engineering services from egg incubation to fry production with optimal survival rates.',
        uk: 'Повні послуги проектування та інжинірингу інкубаторіїв риби від інкубації ікри до виробництва мальків з оптимальними показниками виживання.'
      },
      icon: Fish,
      uri: '/services/hatchery'
    },
    {
      id: 'water-treatment',
      slug: 'water-treatment',
      title: {
        en: 'Water Treatment',
        uk: 'Очищення води'
      },
      description: {
        en: 'Advanced water treatment solutions including filtration, ozonation, UV sterilization, and biofiltration for pristine water quality.',
        uk: 'Передові рішення для очищення води, включаючи фільтрацію, озонування, УФ-стерилізацію та біофільтрацію для бездоганної якості води.'
      },
      icon: Droplets,
      uri: '/services/water-treatment'
    },
    {
      id: 'processing',
      slug: 'processing',
      title: {
        en: 'Processing Facilities',
        uk: 'Переробні підприємства'
      },
      description: {
        en: 'Fish processing plant design and equipment for efficient, hygienic processing from harvest to packaging with HACCP compliance.',
        uk: 'Проектування переробних заводів та обладнання для ефективної, гігієнічної переробки від збору врожаю до упаковки з дотриманням HACCP.'
      },
      icon: Factory,
      uri: '/services/processing'
    },
    {
      id: 'feed-mill',
      slug: 'feed-mill',
      title: {
        en: 'Feed Mill Design',
        uk: 'Проектування комбікормових заводів'
      },
      description: {
        en: 'Aquaculture feed production facilities with precise formulation, mixing, and pelleting systems for optimal fish nutrition.',
        uk: 'Підприємства з виробництва кормів для аквакультури з точними системами формулювання, змішування та гранулювання для оптимального харчування риби.'
      },
      icon: Building,
      uri: '/services/feed-mill'
    },
    {
      id: 'custom-design-equipment',
      slug: 'custom-design-equipment',
      title: {
        en: 'Custom Equipment',
        uk: 'Індивідуальне обладнання'
      },
      description: {
        en: 'Custom-designed aquaculture equipment and systems tailored to your specific operational needs and facility requirements.',
        uk: 'Індивідуально розроблене обладнання та системи для аквакультури, адаптовані до ваших специфічних операційних потреб та вимог об\'єкта.'
      },
      icon: Cog,
      uri: '/services/custom-design-equipment'
    },
    {
      id: 'recreational-water-systems',
      slug: 'recreational-water-systems',
      title: {
        en: 'Recreational Water Systems',
        uk: 'Рекреаційні водні системи'
      },
      description: {
        en: 'Design and engineering of swimming pools, decorative ponds, and recreational water features with advanced filtration and water management.',
        uk: 'Проектування та інжиніринг басейнів, декоративних ставків та рекреаційних водних об\'єктів з передовою фільтрацією та управлінням водою.'
      },
      icon: TreePine,
      uri: '/services/recreational-water-systems'
    },
    {
      id: 'feasibility-studies',
      slug: 'feasibility-studies',
      title: {
        en: 'Feasibility Studies',
        uk: 'Техніко-економічні обгрунтування'
      },
      description: {
        en: 'Comprehensive feasibility studies and business planning for aquaculture projects including market analysis, financial projections, and risk assessment.',
        uk: 'Комплексні техніко-економічні обгрунтування та бізнес-планування для проектів аквакультури, включаючи аналіз ринку, фінансові прогнози та оцінку ризиків.'
      },
      icon: FileText,
      uri: '/services/feasibility-studies'
    }
  ];

  // Hero stats
  const heroStats = [
    {
      icon: Award,
      value: '25+',
      label: { en: 'Years Experience', uk: 'Років досвіду' }
    },
    {
      icon: Cog,
      value: '9',
      label: { en: 'Service Categories', uk: 'Категорій послуг' }
    },
    {
      icon: Globe,
      value: '30+',
      label: { en: 'Countries Served', uk: 'Країн обслуговування' }
    },
    {
      icon: Users,
      value: '500+',
      label: { en: 'Satisfied Clients', uk: 'Задоволених клієнтів' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 relative z-50">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating service icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Droplets className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Fish className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Factory className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Waves className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Cog className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Settings className="w-10 h-10 text-[#00A8B5]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'en' ? 'Complete Aquaculture Solutions' : 'Комплексні рішення для аквакультури'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {locale === 'en' ? (
                <>
                  Engineering Excellence for{' '}
                  <span className="text-[#42c997]">Aquaculture Success</span>
                </>
              ) : (
                <>
                  Інженерна майстерність для{' '}
                  <span className="text-[#42c997]">успіху аквакультури</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {locale === 'en'
                ? 'From initial concept to operational facility, we deliver comprehensive engineering services for aquaculture systems worldwide. Our expertise spans RAS technology, hatchery design, water treatment, and custom equipment solutions tailored to your specific production goals.'
                : 'Від початкової концепції до діючого об\'єкта ми надаємо комплексні інженерні послуги для систем аквакультури по всьому світу. Наш досвід охоплює технології РАС, проектування інкубаторіїв, очищення води та індивідуальні рішення обладнання, адаптовані до ваших виробничих цілей.'}
            </p>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {heroStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <StatIcon className="w-6 h-6 md:w-8 md:h-8 text-[#42c997] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">
                      {locale === 'en' ? stat.label.en : stat.label.uk}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Start Your Project' : 'Розпочати проект'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View Our Projects' : 'Переглянути проекти'}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Why Choose Us' : 'Чому обирають нас'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'The Vismar Advantage' : 'Переваги Vismar'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Industry-leading expertise combined with innovative technology for sustainable aquaculture solutions.'
                : 'Провідний галузевий досвід у поєднанні з інноваційними технологіями для сталих рішень аквакультури.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: { en: 'Proven Expertise', uk: 'Перевірений досвід' },
                description: { en: 'Over 25 years of experience designing and implementing aquaculture systems across diverse environments and scales.', uk: 'Понад 25 років досвіду проектування та впровадження систем аквакультури в різних середовищах та масштабах.' }
              },
              {
                icon: CheckCircle,
                title: { en: 'End-to-End Solutions', uk: 'Комплексні рішення' },
                description: { en: 'From feasibility studies to operational facilities, we handle every aspect of your aquaculture project.', uk: 'Від техніко-економічних обгрунтувань до діючих об\'єктів – ми опікуємося кожним аспектом вашого проекту.' }
              },
              {
                icon: Globe,
                title: { en: 'Global Reach', uk: 'Глобальне охоплення' },
                description: { en: 'Successfully delivered projects in over 30 countries, adapting solutions to local conditions and regulations.', uk: 'Успішно реалізовані проекти у понад 30 країнах з адаптацією рішень до місцевих умов та норм.' }
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 flex items-center justify-center">
                    <ItemIcon className="w-8 h-8 text-[#35a87a]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {locale === 'en' ? item.title.en : item.title.uk}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {locale === 'en' ? item.description.en : item.description.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Services' : 'Наші послуги'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Comprehensive Service Portfolio' : 'Комплексний портфель послуг'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Explore our full range of engineering services designed to meet every aspect of modern aquaculture operations.'
                : 'Ознайомтеся з повним спектром інженерних послуг, розроблених для задоволення всіх аспектів сучасних операцій аквакультури.'}
            </p>
          </div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {staticServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#42c997]/5"
                  >
                    {/* Service number badge */}
                    <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-[#42c997]/10 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon container */}
                    <div className="relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#42c997]/15 to-[#00A8B5]/10 flex items-center justify-center group-hover:from-[#42c997]/25 group-hover:to-[#00A8B5]/15 transition-all duration-300">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#35a87a] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="relative z-10 text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#35a87a] transition-colors duration-300">
                      {locale === 'en' ? service.title.en : service.title.uk}
                    </h3>

                    <p className="relative z-10 text-neutral-600 mb-6 line-clamp-3 leading-relaxed">
                      {locale === 'en' ? service.description.en : service.description.uk}
                    </p>

                    <Link
                      href={`/${locale}${service.uri}`}
                      className="relative z-10 inline-flex items-center text-[#35a87a] hover:text-[#2a8a63] font-semibold group/link"
                    >
                      {t('learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Process' : 'Наш процес'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'How We Work' : 'Як ми працюємо'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connection line (desktop) */}
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#42c997]/20 via-[#42c997] to-[#42c997]/20" />

              {[
                { step: '01', title: { en: 'Consultation', uk: 'Консультація' }, desc: { en: 'Understanding your goals and requirements', uk: 'Розуміння ваших цілей та вимог' } },
                { step: '02', title: { en: 'Design', uk: 'Проектування' }, desc: { en: 'Engineering solutions tailored to your needs', uk: 'Інженерні рішення під ваші потреби' } },
                { step: '03', title: { en: 'Implementation', uk: 'Впровадження' }, desc: { en: 'Building and installing your systems', uk: 'Будівництво та встановлення систем' } },
                { step: '04', title: { en: 'Support', uk: 'Підтримка' }, desc: { en: 'Ongoing maintenance and optimization', uk: 'Постійне обслуговування та оптимізація' } }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a2540] to-[#1B4B63] flex items-center justify-center text-xl md:text-2xl font-bold text-[#42c997] border-4 border-white shadow-lg relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                    {locale === 'en' ? item.title.en : item.title.uk}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600">
                    {locale === 'en' ? item.desc.en : item.desc.uk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Ready to Transform Your Aquaculture Vision?'
                : 'Готові втілити вашу візію аквакультури?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {locale === 'en'
                ? 'Contact our team of experts to discuss your project requirements and discover how we can help you achieve sustainable aquaculture success.'
                : 'Зв\'яжіться з нашою командою експертів, щоб обговорити вимоги вашого проекту та дізнатися, як ми можемо допомогти вам досягти успіху в сталій аквакультурі.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {t('getQuote')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'Learn About Us' : 'Дізнатися про нас'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
