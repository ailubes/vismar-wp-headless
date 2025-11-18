import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Puzzle,
  CheckCircle,
  ArrowRight,
  Cpu,
  Database,
  Cloud,
  Settings
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Custom App Development | Vismar Aqua'
      : 'Розробка кастомних додатків | Vismar Aqua',
    description: locale === 'en'
      ? 'Tailored digital solutions for your unique aquaculture needs. Custom mobile/web apps, integrations, and platforms built by engineers who understand aquaculture.'
      : 'Індивідуальні цифрові рішення для ваших унікальних потреб аквакультури. Кастомні мобільні/веб-додатки, інтеграції та платформи, створені інженерами, які розуміють аквакультуру.',
  };
}

export default async function CustomAppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'Custom App Development' : 'Розробка кастомних додатків',
      subtitle: isEnglish
        ? 'Tailored digital solutions for your unique aquaculture needs'
        : 'Індивідуальні цифрові рішення для ваших унікальних потреб аквакультури',
      cta: isEnglish ? 'Discuss Your Project' : 'Обговорити ваш проект',
    },
    intro: {
      title: isEnglish ? 'Software Built for Your Operation' : 'Програмне забезпечення створене для вашої операції',
      text1: isEnglish
        ? 'Off-the-shelf software rarely fits perfectly. Your aquaculture operation has unique workflows, species, equipment, and business processes. Generic solutions force you to adapt your operations to the software, not the other way around.'
        : 'Готове програмне забезпечення рідко ідеально підходить. Ваша аквакультурна операція має унікальні робочі процеси, види, обладнання та бізнес-процеси. Загальні рішення змушують вас адаптувати свої операції до програмного забезпечення, а не навпаки.',
      text2: isEnglish
        ? 'We develop custom mobile and web applications tailored to your exact requirements. From simple data collection apps to complex farm management platforms, we build software that fits your operation perfectly. And because we\'re aquaculture engineers who code, we understand your challenges from day one.'
        : 'Ми розробляємо кастомні мобільні та веб-додатки, адаптовані до ваших точних вимог. Від простих додатків для збору даних до складних платформ управління фермою, ми створюємо програмне забезпечення, яке ідеально підходить для вашої операції. І оскільки ми інженери аквакультури, які кодують, ми розуміємо ваші виклики з першого дня.',
    },
    features: {
      title: isEnglish ? 'Our Services' : 'Наші послуги',
      items: [
        {
          icon: Users,
          title: isEnglish ? 'Requirements Analysis' : 'Аналіз вимог',
          description: isEnglish
            ? 'In-depth consultation to understand your workflows, pain points, and goals before writing a single line of code'
            : 'Поглиблена консультація для розуміння ваших робочих процесів, болючих точок та цілей перед написанням єдиного рядка коду',
        },
        {
          icon: Code,
          title: isEnglish ? 'Custom Development' : 'Кастомна розробка',
          description: isEnglish
            ? 'Full-stack development using modern technologies: React, React Native, Node.js, Python, cloud platforms'
            : 'Повна розробка з використанням сучасних технологій: React, React Native, Node.js, Python, хмарні платформи',
        },
        {
          icon: Smartphone,
          title: isEnglish ? 'Mobile & Web Platforms' : 'Мобільні та веб-платформи',
          description: isEnglish
            ? 'Native mobile apps (iOS/Android), progressive web apps, and responsive web applications'
            : 'Нативні мобільні додатки (iOS/Android), прогресивні веб-додатки та адаптивні веб-застосунки',
        },
        {
          icon: Puzzle,
          title: isEnglish ? 'Third-Party Integrations' : 'Інтеграції третіх сторін',
          description: isEnglish
            ? 'Connect your custom app with existing systems, sensors, databases, and third-party services via APIs'
            : 'Підключіть ваш кастомний додаток до існуючих систем, датчиків, баз даних та сервісів третіх сторін через API',
        },
        {
          icon: Users,
          title: isEnglish ? 'Training & Support' : 'Навчання та підтримка',
          description: isEnglish
            ? 'Comprehensive training for your team, documentation, and ongoing technical support'
            : 'Комплексне навчання для вашої команди, документація та постійна технічна підтримка',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Ongoing Maintenance' : 'Постійне обслуговування',
          description: isEnglish
            ? 'Bug fixes, updates, new features, and system optimization as your needs evolve'
            : 'Виправлення помилок, оновлення, нові функції та оптимізація системи в міру розвитку ваших потреб',
        },
      ],
    },
    howItWorks: {
      title: isEnglish ? 'Development Process' : 'Процес розробки',
      steps: [
        {
          icon: Users,
          number: '01',
          title: isEnglish ? 'Discovery & Planning' : 'Відкриття та планування',
          description: isEnglish
            ? 'Workshops to understand your operation, define requirements, create wireframes, and plan architecture'
            : 'Воркшопи для розуміння вашої операції, визначення вимог, створення каркасів та планування архітектури',
        },
        {
          icon: Code,
          number: '02',
          title: isEnglish ? 'Development & Testing' : 'Розробка та тестування',
          description: isEnglish
            ? 'Agile development in 2-week sprints with regular demos, testing, and feedback loops'
            : 'Agile розробка в 2-тижневих спринтах з регулярними демо, тестуванням та циклами зворотного зв\'язку',
        },
        {
          icon: Zap,
          number: '03',
          title: isEnglish ? 'Deployment & Training' : 'Розгортання та навчання',
          description: isEnglish
            ? 'Deploy to production, train your team, provide documentation, and ensure smooth adoption'
            : 'Розгортання у виробництво, навчання вашої команди, надання документації та забезпечення плавного впровадження',
        },
        {
          icon: Settings,
          number: '04',
          title: isEnglish ? 'Support & Evolution' : 'Підтримка та еволюція',
          description: isEnglish
            ? 'Ongoing support, bug fixes, and iterative improvements based on user feedback'
            : 'Постійна підтримка, виправлення помилок та ітеративні покращення на основі зворотного зв\'язку користувачів',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technology Stack' : 'Технологічний стек',
      specs: [
        {
          label: isEnglish ? 'Frontend' : 'Фронтенд',
          value: 'React, Next.js, React Native, TypeScript',
        },
        {
          label: isEnglish ? 'Backend' : 'Бекенд',
          value: 'Node.js, Python, Django, FastAPI',
        },
        {
          label: isEnglish ? 'Databases' : 'Бази даних',
          value: 'PostgreSQL, MongoDB, MySQL, Firebase',
        },
        {
          label: isEnglish ? 'Cloud Platforms' : 'Хмарні платформи',
          value: 'AWS, Azure, Google Cloud, DigitalOcean',
        },
        {
          label: isEnglish ? 'APIs & Integration' : 'API та інтеграція',
          value: 'REST, GraphQL, MQTT, Modbus, OPC-UA',
        },
        {
          label: isEnglish ? 'IoT & Hardware' : 'IoT та обладнання',
          value: isEnglish ? 'Sensor integration, PLC, SCADA, edge computing' : 'Інтеграція датчиків, ПЛК, SCADA, граничні обчислення',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Why Custom Development?' : 'Чому кастомна розробка?',
      items: [
        {
          icon: Puzzle,
          title: isEnglish ? 'Perfect Fit for Operations' : 'Ідеальне підходження для операцій',
          description: isEnglish
            ? 'Software designed around your workflows, not the other way around. No compromises.'
            : 'Програмне забезпечення розроблене навколо ваших робочих процесів, а не навпаки. Без компромісів.',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Competitive Advantage' : 'Конкурентна перевага',
          description: isEnglish
            ? 'Proprietary software that competitors can\'t copy, giving you an edge in the market'
            : 'Власне програмне забезпечення, яке конкуренти не можуть скопіювати, надаючи вам перевагу на ринку',
        },
        {
          icon: Puzzle,
          title: isEnglish ? 'Integration with Existing Systems' : 'Інтеграція з існуючими системами',
          description: isEnglish
            ? 'Seamlessly connect with your current equipment, databases, and software'
            : 'Безперешкодне підключення до вашого поточного обладнання, баз даних та програмного забезпечення',
        },
        {
          icon: Cloud,
          title: isEnglish ? 'Scalable Solutions' : 'Масштабовані рішення',
          description: isEnglish
            ? 'Software that grows with your business, from single site to multi-farm operations'
            : 'Програмне забезпечення, яке зростає з вашим бізнесом, від одного об\'єкта до багатьох ферм',
        },
      ],
    },
    useCases: {
      title: isEnglish ? 'Example Projects' : 'Приклади проектів',
      items: [
        {
          title: isEnglish ? 'Proprietary Systems' : 'Власні системи',
          description: isEnglish
            ? 'Build completely custom farm management platforms tailored to your exact workflows, species, and reporting requirements. Full ownership of the codebase means you\'re never locked into a vendor. Perfect for operations with unique processes or competitive advantages to protect.'
            : 'Будуйте повністю кастомні платформи управління фермою, адаптовані до ваших точних робочих процесів, видів та вимог звітності. Повне володіння кодовою базою означає, що ви ніколи не прив\'язані до постачальника. Ідеально для операцій з унікальними процесами або конкурентними перевагами для захисту.',
        },
        {
          title: isEnglish ? 'Specialized Workflows' : 'Спеціалізовані робочі процеси',
          description: isEnglish
            ? 'Automate complex workflows specific to your operation: genetic selection databases, broodstock management, breeding programs, quality control systems, or certification tracking. We build exactly what you need, nothing more, nothing less.'
            : 'Автоматизуйте складні робочі процеси, специфічні для вашої операції: бази даних генетичного відбору, управління маточним поголів\'ям, програми розведення, системи контролю якості або відстеження сертифікації. Ми будуємо точно те, що вам потрібно, нічого більше, нічого менше.',
        },
        {
          title: isEnglish ? 'Integration Projects' : 'Інтеграційні проекти',
          description: isEnglish
            ? 'Connect disparate systems into unified platforms: integrate IoT sensors with ERPs, link production data with accounting software, automate data flow from farm to processing to sales. Eliminate manual data entry and synchronization headaches.'
            : 'Підключіть різні системи до єдиних платформ: інтегруйте IoT датчики з ERP, пов\'яжіть дані виробництва з бухгалтерським програмним забезпеченням, автоматизуйте потік даних від ферми до переробки до продажів. Усуньте ручне введення даних та головний біль синхронізації.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Project-Based Pricing' : 'Ціноутворення на основі проекту',
      description: isEnglish
        ? 'Every project is unique. Pricing depends on complexity, timeline, and features. Contact us for a consultation and detailed quote.'
        : 'Кожен проект унікальний. Ціноутворення залежить від складності, термінів та функцій. Зв\'яжіться з нами для консультації та детального кошторису.',
      cta: isEnglish ? 'Request Consultation' : 'Запитати консультацію',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Us for Custom Development?' : 'Чому обрати нас для кастомної розробки?',
      items: [
        {
          title: isEnglish ? 'Aquaculture Engineers Who Code' : 'Інженери аквакультури, які кодують',
          description: isEnglish
            ? 'We\'re not generic software developers learning about aquaculture. We\'re aquaculture engineers who learned to code. We understand RAS, biofloc, hatcheries, water quality, species biology, and production challenges from real-world experience.'
            : 'Ми не загальні розробники програмного забезпечення, які вивчають аквакультуру. Ми інженери аквакультури, які навчилися кодувати. Ми розуміємо RAS, біофлок, інкубаторії, якість води, біологію видів та виклики виробництва з реального досвіду.',
        },
        {
          title: isEnglish ? 'Domain Expertise Advantage' : 'Перевага галузевої експертизи',
          description: isEnglish
            ? 'We ask the right questions, understand your requirements faster, and design better solutions because we\'ve built and operated aquaculture systems ourselves. Less time explaining basics means faster development and better results.'
            : 'Ми ставимо правильні питання, швидше розуміємо ваші вимоги та проектуємо кращі рішення, оскільки ми самі будували та експлуатували системи аквакультури. Менше часу на пояснення основ означає швидшу розробку та кращі результати.',
        },
        {
          title: isEnglish ? 'End-to-End Solutions' : 'Наскрізні рішення',
          description: isEnglish
            ? 'We can design your RAS system AND build the software to run it. Or retrofit existing farms with custom software. This integrated approach ensures hardware and software work together perfectly.'
            : 'Ми можемо спроектувати вашу систему RAS І створити програмне забезпечення для її роботи. Або модернізувати існуючі ферми з кастомним програмним забезпеченням. Цей інтегрований підхід гарантує, що обладнання та програмне забезпечення працюють разом ідеально.',
        },
        {
          title: isEnglish ? 'Long-Term Partnership' : 'Довгострокове партнерство',
          description: isEnglish
            ? 'We\'re committed to your success long after deployment. Ongoing support, feature additions, and optimization as your operation evolves. We build relationships, not just software.'
            : 'Ми прихильні вашому успіху довго після розгортання. Постійна підтримка, додавання функцій та оптимізація в міру розвитку вашої операції. Ми будуємо відносини, а не лише програмне забезпечення.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Have a Unique Software Challenge?' : 'Маєте унікальний програмний виклик?',
      description: isEnglish
        ? 'Let\'s discuss your custom app requirements. We\'ll help you determine if custom development is the right solution and provide a detailed proposal.'
        : 'Давайте обговоримо ваші вимоги до кастомного додатку. Ми допоможемо вам визначити, чи є кастомна розробка правильним рішенням, і надамо детальну пропозицію.',
      cta: isEnglish ? 'Discuss Your Project' : 'Обговорити ваш проект',
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
              {isEnglish ? 'Custom Apps' : 'Кастомні додатки'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Code className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Cpu className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Code className="w-10 h-10" />
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

      {/* Our Services */}
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

      {/* Development Process */}
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

      {/* Technology Stack */}
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

      {/* Example Projects */}
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
