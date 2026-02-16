import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Leaf, Droplets, Recycle, Wind, Sun, TreePine, Fish, CircleDot, Target, Award, ArrowRight, Sparkles, Heart, Globe, TrendingUp, Zap } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Sustainability & Environmental Responsibility | Vismar Aqua'
      : 'Сталість та екологічна відповідальність | Vismar Aqua',
    description: locale === 'en'
      ? 'Leading sustainable aquaculture through water conservation, renewable energy, zero-waste systems, and environmental stewardship.'
      : 'Лідери сталої аквакультури через збереження води, відновлювальну енергію, безвідходні системи та екологічне управління.',
  };
}

export default async function SustainabilityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Hero stats
  const heroStats = [
    {
      icon: Droplets,
      value: '95%',
      label: { en: 'Water Recycled', uk: 'Переробки води' }
    },
    {
      icon: Sun,
      value: '100%',
      label: { en: 'Renewable Energy', uk: 'Відновлювана енергія' }
    },
    {
      icon: Recycle,
      value: 'Zero',
      label: { en: 'Waste to Ocean', uk: 'Відходів в океан' }
    },
    {
      icon: Award,
      value: '30+',
      label: { en: 'Green Certifications', uk: 'Екосертифікатів' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background with green tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#4ECDC4]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating sustainability icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Leaf className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <TreePine className="w-16 h-16 text-[#4ECDC4]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Droplets className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Recycle className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Sun className="w-10 h-10 text-[#4ECDC4]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#4ECDC4]" />
              <span className="text-sm font-medium text-white/90">
                {isEnglish ? 'Environmental Leadership' : 'Екологічне лідерство'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {isEnglish ? (
                <>
                  Sustainable{' '}
                  <span className="text-[#4ECDC4]">Aquaculture Solutions</span>
                </>
              ) : (
                <>
                  Сталі рішення{' '}
                  <span className="text-[#4ECDC4]">аквакультури</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {isEnglish
                ? 'Building the future of aquaculture through environmental stewardship, water conservation, renewable energy integration, and zero-waste circular systems. Our commitment to sustainability protects our planet while ensuring profitable operations.'
                : 'Будуємо майбутнє аквакультури через екологічне управління, збереження води, інтеграцію відновлювальної енергії та безвідходні циркулярні системи. Наша відданість сталості захищає планету та забезпечує прибутковість.'}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {isEnglish ? 'Go Green with Us' : 'Будьте екологічними з нами'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'View Eco Projects' : 'Переглянути екопроекти'}
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
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
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

      {/* Why Sustainability */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#4ECDC4] uppercase tracking-wider mb-3">
              {isEnglish ? 'Our Commitment' : 'Наша відданість'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Sustainability at Our Core' : 'Сталість в основі'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {isEnglish
                ? 'Environmental responsibility isn\'t an add-on—it\'s the foundation of every system we design.'
                : 'Екологічна відповідальність - не додаток, а основа кожної системи, яку ми проектуємо.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: { en: 'Planet First', uk: 'Планета на першому місці' },
                description: { en: 'Every design decision prioritizes environmental impact. We measure success not just in production, but in ecosystem health and resource preservation.', uk: 'Кожне проектне рішення пріоритизує вплив на довкілля. Успіх вимірюємо не лише продуктивністю, а здоров\'ям екосистеми.' }
              },
              {
                icon: Globe,
                title: { en: 'Circular Economy', uk: 'Циркулярна економіка' },
                description: { en: 'Zero-waste systems where byproducts become resources. Water is endlessly recycled, organic waste becomes fertilizer, and energy comes from renewables.', uk: 'Безвідходні системи, де побічні продукти стають ресурсами. Вода переробляється, органічні відходи - добриво, енергія - відновлювана.' }
              },
              {
                icon: Target,
                title: { en: 'Future-Proof', uk: 'Стійкість до майбутнього' },
                description: { en: 'Designs that adapt to climate change, comply with evolving regulations, and meet tomorrow\'s sustainability standards today.', uk: 'Проекти адаптуються до кліматичних змін, відповідають регуляціям і відповідають майбутнім стандартам сталості.' }
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#4ECDC4]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#4ECDC4]/20 to-[#42c997]/10 flex items-center justify-center">
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

      {/* Sustainability Pillars */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#4ECDC4] uppercase tracking-wider mb-3">
              {isEnglish ? 'Our Approach' : 'Наш підхід'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Four Pillars of Sustainability' : 'Чотири стовпи сталості'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {isEnglish
                ? 'Integrated environmental strategies that reduce impact while improving profitability.'
                : 'Інтегровані екологічні стратегії, що зменшують вплив та підвищують прибутковість.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Droplets,
                number: '01',
                title: { en: 'Water Conservation', uk: 'Збереження води' },
                description: { en: 'RAS technology recycles 95-99% of water, reducing freshwater consumption by orders of magnitude. Advanced filtration and monitoring ensure pristine water quality with minimal environmental discharge.', uk: 'РАС-технологія переробляє 95-99% води, зменшуючи споживання прісної води на порядки. Передова фільтрація та моніторинг забезпечують якість при мінімальних скидах.' },
                features: [
                  { en: '95-99% water recycling', uk: '95-99% переробки води' },
                  { en: 'Zero ocean discharge', uk: 'Нульовий скид в океан' },
                  { en: 'Closed-loop systems', uk: 'Замкнені системи' }
                ]
              },
              {
                icon: Sun,
                number: '02',
                title: { en: 'Renewable Energy', uk: 'Відновлювана енергія' },
                description: { en: 'Solar, wind, and biogas integration powers facilities with 100% renewable electricity. Energy-efficient designs and smart automation minimize consumption while maintaining optimal conditions.', uk: 'Інтеграція сонця, вітру та біогазу забезпечує 100% відновлювальну електрику. Енергоефективні проекти та автоматизація мінімізують споживання.' },
                features: [
                  { en: 'Solar & wind power', uk: 'Сонячна та вітрова енергія' },
                  { en: 'Biogas from waste', uk: 'Біогаз з відходів' },
                  { en: 'Smart energy management', uk: 'Розумне управління енергією' }
                ]
              },
              {
                icon: Recycle,
                number: '03',
                title: { en: 'Circular Economy', uk: 'Циркулярна економіка' },
                description: { en: 'Zero-waste philosophy where every byproduct has value. Solid waste becomes organic fertilizer, CO2 feeds algae production, and heat is recovered for reuse throughout the facility.', uk: 'Філософія нульових відходів, де кожен побічний продукт має цінність. Тверді відходи стають добривом, CO2 живить водорості, тепло повторно використовується.' },
                features: [
                  { en: 'Waste-to-fertilizer conversion', uk: 'Відходи в добриво' },
                  { en: 'CO2 capture & reuse', uk: 'Уловлення та повторне використання CO2' },
                  { en: 'Heat recovery systems', uk: 'Системи рекуперації тепла' }
                ]
              },
              {
                icon: Fish,
                number: '04',
                title: { en: 'Ecosystem Protection', uk: 'Захист екосистеми' },
                description: { en: 'Land-based systems eliminate ocean ecosystem disruption. No wild fish depletion, no habitat destruction, no genetic pollution—just sustainable protein production that heals rather than harms.', uk: 'Наземні системи усувають порушення океанічних екосистем. Немає виснаження дикої риби, руйнування середовищ, генетичного забруднення.' },
                features: [
                  { en: 'No ocean impact', uk: 'Без впливу на океан' },
                  { en: 'Wild stock preservation', uk: 'Збереження диких запасів' },
                  { en: 'Habitat protection', uk: 'Захист середовищ' }
                ]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#4ECDC4]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ECDC4]/5"
                >
                  <div className="absolute top-4 right-4 text-5xl font-bold text-neutral-100 group-hover:text-[#4ECDC4]/10 transition-colors duration-300">
                    {item.number}
                  </div>

                  <div className="relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#4ECDC4]/15 to-[#42c997]/10 flex items-center justify-center group-hover:from-[#4ECDC4]/25 group-hover:to-[#42c997]/15 transition-all duration-300">
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
                        <Leaf className="w-4 h-4 text-[#4ECDC4] flex-shrink-0" />
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

      {/* Impact Metrics */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#4ECDC4] uppercase tracking-wider mb-3">
              {isEnglish ? 'Measurable Impact' : 'Вимірний вплив'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {isEnglish ? 'Our Environmental Footprint' : 'Наш екологічний слід'}
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: { en: 'Carbon Neutral', uk: 'Вуглецева нейтральність' }, desc: { en: 'Net-zero emissions through renewables', uk: 'Нульові викиди через відновлювальність' } },
                { step: '02', title: { en: 'Water Positive', uk: 'Водна позитивність' }, desc: { en: 'Return more water than we consume', uk: 'Повертаємо більше води ніж споживаємо' } },
                { step: '03', title: { en: 'Waste Negative', uk: 'Негативні відходи' }, desc: { en: 'Turn waste into valuable products', uk: 'Перетворюємо відходи на цінні продукти' } }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0a2540] to-[#1B4B63] flex items-center justify-center text-xl md:text-2xl font-bold text-[#4ECDC4] border-4 border-white shadow-lg">
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4ECDC4]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#42c997]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {isEnglish
                ? 'Build a Sustainable Future Together'
                : 'Будуймо стале майбутнє разом'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {isEnglish
                ? 'Partner with us to create aquaculture systems that protect the planet, preserve resources, and ensure profitability for generations.'
                : 'Співпрацюйте з нами для створення систем аквакультури, що захищають планету, зберігають ресурси та забезпечують прибутковість для поколінь.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4ECDC4] hover:bg-[#42c997] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#4ECDC4]/25"
              >
                {isEnglish ? 'Start Sustainable' : 'Почати екологічно'}
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
