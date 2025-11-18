import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Lightbulb, Box, TrendingUp, ArrowRight, Zap, Eye, BarChart3, Brain, Rocket, Globe, Users } from 'lucide-react';
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
      ? 'Innovation in Aquaculture Engineering - AI-Powered Design & Technology'
      : 'Інновації в аквакультурному інжинірингу - AI-дизайн та технології',
    description: locale === 'en'
      ? '50% faster engineering through AI integration, advanced 3D modeling, and digital twin technology. Leading aquaculture innovation with cutting-edge R&D and modern tools.'
      : '50% швидший інжиніринг через інтеграцію AI, передове 3D моделювання та технології цифрових двійників. Лідери інновацій в аквакультурі.',
  };
}

export default async function InnovationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {isEnglish ? 'Our Impact' : 'Наш вплив'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isEnglish
                  ? 'Innovation in Aquaculture Engineering'
                  : 'Інновації в аквакультурному інжинірингу'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {isEnglish
                  ? 'Leveraging AI, advanced CAD, and cutting-edge technology to deliver faster, smarter, and more cost-effective aquaculture solutions.'
                  : 'Використання AI, передових CAD-систем та найсучасніших технологій для швидших, розумніших та економічніших рішень в аквакультурі.'}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {isEnglish ? 'Discuss Your Project' : 'Обговорити проект'}
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
                    ? 'At Vismar Aqua, innovation is not just a buzzword—it\'s the foundation of everything we do. Since 2007, we\'ve been at the forefront of aquaculture engineering, constantly adopting new technologies and methodologies to stay ahead of industry trends.'
                    : 'У Vismar Aqua інновації - це не просто гучні слова, а основа всього, що ми робимо. З 2007 року ми в авангарді аквакультурного інжинірингу, постійно впроваджуючи нові технології та методології.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'We integrate artificial intelligence into our design workflows, use advanced 3D modeling and virtual reality for facility visualization, and implement digital twin technology for predictive maintenance. This technological edge allows us to deliver projects 50% faster while reducing costs by 30%.'
                    : 'Ми інтегруємо штучний інтелект у наші робочі процеси, використовуємо передове 3D моделювання та віртуальну реальність для візуалізації об\'єктів, впроваджуємо технологію цифрових двійників для прогнозного обслуговування. Це дозволяє реалізувати проекти на 50% швидше зі зниженням витрат на 30%.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {isEnglish
                    ? 'Our commitment to R&D ensures we\'re not just following trends—we\'re creating them. From AI-assisted engineering calculations to blockchain-enabled traceability systems, we\'re building the future of aquaculture today.'
                    : 'Наша відданість НДДКР гарантує, що ми не просто слідуємо трендам - ми їх створюємо. Від AI-допоміжних інженерних розрахунків до систем відстеження на базі блокчейн - ми будуємо майбутнє аквакультури сьогодні.'}
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
                {isEnglish ? 'Innovation Initiatives' : 'Інноваційні ініціативи'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Four pillars of technological excellence driving our engineering solutions'
                  : 'Чотири стовпи технологічної досконалості наших інженерних рішень'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'AI-Accelerated Design' : 'AI-прискорений дизайн'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'We leverage ChatGPT, Claude, and custom AI models to accelerate engineering calculations, optimize system designs, and generate documentation. Our AI-powered workflows reduce design time by 50% while improving accuracy and exploring more design alternatives.'
                        : 'Ми використовуємо ChatGPT, Claude та власні AI-моделі для прискорення інженерних розрахунків, оптимізації систем та генерації документації. Наші AI-робочі процеси скорочують час проектування на 50% при підвищенні точності.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Automated engineering calculations' : 'Автоматизовані інженерні розрахунки'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'AI-powered design optimization' : 'AI-оптимізація дизайну'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Intelligent documentation generation' : 'Інтелектуальна генерація документації'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                    <Box className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Advanced 3D Modeling' : 'Передове 3D моделювання'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'State-of-the-art CAD systems, VR/AR visualization, and computational fluid dynamics (CFD) analysis ensure our designs are optimized before construction begins. Clients can virtually walk through their facilities and see water flow patterns in real-time.'
                        : 'Найсучасніші CAD-системи, VR/AR візуалізація та CFD-аналіз гарантують оптимізацію дизайну до початку будівництва. Клієнти можуть віртуально пройтись об\'єктом і побачити потоки води в реальному часі.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'VR facility walkthroughs' : 'VR-огляди об\'єктів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'CFD water flow analysis' : 'CFD-аналіз потоків води'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? '3D printed prototypes' : '3D-друковані прототипи'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Digital Twin Technology' : 'Технологія цифрових двійників'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Create virtual replicas of physical facilities for simulation, testing, and predictive maintenance. Our digital twins enable virtual commissioning, reducing on-site installation time and costs while predicting maintenance needs before equipment fails.'
                        : 'Створюємо віртуальні копії фізичних об\'єктів для симуляції, тестування та прогнозного обслуговування. Наші цифрові двійники дозволяють віртуальне введення в експлуатацію, скорочуючи час монтажу та прогнозуючи потреби в обслуговуванні.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <BarChart3 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Virtual commissioning' : 'Віртуальне введення в експлуатацію'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <BarChart3 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Predictive maintenance' : 'Прогнозне обслуговування'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <BarChart3 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Real-time performance monitoring' : 'Моніторинг в реальному часі'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Continuous R&D' : 'Постійні НДДКР'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'We invest heavily in research and development, staying ahead of aquaculture trends and technologies. Our team continuously experiments with new approaches, materials, and systems to deliver cutting-edge solutions to our clients.'
                        : 'Ми активно інвестуємо в дослідження та розробки, випереджаючи тренди та технології аквакультури. Наша команда постійно експериментує з новими підходами, матеріалами та системами.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Industry trend analysis' : 'Аналіз трендів індустрії'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'New material testing' : 'Тестування нових матеріалів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'System optimization' : 'Оптимізація систем'}</span>
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
                {isEnglish ? 'Innovation by Numbers' : 'Інновації в цифрах'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Measurable impact from our commitment to technological excellence'
                  : 'Вимірний вплив нашої відданості технологічній досконалості'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <StatCard
                value={50}
                suffix="%"
                label={isEnglish ? 'Faster Design Time' : 'Швидше проектування'}
                description={isEnglish ? 'Through AI-accelerated workflows' : 'Завдяки AI-робочим процесам'}
                icon={<Zap className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <StatCard
                value={30}
                suffix="%"
                label={isEnglish ? 'Cost Reduction' : 'Зниження витрат'}
                description={isEnglish ? 'Via innovation and optimization' : 'Через інновації та оптимізацію'}
                icon={<TrendingUp className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StatCard
                value={100}
                suffix="+"
                label={isEnglish ? 'AI-Assisted Projects' : 'AI-проектів'}
                description={isEnglish ? 'Successfully delivered with AI' : 'Успішно реалізовано з AI'}
                icon={<Brain className="w-12 h-12" />}
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
                {isEnglish ? 'Innovation in Action' : 'Інновації в дії'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Real examples of how we use cutting-edge technology in everyday engineering'
                  : 'Реальні приклади використання передових технологій у щоденному інжинірингу'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'AI Engineering Assistant' : 'AI-асистент інженера'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'We use ChatGPT and Claude daily for complex hydraulic calculations, material selection, and design verification. AI helps us explore more options faster and catch potential issues early.'
                      : 'Ми щодня використовуємо ChatGPT та Claude для складних гідравлічних розрахунків, підбору матеріалів та перевірки дизайну. AI допомагає швидше досліджувати варіанти та виявляти потенційні проблеми.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Box className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? '3D Printing Prototypes' : '3D-друк прототипів'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Physical prototypes of complex piping junctions, custom fittings, and tank components are 3D printed for testing and client approval before manufacturing. This saves time and prevents costly mistakes.'
                      : 'Фізичні прототипи складних з\'єднань труб, спеціальних фітингів та компонентів резервуарів друкуємо на 3D-принтері для тестування та затвердження клієнтом перед виробництвом.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'VR Facility Walkthroughs' : 'VR-огляди об\'єктів'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Clients can put on VR headsets and walk through their facilities before construction. They can see equipment placement, workflow paths, and make design changes while everything is still virtual—saving expensive on-site modifications.'
                      : 'Клієнти можуть одягнути VR-окуляри і пройтися об\'єктом до будівництва. Вони бачать розміщення обладнання, шляхи руху і вносять зміни в дизайн поки все ще віртуальне.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Future Roadmap */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'The Future of Innovation' : 'Майбутнє інновацій'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Upcoming technologies and initiatives we\'re developing'
                  : 'Майбутні технології та ініціативи, які ми розробляємо'}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'IoT Integration' : 'Інтеграція IoT'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Developing smart sensor networks for real-time monitoring of water quality, fish behavior, and system performance. All data will feed into AI models for predictive optimization and early problem detection.'
                          : 'Розробка мереж розумних датчиків для моніторингу якості води, поведінки риби та продуктивності систем в реальному часі. Всі дані живлять AI-моделі для прогнозної оптимізації та раннього виявлення проблем.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg flex-shrink-0">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Machine Learning Optimization' : 'Оптимізація машинним навчанням'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Training ML models on thousands of design variations to automatically generate optimal layouts for any species, location, and budget. The system will learn from every project to continuously improve recommendations.'
                          : 'Навчання ML-моделей на тисячах варіантів дизайну для автоматичної генерації оптимальних планів для будь-яких видів, локацій та бюджетів. Система вчиться з кожного проекту для постійного покращення рекомендацій.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Blockchain Traceability' : 'Відстеження через блокчейн'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Implementing blockchain-based systems to track fish from egg to consumer, ensuring transparency, food safety, and premium pricing for sustainably-raised products. Full supply chain visibility builds consumer trust.'
                          : 'Впровадження блокчейн-систем для відстеження риби від ікринки до споживача, забезпечуючи прозорість, безпеку харчових продуктів та преміум-ціни для екологічно вирощеної продукції.'}
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
                  ? 'Ready to Experience Innovation?'
                  : 'Готові випробувати інновації?'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isEnglish
                  ? 'Let\'s discuss how our innovative approach can transform your aquaculture project with faster delivery, lower costs, and cutting-edge technology.'
                  : 'Обговоримо, як наш інноваційний підхід може трансформувати ваш аквакультурний проект зі швидшою реалізацією, нижчими витратами та передовими технологіями.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                    {isEnglish ? 'Start Your Project' : 'Почати проект'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/services`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-primary"
                  >
                    {isEnglish ? 'Explore Services' : 'Переглянути послуги'}
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
