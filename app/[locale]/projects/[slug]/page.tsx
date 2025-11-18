import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_PROJECT_BY_SLUG, GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import { generateProjectMetadata } from '@/lib/seo/metadata';
import { generateArticleSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import Image from 'next/image';
import {
  TrendingUp,
  Building2,
  Fish,
  Droplets,
  Calendar,
  MapPin,
  Users,
  Zap,
  AlertCircle,
  CheckCircle,
  CheckSquare,
  Leaf,
  ChevronDown,
  ChevronUp,
  DollarSign,
  BarChart3,
  Sparkles,
  Globe,
  Award,
  Briefcase,
  AlertTriangle
} from 'lucide-react';
import type { WPProject, ProjectTechnology, ProjectPerformanceMetric, ProjectPhase, ProjectChallenge, ProjectDeliverable } from '@/lib/wordpress/types';
import { getUnifiedProjectData } from '@/lib/wordpress/project-helpers';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// Enable dynamic params - allow any slug, not just statically generated ones
export const dynamicParams = true;

export async function generateStaticParams() {
  const client = getClient();

  try {
    // Get projects for both languages
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
        title: 'Project Not Found',
      };
    }

    // Enhanced metadata with status and system type
    const baseMetadata = await generateProjectMetadata(locale, slug, project);
    const unifiedData = getUnifiedProjectData(project);
    const status = unifiedData.projectStatus;
    const systemType = unifiedData.projectSystemType;

    const enhancedDescription = [
      baseMetadata.description,
      status ? `Status: ${status}` : null,
      systemType ? `System: ${systemType}` : null
    ].filter(Boolean).join(' | ');

    return {
      ...baseMetadata,
      description: enhancedDescription,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Project Not Found',
    };
  }
}

// Helper function to get status badge styling
function getStatusBadgeClasses(status?: string): string {
  switch (status) {
    case 'Planning':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Design':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Construction':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'Operational':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Completed':
      return 'bg-teal-100 text-teal-800 border-teal-200';
    default:
      return 'bg-neutral-100 text-neutral-800 border-neutral-200';
  }
}

// Helper function to get system type badge styling
function getSystemTypeBadgeClasses(systemType?: string): string {
  switch (systemType) {
    case 'RAS':
      return 'bg-cyan-100 text-cyan-800 border-cyan-200';
    case 'Biofloc':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'Hybrid':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case 'Flow-through':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'IMTA':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-neutral-100 text-neutral-800 border-neutral-200';
  }
}

