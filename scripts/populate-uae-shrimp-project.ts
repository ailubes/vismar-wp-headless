/**
 * Script to populate the UAE Shrimp Farm project into WordPress
 *
 * This script creates the "UAE Shrimp Farm RAS Design" project with all detailed
 * information from PROJECTS.md including:
 * - Basic information
 * - Technical specifications
 * - Performance metrics
 * - Financial performance
 * - Engineering challenges and solutions
 * - Deliverables
 * - Client testimonial
 */

import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost:8080/graphql';

console.log('WordPress API URL:', WORDPRESS_API_URL);

const httpLink = new HttpLink({
  uri: WORDPRESS_API_URL,
  fetch: require('cross-fetch'),
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// GraphQL mutation to create a project with all ACF fields
const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        id
        title
        slug
        uri
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
          projectSpeciesText
          projectAnnualProduction
          projectProductionUnit
          projectProductionCycles
          projectGrowthPeriod
          projectSurvivalRate
          projectMarketSize
          projectStandingBiomass
          projectBiomassUnit
          projectWaterVolume
          projectWaterVolumeUnit
          projectFacilitySize
          projectFacilitySizeUnit
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
      }
    }
  }
`;

async function createUAEShrimpProject() {
  console.log('\n=== Starting UAE Shrimp Farm Project Creation ===\n');

  // Project data extracted from PROJECTS.md
  const projectData = {
    clientMutationId: 'create-uae-shrimp-project',
    title: 'UAE Shrimp Farm RAS Design',
    slug: 'uae-shrimp-farm-ras-design',
    status: 'PUBLISH',
    content: `<h2>Project Overview</h2>
<p>Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.</p>

<h2>Technical Specifications</h2>

<h3>Production Capacity</h3>
<ul>
<li><strong>Annual Production:</strong> 250 tonnes whole shrimp (HOSO)</li>
<li><strong>Standing Biomass:</strong> 45 tonnes</li>
<li><strong>Production Cycles:</strong> 6 cycles per year</li>
<li><strong>Growth Period:</strong> 12 weeks from PL12 to market size</li>
</ul>

<h3>System Components</h3>

<h4>Phase I - Nursery (Weeks 1-2)</h4>
<ul>
<li>2 × 150 m³ concrete tanks</li>
<li>Biofloc establishment phase</li>
<li>Intensive monitoring and feeding</li>
</ul>

<h4>Phase II - Intermediate (Weeks 3-4)</h4>
<ul>
<li>2 × 350 m³ concrete tanks</li>
<li>Accelerated growth phase</li>
<li>Optimized stocking density</li>
</ul>

<h4>Phase III - Growout (Weeks 5-12)</h4>
<ul>
<li>4 × 750 m³ concrete tanks</li>
<li>Final production phase</li>
<li>Maximum biomass density: 15.36 kg/m³</li>
</ul>

<h3>Water Treatment Systems</h3>
<ul>
<li><strong>Biofilter:</strong> 500 kg feed/day capacity</li>
<li><strong>Mechanical Filtration:</strong> Drum filters (60/80 micron)</li>
<li><strong>Ozone Treatment:</strong> For pathogen control</li>
<li><strong>Oxygen Injection:</strong> Linde SOLVOX system (50-60 mg/L capacity)</li>
<li><strong>Degassing Units:</strong> CO₂ and nitrogen removal</li>
<li><strong>UV Sterilization:</strong> Water disinfection</li>
</ul>

