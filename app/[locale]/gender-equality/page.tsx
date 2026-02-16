import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Heart, Award, GraduationCap, ArrowRight, Globe, Lightbulb, Target, UserCheck, Briefcase, Scale, TrendingUp, Star, Sparkles } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Gender Equality & Diversity - Diversity Drives Innovation | Vismar Aqua'
      : 'Гендерна рівність та різноманітність - Різноманітність стимулює інновації | Vismar Aqua',
    description: locale === 'en'
      ? '40%+ female team members, equal pay policy, flexible remote work. Building an inclusive culture where diversity drives innovation in aquaculture engineering.'
      : '40%+ членів команди жіночої статі, політика рівної оплати, гнучка віддалена робота. Побудова інклюзивної культури, де різноманітність стимулює інновації.',
  };
}

export default async function GenderEqualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const heroStats = [
    {
      icon: Users,
      value: '40%+',
      label: {
        en: 'Female Team',
        uk: 'Жінок у команді'
      }
    },
    {
      icon: Scale,
      value: '100%',
      label: {
        en: 'Equal Pay',
        uk: 'Рівна оплата'
      }
    },
    {
      icon: Globe,
      value: '100%',
      label: {
        en: 'Remote Work',
        uk: 'Віддалена робота'
      }
    },
    {
      icon: Target,
      value: '50/50',
      label: {
        en: 'Target by 2027',
        uk: 'Ціль до 2027'
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
          <Users className="absolute top-[15%] left-[8%] w-12 h-12 md:w-16 md:h-16 text-[#42c997]/20 animate-float-slow" />
          <Heart className="absolute top-[25%] right-[12%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/25 animate-float-medium" />
          <Scale className="absolute bottom-[20%] left-[15%] w-14 h-14 md:w-20 md:h-20 text-[#00A8B5]/15 animate-float-slow" />
          <Award className="absolute top-[45%] right-[8%] w-8 h-8 md:w-12 md:h-12 text-[#42c997]/30 animate-float-fast" />
          <Globe className="absolute bottom-[35%] right-[20%] w-10 h-10 md:w-14 md:h-14 text-[#4ECDC4]/20 animate-float-medium" />
          <Star className="absolute top-[60%] left-[5%] w-12 h-12 md:w-16 md:h-16 text-[#00A8B5]/25 animate-float-slow" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Users className="w-5 h-5 text-[#42c997]" />
              <span className="text-sm font-semibold">
                {isEnglish ? 'Equality & Diversity' : 'Рівність та різноманітність'}
              </span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              {isEnglish
                ? 'Diversity Drives Innovation'
                : 'Різноманітність стимулює інновації'}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              {isEnglish
                ? 'Building an inclusive culture where everyone thrives. Equal opportunity, fair compensation, and respect for all are the foundations of our success.'
                : 'Побудова інклюзивної культури, де кожен процвітає. Рівні можливості, справедлива компенсація та повага до всіх - основи нашого успіху.'}
            </p>

            <Link
              href={`/${locale}/careers`}
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isEnglish ? 'Join Our Team' : 'Приєднатися до команди'}
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

      {/* Why Equality Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Why Equality Matters' : 'Чому рівність важлива'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? "At Vismar Aqua, diversity and inclusion aren't just buzzwords—they're core values that make us stronger. We believe that diverse teams create better solutions, and equal opportunity is both morally right and good business. Gender equality is fundamental to our culture and operations."
                  : 'У Vismar Aqua різноманітність та інклюзія - це не просто гучні слова, а основні цінності, що роблять нас сильнішими. Ми віримо, що різноманітні команди створюють кращі рішення, а рівні можливості є морально правильними та хорошим бізнесом.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {isEnglish
                  ? "Over 40% of our team are women, many in senior engineering and leadership positions. We enforce strict equal pay policies—same work, same compensation, regardless of gender. Our flexible, remote-first work environment enables parents and caregivers to balance professional excellence with family responsibilities."
                  : 'Понад 40% нашої команди - жінки, багато на старших інженерних та керівних посадах. Ми застосовуємо сувору політику рівної оплати - однакова робота, однакова компенсація, незалежно від статі.'}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                {isEnglish
                  ? 'We actively support women in STEM through mentorship, educational initiatives, and creating pathways into aquaculture engineering. Our commitment to gender equality extends beyond our company—we want to see more women leading the aquaculture industry globally.'
                  : 'Ми активно підтримуємо жінок у STEM через менторство, освітні ініціативи та створення шляхів в аквакультурний інжиніринг. Наша відданість гендерній рівності поширюється за межі нашої компанії.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Equality Pillars - Numbered Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Equality & Inclusion Programs' : 'Програми рівності та інклюзії'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Four pillars of our commitment to gender equality and diversity'
                : 'Чотири стовпи нашої відданості гендерній рівності та різноманітності'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Equal Opportunity */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  01
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Scale className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Equal Opportunity Employment' : 'Рівні можливості працевлаштування'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? "Merit-based hiring and promotion with zero tolerance for discrimination. We hire the best person for the job—period. Gender, age, ethnicity, religion don't factor into hiring decisions."
                    : 'Наймання та просування на основі заслуг з нульовою толерантністю до дискримінації. Ми наймаємо найкращу людину для роботи - крапка. Стать, вік, етнічна приналежність, релігія не впливають на рішення.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Merit-based hiring only' : 'Тільки наймання на основі заслуг'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Zero discrimination policy' : 'Політика нульової дискримінації'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Fair promotion pathways' : 'Справедливі шляхи просування'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2: Women in Engineering */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  02
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <Users className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Women in Engineering' : 'Жінки в інжинірингу'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Active support for women in aquaculture engineering through mentorship programs, career development, and creating inclusive technical environments. Our female engineers lead major projects and serve as role models.'
                    : 'Активна підтримка жінок в аквакультурному інжинірингу через програми менторства, розвитку кар\'єри та створення інклюзивного технічного середовища. Наші жінки-інженери керують великими проектами.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Women leading projects' : 'Жінки керують проектами'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Mentorship programs' : 'Програми менторства'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Technical career growth' : "Технічне кар'єрне зростання"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3: Inclusive Culture */}
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
                  {isEnglish ? 'Inclusive Culture' : 'Інклюзивна культура'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Flexible work arrangements, family-friendly policies, and culture of respect for all. Remote work enables parents to excel professionally while raising families. We judge on results, not hours in an office.'
                    : 'Гнучкі робочі умови, сімейно-дружні політики та культура поваги до всіх. Віддалена робота дозволяє батькам досягати професійної досконалості під час виховання сімей.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Flexible remote work' : 'Гнучка віддалена робота'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Family-friendly policies' : 'Сімейно-дружні політики'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Culture of respect' : 'Культура поваги'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4: STEM Education Support */}
            <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#42c997]/30">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#42c997] to-[#00A8B5] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  04
                </div>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-4">
                  <GraduationCap className="w-8 h-8 text-[#1B4B63]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'STEM Education Support' : 'Підтримка STEM-освіти'}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {isEnglish
                    ? 'Encouraging girls and young women to pursue engineering and aquaculture careers. We participate in STEM outreach programs, offer internships for female students, and partner with universities.'
                    : 'Заохочення дівчат та молодих жінок до кар\'єри в інжинірингу та аквакультурі. Ми беремо участь у програмах STEM-аутрічу, пропонуємо стажування для студенток та співпрацюємо з університетами.'}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Student internships' : 'Студентські стажування'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'STEM outreach programs' : 'Програми STEM-аутрічу'}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#42c997] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{isEnglish ? 'Scholarship support' : 'Підтримка стипендій'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equality in Practice */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Equality in Practice' : 'Рівність на практиці'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Real examples of our commitment to gender equality and diversity'
                : 'Реальні приклади нашої відданості гендерній рівності та різноманітності'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#42c997] to-[#00A8B5] mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Female Engineers Leading' : 'Жінки-інженери керують'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Our female engineers lead some of our most complex projects—multi-million dollar RAS facilities, cutting-edge research initiatives, and international collaborations. They mentor junior engineers, present at conferences, and drive innovation.'
                  : 'Наші жінки-інженери керують деякими з наших найскладніших проектів - мультимільйонними RAS-об\'єктами, передовими дослідницькими ініціативами та міжнародними співпрацями.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'Mentorship Programs' : 'Програми менторства'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'Senior female engineers mentor both women and men entering aquaculture engineering. This creates role models, shares knowledge, and builds a supportive professional community. Mentorship accelerates careers.'
                  : 'Старші жінки-інженери менторують як жінок, так і чоловіків, що входять в аквакультурний інжиніринг. Це створює рольові моделі, ділиться знаннями та будує підтримуючу професійну спільноту.'}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#42c997] to-[#00A8B5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {isEnglish ? 'STEM Outreach' : 'STEM-аутріч'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isEnglish
                  ? 'We participate in programs that expose young girls to engineering and aquaculture. School visits, career days, and internship programs show that women belong in technical fields. Early exposure creates interest.'
                  : 'Ми беремо участь у програмах, що знайомлять молодих дівчат з інжинірингом та аквакультурою. Відвідування шкіл, дні кар\'єри та програми стажування показують, що жінки належать до технічних галузей.'}
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
                ? 'Join Our Inclusive Team'
                : 'Приєднайтесь до нашої інклюзивної команди'}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              {isEnglish
                ? "We're building a diverse, talented team that's changing aquaculture. If you value equality, excellence, and innovation, we want to hear from you."
                : 'Ми будуємо різноманітну, талановиту команду, що змінює аквакультуру. Якщо ви цінуєте рівність, досконалість та інновації, ми хочемо почути від вас.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/careers`}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {isEnglish ? 'View Open Positions' : 'Переглянути вакансії'}
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
