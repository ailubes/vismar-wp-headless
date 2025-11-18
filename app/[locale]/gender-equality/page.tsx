import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Heart, Award, GraduationCap, ArrowRight, Globe, Lightbulb, Target, TrendingUp, UserCheck, Briefcase, Scale } from 'lucide-react';
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
      ? 'Gender Equality & Diversity - Diversity Drives Innovation'
      : 'Гендерна рівність та різноманітність - Різноманітність стимулює інновації',
    description: locale === 'en'
      ? '40%+ female team members, equal pay policy, flexible remote work. Building an inclusive culture where diversity drives innovation in aquaculture engineering.'
      : '40%+ членів команди жіночої статі, політика рівної оплати, гнучка віддалена робота. Побудова інклюзивної культури, де різноманітність стимулює інновації.',
  };
}

export default async function GenderEqualityPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  {isEnglish ? 'Our Impact' : 'Наш вплив'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isEnglish
                  ? 'Diversity Drives Innovation'
                  : 'Різноманітність стимулює інновації'}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                {isEnglish
                  ? 'Building an inclusive culture where everyone thrives. Equal opportunity, fair compensation, and respect for all are the foundations of our success.'
                  : 'Побудова інклюзивної культури, де кожен процвітає. Рівні можливості, справедлива компенсація та повага до всіх - основи нашого успіху.'}
              </p>
              <Link href={`/${locale}/careers`}>
                <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                  {isEnglish ? 'Join Our Team' : 'Приєднатися до команди'}
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
                    ? 'At Vismar Aqua, diversity and inclusion aren\'t just buzzwords—they\'re core values that make us stronger. We believe that diverse teams create better solutions, and equal opportunity is both morally right and good business. Gender equality is fundamental to our culture and operations.'
                    : 'У Vismar Aqua різноманітність та інклюзія - це не просто гучні слова, а основні цінності, що роблять нас сильнішими. Ми віримо, що різноманітні команди створюють кращі рішення, а рівні можливості є морально правильними та хорошим бізнесом.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  {isEnglish
                    ? 'Over 40% of our team are women, many in senior engineering and leadership positions. We enforce strict equal pay policies—same work, same compensation, regardless of gender. Our flexible, remote-first work environment enables parents and caregivers to balance professional excellence with family responsibilities.'
                    : 'Понад 40% нашої команди - жінки, багато на старших інженерних та керівних посадах. Ми застосовуємо сувору політику рівної оплати - однакова робота, однакова компенсація, незалежно від статі. Наше гнучке віддалене робоче середовище дозволяє батькам та опікунам балансувати професійну досконалість з сімейними обов\'язками.'}
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {isEnglish
                    ? 'We actively support women in STEM through mentorship, educational initiatives, and creating pathways into aquaculture engineering. Our commitment to gender equality extends beyond our company—we want to see more women leading the aquaculture industry globally.'
                    : 'Ми активно підтримуємо жінок у STEM через менторство, освітні ініціативи та створення шляхів в аквакультурний інжиніринг. Наша відданість гендерній рівності поширюється за межі нашої компанії - ми хочемо бачити більше жінок, що керують індустрією аквакультури глобально.'}
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
                {isEnglish ? 'Equality & Inclusion Programs' : 'Програми рівності та інклюзії'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Four pillars of our commitment to gender equality and diversity'
                  : 'Чотири стовпи нашої відданості гендерній рівності та різноманітності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-lg">
                    <Scale className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Equal Opportunity Employment' : 'Рівні можливості працевлаштування'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Merit-based hiring and promotion with zero tolerance for discrimination. We hire the best person for the job—period. Gender, age, ethnicity, religion, or background don\'t factor into hiring decisions. Only skills, experience, and cultural fit matter. This creates a team of truly exceptional professionals.'
                        : 'Наймання та просування на основі заслуг з нульовою толерантністю до дискримінації. Ми наймаємо найкращу людину для роботи - крапка. Стать, вік, етнічна приналежність, релігія чи походження не впливають на рішення про наймання. Важливі лише навички, досвід та культурна відповідність.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <UserCheck className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Merit-based hiring only' : 'Тільки наймання на основі заслуг'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Scale className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Zero discrimination policy' : 'Політика нульової дискримінації'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <TrendingUp className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Fair promotion pathways' : 'Справедливі шляхи просування'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Women in Engineering' : 'Жінки в інжинірингу'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Active support for women in aquaculture engineering through mentorship programs, career development, and creating inclusive technical environments. Our female engineers lead major projects, mentor junior team members, and serve as role models. We prove that engineering excellence has no gender.'
                        : 'Активна підтримка жінок в аквакультурному інжинірингу через програми менторства, розвитку кар\'єри та створення інклюзивного технічного середовища. Наші жінки-інженери керують великими проектами, менторять молодших членів команди та служать рольовими моделями.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Women leading projects' : 'Жінки керують проектами'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Mentorship programs' : 'Програми менторства'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Technical career growth' : 'Технічне кар\'єрне зростання'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white rounded-lg">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'Inclusive Culture' : 'Інклюзивна культура'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Flexible work arrangements, family-friendly policies, and culture of respect for all. Remote work enables parents to excel professionally while raising families. We judge on results, not hours in an office. Parental leave, flexible schedules, and understanding that life happens outside work.'
                        : 'Гнучкі робочі умови, сімейно-дружні політики та культура поваги до всіх. Віддалена робота дозволяє батькам досягати професійної досконалості під час виховання сімей. Ми оцінюємо за результатами, а не годинами в офісі.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <Globe className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Flexible remote work' : 'Гнучка віддалена робота'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Heart className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Family-friendly policies' : 'Сімейно-дружні політики'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Culture of respect' : 'Культура поваги'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {isEnglish ? 'STEM Education Support' : 'Підтримка STEM-освіти'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {isEnglish
                        ? 'Encouraging girls and young women to pursue engineering and aquaculture careers. We participate in STEM outreach programs, offer internships for female students, and partner with universities to support women in technical fields. Building the next generation of diverse engineering talent.'
                        : 'Заохочення дівчат та молодих жінок до кар\'єри в інжинірингу та аквакультурі. Ми беремо участь у програмах STEM-аутрічу, пропонуємо стажування для студенток та співпрацюємо з університетами для підтримки жінок у технічних галузях.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-700">
                        <GraduationCap className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Student internships' : 'Студентські стажування'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Globe className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'STEM outreach programs' : 'Програми STEM-аутрічу'}</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <Award className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span>{isEnglish ? 'Scholarship support' : 'Підтримка стипендій'}</span>
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
                {isEnglish ? 'Diversity & Equality by Numbers' : 'Різноманітність та рівність в цифрах'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Measurable progress toward a more inclusive workplace'
                  : 'Вимірний прогрес до більш інклюзивного робочого місця'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <StatCard
                value={40}
                suffix="%+"
                label={isEnglish ? 'Female Team Members' : 'Членів команди жіночої статі'}
                description={isEnglish ? 'Including senior positions' : 'Включаючи старші посади'}
                icon={<Users className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <StatCard
                value={100}
                suffix="%"
                label={isEnglish ? 'Equal Pay Policy' : 'Політика рівної оплати'}
                description={isEnglish ? 'Same work, same pay' : 'Однакова робота, однакова оплата'}
                icon={<Scale className="w-12 h-12" />}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <StatCard
                value={100}
                suffix="%"
                label={isEnglish ? 'Flexible Remote Work' : 'Гнучка віддалена робота'}
                description={isEnglish ? 'Work-life balance enabled' : 'Баланс роботи та життя'}
                icon={<Globe className="w-12 h-12" />}
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
                {isEnglish ? 'Equality in Practice' : 'Рівність на практиці'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Real examples of our commitment to gender equality and diversity'
                  : 'Реальні приклади нашої відданості гендерній рівності та різноманітності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Female Engineers Leading' : 'Жінки-інженери керують'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Our female engineers lead some of our most complex projects—multi-million dollar RAS facilities, cutting-edge research initiatives, and international collaborations. They mentor junior engineers, present at conferences, and drive innovation. Engineering excellence knows no gender boundaries.'
                      : 'Наші жінки-інженери керують деякими з наших найскладніших проектів - мультимільйонними RAS-об\'єктами, передовими дослідницькими ініціативами та міжнародними співпрацями. Вони менторять молодших інженерів, виступають на конференціях та стимулюють інновації.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'Mentorship Programs' : 'Програми менторства'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'Senior female engineers mentor both women and men entering aquaculture engineering. This creates role models, shares knowledge, and builds a supportive professional community. Mentorship accelerates careers and creates pathways for more women into technical leadership.'
                      : 'Старші жінки-інженери менторують як жінок, так і чоловіків, що входять в аквакультурний інжиніринг. Це створює рольові моделі, ділиться знаннями та будує підтримуючу професійну спільноту. Менторство прискорює кар\'єри.'}
                  </p>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {isEnglish ? 'STEM Outreach' : 'STEM-аутріч'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {isEnglish
                      ? 'We participate in programs that expose young girls to engineering and aquaculture. School visits, career days, and internship programs show that women belong in technical fields. Early exposure creates interest, and interest creates careers. Building the next generation.'
                      : 'Ми беремо участь у програмах, що знайомлять молодих дівчат з інжинірингом та аквакультурою. Відвідування шкіл, дні кар\'єри та програми стажування показують, що жінки належать до технічних галузей. Раннє знайомство створює інтерес.'}
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
                {isEnglish ? 'Our Equality Roadmap' : 'Наша дорожня карта рівності'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isEnglish
                  ? 'Future goals for advancing gender equality and diversity'
                  : 'Майбутні цілі для просування гендерної рівності та різноманітності'}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-lg flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? '50/50 Gender Balance' : 'Гендерний баланс 50/50'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Goal: Achieve 50/50 gender balance across all levels by 2027. This includes technical roles, leadership positions, and decision-making bodies. Not quotas—genuine equality through merit-based systems and inclusive recruitment. Balanced perspectives create better solutions.'
                          : 'Ціль: Досягти гендерного балансу 50/50 на всіх рівнях до 2027 року. Це включає технічні ролі, керівні посади та органи прийняття рішень. Не квоти - справжня рівність через системи на основі заслуг та інклюзивний рекрутинг.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg flex-shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'More Women in Leadership' : 'Більше жінок в керівництві'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Actively developing female talent for senior leadership roles through targeted development programs, leadership training, and succession planning. Creating clear pathways to executive positions ensures the next generation of aquaculture leaders is diverse.'
                          : 'Активний розвиток жіночого таланту для старших керівних ролей через цільові програми розвитку, лідерське навчання та планування наступництва. Створення чітких шляхів до виконавчих посад забезпечує різноманітність наступного покоління лідерів.'}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-lg flex-shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {isEnglish ? 'Scholarship Programs' : 'Стипендіальні програми'}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {isEnglish
                          ? 'Launch scholarship program specifically for women studying aquaculture engineering, biotechnology, and related fields. Financial support removes barriers to education. Partner with universities to create pathways from education to employment at Vismar Aqua.'
                          : 'Запуск стипендіальної програми спеціально для жінок, що вивчають аквакультурний інжиніринг, біотехнологію та суміжні галузі. Фінансова підтримка усуває бар\'єри до освіти. Партнерство з університетами для створення шляхів від освіти до працевлаштування.'}
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
                  ? 'Join Our Inclusive Team'
                  : 'Приєднайтесь до нашої інклюзивної команди'}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {isEnglish
                  ? 'We\'re building a diverse, talented team that\'s changing aquaculture. If you value equality, excellence, and innovation, we want to hear from you.'
                  : 'Ми будуємо різноманітну, талановиту команду, що змінює аквакультуру. Якщо ви цінуєте рівність, досконалість та інновації, ми хочемо почути від вас.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/careers`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                    {isEnglish ? 'View Open Positions' : 'Переглянути вакансії'}
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
