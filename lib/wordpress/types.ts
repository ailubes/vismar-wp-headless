// WordPress GraphQL Response Types

export interface WPImage {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

export interface WPFeaturedImage {
  node: WPImage;
}

export interface WPSEO {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage?: {
    sourceUrl: string;
  };
}

export interface WPPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  uri: string;
  date: string;
  modified?: string;
  featuredImage?: WPFeaturedImage;
  seo?: WPSEO;
}

export interface WPMenuItem {
  id: string;
  label: string;
  url: string;
  path: string;
  parentId: string | null;
  order: number;
}

export interface WPMenu {
  id: string;
  name: string;
  menuItems: {
    nodes: WPMenuItem[];
  };
}

export interface WPGeneralSettings {
  title: string;
  description: string;
  language: string;
  url: string;
}

// GraphQL Query Response Types

export interface GetPageByUriResponse {
  pageBy: WPPage | null;
}

export interface GetAllPagesResponse {
  pages: {
    nodes: WPPage[];
  };
}

export interface GetMenuByLocationResponse {
  menu: WPMenu | null;
}

export interface GetSiteSettingsResponse {
  generalSettings: WPGeneralSettings;
}

export interface GetHomepageResponse {
  page: WPPage | null;
}

// Service Types
export interface ServiceDetails {
  serviceTagline?: string;
  serviceDescriptionShort?: string;
  serviceIcon?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  serviceFeatures?: string;
  serviceBenefits?: string;
  serviceCtaText?: string;
  serviceCtaLink?: string;
  serviceRelatedProjects?: {
    nodes: Array<{
      id: string;
      title: string;
      uri: string;
      slug: string;
    }>;
  };
}

export interface WPService {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  slug: string;
  uri: string;
  date?: string;
  language?: {
    code: string;
  };
  featuredImage?: WPFeaturedImage;
  serviceDetails?: ServiceDetails;
  translations?: Array<{
    title: string;
    uri: string;
    slug: string;
    language: {
      code: string;
    };
  }>;
  seo?: WPSEO;
}

// Software Types
export interface SoftwareDetails {
  softwareTagline?: string;
  softwareDescriptionShort?: string;
  softwareIcon?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  softwareKeyFeatures?: string;
  softwareTechnologyStack?: string;
  softwareDemoUrl?: string;
  softwareDocumentationUrl?: string;
  softwarePricing?: string;
  softwareCaseStudies?: {
    nodes: Array<{
      id: string;
      title: string;
      uri: string;
      slug: string;
    }>;
  };
}

export interface WPSoftware {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  slug: string;
  uri: string;
  date?: string;
  language?: {
    code: string;
  };
  featuredImage?: WPFeaturedImage;
  softwareDetails?: SoftwareDetails;
  translations?: Array<{
    title: string;
    uri: string;
    slug: string;
    language: {
      code: string;
    };
  }>;
  seo?: WPSEO;
}

// Query Response Types
export interface GetAllServicesResponse {
  services: {
    nodes: WPService[];
  };
}

export interface GetServiceBySlugResponse {
  service: WPService | null;
}

export interface GetAllSoftwareResponse {
  softwareSolutions: {
    nodes: WPSoftware[];
  };
}

export interface GetSoftwareBySlugResponse {
  software: WPSoftware | null;
}

export interface GetFeaturedServicesResponse {
  services: {
    nodes: WPService[];
  };
}

export interface GetSoftwarePreviewResponse {
  softwareSolutions: {
    nodes: WPSoftware[];
  };
}

// Project Types

// Technology item for repeater
export interface ProjectTechnology {
  technologyName: string;
  technologyDescription: string;
}

// Performance metric for repeater
export interface ProjectPerformanceMetric {
  metricName: string;
  metricValue: string;
  metricUnit: string;
}

// Project phase for repeater
export interface ProjectPhase {
  phaseName: string;
  phaseDescription: string;
  phaseStatus: 'Planned' | 'In Progress' | 'Completed';
}

// Challenge item for repeater
export interface ProjectChallenge {
  challengeTitle: string;
  challengeProblem: string;
  challengeSolution: string;
}

// Deliverable item for repeater
export interface ProjectDeliverable {
  deliverableCategory: string;
  deliverableItems: string;
}

// Gallery image
export interface GalleryImage {
  sourceUrl: string;
  altText: string;
}

// Species node
export interface SpeciesNode {
  id: string;
  title: string;
  slug: string;
}

// ACF Field Group: Technical Specifications
export interface TechnicalSpecifications {
  projectSystemType?: string[];
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
}

// ACF Field Group: Content Sections
export interface ProjectContentSections {
  projectOverview?: string;
  projectChallenge?: string;
  projectSolution?: string;
  projectResults?: string;
  projectTechnicalDetails?: string;
  projectImpact?: string;
  projectSystemComponents?: string;
  projectWaterTreatment?: string;
  projectSupportInfrastructure?: string;
}

