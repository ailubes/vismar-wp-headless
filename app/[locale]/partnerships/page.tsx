import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, Users, Globe, Building2, Award, Rocket, GraduationCap, Zap, TrendingUp, Target, ArrowRight, Lightbulb, Heart, Network, Briefcase, Medal } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Strategic Partnerships - Building the Future Together | Vismar Aqua'
      : 'Стратегічні партнерства - Будуємо майбутнє разом | Vismar Aqua',
    description: locale === 'en'
      ? '10+ university partners, 5+ industry associations, 50+ supplier relationships. Collaborative innovation through strategic partnerships in aquaculture engineering.'
      : '10+ університетів-партнерів, 5+ галузевих асоціацій, 50+ відносин з постачальниками. Спільні інновації через стратегічні партнерства в аквакультурному інжинірингу.',
  };
}

export default async function PartnershipsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const heroStats = [
    {
      icon: GraduationCap,
      value: '10+',
      label: {
        en: 'University Partners',
        uk: 'Університетів-партнерів'
      }
    },
    {
      icon: Building2,
      value: '5+',
      label: {
        en: 'Industry Associations',
        uk: 'Галузевих асоціацій'
      }
    },
    {
      icon: Rocket,
      value: '50+',
      label: {
        en: 'Technology Partners',
        uk: 'Технологічних партнерів'
      }
    },
    {
      icon: Award,
      value: '100+',
      label: {
        en: 'Active Collaborations',
        uk: 'Активних співпраць'
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
          <Handshake className="absolute top-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 text-[#42c997]/20 animate-float-slow" />
          <Users className="absolute top-[25%] right-[12%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/25 animate-float-medium" />
          <Globe className="absolute bottom-[20%] left-[15%] w-14 h-14 md:w-20 md:h-20 text-[#00A8B5]/15 animate-float-slow" />
          <Building2 className="absolute top-[45%] right-[8%] w-8 h-8 md:w-12 md:h-12 text-[#42c997]/30 animate-float-fast" />
          <Award className="absolute bottom-[35%] right-[20%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/20 animate-float-medium" />
          <Network className="absolute top-[60%] left-[5%] w-12 h-12 md:w-16 md:h-16 text-[#00A8B5]/25 animate-float-slow" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Handshake className="w-5 h-5 text-[#42c997]" />
              <span className="text-sm font-semibold">
                {isEnglish ? 'Collaborative Innovation' : 'Спільні інновації'}
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              {isEnglish
                ? 'Building the Future Together'
                : 'Будуємо майбутнє разом'}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? 'Strategic collaborations with universities, industry leaders, and technology partners drive innovation and deliver better solutions for our clients.'
                : 'Стратегічні співпраці з університетами, лідерами індустрії та технологічними партнерами стимулюють інновації та забезпечують кращі рішення для наших клієнтів.'}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isEnglish ? 'Partner With Us' : 'Стати партнером'}
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

      {/* Why Partnerships Matter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Why Partnerships Matter' : 'Чому партнерства важливі'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'No one succeeds alone in modern aquaculture. At Vismar Aqua, we believe in the power of collaboration. Our network of strategic partnerships with universities, industry associations, technology providers, and clients enables us to stay at the forefront of innovation and deliver exceptional value.'
                  : 'Ніхто не досягає успіху самотньо в сучасній аквакультурі. У Vismar Aqua ми віримо в силу співпраці. Наша мережа стратегічних партнерств з університетами, галузевими асоціаціями, постачальниками технологій та клієнтами дозволяє нам залишатися в авангарді інновацій.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'Through university collaborations, we access cutting-edge research and develop next-generation technologies. Industry partnerships keep us connected to market needs and best practices. Technology alliances give our clients access to the best equipment and software at competitive prices.'
                  : 'Через співпрацю з університетами ми отримуємо доступ до передових досліджень та розробляємо технології наступного покоління. Галузеві партнерства тримають нас у контакті з потребами ринку та найкращими практиками.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                {isEnglish
                  ? 'Most importantly, we co-develop solutions with our clients. Their real-world challenges drive our innovation. This collaborative approach ensures our engineering solutions solve actual problems and create measurable value.'
                  : 'Найголовніше - ми спільно розробляємо рішення з нашими клієнтами. Їхні реальні виклики стимулюють наші інновації. Цей спільний підхід гарантує, що наші інженерні рішення вирішують реальні проблеми та створюють вимірну цінність.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Partnership Pillars - Numbered Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Partnership Programs' : 'Партнерські програми'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Four pillars of collaborative innovation in aquaculture'
                : 'Чотири стовпи спільних інновацій в аквакультурі'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: University Research */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  01
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <GraduationCap className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'University Research' : 'Університетські дослідження'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Active partnerships with 10+ universities worldwide for aquaculture research. We sponsor student projects, provide internships, and collaborate on R&D initiatives.'
                    : 'Активні партнерства з 10+ університетами по всьому світу для досліджень в аквакультурі. Ми спонсоруємо студентські проекти, надаємо стажування та співпрацюємо в R&D ініціативах.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Joint research projects' : 'Спільні дослідницькі проекти'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Student internship programs' : 'Програми стажування студентів'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Academic advisory board' : 'Академічна консультативна рада'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Industry Networks */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  02
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Building2 className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Industry Networks' : 'Галузеві мережі'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Active members of 5+ major aquaculture industry organizations globally. These memberships keep us connected to industry trends, regulatory changes, and best practices.'
                    : 'Активні члени 5+ основних галузевих організацій аквакультури по всьому світу. Ці членства тримають нас у контакті з трендами індустрії, регуляторними змінами та найкращими практиками.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Global industry network' : 'Глобальна галузева мережа'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Medal className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Standards development' : 'Розробка стандартів'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Market intelligence' : 'Ринкова інформація'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Technology Alliance */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  03
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Rocket className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Technology Alliance' : 'Технологічний альянс'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? '50+ strategic relationships with equipment manufacturers, software providers, and technology innovators. These partnerships give our clients access to premium products at competitive prices.'
                    : '50+ стратегічних відносин з виробниками обладнання, постачальниками програмного забезпечення та технологічними інноваторами. Ці партнерства надають нашим клієнтам доступ до преміум-продуктів.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Preferred pricing for clients' : 'Преференційні ціни для клієнтів'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Technical support access' : 'Доступ до технічної підтримки'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Early innovation access' : 'Ранній доступ до інновацій'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4: Client Co-Creation */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  04
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Heart className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Client Co-Creation' : 'Спільна розробка з клієнтами'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Our clients are our most important partners. We work collaboratively on custom solutions, prototype new technologies together, and share lessons learned.'
                    : 'Наші клієнти - найважливіші партнери. Ми спільно працюємо над кастомними рішеннями, разом прототипуємо нові технології та діляться досвідом.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Collaborative design process' : 'Спільний процес проектування'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Joint innovation projects' : 'Спільні інноваційні проекти'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Shared success metrics' : 'Спільні метрики успіху'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Partnership Success Stories' : 'Історії успіху партнерств'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Real examples of collaborative innovation in action'
                : 'Реальні приклади спільних інновацій в дії'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'University Biofloc Research' : 'Університетські дослідження біофлоку'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Collaborated with Kyiv National University on biofloc optimization. Student team developed new bacterial culture methods that increased feed conversion by 15%. Implemented in 3 client projects.'
                  : 'Співпраця з Київським національним університетом з оптимізації біофлоку. Студентська команда розробила нові методи бактеріальних культур, що збільшили конверсію корму на 15%.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Joint Technology Development' : 'Спільна розробка технологій'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Partnered with Norwegian equipment manufacturer to co-develop custom protein skimmers for high-density RAS. Combined expertise resulted in a product now sold globally.'
                  : 'Партнерство з норвезьким виробником для спільної розробки кастомних пінних фракціонаторів. Поєднання досвіду створило продукт, що тепер продається по всьому світу.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Client-Driven Innovation' : 'Інновації разом з клієнтами'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Developed automated feeding systems with tilapia farm client optimized for their production model. Reduced labor by 60% and improved feed conversion. Now offering to other clients.'
                  : 'Розробка автоматизованих систем годування з клієнтом-фермою тиляпії. Знизили трудовитрати на 60% та покращили конверсію корму. Тепер пропонуємо іншим клієнтам.'}
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
                ? 'Join Our Partnership Network'
                : 'Приєднайтесь до нашої партнерської мережі'}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {isEnglish
                ? "Whether you're a university, technology provider, or aquaculture professional, we're always looking for meaningful collaborations. Let's build the future of aquaculture together."
                : 'Чи ви університет, постачальник технологій чи професіонал аквакультури - ми завжди шукаємо значущі співпраці. Давайте будувати майбутнє аквакультури разом.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {isEnglish ? 'Partner With Us' : 'Стати партнером'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20"
              >
                {isEnglish ? 'Learn About Us' : 'Дізнатися про нас'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
