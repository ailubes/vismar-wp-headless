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
import BlueprintCodeSlider from '@/components/ui/BlueprintCodeSlider';
import DecodeText from '@/components/ui/DecodeText';
import HoloCard from '@/components/ui/HoloCard';
import ParticleNetwork from '@/components/ui/ParticleNetwork';

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

    // Fetch blog posts
    const postsResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: languageCode, first: 50 },
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

  // Helper function to detect if text is primarily in English (Latin) vs Cyrillic
  const isEnglishText = (text: string): boolean => {
    if (!text) return false;
    // Count Latin vs Cyrillic characters
    const latinChars = (text.match(/[a-zA-Z]/g) || []).length;
    const cyrillicChars = (text.match(/[\u0400-\u04FF]/g) || []).length;
    // Consider it English if more Latin chars than Cyrillic
    return latinChars > cyrillicChars;
  };

  // Filter posts by actual content language, not just metadata
  // This workaround is needed because WordPress has Ukrainian content in posts marked as "English"
  const posts = [...allPosts]
    .filter((post: any) => {
      if (languageCode === 'EN') {
        // For English page, only show posts with actual English content
        return isEnglishText(post.title);
      } else {
        // For Ukrainian page, only show posts with Cyrillic content
        return !isEnglishText(post.title);
      }
    })
    .sort((a, b) => {
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

      {/* Hero Section - Technical Dashboard */}
      <section className="relative min-h-[85vh] md:min-h-screen lg:min-h-[700px] flex items-center py-12 md:py-20 lg:py-24 overflow-hidden bg-white">
        {/* Particle Network Background */}
        <ParticleNetwork className="z-0" />

        {/* Dot grid background */}
        <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />

        <div className="container mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="flex flex-col gap-6 lg:gap-8">
                  {/* Eyebrow - monospace */}
                  <div className="font-mono text-primary text-xs lg:text-sm tracking-widest uppercase">
                    {t('hero.eyebrow')}
                  </div>

                  {/* Headline with DecodeText animation */}
                  <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                    <DecodeText text={t('hero.headline')} trigger="load" delay={300} />
                  </h1>

                  {/* Subheadline */}
                  <p className="font-body text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    {t('hero.subheadline')}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href={`/${locale}/contact`}>
                      <button className="bg-primary hover:bg-primary text-foreground font-semibold text-base lg:text-lg px-8 py-4 rounded-lg uppercase tracking-wider transition-all duration-300 w-full sm:w-auto">
                        {t('hero.ctaPrimary')}
                      </button>
                    </Link>
                    <Link href={`/${locale}/projects`}>
                      <button className="bg-transparent border border-primary/30 text-primary hover:bg-primary/10 font-semibold text-base lg:text-lg px-8 py-4 rounded-lg uppercase tracking-wider transition-all duration-300 w-full sm:w-auto">
                        {t('hero.ctaSecondary')}
                      </button>
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-3 pt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-4 py-2.5 rounded-lg border border-border">
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-body">{t('hero.trustBadge1')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-4 py-2.5 rounded-lg border border-border">
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-body">{t('hero.trustBadge2')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-50 px-4 py-2.5 rounded-lg border border-border">
                      <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="font-body">{t('hero.trustBadge3')}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Metrics Panel (5 cols) */}
            <div className="lg:col-span-5 hidden lg:block">
              <ScrollReveal delay={200}>
                <HoloCard className="p-6" tiltEnabled={true}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        // Company Metrics
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/50">v4.0</span>
                  </div>

                  {/* 2×2 Stat Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Clock,     value: t('trustIndicators.stat1Number'), label: t('trustIndicators.stat1Label') },
                      { icon: Building2, value: t('trustIndicators.stat2Number'), label: t('trustIndicators.stat2Label') },
                      { icon: Globe,     value: t('trustIndicators.stat3Number'), label: t('trustIndicators.stat3Label') },
                      { icon: Award,     value: t('trustIndicators.stat4Number'), label: t('trustIndicators.stat4Label') },
                    ].map((stat, i) => {
                      const Icon = stat.icon;
                      return (
                        <div key={i} className="bg-slate-50 rounded-lg p-4 flex flex-col gap-3">
                          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div className="font-mono text-3xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href={`/${locale}/projects`}
                      className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:gap-3 transition-all">
                      <span>{t('hero.ctaSecondary')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </HoloCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats Band - shown on mobile only */}
      <Section background="transparent" spacing="lg" className="bg-background lg:hidden">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6 text-center">
            {[
              { icon: Clock, label: t('trustIndicators.stat1Label'), value: t('trustIndicators.stat1Number') },
              { icon: Building2, label: t('trustIndicators.stat2Label'), value: t('trustIndicators.stat2Number') },
              { icon: Globe, label: t('trustIndicators.stat3Label'), value: t('trustIndicators.stat3Number') },
              { icon: Award, label: t('trustIndicators.stat4Label'), value: t('trustIndicators.stat4Number') },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-mono text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Three-Pillar Value Proposition */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Engineering Services */}
            <ScrollReveal>
              <HoloCard className="p-8 border-2 border-border hover:border-dark" tiltEnabled={true}>
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Settings className="w-6 h-6 text-cyan-600" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t('dualValue.engineering.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {t('dualValue.engineering.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t(`dualValue.engineering.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/services`}>
                  <Button variant="primary" size="md" className="w-full !bg-dark hover:!bg-dark/90 !text-white transition-colors">
                    {t('dualValue.engineering.cta')} →
                  </Button>
                </Link>
              </HoloCard>
            </ScrollReveal>

            {/* Business Services */}
            <ScrollReveal delay={100}>
              <HoloCard className="p-8 border-2 border-border hover:border-success" tiltEnabled={true}>
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Calculator className="w-6 h-6 text-cyan-600" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t('dualValue.business.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {t('dualValue.business.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t(`dualValue.business.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/services/feasibility-studies`}>
                  <Button variant="primary" size="md" className="w-full !bg-success hover:!bg-success !text-white transition-colors">
                    {t('dualValue.business.cta')} →
                  </Button>
                </Link>
              </HoloCard>
            </ScrollReveal>

            {/* Digital Solutions */}
            <ScrollReveal delay={200}>
              <HoloCard className="p-8 border-2 border-border hover:border-primary" tiltEnabled={true}>
                {/* Icon */}
                <div className="w-12 h-12 mb-6 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Laptop className="w-6 h-6 text-cyan-600" />
                </div>

                {/* Headline */}
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {t('dualValue.software.headline')}
                </h2>

                {/* Description */}
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {t('dualValue.software.description')}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckIcon className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t(`dualValue.software.feature${i}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/${locale}/software`}>
                  <Button variant="secondary" size="md" className="w-full !bg-primary hover:!bg-primary/90 !text-white !border-primary transition-colors">
                    {t('dualValue.software.cta')} →
                  </Button>
                </Link>
              </HoloCard>
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
              <div className="lg:col-span-3 relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/images/aquavision-logo-frontpage-featured.png"
                  alt={t('featuredProject.headline')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Featured Badge Overlay */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-cta text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {t('featuredProject.eyebrow')}
                  </span>
                </div>
              </div>

              {/* Right - Content (40% / 2 columns) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Headline */}
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t('featuredProject.headline')}
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('featuredProject.description')}
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  {/* Stat 1 */}
                  <div className="flex items-start gap-3">
                    <Square className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {t('featuredProject.stat1Number')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t('featuredProject.stat1Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="flex items-start gap-3">
                    <Factory className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {t('featuredProject.stat2Number')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t('featuredProject.stat2Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-start gap-3">
                    <Bot className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {t('featuredProject.stat3Number')}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t('featuredProject.stat3Label')}
                      </div>
                    </div>
                  </div>

                  {/* Stat 4 */}
                  <div className="flex items-start gap-3">
                    <Recycle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        {t('featuredProject.stat4Number')}
                      </div>
                      <div className="text-sm text-muted-foreground">
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
              <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('serviceCategories.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('serviceCategories.headline')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('serviceCategories.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid - 3x3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: RefreshCw, key: 'service1', href: '/services/ras-systems', iconBg: 'bg-secondary', borderColor: 'border-blue-200' },
              { icon: Waves, key: 'service2', href: '/services/hfts', iconBg: 'bg-primary', borderColor: 'border-cyan-200' },
              { icon: Fish, key: 'service3', href: '/services/hatchery', iconBg: 'bg-cyan-500', borderColor: 'border-cyan-200' },
              { icon: Droplets, key: 'service4', href: '/services/water-treatment', iconBg: 'bg-cyan-500', borderColor: 'border-cyan-200' },
              { icon: Factory, key: 'service5', href: '/services/processing', iconBg: 'bg-purple-500', borderColor: 'border-purple-200' },
              { icon: Wheat, key: 'service6', href: '/services/feed-mill', iconBg: 'bg-cta', borderColor: 'border-amber-200' },
              { icon: Settings, key: 'service7', href: '/services/custom-design-equipment', iconBg: 'bg-indigo-500', borderColor: 'border-indigo-200' },
              { icon: Calculator, key: 'service9', href: '/services/feasibility-studies', iconBg: 'bg-success', borderColor: 'border-cyan-200' },
              { icon: Code, key: 'service8', href: '/software', iconBg: 'bg-rose-500', borderColor: 'border-rose-200' },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.key} delay={index * 50}>
                  <Link href={`/${locale}${service.href}`}>
                    <div className={`group p-6 border-2 border-border rounded-xl hover:${service.borderColor} hover:shadow-sm transition-all duration-300 h-full flex flex-col`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 mb-4 rounded-lg ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Service Name */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {t(`serviceCategories.${service.key}.name`)}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {t(`serviceCategories.${service.key}.description`)}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center text-foreground text-sm font-semibold group-hover:gap-2 transition-all">
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
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-slate-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('whyVismar.section.label')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('whyVismar.section.title')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('whyVismar.section.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* 2x2 Grid of Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Exceptional Value */}
            <ScrollReveal delay={0}>
              <div className="group p-8 bg-blue-50 rounded-lg border-2 border-border hover:border-blue-300 hover:shadow-sm hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {t('whyVismar.card1.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-muted-foreground mb-4">
                  {t('whyVismar.card1.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
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
                  <div className="flex items-center text-secondary font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2: Rapid Response */}
            <ScrollReveal delay={100}>
              <div className="group p-8 bg-amber-50 rounded-lg border-2 border-border hover:border-amber-300 hover:shadow-sm hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-cta flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {t('whyVismar.card2.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-muted-foreground mb-4">
                  {t('whyVismar.card2.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
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
                  <div className="flex items-center text-cta font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 3: Advanced Technology */}
            <ScrollReveal delay={200}>
              <div className="group p-8 bg-purple-50 rounded-lg border-2 border-border hover:border-purple-300 hover:shadow-sm hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {t('whyVismar.card3.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-muted-foreground mb-4">
                  {t('whyVismar.card3.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
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
              <div className="group p-8 bg-slate-50 rounded-lg border-2 border-border hover:border-cyan-300 hover:shadow-sm hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 rounded-xl bg-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>

                {/* Headline */}
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {t('whyVismar.card4.headline')}
                </h3>

                {/* Subheadline */}
                <h4 className="text-xl font-semibold text-muted-foreground mb-4">
                  {t('whyVismar.card4.subheadline')}
                </h4>

                {/* Body */}
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {t('whyVismar.card4.body')}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full">
                    {t('whyVismar.card4.badge')}
                  </span>
                </div>

                {/* Learn More Link */}
                <Link href={`/${locale}/why-vismar-aqua#resilience`}>
                  <div className="flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                    <span>{t('whyVismar.cta')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Blueprint/Code Slider */}
      <Section background="dark" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
                {t('blueprintSlider.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('blueprintSlider.headline')}
              </h2>
              <p className="text-xl text-dark-muted">
                {t('blueprintSlider.description')}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <BlueprintCodeSlider />
          </ScrollReveal>
        </div>
      </Section>

      {/* Technology Showcase */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('technologies.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('technologies.headline')}
              </h2>
              <p className="text-xl text-muted-foreground">
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
                  <div className="group grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border-2 border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-sm hover:scale-[1.02] transition-all duration-300">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {t(`technologies.${tech.key}.title`)}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                        {t(`technologies.${tech.key}.description`)}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
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
                <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-slate-900/10 flex items-center justify-center">
                <Laptop className="w-48 h-48 text-primary opacity-20" />
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
                  <span className="px-4 py-2 bg-cta text-white text-sm font-semibold rounded-full uppercase tracking-wide">
                    {t('softwareAnnouncement.badge')}
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {t('softwareAnnouncement.headline')}
                </h2>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('softwareAnnouncement.description')}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Fish className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature1')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Thermometer className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature2')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature3')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature4')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Dna className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature5')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{t('softwareAnnouncement.feature6')}</span>
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <Link href={`/${locale}/software`}>
                    <Button variant="cta" size="lg" className="group">
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
              <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                {t('process.eyebrow')}
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('process.headline')}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t('process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Design */}
            <ScrollReveal delay={0}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-red-300 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Ruler className="w-12 h-12 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('process.step1.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {t('process.step1.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step1.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2: Build */}
            <ScrollReveal delay={100}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-yellow-300 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Hammer className="w-12 h-12 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('process.step2.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {t('process.step2.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step2.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3: Operate */}
            <ScrollReveal delay={200}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-orange-300 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Cog className="w-12 h-12 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('process.step3.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {t('process.step3.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>{t('process.step3.timeline')}</span>
                  </div>
                </div>

                {/* Connecting Arrow (hidden on mobile) */}
                <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4: Transfer */}
            <ScrollReveal delay={300}>
              <div className="relative group">
                <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-cyan-300 hover:shadow-sm transition-all duration-300 h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="w-16 h-16 mb-6 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Handshake className="w-12 h-12 text-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('process.step4.title')}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {t('process.step4.description')}
                  </p>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('testimonials.headline')}
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 - Valerii */}
          <ScrollReveal delay={0}>
            <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-slate-900 hover:shadow-sm transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-primary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-muted-foreground italic leading-relaxed pt-4">
                  {t('testimonials.testimonial1.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-border pt-4">
                <div className="font-bold text-foreground">
                  {t('testimonials.testimonial1.author')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('testimonials.testimonial1.role')}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 2 - Alexander */}
          <ScrollReveal delay={100}>
            <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-slate-900 hover:shadow-sm transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-primary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-muted-foreground italic leading-relaxed pt-4">
                  {t('testimonials.testimonial2.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-border pt-4">
                <div className="font-bold text-foreground">
                  {t('testimonials.testimonial2.author')}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t('testimonials.testimonial2.role')}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial 3 - Victor */}
          <ScrollReveal delay={200}>
            <div className="p-8 bg-white rounded-lg border-2 border-border hover:border-slate-900 hover:shadow-sm transition-all duration-300">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <div className="text-6xl text-primary opacity-20 font-serif absolute -top-4 -left-2">&ldquo;</div>
                <p className="text-lg text-muted-foreground italic leading-relaxed pt-4">
                  {t('testimonials.testimonial3.quote')}
                </p>
              </div>

              {/* Author */}
              <div className="text-center border-t border-border pt-4">
                <div className="font-bold text-foreground">
                  {t('testimonials.testimonial3.author')}
                </div>
                <div className="text-sm text-muted-foreground">
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
                <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                  {t('blog.tagline')}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {t('blog.title')}
                </h2>
                <p className="text-xl text-muted-foreground">
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('finalCTA.headline')}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('finalCTA.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Three Forms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Form 1: Engineering Project */}
            <ScrollReveal delay={0}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-dark/5 to-slate-900/10 rounded-lg border-2 border-slate-900/20 hover:border-slate-900/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-dark rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t('finalCTA.engineering.headline')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('finalCTA.engineering.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="eng-name" className="sr-only">{t('finalCTA.form.name')}</label>
                    <input
                      id="eng-name"
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="eng-email" className="sr-only">{t('finalCTA.form.email')}</label>
                    <input
                      id="eng-email"
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="eng-company" className="sr-only">{t('finalCTA.form.company')}</label>
                    <input
                      id="eng-company"
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="eng-phone" className="sr-only">{t('finalCTA.form.phone')}</label>
                    <input
                      id="eng-phone"
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="eng-details" className="sr-only">{t('finalCTA.form.projectDetails')}</label>
                    <textarea
                      id="eng-details"
                      placeholder={t('finalCTA.form.projectDetails')}
                      rows={4}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-dark text-white font-semibold rounded-lg hover:bg-dark/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {t('finalCTA.engineering.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Form 2: Business Services - Feasibility Studies */}
            <ScrollReveal delay={50}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-cyan-500/5 to-cyan-500/10 rounded-lg border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-success rounded-xl flex items-center justify-center">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t('finalCTA.business.headline')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('finalCTA.business.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="biz-name" className="sr-only">{t('finalCTA.form.name')}</label>
                    <input
                      id="biz-name"
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="biz-email" className="sr-only">{t('finalCTA.form.email')}</label>
                    <input
                      id="biz-email"
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="biz-company" className="sr-only">{t('finalCTA.form.company')}</label>
                    <input
                      id="biz-company"
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="biz-phone" className="sr-only">{t('finalCTA.form.phone')}</label>
                    <input
                      id="biz-phone"
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="biz-needs" className="sr-only">{t('finalCTA.form.businessNeeds')}</label>
                    <textarea
                      id="biz-needs"
                      placeholder={t('finalCTA.form.businessNeeds')}
                      rows={4}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-success text-white font-semibold rounded-lg hover:bg-success transition-colors flex items-center justify-center gap-2 group"
                  >
                    {t('finalCTA.business.cta')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Form 3: Software Development */}
            <ScrollReveal delay={100}>
              <div className="p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                {/* Icon & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t('finalCTA.software.headline')}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('finalCTA.software.description')}
                    </p>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="sw-name" className="sr-only">{t('finalCTA.form.name')}</label>
                    <input
                      id="sw-name"
                      type="text"
                      placeholder={t('finalCTA.form.name')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="sw-email" className="sr-only">{t('finalCTA.form.email')}</label>
                    <input
                      id="sw-email"
                      type="email"
                      placeholder={t('finalCTA.form.email')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="sw-company" className="sr-only">{t('finalCTA.form.company')}</label>
                    <input
                      id="sw-company"
                      type="text"
                      placeholder={t('finalCTA.form.company')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="sw-phone" className="sr-only">{t('finalCTA.form.phone')}</label>
                    <input
                      id="sw-phone"
                      type="tel"
                      placeholder={t('finalCTA.form.phone')}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="sw-needs" className="sr-only">{t('finalCTA.form.softwareNeeds')}</label>
                    <textarea
                      id="sw-needs"
                      placeholder={t('finalCTA.form.softwareNeeds')}
                      rows={4}
                      className="w-full px-4 py-3 border border-border-strong rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
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
              <p className="text-lg text-muted-foreground">
                {t('finalCTA.orCall')}{' '}
                <a
                  href="tel:+380508796803"
                  className="font-semibold text-foreground hover:text-primary transition-colors"
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
