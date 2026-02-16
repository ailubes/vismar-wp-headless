import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_SOFTWARE_BY_SLUG, GET_ALL_SOFTWARE } from '@/lib/wordpress/queries';
import { generateSoftwareMetadata } from '@/lib/seo/metadata';
import { generateProductSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  Wifi,
  LayoutDashboard,
  BarChart,
  Droplets,
  Settings,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Award,
  Globe,
  Users,
  Rocket
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Generate metadata for the software detail page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_SOFTWARE_BY_SLUG,
      variables: { slug },
    });

    const software = data?.softwareSolution;

    if (!software) {
      return {
        title: locale === 'en' ? 'Software Not Found' : 'Програму не знайдено',
      };
    }

    return generateSoftwareMetadata(locale, slug, software);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Software' : 'Програма',
    };
  }
}

// Generate static params for all software solutions
export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const languageCode = params.locale === 'en' ? 'EN' : 'UK';

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_ALL_SOFTWARE,
      variables: { language: languageCode },
    });

    // Add null check to prevent "Cannot read properties of undefined" error
    if (!data?.softwareSolutions?.nodes) {
      console.warn('No software solutions found for locale:', params.locale);
      return [];
    }

    return data.softwareSolutions.nodes.map((software: any) => ({
      slug: software.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Icon mapping for different software solutions
const getIconForSlug = (slug: string) => {
  const iconMap: Record<string, any> = {
    'ai-counting': Brain,
    'iot-monitoring': Wifi,
    'farm-management': LayoutDashboard,
    'analytics': BarChart,
    'biofloc': Droplets,
    'custom-apps': Settings,
  };
  return iconMap[slug] || Rocket;
};

export default async function SoftwareDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';
  const isEnglish = locale === 'en';

  let software: any = null;
  let otherSoftware: any[] = [];

  try {
    const client = getClient();

    // Fetch the specific software solution
    const { data } = await client.query({
      query: GET_SOFTWARE_BY_SLUG,
      variables: { slug },
    });

    software = data?.softwareSolution;

    // If software not found, show 404
    if (!software) {
      notFound();
    }

    // Fetch other software solutions for the "Other Solutions" section
    try {
      const otherSoftwareResult = await client.query({
        query: GET_ALL_SOFTWARE,
        variables: { language: languageCode },
      });
      otherSoftware = otherSoftwareResult.data?.softwareSolutions?.nodes?.filter(
        (s: any) => s.slug !== slug
      ) || [];
    } catch (error) {
      console.error('Error fetching other software:', error);
    }
  } catch (error) {
    console.error('Error fetching software:', error);
    notFound();
  }

  const SolutionIcon = getIconForSlug(slug);

  // Hero stats - can be customized per software solution or use defaults
  const heroStats = [
    {
      icon: Zap,
      value: '95%',
      label: { en: 'Accuracy', uk: 'Точність' }
    },
    {
      icon: Clock,
      value: '50%',
      label: { en: 'Time Saved', uk: 'Економія часу' }
    },
    {
      icon: Shield,
      value: '24/7',
      label: { en: 'Monitoring', uk: 'Моніторинг' }
    },
    {
      icon: TrendingUp,
      value: '30%',
      label: { en: 'ROI Increase', uk: 'Зростання ROI' }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#42c997]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating tech icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <SolutionIcon className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <Rocket className="w-16 h-16 text-purple-400" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Brain className="w-10 h-10 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Zap className="w-14 h-14 text-[#42c997]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{isEnglish ? 'Home' : 'Головна'}</Link>
              <span>/</span>
              <Link href={`/${locale}/software`} className="hover:text-white transition-colors">{isEnglish ? 'Software' : 'Програми'}</Link>
              <span>/</span>
              <span className="text-white">{software.title}</span>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {isEnglish ? 'Digital Solution' : 'Цифрове рішення'}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {software.title}
            </h1>

            {/* Tagline */}
            {software.softwareDetails?.softwareTagline && (
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
                {software.softwareDetails.softwareTagline}
              </p>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {software.softwareDetails?.softwareDemoUrl ? (
                <a
                  href={software.softwareDetails.softwareDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                >
                  {isEnglish ? 'View Demo' : 'Переглянути демо'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"
                >
                  {isEnglish ? 'Request Demo' : 'Запросити демо'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'Contact Sales' : 'Зв\'язатися з продажами'}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute left-0 right-0" style={{ bottom: '-1px' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Hero stats section */}
      <section className="section bg-white pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-8 md:-mt-12">
            {heroStats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">
                    <StatIcon className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-neutral-600">
                    {isEnglish ? stat.label.en : stat.label.uk}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      {software.content && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {isEnglish ? 'Overview' : 'Огляд'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                {isEnglish ? 'Solution Details' : 'Деталі рішення'}
              </h2>
            </div>
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold prose-headings:text-neutral-900
                prose-p:text-neutral-700
                prose-a:text-[#42c997] prose-a:no-underline hover:prose-a:underline
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700
                prose-li:marker:text-[#42c997]
                prose-strong:text-neutral-900"
              dangerouslySetInnerHTML={{ __html: software.content }}
            />
          </div>
        </section>
      )}

      {/* Key Features Section */}
      {software.softwareDetails?.softwareKeyFeatures && (
        <section className="section bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {isEnglish ? 'Features' : 'Можливості'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                {isEnglish ? 'Key Features' : 'Ключові особливості'}
              </h2>
            </div>
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold prose-headings:text-neutral-900
                prose-p:text-neutral-700
                prose-a:text-[#42c997]
                prose-ul:text-neutral-700
                prose-ol:text-neutral-700
                prose-li:marker:text-[#42c997]
                prose-strong:text-neutral-900"
              dangerouslySetInnerHTML={{ __html: software.softwareDetails.softwareKeyFeatures }}
            />
          </div>
        </section>
      )}

      {/* Technology Stack Section */}
      {software.softwareDetails?.softwareTechnologyStack && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {isEnglish ? 'Technology' : 'Технології'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                {isEnglish ? 'Technology Stack' : 'Технологічний стек'}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-8 md:p-12">
                <p className="text-lg text-neutral-700 text-center leading-relaxed">
                  {software.softwareDetails.softwareTechnologyStack}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {software.softwareDetails?.softwarePricing && (
        <section className="section bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {isEnglish ? 'Investment' : 'Інвестиція'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                {isEnglish ? 'Pricing' : 'Ціни'}
              </h2>
            </div>
            <div
              className="prose prose-lg prose-purple max-w-4xl mx-auto
                prose-headings:font-semibold prose-headings:text-neutral-900
                prose-p:text-neutral-700
                prose-a:text-[#42c997]
                prose-strong:text-neutral-900"
              dangerouslySetInnerHTML={{ __html: software.softwareDetails.softwarePricing }}
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {isEnglish
                ? 'Ready to Transform Your Operation?'
                : 'Готові трансформувати вашу операцію?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {isEnglish
                ? 'Contact us today to learn more about this solution or request a personalized demo.'
                : 'Зв\'яжіться з нами сьогодні, щоб дізнатися більше про це рішення або запросити персоналізоване демо.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {software.softwareDetails?.softwareDemoUrl && (
                <a
                  href={software.softwareDetails.softwareDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-success/25"
                >
                  {isEnglish ? 'View Demo' : 'Переглянути демо'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              )}
              {software.softwareDetails?.softwareDocumentationUrl && (
                <a
                  href={software.softwareDetails.softwareDocumentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  {isEnglish ? 'Documentation' : 'Документація'}
                </a>
              )}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {isEnglish ? 'Contact Sales' : 'Зв\'язатися з продажами'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Software Solutions Section */}
      {otherSoftware.length > 0 && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {isEnglish ? 'Explore More' : 'Дослідіть більше'}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-heading mb-4">
                {isEnglish ? 'Other Solutions' : 'Інші рішення'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {otherSoftware.slice(0, 3).map((otherSoft: any) => {
                const OtherIcon = getIconForSlug(otherSoft.slug);
                return (
                  <Link
                    key={otherSoft.id}
                    href={`/${locale}/software/${otherSoft.slug}`}
                    className="group relative bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 hover:border-[#42c997]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#42c997]/5"
                  >
                    <div className="relative z-10 mb-6 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500/15 to-[#00A8B5]/10 flex items-center justify-center group-hover:from-purple-500/25 group-hover:to-[#00A8B5]/15 transition-all duration-300">
                      <OtherIcon className="w-7 h-7 md:w-8 md:h-8 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#35a87a] transition-colors duration-300">
                      {otherSoft.title}
                    </h3>
                    {otherSoft.softwareDetails?.softwareTagline && (
                      <p className="text-[#35a87a] font-medium mb-3">
                        {otherSoft.softwareDetails.softwareTagline}
                      </p>
                    )}
                    {otherSoft.softwareDetails?.softwareDescriptionShort && (
                      <p className="text-neutral-600 line-clamp-2 mb-4">
                        {otherSoft.softwareDetails.softwareDescriptionShort}
                      </p>
                    )}
                    <div className="inline-flex items-center text-[#35a87a] hover:text-[#2a8a63] font-semibold group/link">
                      {isEnglish ? 'Learn More' : 'Дізнатися більше'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Link
                href={`/${locale}/software`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-success/25"
              >
                {isEnglish ? 'View All Software' : 'Переглянути всі програми'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
