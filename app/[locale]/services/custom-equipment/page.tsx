import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  Settings,
  Box,
  Ruler,
  PenTool,
  Cog,
  FileText,
  Calculator,
  Package,
  Rocket,
  Layers,
  Droplet,
  Filter,
  Waves,
  Activity,
  CheckCircle,
  ArrowRight,
  TrendingDown,
  Globe,
  Zap
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Custom Equipment Design & Engineering | Vismar Aqua'
      : 'Проектування та інжиніринг спеціального обладнання | Vismar Aqua',
    description: locale === 'en'
      ? 'Custom aquaculture equipment design for unique operational needs. Specialized tanks, feeders, graders, harvesting equipment, and handling systems with 3D CAD design and fabrication specifications.'
      : 'Проектування спеціального обладнання для аквакультури для унікальних операційних потреб. Спеціалізовані резервуари, годівниці, сортувальники, обладнання для збору врожаю та системи обробки з 3D CAD проектуванням.',
  };
}

export default async function CustomEquipmentPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Custom Equipment Design & Engineering' : 'Проектування та інжиніринг спеціального обладнання',
      subtitle: isEnglish
        ? 'Specialized aquaculture equipment engineered for your unique requirements'
        : 'Спеціалізоване обладнання для аквакультури, розроблене для ваших унікальних вимог',
      cta: isEnglish ? 'Design Custom Equipment' : 'Спроектувати спеціальне обладнання',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Custom Equipment for Unique Operational Needs' : 'Спеціальне обладнання для унікальних операційних потреб',
      text1: isEnglish
        ? 'Every aquaculture operation has unique requirements that standard, off-the-shelf equipment cannot fully address. Custom-designed equipment provides the perfect fit for your operations, optimized performance, cost-effective solutions, seamless integration with existing systems, and the ability to implement proprietary innovations.'
        : 'Кожна операція аквакультури має унікальні вимоги, які стандартне готове обладнання не може повністю задовольнити. Спеціально розроблене обладнання забезпечує ідеальне рішення для ваших операцій, оптимізовану продуктивність, економічно ефективні рішення, безшовну інтеграцію з існуючими системами та можливість впровадження власних інновацій.',
      text2: isEnglish
        ? 'Vismar Aqua provides complete custom equipment design services from concept to fabrication specifications. Our AI-accelerated 3D CAD design process delivers engineered solutions with detailed fabrication drawings, material specifications, and supplier coordination at 50% lower costs than traditional engineering firms.'
        : 'Vismar Aqua надає повний комплекс послуг з проектування спеціального обладнання від концепції до специфікацій виготовлення. Наш AI-прискорений процес 3D CAD проектування забезпечує інженерні рішення з детальними кресленнями виготовлення, специфікаціями матеріалів та координацією постачальників за на 50% нижчими витратами, ніж традиційні інженерні фірми.',
      whyCustomTitle: isEnglish ? 'Benefits of Custom Equipment Design' : 'Переваги проектування спеціального обладнання',
      benefits: [
        {
          icon: Ruler,
          title: isEnglish ? 'Perfect Fit for Operations' : 'Ідеальне рішення для операцій',
          description: isEnglish ? 'Equipment designed precisely for your space, species, and workflow requirements' : 'Обладнання, розроблене точно для ваших вимог до простору, видів та робочого процесу',
        },
        {
          icon: Zap,
          title: isEnglish ? 'Optimized Performance' : 'Оптимізована продуктивність',
          description: isEnglish ? 'Superior efficiency and functionality compared to adapted standard equipment' : 'Кращі ефективність та функціональність порівняно з адаптованим стандартним обладнанням',
        },
        {
          icon: TrendingDown,
          title: isEnglish ? 'Cost-Effective Solutions' : 'Економічно ефективні рішення',
          description: isEnglish ? 'Often cheaper than purchasing and modifying multiple standard components' : 'Часто дешевше, ніж купівля та модифікація кількох стандартних компонентів',
        },
        {
          icon: Cog,
          title: isEnglish ? 'Integration with Existing Systems' : 'Інтеграція з існуючими системами',
          description: isEnglish ? 'Seamlessly connects with your current equipment and infrastructure' : 'Безшовно підключається до вашого поточного обладнання та інфраструктури',
        },
      ],
    },
    // Our Services
    services: {
      title: isEnglish ? 'Our Equipment Design Services' : 'Наші послуги проектування обладнання',
      items: [
        {
          icon: PenTool,
          title: isEnglish ? 'Concept & Requirements Engineering' : 'Концепція та інжиніринг вимог',
          description: isEnglish
            ? 'Collaborate with you to understand operational needs, constraints, and goals. Develop initial concepts and engineering requirements for custom equipment solutions.'
            : 'Співпраця з вами для розуміння операційних потреб, обмежень та цілей. Розробка початкових концепцій та інженерних вимог для спеціальних рішень обладнання.',
        },
        {
          icon: Box,
          title: isEnglish ? '3D CAD Design & Modeling' : '3D CAD проектування та моделювання',
          description: isEnglish
            ? 'Advanced 3D CAD modeling using SolidWorks and AutoCAD. Complete visualization, structural analysis (FEA), and design optimization before fabrication.'
            : 'Передове 3D CAD моделювання за допомогою SolidWorks та AutoCAD. Повна візуалізація, структурний аналіз (FEA) та оптимізація дизайну перед виготовленням.',
        },
        {
          icon: FileText,
          title: isEnglish ? 'Fabrication Specifications & Supplier Coordination' : 'Специфікації виготовлення та координація постачальників',
          description: isEnglish
            ? 'Detailed fabrication drawings, material specifications, welding procedures, and quality standards. Coordinate with fabricators and suppliers to ensure quality delivery.'
            : 'Детальні креслення виготовлення, специфікації матеріалів, процедури зварювання та стандарти якості. Координація з виробниками та постачальниками для забезпечення якісної поставки.',
        },
      ],
    },
    // Equipment Types
    equipmentTypes: {
      title: isEnglish ? 'Equipment Types We Design' : 'Типи обладнання, які ми проектуємо',
      items: [
        {
          icon: Droplet,
          title: isEnglish ? 'Tank & Vessel Design' : 'Проектування резервуарів та посудин',
          description: isEnglish ? 'Custom shapes, sizes, materials - circular, rectangular, conical, specialized geometries for optimal flow' : 'Спеціальні форми, розміри, матеріали - круглі, прямокутні, конічні, спеціалізовані геометрії для оптимального потоку',
        },
        {
          icon: Activity,
          title: isEnglish ? 'Feeding Systems' : 'Системи годування',
          description: isEnglish ? 'Automatic feeders, feed distribution systems, custom dispensers for specific feed types and species' : 'Автоматичні годівниці, системи розподілу корму, спеціальні дозатори для конкретних типів корму та видів',
        },
        {
          icon: Filter,
          title: isEnglish ? 'Grading & Sorting Equipment' : 'Обладнання для сортування',
          description: isEnglish ? 'Size graders, fish counters, automated sorting systems, live fish handling equipment' : 'Сортувальники за розміром, лічильники риби, автоматизовані системи сортування, обладнання для обробки живої риби',
        },
        {
          icon: Waves,
          title: isEnglish ? 'Harvesting Equipment' : 'Обладнання для збору врожаю',
          description: isEnglish ? 'Custom nets, fish pumps, crowders, harvesting cages, live transport systems' : 'Спеціальні сітки, рибні насоси, згонювачі, клітки для збору врожаю, системи живого транспортування',
        },
        {
          icon: Settings,
          title: isEnglish ? 'Water Handling Systems' : 'Системи обробки води',
          description: isEnglish ? 'Custom pumps, piping manifolds, distribution headers, flow control systems' : 'Спеціальні насоси, трубні колектори, розподільні колектори, системи контролю потоку',
        },
        {
          icon: Ruler,
          title: isEnglish ? 'Monitoring Equipment' : 'Обладнання моніторингу',
          description: isEnglish ? 'Custom sensor mounts, sample ports, observation windows, inspection platforms' : 'Спеціальні кріплення датчиків, порти для відбору проб, оглядові вікна, інспекційні платформи',
        },
        {
          icon: Package,
          title: isEnglish ? 'Material Handling' : 'Обробка матеріалів',
          description: isEnglish ? 'Conveyors, elevators, hoppers, transfer systems for feed, fish, and supplies' : 'Конвеєри, елеватори, бункери, системи передачі для корму, риби та матеріалів',
        },
        {
          icon: Layers,
          title: isEnglish ? 'Support Structures' : 'Опорні конструкції',
          description: isEnglish ? 'Platforms, walkways, tank supports, equipment frames, access structures' : 'Платформи, прохідні доріжки, опори резервуарів, рами обладнання, структури доступу',
        },
      ],
    },
    // Design Process
    process: {
      title: isEnglish ? 'Design Process' : 'Процес проектування',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Requirements Analysis & Concept Development' : 'Аналіз вимог та розробка концепції',
          description: isEnglish
            ? 'Understand your operational needs, space constraints, species requirements, and budget. Develop initial concepts and preliminary designs for review.'
            : 'Розуміння ваших операційних потреб, обмежень простору, вимог видів та бюджету. Розробка початкових концепцій та попередніх проектів для перегляду.',
        },
        {
          icon: Box,
          number: '02',
          title: isEnglish ? '3D CAD Modeling & Engineering' : '3D CAD моделювання та інжиніринг',
          description: isEnglish
            ? 'Create detailed 3D models using SolidWorks/AutoCAD. Perform structural analysis (FEA), optimize design, and iterate based on your feedback.'
            : 'Створення детальних 3D моделей за допомогою SolidWorks/AutoCAD. Виконання структурного аналізу (FEA), оптимізація дизайну та ітерації на основі вашого зворотного зв\'язку.',
        },
        {
          icon: FileText,
          number: '03',
          title: isEnglish ? 'Fabrication Drawings & Specifications' : 'Креслення виготовлення та специфікації',
          description: isEnglish
            ? 'Produce complete fabrication drawings, bills of materials, welding specifications, quality standards, and installation instructions.'
            : 'Створення повних креслень виготовлення, специфікацій матеріалів, специфікацій зварювання, стандартів якості та інструкцій зі встановлення.',
        },
        {
          icon: Settings,
          number: '04',
          title: isEnglish ? 'Supplier Coordination & Quality Assurance' : 'Координація постачальників та забезпечення якості',
          description: isEnglish
            ? 'Coordinate with fabricators and suppliers, review shop drawings, conduct quality inspections, and ensure on-time delivery to specifications.'
            : 'Координація з виробниками та постачальниками, перегляд виробничих креслень, проведення інспекцій якості та забезпечення своєчасної поставки відповідно до специфікацій.',
        },
      ],
    },
    // Technical Advantages
    advantages: {
      title: isEnglish ? 'Technical Advantages' : 'Технічні переваги',
      items: [
        {
          icon: CheckCircle,
          title: isEnglish ? 'Advanced 3D CAD' : 'Передові 3D CAD',
          description: isEnglish ? 'SolidWorks and AutoCAD for precise modeling and visualization' : 'SolidWorks та AutoCAD для точного моделювання та візуалізації',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'FEA Structural Analysis' : 'FEA структурний аналіз',
          description: isEnglish ? 'Finite element analysis to ensure structural integrity and safety' : 'Аналіз скінченних елементів для забезпечення структурної цілісності та безпеки',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Material Optimization' : 'Оптимізація матеріалів',
          description: isEnglish ? 'Select optimal materials for corrosion resistance, cost, and performance' : 'Вибір оптимальних матеріалів для корозійної стійкості, вартості та продуктивності',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Cost-Effective Design' : 'Економічно ефективний дизайн',
          description: isEnglish ? 'Design for manufacturability to minimize fabrication costs' : 'Проектування для виробництва для мінімізації витрат на виготовлення',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Fabrication-Ready Drawings' : 'Готові креслення для виготовлення',
          description: isEnglish ? 'Complete drawings with all details needed for fabrication' : 'Повні креслення з усіма деталями, необхідними для виготовлення',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'Global Supplier Network' : 'Глобальна мережа постачальників',
          description: isEnglish ? 'Access to qualified fabricators and suppliers worldwide' : 'Доступ до кваліфікованих виробників та постачальників у всьому світі',
        },
      ],
    },
    // Materials
    materials: {
      title: isEnglish ? 'Materials We Specify' : 'Матеріали, які ми специфікуємо',
      items: [
        {
          title: isEnglish ? 'Stainless Steel (304, 316)' : 'Нержавіюча сталь (304, 316)',
          description: isEnglish ? 'Corrosion-resistant, food-grade, ideal for saltwater and freshwater applications' : 'Корозійностійка, харчового класу, ідеальна для застосувань в солоній та прісній воді',
        },
        {
          title: isEnglish ? 'HDPE & Plastics' : 'HDPE та пластики',
          description: isEnglish ? 'Lightweight, corrosion-proof, UV-resistant, cost-effective for tanks and piping' : 'Легкі, корозійностійкі, УФ-стійкі, економічно ефективні для резервуарів та трубопроводів',
        },
        {
          title: isEnglish ? 'Fiberglass (FRP)' : 'Склопластик (FRP)',
          description: isEnglish ? 'Durable, corrosion-resistant, moldable into complex shapes' : 'Міцний, корозійностійкий, може бути відлитий у складні форми',
        },
        {
          title: isEnglish ? 'Concrete & Shotcrete' : 'Бетон та набризкбетон',
          description: isEnglish ? 'Economical for large tanks, structural strength, custom shapes' : 'Економічний для великих резервуарів, структурна міцність, спеціальні форми',
        },
        {
          title: isEnglish ? 'Aluminum' : 'Алюміній',
          description: isEnglish ? 'Lightweight, corrosion-resistant, ideal for frames and walkways' : 'Легкий, корозійностійкий, ідеальний для рам та прохідних доріжок',
        },
        {
          title: isEnglish ? 'Composite Materials' : 'Композитні матеріали',
          description: isEnglish ? 'Advanced composites for specialized applications requiring unique properties' : 'Передові композити для спеціалізованих застосувань, що вимагають унікальних властивостей',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua' : 'Чому обрати Vismar Aqua',
      items: [
        {
          title: isEnglish ? '50% Lower Design Costs' : 'На 50% нижчі витрати на проектування',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering time and costs while delivering superior, optimized equipment designs tailored to your specific needs.'
            : 'AI-прискорений процес проектування знижує час та витрати на інжиніринг, забезпечуючи кращі, оптимізовані проекти обладнання, адаптовані до ваших конкретних потреб.',
        },
        {
          title: isEnglish ? 'Advanced CAD Capabilities' : 'Передові можливості CAD',
          description: isEnglish
            ? 'State-of-the-art 3D CAD modeling (SolidWorks, AutoCAD), FEA structural analysis, and design optimization for superior equipment performance.'
            : 'Сучасне 3D CAD моделювання (SolidWorks, AutoCAD), FEA структурний аналіз та оптимізація дизайну для кращої продуктивності обладнання.',
        },
        {
          title: isEnglish ? 'Fabrication Expertise' : 'Експертиза виготовлення',
          description: isEnglish
            ? '15+ years of aquaculture engineering experience ensures designs are optimized for manufacturability, cost-effectiveness, and reliable operation.'
            : '15+ років досвіду інжинірингу аквакультури забезпечує, що проекти оптимізовані для виробництва, економічної ефективності та надійної роботи.',
        },
        {
          title: isEnglish ? 'Global Supplier Network' : 'Глобальна мережа постачальників',
          description: isEnglish
            ? 'Access to qualified fabricators and suppliers worldwide ensures competitive pricing, quality control, and timely delivery of custom equipment.'
            : 'Доступ до кваліфікованих виробників та постачальників у всьому світі забезпечує конкурентні ціни, контроль якості та своєчасну поставку спеціального обладнання.',
        },
      ],
    },
    // Related Projects
    relatedProjects: {
      title: isEnglish ? 'Related Projects' : 'Пов\'язані проекти',
      description: isEnglish
        ? 'Explore our portfolio of custom equipment designs and aquaculture engineering solutions.'
        : 'Ознайомтеся з нашим портфоліо проектів спеціального обладнання та інженерних рішень для аквакультури.',
      cta: isEnglish ? 'View Our Projects' : 'Переглянути наші проекти',
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Custom Equipment?' : 'Готові спроектувати ваше спеціальне обладнання?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your unique equipment needs and design the perfect custom solution for your aquaculture operation.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші унікальні потреби в обладнанні та спроектуємо ідеальне спеціальне рішення для вашої операції аквакультури.',
      ctaButton: isEnglish ? 'Schedule a Consultation' : 'Запланувати консультацію',
      formLabels: {
        name: isEnglish ? 'Name' : 'Ім\'я',
        email: isEnglish ? 'Email' : 'Електронна пошта',
        projectType: isEnglish ? 'Equipment Type' : 'Тип обладнання',
        message: isEnglish ? 'Message' : 'Повідомлення',
        submit: isEnglish ? 'Send Message' : 'Надіслати повідомлення',
        projectTypes: [
          isEnglish ? 'Custom Tank Design' : 'Проектування спеціального резервуара',
          isEnglish ? 'Feeding System Design' : 'Проектування системи годування',
          isEnglish ? 'Grading/Sorting Equipment' : 'Обладнання для сортування',
          isEnglish ? 'Harvesting Equipment' : 'Обладнання для збору врожаю',
          isEnglish ? 'Water Handling System' : 'Система обробки води',
          isEnglish ? 'Support Structures' : 'Опорні конструкції',
          isEnglish ? 'Other Custom Equipment' : 'Інше спеціальне обладнання',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Custom Equipment' : 'Спеціальне обладнання'}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20">
            <Wrench className="w-32 h-32" />
          </div>
          <div className="absolute bottom-20 right-20">
            <Settings className="w-40 h-40" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Wrench className="w-10 h-10" />
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

            {/* Why Custom Benefits */}
            <h3 className="text-2xl font-bold mt-12 mb-6 text-center">{content.intro.whyCustomTitle}</h3>
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

      {/* Our Services */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.items.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card p-8 hover:shadow-xl transition-all group bg-white"
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

      {/* Equipment Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.equipmentTypes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.equipmentTypes.items.map((equipment, index) => {
              const Icon = equipment.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 border border-neutral-200 rounded-lg hover:border-brand-secondary/50 hover:shadow-md transition-all">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{equipment.title}</h4>
                  <p className="text-xs text-neutral-600">{equipment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.process.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.process.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card p-6 h-full bg-white">
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
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.advantages.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.advantages.items.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="flex items-start gap-3">
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

      {/* Materials */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.materials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.materials.items.map((material, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Box className="w-6 h-6 text-brand-primary" />
                  <h3 className="font-semibold text-lg">{material.title}</h3>
                </div>
                <p className="text-sm text-neutral-600">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.whyUs.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.whyUs.items.map((item, index) => (
              <div key={index} className="card p-8 bg-gradient-to-br from-white to-brand-accent/5">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
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
