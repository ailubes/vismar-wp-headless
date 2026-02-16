import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Baby,
  Egg,
  Fish,
  Droplets,
  Microscope,
  Waves,
  FileText,
  Calculator,
  Package,
  Rocket,
  Shield,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Sparkles,
  Clock,
  Target,
  Activity,
  Gauge,
  Users,
  Award,
  BarChart3
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Hatchery Engineering & Design | Vismar Aqua'
      : 'Інжиніринг та проектування інкубаторіїв | Vismar Aqua',
    description: locale === 'en'
      ? 'Complete hatchery systems for consistent, high-quality fingerling production. Expert design of broodstock, spawning, incubation, and early rearing facilities with 50% lower costs.'
      : 'Повні системи інкубаторіїв для стабільного виробництва високоякісних мальків. Експертне проектування об\'єктів для плідників, нересту, інкубації та раннього вирощування зі зниженням витрат на 50%.',
  };
}

export default async function HatcheryPage({ params }: Props) {
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
            <Egg className="w-32 h-32" />
          </div>
          <div className="absolute top-40 right-20 text-white/5 animate-float-medium">
            <Fish className="w-24 h-24" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-white/5 animate-float-fast">
            <Baby className="w-20 h-20" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-white/5 animate-float-slow">
            <Microscope className="w-28 h-28" />
          </div>
          <div className="absolute bottom-20 right-10 text-white/5 animate-float-medium">
            <Waves className="w-36 h-36" />
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
              <span className="text-white">{isEnglish ? 'Hatchery Engineering' : 'Інжиніринг інкубаторіїв'}</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-white/90 text-sm font-medium">
                {isEnglish ? 'Fingerling Production Systems' : 'Системи виробництва мальків'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {isEnglish ? 'Hatchery Engineering' : 'Інжиніринг інкубаторіїв'}
              <span className="block text-[#42c997]">
                {isEnglish ? '& Design' : 'та проектування'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              {isEnglish
                ? 'Complete hatchery systems for consistent, high-quality fingerling production. From broodstock to grow-out ready juveniles.'
                : 'Повні системи інкубаторіїв для стабільного виробництва високоякісних мальків. Від плідників до готових до вирощування молодих особин.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#42c997] hover:bg-[#35a87a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {isEnglish ? 'Design Your Hatchery' : 'Спроектувати ваш інкубаторій'}
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
                  <Clock className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Years Experience' : 'Років досвіду'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Fish className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">20+</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Species Supported' : 'Підтримуваних видів'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">95%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Survival Rate' : 'Виживаність'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">50%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Cost Savings' : 'Економія витрат'}</p>
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

      {/* Why Invest in a Hatchery Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Why Invest in ' : 'Чому варто інвестувати в '}
              <span className="text-[#42c997]">{isEnglish ? 'a Hatchery?' : 'інкубаторій?'}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'A well-designed hatchery ensures consistent supply, superior genetics, and biosecurity'
                : 'Добре спроектований інкубаторій забезпечує стабільні поставки, чудову генетику та біобезпеку'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: isEnglish ? 'Consistent Supply' : 'Стабільні поставки',
                description: isEnglish
                  ? 'Guaranteed fingerling availability year-round, independent of external suppliers'
                  : 'Гарантована доступність мальків цілий рік, незалежно від зовнішніх постачальників',
              },
              {
                icon: Microscope,
                title: isEnglish ? 'Biosecurity Control' : 'Контроль біобезпеки',
                description: isEnglish
                  ? 'Prevent disease introduction from external fingerling sources'
                  : 'Запобігання занесенню хвороб від зовнішніх джерел мальків',
              },
              {
                icon: Fish,
                title: isEnglish ? 'Genetic Control' : 'Генетичний контроль',
                description: isEnglish
                  ? 'Select and breed for superior traits: growth rate, disease resistance, quality'
                  : 'Відбір та розведення кращих ознак: темпи росту, стійкість до хвороб, якість',
              },
              {
                icon: DollarSign,
                title: isEnglish ? 'Cost Savings' : 'Економія витрат',
                description: isEnglish
                  ? 'Long-term savings vs. purchasing fingerlings; vertical integration benefits'
                  : 'Довгострокова економія проти купівлі мальків; переваги вертикальної інтеграції',
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

      {/* When to Build vs Buy */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#42c997]/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Build or ' : 'Будувати чи '}
              <span className="text-[#42c997]">{isEnglish ? 'Buy?' : 'купувати?'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#42c997]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#42c997] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {isEnglish ? 'Build a Hatchery When:' : 'Будуйте інкубаторій, якщо:'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  isEnglish ? 'Production exceeds 50-100 tons annually' : 'Виробництво перевищує 50-100 тонн щорічно',
                  isEnglish ? 'Fingerling supply is unreliable or expensive' : 'Постачання мальків ненадійне або дороге',
                  isEnglish ? 'You want genetic improvement programs' : 'Ви хочете програми генетичного покращення',
                  isEnglish ? 'High biosecurity is critical' : 'Висока біобезпека є критичною',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#42c997] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {isEnglish ? 'Buy Fingerlings When:' : 'Купуйте мальки, якщо:'}
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  isEnglish ? 'Small-scale operations (<50 tons/year)' : 'Невеликі операції (<50 тонн/рік)',
                  isEnglish ? 'Reliable local fingerling suppliers exist' : 'Існують надійні місцеві постачальники мальків',
                  isEnglish ? 'Capital for hatchery construction is limited' : 'Капітал для будівництва інкубаторію обмежений',
                  isEnglish ? 'Testing species or markets first' : 'Спочатку тестуєте види або ринки',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hatchery Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Our Hatchery ' : 'Наші послуги '}
              <span className="text-[#42c997]">{isEnglish ? 'Services' : 'інкубаторію'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                number: '01',
                title: isEnglish ? 'Complete System Design' : 'Повне проектування системи',
                description: isEnglish
                  ? 'End-to-end hatchery design including broodstock facilities, spawning rooms, incubation systems, larval rearing, and live feed production units.'
                  : 'Наскрізне проектування інкубаторію, включаючи об\'єкти для плідників, кімнати нересту, системи інкубації, вирощування личинок та виробничі одиниці живого корму.',
              },
              {
                icon: Microscope,
                number: '02',
                title: isEnglish ? 'Broodstock Facility Engineering' : 'Інжиніринг об\'єктів для плідників',
                description: isEnglish
                  ? 'Specialized broodstock tanks, conditioning systems, photoperiod control, and breeding protocols for optimal spawning performance.'
                  : 'Спеціалізовані резервуари для плідників, системи кондиціювання, контроль фотоперіоду та протоколи розведення для оптимальної продуктивності нересту.',
              },
              {
                icon: Package,
                number: '03',
                title: isEnglish ? 'Nursery & Grow-Out Integration' : 'Інтеграція розсадника та вирощування',
                description: isEnglish
                  ? 'Seamless integration with nursery and grow-out facilities, weaning protocols, and fingerling transfer systems.'
                  : 'Безшовна інтеграція з розсадником та вирощувальними об\'єктами, протоколи відлучення та системи передачі мальків.',
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
              {isEnglish ? 'Key Hatchery ' : 'Ключові компоненти '}
              <span className="text-[#42c997]">{isEnglish ? 'Components' : 'інкубаторію'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Fish,
                title: isEnglish ? 'Broodstock Tanks' : 'Резервуари плідників',
                description: isEnglish ? 'Temperature, light, photoperiod control' : 'Контроль температури, світла, фотоперіоду',
              },
              {
                icon: Activity,
                title: isEnglish ? 'Spawning Facilities' : 'Об\'єкти нересту',
                description: isEnglish ? 'Dedicated spawning and fertilization' : 'Виділені нерестові та запліднення',
              },
              {
                icon: Egg,
                title: isEnglish ? 'Incubation Systems' : 'Системи інкубації',
                description: isEnglish ? 'Temperature-controlled incubators' : 'Інкубатори з контролем температури',
              },
              {
                icon: Baby,
                title: isEnglish ? 'Larval Rearing' : 'Вирощування личинок',
                description: isEnglish ? 'First feeding, optimal water quality' : 'Перше годування, оптимальна якість води',
              },
              {
                icon: Microscope,
                title: isEnglish ? 'Live Feed Production' : 'Виробництво живого корму',
                description: isEnglish ? 'Rotifer, artemia, algae culture' : 'Культивування коловерток, артемії, водоростей',
              },
              {
                icon: Droplets,
                title: isEnglish ? 'Water Quality' : 'Якість води',
                description: isEnglish ? 'Filtration, oxygen, temperature' : 'Фільтрація, кисень, температура',
              },
              {
                icon: Shield,
                title: isEnglish ? 'Biosecurity' : 'Біобезпека',
                description: isEnglish ? 'Quarantine, water treatment' : 'Карантин, очищення води',
              },
              {
                icon: Gauge,
                title: isEnglish ? 'Automation' : 'Автоматизація',
                description: isEnglish ? 'Sensors, feeding, alarms' : 'Датчики, годування, сигналізація',
              },
            ].map((component, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl hover:border-[#42c997]/50 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#1B4B63]/10 rounded-xl flex items-center justify-center mb-4">
                  <component.icon className="w-7 h-7 text-[#1B4B63]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{component.title}</h4>
                <p className="text-sm text-gray-600">{component.description}</p>
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
              {isEnglish ? 'Hatchery Design ' : 'Процес проектування '}
              <span className="text-[#42c997]">{isEnglish ? 'Process' : 'інкубаторію'}</span>
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
                  title: isEnglish ? 'Species Analysis' : 'Аналіз видів',
                  description: isEnglish
                    ? 'Identify target species, production goals, and species-specific requirements'
                    : 'Визначення цільових видів, цілей виробництва та специфічних вимог видів',
                },
                {
                  icon: Calculator,
                  number: '02',
                  title: isEnglish ? 'Facility Layout' : 'Компоновка об\'єкта',
                  description: isEnglish
                    ? 'Design layout, calculate tank sizes, plan workflow optimization'
                    : 'Проектування компоновки, розрахунок розмірів резервуарів, оптимізація робочого процесу',
                },
                {
                  icon: Package,
                  number: '03',
                  title: isEnglish ? 'Equipment Selection' : 'Вибір обладнання',
                  description: isEnglish
                    ? 'Select incubation, water treatment, and monitoring equipment'
                    : 'Вибір обладнання для інкубації, очищення води та моніторингу',
                },
                {
                  icon: Rocket,
                  number: '04',
                  title: isEnglish ? 'Training' : 'Навчання',
                  description: isEnglish
                    ? 'System startup, protocols, and comprehensive staff training'
                    : 'Запуск системи, протоколи та комплексне навчання персоналу',
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

      {/* Species We Support */}
      <section className="py-20 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 text-white/5">
            <Fish className="w-40 h-40" />
          </div>
          <div className="absolute bottom-20 left-20 text-white/5">
            <Egg className="w-32 h-32" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEnglish ? 'Species We ' : 'Види, які ми '}
              <span className="text-[#42c997]">{isEnglish ? 'Support' : 'підтримуємо'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: isEnglish ? 'Salmon & Trout' : 'Лосось та форель',
                description: isEnglish ? 'Salmonid hatcheries, smolt production, egg incubation' : 'Лососеві інкубаторії, виробництво смолтів, інкубація ікри',
              },
              {
                title: isEnglish ? 'Tilapia' : 'Тіляпія',
                description: isEnglish ? 'Mouth-brooding protocols, fry collection, sex reversal' : 'Протоколи виношування в роті, збір мальків, зміна статі',
              },
              {
                title: isEnglish ? 'Sea Bass & Bream' : 'Сібас та дорада',
                description: isEnglish ? 'Marine hatcheries, live feed production, larval rearing' : 'Морські інкубаторії, виробництво живого корму, вирощування личинок',
              },
              {
                title: isEnglish ? 'Shrimp & Prawns' : 'Креветки',
                description: isEnglish ? 'Maturation units, nauplii production, post-larval rearing' : 'Підрозділи дозрівання, виробництво науплій, вирощування постличинок',
              },
              {
                title: isEnglish ? 'Sturgeon & Caviar' : 'Осетр та ікра',
                description: isEnglish ? 'Specialized broodstock management, caviar production' : 'Спеціалізоване управління плідниками, виробництво ікри',
              },
              {
                title: isEnglish ? 'Ornamental Fish' : 'Декоративні риби',
                description: isEnglish ? 'Multi-species hatcheries, breeding programs' : 'Багатовидові інкубаторії, програми розведення',
              },
            ].map((species, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Fish className="w-6 h-6 text-[#42c997]" />
                  <h3 className="font-semibold text-white">{species.title}</h3>
                </div>
                <p className="text-sm text-white/70">{species.description}</p>
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
                  ? 'AI-accelerated design process reduces engineering costs while delivering optimized, efficient hatchery systems tailored to your species.'
                  : 'AI-прискорений процес проектування знижує витрати на інжиніринг, забезпечуючи оптимізовані, ефективні системи інкубаторіїв, адаптовані до ваших видів.',
              },
              {
                title: isEnglish ? 'Multi-Species Expertise' : 'Експертиза багатьох видів',
                description: isEnglish
                  ? 'Experience with salmonids, tilapia, marine species, shrimp, sturgeon, and ornamental fish hatchery design and protocols.'
                  : 'Досвід роботи з лососевими, тіляпією, морськими видами, креветками, осетром та проектуванням інкубаторіїв і протоколами для декоративних риб.',
              },
              {
                title: isEnglish ? 'Proven Hatchery Protocols' : 'Перевірені протоколи інкубаторію',
                description: isEnglish
                  ? 'Species-specific breeding, spawning, and rearing protocols based on 15+ years of aquaculture engineering experience.'
                  : 'Специфічні для видів протоколи розведення, нересту та вирощування на основі 15+ років досвіду інжинірингу аквакультури.',
              },
              {
                title: isEnglish ? 'Complete System Integration' : 'Повна інтеграція системи',
                description: isEnglish
                  ? 'Seamless integration with nursery, grow-out facilities, and recirculating systems for vertical integration benefits.'
                  : 'Безшовна інтеграція з розсадником, вирощувальними об\'єктами та рециркуляційними системами для переваг вертикальної інтеграції.',
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
            <Egg className="w-24 h-24" />
          </div>
          <div className="absolute bottom-10 right-10 text-white/10">
            <Baby className="w-32 h-32" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isEnglish ? 'Ready to Design Your Hatchery?' : 'Готові спроектувати ваш інкубаторій?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isEnglish
                ? 'Contact us today for a consultation. Let\'s discuss your species, production goals, and design the perfect hatchery solution.'
                : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші види, цілі виробництва та спроектуємо ідеальне рішення інкубаторію.'}
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
