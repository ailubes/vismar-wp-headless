#!/usr/bin/env node
/**
 * REST API Script to Populate Projects from PROJECTS.md
 *
 * This script creates project posts and populates ACF fields
 * using the WordPress REST API instead of WP-CLI.
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Generate an Application Password in WordPress:
 *    - Log in to WordPress admin (http://localhost:8080/wp-admin)
 *    - Go to Users → Profile
 *    - Scroll down to "Application Passwords"
 *    - Enter a name (e.g., "REST API Script")
 *    - Click "Add New Application Password"
 *    - Copy the generated password (format: xxxx xxxx xxxx xxxx)
 *
 * 2. Run this script:
 *    WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx' node docker/scripts/populate-projects-api.js
 *
 *    Or set environment variables:
 *    export WP_USERNAME='admin'
 *    export WP_APP_PASSWORD='xxxx-xxxx-xxxx-xxxx'
 *    node docker/scripts/populate-projects-api.js
 *
 * REQUIREMENTS:
 * - WordPress 5.6+ (has built-in Application Passwords)
 * - ACF Pro plugin with REST API enabled for project fields
 * - 'project' custom post type registered
 *
 * NOTES:
 * - The script will check if ACF fields are accessible via REST API
 * - If ACF fields are not exposed, you'll need to enable 'show_in_rest' for ACF fields
 * - You can also use a plugin like "ACF to REST API" for older ACF versions
 */

const https = require('https');
const http = require('http');

// ============================================================================
// CONFIGURATION
// ============================================================================

const WORDPRESS_URL = process.env.WP_URL || 'http://localhost:8080';
const USERNAME = process.env.WP_USERNAME || 'admin';
const APP_PASSWORD = process.env.WP_APP_PASSWORD;

if (!APP_PASSWORD) {
  console.error('\n❌ ERROR: WP_APP_PASSWORD environment variable is required!\n');
  console.error('Please generate an Application Password in WordPress:');
  console.error('1. Go to Users → Profile in WordPress admin');
  console.error('2. Scroll to "Application Passwords" section');
  console.error('3. Enter a name and click "Add New Application Password"');
  console.error('4. Copy the generated password\n');
  console.error('Then run:');
  console.error('  WP_APP_PASSWORD=\'xxxx-xxxx-xxxx-xxxx\' node docker/scripts/populate-projects-api.js\n');
  process.exit(1);
}

// Remove spaces from Application Password if present
const cleanPassword = APP_PASSWORD.replace(/\s+/g, '');

// Create Basic Auth header
const authString = Buffer.from(`${USERNAME}:${cleanPassword}`).toString('base64');
const authHeader = `Basic ${authString}`;

// ============================================================================
// HTTP REQUEST HELPER
// ============================================================================

