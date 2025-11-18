import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Eye,
  Fish,
  Activity,
  Droplets,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Server,
  Cloud,
  Smartphone,
  Camera,
  Cpu,
  Database,
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
  AlertTriangle,
  Home
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'AQUAVISION - AI Fish Monitoring System | Vismar Aqua'
      : 'AQUAVISION - AI система моніторингу риби | Vismar Aqua',
    description: locale === 'en'
      ? 'Advanced AI-powered fish monitoring system with 99.2% counting accuracy, real-time biomass estimation, and behavior analysis. Reduce costs by 40% with 24/7 automated monitoring.'
      : 'Передова AI система моніторингу риби з точністю підрахунку 99.2%, оцінкою біомаси в реальному часі та аналізом поведінки. Зменшіть витрати на 40% з цілодобовим автоматизованим моніторингом.',
  };
}

export default async function AquavisionProjectPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-primary-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/projects`} className="hover:text-primary-600 transition-colors">
              {isEnglish ? 'Projects' : 'Проекти'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-900 font-medium">AQUAVISION</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Eye className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Brain className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Fish className="w-48 h-48" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Eye className="w-12 h-12" />
            </div>
          </div>
          <h1 className="mb-6 font-bold text-white">AQUAVISION</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
            {isEnglish
              ? 'AI-Powered Fish Monitoring & Management System'
              : 'AI система моніторингу та управління рибою'}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {isEnglish
              ? 'Transforming aquaculture with computer vision, real-time analytics, and IoT integration'
              : 'Трансформація аквакультури за допомогою комп\'ютерного зору, аналітики в реальному часі та IoT інтеграції'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
          >
            {isEnglish ? 'Request Demo' : 'Запит демо'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {isEnglish ? 'Project Overview' : 'Огляд проекту'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Multiple Commercial Installations' : 'Множинні комерційні установки'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Location' : 'Місцезнаходження'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Global Deployment' : 'Глобальне розгортання'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700">2024</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Status' : 'Статус'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Production & Continuous Development' : 'Виробництво та безперервна розробка'}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'AQUAVISION represents the cutting edge of aquaculture technology, combining artificial intelligence, computer vision, and IoT sensors to provide unprecedented insight into fish health, behavior, and growth. Our system automates critical monitoring tasks, reducing labor costs while improving accuracy and enabling proactive farm management.'
                  : 'AQUAVISION представляє передовий край технологій аквакультури, поєднуючи штучний інтелект, комп\'ютерний зір та IoT датчики для надання безпрецедентного розуміння здоров\'я, поведінки та росту риби. Наша система автоматизує критичні завдання моніторингу, знижуючи витрати на робочу силу, підвищуючи точність та забезпечуючи проактивне управління фермою.'}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {isEnglish
                  ? 'Developed specifically for the challenges of modern aquaculture, AQUAVISION integrates seamlessly with existing RAS systems and can be deployed in hatcheries, grow-out facilities, and research institutions worldwide.'
                  : 'Розроблена спеціально для викликів сучасної аквакультури, AQUAVISION безперешкодно інтегрується з існуючими системами RAS і може бути розгорнута в інкубаторіях, об\'єктах вирощування та дослідницьких установах по всьому світу.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 to-cyan-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Key Features' : 'Ключові особливості'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1: AI Fish Counting */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'AI Fish Counting' : 'AI підрахунок риби'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Deep learning algorithms count individual fish with 99.2% accuracy, even in high-density environments with overlapping fish.'
                  : 'Алгоритми глибокого навчання підраховують окрему рибу з точністю 99.2%, навіть у середовищах високої щільності з перекриттям риби.'}
              </p>
              <div className="flex items-center gap-2 text-cyan-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '99.2% Accuracy' : '99.2% точність'}</span>
              </div>
            </div>

            {/* Feature 2: Real-Time Biomass */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Real-Time Biomass Estimation' : 'Оцінка біомаси в реальному часі'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Computer vision estimates total biomass and individual fish weights without handling stress, enabling precise feed optimization.'
                  : 'Комп\'ютерний зір оцінює загальну біомасу та вагу окремої риби без стресу від обробки, забезпечуючи точну оптимізацію корму.'}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Non-invasive' : 'Неінвазивний'}</span>
              </div>
            </div>

            {/* Feature 3: Behavior Analysis */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Behavior Analysis & Health Monitoring' : 'Аналіз поведінки та моніторинг здоров\'я'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Track swimming patterns, feeding behavior, and activity levels to detect stress, disease, or water quality issues before they become critical.'
                  : 'Відстежуйте схеми плавання, поведінку годування та рівні активності для виявлення стресу, хвороб або проблем якості води до того, як вони стануть критичними.'}
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Early Detection' : 'Раннє виявлення'}</span>
              </div>
            </div>

            {/* Feature 4: IoT Water Quality */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'IoT Water Quality Sensors' : 'IoT датчики якості води'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Integrated sensors monitor 8 critical water parameters: temperature, DO, pH, ammonia, nitrite, nitrate, salinity, and turbidity.'
                  : 'Інтегровані датчики відстежують 8 критичних параметрів води: температуру, DO, pH, аміак, нітрит, нітрат, солоність та каламутність.'}
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '8 Parameters' : '8 параметрів'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Technical Specifications' : 'Технічні характеристики'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Hardware */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <div className="w-14 h-14 bg-cyan-600 rounded-lg mb-6 flex items-center justify-center">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Hardware' : 'Апаратне забезпечення'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Underwater 4K cameras with specialized optics'
                      : 'Підводні 4K камери зі спеціалізованою оптикою'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Edge computing units for real-time processing'
                      : 'Периферійні обчислювальні блоки для обробки в реальному часі'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Multi-parameter IoT water quality sensors'
                      : 'Багатопараметричні IoT датчики якості води'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Industrial-grade networking equipment'
                      : 'Промислове мережеве обладнання'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Backup power systems for reliability'
                      : 'Резервні системи живлення для надійності'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Software */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Software' : 'Програмне забезпечення'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'TensorFlow/PyTorch ML models'
                      : 'Моделі машинного навчання TensorFlow/PyTorch'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Real-time video processing pipeline'
                      : 'Конвеєр обробки відео в реальному часі'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Cloud-based analytics dashboard'
                      : 'Хмарна аналітична панель'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Automated alert system'
                      : 'Автоматизована система сповіщень'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Historical data analytics & reporting'
                      : 'Аналітика історичних даних та звітність'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Integration */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="w-14 h-14 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Integration' : 'Інтеграція'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'RESTful API for third-party integration'
                      : 'RESTful API для інтеграції з третіми сторонами'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'MQTT protocol for IoT devices'
                      : 'Протокол MQTT для IoT пристроїв'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Mobile apps (iOS & Android)'
                      : 'Мобільні додатки (iOS та Android)'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Export to standard aquaculture software'
                      : 'Експорт до стандартного ПЗ аквакультури'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Integration with existing RAS control systems'
                      : 'Інтеграція з існуючими системами управління RAS'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="section bg-gradient-to-br from-neutral-50 to-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Benefits & Results' : 'Переваги та результати'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">40%</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Cost Reduction' : 'Зниження витрат'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Lower labor costs through automation and reduced feed waste'
                  : 'Нижчі витрати на робочу силу завдяки автоматизації та зменшенню відходів корму'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Continuous Monitoring' : 'Безперервний моніторинг'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Round-the-clock automated surveillance without human fatigue'
                  : 'Цілодобове автоматизоване спостереження без втоми людини'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">
                {isEnglish ? 'Early' : 'Раннє'}
              </h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Disease Detection' : 'Виявлення хвороб'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Identify health issues days before visible symptoms appear'
                  : 'Виявлення проблем зі здоров\'ям за кілька днів до появи видимих симптомів'}
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-neutral-900">
              {isEnglish ? 'Additional Benefits' : 'Додаткові переваги'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Improved feed conversion ratio (FCR) through optimized feeding'
                    : 'Покращений коефіцієнт конверсії корму (FCR) через оптимізоване годування'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Reduced mortality through early intervention'
                    : 'Знижена смертність через ранню інтервенцію'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Better growth uniformity and harvest planning'
                    : 'Краща однорідність росту та планування збору врожаю'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Data-driven decision making with historical analytics'
                    : 'Прийняття рішень на основі даних з історичною аналітикою'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Compliance documentation and traceability'
                    : 'Документація для відповідності та простежуваності'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Scalable from small hatcheries to large commercial farms'
                    : 'Масштабується від малих інкубаторів до великих комерційних ферм'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Use Cases' : 'Випадки використання'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* RAS Facilities */}
            <div className="card p-8 bg-gradient-to-br from-white to-cyan-50 border border-cyan-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-600 rounded-lg mb-6 flex items-center justify-center">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-900">
                {isEnglish ? 'RAS Facilities' : 'Об\'єкти RAS'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Perfect for indoor recirculating aquaculture systems growing salmon, trout, tilapia, or other species in controlled environments.'
                  : 'Ідеально для внутрішніх рециркуляційних систем аквакультури, що вирощують лосося, форель, тіляпію чи інші види у контрольованих умовах.'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                  {isEnglish ? 'High-density monitoring' : 'Моніторинг високої щільності'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                  {isEnglish ? 'Automated biomass tracking' : 'Автоматизоване відстеження біомаси'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                  {isEnglish ? 'Feed optimization' : 'Оптимізація корму'}
                </li>
              </ul>
            </div>

            {/* Shrimp Hatcheries */}
            <div className="card p-8 bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <Fish className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-900">
                {isEnglish ? 'Shrimp Hatcheries' : 'Креветкові інкубатори'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Monitor larval development, count post-larvae, and optimize feeding schedules in shrimp hatchery operations.'
                  : 'Моніторинг розвитку личинок, підрахунок постличинок та оптимізація графіків годування в креветкових інкубаторах.'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  {isEnglish ? 'Larval stage detection' : 'Виявлення стадії личинок'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  {isEnglish ? 'Population estimation' : 'Оцінка популяції'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  {isEnglish ? 'Quality control' : 'Контроль якості'}
                </li>
              </ul>
            </div>

            {/* Cage Farming */}
            <div className="card p-8 bg-gradient-to-br from-white to-indigo-50 border border-indigo-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-neutral-900">
                {isEnglish ? 'Cage Farming' : 'Садкове фермерство'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Deployable in sea cages and net pens for real-time monitoring of fish in open-water environments.'
                  : 'Розгортається в морських садках та сітчастих загонах для моніторингу риби в середовищах відкритої води в реальному часі.'}
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  {isEnglish ? 'Remote monitoring' : 'Віддалений моніторинг'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  {isEnglish ? 'Escape detection' : 'Виявлення втечі'}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  {isEnglish ? 'Environmental correlation' : 'Кореляція з навколишнім середовищем'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-gradient-to-br from-neutral-50 to-indigo-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Technology Stack' : 'Технологічний стек'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                TensorFlow
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                PyTorch
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                OpenCV
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                Python
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                Node.js
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                React
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                PostgreSQL
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                InfluxDB
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                Docker
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                Kubernetes
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                AWS / Azure
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                MQTT
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                REST API
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                GraphQL
              </span>
              <span className="px-6 py-3 bg-white rounded-full border border-neutral-200 font-medium text-neutral-700 hover:border-cyan-500 hover:shadow-md transition-all">
                React Native
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {isEnglish
                ? 'Ready to Transform Your Aquaculture Operation?'
                : 'Готові трансформувати вашу аквакультурну операцію?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {isEnglish
                ? 'Contact us today to schedule a demonstration of AQUAVISION and discover how AI-powered monitoring can revolutionize your fish farm.'
                : 'Зв\'яжіться з нами сьогодні, щоб запланувати демонстрацію AQUAVISION та дізнатися, як моніторинг на основі AI може революціонізувати вашу рибну ферму.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
              >
                {isEnglish ? 'Request Demo' : 'Запит демо'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all"
              >
                {isEnglish ? 'View All Projects' : 'Переглянути всі проекти'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