// Helper function to get phase status styling
function getPhaseStatusClasses(status: string): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'In Progress':
      return 'bg-orange-100 text-orange-800';
    case 'Planned':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-neutral-100 text-neutral-800';
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');

  let projectData: any = null;

  try {
    const client = getClient();
    const result = await client.query({
      query: GET_PROJECT_BY_SLUG,
      variables: { slug },
    });
    projectData = result.data;
  } catch (error) {
    console.error('Error fetching project data:', error);
    notFound();
  }

  const project: WPProject | null = projectData?.project;

  if (!project) {
    notFound();
  }

  // Use unified helper to get project data from either new field groups or legacy structure
  const details = getUnifiedProjectData(project);

  // Generate JSON-LD structured data
  const articleSchema = generateArticleSchema(locale, {
    title: project.title,
    slug,
    excerpt: details?.projectOverview || details?.projectSolution,
    content: project.content,
    publishedDate: project.date,
    featuredImage: project.featuredImage?.node?.sourceUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Projects' : 'Проекти', url: `/${locale}/projects` },
    { name: project.title },
  ]);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Hero Section with Featured Image, Title, and Status Badge */}
      {project.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-96 md:h-[500px] bg-gradient-to-r from-green-600 to-teal-600">
          <Image
            src={project.featuredImage.node.sourceUrl}
            alt={project.featuredImage.node.altText || project.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-teal-900/80 flex items-center justify-center">
            <div className="container-custom text-center">
              <div className="flex flex-wrap gap-3 justify-center mb-4">
                {details?.projectStatus && (
                  <span className={`px-4 py-2 rounded-full font-semibold text-sm border-2 ${getStatusBadgeClasses(details.projectStatus)}`}>
                    {details.projectStatus}
                  </span>
                )}
                {details?.projectSystemType && (
                  <span className={`px-4 py-2 rounded-full font-semibold text-sm border-2 ${getSystemTypeBadgeClasses(details.projectSystemType)}`}>
                    {details.projectSystemType}
                  </span>
                )}
              </div>
              <h1 className="text-white font-bold">{project.title}</h1>
              {details?.projectSubtitle && (
                <p className="text-white/90 text-xl mt-3 max-w-3xl mx-auto">{details.projectSubtitle}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <section className="section bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container-custom text-center">
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {details?.projectStatus && (
                <span className={`px-4 py-2 rounded-full font-semibold text-sm border-2 ${getStatusBadgeClasses(details.projectStatus)}`}>
                  {details.projectStatus}
                </span>
              )}
              {details?.projectSystemType && (
                <span className={`px-4 py-2 rounded-full font-semibold text-sm border-2 ${getSystemTypeBadgeClasses(details.projectSystemType)}`}>
                  {details.projectSystemType}
                </span>
              )}
            </div>
            <h1 className="mb-4 font-bold text-white">{project.title}</h1>
            {details?.projectSubtitle && (
              <p className="text-white/90 text-xl max-w-3xl mx-auto">{details.projectSubtitle}</p>
            )}
          </div>
        </section>
      )}

      {/* Quick Facts Bar */}
      {(details?.projectClient || details?.projectLocation || details?.projectYear || details?.projectSpecies || details?.projectStatus) && (
        <section className="bg-gray-50 border-b border-gray-200 py-6">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {details?.projectClient && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Building2 className="w-5 h-5 text-green-600 flex-shrink-0" />
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
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Location' : 'Місцезнаходження'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectLocation}</p>
                  </div>
                </div>
              )}
              {details?.projectYear && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Calendar className="w-5 h-5 text-green-600 flex-shrink-0" />
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
                  <Fish className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Species' : 'Види'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {details.projectSpecies}
                    </p>
                  </div>
                </div>
              )}
              {details?.projectStatus && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Zap className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">
                      {locale === 'en' ? 'Status' : 'Статус'}
                    </p>
                    <p className="font-semibold text-neutral-900 text-sm">{details.projectStatus}</p>
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
            <a href={`/${locale}`} className="hover:text-green-600 transition-colors">
              {locale === 'en' ? 'Home' : 'Головна'}
            </a>
            <span>/</span>
            <a href={`/${locale}/projects`} className="hover:text-green-600 transition-colors">
              {locale === 'en' ? 'Projects' : 'Проекти'}
            </a>
            <span>/</span>
            <span className="text-neutral-900 font-medium">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Overview Cards */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {details?.projectClient && (
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                  {locale === 'en' ? 'Client' : 'Клієнт'}
                </h3>
                <p className="text-neutral-700 font-medium">{details.projectClient}</p>
              </div>
            )}
            {details?.projectLocation && (
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                  {locale === 'en' ? 'Location' : 'Місце'}
                </h3>
                <p className="text-neutral-700 font-medium">{details.projectLocation}</p>
              </div>
            )}
            {details?.projectYear && (
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                  {locale === 'en' ? 'Year' : 'Рік'}
                </h3>
                <p className="text-neutral-700 font-medium">{details.projectYear}</p>
              </div>
            )}
            {details?.projectStatus && (
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-neutral-200">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-neutral-900 mb-2 text-sm uppercase tracking-wide">
                  {locale === 'en' ? 'Status' : 'Статус'}
                </h3>
                <p className="text-neutral-700 font-medium">{details.projectStatus}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Specifications Section - Multi-level Structure */}
      {(details?.projectAnnualProduction || details?.projectFacilitySize || details?.projectStandingBiomass || details?.projectWaterVolume || details?.projectSystemComponents || details?.projectWaterTreatment || details?.projectSupportInfrastructure) && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Technical Specifications' : 'Технічні характеристики'}
              </h2>

              {/* Production Capacity */}
              {(details.projectAnnualProduction || details.projectFacilitySize || details.projectStandingBiomass || details.projectWaterVolume) && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {locale === 'en' ? 'Production Capacity' : 'Виробнича потужність'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {details.projectAnnualProduction && (
                      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                        <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
                        <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          {locale === 'en' ? 'Annual Production' : 'Річне виробництво'}
                        </h4>
                        <p className="text-2xl font-bold text-neutral-900">
                          {details.projectAnnualProduction.toLocaleString()}
                          {details.projectProductionUnit && <span className="text-lg text-neutral-600 ml-1">{details.projectProductionUnit}</span>}
                        </p>
                      </div>
                    )}
                    {details.projectFacilitySize && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                        <Building2 className="w-10 h-10 text-blue-600 mb-3" />
                        <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          {locale === 'en' ? 'Facility Size' : 'Розмір об\'єкту'}
                        </h4>
                        <p className="text-2xl font-bold text-neutral-900">
                          {details.projectFacilitySize.toLocaleString()}
                          {details.projectFacilitySizeUnit && <span className="text-lg text-neutral-600 ml-1">{details.projectFacilitySizeUnit}</span>}
                        </p>
                      </div>
                    )}
                    {details.projectStandingBiomass && (
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                        <Fish className="w-10 h-10 text-purple-600 mb-3" />
                        <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          {locale === 'en' ? 'Standing Biomass' : 'Поточна біомаса'}
                        </h4>
                        <p className="text-2xl font-bold text-neutral-900">
                          {details.projectStandingBiomass.toLocaleString()}
                          {details.projectBiomassUnit && <span className="text-lg text-neutral-600 ml-1">{details.projectBiomassUnit}</span>}
                        </p>
                      </div>
                    )}
                    {details.projectWaterVolume && (
                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border border-cyan-200">
                        <Droplets className="w-10 h-10 text-cyan-600 mb-3" />
                        <h4 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                          {locale === 'en' ? 'Water Volume' : 'Об\'єм води'}
                        </h4>
                        <p className="text-2xl font-bold text-neutral-900">
                          {details.projectWaterVolume.toLocaleString()}
                          {details.projectWaterVolumeUnit && <span className="text-lg text-neutral-600 ml-1">{details.projectWaterVolumeUnit}</span>}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* System Components */}
              {details.projectSystemComponents && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {locale === 'en' ? 'System Components' : 'Компоненти системи'}
                  </h3>
                  <div
                    className="prose prose-lg prose-green max-w-none
                      prose-p:text-neutral-700 prose-p:leading-relaxed
                      prose-ul:list-disc prose-ul:pl-6
                      prose-ol:list-decimal prose-ol:pl-6
                      prose-li:text-neutral-700"
                    dangerouslySetInnerHTML={{ __html: details.projectSystemComponents }}
                  />
                </div>
              )}

              {/* Water Treatment Systems */}
              {details.projectWaterTreatment && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {locale === 'en' ? 'Water Treatment Systems' : 'Системи очищення води'}
                  </h3>
                  <div
                    className="prose prose-lg prose-green max-w-none
                      prose-p:text-neutral-700 prose-p:leading-relaxed
                      prose-ul:list-disc prose-ul:pl-6
                      prose-ol:list-decimal prose-ol:pl-6
                      prose-li:text-neutral-700"
                    dangerouslySetInnerHTML={{ __html: details.projectWaterTreatment }}
                  />
                </div>
              )}

              {/* Support Infrastructure */}
              {details.projectSupportInfrastructure && (
                <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {locale === 'en' ? 'Support Infrastructure' : 'Допоміжна інфраструктура'}
                  </h3>
                  <div
                    className="prose prose-lg prose-green max-w-none
                      prose-p:text-neutral-700 prose-p:leading-relaxed
                      prose-ul:list-disc prose-ul:pl-6
                      prose-ol:list-decimal prose-ol:pl-6
                      prose-li:text-neutral-700"
                    dangerouslySetInnerHTML={{ __html: details.projectSupportInfrastructure }}
                  />
                </div>
              )}

              {/* Section 6: Production Biology Details */}
              {(details.biologyTimeline || details.yieldDetails || details.productionParameters) && (
                <div className="mb-8 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-2xl font-bold mb-4 text-neutral-900">
                    {locale === 'en' ? 'Production Biology' : 'Біологія виробництва'}
                  </h3>

                  {details.biologyTimeline && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-neutral-800">
                        {locale === 'en' ? 'Growth Timeline' : 'Часова шкала росту'}
                      </h4>
                      <div
                        className="prose prose-lg prose-green max-w-none
                          prose-p:text-neutral-700 prose-p:leading-relaxed
                          prose-ul:list-disc prose-ul:pl-6
                          prose-ol:list-decimal prose-ol:pl-6
                          prose-li:text-neutral-700"
                        dangerouslySetInnerHTML={{ __html: details.biologyTimeline }}
                      />
                    </div>
                  )}

                  {details.yieldDetails && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-neutral-800">
                        {locale === 'en' ? 'Yield Details' : 'Деталі врожаю'}
                      </h4>
                      <div
                        className="prose prose-lg prose-green max-w-none
                          prose-p:text-neutral-700 prose-p:leading-relaxed
                          prose-ul:list-disc prose-ul:pl-6
                          prose-ol:list-decimal prose-ol:pl-6
                          prose-li:text-neutral-700"
                        dangerouslySetInnerHTML={{ __html: details.yieldDetails }}
                      />
                    </div>
                  )}

                  {details.productionParameters && (
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-neutral-800">
                        {locale === 'en' ? 'Production Parameters' : 'Параметри виробництва'}
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap overflow-x-auto">
                          {details.productionParameters}
                        </pre>
                      </div>
                    </div>
                  )}

                  {!details.biologyTimeline && !details.yieldDetails && !details.productionParameters && (
                    <div className="text-center py-8">
                      <Fish className="w-12 h-12 text-teal-400 mx-auto mb-3 opacity-50" />
                      <p className="text-neutral-600 italic">
                        {locale === 'en' ? 'Biology details coming soon' : 'Біологічні деталі незабаром'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Multi-section Content: Overview -> Challenge -> Solution -> Technical Details -> Results -> Impact */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            {/* Overview */}
            {details?.projectOverview && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Project Overview' : 'Огляд проекту'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectOverview }}
                />
              </div>
            )}

            {/* Challenge */}
            {details?.projectChallenge && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm border-l-4 border-orange-500">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'The Challenge' : 'Виклик'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectChallenge }}
                />
              </div>
            )}

            {/* Solution (legacy field support) */}
            {details?.projectSolution && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-500">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Our Solution' : 'Наше рішення'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectSolution }}
                />
              </div>
            )}

            {/* Technical Details */}
            {details?.projectTechnicalDetails && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Technical Details' : 'Технічні деталі'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectTechnicalDetails }}
                />
              </div>
            )}

            {/* Results */}
            {details?.projectResults && (
              <div className="mb-12 bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-lg border border-green-200">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Results' : 'Результати'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectResults }}
                />
              </div>
            )}

            {/* Impact */}
            {details?.projectImpact && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm border-l-4 border-teal-500">
                <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Impact' : 'Вплив'}
                </h2>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectImpact }}
                />
              </div>
            )}

            {/* WordPress Content (if exists) */}
            {project.content && (
              <div className="mb-12 bg-white p-8 rounded-lg shadow-sm">
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-headings:font-semibold
                    prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
                    prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                    prose-p:text-neutral-700 prose-p:mb-4 prose-p:leading-relaxed
                    prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                    prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700 prose-li:mb-2
                    prose-strong:text-neutral-900 prose-strong:font-semibold
                    prose-img:rounded-lg prose-img:shadow-md"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Technologies Used */}
      {details?.projectTechnologies && details.projectTechnologies.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Technologies Used' : 'Використані технології'}
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {details.projectTechnologies.map((tech, index: number) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow group"
                  >
                    <h3 className="font-bold text-green-700 mb-2 text-lg">{tech.technologyName}</h3>
                    {tech.technologyDescription && (
                      <p className="text-neutral-600 text-sm">{tech.technologyDescription}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Performance Metrics - Enhanced */}
      {details?.projectPerformanceMetrics && details.projectPerformanceMetrics.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Performance Metrics' : 'Показники ефективності'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.projectPerformanceMetrics.map((metric, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-lg shadow-md border-2 border-teal-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="w-8 h-8 text-teal-600" />
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-semibold">
                        {locale === 'en' ? 'Metric' : 'Метрика'}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-3">
                      {metric.metricName}
                    </h3>
                    <p className="text-4xl font-bold text-neutral-900">
                      {metric.metricValue}
                      {metric.metricUnit && <span className="text-xl text-neutral-600 ml-2">{metric.metricUnit}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Performance Metrics Block */}
              {details.projectMetricsBlock && (
                <div className="mt-8 bg-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    {locale === 'en' ? 'Key Performance Metrics' : 'Ключові показники'}
                  </h3>
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap overflow-x-auto">
                    {details.projectMetricsBlock}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 1: Project Significance - Moved outside article */}
      {details?.projectSignificance && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                {locale === 'en' ? 'Project Significance' : 'Значення проекту'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                  <Sparkles className="w-10 h-10 text-yellow-600 mb-3" />
                  <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wide">
                    {locale === 'en' ? 'Innovation' : 'Інновація'}
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <Globe className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wide">
                    {locale === 'en' ? 'Global Impact' : 'Глобальний вплив'}
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                  <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wide">
                    {locale === 'en' ? 'Growth' : 'Зростання'}
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <Award className="w-10 h-10 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-neutral-800 text-sm uppercase tracking-wide">
                    {locale === 'en' ? 'Excellence' : 'Досконалість'}
                  </h3>
                </div>
              </div>
              <div
                className="prose prose-lg prose-green max-w-none
                  prose-p:text-neutral-700 prose-p:leading-relaxed
                  prose-ul:list-disc prose-ul:pl-6
                  prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-neutral-700"
                dangerouslySetInnerHTML={{ __html: details.projectSignificance }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Design Services Delivered */}
      {(details?.designServices || details?.totalDesignCost) && (
        <section className="section bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-neutral-900">
                  {locale === 'en' ? 'Design Services Delivered' : 'Надані послуги з проектування'}
                </h2>
              </div>

              {details.designServices && details.designServices.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-green-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">
                            {locale === 'en' ? 'Service Name' : 'Назва послуги'}
                          </th>
                          <th className="px-6 py-4 text-left font-semibold">
                            {locale === 'en' ? 'Timeline' : 'Термін'}
                          </th>
                          <th className="px-6 py-4 text-right font-semibold">
                            {locale === 'en' ? 'Cost' : 'Вартість'}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {details.designServices.map((service: any, index: number) => (
                          <tr key={index} className="hover:bg-neutral-50 transition-colors">
                            <td className="px-6 py-4 text-neutral-900 font-medium">{service.serviceName}</td>
                            <td className="px-6 py-4 text-neutral-600">{service.timeline}</td>
                            <td className="px-6 py-4 text-neutral-900 font-semibold text-right">
                              {service.cost ? `$${service.cost.toLocaleString()}` : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      {details.totalDesignCost && (
                        <tfoot className="bg-green-50">
                          <tr>
                            <td colSpan={2} className="px-6 py-4 text-right font-bold text-neutral-900">
                              {locale === 'en' ? 'Total Design Cost:' : 'Загальна вартість проектування:'}
                            </td>
                            <td className="px-6 py-4 text-right text-xl font-bold text-green-600">
                              ${details.totalDesignCost.toLocaleString()}
                            </td>
                          </tr>
                        </tfoot>
                      )}
                    </table>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center shadow-md">
                  <Briefcase className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <p className="text-neutral-600 text-lg">
                    {locale === 'en' ? 'Design services details coming soon' : 'Деталі послуг з проектування незабаром'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: Current Operational Status */}
      {(details?.currentStatus || details?.nextSteps) && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Current Operational Status' : 'Поточний операційний статус'}
              </h2>

              <div className="bg-white rounded-lg shadow-md p-8 border border-neutral-200">
                {/* Status Badge */}
                <div className="flex justify-center mb-8">
                  <div className={`px-8 py-4 rounded-full font-bold text-xl border-2 ${getStatusBadgeClasses(details.currentStatus || 'TBD')}`}>
                    {locale === 'en' ? 'Status:' : 'Статус:'} {details.currentStatus || 'TBD'}
                  </div>
                </div>

                {/* Timeline Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-semibold ${details.currentStatus === 'Planning' ? 'text-blue-600' : 'text-neutral-400'}`}>
                      {locale === 'en' ? 'Planning' : 'Планування'}
                    </span>
                    <span className={`text-sm font-semibold ${details.currentStatus === 'Design' ? 'text-purple-600' : 'text-neutral-400'}`}>
                      {locale === 'en' ? 'Design' : 'Проектування'}
                    </span>
                    <span className={`text-sm font-semibold ${details.currentStatus === 'Construction' ? 'text-orange-600' : 'text-neutral-400'}`}>
                      {locale === 'en' ? 'Construction' : 'Будівництво'}
                    </span>
                    <span className={`text-sm font-semibold ${details.currentStatus === 'Operational' ? 'text-green-600' : 'text-neutral-400'}`}>
                      {locale === 'en' ? 'Operational' : 'Експлуатація'}
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        details.currentStatus === 'Planning' ? 'w-1/4 bg-blue-500' :
                        details.currentStatus === 'Design' ? 'w-1/2 bg-purple-500' :
                        details.currentStatus === 'Construction' ? 'w-3/4 bg-orange-500' :
                        details.currentStatus === 'Operational' ? 'w-full bg-green-500' :
                        'w-0 bg-neutral-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Next Steps */}
                {details.nextSteps && details.nextSteps.length > 0 ? (
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-neutral-900">
                      {locale === 'en' ? 'Next Steps' : 'Наступні кроки'}
                    </h3>
                    <ul className="space-y-3">
                      {details.nextSteps.map((step: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-neutral-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-neutral-500 italic">
                      {locale === 'en' ? 'Next steps to be determined' : 'Наступні кроки будуть визначені'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Market Context */}
      {(details?.marketContext || details?.marketChallenges) && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Market Context' : 'Ринковий контекст'}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Market Context */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-blue-500 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold text-blue-900">
                      {locale === 'en' ? 'Market Context' : 'Ринковий контекст'}
                    </h3>
                  </div>
                  {details.marketContext ? (
                    <div
                      className="prose prose-lg prose-blue max-w-none
                        prose-p:text-neutral-700 prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-6
                        prose-li:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: details.marketContext }}
                    />
                  ) : (
                    <p className="text-neutral-600 italic">
                      {locale === 'en' ? 'Market context details coming soon' : 'Деталі ринкового контексту незабаром'}
                    </p>
                  )}
                </div>

                {/* Market Challenges */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-orange-500 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                    <h3 className="text-2xl font-bold text-orange-900">
                      {locale === 'en' ? 'Challenges' : 'Виклики'}
                    </h3>
                  </div>
                  {details.marketChallenges ? (
                    <div
                      className="prose prose-lg prose-orange max-w-none
                        prose-p:text-neutral-700 prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-6
                        prose-li:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: details.marketChallenges }}
                    />
                  ) : (
                    <p className="text-neutral-600 italic">
                      {locale === 'en' ? 'Market challenges details coming soon' : 'Деталі ринкових викликів незабаром'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Project Impact Summary */}
      {(details?.economicImpact || details?.environmentalImpact || details?.socialImpact) && (
        <section className="section bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Project Impact' : 'Вплив проекту'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Economic Impact */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="w-10 h-10 text-green-600" />
                    <h3 className="text-xl font-bold text-neutral-900">
                      {locale === 'en' ? 'Economic' : 'Економічний'}
                    </h3>
                  </div>
                  {details.economicImpact ? (
                    <div
                      className="prose prose-green max-w-none
                        prose-p:text-neutral-700 prose-p:text-sm prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-5 prose-ul:text-sm
                        prose-li:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: details.economicImpact }}
                    />
                  ) : (
                    <p className="text-neutral-500 text-sm italic">
                      {locale === 'en' ? 'Economic impact details coming soon' : 'Деталі економічного впливу незабаром'}
                    </p>
                  )}
                  {details.jobsCreated && (
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <p className="text-2xl font-bold text-green-600">{details.jobsCreated}+</p>
                      <p className="text-sm text-neutral-600">
                        {locale === 'en' ? 'Jobs Created' : 'Створено робочих місць'}
                      </p>
                    </div>
                  )}
                </div>

                {/* Environmental Impact */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-10 h-10 text-teal-600" />
                    <h3 className="text-xl font-bold text-neutral-900">
                      {locale === 'en' ? 'Environmental' : 'Екологічний'}
                    </h3>
                  </div>
                  {details.environmentalImpact ? (
                    <div
                      className="prose prose-teal max-w-none
                        prose-p:text-neutral-700 prose-p:text-sm prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-5 prose-ul:text-sm
                        prose-li:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: details.environmentalImpact }}
                    />
                  ) : (
                    <p className="text-neutral-500 text-sm italic">
                      {locale === 'en' ? 'Environmental impact details coming soon' : 'Деталі екологічного впливу незабаром'}
                    </p>
                  )}
                </div>

                {/* Social Impact */}
                <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                    <h3 className="text-xl font-bold text-neutral-900">
                      {locale === 'en' ? 'Social' : 'Соціальний'}
                    </h3>
                  </div>
                  {details.socialImpact ? (
                    <div
                      className="prose prose-blue max-w-none
                        prose-p:text-neutral-700 prose-p:text-sm prose-p:leading-relaxed
                        prose-ul:list-disc prose-ul:pl-5 prose-ul:text-sm
                        prose-li:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: details.socialImpact }}
                    />
                  ) : (
                    <p className="text-neutral-500 text-sm italic">
                      {locale === 'en' ? 'Social impact details coming soon' : 'Деталі соціального впливу незабаром'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financial Performance */}
      {details.projectCapex && (
        <section className="section">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <DollarSign className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold">
                {locale === 'en' ? 'Financial Performance' : 'Фінансові показники'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CAPEX */}
              {details.projectCapex && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Capital Expenditure' : 'Капітальні витрати'}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {details.projectCapexCurrency || 'USD'} {details.projectCapex.toLocaleString()}
                  </div>
                </div>
              )}

              {/* OPEX */}
              {details.projectOpexAnnual && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Annual Operating Expenses' : 'Річні операційні витрати'}
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {details.projectCapexCurrency || 'USD'} {details.projectOpexAnnual.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Production Cost */}
              {details.projectProductionCost && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-purple-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Production Cost' : 'Собівартість'}
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    {details.projectProductionCost}
                  </div>
                </div>
              )}

              {/* Revenue */}
              {details.projectRevenueAnnual && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Annual Revenue' : 'Річний дохід'}
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {details.projectCapexCurrency || 'USD'} {details.projectRevenueAnnual.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Profit */}
              {details.projectProfitAnnual && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-emerald-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Annual Profit' : 'Річний прибуток'}
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {details.projectCapexCurrency || 'USD'} {details.projectProfitAnnual.toLocaleString()}
                  </div>
                </div>
              )}

              {/* Profit Margin */}
              {details.projectProfitMargin && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-teal-500 shadow-md">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Profit Margin' : 'Маржа прибутку'}
                  </div>
                  <div className="text-2xl font-bold text-teal-600">
                    {details.projectProfitMargin}
                  </div>
                </div>
              )}

              {/* ROI */}
              {details.projectRoi && (
                <div className="bg-white rounded-lg p-6 border-l-4 border-indigo-500 shadow-md col-span-full md:col-span-1">
                  <div className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Return on Investment' : 'Окупність'}
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {details.projectRoi}
                  </div>
                </div>
              )}
            </div>

            {/* Financial Notes */}
            {details.projectFinancialNotes && (
              <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-3">
                  {locale === 'en' ? 'Financial Notes' : 'Фінансові примітки'}
                </h3>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: details.projectFinancialNotes }} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Engineering Challenges Section - NEW */}
      {details?.projectChallenges && details.projectChallenges.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Engineering Challenges & Solutions' : 'Інженерні виклики та рішення'}
              </h2>
              <div className="space-y-6">
                {details.projectChallenges.map((challenge, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900">{challenge.challengeTitle}</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Problem */}
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                          <div className="flex items-center gap-3 mb-3">
                            <AlertCircle className="w-6 h-6 text-orange-600" />
                            <h4 className="text-lg font-bold text-orange-900">
                              {locale === 'en' ? 'Problem' : 'Проблема'}
                            </h4>
                          </div>
                          <p className="text-neutral-700 leading-relaxed">{challenge.challengeProblem}</p>
                        </div>

                        {/* Solution */}
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                          <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                            <h4 className="text-lg font-bold text-green-900">
                              {locale === 'en' ? 'Solution' : 'Рішення'}
                            </h4>
                          </div>
                          <p className="text-neutral-700 leading-relaxed">{challenge.challengeSolution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Innovations */}
      {details?.projectInnovations && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
              <h2 className="text-3xl font-bold mb-4 text-neutral-900">
                {locale === 'en' ? 'Key Innovations' : 'Ключові інновації'}
              </h2>
              <div
                className="prose prose-lg prose-green max-w-none
                  prose-p:text-neutral-700 prose-p:leading-relaxed
                  prose-ul:list-disc prose-ul:pl-6
                  prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-neutral-700"
                dangerouslySetInnerHTML={{ __html: details.projectInnovations }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section - NEW */}
      {details?.projectDeliverables && details.projectDeliverables.length > 0 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Project Deliverables' : 'Результати проекту'}
              </h2>
              <div className="space-y-6">
                {details.projectDeliverables.map((deliverable, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                      <CheckSquare className="w-6 h-6 text-green-600" />
                      {deliverable.deliverableCategory}
                    </h3>
                    <div
                      className="prose prose-green max-w-none
                        prose-ul:list-none prose-ul:pl-0
                        prose-li:flex prose-li:items-start prose-li:gap-3 prose-li:mb-2
                        prose-li:before:content-['✅'] prose-li:before:flex-shrink-0
                        prose-p:text-neutral-700"
                      dangerouslySetInnerHTML={{ __html: deliverable.deliverableItems }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Environmental Benefits Section - NEW */}
      {details?.projectEnvironmentalBenefits && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-50 p-8 rounded-lg shadow-sm border-l-4 border-green-600">
                <div className="flex items-center gap-4 mb-6">
                  <Leaf className="w-10 h-10 text-green-600" />
                  <h2 className="text-3xl font-bold text-neutral-900">
                    {locale === 'en' ? 'Environmental Benefits' : 'Екологічні переваги'}
                  </h2>
                </div>
                <div
                  className="prose prose-lg prose-green max-w-none
                    prose-p:text-neutral-700 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:pl-6
                    prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-700"
                  dangerouslySetInnerHTML={{ __html: details.projectEnvironmentalBenefits }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Timeline */}
      {(details?.projectStartDate || details?.projectCompletionDate) && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Project Timeline' : 'Часова шкала проекту'}
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                  {details.projectStartDate && (
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                        {locale === 'en' ? 'Start Date' : 'Дата початку'}
                      </h3>
                      <p className="text-xl font-bold text-neutral-900">
                        {new Date(details.projectStartDate).toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  {details.projectStartDate && details.projectCompletionDate && (
                    <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-green-600 to-teal-600"></div>
                  )}
                  {details.projectCompletionDate && (
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide mb-2">
                        {locale === 'en' ? 'Completion Date' : 'Дата завершення'}
                      </h3>
                      <p className="text-xl font-bold text-neutral-900">
                        {new Date(details.projectCompletionDate).toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Phases */}
      {details?.projectPhases && details.projectPhases.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Project Phases' : 'Фази проекту'}
              </h2>
              <div className="space-y-6">
                {details.projectPhases.map((phase, index: number) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 sm:mb-0">{phase.phaseName}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getPhaseStatusClasses(phase.phaseStatus)}`}>
                        {phase.phaseStatus}
                      </span>
                    </div>
                    {phase.phaseDescription && (
                      <p className="text-neutral-700">{phase.phaseDescription}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Species Information */}
      {details?.projectSpecies && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Fish Species' : 'Види риб'}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <span
                  className="px-6 py-3 bg-white border-2 border-green-600 text-green-800 rounded-full font-semibold text-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {details.projectSpecies}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {details?.projectGallery && details.projectGallery.length > 0 && (
        <section className="section">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-neutral-900 text-center">
                {locale === 'en' ? 'Project Gallery' : 'Галерея проекту'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.projectGallery.slice(0, 10).map((image, index: number) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <Image
                      src={image.sourceUrl}
                      alt={image.altText || `Project gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {details?.projectTestimonial && (
        <section className="section bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-10 rounded-lg shadow-lg border-l-4 border-green-600">
                <svg className="h-10 w-10 text-green-600 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-neutral-700 text-xl italic leading-relaxed mb-6">
                  &ldquo;{details.projectTestimonial}&rdquo;
                </blockquote>
                {(details.projectTestimonialAuthor || details.projectTestimonialTitle) && (
                  <div className="border-t border-neutral-200 pt-4">
                    {details.projectTestimonialAuthor && (
                      <p className="font-bold text-neutral-900">{details.projectTestimonialAuthor}</p>
                    )}
                    {details.projectTestimonialTitle && (
                      <p className="text-neutral-600">{details.projectTestimonialTitle}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">
              {locale === 'en'
                ? 'Interested in Similar Solutions?'
                : 'Зацікавлені в подібних рішеннях?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Let us help you achieve the same level of success with your aquaculture project.'
                : 'Дозвольте нам допомогти вам досягти такого ж рівня успіху з вашим проектом аквакультури.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/contact`} className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors">
                {t('getQuote')}
              </a>
              <a href={`/${locale}/projects`} className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                {locale === 'en' ? 'View All Projects' : 'Переглянути всі проекти'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
