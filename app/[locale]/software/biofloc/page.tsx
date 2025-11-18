import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Droplets,
  Activity,
  Gauge,
  Wind,
  FlaskConical,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  BarChart3,
  Zap,
  Settings,
  Brain
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Biofloc Control System | Vismar Aqua'
      : 'Система контролю біофлоку | Vismar Aqua',
    description: locale === 'en'
      ? 'Automated biofloc monitoring and management for optimal water quality. Stable biofloc, reduced water exchange, better FCR, improved survival.'
      : 'Автоматизований моніторинг та управління біофлоком для оптимальної якості води. Стабільний біофлок, зменшений водообмін, кращий FCR, покращене виживання.',
  };
}

export default async function BioflocPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'Biofloc Control System' : 'Система контролю біофлоку',
      subtitle: isEnglish
        ? 'Automated biofloc monitoring and management for optimal water quality'
        : 'Автоматизований моніторинг та управління біофлоком для оптимальної якості води',
      cta: isEnglish ? 'Get Started' : 'Розпочати',
    },
    intro: {
      title: isEnglish ? 'Master Biofloc Technology' : 'Опануйте технологію біофлоку',
      text1: isEnglish
        ? 'Biofloc technology (BFT) is a sustainable aquaculture method that recycles waste into microbial protein, reducing water exchange and improving feed efficiency. However, maintaining stable biofloc requires constant monitoring of multiple parameters and quick adjustments.'
        : 'Технологія біофлоку (BFT) - це сталий метод аквакультури, який переробляє відходи в мікробний білок, зменшуючи водообмін та покращуючи ефективність корму. Однак підтримка стабільного біофлоку вимагає постійного моніторингу багатьох параметрів та швидких коригувань.',
      text2: isEnglish
        ? 'Our biofloc control system automates the monitoring and management of biofloc volume, C:N ratio, aeration, alkalinity, and sludge removal. Maintain optimal biofloc conditions 24/7 with minimal manual intervention.'
        : 'Наша система контролю біофлоку автоматизує моніторинг та управління об\'ємом біофлоку, співвідношенням C:N, аерацією, лужністю та видаленням осаду. Підтримуйте оптимальні умови біофлоку цілодобово з мінімальним ручним втручанням.',
    },
    features: {
      title: isEnglish ? 'Key Features' : 'Ключові можливості',
      items: [
        {
          icon: Gauge,
          title: isEnglish ? 'Biofloc Volume Monitoring' : 'Моніторинг об\'єму біофлоку',
          description: isEnglish
            ? 'Continuous measurement of biofloc volume (SV30/SV10) with automated sampling and analysis'
            : 'Безперервне вимірювання об\'єму біофлоку (SV30/SV10) з автоматизованим відбором проб та аналізом',
        },
        {
          icon: Wind,
          title: isEnglish ? 'Automated Aeration Control' : 'Автоматизований контроль аерації',
          description: isEnglish
            ? 'Smart aeration adjustment based on DO, biofloc volume, and feeding schedules'
            : 'Розумне регулювання аерації на основі DO, об\'єму біофлоку та графіків годівлі',
        },
        {
          icon: FlaskConical,
          title: isEnglish ? 'C:N Ratio Management' : 'Управління співвідношенням C:N',
          description: isEnglish
            ? 'Automatic carbon source dosing to maintain optimal C:N ratio and biofloc formation'
            : 'Автоматичне дозування джерела вуглецю для підтримки оптимального співвідношення C:N та формування біофлоку',
        },
        {
          icon: Activity,
          title: isEnglish ? 'Alkalinity Control' : 'Контроль лужності',
          description: isEnglish
            ? 'Automated alkalinity monitoring and lime/buffer dosing to prevent pH crashes'
            : 'Автоматизований моніторинг лужності та дозування вапна/буфера для запобігання падінь pH',
        },
        {
          icon: Droplets,
          title: isEnglish ? 'Sludge Management' : 'Управління осадом',
          description: isEnglish
            ? 'Scheduled sludge removal with automated drain valves and waste monitoring'
            : 'Заплановане видалення осаду з автоматизованими зливними клапанами та моніторингом відходів',
        },
        {
          icon: AlertCircle,
          title: isEnglish ? 'Alert System' : 'Система сповіщень',
          description: isEnglish
            ? 'Instant alerts for critical parameters: DO, pH, biofloc volume, temperature, ammonia'
            : 'Миттєві сповіщення для критичних параметрів: DO, pH, об\'єм біофлоку, температура, аміак',
        },
      ],
    },
    howItWorks: {
      title: isEnglish ? 'How It Works' : 'Як це працює',
      steps: [
        {
          icon: Activity,
          number: '01',
          title: isEnglish ? 'Sensor Installation' : 'Встановлення датчиків',
          description: isEnglish
            ? 'Install sensors for DO, pH, temperature, turbidity, and automated biofloc samplers'
            : 'Встановіть датчики для DO, pH, температури, каламутності та автоматизовані пробовідбірники біофлоку',
        },
        {
          icon: Settings,
          number: '02',
          title: isEnglish ? 'Automation Setup' : 'Налаштування автоматизації',
          description: isEnglish
            ? 'Connect PLC/SCADA to control aeration blowers, carbon dosing pumps, and sludge removal valves'
            : 'Підключіть ПЛК/SCADA для контролю повітродувок аерації, насосів дозування вуглецю та клапанів видалення осаду',
        },
        {
          icon: BarChart3,
          number: '03',
          title: isEnglish ? 'Real-Time Control' : 'Контроль в реальному часі',
          description: isEnglish
            ? 'System automatically adjusts aeration, carbon dosing, and alkalinity based on biofloc parameters'
            : 'Система автоматично регулює аерацію, дозування вуглецю та лужність на основі параметрів біофлоку',
        },
        {
          icon: Zap,
          number: '04',
          title: isEnglish ? 'Monitoring & Alerts' : 'Моніторинг та сповіщення',
          description: isEnglish
            ? 'Monitor biofloc stability on dashboard, receive alerts for deviations, optimize manually as needed'
            : 'Відстежуйте стабільність біофлоку на панелі, отримуйте сповіщення про відхилення, оптимізуйте вручну за потреби',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technical Specifications' : 'Технічні специфікації',
      specs: [
        {
          label: isEnglish ? 'Monitored Parameters' : 'Параметри моніторингу',
          value: isEnglish ? 'DO, pH, temp, turbidity, biofloc volume (SV30)' : 'DO, pH, темп, каламутність, об\'єм біофлоку (SV30)',
        },
        {
          label: isEnglish ? 'Control Systems' : 'Системи контролю',
          value: isEnglish ? 'PLC, SCADA, automated dosing pumps, valves' : 'ПЛК, SCADA, автоматизовані насоси дозування, клапани',
        },
        {
          label: isEnglish ? 'Automation Protocol' : 'Протокол автоматизації',
          value: 'Modbus, MQTT, OPC-UA',
        },
        {
          label: isEnglish ? 'Cloud Monitoring' : 'Хмарний моніторинг',
          value: isEnglish ? 'Real-time dashboard, mobile app, SMS/email alerts' : 'Панель в реальному часі, мобільний додаток, SMS/email сповіщення',
        },
        {
          label: isEnglish ? 'Carbon Sources Supported' : 'Підтримувані джерела вуглецю',
          value: isEnglish ? 'Molasses, sugar, flour, glycerol (configurable)' : 'Меляса, цукор, борошно, гліцерин (налаштовується)',
        },
        {
          label: isEnglish ? 'Scalability' : 'Масштабованість',
          value: isEnglish ? 'Single ponds to multi-pond operations' : 'Від одного ставка до багатьох ставків',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Measurable Benefits' : 'Вимірювані переваги',
      items: [
        {
          icon: Droplets,
          title: isEnglish ? 'Stable Biofloc' : 'Стабільний біофлок',
          description: isEnglish
            ? 'Maintain consistent biofloc volume and quality, preventing crashes and production losses'
            : 'Підтримуйте постійний об\'єм та якість біофлоку, запобігаючи аваріям та втратам виробництва',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Reduced Water Exchange' : 'Зменшений водообмін',
          description: isEnglish
            ? 'Minimize water usage (5-10% exchange vs. 20-30% traditional), lower pumping costs'
            : 'Мінімізуйте використання води (5-10% обміну проти 20-30% традиційного), нижчі витрати на перекачування',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Better FCR' : 'Кращий FCR',
          description: isEnglish
            ? 'Improve feed conversion ratio by 10-15% through microbial protein supplementation'
            : 'Покращіть коефіцієнт конверсії корму на 10-15% через доповнення мікробним білком',
        },
        {
          icon: Activity,
          title: isEnglish ? 'Improved Survival' : 'Покращене виживання',
          description: isEnglish
            ? 'Stable water quality and disease suppression lead to higher survival rates'
            : 'Стабільна якість води та придушення захворювань призводять до вищих показників виживання',
        },
      ],
    },
    aiOptimization: {
      title: isEnglish ? 'AI-Powered Biofloc Optimization' : 'Оптимізація біофлоку на основі ШІ',
      subtitle: isEnglish
        ? 'Machine learning algorithms predict and prevent biofloc crashes, optimize carbon dosing, and maximize system stability'
        : 'Алгоритми машинного навчання передбачають та запобігають аваріям біофлоку, оптимізують дозування вуглецю та максимізують стабільність системи'
    },
    useCases: {
      title: isEnglish ? 'Use Cases' : 'Випадки використання',
      items: [
        {
          title: isEnglish ? 'Shrimp Biofloc Systems' : 'Системи біофлоку креветок',
          description: isEnglish
            ? 'Optimize L. vannamei shrimp production in biofloc systems with automated C:N ratio management, aeration control, and sludge removal. Achieve densities of 150-300 shrimp/m² with minimal water exchange and improved survival rates.'
            : 'Оптимізуйте виробництво креветок L. vannamei в системах біофлоку з автоматизованим управлінням співвідношенням C:N, контролем аерації та видаленням осаду. Досягайте щільності 150-300 креветок/м² з мінімальним водообміном та покращеними показниками виживання.',
        },
        {
          title: isEnglish ? 'Tilapia Biofloc' : 'Біофлок тиляпії',
          description: isEnglish
            ? 'Intensive tilapia production in biofloc tanks/raceways with automated biofloc management. Maintain optimal biofloc volume (15-30 mL/L), prevent DO crashes during feeding, and optimize carbon dosing for stable water quality and maximum growth.'
            : 'Інтенсивне виробництво тиляпії в біофлок резервуарах/каналах з автоматизованим управлінням біофлоку. Підтримуйте оптимальний об\'єм біофлоку (15-30 мл/л), запобігайте аваріям DO під час годівлі та оптимізуйте дозування вуглецю для стабільної якості води та максимального росту.',
        },
        {
          title: isEnglish ? 'High-Density Systems' : 'Системи високої щільності',
          description: isEnglish
            ? 'Manage super-intensive biofloc systems (>200 kg/m³ tilapia, >20 kg/m³ shrimp) with precise automated control. Prevent biofloc crashes, optimize aeration energy, and maintain stable production in challenging high-density conditions.'
            : 'Керуйте супер-інтенсивними системами біофлоку (>200 кг/м³ тиляпії, >20 кг/м³ креветок) з точним автоматизованим контролем. Запобігайте аваріям біофлоку, оптимізуйте енергію аерації та підтримуйте стабільне виробництво в складних умовах високої щільності.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Pricing & Plans' : 'Ціни та плани',
      description: isEnglish
        ? 'Custom pricing based on system size, automation level, and features. Contact us for a tailored quote and consultation.'
        : 'Індивідуальні ціни залежно від розміру системи, рівня автоматизації та функцій. Зв\'яжіться з нами для індивідуального кошторису та консультації.',
      cta: isEnglish ? 'Contact for Pricing' : 'Зв\'язатися для ціни',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Our Biofloc Control System?' : 'Чому обрати нашу систему контролю біофлоку?',
      items: [
        {
          title: isEnglish ? 'Biofloc Expertise' : 'Експертиза біофлоку',
          description: isEnglish
            ? 'Developed by engineers with real-world biofloc experience in shrimp and tilapia production. We understand the challenges and have optimized control algorithms based on years of operational data.'
            : 'Розроблено інженерами з реальним досвідом біофлоку у виробництві креветок та тиляпії. Ми розуміємо виклики та оптимізували алгоритми контролю на основі років операційних даних.',
        },
        {
          title: isEnglish ? 'Proven Reliability' : 'Перевірена надійність',
          description: isEnglish
            ? 'Successfully deployed in commercial biofloc farms across multiple countries. Our systems have prevented countless biofloc crashes and production losses.'
            : 'Успішно розгорнуто на комерційних фермах біофлоку в кількох країнах. Наші системи запобігли незліченним аваріям біофлоку та втратам виробництва.',
        },
        {
          title: isEnglish ? 'Flexible Automation' : 'Гнучка автоматизація',
          description: isEnglish
            ? 'Works with existing equipment or new installations. Compatible with major PLC/SCADA brands. Start with basic monitoring and add automation gradually as needed.'
            : 'Працює з існуючим обладнанням або новими установками. Сумісна з основними брендами ПЛК/SCADA. Почніть з базового моніторингу та додавайте автоматизацію поступово за потреби.',
        },
        {
          title: isEnglish ? 'Expert Support' : 'Експертна підтримка',
          description: isEnglish
            ? 'Technical support from biofloc engineers, not just software developers. We provide training, troubleshooting, and optimization advice based on your species and system.'
            : 'Технічна підтримка від інженерів біофлоку, а не лише розробників програмного забезпечення. Ми надаємо навчання, усунення несправностей та поради з оптимізації на основі ваших видів та системи.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Ready to Optimize Biofloc Production?' : 'Готові оптимізувати виробництво біофлоку?',
      description: isEnglish
        ? 'Contact us for a consultation on biofloc control systems. We\'ll help you design the right solution for your operation.'
        : 'Зв\'яжіться з нами для консультації щодо систем контролю біофлоку. Ми допоможемо вам розробити правильне рішення для вашої операції.',
      cta: isEnglish ? 'Get Started' : 'Розпочати',
    },
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/software`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Software' : 'Програмне забезпечення'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">
              {isEnglish ? 'Biofloc Control' : 'Контроль біофлоку'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Droplets className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Activity className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Droplets className="w-10 h-10" />
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.intro.title}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-4">{content.intro.text1}</p>
              <p className="text-lg text-neutral-700">{content.intro.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.items.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card p-6 hover:shadow-xl transition-all group bg-white">
                  <div className="w-14 h-14 bg-brand-secondary/10 rounded-xl mb-4 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.howItWorks.steps.map((step, index) => {
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
                  {index < content.howItWorks.steps.length - 1 && (
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

      {/* Technical Specifications */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.techSpecs.title}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.techSpecs.specs.map((spec, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-neutral-200">
                  <div className="text-sm font-medium text-neutral-500 mb-2">{spec.label}</div>
                  <div className="text-lg font-semibold text-neutral-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.benefits.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI-Powered Biofloc Optimization */}
      <section className="section bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.aiOptimization.title}</h2>
            <p className="text-lg text-neutral-600">{content.aiOptimization.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 bg-white">
              <Brain className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Predictive Crash Prevention' : 'Прогнозна профілактика аварій'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Machine learning detects early warning signs of biofloc crashes before they occur'
                  : 'Машинне навчання виявляє ранні ознаки аварій біофлоку до їх виникнення'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Settings className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Intelligent C:N Optimization' : 'Розумна оптимізація C:N'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'AI-powered carbon source dosing based on feed input, TAN levels, and biofloc volume'
                  : 'Дозування джерела вуглецю на основі ШІ залежно від вводу корму, рівнів TAN та об\'єму біофлоку'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Wind className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Smart Aeration Scheduling' : 'Розумне планування аерації'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Dynamic aeration control based on dissolved oxygen trends, biomass, and time of day'
                  : 'Динамічний контроль аерації на основі тенденцій розчиненого кисню, біомаси та часу доби'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Activity className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Anomaly Detection' : 'Виявлення аномалій'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Automated detection of unusual patterns in biofloc volume, color, or settling characteristics'
                  : 'Автоматизоване виявлення незвичних моделей в об\'ємі біофлоку, кольорі або характеристиках осідання'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-success/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.useCases.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.useCases.items.map((useCase, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">{useCase.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.pricing.title}</h2>
            <p className="text-lg text-neutral-600 mb-8">{content.pricing.description}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-primary/90 transition-all hover:shadow-lg"
            >
              {content.pricing.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-accent/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whyChoose.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whyChoose.items.map((item, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-accent text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.finalCta.title}</h2>
            <p className="text-xl text-white/90 mb-8">{content.finalCta.description}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-brand-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
            >
              {content.finalCta.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
