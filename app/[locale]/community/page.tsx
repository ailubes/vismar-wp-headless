import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, BookOpen, Users, GraduationCap, ArrowRight, Award, Globe, Lightbulb, Target, Video, MessageSquare, Share2, UserPlus, Sparkles } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Empowering Aquaculture Communities - Knowledge Sharing & Training | Vismar Aqua'
      : 'Розширення можливостей спільнот аквакультури - Обмін знаннями та навчання | Vismar Aqua',
    description: locale === 'en'
      ? '100+ blog articles, 50+ trained operators, 20+ conference presentations. Sharing knowledge and building capacity in aquaculture communities worldwide.'
      : '100+ статей блогу, 50+ навчених операторів, 20+ конференційних презентацій. Обмін знаннями та розбудова спроможності спільнот аквакультури по всьому світу.',
  };
}

export default async function CommunityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const heroStats = [
    {
      icon: BookOpen,
      value: '100+',
      label: {
        en: 'Blog Articles',
        uk: 'Статей блогу'
      }
    },
    {
      icon: GraduationCap,
      value: '50+',
      label: {
        en: 'Operators Trained',
        uk: 'Навчених операторів'
      }
    },
    {
      icon: MessageSquare,
      value: '20+',
      label: {
        en: 'Conference Talks',
        uk: 'Конференційних доповідей'
      }
    },
    {
      icon: Users,
      value: '1000+',
      label: {
        en: 'Community Members',
        uk: 'Членів спільноти'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section with Floating Icons */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 text-[#42c997]/20 animate-float-slow" />
          <BookOpen className="absolute top-[25%] right-[12%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/25 animate-float-medium" />
          <Users className="absolute bottom-[20%] left-[15%] w-14 h-14 md:w-20 md:h-20 text-[#00A8B5]/15 animate-float-slow" />
          <GraduationCap className="absolute top-[45%] right-[8%] w-8 h-8 md:w-12 md:h-12 text-[#42c997]/30 animate-float-fast" />
          <Globe className="absolute bottom-[35%] right-[20%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/20 animate-float-medium" />
          <Share2 className="absolute top-[60%] left-[5%] w-12 h-12 md:w-16 md:h-16 text-[#00A8B5]/25 animate-float-slow" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Heart className="w-5 h-5 text-[#42c997]" />
              <span className="text-sm font-semibold">
                {isEnglish ? 'Community Impact' : 'Вплив на спільноту'}
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              {isEnglish
                ? 'Empowering Aquaculture Communities'
                : 'Розширення можливостей спільнот аквакультури'}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? 'Sharing knowledge, training operators, and building capacity in aquaculture communities worldwide. Your success is our success.'
                : 'Обмін знаннями, навчання операторів та розбудова спроможності спільнот аквакультури по всьому світу. Ваш успіх - наш успіх.'}
            </p>

            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isEnglish ? 'Explore Resources' : 'Переглянути ресурси'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute left-0 right-0" style={{ bottom: '-1px' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
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

      {/* Why Community Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Why Community Matters' : 'Чому спільнота важлива'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? "At Vismar Aqua, we believe that knowledge shared is knowledge multiplied. We're committed to empowering aquaculture communities through education, training, and knowledge sharing. Our success is measured not just by the projects we complete, but by the capacity we build in the industry."
                  : 'У Vismar Aqua ми віримо, що знання поділені - це знання помножені. Ми віддані розширенню можливостей спільнот аквакультури через освіту, навчання та обмін знаннями. Наш успіх вимірюється не лише завершеними проектами, а спроможністю, що ми будуємо в індустрії.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? "Through our blog, webinars, training programs, and conference presentations, we've shared knowledge with thousands of aquaculture professionals worldwide. We provide free RAS design calculators, publish detailed technical guides, and offer hands-on operator training."
                  : 'Через наш блог, вебінари, навчальні програми та конференційні презентації ми поділилися знаннями з тисячами професіоналів аквакультури по всьому світу. Ми надаємо безкоштовні RAS-калькулятори, публікуємо детальні технічні посібники.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                {isEnglish
                  ? 'Local impact matters too. We hire locally whenever possible, support our communities, and contribute to the broader aquaculture industry through active participation in conferences, publications, and educational initiatives. Building a better aquaculture industry benefits everyone.'
                  : 'Локальний вплив також важливий. Ми наймаємо локально, коли це можливо, підтримуємо наші спільноти і вносимо вклад в ширшу індустрію аквакультури через активну участь у конференціях, публікаціях та освітніх ініціативах.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Community Impact Pillars - Numbered Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Community Impact Programs' : 'Програми впливу на спільноту'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Four pillars of knowledge sharing and capacity building'
                : 'Чотири стовпи обміну знаннями та розбудови спроможності'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Knowledge Sharing */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  01
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <BookOpen className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Knowledge Sharing' : 'Обмін знаннями'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? '100+ detailed blog articles covering RAS design, species-specific guides, equipment reviews, and troubleshooting tips. All freely available with free online calculators.'
                    : '100+ детальних статей блогу про RAS-дизайн, посібники по видам, огляди обладнання та поради з усунення неполадок. Все безкоштовно доступне з безкоштовними онлайн-калькуляторами.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? '100+ technical blog articles' : '100+ технічних статей блогу'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Free RAS design calculators' : 'Безкоштовні RAS-калькулятори'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'YouTube tutorial videos' : 'Навчальні відео на YouTube'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Training Programs */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  02
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <GraduationCap className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Training Programs' : 'Навчальні програми'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? "Hands-on operator training for RAS facility management. We've trained 50+ operators on water quality monitoring, equipment maintenance, biosecurity protocols, and emergency response."
                    : 'Практичне навчання операторів для управління RAS-об\'єктами. Ми навчили 50+ операторів моніторингу якості води, обслуговуванню обладнання, протоколам біобезпеки та реагуванню на надзвичайні ситуації.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? '50+ operators trained' : '50+ навчених операторів'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Certification programs' : 'Програми сертифікації'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Detailed training manuals' : 'Детальні навчальні посібники'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Local Impact */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  03
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Heart className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Local Impact' : 'Локальний вплив'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? "We believe in supporting local communities. Hiring Ukrainian engineers, partnering with local suppliers, and contributing to the local economy. Even during wartime, we've maintained operations."
                    : 'Ми віримо в підтримку локальних спільнот. Наймаємо українських інженерів, співпрацюємо з місцевими постачальниками та вносимо вклад в місцеву економіку. Навіть під час війни ми підтримуємо операції.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <UserPlus className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Local hiring priority' : 'Пріоритет локального найму'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Community support programs' : 'Програми підтримки спільноти'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'War-proven resilience' : 'Стійкість, перевірена війною'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4: Industry Education */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  04
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <MessageSquare className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Industry Education' : 'Галузева освіта'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Active participation in aquaculture conferences and events. 20+ presentations at industry conferences sharing our research, case studies, and lessons learned with the broader community.'
                    : 'Активна участь в конференціях та подіях з аквакультури. 20+ презентацій на галузевих конференціях, де ділимося дослідженнями, кейс-стаді та уроками з ширшою спільнотою.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? '20+ conference presentations' : '20+ конференційних презентацій'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Industry publications' : 'Галузеві публікації'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Standards development' : 'Розробка стандартів'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Community in Action' : 'Спільнота в дії'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Real examples of our commitment to empowering aquaculture communities'
                : 'Реальні приклади нашої відданості розширенню можливостей спільнот аквакультури'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Free RAS Calculators' : 'Безкоштовні RAS-калькулятори'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? "We've created free online calculators for pump sizing, biofilter design, and economic feasibility. Used by thousands of farmers and engineers worldwide. No registration required—just free tools."
                  : 'Ми створили безкоштовні онлайн-калькулятори для розрахунку насосів, дизайну біофільтрів та економічної доцільності. Використовуються тисячами фермерів та інженерів. Без реєстрації.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'YouTube Tutorials' : 'YouTube-навчання'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Detailed video tutorials covering RAS setup, maintenance procedures, troubleshooting, and optimization. Filmed on actual operating facilities. Visual learning makes complex concepts accessible.'
                  : 'Детальні відео-підручники про налаштування RAS, процедури обслуговування, усунення неполадок та оптимізацію. Знято на реальних об\'єктах. Візуальне навчання робить складні концепції доступними.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Training Manuals' : 'Навчальні посібники'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Comprehensive operator training manuals covering daily operations, emergency procedures, water quality management, and biosecurity. Provided to every trained operator and available for download.'
                  : 'Комплексні посібники для операторів, що охоплюють щоденні операції, процедури на випадок надзвичайних ситуацій, управління якістю води та біобезпеку. Надаються кожному навченому оператору.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {isEnglish
                ? 'Join Our Community'
                : 'Приєднайтесь до нашої спільноти'}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {isEnglish
                ? "Access free resources, join our training programs, or collaborate with us to build a better aquaculture industry. Together we're stronger."
                : 'Отримайте доступ до безкоштовних ресурсів, приєднайтесь до наших навчальних програм або співпрацюйте з нами для побудови кращої індустрії аквакультури. Разом ми сильніші.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {isEnglish ? 'Browse Resources' : 'Переглянути ресурси'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20"
              >
                {isEnglish ? 'Get in Touch' : "Зв'язатися"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
