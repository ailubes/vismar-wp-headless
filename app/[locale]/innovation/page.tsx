import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Zap, Box, Eye, Cpu, Lightbulb, Rocket, Globe, TrendingUp, BarChart3, Award, ArrowRight, Sparkles, Users, Clock, Target } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Innovation & Research - AI-Powered Aquaculture Engineering | Vismar Aqua'
      : 'Інновації та дослідження - AI-інжиніринг аквакультури | Vismar Aqua',
    description: locale === 'en'
      ? '50% faster engineering through AI integration, advanced 3D modeling, and digital twin technology. Leading aquaculture innovation with cutting-edge R&D.'
      : '50% швидший інжиніринг через інтеграцію AI, передове 3D моделювання та технології цифрових двійників.',
  };
}

export default async function InnovationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Hero stats
  const heroStats = [
    {
      icon: Zap,
      value: '50%',
      label: { en: 'Faster Design', uk: 'Швидше проектування' }
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: { en: 'Cost Reduction', uk: 'Зниження витрат' }
    },
    {
      icon: Brain,
      value: '100+',
      label: { en: 'AI Projects', uk: 'AI-проектів' }
    },
    {
      icon: Award,
      value: '25+',
      label: { en: 'Years R&D', uk: 'Років досліджень' }
    }
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
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating innovation icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Brain className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Rocket className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Box className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Cpu className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Eye className="w-10 h-10 text-[#00A8B5]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {isEnglish ? 'Pioneering the Future' : 'Прокладаємо шлях у майбутнє'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {isEnglish ? (
                <>
                  Innovation Through{' '}
                  <span className="text-[#42c997]">AI & Technology</span>
                </>
              ) : (
                <>
                  Інновації через{' '}
                  <span className="text-[#42c997]">AI та технології</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {isEnglish
                ? 'Leveraging artificial intelligence, advanced 3D modeling, and digital twin technology to deliver faster, smarter, and more cost-effective aquaculture solutions. Our commitment to R&D keeps us at the forefront of industry innovation.'
                : 'Використовуємо штучний інтелект, передове 3D моделювання та технології цифрових двійників для швидших, розумніших та економічніших рішень. Наша відданість НДДКР тримає нас в авангарді інновацій.'}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {isEnglish ? 'Discuss Innovation' : 'Обговорити інновації'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'View Projects' : 'Переглянути проекти'}
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
            {heroStats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                    <StatIcon className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-neutral-600">
                    {isEnglish ? stat.label.en : stat.label.uk}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Innovation Matters */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Why Innovation' : 'Чому інновації'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'The Vismar Innovation Advantage' : 'Інноваційні переваги Vismar'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {isEnglish
                ? 'Cutting-edge technology and relentless R&D commitment deliver measurable benefits to every project.'
                : 'Передові технології та невпинна відданість НДДКР приносять вимірні переваги кожному проекту.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: { en: '50% Faster Delivery', uk: '50% швидша реалізація' },
                description: { en: 'AI-accelerated design workflows and automation cut project timelines in half while maintaining exceptional quality standards.', uk: 'AI-прискорені робочі процеси та автоматизація скорочують терміни проектів вдвічі при збереженні високої якості.' }
              },
              {
                icon: TrendingUp,
                title: { en: '30% Cost Savings', uk: '30% економії' },
                description: { en: 'Advanced optimization, virtual testing, and predictive maintenance reduce both capital and operational expenses significantly.', uk: 'Передова оптимізація, віртуальне тестування та прогнозне обслуговування значно знижують капітальні та операційні витрати.' }
              },
              {
                icon: Target,
                title: { en: 'Future-Proof Solutions', uk: 'Рішення майбутнього' },
                description: { en: 'Continuous R&D ensures our designs incorporate tomorrow\'s technologies today, protecting your investment for decades.', uk: 'Постійні НДДКР гарантують, що наші проекти включають технології завтрашнього дня сьогодні, захищаючи ваші інвестиції на десятиліття.' }
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 flex items-center justify-center">
                    <ItemIcon className="w-8 h-8 text-[#35a87a]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {isEnglish ? item.title.en : item.title.uk}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {isEnglish ? item.description.en : item.description.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Pillars */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Our Technologies' : 'Наші технології'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Four Pillars of Innovation' : 'Чотири стовпи інновацій'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {isEnglish
                ? 'Advanced technologies that power our engineering excellence and accelerate project delivery.'
                : 'Передові технології, що забезпечують інженерну досконалість та прискорюють реалізацію проектів.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Brain,
                number: '01',
                title: { en: 'AI-Accelerated Design', uk: 'AI-прискорений дизайн' },
                description: { en: 'ChatGPT, Claude, and custom AI models power our engineering calculations, system optimization, and documentation generation. AI reduces design time by 50% while exploring more alternatives.', uk: 'ChatGPT, Claude та власні AI-моделі забезпечують інженерні розрахунки, оптимізацію систем та генерацію документації. AI скорочує час проектування на 50%.' },
                features: [
                  { en: 'Automated calculations', uk: 'Автоматизовані розрахунки' },
                  { en: 'Design optimization', uk: 'Оптимізація дизайну' },
                  { en: 'Smart documentation', uk: 'Розумна документація' }
                ]
              },
              {
                icon: Box,
                number: '02',
                title: { en: 'Advanced 3D Modeling', uk: 'Передове 3D моделювання' },
                description: { en: 'State-of-the-art CAD, VR/AR visualization, and CFD analysis ensure optimized designs before construction. Clients virtually walk through facilities and see water flow patterns in real-time.', uk: 'Найсучасніші CAD, VR/AR візуалізація та CFD-аналіз гарантують оптимізацію до будівництва. Клієнти віртуально оглядають об\'єкти та бачать потоки води.' },
                features: [
                  { en: 'VR facility tours', uk: 'VR-огляди об\'єктів' },
                  { en: 'CFD water analysis', uk: 'CFD-аналіз води' },
                  { en: '3D prototyping', uk: '3D-прототипування' }
                ]
              },
              {
                icon: Cpu,
                number: '03',
                title: { en: 'Digital Twin Technology', uk: 'Цифрові двійники' },
                description: { en: 'Virtual facility replicas enable simulation, testing, and predictive maintenance. Digital twins allow virtual commissioning, reducing installation time and predicting maintenance needs before failures.', uk: 'Віртуальні копії об\'єктів забезпечують симуляцію, тестування та прогнозне обслуговування. Скорочують час монтажу та прогнозують потреби в обслуговуванні.' },
                features: [
                  { en: 'Virtual commissioning', uk: 'Віртуальне введення' },
                  { en: 'Predictive maintenance', uk: 'Прогнозне обслуговування' },
                  { en: 'Real-time monitoring', uk: 'Моніторинг реального часу' }
                ]
              },
              {
                icon: Lightbulb,
                number: '04',
                title: { en: 'Continuous R&D', uk: 'Постійні НДДКР' },
                description: { en: 'Heavy investment in research keeps us ahead of trends. We continuously experiment with new approaches, materials, and systems, creating industry innovations rather than following them.', uk: 'Інвестиції в дослідження тримають нас попереду трендів. Постійно експериментуємо з новими підходами, матеріалами та системами, створюючи галузеві інновації.' },
                features: [
                  { en: 'Trend analysis', uk: 'Аналіз трендів' },
                  { en: 'Material testing', uk: 'Тестування матеріалів' },
                  { en: 'System optimization', uk: 'Оптимізація систем' }
                ]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#42c997]/5"
                >
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-[#42c997]/10 transition-colors duration-300">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#42c997]/15 to-[#00A8B5]/10 flex items-center justify-center group-hover:from-[#42c997]/25 group-hover:to-[#00A8B5]/15 transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#35a87a] group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#35a87a] transition-colors duration-300">
                    {isEnglish ? item.title.en : item.title.uk}
                  </h3>

                  <p className="relative z-10 text-neutral-600 mb-6 leading-relaxed">
                    {isEnglish ? item.description.en : item.description.uk}
                  </p>

                  <ul className="relative z-10 space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                        <Zap className="w-4 h-4 text-[#42c997] flex-shrink-0" />
                        <span>{isEnglish ? feature.en : feature.uk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Innovations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {isEnglish ? 'Coming Soon' : 'Скоро'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'The Future of Innovation' : 'Майбутнє інновацій'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: { en: 'IoT Integration', uk: 'Інтеграція IoT' }, desc: { en: 'Smart sensor networks for real-time monitoring', uk: 'Мережі розумних датчиків для моніторингу' } },
                { step: '02', title: { en: 'ML Optimization', uk: 'ML-оптимізація' }, desc: { en: 'Auto-generate optimal layouts for any project', uk: 'Автогенерація оптимальних планів' } },
                { step: '03', title: { en: 'Blockchain Track', uk: 'Блокчейн-відстеження' }, desc: { en: 'Full traceability from egg to consumer', uk: 'Повне відстеження від ікринки до споживача' } }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a2540] to-[#1B4B63] flex items-center justify-center text-xl md:text-2xl font-bold text-[#42c997] border-4 border-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                    {isEnglish ? item.title.en : item.title.uk}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600">
                    {isEnglish ? item.desc.en : item.desc.uk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
              {isEnglish
                ? 'Ready to Experience Next-Gen Engineering?'
                : 'Готові випробувати інжиніринг нового покоління?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {isEnglish
                ? 'Let\'s discuss how our innovative approach can transform your aquaculture project with AI, 3D modeling, and digital twins.'
                : 'Обговоримо, як наш інноваційний підхід може трансформувати ваш проект за допомогою AI, 3D моделювання та цифрових двійників.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-success/25"
              >
                {isEnglish ? 'Start Your Project' : 'Почати проект'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'Explore Services' : 'Переглянути послуги'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
