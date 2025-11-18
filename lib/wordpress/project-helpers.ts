// Helper functions to create a unified interface for project data
// This allows the project detail page to work with both the new field group structure
// and the legacy projectDetails structure

import type {
  WPProject,
  ProjectDetails,
  TechnicalSpecifications,
  ProjectContentSections,
  EngineeringDetails,
  Media,
  ProjectTimeline,
  EngineeringChallenges,
  ProjectDeliverables,
  EnvironmentalImpact,
  PerformanceMetrics,
  FinancialPerformance,
} from './types';

// Unified project data interface for easy access
export interface UnifiedProjectData {
  // Basic Information
  projectClient?: string;
  projectLocation?: string;
  projectYear?: string;
  projectStatus?: string;
  projectSubtitle?: string;
  projectFeatured?: boolean;

  // Technical Specifications
  projectSystemType?: string;
  projectSpecies?: string;
  projectAnnualProduction?: number;
  projectProductionUnit?: string;
  projectFacilitySize?: number;
  projectFacilitySizeUnit?: string;
  projectStandingBiomass?: number;
  projectBiomassUnit?: string;
  projectWaterVolume?: number;
  projectWaterVolumeUnit?: string;
  projectSpeciesText?: string;
  projectProductionCycles?: number;
  projectGrowthPeriod?: string;
  projectSurvivalRate?: string;
  projectMarketSize?: string;

  // Content Sections
  projectOverview?: string;
  projectChallenge?: string;
  projectSolution?: string;
  projectResults?: string;
  projectTechnicalDetails?: string;
  projectImpact?: string;
  projectSystemComponents?: string;
  projectWaterTreatment?: string;
  projectSupportInfrastructure?: string;

  // Engineering Details
  projectTechnologies?: Array<{ technologyName: string; technologyDescription: string }>;
  projectInnovations?: string;
  projectPerformanceMetrics?: Array<{ metricName: string; metricValue: string; metricUnit: string }>;

  // Media
  projectGallery?: Array<{ sourceUrl: string; altText: string }>;
  projectTestimonial?: string;
  projectTestimonialAuthor?: string;
  projectTestimonialTitle?: string;

  // Timeline
  projectStartDate?: string;
  projectCompletionDate?: string;
  projectPhases?: Array<{ phaseName: string; phaseDescription: string; phaseStatus: string }>;

  // Challenges
  projectChallenges?: Array<{ challengeTitle: string; challengeProblem: string; challengeSolution: string }>;

  // Deliverables
  projectDeliverables?: Array<{ deliverableCategory: string; deliverableItems: string }>;

  // Environmental Impact
  projectEnvironmentalBenefits?: string;

  // Performance Metrics
  projectMetricsBlock?: string;

  // Financial Performance
  projectCapex?: number;
  projectCapexCurrency?: string;
  projectOpexAnnual?: number;
  projectProductionCost?: string;
  projectRevenueAnnual?: number;
  projectProfitAnnual?: number;
  projectProfitMargin?: string;
  projectRoi?: string;
  projectFinancialNotes?: string;

  // New Sections (6 sections added)
  // Section 1: Project Significance
  projectSignificance?: string;

  // Section 2: Design Services Delivered
  designServices?: Array<{ serviceName: string; timeline: string; cost: number }>;
  totalDesignCost?: number;

  // Section 3: Current Operational Status
  currentStatus?: string;
  nextSteps?: string[];

  // Section 4: Project Impact Summary
  economicImpact?: string;
  environmentalImpact?: string;  // Note: This may overlap with projectEnvironmentalBenefits
  socialImpact?: string;
  jobsCreated?: number;

  // Section 5: Market Context
  marketContext?: string;
  marketChallenges?: string;

  // Section 6: Production Biology Details
  biologyTimeline?: string;
  yieldDetails?: string;
  productionParameters?: string;
}

/**
 * Convert array field to single string (takes first element if array)
 */
