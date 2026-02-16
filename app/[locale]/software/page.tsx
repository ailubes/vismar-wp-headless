import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_SOFTWARE, GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import Link from 'next/link';
import { Activity, TrendingUp, Zap, BarChart, Brain, Eye, Cpu, Cloud, Code, Terminal, Binary, Braces, Wifi, LayoutDashboard, Droplets, Settings, ArrowRight, Sparkles, CheckCircle, Gauge, Clock, Shield } from 'lucide-react';

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
      // Software page content not found, using default content
    }
  } catch (error) {
    errorMessage = locale === 'en'
      ? 'Failed to load software solutions. Please try again later.'
      : 'Не вдалося завантажити програмні рішення. Будь ласка, спробуйте пізніше.';
  }

  const softwareSolutions = softwareData?.softwareSolutions?.nodes || [];
  const page = pageData?.page;

  // Hero stats
  const heroStats = [
    {
      icon: Gauge,
      value: '95%',
      label: { en: 'AI Accuracy', uk: 'Точність AI' }
    },
    {
      icon: Clock,
      value: '50%',
      label: { en: 'Time Saved', uk: 'Економія часу' }
    },
    {
      icon: Activity,
      value: '24/7',
      label: { en: 'Monitoring', uk: 'Моніторинг' }
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: { en: 'Cost Reduction', uk: 'Зниження витрат' }
    }
  ];

  // Static software solutions data
  const staticSolutions = [
    {
      id: 'ai-counting',
      slug: 'ai-counting',
      title: {
        en: 'AI Fish Counting',
        uk: 'AI підрахунок риби'
      },
      description: {
        en: 'Automated fish counting using computer vision and AI. Achieve 95%+ accuracy, 10x faster than manual counting, with real-time biomass estimation and size distribution analysis.',
        uk: 'Автоматизований підрахунок риби за допомогою комп\'ютерного зору та AI. Досягайте точності 95%+, в 10 разів швидше ручного підрахунку, з оцінкою біомаси в реальному часі та аналізом розподілу розмірів.'
      },
      icon: Brain,
      features: [
        { en: '95%+ accuracy', uk: '95%+ точність' },
        { en: '10x faster', uk: '10x швидше' },
        { en: 'Real-time analysis', uk: 'Аналіз в реальному часі' }
      ],
      gradient: 'from-purple-500 to-blue-500',
      href: '/software/ai-counting'
    },
    {
      id: 'iot-monitoring',
      slug: 'iot-monitoring',
      title: {
        en: 'IoT Monitoring',
        uk: 'IoT моніторинг'
      },
      description: {
        en: 'Real-time water quality and equipment monitoring with instant alerts. 24/7 monitoring of DO, pH, temperature, ammonia, and more with cloud dashboards and mobile access.',
        uk: 'Моніторинг якості води та обладнання в реальному часі з миттєвими сповіщеннями. Цілодобовий моніторинг DO, pH, температури, аміаку та більше з хмарними панелями та мобільним доступом.'
      },
      icon: Wifi,
      features: [
        { en: '24/7 monitoring', uk: 'Цілодобовий моніторинг' },
        { en: 'Instant alerts', uk: 'Миттєві сповіщення' },
        { en: 'Cloud dashboard', uk: 'Хмарна панель' }
      ],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/software/iot-monitoring'
    },
    {
      id: 'farm-management',
      slug: 'farm-management',
      title: {
        en: 'Farm Management',
        uk: 'Управління фермою'
      },
      description: {
        en: 'Complete aquaculture operations platform. Track production, inventory, feed management, health records, financials, and compliance all in one system.',
        uk: 'Повна платформа операцій аквакультури. Відстежуйте виробництво, інвентар, управління кормом, медичні записи, фінанси та відповідність в одній системі.'
      },
      icon: LayoutDashboard,
      features: [
        { en: 'Production tracking', uk: 'Відстеження виробництва' },
        { en: 'Inventory control', uk: 'Контроль інвентарю' },
        { en: 'Multi-site support', uk: 'Підтримка багатьох об\'єктів' }
      ],
      gradient: 'from-green-500 to-teal-500',
      href: '/software/farm-management'
    },
    {
      id: 'analytics',
      slug: 'analytics',
      title: {
        en: 'Data Analytics',
        uk: 'Аналітика даних'
      },
      description: {
        en: 'Transform your aquaculture data into actionable insights. Production analytics, trend analysis, predictive modeling, and AI-powered recommendations for optimization.',
        uk: 'Трансформуйте ваші дані аквакультури в дієві інсайти. Аналітика виробництва, аналіз трендів, прогнозне моделювання та рекомендації на основі AI для оптимізації.'
      },
      icon: BarChart,
      features: [
        { en: 'Predictive AI', uk: 'Прогнозний AI' },
        { en: 'Custom dashboards', uk: 'Кастомні панелі' },
        { en: 'Trend analysis', uk: 'Аналіз трендів' }
      ],
      gradient: 'from-orange-500 to-red-500',
      href: '/software/analytics'
    },
    {
      id: 'biofloc',
      slug: 'biofloc',
      title: {
        en: 'Biofloc Control',
        uk: 'Контроль біофлоку'
      },
      description: {
        en: 'Automated biofloc monitoring and management. Maintain stable biofloc with optimized C:N ratio, aeration control, and sludge management for better FCR and survival.',
        uk: 'Автоматизований моніторинг та управління біофлоком. Підтримуйте стабільний біофлок з оптимізованим співвідношенням C:N, контролем аерації та управлінням осадом для кращого FCR та виживання.'
      },
      icon: Droplets,
      features: [
        { en: 'Stable biofloc', uk: 'Стабільний біофлок' },
        { en: 'Automated control', uk: 'Автоматизований контроль' },
        { en: 'Reduced water exchange', uk: 'Зменшений водообмін' }
      ],
      gradient: 'from-teal-500 to-blue-500',
      href: '/software/biofloc'
    },
    {
      id: 'custom-apps',
      slug: 'custom-apps',
      title: {
        en: 'Custom Development',
        uk: 'Індивідуальна розробка'
      },
      description: {
        en: 'Tailored software solutions for your specific aquaculture needs. From custom integrations to specialized automation systems built for your unique operation.',
        uk: 'Індивідуальні програмні рішення для ваших специфічних потреб аквакультури. Від кастомних інтеграцій до спеціалізованих систем автоматизації, створених для вашої унікальної операції.'
      },
      icon: Settings,
      features: [
        { en: 'Custom solutions', uk: 'Індивідуальні рішення' },
        { en: 'API integration', uk: 'Інтеграція API' },
        { en: 'Specialized systems', uk: 'Спеціалізовані системи' }
      ],
      gradient: 'from-indigo-500 to-purple-500',
      href: '/software/custom-apps'
    }
  ];

  // Technology stack
  const techStack = [
    { icon: Brain, name: { en: 'AI & Machine Learning', uk: 'AI та машинне навчання' }, color: 'text-[#35a87a]' },
    { icon: Eye, name: { en: 'Computer Vision', uk: 'Комп\'ютерний зір' }, color: 'text-purple-500' },
    { icon: Cpu, name: { en: 'IoT & Sensors', uk: 'IoT та сенсори' }, color: 'text-orange-500' },
    { icon: Cloud, name: { en: 'Cloud Computing', uk: 'Хмарні обчислення' }, color: 'text-blue-500' },
    { icon: Activity, name: { en: 'Real-time Analytics', uk: 'Аналітика в реальному часі' }, color: 'text-green-500' }
  ];

  // Benefits
  const benefits = [
    {
      icon: Activity,
      title: { en: 'Real-Time Decision Making', uk: 'Рішення в реальному часі' },
      description: { en: 'Monitor and control operations 24/7 from anywhere', uk: 'Моніторинг та контроль операцій 24/7 звідусіль' },
      color: '[#35a87a]'
    },
    {
      icon: TrendingUp,
      title: { en: 'Predictive Insights', uk: 'Прогнозна аналітика' },
      description: { en: 'AI-powered forecasting prevents losses before they occur', uk: 'Прогнозування на основі AI запобігає втратам до їх виникнення' },
      color: 'green-500'
    },
    {
      icon: Zap,
      title: { en: 'Automated Operations', uk: 'Автоматизовані операції' },
      description: { en: 'Reduce manual labor by 50% with smart automation', uk: 'Зменшення ручної праці на 50% за допомогою інтелектуальної автоматизації' },
      color: 'orange-500'
    },
    {
      icon: BarChart,
      title: { en: 'Data-Driven Optimization', uk: 'Оптимізація на основі даних' },
      description: { en: 'Improve FCR by 10-15% through analytics', uk: 'Покращення FCR на 10-15% через аналітику' },
      color: 'blue-500'
    }
  ];

  // Implementation phases
  const phases = [
    { step: '01', title: { en: 'Monitoring', uk: 'Моніторинг' }, desc: { en: 'Install cameras & sensors, collect baseline data', uk: 'Встановлення камер та сенсорів, збір базових даних' } },
    { step: '02', title: { en: 'Analysis', uk: 'Аналіз' }, desc: { en: 'Introduce AI tools for behavior & anomaly detection', uk: 'Впровадження AI для виявлення поведінки та аномалій' } },
    { step: '03', title: { en: 'Optimization', uk: 'Оптимізація' }, desc: { en: 'Use AI insights to adjust feeding, aeration, operations', uk: 'Використання AI-інсайтів для коригування операцій' } },
    { step: '04', title: { en: 'Automation', uk: 'Автоматизація' }, desc: { en: 'Integrate AI directly with farm equipment & systems', uk: 'Інтеграція AI з обладнанням та системами ферми' } }
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#42c997]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Code className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Brain className="w-16 h-16 text-purple-400" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Cpu className="w-10 h-10 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Cloud className="w-14 h-14 text-blue-400" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Terminal className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Binary className="w-10 h-10 text-[#42c997]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'en' ? 'Digital Aquaculture Solutions' : 'Цифрові рішення для аквакультури'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {locale === 'en' ? (
                <>
                  Smart Technology for{' '}
                  <span className="text-[#42c997]">Modern Aquaculture</span>
                </>
              ) : (
                <>
                  Розумні технології для{' '}
                  <span className="text-[#42c997]">сучасної аквакультури</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {locale === 'en'
                ? 'From AI-powered fish counting to real-time water quality monitoring, our software solutions help aquaculture businesses reduce costs by up to 30%, prevent fish mortality, and make data-driven decisions that transform operations.'
                : 'Від підрахунку риби на основі AI до моніторингу якості води в реальному часі — наші програмні рішення допомагають підприємствам аквакультури знизити витрати до 30%, запобігти загибелі риби та приймати рішення на основі даних.'}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/software#solutions`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {locale === 'en' ? 'Explore Solutions' : 'Дослідити рішення'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'Request Demo' : 'Запросити демо'}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute left-0 right-0" style={{ bottom: '-1px' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Hero stats section */}
      <section className="section bg-white pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-8 md:-mt-12">
            {heroStats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                    <StatIcon className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-neutral-600">
                    {locale === 'en' ? stat.label.en : stat.label.uk}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Why Digital Transformation' : 'Чому цифрова трансформація'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Transform Your Aquaculture Operation' : 'Трансформуйте вашу операцію аквакультури'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Intelligent software solutions that increase efficiency, reduce costs, and maximize yields.'
                : 'Інтелектуальні програмні рішення, які підвищують ефективність, знижують витрати та максимізують врожайність.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#42c997]/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#42c997]/15 to-[#00A8B5]/10 flex items-center justify-center">
                    <BenefitIcon className={`w-7 h-7 md:w-8 md:h-8 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3">
                    {locale === 'en' ? benefit.title.en : benefit.title.uk}
                  </h3>
                  <p className="text-neutral-600">
                    {locale === 'en' ? benefit.description.en : benefit.description.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Technology' : 'Наші технології'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Powered by Cutting-Edge Tech' : 'На основі передових технологій'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Our software solutions leverage the latest in AI, IoT, and cloud computing.'
                : 'Наші рішення використовують найновіші досягнення в AI, IoT та хмарних обчисленнях.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-white border border-neutral-100 hover:border-[#42c997]/30 hover:shadow-lg transition-all duration-300 group">
                  <TechIcon className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  <p className="font-semibold text-gray-800 text-sm md:text-base">
                    {locale === 'en' ? tech.name.en : tech.name.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Implementation' : 'Впровадження'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Gradual Adoption Pathway' : 'Поступовий шлях впровадження'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Start small, scale as you grow. Our 4-phase approach ensures smooth digital transformation.'
                : 'Почніть з малого, масштабуйте по мірі зростання. Наш 4-етапний підхід забезпечує плавну цифрову трансформацію.'}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connection line (desktop) */}
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#42c997]/20 via-[#42c997] to-[#42c997]/20" />

              {phases.map((phase, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a2540] to-[#1B4B63] flex items-center justify-center text-xl md:text-2xl font-bold text-[#42c997] border-4 border-white shadow-lg relative z-10">
                    {phase.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                    {locale === 'en' ? phase.title.en : phase.title.uk}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600">
                    {locale === 'en' ? phase.desc.en : phase.desc.uk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Solutions Grid */}
      <section id="solutions" className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Products' : 'Наші продукти'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Software Solutions' : 'Програмні рішення'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Complete suite of software tools to digitize and optimize your aquaculture operation.'
                : 'Повний набір програмних інструментів для цифровізації та оптимізації вашої операції.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {staticSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={solution.id}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#42c997]/5 overflow-hidden"
                >
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`} />

                  {/* Solution number badge */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-[#42c997]/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon container */}
                  <div className={`relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#35a87a] transition-colors duration-300">
                    {locale === 'en' ? solution.title.en : solution.title.uk}
                  </h3>

                  <p className="relative z-10 text-neutral-600 mb-6 leading-relaxed">
                    {locale === 'en' ? solution.description.en : solution.description.uk}
                  </p>

                  {/* Features */}
                  <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm rounded-full font-medium"
                      >
                        {locale === 'en' ? feature.en : feature.uk}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}${solution.href}`}
                    className="relative z-10 inline-flex items-center text-[#35a87a] hover:text-[#2a8a63] font-semibold group/link"
                  >
                    {locale === 'en' ? 'Learn More' : 'Дізнатися більше'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              );
            })}
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Need a Custom Software Solution?'
                : 'Потрібне індивідуальне програмне рішення?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {locale === 'en'
                ? 'We develop tailored software solutions for your specific aquaculture needs. From custom integrations to specialized automation systems.'
                : 'Ми розробляємо індивідуальні програмні рішення для ваших специфічних потреб. Від кастомних інтеграцій до спеціалізованих систем автоматизації.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-success/25"
              >
                {t('getQuote')}
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
      </section>
    </div>
  );
}
