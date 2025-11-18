import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Camera,
  BarChart3,
  Clock,
  TrendingUp,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Eye,
  Zap,
  Database,
  AlertCircle,
  Activity,
  Heart,
  AlertTriangle,
  Waves,
  Shield,
  Microscope,
  Bug,
  Gauge,
  Bell,
  Egg,
  Baby,
  Fish
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'AI Fish Counting System | Vismar Aqua'
      : 'AI система підрахунку риби | Vismar Aqua',
    description: locale === 'en'
      ? 'AI-powered fish counting using computer vision. Accurate biomass estimation with 95%+ accuracy, 10x faster than manual counting.'
      : 'AI-підрахунок риби з використанням комп\'ютерного зору. Точна оцінка біомаси з точністю 95%+, в 10 разів швидше ручного підрахунку.',
  };
}

export default async function AICountingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'AI-Powered Fish Counting' : 'AI-підрахунок риби',
      subtitle: isEnglish
        ? 'Accurate, automated biomass estimation using computer vision'
        : 'Точна, автоматизована оцінка біомаси з використанням комп\'ютерного зору',
      cta: isEnglish ? 'Request Demo' : 'Запитати демо',
    },
    intro: {
      title: isEnglish ? 'Transform Fish Counting with AI' : 'Трансформуйте підрахунок риби за допомогою AI',
      text1: isEnglish
        ? 'Manual fish counting is time-consuming, stressful for fish, and prone to errors. Our AI-powered fish counting system uses advanced computer vision and deep learning to automatically count fish, estimate biomass, and analyze size distribution with 95%+ accuracy.'
        : 'Ручний підрахунок риби забирає багато часу, стресовий для риби та схильний до помилок. Наша AI-система підрахунку риби використовує передовий комп\'ютерний зір і глибоке навчання для автоматичного підрахунку риби, оцінки біомаси та аналізу розподілу розмірів з точністю 95%+.',
      text2: isEnglish
        ? 'Designed specifically for aquaculture operations, our system works in real-world conditions including turbid water, varying lighting, and high-density populations. Get instant insights without disturbing your fish.'
        : 'Розроблена спеціально для аквакультурних операцій, наша система працює в реальних умовах, включаючи каламутну воду, різне освітлення та популяції високої щільності. Отримуйте миттєві дані без турбування риби.',
    },
    features: {
      title: isEnglish ? 'Key Features' : 'Ключові можливості',
      items: [
        {
          icon: Brain,
          title: isEnglish ? 'Computer Vision Counting' : 'Підрахунок комп\'ютерним зором',
          description: isEnglish
            ? 'Advanced AI algorithms trained on aquaculture data for accurate fish detection and counting'
            : 'Передові AI алгоритми, навчені на даних аквакультури для точного виявлення та підрахунку риби',
        },
        {
          icon: BarChart3,
          title: isEnglish ? 'Size Distribution Analysis' : 'Аналіз розподілу розмірів',
          description: isEnglish
            ? 'Automatic size grading and histogram generation to track growth uniformity'
            : 'Автоматична градація розмірів та генерація гістограм для відстеження однорідності росту',
        },
        {
          icon: Clock,
          title: isEnglish ? 'Real-Time Monitoring' : 'Моніторинг в реальному часі',
          description: isEnglish
            ? 'Continuous counting and biomass estimation throughout the day with instant alerts'
            : 'Безперервний підрахунок та оцінка біомаси протягом дня з миттєвими сповіщеннями',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Historical Tracking' : 'Історичне відстеження',
          description: isEnglish
            ? 'Track population trends, growth rates, and mortality over time with detailed reports'
            : 'Відстежуйте тенденції популяції, темпи росту та смертність з часом за допомогою детальних звітів',
        },
        {
          icon: Smartphone,
          title: isEnglish ? 'Mobile App Access' : 'Доступ через мобільний додаток',
          description: isEnglish
            ? 'View counts, reports, and alerts anywhere on iOS and Android devices'
            : 'Переглядайте підрахунки, звіти та сповіщення будь-де на пристроях iOS та Android',
        },
        {
          icon: Database,
          title: isEnglish ? 'Export & Integration' : 'Експорт та інтеграція',
          description: isEnglish
            ? 'Export data to Excel/CSV and integrate with farm management systems'
            : 'Експортуйте дані в Excel/CSV та інтегруйте з системами управління фермою',
        },
      ],
    },
    howItWorks: {
      title: isEnglish ? 'How It Works' : 'Як це працює',
      steps: [
        {
          icon: Camera,
          number: '01',
          title: isEnglish ? 'Camera Installation' : 'Встановлення камери',
          description: isEnglish
            ? 'Install waterproof cameras at strategic locations (tanks, transfer points, grading stations)'
            : 'Встановіть водонепроникні камери в стратегічних місцях (резервуари, точки перенесення, станції градації)',
        },
        {
          icon: Brain,
          number: '02',
          title: isEnglish ? 'AI Processing' : 'AI обробка',
          description: isEnglish
            ? 'AI analyzes video feed in real-time, detecting and counting individual fish with size estimation'
            : 'AI аналізує відеопотік в реальному часі, виявляючи та підраховуючи окрему рибу з оцінкою розміру',
        },
        {
          icon: BarChart3,
          number: '03',
          title: isEnglish ? 'Data Analysis' : 'Аналіз даних',
          description: isEnglish
            ? 'System generates counts, biomass estimates, size distributions, and growth trends'
            : 'Система генерує підрахунки, оцінки біомаси, розподіл розмірів та тенденції росту',
        },
        {
          icon: Smartphone,
          number: '04',
          title: isEnglish ? 'Dashboard & Alerts' : 'Панель управління та сповіщення',
          description: isEnglish
            ? 'View results on web dashboard or mobile app, receive alerts for anomalies'
            : 'Переглядайте результати на веб-панелі або мобільному додатку, отримуйте сповіщення про аномалії',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technical Specifications' : 'Технічні специфікації',
      specs: [
        {
          label: isEnglish ? 'Accuracy' : 'Точність',
          value: isEnglish ? '95%+ in typical conditions' : '95%+ в типових умовах',
        },
        {
          label: isEnglish ? 'Speed' : 'Швидкість',
          value: isEnglish ? '10x faster than manual counting' : '10x швидше ручного підрахунку',
        },
        {
          label: isEnglish ? 'Technology Stack' : 'Технологічний стек',
          value: isEnglish ? 'Python, TensorFlow, OpenCV, PyTorch' : 'Python, TensorFlow, OpenCV, PyTorch',
        },
        {
          label: isEnglish ? 'Deployment' : 'Розгортання',
          value: isEnglish ? 'Cloud or edge (on-premise) processing' : 'Хмарна або локальна обробка',
        },
        {
          label: isEnglish ? 'Camera Support' : 'Підтримка камер',
          value: isEnglish ? 'IP cameras, USB cameras, RTSP streams' : 'IP-камери, USB-камери, RTSP потоки',
        },
        {
          label: isEnglish ? 'Integration' : 'Інтеграція',
          value: isEnglish ? 'REST API, webhooks, database export' : 'REST API, вебхуки, експорт до БД',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Measurable Benefits' : 'Вимірювані переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? '95%+ Accuracy' : '95%+ точність',
          description: isEnglish
            ? 'More accurate than manual counting, especially for large populations'
            : 'Точніше ручного підрахунку, особливо для великих популяцій',
        },
        {
          icon: Clock,
          title: isEnglish ? '10x Faster' : '10x швидше',
          description: isEnglish
            ? 'Count thousands of fish in minutes instead of hours'
            : 'Підрахуйте тисячі риб за хвилини замість годин',
        },
        {
          icon: Eye,
          title: isEnglish ? 'Reduce Fish Stress' : 'Зменшення стресу риби',
          description: isEnglish
            ? 'Non-invasive counting eliminates handling stress and mortality'
            : 'Неінвазивний підрахунок усуває стрес від обробки та смертність',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Data-Driven Decisions' : 'Рішення на основі даних',
          description: isEnglish
            ? 'Make informed decisions on feeding, harvesting, and stocking'
            : 'Приймайте обґрунтовані рішення щодо годівлі, вилову та зариблення',
        },
      ],
    },
    behavioralMonitoring: {
      title: isEnglish ? 'Behavioral Monitoring Beyond Counting' : 'Моніторинг поведінки понад підрахунок',
      subtitle: isEnglish
        ? 'Advanced AI analysis of fish behavior for health, welfare, and production optimization'
        : 'Розширений аналіз поведінки риби за допомогою ШІ для здоров\'я, добробуту та оптимізації виробництва'
    },
    diseaseDetection: {
      title: isEnglish ? 'Early Disease Detection' : 'Раннє виявлення хвороб',
      subtitle: isEnglish
        ? 'AI-powered health monitoring through behavioral biomarkers'
        : 'Моніторинг здоров\'я на основі ШІ через поведінкові біомаркери'
    },
    hatcheryCapabilities: {
      title: isEnglish ? 'Advanced Hatchery Capabilities' : 'Розширені можливості для інкубаторів',
      subtitle: isEnglish
        ? 'Specialized AI tools for breeding and hatchery operations'
        : 'Спеціалізовані інструменти ШІ для розведення та інкубаційних операцій'
    },
    useCases: {
      title: isEnglish ? 'Use Cases' : 'Випадки використання',
      items: [
        {
          title: isEnglish ? 'RAS Tank Monitoring' : 'Моніторинг резервуарів RAS',
          description: isEnglish
            ? 'Continuous population monitoring in recirculating systems without draining tanks or netting fish. Track biomass in real-time to optimize feeding and prevent overloading biofilters.'
            : 'Безперервний моніторинг популяції в рециркуляційних системах без зливу резервуарів або вилову риби. Відстежуйте біомасу в реальному часі для оптимізації годівлі та запобігання перевантаження біофільтрів.',
        },
        {
          title: isEnglish ? 'Harvest Planning' : 'Планування вилову',
          description: isEnglish
            ? 'Accurate pre-harvest counts and size grading to plan logistics, processing capacity, and market allocation. Reduce harvest errors and improve operational efficiency.'
            : 'Точні підрахунки перед виловом та градація розмірів для планування логістики, потужності переробки та розподілу на ринку. Зменшіть помилки вилову та покращте операційну ефективність.',
        },
        {
          title: isEnglish ? 'Growth Tracking' : 'Відстеження росту',
          description: isEnglish
            ? 'Monitor growth rates and size distribution over time to evaluate feed performance, identify health issues early, and optimize production cycles for maximum profitability.'
            : 'Відстежуйте темпи росту та розподіл розмірів з часом для оцінки ефективності корму, раннього виявлення проблем зі здоров\'ям та оптимізації виробничих циклів для максимальної прибутковості.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Pricing & Plans' : 'Ціни та плани',
      description: isEnglish
        ? 'Custom pricing based on your operation size, number of cameras, and deployment model. Contact us for a tailored quote.'
        : 'Індивідуальні ціни залежно від розміру вашої операції, кількості камер та моделі розгортання. Зв\'яжіться з нами для індивідуального коштор ису.',
      cta: isEnglish ? 'Contact for Pricing' : 'Зв\'язатися для ціни',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Our AI Counting System?' : 'Чому обрати нашу AI систему підрахунку?',
      items: [
        {
          title: isEnglish ? 'Aquaculture-Specific AI' : 'AI специфічний для аквакультури',
          description: isEnglish
            ? 'Trained on real aquaculture data, not generic object detection models. Works in turbid water, varying lighting, and high-density conditions.'
            : 'Навчений на реальних даних аквакультури, а не загальних моделях виявлення об\'єктів. Працює в каламутній воді, при різному освітленні та в умовах високої щільності.',
        },
        {
          title: isEnglish ? 'Proven in Production' : 'Перевірено у виробництві',
          description: isEnglish
            ? 'Deployed in commercial farms across multiple species (shrimp, tilapia, salmon) with verified accuracy and reliability.'
            : 'Розгорнуто на комерційних фермах для різних видів (креветки, тиляпія, лосось) з перевіреною точністю та надійністю.',
        },
        {
          title: isEnglish ? 'Flexible Deployment' : 'Гнучке розгортання',
          description: isEnglish
            ? 'Cloud-based for ease of use, or edge processing for locations with limited internet connectivity. Your choice.'
            : 'Хмарна версія для зручності використання або локальна обробка для місць з обмеженим інтернет-з\'єднанням. Ваш вибір.',
        },
        {
          title: isEnglish ? 'Ongoing Improvement' : 'Постійне вдосконалення',
          description: isEnglish
            ? 'AI models continuously improve with more data. We update the system regularly with the latest algorithms and features.'
            : 'AI моделі постійно покращуються з більшою кількістю даних. Ми регулярно оновлюємо систему з найновішими алгоритмами та функціями.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Ready to Automate Fish Counting?' : 'Готові автоматизувати підрахунок риби?',
      description: isEnglish
        ? 'Request a demo to see our AI counting system in action. We\'ll show you how it works with your specific operation.'
        : 'Запитайте демо, щоб побачити нашу AI систему підрахунку в дії. Ми покажемо вам, як вона працює з вашою конкретною операцією.',
      cta: isEnglish ? 'Request Demo' : 'Запитати демо',
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
              {isEnglish ? 'AI Fish Counting' : 'AI підрахунок риби'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Brain className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Camera className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Brain className="w-10 h-10" />
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

      {/* Behavioral Monitoring Beyond Counting */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.behavioralMonitoring.title}</h2>
            <p className="text-lg text-neutral-600">{content.behavioralMonitoring.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 bg-white">
              <Activity className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Stress Detection' : 'Виявлення стресу'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Identify abnormal swimming patterns, lethargy, and signs of environmental stress before they impact health'
                  : 'Виявляйте аномальні моделі плавання, летаргію та ознаки екологічного стресу до того, як вони вплинуть на здоров\'я'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Heart className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Reproductive Behavior' : 'Репродуктивна поведінка'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Detect spawning readiness, courtship behaviors, and mating events for optimal breeding management'
                  : 'Виявляйте готовність до нересту, поведінку під час залицяння та події парування для оптимального управління розведенням'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Aggression Detection' : 'Виявлення агресії'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Monitor cannibalism, fighting, and aggressive behaviors to prevent mortality and optimize stocking density'
                  : 'Відстежуйте канібалізм, боротьбу та агресивну поведінку для запобігання смертності та оптимізації щільності зариблення'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <TrendingUp className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Activity Assessment' : 'Оцінка активності'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Track daily activity patterns and energy levels for welfare scoring and health monitoring'
                  : 'Відстежуйте щоденні моделі активності та рівні енергії для оцінки добробуту та моніторингу здоров\'я'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Waves className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Swimming Patterns' : 'Моделі плавання'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Analyze normal vs abnormal swimming behaviors for early problem detection'
                  : 'Аналізуйте нормальну та аномальну поведінку плавання для раннього виявлення проблем'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Shield className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Welfare Scoring' : 'Оцінка добробуту'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Automated welfare assessment based on behavioral biomarkers and activity levels'
                  : 'Автоматизована оцінка добробуту на основі поведінкових біомаркерів та рівнів активності'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Disease Detection */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.diseaseDetection.title}</h2>
            <p className="text-lg text-neutral-600">{content.diseaseDetection.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 bg-gradient-to-br from-white to-neutral-50">
              <Microscope className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Viral & Bacterial Infections' : 'Вірусні та бактеріальні інфекції'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Early detection of disease through behavioral biomarkers - erratic swimming, surface gulping, flashing behaviors'
                  : 'Раннє виявлення хвороб через поведінкові біомаркери - хаотичне плавання, ковтання з поверхні, блискучу поведінку'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'White Spot Disease indicators' : 'Індикатори білоплямистої хвороби'}</li>
                <li>• {isEnglish ? 'Bacterial gill disease symptoms' : 'Симптоми бактеріальної хвороби зябр'}</li>
                <li>• {isEnglish ? 'Viral infection behavioral changes' : 'Поведінкові зміни при вірусних інфекціях'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-gradient-to-br from-white to-neutral-50">
              <Bug className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Parasite Detection' : 'Виявлення паразитів'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Identify stress and behavioral changes associated with external and internal parasites'
                  : 'Виявляйте стрес та поведінкові зміни, пов\'язані з зовнішніми та внутрішніми паразитами'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Flashing and rubbing behaviors' : 'Блискуча поведінка та тертя'}</li>
                <li>• {isEnglish ? 'Loss of appetite patterns' : 'Моделі втрати апетиту'}</li>
                <li>• {isEnglish ? 'Abnormal swimming near surface' : 'Аномальне плавання біля поверхні'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-gradient-to-br from-white to-neutral-50">
              <Gauge className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Health Monitoring' : 'Моніторинг здоров\'я'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Continuous health assessment through AI-powered video analysis'
                  : 'Безперервна оцінка здоров\'я через аналіз відео на основі ШІ'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Daily health scoring' : 'Щоденна оцінка здоров\'я'}</li>
                <li>• {isEnglish ? 'Trend analysis over time' : 'Аналіз трендів з часом'}</li>
                <li>• {isEnglish ? 'Predictive health alerts' : 'Прогнозні сповіщення про здоров\'я'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-gradient-to-br from-white to-neutral-50">
              <Bell className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Early Warning System' : 'Система раннього попередження'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Get alerts before clinical signs appear, allowing preventive action'
                  : 'Отримуйте сповіщення до появи клінічних ознак, що дозволяє профілактичні дії'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? '24-48 hour advance warning' : 'Попередження за 24-48 годин'}</li>
                <li>• {isEnglish ? 'SMS/email notifications' : 'SMS/email сповіщення'}</li>
                <li>• {isEnglish ? 'Integration with management systems' : 'Інтеграція з системами управління'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Hatchery Capabilities */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.hatcheryCapabilities.title}</h2>
            <p className="text-lg text-neutral-600">{content.hatcheryCapabilities.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-white">
              <Egg className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Spawning Detection' : 'Виявлення нересту'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Automatically identify spawning events and reproductive behaviors in broodstock tanks'
                  : 'Автоматично визначайте події нересту та репродуктивну поведінку в резервуарах маточного поголів\'я'}
              </p>
            </div>
            <div className="card p-8 bg-white">
              <Fish className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Broodstock Monitoring' : 'Моніторинг маточного поголів\'я'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Track broodstock health, activity, and readiness for optimal breeding management'
                  : 'Відстежуйте здоров\'я, активність та готовність маточного поголів\'я для оптимального управління розведенням'}
              </p>
            </div>
            <div className="card p-8 bg-white">
              <Baby className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Larvae Quality Assessment' : 'Оцінка якості личинок'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Automated quality scoring of larvae and postlarvae based on movement patterns and behavior'
                  : 'Автоматизована оцінка якості личинок та постличинок на основі моделей руху та поведінки'}
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