<h3>Support Infrastructure</h3>
<ul>
<li><strong>Hatchery:</strong> 4 million larvae/month capacity</li>
<li><strong>Feed Storage:</strong> Automated feeding systems</li>
<li><strong>Oxygen Generation:</strong> On-site PSA system</li>
<li><strong>Wastewater Treatment:</strong> Effluent processing and denitrification</li>
<li><strong>Desalination Unit:</strong> Freshwater production</li>
<li><strong>Emergency Backup:</strong> LOX system + generators</li>
</ul>`,
    excerpt: 'Super-intensive shrimp RAS facility designed for UAE desert climate, featuring biofloc technology and 250 tonnes annual production capacity with zero-discharge water management.',

    // ACF Fields
    projectDetails: {
      projectClient: 'Confidential Client, United Arab Emirates',
      projectLocation: 'United Arab Emirates',
      projectYear: '2022',
      projectStatus: ['Design'],
      projectSubtitle: 'Aqua Bridge - 250 MT Annual Production',
      projectFeatured: true,
    },

    technicalSpecifications: {
      projectSystemType: ['RAS', 'Biofloc'],
      projectSpeciesText: 'Pacific White Shrimp (Litopenaeus vannamei)',
      projectAnnualProduction: 250,
      projectProductionUnit: 'MT',
      projectProductionCycles: 6,
      projectGrowthPeriod: '12 weeks from PL12 to market size',
      projectSurvivalRate: '57% (after culling)',
      projectMarketSize: '16-25g average',
      projectStandingBiomass: 45,
      projectBiomassUnit: 'MT',
      projectWaterVolume: 4000,
      projectWaterVolumeUnit: 'm³',
      projectFacilitySize: 2000,
      projectFacilitySizeUnit: 'm²',
    },

    performanceMetrics: {
      projectMetricsBlock: `Footprint: 2,000 m² per production unit
Water Volume: 4,000 m³ total
Water Exchange: <5% per day
Oxygen Consumption: 750g per kg feed
Feed Conversion Ratio: ≤1.55
Survival Rate: 57% (after culling)
Market Size: 16-25g average
Energy Demand: 250 kW constant`,
    },

    financialPerformance: {
      projectCapex: 1240000,
      projectCapexCurrency: 'USD',
      projectOpexAnnual: 917000,
      projectProductionCost: '$4.60/kg',
      projectRevenueAnnual: 1690000,
      projectProfitAnnual: 652000,
      projectProfitMargin: '38.65%',
      projectRoi: '~2 years',
      projectFinancialNotes: 'Revenue calculated at $7.50/kg wholesale price. All figures in USD.',
    },

    projectContentSections: {
      projectOverview: 'Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.',

      projectChallenge: `<h3>Engineering Challenges</h3>

<h4>1. Extreme Climate Management</h4>
<ul>
<li>Outdoor temperature: 45-50°C in summer</li>
<li>Solution: Insulated building design, efficient HVAC systems</li>
<li>Energy-efficient cooling to maintain optimal water temperature</li>
</ul>

<h4>2. Water Scarcity</h4>
<ul>
<li>Limited freshwater availability in desert environment</li>
<li>Solution: 95% water recirculation, minimal discharge</li>
<li>Integration with desalination for makeup water</li>
</ul>

<h4>3. Biosecurity</h4>
<ul>
<li>Prevention of disease introduction and spread</li>
<li>Solution: Multi-barrier approach with ozone, UV, and filtration</li>
<li>Quarantine protocols for incoming stock</li>
</ul>

<h4>4. Reliable Oxygen Supply</h4>
<ul>
<li>Critical for high-density production</li>
<li>Solution: On-site oxygen generation + emergency LOX backup</li>
<li>Automated monitoring and failsafe systems</li>
</ul>`,

      projectSolution: `Complete RAS design featuring biofloc technology, advanced water treatment systems, and climate-controlled production environment optimized for desert conditions.`,

      projectResults: `<h3>Project Outcomes</h3>

<h4>Financial Performance (Projected)</h4>
<ul>
<li><strong>CAPEX:</strong> $1.24M USD (design + equipment)</li>
<li><strong>OPEX:</strong> $917K USD annually</li>
<li><strong>Production Cost:</strong> $4.60/kg</li>
<li><strong>Revenue:</strong> $1.69M annually (at $7.50/kg)</li>
<li><strong>Annual Profit:</strong> $652K USD</li>
<li><strong>Profit Margin:</strong> 38.65%</li>
<li><strong>ROI:</strong> ~2 years</li>
</ul>

