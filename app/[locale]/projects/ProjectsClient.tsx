'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Calendar, Fish, Building2, CheckCircle, Clock } from 'lucide-react';
import { getOptimizedImageUrl } from '@/lib/image-url';

interface ProjectDetails {
  projectClient?: string;
  projectLocation?: string;
  projectYear?: string;
  projectStatus?: string;
  projectSystemType?: string;
  projectSpecies?: string;
  projectCapacity?: string;
  projectFeatured?: boolean;
}

interface Project {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  uri?: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  projectMeta?: ProjectDetails;
  translations?: Array<{
    slug?: string;
    featuredImage?: {
      node?: {
        sourceUrl?: string;
        altText?: string;
      };
    };
    language?: {
      code?: string;
    };
  }>;
}

type Props = {
  projects: Project[];
  locale: string;
};

// Status badge colors
const getStatusBadge = (status?: string) => {
  const statusMap: Record<string, { label: string; labelUk: string; color: string }> = {
    'planning': { label: 'Planning', labelUk: 'Планування', color: 'bg-blue-100 text-blue-800' },
    'in_progress': { label: 'In Progress', labelUk: 'В процесі', color: 'bg-yellow-100 text-yellow-800' },
    'completed': { label: 'Completed', labelUk: 'Завершено', color: 'bg-green-100 text-green-800' },
    'operational': { label: 'Operational', labelUk: 'Працює', color: 'bg-teal-100 text-teal-800' },
  };
  return statusMap[status || ''] || null;
};

// System type badge colors
const getSystemTypeBadge = (systemType?: string) => {
  const typeMap: Record<string, { label: string; color: string }> = {
    'ras': { label: 'RAS', color: 'bg-cyan-100 text-cyan-800' },
    'hfts': { label: 'HFTS', color: 'bg-purple-100 text-purple-800' },
    'biofloc': { label: 'Biofloc', color: 'bg-emerald-100 text-emerald-800' },
    'hybrid': { label: 'Hybrid', color: 'bg-indigo-100 text-indigo-800' },
    'flow_through': { label: 'Flow-Through', color: 'bg-blue-100 text-blue-800' },
    'pond': { label: 'Pond', color: 'bg-green-100 text-green-800' },
  };
  return typeMap[systemType || ''] || null;
};

export default function ProjectsClient({ projects, locale }: Props) {
  // Get featured image - fallback to translation's image if main doesn't have one
  const getProjectImage = (project: Project) => {
    if (project.featuredImage?.node?.sourceUrl) {
      return project.featuredImage.node;
    }
    const translationWithImage = project.translations?.find(t => t.featuredImage?.node?.sourceUrl);
    return translationWithImage?.featuredImage?.node;
  };

  // Strip HTML tags from excerpt
  const cleanExcerpt = (excerpt?: string) => {
    if (!excerpt) return '';
    return excerpt.replace(/<[^>]*>/g, '').trim();
  };

  return (
    <>
      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          {projects.length === 0 ? (
            <div className="text-center py-12 bg-neutral-50 rounded-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {locale === 'en' ? 'No projects found' : 'Проектів не знайдено'}
              </h3>
              <p className="text-neutral-600 mb-6">
                {locale === 'en'
                  ? 'Projects will appear here once added.'
                  : 'Проекти з\'являться тут після додавання.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const image = getProjectImage(project);
                const excerpt = cleanExcerpt(project.excerpt);
                const details = project.projectMeta;
                const statusBadge = getStatusBadge(details?.projectStatus);
                const systemTypeBadge = getSystemTypeBadge(details?.projectSystemType);

                return (
                  <Link key={project.id} href={`/${locale}/projects/${project.slug}`}>
                    <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col relative group">
                      {/* Featured Badge */}
                      {details?.projectFeatured && (
                        <div className="absolute top-3 left-3 z-10 bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {locale === 'en' ? 'Featured' : 'Рекомендовано'}
                        </div>
                      )}

                      {/* Featured Image */}
                      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                        {image?.sourceUrl ? (
                          <Image
                            src={getOptimizedImageUrl(image.sourceUrl)}
                            alt={image.altText || project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10">
                            <Building2 className="w-16 h-16 text-neutral-300" />
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {systemTypeBadge && (
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${systemTypeBadge.color}`}>
                              {systemTypeBadge.label}
                            </span>
                          )}
                          {statusBadge && (
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.color} flex items-center gap-1`}>
                              {details?.projectStatus === 'completed' || details?.projectStatus === 'operational' ? (
                                <CheckCircle className="w-3 h-3" />
                              ) : (
                                <Clock className="w-3 h-3" />
                              )}
                              {locale === 'en' ? statusBadge.label : statusBadge.labelUk}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-neutral-900 group-hover:text-brand-secondary transition-colors line-clamp-2">
                          {project.title}
                        </h3>

                        {/* Project Meta */}
                        <div className="flex flex-wrap gap-3 text-sm text-neutral-600 mb-3">
                          {details?.projectLocation && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-brand-secondary" />
                              {details.projectLocation}
                            </span>
                          )}
                          {details?.projectYear && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 text-brand-secondary" />
                              {details.projectYear}
                            </span>
                          )}
                        </div>

                        {/* Species & Capacity */}
                        {(details?.projectSpecies || details?.projectCapacity) && (
                          <div className="flex flex-wrap gap-3 text-sm text-neutral-600 mb-3">
                            {details?.projectSpecies && (
                              <span className="flex items-center gap-1">
                                <Fish className="w-4 h-4 text-brand-secondary" />
                                {details.projectSpecies}
                              </span>
                            )}
                            {details?.projectCapacity && (
                              <span className="text-brand-primary font-medium">
                                {details.projectCapacity}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Description */}
                        {excerpt && (
                          <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-grow">
                            {excerpt}
                          </p>
                        )}

                        {/* View Details Button */}
                        <button className="w-full mt-auto px-4 py-3 border-2 border-brand-secondary text-brand-secondary rounded-lg font-semibold hover:bg-brand-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                          {locale === 'en' ? 'View Project Details' : 'Деталі проекту'}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
