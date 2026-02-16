import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import CaseStudiesClient from './CaseStudiesClient';
import Link from 'next/link';
import { BarChart3, Globe, DollarSign, TrendingUp, Target, Award, Lightbulb, CheckCircle, ArrowRight, Send, Briefcase, Sparkles, FileText, Users, Building, Fish } from 'lucide-react';
import type { Metadata } from 'next';

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'en'
    ? 'Case Studies | Vismar Aqua - Real Aquaculture Success Stories'
    : 'Кейси | Вісмар Аква - Реальні Історії Успіху в Аквакультурі';

  const description = locale === 'en'
    ? 'Explore detailed case studies and success stories from our aquaculture projects worldwide. See proven results, measurable ROI, and innovative solutions in action.'
    : 'Дослідіть детальні кейси та історії успіху наших проєктів аквакультури по всьому світу. Перегляньте доведені результати, вимірювану рентабельність та інноваційні рішення в дії.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'en' ? 'en_US' : 'uk_UA',
    },
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let projectsData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch projects server-side - filter for featured projects as case studies
    const projectsResult = await client.query({
      query: GET_ALL_PROJECTS,
      variables: { language: languageCode },
    });
    projectsData = projectsResult.data;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load case studies. Please try again later.'
      : 'Не вдалося завантажити кейси. Будь ласка, спробуйте пізніше.';
  }

  // Filter for featured projects or all projects as case studies
  const allProjects = projectsData?.projects?.nodes || [];
  const caseStudies = allProjects.filter((project: any) =>
    project.projectMeta?.projectFeatured === true ||
    project.projectMeta?.projectStatus === 'completed' ||
    project.projectMeta?.projectStatus === 'operational'
  );

  // Hero stats
  const heroStats = [
    {
      icon: TrendingUp,
      value: '100%',
      label: { en: 'Success Rate', uk: 'Успішність' }
    },
    {
      icon: Award,
      value: `${caseStudies.length}+`,
      label: { en: 'Featured Projects', uk: 'Рекомендовані проєкти' }
    },
    {
      icon: Globe,
      value: '15+',
      label: { en: 'Countries', uk: 'Країн' }
    },
    {
      icon: DollarSign,
      value: '$150M+',
      label: { en: 'Portfolio Value', uk: 'Вартість портфоліо' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 relative z-50">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <FileText className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <BarChart3 className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Award className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <TrendingUp className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Target className="w-10 h-10 text-[#00A8B5]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'en' ? 'Real Success Stories' : 'Реальні історії успіху'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {locale === 'en' ? (
                <>
                  Proven Results,{' '}
                  <span className="text-[#42c997]">Measurable Impact</span>
                </>
              ) : (
                <>
                  Доведені результати,{' '}
                  <span className="text-[#42c997]">вимірюваний вплив</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {locale === 'en'
                ? 'Explore detailed case studies showcasing our aquaculture engineering expertise. Every project demonstrates innovative solutions, operational excellence, and sustainable success across diverse environments worldwide.'
                : 'Дослідіть детальні кейси, що демонструють наш досвід в інжинірингу аквакультури. Кожен проєкт показує інноваційні рішення, операційну досконалість та сталий успіх у різних середовищах по всьому світу.'}
            </p>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
              {heroStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <StatIcon className="w-6 h-6 md:w-8 md:h-8 text-[#42c997] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">
                      {locale === 'en' ? stat.label.en : stat.label.uk}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Discuss Your Project' : 'Обговорити проєкт'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View All Projects' : 'Всі проєкти'}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* What Makes Our Case Studies Different */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Why Our Case Studies' : 'Чому наші кейси'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'What Makes Our Case Studies Different' : 'Що робить наші кейси особливими'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Every project tells a story of innovation, problem-solving, and measurable success in aquaculture engineering.'
                : 'Кожен проєкт розповідає історію інновацій, вирішення проблем та вимірюваного успіху в інжинірингу аквакультури.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: { en: 'Measurable Results', uk: 'Вимірювані результати' },
                description: { en: 'Real data, real metrics, and proven ROI from every implemented project.', uk: 'Реальні дані, реальні показники та доведена рентабельність кожного проєкту.' }
              },
              {
                icon: Lightbulb,
                title: { en: 'Innovation in Action', uk: 'Інновації в дії' },
                description: { en: 'Cutting-edge solutions tailored to unique challenges and environmental conditions.', uk: 'Передові рішення, адаптовані до унікальних викликів та екологічних умов.' }
              },
              {
                icon: Award,
                title: { en: 'Long-term Success', uk: 'Довгостроковий успіх' },
                description: { en: 'Projects designed for sustained performance and operational excellence over years.', uk: 'Проєкти розроблені для стабільної продуктивності та операційної досконалості протягом років.' }
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 flex items-center justify-center">
                    <ItemIcon className="w-8 h-8 text-[#35a87a]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {locale === 'en' ? item.title.en : item.title.uk}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {locale === 'en' ? item.description.en : item.description.uk}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Component with Case Studies Grid */}
      <section className="section bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Portfolio' : 'Наше портфоліо'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Featured Case Studies' : 'Рекомендовані кейси'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Explore our most impactful projects and see how we deliver results across diverse aquaculture sectors.'
                : 'Дослідіть наші найвпливовіші проєкти та подивіться, як ми досягаємо результатів у різних секторах аквакультури.'}
            </p>
          </div>
        </div>
        <CaseStudiesClient projects={caseStudies} locale={locale} />
      </section>

      {/* Industries We Serve */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Sectors' : 'Сектори'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
              {locale === 'en' ? 'Industries We Serve' : 'Індустрії, яким ми служимо'}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Specialized solutions across diverse aquaculture sectors.'
                : 'Спеціалізовані рішення у різних секторах аквакультури.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: { en: 'Shrimp Farming', uk: 'Креветкове господарство' },
                description: { en: 'RAS & biofloc systems for intensive production', uk: 'RAS та біофлок системи для інтенсивного виробництва' },
                gradient: 'from-[#42c997]/10 to-[#00A8B5]/10',
                borderHover: 'hover:border-[#42c997]/40'
              },
              {
                title: { en: 'Fish Hatcheries', uk: 'Інкубатори' },
                description: { en: 'Controlled breeding and larval rearing facilities', uk: 'Контрольоване розведення та вирощування личинок' },
                gradient: 'from-[#35a87a]/10 to-[#42c997]/10',
                borderHover: 'hover:border-[#35a87a]/40'
              },
              {
                title: { en: 'Salmon Farming', uk: 'Лосось' },
                description: { en: 'Flow-through and HFTS systems for premium quality', uk: 'Прямоточні та HFTS системи для преміум якості' },
                gradient: 'from-[#1B4B63]/10 to-[#00A8B5]/10',
                borderHover: 'hover:border-[#1B4B63]/40'
              },
              {
                title: { en: 'Ornamental Fish', uk: 'Декоративні риби' },
                description: { en: 'Specialized systems for high-value species', uk: 'Спеціалізовані системи для цінних видів' },
                gradient: 'from-[#00A8B5]/10 to-[#42c997]/10',
                borderHover: 'hover:border-[#00A8B5]/40'
              }
            ].map((industry, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${industry.gradient} rounded-2xl p-6 md:p-8 border border-neutral-100 ${industry.borderHover} transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                  {locale === 'en' ? industry.title.en : industry.title.uk}
                </h3>
                <p className="text-neutral-600">
                  {locale === 'en' ? industry.description.en : industry.description.uk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Want Your Project to Become Our Next Success Story?'
                : 'Хочете, щоб ваш проєкт став нашою наступною історією успіху?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {locale === 'en'
                ? 'Let\'s discuss how we can bring proven methodologies and innovative solutions to your aquaculture project.'
                : 'Обговоримо, як ми можемо застосувати перевірені методології та інноваційні рішення до вашого проєкту аквакультури.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Discuss Your Project' : 'Обговорити проєкт'}
                <Send className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View All Projects' : 'Всі проєкти'}
                <Briefcase className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#42c997]" />
                <span>{locale === 'en' ? 'Free Consultation' : 'Безкоштовна консультація'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#42c997]" />
                <span>{locale === 'en' ? '100% Success Rate' : '100% успішність'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#42c997]" />
                <span>{locale === 'en' ? 'Global Experience' : 'Світовий досвід'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
