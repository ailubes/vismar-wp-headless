import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check as CheckIcon, Clock, Building2, Globe, Award, Code, Square, Factory, Bot, Recycle, ArrowRight, RefreshCw, Waves, Circle, Droplets, Wheat, Settings, Laptop, Ruler, Hammer, Cog, Handshake, Fish, Thermometer, BarChart3, Calendar, Dna, Palette, DollarSign, Zap, Rocket, Shield, Calculator } from 'lucide-react';
import { getClient } from '@/lib/wordpress/client';
import {
  GET_FEATURED_SERVICES,
  GET_FEATURED_PROJECT,
  GET_SOFTWARE_PREVIEW,
  GET_ALL_POSTS,
} from '@/lib/wordpress/queries';
import { generateHomeMetadata } from '@/lib/seo/metadata';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import SoftwareCard from '@/components/SoftwareCard';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Section, SectionHeader } from '@/components/ui/Section';
import { StatCard } from '@/components/ui/AnimatedCounter';
import { Badge } from '@/components/ui/Badge';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateHomeMetadata(locale);
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('homepage');
  const common = await getTranslations('common');

  // Convert locale to GraphQL language code
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  // Fetch WordPress data
  const client = getClient();

  let servicesData: any = null;
  let projectData: any = null;
  let softwareData: any = null;
  let postsData: any = null;
  let errorMessage: string | null = null;

  try {
    // Fetch services
    const servicesResult = await client.query({
      query: GET_FEATURED_SERVICES,
      variables: { language: languageCode },
    });
    servicesData = servicesResult.data;

    // Fetch featured project
    const projectResult = await client.query({
      query: GET_FEATURED_PROJECT,
      variables: { language: languageCode },
    });
    projectData = projectResult.data;

    // Fetch software solutions
    const softwareResult = await client.query({
      query: GET_SOFTWARE_PREVIEW,
      variables: { language: languageCode },
    });
    softwareData = softwareResult.data;

    // Fetch blog posts (latest 3)
    const postsResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: languageCode, first: 3 },
    });
    postsData = postsResult.data;
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    errorMessage = 'Failed to load content from WordPress. Showing fallback content.';
  }

  const services = servicesData?.services?.nodes || [];
  const projects = projectData?.projects?.nodes || [];
  const software = softwareData?.softwareSolutions?.nodes || [];
  const allPosts = postsData?.posts?.nodes || [];

  // Sort posts by date (newest first)
  const posts = [...allPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const featuredProject = projects[0];

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="container-custom">
            <p className="text-yellow-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Hero Section - 50/50 Split Layout with Enhanced Visual Elements */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/40 flex items-center py-16 lg:py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large gradient circle - top right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-brand-primary/10 to-cyan-400/20 rounded-full blur-3xl" />
          {/* Medium circle - bottom left */}
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-gradient-to-tr from-brand-secondary/10 to-rose-300/15 rounded-full blur-3xl" />
          {/* Animated floating bubbles - aquaculture theme */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-teal-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          {/* Wave pattern - subtle bottom decoration */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-24 text-white/50" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,40 C150,80 350,0 500,40 C650,80 800,20 1000,40 C1200,60 1350,20 1440,40 L1440,100 L0,100 Z" opacity="0.3" />
            <path fill="currentColor" d="M0,60 C200,30 400,80 600,50 C800,20 1000,70 1200,50 C1300,40 1400,60 1440,50 L1440,100 L0,100 Z" opacity="0.2" />
          </svg>
          {/* Grid pattern overlay - very subtle */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <ScrollReveal>
              <div className="flex flex-col gap-8">
                {/* Eyebrow */}
                <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase">
                  {t('hero.eyebrow')}
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {t('hero.headline')}
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  {t('hero.subheadline')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button variant="accent" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow">
                      {t('hero.ctaPrimary')}
                    </Button>
                  </Link>
                  <Link href={`/${locale}/projects`}>
                    <Button variant="primary" size="lg" className="!bg-brand-primary text-lg px-8 py-4 w-full sm:w-auto hover:!bg-brand-primary/90 shadow-lg hover:shadow-xl transition-shadow">
                      {t('hero.ctaSecondary')}
                    </Button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <CheckIcon className="w-5 h-5 text-brand-success" />
                    <span>{t('hero.trustBadge1')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <CheckIcon className="w-5 h-5 text-brand-success" />
                    <span>{t('hero.trustBadge2')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <CheckIcon className="w-5 h-5 text-brand-success" />
                    <span>{t('hero.trustBadge3')}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Visual with enhanced styling */}
            <ScrollReveal delay={200}>
              <div className="relative h-[400px] lg:h-[600px]">
                {/* Decorative frame around image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 via-cyan-400/10 to-brand-secondary/20 rounded-3xl blur-xl" />
                <div className="absolute -top-2 -left-2 w-20 h-20 border-t-4 border-l-4 border-brand-primary/30 rounded-tl-3xl" />
                <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-4 border-r-4 border-brand-secondary/30 rounded-br-3xl" />
                <Image
                  src="/images/vismar-aqua-hero-image.png"
                  alt={t('hero.headline')}
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Fish icon accent */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
                  <Fish className="w-8 h-8 text-brand-primary" />
                </div>
                {/* Water drops icon accent */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
                  <Droplets className="w-7 h-7 text-cyan-500" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Indicators Band */}
      <Section background="transparent" spacing="lg" className="bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Stat 1 - Years of Experience */}
            <ScrollReveal delay={0}>
              <div className="flex flex-col items-center gap-3">
                <Clock className="w-12 h-12 text-brand-secondary" />
                <div className="text-5xl font-bold text-brand-primary">
                  {t('trustIndicators.stat1Number')}
                </div>
                <div className="text-sm text-gray-600 max-w-[200px]">
                  {t('trustIndicators.stat1Label')}
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 2 - Projects Delivered */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col items-center gap-3">
                <Building2 className="w-12 h-12 text-brand-secondary" />
                <div className="text-5xl font-bold text-brand-primary">
                  {t('trustIndicators.stat2Number')}
                </div>
                <div className="text-sm text-gray-600 max-w-[200px]">
                  {t('trustIndicators.stat2Label')}
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 3 - Countries */}
            <ScrollReveal delay={200}>
              <div className="flex flex-col items-center gap-3">
                <Globe className="w-12 h-12 text-brand-secondary" />
                <div className="text-5xl font-bold text-brand-primary">
                  {t('trustIndicators.stat3Number')}
                </div>
                <div className="text-sm text-gray-600 max-w-[200px]">
                  {t('trustIndicators.stat3Label')}
                </div>
              </div>
            </ScrollReveal>

            {/* Stat 4 - ISO Certification */}
            <ScrollReveal delay={300}>
              <div className="flex flex-col items-center gap-3">
                <Award className="w-12 h-12 text-brand-secondary" />
                <div className="text-5xl font-bold text-brand-primary">
                  {t('trustIndicators.stat4Number')}
                </div>
                <div className="text-sm text-gray-600 max-w-[200px]">
                  {t('trustIndicators.stat4Label')}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Three-Pillar Value Proposition */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Engineering Services */}
            <ScrollReveal>
              <div className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-brand-primary hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-brand-primary to-blue-600 shadow-lg flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {t('dualValue.engineering.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {t('dualValue.engineering.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t(`dualValue.engineering.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/services`}>
                  <Button variant="primary" size="md" className="w-full !bg-brand-primary hover:!bg-brand-primary/90 !text-white transition-colors">
                    {t('dualValue.engineering.cta')} →
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Business Services */}
            <ScrollReveal delay={100}>
              <div className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {t('dualValue.business.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {t('dualValue.business.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t(`dualValue.business.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/services/feasibility-studies`}>
                  <Button variant="primary" size="md" className="w-full !bg-emerald-500 hover:!bg-emerald-600 !text-white transition-colors">
                    {t('dualValue.business.cta')} →
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Digital Solutions */}
            <ScrollReveal delay={200}>
              <div className="group p-8 border-2 border-gray-200 rounded-2xl hover:border-brand-secondary hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-brand-secondary to-rose-600 shadow-lg flex items-center justify-center">
                  <Laptop className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {t('dualValue.software.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {t('dualValue.software.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-brand-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{t(`dualValue.software.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/software`}>
                  <Button variant="secondary" size="md" className="w-full !bg-brand-secondary hover:!bg-brand-secondary/90 !text-white !border-brand-secondary transition-colors">
                    {t('dualValue.software.cta')} →
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Featured Project - Neusatz Aqua */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Left - Image (60% / 3 columns) */}
              <div className="lg:col-span-3 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/aquavision-logo-frontpage-featured.png"
                  alt={t('featuredProject.headline')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Featured Badge Overlay */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {t('featuredProject.eyebrow')}
                  </span>
                </div>
              </div>

              {/* Right - Content (40% / 2 columns) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Headline */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {t('featuredProject.headline')}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('featuredProject.description')}
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  {/* Stat 1 */}
                  <div className="flex items-start gap-3">
                    <Square className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {t('featuredProject.stat1Number')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t('featuredProject.stat1Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-start gap-3">
                    <Factory className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {t('featuredProject.stat2Number')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t('featuredProject.stat2Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-start gap-3">
                    <Bot className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {t('featuredProject.stat3Number')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t('featuredProject.stat3Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-start gap-3">
                    <Recycle className="w-6 h-6 text-brand-secondary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {t('featuredProject.stat4Number')}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t('featuredProject.stat4Label')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <Link href={`/${locale}/projects/aquavision`}>
                    <Button variant="primary" size="lg" className="group">
                      {t('featuredProject.cta')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Service Categories */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('serviceCategories.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('serviceCategories.headline')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('serviceCategories.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid - 3x3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: RefreshCw, key: 'service1', href: '/services/ras', iconBg: 'bg-blue-500', borderColor: 'border-blue-200' },
              { icon: Waves, key: 'service2', href: '/services/hfts', iconBg: 'bg-cyan-500', borderColor: 'border-cyan-200' },
              { icon: Fish, key: 'service3', href: '/services/hatchery', iconBg: 'bg-green-500', borderColor: 'border-green-200' },
              { icon: Droplets, key: 'service4', href: '/services/water-treatment', iconBg: 'bg-teal-500', borderColor: 'border-teal-200' },
              { icon: Factory, key: 'service5', href: '/services/processing', iconBg: 'bg-purple-500', borderColor: 'border-purple-200' },
              { icon: Wheat, key: 'service6', href: '/services/feed-mill', iconBg: 'bg-amber-500', borderColor: 'border-amber-200' },
              { icon: Settings, key: 'service7', href: '/services/custom-design-equipment', iconBg: 'bg-indigo-500', borderColor: 'border-indigo-200' },
              { icon: Calculator, key: 'service9', href: '/services/feasibility-studies', iconBg: 'bg-emerald-500', borderColor: 'border-emerald-200' },
              { icon: Code, key: 'service8', href: '/services/software', iconBg: 'bg-rose-500', borderColor: 'border-rose-200' },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.key} delay={index * 50}>
                  <Link href={`/${locale}${service.href}`}>
                    <div className={`group p-6 border-2 border-gray-200 rounded-xl hover:${service.borderColor} hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 mb-4 rounded-lg ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t(`serviceCategories.${service.key}.name`)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        {t(`serviceCategories.${service.key}.description`)}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center text-brand-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        <span>{t('serviceCategories.learnMore')}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Vismar Aqua? Section */}
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('whyVismar.section.label')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('whyVismar.section.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('whyVismar.section.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* 2x2 Grid of Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Exceptional Value */}
            <ScrollReveal delay={0}>
              <div className="group p-8 bg-blue-50 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('whyVismar.card1.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('whyVismar.card1.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {t('whyVismar.card1.body')}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    {t('whyVismar.card1.badge')}
                  </span>
                </div>

                {/* Learn More Link */}
                <Link href={`/${locale}/why-vismar-aqua#value`}>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Rapid Response */}
            <ScrollReveal delay={100}>
              <div className="group p-8 bg-amber-50 rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('whyVismar.card2.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('whyVismar.card2.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {t('whyVismar.card2.body')}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                    {t('whyVismar.card2.badge')}
                  </span>
                </div>

                {/* Learn More Link */}
                <Link href={`/${locale}/why-vismar-aqua#response`}>
                  <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3: Advanced Technology */}
            <ScrollReveal delay={200}>
              <div className="group p-8 bg-purple-50 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('whyVismar.card3.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('whyVismar.card3.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {t('whyVismar.card3.body')}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                    {t('whyVismar.card3.badge')}
                  </span>
                </div>

                {/* Learn More Link */}
                <Link href={`/${locale}/why-vismar-aqua#technology`}>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 4: Battle-Tested Resilience */}
            <ScrollReveal delay={300}>
              <div className="group p-8 bg-green-50 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('whyVismar.card4.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  {t('whyVismar.card4.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {t('whyVismar.card4.body')}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    {t('whyVismar.card4.badge')}
                  </span>
                </div>

                {/* Learn More Link */}
                <Link href={`/${locale}/why-vismar-aqua#resilience`}>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Technology Showcase */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('technologies.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('technologies.headline')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('technologies.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Technology Cards */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              { key: 'tech1', image: '/images/template/placeholder-image2.png', href: '/services/hfts' },
              { key: 'tech2', image: '/images/template/placeholder-image3.png', href: '/software/iot-monitoring' },
              { key: 'tech3', image: '/images/template/placeholder-image4.png', href: '/software/biofloc' },
            ].map((tech, index) => (
              <ScrollReveal key={tech.key} delay={index * 100}>
                <Link href={`/${locale}${tech.href}`}>
                  <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-brand-secondary hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                    {/* Image - 30% */}
                    <div className="md:col-span-1 relative h-64 md:h-auto">
                      <Image
                        src={tech.image}
                        alt={t(`technologies.${tech.key}.title`)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Content - 70% */}
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-brand-secondary transition-colors">
                        {t(`technologies.${tech.key}.title`)}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        {t(`technologies.${tech.key}.description`)}
                      </p>
                      <div className="flex items-center text-brand-secondary font-semibold group-hover:gap-2 transition-all">
                        <span>{t(`technologies.${tech.key}.cta`)}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 7: Software Solutions Announcement */}
      <Section background="white" spacing="2xl" containerized={false}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left - Visual (40% / 2 columns) */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 flex items-center justify-center">
                <Laptop className="w-48 h-48 text-brand-secondary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/template/placeholder-image5.png"
                    alt={t('softwareAnnouncement.headline')}
                    fill
                    className="object-contain p-12"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
              </ScrollReveal>
            </div>

            {/* Right - Content (60% / 3 columns) */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={200}>
                <div className="flex flex-col gap-6">
                {/* Badge */}
                <div>
                  <span className="px-4 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {t('softwareAnnouncement.badge')}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {t('softwareAnnouncement.headline')}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('softwareAnnouncement.description')}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Fish className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature3')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature4')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Dna className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature5')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-brand-secondary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{t('softwareAnnouncement.feature6')}</span>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <Link href={`/${locale}/software`}>
                    <Button variant="accent" size="lg" className="group">
                      {t('softwareAnnouncement.cta')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 8: Process - DBOT Methodology */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('process.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('process.headline')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Design */}
            <ScrollReveal delay={0}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Ruler className="w-12 h-12 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t('process.step1.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {t('process.step1.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-brand-secondary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step1.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-brand-secondary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2: Build */}
            <ScrollReveal delay={100}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Hammer className="w-12 h-12 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t('process.step2.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {t('process.step2.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-brand-secondary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step2.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-brand-secondary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3: Operate */}
            <ScrollReveal delay={200}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Cog className="w-12 h-12 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t('process.step3.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {t('process.step3.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-brand-secondary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step3.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-brand-secondary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4: Transfer */}
            <ScrollReveal delay={300}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Handshake className="w-12 h-12 text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t('process.step4.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {t('process.step4.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-brand-secondary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step4.timeline')}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* SECTION 9: Client Testimonials */}
      <Section background="white" spacing="2xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('testimonials.headline')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 - Valerii */}
          <ScrollReveal delay={0}>
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-brand-secondary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-gray-700 italic leading-relaxed pt-4">
                  {t('testimonials.testimonial1.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">
                  {t('testimonials.testimonial1.author')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('testimonials.testimonial1.role')}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 2 - Alexander */}
          <ScrollReveal delay={100}>
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-brand-secondary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-gray-700 italic leading-relaxed pt-4">
                  {t('testimonials.testimonial2.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">
                  {t('testimonials.testimonial2.author')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('testimonials.testimonial2.role')}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 3 - Victor */}
          <ScrollReveal delay={200}>
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-brand-primary hover:shadow-lg transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-brand-secondary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-gray-700 italic leading-relaxed pt-4">
                  {t('testimonials.testimonial3.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">
                  {t('testimonials.testimonial3.author')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('testimonials.testimonial3.role')}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* SECTION 10: Latest Insights (Blog) */}
      {posts.length > 0 && (
        <Section background="light" spacing="2xl">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="text-brand-secondary text-sm font-semibold tracking-wider uppercase mb-4">
                  {t('blog.tagline')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {t('blog.title')}
                </h2>
                <p className="text-xl text-gray-600">
                  {t('blog.description')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post: any, index: number) => (
                <ScrollReveal key={post.id} delay={index * 100}>
                  <BlogCard
                    post={post}
                    locale={locale}
                    readTimeText={t('blog.readTime')}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center mt-12">
                <Link href={`/${locale}/blog`}>
                  <Button variant="primary" size="lg">
                    {t('blog.viewAll')} →
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      )}

      {/* SECTION 11: Final CTA - Dual Forms */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('finalCTA.headline')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('finalCTA.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Three Forms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Form 1: Engineering Project */}
            <ScrollReveal delay={0}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-brand-primary/5 to-brand-primary/10 rounded-2xl border-2 border-brand-primary/20 hover:border-brand-primary/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('finalCTA.engineering.headline')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('finalCTA.engineering.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('finalCTA.form.projectDetails')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {t('finalCTA.engineering.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Form 2: Business Services - Feasibility Studies */}
            <ScrollReveal delay={50}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-2xl border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('finalCTA.business.headline')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('finalCTA.business.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('finalCTA.form.businessNeeds')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {t('finalCTA.business.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Form 3: Software Development */}
            <ScrollReveal delay={100}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-brand-secondary/5 to-brand-secondary/10 rounded-2xl border-2 border-brand-secondary/20 hover:border-brand-secondary/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-secondary rounded-xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t('finalCTA.software.headline')}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('finalCTA.software.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t('finalCTA.form.softwareNeeds')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-brand-secondary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {t('finalCTA.software.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info Below Forms */}
          <ScrollReveal delay={200}>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                {t('finalCTA.orCall')}{' '}
                <a
                  href="tel:+380508796803"
                  className="font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
                >
                  +380 50 879 6803
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