<h4>Environmental Benefits</h4>
<ul>
<li>Minimal water consumption (<125 m³/day discharge)</li>
<li>Zero environmental impact (closed system)</li>
<li>Reduced reliance on wild-caught shrimp</li>
<li>Local food production in food-insecure region</li>
</ul>`,
    },

    engineeringChallenges: {
      projectChallenges: [
        {
          challengeTitle: 'Extreme Climate Management',
          challengeProblem: 'Outdoor temperature: 45-50°C in summer',
          challengeSolution: 'Insulated building design, efficient HVAC systems, and energy-efficient cooling to maintain optimal water temperature',
        },
        {
          challengeTitle: 'Water Scarcity',
          challengeProblem: 'Limited freshwater availability in desert environment',
          challengeSolution: '95% water recirculation, minimal discharge, and integration with desalination for makeup water',
        },
        {
          challengeTitle: 'Biosecurity',
          challengeProblem: 'Prevention of disease introduction and spread',
          challengeSolution: 'Multi-barrier approach with ozone, UV, and filtration, plus quarantine protocols for incoming stock',
        },
        {
          challengeTitle: 'Reliable Oxygen Supply',
          challengeProblem: 'Critical for high-density production',
          challengeSolution: 'On-site oxygen generation + emergency LOX backup with automated monitoring and failsafe systems',
        },
      ],
    },

    projectDeliverables: {
      projectDeliverables: [
        {
          deliverableCategory: 'Complete RAS Design Package',
          deliverableItems: `Preliminary calculations and feasibility study
Detailed engineering drawings (50+ sheets)
Equipment specifications and sourcing
Hydraulic calculations and flow diagrams
Structural designs for concrete tanks
Electrical and automation schematics`,
        },
        {
          deliverableCategory: 'Technical Documentation',
          deliverableItems: `Operations manual
Maintenance procedures
Biosecurity protocols
Water quality management guidelines
Troubleshooting guides`,
        },
        {
          deliverableCategory: 'Project Management Support',
          deliverableItems: `Equipment procurement assistance
Construction supervision
Commissioning support
Staff training program`,
        },
      ],
    },

    media: {
      projectTestimonial: 'Vismar Aqua\'s engineering team demonstrated exceptional expertise in designing our shrimp facility. Their attention to detail, understanding of biofloc technology, and ability to adapt to our local conditions was impressive. The system design is world-class.',
      projectTestimonialAuthor: 'Project Manager',
      projectTestimonialTitle: 'Aqua Bridge Project',
    },

    environmentalImpact: {
      projectEnvironmentalBenefits: `<ul>
