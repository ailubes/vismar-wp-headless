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
  Package,
  Recycle,
  ArrowRight,
  BarChart3,
  Users,
  DollarSign,
  Home,
  Gauge,
  Shield,
  CircuitBoard
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Clarias Catfish Farm in Cherkasy | Vismar Aqua'
      : 'Ферма кларієвого сома на Черкащині | Vismar Aqua',
    description: locale === 'en'
      ? 'Commercial clarias catfish production facility in Cherkasy Oblast with 450-500 tons/year capacity. Integrated processing for canned products, smoked products, and fish sausage.'
      : 'Комерційний об\'єкт виробництва кларієвого сома на Черкащині потужністю 450-500 тонн/рік. Інтегрована переробка для виробництва консервів, копченостей та рибної ковбаси.',
  };
}

export default async function CatfishFarmCherkasyPage({ params }: Props) {
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
              {isEnglish ? 'Clarias Catfish Farm in Cherkasy' : 'Ферма кларієвого сома на Черкащині'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-teal-600 via-emerald-700 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Fish className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Factory className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Package className="w-48 h-48" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Fish className="w-12 h-12" />
            </div>
          </div>
          <h1 className="mb-6 font-bold text-white">
            {isEnglish ? 'Clarias Catfish Farm in Cherkasy' : 'Ферма кларієвого сома на Черкащині'}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
            {isEnglish
              ? 'Intensive Production with Integrated Processing'
              : 'Інтенсивне виробництво з інтегрованою переробкою'}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {isEnglish
              ? '450-500 tons annually with on-site processing for canned products, smoked fish, and sausage'
              : '450-500 тонн щорічно з власною переробкою для консервів, копченостей та ковбаси'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Private Investor' : 'Приватний інвестор'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Location' : 'Місцезнаходження'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Cherkasy Oblast, Ukraine' : 'Черкаська обл., Україна'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700">2022</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Capacity' : 'Потужність'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? '450-500 tons/year' : '450-500 тонн/рік'}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'This comprehensive catfish farming facility in Cherkasy Oblast represents a fully integrated approach to aquaculture, combining intensive fish production with on-site processing capabilities. With an investment of 20 million UAH, the project created 8 permanent jobs and established a vertically integrated operation from fingerling to finished consumer products.'
                  : 'Цей комплексний об\'єкт з вирощування сома на Черкащині представляє повністю інтегрований підхід до аквакультури, поєднуючи інтенсивне виробництво риби з власними можливостями переробки. З інвестицією в 20 мільйонів гривень проект створив 8 постійних робочих місць та встановив вертикально інтегровану операцію від мальків до готової споживчої продукції.'}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {isEnglish
                  ? 'The facility utilizes intensive RAS technology to produce 450-500 tons of clarias catfish (Clarias gariepinus) annually, with integrated processing lines producing canned products, smoked fish, and fish sausage. This value-added approach maximizes profitability while meeting diverse market demands for processed fish products.'
                  : 'Об\'єкт використовує інтенсивні технології RAS для виробництва 450-500 тонн кларієвого сома (Clarias gariepinus) щорічно, з інтегрованими лініями переробки, що виробляють консерви, копчену рибу та рибну ковбасу. Цей підхід з доданою вартістю максимізує прибутковість, задовольняючи різноманітні ринкові потреби в переробленій рибній продукції.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 to-teal-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Key Features' : 'Ключові особливості'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1: Intensive RAS */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Intensive RAS System' : 'Інтенсивна система RAS'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'State-of-the-art recirculating aquaculture system designed specifically for clarias catfish production with high stocking densities and optimal water quality control.'
                  : 'Найсучасніша рециркуляційна система аквакультури, розроблена спеціально для виробництва кларієвого сома з високою щільністю посадки та оптимальним контролем якості води.'}
              </p>
              <div className="flex items-center gap-2 text-teal-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '450-500 Tons/Year' : '450-500 тонн/рік'}</span>
              </div>
            </div>

            {/* Feature 2: Processing Facility */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Integrated Processing Facility' : 'Інтегрований переробний цех'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'On-site processing lines producing canned catfish products, smoked fish, and fish sausage, adding value and expanding market opportunities.'
                  : 'Власні лінії переробки, що виробляють консервовану продукцію з сома, копчену рибу та рибну ковбасу, додаючи вартість та розширюючи ринкові можливості.'}
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Value-Added Products' : 'Продукція з доданою вартістю'}</span>
              </div>
            </div>

            {/* Feature 3: Waste Management */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Waste Management System' : 'Система управління відходами'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Comprehensive waste management and water treatment systems ensuring environmental compliance and sustainability throughout production and processing operations.'
                  : 'Комплексна система управління відходами та очищення води, що забезпечує екологічну відповідність та стійкість протягом виробничих та переробних операцій.'}
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Eco-Friendly' : 'Екологічно чистий'}</span>
              </div>
            </div>

            {/* Feature 4: Economic Impact */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Economic Development' : 'Економічний розвиток'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? '20 million UAH investment creating 8 permanent jobs and supporting local economy through sustainable fish production and processing.'
                  : 'Інвестиція в 20 мільйонів гривень, що створила 8 постійних робочих місць та підтримує місцеву економіку через стале виробництво та переробку риби.'}
              </p>
              <div className="flex items-center gap-2 text-teal-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? '8 Jobs Created' : '8 створених робочих місць'}</span>
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
            {/* Production */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-8 border border-teal-200">
              <div className="w-14 h-14 bg-teal-600 rounded-lg mb-6 flex items-center justify-center">
                <Fish className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Production' : 'Виробництво'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Species: Clarias catfish'
                      : 'Види: кларієвий сом'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Capacity: 450-500 tons/year'
                      : 'Потужність: 450-500 тонн/рік'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Intensive RAS technology'
                      : 'Інтенсивна технологія RAS'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'High stocking densities'
                      : 'Висока щільність посадки'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Year-round production'
                      : 'Цілорічне виробництво'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Processing */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <div className="w-14 h-14 bg-emerald-600 rounded-lg mb-6 flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Processing' : 'Переробка'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Canned fish products'
                      : 'Рибні консерви'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Smoked catfish products'
                      : 'Копчена продукція з сома'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Fish sausage production'
                      : 'Виробництво рибної ковбаси'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'On-site processing lines'
                      : 'Власні лінії переробки'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Food safety certified'
                      : 'Сертифіковано з безпеки харчових продуктів'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Investment */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200">
              <div className="w-14 h-14 bg-green-600 rounded-lg mb-6 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Investment' : 'Інвестиції'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Total: 20 million UAH'
                      : 'Загалом: 20 мільйонів грн'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Jobs created: 8 positions'
                      : 'Створено робочих місць: 8'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Private investment'
                      : 'Приватні інвестиції'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Vertically integrated'
                      : 'Вертикально інтегрований'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Sustainable operation'
                      : 'Стала операція'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="section bg-gradient-to-br from-neutral-50 to-emerald-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Benefits & Results' : 'Переваги та результати'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-teal-600 mb-2">500</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Tons/Year' : 'Тонн/Рік'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Annual production capacity of premium clarias catfish'
                  : 'Річна виробнича потужність кларієвого сома преміум-класу'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">3</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Product Lines' : 'Лінії продукції'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Diversified processing: canned, smoked, and sausage products'
                  : 'Диверсифікована переробка: консерви, копченості та ковбаса'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-green-600 mb-2">8</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Jobs Created' : 'Створено робочих місць'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Permanent employment opportunities in rural community'
                  : 'Постійні можливості працевлаштування в сільській громаді'}
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
                    ? 'Established vertically integrated catfish operation'
                    : 'Створено вертикально інтегровану операцію з виробництва сома'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Created value-added processing capabilities'
                    : 'Створено можливості переробки з доданою вартістю'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Provided employment in rural area'
                    : 'Забезпечено працевлаштування в сільській місцевості'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Demonstrated sustainable aquaculture model'
                    : 'Продемонстровано модель сталої аквакультури'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Diversified product portfolio for market resilience'
                    : 'Диверсифіковано портфель продукції для ринкової стійкості'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Implemented environmentally responsible practices'
                    : 'Впроваджено екологічно відповідальні практики'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gradient-to-br from-teal-600 via-emerald-700 to-green-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {isEnglish
                ? 'Interested in Catfish Farming?'
                : 'Цікавить вирощування сома?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {isEnglish
                ? 'Contact us to learn how we can help you establish a profitable catfish farming operation with integrated processing capabilities.'
                : 'Зв\'яжіться з нами, щоб дізнатися, як ми можемо допомогти вам створити прибуткове господарство з вирощування сома з інтегрованими можливостями переробки.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
