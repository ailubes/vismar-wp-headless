import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Package,
  Factory,
  Settings,
  Snowflake,
  ShieldCheck,
  Refrigerator,
  FileText,
  Calculator,
  Rocket,
  Wrench,
  CheckCircle,
  ArrowRight,
  Droplets,
  Recycle,
  Gauge,
  Zap,
  Shield,
  TrendingUp,
  DollarSign,
  Award
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Processing Facility Design & Engineering | Vismar Aqua'
      : 'Проектування переробних підприємств | Vismar Aqua',
    description: locale === 'en'
      ? 'Complete fish processing facility design from harvest to market-ready products. HACCP-compliant facilities for filleting, packaging, freezing, and value-added processing with 50% lower costs.'
      : 'Повне проектування рибопереробних підприємств від вилову до готової продукції. HACCP-сертифіковані об\'єкти для філетування, пакування, заморожування та переробки з додаванням вартості зі зниженням витрат на 50%.',
  };
}

export default async function ProcessingFacilityPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Processing Facility Design & Engineering' : 'Проектування та інжиніринг переробних підприємств',
      subtitle: isEnglish
        ? 'Complete processing solutions from harvest to market-ready products'
        : 'Повні рішення з переробки від вилову до готової продукції',
      cta: isEnglish ? 'Design Your Processing Facility' : 'Спроектувати ваше переробне підприємство',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Professional Fish Processing Facilities' : 'Професійні рибопереробні підприємства',
      text1: isEnglish
        ? 'Fish processing facilities transform harvested fish into market-ready products through filleting, packaging, freezing, and value-added processing. A well-designed processing facility is critical for adding value to your production, accessing premium markets, ensuring food safety, and maximizing profitability.'
        : 'Рибопереробні підприємства перетворюють виловлену рибу на готову до ринку продукцію шляхом філетування, пакування, заморожування та переробки з додаванням вартості. Добре спроектований переробний завод є критично важливим для додавання вартості вашому виробництву, доступу до преміум-ринків, забезпечення харчової безпеки та максимізації прибутковості.',
      text2: isEnglish
        ? 'Vismar Aqua designs complete processing facilities including facility layout, process flow engineering, equipment selection, cold chain integration, and HACCP compliance. Our AI-accelerated design process delivers cost-effective, hygienic, and efficient processing solutions tailored to your products and production volumes.'
        : 'Vismar Aqua проектує повні переробні підприємства, включаючи компоновку об\'єкта, інжиніринг технологічного потоку, вибір обладнання, інтеграцію холодового ланцюга та відповідність HACCP. Наш AI-прискорений процес проектування забезпечує економічно ефективні, гігієнічні та ефективні рішення з переробки, адаптовані до ваших продуктів та обсягів виробництва.',
      whyProcessingTitle: isEnglish ? 'Why Invest in Processing?' : 'Чому варто інвестувати в переробку?',
      benefits: [
        {
          icon: TrendingUp,
          title: isEnglish ? 'Value Addition' : 'Додавання вартості',
          description: isEnglish ? '2-5x higher value for processed products vs. whole fish' : '2-5x вища вартість для перероблених продуктів проти цілої риби',
        },
        {
          icon: Award,
          title: isEnglish ? 'Premium Market Access' : 'Доступ до преміум-ринків',
          description: isEnglish ? 'Reach retail, foodservice, and export markets requiring processed products' : 'Досягнення роздрібних, харчових та експортних ринків, які потребують переробленої продукції',
        },
        {
          icon: ShieldCheck,
          title: isEnglish ? 'Food Safety & Shelf Life' : 'Харчова безпека та термін зберігання',
          description: isEnglish ? 'HACCP-compliant processing extends shelf life and ensures food safety' : 'HACCP-сертифікована переробка подовжує термін зберігання та забезпечує харчову безпеку',
        },
        {
          icon: Factory,
          title: isEnglish ? 'Vertical Integration' : 'Вертикальна інтеграція',
          description: isEnglish ? 'Control entire value chain from farm to finished product' : 'Контроль всього ланцюга вартості від ферми до готової продукції',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our Processing Services' : 'Наші послуги з переробки',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'Facility Layout & Design' : 'Компоновка та проектування об\'єкта',
          description: isEnglish
            ? 'Complete facility design including product flow, hygiene zones, personnel flow, and efficient space utilization for optimal processing operations.'
            : 'Повне проектування об\'єкта, включаючи потік продукції, гігієнічні зони, потік персоналу та ефективне використання простору для оптимальних переробних операцій.',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Processing Line Engineering' : 'Інжиніринг переробної лінії',
          description: isEnglish
            ? 'Detailed process engineering for filleting, portioning, packaging, and freezing lines with capacity calculations and equipment specification.'
            : 'Детальний технологічний інжиніринг для ліній філетування, порціонування, пакування та заморожування з розрахунками потужності та специфікацією обладнання.',
        },
        {
          icon: Snowflake,
          title: isEnglish ? 'Cold Chain Integration' : 'Інтеграція холодового ланцюга',
          description: isEnglish
            ? 'Complete cold chain design including blast freezers, cold storage, temperature monitoring, and refrigeration systems for product quality.'
            : 'Повне проектування холодового ланцюга, включаючи швидко-морозильні камери, холодильне зберігання, моніторинг температури та холодильні системи для якості продукції.',
        },
      ],
    },
    // Processing Systems
    processingSystems: {
      title: isEnglish ? 'Processing Systems We Design' : 'Переробні системи, які ми проектуємо',
      items: [
        {
          icon: Droplets,
          title: isEnglish ? 'Reception & Grading' : 'Приймання та сортування',
          description: isEnglish ? 'Live fish handling, stunning, grading systems' : 'Обробка живої риби, оглушення, системи сортування',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Primary Processing' : 'Первинна переробка',
          description: isEnglish ? 'Filleting, gutting, scaling, head removal' : 'Філетування, випотрошування, лущення, видалення голів',
        },
        {
          icon: Package,
          title: isEnglish ? 'Secondary Processing' : 'Вторинна переробка',
          description: isEnglish ? 'Portioning, skinning, deboning, trimming' : 'Порціонування, зняття шкіри, видалення кісток, обрізка',
        },
        {
          icon: Factory,
          title: isEnglish ? 'Value-Added Processing' : 'Переробка з додаванням вартості',
          description: isEnglish ? 'Smoking, marinating, breading, cooking' : 'Копчення, маринування, панірування, приготування',
        },
        {
          icon: Package,
          title: isEnglish ? 'Packaging Systems' : 'Системи пакування',
          description: isEnglish ? 'Vacuum, MAP, skin packaging, labeling' : 'Вакуумне, MAP, шкірне пакування, етикетування',
        },
        {
          icon: Snowflake,
          title: isEnglish ? 'Cold Storage & Freezing' : 'Холодильне зберігання та заморожування',
          description: isEnglish ? 'Blast freezers, cold rooms, spiral freezers' : 'Швидко-морозильні камери, холодильні кімнати, спіральні морозильники',
        },
        {
          icon: Recycle,
          title: isEnglish ? 'Waste Management' : 'Управління відходами',
          description: isEnglish ? 'By-product processing, effluent treatment' : 'Переробка побічних продуктів, очищення стоків',
        },
        {
          icon: ShieldCheck,
          title: isEnglish ? 'Quality Control' : 'Контроль якості',
          description: isEnglish ? 'Inspection, metal detection, x-ray systems' : 'Інспекція, детектування металу, рентгенівські системи',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Design Process' : 'Процес проектування',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Capacity & Product Planning' : 'Планування потужності та продукції',
          description: isEnglish
            ? 'Define production volumes, product types, target markets, and processing capacity requirements for facility sizing.'
            : 'Визначення обсягів виробництва, типів продукції, цільових ринків та вимог до переробної потужності для визначення розміру об\'єкта.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'Process Flow Design' : 'Проектування технологічного потоку',
          description: isEnglish
            ? 'Design product flow, hygiene zones, process steps, and facility layout for efficient operations and HACCP compliance.'
            : 'Проектування потоку продукції, гігієнічних зон, технологічних етапів та компоновки об\'єкта для ефективних операцій та відповідності HACCP.',
        },
        {
          icon: Package,
          number: '03',
          title: isEnglish ? 'Equipment Selection & Integration' : 'Вибір обладнання та інтеграція',
          description: isEnglish
            ? 'Select processing equipment, refrigeration systems, packaging lines, and quality control systems with vendor coordination.'
            : 'Вибір переробного обладнання, холодильних систем, ліній пакування та систем контролю якості з координацією постачальників.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'HACCP & Compliance Implementation' : 'Впровадження HACCP та відповідності',
          description: isEnglish
            ? 'HACCP plan development, regulatory compliance, staff training, and commissioning support for successful operations.'
            : 'Розробка плану HACCP, нормативна відповідність, навчання персоналу та підтримка введення в експлуатацію для успішних операцій.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'HACCP-Compliant Design' : 'HACCP-сертифікований дизайн',
          description: isEnglish ? 'Food safety and hygiene built into facility layout and workflows' : 'Харчова безпека та гігієна вбудовані в компоновку об\'єкта та робочі процеси',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy-Efficient Systems' : 'Енергоефективні системи',
          description: isEnglish ? 'Optimized refrigeration and process systems minimize energy costs' : 'Оптимізовані холодильні та технологічні системи мінімізують енергетичні витрати',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Automated Processing Lines' : 'Автоматизовані переробні лінії',
          description: isEnglish ? 'Reduce labor costs and improve consistency with automation' : 'Зниження витрат на робочу силу та покращення консистенції з автоматизацією',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Traceability Integration' : 'Інтеграція відстежуваності',
          description: isEnglish ? 'Track products from farm to finished package for compliance' : 'Відстеження продуктів від ферми до готового пакунка для відповідності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Hygienic Design Standards' : 'Стандарти гігієнічного дизайну',
          description: isEnglish ? 'Equipment and facility design meeting international hygiene standards' : 'Обладнання та проектування об\'єкта відповідають міжнародним стандартам гігієни',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Waste Minimization' : 'Мінімізація відходів',
          description: isEnglish ? 'By-product recovery and waste reduction for profitability' : 'Відновлення побічних продуктів та скорочення відходів для прибутковості',
        },
      ],
    },
    // Product Types
    productTypes: {
      title: isEnglish ? 'Product Types We Support' : 'Типи продуктів, які ми підтримуємо',
      items: [
        {
          title: isEnglish ? 'Fresh Fillets' : 'Свіжі філе',
          description: isEnglish ? 'Skinless, bone-out fillets, portions' : 'Філе без шкіри та кісток, порції',
        },
        {
          title: isEnglish ? 'Frozen Products' : 'Заморожені продукти',
          description: isEnglish ? 'IQF fillets, blocks, value-added frozen items' : 'IQF філе, блоки, заморожені продукти з додаванням вартості',
        },
        {
          title: isEnglish ? 'Smoked Fish' : 'Копчена риба',
          description: isEnglish ? 'Hot-smoked, cold-smoked, sliced products' : 'Гаряче-копчена, холодно-копчена, нарізана продукція',
        },
        {
          title: isEnglish ? 'Value-Added Items' : 'Продукти з додаванням вартості',
          description: isEnglish ? 'Marinated, breaded, pre-cooked products' : 'Мариновані, паніровані, попередньо приготовані продукти',
        },
        {
          title: isEnglish ? 'By-Products' : 'Побічні продукти',
          description: isEnglish ? 'Fish meal, fish oil, collagen extraction' : 'Рибне борошно, рибʼячий жир, екстракція колагену',
        },
        {
          title: isEnglish ? 'Ready-to-Cook Products' : 'Готові до приготування продукти',
          description: isEnglish ? 'Seasoned, portioned, convenience products' : 'Приправлені, порціоновані, зручні продукти',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua' : 'Чому обрати Vismar Aqua',
      items: [
        {
          title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering costs while delivering optimized, HACCP-compliant processing facilities.'
            : 'AI-прискорений процес проектування знижує витрати на інжиніринг, забезпечуючи оптимізовані, HACCP-сертифіковані переробні підприємства.',
        },
        {
          title: isEnglish ? 'Food Safety Expertise' : 'Експертиза харчової безпеки',
          description: isEnglish
            ? 'HACCP compliance, hygiene standards, and food safety regulations built into every design for market access.'
            : 'Відповідність HACCP, стандарти гігієни та правила харчової безпеки вбудовані в кожен проект для доступу до ринку.',
        },
        {
          title: isEnglish ? 'Automation Integration' : 'Інтеграція автоматизації',
          description: isEnglish
            ? 'Modern automated processing lines reduce labor costs and improve product consistency and yield.'
            : 'Сучасні автоматизовані переробні лінії знижують витрати на робочу силу та покращують консистенцію продукту та вихід.',
        },
        {
          title: isEnglish ? 'Complete Vertical Solutions' : 'Повні вертикальні рішення',
          description: isEnglish
            ? 'Integrate processing facilities with farm production, hatcheries, and distribution for complete vertical integration.'
            : 'Інтеграція переробних підприємств з фермерським виробництвом, інкубаторіями та дистрибуцією для повної вертикальної інтеграції.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed processing facility projects and aquaculture production solutions.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів переробних підприємств та рішень для виробництва аквакультури.',
      cta: isEnglish ? 'View Our Processing Projects' : 'Переглянути наші проекти з переробки',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Processing Facility?' : 'Готові спроектувати ваше переробне підприємство?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your products, production volumes, and design the perfect processing facility for your operation.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші продукти, обсяги виробництва та спроектуємо ідеальне переробне підприємство для вашої операції.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New Processing Facility' : 'Нове переробне підприємство',
          isEnglish ? 'Facility Expansion' : 'Розширення підприємства',
          isEnglish ? 'Processing Line Upgrade' : 'Модернізація переробної лінії',
          isEnglish ? 'HACCP Compliance' : 'Відповідність HACCP',
          isEnglish ? 'Cold Chain Design' : 'Проектування холодового ланцюга',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Processing Facility' : 'Переробне підприємство'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Package className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Factory className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Factory className="w-10 h-10" />
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

            {/* Why Processing Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyProcessingTitle}</h3>
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

      {/* Our Processing Services */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card p-8 hover:shadow-xl transition-all group bg-white"
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

      {/* Processing Systems We Design */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.processingSystems.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.processingSystems.items.map((system, index) => {
              const Icon = system.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{system.title}</h4>
                  <p className="text-xs text-neutral-600">{system.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card p-6 h-full bg-white">
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
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.advantages.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.advantages.items.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="flex items-start gap-3">
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

      {/* Product Types We Support */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.productTypes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.productTypes.items.map((product, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-brand-primary" />
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whyUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whyUs.items.map((item, index) => (
              <div key={index} className="card p-8 bg-gradient-to-br from-white to-brand-accent/5">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
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
