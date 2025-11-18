import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wheat,
  Factory,
  Scale,
  Gauge,
  Cog,
  Package,
  Settings,
  Wrench,
  FileText,
  Calculator,
  Rocket,
  Filter,
  Zap,
  Thermometer,
  Shield,
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Activity,
  Beaker,
  Wind,
  Layers
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Feed Mill Engineering & Design | Vismar Aqua'
      : 'Інжиніринг та проектування кормових заводів | Vismar Aqua',
    description: locale === 'en'
      ? 'Custom aquaculture feed mill design and engineering. On-site feed production systems for cost control, quality assurance, and formulation optimization. Reduce feed costs by 20-40%.'
      : 'Індивідуальне проектування та інжиніринг кормових заводів для аквакультури. Системи виробництва кормів на місці для контролю витрат, контролю якості та оптимізації рецептур. Зниження витрат на корми на 20-40%.',
  };
}

export default async function FeedMillPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Feed Mill Engineering & Design' : 'Інжиніринг та проектування кормових заводів',
      subtitle: isEnglish
        ? 'Custom feed production systems for quality control and cost optimization'
        : 'Індивідуальні системи виробництва кормів для контролю якості та оптимізації витрат',
      cta: isEnglish ? 'Design Your Feed Mill' : 'Спроектувати ваш кормовий завод',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'On-Site Feed Production for Aquaculture' : 'Виробництво кормів на місці для аквакультури',
      text1: isEnglish
        ? 'Feed represents 50-60% of aquaculture production costs. On-site feed mills enable precise formulation control, ingredient flexibility, and cost reduction of 20-40% compared to commercial feeds. Custom feed production ensures optimal nutrition, freshness, and eliminates dependency on external suppliers.'
        : 'Корми становлять 50-60% витрат на виробництво аквакультури. Кормові заводи на місці забезпечують точний контроль рецептур, гнучкість інгредієнтів та зниження витрат на 20-40% порівняно з комерційними кормами. Індивідуальне виробництво кормів забезпечує оптимальне харчування, свіжість та усуває залежність від зовнішніх постачальників.',
      text2: isEnglish
        ? 'Vismar Aqua designs complete feed mill systems from ingredient reception to finished pellet packaging. Our engineering covers grinding, mixing, pelleting, extrusion, drying, coating, and quality control systems tailored to your production capacity and species requirements.'
        : 'Vismar Aqua проектує повні системи кормових заводів від прийому інгредієнтів до пакування готових гранул. Наш інжиніринг охоплює подрібнення, змішування, гранулювання, екструзію, сушіння, покриття та системи контролю якості, адаптовані до вашої виробничої потужності та вимог видів.',
      whyFeedMillTitle: isEnglish ? 'Benefits of On-Site Feed Production' : 'Переваги виробництва кормів на місці',
      benefits: [
        {
          icon: DollarSign,
          title: isEnglish ? 'Cost Reduction 20-40%' : 'Зниження витрат 20-40%',
          description: isEnglish ? 'Eliminate commercial feed markups, transportation costs, and middlemen' : 'Усуньте націнки комерційних кормів, транспортні витрати та посередників',
        },
        {
          icon: Shield,
          title: isEnglish ? 'Quality Control' : 'Контроль якості',
          description: isEnglish ? 'Direct control over ingredient quality, formulation, and freshness' : 'Прямий контроль над якістю інгредієнтів, рецептурою та свіжістю',
        },
        {
          icon: Beaker,
          title: isEnglish ? 'Custom Formulation' : 'Індивідуальні рецептури',
          description: isEnglish ? 'Optimize nutrition for specific species, life stages, and performance goals' : 'Оптимізація харчування для конкретних видів, стадій життя та цілей продуктивності',
        },
        {
          icon: Package,
          title: isEnglish ? 'Ingredient Flexibility' : 'Гнучкість інгредієнтів',
          description: isEnglish ? 'Use local ingredients, adjust to market prices, reduce dependency' : 'Використовуйте місцеві інгредієнти, адаптуйтесь до ринкових цін, зменшуйте залежність',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our Feed Mill Services' : 'Наші послуги кормових заводів',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'Complete System Design' : 'Повне проектування системи',
          description: isEnglish
            ? 'End-to-end feed mill design from raw material reception to finished product packaging, including process flow, equipment layout, and automation systems.'
            : 'Наскрізне проектування кормового заводу від прийому сировини до пакування готової продукції, включаючи технологічний потік, компоновку обладнання та системи автоматизації.',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Ingredient Handling Engineering' : 'Інжиніринг обробки інгредієнтів',
          description: isEnglish
            ? 'Silos, conveyors, weighing systems, and automated dosing equipment for precise ingredient management and contamination prevention.'
            : 'Силоси, конвеєри, системи зважування та автоматизоване дозуюче обладнання для точного управління інгредієнтами та запобігання забрудненню.',
        },
        {
          icon: Cog,
          title: isEnglish ? 'Automation & Control Integration' : 'Інтеграція автоматизації та управління',
          description: isEnglish
            ? 'PLC-based control systems, recipe management, batch tracking, and quality control integration for consistent production.'
            : 'Системи управління на базі ПЛК, управління рецептами, відстеження партій та інтеграція контролю якості для стабільного виробництва.',
        },
      ],
    },
    // Feed Mill Systems
    systems: {
      title: isEnglish ? 'Feed Mill Systems We Design' : 'Системи кормових заводів, які ми проектуємо',
      items: [
        {
          icon: Package,
          title: isEnglish ? 'Raw Material Reception' : 'Прийом сировини',
          description: isEnglish ? 'Silos, pneumatic conveyors, bucket elevators, weighing systems' : 'Силоси, пневматичні конвеєри, ковшові елеватори, системи зважування',
        },
        {
          icon: Cog,
          title: isEnglish ? 'Grinding & Milling' : 'Подрібнення та помел',
          description: isEnglish ? 'Hammer mills, particle size control, grinding optimization' : 'Молоткові млини, контроль розміру частинок, оптимізація подрібнення',
        },
        {
          icon: Layers,
          title: isEnglish ? 'Mixing Systems' : 'Системи змішування',
          description: isEnglish ? 'Batch mixers, continuous mixers, homogeneity control' : 'Змішувачі партій, безперервні змішувачі, контроль однорідності',
        },
        {
          icon: Factory,
          title: isEnglish ? 'Pelletizing' : 'Гранулювання',
          description: isEnglish ? 'Extruders, pellet mills, steam conditioning, die selection' : 'Екструдери, гранулятори, парове кондиціювання, вибір матриць',
        },
        {
          icon: Wind,
          title: isEnglish ? 'Drying & Cooling' : 'Сушіння та охолодження',
          description: isEnglish ? 'Pellet coolers, dryers, moisture control systems' : 'Охолоджувачі гранул, сушарки, системи контролю вологості',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Coating & Finishing' : 'Покриття та фінішна обробка',
          description: isEnglish ? 'Oil coating, vitamin/mineral coating, palatability enhancement' : 'Олійне покриття, покриття вітамінами/мінералами, підвищення смакових якостей',
        },
        {
          icon: Package,
          title: isEnglish ? 'Packaging & Storage' : 'Пакування та зберігання',
          description: isEnglish ? 'Automatic bagging, bulk storage, finished feed silos' : 'Автоматичне пакування, зберігання насипом, силоси готових кормів',
        },
        {
          icon: Beaker,
          title: isEnglish ? 'Quality Control Lab' : 'Лабораторія контролю якості',
          description: isEnglish ? 'Testing equipment, formulation software, quality assurance protocols' : 'Обладнання для випробувань, програмне забезпечення рецептур, протоколи контролю якості',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Feed Mill Design Process' : 'Процес проектування кормового заводу',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Production Requirements & Formulation Analysis' : 'Вимоги до виробництва та аналіз рецептур',
          description: isEnglish
            ? 'Define production capacity, species requirements, feed formulations, ingredient sourcing, and quality targets for mill design.'
            : 'Визначення виробничої потужності, вимог видів, рецептур кормів, джерел інгредієнтів та цільових показників якості для проектування заводу.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'Process Design & Equipment Sizing' : 'Проектування процесу та розмір обладнання',
          description: isEnglish
            ? 'Calculate throughput requirements, size equipment, design process flow, optimize energy efficiency and production capacity.'
            : 'Розрахунок вимог до пропускної здатності, розмір обладнання, проектування технологічного потоку, оптимізація енергоефективності та виробничої потужності.',
        },
        {
          icon: Settings,
          number: '03',
          title: isEnglish ? 'Automation & Control System Design' : 'Проектування системи автоматизації та управління',
          description: isEnglish
            ? 'PLC programming, recipe management, automated dosing systems, batch control, and quality monitoring integration.'
            : 'Програмування ПЛК, управління рецептами, автоматизовані системи дозування, контроль партій та інтеграція моніторингу якості.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'Installation & Commissioning' : 'Встановлення та введення в експлуатацію',
          description: isEnglish
            ? 'Equipment installation supervision, system testing, operator training, and production optimization for full operational readiness.'
            : 'Нагляд за встановленням обладнання, тестування системи, навчання операторів та оптимізація виробництва для повної експлуатаційної готовності.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'Automated Ingredient Dosing' : 'Автоматизоване дозування інгредієнтів',
          description: isEnglish ? 'Precise formulation control with automated weighing and batching' : 'Точний контроль рецептури з автоматичним зважуванням та дозуванням',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Precise Formulation Control' : 'Точний контроль рецептури',
          description: isEnglish ? 'Recipe management software ensures consistent feed quality' : 'Програмне забезпечення управління рецептами забезпечує стабільну якість кормів',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy-Efficient Processing' : 'Енергоефективна обробка',
          description: isEnglish ? 'Optimized equipment selection minimizes power consumption' : 'Оптимізований підбір обладнання мінімізує споживання електроенергії',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Dust Control Systems' : 'Системи контролю пилу',
          description: isEnglish ? 'Worker safety and environmental compliance built-in' : 'Вбудована безпека працівників та відповідність екологічним нормам',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Modular Expansion Capability' : 'Можливість модульного розширення',
          description: isEnglish ? 'Design allows for future capacity increases' : 'Проект дозволяє майбутнє збільшення потужності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Remote Monitoring' : 'Віддалений моніторинг',
          description: isEnglish ? 'Real-time production tracking and quality control' : 'Відстеження виробництва в реальному часі та контроль якості',
        },
      ],
    },
    // Feed Types
    feedTypes: {
      title: isEnglish ? 'Feed Types We Support' : 'Типи кормів, які ми підтримуємо',
      items: [
        {
          title: isEnglish ? 'Extruded Floating Pellets' : 'Екструдовані плаваючі гранули',
          description: isEnglish ? 'High-expansion floating feeds for surface feeders, RAS systems' : 'Корми високого розширення для поверхневих годівниць, системи RAS',
        },
        {
          title: isEnglish ? 'Sinking Pellets' : 'Тонучі гранули',
          description: isEnglish ? 'Dense pellets for bottom feeders, shrimp, marine species' : 'Щільні гранули для донних годівниць, креветок, морських видів',
        },
        {
          title: isEnglish ? 'Crumbles & Fines' : 'Крихти та дрібні фракції',
          description: isEnglish ? 'Small particle feeds for fry and larval stages' : 'Корми дрібних частинок для мальків та личинкових стадій',
        },
        {
          title: isEnglish ? 'Specialty Diets' : 'Спеціалізовані раціони',
          description: isEnglish ? 'High protein, medicated feeds, functional feeds' : 'Високопротеїнові, лікувальні корми, функціональні корми',
        },
        {
          title: isEnglish ? 'Larval Feeds' : 'Корми для личинок',
          description: isEnglish ? 'Micro-pellets, micro-encapsulated nutrition' : 'Мікрогранули, мікроінкапсульоване харчування',
        },
        {
          title: isEnglish ? 'Custom Formulations' : 'Індивідуальні рецептури',
          description: isEnglish ? 'Species-specific, performance-optimized feed designs' : 'Специфічні для видів, оптимізовані для продуктивності конструкції кормів',
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
            ? 'AI-accelerated design process delivers cost-effective feed mill engineering while maintaining highest quality standards and technical excellence.'
            : 'AI-прискорений процес проектування забезпечує економічно ефективний інжиніринг кормових заводів, зберігаючи найвищі стандарти якості та технічну досконалість.',
        },
        {
          title: isEnglish ? 'Feed Technology Expertise' : 'Експертиза технологій кормів',
          description: isEnglish
            ? 'Deep understanding of aquaculture nutrition, pelleting technology, extrusion processes, and feed formulation for optimal results.'
            : 'Глибоке розуміння харчування аквакультури, технології гранулювання, процесів екструзії та рецептур кормів для оптимальних результатів.',
        },
        {
          title: isEnglish ? 'ROI-Focused Design' : 'Проектування з фокусом на ROI',
          description: isEnglish
            ? 'Equipment selection and system design optimized for payback period, production efficiency, and long-term profitability.'
            : 'Підбір обладнання та проектування системи оптимізовані для періоду окупності, ефективності виробництва та довгострокової прибутковості.',
        },
        {
          title: isEnglish ? 'Turnkey Solutions' : 'Рішення під ключ',
          description: isEnglish
            ? 'Complete project delivery from design through commissioning, including equipment procurement, installation, and operator training.'
            : 'Повна реалізація проекту від проектування до введення в експлуатацію, включаючи закупівлю обладнання, встановлення та навчання операторів.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed feed mill projects and aquaculture production facilities.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів кормових заводів та виробничих об\'єктів аквакультури.',
      cta: isEnglish ? 'View Our Feed Mill Projects' : 'Переглянути наші проекти кормових заводів',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Feed Mill?' : 'Готові спроектувати ваш кормовий завод?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your production capacity, species requirements, and design the optimal feed mill solution for cost-effective, high-quality feed production.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо вашу виробничу потужність, вимоги видів та спроектуємо оптимальне рішення кормового заводу для економічно ефективного виробництва високоякісних кормів.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New Feed Mill Construction' : 'Будівництво нового кормового заводу',
          isEnglish ? 'Feed Mill Expansion' : 'Розширення кормового заводу',
          isEnglish ? 'Equipment Upgrade' : 'Модернізація обладнання',
          isEnglish ? 'Automation Integration' : 'Інтеграція автоматизації',
          isEnglish ? 'Formulation Optimization' : 'Оптимізація рецептур',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Feed Mill Engineering' : 'Інжиніринг кормових заводів'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Wheat className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Factory className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Wheat className="w-10 h-10" />
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

            {/* Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyFeedMillTitle}</h3>
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

      {/* Our Feed Mill Services */}
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

      {/* Feed Mill Systems We Design */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.systems.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.systems.items.map((system, index) => {
              const Icon = system.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
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
                <div key={index} className="flex items-start gap-3 p-6 bg-gradient-to-br from-white to-neutral-50 rounded-lg border border-neutral-100">
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

      {/* Feed Types We Support */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.feedTypes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.feedTypes.items.map((feedType, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Wheat className="w-6 h-6 text-brand-primary" />
                  <h3 className="font-semibold text-lg">{feedType.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{feedType.description}</p>
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
