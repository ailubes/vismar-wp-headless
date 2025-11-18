import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Droplets,
  Waves,
  Settings,
  Wrench,
  FileText,
  Calculator,
  Package,
  Rocket,
  Filter,
  Wind,
  Gauge,
  Zap,
  Thermometer,
  Shield,
  Factory,
  GraduationCap,
  Store,
  Building2,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'RAS Systems Design & Engineering | Vismar Aqua'
      : 'Проектування систем RAS | Vismar Aqua',
    description: locale === 'en'
      ? 'Complete recirculating aquaculture systems design and engineering services. AI-accelerated RAS design with 50% lower costs and 15+ years expertise.'
      : 'Повний комплекс послуг з проектування рециркуляційних систем аквакультури. AI-прискорене проектування RAS зі зниженням витрат на 50%.',
  };
}

export default async function RASSystemsPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'RAS Systems Design & Engineering' : 'Проектування та інжиніринг систем RAS',
      subtitle: isEnglish
        ? 'Complete recirculating aquaculture systems for sustainable, high-density fish production'
        : 'Повні рециркуляційні системи аквакультури для сталого виробництва риби високої щільності',
      cta: isEnglish ? 'Start Your RAS Project' : 'Розпочати проект RAS',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Advanced Recirculating Aquaculture Systems' : 'Сучасні рециркуляційні системи аквакультури',
      text1: isEnglish
        ? 'RAS (Recirculating Aquaculture Systems) represent the future of sustainable fish farming. These advanced closed-loop systems recycle 95-99% of water, minimize environmental impact, and enable year-round production with precise environmental control.'
        : 'RAS (рециркуляційні системи аквакультури) представляють майбутнє сталого рибництва. Ці передові системи замкнутого циклу переробляють 95-99% води, мінімізують вплив на довкілля та забезпечують цілорічне виробництво з точним контролем навколишнього середовища.',
      text2: isEnglish
        ? 'Vismar Aqua provides complete RAS design and engineering services, from initial consultation to commissioning. Our AI-accelerated design process delivers cost-effective, reliable systems tailored to your species and production goals.'
        : 'Vismar Aqua надає повний комплекс послуг з проектування та інжинірингу RAS, від початкової консультації до введення в експлуатацію. Наш AI-прискорений процес проектування забезпечує економічно ефективні, надійні системи, адаптовані до ваших видів і цілей виробництва.',
      whyRasTitle: isEnglish ? 'Why Choose RAS?' : 'Чому варто обрати RAS?',
      benefits: [
        {
          icon: Droplets,
          title: isEnglish ? 'Water Conservation' : 'Економія води',
          description: isEnglish ? '95-99% water reuse vs. traditional systems' : 'Повторне використання 95-99% води проти традиційних систем',
        },
        {
          icon: Thermometer,
          title: isEnglish ? 'Year-Round Production' : 'Цілорічне виробництво',
          description: isEnglish ? 'Complete environmental control, independent of climate' : 'Повний контроль навколишнього середовища, незалежно від клімату',
        },
        {
          icon: Shield,
          title: isEnglish ? 'Biosecurity' : 'Біобезпека',
          description: isEnglish ? 'Isolated systems prevent disease and pathogen entry' : 'Ізольовані системи запобігають захворюванням та проникненню патогенів',
        },
        {
          icon: Building2,
          title: isEnglish ? 'Location Flexibility' : 'Гнучкість розташування',
          description: isEnglish ? 'Build near markets, reduce transportation costs' : 'Будуйте поблизу ринків, знижуйте транспортні витрати',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our RAS Services' : 'Наші послуги RAS',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'System Design & Engineering' : 'Проектування та інжиніринг систем',
          description: isEnglish
            ? 'Complete system layout, component sizing, hydraulic calculations, and flow optimization for maximum efficiency.'
            : 'Повна компоновка системи, розрахунок компонентів, гідравлічні розрахунки та оптимізація потоку для максимальної ефективності.',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Equipment Specification' : 'Специфікація обладнання',
          description: isEnglish
            ? 'Detailed equipment selection including filtration, aeration, monitoring systems, and backup redundancy.'
            : 'Детальний підбір обладнання, включаючи фільтрацію, аерацію, системи моніторингу та резервне дублювання.',
        },
        {
          icon: Wrench,
          title: isEnglish ? 'Implementation Support' : 'Підтримка впровадження',
          description: isEnglish
            ? 'Installation guidance, commissioning assistance, operator training, and ongoing technical support.'
            : 'Керівництво встановленням, допомога з введенням в експлуатацію, навчання операторів та постійна технічна підтримка.',
        },
      ],
    },
    // Key Components
    components: {
      title: isEnglish ? 'Key RAS Components We Design' : 'Ключові компоненти RAS, які ми проектуємо',
      items: [
        {
          icon: Filter,
          title: isEnglish ? 'Mechanical Filtration' : 'Механічна фільтрація',
          description: isEnglish ? 'Drum filters, sedimentation tanks, solids removal' : 'Барабанні фільтри, відстійники, видалення твердих речовин',
        },
        {
          icon: Waves,
          title: isEnglish ? 'Biological Filtration' : 'Біологічна фільтрація',
          description: isEnglish ? 'Biofilters, moving bed bioreactors (MBBR)' : 'Біофільтри, біореактори з рухомим шаром (MBBR)',
        },
        {
          icon: Wind,
          title: isEnglish ? 'Aeration & Oxygenation' : 'Аерація та оксигенація',
          description: isEnglish ? 'Oxygen cones, diffusers, aeration systems' : 'Кисневі конуси, дифузори, системи аерації',
        },
        {
          icon: Gauge,
          title: isEnglish ? 'Water Quality Monitoring' : 'Моніторинг якості води',
          description: isEnglish ? 'Sensors, automation, real-time monitoring' : 'Датчики, автоматизація, моніторинг в реальному часі',
        },
        {
          icon: Zap,
          title: isEnglish ? 'UV Sterilization & Ozonation' : 'УФ-стерилізація та озонування',
          description: isEnglish ? 'Pathogen control, water disinfection' : 'Контроль патогенів, дезінфекція води',
        },
        {
          icon: Thermometer,
          title: isEnglish ? 'Temperature Control' : 'Контроль температури',
          description: isEnglish ? 'Heat exchangers, chillers, heating systems' : 'Теплообмінники, чілери, системи опалення',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Our RAS Design Process' : 'Наш процес проектування RAS',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Consultation & Requirements' : 'Консультація та вимоги',
          description: isEnglish
            ? 'Understanding your species, production goals, site conditions, and budget constraints.'
            : 'Розуміння ваших видів, цілей виробництва, умов ділянки та бюджетних обмежень.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'System Design & Calculations' : 'Проектування системи та розрахунки',
          description: isEnglish
            ? 'Hydraulic modeling, bioload calculations, component sizing, and energy analysis.'
            : 'Гідравлічне моделювання, розрахунки біонавантаження, розмір компонентів та аналіз енергії.',
        },
        {
          icon: Package,
          number: '03',
          title: isEnglish ? 'Equipment Selection & Specifications' : 'Підбір обладнання та специфікації',
          description: isEnglish
            ? 'Detailed specifications, vendor selection, cost estimation, and procurement support.'
            : 'Детальні специфікації, вибір постачальників, кошторис та підтримка закупівель.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'Implementation & Commissioning' : 'Впровадження та введення в експлуатацію',
          description: isEnglish
            ? 'Installation oversight, system startup, performance testing, and operator training.'
            : 'Нагляд за встановленням, запуск системи, тестування продуктивності та навчання операторів.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? '3D CAD Modeling' : '3D CAD моделювання',
          description: isEnglish ? 'Complete system visualization before construction' : 'Повна візуалізація системи перед будівництвом',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'CFD Analysis' : 'CFD аналіз',
          description: isEnglish ? 'Flow optimization using computational fluid dynamics' : 'Оптимізація потоку за допомогою обчислювальної гідродинаміки',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy Efficiency' : 'Енергоефективність',
          description: isEnglish ? 'Minimize operational costs through optimized design' : 'Мінімізуйте експлуатаційні витрати завдяки оптимізованому дизайну',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Scalable Designs' : 'Масштабовані проекти',
          description: isEnglish ? 'From pilot systems to commercial-scale facilities' : 'Від пілотних систем до об\'єктів комерційного масштабу',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Species-Specific' : 'Специфічно для видів',
          description: isEnglish ? 'Customized for salmon, trout, tilapia, and more' : 'Індивідуально для лосося, форелі, тіляпії та інших',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Redundancy Planning' : 'Планування резервування',
          description: isEnglish ? 'Backup systems to protect your investment' : 'Резервні системи для захисту ваших інвестицій',
        },
      ],
    },
    // Industries
    industries: {
      title: isEnglish ? 'Industries We Serve' : 'Галузі, які ми обслуговуємо',
      items: [
        { icon: Factory, label: isEnglish ? 'Commercial Fish Farms' : 'Комерційні рибні ферми' },
        { icon: GraduationCap, label: isEnglish ? 'Research Facilities' : 'Дослідницькі центри' },
        { icon: Building2, label: isEnglish ? 'Hatcheries & Nurseries' : 'Інкубаторії та розсадники' },
        { icon: Store, label: isEnglish ? 'Live Seafood Markets' : 'Ринки живих морепродуктів' },
        { icon: GraduationCap, label: isEnglish ? 'Educational Institutions' : 'Освітні заклади' },
        { icon: Factory, label: isEnglish ? 'Aquaculture Startups' : 'Стартапи аквакультури' },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua for RAS?' : 'Чому обрати Vismar Aqua для RAS?',
      items: [
        {
          title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering time and costs without compromising quality.'
            : 'AI-прискорений процес проектування скорочує час та витрати на інжиніринг без компромісів якості.',
        },
        {
          title: isEnglish ? 'AI-Accelerated Design Process' : 'AI-прискорений процес проектування',
          description: isEnglish
            ? 'Leverage cutting-edge AI tools for faster iterations, optimization, and error reduction.'
            : 'Використовуйте передові інструменти AI для швидших ітерацій, оптимізації та зменшення помилок.',
        },
        {
          title: isEnglish ? '15+ Years RAS Experience' : '15+ років досвіду RAS',
          description: isEnglish
            ? 'Deep expertise in recirculating aquaculture systems across multiple species and scales.'
            : 'Глибока експертиза в рециркуляційних системах аквакультури для різних видів та масштабів.',
        },
        {
          title: isEnglish ? 'War-Proven Reliability' : 'Надійність, перевірена війною',
          description: isEnglish
            ? 'Systems designed and delivered during challenging conditions, ensuring robust performance.'
            : 'Системи, спроектовані та поставлені в складних умовах, що забезпечує надійну роботу.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed RAS projects and aquaculture solutions.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів RAS та рішень для аквакультури.',
      cta: isEnglish ? 'View Our RAS Projects' : 'Переглянути наші проекти RAS',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your RAS System?' : 'Готові спроектувати вашу систему RAS?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your aquaculture goals and design the perfect RAS solution.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші цілі аквакультури та спроектуємо ідеальне рішення RAS.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New RAS System' : 'Нова система RAS',
          isEnglish ? 'Retrofit/Upgrade' : 'Модернізація/Оновлення',
          isEnglish ? 'Consultation Only' : 'Тільки консультація',
          isEnglish ? 'Research Project' : 'Дослідницький проект',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'RAS Systems' : 'Системи RAS'}</span>
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
            <Waves className="w-40 h-40" />
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

            {/* Why RAS Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyRasTitle}</h3>
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

      {/* Our RAS Services */}
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

      {/* Key Components */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.components.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.components.items.map((component, index) => {
              const Icon = component.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
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

      {/* Industries We Serve */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-success/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.industries.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {content.industries.items.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full hover:border-brand-primary hover:shadow-md transition-all"
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
