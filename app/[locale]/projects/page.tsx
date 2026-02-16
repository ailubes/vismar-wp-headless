import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import ProjectsClient from './ProjectsClient';
import TestimonialsCarousel from './TestimonialsCarousel';
import { BarChart3, Globe, DollarSign, TrendingUp, Factory, Settings, MapPin, CheckCircle, ArrowRight, Waves, Droplets, GitMerge, Layers, Map, Send, Briefcase, Award, Building2, Users, Fish, Sparkles } from 'lucide-react';

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Aquaculture Projects Portfolio | 50+ Worldwide | Vismar Aqua'
      : 'Портфоліо проектів з аквакультури | 50+ по всьому світу | Vismar Aqua',
    description: locale === 'en'
      ? '50+ completed aquaculture projects globally. RAS systems, HFTS technology, flow-through farms. View case studies across 20+ countries.'
      : '50+ завершених проектів з аквакультури у всьому світі. Системи RAS, технологія HFTS, проточні ферми. Перегляньте кейси у 20+ країнах.',
    keywords: locale === 'en'
      ? 'aquaculture projects, RAS systems, HFTS technology, fish farming portfolio, Vismar Aqua projects'
      : 'проекти аквакультури, системи RAS, технологія HFTS, портфоліо рибних ферм',
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let projectsData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch projects server-side
    const projectsResult = await client.query({
      query: GET_ALL_PROJECTS,
      variables: { language: languageCode },
    });
    projectsData = projectsResult.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load projects. Please try again later.'
      : 'Не вдалося завантажити проекти. Будь ласка, спробуйте пізніше.';
  }

  const projects = projectsData?.projects?.nodes || [];

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large gradient circle - top right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-brand-heading/20 to-transparent rounded-full blur-3xl" />

          {/* Medium circle - bottom left */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-brand-secondary/15 to-transparent rounded-full blur-2xl" />

          {/* Small accent circle */}
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-brand-heading/10 rounded-full blur-xl" />

          {/* Floating fish icons */}
          <div className="absolute top-20 left-[15%] opacity-10 animate-float">
            <Fish className="w-16 h-16 text-white" />
          </div>
          <div className="absolute bottom-32 right-[20%] opacity-10 animate-float" style={{ animationDelay: '2s' }}>
            <Fish className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-1/2 left-[8%] opacity-10 animate-float" style={{ animationDelay: '4s' }}>
            <Waves className="w-20 h-20 text-white" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-heading" />
              <span className="text-brand-heading text-sm font-semibold tracking-wide uppercase">
                {locale === 'en' ? 'Portfolio of Excellence' : 'Портфоліо досконалості'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {locale === 'en' ? (
                <>Transforming Visions into<br /><span className="text-brand-heading">World-Class Facilities</span></>
              ) : (
                <>Перетворюємо ідеї у<br /><span className="text-brand-heading">об'єкти світового рівня</span></>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              {locale === 'en'
                ? 'From concept to commissioning, we\'ve designed and delivered 50+ aquaculture projects across 15+ countries. Explore our portfolio of RAS facilities, hatcheries, and processing plants that are feeding communities worldwide.'
                : 'Від концепції до введення в експлуатацію ми спроектували та реалізували понад 50 проектів аквакультури в 15+ країнах. Ознайомтесь з нашим портфоліо РАС систем, інкубаторіїв та переробних заводів, які годують громади по всьому світу.'}
            </p>

            {/* Hero Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 mb-10">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-heading/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-brand-heading" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/70">
                  {locale === 'en' ? 'Projects Completed' : 'Завершених проектів'}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-brand-secondary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-white/70">
                  {locale === 'en' ? 'Countries Served' : 'Країн обслуговується'}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">$150M+</div>
                <div className="text-sm text-white/70">
                  {locale === 'en' ? 'Portfolio Value' : 'Вартість портфоліо'}
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-white/70">
                  {locale === 'en' ? 'Client Satisfaction' : 'Задоволеність клієнтів'}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-brand-heading hover:bg-brand-heading/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {locale === 'en' ? 'Explore Projects' : 'Переглянути проекти'}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                {locale === 'en' ? 'Start Your Project' : 'Розпочати проект'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Project Spotlight Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Image */}
            <div className="relative">
              <img
                src="/images/template/placeholder-image2.png"
                alt="UAE Shrimp Farm RAS Design"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              {/* Featured badge */}
              <div className="absolute top-4 left-4 bg-brand-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {locale === 'en' ? '⭐ Featured Project' : '⭐ Рекомендований проєкт'}
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              {/* Featured Badge */}
              <div className="inline-block">
                <span className="text-sm font-semibold text-brand-heading uppercase tracking-wide">
                  {locale === 'en' ? 'Flagship Installation' : 'Флагманський об\'єкт'}
                </span>
              </div>

              {/* Project Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
                {locale === 'en'
                  ? 'UAE Shrimp Farm RAS Design'
                  : 'Дизайн креветкової ферми РАС у ОАЕ'}
              </h2>

              {/* Project Description */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {locale === 'en'
                  ? 'A state-of-the-art recirculating aquaculture system designed for sustainable shrimp production in the United Arab Emirates, featuring advanced water treatment and climate control technology.'
                  : 'Сучасна рециркуляційна система аквакультури, розроблена для сталого виробництва креветок в Об\'єднаних Арабських Еміратах, з передовою технологією очищення води та контролю клімату.'}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Production Capacity */}
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                  <Factory className="w-6 h-6 text-brand-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Production Capacity' : 'Виробнича потужність'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">250 MT/year</div>
                  </div>
                </div>

                {/* System Type */}
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                  <Settings className="w-6 h-6 text-brand-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'System Type' : 'Тип системи'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">RAS</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                  <MapPin className="w-6 h-6 text-brand-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Location' : 'Розташування'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {locale === 'en' ? 'United Arab Emirates' : 'ОАЕ'}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Status' : 'Статус'}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                        {locale === 'en' ? 'Construction Phase' : 'Етап будівництва'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={`/${locale}/projects/uae-shrimp-farm-ras-design`}
                  className="inline-flex items-center space-x-2 bg-brand-heading hover:bg-brand-heading/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>
                    {locale === 'en'
                      ? 'View Full Project Details'
                      : 'Переглянути повну інформацію про проєкт'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories by System Type Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              {locale === 'en'
                ? 'Our Project Portfolio by System Type'
                : 'Наш портфель проектів за типом системи'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'We specialize in designing and implementing various aquaculture systems tailored to meet diverse production needs and environmental conditions.'
                : 'Ми спеціалізуємося на проектуванні та впровадженні різних систем аквакультури, адаптованих для задоволення різноманітних потреб виробництва та екологічних умов.'}
            </p>
          </div>

          {/* System Type Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1: RAS */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-brand-heading mb-2">15+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'en' ? 'RAS' : 'РАС'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Closed-loop systems with advanced water treatment and minimal water exchange'
                  : 'Замкнуті системи з передовою обробкою води та мінімальним водообміном'}
              </p>
            </div>

            {/* Card 2: Flow-Through Systems */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-brand-heading mb-2">12+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'en' ? 'Flow-Through Systems' : 'Прямоточні системи'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Continuous fresh water supply with natural filtration and optimal conditions'
                  : 'Безперервна подача свіжої води з природною фільтрацією та оптимальними умовами'}
              </p>
            </div>

            {/* Card 3: Hybrid Systems */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GitMerge className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-brand-heading mb-2">8+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'en' ? 'Hybrid Systems' : 'Гібридні системи'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Combined approach leveraging benefits of multiple system types'
                  : 'Комбінований підхід, що використовує переваги декількох типів систем'}
              </p>
            </div>

            {/* Card 4: Pond/Outdoor Systems */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-brand-heading mb-2">10+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {locale === 'en' ? 'Pond/Outdoor Systems' : 'Ставкові/зовнішні системи'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'en'
                  ? 'Traditional outdoor systems utilizing natural ecosystems'
                  : 'Традиційні зовнішні системи, що використовують природні екосистеми'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel Section */}
      <TestimonialsCarousel locale={locale} />

      {/* Global Reach Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Global Reach' : 'Глобальне охоплення'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Delivering aquaculture excellence across continents'
                : 'Надання досконалості в аквакультурі на всіх континентах'}
            </p>
          </div>

          {/* Region Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Europe Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3">
                  <Map className="w-12 h-12 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Europe' : 'Європа'}
                  </h3>
                  <div className="text-brand-heading font-semibold mb-3">
                    {locale === 'en' ? '8+ Countries' : '8+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇺🇦 Ukraine • 🇳🇴 Norway • 🇩🇰 Denmark • 🇵🇱 Poland • 🇩🇪 Germany • 🇳🇱 Netherlands • 🇪🇸 Spain • 🇮🇹 Italy
                  </p>
                </div>
              </div>
            </div>

            {/* Middle East Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 rounded-xl p-3">
                  <Map className="w-12 h-12 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Middle East' : 'Близький Схід'}
                  </h3>
                  <div className="text-brand-heading font-semibold mb-3">
                    {locale === 'en' ? '5+ Countries' : '5+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇦🇪 UAE • 🇸🇦 Saudi Arabia • 🇶🇦 Qatar • 🇴🇲 Oman • 🇰🇼 Kuwait
                  </p>
                </div>
              </div>
            </div>

            {/* Asia-Pacific Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-xl p-3">
                  <Map className="w-12 h-12 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Asia-Pacific' : 'Азіатсько-Тихоокеанський регіон'}
                  </h3>
                  <div className="text-brand-heading font-semibold mb-3">
                    {locale === 'en' ? '6+ Countries' : '6+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇨🇳 China • 🇮🇳 India • 🇻🇳 Vietnam • 🇹🇭 Thailand • 🇮🇩 Indonesia • 🇦🇺 Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Americas Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-xl p-3">
                  <Map className="w-12 h-12 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Americas' : 'Америка'}
                  </h3>
                  <div className="text-brand-heading font-semibold mb-3">
                    {locale === 'en' ? '4+ Countries' : '4+ країни'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇺🇸 USA • 🇨🇦 Canada • 🇨🇱 Chile • 🇧🇷 Brazil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section - Moved before CTA */}
      <section id="projects" className="py-16 md:py-20 bg-white scroll-mt-20">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'All Projects' : 'Усі проекти'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'en'
                ? 'Browse our complete portfolio of aquaculture engineering projects from around the world'
                : 'Перегляньте наше повне портфоліо проектів аквакультурного інжинірингу з усього світу'}
            </p>
          </div>

          {/* Client Component with Filters and Projects Grid */}
          <ProjectsClient projects={projects} locale={locale} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-brand-heading relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-heading/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Ready to Start Your Aquaculture Project?'
                : 'Готові розпочати свій аквакультурний проєкт?'}
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              {locale === 'en'
                ? 'Let our experts help you design and implement a world-class aquaculture facility tailored to your needs.'
                : 'Дозвольте нашим експертам допомогти вам спроектувати та впровадити аквакультурне підприємство світового рівня, адаптоване до ваших потреб.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              {/* Primary Button */}
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center space-x-2 bg-brand-heading hover:bg-brand-heading/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>
                  {locale === 'en' ? 'Start a Project' : 'Почати проєкт'}
                </span>
                <Send className="w-5 h-5" />
              </a>

              {/* Secondary Button */}
              <a
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <span>
                  {locale === 'en' ? 'View All Services' : 'Переглянути всі послуги'}
                </span>
                <Briefcase className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/70 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-heading" />
                <span>{locale === 'en' ? 'Free Consultation' : 'Безкоштовна консультація'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-heading" />
                <span>{locale === 'en' ? 'Expert Team' : 'Команда експертів'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-brand-heading" />
                <span>{locale === 'en' ? 'Proven Track Record' : 'Підтверджений досвід'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
