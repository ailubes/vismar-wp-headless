import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, BookOpen, Users, GraduationCap, ArrowRight, Award, Globe, Lightbulb, Target, TrendingUp, MessageSquare, Video } from 'lucide-react';
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
      ? 'Empowering Aquaculture Communities - Knowledge Sharing & Training'
      : 'Розширення можливостей спільнот аквакультури - Обмін знаннями та навчання',
    description: locale === 'en'
      ? '100+ blog articles, 50+ trained operators, 20+ conference presentations. Sharing knowledge and building capacity in aquaculture communities worldwide.'
      : '100+ статей блогу, 50+ навчених операторів, 20+ конференційних презентацій. Обмін знаннями та розбудова спроможності спільнот аквакультури по всьому світу.',
  };
}

export default async function CommunityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {isEnglish ? 'Our Impact' : 'Наш вплив'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isEnglish
                  ? 'Empowering Aquaculture Communities'
                  : 'Розширення можливостей спільнот аквакультури'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {isEnglish
                  ? 'Sharing knowledge, training operators, and building capacity in aquaculture communities worldwide. Your success is our success.'
                  : 'Обмін знаннями, навчання операторів та розбудова спроможності спільнот аквакультури по всьому світу. Ваш успіх - наш успіх.'}
              </p>
              <Link href={`/${locale}/blog`}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {isEnglish ? 'Explore Resources' : 'Переглянути ресурси'}
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
                    ? 'At Vismar Aqua, we believe that knowledge shared is knowledge multiplied. We\'re committed to empowering aquaculture communities through education, training, and knowledge sharing. Our success is measured not just by the projects we complete, but by the capacity we build in the industry.'
                    : 'У Vismar Aqua ми віримо, що знання поділені - це знання помножені. Ми віддані розширенню можливостей спільнот аквакультури через освіту, навчання та обмін знаннями. Наш успіх вимірюється не лише завершеними проектами, а спроможністю, що ми будуємо в індустрії.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'Through our blog, webinars, training programs, and conference presentations, we\'ve shared knowledge with thousands of aquaculture professionals worldwide. We provide free RAS design calculators, publish detailed technical guides, and offer hands-on operator training. We believe that a rising tide lifts all boats.'
                    : 'Через наш блог, вебінари, навчальні програми та конференційні презентації ми поділилися знаннями з тисячами професіоналів аквакультури по всьому світу. Ми надаємо безкоштовні RAS-калькулятори, публікуємо детальні технічні посібники та пропонуємо практичне навчання операторів.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {isEnglish
                    ? 'Local impact matters too. We hire locally whenever possible, support our communities, and contribute to the broader aquaculture industry through active participation in conferences, publications, and educational initiatives. Building a better aquaculture industry benefits everyone.'
                    : 'Локальний вплив також важливий. Ми наймаємо локально, коли це можливо, підтримуємо наші спільноти і вносимо вклад в ширшу індустрію аквакультури через активну участь у конференціях, публікаціях та освітніх ініціативах.'}
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
                {isEnglish ? 'Community Impact Programs' : 'Програми впливу на спільноту'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Four pillars of knowledge sharing and capacity building'
                  : 'Чотири стовпи обміну знаннями та розбудови спроможності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Knowledge Sharing' : 'Обмін знаннями'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? '100+ detailed blog articles covering RAS design, species-specific guides, equipment reviews, and troubleshooting tips. All freely available. We also offer free online calculators for pump sizing, biofilter design, and system economics. Knowledge should be accessible to all.'
                        : '100+ детальних статей блогу про RAS-дизайн, посібники по видам, огляди обладнання та поради з усунення неполадок. Все безкоштовно доступне. Ми також пропонуємо безкоштовні онлайн-калькулятори для розрахунку насосів, біофільтрів та економіки систем.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? '100+ technical blog articles' : '100+ технічних статей блогу'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Target className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Free RAS design calculators' : 'Безкоштовні RAS-калькулятори'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Video className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'YouTube tutorial videos' : 'Навчальні відео на YouTube'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Training Programs' : 'Навчальні програми'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Hands-on operator training for RAS facility management. We\'ve trained 50+ operators on water quality monitoring, equipment maintenance, biosecurity protocols, and emergency response. Trained operators = successful facilities. We also provide ongoing technical support.'
                        : 'Практичне навчання операторів для управління RAS-об\'єктами. Ми навчили 50+ операторів моніторингу якості води, обслуговуванню обладнання, протоколам біобезпеки та реагуванню на надзвичайні ситуації. Навчені оператори = успішні об\'єкти.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? '50+ operators trained' : '50+ навчених операторів'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Certification programs' : 'Програми сертифікації'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <BookOpen className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Detailed training manuals' : 'Детальні навчальні посібники'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Local Impact' : 'Локальний вплив'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'We believe in supporting local communities. Hiring Ukrainian engineers, partnering with local suppliers, and contributing to the local economy. Even during wartime, we\'ve maintained operations and continued serving our team and community. Our people are our strength.'
                        : 'Ми віримо в підтримку локальних спільнот. Наймаємо українських інженерів, співпрацюємо з місцевими постачальниками та вносимо вклад в місцеву економіку. Навіть під час війни ми підтримуємо операції та продовжуємо обслуговувати нашу команду та спільноту.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Local hiring priority' : 'Пріоритет локального найму'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Globe className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Community support programs' : 'Програми підтримки спільноти'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Heart className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'War-proven resilience' : 'Стійкість, перевірена війною'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Industry Education' : 'Галузева освіта'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Active participation in aquaculture conferences and events. 20+ presentations at industry conferences sharing our research, case studies, and lessons learned. We also publish in trade journals and contribute to industry standards development. Giving back to the industry that sustains us.'
                        : 'Активна участь в конференціях та подіях з аквакультури. 20+ презентацій на галузевих конференціях, де ділимося дослідженнями, кейс-стаді та уроками. Ми також публікуємося в галузевих журналах та долучаємось до розробки промислових стандартів.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? '20+ conference presentations' : '20+ конференційних презентацій'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <BookOpen className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Industry publications' : 'Галузеві публікації'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Standards development' : 'Розробка стандартів'}</span>
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
                {isEnglish ? 'Community Impact by Numbers' : 'Вплив на спільноту в цифрах'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Measuring our commitment to knowledge sharing and capacity building'
                  : 'Вимірювання нашої відданості обміну знаннями та розбудові спроможності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <StatCard
                value={100}
                suffix="+"
                label={isEnglish ? 'Blog Articles' : 'Статей блогу'}
                description={isEnglish ? 'Free technical knowledge' : 'Безкоштовні технічні знання'}
                icon={<BookOpen className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <StatCard
                value={50}
                suffix="+"
                label={isEnglish ? 'Trained Operators' : 'Навчених операторів'}
                description={isEnglish ? 'Hands-on facility training' : 'Практичне навчання на об\'єктах'}
                icon={<GraduationCap className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StatCard
                value={20}
                suffix="+"
                label={isEnglish ? 'Conference Talks' : 'Конференційних доповідей'}
                description={isEnglish ? 'Industry knowledge sharing' : 'Обмін галузевими знаннями'}
                icon={<MessageSquare className="w-12 h-12" />}
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
                {isEnglish ? 'Community in Action' : 'Спільнота в дії'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Real examples of our commitment to empowering aquaculture communities'
                  : 'Реальні приклади нашої відданості розширенню можливостей спільнот аквакультури'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Free RAS Calculators' : 'Безкоштовні RAS-калькулятори'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'We\'ve created free online calculators for pump sizing, biofilter design, and economic feasibility. Used by thousands of farmers and engineers worldwide to quickly evaluate system designs. No registration required—just free tools to help the industry.'
                      : 'Ми створили безкоштовні онлайн-калькулятори для розрахунку насосів, дизайну біофільтрів та економічної доцільності. Використовуються тисячами фермерів та інженерів по всьому світу. Без реєстрації - просто безкоштовні інструменти.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'YouTube Tutorials' : 'YouTube-навчання'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Detailed video tutorials covering RAS setup, maintenance procedures, troubleshooting, and optimization. Filmed on actual operating facilities so viewers see real-world applications. Visual learning makes complex concepts accessible to everyone.'
                      : 'Детальні відео-підручники про налаштування RAS, процедури обслуговування, усунення неполадок та оптимізацію. Знято на реальних працюючих об\'єктах. Візуальне навчання робить складні концепції доступними для всіх.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Training Manuals' : 'Навчальні посібники'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Comprehensive operator training manuals covering daily operations, emergency procedures, water quality management, and biosecurity. Provided to every trained operator and available for download. Clear, practical guidance that actually gets used.'
                      : 'Комплексні посібники для операторів, що охоплюють щоденні операції, процедури на випадок надзвичайних ситуацій, управління якістю води та біобезпеку. Надаються кожному навченому оператору. Чіткі, практичні вказівки.'}
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
                {isEnglish ? 'Growing Our Community Impact' : 'Зростання нашого впливу на спільноту'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Future initiatives to expand knowledge sharing and capacity building'
                  : 'Майбутні ініціативи для розширення обміну знаннями та розбудови спроможності'}
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
                        {isEnglish ? 'Online Training Platform' : 'Онлайн-платформа навчання'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Launch comprehensive online training platform with video courses, interactive quizzes, and certification programs. Make professional RAS operator training accessible globally at affordable prices. Self-paced learning that fits any schedule.'
                          : 'Запуск комплексної онлайн-платформи навчання з відео-курсами, інтерактивними тестами та програмами сертифікації. Зробити професійне навчання RAS-операторів доступним глобально за доступними цінами.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Certification Programs' : 'Програми сертифікації'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Develop industry-recognized certification programs for RAS operators, maintenance technicians, and system designers. Create career pathways in aquaculture and raise professional standards industry-wide. Certified professionals = better facilities.'
                          : 'Розробка галузево визнаних програм сертифікації для RAS-операторів, технічних спеціалістів з обслуговування та системних дизайнерів. Створення кар\'єрних шляхів в аквакультурі та підвищення професійних стандартів.'}
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
                        {isEnglish ? 'Mentorship Network' : 'Мережа менторства'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Connect experienced aquaculture professionals with newcomers through formal mentorship program. One-on-one guidance, peer learning groups, and ongoing support. The best way to learn is from those who\'ve done it. Building the next generation.'
                          : 'Поєднання досвідчених професіоналів аквакультури з новачками через формальну програму менторства. Індивідуальне керівництво, групи рівноправного навчання та постійна підтримка. Найкращий спосіб навчання - від тих, хто це робив.'}
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
                  ? 'Join Our Community'
                  : 'Приєднайтесь до нашої спільноти'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isEnglish
                  ? 'Access free resources, join our training programs, or collaborate with us to build a better aquaculture industry. Together we\'re stronger.'
                  : 'Отримайте доступ до безкоштовних ресурсів, приєднайтесь до наших навчальних програм або співпрацюйте з нами для побудови кращої індустрії аквакультури. Разом ми сильніші.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/blog`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                    {isEnglish ? 'Browse Resources' : 'Переглянути ресурси'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/contact`}>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-primary"
                  >
                    {isEnglish ? 'Get in Touch' : 'Зв\'язатися'}
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
