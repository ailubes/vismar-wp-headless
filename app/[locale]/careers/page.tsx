import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase, Users, Rocket, Target, CheckCircle, Mail, Heart, TrendingUp, Lightbulb, Globe, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Careers - Join Vismar Aqua Team'
      : 'Кар\'єра - Приєднуйтесь до команди Vismar Aqua',
    description: locale === 'en'
      ? 'Join our team of aquaculture engineering experts. Build the future of sustainable food production with innovative technology and impactful work.'
      : 'Приєднуйтесь до нашої команди експертів з інжинірингу аквакультури. Будуйте майбутнє сталого виробництва продуктів харчування з інноваційними технологіями.',
  };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    en: {
      breadcrumb: 'Careers',
      hero: {
        title: 'Join Our Team',
        subtitle: 'Build the future of aquaculture engineering',
        description: 'We\'re looking for passionate engineers, developers, and innovators who want to make a real impact on global food production while working with cutting-edge technology.',
        cta: 'View Open Positions'
      },
      whyWork: {
        title: 'Why Work With Vismar Aqua',
        subtitle: 'More than just a job',
        cards: [
          {
            icon: Lightbulb,
            title: 'Innovation & Technology',
            description: 'Work with the latest AI, 3D CAD, and engineering tools. We invest in cutting-edge technology and give our team the best tools to succeed.',
            color: 'purple'
          },
          {
            icon: Globe,
            title: 'Global Impact',
            description: 'Your work directly contributes to sustainable food production for millions of people. Projects span 20+ countries across multiple continents.',
            color: 'blue'
          },
          {
            icon: TrendingUp,
            title: 'Career Growth',
            description: 'Rapid advancement opportunities in a growing company. Learn from experienced mentors and expand your skills across multiple disciplines.',
            color: 'green'
          },
          {
            icon: Heart,
            title: 'Culture & Values',
            description: 'Collaborative, supportive team environment. We value work-life balance, professional development, and treating each other with respect.',
            color: 'red'
          }
        ]
      },
      opportunities: {
        title: 'Current Opportunities',
        subtitle: 'Open Positions',
        description: 'We\'re always looking for talented individuals to join our team. If you don\'t see a perfect fit below, we still want to hear from you.',
        noPositions: 'No specific openings at the moment',
        generalApplication: 'However, we\'re always interested in meeting talented professionals. Send your CV and let us know how you can contribute to our mission.',
        email: 'careers@vismaraqua.com.ua',
        emailLabel: 'Email your CV'
      },
      looking: {
        title: 'What We\'re Looking For',
        subtitle: 'Skills & Roles',
        roles: [
          {
            icon: Briefcase,
            title: 'Engineers',
            skills: ['Mechanical Engineering', 'Process Engineering', 'Civil/Structural Engineering', 'Water Treatment', 'HVAC Systems', 'AutoCAD/Revit'],
            description: 'Design aquaculture facilities, systems, and equipment'
          },
          {
            icon: Rocket,
            title: 'Developers',
            skills: ['Full-Stack Development', 'AI/ML', 'Computer Vision', 'React/Next.js', 'Python/Node.js', 'Cloud Architecture'],
            description: 'Build digital solutions and AI-powered tools for aquaculture'
          },
          {
            icon: Target,
            title: 'Project Managers',
            skills: ['Project Management', 'Client Relations', 'Technical Communication', 'Budgeting', 'Risk Management', 'Agile/Scrum'],
            description: 'Lead projects from concept to commissioning'
          },
          {
            icon: Users,
            title: 'Specialists',
            skills: ['Aquaculture Biology', 'Business Development', 'Sales & Marketing', 'Technical Writing', 'Quality Assurance', 'R&D'],
            description: 'Support our technical and business operations'
          }
        ]
      },
      process: {
        title: 'Application Process',
        subtitle: 'How It Works',
        steps: [
          {
            number: '01',
            title: 'Apply',
            description: 'Send your CV and cover letter to careers@vismaraqua.com.ua. Tell us about your experience and why you want to join our team.'
          },
          {
            number: '02',
            title: 'Initial Interview',
            description: 'We\'ll review your application and schedule a video call to discuss your background, skills, and career goals.'
          },
          {
            number: '03',
            title: 'Technical Assessment',
            description: 'Depending on the role, you may complete a technical task or case study to demonstrate your skills.'
          },
          {
            number: '04',
            title: 'Team Interview',
            description: 'Meet with team members and leadership to discuss the role, projects, and our company culture.'
          },
          {
            number: '05',
            title: 'Offer',
            description: 'If it\'s a good fit, we\'ll extend an offer and welcome you to the Vismar Aqua family!'
          }
        ]
      },
      benefits: {
        title: 'Benefits & Perks',
        subtitle: 'What We Offer',
        items: [
          { icon: Globe, text: 'Fully remote or hybrid work options' },
          { icon: TrendingUp, text: 'Competitive salary and performance bonuses' },
          { icon: Lightbulb, text: 'Professional development and training budget' },
          { icon: Zap, text: 'Latest tools and technology' },
          { icon: Users, text: 'Collaborative, supportive team culture' },
          { icon: Heart, text: 'Flexible working hours' },
          { icon: Award, text: 'International project exposure' },
          { icon: Rocket, text: 'Opportunity to shape the future of aquaculture' }
        ]
      },
      cta: {
        title: 'Ready to Make an Impact?',
        description: 'Join us in revolutionizing aquaculture engineering. Send your CV and let\'s start a conversation about your future with Vismar Aqua.',
        buttonText: 'Send Your Application',
        buttonEmail: 'careers@vismaraqua.com.ua'
      }
    },
    uk: {
      breadcrumb: 'Кар\'єра',
      hero: {
        title: 'Приєднуйтесь до нашої команди',
        subtitle: 'Будуйте майбутнє інжинірингу аквакультури',
        description: 'Ми шукаємо пристрасних інженерів, розробників та новаторів, які хочуть справжньо вплинути на глобальне виробництво продуктів харчування, працюючи з передовими технологіями.',
        cta: 'Переглянути вакансії'
      },
      whyWork: {
        title: 'Чому варто працювати з Vismar Aqua',
        subtitle: 'Більше, ніж просто робота',
        cards: [
          {
            icon: Lightbulb,
            title: 'Інновації та технології',
            description: 'Працюйте з найновішими AI, 3D CAD та інженерними інструментами. Ми інвестуємо в передові технології та надаємо команді найкращі інструменти для успіху.',
            color: 'purple'
          },
          {
            icon: Globe,
            title: 'Глобальний вплив',
            description: 'Ваша робота безпосередньо сприяє сталому виробництву продуктів харчування для мільйонів людей. Проекти охоплюють 20+ країн на кількох континентах.',
            color: 'blue'
          },
          {
            icon: TrendingUp,
            title: 'Кар\'єрне зростання',
            description: 'Швидкі можливості просування в компанії, що розвивається. Вчіться у досвідчених наставників та розширюйте свої навички в різних дисциплінах.',
            color: 'green'
          },
          {
            icon: Heart,
            title: 'Культура та цінності',
            description: 'Колаборативне, підтримуюче командне середовище. Ми цінуємо баланс між роботою та особистим життям, професійний розвиток та взаємоповагу.',
            color: 'red'
          }
        ]
      },
      opportunities: {
        title: 'Поточні можливості',
        subtitle: 'Відкриті вакансії',
        description: 'Ми завжди шукаємо талановитих людей для приєднання до нашої команди. Якщо ви не знайшли ідеального варіанту нижче, ми все одно хочемо почути від вас.',
        noPositions: 'Наразі немає конкретних вакансій',
        generalApplication: 'Однак, нас завжди цікавлять талановиті професіонали. Надішліть своє резюме та розкажіть, як ви можете сприяти нашій місії.',
        email: 'careers@vismaraqua.com.ua',
        emailLabel: 'Надішліть своє резюме'
      },
      looking: {
        title: 'Що ми шукаємо',
        subtitle: 'Навички та ролі',
        roles: [
          {
            icon: Briefcase,
            title: 'Інженери',
            skills: ['Механічний інжиніринг', 'Процесний інжиніринг', 'Будівельний інжиніринг', 'Водопідготовка', 'Системи HVAC', 'AutoCAD/Revit'],
            description: 'Проектування об\'єктів, систем та обладнання аквакультури'
          },
          {
            icon: Rocket,
            title: 'Розробники',
            skills: ['Full-Stack розробка', 'AI/ML', 'Комп\'ютерний зір', 'React/Next.js', 'Python/Node.js', 'Хмарна архітектура'],
            description: 'Створення цифрових рішень та інструментів з AI для аквакультури'
          },
          {
            icon: Target,
            title: 'Проект-менеджери',
            skills: ['Управління проектами', 'Взаємовідносини з клієнтами', 'Технічна комунікація', 'Бюджетування', 'Управління ризиками', 'Agile/Scrum'],
            description: 'Керівництво проектами від концепції до введення в експлуатацію'
          },
          {
            icon: Users,
            title: 'Спеціалісти',
            skills: ['Біологія аквакультури', 'Розвиток бізнесу', 'Продажі та маркетинг', 'Технічне письмо', 'Забезпечення якості', 'R&D'],
            description: 'Підтримка наших технічних та бізнес-операцій'
          }
        ]
      },
      process: {
        title: 'Процес подання заявки',
        subtitle: 'Як це працює',
        steps: [
          {
            number: '01',
            title: 'Подати заявку',
            description: 'Надішліть своє резюме та супровідний лист на careers@vismaraqua.com.ua. Розкажіть про свій досвід та чому ви хочете приєднатися до нашої команди.'
          },
          {
            number: '02',
            title: 'Початкове інтерв\'ю',
            description: 'Ми розглянемо вашу заявку та призначимо відеодзвінок для обговорення вашого досвіду, навичок та кар\'єрних цілей.'
          },
          {
            number: '03',
            title: 'Технічна оцінка',
            description: 'Залежно від ролі, ви можете виконати технічне завдання або кейс-стаді для демонстрації своїх навичок.'
          },
          {
            number: '04',
            title: 'Інтерв\'ю з командою',
            description: 'Зустрічайтеся з членами команди та керівництвом для обговорення ролі, проектів та нашої корпоративної культури.'
          },
          {
            number: '05',
            title: 'Пропозиція',
            description: 'Якщо все підходить, ми зробимо пропозицію та привітаємо вас у сім\'ї Vismar Aqua!'
          }
        ]
      },
      benefits: {
        title: 'Переваги та бонуси',
        subtitle: 'Що ми пропонуємо',
        items: [
          { icon: Globe, text: 'Повністю віддалена або гібридна робота' },
          { icon: TrendingUp, text: 'Конкурентна зарплата та бонуси за результатами' },
          { icon: Lightbulb, text: 'Бюджет на професійний розвиток та навчання' },
          { icon: Zap, text: 'Найновіші інструменти та технології' },
          { icon: Users, text: 'Колаборативна, підтримуюча командна культура' },
          { icon: Heart, text: 'Гнучкий робочий графік' },
          { icon: Award, text: 'Міжнародний досвід роботи над проектами' },
          { icon: Rocket, text: 'Можливість формувати майбутнє аквакультури' }
        ]
      },
      cta: {
        title: 'Готові зробити вплив?',
        description: 'Приєднуйтесь до нас у революціонізації інжинірингу аквакультури. Надішліть своє резюме, і давайте почнемо розмову про ваше майбутнє з Vismar Aqua.',
        buttonText: 'Надіслати заявку',
        buttonEmail: 'careers@vismaraqua.com.ua'
      }
    }
  };

  const t = isEnglish ? content.en : content.uk;

  const getColorClasses = (color: string) => {
    const colors = {
      purple: { bg: 'bg-purple-50', icon: 'bg-purple-500', text: 'text-purple-600' },
      blue: { bg: 'bg-blue-50', icon: 'bg-blue-500', text: 'text-blue-600' },
      green: { bg: 'bg-green-50', icon: 'bg-green-500', text: 'text-green-600' },
      red: { bg: 'bg-red-50', icon: 'bg-red-500', text: 'text-red-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Section background="light" spacing="sm">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-brand-primary transition-colors">
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{t.breadcrumb}</span>
          </nav>
        </div>
      </Section>

      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-white/90 font-semibold">
                {t.hero.subtitle}
              </p>
              <p className="text-xl mb-10 text-white/80 max-w-3xl mx-auto">
                {t.hero.description}
              </p>
              <a href="#opportunities">
                <Button
                  variant="accent"
                  size="lg"
                  className="!bg-white !text-brand-primary hover:!bg-gray-100 text-lg px-8 py-4"
                >
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {t.whyWork.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.whyWork.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.whyWork.cards.map((card, index) => {
              const Icon = card.icon;
              const colors = getColorClasses(card.color);
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`${colors.bg} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                    <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Current Opportunities */}
      <Section id="opportunities" background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                {t.opportunities.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.opportunities.title}
              </h2>
              <p className="text-xl text-gray-600">
                {t.opportunities.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-lg text-center">
              <Briefcase className="w-20 h-20 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.opportunities.noPositions}
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                {t.opportunities.generalApplication}
              </p>
              <a href={`mailto:${t.opportunities.email}`}>
                <Button variant="gradient" size="lg" className="text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  {t.opportunities.emailLabel}
                </Button>
              </a>
              <p className="text-gray-600 mt-4">
                {t.opportunities.email}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What We're Looking For */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {t.looking.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.looking.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.looking.roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {role.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {role.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {role.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-brand-success flex-shrink-0" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                {t.process.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.process.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {t.process.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 flex items-start gap-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-2">
                {t.benefits.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.benefits.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.benefits.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <Icon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                    <p className="text-gray-900 font-medium">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-brand-accent via-brand-primary to-brand-secondary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.cta.title}
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-3xl mx-auto">
                {t.cta.description}
              </p>
              <a href={`mailto:${t.cta.buttonEmail}`}>
                <Button
                  variant="accent"
                  size="lg"
                  className="!bg-white !text-brand-primary hover:!bg-gray-100 text-lg px-8 py-4"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t.cta.buttonText}
                </Button>
              </a>
              <p className="text-white/80 mt-6 text-lg">
                {t.cta.buttonEmail}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
