import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Droplets,
  Filter,
  Waves,
  TestTube,
  Gauge,
  Settings,
  Wrench,
  FileText,
  Calculator,
  Package,
  Rocket,
  Wind,
  Zap,
  Thermometer,
  Shield,
  Factory,
  GraduationCap,
  Store,
  Building2,
  CheckCircle,
  ArrowRight,
  Activity,
  FlaskConical,
  Beaker
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Water Treatment Systems Engineering | Vismar Aqua'
      : 'Інжиніринг систем очищення води | Vismar Aqua',
    description: locale === 'en'
      ? 'Advanced water treatment systems for aquaculture. Expert design of filtration, biological treatment, aeration, disinfection, and monitoring systems with 50% lower costs.'
      : 'Передові системи очищення води для аквакультури. Експертне проектування фільтрації, біологічного очищення, аерації, дезінфекції та систем моніторингу зі зниженням витрат на 50%.',
  };
}

export default async function WaterTreatmentPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Water Treatment Systems Engineering' : 'Інжиніринг систем очищення води',
      subtitle: isEnglish
        ? 'Advanced water quality management for healthy, productive aquaculture operations'
        : 'Передове управління якістю води для здорових, продуктивних операцій аквакультури',
      cta: isEnglish ? 'Design Your Treatment System' : 'Спроектувати вашу систему очищення',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Essential Water Treatment for Aquaculture' : 'Основне очищення води для аквакультури',
      text1: isEnglish
        ? 'Water treatment is the foundation of successful aquaculture operations. Proper water quality management ensures optimal fish health, maximizes growth rates, prevents disease outbreaks, and maintains regulatory compliance while supporting sustainable production practices.'
        : 'Очищення води є основою успішних операцій аквакультури. Належне управління якістю води забезпечує оптимальне здоров\'я риби, максимізує темпи росту, запобігає спалахам хвороб та підтримує відповідність нормативним вимогам, підтримуючи практики сталого виробництва.',
      text2: isEnglish
        ? 'Vismar Aqua designs comprehensive water treatment systems including mechanical filtration, biological treatment, aeration and oxygenation, disinfection, solids removal, and automated monitoring. Our AI-accelerated engineering delivers energy-efficient, cost-effective treatment solutions tailored to your facility and water quality challenges.'
        : 'Vismar Aqua проектує комплексні системи очищення води, включаючи механічну фільтрацію, біологічне очищення, аерацію та оксигенацію, дезінфекцію, видалення твердих речовин та автоматизований моніторинг. Наш AI-прискорений інжиніринг забезпечує енергоефективні, економічно ефективні рішення очищення, адаптовані до вашого об\'єкта та викликів якості води.',
      whyTreatmentTitle: isEnglish ? 'Why Water Treatment Matters' : 'Чому важливе очищення води',
      benefits: [
        {
          icon: Activity,
          title: isEnglish ? 'Optimal Water Quality' : 'Оптимальна якість води',
          description: isEnglish ? 'Maintain ideal parameters for fish health and maximum growth rates' : 'Підтримуйте ідеальні параметри для здоров\'я риби та максимальних темпів росту',
        },
        {
          icon: Shield,
          title: isEnglish ? 'Disease Prevention' : 'Профілактика хвороб',
          description: isEnglish ? 'Reduce pathogen loads and prevent disease outbreaks through proper treatment' : 'Зменшуйте навантаження патогенів та запобігайте спалахам хвороб через належне очищення',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Regulatory Compliance' : 'Відповідність нормативним вимогам',
          description: isEnglish ? 'Meet environmental discharge standards and water quality regulations' : 'Відповідайте стандартам екологічного скидання та нормам якості води',
        },
        {
          icon: Droplets,
          title: isEnglish ? 'Sustainability' : 'Сталість',
          description: isEnglish ? 'Reduce water consumption through efficient treatment and reuse systems' : 'Зменшуйте споживання води через ефективні системи очищення та повторного використання',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our Water Treatment Services' : 'Наші послуги очищення води',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'System Design & Integration' : 'Проектування та інтеграція систем',
          description: isEnglish
            ? 'Complete water treatment system design including process selection, equipment sizing, hydraulic calculations, and integration with existing facilities.'
            : 'Повне проектування системи очищення води, включаючи вибір процесу, розмір обладнання, гідравлічні розрахунки та інтеграцію з існуючими об\'єктами.',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Treatment Process Engineering' : 'Інжиніринг процесу очищення',
          description: isEnglish
            ? 'Multi-barrier treatment train design: mechanical filtration, biological treatment, disinfection, and advanced oxidation processes.'
            : 'Проектування багатобар\'єрного ланцюга очищення: механічна фільтрація, біологічне очищення, дезінфекція та процеси передового окислення.',
        },
        {
          icon: Gauge,
          title: isEnglish ? 'Monitoring & Automation' : 'Моніторинг та автоматизація',
          description: isEnglish
            ? 'Real-time water quality monitoring, automated control systems, alarm management, and data logging for optimal performance.'
            : 'Моніторинг якості води в реальному часі, автоматизовані системи управління, управління сигналізацією та реєстрація даних для оптимальної продуктивності.',
        },
      ],
    },
    // Treatment Technologies
    technologies: {
      title: isEnglish ? 'Treatment Technologies We Design' : 'Технології очищення, які ми проектуємо',
      items: [
        {
          icon: Filter,
          title: isEnglish ? 'Mechanical Filtration' : 'Механічна фільтрація',
          description: isEnglish ? 'Drum filters, screens, settlers' : 'Барабанні фільтри, сита, відстійники',
        },
        {
          icon: Waves,
          title: isEnglish ? 'Biological Treatment' : 'Біологічне очищення',
          description: isEnglish ? 'Biofilters, constructed wetlands' : 'Біофільтри, штучні болота',
        },
        {
          icon: Wind,
          title: isEnglish ? 'Aeration & Oxygenation' : 'Аерація та оксигенація',
          description: isEnglish ? 'Diffusers, oxygen cones' : 'Дифузори, кисневі конуси',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Disinfection' : 'Дезінфекція',
          description: isEnglish ? 'UV, ozone, chlorination' : 'УФ, озон, хлорування',
        },
        {
          icon: FlaskConical,
          title: isEnglish ? 'Solids Removal' : 'Видалення твердих речовин',
          description: isEnglish ? 'Settling, centrifuges' : 'Відстоювання, центрифуги',
        },
        {
          icon: Beaker,
          title: isEnglish ? 'Denitrification Systems' : 'Системи денітрифікації',
          description: isEnglish ? 'Nitrate reduction reactors' : 'Реактори зниження нітратів',
        },
        {
          icon: TestTube,
          title: isEnglish ? 'Chemical Treatment' : 'Хімічна обробка',
          description: isEnglish ? 'pH control, alkalinity' : 'Контроль pH, лужність',
        },
        {
          icon: Thermometer,
          title: isEnglish ? 'Temperature Control' : 'Контроль температури',
          description: isEnglish ? 'Heat exchangers, chillers' : 'Теплообмінники, чілери',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Water Treatment Design Process' : 'Процес проектування очищення води',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Water Quality Assessment' : 'Оцінка якості води',
          description: isEnglish
            ? 'Analyze source water quality, production demands, species requirements, and discharge standards to establish treatment objectives.'
            : 'Аналіз якості вихідної води, потреб виробництва, вимог видів та стандартів скидання для встановлення цілей очищення.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'Treatment Train Design' : 'Проектування ланцюга очищення',
          description: isEnglish
            ? 'Design multi-barrier treatment process, select appropriate technologies, calculate removal efficiencies, and optimize performance.'
            : 'Проектування багатобар\'єрного процесу очищення, вибір відповідних технологій, розрахунок ефективності видалення та оптимізація продуктивності.',
        },
        {
          icon: Package,
          number: '03',
          title: isEnglish ? 'Equipment Specification' : 'Специфікація обладнання',
          description: isEnglish
            ? 'Select and size treatment equipment, specify monitoring instrumentation, design redundancy, and create procurement specifications.'
            : 'Вибір та розмір обладнання для очищення, специфікація інструментів моніторингу, проектування резервування та створення специфікацій закупівель.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'System Commissioning' : 'Введення системи в експлуатацію',
          description: isEnglish
            ? 'Installation oversight, system startup, performance testing, operator training, and ongoing optimization support.'
            : 'Нагляд за встановленням, запуск системи, тестування продуктивності, навчання операторів та постійна підтримка оптимізації.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'Multi-barrier Approach' : 'Багатобар\'єрний підхід',
          description: isEnglish ? 'Redundant treatment stages for reliable water quality' : 'Резервні етапи очищення для надійної якості води',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy-efficient Solutions' : 'Енергоефективні рішення',
          description: isEnglish ? 'Optimized designs minimize operational energy costs' : 'Оптимізовані конструкції мінімізують операційні енергетичні витрати',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Real-time Monitoring' : 'Моніторинг в реальному часі',
          description: isEnglish ? 'Continuous water quality tracking and data analytics' : 'Безперервне відстеження якості води та аналіз даних',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Automated Control' : 'Автоматизоване управління',
          description: isEnglish ? 'PLC-based automation reduces labor and improves consistency' : 'Автоматизація на основі ПЛК зменшує трудомісткість та покращує послідовність',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Modular Scalability' : 'Модульна масштабованість',
          description: isEnglish ? 'Design for future expansion and capacity increases' : 'Проектування для майбутнього розширення та збільшення потужності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Compliance-ready Design' : 'Дизайн готовий до відповідності',
          description: isEnglish ? 'Meet current and anticipated regulatory requirements' : 'Відповідність поточним та очікуваним нормативним вимогам',
        },
      ],
    },
    // Applications
    applications: {
      title: isEnglish ? 'Water Treatment Applications' : 'Застосування очищення води',
      items: [
        { icon: Droplets, label: isEnglish ? 'RAS Operations' : 'Операції RAS' },
        { icon: Waves, label: isEnglish ? 'Flow-Through Systems' : 'Прямоточні системи' },
        { icon: Building2, label: isEnglish ? 'Hatcheries' : 'Інкубаторії' },
        { icon: Factory, label: isEnglish ? 'Processing Plants' : 'Переробні підприємства' },
        { icon: Filter, label: isEnglish ? 'Effluent Treatment' : 'Очищення стічних вод' },
        { icon: Droplets, label: isEnglish ? 'Water Reuse Systems' : 'Системи повторного використання води' },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua' : 'Чому обрати Vismar Aqua',
      items: [
        {
          title: isEnglish ? '50% Lower Costs' : 'На 50% нижчі витрати',
          description: isEnglish
            ? 'AI-accelerated engineering delivers optimized water treatment systems at significantly reduced costs without compromising performance.'
            : 'AI-прискорений інжиніринг забезпечує оптимізовані системи очищення води зі значно зниженими витратами без компромісів продуктивності.',
        },
        {
          title: isEnglish ? 'Proven Treatment Protocols' : 'Перевірені протоколи очищення',
          description: isEnglish
            ? 'Battle-tested treatment technologies and protocols developed through 15+ years of aquaculture engineering experience.'
            : 'Випробувані в бою технології очищення та протоколи, розроблені через 15+ років досвіду інжинірингу аквакультури.',
        },
        {
          title: isEnglish ? 'Energy Optimization' : 'Оптимізація енергії',
          description: isEnglish
            ? 'Advanced modeling and design optimization minimize energy consumption while maximizing treatment efficiency and water quality.'
            : 'Передове моделювання та оптимізація дизайну мінімізують споживання енергії, максимізуючи ефективність очищення та якість води.',
        },
        {
          title: isEnglish ? 'Regulatory Expertise' : 'Експертиза нормативних вимог',
          description: isEnglish
            ? 'Deep understanding of environmental regulations, discharge permits, and water quality standards across multiple jurisdictions.'
            : 'Глибоке розуміння екологічних норм, дозволів на скидання та стандартів якості води в різних юрисдикціях.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed water treatment projects and aquaculture water quality solutions.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів очищення води та рішень якості води для аквакультури.',
      cta: isEnglish ? 'View Our Water Treatment Projects' : 'Переглянути наші проекти очищення води',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Water Treatment System?' : 'Готові спроектувати вашу систему очищення води?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your water quality challenges and design the optimal treatment solution for your operation.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші виклики якості води та спроектуємо оптимальне рішення очищення для вашої операції.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New Treatment System' : 'Нова система очищення',
          isEnglish ? 'System Upgrade' : 'Модернізація системи',
          isEnglish ? 'Water Quality Optimization' : 'Оптимізація якості води',
          isEnglish ? 'Effluent Treatment' : 'Очищення стічних вод',
          isEnglish ? 'Regulatory Compliance' : 'Відповідність нормативним вимогам',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Water Treatment' : 'Очищення води'}</span>
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
            <Filter className="w-40 h-40" />
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

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.intro.title}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-4">{content.intro.text1}</p>
              <p className="text-lg text-neutral-700">{content.intro.text2}</p>
            </div>

            {/* Why Treatment Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyTreatmentTitle}</h3>
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

      {/* Our Water Treatment Services */}
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

      {/* Treatment Technologies */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.technologies.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.technologies.items.map((technology, index) => {
              const Icon = technology.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{technology.title}</h4>
                  <p className="text-xs text-neutral-600">{technology.description}</p>
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

      {/* Applications */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-success/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.applications.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {content.applications.items.map((application, index) => {
              const Icon = application.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
                >
                  <Icon className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium text-neutral-700">{application.label}</span>
                </div>
              );
            })}
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