function arrayToString(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

/**
 * Get unified project data from a WPProject
 * Handles field group structure from WordPress
 */
export function getUnifiedProjectData(project: WPProject): UnifiedProjectData {
  // If using field group structure
  if (
    project.projectDetails ||
    project.technicalSpecifications ||
    project.projectContentSections ||
    project.engineeringDetails ||
    project.media ||
    project.projectTimeline ||
    project.engineeringChallenges ||
    project.projectDeliverables ||
    project.environmentalImpact
  ) {
    return {
      // Basic Information
      projectClient: project.projectDetails?.projectClient,
      projectLocation: project.projectDetails?.projectLocation,
      projectYear: project.projectDetails?.projectYear,
      projectStatus: arrayToString(project.projectDetails?.projectStatus),
      projectSubtitle: project.projectDetails?.projectSubtitle,
      projectFeatured: project.projectDetails?.projectFeatured,

      // Technical Specifications
      projectSystemType: arrayToString(project.technicalSpecifications?.projectSystemType),
      projectSpecies: project.technicalSpecifications?.projectSpecies,
      projectAnnualProduction: project.technicalSpecifications?.projectAnnualProduction,
      projectProductionUnit: project.technicalSpecifications?.projectProductionUnit,
      projectFacilitySize: project.technicalSpecifications?.projectFacilitySize,
      projectFacilitySizeUnit: project.technicalSpecifications?.projectFacilitySizeUnit,
      projectStandingBiomass: project.technicalSpecifications?.projectStandingBiomass,
      projectBiomassUnit: project.technicalSpecifications?.projectBiomassUnit,
      projectWaterVolume: project.technicalSpecifications?.projectWaterVolume,
      projectWaterVolumeUnit: project.technicalSpecifications?.projectWaterVolumeUnit,
      projectSpeciesText: project.technicalSpecifications?.projectSpeciesText,
      projectProductionCycles: project.technicalSpecifications?.projectProductionCycles,
      projectGrowthPeriod: project.technicalSpecifications?.projectGrowthPeriod,
      projectSurvivalRate: project.technicalSpecifications?.projectSurvivalRate,
      projectMarketSize: project.technicalSpecifications?.projectMarketSize,

      // Content Sections
      projectOverview: project.projectContentSections?.projectOverview,
      projectChallenge: project.projectContentSections?.projectChallenge,
      projectSolution: project.projectContentSections?.projectSolution,
      projectResults: project.projectContentSections?.projectResults,
      projectTechnicalDetails: project.projectContentSections?.projectTechnicalDetails,
      projectImpact: project.projectContentSections?.projectImpact,
      projectSystemComponents: project.projectContentSections?.projectSystemComponents,
      projectWaterTreatment: project.projectContentSections?.projectWaterTreatment,
      projectSupportInfrastructure: project.projectContentSections?.projectSupportInfrastructure,

      // Engineering Details
      projectTechnologies: project.engineeringDetails?.projectTechnologies,
      projectInnovations: project.engineeringDetails?.projectInnovations,
      projectPerformanceMetrics: project.engineeringDetails?.projectPerformanceMetrics,

      // Media
      projectGallery: (project.media?.projectGallery as any)?.nodes || project.media?.projectGallery || [],
      projectTestimonial: project.media?.projectTestimonial,
      projectTestimonialAuthor: project.media?.projectTestimonialAuthor,
      projectTestimonialTitle: project.media?.projectTestimonialTitle,

      // Timeline
      projectStartDate: project.projectTimeline?.projectStartDate,
      projectCompletionDate: project.projectTimeline?.projectCompletionDate,
      projectPhases: project.projectTimeline?.projectPhases,

      // Challenges
      projectChallenges: project.engineeringChallenges?.projectChallenges,

      // Deliverables
      projectDeliverables: project.projectDeliverables?.projectDeliverables,

      // Environmental Impact
      projectEnvironmentalBenefits: project.environmentalImpact?.projectEnvironmentalBenefits,

      // Performance Metrics
      projectMetricsBlock: project.performanceMetrics?.projectMetricsBlock,

      // Financial Performance
      projectCapex: project.financialPerformance?.projectCapex,
      projectCapexCurrency: project.financialPerformance?.projectCapexCurrency,
      projectOpexAnnual: project.financialPerformance?.projectOpexAnnual,
      projectProductionCost: project.financialPerformance?.projectProductionCost,
      projectRevenueAnnual: project.financialPerformance?.projectRevenueAnnual,
      projectProfitAnnual: project.financialPerformance?.projectProfitAnnual,
      projectProfitMargin: project.financialPerformance?.projectProfitMargin,
      projectRoi: project.financialPerformance?.projectRoi,
      projectFinancialNotes: project.financialPerformance?.projectFinancialNotes,

      // New Sections (6 sections) - TO BE ADDED TO WORDPRESS
      // These fields will be undefined until field groups are created in WordPress
      // Section 1: Project Significance
      projectSignificance: (project as any).projectSignificance?.projectSignificance,

      // Section 2: Design Services Delivered
      designServices: (project as any).designServices?.designServices,
      totalDesignCost: (project as any).designServices?.totalDesignCost,

      // Section 3: Current Operational Status
      currentStatus: (project as any).operationalStatus?.currentStatus,
      nextSteps: (project as any).operationalStatus?.nextSteps,

      // Section 4: Project Impact Summary
      economicImpact: (project as any).projectImpactSummary?.economicImpact,
      environmentalImpact: (project as any).projectImpactSummary?.environmentalImpact || project.environmentalImpact?.projectEnvironmentalBenefits,
      socialImpact: (project as any).projectImpactSummary?.socialImpact,
      jobsCreated: (project as any).projectImpactSummary?.jobsCreated,

      // Section 5: Market Context
      marketContext: (project as any).marketContext?.marketContext,
      marketChallenges: (project as any).marketContext?.marketChallenges,

      // Section 6: Production Biology Details
      biologyTimeline: (project as any).productionBiology?.biologyTimeline,
      yieldDetails: (project as any).productionBiology?.yieldDetails,
      productionParameters: (project as any).productionBiology?.productionParameters,
    };
  }

  // Return empty object if no data available
  return {};
}
