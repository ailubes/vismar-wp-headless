import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Droplets,
  Waves,
  Fish,
  Sparkles,
  Leaf,
  Home,
  CheckCircle,
  ArrowRight,
  Award,
  Users,
  TrendingDown,
  Zap,
  Heart,
  Euro
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Recreational & Decorative Water Systems | Vismar Aqua'
      : 'Рекреаційні та декоративні водні системи | Vismar Aqua',
    description: locale === 'en'
      ? 'Swimming pools, natural pools, koi ponds, water features, and water storage systems. 15+ years aquaculture expertise applied to recreational water engineering. From €3K to €300K+ projects.'
      : 'Басейни, природні басейни, ставки для коропів кої, водні об\'єкти та системи зберігання води. 15+ років досвіду в аквакультурі застосовано до інженерії рекреаційних водних систем.',
  };
}

export default async function RecreationalWaterSystemsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Bilingual content
  const content = {
    en: {
      breadcrumb: {
        home: 'Home',
        services: 'Services',
        current: 'Recreational Water Systems',
      },
      hero: {
        title: 'From Fish Farms to Dream Pools',
        subtitle: 'Recreational & Decorative Water Systems Engineering',
        description: '15+ years of aquaculture water management expertise applied to swimming pools, natural pools, koi ponds, water features, and water storage systems. If we can keep delicate fish alive in recirculating systems, imagine what we can do for your pool or pond.',
        cta1: 'Request Consultation',
        cta2: 'View Services',
      },
      intro: {
        title: 'The Natural Transition',
        subtitle: 'From Aquaculture to Aquatic Excellence',
        description: 'For over 15 years, Vismar Aqua has mastered the science of water systems for aquaculture—designing facilities where water quality, filtration, and hydraulics are matters of life and death for thousands of fish. Now, we apply that same engineering expertise to create stunning recreational and decorative water systems.',
        qualifications: [
          { icon: Droplets, title: 'Water Quality Experts', desc: 'We understand water chemistry at the molecular level' },
          { icon: Waves, title: 'Hydraulic Engineers', desc: 'We design complex water circulation systems daily' },
          { icon: Fish, title: 'Filtration Specialists', desc: 'From biological to mechanical, we know what works' },
          { icon: Zap, title: 'System Integrators', desc: 'Pumps, valves, sensors—we make systems work together' },
          { icon: TrendingDown, title: 'Cost Optimizers', desc: 'We build efficient systems that minimize operating costs' },
        ],
      },
      services: {
        title: 'Our Recreational Water Systems Services',
        subtitle: 'Six specialized service areas',
        categories: [
          {
            icon: 'pool',
            title: 'Swimming Pools',
            description: 'Residential & commercial pools. Traditional chlorinated, saltwater, Olympic & competition pools, therapy pools.',
            types: ['Concrete (Gunite)', 'Fiberglass', 'Vinyl Liner', 'Natural Chemical-Free'],
            pricing: '€15,000 - €100,000+',
            services: ['Design & 3D Rendering', 'Full Engineering', 'Equipment Selection', 'Energy Optimization', 'Smart Automation'],
          },
          {
            icon: 'leaf',
            title: 'Natural Swimming Pools & Eco-Ponds',
            description: 'Chemical-free swimming using biological filtration. Plant-based water treatment, wildlife-friendly design.',
            types: ['Separated Design', 'Integrated Natural', 'Living Pool (European)', 'Pondless Waterfalls'],
            pricing: '€15,000 - €200,000+',
            services: ['Biological Filtration Design', 'Plant Selection', 'Ecosystem Balance', 'Natural Aesthetics', 'Low Maintenance Systems'],
          },
          {
            icon: 'fish',
            title: 'Koi Ponds & Ornamental Fish Systems',
            description: 'Japanese-inspired water gardens with aquaculture-grade filtration for show-quality koi.',
            types: ['Traditional Japanese', 'Natural Ecosystem', 'Modern Architectural', 'Indoor Viewing'],
            pricing: '€13,000 - €115,000+',
            services: ['Aquaculture Filtration', 'Water Quality Management', 'Bottom Drain Design', 'Koi Health Systems', 'Viewing Features'],
          },
          {
            icon: 'sparkles',
            title: 'Decorative Water Features',
            description: 'Fountains, waterfalls, water walls, reflecting pools, and interactive features.',
            types: ['Traditional & Modern Fountains', 'Natural & Architectural Waterfalls', 'Glass Water Walls', 'Interactive Splash Pads'],
            pricing: '€1,500 - €500,000+',
            services: ['Fountain Design', 'Lighting Integration', 'Sound Engineering', 'Control Systems', 'Architectural Integration'],
          },
          {
            icon: 'home',
            title: 'Water Storage Systems',
            description: 'Rainwater harvesting, fire protection reservoirs, irrigation storage, emergency water supply.',
            types: ['Above-Ground Tanks', 'Below-Ground Cisterns', 'Fire Protection', 'Irrigation Systems'],
            pricing: '€3,000 - €100,000+',
            services: ['Capacity Calculations', 'Tank Selection', 'Filtration Design', 'Pump Sizing', 'Distribution Planning'],
          },
          {
            icon: 'waves',
            title: 'Integrated & Multi-Purpose Systems',
            description: 'Maximize value by combining functions: pool + rainwater, koi pond + aquaponics, decorative + cooling.',
            types: ['Pool + Harvesting', 'Pond + Aquaponics', 'Feature + Cooling', 'Dual-Purpose Infrastructure'],
            pricing: 'Custom',
            services: ['System Integration', 'Resource Optimization', 'Multi-Function Design', 'Sustainable Solutions', 'Cost Savings'],
          },
        ],
      },
      whyUs: {
        title: 'Why Choose Vismar Aqua',
        subtitle: 'The Aquaculture Advantage',
        intro: 'We\'re not just pool builders—we\'re water systems engineers with aquaculture expertise.',
        advantages: [
          {
            title: 'Superior Water Quality',
            desc: 'Aquaculture demands perfect water chemistry. We apply this expertise to ensure crystal-clear, healthy water in your pool or pond.',
          },
          {
            title: 'Engineering-First Approach',
            desc: 'We design the engineering first, then make it beautiful—not the other way around. Result: systems that actually work as designed.',
          },
          {
            title: 'Cost Efficiency',
            desc: '50% lower engineering costs than Western European firms. Ukrainian expertise with international standards. €4,000-€7,500 saved on typical projects.',
          },
          {
            title: 'Full In-House Capabilities',
            desc: 'Design, engineering, 3D visualization, hydraulics, electrical, plumbing, automation—all under one roof. Single point of contact.',
          },
          {
            title: 'Sustainability Focus',
            desc: 'Variable-speed pumps (70-90% energy savings), LED lighting, natural filtration, rainwater harvesting, solar integration.',
          },
          {
            title: 'Honest Recommendations',
            desc: 'No equipment sales agenda. We recommend what works, not what maximizes our profit. Quality over quantity.',
          },
        ],
      },
      packages: {
        title: 'Service Packages',
        subtitle: 'From concept to completion',
        options: [
          {
            name: 'Conceptual Design',
            price: '€1,000 - €8,000',
            includes: ['Site visit', '2-3 design options', '3D rendering', 'Preliminary budget', 'Feasibility assessment'],
            bestFor: 'Exploring options, Budget planning, Grant applications',
          },
          {
            name: 'Design + Basic Engineering',
            price: '€2,500 - €20,000',
            includes: ['Final 3D renderings', 'Dimensional layouts', 'Equipment specs', 'Construction details', 'Material recommendations'],
            bestFor: 'Small to medium projects, Experienced contractors',
          },
          {
            name: 'Complete Engineering',
            price: '€4,000 - €50,000+',
            popular: true,
            includes: ['Structural engineering', 'Hydraulic design', 'Electrical design', 'Plumbing design', 'Permit documents', 'Bid assistance'],
            bestFor: 'All project sizes, Permit requirements, Bank financing',
          },
          {
            name: 'Full Service (Design-Build)',
            price: '15-25% of construction cost',
            includes: ['Complete engineering', 'Construction management', 'Equipment procurement', 'Installation supervision', 'Commissioning', 'Training & warranty'],
            bestFor: 'Turnkey projects, Single-point responsibility, Guaranteed outcomes',
          },
        ],
      },
      process: {
        title: 'Our Process',
        steps: [
          { number: 1, title: 'Free Consultation', duration: '30-60 min', desc: 'Discuss your vision, site, budget, and timeline' },
          { number: 2, title: 'Site Assessment', duration: '1-2 weeks', desc: 'Site visit, survey, conceptual designs, detailed proposal' },
          { number: 3, title: 'Design Development', duration: '3-6 weeks', desc: '3D visualizations, technical drawings, cost estimation' },
          { number: 4, title: 'Engineering & Documentation', duration: '4-8 weeks', desc: 'Structural, hydraulic, electrical design. Permit-ready documents' },
          { number: 5, title: 'Construction Support', duration: 'During build', desc: 'Bid assistance, inspections, technical support, quality control' },
          { number: 6, title: 'Commissioning & Training', duration: '1-3 days', desc: 'System startup, training, documentation, ongoing support' },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          { q: 'Can you design pools outside Ukraine?', a: 'Yes! We work internationally. Remote design with site visit or fully remote with local survey data.' },
          { q: 'Do you do construction or just engineering?', a: 'Both. Engineering-only or full design-build services. Your choice.' },
          { q: 'What\'s the difference between natural and regular pools?', a: 'Natural pools use biological filtration (plants, bacteria) instead of chemicals. No chlorine, eco-friendly, unique aesthetic.' },
          { q: 'How much does a koi pond cost?', a: 'Small: €13K-23K. Medium: €23K-50K. Large: €50K-115K+. Depends on size, filtration, features.' },
          { q: 'Can I DIY with your plans?', a: 'Yes! We provide complete plans you can build yourself or use with a contractor.' },
          { q: 'How long does design take?', a: 'Conceptual: 2-3 weeks. Full engineering: 6-12 weeks. Depends on complexity and permitting.' },
        ],
      },
      finalCta: {
        title: 'Ready to Create Your Aquatic Paradise?',
        subtitle: 'From backyard pools to show-quality koi ponds',
        cta1: 'Request Proposal',
        cta2: 'Schedule Consultation',
      },
    },
    uk: {
      breadcrumb: {
        home: 'Головна',
        services: 'Послуги',
        current: 'Рекреаційні водні системи',
      },
      hero: {
        title: 'Від рибних ферм до басейнів мрії',
        subtitle: 'Інженерія рекреаційних та декоративних водних систем',
        description: '15+ років досвіду управління водою в аквакультурі застосовано до басейнів, природних басейнів, ставків для коїв, водних об\'єктів та систем зберігання води. Якщо ми можемо підтримувати життя делікатних риб у рециркуляційних системах, уявіть, що ми можемо зробити для вашого басейну або ставка.',
        cta1: 'Запитати консультацію',
        cta2: 'Переглянути послуги',
      },
      intro: {
        title: 'Природний перехід',
        subtitle: 'Від аквакультури до водної досконалості',
        description: 'Понад 15 років Vismar Aqua опановувала науку водних систем для аквакультури — проектування об\'єктів, де якість води, фільтрація та гідравліка є питаннями життя і смерті для тисяч риб. Тепер ми застосовуємо цю саму інженерну експертизу для створення приголомшливих рекреаційних та декоративних водних систем.',
        qualifications: [
          { icon: Droplets, title: 'Експерти з якості води', desc: 'Ми розуміємо хімію води на молекулярному рівні' },
          { icon: Waves, title: 'Гідравлічні інженери', desc: 'Ми проектуємо складні системи циркуляції води щодня' },
          { icon: Fish, title: 'Спеціалісти з фільтрації', desc: 'Від біологічної до механічної, ми знаємо, що працює' },
          { icon: Zap, title: 'Системні інтегратори', desc: 'Насоси, клапани, датчики — ми робимо системи працюючими' },
          { icon: TrendingDown, title: 'Оптимізатори витрат', desc: 'Ми будуємо ефективні системи, що мінімізують експлуатаційні витрати' },
        ],
      },
      services: {
        title: 'Наші послуги рекреаційних водних систем',
        subtitle: 'Шість спеціалізованих сервісних напрямків',
        categories: [
          {
            icon: 'pool',
            title: 'Басейни',
            description: 'Житлові та комерційні басейни. Традиційні хлоровані, солоної води, олімпійські та змагальні басейни, терапевтичні басейни.',
            types: ['Бетонні (Gunite)', 'Склопластикові', 'Вініловий лайнер', 'Природні без хімії'],
            pricing: '€15,000 - €100,000+',
            services: ['Дизайн і 3D візуалізація', 'Повна інженерія', 'Вибір обладнання', 'Енергооптимізація', 'Розумна автоматизація'],
          },
          {
            icon: 'leaf',
            title: 'Природні басейни та еко-ставки',
            description: 'Плавання без хімікатів з використанням біологічної фільтрації. Очищення води рослинами, дружній до дикої природи дизайн.',
            types: ['Розділений дизайн', 'Інтегрований природний', 'Живий басейн (європейський)', 'Pondless водоспади'],
            pricing: '€15,000 - €200,000+',
            services: ['Дизайн біологічної фільтрації', 'Вибір рослин', 'Екосистемний баланс', 'Природна естетика', 'Системи низького обслуговування'],
          },
          {
            icon: 'fish',
            title: 'Ставки для коїв та декоративних риб',
            description: 'Водні сади в японському стилі з фільтрацією рівня аквакультури для виставкових коїв.',
            types: ['Традиційний японський', 'Природна екосистема', 'Сучасний архітектурний', 'Закритий перегляд'],
            pricing: '€13,000 - €115,000+',
            services: ['Аквакультурна фільтрація', 'Управління якістю води', 'Дизайн донного зливу', 'Системи здоров\'я коїв', 'Оглядові елементи'],
          },
          {
            icon: 'sparkles',
            title: 'Декоративні водні об\'єкти',
            description: 'Фонтани, водоспади, водяні стіни, відбиваючі басейни та інтерактивні елементи.',
            types: ['Традиційні та сучасні фонтани', 'Природні та архітектурні водоспади', 'Скляні водяні стіни', 'Інтерактивні майданчики'],
            pricing: '€1,500 - €500,000+',
            services: ['Дизайн фонтанів', 'Інтеграція освітлення', 'Звукова інженерія', 'Системи управління', 'Архітектурна інтеграція'],
          },
          {
            icon: 'home',
            title: 'Системи зберігання води',
            description: 'Збір дощової води, резервуари протипожежного захисту, зберігання для зрошення, аварійне водопостачання.',
            types: ['Наземні резервуари', 'Підземні цистерни', 'Протипожежний захист', 'Системи зрошення'],
            pricing: '€3,000 - €100,000+',
            services: ['Розрахунки ємності', 'Вибір резервуара', 'Дизайн фільтрації', 'Підбір насоса', 'Планування розподілу'],
          },
          {
            icon: 'waves',
            title: 'Інтегровані багатоцільові системи',
            description: 'Максимізація цінності шляхом поєднання функцій: басейн + дощова вода, ставок коїв + аквапоніка, декоративний + охолодження.',
            types: ['Басейн + збір води', 'Ставок + аквапоніка', 'Об\'єкт + охолодження', 'Двоцільова інфраструктура'],
            pricing: 'Індивідуально',
            services: ['Системна інтеграція', 'Оптимізація ресурсів', 'Багатофункціональний дизайн', 'Стійкі рішення', 'Економія витрат'],
          },
        ],
      },
      whyUs: {
        title: 'Чому обрати Vismar Aqua',
        subtitle: 'Перевага аквакультури',
        intro: 'Ми не просто будівельники басейнів — ми інженери водних систем з експертизою в аквакультурі.',
        advantages: [
          {
            title: 'Вища якість води',
            desc: 'Аквакультура вимагає ідеальної хімії води. Ми застосовуємо цю експертизу для забезпечення кристально чистої, здорової води у вашому басейні або ставку.',
          },
          {
            title: 'Підхід інженерія-спочатку',
            desc: 'Спочатку проектуємо інженерію, потім робимо це красивим — а не навпаки. Результат: системи, які насправді працюють, як заплановано.',
          },
          {
            title: 'Економічна ефективність',
            desc: '50% нижчі інженерні витрати, ніж у західноєвропейських фірм. Українська експертиза з міжнародними стандартами. Економія €4,000-€7,500 на типових проектах.',
          },
          {
            title: 'Повний внутрішній потенціал',
            desc: 'Дизайн, інженерія, 3D візуалізація, гідравліка, електрика, сантехніка, автоматизація — все під одним дахом. Єдина точка контакту.',
          },
          {
            title: 'Фокус на сталості',
            desc: 'Насоси зі змінною швидкістю (економія енергії 70-90%), світлодіодне освітлення, природна фільтрація, збір дощової води, інтеграція сонячної енергії.',
          },
          {
            title: 'Чесні рекомендації',
            desc: 'Немає програми продажу обладнання. Ми рекомендуємо те, що працює, а не те, що максимізує наш прибуток. Якість понад кількість.',
          },
        ],
      },
      packages: {
        title: 'Сервісні пакети',
        subtitle: 'Від концепції до завершення',
        options: [
          {
            name: 'Концептуальний дизайн',
            price: '€1,000 - €8,000',
            includes: ['Візит на майданчик', '2-3 варіанти дизайну', '3D візуалізація', 'Попередній бюджет', 'Оцінка доцільності'],
            bestFor: 'Дослідження варіантів, Планування бюджету, Заявки на гранти',
          },
          {
            name: 'Дизайн + базова інженерія',
            price: '€2,500 - €20,000',
            includes: ['Фінальна 3D візуалізація', 'Розмірні плани', 'Специфікації обладнання', 'Деталі будівництва', 'Рекомендації матеріалів'],
            bestFor: 'Малі та середні проекти, Досвідчені підрядники',
          },
          {
            name: 'Повна інженерія',
            price: '€4,000 - €50,000+',
            popular: true,
            includes: ['Структурна інженерія', 'Гідравлічний дизайн', 'Електричний дизайн', 'Сантехнічний дизайн', 'Дозвільні документи', 'Допомога з тендером'],
            bestFor: 'Всі розміри проектів, Вимоги до дозволів, Банківське фінансування',
          },
          {
            name: 'Повний сервіс (дизайн-будівництво)',
            price: '15-25% від вартості будівництва',
            includes: ['Повна інженерія', 'Управління будівництвом', 'Закупівля обладнання', 'Нагляд за встановленням', 'Введення в експлуатацію', 'Навчання та гарантія'],
            bestFor: 'Проекти під ключ, Єдина відповідальність, Гарантовані результати',
          },
        ],
      },
      process: {
        title: 'Наш процес',
        steps: [
          { number: 1, title: 'Безкоштовна консультація', duration: '30-60 хв', desc: 'Обговорення вашого бачення, майданчика, бюджету та термінів' },
          { number: 2, title: 'Оцінка майданчика', duration: '1-2 тижні', desc: 'Візит на майданчик, обстеження, концептуальні дизайни, детальна пропозиція' },
          { number: 3, title: 'Розробка дизайну', duration: '3-6 тижнів', desc: '3D візуалізації, технічні креслення, оцінка вартості' },
          { number: 4, title: 'Інженерія та документація', duration: '4-8 тижнів', desc: 'Структурний, гідравлічний, електричний дизайн. Дозвільні документи' },
          { number: 5, title: 'Підтримка будівництва', duration: 'Під час будівництва', desc: 'Допомога з тендером, інспекції, технічна підтримка, контроль якості' },
          { number: 6, title: 'Введення в експлуатацію та навчання', duration: '1-3 дні', desc: 'Запуск системи, навчання, документація, постійна підтримка' },
        ],
      },
      faq: {
        title: 'Часті питання',
        questions: [
          { q: 'Чи можете ви проектувати басейни за межами України?', a: 'Так! Ми працюємо міжнародно. Віддалене проектування з візитом на майданчик або повністю віддалено з місцевими даними обстеження.' },
          { q: 'Ви виконуєте будівництво або тільки інженерію?', a: 'Обидва варіанти. Тільки інженерія або повний сервіс дизайн-будівництво. На ваш вибір.' },
          { q: 'Яка різниця між природним та звичайним басейном?', a: 'Природні басейни використовують біологічну фільтрацію (рослини, бактерії) замість хімікатів. Без хлору, екологічно чисті, унікальна естетика.' },
          { q: 'Скільки коштує ставок для коїв?', a: 'Малий: €13K-23K. Середній: €23K-50K. Великий: €50K-115K+. Залежить від розміру, фільтрації, функцій.' },
          { q: 'Чи можу я зробити самостійно за вашими планами?', a: 'Так! Ми надаємо повні плани, які ви можете побудувати самостійно або використати з підрядником.' },
          { q: 'Скільки часу займає дизайн?', a: 'Концептуальний: 2-3 тижні. Повна інженерія: 6-12 тижнів. Залежить від складності та дозволів.' },
        ],
      },
      finalCta: {
        title: 'Готові створити ваш водний рай?',
        subtitle: 'Від дворових басейнів до виставкових ставків для коїв',
        cta1: 'Запросити пропозицію',
        cta2: 'Запланувати консультацію',
      },
    },
  };

  const t = isEnglish ? content.en : content.uk;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-light py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href={`/${locale}`} className="text-muted-foreground hover:text-foreground">
              {t.breadcrumb.home}
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href={`/${locale}/services`} className="text-muted-foreground hover:text-foreground">
              {t.breadcrumb.services}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{t.breadcrumb.current}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Droplets className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-100">
              {t.hero.subtitle}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <button className="bg-white text-blue-700 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.intro.title}</h2>
            <h3 className="text-xl text-cyan-700 font-semibold mb-4">{t.intro.subtitle}</h3>
            <p className="text-lg text-muted-foreground">{t.intro.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.intro.qualifications.map((qual, idx) => {
              const Icon = qual.icon;
              return (
                <div key={idx} className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <Icon className="w-10 h-10 text-cyan-600 mb-3" />
                  <h4 className="text-lg font-bold mb-2">{qual.title}</h4>
                  <p className="text-sm text-gray-600">{qual.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.services.categories.map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-cyan-500">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon === 'pool' && <Droplets className="w-12 h-12 text-cyan-600" />}
                  {category.icon === 'leaf' && <Leaf className="w-12 h-12 text-green-600" />}
                  {category.icon === 'fish' && <Fish className="w-12 h-12 text-orange-600" />}
                  {category.icon === 'sparkles' && <Sparkles className="w-12 h-12 text-purple-600" />}
                  {category.icon === 'home' && <Home className="w-12 h-12 text-gray-600" />}
                  {category.icon === 'waves' && <Waves className="w-12 h-12 text-blue-600" />}
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{category.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">{isEnglish ? 'Types:' : 'Типи:'}</p>
                  <ul className="space-y-1">
                    {category.types.map((type, typeIdx) => (
                      <li key={typeIdx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-cyan-500">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-600 mb-2">{isEnglish ? 'Pricing:' : 'Ціни:'}</p>
                  <p className="text-lg font-bold text-cyan-700">{category.pricing}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">{isEnglish ? 'Services:' : 'Послуги:'}</p>
                  <ul className="space-y-1">
                    {category.services.map((service, serviceIdx) => (
                      <li key={serviceIdx} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyUs.title}</h2>
            <h3 className="text-xl text-cyan-700 font-semibold mb-4">{t.whyUs.subtitle}</h3>
            <p className="text-lg text-muted-foreground">{t.whyUs.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.whyUs.advantages.map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-cyan-50 p-6 rounded-lg">
                <Award className="w-8 h-8 text-cyan-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-700 text-sm">{advantage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.packages.title}</h2>
            <p className="text-xl text-muted-foreground">{t.packages.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {t.packages.options.map((option, idx) => (
              <div key={idx} className={`rounded-lg p-6 border-2 ${option.popular ? 'bg-cyan-50 border-cyan-500 relative' : 'bg-white border-gray-200'}`}>
                {option.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {isEnglish ? 'Most Popular' : 'Найпопулярніший'}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2 mt-2">{option.name}</h3>
                <p className="text-2xl font-bold text-cyan-600 mb-4">{option.price}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-600 mb-2">{isEnglish ? 'Includes:' : 'Включає:'}</p>
                  <ul className="space-y-2">
                    {option.includes.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 mb-1">{isEnglish ? 'Best For:' : 'Найкраще для:'}</p>
                  <p className="text-xs text-gray-600">{option.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {t.process.steps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg border-l-4 border-cyan-500 flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <span className="text-sm bg-cyan-100 text-cyan-800 px-2 py-1 rounded">{step.duration}</span>
                  </div>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.faq.title}</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.questions.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-3 text-gray-900">{faq.q}</h4>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.finalCta.title}</h2>
            <p className="text-xl mb-8 text-cyan-50">{t.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <button className="bg-white text-cyan-700 hover:bg-cyan-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                  {t.finalCta.cta1}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                {t.finalCta.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
