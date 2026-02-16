import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  LineChart,
  Target,
  Brain,
  CheckCircle,
  ArrowRight,
  FileBarChart,
  Zap,
  DollarSign,
  Activity,
  Eye,
  Microscope,
  Utensils,
  Calendar,
  Video,
  Camera,
  Clock,
  Shield
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Data Analytics & Insights | Vismar Aqua'
      : 'Аналітика даних та інсайти | Vismar Aqua',
    description: locale === 'en'
      ? 'Transform your aquaculture data into actionable insights. Production analytics, trend analysis, predictive modeling, custom dashboards, and KPI tracking.'
      : 'Трансформуйте ваші дані аквакультури в дієві інсайти. Аналітика виробництва, аналіз трендів, прогнозне моделювання, кастомні панелі та відстеження KPI.',
  };
}

export default async function AnalyticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'Data Analytics & Insights' : 'Аналітика даних та інсайти',
      subtitle: isEnglish
        ? 'Transform your aquaculture data into actionable insights'
        : 'Трансформуйте ваші дані аквакультури в дієві інсайти',
      cta: isEnglish ? 'Get Started' : 'Розпочати',
    },
    intro: {
      title: isEnglish ? 'Data-Driven Aquaculture' : 'Аквакультура на основі даних',
      text1: isEnglish
        ? 'Modern aquaculture operations generate massive amounts of data: water quality, feeding, growth, mortality, costs, and more. But raw data alone doesn\'t drive better decisions. You need analytics that transform numbers into insights, trends into predictions, and information into competitive advantage.'
        : 'Сучасні операції аквакультури генерують величезну кількість даних: якість води, годівля, ріст, смертність, витрати та більше. Але самі дані не призводять до кращих рішень. Вам потрібна аналітика, яка трансформує цифри в інсайти, тренди в прогнози та інформацію в конкурентну перевагу.',
      text2: isEnglish
        ? 'Our analytics platform turns your farm data into actionable intelligence. Identify optimization opportunities, predict issues before they occur, benchmark performance, and make data-driven decisions that improve profitability.'
        : 'Наша платформа аналітики перетворює дані вашої ферми в дієвий інтелект. Виявляйте можливості оптимізації, передбачайте проблеми до їх виникнення, порівнюйте продуктивність та приймайте рішення на основі даних, які покращують прибутковість.',
    },
    features: {
      title: isEnglish ? 'Key Features' : 'Ключові можливості',
      items: [
        {
          icon: BarChart3,
          title: isEnglish ? 'Production Analytics' : 'Аналітика виробництва',
          description: isEnglish
            ? 'Analyze growth rates, FCR, survival, biomass, and other production KPIs across batches, ponds, and time periods'
            : 'Аналізуйте темпи росту, FCR, виживання, біомасу та інші KPI виробництва за партіями, ставками та періодами часу',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Trend Analysis' : 'Аналіз трендів',
          description: isEnglish
            ? 'Identify patterns in water quality, feeding efficiency, growth rates, and operational performance over time'
            : 'Виявляйте закономірності в якості води, ефективності годівлі, темпах росту та операційній продуктивності з часом',
        },
        {
          icon: Brain,
          title: isEnglish ? 'Predictive Modeling' : 'Прогнозне моделювання',
          description: isEnglish
            ? 'Machine learning models to predict harvest weight, optimal harvest timing, disease risk, and production outcomes'
            : 'Моделі машинного навчання для прогнозування ваги вилову, оптимального часу вилову, ризику захворювань та результатів виробництва',
        },
        {
          icon: PieChart,
          title: isEnglish ? 'Custom Dashboards' : 'Кастомні панелі',
          description: isEnglish
            ? 'Build personalized dashboards with the metrics that matter to you: production, costs, water quality, inventory'
            : 'Будуйте персоналізовані панелі з метриками, які важливі для вас: виробництво, витрати, якість води, інвентар',
        },
        {
          icon: FileBarChart,
          title: isEnglish ? 'Automated Reports' : 'Автоматизовані звіти',
          description: isEnglish
            ? 'Schedule daily, weekly, or monthly reports automatically delivered to your team via email/PDF'
            : 'Плануйте щоденні, тижневі або щомісячні звіти, автоматично доставлені вашій команді через email/PDF',
        },
        {
          icon: Target,
          title: isEnglish ? 'KPI Tracking' : 'Відстеження KPI',
          description: isEnglish
            ? 'Set targets and track key performance indicators with visual progress indicators and alerts'
            : 'Встановлюйте цілі та відстежуйте ключові показники продуктивності з візуальними індикаторами прогресу та сповіщеннями',
        },
      ],
    },
    howItWorks: {
      title: isEnglish ? 'How It Works' : 'Як це працює',
      steps: [
        {
          icon: Activity,
          number: '01',
          title: isEnglish ? 'Data Integration' : 'Інтеграція даних',
          description: isEnglish
            ? 'Connect your data sources: farm management software, IoT sensors, spreadsheets, or manual entry'
            : 'Підключіть ваші джерела даних: програмне забезпечення управління фермою, IoT датчики, електронні таблиці або ручне введення',
        },
        {
          icon: Brain,
          number: '02',
          title: isEnglish ? 'AI Processing' : 'AI обробка',
          description: isEnglish
            ? 'Machine learning algorithms analyze patterns, detect anomalies, and generate predictive models'
            : 'Алгоритми машинного навчання аналізують закономірності, виявляють аномалії та генерують прогнозні моделі',
        },
        {
          icon: PieChart,
          number: '03',
          title: isEnglish ? 'Visualization & Insights' : 'Візуалізація та інсайти',
          description: isEnglish
            ? 'Data visualized in interactive dashboards with actionable insights and recommendations'
            : 'Дані візуалізовані в інтерактивних панелях з дієвими інсайтами та рекомендаціями',
        },
        {
          icon: Zap,
          number: '04',
          title: isEnglish ? 'Action & Optimization' : 'Дія та оптимізація',
          description: isEnglish
            ? 'Use insights to optimize operations, improve efficiency, and increase profitability'
            : 'Використовуйте інсайти для оптимізації операцій, покращення ефективності та збільшення прибутковості',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technical Specifications' : 'Технічні специфікації',
      specs: [
        {
          label: isEnglish ? 'Technology Stack' : 'Технологічний стек',
          value: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow',
        },
        {
          label: isEnglish ? 'BI Tools' : 'Інструменти BI',
          value: 'Tableau, Power BI, Metabase, custom dashboards',
        },
        {
          label: isEnglish ? 'Machine Learning' : 'Машинне навчання',
          value: isEnglish ? 'Regression, time series, classification, clustering' : 'Регресія, часові ряди, класифікація, кластеризація',
        },
        {
          label: isEnglish ? 'Data Visualization' : 'Візуалізація даних',
          value: 'Plotly, D3.js, Chart.js, interactive dashboards',
        },
        {
          label: isEnglish ? 'Data Sources' : 'Джерела даних',
          value: isEnglish ? 'Databases, IoT, APIs, Excel/CSV, manual entry' : 'Бази даних, IoT, API, Excel/CSV, ручне введення',
        },
        {
          label: isEnglish ? 'Deployment' : 'Розгортання',
          value: isEnglish ? 'Cloud-based or on-premise analytics servers' : 'Хмарні або локальні сервери аналітики',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Measurable Benefits' : 'Вимірювані переваги',
      items: [
        {
          icon: Target,
          title: isEnglish ? 'Data-Driven Decisions' : 'Рішення на основі даних',
          description: isEnglish
            ? 'Replace guesswork with evidence-based decisions backed by data and predictive models'
            : 'Замініть здогадки рішеннями на основі доказів, підкріплених даними та прогнозними моделями',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Identify Optimization Opportunities' : 'Виявлення можливостей оптимізації',
          description: isEnglish
            ? 'Discover inefficiencies, cost savings, and performance improvements hidden in your data'
            : 'Виявляйте неефективності, економію витрат та покращення продуктивності, приховані у ваших даних',
        },
        {
          icon: Brain,
          title: isEnglish ? 'Predict Issues' : 'Передбачення проблем',
          description: isEnglish
            ? 'Predictive models warn you of potential problems before they impact production'
            : 'Прогнозні моделі попереджують вас про потенційні проблеми до того, як вони вплинуть на виробництво',
        },
        {
          icon: DollarSign,
          title: isEnglish ? 'Improve Profitability' : 'Покращення прибутковості',
          description: isEnglish
            ? 'Optimize costs, reduce waste, improve FCR, and increase survival through data insights'
            : 'Оптимізуйте витрати, зменшуйте відходи, покращуйте FCR та збільшуйте виживання через інсайти даних',
        },
      ],
    },
    aquacultureAI: {
      title: isEnglish ? 'Aquaculture-Specific AI Models' : 'AI моделі специфічні для аквакультури',
      subtitle: isEnglish
        ? 'Purpose-built machine learning models trained on aquaculture data for production optimization'
        : 'Спеціально створені моделі машинного навчання, навчені на даних аквакультури для оптимізації виробництва'
    },
    useCases: {
      title: isEnglish ? 'Use Cases' : 'Випадки використання',
      items: [
        {
          title: isEnglish ? 'Performance Optimization' : 'Оптимізація продуктивності',
          description: isEnglish
            ? 'Analyze which batches, ponds, or farms perform best and why. Identify factors that drive superior FCR, growth rates, and survival. Replicate successful practices across your operation to improve overall performance and reduce variability.'
            : 'Аналізуйте, які партії, ставки або ферми працюють найкраще і чому. Виявляйте фактори, які забезпечують кращий FCR, темпи росту та виживання. Реплікуйте успішні практики по всій вашій операції для покращення загальної продуктивності та зменшення варіабельності.',
        },
        {
          title: isEnglish ? 'Cost Analysis' : 'Аналіз витрат',
          description: isEnglish
            ? 'Track costs by category (feed, labor, energy, chemicals) and identify where money is being spent inefficiently. Compare cost per kilogram produced across batches and facilities. Find opportunities to reduce operational costs without sacrificing quality or growth.'
            : 'Відстежуйте витрати за категоріями (корм, праця, енергія, хімікати) та виявляйте, де гроші витрачаються неефективно. Порівнюйте витрати на кілограм виробленого за партіями та об\'єктами. Знаходьте можливості зменшити операційні витрати без жертвування якістю або ростом.',
        },
        {
          title: isEnglish ? 'Yield Prediction' : 'Прогнозування врожайності',
          description: isEnglish
            ? 'Predict harvest weight and timing with machine learning models based on current growth rates, water quality, and feeding data. Plan processing, logistics, and sales more accurately. Reduce uncertainty and improve operational planning with reliable yield forecasts.'
            : 'Прогнозуйте вагу та час вилову з моделями машинного навчання на основі поточних темпів росту, якості води та даних годівлі. Плануйте переробку, логістику та продажі більш точно. Зменшуйте невизначеність та покращуйте операційне планування з надійними прогнозами врожайності.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Pricing & Plans' : 'Ціни та плани',
      description: isEnglish
        ? 'Pricing based on data volume, complexity, and features required. Contact us for a consultation and custom quote.'
        : 'Ціноутворення на основі обсягу даних, складності та необхідних функцій. Зв\'яжіться з нами для консультації та індивідуального кошторису.',
      cta: isEnglish ? 'Contact for Pricing' : 'Зв\'язатися для ціни',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Our Analytics Platform?' : 'Чому обрати нашу платформу аналітики?',
      items: [
        {
          title: isEnglish ? 'Aquaculture-Specific Analytics' : 'Аналітика специфічна для аквакультури',
          description: isEnglish
            ? 'Not generic BI tools repurposed for aquaculture. Our analytics are designed specifically for production metrics, species biology, water quality parameters, and aquaculture economics. Pre-built models and dashboards for common aquaculture use cases.'
            : 'Не загальні інструменти BI, перепризначені для аквакультури. Наша аналітика розроблена спеціально для метрик виробництва, біології видів, параметрів якості води та економіки аквакультури. Попередньо створені моделі та панелі для поширених випадків використання аквакультури.',
        },
        {
          title: isEnglish ? 'Domain Expertise' : 'Галузева експертиза',
          description: isEnglish
            ? 'Developed by aquaculture engineers and data scientists who understand the biology, chemistry, and economics of fish farming. We know which metrics matter and how to interpret them in the context of production systems.'
            : 'Розроблено інженерами аквакультури та вченими даних, які розуміють біологію, хімію та економіку рибництва. Ми знаємо, які метрики важливі та як їх інтерпретувати в контексті виробничих систем.',
        },
        {
          title: isEnglish ? 'Actionable Insights' : 'Дієві інсайти',
          description: isEnglish
            ? 'Not just pretty charts. Our analytics provide specific recommendations: when to harvest, how to adjust feeding, where to optimize costs. Insights designed to drive action, not just inform.'
            : 'Не лише красиві діаграми. Наша аналітика надає конкретні рекомендації: коли виловлювати, як налаштувати годівлю, де оптимізувати витрати. Інсайти розроблені для стимулювання дій, а не лише інформування.',
        },
        {
          title: isEnglish ? 'Continuous Improvement' : 'Постійне вдосконалення',
          description: isEnglish
            ? 'Machine learning models improve over time as more data is collected. The more you use the system, the better and more accurate the predictions and insights become. Your analytics get smarter with every production cycle.'
            : 'Моделі машинного навчання покращуються з часом, коли збирається більше даних. Чим більше ви використовуєте систему, тим кращими та точнішими стають прогнози та інсайти. Ваша аналітика стає розумнішою з кожним виробничим циклом.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Ready to Unlock Your Data\'s Potential?' : 'Готові розкрити потенціал ваших даних?',
      description: isEnglish
        ? 'Contact us for a consultation on data analytics for your aquaculture operation. We\'ll show you what insights are hiding in your data.'
        : 'Зв\'яжіться з нами для консультації щодо аналітики даних для вашої аквакультурної операції. Ми покажемо вам, які інсайти приховані у ваших даних.',
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
              {isEnglish ? 'Data Analytics' : 'Аналітика даних'}
            </span>
          </div>
        </div>
      </nav>

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
            <Brain className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Camera className="w-16 h-16 text-purple-400" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <BarChart3 className="w-10 h-10 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Zap className="w-14 h-14 text-[#42c997]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{isEnglish ? 'Home' : 'Головна'}</Link>
              <span>/</span>
              <Link href={`/${locale}/software`} className="hover:text-white transition-colors">{isEnglish ? 'Software' : 'Програми'}</Link>
              <span>/</span>
              <span className="text-white">{content.hero.title}</span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {content.hero.title}
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {content.hero.subtitle}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {content.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/software`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'View All Solutions' : 'Всі рішення'}
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
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">95%</div>
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? 'Accuracy' : 'Точність'}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">50%</div>
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? 'Time Saved' : 'Економія часу'}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">24/7</div>
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? 'Monitoring' : 'Моніторинг'}</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">30%</div>
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? 'ROI Increase' : 'Зростання ROI'}</div>
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

      {/* Aquaculture-Specific AI Models */}
      <section className="section bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.aquacultureAI.title}</h2>
            <p className="text-lg text-neutral-600">{content.aquacultureAI.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 bg-white">
              <Eye className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Behavioral Analysis Models' : 'Моделі аналізу поведінки'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'AI models trained on aquaculture-specific behaviors for health monitoring and welfare assessment'
                  : 'AI моделі, навчені на поведінках специфічних для аквакультури, для моніторингу здоров\'я та оцінки добробуту'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Activity className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Growth Prediction' : 'Прогнозування росту'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Machine learning models forecasting growth rates based on feed, environment, and genetics'
                  : 'Моделі машинного навчання, що прогнозують темпи росту на основі корму, середовища та генетики'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Microscope className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Disease Forecasting' : 'Прогнозування хвороб'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Predict disease outbreaks using environmental data, behavioral biomarkers, and historical patterns'
                  : 'Прогнозуйте спалахи хвороб використовуючи дані навколишнього середовища, поведінкові біомаркери та історичні моделі'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Utensils className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Feeding Optimization' : 'Оптимізація годівлі'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'AI algorithms that optimize feeding schedules, rates, and protocols for best FCR'
                  : 'AI алгоритми, що оптимізують графіки годівлі, норми та протоколи для найкращого FCR'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Calendar className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Harvest Timing' : 'Час вилову'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Optimize harvest dates using growth predictions, market forecasts, and production economics'
                  : 'Оптимізуйте дати вилову використовуючи прогнози росту, ринкові прогнози та економіку виробництва'}
              </p>
            </div>
            <div className="card p-6 bg-white">
              <Video className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Video Analytics Integration' : 'Інтеграція відеоаналітики'}
              </h3>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Combine computer vision data with IoT sensors for comprehensive insights'
                  : 'Поєднуйте дані комп\'ютерного зору з IoT датчиками для всебічних інсайтів'}
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
