const http = require('http');

const query = `
query GetProjectBySlug($slug: ID!) {
  project(id: $slug, idType: SLUG) {
    id
    title
    slug
    content
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
`;

const variables = {
  slug: "uae-shrimp-farm-ras-design-7"
};

const postData = JSON.stringify({ query, variables });

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

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
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
        process.exit(1);
      }

      console.log('========================================');
      console.log('✅ PROJECT FOUND VIA GRAPHQL');
      console.log('========================================\n');

      console.log('Basic Info:');
      console.log(`  Title: ${project.title}`);
      console.log(`  Slug: ${project.slug}`);
      console.log(`  ID: ${project.id}\n`);

      console.log('Project Details (projectDetails):');
      if (project.projectDetails) {
        console.log(`  ✅ projectClient: ${project.projectDetails.projectClient || 'NULL'}`);
        console.log(`  ✅ projectLocation: ${project.projectDetails.projectLocation || 'NULL'}`);
        console.log(`  ✅ projectYear: ${project.projectDetails.projectYear || 'NULL'}`);
        console.log(`  ✅ projectStatus: ${project.projectDetails.projectStatus || 'NULL'}`);
        console.log(`  ✅ projectSubtitle: ${project.projectDetails.projectSubtitle || 'NULL'}`);
        console.log(`  ✅ projectFeatured: ${project.projectDetails.projectFeatured || 'NULL'}\n`);
      } else {
        console.log('  ❌ Field group is NULL\n');
      }

      console.log('Performance Metrics:');
      if (project.performanceMetrics) {
        const metrics = project.performanceMetrics.projectMetricsBlock;
        if (metrics) {
          console.log(`  ✅ projectMetricsBlock: ${metrics.substring(0, 100)}...\n`);
        } else {
          console.log('  ❌ projectMetricsBlock is NULL or empty\n');
        }
      } else {
        console.log('  ❌ Field group is NULL\n');
      }

      console.log('Financial Performance:');
      if (project.financialPerformance) {
        console.log(`  ✅ CAPEX: ${project.financialPerformance.projectCapex || 'NULL'} ${project.financialPerformance.projectCapexCurrency || ''}`);
        console.log(`  ✅ OPEX (Annual): ${project.financialPerformance.projectOpexAnnual || 'NULL'}`);
        console.log(`  ✅ Production Cost: ${project.financialPerformance.projectProductionCost || 'NULL'}`);
        console.log(`  ✅ Revenue (Annual): ${project.financialPerformance.projectRevenueAnnual || 'NULL'}`);
        console.log(`  ✅ Profit (Annual): ${project.financialPerformance.projectProfitAnnual || 'NULL'}`);
        console.log(`  ✅ Profit Margin: ${project.financialPerformance.projectProfitMargin || 'NULL'}`);
        console.log(`  ✅ ROI: ${project.financialPerformance.projectRoi || 'NULL'}`);
        console.log(`  ✅ Notes: ${project.financialPerformance.projectFinancialNotes || 'NULL'}\n`);
      } else {
        console.log('  ❌ Field group is NULL\n');
      }

      console.log('========================================');
      console.log('SUMMARY');
      console.log('========================================');
      console.log('✅ Accessible field groups:');
      console.log('  - projectDetails (6 fields)');
      console.log('  - performanceMetrics (1 field)');
      console.log('  - financialPerformance (9 fields)\n');
      console.log('❌ MISSING field groups:');
      console.log('  - technicalSpecifications');
      console.log('  - projectContentSections');
      console.log('  - media');
      console.log('  - engineeringDetails');
      console.log('  - projectTimeline');
      console.log('  - engineeringChallenges');
      console.log('  - projectDeliverables');
      console.log('  - environmentalImpact\n');

      console.log('Full response:');
      console.log(JSON.stringify(project, null, 2));

    } catch (error) {
      console.error('Error:', error.message);
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
