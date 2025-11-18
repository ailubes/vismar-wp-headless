const https = require('http');

const query = `
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
        sourceUrl
        altText
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

const variables = {
  slug: "uae-shrimp-farm-ras-design-7"
};

const postData = JSON.stringify({
  query,
  variables
});

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      if (response.errors) {
        console.error('GraphQL Errors:');
        console.error(JSON.stringify(response.errors, null, 2));
        process.exit(1);
      }

      const project = response.data?.project;

      if (!project) {
        console.error('No project found!');
        console.error(JSON.stringify(response, null, 2));
        process.exit(1);
      }

      console.log('✅ SUCCESS! Project found via GraphQL');
      console.log('\n=== PROJECT BASIC INFO ===');
      console.log(`Title: ${project.title}`);
      console.log(`Slug: ${project.slug}`);
      console.log(`ID: ${project.id}`);

      console.log('\n=== FIELD GROUP: projectDetails ===');
      if (project.projectDetails) {
        Object.entries(project.projectDetails).forEach(([key, value]) => {
          console.log(`  ${key}: ${value !== null && value !== '' ? '✅ ' + value : '❌ NULL/EMPTY'}`);
        });
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== FIELD GROUP: technicalSpecifications ===');
      if (project.technicalSpecifications) {
        Object.entries(project.technicalSpecifications).forEach(([key, value]) => {
          console.log(`  ${key}: ${value !== null && value !== '' ? '✅ ' + value : '❌ NULL/EMPTY'}`);
        });
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== FIELD GROUP: projectContentSections ===');
      if (project.projectContentSections) {
        Object.entries(project.projectContentSections).forEach(([key, value]) => {
          const displayValue = value ? value.substring(0, 50) + '...' : 'NULL/EMPTY';
          console.log(`  ${key}: ${value !== null && value !== '' ? '✅ ' + displayValue : '❌ NULL/EMPTY'}`);
        });
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== FIELD GROUP: performanceMetrics ===');
      if (project.performanceMetrics) {
        console.log(`  projectMetricsBlock: ${project.performanceMetrics.projectMetricsBlock !== null ? '✅ HAS DATA' : '❌ NULL'}`);
        if (project.performanceMetrics.projectMetricsBlock) {
          console.log(`  Metrics count: ${project.performanceMetrics.projectMetricsBlock.length}`);
        }
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== FIELD GROUP: financialPerformance ===');
      if (project.financialPerformance) {
        Object.entries(project.financialPerformance).forEach(([key, value]) => {
          console.log(`  ${key}: ${value !== null && value !== '' ? '✅ ' + value : '❌ NULL/EMPTY'}`);
        });
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== FIELD GROUP: media ===');
      if (project.media) {
        console.log(`  projectTestimonial: ${project.media.projectTestimonial ? '✅ ' + project.media.projectTestimonial.substring(0, 50) + '...' : '❌ NULL/EMPTY'}`);
        console.log(`  projectTestimonialAuthor: ${project.media.projectTestimonialAuthor ? '✅ ' + project.media.projectTestimonialAuthor : '❌ NULL/EMPTY'}`);
        console.log(`  projectTestimonialTitle: ${project.media.projectTestimonialTitle ? '✅ ' + project.media.projectTestimonialTitle : '❌ NULL/EMPTY'}`);
        console.log(`  projectGallery: ${project.media.projectGallery ? '✅ ' + project.media.projectGallery.length + ' images' : '❌ NULL/EMPTY'}`);
      } else {
        console.log('❌ Field group is NULL');
      }

      console.log('\n=== CHECKING FOR NULL OR MISSING FIELDS ===');
      const allFields = {
        'projectDetails.projectClient': project.projectDetails?.projectClient,
        'projectDetails.projectLocation': project.projectDetails?.projectLocation,
        'projectDetails.projectYear': project.projectDetails?.projectYear,
        'projectDetails.projectStatus': project.projectDetails?.projectStatus,
        'projectDetails.projectSubtitle': project.projectDetails?.projectSubtitle,
        'projectDetails.projectFeatured': project.projectDetails?.projectFeatured,
        'technicalSpecifications.projectSystemType': project.technicalSpecifications?.projectSystemType,
        'technicalSpecifications.projectAnnualProduction': project.technicalSpecifications?.projectAnnualProduction,
        'technicalSpecifications.projectProductionUnit': project.technicalSpecifications?.projectProductionUnit,
        'technicalSpecifications.projectFacilitySize': project.technicalSpecifications?.projectFacilitySize,
        'technicalSpecifications.projectFacilitySizeUnit': project.technicalSpecifications?.projectFacilitySizeUnit,
        'technicalSpecifications.projectStandingBiomass': project.technicalSpecifications?.projectStandingBiomass,
        'technicalSpecifications.projectBiomassUnit': project.technicalSpecifications?.projectBiomassUnit,
        'technicalSpecifications.projectWaterVolume': project.technicalSpecifications?.projectWaterVolume,
        'technicalSpecifications.projectWaterVolumeUnit': project.technicalSpecifications?.projectWaterVolumeUnit,
        'technicalSpecifications.projectSpeciesText': project.technicalSpecifications?.projectSpeciesText,
        'technicalSpecifications.projectProductionCycles': project.technicalSpecifications?.projectProductionCycles,
        'technicalSpecifications.projectGrowthPeriod': project.technicalSpecifications?.projectGrowthPeriod,
        'technicalSpecifications.projectSurvivalRate': project.technicalSpecifications?.projectSurvivalRate,
        'technicalSpecifications.projectMarketSize': project.technicalSpecifications?.projectMarketSize,
        'projectContentSections.projectOverview': project.projectContentSections?.projectOverview,
        'projectContentSections.projectChallenge': project.projectContentSections?.projectChallenge,
        'projectContentSections.projectSolution': project.projectContentSections?.projectSolution,
        'projectContentSections.projectResults': project.projectContentSections?.projectResults,
        'projectContentSections.projectTechnicalDetails': project.projectContentSections?.projectTechnicalDetails,
        'projectContentSections.projectImpact': project.projectContentSections?.projectImpact,
        'performanceMetrics.projectMetricsBlock': project.performanceMetrics?.projectMetricsBlock,
        'financialPerformance.projectCapex': project.financialPerformance?.projectCapex,
        'financialPerformance.projectCapexCurrency': project.financialPerformance?.projectCapexCurrency,
        'financialPerformance.projectOpexAnnual': project.financialPerformance?.projectOpexAnnual,
        'financialPerformance.projectProductionCost': project.financialPerformance?.projectProductionCost,
        'financialPerformance.projectRevenueAnnual': project.financialPerformance?.projectRevenueAnnual,
        'financialPerformance.projectProfitAnnual': project.financialPerformance?.projectProfitAnnual,
        'financialPerformance.projectProfitMargin': project.financialPerformance?.projectProfitMargin,
        'financialPerformance.projectRoi': project.financialPerformance?.projectRoi,
        'financialPerformance.projectFinancialNotes': project.financialPerformance?.projectFinancialNotes,
        'media.projectTestimonial': project.media?.projectTestimonial,
        'media.projectTestimonialAuthor': project.media?.projectTestimonialAuthor,
        'media.projectTestimonialTitle': project.media?.projectTestimonialTitle,
      };

      const missingFields = Object.entries(allFields).filter(([key, value]) => value === null || value === undefined || value === '');
      const populatedFields = Object.entries(allFields).filter(([key, value]) => value !== null && value !== undefined && value !== '');

      console.log(`\nTotal fields checked: ${Object.keys(allFields).length}`);
      console.log(`✅ Populated fields: ${populatedFields.length}`);
      console.log(`❌ Missing/null fields: ${missingFields.length}`);

      if (missingFields.length > 0) {
        console.log('\nMissing or null fields:');
        missingFields.forEach(([key]) => {
          console.log(`  - ${key}`);
        });
      }

      console.log('\n=== FULL RESPONSE (sample) ===');
      console.log(JSON.stringify(project, null, 2).substring(0, 1000) + '...\n');

      console.log('\n✅ VERIFICATION COMPLETE!');
      console.log(`Slug to use: ${project.slug}`);
      console.log(`All ACF field groups accessible: ${!missingFields.length ? 'YES' : 'PARTIALLY - see missing fields above'}`);

    } catch (error) {
      console.error('Error parsing response:', error);
      console.error('Raw response:', data);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
  process.exit(1);
});

req.write(postData);
req.end();
