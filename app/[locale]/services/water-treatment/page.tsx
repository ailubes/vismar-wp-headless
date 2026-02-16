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
  FileText,
  Calculator,
  Package,
  Rocket,
  Wind,
  Zap,
  Thermometer,
  Shield,
  CheckCircle,
  ArrowRight,
  Activity,
  FlaskConical,
  Beaker,
  Sparkles,
  Clock,
  Target,
  DollarSign,
  BarChart3
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
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-white/5 animate-float-slow">
            <Droplets className="w-32 h-32" />
          </div>
          <div className="absolute top-40 right-20 text-white/5 animate-float-medium">
            <Filter className="w-24 h-24" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-white/5 animate-float-fast">
            <Waves className="w-20 h-20" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-white/5 animate-float-slow">
            <TestTube className="w-28 h-28" />
          </div>
          <div className="absolute bottom-20 right-10 text-white/5 animate-float-medium">
            <FlaskConical className="w-36 h-36" />
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
              <span className="text-white">{isEnglish ? 'Water Treatment' : 'Очищення води'}</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-white/90 text-sm font-medium">
                {isEnglish ? 'Water Quality Management' : 'Управління якістю води'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {isEnglish ? 'Water Treatment' : 'Системи очищення'}
              <span className="block text-[#42c997]">
                {isEnglish ? 'Systems Engineering' : 'води'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              {isEnglish
                ? 'Advanced water quality management for healthy, productive aquaculture operations. From filtration to disinfection.'
                : 'Передове управління якістю води для здорових, продуктивних операцій аквакультури. Від фільтрації до дезінфекції.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-[#42c997] hover:bg-[#35a87a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {isEnglish ? 'Design Your System' : 'Спроектувати систему'}
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
                  <Target className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">99%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Treatment Efficiency' : 'Ефективність очищення'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-[#42c997]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">30%</span>
                </div>
                <p className="text-white/60 text-sm">{isEnglish ? 'Energy Savings' : 'Економія енергії'}</p>
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

      {/* Why Water Treatment Matters Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Why Water Treatment ' : 'Чому очищення води '}
              <span className="text-[#42c997]">{isEnglish ? 'Matters' : 'важливе'}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Water treatment is the foundation of successful aquaculture operations'
                : 'Очищення води є основою успішних операцій аквакультури'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                title: isEnglish ? 'Optimal Water Quality' : 'Оптимальна якість води',
                description: isEnglish
                  ? 'Maintain ideal parameters for fish health and maximum growth rates'
                  : 'Підтримуйте ідеальні параметри для здоров\'я риби та максимальних темпів росту',
              },
              {
                icon: Shield,
                title: isEnglish ? 'Disease Prevention' : 'Профілактика хвороб',
                description: isEnglish
                  ? 'Reduce pathogen loads and prevent disease outbreaks through proper treatment'
                  : 'Зменшуйте навантаження патогенів та запобігайте спалахам хвороб через належне очищення',
              },
              {
                icon: CheckCircle,
                title: isEnglish ? 'Regulatory Compliance' : 'Відповідність нормативам',
                description: isEnglish
                  ? 'Meet environmental discharge standards and water quality regulations'
                  : 'Відповідайте стандартам екологічного скидання та нормам якості води',
              },
              {
                icon: Droplets,
                title: isEnglish ? 'Sustainability' : 'Сталість',
                description: isEnglish
                  ? 'Reduce water consumption through efficient treatment and reuse systems'
                  : 'Зменшуйте споживання води через ефективні системи очищення та повторного використання',
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

      {/* Our Water Treatment Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#42c997]/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Our Treatment ' : 'Наші послуги '}
              <span className="text-[#42c997]">{isEnglish ? 'Services' : 'очищення'}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                number: '01',
                title: isEnglish ? 'System Design & Integration' : 'Проектування та інтеграція систем',
                description: isEnglish
                  ? 'Complete water treatment system design including process selection, equipment sizing, hydraulic calculations, and integration with existing facilities.'
                  : 'Повне проектування системи очищення води, включаючи вибір процесу, розмір обладнання, гідравлічні розрахунки та інтеграцію з існуючими об\'єктами.',
              },
              {
                icon: Settings,
                number: '02',
                title: isEnglish ? 'Treatment Process Engineering' : 'Інжиніринг процесу очищення',
                description: isEnglish
                  ? 'Multi-barrier treatment train design: mechanical filtration, biological treatment, disinfection, and advanced oxidation processes.'
                  : 'Проектування багатобар\'єрного ланцюга очищення: механічна фільтрація, біологічне очищення, дезінфекція та процеси передового окислення.',
              },
              {
                icon: Gauge,
                number: '03',
                title: isEnglish ? 'Monitoring & Automation' : 'Моніторинг та автоматизація',
                description: isEnglish
                  ? 'Real-time water quality monitoring, automated control systems, alarm management, and data logging for optimal performance.'
                  : 'Моніторинг якості води в реальному часі, автоматизовані системи управління, управління сигналізацією та реєстрація даних для оптимальної продуктивності.',
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

      {/* Treatment Technologies */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Treatment ' : 'Технології '}
              <span className="text-[#42c997]">{isEnglish ? 'Technologies' : 'очищення'}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'We design complete treatment systems using proven technologies'
                : 'Ми проектуємо комплексні системи очищення з використанням перевірених технологій'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
                title: isEnglish ? 'Denitrification' : 'Денітрифікація',
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
            ].map((technology, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:border-[#42c997]/50 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#1B4B63]/10 rounded-xl flex items-center justify-center mb-4">
                  <technology.icon className="w-7 h-7 text-[#1B4B63]" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{technology.title}</h4>
                <p className="text-sm text-gray-600">{technology.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Design ' : 'Процес '}
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
                  title: isEnglish ? 'Water Assessment' : 'Оцінка води',
                  description: isEnglish
                    ? 'Analyze source water quality, production demands, and discharge standards'
                    : 'Аналіз якості вихідної води, потреб виробництва та стандартів скидання',
                },
                {
                  icon: Calculator,
                  number: '02',
                  title: isEnglish ? 'Treatment Design' : 'Проектування очищення',
                  description: isEnglish
                    ? 'Design multi-barrier treatment process and select appropriate technologies'
                    : 'Проектування багатобар\'єрного процесу очищення та вибір відповідних технологій',
                },
                {
                  icon: Package,
                  number: '03',
                  title: isEnglish ? 'Equipment Selection' : 'Вибір обладнання',
                  description: isEnglish
                    ? 'Select and size treatment equipment, specify monitoring instrumentation'
                    : 'Вибір та розмір обладнання для очищення, специфікація інструментів моніторингу',
                },
                {
                  icon: Rocket,
                  number: '04',
                  title: isEnglish ? 'Commissioning' : 'Введення в експлуатацію',
                  description: isEnglish
                    ? 'Installation oversight, system startup, and operator training'
                    : 'Нагляд за встановленням, запуск системи та навчання операторів',
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
            <Filter className="w-32 h-32" />
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
                title: isEnglish ? 'Multi-barrier Approach' : 'Багатобар\'єрний підхід',
                description: isEnglish ? 'Redundant treatment stages for reliable water quality' : 'Резервні етапи очищення для надійної якості води',
              },
              {
                title: isEnglish ? 'Energy-efficient Solutions' : 'Енергоефективні рішення',
                description: isEnglish ? 'Optimized designs minimize operational energy costs' : 'Оптимізовані конструкції мінімізують операційні енергетичні витрати',
              },
              {
                title: isEnglish ? 'Real-time Monitoring' : 'Моніторинг в реальному часі',
                description: isEnglish ? 'Continuous water quality tracking and data analytics' : 'Безперервне відстеження якості води та аналіз даних',
              },
              {
                title: isEnglish ? 'Automated Control' : 'Автоматизоване управління',
                description: isEnglish ? 'PLC-based automation reduces labor and improves consistency' : 'Автоматизація на основі ПЛК зменшує трудомісткість та покращує послідовність',
              },
              {
                title: isEnglish ? 'Modular Scalability' : 'Модульна масштабованість',
                description: isEnglish ? 'Design for future expansion and capacity increases' : 'Проектування для майбутнього розширення та збільшення потужності',
              },
              {
                title: isEnglish ? 'Compliance-ready Design' : 'Дизайн готовий до відповідності',
                description: isEnglish ? 'Meet current and anticipated regulatory requirements' : 'Відповідність поточним та очікуваним нормативним вимогам',
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
            <Droplets className="w-24 h-24" />
          </div>
          <div className="absolute bottom-10 right-10 text-white/10">
            <Filter className="w-32 h-32" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isEnglish ? 'Ready to Design Your Water Treatment System?' : 'Готові спроектувати вашу систему очищення води?'}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {isEnglish
                ? 'Contact us today for a consultation. Let\'s discuss your water quality challenges and design the optimal treatment solution.'
                : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші виклики якості води та спроектуємо оптимальне рішення очищення.'}
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
