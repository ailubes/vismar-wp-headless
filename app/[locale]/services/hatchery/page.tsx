import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Baby,
  Egg,
  Fish,
  Droplets,
  Microscope,
  Waves,
  Settings,
  Wrench,
  FileText,
  Calculator,
  Package,
  Rocket,
  Filter,
  Wind,
  Gauge,
  Zap,
  Thermometer,
  Shield,
  Factory,
  GraduationCap,
  Store,
  Building2,
  CheckCircle,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Activity
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Hatchery Engineering & Design | Vismar Aqua'
      : 'Інжиніринг та проектування інкубаторіїв | Vismar Aqua',
    description: locale === 'en'
      ? 'Complete hatchery systems for consistent, high-quality fingerling production. Expert design of broodstock, spawning, incubation, and early rearing facilities with 50% lower costs.'
      : 'Повні системи інкубаторіїв для стабільного виробництва високоякісних мальків. Експертне проектування об\'єктів для плідників, нересту, інкубації та раннього вирощування зі зниженням витрат на 50%.',
  };
}

export default async function HatcheryPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Hatchery Engineering & Design' : 'Інжиніринг та проектування інкубаторіїв',
      subtitle: isEnglish
        ? 'Complete hatchery systems for consistent, high-quality fingerling production'
        : 'Повні системи інкубаторіїв для стабільного виробництва високоякісних мальків',
      cta: isEnglish ? 'Design Your Hatchery' : 'Спроектувати ваш інкубаторій',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Specialized Hatchery Systems' : 'Спеціалізовані системи інкубаторіїв',
      text1: isEnglish
        ? 'Hatcheries are critical for aquaculture operations, providing high-quality fingerlings and fry for grow-out facilities. A well-designed hatchery ensures consistent supply, superior genetics, and biosecurity while reducing long-term costs and dependency on external suppliers.'
        : 'Інкубаторії є критично важливими для операцій аквакультури, забезпечуючи високоякісні мальки та личинки для вирощувальних об\'єктів. Добре спроектований інкубаторій забезпечує стабільні поставки, чудову генетику та біобезпеку, знижуючи довгострокові витрати та залежність від зовнішніх постачальників.',
      text2: isEnglish
        ? 'Vismar Aqua designs complete hatchery systems including broodstock management, spawning facilities, egg incubation, larval rearing, and live feed production. Our AI-accelerated design process delivers cost-effective, reliable hatchery solutions tailored to your target species and production capacity.'
        : 'Vismar Aqua проектує повні системи інкубаторіїв, включаючи управління плідниками, об\'єкти нересту, інкубацію ікри, вирощування личинок та виробництво живого корму. Наш AI-прискорений процес проектування забезпечує економічно ефективні, надійні рішення для інкубаторіїв, адаптовані до ваших цільових видів та виробничої потужності.',
      whyHatcheryTitle: isEnglish ? 'Why Invest in a Hatchery?' : 'Чому варто інвестувати в інкубаторій?',
      benefits: [
        {
          icon: Shield,
          title: isEnglish ? 'Consistent Supply' : 'Стабільні поставки',
          description: isEnglish ? 'Guaranteed fingerling availability year-round, independent of external suppliers' : 'Гарантована доступність мальків цілий рік, незалежно від зовнішніх постачальників',
        },
        {
          icon: Microscope,
          title: isEnglish ? 'Biosecurity Control' : 'Контроль біобезпеки',
          description: isEnglish ? 'Prevent disease introduction from external fingerling sources' : 'Запобігання занесенню хвороб від зовнішніх джерел мальків',
        },
        {
          icon: Fish,
          title: isEnglish ? 'Genetic Control' : 'Генетичний контроль',
          description: isEnglish ? 'Select and breed for superior traits: growth rate, disease resistance, quality' : 'Відбір та розведення кращих ознак: темпи росту, стійкість до хвороб, якість',
        },
        {
          icon: DollarSign,
          title: isEnglish ? 'Cost Savings' : 'Економія витрат',
          description: isEnglish ? 'Long-term savings vs. purchasing fingerlings; vertical integration benefits' : 'Довгострокова економія проти купівлі мальків; переваги вертикальної інтеграції',
        },
      ],
    },
    // When to Build
    whenToBuild: {
      title: isEnglish ? 'When to Build a Hatchery vs. Buying Fingerlings' : 'Коли будувати інкубаторій проти купівлі мальків',
      scenarios: [
        {
          title: isEnglish ? 'Build a Hatchery When:' : 'Будуйте інкубаторій, якщо:',
          points: [
            isEnglish ? 'Production exceeds 50-100 tons annually' : 'Виробництво перевищує 50-100 тонн щорічно',
            isEnglish ? 'Fingerling supply is unreliable or expensive' : 'Постачання мальків ненадійне або дороге',
            isEnglish ? 'You want genetic improvement programs' : 'Ви хочете програми генетичного покращення',
            isEnglish ? 'High biosecurity is critical' : 'Висока біобезпека є критичною',
          ],
        },
        {
          title: isEnglish ? 'Buy Fingerlings When:' : 'Купуйте мальки, якщо:',
          points: [
            isEnglish ? 'Small-scale operations (<50 tons/year)' : 'Невеликі операції (<50 тонн/рік)',
            isEnglish ? 'Reliable local fingerling suppliers exist' : 'Існують надійні місцеві постачальники мальків',
            isEnglish ? 'Capital for hatchery construction is limited' : 'Капітал для будівництва інкубаторію обмежений',
            isEnglish ? 'Testing species or markets first' : 'Спочатку тестуєте види або ринки',
          ],
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our Hatchery Services' : 'Наші послуги інкубаторію',
      items: [
        {
          icon: FileText,
          title: isEnglish ? 'Complete System Design' : 'Повне проектування системи',
          description: isEnglish
            ? 'End-to-end hatchery design including broodstock facilities, spawning rooms, incubation systems, larval rearing, and live feed production units.'
            : 'Наскрізне проектування інкубаторію, включаючи об\'єкти для плідників, кімнати нересту, системи інкубації, вирощування личинок та виробничі одиниці живого корму.',
        },
        {
          icon: Microscope,
          title: isEnglish ? 'Broodstock Facility Engineering' : 'Інжиніринг об\'єктів для плідників',
          description: isEnglish
            ? 'Specialized broodstock tanks, conditioning systems, photoperiod control, and breeding protocols for optimal spawning performance.'
            : 'Спеціалізовані резервуари для плідників, системи кондиціювання, контроль фотоперіоду та протоколи розведення для оптимальної продуктивності нересту.',
        },
        {
          icon: Package,
          title: isEnglish ? 'Nursery & Grow-Out Integration' : 'Інтеграція розсадника та вирощування',
          description: isEnglish
            ? 'Seamless integration with nursery and grow-out facilities, weaning protocols, and fingerling transfer systems.'
            : 'Безшовна інтеграція з розсадником та вирощувальними об\'єктами, протоколи відлучення та системи передачі мальків.',
        },
      ],
    },
    // Key Components
    components: {
      title: isEnglish ? 'Key Hatchery Components' : 'Ключові компоненти інкубаторію',
      items: [
        {
          icon: Fish,
          title: isEnglish ? 'Broodstock Conditioning Tanks' : 'Резервуари кондиціювання плідників',
          description: isEnglish ? 'Temperature, light, and photoperiod control for spawning readiness' : 'Контроль температури, світла та фотоперіоду для готовності до нересту',
        },
        {
          icon: Activity,
          title: isEnglish ? 'Spawning & Stripping Facilities' : 'Об\'єкти нересту та здою',
          description: isEnglish ? 'Dedicated spawning tanks, egg collection, fertilization stations' : 'Виділені резервуари нересту, збір ікри, станції запліднення',
        },
        {
          icon: Egg,
          title: isEnglish ? 'Egg Incubation Systems' : 'Системи інкубації ікри',
          description: isEnglish ? 'Temperature-controlled incubators, flow management, disease prevention' : 'Інкубатори з контролем температури, управління потоком, профілактика хвороб',
        },
        {
          icon: Baby,
          title: isEnglish ? 'Larval Rearing Tanks' : 'Резервуари для вирощування личинок',
          description: isEnglish ? 'First feeding tanks, optimal water quality, gentle flow patterns' : 'Резервуари першого годування, оптимальна якість води, м\'які схеми потоку',
        },
        {
          icon: Microscope,
          title: isEnglish ? 'Live Feed Production' : 'Виробництво живого корму',
          description: isEnglish ? 'Rotifer and artemia culture systems, algae production' : 'Системи культивування коловерток та артемії, виробництво водоростей',
        },
        {
          icon: Droplets,
          title: isEnglish ? 'Water Quality Management' : 'Управління якістю води',
          description: isEnglish ? 'Filtration, temperature control, oxygen monitoring, water treatment' : 'Фільтрація, контроль температури, моніторинг кисню, очищення води',
        },
        {
          icon: Shield,
          title: isEnglish ? 'Biosecurity Systems' : 'Системи біобезпеки',
          description: isEnglish ? 'Quarantine protocols, water treatment, footbaths, access control' : 'Протоколи карантину, очищення води, ванночки для ніг, контроль доступу',
        },
        {
          icon: Gauge,
          title: isEnglish ? 'Monitoring & Automation' : 'Моніторинг та автоматизація',
          description: isEnglish ? 'Real-time sensors, automated feeding, alarm systems' : 'Датчики в реальному часі, автоматизоване годування, системи сигналізації',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Hatchery Design Process' : 'Процес проектування інкубаторію',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Species Selection & Requirements Analysis' : 'Вибір видів та аналіз вимог',
          description: isEnglish
            ? 'Identify target species, production capacity goals, broodstock needs, and species-specific requirements for optimal hatchery design.'
            : 'Визначення цільових видів, цілей виробничої потужності, потреб плідників та специфічних вимог видів для оптимального проектування інкубаторію.',
        },
        {
          icon: Calculator,
          number: '02',
          title: isEnglish ? 'Facility Layout & Capacity Planning' : 'Компоновка об\'єкта та планування потужності',
          description: isEnglish
            ? 'Design facility layout, calculate tank sizes, plan workflow from broodstock to fingerling output, optimize space utilization.'
            : 'Проектування компоновки об\'єкта, розрахунок розмірів резервуарів, планування робочого процесу від плідників до випуску мальків, оптимізація використання простору.',
        },
        {
          icon: Package,
          number: '03',
          title: isEnglish ? 'System Design & Equipment Specification' : 'Проектування системи та специфікація обладнання',
          description: isEnglish
            ? 'Select incubation systems, water treatment equipment, live feed production units, and monitoring technology for your hatchery.'
            : 'Вибір систем інкубації, обладнання для очищення води, виробничих одиниць живого корму та технології моніторингу для вашого інкубаторію.',
        },
        {
          icon: Rocket,
          number: '04',
          title: isEnglish ? 'Commissioning & Training' : 'Введення в експлуатацію та навчання',
          description: isEnglish
            ? 'System startup, broodstock conditioning protocols, spawning procedures, and comprehensive staff training for successful operations.'
            : 'Запуск системи, протоколи кондиціювання плідників, процедури нересту та комплексне навчання персоналу для успішних операцій.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'Species-Specific Protocols' : 'Специфічні для видів протоколи',
          description: isEnglish ? 'Customized breeding and rearing protocols for your target species' : 'Індивідуальні протоколи розведення та вирощування для ваших цільових видів',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Biosecurity-First Design' : 'Дизайн з пріоритетом біобезпеки',
          description: isEnglish ? 'Disease prevention built into facility layout and workflows' : 'Профілактика хвороб вбудована в компоновку об\'єкта та робочі процеси',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Automated Feeding Systems' : 'Автоматизовані системи годування',
          description: isEnglish ? 'Precise feeding schedules for optimal larval development' : 'Точні графіки годування для оптимального розвитку личинок',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Water Quality Optimization' : 'Оптимізація якості води',
          description: isEnglish ? 'Real-time monitoring and control for critical parameters' : 'Моніторинг та контроль в реальному часі для критичних параметрів',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Scalable Production' : 'Масштабоване виробництво',
          description: isEnglish ? 'Design for future expansion and capacity increases' : 'Проектування для майбутнього розширення та збільшення потужності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Energy-Efficient Systems' : 'Енергоефективні системи',
          description: isEnglish ? 'Minimize operational costs through optimized energy use' : 'Мінімізація експлуатаційних витрат через оптимізоване використання енергії',
        },
      ],
    },
    // Species Support
    species: {
      title: isEnglish ? 'Species We Support' : 'Види, які ми підтримуємо',
      items: [
        {
          title: isEnglish ? 'Salmon & Trout' : 'Лосось та форель',
          description: isEnglish ? 'Salmonid hatcheries, smolt production, egg incubation' : 'Лососеві інкубаторії, виробництво смолтів, інкубація ікри',
        },
        {
          title: isEnglish ? 'Tilapia' : 'Тіляпія',
          description: isEnglish ? 'Mouth-brooding protocols, fry collection, sex reversal' : 'Протоколи виношування в роті, збір мальків, зміна статі',
        },
        {
          title: isEnglish ? 'Sea Bass & Bream' : 'Сібас та дорада',
          description: isEnglish ? 'Marine hatcheries, live feed production, larval rearing' : 'Морські інкубаторії, виробництво живого корму, вирощування личинок',
        },
        {
          title: isEnglish ? 'Shrimp & Prawns' : 'Креветки',
          description: isEnglish ? 'Maturation units, nauplii production, post-larval rearing' : 'Підрозділи дозрівання, виробництво науплій, вирощування постличинок',
        },
        {
          title: isEnglish ? 'Sturgeon & Caviar' : 'Осетр та ікра',
          description: isEnglish ? 'Specialized broodstock management, caviar production facilities' : 'Спеціалізоване управління плідниками, об\'єкти виробництва ікри',
        },
        {
          title: isEnglish ? 'Ornamental Fish' : 'Декоративні риби',
          description: isEnglish ? 'Multi-species hatcheries, breeding programs, quality control' : 'Багатовидові інкубаторії, програми розведення, контроль якості',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua' : 'Чому обрати Vismar Aqua',
      items: [
        {
          title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering costs while delivering optimized, efficient hatchery systems tailored to your species.'
            : 'AI-прискорений процес проектування знижує витрати на інжиніринг, забезпечуючи оптимізовані, ефективні системи інкубаторіїв, адаптовані до ваших видів.',
        },
        {
          title: isEnglish ? 'Multi-Species Expertise' : 'Експертиза багатьох видів',
          description: isEnglish
            ? 'Experience with salmonids, tilapia, marine species, shrimp, sturgeon, and ornamental fish hatchery design and protocols.'
            : 'Досвід роботи з лососевими, тіляпією, морськими видами, креветками, осетром та проектуванням інкубаторіїв і протоколами для декоративних риб.',
        },
        {
          title: isEnglish ? 'Proven Hatchery Protocols' : 'Перевірені протоколи інкубаторію',
          description: isEnglish
            ? 'Species-specific breeding, spawning, and rearing protocols based on 15+ years of aquaculture engineering experience.'
            : 'Специфічні для видів протоколи розведення, нересту та вирощування на основі 15+ років досвіду інжинірингу аквакультури.',
        },
        {
          title: isEnglish ? 'Complete System Integration' : 'Повна інтеграція системи',
          description: isEnglish
            ? 'Seamless integration with nursery, grow-out facilities, and recirculating systems for vertical integration benefits.'
            : 'Безшовна інтеграція з розсадником, вирощувальними об\'єктами та рециркуляційними системами для переваг вертикальної інтеграції.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of completed hatchery projects and aquaculture breeding facilities.'
        : 'Ознайомтеся з нашим портфоліо завершених проектів інкубаторіїв та об\'єктів розведення аквакультури.',
      cta: isEnglish ? 'View Our Hatchery Projects' : 'Переглянути наші проекти інкубаторіїв',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Hatchery?' : 'Готові спроектувати ваш інкубаторій?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your species, production goals, and design the perfect hatchery solution for your operation.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші види, цілі виробництва та спроектуємо ідеальне рішення інкубаторію для вашої операції.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Project Type' : 'Тип проекту',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'New Hatchery Construction' : 'Будівництво нового інкубаторію',
          isEnglish ? 'Hatchery Expansion' : 'Розширення інкубаторію',
          isEnglish ? 'Broodstock Facility Design' : 'Проектування об\'єкта для плідників',
          isEnglish ? 'Hatchery Optimization' : 'Оптимізація інкубаторію',
          isEnglish ? 'Species-Specific Consultation' : 'Консультація для конкретного виду',
          isEnglish ? 'Other' : 'Інше',
        ],
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/services`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Services' : 'Послуги'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Hatchery Engineering' : 'Інжиніринг інкубаторіїв'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Egg className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Fish className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Baby className="w-10 h-10" />
            </div>
          </div>
          <h1 className="mb-6 font-bold">{content.hero.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {content.hero.subtitle}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
          >
            {content.hero.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.intro.title}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-4">{content.intro.text1}</p>
              <p className="text-lg text-neutral-700">{content.intro.text2}</p>
            </div>

            {/* Why Hatchery Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyHatcheryTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.intro.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* When to Build vs Buy */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whenToBuild.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whenToBuild.scenarios.map((scenario, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-xl font-semibold mb-4 text-brand-primary">{scenario.title}</h3>
                <ul className="space-y-3">
                  {scenario.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-success flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Hatchery Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card p-8 hover:shadow-xl transition-all group bg-gradient-to-br from-white to-neutral-50"
                >
                  <div className="w-16 h-16 bg-brand-secondary/10 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.components.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.components.items.map((component, index) => {
              const Icon = component.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{component.title}</h4>
                  <p className="text-xs text-neutral-600">{component.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card p-6 h-full bg-gradient-to-br from-white to-brand-primary/5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-brand-secondary/20">{step.number}</span>
                      <Icon className="w-8 h-8 text-brand-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < content.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-brand-secondary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-success/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.advantages.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.advantages.items.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-6 bg-white rounded-lg">
                  <Icon className="w-6 h-6 text-brand-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{advantage.title}</h4>
                    <p className="text-sm text-neutral-600">{advantage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Species We Support */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.species.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.species.items.map((species, index) => (
              <div key={index} className="card p-6 bg-gradient-to-br from-white to-neutral-50 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Fish className="w-6 h-6 text-brand-primary" />
                  <h3 className="font-semibold text-lg">{species.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{species.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-accent/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whyUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whyUs.items.map((item, index) => (
              <div key={index} className="card p-8 bg-white">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.relatedProjects.title}</h2>
            <p className="text-xl text-neutral-600 mb-8">{content.relatedProjects.description}</p>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-primary/90 transition-all hover:shadow-lg"
            >
              {content.relatedProjects.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-gradient-accent text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{content.finalCta.title}</h2>
            <p className="text-xl text-white/90 mb-12 text-center max-w-3xl mx-auto">
              {content.finalCta.description}
            </p>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {content.finalCta.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {content.finalCta.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    {content.finalCta.formLabels.projectType}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    {content.finalCta.formLabels.projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {content.finalCta.formLabels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-neutral-900 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-white text-brand-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
                  >
                    {content.finalCta.formLabels.submit}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="mt-4 text-sm text-white/70">
                    {isEnglish ? 'Or' : 'Або'}{' '}
                    <Link href={`/${locale}/contact`} className="underline hover:text-white">
                      {content.finalCta.ctaButton}
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
