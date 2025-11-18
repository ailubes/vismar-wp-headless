import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  Wifi,
  Smartphone,
  Bell,
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Thermometer,
  Droplets,
  Wind,
  Zap,
  Brain,
  TrendingUp,
  Settings
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'IoT Monitoring Systems | Vismar Aqua'
      : 'IoT системи моніторингу | Vismar Aqua',
    description: locale === 'en'
      ? 'Real-time water quality and equipment monitoring for aquaculture. 24/7 monitoring with instant alerts, cloud dashboards, and mobile access.'
      : 'Моніторинг якості води та обладнання в реальному часі для аквакультури. Цілодобовий моніторинг з миттєвими сповіщеннями, хмарними панелями та мобільним доступом.',
  };
}

export default async function IoTMonitoringPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'IoT Monitoring Systems' : 'IoT системи моніторингу',
      subtitle: isEnglish
        ? 'Real-time water quality and equipment monitoring for aquaculture'
        : 'Моніторинг якості води та обладнання в реальному часі для аквакультури',
      cta: isEnglish ? 'Get Started' : 'Розпочати',
    },
    intro: {
      title: isEnglish ? '24/7 Aquaculture Monitoring' : 'Цілодобовий моніторинг аквакультури',
      text1: isEnglish
        ? 'Water quality is critical in aquaculture. Small changes in dissolved oxygen, pH, temperature, or ammonia can lead to massive losses. Our IoT monitoring system provides 24/7 real-time monitoring of water parameters and equipment status, with instant alerts when values go out of range.'
        : 'Якість води є критичною в аквакультурі. Невеликі зміни розчиненого кисню, pH, температури або аміаку можуть призвести до масових втрат. Наша IoT система моніторингу забезпечує цілодобовий моніторинг параметрів води та стану обладнання в реальному часі з миттєвими сповіщеннями, коли значення виходять за межі.',
      text2: isEnglish
        ? 'Designed for harsh aquaculture environments, our sensors are waterproof, corrosion-resistant, and accurate. Cloud-based dashboards and mobile apps let you monitor your farm from anywhere.'
        : 'Розроблені для суворих умов аквакультури, наші датчики водонепроникні, корозійностійкі та точні. Хмарні панелі та мобільні додатки дозволяють відстежувати вашу ферму з будь-якого місця.',
    },
    features: {
      title: isEnglish ? 'Key Features' : 'Ключові можливості',
      items: [
        {
          icon: Activity,
          title: isEnglish ? 'Multi-Sensor Support' : 'Підтримка багатьох датчиків',
          description: isEnglish
            ? 'Monitor DO, pH, temperature, ammonia, nitrite, turbidity, salinity, and more with industry-standard sensors'
            : 'Відстежуйте DO, pH, температуру, аміак, нітрити, каламутність, солоність та більше з галузевими стандартними датчиками',
        },
        {
          icon: Bell,
          title: isEnglish ? 'Real-Time Alerts' : 'Сповіщення в реальному часі',
          description: isEnglish
            ? 'Instant SMS, email, and push notifications when parameters exceed thresholds or equipment fails'
            : 'Миттєві SMS, електронна пошта та push-сповіщення, коли параметри перевищують пороги або обладнання виходить з ладу',
        },
        {
          icon: Cloud,
          title: isEnglish ? 'Cloud Dashboard' : 'Хмарна панель',
          description: isEnglish
            ? 'Beautiful web dashboard with real-time graphs, historical trends, and customizable views'
            : 'Красива веб-панель з графіками в реальному часі, історичними трендами та налаштовуваними видами',
        },
        {
          icon: Smartphone,
          title: isEnglish ? 'Mobile App' : 'Мобільний додаток',
          description: isEnglish
            ? 'iOS and Android apps for monitoring on the go with offline data caching'
            : 'Додатки iOS та Android для моніторингу в дорозі з кешуванням даних офлайн',
        },
        {
          icon: Database,
          title: isEnglish ? 'Data Logging' : 'Логування даних',
          description: isEnglish
            ? 'Automatic data logging with export to Excel/CSV for compliance and analysis'
            : 'Автоматичне логування даних з експортом в Excel/CSV для відповідності та аналізу',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Equipment Monitoring' : 'Моніторинг обладнання',
          description: isEnglish
            ? 'Monitor pumps, blowers, feeders, and other equipment status and energy consumption'
            : 'Відстежуйте стан насосів, повітродувок, годівниць та іншого обладнання та споживання енергії',
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
            ? 'Install water quality sensors and equipment monitors at key locations throughout your facility'
            : 'Встановіть датчики якості води та монітори обладнання в ключових місцях на вашому об\'єкті',
        },
        {
          icon: Wifi,
          number: '02',
          title: isEnglish ? 'Wireless Connectivity' : 'Бездротове з\'єднання',
          description: isEnglish
            ? 'Sensors connect via WiFi, LoRaWAN, or cellular to gateway hubs for reliable data transmission'
            : 'Датчики підключаються через WiFi, LoRaWAN або стільниковий зв\'язок до шлюзових хабів для надійної передачі даних',
        },
        {
          icon: Cloud,
          number: '03',
          title: isEnglish ? 'Cloud Processing' : 'Хмарна обробка',
          description: isEnglish
            ? 'Data is processed in the cloud with real-time analytics, threshold monitoring, and alert generation'
            : 'Дані обробляються в хмарі з аналітикою в реальному часі, моніторингом порогів та генерацією сповіщень',
        },
        {
          icon: Smartphone,
          number: '04',
          title: isEnglish ? 'Dashboard & Alerts' : 'Панель та сповіщення',
          description: isEnglish
            ? 'View real-time data on web dashboard or mobile app, receive alerts via SMS/email/push'
            : 'Переглядайте дані в реальному часі на веб-панелі або мобільному додатку, отримуйте сповіщення через SMS/email/push',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technical Specifications' : 'Технічні специфікації',
      specs: [
        {
          label: isEnglish ? 'Supported Sensors' : 'Підтримувані датчики',
          value: isEnglish ? 'DO, pH, temp, ammonia, nitrite, turbidity, salinity' : 'DO, pH, темп, аміак, нітрити, каламутність, солоність',
        },
        {
          label: isEnglish ? 'Connectivity' : 'З\'єднання',
          value: isEnglish ? 'WiFi, LoRaWAN, 4G/LTE, Ethernet' : 'WiFi, LoRaWAN, 4G/LTE, Ethernet',
        },
        {
          label: isEnglish ? 'Communication Protocol' : 'Протокол зв\'язку',
          value: 'MQTT, Modbus, REST API',
        },
        {
          label: isEnglish ? 'Cloud Platform' : 'Хмарна платформа',
          value: isEnglish ? 'AWS/Azure/GCP, GDPR compliant' : 'AWS/Azure/GCP, відповідає GDPR',
        },
        {
          label: isEnglish ? 'Data Logging' : 'Логування даних',
          value: isEnglish ? 'Configurable intervals (1s to 1hr), unlimited storage' : 'Налаштовувані інтервали (1с до 1год), необмежене сховище',
        },
        {
          label: isEnglish ? 'Mobile Apps' : 'Мобільні додатки',
          value: isEnglish ? 'iOS (App Store), Android (Google Play)' : 'iOS (App Store), Android (Google Play)',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Measurable Benefits' : 'Вимірювані переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? '24/7 Monitoring' : 'Цілодобовий моніторинг',
          description: isEnglish
            ? 'Never miss a critical event with continuous monitoring and instant alerts'
            : 'Ніколи не пропускайте критичну подію з безперервним моніторингом та миттєвими сповіщеннями',
        },
        {
          icon: Bell,
          title: isEnglish ? 'Early Problem Detection' : 'Раннє виявлення проблем',
          description: isEnglish
            ? 'Detect issues before they become disasters, saving fish and money'
            : 'Виявляйте проблеми до того, як вони стануть катастрофами, економлячи рибу та гроші',
        },
        {
          icon: Thermometer,
          title: isEnglish ? 'Reduced Labor' : 'Зменшення праці',
          description: isEnglish
            ? 'Eliminate manual water testing and reduce on-site labor requirements'
            : 'Усуньте ручне тестування води та зменшіть вимоги до праці на місці',
        },
        {
          icon: Database,
          title: isEnglish ? 'Compliance Documentation' : 'Документація відповідності',
          description: isEnglish
            ? 'Automatic data logging for regulatory compliance and certification'
            : 'Автоматичне логування даних для відповідності нормам та сертифікації',
        },
      ],
    },
    predictiveAI: {
      title: isEnglish ? 'Predictive AI & Machine Learning' : 'Прогнозний ШІ та машинне навчання',
      subtitle: isEnglish
        ? 'Advanced machine learning models predict water quality events before they occur'
        : 'Розширені моделі машинного навчання передбачають події якості води до їх виникнення'
    },
    useCases: {
      title: isEnglish ? 'Use Cases' : 'Випадки використання',
      items: [
        {
          title: isEnglish ? 'RAS Monitoring' : 'Моніторинг RAS',
          description: isEnglish
            ? 'Monitor water quality in recirculating systems with real-time DO, pH, temperature, ammonia, and nitrite tracking. Get alerts before biofilters fail or oxygen crashes occur. Essential for maintaining stable RAS operations.'
            : 'Відстежуйте якість води в рециркуляційних системах з відстеженням DO, pH, температури, аміаку та нітритів в реальному часі. Отримуйте сповіщення до того, як біофільтри вийдуть з ладу або стається аварія кисню. Важливо для підтримки стабільних операцій RAS.',
        },
        {
          title: isEnglish ? 'Pond Management' : 'Управління ставками',
          description: isEnglish
            ? 'Monitor temperature, DO, pH, and turbidity in multiple ponds simultaneously. Optimize aeration schedules, detect algae blooms early, and ensure optimal growing conditions across all ponds from a single dashboard.'
            : 'Відстежуйте температуру, DO, pH та каламутність у кількох ставках одночасно. Оптимізуйте графіки аерації, виявляйте цвітіння водоростей рано та забезпечуйте оптимальні умови росту у всіх ставках з однієї панелі.',
        },
        {
          title: isEnglish ? 'Hatchery Control' : 'Контроль інкубаторію',
          description: isEnglish
            ? 'Precise temperature and DO control for eggs and larvae with 0.1°C accuracy. Monitor multiple hatchery tanks, incubators, and larval rearing systems. Get instant alerts for temperature deviations or oxygen drops to protect valuable broodstock.'
            : 'Точний контроль температури та DO для ікри та личинок з точністю 0,1°C. Відстежуйте кілька інкубаторних резервуарів, інкубаторів та систем вирощування личинок. Отримуйте миттєві сповіщення про відхилення температури або падіння кисню для захисту цінного маточного поголів\'я.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Pricing & Plans' : 'Ціни та плани',
      description: isEnglish
        ? 'Flexible pricing based on number of sensors, sites, and features. Contact us for a custom quote tailored to your operation.'
        : 'Гнучкі ціни залежно від кількості датчиків, об\'єктів та функцій. Зв\'яжіться з нами для індивідуального кошторису, адаптованого до вашої операції.',
      cta: isEnglish ? 'Contact for Pricing' : 'Зв\'язатися для ціни',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Our IoT System?' : 'Чому обрати нашу IoT систему?',
      items: [
        {
          title: isEnglish ? 'Aquaculture-Specific Design' : 'Дизайн специфічний для аквакультури',
          description: isEnglish
            ? 'Built specifically for aquaculture environments, not generic IoT platforms. Sensors and hardware designed to withstand saltwater, humidity, and harsh conditions.'
            : 'Створена спеціально для аквакультурних середовищ, а не загальних IoT платформ. Датчики та обладнання розроблені для витримування морської води, вологості та суворих умов.',
        },
        {
          title: isEnglish ? 'Reliable & Redundant' : 'Надійна та резервна',
          description: isEnglish
            ? 'Multiple connectivity options (WiFi, cellular, LoRa) with automatic failover. Local data caching ensures no data loss even during internet outages.'
            : 'Кілька варіантів підключення (WiFi, стільниковий, LoRa) з автоматичним перемиканням. Локальне кешування даних забезпечує відсутність втрати даних навіть під час збоїв інтернету.',
        },
        {
          title: isEnglish ? 'Easy Integration' : 'Легка інтеграція',
          description: isEnglish
            ? 'Works with industry-standard sensors and protocols. Easy integration with existing farm management software, PLCs, and SCADA systems via REST API.'
            : 'Працює з галузевими стандартними датчиками та протоколами. Легка інтеграція з існуючим програмним забезпеченням для управління фермою, ПЛК та SCADA системами через REST API.',
        },
        {
          title: isEnglish ? 'Scalable Solution' : 'Масштабоване рішення',
          description: isEnglish
            ? 'Start with a few sensors and scale to hundreds. Single dashboard for multi-site operations. Cloud infrastructure automatically scales with your growth.'
            : 'Почніть з кількох датчиків і масштабуйте до сотень. Єдина панель для багатофункціональних операцій. Хмарна інфраструктура автоматично масштабується з вашим ростом.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Ready to Monitor Your Farm 24/7?' : 'Готові відстежувати свою ферму цілодобово?',
      description: isEnglish
        ? 'Get started with IoT monitoring today. Contact us for a consultation and custom quote for your operation.'
        : 'Почніть з IoT моніторингу сьогодні. Зв\'яжіться з нами для консультації та індивідуального кошторису для вашої операції.',
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
              {isEnglish ? 'IoT Monitoring' : 'IoT моніторинг'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Activity className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Wifi className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-10 h-10" />
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

      {/* Predictive AI & Machine Learning */}
      <section className="section bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.predictiveAI.title}</h2>
            <p className="text-lg text-neutral-600">{content.predictiveAI.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 bg-white">
              <Brain className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Algal Bloom Prediction' : 'Прогнозування цвітіння водоростей'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Machine learning models predict algal blooms 24-48 hours in advance based on temperature, nutrients, and light patterns'
                  : 'Моделі машинного навчання передбачають цвітіння водоростей за 24-48 годин на основі температури, поживних речовин та світлових моделей'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Droplets className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Oxygen Crash Forecasting' : 'Прогнозування падіння кисню'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Predict dangerous oxygen declines during feeding, high biomass periods, or temperature fluctuations'
                  : 'Прогнозуйте небезпечні падіння кисню під час годівлі, періодів високої біомаси або коливань температури'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Ammonia Spike Detection' : 'Виявлення сплесків аміаку'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Early identification of ammonia accumulation before it reaches dangerous levels'
                  : 'Раннє виявлення накопичення аміаку до того, як він досягне небезпечних рівнів'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <TrendingUp className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Pattern Recognition' : 'Розпізнавання моделей'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'AI learns your farm\'s unique patterns and detects anomalies automatically'
                  : 'ШІ вивчає унікальні моделі вашої ферми та автоматично виявляє аномалії'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Settings className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Smart Thresholds' : 'Розумні пороги'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Dynamic alert thresholds that adjust based on time of day, feeding schedules, and historical patterns'
                  : 'Динамічні пороги сповіщень, які налаштовуються на основі часу доби, графіків годівлі та історичних моделей'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Activity className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Predictive Maintenance' : 'Прогнозне обслуговування'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Forecast equipment failures and maintenance needs before breakdowns occur'
                  : 'Прогнозуйте вих з ладу обладнання та потреби в обслуговуванні до виникнення поломок'}
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
