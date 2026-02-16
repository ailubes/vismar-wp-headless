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
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  Users
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
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Hero stats
  const heroStats = [
    { icon: Award, value: '15+', label: { en: 'Years Experience', uk: 'Років досвіду' } },
    { icon: Globe, value: '99%', label: { en: 'Water Reuse', uk: 'Повторне використання води' } },
    { icon: Users, value: '50+', label: { en: 'RAS Projects', uk: 'Проектів RAS' } },
    { icon: Zap, value: '50%', label: { en: 'Cost Reduction', uk: 'Зниження витрат' } }
  ];

  // Key benefits
  const benefits = [
    {
      icon: Droplets,
      title: { en: 'Water Conservation', uk: 'Економія води' },
      description: { en: '95-99% water reuse vs. traditional systems', uk: 'Повторне використання 95-99% води проти традиційних систем' }
    },
    {
      icon: Thermometer,
      title: { en: 'Year-Round Production', uk: 'Цілорічне виробництво' },
      description: { en: 'Complete environmental control, independent of climate', uk: 'Повний контроль навколишнього середовища, незалежно від клімату' }
    },
    {
      icon: Shield,
      title: { en: 'Biosecurity', uk: 'Біобезпека' },
      description: { en: 'Isolated systems prevent disease and pathogen entry', uk: 'Ізольовані системи запобігають захворюванням та проникненню патогенів' }
    },
    {
      icon: Building2,
      title: { en: 'Location Flexibility', uk: 'Гнучкість розташування' },
      description: { en: 'Build near markets, reduce transportation costs', uk: 'Будуйте поблизу ринків, знижуйте транспортні витрати' }
    }
  ];

  // Services
  const services = [
    {
      icon: FileText,
      title: { en: 'System Design & Engineering', uk: 'Проектування та інжиніринг систем' },
      description: { en: 'Complete system layout, component sizing, hydraulic calculations, and flow optimization for maximum efficiency.', uk: 'Повна компоновка системи, розрахунок компонентів, гідравлічні розрахунки та оптимізація потоку для максимальної ефективності.' }
    },
    {
      icon: Settings,
      title: { en: 'Equipment Specification', uk: 'Специфікація обладнання' },
      description: { en: 'Detailed equipment selection including filtration, aeration, monitoring systems, and backup redundancy.', uk: 'Детальний підбір обладнання, включаючи фільтрацію, аерацію, системи моніторингу та резервне дублювання.' }
    },
    {
      icon: Wrench,
      title: { en: 'Implementation Support', uk: 'Підтримка впровадження' },
      description: { en: 'Installation guidance, commissioning assistance, operator training, and ongoing technical support.', uk: 'Керівництво встановленням, допомога з введенням в експлуатацію, навчання операторів та постійна технічна підтримка.' }
    }
  ];

  // Key components
  const components = [
    { icon: Filter, title: { en: 'Mechanical Filtration', uk: 'Механічна фільтрація' }, description: { en: 'Drum filters, sedimentation tanks, solids removal', uk: 'Барабанні фільтри, відстійники, видалення твердих речовин' } },
    { icon: Waves, title: { en: 'Biological Filtration', uk: 'Біологічна фільтрація' }, description: { en: 'Biofilters, moving bed bioreactors (MBBR)', uk: 'Біофільтри, біореактори з рухомим шаром (MBBR)' } },
    { icon: Wind, title: { en: 'Aeration & Oxygenation', uk: 'Аерація та оксигенація' }, description: { en: 'Oxygen cones, diffusers, aeration systems', uk: 'Кисневі конуси, дифузори, системи аерації' } },
    { icon: Gauge, title: { en: 'Water Quality Monitoring', uk: 'Моніторинг якості води' }, description: { en: 'Sensors, automation, real-time monitoring', uk: 'Датчики, автоматизація, моніторинг в реальному часі' } },
    { icon: Zap, title: { en: 'UV Sterilization & Ozonation', uk: 'УФ-стерилізація та озонування' }, description: { en: 'Pathogen control, water disinfection', uk: 'Контроль патогенів, дезінфекція води' } },
    { icon: Thermometer, title: { en: 'Temperature Control', uk: 'Контроль температури' }, description: { en: 'Heat exchangers, chillers, heating systems', uk: 'Теплообмінники, чілери, системи опалення' } }
  ];

  // Process steps
  const processSteps = [
    { number: '01', title: { en: 'Consultation', uk: 'Консультація' }, description: { en: 'Understanding your species, production goals, and site conditions', uk: 'Розуміння ваших видів, цілей виробництва та умов ділянки' } },
    { number: '02', title: { en: 'System Design', uk: 'Проектування' }, description: { en: 'Hydraulic modeling, bioload calculations, component sizing', uk: 'Гідравлічне моделювання, розрахунки біонавантаження' } },
    { number: '03', title: { en: 'Equipment Selection', uk: 'Підбір обладнання' }, description: { en: 'Detailed specifications, vendor selection, cost estimation', uk: 'Детальні специфікації, вибір постачальників, кошторис' } },
    { number: '04', title: { en: 'Implementation', uk: 'Впровадження' }, description: { en: 'Installation oversight, system startup, operator training', uk: 'Нагляд за встановленням, запуск системи, навчання' } }
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Droplets className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Waves className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Filter className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Gauge className="w-14 h-14 text-[#42c997]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{isEnglish ? 'Home' : 'Головна'}</Link>
              <span>/</span>
              <Link href={`/${locale}/services`} className="hover:text-white transition-colors">{isEnglish ? 'Services' : 'Послуги'}</Link>
              <span>/</span>
              <span className="text-white">{isEnglish ? 'RAS Systems' : 'Системи RAS'}</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {isEnglish ? 'Recirculating Aquaculture Systems' : 'Рециркуляційні системи аквакультури'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {isEnglish ? (
                <>RAS Systems{' '}<span className="text-[#42c997]">Design & Engineering</span></>
              ) : (
                <>Проектування та{' '}<span className="text-[#42c997]">інжиніринг систем RAS</span></>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {isEnglish
                ? 'Complete recirculating aquaculture systems for sustainable, high-density fish production. AI-accelerated design with 50% lower engineering costs.'
                : 'Повні рециркуляційні системи аквакультури для сталого виробництва риби високої щільності. AI-прискорене проектування зі зниженням витрат на 50%.'}
            </p>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {heroStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                    <StatIcon className="w-6 h-6 md:w-8 md:h-8 text-[#42c997] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">{isEnglish ? stat.label.en : stat.label.uk}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25">
                {isEnglish ? 'Start Your RAS Project' : 'Розпочати проект RAS'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={`/${locale}/projects`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm">
                {isEnglish ? 'View RAS Projects' : 'Переглянути проекти RAS'}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose RAS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Why RAS Technology' : 'Чому технологія RAS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Benefits of Recirculating Systems' : 'Переваги рециркуляційних систем'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {isEnglish
                ? 'RAS technology enables sustainable, high-density fish production with minimal environmental impact.'
                : 'Технологія RAS забезпечує стале виробництво риби високої щільності з мінімальним впливом на довкілля.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 flex items-center justify-center">
                    <BenefitIcon className="w-8 h-8 text-[#35a87a]" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{isEnglish ? benefit.title.en : benefit.title.uk}</h3>
                  <p className="text-neutral-600 text-sm">{isEnglish ? benefit.description.en : benefit.description.uk}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our RAS Services */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Our Services' : 'Наші послуги'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Complete RAS Solutions' : 'Комплексні рішення RAS'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-[#42c997]/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#42c997]/15 to-[#00A8B5]/10 flex items-center justify-center group-hover:from-[#42c997]/25 group-hover:to-[#00A8B5]/15 transition-all duration-300">
                    <ServiceIcon className="w-7 h-7 md:w-8 md:h-8 text-[#35a87a]" />
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#35a87a] transition-colors duration-300">
                    {isEnglish ? service.title.en : service.title.uk}
                  </h3>
                  <p className="relative z-10 text-neutral-600 leading-relaxed">
                    {isEnglish ? service.description.en : service.description.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'System Components' : 'Компоненти системи'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Key RAS Components We Design' : 'Ключові компоненти RAS'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => {
              const ComponentIcon = component.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-neutral-200 hover:border-[#42c997]/30 hover:shadow-md transition-all duration-300 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1B4B63]/10 to-[#00A8B5]/10 flex items-center justify-center flex-shrink-0">
                    <ComponentIcon className="w-6 h-6 text-[#1B4B63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{isEnglish ? component.title.en : component.title.uk}</h4>
                    <p className="text-sm text-neutral-600">{isEnglish ? component.description.en : component.description.uk}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Our Process' : 'Наш процес'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'How We Work' : 'Як ми працюємо'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#42c997]/20 via-[#42c997] to-[#42c997]/20" />
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a2540] to-[#1B4B63] flex items-center justify-center text-xl md:text-2xl font-bold text-[#42c997] border-4 border-white shadow-lg relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">{isEnglish ? step.title.en : step.title.uk}</h3>
                  <p className="text-sm md:text-base text-neutral-600">{isEnglish ? step.description.en : step.description.uk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {isEnglish ? 'Ready to Design Your RAS System?' : 'Готові спроектувати вашу систему RAS?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {isEnglish
                ? 'Contact us today for a consultation. Let\'s discuss your aquaculture goals and design the perfect RAS solution.'
                : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші цілі аквакультури та спроектуємо ідеальне рішення RAS.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25">
                {isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={`/${locale}/services`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm">
                {isEnglish ? 'All Services' : 'Всі послуги'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
