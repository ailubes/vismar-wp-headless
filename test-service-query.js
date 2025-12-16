const axios = require('axios');

const WORDPRESS_GRAPHQL_URL = 'http://wordpress/graphql';

async function testServiceQuery() {
  console.log('Testing service queries...\n');

  // Test 1: Get all services
  console.log('1. Querying all services:');
  try {
    const response1 = await axios.post(WORDPRESS_GRAPHQL_URL, {
      query: `
        query GetAllServices {
          services(first: 10) {
            nodes {
              id
              title
              slug
              uri
              language {
                code
              }
            }
          }
        }
      `
    });

    console.log('Services found:', response1.data.data.services.nodes.length);
    response1.data.data.services.nodes.forEach(service => {
      console.log(`  - ${service.title} (slug: ${service.slug}, lang: ${service.language?.code})`);
    });
  } catch (error) {
    console.error('Error querying all services:', error.message);
  }

  console.log('\n2. Querying services with language filter (EN):');
  try {
    const response2 = await axios.post(WORDPRESS_GRAPHQL_URL, {
      query: `
        query GetAllServices($language: LanguageCodeFilterEnum!) {
          services(where: { language: $language }, first: 100) {
            nodes {
              id
              title
              slug
              uri
              language {
                code
              }
            }
          }
        }
      `,
      variables: { language: 'EN' }
    });

    console.log('Services found:', response2.data.data.services.nodes.length);
    response2.data.data.services.nodes.forEach(service => {
      console.log(`  - ${service.title} (slug: ${service.slug})`);
    });
  } catch (error) {
    console.error('Error querying EN services:', error.message);
  }

  console.log('\n3. Testing specific service by slug:');
  const testSlug = 'ras-systems-design';
  try {
    const response3 = await axios.post(WORDPRESS_GRAPHQL_URL, {
      query: `
        query GetServiceBySlug($slug: ID!) {
          service(id: $slug, idType: SLUG) {
            id
            title
            content
            slug
            serviceDetails {
              serviceTagline
              serviceFeatures
              serviceBenefits
            }
          }
        }
      `,
      variables: { slug: testSlug }
    });

    if (response3.data.data.service) {
      console.log(`Service '${testSlug}' found: ${response3.data.data.service.title}`);
    } else {
      console.log(`Service '${testSlug}' NOT found`);
    }
  } catch (error) {
    console.error('Error querying service by slug:', error.message);
  }
}

testServiceQuery();
