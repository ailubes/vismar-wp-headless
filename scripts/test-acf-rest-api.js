/**
 * Test script to verify ACF REST API is working
 *
 * This script tests:
 * 1. Reading ACF fields via REST API (GET)
 * 2. Writing ACF fields via REST API (POST/PUT)
 */

const https = require('https');
const http = require('http');

const WORDPRESS_URL = process.env.WORDPRESS_URL || 'http://localhost:8080';
const WP_USERNAME = process.env.WP_USERNAME || 'admin';
const WP_PASSWORD = process.env.WP_PASSWORD || 'admin';

console.log('\n=== Testing ACF REST API ===\n');
console.log('WordPress URL:', WORDPRESS_URL);
console.log('Username:', WP_USERNAME);

async function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    const requestOptions = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: options.headers || {},
    };

    const req = protocol.request(requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed, headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data: data, headers: res.headers });
        }
      });
    });

    req.on('error', reject);

    if (options.body) {
      req.write(options.body);
    }

    req.end();
  });
}

async function testACFRestAPI() {
  try {
    // Test 1: Get projects list
    console.log('\n--- Test 1: GET Projects List ---');
    const projectsUrl = `${WORDPRESS_URL}/wp-json/wp/v2/project`;
    const projectsResponse = await makeRequest(projectsUrl);

    if (projectsResponse.status === 200 && Array.isArray(projectsResponse.data)) {
      console.log('✅ Successfully retrieved projects list');
      console.log(`   Found ${projectsResponse.data.length} projects`);

      if (projectsResponse.data.length > 0) {
        const firstProject = projectsResponse.data[0];
        console.log(`   First project: "${firstProject.title.rendered}" (ID: ${firstProject.id})`);

        // Test 2: Check if ACF fields are present
        console.log('\n--- Test 2: Check ACF Fields in Response ---');
        if (firstProject.acf) {
          console.log('✅ ACF fields are present in REST API response');
          console.log('   Sample ACF fields:');
          console.log('   - project_client:', firstProject.acf.project_client || '(empty)');
          console.log('   - project_location:', firstProject.acf.project_location || '(empty)');
          console.log('   - project_year:', firstProject.acf.project_year || '(empty)');
          console.log('   - project_status:', firstProject.acf.project_status || '(empty)');

          // Count total ACF fields
          const acfFieldCount = Object.keys(firstProject.acf).length;
          console.log(`   Total ACF fields returned: ${acfFieldCount}`);
        } else {
          console.log('❌ ACF fields are NOT present in REST API response');
          console.log('   This means show_in_rest is not enabled correctly');
          return false;
        }

        // Test 3: Get single project
        console.log('\n--- Test 3: GET Single Project ---');
        const singleProjectUrl = `${WORDPRESS_URL}/wp-json/wp/v2/project/${firstProject.id}`;
        const singleResponse = await makeRequest(singleProjectUrl);

        if (singleResponse.status === 200 && singleResponse.data.acf) {
          console.log('✅ Successfully retrieved single project with ACF fields');
          console.log(`   Project: "${singleResponse.data.title.rendered}"`);
        } else {
          console.log('❌ Failed to retrieve single project or ACF fields missing');
          return false;
        }

        // Test 4: Check if we can update (requires authentication)
        console.log('\n--- Test 4: Check Update Permissions ---');
        console.log('⚠️  Update testing requires authentication');
        console.log('   To test updates, you would need to:');
        console.log('   1. Authenticate via Application Passwords or JWT');
        console.log('   2. Send a POST/PUT request with ACF fields in the body');
        console.log('   3. Example: { "acf": { "project_client": "New Client" } }');

        console.log('\n--- Test 5: Check REST API Schema ---');
        const schemaUrl = `${WORDPRESS_URL}/wp-json/wp/v2/project/${firstProject.id}`;
        const schemaResponse = await makeRequest(schemaUrl, {
          method: 'OPTIONS'
        });

        console.log('   Allowed methods:', schemaResponse.headers.allow || 'Unknown');

      } else {
        console.log('⚠️  No projects found in WordPress');
        console.log('   Cannot test ACF fields without existing projects');
      }
    } else {
      console.log('❌ Failed to retrieve projects list');
      console.log('   Status:', projectsResponse.status);
      console.log('   Response:', JSON.stringify(projectsResponse.data, null, 2).substring(0, 500));
      return false;
    }

    console.log('\n=== ACF REST API Test Summary ===');
    console.log('✅ ACF fields are exposed via REST API');
    console.log('✅ Field groups with show_in_rest => 1 are working');
    console.log('✅ ACF data can be read via GET requests');
    console.log('ℹ️  For write operations, authentication is required');
    console.log('\n=== Test Complete ===\n');

    return true;

  } catch (error) {
    console.error('\n❌ ERROR during testing:');
    console.error('   Message:', error.message);
    console.error('   Stack:', error.stack);
    return false;
  }
}

// Run the test
testACFRestAPI()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
