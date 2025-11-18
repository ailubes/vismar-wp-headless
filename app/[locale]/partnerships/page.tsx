import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, GraduationCap, Building2, Users, ArrowRight, Award, Globe, Lightbulb, Target, TrendingUp, Rocket } from 'lucide-react';
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
      ? 'Strategic Partnerships - Building the Future Together'
      : 'Стратегічні партнерства - Будуємо майбутнє разом',
    description: locale === 'en'
      ? '10+ university partners, 5+ industry associations, 50+ supplier relationships. Collaborative innovation through strategic partnerships in aquaculture engineering.'
      : '10+ університетів-партнерів, 5+ галузевих асоціацій, 50+ відносин з постачальниками. Спільні інновації через стратегічні партнерства в аквакультурному інжинірингу.',
  };
}

export default async function PartnershipsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Handshake className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {isEnglish ? 'Our Impact' : 'Наш вплив'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isEnglish
                  ? 'Building the Future Together'
                  : 'Будуємо майбутнє разом'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {isEnglish
                  ? 'Strategic collaborations with universities, industry leaders, and technology partners drive innovation and deliver better solutions for our clients.'
                  : 'Стратегічні співпраці з університетами, лідерами індустрії та технологічними партнерами стимулюють інновації та забезпечують кращі рішення для наших клієнтів.'}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {isEnglish ? 'Partner With Us' : 'Стати партнером'}
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
                    ? 'No one succeeds alone in modern aquaculture. At Vismar Aqua, we believe in the power of collaboration. Our network of strategic partnerships with universities, industry associations, technology providers, and clients enables us to stay at the forefront of innovation and deliver exceptional value.'
                    : 'Ніхто не досягає успіху самотньо в сучасній аквакультурі. У Vismar Aqua ми віримо в силу співпраці. Наша мережа стратегічних партнерств з університетами, галузевими асоціаціями, постачальниками технологій та клієнтами дозволяє нам залишатися в авангарді інновацій.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'Through university collaborations, we access cutting-edge research and develop next-generation technologies. Industry partnerships keep us connected to market needs and best practices. Technology alliances give our clients access to the best equipment and software at competitive prices.'
                    : 'Через співпрацю з університетами ми отримуємо доступ до передових досліджень та розробляємо технології наступного покоління. Галузеві партнерства тримають нас у контакті з потребами ринку та найкращими практиками. Технологічні альянси надають нашим клієнтам доступ до найкращого обладнання та програмного забезпечення за конкурентними цінами.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {isEnglish
                    ? 'Most importantly, we co-develop solutions with our clients. Their real-world challenges drive our innovation. This collaborative approach ensures our engineering solutions solve actual problems and create measurable value.'
                    : 'Найголовніше - ми спільно розробляємо рішення з нашими клієнтами. Їхні реальні виклики стимулюють наші інновації. Цей спільний підхід гарантує, що наші інженерні рішення вирішують реальні проблеми та створюють вимірну цінність.'}
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
                {isEnglish ? 'Partnership Programs' : 'Партнерські програми'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Four pillars of collaborative innovation in aquaculture'
                  : 'Чотири стовпи спільних інновацій в аквакультурі'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'University Collaborations' : 'Співпраця з університетами'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Active partnerships with 10+ universities worldwide for aquaculture research. We sponsor student projects, provide internships, and collaborate on R&D initiatives. This gives us access to latest scientific findings while supporting the next generation of aquaculture professionals.'
                        : 'Активні партнерства з 10+ університетами по всьому світу для досліджень в аквакультурі. Ми спонсоруємо студентські проекти, надаємо стажування та співпрацюємо в R&D ініціативах. Це дає нам доступ до останніх наукових досягнень.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Joint research projects' : 'Спільні дослідницькі проекти'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Student internship programs' : 'Програми стажування студентів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Academic advisory board' : 'Академічна консультативна рада'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Industry Associations' : 'Галузеві асоціації'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Active members of 5+ major aquaculture industry organizations globally. These memberships keep us connected to industry trends, regulatory changes, and best practices. We contribute to standards development and represent Ukrainian engineering excellence internationally.'
                        : 'Активні члени 5+ основних глузевих організацій аквакультури по всьому світу. Ці членства тримають нас у контакті з трендами індустрії, регуляторними змінами та найкращими практиками. Ми долучаємось до розробки стандартів та представляємо українську інженерну досконалість міжнародно.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Globe className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Global industry network' : 'Глобальна галузева мережа'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Standards development' : 'Розробка стандартів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Market intelligence' : 'Ринкова інформація'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Technology Partners' : 'Технологічні партнери'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? '50+ strategic relationships with equipment manufacturers, software providers, and technology innovators. These partnerships give our clients access to premium products at competitive prices, priority support, and early access to new innovations. Win-win for everyone.'
                        : '50+ стратегічних відносин з виробниками обладнання, постачальниками програмного забезпечення та технологічними інноваторами. Ці партнерства надають нашим клієнтам доступ до преміум-продуктів за конкурентними цінами, пріоритетну підтримку та ранній доступ до нових інновацій.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Rocket className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Preferred pricing for clients' : 'Преференційні ціни для клієнтів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Technical support access' : 'Доступ до технічної підтримки'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Early innovation access' : 'Ранній доступ до інновацій'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Client Co-Development' : 'Спільна розробка з клієнтами'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Our clients are our most important partners. We work collaboratively on custom solutions, prototype new technologies together, and share lessons learned. This partnership approach means our solutions solve real problems because they\'re developed by the people who face those challenges daily.'
                        : 'Наші клієнти - найважливіші партнери. Ми спільно працюємо над кастомними рішеннями, разом прототипуємо нові технології та діляться досвідом. Цей партнерський підхід означає, що наші рішення вирішують реальні проблеми, бо розроблені людьми, що стикаються з цими викликами щодня.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Handshake className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Collaborative design process' : 'Спільний процес проектування'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Rocket className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Joint innovation projects' : 'Спільні інноваційні проекти'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Shared success metrics' : 'Спільні метрики успіху'}</span>
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
                {isEnglish ? 'Partnership Network' : 'Партнерська мережа'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Our collaborative ecosystem enables innovation and excellence'
                  : 'Наша співпраційна екосистема дозволяє інновації та досконалість'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <StatCard
                value={10}
                suffix="+"
                label={isEnglish ? 'University Partners' : 'Університетів-партнерів'}
                description={isEnglish ? 'Global research collaboration' : 'Глобальна дослідницька співпраця'}
                icon={<GraduationCap className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <StatCard
                value={5}
                suffix="+"
                label={isEnglish ? 'Industry Associations' : 'Галузевих асоціацій'}
                description={isEnglish ? 'Active membership & participation' : 'Активне членство та участь'}
                icon={<Building2 className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StatCard
                value={50}
                suffix="+"
                label={isEnglish ? 'Supplier Partners' : 'Постачальників-партнерів'}
                description={isEnglish ? 'Technology & equipment network' : 'Мережа технологій та обладнання'}
                icon={<Rocket className="w-12 h-12" />}
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
                {isEnglish ? 'Partnership Success Stories' : 'Історії успіху партнерств'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Real examples of collaborative innovation in action'
                  : 'Реальні приклади спільних інновацій в дії'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'University Research Projects' : 'Університетські дослідження'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Collaborated with Kyiv National University on biofloc optimization research. Student team developed new bacterial culture methods that increased feed conversion by 15%. We implemented their findings in 3 client projects with excellent results.'
                      : 'Співпраця з Київським національним університетом з дослідження оптимізації біофлоку. Студентська команда розробила нові методи бактеріальних культур, що збільшили конверсію корму на 15%. Ми впровадили їхні відкриття у 3 клієнтських проектах.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Joint Technology Ventures' : 'Спільні технологічні проекти'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Partnered with a Norwegian equipment manufacturer to co-develop custom protein skimmers for high-density RAS. Combined their manufacturing expertise with our engineering knowledge resulted in a product now sold globally. Win-win partnership.'
                      : 'Партнерство з норвезьким виробником обладнання для спільної розробки кастомних пінних фракціонаторів для високощільного RAS. Поєднання їхнього виробничого досвіду з нашими інженерними знаннями створило продукт, що тепер продається по всьому світу.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Co-Developed Technologies' : 'Спільно розроблені технології'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Worked with a tilapia farm client to develop automated feeding systems optimized for their specific production model. The system we built together reduced labor by 60% and improved feed conversion. Now offering this solution to other clients.'
                      : 'Робота з клієнтом-фермою тиляпії для розробки автоматизованих систем годування, оптимізованих для їхньої специфічної моделі виробництва. Система, що ми побудували разом, знизила трудовитрати на 60% та покращила конверсію корму.'}
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
                {isEnglish ? 'Expanding Our Network' : 'Розширення нашої мережі'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Future partnership goals and opportunities'
                  : 'Майбутні цілі партнерства та можливості'}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Expand Global Partnerships' : 'Розширити глобальні партнерства'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Goal: Add 10 new university partnerships across Asia, Africa, and Latin America by 2026. Focus on regions with high aquaculture growth potential. These partnerships will help us understand local needs and develop region-specific solutions.'
                          : 'Ціль: Додати 10 нових університетських партнерств в Азії, Африці та Латинській Америці до 2026 року. Фокус на регіонах з високим потенціалом зростання аквакультури. Ці партнерства допоможуть нам зрозуміти локальні потреби.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg flex-shrink-0">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'More R&D Collaborations' : 'Більше R&D співпраць'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Launch 5+ joint research projects annually focused on next-generation RAS technology, alternative feed sources, and AI-driven farm management. Partner with universities and technology companies to stay ahead of innovation curves.'
                          : 'Запуск 5+ спільних дослідницьких проектів щороку, зосереджених на RAS-технологіях наступного покоління, альтернативних джерелах корму та AI-керуванні фермами. Партнерство з університетами та технологічними компаніями.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg flex-shrink-0">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Client Success Network' : 'Мережа успіху клієнтів'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Create a formal network where our clients can connect, share experiences, and learn from each other. Monthly webinars, annual conference, and online forum. The best solutions often come from operators sharing what works in the real world.'
                          : 'Створення формальної мережі, де наші клієнти можуть контактувати, ділитися досвідом та вчитися один у одного. Щомісячні вебінари, щорічна конференція та онлайн-форум. Найкращі рішення часто приходять від операторів.'}
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
                  ? 'Join Our Partnership Network'
                  : 'Приєднайтесь до нашої партнерської мережі'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isEnglish
                  ? 'Whether you\'re a university, technology provider, or aquaculture professional, we\'re always looking for meaningful collaborations. Let\'s build the future of aquaculture together.'
                  : 'Чи ви університет, постачальник технологій чи професіонал аквакультури - ми завжди шукаємо значущі співпраці. Давайте будувати майбутнє аквакультури разом.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                    {isEnglish ? 'Partner With Us' : 'Стати партнером'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/about`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-primary"
                  >
                    {isEnglish ? 'Learn About Us' : 'Дізнатися про нас'}
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
