import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Waves,
  ArrowRightLeft,
  GitMerge,
  Settings,
  FileText,
  Calculator,
  Package,
  Rocket,
  Droplets,
  Wind,
  Filter,
  Activity,
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Sparkles,
  Clock,
  Target,
  Zap,
  BarChart3,
  Shield,
  Gauge
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'HFTS Technology & Engineering | Vismar Aqua'
      : 'Технологія та інжиніринг HFTS | Vismar Aqua',
    description: locale === 'en'
      ? 'Hybrid flow-through systems balancing efficiency, sustainability, and production. Expert HFTS design combining the best of flow-through and RAS with 50% lower costs.'
      : 'Гібридні проточні системи, що поєднують ефективність, сталість та продуктивність. Експертне проектування HFTS, що поєднує найкраще від проточних систем та RAS зі зниженням витрат на 50%.',
  };
}

export default async function HFTSPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-white/5 animate-float-slow">
            <Waves className="w-32 h-32" />
          </div>
          <div className="absolute top-40 right-20 text-white/5 animate-float-medium">
            <ArrowRightLeft className="w-24 h-24" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-white/5 animate-float-fast">
            <GitMerge className="w-20 h-20" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-white/5 animate-float-slow">
            <Droplets className="w-28 h-28" />
          </div>
          <div className="absolute bottom-20 right-10 text-white/5 animate-float-medium">
            <Filter className="w-36 h-36" />
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#42c997]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00A8B5]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center text-sm text-white/60">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {isEnglish ? 'Home' : 'Головна'}
              </Link>
              <span className="mx-2">/</span>
              <Link href={`/${locale}/services`} className="hover:text-white transition-colors">
                {isEnglish ? 'Services' : 'Послуги'}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{isEnglish ? 'HFTS Technology' : 'Технологія HFTS'}</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-white/90 text-sm font-medium">
                {isEnglish ? 'Hybrid Flow-Through Systems' : 'Гібридні проточні системи'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {isEnglish ? 'HFTS Technology' : 'Технологія HFTS'}
              <span className="block text-[#42c997]">
                {isEnglish ? '& Engineering' : 'та інжиніринг'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              {isEnglish
                ? 'The perfect balance between efficiency and simplicity. Hybrid systems that combine the best of flow-through and RAS technology.'
                : 'Ідеальний баланс між ефективністю та простотою. Гібридні системи, що поєднують найкраще від проточних систем та технології RAS.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#42c997] hover:bg-[#35a87a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {isEnglish ? 'Design Your HFTS System' : 'Спроектувати систему HFTS'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
              >
                {isEnglish ? 'View Projects' : 'Переглянути проекти'}
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">20-50%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Water Reuse' : 'Повторне використання води'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">40-60%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Lower Cost vs RAS' : 'Економія порівняно з RAS'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Years Experience' : 'Років досвіду'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">2x</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Higher Density' : 'Вища щільність'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose HFTS Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Why Choose ' : 'Чому обрати '}
              <span className="text-[#42c997]">HFTS?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'HFTS combines the reliability of flow-through systems with partial recirculation for optimal efficiency'
                : 'HFTS поєднує надійність проточних систем з частковою рециркуляцією для оптимальної ефективності'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Droplets,
                title: isEnglish ? 'Balanced Water Use' : 'Збалансоване використання води',
                description: isEnglish
                  ? '20-50% water reuse - more efficient than flow-through, simpler than RAS'
                  : '20-50% повторного використання води - ефективніше за проточні системи, простіше за RAS',
              },
              {
                icon: DollarSign,
                title: isEnglish ? 'Lower Capital Cost' : 'Нижчі капітальні витрати',
                description: isEnglish
                  ? 'Significantly less investment than full RAS systems'
                  : 'Значно менші інвестиції, ніж повні системи RAS',
              },
              {
                icon: TrendingUp,
                title: isEnglish ? 'Higher Density' : 'Вища щільність',
                description: isEnglish
                  ? 'Greater production capacity than traditional flow-through'
                  : 'Більша виробнича потужність, ніж традиційні проточні системи',
              },
              {
                icon: Settings,
                title: isEnglish ? 'Flexible Operation' : 'Гнучка експлуатація',
                description: isEnglish
                  ? 'Adjust recirculation rates based on water availability'
                  : 'Регулюйте рівні рециркуляції залежно від доступності води',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#42c997]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#42c997]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#42c997]/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#42c997]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose HFTS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#42c997]/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'When to Choose ' : 'Коли обирати '}
              <span className="text-[#42c997]">HFTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Droplets,
                title: isEnglish ? 'Moderate Water Availability' : 'Помірна доступність води',
                description: isEnglish
                  ? 'You have some water access but not enough for pure flow-through'
                  : 'Ви маєте певний доступ до води, але недостатньо для чистих проточних систем',
              },
              {
                icon: DollarSign,
                title: isEnglish ? 'Lower Capital Budget' : 'Нижчий капітальний бюджет',
                description: isEnglish
                  ? 'Full RAS investment is too high, but you want better efficiency'
                  : 'Інвестиції в повний RAS занадто високі, але ви хочете кращої ефективності',
              },
              {
                icon: Shield,
                title: isEnglish ? 'Proven Technology Preference' : 'Перевага перевірених технологій',
                description: isEnglish
                  ? 'You prefer simpler, more proven technology over complex RAS'
                  : 'Ви віддаєте перевагу простішим, більш перевіреним технологіям над складним RAS',
              },
            ].map((scenario, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#42c997] to-[#35a87a] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <scenario.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-600">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our HFTS Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Our HFTS ' : 'Наші послуги '}
              <span className="text-[#42c997]">{isEnglish ? 'Services' : 'HFTS'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                number: '01',
                title: isEnglish ? 'System Design & Layout' : 'Проектування системи та компоновка',
                description: isEnglish
                  ? 'Complete HFTS layout design, flow calculations, recirculation ratios, and tank configuration optimized for your site and species.'
                  : 'Повне проектування компоновки HFTS, розрахунки потоків, коефіцієнти рециркуляції та конфігурація резервуарів, оптимізовані для вашої ділянки та видів.',
              },
              {
                icon: Calculator,
                number: '02',
                title: isEnglish ? 'Hydraulic Engineering' : 'Гідравлічний інжиніринг',
                description: isEnglish
                  ? 'Precise hydraulic modeling, pipe sizing, pump selection, and water distribution design for optimal flow and efficiency.'
                  : 'Точне гідравлічне моделювання, визначення розмірів труб, підбір насосів та проектування розподілу води для оптимального потоку та ефективності.',
              },
              {
                icon: Package,
                number: '03',
                title: isEnglish ? 'Equipment Integration' : 'Інтеграція обладнання',
                description: isEnglish
                  ? 'Selection and specification of filtration, aeration, and monitoring equipment tailored to hybrid system requirements.'
                  : 'Підбір та специфікація фільтрації, аерації та обладнання моніторингу, адаптованого до вимог гібридної системи.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#0a2540] to-[#1B4B63] p-8 rounded-2xl text-white overflow-hidden group hover:shadow-2xl transition-all"
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                  {service.number}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#42c997]/30 transition-colors">
                    <service.icon className="w-7 h-7 text-[#42c997]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Key HFTS ' : 'Ключові компоненти '}
              <span className="text-[#42c997]">{isEnglish ? 'Components' : 'HFTS'}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'We design complete hybrid systems with all essential components'
                : 'Ми проектуємо комплексні гібридні системи з усіма необхідними компонентами'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Droplets,
                title: isEnglish ? 'Water Intake & Distribution' : 'Водозабір та розподіл',
                description: isEnglish ? 'Source water management, intake systems, distribution manifolds' : 'Управління вихідною водою, системи забору, розподільні колектори',
              },
              {
                icon: Filter,
                title: isEnglish ? 'Settling Chambers' : 'Відстійні камери',
                description: isEnglish ? 'Solids removal, settling tanks, screening systems' : 'Видалення твердих речовин, відстійні резервуари, системи скринінгу',
              },
              {
                icon: ArrowRightLeft,
                title: isEnglish ? 'Partial Recirculation' : 'Часткова рециркуляція',
                description: isEnglish ? 'Recirculation pumps, piping, mixing zones, flow control' : 'Рециркуляційні насоси, трубопроводи, зони змішування, контроль потоку',
              },
              {
                icon: GitMerge,
                title: isEnglish ? 'Basic Filtration' : 'Базова фільтрація',
                description: isEnglish ? 'Mechanical filtration, biological treatment where applicable' : 'Механічна фільтрація, біологічна обробка, де це застосовно',
              },
              {
                icon: Wind,
                title: isEnglish ? 'Aeration Systems' : 'Системи аерації',
                description: isEnglish ? 'Aerators, oxygen injection, surface agitation' : 'Аератори, ін\'єкція кисню, поверхнева агітація',
              },
              {
                icon: Activity,
                title: isEnglish ? 'Effluent Management' : 'Управління стічними водами',
                description: isEnglish ? 'Discharge systems, settling ponds, water quality control' : 'Системи скидання, відстійні ставки, контроль якості води',
              },
            ].map((component, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:border-[#42c997]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#1B4B63]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <component.icon className="w-6 h-6 text-[#1B4B63]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{component.title}</h4>
                  <p className="text-sm text-gray-600">{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Our Design ' : 'Наш процес '}
              <span className="text-[#42c997]">{isEnglish ? 'Process' : 'проектування'}</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#42c997]/20 via-[#42c997] to-[#42c997]/20 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FileText,
                  number: '01',
                  title: isEnglish ? 'Site Assessment' : 'Оцінка ділянки',
                  description: isEnglish
                    ? 'Evaluate water availability, quality, topography, and site constraints'
                    : 'Оцінка доступності води, якості, топографії та обмежень ділянки',
                },
                {
                  icon: Calculator,
                  number: '02',
                  title: isEnglish ? 'System Design' : 'Проектування системи',
                  description: isEnglish
                    ? 'Design tank layout, calculate flow rates, determine recirculation ratios'
                    : 'Проектування компоновки резервуарів, розрахунок швидкостей потоку',
                },
                {
                  icon: Package,
                  number: '03',
                  title: isEnglish ? 'Specification' : 'Специфікація',
                  description: isEnglish
                    ? 'Select pumps, filters, aerators, and monitoring equipment'
                    : 'Підбір насосів, фільтрів, аераторів та обладнання моніторингу',
                },
                {
                  icon: Rocket,
                  number: '04',
                  title: isEnglish ? 'Implementation' : 'Впровадження',
                  description: isEnglish
                    ? 'Installation support, commissioning, and operational training'
                    : 'Підтримка встановлення, введення в експлуатацію та навчання',
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#42c997] transition-all hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#42c997] to-[#35a87a] rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 text-white/5">
            <BarChart3 className="w-40 h-40" />
          </div>
          <div className="absolute bottom-20 left-20 text-white/5">
            <Target className="w-32 h-32" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEnglish ? 'Technical ' : 'Технічні '}
              <span className="text-[#42c997]">{isEnglish ? 'Advantages' : 'переваги'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: isEnglish ? 'Lower Capital Investment' : 'Нижчі капітальні інвестиції',
                description: isEnglish ? '40-60% less than full RAS while maintaining efficiency' : 'На 40-60% менше, ніж повний RAS при збереженні ефективності',
              },
              {
                title: isEnglish ? 'Proven Technology' : 'Перевірена технологія',
                description: isEnglish ? 'Simpler systems with decades of successful operation' : 'Простіші системи з десятиліттями успішної експлуатації',
              },
              {
                title: isEnglish ? 'Easier Operation' : 'Простіша експлуатація',
                description: isEnglish ? 'Less complex than RAS, easier maintenance and training' : 'Менш складна, ніж RAS, простіше обслуговування та навчання',
              },
              {
                title: isEnglish ? 'Good Biosecurity' : 'Хороша біобезпека',
                description: isEnglish ? 'Better than pure flow-through, controlled water sources' : 'Краще, ніж чисті проточні системи, контрольовані джерела води',
              },
              {
                title: isEnglish ? 'Scalable Production' : 'Масштабоване виробництво',
                description: isEnglish ? 'Increase density without full RAS complexity' : 'Збільшення щільності без повної складності RAS',
              },
              {
                title: isEnglish ? 'Energy Efficient' : 'Енергоефективність',
                description: isEnglish ? 'Lower energy costs than full recirculation systems' : 'Нижчі енергетичні витрати, ніж повні рециркуляційні системи',
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <CheckCircle className="w-6 h-6 text-[#42c997] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-sm text-white/70">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Why Choose ' : 'Чому обрати '}
              <span className="text-[#42c997]">Vismar Aqua?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
                description: isEnglish
                  ? 'AI-accelerated design process reduces engineering costs while delivering optimized, efficient hybrid systems.'
                  : 'AI-прискорений процес проектування знижує витрати на інжиніринг, забезпечуючи оптимізовані, ефективні гібридні системи.',
              },
              {
                title: isEnglish ? 'Hybrid Systems Expertise' : 'Експертиза гібридних систем',
                description: isEnglish
                  ? 'Specialized knowledge in balancing flow-through and recirculation for optimal performance and cost-effectiveness.'
                  : 'Спеціалізовані знання в балансуванні проточних систем та рециркуляції для оптимальної продуктивності та економічної ефективності.',
              },
              {
                title: isEnglish ? 'Site-Specific Optimization' : 'Оптимізація для конкретної ділянки',
                description: isEnglish
                  ? 'Every HFTS design is customized to your water resources, species requirements, and production goals.'
                  : 'Кожен дизайн HFTS налаштований під ваші водні ресурси, вимоги видів та цілі виробництва.',
              },
              {
                title: isEnglish ? 'Proven Track Record' : 'Підтверджений послужний список',
                description: isEnglish
                  ? '15+ years of aquaculture engineering experience with successful hybrid system implementations worldwide.'
                  : '15+ років досвіду інжинірингу аквакультури з успішними впровадженнями гібридних систем по всьому світу.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#42c997] rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#42c997] to-[#35a87a] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-white/10">
            <GitMerge className="w-24 h-24" />
          </div>
          <div className="absolute bottom-10 right-10 text-white/10">
            <ArrowRightLeft className="w-32 h-32" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isEnglish ? 'Ready to Design Your HFTS System?' : 'Готові спроектувати вашу систему HFTS?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isEnglish
                ? 'Contact us today for a consultation. Let\'s discuss your water resources, production goals, and design the perfect hybrid solution.'
                : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші водні ресурси, цілі виробництва та спроектуємо ідеальне гібридне рішення.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#35a87a] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg"
              >
                {isEnglish ? 'Schedule Consultation' : 'Запланувати консультацію'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/30"
              >
                {isEnglish ? 'View Our Projects' : 'Переглянути проекти'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
