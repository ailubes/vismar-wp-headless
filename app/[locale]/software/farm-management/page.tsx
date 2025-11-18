import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  TrendingUp,
  FileText,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Smartphone,
  Cloud,
  Settings,
  Brain,
  Calendar,
  Shield,
  Utensils
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Farm Management Software | Vismar Aqua'
      : 'Програмне забезпечення для управління фермою | Vismar Aqua',
    description: locale === 'en'
      ? 'Complete aquaculture operations management platform. Production tracking, inventory, feed management, health records, financials, and compliance reporting.'
      : 'Повна платформа управління операціями аквакультури. Відстеження виробництва, інвентарю, управління кормом, медичні записи, фінанси та звітність відповідності.',
  };
}

export default async function FarmManagementPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    hero: {
      title: isEnglish ? 'Farm Management Software' : 'Програмне забезпечення управління фермою',
      subtitle: isEnglish
        ? 'Complete aquaculture operations management platform'
        : 'Повна платформа управління операціями аквакультури',
      cta: isEnglish ? 'Request Demo' : 'Запитати демо',
    },
    intro: {
      title: isEnglish ? 'Manage Your Entire Operation' : 'Керуйте всією операцією',
      text1: isEnglish
        ? 'Running an aquaculture operation means juggling production data, inventory, feed schedules, health records, financial tracking, and regulatory compliance. Spreadsheets and paper forms lead to errors, inefficiency, and lost opportunities. Our farm management software centralizes all your data in one platform.'
        : 'Управління аквакультурною операцією означає жонглювання даними виробництва, інвентарем, графіками годівлі, медичними записами, фінансовим відстеженням та відповідністю нормам. Електронні таблиці та паперові форми призводять до помилок, неефективності та втрачених можливостей. Наше програмне забезпечення для управління фермою централізує всі ваші дані на одній платформі.',
      text2: isEnglish
        ? 'Designed specifically for aquaculture by aquaculture engineers, our platform tracks everything from stocking to harvest, generates compliance reports automatically, and provides real-time insights to improve profitability.'
        : 'Розроблена спеціально для аквакультури інженерами аквакультури, наша платформа відстежує все від зариблення до вилову, автоматично генерує звіти відповідності та надає інсайти в реальному часі для покращення прибутковості.',
    },
    features: {
      title: isEnglish ? 'Key Features' : 'Ключові можливості',
      items: [
        {
          icon: TrendingUp,
          title: isEnglish ? 'Production Tracking' : 'Відстеження виробництва',
          description: isEnglish
            ? 'Track biomass, growth rates, mortality, FCR, and other KPIs in real-time across all production units'
            : 'Відстежуйте біомасу, темпи росту, смертність, FCR та інші KPI в реальному часі у всіх виробничих одиницях',
        },
        {
          icon: Package,
          title: isEnglish ? 'Inventory Management' : 'Управління інвентарем',
          description: isEnglish
            ? 'Manage feed, chemicals, equipment, and supplies with automated reorder points and supplier tracking'
            : 'Керуйте кормом, хімікатами, обладнанням та постачанням з автоматизованими точками переобліку та відстеженням постачальників',
        },
        {
          icon: LayoutDashboard,
          title: isEnglish ? 'Feed Management' : 'Управління кормом',
          description: isEnglish
            ? 'Optimize feeding schedules, track consumption, calculate FCR, and minimize waste automatically'
            : 'Оптимізуйте графіки годівлі, відстежуйте споживання, розраховуйте FCR та мінімізуйте відходи автоматично',
        },
        {
          icon: FileText,
          title: isEnglish ? 'Health Records' : 'Медичні записи',
          description: isEnglish
            ? 'Digital health records, treatment logs, vaccination schedules, and veterinary compliance documentation'
            : 'Цифрові медичні записи, журнали лікування, графіки вакцинації та документація відповідності ветеринарії',
        },
        {
          icon: DollarSign,
          title: isEnglish ? 'Financial Tracking' : 'Фінансове відстеження',
          description: isEnglish
            ? 'Track costs, revenues, profitability by batch/pond/tank with automated financial reporting'
            : 'Відстежуйте витрати, доходи, прибутковість за партією/ставком/резервуаром з автоматизованою фінансовою звітністю',
        },
        {
          icon: Users,
          title: isEnglish ? 'Multi-Site Support' : 'Підтримка багатьох об\'єктів',
          description: isEnglish
            ? 'Manage multiple farms/sites from single dashboard with role-based access control'
            : 'Керуйте кількома фермами/об\'єктами з однієї панелі з контролем доступу на основі ролей',
        },
      ],
    },
    howItWorks: {
      title: isEnglish ? 'How It Works' : 'Як це працює',
      steps: [
        {
          icon: Settings,
          number: '01',
          title: isEnglish ? 'Setup & Configuration' : 'Налаштування та конфігурація',
          description: isEnglish
            ? 'Configure your farm structure, ponds/tanks, species, feed types, and operational parameters'
            : 'Налаштуйте структуру вашої ферми, ставки/резервуари, види, типи корму та операційні параметри',
        },
        {
          icon: Smartphone,
          number: '02',
          title: isEnglish ? 'Daily Data Entry' : 'Щоденне введення даних',
          description: isEnglish
            ? 'Staff enters daily data via mobile app or web interface: feeding, mortality, water quality, etc.'
            : 'Персонал вводить щоденні дані через мобільний додаток або веб-інтерфейс: годівлю, смертність, якість води тощо',
        },
        {
          icon: BarChart3,
          number: '03',
          title: isEnglish ? 'Automated Analysis' : 'Автоматизований аналіз',
          description: isEnglish
            ? 'System automatically calculates KPIs, growth curves, FCR, profitability, and generates insights'
            : 'Система автоматично розраховує KPI, криві росту, FCR, прибутковість та генерує інсайти',
        },
        {
          icon: FileText,
          number: '04',
          title: isEnglish ? 'Reports & Compliance' : 'Звіти та відповідність',
          description: isEnglish
            ? 'Generate production reports, compliance documentation, and financial statements with one click'
            : 'Генеруйте звіти виробництва, документацію відповідності та фінансові звіти одним кліком',
        },
      ],
    },
    techSpecs: {
      title: isEnglish ? 'Technical Specifications' : 'Технічні специфікації',
      specs: [
        {
          label: isEnglish ? 'Platform' : 'Платформа',
          value: isEnglish ? 'Web-based SaaS (browser access)' : 'Веб-based SaaS (доступ через браузер)',
        },
        {
          label: isEnglish ? 'Mobile Apps' : 'Мобільні додатки',
          value: isEnglish ? 'iOS and Android native apps' : 'Нативні додатки iOS та Android',
        },
        {
          label: isEnglish ? 'Cloud Infrastructure' : 'Хмарна інфраструктура',
          value: isEnglish ? 'AWS/Azure, 99.9% uptime SLA' : 'AWS/Azure, 99,9% SLA часу роботи',
        },
        {
          label: isEnglish ? 'Data Security' : 'Безпека даних',
          value: isEnglish ? 'SSL encryption, GDPR compliant, daily backups' : 'SSL шифрування, відповідає GDPR, щоденні резервні копії',
        },
        {
          label: isEnglish ? 'Integration' : 'Інтеграція',
          value: isEnglish ? 'REST API, Excel/CSV import/export' : 'REST API, Excel/CSV імпорт/експорт',
        },
        {
          label: isEnglish ? 'Languages' : 'Мови',
          value: isEnglish ? 'English, Ukrainian, Spanish, Portuguese' : 'Англійська, Українська, Іспанська, Португальська',
        },
      ],
    },
    benefits: {
      title: isEnglish ? 'Measurable Benefits' : 'Вимірювані переваги',
      items: [
        {
          icon: LayoutDashboard,
          title: isEnglish ? 'Centralized Data' : 'Централізовані дані',
          description: isEnglish
            ? 'All farm data in one place, accessible from anywhere, no more spreadsheets'
            : 'Всі дані ферми в одному місці, доступні звідки завгодно, більше немає електронних таблиць',
        },
        {
          icon: TrendingUp,
          title: isEnglish ? 'Improved Efficiency' : 'Покращена ефективність',
          description: isEnglish
            ? 'Reduce administrative time by 50%, eliminate data entry errors'
            : 'Зменшіть адміністративний час на 50%, усуньте помилки введення даних',
        },
        {
          icon: BarChart3,
          title: isEnglish ? 'Better Decision-Making' : 'Краще прийняття рішень',
          description: isEnglish
            ? 'Real-time KPIs and insights help you optimize operations and profitability'
            : 'KPI та інсайти в реальному часі допомагають оптимізувати операції та прибутковість',
        },
        {
          icon: FileText,
          title: isEnglish ? 'Regulatory Compliance' : 'Відповідність нормам',
          description: isEnglish
            ? 'Automatic compliance reports for certifications (ASC, BAP, organic, etc.)'
            : 'Автоматичні звіти відповідності для сертифікацій (ASC, BAP, органічні тощо)',
        },
      ],
    },
    aiInsights: {
      title: isEnglish ? 'AI-Powered Insights & Recommendations' : 'Інсайти та рекомендації на основі ШІ',
      subtitle: isEnglish
        ? 'Machine learning algorithms provide intelligent recommendations for feeding, harvesting, and production optimization'
        : 'Алгоритми машинного навчання надають розумні рекомендації для годівлі, вилову та оптимізації виробництва'
    },
    useCases: {
      title: isEnglish ? 'Use Cases' : 'Випадки використання',
      items: [
        {
          title: isEnglish ? 'Multi-Site Operations' : 'Багатофункціональні операції',
          description: isEnglish
            ? 'Manage multiple farms across different locations from a single dashboard. Compare performance across sites, share best practices, and maintain consistent operational standards. Perfect for growing aquaculture companies with distributed operations.'
            : 'Керуйте кількома фермами в різних місцях з однієї панелі. Порівнюйте продуктивність між об\'єктами, діліться кращими практиками та підтримуйте постійні операційні стандарти. Ідеально для аквакультурних компаній, що зростають, з розподіленими операціями.',
        },
        {
          title: isEnglish ? 'Production Optimization' : 'Оптимізація виробництва',
          description: isEnglish
            ? 'Track growth rates, FCR, and survival by batch to identify best-performing genetics, feed formulations, and management practices. Use historical data to continuously improve production efficiency and reduce costs per kilogram produced.'
            : 'Відстежуйте темпи росту, FCR та виживання за партією для визначення найкращих генетик, формуляцій корму та практик управління. Використовуйте історичні дані для постійного покращення ефективності виробництва та зниження витрат на кілограм виробленого.',
        },
        {
          title: isEnglish ? 'Compliance Management' : 'Управління відповідністю',
          description: isEnglish
            ? 'Maintain detailed records for ASC, BAP, organic, or other certifications. Generate audit-ready reports with one click. Track chemical usage, antibiotic treatments, and environmental monitoring automatically to ensure continuous compliance.'
            : 'Підтримуйте детальні записи для ASC, BAP, органічних або інших сертифікацій. Генеруйте готові до аудиту звіти одним кліком. Відстежуйте використання хімікатів, лікування антибіотиками та екологічний моніторинг автоматично для забезпечення постійної відповідності.',
        },
      ],
    },
    pricing: {
      title: isEnglish ? 'Pricing & Plans' : 'Ціни та плани',
      description: isEnglish
        ? 'Flexible subscription plans based on farm size and features needed. Contact us for a custom quote and demo.'
        : 'Гнучкі плани підписки залежно від розміру ферми та необхідних функцій. Зв\'яжіться з нами для індивідуального кошторису та демо.',
      cta: isEnglish ? 'Contact for Pricing' : 'Зв\'язатися для ціни',
    },
    whyChoose: {
      title: isEnglish ? 'Why Choose Our Farm Management Software?' : 'Чому обрати наше програмне забезпечення для управління фермою?',
      items: [
        {
          title: isEnglish ? 'Built by Aquaculture Engineers' : 'Створено інженерами аквакультури',
          description: isEnglish
            ? 'Designed by people who actually build and operate aquaculture systems, not generic agriculture software companies. We understand your workflows and challenges.'
            : 'Розроблено людьми, які фактично будують та експлуатують системи аквакультури, а не загальними компаніями програмного забезпечення для сільського господарства. Ми розуміємо ваші робочі процеси та виклики.',
        },
        {
          title: isEnglish ? 'Species-Specific Modules' : 'Модулі для конкретних видів',
          description: isEnglish
            ? 'Customized modules for shrimp, tilapia, salmon, catfish, and other species with species-specific KPIs, growth models, and best practices built in.'
            : 'Налаштовані модулі для креветок, тиляпії, лосося, сома та інших видів з KPI, моделями росту та кращими практиками для конкретних видів.',
        },
        {
          title: isEnglish ? 'Offline Capability' : 'Офлайн можливості',
          description: isEnglish
            ? 'Mobile apps work offline and sync when internet is available. Perfect for remote farm locations with limited connectivity.'
            : 'Мобільні додатки працюють офлайн та синхронізуються, коли доступний інтернет. Ідеально для віддалених розташувань ферм з обмеженим з\'єднанням.',
        },
        {
          title: isEnglish ? 'Excellent Support' : 'Відмінна підтримка',
          description: isEnglish
            ? 'Dedicated support team with aquaculture expertise. We provide training, onboarding assistance, and ongoing technical support in your language.'
            : 'Виділена команда підтримки з експертизою в аквакультурі. Ми надаємо навчання, допомогу з впровадженням та постійну технічну підтримку вашою мовою.',
        },
      ],
    },
    finalCta: {
      title: isEnglish ? 'Ready to Streamline Farm Operations?' : 'Готові оптимізувати операції ферми?',
      description: isEnglish
        ? 'Request a demo to see our farm management software in action. We\'ll show you how it can transform your operation.'
        : 'Запитайте демо, щоб побачити наше програмне забезпечення для управління фермою в дії. Ми покажемо вам, як воно може трансформувати вашу операцію.',
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
              {isEnglish ? 'Farm Management' : 'Управління фермою'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <LayoutDashboard className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <TrendingUp className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <LayoutDashboard className="w-10 h-10" />
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

      {/* AI-Powered Insights & Recommendations */}
      <section className="section bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.aiInsights.title}</h2>
            <p className="text-lg text-neutral-600">{content.aiInsights.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8 bg-white">
              <Brain className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Smart Feeding Recommendations' : 'Розумні рекомендації з годівлі'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'AI analyzes behavior, water quality, and growth data to recommend optimal feeding rates and schedules'
                  : 'ШІ аналізує поведінку, якість води та дані росту для рекомендації оптимальних норм та графіків годівлі'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Behavior-based feed adjustments' : 'Налаштування корму на основі поведінки'}</li>
                <li>• {isEnglish ? 'Weather-responsive feeding' : 'Годівля з урахуванням погоди'}</li>
                <li>• {isEnglish ? 'Automatic FCR optimization' : 'Автоматична оптимізація FCR'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-white">
              <Calendar className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Predictive Harvest Planning' : 'Прогнозне планування вилову'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Forecast optimal harvest dates based on growth curves, market prices, and production goals'
                  : 'Прогнозуйте оптимальні дати вилову на основі кривих росту, ринкових цін та виробничих цілей'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Growth prediction models' : 'Моделі прогнозування росту'}</li>
                <li>• {isEnglish ? 'Market price integration' : 'Інтеграція ринкових цін'}</li>
                <li>• {isEnglish ? 'Yield forecasting' : 'Прогнозування врожайності'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-white">
              <TrendingUp className="w-12 h-12 text-brand-success mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'ML-Based Growth Curves' : 'Криві росту на основі МН'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Machine learning models that adapt to your specific species, genetics, and environmental conditions'
                  : 'Моделі машинного навчання, які адаптуються до ваших конкретних видів, генетики та умов навколишнього середовища'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Species-specific models' : 'Моделі для конкретних видів'}</li>
                <li>• {isEnglish ? 'Adaptive learning from your data' : 'Адаптивне навчання з ваших даних'}</li>
                <li>• {isEnglish ? 'Confidence intervals and ranges' : 'Довірчі інтервали та діапазони'}</li>
              </ul>
            </div>
            <div className="card p-8 bg-white">
              <Shield className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? 'Disease Outbreak Prediction' : 'Прогнозування спалахів хвороб'}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish
                  ? 'Early warning system for disease risks based on environmental factors and historical patterns'
                  : 'Система раннього попередження про ризики захворювань на основі екологічних факторів та історичних моделей'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• {isEnglish ? 'Risk scoring algorithms' : 'Алгоритми оцінки ризику'}</li>
                <li>• {isEnglish ? 'Preventive action recommendations' : 'Рекомендації профілактичних дій'}</li>
                <li>• {isEnglish ? 'Treatment protocol suggestions' : 'Пропозиції протоколів лікування'}</li>
              </ul>
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
