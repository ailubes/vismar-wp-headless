import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import ProjectsClient from './ProjectsClient';
import TestimonialsCarousel from './TestimonialsCarousel';
import { BarChart3, Globe, DollarSign, TrendingUp, Factory, Settings, MapPin, CheckCircle, ArrowRight, Waves, Droplets, GitMerge, Layers, Map, Send, Briefcase } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

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

      {/* Page Header */}
      <section className="section bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-bold">
            {locale === 'en' ? 'Our Projects' : 'Наші проекти'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Successful aquaculture installations worldwide'
              : 'Успішні аквакультурні установки по всьому світу'}
          </p>
        </div>
      </section>

      {/* Portfolio Stats Hero Section */}
      <section className="py-16 md:py-20 bg-white border-t border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1: Projects Completed */}
            <div className="text-center text-neutral-900">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Projects Completed' : 'Завершених проектів'}
              </div>
            </div>

            {/* Stat 2: Countries Served */}
            <div className="text-center text-neutral-900">
              <Globe className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Countries Served' : 'Країн обслуговується'}
              </div>
            </div>

            {/* Stat 3: Portfolio Value */}
            <div className="text-center text-neutral-900">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-5xl md:text-6xl font-bold mb-2">$150M+</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Portfolio Value' : 'Вартість портфоліо'}
              </div>
            </div>

            {/* Stat 4: Success Rate */}
            <div className="text-center text-neutral-900">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-5xl md:text-6xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-600">
                {locale === 'en' ? 'Success Rate' : 'Успіху'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Spotlight Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Project Image */}
            <div className="relative">
              <img
                src="/images/template/placeholder-image2.png"
                alt="UAE Shrimp Farm RAS Design"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              {/* Featured Badge */}
              <div className="inline-block">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                  {locale === 'en' ? 'Featured Project' : 'Рекомендований проєкт'}
                </span>
              </div>

              {/* Project Title */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {locale === 'en'
                  ? 'UAE Shrimp Farm RAS Design'
                  : 'Дизайн креветкової ферми РАС у ОАЕ'}
              </h2>

              {/* Project Description */}
              <p className="text-lg text-gray-600 mb-6">
                {locale === 'en'
                  ? 'A state-of-the-art recirculating aquaculture system designed for sustainable shrimp production in the United Arab Emirates, featuring advanced water treatment and climate control technology.'
                  : 'Сучасна рециркуляційна система аквакультури, розроблена для сталого виробництва креветок в Об\'єднаних Арабських Еміратах, з передовою технологією очищення води та контролю клімату.'}
              </p>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Production Capacity */}
                <div className="flex items-start space-x-3">
                  <Factory className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Production Capacity' : 'Виробнича потужність'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">500 MT/year</div>
                  </div>
                </div>

                {/* System Type */}
                <div className="flex items-start space-x-3">
                  <Settings className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'System Type' : 'Тип системи'}
                    </div>
                    <div className="text-xl font-bold text-gray-900">RAS</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Status' : 'Статус'}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        {locale === 'en' ? 'Operational' : 'Працює'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={`/${locale}/projects/uae-shrimp-farm-ras-design-7`}
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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

      {/* Client Component with Filters and Projects Grid */}
      <ProjectsClient projects={projects} locale={locale} />

      {/* Project Categories by System Type Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Waves className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
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
            <div className="bg-green-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Droplets className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
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
            <div className="bg-purple-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <GitMerge className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">8+</div>
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
            <div className="bg-amber-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Layers className="w-16 h-16 mx-auto mb-4 text-amber-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <Map className="w-12 h-12 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Europe' : 'Європа'}
                  </h3>
                  <div className="text-blue-600 font-semibold mb-3">
                    {locale === 'en' ? '8+ Countries' : '8+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇺🇦 Ukraine • 🇳🇴 Norway • 🇩🇰 Denmark • 🇵🇱 Poland • 🇩🇪 Germany • 🇳🇱 Netherlands • 🇪🇸 Spain • 🇮🇹 Italy
                  </p>
                </div>
              </div>
            </div>

            {/* Middle East Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 rounded-lg p-3">
                  <Map className="w-12 h-12 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Middle East' : 'Близький Схід'}
                  </h3>
                  <div className="text-amber-600 font-semibold mb-3">
                    {locale === 'en' ? '5+ Countries' : '5+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇦🇪 UAE • 🇸🇦 Saudi Arabia • 🇶🇦 Qatar • 🇴🇲 Oman • 🇰🇼 Kuwait
                  </p>
                </div>
              </div>
            </div>

            {/* Asia-Pacific Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <Map className="w-12 h-12 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Asia-Pacific' : 'Азіатсько-Тихоокеанський регіон'}
                  </h3>
                  <div className="text-green-600 font-semibold mb-3">
                    {locale === 'en' ? '6+ Countries' : '6+ країн'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇨🇳 China • 🇮🇳 India • 🇻🇳 Vietnam • 🇹🇭 Thailand • 🇮🇩 Indonesia • 🇦🇺 Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Americas Card */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 rounded-lg p-3">
                  <Map className="w-12 h-12 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {locale === 'en' ? 'Americas' : 'Америка'}
                  </h3>
                  <div className="text-purple-600 font-semibold mb-3">
                    {locale === 'en' ? '4+ Countries' : '4+ країни'}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    🇺🇸 USA • 🇨🇦 Canada • 🇨🇱 Chile • 🇧🇷 Brazil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Bar */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Countries Stat */}
              <div className="text-center">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">
                  {locale === 'en' ? 'Countries' : 'Країн'}
                </div>
              </div>

              {/* Continents Stat */}
              <div className="text-center">
                <Globe className="w-10 h-10 mx-auto mb-3 text-green-600" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">4</div>
                <div className="text-sm text-gray-600">
                  {locale === 'en' ? 'Continents' : 'Континенти'}
                </div>
              </div>

              {/* Projects Stat */}
              <div className="text-center">
                <BarChart3 className="w-10 h-10 mx-auto mb-3 text-purple-600" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">
                  {locale === 'en' ? 'Projects' : 'Проектів'}
                </div>
              </div>

              {/* Success Rate Stat */}
              <div className="text-center">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-amber-600" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">
                  {locale === 'en' ? 'Success Rate' : 'Успішність'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-green-700 to-green-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Ready to Start Your Aquaculture Project?'
                : 'Готові розпочати свій аквакультурний проєкт?'}
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
              {locale === 'en'
                ? 'Let our experts help you design and implement a world-class aquaculture facility tailored to your needs.'
                : 'Дозвольте нашим експертам допомогти вам спроектувати та впровадити аквакультурне підприємство світового рівня, адаптоване до ваших потреб.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              {/* Primary Button */}
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center space-x-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>
                  {locale === 'en' ? 'Start a Project' : 'Почати проєкт'}
                </span>
                <Send className="w-5 h-5" />
              </a>

              {/* Secondary Button */}
              <a
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                <span>
                  {locale === 'en' ? 'View All Services' : 'Переглянути всі послуги'}
                </span>
                <Briefcase className="w-5 h-5" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>{locale === 'en' ? 'Free Consultation' : 'Безкоштовна консультація'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>{locale === 'en' ? 'Expert Team' : 'Команда експертів'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>{locale === 'en' ? 'Proven Track Record' : 'Підтверджений досвід'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
