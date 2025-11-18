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
  Zap,
  Wind,
  Gauge,
  Beaker,
  FlaskConical,
  Microscope,
  Thermometer,
  CircuitBoard,
  Timer,
  Database,
  Sprout,
  Fish,
  CircleDot
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Aquaculture Equipment Design & Engineering | Vismar Aqua'
      : 'Проектування та інжиніринг обладнання для аквакультури | Vismar Aqua',
    description: locale === 'en'
      ? 'Comprehensive aquaculture equipment design services: filtration systems, water treatment, hatchery equipment, algae cultivation, feeding systems, grading equipment, pumping systems, and monitoring technology. Professional 3D CAD design and engineering.'
      : 'Комплексні послуги проектування обладнання для аквакультури: системи фільтрації, очищення води, обладнання для інкубаторіїв, культивування водоростей, системи годування, обладнання для сортування, насосні системи та технології моніторингу.',
  };
}

export default async function CustomDesignEquipmentPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  // Content dictionary
  const content = {
    // Hero Section
    hero: {
      title: isEnglish ? 'Aquaculture Equipment Design & Engineering' : 'Проектування та інжиніринг обладнання для аквакультури',
      subtitle: isEnglish
        ? 'Comprehensive equipment solutions for modern aquaculture operations - from filtration and water treatment to monitoring and automation'
        : 'Комплексні рішення обладнання для сучасних операцій аквакультури - від фільтрації та очищення води до моніторингу та автоматизації',
      cta: isEnglish ? 'Design Your Equipment' : 'Спроектувати ваше обладнання',
    },
    // Introduction
    intro: {
      title: isEnglish ? 'Complete Equipment Engineering Services' : 'Повні інженерні послуги обладнання',
      text1: isEnglish
        ? 'Successful aquaculture operations require precisely engineered equipment that works together as an integrated system. From water quality management to fish handling and processing, every component must be designed for reliability, efficiency, and optimal performance.'
        : 'Успішні операції аквакультури потребують точно спроектованого обладнання, яке працює разом як інтегрована система. Від управління якістю води до обробки та переробки риби, кожен компонент повинен бути розроблений для надійності, ефективності та оптимальної продуктивності.',
      text2: isEnglish
        ? 'Vismar Aqua provides comprehensive equipment design and engineering services across all aquaculture equipment categories. Our AI-accelerated 3D CAD design process delivers complete technical specifications, fabrication drawings, and supplier coordination at 50% lower costs than traditional engineering firms.'
        : 'Vismar Aqua надає комплексні послуги проектування та інжинірингу обладнання у всіх категоріях обладнання для аквакультури. Наш AI-прискорений процес 3D CAD проектування забезпечує повні технічні специфікації, креслення виготовлення та координацію постачальників за на 50% нижчими витратами, ніж традиційні інженерні фірми.',
    },
    // Equipment Categories
    categories: {
      title: isEnglish ? 'Equipment Categories & Technologies' : 'Категорії обладнання та технології',
      subtitle: isEnglish ? 'Comprehensive engineering across all aquaculture equipment types' : 'Комплексний інжиніринг у всіх типах обладнання для аквакультури',
      items: [
        {
          id: 'filtration',
          icon: Filter,
          title: isEnglish ? 'Filtration Systems' : 'Системи фільтрації',
          description: isEnglish ? 'Mechanical and biological filtration for water quality management' : 'Механічна та біологічна фільтрація для управління якістю води',
          equipment: [
            {
              name: isEnglish ? 'Drum Filters (Microscreen)' : 'Барабанні фільтри (мікросити)',
              specs: isEnglish ? '20-100μm filtration, automatic backwash, low maintenance' : '20-100 мкм фільтрація, автоматичне промивання, низьке обслуговування'
            },
            {
              name: isEnglish ? 'Bead Filters' : 'Бусинкові фільтри',
              specs: isEnglish ? 'High surface area, mechanical & biological, easy cleaning' : 'Велика площа поверхні, механічна та біологічна, легке очищення'
            },
            {
              name: isEnglish ? 'Sand Filters' : 'Піщані фільтри',
              specs: isEnglish ? 'Pressure/gravity operation, reliable filtration, backwash capability' : 'Робота під тиском/гравітацією, надійна фільтрація, можливість промивання'
            },
            {
              name: isEnglish ? 'Belt Filters' : 'Стрічкові фільтри',
              specs: isEnglish ? 'Continuous solids removal, compact design, automated operation' : 'Безперервне видалення твердих речовин, компактний дизайн, автоматизована робота'
            },
            {
              name: isEnglish ? 'Settling Tanks' : 'Відстійники',
              specs: isEnglish ? 'Passive solids removal, conical/rectangular design, sludge collection' : 'Пасивне видалення твердих речовин, конічний/прямокутний дизайн, збір осаду'
            },
            {
              name: isEnglish ? 'Biofilters (Moving Bed)' : 'Біофільтри (рухоме ложе)',
              specs: isEnglish ? 'MBBR technology, high nitrification capacity, low footprint' : 'MBBR технологія, висока нітрифікаційна здатність, мала площа'
            },
          ]
        },
        {
          id: 'water-treatment',
          icon: Droplet,
          title: isEnglish ? 'Water Treatment Equipment' : 'Обладнання очищення води',
          description: isEnglish ? 'Advanced water quality management and treatment systems' : 'Передові системи управління якістю води та очищення',
          equipment: [
            {
              name: isEnglish ? 'Protein Skimmers' : 'Пінні сепаратори',
              specs: isEnglish ? 'Foam fractionation, organic removal, efficient aeration' : 'Піноутворення, видалення органіки, ефективна аерація'
            },
            {
              name: isEnglish ? 'UV Sterilizers' : 'УФ-стерилізатори',
              specs: isEnglish ? 'Pathogen control, flow-through design, low maintenance' : 'Контроль патогенів, проточний дизайн, низьке обслуговування'
            },
            {
              name: isEnglish ? 'Ozone Systems' : 'Озонові системи',
              specs: isEnglish ? 'Advanced oxidation, water disinfection, organic breakdown' : 'Передове окислення, дезінфекція води, розпад органіки'
            },
            {
              name: isEnglish ? 'Oxygen Injection Systems' : 'Системи ін\'єкції кисню',
              specs: isEnglish ? 'Pure O2 injection, high saturation, efficient transfer' : 'Ін\'єкція чистого O2, висока насиченість, ефективна передача'
            },
            {
              name: isEnglish ? 'Degassing Columns' : 'Колони дегазації',
              specs: isEnglish ? 'CO2/N2 removal, cascade/packed tower design, gas exchange' : 'Видалення CO2/N2, каскадний/насадковий дизайн, газообмін'
            },
            {
              name: isEnglish ? 'pH Control Systems' : 'Системи контролю pH',
              specs: isEnglish ? 'Automated dosing, limestone/CO2 injection, stable control' : 'Автоматизоване дозування, ін\'єкція вапняку/CO2, стабільний контроль'
            },
          ]
        },
        {
          id: 'hatchery',
          icon: Fish,
          title: isEnglish ? 'Hatchery Equipment' : 'Обладнання для інкубаторіїв',
          description: isEnglish ? 'Specialized equipment for breeding and larval rearing' : 'Спеціалізоване обладнання для розведення та вирощування личинок',
          equipment: [
            {
              name: isEnglish ? 'Egg Incubators' : 'Інкубатори для ікри',
              specs: isEnglish ? 'Temperature control, water flow regulation, hatching trays' : 'Контроль температури, регулювання потоку води, лотки для виведення'
            },
            {
              name: isEnglish ? 'Larval Tanks' : 'Резервуари для личинок',
              specs: isEnglish ? 'Gentle water flow, easy cleaning, optimal visibility' : 'М\'який потік води, легке очищення, оптимальна видимість'
            },
            {
              name: isEnglish ? 'Artemia Hatching Systems' : 'Системи виведення артемії',
              specs: isEnglish ? 'Conical tanks, aeration, separation system, automated harvest' : 'Конічні резервуари, аерація, система розділення, автоматизований збір'
            },
            {
              name: isEnglish ? 'Algae Culture Systems' : 'Системи культивування водоростей',
              specs: isEnglish ? 'Photobioreactors, lighting control, CO2 injection, harvesting' : 'Фотобіореактори, контроль освітлення, ін\'єкція CO2, збір урожаю'
            },
            {
              name: isEnglish ? 'Rotifer Culture Equipment' : 'Обладнання культивування коловерток',
              specs: isEnglish ? 'Intensive culture tanks, feeding systems, harvesting equipment' : 'Резервуари інтенсивного культивування, системи годування, обладнання для збору'
            },
          ]
        },
        {
          id: 'algae',
          icon: Sprout,
          title: isEnglish ? 'Algae Cultivation Equipment' : 'Обладнання культивування водоростей',
          description: isEnglish ? 'Systems for microalgae production and live feed culture' : 'Системи виробництва мікроводоростей та культури живого корму',
          equipment: [
            {
              name: isEnglish ? 'Photobioreactors (PBR)' : 'Фотобіореактори (PBR)',
              specs: isEnglish ? 'Tubular/flat plate design, light optimization, CO2 supply' : 'Трубчастий/плоскопанельний дизайн, оптимізація світла, постачання CO2'
            },
            {
              name: isEnglish ? 'Raceway Ponds' : 'Канальні водойми',
              specs: isEnglish ? 'Open culture system, paddle wheel mixing, low cost' : 'Відкрита система культивування, змішування лопатевим колесом, низька вартість'
            },
            {
              name: isEnglish ? 'LED Lighting Systems' : 'LED системи освітлення',
              specs: isEnglish ? 'Optimized spectrum, energy efficient, programmable control' : 'Оптимізований спектр, енергоефективність, програмований контроль'
            },
            {
              name: isEnglish ? 'Algae Harvesting Equipment' : 'Обладнання збору водоростей',
              specs: isEnglish ? 'Centrifuges, flocculators, filters, concentration systems' : 'Центрифуги, флокулятори, фільтри, системи концентрації'
            },
          ]
        },
        {
          id: 'feeding',
          icon: Activity,
          title: isEnglish ? 'Feeding Systems' : 'Системи годування',
          description: isEnglish ? 'Automated and manual feeding equipment for all life stages' : 'Автоматизоване та ручне обладнання годування для всіх стадій життя',
          equipment: [
            {
              name: isEnglish ? 'Automatic Feeders' : 'Автоматичні годівниці',
              specs: isEnglish ? 'Programmable dosing, multiple feeds/day, portion control' : 'Програмоване дозування, кілька годувань/день, контроль порцій'
            },
            {
              name: isEnglish ? 'Demand Feeders' : 'Годівниці за вимогою',
              specs: isEnglish ? 'Fish-activated, reduced waste, natural feeding behavior' : 'Активація рибою, зменшення відходів, природна поведінка годування'
            },
            {
              name: isEnglish ? 'Blower Feed Systems' : 'Повітродувні системи годування',
              specs: isEnglish ? 'Pneumatic distribution, large-scale operations, even spreading' : 'Пневматичний розподіл, великомасштабні операції, рівномірне розподілення'
            },
            {
              name: isEnglish ? 'Larval Feed Dispersers' : 'Диспенсери корму для личинок',
              specs: isEnglish ? 'Fine particle distribution, gentle delivery, uniform coverage' : 'Розподіл дрібних частинок, м\'яка подача, рівномірне покриття'
            },
            {
              name: isEnglish ? 'Feed Storage Silos' : 'Силоси для зберігання корму',
              specs: isEnglish ? 'Moisture control, pest prevention, automated delivery' : 'Контроль вологості, запобігання шкідникам, автоматизована доставка'
            },
          ]
        },
        {
          id: 'grading',
          icon: Ruler,
          title: isEnglish ? 'Grading & Sorting Equipment' : 'Обладнання сортування',
          description: isEnglish ? 'Size grading, counting, and fish handling systems' : 'Сортування за розміром, підрахунок та системи обробки риби',
          equipment: [
            {
              name: isEnglish ? 'Bar Graders' : 'Стрічкові сортувальники',
              specs: isEnglish ? 'Adjustable bar spacing, multiple size fractions, gentle handling' : 'Регульована відстань між стрічками, кілька розмірних фракцій, м\'яка обробка'
            },
            {
              name: isEnglish ? 'Rotary Graders' : 'Ротаційні сортувальники',
              specs: isEnglish ? 'Drum design, continuous operation, low stress to fish' : 'Барабанний дизайн, безперервна робота, низький стрес для риби'
            },
            {
              name: isEnglish ? 'Fish Counters' : 'Лічильники риби',
              specs: isEnglish ? 'Optical/mechanical counting, high accuracy, data logging' : 'Оптичний/механічний підрахунок, висока точність, реєстрація даних'
            },
            {
              name: isEnglish ? 'Crowding Systems' : 'Системи скупчення',
              specs: isEnglish ? 'Movable panels/nets, gentle fish concentration, harvest prep' : 'Рухомі панелі/сітки, м\'яка концентрація риби, підготовка до збору'
            },
            {
              name: isEnglish ? 'Fish Pumps' : 'Рибні насоси',
              specs: isEnglish ? 'Low pressure, gentle transport, high volume capacity' : 'Низький тиск, м\'який транспорт, висока об\'ємна здатність'
            },
          ]
        },
        {
          id: 'pumping',
          icon: Waves,
          title: isEnglish ? 'Pumping Systems' : 'Насосні системи',
          description: isEnglish ? 'Water circulation, transport, and flow management' : 'Циркуляція води, транспортування та управління потоком',
          equipment: [
            {
              name: isEnglish ? 'Centrifugal Pumps' : 'Відцентрові насоси',
              specs: isEnglish ? 'High flow capacity, reliable operation, various head options' : 'Висока пропускна здатність, надійна робота, різні варіанти напору'
            },
            {
              name: isEnglish ? 'Airlift Pumps' : 'Повітряні насоси',
              specs: isEnglish ? 'No moving parts, fish-safe, energy efficient for low lift' : 'Без рухомих частин, безпечні для риби, енергоефективні для низького підйому'
            },
            {
              name: isEnglish ? 'Propeller Pumps (Axial Flow)' : 'Пропелерні насоси (осьовий потік)',
              specs: isEnglish ? 'High volume, low head, circulation systems, gentle flow' : 'Великий об\'єм, низький напір, системи циркуляції, м\'який потік'
            },
            {
              name: isEnglish ? 'Submersible Pumps' : 'Занурювальні насоси',
              specs: isEnglish ? 'In-tank installation, quiet operation, space saving' : 'Встановлення в резервуарі, тиха робота, економія простору'
            },
            {
              name: isEnglish ? 'Variable Frequency Drives (VFD)' : 'Частотні перетворювачі (VFD)',
              specs: isEnglish ? 'Flow control, energy savings, soft start/stop, automation' : 'Контроль потоку, економія енергії, м\'який старт/стоп, автоматизація'
            },
          ]
        },
        {
          id: 'monitoring',
          icon: Gauge,
          title: isEnglish ? 'Monitoring & Automation' : 'Моніторинг та автоматизація',
          description: isEnglish ? 'Water quality monitoring and system automation equipment' : 'Обладнання моніторингу якості води та автоматизації систем',
          equipment: [
            {
              name: isEnglish ? 'Multi-Parameter Probes' : 'Багатопараметричні зонди',
              specs: isEnglish ? 'DO, pH, temp, conductivity, turbidity, real-time data' : 'DO, pH, темп, провідність, каламутність, дані в реальному часі'
            },
            {
              name: isEnglish ? 'Dissolved Oxygen Sensors' : 'Датчики розчиненого кисню',
              specs: isEnglish ? 'Optical/polarographic, high accuracy, low maintenance' : 'Оптичні/полярографічні, висока точність, низьке обслуговування'
            },
            {
              name: isEnglish ? 'pH Controllers' : 'Контролери pH',
              specs: isEnglish ? 'Automatic adjustment, alarm systems, data logging' : 'Автоматичне регулювання, системи сигналізації, реєстрація даних'
            },
            {
              name: isEnglish ? 'Temperature Monitoring' : 'Моніторинг температури',
              specs: isEnglish ? 'Multiple sensor points, wireless transmission, alerts' : 'Кілька точок датчиків, бездротова передача, сповіщення'
            },
            {
              name: isEnglish ? 'Flow Meters' : 'Витратоміри',
              specs: isEnglish ? 'Magnetic/ultrasonic, accurate measurement, totalizing' : 'Магнітні/ультразвукові, точне вимірювання, підсумовування'
            },
            {
              name: isEnglish ? 'PLC Control Systems' : 'Системи керування PLC',
              specs: isEnglish ? 'Programmable logic, automation, remote monitoring, SCADA' : 'Програмована логіка, автоматизація, віддалений моніторинг, SCADA'
            },
            {
              name: isEnglish ? 'Alarm & Backup Systems' : 'Системи сигналізації та резервування',
              specs: isEnglish ? 'Power failure alerts, backup generators, safety protocols' : 'Сповіщення про збій живлення, резервні генератори, протоколи безпеки'
            },
          ]
        },
        {
          id: 'support',
          icon: Settings,
          title: isEnglish ? 'Support Equipment' : 'Допоміжне обладнання',
          description: isEnglish ? 'Infrastructure and supporting systems for aquaculture operations' : 'Інфраструктура та допоміжні системи для операцій аквакультури',
          equipment: [
            {
              name: isEnglish ? 'Air Blowers & Compressors' : 'Повітродувки та компресори',
              specs: isEnglish ? 'Aeration, oxygenation, biofilter supply, energy efficient' : 'Аерація, насичення киснем, постачання біофільтра, енергоефективність'
            },
            {
              name: isEnglish ? 'Heat Exchangers' : 'Теплообмінники',
              specs: isEnglish ? 'Heating/cooling, energy recovery, titanium/SS construction' : 'Нагрівання/охолодження, рекуперація енергії, титанова/нержавіюча конструкція'
            },
            {
              name: isEnglish ? 'Chiller Systems' : 'Системи охолодження',
              specs: isEnglish ? 'Water temperature control, precise regulation, efficient' : 'Контроль температури води, точне регулювання, ефективність'
            },
            {
              name: isEnglish ? 'Backup Power Systems' : 'Системи резервного живлення',
              specs: isEnglish ? 'Generators, UPS, automatic transfer switch, critical protection' : 'Генератори, ДБЖ, автоматичний перемикач, критичний захист'
            },
            {
              name: isEnglish ? 'Piping & Valves' : 'Трубопроводи та клапани',
              specs: isEnglish ? 'PVC, HDPE, SS piping, ball/butterfly valves, manifolds' : 'PVC, HDPE, нержавіючі трубопроводи, кульові/метелик клапани, колектори'
            },
            {
              name: isEnglish ? 'Water Testing Equipment' : 'Обладнання для тестування води',
              specs: isEnglish ? 'Lab equipment, test kits, NH3/NO2/NO3 analysis, quality control' : 'Лабораторне обладнання, набори для тестування, аналіз NH3/NO2/NO3, контроль якості'
            },
          ]
        },
      ]
    },
    // Design Process
    process: {
      title: isEnglish ? 'Equipment Design Process' : 'Процес проектування обладнання',
      steps: [
        {
          icon: FileText,
          number: '01',
          title: isEnglish ? 'Requirements Analysis' : 'Аналіз вимог',
          description: isEnglish
            ? 'Understand your operation needs, species requirements, capacity targets, space constraints, and budget to define optimal equipment specifications.'
            : 'Розуміння потреб вашої операції, вимог видів, цільових потужностей, обмежень простору та бюджету для визначення оптимальних специфікацій обладнання.',
        },
        {
          icon: PenTool,
          number: '02',
          title: isEnglish ? 'Equipment Selection & Sizing' : 'Вибір та розмір обладнання',
          description: isEnglish
            ? 'Select appropriate equipment types, calculate sizing based on hydraulic loads, perform technical calculations, and optimize for efficiency and cost.'
            : 'Вибір відповідних типів обладнання, розрахунок розмірів на основі гідравлічних навантажень, виконання технічних розрахунків та оптимізація для ефективності та вартості.',
        },
        {
          icon: Box,
          number: '03',
          title: isEnglish ? '3D CAD Engineering' : '3D CAD інжиніринг',
          description: isEnglish
            ? 'Create detailed 3D models using SolidWorks/AutoCAD, perform structural analysis (FEA), optimize design, and produce fabrication-ready drawings.'
            : 'Створення детальних 3D моделей за допомогою SolidWorks/AutoCAD, виконання структурного аналізу (FEA), оптимізація дизайну та створення готових креслень для виготовлення.',
        },
        {
          icon: Settings,
          number: '04',
          title: isEnglish ? 'Supplier Coordination & Delivery' : 'Координація постачальників та доставка',
          description: isEnglish
            ? 'Coordinate with manufacturers and suppliers, ensure quality control, manage delivery logistics, and provide installation support and documentation.'
            : 'Координація з виробниками та постачальниками, забезпечення контролю якості, управління логістикою доставки та надання підтримки встановлення та документації.',
        },
      ],
    },
    // Technical Capabilities
    capabilities: {
      title: isEnglish ? 'Technical Capabilities' : 'Технічні можливості',
      items: [
        {
          icon: Box,
          title: isEnglish ? 'Advanced 3D CAD' : 'Передові 3D CAD',
          description: isEnglish ? 'SolidWorks and AutoCAD for precise modeling, visualization, and fabrication drawings' : 'SolidWorks та AutoCAD для точного моделювання, візуалізації та креслень виготовлення',
        },
        {
          icon: Calculator,
          title: isEnglish ? 'Hydraulic Engineering' : 'Гідравлічний інжиніринг',
          description: isEnglish ? 'Flow calculations, pipe sizing, pump selection, head loss analysis' : 'Розрахунки потоку, вибір діаметра труб, вибір насосів, аналіз втрат напору',
        },
        {
          icon: Beaker,
          title: isEnglish ? 'Process Engineering' : 'Інжиніринг процесів',
          description: isEnglish ? 'Treatment process design, biological load calculations, system optimization' : 'Проектування процесів очищення, розрахунки біологічного навантаження, оптимізація систем',
        },
        {
          icon: CheckCircle,
          title: isEnglish ? 'FEA Structural Analysis' : 'FEA структурний аналіз',
          description: isEnglish ? 'Finite element analysis for structural integrity, safety factors, load testing' : 'Аналіз скінченних елементів для структурної цілісності, коефіцієнтів безпеки, тестування навантаження',
        },
        {
          icon: Cog,
          title: isEnglish ? 'Material Selection' : 'Вибір матеріалів',
          description: isEnglish ? 'Optimal materials for corrosion resistance, durability, cost, and performance' : 'Оптимальні матеріали для корозійної стійкості, довговічності, вартості та продуктивності',
        },
        {
          icon: Globe,
          title: isEnglish ? 'Global Sourcing' : 'Глобальні закупівлі',
          description: isEnglish ? 'Access to qualified manufacturers worldwide, competitive pricing, quality control' : 'Доступ до кваліфікованих виробників у всьому світі, конкурентні ціни, контроль якості',
        },
      ],
    },
    // Materials
    materials: {
      title: isEnglish ? 'Equipment Materials' : 'Матеріали обладнання',
      items: [
        {
          title: isEnglish ? 'Stainless Steel (304/316)' : 'Нержавіюча сталь (304/316)',
          description: isEnglish ? 'Corrosion-resistant, food-grade, ideal for saltwater/freshwater, long service life' : 'Корозійностійка, харчового класу, ідеальна для солоної/прісної води, тривалий термін служби',
        },
        {
          title: isEnglish ? 'HDPE & Plastics' : 'HDPE та пластики',
          description: isEnglish ? 'Lightweight, corrosion-proof, UV-resistant, cost-effective for tanks and piping' : 'Легкі, корозійностійкі, УФ-стійкі, економічно ефективні для резервуарів та трубопроводів',
        },
        {
          title: isEnglish ? 'Fiberglass (FRP)' : 'Склопластик (FRP)',
          description: isEnglish ? 'Durable, corrosion-resistant, moldable into complex shapes, lightweight' : 'Міцний, корозійностійкий, може бути відлитий у складні форми, легкий',
        },
        {
          title: isEnglish ? 'PVC & CPVC' : 'PVC та CPVC',
          description: isEnglish ? 'Economical piping, corrosion-resistant, easy installation, standard fittings' : 'Економічні трубопроводи, корозійностійкі, легке встановлення, стандартні фітинги',
        },
        {
          title: isEnglish ? 'Concrete & Shotcrete' : 'Бетон та набризкбетон',
          description: isEnglish ? 'Economical for large tanks, structural strength, custom shapes, durable' : 'Економічний для великих резервуарів, структурна міцність, спеціальні форми, довговічний',
        },
        {
          title: isEnglish ? 'Titanium' : 'Титан',
          description: isEnglish ? 'Exceptional corrosion resistance, heat exchangers, high-performance applications' : 'Виняткова корозійна стійкість, теплообмінники, високопродуктивні застосування',
        },
      ],
    },
    // Why Choose Us
    whyUs: {
      title: isEnglish ? 'Why Choose Vismar Aqua' : 'Чому обрати Vismar Aqua',
      items: [
        {
          title: isEnglish ? 'Comprehensive Equipment Expertise' : 'Комплексна експертиза обладнання',
          description: isEnglish
            ? '15+ years of aquaculture engineering experience across all equipment types and system scales. Deep understanding of equipment performance, reliability, and integration requirements.'
            : '15+ років досвіду інжинірингу аквакультури у всіх типах обладнання та масштабах систем. Глибоке розуміння продуктивності обладнання, надійності та вимог інтеграції.',
        },
        {
          title: isEnglish ? '50% Lower Engineering Costs' : 'На 50% нижчі витрати на інжиніринг',
          description: isEnglish
            ? 'AI-accelerated design process reduces engineering time and costs while delivering superior equipment specifications, technical drawings, and supplier coordination.'
            : 'AI-прискорений процес проектування знижує час та витрати на інжиніринг, забезпечуючи кращі специфікації обладнання, технічні креслення та координацію постачальників.',
        },
        {
          title: isEnglish ? 'Complete Technical Documentation' : 'Повна технічна документація',
          description: isEnglish
            ? 'Detailed 3D CAD models, fabrication drawings, bills of materials, installation instructions, operation manuals, and maintenance schedules for all equipment.'
            : 'Детальні 3D CAD моделі, креслення виготовлення, специфікації матеріалів, інструкції зі встановлення, посібники з експлуатації та графіки обслуговування для всього обладнання.',
        },
        {
          title: isEnglish ? 'Global Supplier Network' : 'Глобальна мережа постачальників',
          description: isEnglish
            ? 'Established relationships with qualified equipment manufacturers worldwide ensure competitive pricing, reliable quality, and timely delivery for your project.'
            : 'Встановлені відносини з кваліфікованими виробниками обладнання у всьому світі забезпечують конкурентні ціни, надійну якість та своєчасну доставку для вашого проекту.',
        },
      ],
    },
    // Applications
    applications: {
      title: isEnglish ? 'Equipment Applications' : 'Застосування обладнання',
      subtitle: isEnglish ? 'Equipment solutions for all aquaculture operation types' : 'Рішення обладнання для всіх типів операцій аквакультури',
      items: [
        {
          title: isEnglish ? 'RAS Facilities' : 'RAS об\'єкти',
          description: isEnglish ? 'Complete equipment packages for recirculating aquaculture systems' : 'Повні комплекти обладнання для рециркуляційних систем аквакультури',
        },
        {
          title: isEnglish ? 'Hatcheries' : 'Інкубаторії',
          description: isEnglish ? 'Specialized equipment for breeding, hatching, and larval rearing operations' : 'Спеціалізоване обладнання для розведення, виведення та вирощування личинок',
        },
        {
          title: isEnglish ? 'Flow-Through Systems' : 'Проточні системи',
          description: isEnglish ? 'Water treatment and fish handling equipment for flow-through operations' : 'Обладнання очищення води та обробки риби для проточних операцій',
        },
        {
          title: isEnglish ? 'Pond Aquaculture' : 'Ставкова аквакультура',
          description: isEnglish ? 'Aeration, feeding, and harvest equipment for intensive pond systems' : 'Аерація, годування та обладнання збору для інтенсивних ставкових систем',
        },
      ],
    },
    // Final CTA
    finalCta: {
      title: isEnglish ? 'Ready to Design Your Equipment?' : 'Готові спроектувати ваше обладнання?',
      description: isEnglish
        ? 'Contact us today for a consultation. Let\'s discuss your equipment needs and design the optimal solution for your aquaculture operation.'
        : 'Зв\'яжіться з нами сьогодні для консультації. Давайте обговоримо ваші потреби в обладнанні та спроектуємо оптимальне рішення для вашої операції аквакультури.',
      ctaButton: isEnglish ? 'Schedule Equipment Consultation' : 'Запланувати консультацію з обладнання',
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
            <span className="text-neutral-900 font-medium">{isEnglish ? 'Custom Design Equipment' : 'Спеціальне обладнання'}</span>
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
              <Cog className="w-10 h-10" />
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
          </div>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{content.categories.title}</h2>
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">{content.categories.subtitle}</p>

          <div className="space-y-12">
            {content.categories.items.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="card p-8 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                      <p className="text-neutral-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.equipment.map((item, idx) => (
                      <div key={idx} className="border border-neutral-200 rounded-lg p-4 hover:border-brand-secondary/50 hover:shadow-md transition-all">
                        <h4 className="font-semibold text-sm mb-2 text-brand-primary">{item.name}</h4>
                        <p className="text-xs text-neutral-600">{item.specs}</p>
                      </div>
                    ))}
                  </div>
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

      {/* Technical Capabilities */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-secondary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.capabilities.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.capabilities.items.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="card p-6 bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{capability.title}</h4>
                  <p className="text-sm text-neutral-600">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{content.materials.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.materials.items.map((material, index) => (
              <div key={index} className="card p-6 bg-gradient-to-br from-white to-neutral-50 hover:shadow-lg transition-all">
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

      {/* Applications Section */}
      <section className="section bg-gradient-to-br from-neutral-50 to-brand-primary/5">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{content.applications.title}</h2>
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">{content.applications.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.applications.items.map((app, index) => (
              <div key={index} className="card p-6 bg-white hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-brand-primary">{app.title}</h3>
                <p className="text-neutral-600">{app.description}</p>
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

      {/* Final CTA Section */}
      <section className="section bg-gradient-accent text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.finalCta.title}</h2>
            <p className="text-xl text-white/90 mb-8">
              {content.finalCta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-brand-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
            >
              {content.finalCta.ctaButton}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