<li>Minimal water consumption (<125 m³/day discharge)</li>
<li>Zero environmental impact (closed system)</li>
<li>Reduced reliance on wild-caught shrimp</li>
<li>Local food production in food-insecure region</li>
<li>95% water recirculation rate</li>
<li>Zero-discharge water management</li>
</ul>`,
    },
  };

  try {
    console.log('Creating project with title:', projectData.title);
    console.log('Slug:', projectData.slug);
    console.log('Featured:', projectData.projectDetails.projectFeatured);
    console.log('\nSending mutation to WordPress...\n');

    const { data, errors } = await client.mutate({
      mutation: CREATE_PROJECT,
      variables: {
        input: projectData,
      },
    });

    if (errors) {
      console.error('\n❌ GraphQL Errors:', JSON.stringify(errors, null, 2));
      process.exit(1);
    }

    if (!data?.createProject?.project) {
      console.error('\n❌ No project returned in response');
      process.exit(1);
    }

    const project = data.createProject.project;

    console.log('\n✅ SUCCESS! Project created successfully!\n');
    console.log('=== Project Details ===');
    console.log('ID:', project.id);
    console.log('Title:', project.title);
    console.log('Slug:', project.slug);
    console.log('URI:', project.uri);
    console.log('\n=== Basic Information ===');
    console.log('Client:', project.projectDetails?.projectClient);
    console.log('Location:', project.projectDetails?.projectLocation);
    console.log('Year:', project.projectDetails?.projectYear);
    console.log('Status:', project.projectDetails?.projectStatus);
    console.log('Featured:', project.projectDetails?.projectFeatured);
    console.log('\n=== Technical Specifications ===');
    console.log('System Type:', project.technicalSpecifications?.projectSystemType);
    console.log('Species:', project.technicalSpecifications?.projectSpeciesText);
    console.log('Annual Production:', project.technicalSpecifications?.projectAnnualProduction, project.technicalSpecifications?.projectProductionUnit);
    console.log('Production Cycles:', project.technicalSpecifications?.projectProductionCycles);
    console.log('Growth Period:', project.technicalSpecifications?.projectGrowthPeriod);
    console.log('Survival Rate:', project.technicalSpecifications?.projectSurvivalRate);
    console.log('Market Size:', project.technicalSpecifications?.projectMarketSize);
    console.log('\n=== Financial Performance ===');
    console.log('CAPEX:', project.financialPerformance?.projectCapex, project.financialPerformance?.projectCapexCurrency);
    console.log('OPEX (Annual):', project.financialPerformance?.projectOpexAnnual, project.financialPerformance?.projectCapexCurrency);
    console.log('Revenue (Annual):', project.financialPerformance?.projectRevenueAnnual, project.financialPerformance?.projectCapexCurrency);
    console.log('Profit (Annual):', project.financialPerformance?.projectProfitAnnual, project.financialPerformance?.projectCapexCurrency);
    console.log('Profit Margin:', project.financialPerformance?.projectProfitMargin);
    console.log('ROI:', project.financialPerformance?.projectRoi);
    console.log('\n=== Performance Metrics ===');
    console.log(project.performanceMetrics?.projectMetricsBlock || 'N/A');
    console.log('\n=== Sections Populated ===');
    console.log('✅ Basic Information');
    console.log('✅ Technical Specifications');
    console.log('✅ Performance Metrics');
    console.log('✅ Financial Performance');
    console.log('✅ Project Content Sections (Overview, Challenge, Solution, Results)');
    console.log('✅ Engineering Challenges (4 challenges)');
    console.log('✅ Deliverables (3 categories)');
    console.log('✅ Client Testimonial');
    console.log('✅ Environmental Impact');
    console.log('\n=== Next Steps ===');
    console.log('1. Visit WordPress admin to verify all fields are populated');
    console.log('2. Add featured image if desired');
    console.log('3. Add project gallery images');
    console.log('4. Review and publish');
    console.log('\n=== Script Complete ===\n');

    process.exit(0);
  } catch (error: any) {
    console.error('\n❌ ERROR: Failed to create project');
    console.error('Error message:', error.message);

    if (error.networkError) {
      console.error('\nNetwork Error Details:');
      console.error(error.networkError);
    }

    if (error.graphQLErrors) {
      console.error('\nGraphQL Errors:');
      error.graphQLErrors.forEach((err: any, i: number) => {
        console.error(`\nError ${i + 1}:`);
        console.error('Message:', err.message);
        console.error('Path:', err.path);
        console.error('Extensions:', err.extensions);
      });
    }

    console.error('\n=== Troubleshooting ===');
    console.error('1. Ensure WordPress is running');
    console.error('2. Ensure WPGraphQL plugin is activated');
    console.error('3. Ensure ACF fields are registered in WordPress');
    console.error('4. Check WORDPRESS_API_URL in .env.local');
    console.error('5. Verify ACF field names match exactly');

    process.exit(1);
  }
}

// Run the script
createUAEShrimpProject();
