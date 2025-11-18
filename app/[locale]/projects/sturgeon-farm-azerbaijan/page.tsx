import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Fish,
  Droplets,
  TrendingUp,
  CheckCircle,
  Server,
  Shield,
  Thermometer,
  Award,
  ArrowRight,
  BarChart3,
  Lock,
  Gauge,
  Home,
  Sparkles,
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
      ? 'Sturgeon Farm in Azerbaijan | Vismar Aqua'
      : 'Осетрова ферма в Азербайджані | Vismar Aqua',
    description: locale === 'en'
      ? 'Premium sturgeon production facility in Baku with 60 tons/year capacity. Advanced RAS technology for caviar and meat production using temperature-controlled systems.'
      : 'Преміум-об\'єкт виробництва осетра в Баку потужністю 60 тонн/рік. Передова технологія RAS для виробництва ікри та м\'яса з використанням систем контролю температури.',
  };
}

export default async function SturgeonFarmAzerbaijanPage({ params }: Props) {
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
              {isEnglish ? 'Sturgeon Farm in Azerbaijan' : 'Осетрова ферма в Азербайджані'}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">
            <Fish className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Award className="w-40 h-40" />
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <Sparkles className="w-48 h-48" />
          </div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Fish className="w-12 h-12" />
            </div>
          </div>
          <h1 className="mb-6 font-bold text-white">
            {isEnglish ? 'Sturgeon Farm in Azerbaijan' : 'Осетрова ферма в Азербайджані'}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
            {isEnglish
              ? 'Premium Caviar and Sturgeon Production'
              : 'Преміум-виробництво ікри та осетра'}
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {isEnglish
              ? 'Advanced RAS technology for 60 tons annually in Baku, Azerbaijan'
              : 'Передова технологія RAS для 60 тонн на рік у Баку, Азербайджан'}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700">Azerbaijan Aquaculture LLC</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Location' : 'Місцезнаходження'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? 'Baku, Azerbaijan' : 'Баку, Азербайджан'}
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700">2020</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-100">
                <h3 className="font-bold text-neutral-900 mb-2">
                  {isEnglish ? 'Capacity' : 'Потужність'}
                </h3>
                <p className="text-neutral-700">
                  {isEnglish ? '60 tons/year' : '60 тонн/рік'}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {isEnglish
                  ? 'This premium sturgeon production facility in Baku, Azerbaijan represents a specialized approach to farming one of the world\'s most valuable fish species. Designed specifically for sturgeon production, the facility combines advanced RAS technology with species-specific requirements including precise temperature control, water quality management, and biosecurity protocols essential for producing both high-quality caviar and premium sturgeon meat.'
                  : 'Цей преміум-об\'єкт виробництва осетра в Баку, Азербайджан, представляє спеціалізований підхід до вирощування одного з найцінніших видів риби у світі. Розроблений спеціально для виробництва осетра, об\'єкт поєднує передову технологію RAS з специфічними вимогами до видів, включаючи точний контроль температури, управління якістю води та протоколи біобезпеки, необхідні для виробництва як високоякісної ікри, так і преміум-м\'яса осетра.'}
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {isEnglish
                  ? 'With a capacity of 60 tons annually, the facility utilizes temperature-controlled recirculating systems adapted for sturgeon biology, maintaining optimal conditions for growth and caviar development. The project demonstrates expertise in handling specialized aquaculture species that require sophisticated environmental control and long production cycles.'
                  : 'З потужністю 60 тонн на рік об\'єкт використовує рециркуляційні системи з контролем температури, адаптовані для біології осетра, підтримуючи оптимальні умови для росту та розвитку ікри. Проект демонструє експертизу в обробці спеціалізованих видів аквакультури, які потребують складного контролю навколишнього середовища та тривалих виробничих циклів.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section bg-gradient-to-br from-neutral-50 to-amber-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Key Features' : 'Ключові особливості'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 1: Temperature Control */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Temperature-Controlled RAS' : 'RAS з контролем температури'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Precision temperature control systems maintaining optimal conditions for sturgeon growth stages and caviar production, critical for this temperature-sensitive species.'
                  : 'Системи точного контролю температури, що підтримують оптимальні умови для стадій росту осетра та виробництва ікри, критичні для цього чутливого до температури виду.'}
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Precision Control' : 'Точний контроль'}</span>
              </div>
            </div>

            {/* Feature 2: Water Quality */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Advanced Water Quality Management' : 'Передове управління якістю води'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Sophisticated water treatment and monitoring systems ensuring pristine water conditions essential for sturgeon health and premium product quality.'
                  : 'Складні системи очищення та моніторингу води, що забезпечують бездоганні умови води, необхідні для здоров\'я осетра та преміум-якості продукції.'}
              </p>
              <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Pristine Quality' : 'Бездоганна якість'}</span>
              </div>
            </div>

            {/* Feature 3: Biosecurity */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Strict Biosecurity Protocols' : 'Суворі протоколи біобезпеки'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Comprehensive biosecurity measures protecting valuable sturgeon stock from disease and contamination, essential for high-value caviar production.'
                  : 'Комплексні заходи біобезпеки, що захищають цінне поголів\'я осетра від хвороб та забруднення, необхідні для виробництва високоцінної ікри.'}
              </p>
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Maximum Protection' : 'Максимальний захист'}</span>
              </div>
            </div>

            {/* Feature 4: Species-Adapted */}
            <div className="card p-8 bg-white hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {isEnglish ? 'Sturgeon-Adapted Systems' : 'Системи, адаптовані для осетра'}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {isEnglish
                  ? 'Specialized equipment and protocols designed specifically for sturgeon biology, behavior, and the unique requirements of caviar-producing fish.'
                  : 'Спеціалізоване обладнання та протоколи, розроблені спеціально для біології, поведінки осетра та унікальних вимог риби, що виробляє ікру.'}
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-semibold">
                <CheckCircle className="w-5 h-5" />
                <span>{isEnglish ? 'Species-Specific' : 'Специфічні для виду'}</span>
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
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
              <div className="w-14 h-14 bg-amber-600 rounded-lg mb-6 flex items-center justify-center">
                <Fish className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Production' : 'Виробництво'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Species: Sturgeon'
                      : 'Види: осетер'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Capacity: 60 tons/year'
                      : 'Потужність: 60 тонн/рік'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Caviar production capability'
                      : 'Можливість виробництва ікри'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Premium meat production'
                      : 'Виробництво преміум-м\'яса'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Long-cycle production'
                      : 'Довгоциклове виробництво'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
              <div className="w-14 h-14 bg-yellow-600 rounded-lg mb-6 flex items-center justify-center">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Technology' : 'Технології'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Temperature-controlled RAS'
                      : 'RAS з контролем температури'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Advanced water quality systems'
                      : 'Передові системи якості води'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Biosecurity protocols'
                      : 'Протоколи біобезпеки'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Automated monitoring'
                      : 'Автоматизований моніторинг'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Sturgeon-adapted equipment'
                      : 'Обладнання, адаптоване для осетра'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Quality Control */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border border-orange-200">
              <div className="w-14 h-14 bg-orange-600 rounded-lg mb-6 flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                {isEnglish ? 'Quality Control' : 'Контроль якості'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Premium product standards'
                      : 'Преміум-стандарти продукції'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Strict health monitoring'
                      : 'Суворий моніторинг здоров\'я'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Caviar quality assurance'
                      : 'Забезпечення якості ікри'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'Traceability systems'
                      : 'Системи простежуваності'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    {isEnglish
                      ? 'International standards'
                      : 'Міжнародні стандарти'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results */}
      <section className="section bg-gradient-to-br from-neutral-50 to-yellow-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {isEnglish ? 'Benefits & Results' : 'Переваги та результати'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-amber-600 mb-2">
                {isEnglish ? 'Premium' : 'Преміум'}
              </h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Quality' : 'Якість'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'High-quality caviar and sturgeon meat for luxury markets'
                  : 'Високоякісна ікра та м\'ясо осетра для люксових ринків'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-yellow-600 mb-2">60</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Tons/Year' : 'Тонн/Рік'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Annual production capacity of premium sturgeon'
                  : 'Річна виробнича потужність преміум-осетра'}
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-lg font-semibold text-neutral-900 mb-2">
                {isEnglish ? 'Biosecure' : 'Біобезпечний'}
              </p>
              <p className="text-neutral-600">
                {isEnglish
                  ? 'Comprehensive biosecurity protecting valuable stock'
                  : 'Комплексна біобезпека, що захищає цінне поголів\'я'}
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
                    ? 'Established premium sturgeon production in Azerbaijan'
                    : 'Встановлено преміум-виробництво осетра в Азербайджані'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Created sustainable caviar production capacity'
                    : 'Створено стале виробництво ікри'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Demonstrated expertise in specialized aquaculture'
                    : 'Продемонстровано експертизу в спеціалізованій аквакультурі'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Implemented advanced temperature control systems'
                    : 'Впроваджено передові системи контролю температури'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Achieved international quality standards for caviar'
                    : 'Досягнуто міжнародних стандартів якості для ікри'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">
                  {isEnglish
                    ? 'Provided template for luxury aquaculture operations'
                    : 'Надано шаблон для люксових операцій аквакультури'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {isEnglish
                ? 'Interested in Premium Sturgeon Production?'
                : 'Цікавить преміум-виробництво осетра?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {isEnglish
                ? 'Contact us to learn how we can help you establish a high-value sturgeon and caviar production operation with specialized technology and expertise.'
                : 'Зв\'яжіться з нами, щоб дізнатися, як ми можемо допомогти вам створити високоцінну операцію з виробництва осетра та ікри з спеціалізованою технологією та експертизою.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-all hover:shadow-lg"
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
