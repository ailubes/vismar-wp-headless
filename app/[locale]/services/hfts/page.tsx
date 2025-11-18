import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Waves,
  ArrowRightLeft,
  GitMerge,
  Settings,
  Wrench,
  FileText,
  Calculator,
  Package,
  Rocket,
  Droplets,
  Wind,
  Gauge,
  Filter,
  Zap,
  Factory,
  GraduationCap,
  Store,
  Building2,
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Shield,
  Activity
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'HFTS Technology & Engineering | Vismar Aqua'
      : 'Технологія та інжиніринг HFTS | Vismar Aqua',
    description: locale === 'en'
      ? 'Hybrid flow-through systems balancing efficiency, sustainability, and production. Expert HFTS design combining the best of flow-through and RAS with 50% lower costs.'
      : 'Гібридні проточні системи, що поєднують ефективність, сталість та продуктивність. Експертне проектування HFTS, що поєднує найкраще від проточних систем та RAS зі зниженням витрат на 50%.',
  };
}

export default async function HFTSPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'HFTS Technology & Engineering' : 'Технологія та інжиніринг HFTS',
      subtitle: isEnglish
        ? 'Hybrid flow-through systems balancing efficiency, sustainability, and production'
        : 'Гібридні проточні системи, що поєднують ефективність, сталість та продуктивність',
      cta: isEnglish ? 'Design Your HFTS System' : 'Спроектувати вашу систему HFTS',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Innovative Hybrid Flow-Through Systems' : 'Інноваційні гібридні проточні системи',
      text1: isEnglish
        ? 'HFTS (Hybrid Flow-Through Systems) represent an innovative approach that combines flow-through systems with partial water recirculation. This hybrid technology offers an optimal balance between water use efficiency, capital costs, and production density - ideal for operations with moderate water availability.'
        : 'HFTS (гібридні проточні системи) представляють інноваційний підхід, що поєднує проточні системи з частковою рециркуляцією води. Ця гібридна технологія пропонує оптимальний баланс між ефективністю використання води, капітальними витратами та щільністю виробництва - ідеально для операцій з помірною доступністю води.',
      text2: isEnglish
        ? 'Vismar Aqua specializes in custom HFTS design and engineering. Our systems typically achieve 20-50% water reuse, significantly lower capital investment than full RAS, and higher production density than traditional flow-through - delivering the best of both worlds.'
        : 'Vismar Aqua спеціалізується на індивідуальному проектуванні та інжинірингу HFTS. Наші системи зазвичай досягають 20-50% повторного використання води, значно нижчих капітальних інвестицій, ніж повний RAS, і вищої щільності виробництва, ніж традиційні проточні системи - забезпечуючи найкраще з обох світів.',
      whyHftsTitle: isEnglish ? 'Why Choose HFTS?' : 'Чому варто обрати HFTS?',
      benefits: [
        {
          icon: Droplets,
          title: isEnglish ? 'Balanced Water Use' : 'Збалансоване використання води',
          description: isEnglish ? '20-50% water reuse - more efficient than flow-through, simpler than RAS' : '20-50% повторного використання води - ефективніше за проточні системи, простіше за RAS',
        },
        {
          icon: DollarSign,
          title: isEnglish ? 'Lower Capital Cost' : 'Нижчі капітальні витрати',
          description: isEnglish ? 'Significantly less investment than full RAS systems' : 'Значно менші інвестиції, ніж повні системи RAS',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Higher Density Production' : 'Виробництво вищої щільності',
          description: isEnglish ? 'Greater production capacity than traditional flow-through' : 'Більша виробнича потужність, ніж традиційні проточні системи',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Flexible Operation' : 'Гнучка експлуатація',
          description: isEnglish ? 'Adjust recirculation rates based on water availability' : 'Регулюйте рівні рециркуляції залежно від доступності води',
        },
      ],
    },
    // When to Choose HFTS
    whenToChoose: {
      title: isEnglish ? 'When to Choose HFTS' : 'Коли обирати HFTS',
      scenarios: [
        {
          title: isEnglish ? 'Moderate Water Availability' : 'Помірна доступність води',
          description: isEnglish ? 'You have some water access but not enough for pure flow-through' : 'Ви маєте певний доступ до води, але недостатньо для чистих проточних систем',
        },
        {
          title: isEnglish ? 'Lower Capital Budget' : 'Нижчий капітальний бюджет',
          description: isEnglish ? 'Full RAS investment is too high, but you want better efficiency' : 'Інвестиції в повний RAS занадто високі, але ви хочете кращої ефективності',
        },
        {
          title: isEnglish ? 'Proven Technology Preference' : 'Перевага перевірених технологій',
          description: isEnglish ? 'You prefer simpler, more proven technology over complex RAS' : 'Ви віддаєте перевагу простішим, більш перевіреним технологіям над складним RAS',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our HFTS Services' : 'Наші послуги HFTS',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'System Design & Layout' : 'Проектування системи та компоновка',
          description: isEnglish
            ? 'Complete HFTS layout design, flow calculations, recirculation ratios, and tank configuration optimized for your site and species.'
            : 'Повне проектування компоновки HFTS, розрахунки потоків, коефіцієнти рециркуляції та конфігурація резервуарів, оптимізовані для вашої ділянки та видів.',
        },
        {
          icon: Calculator,
          title: isEnglish ? 'Hydraulic Engineering' : 'Гідравлічний інжиніринг',
          description: isEnglish
            ? 'Precise hydraulic modeling, pipe sizing, pump selection, and water distribution design for optimal flow and efficiency.'
            : 'Точне гідравлічне моделювання, визначення розмірів труб, підбір насосів та проектування розподілу води для оптимального потоку та ефективності.',
        },
        {
          icon: Package,
          title: isEnglish ? 'Equipment Integration' : 'Інтеграція обладнання',
          description: isEnglish
            ? 'Selection and specification of filtration, aeration, and monitoring equipment tailored to hybrid system requirements.'
            : 'Підбір та специфікація фільтрації, аерації та обладнання моніторингу, адаптованого до вимог гібридної системи.',
        },
      ],
    },
    // Key Components
    components: {
      title: isEnglish ? 'Key HFTS Components We Design' : 'Ключові компоненти HFTS, які ми проектуємо',
      items: [
        {
          icon: Droplets,
          title: isEnglish ? 'Water Intake & Distribution' : 'Водозабір та розподіл',
          description: isEnglish ? 'Source water management, intake systems, distribution manifolds' : 'Управління вихідною водою, системи забору, розподільні колектори',
        },
        {
          icon: Filter,
          title: isEnglish ? 'Settling Chambers' : 'Відстійні камери',
          description: isEnglish ? 'Solids removal, settling tanks, screening systems' : 'Видалення твердих речовин, відстійні резервуари, системи скринінгу',
        },
        {
          icon: ArrowRightLeft,
          title: isEnglish ? 'Partial Recirculation' : 'Часткова рециркуляція',
          description: isEnglish ? 'Recirculation pumps, piping, mixing zones, flow control' : 'Рециркуляційні насоси, трубопроводи, зони змішування, контроль потоку',
        },
        {
          icon: GitMerge,
          title: isEnglish ? 'Basic Filtration' : 'Базова фільтрація',
          description: isEnglish ? 'Mechanical filtration, biological treatment where applicable' : 'Механічна фільтрація, біологічна обробка, де це застосовно',
        },
        {
          icon: Wind,
          title: isEnglish ? 'Aeration Systems' : 'Системи аерації',
          description: isEnglish ? 'Aerators, oxygen injection, surface agitation' : 'Аератори, ін\'єкція кисню, поверхнева агітація',
        },
        {
          icon: Activity,
          title: isEnglish ? 'Effluent Management' : 'Управління стічними водами',
          description: isEnglish ? 'Discharge systems, settling ponds, water quality control' : 'Системи скидання, відстійні ставки, контроль якості води',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Our HFTS Design Process' : 'Наш процес проектування HFTS',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Site Assessment & Water Analysis' : 'Оцінка ділянки та аналіз води',
          description: isEnglish
            ? 'Evaluate water availability, quality, topography, and site constraints to determine optimal HFTS configuration.'
            : 'Оцінка доступності води, якості, топографії та обмежень ділянки для визначення оптимальної конфігурації HFTS.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'System Design & Flow Calculations' : 'Проектування системи та розрахунки потоку',
          description: isEnglish
            ? 'Design tank layout, calculate flow rates, determine recirculation ratios, and optimize water usage efficiency.'
            : 'Проектування компоновки резервуарів, розрахунок швидкостей потоку, визначення коефіцієнтів рециркуляції та оптимізація ефективності використання води.',
        },
        {
          icon: Package,
          number: '03',
          title: isEnglish ? 'Component Specification' : 'Специфікація компонентів',
          description: isEnglish
            ? 'Select pumps, filters, aerators, and monitoring equipment. Prepare detailed specifications and cost estimates.'
            : 'Підбір насосів, фільтрів, аераторів та обладнання моніторингу. Підготовка детальних специфікацій та кошторисів.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'Implementation & Optimization' : 'Впровадження та оптимізація',
          description: isEnglish
            ? 'Installation support, system commissioning, performance tuning, and operational training for your team.'
            : 'Підтримка встановлення, введення системи в експлуатацію, налаштування продуктивності та операційне навчання вашої команди.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages of HFTS' : 'Технічні переваги HFTS',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'Lower Capital Investment' : 'Нижчі капітальні інвестиції',
          description: isEnglish ? '40-60% less than full RAS while maintaining efficiency' : 'На 40-60% менше, ніж повний RAS при збереженні ефективності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Proven Technology' : 'Перевірена технологія',
          description: isEnglish ? 'Simpler systems with decades of successful operation' : 'Простіші системи з десятиліттями успішної експлуатації',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Easier Operation' : 'Простіша експлуатація',
          description: isEnglish ? 'Less complex than RAS, easier maintenance and training' : 'Менш складна, ніж RAS, простіше обслуговування та навчання',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Good Biosecurity' : 'Хороша біобезпека',
          description: isEnglish ? 'Better than pure flow-through, controlled water sources' : 'Краще, ніж чисті проточні системи, контрольовані джерела води',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Scalable Production' : 'Масштабоване виробництво',
          description: isEnglish ? 'Increase density without full RAS complexity' : 'Збільшення щільності без повної складності RAS',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy Efficient' : 'Енергоефективність',
          description: isEnglish ? 'Lower energy costs than full recirculation systems' : 'Нижчі енергетичні витрати, ніж повні рециркуляційні системи',
        },
      ],
    },
    // Industries
    industries: {
      title: isEnglish ? 'Industries We Serve' : 'Галузі, які ми обслуговуємо',
      items: [
        { icon: Factory, label: isEnglish ? 'Commercial Trout Farms' : 'Комерційні форелеві ферми' },
        { icon: Building2, label: isEnglish ? 'Salmon Hatcheries' : 'Лососеві інкубаторії' },
        { icon: Factory, label: isEnglish ? 'Tilapia Production' : 'Виробництво тіляпії' },
        { icon: Store, label: isEnglish ? 'Ornamental Fish Facilities' : 'Об\'єкти декоративних риб' },
        { icon: GraduationCap, label: isEnglish ? 'Research Centers' : 'Дослідницькі центри' },
        { icon: Building2, label: isEnglish ? 'Regional Aquaculture' : 'Регіональна аквакультура' },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua for HFTS?' : 'Чому обрати Vismar Aqua для HFTS?',
      items: [
        {
          title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering costs while delivering optimized, efficient hybrid systems.'
            : 'AI-прискорений процес проектування знижує витрати на інжиніринг, забезпечуючи оптимізовані, ефективні гібридні системи.',
        },
        {
          title: isEnglish ? 'Hybrid Systems Expertise' : 'Експертиза гібридних систем',
          description: isEnglish
            ? 'Specialized knowledge in balancing flow-through and recirculation for optimal performance and cost-effectiveness.'
            : 'Спеціалізовані знання в балансуванні проточних систем та рециркуляції для оптимальної продуктивності та економічної ефективності.',
        },
        {
          title: isEnglish ? 'Site-Specific Optimization' : 'Оптимізація для конкретної ділянки',
          description: isEnglish
            ? 'Every HFTS design is customized to your water resources, species requirements, and production goals.'
            : 'Кожен дизайн HFTS налаштований під ваші водні ресурси, вимоги видів та цілі виробництва.',
        },
        {
          title: isEnglish ? 'Proven Track Record' : 'Підтверджений послужний список',
          description: isEnglish
            ? '15+ years of aquaculture engineering experience with successful hybrid system implementations worldwide.'
            : '15+ років досвіду інжинірингу аквакультури з успішними впровадженнями гібридних систем по всьому світу.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed HFTS projects and hybrid aquaculture solutions.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів HFTS та гібридних рішень для аквакультури.',
      cta: isEnglish ? 'View Our HFTS Projects' : 'Переглянути наші проекти HFTS',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your HFTS System?' : 'Готові спроектувати вашу систему HFTS?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your water resources, production goals, and design the perfect hybrid flow-through solution.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші водні ресурси, цілі виробництва та спроектуємо ідеальне гібридне проточне рішення.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New HFTS System' : 'Нова система HFTS',
          isEnglish ? 'Flow-through to HFTS Conversion' : 'Конверсія з проточної в HFTS',
          isEnglish ? 'System Optimization' : 'Оптимізація системи',
          isEnglish ? 'Consultation Only' : 'Тільки консультація',
          isEnglish ? 'Other' : 'Інше',
        ],
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Services' : 'Послуги'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{isEnglish ? 'HFTS Technology' : 'Технологія HFTS'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Waves className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <ArrowRightLeft className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <GitMerge className="w-10 h-10" />
            </div>
          </div>
          <h1 className="mb-6 font-bold">{content.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {content.hero.subtitle}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
          >
            {content.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.intro.title}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-4">{content.intro.text1}</p>
              <p className="text-lg text-neutral-700">{content.intro.text2}</p>
            </div>

            {/* Why HFTS Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyHftsTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.intro.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose HFTS */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whenToChoose.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.whenToChoose.scenarios.map((scenario, index) => (
              <div key={index} className="card p-8 bg-white text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{scenario.title}</h3>
                <p className="text-neutral-600 text-sm">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our HFTS Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card p-8 hover:shadow-xl transition-all group bg-gradient-to-br from-white to-neutral-50"
                >
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.components.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.components.items.map((component, index) => {
              const Icon = component.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{component.title}</h4>
                    <p className="text-sm text-neutral-600">{component.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card p-6 h-full bg-gradient-to-br from-white to-brand-primary/5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-brand-secondary/20">{step.number}</span>
                      <Icon className="w-8 h-8 text-brand-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-brand-secondary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-success/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.advantages.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.advantages.items.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-6 bg-white rounded-lg">
                  <Icon className="w-6 h-6 text-brand-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{advantage.title}</h4>
                    <p className="text-sm text-neutral-600">{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.industries.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {content.industries.items.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
                >
                  <Icon className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium text-neutral-700">{industry.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-accent/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whyUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whyUs.items.map((item, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.relatedProjects.title}</h2>
            <p className="text-xl text-neutral-600 mb-8">{content.relatedProjects.description}</p>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-primary/90 transition-all hover:shadow-lg"
            >
              {content.relatedProjects.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-accent text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.finalCta.title}</h2>
            <p className="text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
              {content.finalCta.description}
            </p>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {content.finalCta.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {content.finalCta.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    {content.finalCta.formLabels.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {content.finalCta.formLabels.projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {content.finalCta.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-white text-brand-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
                  >
                    {content.finalCta.formLabels.submit}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="mt-4 text-sm text-white/70">
                    {isEnglish ? 'Or' : 'Або'}{' '}
                    <Link href={`/${locale}/contact`} className="underline hover:text-white">
                      {content.finalCta.ctaButton}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
