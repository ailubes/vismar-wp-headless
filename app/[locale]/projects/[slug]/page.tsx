import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_PROJECT_BY_SLUG, GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import { generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, Calendar, Globe, MapPin, Building2, Fish, Zap, CheckCircle, Clock,
  Target, Lightbulb, Wrench, BarChart3, DollarSign, TrendingUp, Quote, Settings,
  Droplets, Factory, Scale, Timer, Activity, Camera
} from 'lucide-react';
import { getOptimizedImageUrl } from '@/lib/image-url';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = true;
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const client = getClient();

  try {
    const enResult = await client.query({
      query: GET_ALL_PROJECTS,
      variables: { language: 'EN' }
    });

    const ukResult = await client.query({
      query: GET_ALL_PROJECTS,
      variables: { language: 'UK' }
    });

    const enProjects = enResult.data?.projects?.nodes || [];
    const ukProjects = ukResult.data?.projects?.nodes || [];

    return [
      ...enProjects.map((project: any) => ({
        locale: 'en',
        slug: project.slug,
      })),
      ...ukProjects.map((project: any) => ({
        locale: 'uk',
        slug: project.slug,
      }))
    ];
  } catch (error) {
    console.error('Error generating static params for projects:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug },
    });

    const project = data?.project;

    if (!project) {
      return {
        title: locale === 'en' ? 'Project Not Found' : 'Проект не знайдено',
      };
    }

    const excerpt = project.excerpt?.replace(/<[^>]*>/g, '').trim() || '';

    return {
      title: project.title,
      description: excerpt || `${project.title} - Vismar Aqua project`,
      openGraph: {
        title: project.title,
        description: excerpt,
        images: project.featuredImage?.node?.sourceUrl ? [project.featuredImage.node.sourceUrl] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Project Not Found' : 'Проект не знайдено',
    };
  }
}

// Status badge helper
const getStatusInfo = (status?: string, locale?: string) => {
  const statusMap: Record<string, { label: string; labelUk: string; color: string; icon: 'check' | 'clock' }> = {
    'planning': { label: 'Planning', labelUk: 'Планування', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: 'clock' },
    'in_progress': { label: 'In Progress', labelUk: 'В процесі', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: 'clock' },
    'completed': { label: 'Completed', labelUk: 'Завершено', color: 'bg-green-100 text-green-800 border-green-200', icon: 'check' },
    'operational': { label: 'Operational', labelUk: 'Працює', color: 'bg-teal-100 text-teal-800 border-teal-200', icon: 'check' },
    'construction': { label: 'Construction Phase', labelUk: 'Етап будівництва', color: 'bg-orange-100 text-orange-800 border-orange-200', icon: 'clock' },
  };
  const info = statusMap[status || ''];
  if (!info) return null;
  return {
    ...info,
    displayLabel: locale === 'uk' ? info.labelUk : info.label
  };
};

