import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, Globe, Award, ArrowRight, CheckCircle, DollarSign, Zap, Rocket, Shield, Target, Lightbulb, Heart, TrendingUp, BookOpen, Sparkles, Clock, MapPin } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'About Vismar Aqua - Engineering Excellence in Aquaculture Since 2007'
      : 'Про Vismar Aqua - Інженерна досконалість в аквакультурі з 2007 року',
    description: locale === 'en'
      ? '15+ years of aquaculture engineering excellence. World-class expertise at 50% lower cost. War-proven reliability. Discover our story, team, and commitment to your success.'
      : '15+ років інженерної досконалості в аквакультурі. Світовий досвід за 50% нижчою ціною. Перевірена надійність. Дізнайтеся нашу історію та прихильність вашому успіху.',
    keywords: locale === 'en'
      ? 'aquaculture engineering, RAS systems, Vismar Aqua, fish farming solutions, ISO 9001, aquaculture company'
      : 'інженерія аквакультури, системи RAS, Vismar Aqua, рішення для рибництва, ISO 9001',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');

  // Hero stats
  const heroStats = [
    {
      icon: Building2,
      value: '15+',
      label: { en: 'Years Experience', uk: 'Років досвіду' }
    },
    {
      icon: Award,
      value: '50+',
      label: { en: 'Projects Completed', uk: 'Завершених проектів' }
    },
    {
      icon: Globe,
      value: '20+',
      label: { en: 'Countries Served', uk: 'Країн обслуговування' }
    },
    {
      icon: Users,
      value: '100%',
      label: { en: 'Client Satisfaction', uk: 'Задоволеність клієнтів' }
    }
  ];

  // Core values
  const coreValues = [
    {
      icon: Target,
      title: { en: 'Excellence', uk: 'Досконалість' },
      description: { en: 'Uncompromising quality in every project we deliver', uk: 'Безкомпромісна якість у кожному проекті' },
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: { en: 'Innovation', uk: 'Інновації' },
      description: { en: 'Leveraging AI and cutting-edge technology', uk: 'Використання ШІ та передових технологій' },
      color: 'purple'
    },
    {
      icon: Shield,
      title: { en: 'Reliability', uk: 'Надійність' },
      description: { en: 'War-proven operational resilience', uk: 'Перевірена в умовах війни стійкість' },
      color: 'green'
    },
    {
      icon: Heart,
      title: { en: 'Client Success', uk: 'Успіх клієнта' },
      description: { en: 'Your profitability is our success metric', uk: 'Ваша прибутковість – наш показник успіху' },
      color: 'amber'
    }
  ];

  // Advantages
  const advantages = [
    {
      icon: DollarSign,
      title: { en: '50% Lower Costs', uk: 'На 50% нижчі витрати' },
      subtitle: { en: 'Premium Quality, Smart Pricing', uk: 'Преміум якість, розумні ціни' },
      description: {
        en: 'World-class aquaculture engineering at half the price of Western European firms. Lower operational costs mean exceptional value—without compromising on quality, experience, or results.',
        uk: 'Світовий рівень інжинірингу аквакультури за половину ціни західноєвропейських фірм. Нижчі операційні витрати означають виняткову цінність – без компромісів у якості.'
      },
      badge: { en: '↓ 50% vs. EU competitors', uk: '↓ 50% порівняно з ЄС' },
      color: 'blue'
    },
    {
      icon: Zap,
      title: { en: '9-9, Six Days a Week', uk: '9-9, шість днів на тиждень' },
      subtitle: { en: 'Your Timezone, Your Schedule', uk: 'Ваш часовий пояс, ваш графік' },
      description: {
        en: 'While Western firms close at 5 PM and disappear on weekends, our team operates 9-9, six days a week. Same-day responses, flexible meetings, and genuine commitment to your timeline.',
        uk: 'Поки західні фірми закриваються о 17:00 і зникають на вихідних, наша команда працює 9-9, шість днів на тиждень. Відповіді в той же день, гнучкі зустрічі.'
      },
      badge: { en: '⏱️ <4 hours response time', uk: '⏱️ <4 години час відповіді' },
      color: 'amber'
    },
    {
      icon: Rocket,
      title: { en: 'AI-Accelerated Engineering', uk: 'Інжиніринг з ШІ' },
      subtitle: { en: 'Next-Gen Tools, Faster Delivery', uk: 'Інструменти нового покоління' },
      description: {
        en: 'Latest 3D CAD software, AI-assisted design, real-time cloud collaboration, and automated optimization. We leverage cutting-edge technology to deliver better results faster.',
        uk: 'Найновіше 3D CAD програмне забезпечення, дизайн з допомогою ШІ, хмарна співпраця в реальному часі та автоматизована оптимізація.'
      },
      badge: { en: '🤖 AI-powered design', uk: '🤖 Дизайн на основі ШІ' },
      color: 'purple'
    },
    {
      icon: Shield,
      title: { en: 'War-Proven Reliability', uk: 'Перевірена надійність' },
      subtitle: { en: 'Delivering Under Any Conditions', uk: 'Доставка за будь-яких умов' },
      description: {
        en: "We've delivered projects during air raids, blackouts, and infrastructure attacks. Crisis-tested resilience ensures your project stays on track—no matter what.",
        uk: 'Ми реалізовували проекти під час повітряних тривог, блекаутів та атак на інфраструктуру. Перевірена в кризових умовах стійкість гарантує виконання вашого проекту.'
      },
      badge: { en: '✓ Zero cancellations since 2022', uk: '✓ Нуль скасувань з 2022' },
      color: 'green'
    }
  ];

  // Specializations
  const specializations = [
    {
      title: { en: 'Recirculating Aquaculture Systems (RAS)', uk: 'Рециркуляційні системи аквакультури (РАС)' },
      description: { en: 'Complete design, optimization, and commissioning support for land-based RAS facilities', uk: 'Повне проектування, оптимізація та супровід введення в експлуатацію наземних РАС об\'єктів' }
    },
    {
      title: { en: 'Hybrid Flow-Through Systems (HFTS)', uk: 'Гібридні проточні системи (HFTS)' },
      description: { en: 'Sustainable flow-through designs with biofloc and natural productivity integration', uk: 'Стійкі проточні конструкції з інтеграцією біофлоку та природної продуктивності' }
    },
    {
      title: { en: 'Hatcheries & Nurseries', uk: 'Інкубатори та розплідники' },
      description: { en: 'Specialized breeding and early-stage production facility design', uk: 'Спеціалізоване проектування об\'єктів для розведення та раннього виробництва' }
    },
    {
      title: { en: 'Processing Facilities', uk: 'Переробні підприємства' },
      description: { en: 'Harvest, processing, packaging, and cold storage facility engineering', uk: 'Інжиніринг об\'єктів збору, переробки, пакування та холодильного зберігання' }
    },
    {
      title: { en: 'Digital Solutions', uk: 'Цифрові рішення' },
      description: { en: 'AI-powered monitoring, fish counting, and farm management software', uk: 'Моніторинг на основі ШІ, підрахунок риби та програмне забезпечення для управління фермою' }
    },
    {
      title: { en: 'Equipment Supply', uk: 'Постачання обладнання' },
      description: { en: 'Procurement, specification, and integration of aquaculture equipment', uk: 'Закупівля, специфікація та інтеграція обладнання для аквакультури' }
    }
  ];

  // Commitments
  const commitments = [
    {
      icon: Target,
      title: { en: 'Quality Engineering', uk: 'Якісний інжиніринг' },
      description: { en: 'Every design meets international standards. Every calculation is verified. Every deliverable is complete. We take professional pride in getting it right the first time.', uk: 'Кожен дизайн відповідає міжнародним стандартам. Кожен розрахунок перевірено. Кожен результат є повним. Ми пишаємося тим, що робимо все правильно з першого разу.' },
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: { en: 'Client Success', uk: 'Успіх клієнта' },
      description: { en: "We measure our success by your profitability. Our job isn't just to deliver drawings—it's to help you build a facility that makes money, operates efficiently, and meets your business goals.", uk: 'Ми вимірюємо наш успіх вашою прибутковістю. Наша робота – не просто надати креслення, а допомогти вам побудувати об\'єкт, який приносить прибуток та працює ефективно.' },
      color: 'green'
    },
    {
      icon: Heart,
      title: { en: 'Sustainability', uk: 'Сталий розвиток' },
      description: { en: 'Aquaculture done right can help feed the world sustainably. We design facilities that minimize environmental impact, optimize resource use, and contribute to sustainable food production.', uk: 'Правильна аквакультура може допомогти нагодувати світ екологічно. Ми проектуємо об\'єкти, які мінімізують вплив на довкілля та оптимізують використання ресурсів.' },
      color: 'purple'
    },
    {
      icon: Lightbulb,
      title: { en: 'Innovation', uk: 'Інновації' },
      description: { en: 'The aquaculture industry evolves constantly. We stay at the forefront through continuous learning, technology adoption, and willingness to try new approaches when they serve our clients better.', uk: 'Індустрія аквакультури постійно розвивається. Ми залишаємося на передовій завдяки постійному навчанню та впровадженню нових підходів.' },
      color: 'amber'
    },
    {
      icon: BookOpen,
      title: { en: 'Knowledge Sharing', uk: 'Обмін знаннями' },
      description: { en: 'We believe in educating our clients and the broader industry. Through our blog, open-source tools, and transparent communication, we contribute to raising the bar for aquaculture engineering globally.', uk: 'Ми віримо в освіту наших клієнтів та галузі в цілому. Через наш блог, відкриті інструменти та прозору комунікацію ми підвищуємо стандарти інжинірингу аквакультури.' },
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; iconBg: string; badgeBg: string; badgeText: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-500', badgeBg: 'bg-blue-100', badgeText: 'text-blue-700' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-500', badgeBg: 'bg-amber-100', badgeText: 'text-amber-700' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-500', badgeBg: 'bg-purple-100', badgeText: 'text-purple-700' },
      green: { bg: 'bg-green-50', text: 'text-green-600', iconBg: 'bg-green-500', badgeBg: 'bg-green-100', badgeText: 'text-green-700' },
      red: { bg: 'bg-red-50', text: 'text-red-600', iconBg: 'bg-red-500', badgeBg: 'bg-red-100', badgeText: 'text-red-700' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Building2 className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Users className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Award className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Globe className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Target className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Rocket className="w-10 h-10 text-[#00A8B5]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'en' ? 'Engineering Excellence Since 2007' : 'Інженерна досконалість з 2007 року'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {locale === 'en' ? (
                <>
                  World-Class Expertise,{' '}
                  <span className="text-[#42c997]">Ukrainian Dedication</span>
                </>
              ) : (
                <>
                  Світовий досвід,{' '}
                  <span className="text-[#42c997]">українська відданість</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {locale === 'en'
                ? 'From a small engineering consultancy to a global leader in aquaculture facility design and software development. Over 15 years of delivering excellence, innovation, and unmatched value to clients worldwide.'
                : 'Від невеликої інженерної консалтингової компанії до глобального лідера у проектуванні об\'єктів аквакультури та розробці програмного забезпечення. Понад 15 років досконалості, інновацій та неперевершеної цінності для клієнтів по всьому світу.'}
            </p>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {heroStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <StatIcon className="w-6 h-6 md:w-8 md:h-8 text-[#42c997] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">
                      {locale === 'en' ? stat.label.en : stat.label.uk}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Start Your Project' : 'Розпочати проект'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View Our Projects' : 'Переглянути проекти'}
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

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {locale === 'en' ? 'Our Journey' : 'Наш шлях'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-6">
                {locale === 'en' ? 'The Vismar Story' : 'Історія Vismar'}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                {locale === 'en'
                  ? "Founded in 2007, Vismar Aqua has grown from a small engineering consultancy into a recognized leader in aquaculture facility design and software development. With over 15 years of experience, we've delivered 50+ projects across 20+ countries, helping clients build sustainable, profitable aquaculture operations."
                  : 'Заснована у 2007 році, Vismar Aqua виросла з невеликої інженерної консалтингової компанії у визнаного лідера у проектуванні об\'єктів аквакультури та розробці програмного забезпечення. З понад 15-річним досвідом ми реалізували 50+ проектів у 20+ країнах.'}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {locale === 'en'
                  ? 'Our mission is simple: '
                  : 'Наша місія проста: '}
                <strong className="text-[#35a87a]">
                  {locale === 'en'
                    ? 'Deliver world-class aquaculture engineering at exceptional value'
                    : 'Надавати світовий рівень інжинірингу аквакультури за виняткову цінність'}
                </strong>
                {locale === 'en'
                  ? '. We combine deep technical expertise with modern technology and Ukrainian efficiency to provide services that rival the best European firms—at half the cost.'
                  : '. Ми поєднуємо глибокий технічний досвід з сучасними технологіями та українською ефективністю, надаючи послуги на рівні найкращих європейських фірм – за половину вартості.'}
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {coreValues.map((value, index) => {
                const ValueIcon = value.icon;
                const colors = getColorClasses(value.color);
                return (
                  <div key={index} className={`text-center p-6 ${colors.bg} rounded-xl hover:scale-105 transition-transform duration-300`}>
                    <ValueIcon className={`w-10 h-10 md:w-12 md:h-12 ${colors.text} mx-auto mb-4`} />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {locale === 'en' ? value.title.en : value.title.uk}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {locale === 'en' ? value.description.en : value.description.uk}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Why Choose Us' : 'Чому обирають нас'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Our Advantages' : 'Наші переваги'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'en'
                ? 'What sets us apart in the global aquaculture engineering market'
                : 'Що вирізняє нас на глобальному ринку інжинірингу аквакультури'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => {
              const AdvIcon = advantage.icon;
              const colors = getColorClasses(advantage.color);
              return (
                <div
                  key={index}
                  className={`group p-6 md:p-8 ${colors.bg} rounded-2xl border-2 border-gray-200 hover:border-${advantage.color}-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 mb-6 rounded-xl ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <AdvIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? advantage.title.en : advantage.title.uk}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                    {locale === 'en' ? advantage.subtitle.en : advantage.subtitle.uk}
                  </h4>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {locale === 'en' ? advantage.description.en : advantage.description.uk}
                  </p>
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 ${colors.badgeBg} ${colors.badgeText} text-sm font-semibold rounded-full`}>
                      {locale === 'en' ? advantage.badge.en : advantage.badge.uk}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Specializations Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Expertise' : 'Наша експертиза'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Specializations' : 'Спеціалізації'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'en'
                ? 'Proven track record across the global aquaculture industry'
                : 'Перевірений досвід у глобальній індустрії аквакультури'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-100 hover:border-[#42c997]/30 hover:shadow-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-[#42c997] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {locale === 'en' ? spec.title.en : spec.title.uk}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {locale === 'en' ? spec.description.en : spec.description.uk}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Promise' : 'Наша обіцянка'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Our Commitment' : 'Наші зобов\'язання'}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === 'en'
                ? 'The promises we make to every client, every time'
                : 'Обіцянки, які ми даємо кожному клієнту, кожного разу'}
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {commitments.map((commitment, index) => {
              const CommIcon = commitment.icon;
              const colors = getColorClasses(commitment.color);
              return (
                <div key={index} className={`flex items-start gap-4 md:gap-6 p-6 ${colors.bg} rounded-xl hover:shadow-lg transition-all duration-300`}>
                  <CommIcon className={`w-7 h-7 md:w-8 md:h-8 ${colors.text} mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {locale === 'en' ? commitment.title.en : commitment.title.uk}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {locale === 'en' ? commitment.description.en : commitment.description.uk}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Ready to Start Your Project?'
                : 'Готові розпочати свій проект?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {locale === 'en'
                ? "Let's discuss how we can help you build a successful, sustainable aquaculture operation. Schedule a free consultation today."
                : 'Давайте обговоримо, як ми можемо допомогти вам побудувати успішну, сталу операцію аквакультури. Заплануйте безкоштовну консультацію сьогодні.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Schedule Consultation' : 'Запланувати консультацію'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View Our Projects' : 'Переглянути проекти'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
