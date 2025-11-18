import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Fish,
  Factory,
  Droplets,
  TrendingUp,
  CheckCircle,
  Server,
  Microscope,
  Sprout,
  ArrowRight,
  BarChart3,
  Users,
  MapPin,
  Calendar,
  Gauge,
  Home,
  Boxes,
  Thermometer,
  FlaskConical
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? "Europe's Largest Shrimp Farm - Neusatz Aqua | Vismar Aqua"
      : 'Найбільша креветкова ферма Європи - Neusatz Aqua | Vismar Aqua',
    description: locale === 'en'
      ? 'First commercial Vannamei shrimp production facility in Europe with 500 tons/year capacity. 6 million larvae/month hatchery, integrated feed mill, and modern RAS technology.'
      : 'Перша комерційна установка виробництва креветок Ванамей в Європі потужністю 500 тонн/рік. Інкубатор на 6 мільйонів личинок/місяць, інтегрований завод кормів та сучасні RAS технології.',
  };
}

export default async function ShrimpFarmEuropePage({ params }: Props) {
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
              {isEnglish ? "Europe's Largest Shrimp Farm" : 'Найбільша креветкова ферма Європи'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-orange-600 via-pink-700 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Fish className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Factory className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Droplets className="w-48 h-48" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Fish className="w-12 h-12" />
            </div>
          </div>
          <h1 className="mb-6 font-bold text-white">
            {isEnglish ? "Europe's Largest Shrimp Farm" : 'Найбільша креветкова ферма Європи'}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
            {isEnglish
              ? 'First Commercial Vannamei Shrimp Production in Europe'
              : 'Перше комерційне виробництво креветок Ванамей в Європі'}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {isEnglish
              ? 'Integrated hatchery, grow-out facility, and feed mill producing 500 tons annually'
              : 'Інтегрований інкубатор, об\'єкт вирощування та завод кормів з виробництвом 500 тонн на рік'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700">Neusatz Aqua</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Location' : 'Місцезнаходження'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Prohresivka, Mykolaiv Oblast, Ukraine' : 'с. Прогресівка, Миколаївська обл., Україна'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700">2022</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg border border-orange-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Capacity' : 'Потужність'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? '500 tons/year' : '500 тонн/рік'}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'This groundbreaking facility represents the first commercial-scale Vannamei shrimp (Litopenaeus vannamei) production operation in Europe. Located in Prohresivka village in southern Ukraine, the project combines state-of-the-art hatchery technology, intensive grow-out systems, and an integrated feed mill to create a fully vertically integrated shrimp production complex.'
                  : 'Ця проривна установка представляє першу комерційну операцію з виробництва креветок Ванамей (Litopenaeus vannamei) в Європі. Розташований у селі Прогресівка на півдні України, проект поєднує найсучасніші технології інкубації, інтенсивні системи вирощування та інтегрований завод кормів для створення повністю вертикально інтегрованого комплексу з виробництва креветок.'}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {isEnglish
                  ? 'The facility spans 6,000 square meters of production space on 10 hectares of land, incorporating cutting-edge RAS technology, biofloc systems, and automated monitoring to achieve European food safety standards while producing premium-quality Vannamei shrimp for the European market.'
                  : 'Об\'єкт охоплює 6,000 квадратних метрів виробничих площ на 10 гектарах землі, включаючи передові технології RAS, системи біофлоку та автоматизований моніторинг для досягнення європейських стандартів безпеки харчових продуктів, виробляючи креветки Ванамей преміум-якості для європейського ринку.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 to-orange-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Key Features' : 'Ключові особливості'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1: Hatchery */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Advanced Hatchery Complex' : 'Сучасний інкубаторний комплекс'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'State-of-the-art hatchery producing 6 million post-larvae per month using specialized broodstock management and larval rearing systems.'
                  : 'Найсучасніший інкубатор, що виробляє 6 мільйонів постличинок на місяць, використовуючи спеціалізовані системи управління племінним поголів\'ям та вирощування личинок.'}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '6M Larvae/Month' : '6М личинок/місяць'}</span>
              </div>
            </div>

            {/* Feature 2: RAS Systems */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Intensive RAS Technology' : 'Інтенсивні технології RAS'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Modern recirculating aquaculture systems with biofloc technology maintaining optimal water quality for maximum shrimp growth and health.'
                  : 'Сучасні рециркуляційні системи аквакультури з технологією біофлоку, що підтримують оптимальну якість води для максимального росту та здоров\'я креветок.'}
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Biofloc Technology' : 'Технологія біофлоку'}</span>
              </div>
            </div>

            {/* Feature 3: Feed Mill */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Integrated Feed Mill' : 'Інтегрований завод кормів'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'On-site feed production facility with 6,000 tons annual capacity producing specialized shrimp feed formulations for optimal growth.'
                  : 'Власний завод кормів потужністю 6,000 тонн на рік, що виробляє спеціалізовані кормові формули для креветок для оптимального росту.'}
              </p>
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '6,000 Tons/Year' : '6,000 тонн/рік'}</span>
              </div>
            </div>

            {/* Feature 4: Automation */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Gauge className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Automated Monitoring' : 'Автоматизований моніторинг'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Advanced sensors and control systems monitor water quality, feeding, and environmental parameters 24/7 to ensure optimal production conditions.'
                  : 'Передові датчики та системи управління відстежують якість води, годування та екологічні параметри 24/7 для забезпечення оптимальних умов виробництва.'}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '24/7 Monitoring' : 'Цілодобовий моніторинг'}</span>
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
            {/* Facility */}
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-8 border border-orange-200">
              <div className="w-14 h-14 bg-orange-600 rounded-lg mb-6 flex items-center justify-center">
                <Boxes className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Facility' : 'Об\'єкт'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? '6,000 m² production space'
                      : '6,000 м² виробничих площ'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? '10 hectares total land area'
                      : '10 гектарів загальної площі'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Hatchery: 6M larvae/month'
                      : 'Інкубатор: 6М личинок/місяць'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Feed mill: 6,000 tons/year'
                      : 'Завод кормів: 6,000 тонн/рік'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Annual capacity: 500 tons'
                      : 'Річна потужність: 500 тонн'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 border border-pink-200">
              <div className="w-14 h-14 bg-pink-600 rounded-lg mb-6 flex items-center justify-center">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Technology' : 'Технології'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Recirculating Aquaculture Systems'
                      : 'Рециркуляційні системи аквакультури'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Biofloc technology'
                      : 'Технологія біофлоку'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Automated monitoring systems'
                      : 'Автоматизовані системи моніторингу'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Integrated feed production'
                      : 'Інтегроване виробництво кормів'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Biosecurity protocols'
                      : 'Протоколи біобезпеки'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Production */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
              <div className="w-14 h-14 bg-red-600 rounded-lg mb-6 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Production' : 'Виробництво'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Species: Vannamei shrimp'
                      : 'Види: креветка Ванамей'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'European food safety standards'
                      : 'Європейські стандарти безпеки'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Premium quality product'
                      : 'Продукція преміум-якості'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Year-round production'
                      : 'Цілорічне виробництво'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Vertically integrated'
                      : 'Вертикально інтегроване'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="section bg-gradient-to-br from-neutral-50 to-pink-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Benefits & Results' : 'Переваги та результати'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">
                {isEnglish ? 'First' : 'Перша'}
              </h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'In Europe' : 'В Європі'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'First commercial Vannamei shrimp production facility in Europe'
                  : 'Перша комерційна установка виробництва креветок Ванамей в Європі'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Boxes className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-pink-600 mb-2">500</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Tons/Year' : 'Тонн/Рік'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Annual production capacity of premium Vannamei shrimp'
                  : 'Річна виробнича потужність креветок Ванамей преміум-класу'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-red-600 mb-2">100%</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Integrated' : 'Інтегрований'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Fully vertically integrated from hatchery to feed production'
                  : 'Повністю вертикально інтегрований від інкубатора до виробництва кормів'}
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
                    ? 'Established Europe\'s first commercial Vannamei production'
                    : 'Встановлено перше комерційне виробництво Ванамей в Європі'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Created sustainable local shrimp production'
                    : 'Створено стале місцеве виробництво креветок'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Reduced dependence on imported shrimp'
                    : 'Знижена залежність від імпортних креветок'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Demonstrated viability of shrimp farming in Ukraine'
                    : 'Продемонстровано життєздатність креветкового фермерства в Україні'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Pioneered biofloc technology for shrimp in Europe'
                    : 'Запроваджено технологію біофлоку для креветок в Європі'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Created template for future European shrimp farms'
                    : 'Створено шаблон для майбутніх європейських креветкових ферм'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gradient-to-br from-orange-600 via-pink-700 to-red-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {isEnglish
                ? 'Interested in Shrimp Farming?'
                : 'Цікавить креветкове фермерство?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {isEnglish
                ? 'Contact us to learn how we can help you establish a successful shrimp farming operation with proven technology and expertise.'
                : 'Зв\'яжіться з нами, щоб дізнатися, як ми можемо допомогти вам створити успішне креветкове господарство з перевіреною технологією та експертизою.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
