'use client';

import { useState, useMemo } from 'react';
import type { WPProject } from '@/lib/wordpress/types';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, DollarSign, MapPin, ArrowRight, CheckCircle, Clock, Wrench } from 'lucide-react';

type Props = {
  projects: WPProject[];
  locale: string;
};

export default function ProjectsClient({ projects, locale }: Props) {
  // Filter states
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedSystemType, setSelectedSystemType] = useState<string>('All');
  const [selectedSpecies, setSelectedSpecies] = useState<string>('All Species');
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');

  // Helper function to extract unique species from projects
  const getUniqueSpecies = (projects: WPProject[]): string[] => {
    const speciesSet = new Set<string>();
    projects.forEach(project => {
      const speciesText = project.technicalSpecifications?.projectSpeciesText;
      if (speciesText) {
        // Split by common delimiters and clean up
        const species = speciesText.split(/[,;&/]/).map(s => s.trim()).filter(s => s.length > 0);
        species.forEach(s => speciesSet.add(s));
      }
    });
    return Array.from(speciesSet).sort();
  };

  // Helper function to extract unique regions/countries from project locations
  const getUniqueRegions = (projects: WPProject[]): string[] => {
    const regionsSet = new Set<string>();
    projects.forEach(project => {
      const location = project.projectDetails?.projectLocation;
      if (location) {
        // Extract country (usually the last part after the last comma)
        const parts = location.split(',').map(p => p.trim());
        if (parts.length > 0) {
          const country = parts[parts.length - 1];
          if (country) {
            regionsSet.add(country);
          }
        }
      }
    });
    return Array.from(regionsSet).sort();
  };

  // Get unique values for dropdowns
  const uniqueSpecies = getUniqueSpecies(projects);
  const uniqueRegions = getUniqueRegions(projects);

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

    // Filter by species
    if (selectedSpecies !== 'All Species') {
      filtered = filtered.filter(
        project => {
          const speciesText = project.technicalSpecifications?.projectSpeciesText;
          if (!speciesText) return false;
          // Case-insensitive check if the species text contains the selected species
          return speciesText.toLowerCase().includes(selectedSpecies.toLowerCase());
        }
      );
    }

    // Filter by region/country
    if (selectedRegion !== 'All Regions') {
      filtered = filtered.filter(
        project => {
          const location = project.projectDetails?.projectLocation;
          if (!location) return false;
          // Case-insensitive check if the location contains the selected region
          return location.toLowerCase().includes(selectedRegion.toLowerCase());
        }
      );
    }

    return filtered;
  }, [projects, selectedStatus, selectedSystemType, selectedSpecies, selectedRegion]);

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

  // Get country flag emoji
  const getCountryFlag = (location?: string): string => {
    if (!location) return '';
    const lowerLocation = location.toLowerCase();
    if (lowerLocation.includes('ukraine') || lowerLocation.includes('україн')) return '🇺🇦';
    if (lowerLocation.includes('usa') || lowerLocation.includes('united states')) return '🇺🇸';
    if (lowerLocation.includes('canada')) return '🇨🇦';
    if (lowerLocation.includes('norway')) return '🇳🇴';
    if (lowerLocation.includes('denmark')) return '🇩🇰';
    if (lowerLocation.includes('netherlands')) return '🇳🇱';
    if (lowerLocation.includes('germany')) return '🇩🇪';
    if (lowerLocation.includes('poland')) return '🇵🇱';
    if (lowerLocation.includes('france')) return '🇫🇷';
    if (lowerLocation.includes('spain')) return '🇪🇸';
    if (lowerLocation.includes('italy')) return '🇮🇹';
    if (lowerLocation.includes('uk') || lowerLocation.includes('united kingdom')) return '🇬🇧';
    if (lowerLocation.includes('china')) return '🇨🇳';
    if (lowerLocation.includes('japan')) return '🇯🇵';
    if (lowerLocation.includes('singapore')) return '🇸🇬';
    if (lowerLocation.includes('australia')) return '🇦🇺';
    return '🌍';
  };

  // Get status icon component
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'Operational':
      case 'Completed':
        return <CheckCircle className="w-3 h-3 inline mr-1" />;
      case 'Construction':
        return <Wrench className="w-3 h-3 inline mr-1" />;
      case 'Planning':
      case 'Design':
        return <Clock className="w-3 h-3 inline mr-1" />;
      default:
        return null;
    }
  };

  // Format currency
  const formatCurrency = (amount: number, currency?: string): string => {
    const currencySymbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency || '$';
    if (amount >= 1000000) {
      return `${currencySymbol}${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `${currencySymbol}${(amount / 1000).toFixed(0)}K`;
    }
    return `${currencySymbol}${amount.toLocaleString()}`;
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

            {/* Species Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                {locale === 'en' ? 'Filter by Species' : 'Фільтр за видами'}
              </label>
              <select
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="All Species">{locale === 'en' ? 'All Species' : 'Всі види'}</option>
                {uniqueSpecies.map(species => (
                  <option key={species} value={species}>
                    {species}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                {locale === 'en' ? 'Filter by Region' : 'Фільтр за регіонами'}
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="All Regions">{locale === 'en' ? 'All Regions' : 'Всі регіони'}</option>
                {uniqueRegions.map(region => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
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
                  setSelectedSpecies('All Species');
                  setSelectedRegion('All Regions');
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {locale === 'en' ? 'Clear Filters' : 'Очистити фільтри'}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const status = Array.isArray(project.projectDetails?.projectStatus)
                  ? project.projectDetails.projectStatus[0]
                  : project.projectDetails?.projectStatus;
                const systemType = Array.isArray(project.technicalSpecifications?.projectSystemType)
                  ? project.technicalSpecifications.projectSystemType[0]
                  : project.technicalSpecifications?.projectSystemType;
                const hasFinancialData =
                  project.financialPerformance?.projectCapex ||
                  project.financialPerformance?.projectRoi ||
                  project.financialPerformance?.projectRevenueAnnual;

                return (
                  <Link key={project.id} href={`/${locale}/projects/${project.slug}`}>
                    <div className="border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col relative group">
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
                        {/* Badges at Top */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {/* System Type Badge */}
                          {systemType && (
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSystemTypeBadgeColor(systemType)}`}>
                              {systemType}
                            </span>
                          )}
                          {/* Status Badge */}
                          {status && (
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center ${getStatusBadgeColor(status)}`}>
                              {getStatusIcon(status)}
                              {status}
                            </span>
                          )}
                        </div>

                        {/* Title with Flag */}
                        <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {getCountryFlag(project.projectDetails?.projectLocation)} {project.title}
                        </h3>

                        {/* Location with Icon */}
                        {project.projectDetails?.projectLocation && (
                          <p className="text-sm text-neutral-700 mb-3 flex items-center gap-1.5 font-medium">
                            <MapPin className="w-4 h-4 text-neutral-500" />
                            {project.projectDetails.projectLocation}
                          </p>
                        )}

                        {/* Description */}
                        {(project.excerpt || project.projectContentSections?.projectSolution) && (
                          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                            {project.excerpt
                              ? project.excerpt.replace(/<[^>]*>/g, '')
                              : project.projectContentSections?.projectSolution?.substring(0, 120) + '...'}
                          </p>
                        )}

                        {/* Financial Metrics Section */}
                        {hasFinancialData && (
                          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
                            <div className="grid grid-cols-2 gap-3">
                              {/* Production Capacity */}
                              {project.technicalSpecifications?.projectAnnualProduction && (
                                <div className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-xs text-neutral-600 mb-0.5">
                                      {locale === 'en' ? 'Production' : 'Виробництво'}
                                    </div>
                                    <div className="text-sm font-bold text-neutral-900">
                                      {project.technicalSpecifications.projectAnnualProduction.toLocaleString()}{' '}
                                      {project.technicalSpecifications.projectProductionUnit || 'MT'}/yr
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* CAPEX */}
                              {project.financialPerformance?.projectCapex && (
                                <div className="flex items-start gap-2">
                                  <DollarSign className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-xs text-neutral-600 mb-0.5">
                                      {locale === 'en' ? 'Investment' : 'Інвестиції'}
                                    </div>
                                    <div className="text-sm font-bold text-neutral-900">
                                      {formatCurrency(
                                        project.financialPerformance.projectCapex,
                                        project.financialPerformance.projectCapexCurrency
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* ROI */}
                              {project.financialPerformance?.projectRoi && (
                                <div className="flex items-start gap-2">
                                  <TrendingUp className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-xs text-neutral-600 mb-0.5">ROI</div>
                                    <div className="text-sm font-bold text-neutral-900">
                                      {project.financialPerformance.projectRoi}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Revenue */}
                              {project.financialPerformance?.projectRevenueAnnual && (
                                <div className="flex items-start gap-2">
                                  <DollarSign className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-xs text-neutral-600 mb-0.5">
                                      {locale === 'en' ? 'Revenue' : 'Дохід'}
                                    </div>
                                    <div className="text-sm font-bold text-neutral-900">
                                      {formatCurrency(
                                        project.financialPerformance.projectRevenueAnnual,
                                        project.financialPerformance.projectCapexCurrency
                                      )}/yr
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Spacer to push button to bottom */}
                        <div className="flex-1"></div>

                        {/* View Details Button */}
                        <button className="w-full mt-4 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-blue-700">
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
