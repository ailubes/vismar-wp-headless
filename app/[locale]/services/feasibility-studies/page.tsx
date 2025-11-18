import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Users,
  Building2,
  Droplets,
  Euro,
  Clock,
  Target,
  BarChart3,
  MapPin,
  Microscope,
  ShoppingCart,
  PieChart,
  AlertCircle,
  FileCheck,
  Briefcase,
  GraduationCap,
  Factory,
  Star,
  Award,
  ArrowRight,
  Download,
  Phone,
  Settings,
  Zap
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Feasibility Studies & Business Planning | Vismar Aqua'
      : 'Техніко-економічне обгрунтування та бізнес-планування | Vismar Aqua',
    description: locale === 'en'
      ? 'Comprehensive aquaculture feasibility studies. De-risk your investment with expert analysis. 15+ years experience, 50+ studies completed. €15K-€75K investment packages.'
      : 'Комплексні техніко-економічні обґрунтування проектів аквакультури. Зменшіть ризики вашої інвестиції з експертним аналізом. 15+ років досвіду, 50+ завершених досліджень.',
  };
}

export default async function FeasibilityStudiesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Bilingual content
  const content = {
    en: {
      breadcrumb: {
        home: 'Home',
        services: 'Services',
        current: 'Feasibility Studies',
      },
      hero: {
        title: 'De-Risk Your Aquaculture Investment Before You Break Ground',
        subtitle: 'Comprehensive feasibility studies that answer the critical question: "Will this project actually make money?" 15+ years of experience. 50+ feasibility studies completed. Real data. Real analysis. Real projections.',
        cta1: 'Request Feasibility Study',
        cta2: 'Download Sample Report',
      },
      intro: {
        title: 'Why Feasibility Studies Matter',
        subtitle: 'The Harsh Reality of Aquaculture Investments',
        statistic: 'According to industry data, more than 40% of aquaculture startups fail within the first 3 years. Of those that survive, 80% never reach their designed production capacity.',
        whyFailTitle: 'Why Do They Fail?',
        failures: [
          { icon: MapPin, title: 'Inadequate Site Selection', desc: 'Wrong water source, poor access, regulatory issues' },
          { icon: Euro, title: 'Unrealistic Financial Projections', desc: 'Underestimated costs, overestimated yields' },
          { icon: Settings, title: 'Wrong Technology Choice', desc: 'System doesn\'t match climate, species, or expertise' },
          { icon: ShoppingCart, title: 'Market Misunderstanding', desc: 'Product doesn\'t match demand or pricing assumptions' },
          { icon: Zap, title: 'Operational Oversights', desc: 'Labor, energy, feed costs exceed projections' },
          { icon: FileCheck, title: 'Regulatory Blindness', desc: 'Permits, certifications, compliance costs overlooked' },
        ],
        protectionTitle: 'A Feasibility Study Protects You From These Mistakes',
        protections: [
          { title: 'Validates or Invalidates', desc: 'Your concept with hard data' },
          { title: 'Identifies Fatal Flaws', desc: 'Before they become expensive disasters' },
          { title: 'Provides Realistic Projections', desc: 'Based on actual operational data' },
          { title: 'Secures Financing', desc: 'With bankable analysis investors trust' },
          { title: 'Guides Design Decisions', desc: 'With technical and economic optimization' },
          { title: 'Creates Your Roadmap', desc: 'From concept to profitable operation' },
        ],
        investmentTitle: 'The Investment Decision',
        optionA: {
          title: 'Option A: Skip feasibility study',
          save: 'Save: €15,000 - €50,000 (study cost)',
          risk: 'Risk: €2,000,000 - €10,000,000+ (total project investment)',
          chance: 'Chance of failure: 40%+',
        },
        optionB: {
          title: 'Option B: Commission proper feasibility study',
          invest: 'Invest: €15,000 - €50,000 (study cost)',
          protect: 'Protect: €2,000,000 - €10,000,000+ (total project investment)',
          decision: 'Informed decision: Proceed only if viable',
          result: 'If not viable: Save millions by not proceeding',
        },
        conclusion: 'A feasibility study is not an expense—it\'s insurance.',
      },
      methodology: {
        title: 'Our Feasibility Study Methodology',
        subtitle: 'The Vismar Aqua Approach: DBOT Integration',
        intro: 'Our feasibility studies are unique because we use the same Design-Build-Operate-Transfer (DBOT) methodology that guides our project execution. This means we don\'t just analyze—we know how to build what we\'re studying, understand real operational costs, anticipate construction challenges, and provide actionable recommendations.',
        processTitle: '7-Phase Feasibility Study Process',
        phases: [
          {
            number: 1,
            title: 'Project Definition & Objectives',
            timeline: '1-2 weeks',
            deliverables: 'Project objectives document, Preliminary concept options (3-5 alternatives), Evaluation criteria matrix',
            items: [
              'Stakeholder workshops to understand investment goals',
              'Preliminary concept development (RAS, HFTS, ponds, cages)',
              'Success criteria definition (IRR, NPV, payback period)',
              'Production targets (tons/year, survival rates, FCR)',
            ],
          },
          {
            number: 2,
            title: 'Site Assessment & Analysis',
            timeline: '2-4 weeks',
            deliverables: 'Site assessment report with maps, Water quality analysis, Regulatory requirements checklist, Site suitability rating',
            items: [
              'Physical site visit and assessment (topography, soil, drainage)',
              'Water source analysis (quantity, quality, reliability)',
              'Climate & environmental conditions review',
              'Regulatory & legal assessment (permits, licenses, compliance)',
            ],
          },
          {
            number: 3,
            title: 'Technical Feasibility',
            timeline: '3-5 weeks',
            deliverables: 'Species selection recommendation, Production system comparison matrix, Preliminary facility layout, Major equipment list',
            items: [
              'Species selection analysis (biological suitability, economics)',
              'Production system design (RAS, HFTS, Biofloc, Ponds)',
              'Engineering analysis (facility layout, equipment specs)',
              'Technology assessment (automation, biosecurity, monitoring)',
            ],
          },
          {
            number: 4,
            title: 'Market Analysis',
            timeline: '2-4 weeks',
            deliverables: 'Market research report (30-50 pages), Competitive analysis, Sales projections (5-year), Distribution strategy',
            items: [
              'Demand & supply analysis (local, regional, export)',
              'Price analysis (historical trends, seasonal variations)',
              'Market positioning & competitive advantage',
              'Marketing strategy & distribution channels',
            ],
          },
          {
            number: 5,
            title: 'Financial Modeling',
            timeline: '3-4 weeks',
            deliverables: 'Detailed financial model (Excel), 10-year financial projections, Investment metrics summary, Sensitivity analysis report',
            items: [
              'CAPEX estimation (land, buildings, equipment, services)',
              'OPEX estimation (feed, labor, energy, maintenance)',
              '10-year financial projections (P&L, Cash Flow, Balance Sheet)',
              'Investment analysis (NPV, IRR, Payback, ROI)',
              'Sensitivity analysis (price, yield, costs, scenarios)',
            ],
          },
          {
            number: 6,
            title: 'Risk Assessment',
            timeline: '2-3 weeks',
            deliverables: 'Risk register, Risk matrix and heat map, Top 10 risks detailed analysis, Mitigation strategies, Contingency plans',
            items: [
              'Risk identification (technical, biological, market, financial)',
              'Risk analysis (impact × probability = risk score)',
              'Mitigation strategies for each major risk',
              'Contingency planning & business continuity',
            ],
          },
          {
            number: 7,
            title: 'Recommendations & Roadmap',
            timeline: '2-3 weeks',
            deliverables: 'Executive summary, Go/no-go recommendation, Optimal project configuration, Implementation roadmap, Final report (150-250 pages)',
            items: [
              'Clear go/no-go recommendation with justification',
              'Optimal project configuration (species, system, scale)',
              'Implementation roadmap (phase-by-phase plan)',
              'Critical success factors & next steps',
            ],
          },
        ],
      },
      packages: {
        title: 'Study Packages & Pricing',
        subtitle: 'We offer three levels of feasibility study to match your project needs',
        express: {
          name: 'Express Feasibility Study',
          price: '€8,000 - €12,000',
          timeline: '3-4 weeks',
          pages: '50-75 pages',
          bestFor: 'Quick evaluation of basic viability',
          scope: [
            'Desktop analysis (no site visit)',
            'Simplified technical assessment',
            'Basic financial model (5-year)',
            'High-level market review',
            'Go/no-go recommendation',
          ],
          idealFor: 'Initial project screening, Budget <€500K, Concept validation, Basic grant applications',
        },
        standard: {
          name: 'Standard Feasibility Study',
          price: '€15,000 - €35,000',
          timeline: '8-12 weeks',
          pages: '150-200 pages',
          bestFor: 'Most aquaculture projects',
          popular: true,
          scope: [
            'Single site visit (2-3 days)',
            'Comprehensive technical analysis',
            'Detailed financial model (10-year)',
            'Full market analysis',
            'Risk assessment',
            'Implementation roadmap',
          ],
          idealFor: 'Serious investors, Budget €500K-€5M, Bank financing required, Greenfield projects',
        },
        premium: {
          name: 'Premium Feasibility Study',
          price: '€35,000 - €75,000',
          timeline: '12-20 weeks',
          pages: '200-300 pages',
          bestFor: 'Large-scale or complex projects',
          scope: [
            'Multiple site visits',
            'Detailed engineering (30% design)',
            'Advanced financial modeling (Monte Carlo)',
            'Comprehensive market research',
            'Environmental impact assessment',
            'Investor presentation materials',
            'Due diligence support',
          ],
          idealFor: 'Large investments (€5M+), Multiple funding sources, Institutional investors, International projects',
        },
      },
      deliverables: {
        title: 'What You Receive',
        subtitle: 'Comprehensive Feasibility Study Report',
        reportSections: [
          { title: 'Executive Summary', pages: '10-15 pages', desc: 'Project overview, key findings, financial highlights, recommendation' },
          { title: 'Project Definition', pages: '10-15 pages', desc: 'Objectives, stakeholder analysis, success criteria, concept alternatives' },
          { title: 'Site Assessment', pages: '20-30 pages', desc: 'Location analysis, water quality data, infrastructure, regulatory environment' },
          { title: 'Technical Analysis', pages: '40-60 pages', desc: 'Species selection, production system design, facility layout, equipment specs' },
          { title: 'Market Analysis', pages: '30-40 pages', desc: 'Market research, competitive analysis, pricing strategy, sales projections' },
          { title: 'Financial Analysis', pages: '40-50 pages', desc: 'CAPEX/OPEX breakdown, 10-year projections, investment metrics, sensitivity analysis' },
          { title: 'Risk Assessment', pages: '20-30 pages', desc: 'Risk register, mitigation strategies, contingency plans, insurance recommendations' },
          { title: 'Implementation Plan', pages: '15-20 pages', desc: 'Project roadmap, critical path, resource requirements, key milestones' },
          { title: 'Recommendations', pages: '5-10 pages', desc: 'Go/no-go decision, optimal configuration, next steps, critical decisions' },
          { title: 'Appendices', pages: 'Varies', desc: 'Water quality test results, equipment specs, market data, financial model (Excel)' },
        ],
        additionalDeliverables: [
          'Executive presentation (PowerPoint, 20-30 slides)',
          'Financial model (Excel, fully editable)',
          'Site maps and preliminary layouts (PDF/CAD)',
          'Meeting recordings and notes',
          'Regular progress updates',
        ],
      },
      clientProfiles: {
        title: 'Who Needs This Service',
        subtitle: 'Five client profiles we typically serve',
        profiles: [
          {
            icon: Briefcase,
            title: 'The First-Time Aquaculture Investor',
            challenge: 'Passionate about aquaculture but lacks industry experience. Needs validation that the concept is viable.',
            howWeHelp: 'We provide objective, data-driven analysis to confirm if the project makes financial sense, preventing costly mistakes.',
            results: 'Confidence to proceed with realistic expectations OR saves millions by not pursuing an unviable project.',
          },
          {
            icon: Factory,
            title: 'The Existing Farm Operator',
            challenge: 'Currently running a farm, considering expansion or modernization. Needs to justify the investment.',
            howWeHelp: 'We analyze expansion options, compare technologies, and model financial returns to guide the decision.',
            results: 'Clear roadmap for growth with ROI projections and risk mitigation strategies.',
          },
          {
            icon: Building2,
            title: 'The Corporate Developer',
            challenge: 'Developing a large-scale commercial aquaculture project. Needs bankable feasibility study for investors/lenders.',
            howWeHelp: 'We deliver institutional-grade analysis that meets bank and investor due diligence requirements.',
            results: 'Successful financing secured, project approved by investment committee.',
          },
          {
            icon: GraduationCap,
            title: 'The Government or NGO',
            challenge: 'Evaluating aquaculture for rural development, food security, or job creation. Needs comprehensive analysis.',
            howWeHelp: 'We assess technical, economic, social, and environmental dimensions to guide policy decisions.',
            results: 'Evidence-based decision making, successful grant applications, sustainable project design.',
          },
          {
            icon: Users,
            title: 'The Equipment Supplier or Technology Provider',
            challenge: 'Selling aquaculture systems to clients who need feasibility validation before purchasing.',
            howWeHelp: 'We provide independent, third-party feasibility analysis that validates the technology choice.',
            results: 'Increased sales conversion, client confidence, reduced post-sale disputes.',
          },
        ],
      },
      caseStudies: {
        title: 'Real Case Studies',
        subtitle: 'Real projects. Real results. Including projects we recommended NOT to proceed.',
        studies: [
          {
            title: 'Alpine Trout Farm - Austria',
            location: 'Austrian Alps, 1,200m elevation',
            investment: '€3.2 million',
            species: 'Rainbow Trout',
            system: 'Hybrid Flow-Through System (HFTS)',
            outcome: 'GO',
            results: [
              'Feasibility study: €28,000 (Standard package)',
              'Recommendation: Proceed with phased implementation',
              'Project approved by bank (€2.5M loan + €700K equity)',
              'Farm now producing 180 tons/year',
              'Achieved positive cash flow in Year 2',
              'Exceeded FCR projections (1.05 vs. 1.15 projected)',
            ],
            keyInsight: 'Study identified groundwater temperature as critical success factor. Recommended HFTS over RAS to leverage cold, pristine mountain water.',
          },
          {
            title: 'Tropical Shrimp Project - Nigeria',
            location: 'Niger Delta region',
            investment: '€1.8 million',
            species: 'Vannamei Shrimp',
            system: 'Biofloc System',
            outcome: 'CONDITIONAL GO',
            results: [
              'Feasibility study: €32,000 (Standard package)',
              'Recommendation: Go IF alternative site secured',
              'Original site: Flood risk too high, unreliable power',
              'Alternative site identified 15km away',
              'Client relocated project, construction underway',
              'Study saved client from €500K+ flood damage costs',
            ],
            keyInsight: 'Risk assessment revealed fatal flaws in original site. Alternative site analysis saved the project.',
          },
          {
            title: 'Baltic Salmon RAS - Latvia',
            location: 'Coastal Latvia',
            investment: '€12 million',
            species: 'Atlantic Salmon',
            system: 'Large-scale RAS',
            outcome: 'GO',
            results: [
              'Feasibility study: €68,000 (Premium package)',
              'Recommendation: Proceed with 30% design complete',
              'Secured €8M loan + €4M equity from 3 investors',
              'Environmental permit approved (EIA included in study)',
              'Detailed engineering now 60% complete',
              'Construction start Q2 2025',
            ],
            keyInsight: 'Premium package provided 30% engineering, EIA, and investor materials that de-risked the €12M investment.',
          },
          {
            title: 'Desert Tilapia Farm - UAE',
            location: 'Abu Dhabi desert region',
            investment: '€5.5 million',
            species: 'Nile Tilapia',
            system: 'Indoor RAS',
            outcome: 'NO-GO',
            results: [
              'Feasibility study: €42,000 (Standard package)',
              'Recommendation: DO NOT PROCEED',
              'Energy costs 3x higher than viable (solar not sufficient)',
              'Market oversupplied (imports from Egypt, Jordan)',
              'Water costs prohibitive despite RAS recycling',
              'Client saved €5.5M by not proceeding',
            ],
            keyInsight: 'Sometimes the best recommendation is NO-GO. This study saved the client €5.5 million and their reputation.',
          },
        ],
      },
      whyUs: {
        title: 'Why Choose Vismar Aqua',
        reasons: [
          {
            title: '15+ Years of Experience',
            desc: '50+ feasibility studies completed across 4 continents. We\'ve seen it all—from tiny startups to €50M megaprojects.',
          },
          {
            title: 'Design-Build-Operate Experience',
            desc: 'We don\'t just study projects—we build and operate them. Our feasibility studies are grounded in real-world operational experience.',
          },
          {
            title: 'Independence & Objectivity',
            desc: 'We have NO equipment sales agenda. If your project isn\'t viable, we\'ll tell you. Our reputation depends on honest analysis.',
          },
          {
            title: 'Bankable Reports',
            desc: 'Our feasibility studies are accepted by major European banks, development finance institutions, and private equity investors.',
          },
        ],
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'How long does a feasibility study take?',
            a: 'Express: 3-4 weeks. Standard: 8-12 weeks. Premium: 12-20 weeks. Timeline depends on project complexity and data availability.',
          },
          {
            q: 'What if the study recommends NOT to proceed?',
            a: 'You just saved millions. A NO-GO recommendation is valuable—it prevents you from making a catastrophic investment. We\'ve stopped clients from losing €2M-€20M with honest NO-GO recommendations.',
          },
          {
            q: 'Can I get financing based on your study?',
            a: 'Yes. Our Standard and Premium feasibility studies meet bank due diligence requirements. We\'ve supported successful financing for 80%+ of our GO recommendations.',
          },
          {
            q: 'Do you provide ongoing support after the study?',
            a: 'Yes. We offer post-study services: detailed engineering design, equipment procurement, construction management, and operational support.',
          },
          {
            q: 'What information do I need to provide?',
            a: 'Project concept, target location, available budget, investment goals, and any existing data (site maps, water tests, market research).',
          },
          {
            q: 'Do you do site visits?',
            a: 'Standard and Premium packages include site visits. Express package is desktop analysis only.',
          },
        ],
      },
      finalCta: {
        title: 'Ready to De-Risk Your Aquaculture Investment?',
        subtitle: 'Schedule a free 30-minute consultation to discuss your project',
        cta1: 'Request Proposal',
        cta2: 'Schedule Consultation',
        contact: 'Or call us directly: +380 67 123 4567',
      },
    },
    uk: {
      breadcrumb: {
        home: 'Головна',
        services: 'Послуги',
        current: 'Техніко-економічне обґрунтування',
      },
      hero: {
        title: 'Зменшіть ризики вашої інвестиції в аквакультуру перед початком будівництва',
        subtitle: 'Комплексні техніко-економічні обґрунтування, які відповідають на критичне питання: "Чи дійсно цей проект принесе прибуток?" 15+ років досвіду. 50+ завершених досліджень. Реальні дані. Реальний аналіз. Реальні прогнози.',
        cta1: 'Замовити дослідження',
        cta2: 'Завантажити зразок звіту',
      },
      intro: {
        title: 'Чому техніко-економічне обґрунтування важливе',
        subtitle: 'Сувора реальність інвестицій в аквакультуру',
        statistic: 'Згідно з промисловими даними, понад 40% стартапів в аквакультурі не виживають перші 3 роки. З тих, що виживають, 80% ніколи не досягають запроектованих потужностей.',
        whyFailTitle: 'Чому вони не виживають?',
        failures: [
          { icon: MapPin, title: 'Неправильний вибір майданчика', desc: 'Невідповідне джерело води, поганий доступ, регуляторні проблеми' },
          { icon: Euro, title: 'Нереалістичні фінансові прогнози', desc: 'Недооцінені витрати, переоцінена продуктивність' },
          { icon: Settings, title: 'Неправильний вибір технології', desc: 'Система не відповідає кліматові, видам або експертизі' },
          { icon: ShoppingCart, title: 'Нерозуміння ринку', desc: 'Продукт не відповідає попиту або ціновим припущенням' },
          { icon: Zap, title: 'Операційні недогляди', desc: 'Витрати на робочу силу, енергію, корми перевищують прогнози' },
          { icon: FileCheck, title: 'Регуляторна сліпота', desc: 'Дозволи, сертифікації, витрати на відповідність законодавству проігноровані' },
        ],
        protectionTitle: 'ТЕО захищає вас від цих помилок',
        protections: [
          { title: 'Підтверджує або спростовує', desc: 'Вашу концепцію твердими даними' },
          { title: 'Виявляє фатальні недоліки', desc: 'До того, як вони стануть дорогими катастрофами' },
          { title: 'Надає реалістичні прогнози', desc: 'На основі фактичних операційних даних' },
          { title: 'Забезпечує фінансування', desc: 'З банківським аналізом, якому довіряють інвестори' },
          { title: 'Керує проектними рішеннями', desc: 'З технічною та економічною оптимізацією' },
          { title: 'Створює вашу дорожню карту', desc: 'Від концепції до прибуткової роботи' },
        ],
        investmentTitle: 'Інвестиційне рішення',
        optionA: {
          title: 'Варіант А: Пропустити ТЕО',
          save: 'Зекономити: €15,000 - €50,000 (вартість дослідження)',
          risk: 'Ризик: €2,000,000 - €10,000,000+ (загальна інвестиція в проект)',
          chance: 'Ймовірність невдачі: 40%+',
        },
        optionB: {
          title: 'Варіант Б: Замовити якісне ТЕО',
          invest: 'Інвестувати: €15,000 - €50,000 (вартість дослідження)',
          protect: 'Захистити: €2,000,000 - €10,000,000+ (загальна інвестиція в проект)',
          decision: 'Обґрунтоване рішення: Продовжувати тільки якщо життєздатно',
          result: 'Якщо не життєздатно: Заощадити мільйони, не продовжуючи',
        },
        conclusion: 'ТЕО — це не витрата, це страховка.',
      },
      methodology: {
        title: 'Наша методологія ТЕО',
        subtitle: 'Підхід Vismar Aqua: Інтеграція DBOT',
        intro: 'Наші технік-економічні обґрунтування унікальні, тому що ми використовуємо ту саму методологію Design-Build-Operate-Transfer (DBOT), яка керує виконанням наших проектів. Це означає, що ми не просто аналізуємо — ми знаємо, як будувати те, що вивчаємо, розуміємо реальні операційні витрати, передбачаємо будівельні виклики і надаємо дієві рекомендації.',
        processTitle: '7-фазний процес ТЕО',
        phases: [
          {
            number: 1,
            title: 'Визначення проекту та цілей',
            timeline: '1-2 тижні',
            deliverables: 'Документ цілей проекту, Попередні варіанти концепції (3-5 альтернатив), Матриця критеріїв оцінки',
            items: [
              'Семінари зацікавлених сторін для розуміння інвестиційних цілей',
              'Розробка попередньої концепції (RAS, HFTS, ставки, садки)',
              'Визначення критеріїв успіху (IRR, NPV, термін окупності)',
              'Виробничі цілі (тонн/рік, виживаність, FCR)',
            ],
          },
          {
            number: 2,
            title: 'Оцінка та аналіз майданчика',
            timeline: '2-4 тижні',
            deliverables: 'Звіт про оцінку майданчика з картами, Аналіз якості води, Чеклист регуляторних вимог, Рейтинг придатності майданчика',
            items: [
              'Фізичний візит та оцінка майданчика (топографія, грунт, дренаж)',
              'Аналіз джерела води (кількість, якість, надійність)',
              'Огляд клімату та екологічних умов',
              'Регуляторна та юридична оцінка (дозволи, ліцензії, відповідність)',
            ],
          },
          {
            number: 3,
            title: 'Технічна доцільність',
            timeline: '3-5 тижнів',
            deliverables: 'Рекомендація вибору виду, Матриця порівняння виробничих систем, Попереднє планування об\'єкта, Перелік основного обладнання',
            items: [
              'Аналіз вибору виду (біологічна придатність, економіка)',
              'Проектування виробничої системи (RAS, HFTS, Biofloc, Ставки)',
              'Інженерний аналіз (планування об\'єкта, специфікації обладнання)',
              'Оцінка технології (автоматизація, біобезпека, моніторинг)',
            ],
          },
          {
            number: 4,
            title: 'Аналіз ринку',
            timeline: '2-4 тижні',
            deliverables: 'Звіт про дослідження ринку (30-50 сторінок), Конкурентний аналіз, Прогнози продажів (5 років), Стратегія дистрибуції',
            items: [
              'Аналіз попиту та пропозиції (локальний, регіональний, експорт)',
              'Аналіз цін (історичні тренди, сезонні коливання)',
              'Позиціонування на ринку та конкурентна перевага',
              'Маркетингова стратегія та канали дистрибуції',
            ],
          },
          {
            number: 5,
            title: 'Фінансове моделювання',
            timeline: '3-4 тижні',
            deliverables: 'Детальна фінансова модель (Excel), 10-річні фінансові прогнози, Підсумок інвестиційних метрик, Звіт про аналіз чутливості',
            items: [
              'Оцінка CAPEX (земля, будівлі, обладнання, послуги)',
              'Оцінка OPEX (корми, робоча сила, енергія, обслуговування)',
              '10-річні фінансові прогнози (P&L, Cash Flow, Balance Sheet)',
              'Інвестиційний аналіз (NPV, IRR, Payback, ROI)',
              'Аналіз чутливості (ціна, врожайність, витрати, сценарії)',
            ],
          },
          {
            number: 6,
            title: 'Оцінка ризиків',
            timeline: '2-3 тижні',
            deliverables: 'Реєстр ризиків, Матриця ризиків та теплова карта, Детальний аналіз топ-10 ризиків, Стратегії пом\'якшення, Плани на непередбачені обставини',
            items: [
              'Ідентифікація ризиків (технічні, біологічні, ринкові, фінансові)',
              'Аналіз ризиків (вплив × ймовірність = оцінка ризику)',
              'Стратегії пом\'якшення для кожного основного ризику',
              'Планування непередбачених обставин та бізнес-безперервності',
            ],
          },
          {
            number: 7,
            title: 'Рекомендації та дорожня карта',
            timeline: '2-3 тижні',
            deliverables: 'Резюме для керівництва, Рекомендація go/no-go, Оптимальна конфігурація проекту, Дорожня карта впровадження, Фінальний звіт (150-250 сторінок)',
            items: [
              'Чітка рекомендація go/no-go з обґрунтуванням',
              'Оптимальна конфігурація проекту (види, система, масштаб)',
              'Дорожня карта впровадження (поетапний план)',
              'Критичні фактори успіху та наступні кроки',
            ],
          },
        ],
      },
      packages: {
        title: 'Пакети досліджень та ціни',
        subtitle: 'Ми пропонуємо три рівні ТЕО відповідно до потреб вашого проекту',
        express: {
          name: 'Експрес ТЕО',
          price: '€8,000 - €12,000',
          timeline: '3-4 тижні',
          pages: '50-75 сторінок',
          bestFor: 'Швидка оцінка базової життєздатності',
          scope: [
            'Настільний аналіз (без візиту на майданчик)',
            'Спрощена технічна оцінка',
            'Базова фінансова модель (5 років)',
            'Огляд ринку на високому рівні',
            'Рекомендація go/no-go',
          ],
          idealFor: 'Початковий скринінг проекту, Бюджет <€500K, Валідація концепції, Базові заявки на гранти',
        },
        standard: {
          name: 'Стандартне ТЕО',
          price: '€15,000 - €35,000',
          timeline: '8-12 тижнів',
          pages: '150-200 сторінок',
          bestFor: 'Більшість проектів аквакультури',
          popular: true,
          scope: [
            'Один візит на майданчик (2-3 дні)',
            'Комплексний технічний аналіз',
            'Детальна фінансова модель (10 років)',
            'Повний аналіз ринку',
            'Оцінка ризиків',
            'Дорожня карта впровадження',
          ],
          idealFor: 'Серйозні інвестори, Бюджет €500K-€5M, Потрібне банківське фінансування, Проекти з нуля',
        },
        premium: {
          name: 'Преміум ТЕО',
          price: '€35,000 - €75,000',
          timeline: '12-20 тижнів',
          pages: '200-300 сторінок',
          bestFor: 'Великомасштабні або складні проекти',
          scope: [
            'Кілька візитів на майданчик',
            'Детальне інженерне проектування (30% дизайну)',
            'Просунуте фінансове моделювання (Монте-Карло)',
            'Комплексне дослідження ринку',
            'Оцінка впливу на навколишнє середовище',
            'Матеріали для презентації інвесторам',
            'Підтримка due diligence',
          ],
          idealFor: 'Великі інвестиції (€5M+), Кілька джерел фінансування, Інституційні інвестори, Міжнародні проекти',
        },
      },
      deliverables: {
        title: 'Що ви отримаєте',
        subtitle: 'Комплексний звіт ТЕО',
        reportSections: [
          { title: 'Резюме для керівництва', pages: '10-15 сторінок', desc: 'Огляд проекту, ключові висновки, фінансові підсумки, рекомендація' },
          { title: 'Визначення проекту', pages: '10-15 сторінок', desc: 'Цілі, аналіз зацікавлених сторін, критерії успіху, альтернативи концепції' },
          { title: 'Оцінка майданчика', pages: '20-30 сторінок', desc: 'Аналіз розташування, дані про якість води, інфраструктура, регуляторне середовище' },
          { title: 'Технічний аналіз', pages: '40-60 сторінок', desc: 'Вибір виду, проектування виробничої системи, планування об\'єкта, специфікації обладнання' },
          { title: 'Аналіз ринку', pages: '30-40 сторінок', desc: 'Дослідження ринку, конкурентний аналіз, цінова стратегія, прогнози продажів' },
          { title: 'Фінансовий аналіз', pages: '40-50 сторінок', desc: 'Розбивка CAPEX/OPEX, 10-річні прогнози, інвестиційні метрики, аналіз чутливості' },
          { title: 'Оцінка ризиків', pages: '20-30 сторінок', desc: 'Реєстр ризиків, стратегії пом\'якшення, плани на непередбачені обставини, рекомендації зі страхування' },
          { title: 'План впровадження', pages: '15-20 сторінок', desc: 'Дорожня карта проекту, критичний шлях, потреби в ресурсах, ключові віхи' },
          { title: 'Рекомендації', pages: '5-10 сторінок', desc: 'Рішення go/no-go, оптимальна конфігурація, наступні кроки, критичні рішення' },
          { title: 'Додатки', pages: 'Варіюється', desc: 'Результати тестів води, специфікації обладнання, ринкові дані, фінансова модель (Excel)' },
        ],
        additionalDeliverables: [
          'Презентація для керівництва (PowerPoint, 20-30 слайдів)',
          'Фінансова модель (Excel, повністю редагована)',
          'Карти майданчика та попередні планування (PDF/CAD)',
          'Записи зустрічей та нотатки',
          'Регулярні оновлення прогресу',
        ],
      },
      clientProfiles: {
        title: 'Кому потрібна ця послуга',
        subtitle: 'П\'ять профілів клієнтів, яких ми зазвичай обслуговуємо',
        profiles: [
          {
            icon: Briefcase,
            title: 'Початківець-інвестор в аквакультуру',
            challenge: 'Захоплений аквакультурою, але не має досвіду в галузі. Потребує підтвердження життєздатності концепції.',
            howWeHelp: 'Ми надаємо об\'єктивний, заснований на даних аналіз для підтвердження фінансової доцільності проекту, запобігаючи дорогим помилкам.',
            results: 'Впевненість продовжувати з реалістичними очікуваннями АБО заощадження мільйонів, не розпочинаючи нежиттєздатний проект.',
          },
          {
            icon: Factory,
            title: 'Діючий оператор ферми',
            challenge: 'Зараз керує фермою, розглядає розширення або модернізацію. Потребує обґрунтування інвестиції.',
            howWeHelp: 'Ми аналізуємо варіанти розширення, порівнюємо технології та моделюємо фінансову віддачу для керівництва рішенням.',
            results: 'Чітка дорожня карта для зростання з прогнозами ROI та стратегіями пом\'якшення ризиків.',
          },
          {
            icon: Building2,
            title: 'Корпоративний девелопер',
            challenge: 'Розробка великомасштабного комерційного проекту аквакультури. Потребує банківського ТЕО для інвесторів/кредиторів.',
            howWeHelp: 'Ми надаємо аналіз інституційного рівня, який відповідає вимогам банків та інвесторів до due diligence.',
            results: 'Успішне отримання фінансування, проект затверджений інвестиційним комітетом.',
          },
          {
            icon: GraduationCap,
            title: 'Уряд або НДО',
            challenge: 'Оцінка аквакультури для розвитку сільських районів, продовольчої безпеки або створення робочих місць. Потрібен комплексний аналіз.',
            howWeHelp: 'Ми оцінюємо технічні, економічні, соціальні та екологічні виміри для керівництва політичними рішеннями.',
            results: 'Прийняття рішень на основі доказів, успішні заявки на гранти, стійке проектування.',
          },
          {
            icon: Users,
            title: 'Постачальник обладнання або технологічний провайдер',
            challenge: 'Продаж систем аквакультури клієнтам, які потребують підтвердження ТЕО перед покупкою.',
            howWeHelp: 'Ми надаємо незалежний, сторонній аналіз ТЕО, який підтверджує вибір технології.',
            results: 'Збільшена конверсія продажів, довіра клієнтів, зменшені післяпродажні суперечки.',
          },
        ],
      },
      caseStudies: {
        title: 'Реальні кейси',
        subtitle: 'Реальні проекти. Реальні результати. Включаючи проекти, які ми рекомендували НЕ розпочинати.',
        studies: [
          {
            title: 'Альпійська форелева ферма - Австрія',
            location: 'Австрійські Альпи, висота 1,200м',
            investment: '€3.2 мільйона',
            species: 'Райдужна форель',
            system: 'Гібридна проточна система (HFTS)',
            outcome: 'GO',
            results: [
              'ТЕО: €28,000 (Стандартний пакет)',
              'Рекомендація: Продовжувати з поетапним впровадженням',
              'Проект затверджений банком (€2.5M кредит + €700K власні кошти)',
              'Ферма зараз виробляє 180 тонн/рік',
              'Досягла позитивного грошового потоку на 2-й рік',
              'Перевершила прогнози FCR (1.05 проти 1.15 прогнозованих)',
            ],
            keyInsight: 'Дослідження визначило температуру підземних вод як критичний фактор успіху. Рекомендовано HFTS замість RAS для використання холодної, чистої гірської води.',
          },
          {
            title: 'Тропічний креветковий проект - Нігерія',
            location: 'Регіон дельти Нігера',
            investment: '€1.8 мільйона',
            species: 'Креветка Ванамей',
            system: 'Система біофлок',
            outcome: 'УМОВНЕ GO',
            results: [
              'ТЕО: €32,000 (Стандартний пакет)',
              'Рекомендація: Go ЯКЩО забезпечено альтернативний майданчик',
              'Оригінальний майданчик: Занадто високий ризик повені, ненадійне електропостачання',
              'Альтернативний майданчик визначено на відстані 15км',
              'Клієнт перемістив проект, будівництво триває',
              'Дослідження заощадило клієнту €500K+ витрат на пошкодження від повені',
            ],
            keyInsight: 'Оцінка ризиків виявила фатальні недоліки оригінального майданчика. Аналіз альтернативного майданчика врятував проект.',
          },
          {
            title: 'Балтійський лососевий RAS - Латвія',
            location: 'Прибережна Латвія',
            investment: '€12 мільйонів',
            species: 'Атлантичний лосось',
            system: 'Великомасштабний RAS',
            outcome: 'GO',
            results: [
              'ТЕО: €68,000 (Преміум пакет)',
              'Рекомендація: Продовжувати з 30% завершеним дизайном',
              'Забезпечено €8M кредит + €4M власних коштів від 3 інвесторів',
              'Екологічний дозвіл затверджено (EIA включена в дослідження)',
              'Детальне інженерне проектування зараз 60% завершено',
              'Початок будівництва Q2 2025',
            ],
            keyInsight: 'Преміум пакет надав 30% інженерного проектування, EIA та матеріали для інвесторів, які знизили ризик інвестиції в €12M.',
          },
          {
            title: 'Пустельна тиляпієва ферма - ОАЕ',
            location: 'Пустельний регіон Абу-Дабі',
            investment: '€5.5 мільйонів',
            species: 'Нільська тиляпія',
            system: 'Крита RAS',
            outcome: 'NO-GO',
            results: [
              'ТЕО: €42,000 (Стандартний пакет)',
              'Рекомендація: НЕ ПРОДОВЖУВАТИ',
              'Енергетичні витрати в 3 рази вищі за життєздатні (сонячна енергія недостатня)',
              'Ринок перенасичений (імпорт з Єгипту, Йорданії)',
              'Витрати на воду непомірні, незважаючи на рециркуляцію RAS',
              'Клієнт заощадив €5.5M, не продовжуючи',
            ],
            keyInsight: 'Іноді найкраща рекомендація — це NO-GO. Це дослідження заощадило клієнту €5.5 мільйона та його репутацію.',
          },
        ],
      },
      whyUs: {
        title: 'Чому обрати Vismar Aqua',
        reasons: [
          {
            title: '15+ років досвіду',
            desc: '50+ завершених ТЕО на 4 континентах. Ми бачили все — від крихітних стартапів до мегапроектів €50M.',
          },
          {
            title: 'Досвід проектування-будівництва-експлуатації',
            desc: 'Ми не просто вивчаємо проекти — ми будуємо та експлуатуємо їх. Наші ТЕО засновані на реальному операційному досвіді.',
          },
          {
            title: 'Незалежність та об\'єктивність',
            desc: 'У нас НЕМАЄ програми продажу обладнання. Якщо ваш проект нежиттєздатний, ми вам скажемо. Наша репутація залежить від чесного аналізу.',
          },
          {
            title: 'Банківські звіти',
            desc: 'Наші ТЕО приймаються великими європейськими банками, фінансовими інституціями розвитку та приватними інвесторами.',
          },
        ],
      },
      faq: {
        title: 'Часті питання',
        questions: [
          {
            q: 'Скільки часу займає ТЕО?',
            a: 'Експрес: 3-4 тижні. Стандартне: 8-12 тижнів. Преміум: 12-20 тижнів. Терміни залежать від складності проекту та доступності даних.',
          },
          {
            q: 'Що якщо дослідження рекомендує НЕ продовжувати?',
            a: 'Ви щойно заощадили мільйони. Рекомендація NO-GO цінна — вона запобігає катастрофічній інвестиції. Ми зупинили клієнтів від втрати €2M-€20M чесними рекомендаціями NO-GO.',
          },
          {
            q: 'Чи можу я отримати фінансування на основі вашого дослідження?',
            a: 'Так. Наші Стандартні та Преміум ТЕО відповідають вимогам банків до due diligence. Ми підтримали успішне фінансування для 80%+ наших рекомендацій GO.',
          },
          {
            q: 'Чи надаєте ви постійну підтримку після дослідження?',
            a: 'Так. Ми пропонуємо післядослідницькі послуги: детальне інженерне проектування, закупівлю обладнання, управління будівництвом та операційну підтримку.',
          },
          {
            q: 'Яку інформацію мені потрібно надати?',
            a: 'Концепція проекту, цільове місце розташування, доступний бюджет, інвестиційні цілі та будь-які існуючі дані (карти майданчика, тести води, дослідження ринку).',
          },
          {
            q: 'Чи проводите ви візити на майданчик?',
            a: 'Стандартний та Преміум пакети включають візити на майданчик. Експрес пакет — тільки настільний аналіз.',
          },
        ],
      },
      finalCta: {
        title: 'Готові зменшити ризики вашої інвестиції в аквакультуру?',
        subtitle: 'Заплануйте безкоштовну 30-хвилинну консультацію для обговорення вашого проекту',
        cta1: 'Запросити пропозицію',
        cta2: 'Запланувати консультацію',
        contact: 'Або зателефонуйте нам напряму: +380 67 123 4567',
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
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-50 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                <Download className="w-5 h-5" />
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction: Why Feasibility Studies Matter */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.intro.title}</h2>
            <p className="text-xl text-muted-foreground">{t.intro.subtitle}</p>
          </div>

          {/* Statistic Callout */}
          <div className="max-w-3xl mx-auto mb-12 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-800 font-medium">
                {t.intro.statistic}
              </p>
            </div>
          </div>

          {/* Why Do They Fail */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.intro.whyFailTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.intro.failures.map((failure, idx) => {
                const Icon = failure.icon;
                return (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
                    <div className="flex items-start gap-4">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold mb-2">{failure.title}</h4>
                        <p className="text-sm text-gray-600">{failure.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Protection */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.intro.protectionTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.intro.protections.map((protection, idx) => (
                <div key={idx} className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">{protection.title}</h4>
                      <p className="text-sm text-gray-600">{protection.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Decision */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.intro.investmentTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Option A */}
              <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
                <h4 className="text-xl font-bold mb-4 text-red-900">{t.intro.optionA.title}</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ {t.intro.optionA.save}</li>
                  <li className="text-red-600 font-semibold">⚠️ {t.intro.optionA.risk}</li>
                  <li className="text-red-600 font-semibold">⚠️ {t.intro.optionA.chance}</li>
                </ul>
              </div>

              {/* Option B */}
              <div className="bg-emerald-50 p-8 rounded-lg border-2 border-emerald-500">
                <h4 className="text-xl font-bold mb-4 text-emerald-900">{t.intro.optionB.title}</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ {t.intro.optionB.invest}</li>
                  <li className="text-emerald-700 font-semibold">✓ {t.intro.optionB.protect}</li>
                  <li className="text-emerald-700 font-semibold">✓ {t.intro.optionB.decision}</li>
                  <li className="text-emerald-700 font-semibold">✓ {t.intro.optionB.result}</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-bold text-emerald-700">
                {t.intro.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.methodology.title}</h2>
            <h3 className="text-xl text-emerald-700 font-semibold mb-4">{t.methodology.subtitle}</h3>
            <p className="text-lg text-muted-foreground">{t.methodology.intro}</p>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold mb-8">{t.methodology.processTitle}</h3>
          </div>

          {/* 7 Phases */}
          <div className="space-y-6">
            {t.methodology.phases.map((phase, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-emerald-500">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h4 className="text-2xl font-bold">{phase.title}</h4>
                      <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {phase.timeline}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {phase.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-4 rounded border border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Deliverables:</p>
                      <p className="text-sm text-gray-600">{phase.deliverables}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.packages.title}</h2>
            <p className="text-xl text-muted-foreground">{t.packages.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Express Package */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{t.packages.express.name}</h3>
                <p className="text-3xl font-bold text-emerald-600">{t.packages.express.price}</p>
                <p className="text-sm text-gray-600 mt-2">{t.packages.express.timeline} • {t.packages.express.pages}</p>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-4">{t.packages.express.bestFor}</p>
              <ul className="space-y-3 mb-6">
                {t.packages.express.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-1">Ideal For:</p>
                <p className="text-xs text-gray-600">{t.packages.express.idealFor}</p>
              </div>
            </div>

            {/* Standard Package (Most Popular) */}
            <div className="bg-emerald-50 rounded-lg p-8 border-2 border-emerald-500 relative">
              {t.packages.standard.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold mb-2">{t.packages.standard.name}</h3>
                <p className="text-3xl font-bold text-emerald-600">{t.packages.standard.price}</p>
                <p className="text-sm text-gray-600 mt-2">{t.packages.standard.timeline} • {t.packages.standard.pages}</p>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-4">{t.packages.standard.bestFor}</p>
              <ul className="space-y-3 mb-6">
                {t.packages.standard.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-4 rounded border border-emerald-300">
                <p className="text-xs font-semibold text-gray-600 mb-1">Ideal For:</p>
                <p className="text-xs text-gray-600">{t.packages.standard.idealFor}</p>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{t.packages.premium.name}</h3>
                <p className="text-3xl font-bold text-emerald-600">{t.packages.premium.price}</p>
                <p className="text-sm text-gray-600 mt-2">{t.packages.premium.timeline} • {t.packages.premium.pages}</p>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-4">{t.packages.premium.bestFor}</p>
              <ul className="space-y-3 mb-6">
                {t.packages.premium.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-4 rounded border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 mb-1">Ideal For:</p>
                <p className="text-xs text-gray-600">{t.packages.premium.idealFor}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.deliverables.title}</h2>
            <p className="text-xl text-muted-foreground">{t.deliverables.subtitle}</p>
          </div>

          {/* Report Sections */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-bold mb-6 text-center">Report Sections ({isEnglish ? '150-250 pages total' : '150-250 сторінок загалом'})</h3>
            <div className="space-y-3">
              {t.deliverables.reportSections.map((section, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{section.title}</h4>
                      <span className="text-xs text-gray-500 font-medium">{section.pages}</span>
                    </div>
                    <p className="text-sm text-gray-600">{section.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Deliverables */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">{isEnglish ? 'Additional Deliverables' : 'Додаткові результати'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.deliverables.additionalDeliverables.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Profiles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.clientProfiles.title}</h2>
            <p className="text-xl text-muted-foreground">{t.clientProfiles.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.clientProfiles.profiles.map((profile, idx) => {
              const Icon = profile.icon;
              return (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <Icon className="w-12 h-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{profile.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-red-700 mb-1">{isEnglish ? 'Challenge:' : 'Виклик:'}</p>
                      <p className="text-gray-600">{profile.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700 mb-1">{isEnglish ? 'How We Help:' : 'Як ми допомагаємо:'}</p>
                      <p className="text-gray-600">{profile.howWeHelp}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-700 mb-1">{isEnglish ? 'Results:' : 'Результати:'}</p>
                      <p className="text-gray-600">{profile.results}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.caseStudies.title}</h2>
            <p className="text-xl text-muted-foreground">{t.caseStudies.subtitle}</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {t.caseStudies.studies.map((study, idx) => {
              const outcomeColor = study.outcome === 'GO' ? 'emerald' : study.outcome === 'NO-GO' ? 'red' : 'amber';
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4" style={{borderColor: `var(--${outcomeColor}-500)`}}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold bg-${outcomeColor}-100 text-${outcomeColor}-800`}>
                      {study.outcome}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div>
                      <p className="font-semibold text-gray-500">{isEnglish ? 'Location' : 'Розташування'}</p>
                      <p className="text-gray-900">{study.location}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">{isEnglish ? 'Investment' : 'Інвестиція'}</p>
                      <p className="text-gray-900">{study.investment}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">{isEnglish ? 'Species' : 'Види'}</p>
                      <p className="text-gray-900">{study.species}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-500">{isEnglish ? 'System' : 'Система'}</p>
                      <p className="text-gray-900">{study.system}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {study.results.map((result, resultIdx) => (
                      <li key={resultIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
                    <p className="text-sm font-semibold text-amber-900 mb-1">{isEnglish ? 'Key Insight:' : 'Ключове розуміння:'}</p>
                    <p className="text-sm text-amber-800">{study.keyInsight}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyUs.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.whyUs.reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-emerald-50 p-6 rounded-lg">
                <Award className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-gray-700">{reason.desc}</p>
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.finalCta.title}</h2>
            <p className="text-xl mb-8 text-emerald-50">{t.finalCta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href={`/${locale}/contact`}>
                <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                  {t.finalCta.cta1}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                {t.finalCta.cta2}
              </button>
            </div>
            <p className="text-emerald-100 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              {t.finalCta.contact}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