// System type helper
const getSystemTypeInfo = (systemType?: string) => {
  const typeMap: Record<string, { label: string; color: string }> = {
    'ras': { label: 'RAS', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
    'hfts': { label: 'HFTS', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    'biofloc': { label: 'Biofloc', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    'hybrid': { label: 'Hybrid', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    'flow_through': { label: 'Flow-Through', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    'pond': { label: 'Pond', color: 'bg-green-100 text-green-800 border-green-200' },
  };
  return typeMap[systemType || ''] || null;
};

// Format currency
const formatCurrency = (value: string | number, currency: string = 'USD') => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return value;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
};

// Parse markdown-like text to HTML
const parseMarkdown = (text: string) => {
  if (!text) return '';
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n- /g, '</p><li>')
    .replace(/^- /g, '<li>')
    .replace(/<li>([^<]+)(?=<li>|$)/g, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/g, '<ul class="list-disc pl-6 my-2">$1</ul>')
    .replace(/\n/g, '<br/>');
};

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('common');

  let project: any = null;

  try {
    const client = getClient();
    const result = await client.query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug },
    });
    project = result.data?.project;
  } catch (error) {
    console.error('Error fetching project data:', error);
    notFound();
  }

  if (!project) {
    notFound();
  }

  const featuredImage = project.featuredImage?.node?.sourceUrl
    ? project.featuredImage.node
    : project.translations?.[0]?.featuredImage?.node;

  const details = project.projectMeta;
  const statusInfo = getStatusInfo(details?.projectStatus, locale);
  const systemTypeInfo = getSystemTypeInfo(details?.projectSystemType);

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Projects' : 'Проекти', url: `/${locale}/projects` },
    { name: project.title },
  ]);

  // Check if project has rich content
  const hasRichContent = details?.projectOverview || details?.projectChallenge || details?.projectSolution;
  const hasFinancials = details?.projectCapex || details?.projectOpexAnnual || details?.projectRoi;
  const hasTestimonial = details?.projectTestimonial;
  const hasMetrics = details?.projectMetricsBlock || details?.projectAnnualProduction;

  // Collect gallery images
  const galleryImages = [
    details?.projectGallery1,
    details?.projectGallery2,
    details?.projectGallery3,
    details?.projectGallery4,
    details?.projectGallery5,
    details?.projectGallery6,
  ].filter(Boolean);
  const hasGallery = galleryImages.length > 0;

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="relative h-80 md:h-[28rem] bg-gradient-to-r from-brand-primary to-brand-secondary">
        {featuredImage?.sourceUrl && (
          <Image
            src={getOptimizedImageUrl(featuredImage.sourceUrl)}
            alt={featuredImage.altText || project.title}
            fill
            className="object-cover opacity-50"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 to-brand-primary/80 flex items-center justify-center">
          <div className="container-custom text-center">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {systemTypeInfo && (
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${systemTypeInfo.color}`}>
                  {systemTypeInfo.label}
                </span>
              )}
              {statusInfo && (
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border flex items-center gap-2 ${statusInfo.color}`}>
                  {statusInfo.icon === 'check' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                  {statusInfo.displayLabel}
                </span>
              )}
            </div>
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-3">{project.title}</h1>
            {details?.projectSubtitle && (
              <p className="text-white/90 text-xl md:text-2xl font-medium">{details.projectSubtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Facts Bar */}
      {(details?.projectClient || details?.projectLocation || details?.projectYear || details?.projectSpecies) && (
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {details?.projectClient && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Building2 className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Client' : 'Клієнт'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectClient}</p>
                  </div>
                </div>
              )}
              {details?.projectLocation && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Location' : 'Місце'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectLocation}</p>
                  </div>
                </div>
              )}
              {details?.projectYear && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Calendar className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Year' : 'Рік'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectYear}</p>
                  </div>
                </div>
              )}
              {details?.projectSpecies && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Fish className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Species' : 'Види'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectSpecies}</p>
                  </div>
                </div>
              )}
              {details?.projectCapacity && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm col-span-2 md:col-span-1">
                  <Zap className="w-5 h-5 text-brand-secondary flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Capacity' : 'Потужність'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectCapacity}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-100 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href={`/${locale}`} className="hover:text-brand-secondary transition-colors">
              {locale === 'en' ? 'Home' : 'Головна'}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/projects`} className="hover:text-brand-secondary transition-colors">
              {locale === 'en' ? 'Projects' : 'Проекти'}
            </Link>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Overview Section */}
      {details?.projectOverview && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Project Overview' : 'Огляд проекту'}
                </h2>
              </div>
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(details.projectOverview) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Key Metrics Grid */}
      {hasMetrics && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Key Performance Metrics' : 'Ключові показники'}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {details?.projectAnnualProduction && (
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <Factory className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-neutral-900 mb-1">
                      {details.projectAnnualProduction}
                    </div>
                    <p className="text-sm text-neutral-600">
                      {locale === 'en' ? 'Tonnes/Year' : 'Тонн/рік'}
                    </p>
                  </div>
                )}
                {details?.projectProductionCycles && (
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-neutral-900 mb-1">
                      {details.projectProductionCycles}
                    </div>
                    <p className="text-sm text-neutral-600">
                      {locale === 'en' ? 'Cycles/Year' : 'Циклів/рік'}
                    </p>
                  </div>
                )}
                {details?.projectStandingBiomass && (
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <Scale className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-neutral-900 mb-1">
                      {details.projectStandingBiomass}t
                    </div>
                    <p className="text-sm text-neutral-600">
                      {locale === 'en' ? 'Standing Biomass' : 'Біомаса'}
                    </p>
                  </div>
                )}
                {details?.projectWaterVolume && (
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-neutral-900 mb-1">
                      {details.projectWaterVolume}m³
                    </div>
                    <p className="text-sm text-neutral-600">
                      {locale === 'en' ? 'Water Volume' : 'Об\'єм води'}
                    </p>
                  </div>
                )}
              </div>

              {details?.projectMetricsBlock && (
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <pre className="text-sm text-neutral-700 whitespace-pre-wrap font-mono bg-gray-50 p-4 rounded-lg">
                    {details.projectMetricsBlock}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Challenge Section */}
      {details?.projectChallenge && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Engineering Challenges' : 'Інженерні виклики'}
                </h2>
              </div>
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed bg-red-50 p-6 rounded-xl border border-red-100"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(details.projectChallenge) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Solution Section */}
      {details?.projectSolution && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Our Solution' : 'Наше рішення'}
                </h2>
              </div>
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed bg-white p-6 rounded-xl shadow-sm"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(details.projectSolution) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Technical Details Section */}
      {details?.projectTechnicalDetails && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Technical Specifications' : 'Технічні характеристики'}
                </h2>
              </div>
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed bg-purple-50 p-6 rounded-xl border border-purple-100"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(details.projectTechnicalDetails) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Financial Performance Section */}
      {hasFinancials && (
        <section className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {locale === 'en' ? 'Financial Performance' : 'Фінансові показники'}
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {details?.projectCapex && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-2">CAPEX</p>
                    <div className="text-2xl md:text-3xl font-bold">
                      {formatCurrency(details.projectCapex, details?.projectCapexCurrency || 'USD')}
                    </div>
                  </div>
                )}
                {details?.projectOpexAnnual && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-2">
                      {locale === 'en' ? 'Annual OPEX' : 'Річний OPEX'}
                    </p>
                    <div className="text-2xl md:text-3xl font-bold">
                      {formatCurrency(details.projectOpexAnnual, details?.projectCapexCurrency || 'USD')}
                    </div>
                  </div>
                )}
                {details?.projectRevenueAnnual && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-2">
                      {locale === 'en' ? 'Annual Revenue' : 'Річний дохід'}
                    </p>
                    <div className="text-2xl md:text-3xl font-bold">
                      {formatCurrency(details.projectRevenueAnnual, details?.projectCapexCurrency || 'USD')}
                    </div>
                  </div>
                )}
                {details?.projectProfitAnnual && (
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-2">
                      {locale === 'en' ? 'Annual Profit' : 'Річний прибуток'}
                    </p>
                    <div className="text-2xl md:text-3xl font-bold">
                      {formatCurrency(details.projectProfitAnnual, details?.projectCapexCurrency || 'USD')}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {details?.projectProductionCost && (
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-1">
                      {locale === 'en' ? 'Production Cost' : 'Собівартість'}
                    </p>
                    <div className="text-xl font-bold">${details.projectProductionCost}/kg</div>
                  </div>
                )}
                {details?.projectProfitMargin && (
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-1">
                      {locale === 'en' ? 'Profit Margin' : 'Маржа'}
                    </p>
                    <div className="text-xl font-bold">{details.projectProfitMargin}%</div>
                  </div>
                )}
                {details?.projectRoi && (
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
                    <p className="text-white/80 text-sm mb-1">ROI</p>
                    <div className="text-xl font-bold">{details.projectRoi}</div>
                  </div>
                )}
              </div>

              {details?.projectFinancialNotes && (
                <p className="text-white/70 text-sm mt-6 text-center max-w-2xl mx-auto">
                  {details.projectFinancialNotes}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {details?.projectResults && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Project Results' : 'Результати проекту'}
                </h2>
              </div>
              <div
                className="prose prose-lg max-w-none text-neutral-700 leading-relaxed bg-teal-50 p-6 rounded-xl border border-teal-100"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(details.projectResults) }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {hasTestimonial && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <Quote className="w-12 h-12 text-brand-primary/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed mb-6">
                "{details.projectTestimonial}"
              </blockquote>
              {(details?.projectTestimonialAuthor || details?.projectTestimonialTitle) && (
                <div>
                  {details.projectTestimonialAuthor && (
                    <p className="font-semibold text-neutral-900">{details.projectTestimonialAuthor}</p>
                  )}
                  {details.projectTestimonialTitle && (
                    <p className="text-neutral-500">{details.projectTestimonialTitle}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery Section */}
      {hasGallery && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Project Gallery' : 'Галерея проекту'}
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((imageUrl, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                    <Image
                      src={getOptimizedImageUrl(imageUrl as string)}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Legacy Content (if no rich content) */}
      {!hasRichContent && (project.excerpt || project.content) && (
        <section className="section">
          <div className="container-custom">
            <article className="max-w-4xl mx-auto">
              {project.excerpt && (
                <div className="mb-8 text-xl text-neutral-600 leading-relaxed border-l-4 border-brand-secondary pl-6">
                  <div dangerouslySetInnerHTML={{ __html: project.excerpt }} />
                </div>
              )}
              {project.content && (
                <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                  <div
                    className="prose prose-lg prose-green max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                  />
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {/* Language Switcher */}
      {project.translations && project.translations.length > 0 && (
        <section className="py-6 bg-neutral-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <p className="text-sm text-neutral-600 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {locale === 'en' ? 'Also available in:' : 'Також доступно:'}
                </p>
                <div className="flex gap-2">
                  {project.translations.map((translation: any) => (
                    <Link
                      key={translation.slug}
                      href={`/${translation.language?.code?.toLowerCase() || 'uk'}/projects/${translation.slug}`}
                      className="px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:border-brand-secondary hover:text-brand-secondary transition-colors text-sm font-medium"
                    >
                      {translation.language?.code === 'UK' ? 'Українська' : 'English'}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'en' ? 'Back to All Projects' : 'Назад до всіх проектів'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white text-3xl font-bold">
              {locale === 'en'
                ? 'Interested in Similar Solutions?'
                : 'Зацікавлені в подібних рішеннях?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Let us help you achieve success with your aquaculture project.'
                : 'Дозвольте нам допомогти вам досягти успіху з вашим проектом аквакультури.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors"
              >
                {t('getQuote')}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                {locale === 'en' ? 'View All Projects' : 'Переглянути всі проекти'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
