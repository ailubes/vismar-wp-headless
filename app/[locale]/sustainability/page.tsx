import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, Zap, Recycle, Leaf, ArrowRight, Sun, Wind, TreePine, Fish, Target, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { StatCard } from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Sustainable Aquaculture Engineering - 95% Water Savings & Zero Waste'
      : 'Екологічний аквакультурний інжиніринг - 95% економії води та нуль відходів',
    description: locale === 'en'
      ? '95% water savings through RAS technology, 40% energy reduction, and zero-waste designs. Building environmentally responsible aquaculture facilities for a sustainable future.'
      : '95% економії води через RAS-технології, 40% зниження енергоспоживання та безвідходний дизайн. Будуємо екологічно відповідальні аквакультурні об\'єкти.',
  };
}

export default async function SustainabilityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {isEnglish ? 'Our Impact' : 'Наш вплив'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isEnglish
                  ? 'Sustainable Aquaculture Engineering'
                  : 'Екологічний аквакультурний інжиніринг'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {isEnglish
                  ? 'Engineering environmentally responsible aquaculture systems that conserve resources, minimize waste, and protect our planet for future generations.'
                  : 'Розробка екологічно відповідальних аквакультурних систем, що зберігають ресурси, мінімізують відходи та захищають нашу планету для майбутніх поколінь.'}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {isEnglish ? 'Design Sustainable Facility' : 'Спроектувати екологічний об\'єкт'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'Sustainability is not an add-on—it\'s fundamental to every aquaculture system we design. At Vismar Aqua, we believe that environmental responsibility and profitability go hand in hand. Our engineering solutions prioritize resource efficiency, waste minimization, and ecological harmony.'
                    : 'Екологічність - це не доповнення, а основа кожної аквакультурної системи, яку ми проектуємо. У Vismar Aqua ми віримо, що екологічна відповідальність та прибутковість йдуть пліч-о-пліч. Наші інженерні рішення пріоритизують ефективність ресурсів, мінімізацію відходів та екологічну гармонію.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'Through advanced Recirculating Aquaculture Systems (RAS), we achieve 95-99% water recirculation, dramatically reducing freshwater consumption. Our energy-optimized designs cut power usage by 40% compared to conventional systems. We implement circular economy principles, turning waste into valuable by-products like organic fertilizer.'
                    : 'За допомогою передових рециркуляційних аквакультурних систем (RAS) ми досягаємо 95-99% рециркуляції води, drastично знижуючи споживання прісної води. Наші енергооптимізовані проекти скорочують споживання електроенергії на 40% порівняно з традиційними системами. Ми впроваджуємо принципи циркулярної економіки, перетворюючи відходи на цінні побічні продукти, як органічне добриво.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {isEnglish
                    ? 'The future of aquaculture is green, and we\'re engineering it today. From solar-powered operations to carbon-neutral facilities, we\'re committed to building systems that produce premium seafood while protecting the environment that makes it all possible.'
                    : 'Майбутнє аквакультури - зелене, і ми розробляємо його сьогодні. Від операцій на сонячній енергії до вуглецево-нейтральних об\'єктів - ми віддані створенню систем, що виробляють преміум-морепродукти, захищаючи навколишнє середовище.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Key Initiatives */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Sustainability Initiatives' : 'Екологічні ініціативи'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Four pillars of environmental responsibility in aquaculture design'
                  : 'Чотири стовпи екологічної відповідальності в аквакультурному дизайні'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Water Conservation' : 'Збереження води'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Our RAS designs recirculate 95-99% of water through advanced biological and mechanical filtration. This means producing the same amount of fish with 100 times less freshwater than traditional pond farming—critical for water-scarce regions and reducing environmental impact.'
                        : 'Наші RAS-системи рециркулюють 95-99% води через передову біологічну та механічну фільтрацію. Це означає виробництво тієї ж кількості риби зі 100 разів меншим споживанням прісної води, ніж традиційне ставкове рибництво.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Droplets className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? '95-99% water recirculation' : '95-99% рециркуляція води'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Droplets className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Minimal freshwater makeup' : 'Мінімальне додавання прісної води'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Droplets className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Zero wastewater discharge' : 'Нуль скидів стічних вод'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-lg">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Energy Efficiency' : 'Енергоефективність'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Through optimized pumping systems, variable frequency drives, heat recovery, and renewable energy integration, we reduce operational energy costs by up to 40%. Solar panels, wind turbines, and biogas generation transform facilities into partially or fully energy-independent operations.'
                        : 'Через оптимізовані системи насосів, частотні перетворювачі, рекуперацію тепла та інтеграцію відновлюваної енергії ми знижуємо операційні енергетичні витрати до 40%. Сонячні панелі, вітрові турбіни та біогаз перетворюють об\'єкти на частково або повністю енергонезалежні.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Sun className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Solar energy integration' : 'Інтеграція сонячної енергії'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Optimized pump efficiency' : 'Оптимізована ефективність насосів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Recycle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Heat recovery systems' : 'Системи рекуперації тепла'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg">
                    <Recycle className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Waste Minimization' : 'Мінімізація відходів'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'We design zero-waste systems where fish waste becomes organic fertilizer, excess biomass feeds biogas digesters, and processing by-products are used for animal feed or composting. Nothing is wasted—everything has value in a circular economy approach to aquaculture.'
                        : 'Ми проектуємо безвідходні системи, де рибні відходи стають органічним добривом, надлишкова біомаса живить біогазові установки, а побічні продукти переробки використовуються для корму тварин чи компостування. Нічого не марнується - все має цінність.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <TreePine className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Fish waste to fertilizer' : 'Рибні відходи на добриво'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Recycle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Biofloc technology' : 'Біофлок-технологія'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Leaf className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Circular economy design' : 'Дизайн циркулярної економіки'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Sustainable Materials' : 'Екологічні матеріали'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'We specify eco-friendly, durable materials that minimize environmental impact throughout their lifecycle. From recyclable plastics to sustainably-sourced building materials, every component is chosen for longevity and environmental compatibility. Minimal use of chemicals and preference for natural biofilters further reduce ecological footprint.'
                        : 'Ми вказуємо екологічні, довговічні матеріали, що мінімізують вплив на навколишнє середовище протягом їхнього життєвого циклу. Від перероблюваного пластику до екологічно джерельних будівельних матеріалів - кожен компонент обирається для довговічності та екологічної сумісності.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Recycle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Recyclable components' : 'Перероблювані компоненти'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Leaf className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Low-chemical biofilters' : 'Низькохімічні біофільтри'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TreePine className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Sustainable sourcing' : 'Екологічні джерела'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Impact Metrics */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Environmental Impact' : 'Екологічний вплив'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Measurable environmental benefits from our sustainable engineering approach'
                  : 'Вимірні екологічні переваги нашого екологічного інженерного підходу'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <StatCard
                value={95}
                suffix="%"
                label={isEnglish ? 'Water Savings' : 'Економія води'}
                description={isEnglish ? 'Through RAS recirculation' : 'Через RAS-рециркуляцію'}
                icon={<Droplets className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <StatCard
                value={40}
                suffix="%"
                label={isEnglish ? 'Energy Reduction' : 'Зниження енергії'}
                description={isEnglish ? 'Via optimization & renewables' : 'Через оптимізацію та відновлювані джерела'}
                icon={<Zap className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StatCard
                value={100}
                suffix="%"
                label={isEnglish ? 'Zero Waste Goal' : 'Мета нуль відходів'}
                description={isEnglish ? 'Circular economy designs' : 'Проекти циркулярної економіки'}
                icon={<Recycle className="w-12 h-12" />}
              />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Real-World Examples */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Sustainability in Practice' : 'Екологічність на практиці'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Real-world examples of our environmental commitment'
                  : 'Реальні приклади нашої екологічної відповідальності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Solar-Powered RAS' : 'RAS на сонячній енергії'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'We design RAS facilities with integrated solar arrays that provide 60-80% of daytime power needs. Battery storage ensures 24/7 operation. The result: dramatically lower operating costs and a near-zero carbon footprint for fish production.'
                      : 'Ми проектуємо RAS-об\'єкти з інтегрованими сонячними панелями, що забезпечують 60-80% денних потреб в енергії. Акумулятори гарантують 24/7 роботу. Результат: різко знижені операційні витрати та майже нульовий вуглецевий слід.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TreePine className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Fish Waste to Fertilizer' : 'Відходи риби на добриво'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Fish waste solids are collected, composted, and sold as premium organic fertilizer. What was once a disposal problem becomes a revenue stream. Farmers pay premium prices for this nitrogen-rich, sustainable fertilizer that improves soil health without chemicals.'
                      : 'Тверді відходи риби збираються, компостуються та продаються як преміум органічне добриво. Те, що було проблемою утилізації, стає джерелом доходу. Фермери платять преміум-ціни за це багате азотом екологічне добриво.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fish className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Biofloc Systems' : 'Біофлок-системи'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Biofloc technology creates beneficial bacterial communities that convert waste into protein-rich food for fish. This reduces feed costs by up to 25%, eliminates the need for water changes, and creates a healthier growing environment—all while minimizing environmental impact.'
                      : 'Біофлок-технологія створює корисні бактеріальні спільноти, що перетворюють відходи на багату білком їжу для риби. Це знижує витрати на корм до 25%, усуває потребу в зміні води та створює здоровіше середовище.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Future Goals */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Our Sustainability Roadmap' : 'Наша екологічна дорожня карта'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Future environmental goals and initiatives we\'re working toward'
                  : 'Майбутні екологічні цілі та ініціативи, над якими ми працюємо'}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Carbon-Neutral Facilities' : 'Вуглецево-нейтральні об\'єкти'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'By 2026, we aim to design all new facilities as carbon-neutral operations. This includes 100% renewable energy, carbon offsetting through reforestation partnerships, and lifecycle analysis of all materials. Clients will be able to market their fish as truly climate-neutral protein.'
                          : 'До 2026 року ми плануємо проектувати всі нові об\'єкти як вуглецево-нейтральні операції. Це включає 100% відновлювану енергію, компенсацію вуглецю через партнерства з лісовідновлення та аналіз життєвого циклу всіх матеріалів.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex-shrink-0">
                      <Wind className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Renewable Energy Integration' : 'Інтеграція відновлюваної енергії'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Expanding beyond solar to include wind power, biogas from waste, and geothermal heating/cooling where applicable. Our goal: 80% renewable energy for all facilities by 2027. This transforms aquaculture from an energy consumer to a potential net energy producer.'
                          : 'Розширення за межі сонячної енергії для включення вітрової енергії, біогазу з відходів та геотермального опалення/охолодження. Наша ціль: 80% відновлюваної енергії для всіх об\'єктів до 2027 року.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-lg flex-shrink-0">
                      <Recycle className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Circular Aquaculture' : 'Циркулярна аквакультура'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Developing fully integrated systems where fish farming, hydroponics, and energy production work in symbiosis. Fish waste feeds plants, plant roots filter water, solar provides power, and biogas from waste generates heat. A closed-loop ecosystem that produces food, energy, and zero waste.'
                          : 'Розробка повністю інтегрованих систем, де рибництво, гідропоніка та виробництво енергії працюють у симбіозі. Відходи риби живлять рослини, корені рослин фільтрують воду, сонце забезпечує енергію, а біогаз генерує тепло.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isEnglish
                  ? 'Ready to Build Sustainably?'
                  : 'Готові будувати екологічно?'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isEnglish
                  ? 'Let\'s design an aquaculture facility that\'s profitable for you and responsible for the planet. Sustainable aquaculture is the future—start building it today.'
                  : 'Давайте спроектуємо аквакультурний об\'єкт, що прибутковий для вас і відповідальний для планети. Екологічна аквакультура - це майбутнє. Почніть будувати його сьогодні.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                    {isEnglish ? 'Start Sustainable Project' : 'Почати екопроект'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/services`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-primary"
                  >
                    {isEnglish ? 'View Our Services' : 'Переглянути послуги'}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
