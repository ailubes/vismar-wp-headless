'use client';

import { useState, useMemo } from 'react';
import type { WPProject } from '@/lib/wordpress/types';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

type Props = {
  projects: WPProject[];
  locale: string;
};

export default function ProjectsClient({ projects, locale }: Props) {
  // Filter states
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedSystemType, setSelectedSystemType] = useState<string>('All');

  // Apply filters with useMemo for performance
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by status
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(
        project => {
          const status = project.projectDetails?.projectStatus;
          return Array.isArray(status) ? status.includes(selectedStatus) : status === selectedStatus;
        }
      );
    }

    // Filter by system type
    if (selectedSystemType !== 'All') {
      filtered = filtered.filter(
        project => {
          const systemType = project.technicalSpecifications?.projectSystemType;
          return Array.isArray(systemType) ? systemType.includes(selectedSystemType) : systemType === selectedSystemType;
        }
      );
    }

    return filtered;
  }, [projects, selectedStatus, selectedSystemType]);

  // Get status badge color
  const getStatusBadgeColor = (status?: string) => {
    switch (status) {
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      case 'Design':
        return 'bg-purple-100 text-purple-800';
      case 'Construction':
        return 'bg-orange-100 text-orange-800';
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get system type badge color
  const getSystemTypeBadgeColor = (systemType?: string) => {
    switch (systemType) {
      case 'RAS':
        return 'bg-cyan-100 text-cyan-800';
      case 'Biofloc':
        return 'bg-emerald-100 text-emerald-800';
      case 'Hybrid':
        return 'bg-indigo-100 text-indigo-800';
      case 'Flow-through':
        return 'bg-blue-100 text-blue-800';
      case 'IMTA':
        return 'bg-green-100 text-green-800';
      case 'Other':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Filters Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Status Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                {locale === 'en' ? 'Filter by Status' : 'Фільтр за статусом'}
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="All">{locale === 'en' ? 'All Statuses' : 'Всі статуси'}</option>
                <option value="Planning">{locale === 'en' ? 'Planning' : 'Планування'}</option>
                <option value="Design">{locale === 'en' ? 'Design' : 'Проектування'}</option>
                <option value="Construction">{locale === 'en' ? 'Construction' : 'Будівництво'}</option>
                <option value="Operational">{locale === 'en' ? 'Operational' : 'Операційний'}</option>
                <option value="Completed">{locale === 'en' ? 'Completed' : 'Завершено'}</option>
              </select>
            </div>

            {/* System Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                {locale === 'en' ? 'Filter by System Type' : 'Фільтр за типом системи'}
              </label>
              <select
                value={selectedSystemType}
                onChange={(e) => setSelectedSystemType(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="All">{locale === 'en' ? 'All Systems' : 'Всі системи'}</option>
                <option value="RAS">RAS</option>
                <option value="Biofloc">Biofloc</option>
                <option value="Hybrid">{locale === 'en' ? 'Hybrid' : 'Гібридна'}</option>
                <option value="Flow-through">{locale === 'en' ? 'Flow-through' : 'Проточна'}</option>
                <option value="IMTA">IMTA</option>
                <option value="Other">{locale === 'en' ? 'Other' : 'Інше'}</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-neutral-600 mb-4">
            <p>
              {locale === 'en'
                ? `Showing ${filteredProjects.length} of ${projects.length} projects`
                : `Показано ${filteredProjects.length} з ${projects.length} проектів`}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            // Empty State
            <div className="text-center py-12 bg-neutral-50 rounded-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {locale === 'en' ? 'No projects found' : 'Проектів не знайдено'}
              </h3>
              <p className="text-neutral-600 mb-6">
                {locale === 'en'
                  ? 'Try adjusting your filters to see more results.'
                  : 'Спробуйте змінити фільтри, щоб побачити більше результатів.'}
              </p>
              <button
                onClick={() => {
                  setSelectedStatus('All');
                  setSelectedSystemType('All');
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {locale === 'en' ? 'Clear Filters' : 'Очистити фільтри'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/${locale}/projects/${project.slug}`}>
                  <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col relative group">
                    {/* Status Badge - Top Right Corner */}
                    {project.projectDetails?.projectStatus && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                          Array.isArray(project.projectDetails.projectStatus)
                            ? project.projectDetails.projectStatus[0]
                            : project.projectDetails.projectStatus
                        )}`}>
                          {Array.isArray(project.projectDetails.projectStatus)
                            ? project.projectDetails.projectStatus[0]
                            : project.projectDetails.projectStatus}
                        </span>
                      </div>
                    )}

                    {/* Featured Image */}
                    {project.featuredImage?.node?.sourceUrl && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={project.featuredImage.node.sourceUrl}
                          alt={project.featuredImage.node.altText || project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-green-600 transition-colors">
                        {project.title}
                      </h3>

                      {/* System Type Badge */}
                      {project.technicalSpecifications?.projectSystemType && (
                        <div className="mb-3">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSystemTypeBadgeColor(
                            Array.isArray(project.technicalSpecifications.projectSystemType)
                              ? project.technicalSpecifications.projectSystemType[0]
                              : project.technicalSpecifications.projectSystemType
                          )}`}>
                            {Array.isArray(project.technicalSpecifications.projectSystemType)
                              ? project.technicalSpecifications.projectSystemType[0]
                              : project.technicalSpecifications.projectSystemType}
                          </span>
                        </div>
                      )}

                      {/* Species */}
                      {project.technicalSpecifications?.projectSpeciesText && (
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-semibold">Species:</span>{' '}
                          <span dangerouslySetInnerHTML={{ __html: project.technicalSpecifications.projectSpeciesText }} />
                        </p>
                      )}

                      {/* Production Capacity */}
                      {project.technicalSpecifications?.projectAnnualProduction && (
                        <p className="text-sm text-green-700 font-semibold mb-2">
                          <span className="inline-flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {project.technicalSpecifications.projectAnnualProduction.toLocaleString()}{' '}
                            {project.technicalSpecifications.projectProductionUnit || 'MT'}/year
                          </span>
                        </p>
                      )}

                      {/* Client */}
                      {project.projectDetails?.projectClient && (
                        <p className="text-sm text-neutral-600 mb-2">
                          <span className="font-semibold">
                            {locale === 'en' ? 'Client:' : 'Клієнт:'}
                          </span>{' '}
                          {project.projectDetails.projectClient}
                        </p>
                      )}

                      {/* Location */}
                      {project.projectDetails?.projectLocation && (
                        <p className="text-sm text-neutral-600 mb-2">
                          <span className="font-semibold">
                            {locale === 'en' ? 'Location:' : 'Місце:'}
                          </span>{' '}
                          {project.projectDetails.projectLocation}
                        </p>
                      )}

                      {/* Year */}
                      {project.projectDetails?.projectYear && (
                        <p className="text-sm text-neutral-600 mb-3">
                          <span className="font-semibold">
                            {locale === 'en' ? 'Year:' : 'Рік:'}
                          </span>{' '}
                          {project.projectDetails.projectYear}
                        </p>
                      )}

                      {/* Annual Production Badge */}
                      {project.technicalSpecifications?.projectAnnualProduction && (
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-200">
                            {project.technicalSpecifications.projectAnnualProduction}{' '}
                            {project.technicalSpecifications.projectProductionUnit || 't/year'}
                          </span>
                        </div>
                      )}

                      {/* Excerpt/Description */}
                      {(project.excerpt || project.projectContentSections?.projectSolution) && (
                        <p className="text-neutral-700 mb-4 flex-1 line-clamp-3">
                          {project.excerpt
                            ? project.excerpt.replace(/<[^>]*>/g, '')
                            : project.projectContentSections?.projectSolution?.substring(0, 150)}
                          {project.projectContentSections?.projectSolution &&
                           project.projectContentSections.projectSolution.length > 150 ? '...' : ''}
                        </p>
                      )}

                      {/* View Project Link */}
                      <div className="mt-auto">
                        <span className="text-green-600 hover:underline font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                          {locale === 'en' ? 'View Project' : 'Переглянути проект'} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