// ACF Field Group: Engineering Details
export interface EngineeringDetails {
  projectTechnologies?: ProjectTechnology[];
  projectInnovations?: string;
  projectPerformanceMetrics?: ProjectPerformanceMetric[];
}

// ACF Field Group: Media
export interface Media {
  projectGallery?: GalleryImage[];
  projectTestimonial?: string;
  projectTestimonialAuthor?: string;
  projectTestimonialTitle?: string;
}

// ACF Field Group: Timeline
export interface ProjectTimeline {
  projectStartDate?: string;
  projectCompletionDate?: string;
  projectPhases?: ProjectPhase[];
}

// ACF Field Group: Challenges
export interface EngineeringChallenges {
  projectChallenges?: ProjectChallenge[];
}

// ACF Field Group: Deliverables
export interface ProjectDeliverables {
  projectDeliverables?: ProjectDeliverable[];
}

// ACF Field Group: Environmental Impact
export interface EnvironmentalImpact {
  projectEnvironmentalBenefits?: string;
}

// ACF Field Group: Performance Metrics
export interface PerformanceMetrics {
  projectMetricsBlock?: string;
}

// ACF Field Group: Financial Performance
export interface FinancialPerformance {
  projectCapex?: number;
  projectCapexCurrency?: string;
  projectOpexAnnual?: number;
  projectProductionCost?: string;
  projectRevenueAnnual?: number;
  projectProfitAnnual?: number;
  projectProfitMargin?: string;
  projectRoi?: string;
  projectFinancialNotes?: string;
}

// Legacy interface for backwards compatibility
export interface ProjectDetails {
  // Basic Information
  projectClient?: string;
  projectLocation?: string;
  projectYear?: string;
  projectStatus?: 'Planning' | 'Design' | 'Construction' | 'Operational' | 'Completed';
  projectFeatured?: boolean;
  projectSubtitle?: string;

  // Technical Specifications
  projectSystemType?: 'RAS' | 'Flow-through' | 'Hybrid' | 'Biofloc' | 'IMTA' | 'Other';
  projectSize?: string; // legacy field
  projectAnnualProduction?: number;
  projectProductionUnit?: string;
  projectFacilitySize?: number;
  projectFacilitySizeUnit?: string;
  projectStandingBiomass?: number;
  projectBiomassUnit?: string;
  projectWaterVolume?: number;
  projectWaterVolumeUnit?: string;
  projectSpecies?: {
    nodes: SpeciesNode[];
  };

  // Content Sections
  projectOverview?: string;
  projectChallenge?: string;
  projectSolution?: string; // legacy field
  projectTechnicalDetails?: string;
  projectResults?: string;
  projectImpact?: string;
  projectSystemComponents?: string;
  projectWaterTreatment?: string;
  projectSupportInfrastructure?: string;

  // Engineering Details
  projectTechnologies?: ProjectTechnology[];
  projectInnovations?: string;
  projectPerformanceMetrics?: ProjectPerformanceMetric[];

  // Challenges & Solutions
  projectChallenges?: ProjectChallenge[];

  // Deliverables
  projectDeliverables?: ProjectDeliverable[];

  // Environmental Impact
  projectEnvironmentalBenefits?: string;

  // Media & Testimonials
  projectGallery?: GalleryImage[];
  projectTestimonial?: string;
  projectTestimonialAuthor?: string;
  projectTestimonialTitle?: string;

  // Timeline
  projectStartDate?: string;
  projectCompletionDate?: string;
  projectPhases?: ProjectPhase[];
}

export interface WPProject {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  slug: string;
  uri: string;
  date?: string;
  language?: {
    code: string;
  };
  featuredImage?: WPFeaturedImage;
  // ACF field group structure
  projectDetails?: ProjectDetails;
  technicalSpecifications?: TechnicalSpecifications;
  projectContentSections?: ProjectContentSections;
  engineeringDetails?: EngineeringDetails;
  media?: Media;
  projectTimeline?: ProjectTimeline;
  engineeringChallenges?: EngineeringChallenges;
  projectDeliverables?: ProjectDeliverables;
  environmentalImpact?: EnvironmentalImpact;
  performanceMetrics?: PerformanceMetrics;
  financialPerformance?: FinancialPerformance;
  translations?: Array<{
    title: string;
    uri: string;
    slug: string;
    language: {
      code: string;
    };
  }>;
  seo?: WPSEO;
}

// Project Query Response Types
export interface GetAllProjectsResponse {
  projects: {
    nodes: WPProject[];
  };
}

export interface GetProjectBySlugResponse {
  project: WPProject | null;
}

export interface GetFeaturedProjectsResponse {
  projects: {
    nodes: WPProject[];
  };
}
