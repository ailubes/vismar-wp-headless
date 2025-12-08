import { gql } from '@apollo/client';

// Query to get general site settings
export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      language
      url
    }
  }
`;

// Query to get a page by URI
export const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      content
      slug
      uri
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

// Query to get all pages
export const GET_ALL_PAGES = gql`
  query GetAllPages($first: Int = 100) {
    pages(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        slug
        uri
        date
      }
    }
  }
`;

// Query to get menu by location
export const GET_MENU_BY_LOCATION = gql`
  query GetMenuByLocation($location: MenuLocationEnum!) {
    menu(id: $location, idType: LOCATION) {
      id
      name
      menuItems {
        nodes {
          id
          label
          url
          path
          parentId
          order
        }
      }
    }
  }
`;

// Query to get homepage content
export const GET_HOMEPAGE = gql`
  query GetHomepage {
    page(id: "home", idType: URI) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

// Get homepage hero content
export const GET_HOMEPAGE_HERO = gql`
  query GetHomepageHero($language: LanguageCodeFilterEnum!) {
    page(id: "home", idType: URI) {
      title
      content
      language {
        code
      }
    }
    generalSettings {
      title
      description
    }
  }
`;

// Get featured services (all services for homepage)
export const GET_FEATURED_SERVICES = gql`
  query GetFeaturedServices($language: LanguageCodeFilterEnum!) {
    services(where: { language: $language }, first: 4) {
      nodes {
        id
        title
        excerpt
        uri
        serviceDetails {
          serviceTagline
          serviceDescriptionShort
          serviceIcon {
            node {
              sourceUrl
              altText
            }
          }
          serviceCtaText
          serviceCtaLink
        }
      }
    }
  }
`;

// Get featured project (marked as featured)
export const GET_FEATURED_PROJECT = gql`
  query GetFeaturedProject($language: LanguageCodeFilterEnum!) {
    projects(where: { language: $language }, first: 1) {
      nodes {
        id
        title
        excerpt
        uri
        projectDetails {
          projectClient
          projectLocation
          projectYear
          projectFeatured
        }
      }
    }
  }
`;

// Get software solutions preview
export const GET_SOFTWARE_PREVIEW = gql`
  query GetSoftwarePreview($language: LanguageCodeFilterEnum!) {
    softwareSolutions(where: { language: $language }, first: 2) {
      nodes {
        id
        title
        excerpt
        uri
        softwareDetails {
          softwareTagline
          softwareDescriptionShort
          softwareIcon {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query to get a page by slug (URI includes language, e.g., "about" for EN, "about-3" for UK)
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      date
      modified
      language {
        code
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

// Query to get all services
export const GET_ALL_SERVICES = gql`
  query GetAllServices($language: LanguageCodeFilterEnum!) {
    services(where: { language: $language }, first: 100) {
      nodes {
        id
        title
        excerpt
        uri
        slug
        serviceDetails {
          serviceTagline
          serviceDescriptionShort
          serviceIcon {
            node {
              sourceUrl
              altText
            }
          }
          serviceCtaText
          serviceCtaLink
        }
      }
    }
  }
`;

// Query to get a single service by slug
export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: ID!) {
    service(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      date
      excerpt
      language {
        code
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      serviceDetails {
        serviceTagline
        serviceDescriptionShort
        serviceIcon {
          node {
            sourceUrl
            altText
          }
        }
        serviceFeatures
        serviceBenefits
        serviceCtaText
        serviceCtaLink
        serviceRelatedProjects {
          nodes {
            ... on Project {
              id
              title
              uri
              slug
            }
          }
        }
      }
      translations {
        title
        uri
        slug
        language {
          code
        }
      }
    }
  }
`;

// Query to get all software solutions
export const GET_ALL_SOFTWARE = gql`
  query GetAllSoftware($language: LanguageCodeFilterEnum!) {
    softwareSolutions(where: { language: $language }, first: 100) {
      nodes {
        id
        title
        excerpt
        uri
        slug
        softwareDetails {
          softwareTagline
          softwareDescriptionShort
          softwareIcon {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

// Query to get a single software solution by slug
export const GET_SOFTWARE_BY_SLUG = gql`
  query GetSoftwareBySlug($slug: ID!) {
    softwareSolution(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      date
      excerpt
      language {
        code
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      softwareDetails {
        softwareTagline
        softwareDescriptionShort
        softwareIcon {
          node {
            sourceUrl
            altText
          }
        }
        softwareKeyFeatures
        softwareTechnologyStack
        softwareDemoUrl
        softwareDocumentationUrl
        softwarePricing
        softwareCaseStudies {
          nodes {
            ... on Project {
              id
              title
              uri
              slug
            }
          }
        }
      }
      translations {
        title
        uri
        slug
        language {
          code
        }
      }
    }
  }
`;

// Query to get all projects
export const GET_ALL_PROJECTS = gql`
  query GetAllProjects($language: LanguageCodeFilterEnum!) {
    projects(where: { language: $language }, first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        projectDetails {
          projectClient
          projectLocation
          projectYear
          projectStatus
          projectFeatured
        }
        technicalSpecifications {
          projectSystemType
          # projectSpecies is a relationship field - temporarily removed
          projectAnnualProduction
          projectProductionUnit
          projectSpeciesText
          projectProductionCycles
        }
        performanceMetrics {
          projectMetricsBlock
        }
        projectContentSections {
          projectSolution
          projectResults
        }
      }
    }
  }
`;

// Query to get a single project by slug
export const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: ID!) {
    project(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      projectDetails {
        projectClient
        projectLocation
        projectYear
        projectStatus
        projectSubtitle
        projectFeatured
      }
      technicalSpecifications {
        projectSystemType
        # projectSpecies is a relationship field - temporarily removed
        projectAnnualProduction
        projectProductionUnit
        projectFacilitySize
        projectFacilitySizeUnit
        projectStandingBiomass
        projectBiomassUnit
        projectWaterVolume
        projectWaterVolumeUnit
        projectSpeciesText
        projectProductionCycles
        projectGrowthPeriod
        projectSurvivalRate
        projectMarketSize
      }
      projectContentSections {
        projectOverview
        projectChallenge
        projectSolution
        projectResults
        projectTechnicalDetails
        projectImpact
        projectSystemComponents
        projectWaterTreatment
        projectSupportInfrastructure
      }
      engineeringDetails {
        projectTechnologies {
          technologyName
          technologyDescription
        }
        projectInnovations
        projectPerformanceMetrics {
          metricName
          metricValue
          metricUnit
        }
      }
      performanceMetrics {
        projectMetricsBlock
      }
      financialPerformance {
        projectCapex
        projectCapexCurrency
        projectOpexAnnual
        projectProductionCost
        projectRevenueAnnual
        projectProfitAnnual
        projectProfitMargin
        projectRoi
        projectFinancialNotes
      }
      media {
        projectGallery {
          nodes {
            sourceUrl
            altText
          }
        }
        projectTestimonial
        projectTestimonialAuthor
        projectTestimonialTitle
      }
      projectTimeline {
        projectStartDate
        projectCompletionDate
        projectPhases {
          phaseName
          phaseDescription
          phaseStatus
        }
      }
      engineeringChallenges {
        projectChallenges {
          challengeTitle
          challengeProblem
          challengeSolution
        }
      }
      projectDeliverables {
        projectDeliverables {
          deliverableCategory
          deliverableItems
        }
      }
      environmentalImpact {
        projectEnvironmentalBenefits
      }
    }
  }
`;

// Query to get all species
export const GET_ALL_SPECIES = gql`
  query GetAllSpecies($language: LanguageCodeFilterEnum!) {
    speciesTypes(where: { language: $language }, first: 100) {
      nodes {
        id
        title
        slug
        excerpt
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        speciesDetails {
          speciesScientificName
          speciesCommonNames
          speciesOptimalTemp
          speciesGrowthRate
          speciesSystems
        }
      }
    }
  }
`;

// Query to get a single species by slug
export const GET_SPECIES_BY_SLUG = gql`
  query GetSpeciesBySlug($slug: ID!) {
    species(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      speciesDetails {
        speciesScientificName
        speciesCommonNames
        speciesOptimalTemp
        speciesOptimalPh
        speciesOptimalSalinity
        speciesGrowthRate
        speciesSystems
        speciesFeeding
        speciesChallenges
        speciesMarketSize
        speciesImage {
          node {
            sourceUrl
            altText
          }
        }
        speciesRelatedProjects {
          nodes {
            ... on Project {
              id
              title
              slug
            }
          }
        }
      }
    }
  }
`;

// Query to get all blog posts
export const GET_ALL_POSTS = gql`
  query GetAllPosts($language: LanguageCodeFilterEnum!, $first: Int = 100, $after: String) {
    posts(where: { language: $language, status: PUBLISH }, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        language {
          code
        }
      }
    }
  }
`;

// Query to get a single blog post by slug and language
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!, $language: LanguageCodeFilterEnum!) {
    posts(where: { name: $slug, language: $language }, first: 1) {
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        language {
          code
        }
        translations {
          title
          uri
          slug
          language {
            code
          }
        }
      }
    }
  }
`;

// Query to get blog posts by category
export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($language: LanguageCodeFilterEnum!, $categorySlug: String!, $first: Int = 100, $after: String) {
    posts(where: { language: $language, categoryName: $categorySlug, status: PUBLISH }, first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        language {
          code
        }
      }
    }
  }
`;

// Query to get all categories
export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories($language: LanguageCodeFilterEnum!) {
    categories(where: { language: $language }) {
      nodes {
        id
        name
        slug
        description
        count
      }
    }
  }
`;

// Query to get content (Page or Post) by URI using nodeByUri
export const GET_CONTENT_BY_URI = gql`
  query GetContentByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ... on Page {
        id
        title
        content
        slug
        uri
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
      ... on Post {
        id
        title
        slug
        excerpt
        content
        date
        uri
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        language {
          code
        }
        translations {
          title
          uri
          slug
          language {
            code
          }
        }
      }
    }
  }
`;
