import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Fish,
  Container,
  Droplets,
  TrendingUp,
  CheckCircle,
  Boxes,
  Waves,
  Lightbulb,
  ArrowRight,
  BarChart3,
  Layers,
  Zap,
  Home,
  Recycle,
  Settings,
  Target
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Modular Catfish Farm in Kyiv Region | Vismar Aqua'
      : 'Модульна ферма кларієвого сома на Київщіні | Vismar Aqua',
    description: locale === 'en'
      ? 'Container-based modular RAS system combining recirculation technology for fingerling production with pond culture. Increased yield from 30 kg/ha to 3,000 kg/ha in Kyiv Oblast.'
      : 'Модульна система RAS на базі контейнерів, що поєднує технологію рециркуляції для виробництва мальків з ставковим вирощуванням. Збільшення врожайності з 30 кг/га до 3,000 кг/га на Київщині.',
  };
}

export default async function ModularCatfishKyivPage({ params }: Props) {
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
            <span className="text-neutral-900 font-medium">
              {isEnglish ? 'Modular Catfish Farm in Kyiv Region' : 'Модульна ферма кларієвого сома на Київщіні'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Container className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Boxes className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Fish className="w-48 h-48" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Container className="w-12 h-12" />
            </div>
          </div>
          <h1 className="mb-6 font-bold text-white">
            {isEnglish ? 'Modular Catfish Farm in Kyiv Region' : 'Модульна ферма кларієвого сома на Київщіні'}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
            {isEnglish
              ? 'Innovative Hybrid RAS and Pond System'
              : 'Інноваційна гібридна система RAS та ставків'}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {isEnglish
              ? 'Container-based modular technology increasing yields from 30 kg/ha to 3,000 kg/ha'
              : 'Модульна технологія на базі контейнерів, що збільшує врожайність з 30 кг/га до 3,000 кг/га'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
          >
            {isEnglish ? 'Contact Us' : 'Зв\'яжіться з нами'}
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
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Agricultural Enterprise' : 'Агропідприємство'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Location' : 'Місцезнаходження'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Kyiv Oblast, Ukraine' : 'Київська обл., Україна'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700">2021</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Yield Increase' : 'Збільшення врожайності'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? '100x improvement' : 'Покращення в 100 разів'}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'This innovative project demonstrates the power of modular aquaculture technology by combining container-based RAS systems with traditional pond culture. Located in Kyiv Oblast, the facility uses modular container units for intensive fingerling production, then transfers juveniles to ponds for grow-out, creating a hybrid system that dramatically increases productivity while maintaining cost efficiency.'
                  : 'Цей інноваційний проект демонструє силу модульної технології аквакультури, поєднуючи системи RAS на базі контейнерів з традиційним ставковим вирощуванням. Розташований на Київщині, об\'єкт використовує модульні контейнерні блоки для інтенсивного виробництва мальків, потім переводить молодь у ставки для вирощування, створюючи гібридну систему, що різко збільшує продуктивність при збереженні економічної ефективності.'}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {isEnglish
                  ? 'The revolutionary approach increased yields from traditional pond aquaculture levels of 30 kg/ha to an impressive 3,000 kg/ha - a 100-fold improvement. This modular system demonstrates how advanced technology can be scaled and adapted to existing pond infrastructure, making intensive aquaculture accessible to traditional fish farmers while dramatically reducing water consumption.'
                  : 'Революційний підхід збільшив врожайність з традиційних рівнів ставкової аквакультури 30 кг/га до вражаючих 3,000 кг/га - покращення в 100 разів. Ця модульна система демонструє, як передові технології можна масштабувати та адаптувати до існуючої ставкової інфраструктури, роблячи інтенсивну аквакультуру доступною для традиційних рибних фермерів при різкому зниженні споживання води.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 to-blue-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Key Features' : 'Ключові особливості'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1: Modular Containers */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Container className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Modular Container Systems' : 'Модульні контейнерні системи'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Containerized RAS units provide intensive fingerling production with complete environmental control, scalability, and easy deployment without major construction.'
                  : 'Контейнерні блоки RAS забезпечують інтенсивне виробництво мальків з повним контролем навколишнього середовища, масштабованістю та легким розгортанням без великих будівельних робіт.'}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Plug-and-Play' : 'Швидке розгортання'}</span>
              </div>
            </div>

            {/* Feature 2: Hybrid System */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Hybrid RAS/Pond System' : 'Гібридна система RAS/ставків'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Combines intensive RAS technology for early-life stages with cost-effective pond grow-out, optimizing both production efficiency and economics.'
                  : 'Поєднує інтенсивну технологію RAS для ранніх стадій життя з економічно ефективним вирощуванням у ставках, оптимізуючи як виробничу ефективність, так і економіку.'}
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Best of Both Worlds' : 'Краще з обох світів'}</span>
              </div>
            </div>

            {/* Feature 3: Water Efficiency */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Water-Saving Technology' : 'Водозберігаюча технологія'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Recirculation technology dramatically reduces water consumption compared to traditional pond aquaculture while maintaining higher stocking densities.'
                  : 'Технологія рециркуляції різко знижує споживання води порівняно з традиційною ставковою аквакультурою, зберігаючи вищу щільність посадки.'}
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '90% Water Savings' : '90% економії води'}</span>
              </div>
            </div>

            {/* Feature 4: Yield Increase */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Dramatic Yield Improvement' : 'Різке покращення врожайності'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Increased productivity from 30 kg/ha in traditional ponds to 3,000 kg/ha through intensive fingerling production and optimized stocking strategies.'
                  : 'Збільшено продуктивність з 30 кг/га у традиційних ставках до 3,000 кг/га через інтенсивне виробництво мальків та оптимізовані стратегії посадки.'}
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '100x Increase' : 'Збільшення в 100 разів'}</span>
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
            {/* System Design */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="w-14 h-14 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'System Design' : 'Дизайн системи'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Modular container-based RAS'
                      : 'Модульна RAS на базі контейнерів'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Integrated pond grow-out system'
                      : 'Інтегрована система вирощування в ставках'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Recirculation technology'
                      : 'Технологія рециркуляції'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Scalable architecture'
                      : 'Масштабована архітектура'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Minimal construction required'
                      : 'Мінімальне будівництво'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="w-14 h-14 bg-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Technology' : 'Технології'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Container RAS for fingerlings'
                      : 'Контейнерна RAS для мальків'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Hybrid RAS/pond culture'
                      : 'Гібридна культура RAS/ставків'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Water-saving systems'
                      : 'Водозберігаючі системи'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Biofilter technology'
                      : 'Технологія біофільтрації'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Automated monitoring'
                      : 'Автоматизований моніторинг'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
              <div className="w-14 h-14 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Performance' : 'Продуктивність'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Yield: 3,000 kg/ha'
                      : 'Врожайність: 3,000 кг/га'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Species: Clarias catfish'
                      : 'Види: кларієвий сом'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? '100x traditional yield'
                      : 'В 100 разів більше традиційної врожайності'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? '90% water savings'
                      : '90% економії води'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Year-round production'
                      : 'Цілорічне виробництво'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="section bg-gradient-to-br from-neutral-50 to-indigo-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Benefits & Results' : 'Переваги та результати'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100x</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Yield Increase' : 'Збільшення врожайності'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'From 30 kg/ha to 3,000 kg/ha through modular technology'
                  : 'З 30 кг/га до 3,000 кг/га за допомогою модульної технології'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">90%</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Water Savings' : 'Економія води'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Recirculation technology dramatically reduces water consumption'
                  : 'Технологія рециркуляції різко знижує споживання води'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Boxes className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-purple-600 mb-2">
                {isEnglish ? 'Modular' : 'Модульна'}
              </h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Scalable Design' : 'Масштабований дизайн'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Easy deployment and expansion with container-based units'
                  : 'Легке розгортання та розширення з блоками на базі контейнерів'}
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-neutral-900">
              {isEnglish ? 'Project Impact' : 'Вплив проекту'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Demonstrated viability of hybrid RAS/pond systems'
                    : 'Продемонстровано життєздатність гібридних систем RAS/ставків'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Made intensive aquaculture accessible to traditional farmers'
                    : 'Зробила інтенсивну аквакультуру доступною для традиційних фермерів'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Achieved 100-fold yield improvement over traditional methods'
                    : 'Досягнуто 100-кратне покращення врожайності порівняно з традиційними методами'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Reduced water consumption by 90%'
                    : 'Знижено споживання води на 90%'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Created scalable model for pond infrastructure upgrades'
                    : 'Створено масштабовану модель для модернізації ставкової інфраструктури'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Proved modular container systems can transform existing operations'
                    : 'Доведено, що модульні контейнерні системи можуть трансформувати існуючі операції'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {isEnglish
                ? 'Interested in Modular Aquaculture?'
                : 'Цікавить модульна аквакультура?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {isEnglish
                ? 'Contact us to learn how modular container-based systems can transform your existing pond operation and dramatically increase yields.'
                : 'Зв\'яжіться з нами, щоб дізнатися, як модульні системи на базі контейнерів можуть трансформувати вашу існуючу ставкову операцію та різко збільшити врожайність.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
              >
                {isEnglish ? 'Contact Us' : 'Зв\'яжіться з нами'}
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