function makeRequest(method, path, data = null) {
  const url = new URL(path, WORDPRESS_URL);
  const isHttps = url.protocol === 'https:';
  const httpModule = isHttps ? https : http;

  const options = {
    method: method,
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  return new Promise((resolve, reject) => {
    const req = httpModule.request(url, options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);

          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(parsed);
          } else {
            reject({
              statusCode: res.statusCode,
              message: parsed.message || 'Unknown error',
              data: parsed
            });
          }
        } catch (e) {
          reject({
            statusCode: res.statusCode,
            message: 'Failed to parse response',
            rawData: responseData
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({
        message: 'Request failed',
        error: error.message
      });
    });

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

// ============================================================================
// WORDPRESS API FUNCTIONS
// ============================================================================

async function createProject(postData) {
  console.log('📝 Creating project post...');
  return await makeRequest('POST', '/wp-json/wp/v2/project', postData);
}

async function updateACFFields(postId, fields) {
  console.log('🔧 Updating ACF fields...');

  // Try to update ACF fields via the post endpoint
  // ACF fields should be included in the 'acf' object
  return await makeRequest('POST', `/wp-json/wp/v2/project/${postId}`, {
    acf: fields
  });
}

async function updatePostMeta(postId, metaKey, metaValue) {
  // Alternative method: Update individual meta fields
  // This requires the REST API meta endpoints to be enabled
  return await makeRequest('POST', `/wp-json/wp/v2/project/${postId}`, {
    meta: {
      [metaKey]: metaValue
    }
  });
}

// ============================================================================
// PROJECT DATA: UAE Shrimp Farm
// ============================================================================

async function createUAEShrimpFarm() {
  console.log('\n========================================');
  console.log('🦐 PROJECT 1: UAE Shrimp Farm RAS Design');
  console.log('========================================\n');

  // Step 1: Create the post
  const postData = {
    title: 'UAE Shrimp Farm RAS Design',
    content: 'Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.',
    status: 'publish',
    excerpt: 'Super-intensive indoor RAS facility producing 250 tonnes of Pacific White Shrimp annually in UAE desert climate.',
  };

  let project;
  try {
    project = await createProject(postData);
    console.log(`✅ Created post with ID: ${project.id}`);
  } catch (error) {
    console.error('❌ Failed to create post:', error.message);
    if (error.data) {
      console.error('Details:', JSON.stringify(error.data, null, 2));
    }
    throw error;
  }

  // Step 2: Prepare ACF fields (using snake_case as required by WordPress REST API)
  const acfFields = {
    // BASIC INFORMATION
    project_client: 'Aqua Bridge / Confidential Client, United Arab Emirates',
    project_location: 'United Arab Emirates',
    project_year: '2022',
    project_status: 'construction', // Must be a valid option
    project_subtitle: 'Aqua Bridge - 250 MT Annual Production',
    project_featured: true,

    // TECHNICAL SPECIFICATIONS
    project_system_type: 'ras', // Must be a valid option
    project_species_text: 'Pacific White Shrimp (Litopenaeus vannamei)',
    project_annual_production: 250,
    project_production_unit: 'tonnes',
    project_facility_size: 2000,
    project_production_cycles: 6,
    project_growth_period: '12 weeks from PL12 to market size',
    project_survival_rate: '57% (after culling)',
    project_market_size: '16-25g average',
    project_standing_biomass: 45,
    project_water_volume: 4000,

    // PERFORMANCE METRICS BLOCK (includes fields not in separate ACF fields)
    project_metrics_block: `Footprint: 2,000 m² per production unit
Water Volume: 4,000 m³ total
Water Exchange: <5% per day
Oxygen Consumption: 750g per kg feed
Feed Conversion Ratio: ≤1.55
Survival Rate: 57% (after culling)
Market Size: 16-25g average
Energy Demand: 250 kW constant`,

    // FINANCIAL PERFORMANCE
    project_capex: 1240000,
    project_capex_currency: 'USD',
    project_opex_annual: 917000,
    project_production_cost: '4.60',
    project_revenue_annual: 1690000,
    project_profit_annual: 652000,
    project_profit_margin: '38.65',
    project_roi: '~2 years',
    project_financial_notes: 'Projected financial performance assumes $7.50/kg sale price. Environmental benefits include minimal water consumption (<125 m³/day discharge), zero environmental impact (closed system), and local food production in food-insecure region.',

    // PROJECT CONTENT SECTIONS
    project_overview: `Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.

This project represents a comprehensive engineering solution for producing 250 tonnes of Pacific White Shrimp annually in one of the world's most challenging environments. The facility uses a multi-phase RAS approach with biofloc technology to maximize production efficiency while minimizing water consumption and environmental impact.

The system includes nursery tanks (2 × 150 m³), intermediate grow-out tanks (2 × 350 m³), and final production tanks (4 × 750 m³), supported by advanced water treatment systems including biofilters, mechanical filtration, ozone treatment, oxygen injection, and UV sterilization.`,

    project_challenge: `The UAE presents unique challenges for aquaculture:

- Extreme outdoor temperatures reaching 45-50°C in summer
- Severe water scarcity in a desert environment
- High biosecurity requirements to prevent disease introduction
- Critical need for reliable oxygen supply in high-density production
- Limited local expertise in super-intensive shrimp farming

The client required a facility that could operate year-round in these conditions while maintaining world-class production efficiency and profitability.`,

    project_solution: `Our engineering team developed a comprehensive solution addressing each challenge:

**Climate Management:** Insulated building design with efficient HVAC systems and energy-efficient cooling to maintain optimal water temperature despite extreme external conditions.

**Water Conservation:** 95% water recirculation with minimal discharge, integrated with desalination for makeup water. Total system volume of 4,000 m³ with less than 5% daily exchange.

**Biosecurity:** Multi-barrier approach combining ozone treatment, UV sterilization, and advanced filtration. Quarantine protocols for incoming stock.

**Oxygen Supply:** On-site oxygen generation (Linde SOLVOX system with 50-60 mg/L capacity) plus emergency LOX backup, with automated monitoring and failsafe systems to ensure continuous supply.

**Water Treatment:** 500 kg feed/day capacity biofilter, drum filters (60/80 micron), degassing units for CO₂ and nitrogen removal, and comprehensive support infrastructure including hatchery (4 million larvae/month capacity), automated feeding systems, and wastewater treatment with effluent processing and denitrification.`,

    project_results: `**Technical Performance:**
- Annual production capacity: 250 tonnes whole shrimp (HOSO)
- Standing biomass: 45 tonnes
- 6 production cycles per year
- Feed Conversion Ratio: ≤1.55
- Survival rate: 57% (after culling)
- Market size: 16-25g average

**Financial Performance (Projected):**
- CAPEX: $1.24M USD (design + equipment)
- OPEX: $917K USD annually
- Production cost: $4.60/kg
- Annual revenue: $1.69M (at $7.50/kg)
- Annual profit: $652K USD
- Profit margin: 38.65%
- ROI: ~2 years

**Environmental Benefits:**
- Minimal water consumption (<125 m³/day discharge)
- Zero environmental impact (closed system)
- Reduced reliance on wild-caught shrimp
- Local food production in food-insecure region`,

    project_technical_details: `**System Components:**

**Phase I - Nursery (Weeks 1-2):**
- 2 × 150 m³ concrete tanks
- Biofloc establishment phase
- Intensive monitoring and feeding

**Phase II - Intermediate (Weeks 3-4):**
- 2 × 350 m³ concrete tanks
- Accelerated growth phase
- Optimized stocking density

**Phase III - Growout (Weeks 5-12):**
- 4 × 750 m³ concrete tanks
- Final production phase
- Maximum biomass density: 15.36 kg/m³

**Water Treatment Systems:**
- Biofilter: 500 kg feed/day capacity
- Mechanical Filtration: Drum filters (60/80 micron)
- Ozone Treatment: For pathogen control
- Oxygen Injection: Linde SOLVOX system (50-60 mg/L capacity)
- Degassing Units: CO₂ and nitrogen removal
- UV Sterilization: Water disinfection

**Support Infrastructure:**
- Hatchery: 4 million larvae/month capacity
- Feed Storage: Automated feeding systems
- Oxygen Generation: On-site PSA system
- Wastewater Treatment: Effluent processing and denitrification
- Desalination Unit: Freshwater production
- Emergency Backup: LOX system + generators`,

    // TESTIMONIAL
    project_testimonial: 'Vismar Aqua\'s engineering team demonstrated exceptional expertise in designing our shrimp facility. Their attention to detail, understanding of biofloc technology, and ability to adapt to our local conditions was impressive. The system design is world-class.',
    project_testimonial_author: 'Project Manager',
    project_testimonial_title: 'Aqua Bridge Project, UAE',
  };

  // Step 3: Update ACF fields
  try {
    await updateACFFields(project.id, acfFields);
    console.log('✅ ACF fields updated successfully');
  } catch (error) {
    console.error('\n❌ Failed to update ACF fields:', error.message);

    if (error.statusCode === 400 || error.statusCode === 404) {
      console.error('\n⚠️  ACF fields may not be exposed to REST API.');
      console.error('Please ensure:');
      console.error('1. ACF Pro is installed and activated');
      console.error('2. ACF field groups have "Show in REST API" enabled');
      console.error('3. Or install the "ACF to REST API" plugin');
      console.error('\nTo enable REST API for ACF fields:');
      console.error('- Edit your ACF field group');
      console.error('- In "Settings", set "Show in REST API" to "Yes"');
    }

    if (error.data) {
      console.error('\nError details:', JSON.stringify(error.data, null, 2));
    }

    throw error;
  }

  console.log('\n✅ SUCCESS: UAE Shrimp Farm project created!');
  console.log(`   Project ID: ${project.id}`);
  console.log(`   Project URL: ${WORDPRESS_URL}/project/uae-shrimp-farm-ras-design/`);
  console.log('\nACF Fields populated:');
  console.log('  ✓ Basic Information (client, location, year, status, subtitle, featured)');
  console.log('  ✓ Technical Specifications (system type, species, production metrics)');
  console.log('  ✓ Performance Metrics Block');
  console.log('  ✓ Financial Performance (CAPEX, OPEX, revenue, profit, ROI)');
  console.log('  ✓ Project Content Sections (overview, challenge, solution, results, technical details)');
  console.log('  ✓ Testimonial (quote, author, title)');

  return project;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  console.log('🚀 Starting project population via WordPress REST API...');
  console.log(`   WordPress URL: ${WORDPRESS_URL}`);
  console.log(`   Username: ${USERNAME}`);
  console.log('');

  try {
    // Test authentication
    console.log('🔐 Testing authentication...');
    await makeRequest('GET', '/wp-json/wp/v2/users/me');
    console.log('✅ Authentication successful\n');

    // Create UAE Shrimp Farm project
    await createUAEShrimpFarm();

    console.log('\n========================================');
    console.log('🎉 ALL PROJECTS CREATED SUCCESSFULLY!');
    console.log('========================================\n');

  } catch (error) {
    console.error('\n========================================');
    console.error('❌ ERROR OCCURRED');
    console.error('========================================');
    console.error('Message:', error.message);

    if (error.statusCode) {
      console.error('Status Code:', error.statusCode);
    }

    if (error.data) {
      console.error('Details:', JSON.stringify(error.data, null, 2));
    }

    if (error.error) {
      console.error('Error:', error.error);
    }

    console.error('\nPlease check the error message above and:');
    console.error('1. Verify your Application Password is correct');
    console.error('2. Ensure WordPress is running at', WORDPRESS_URL);
    console.error('3. Check that the "project" post type is registered');
    console.error('4. Verify ACF fields are set up correctly');
    console.error('');

    process.exit(1);
  }
}

// Run the script
main();
