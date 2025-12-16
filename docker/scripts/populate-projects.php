<?php
/**
 * WP-CLI Script to Populate Projects from PROJECTS.md
 *
 * Usage: wp eval-file populate-projects.php
 *
 * This script creates project posts and populates ACF fields
 * based on data from the PROJECTS.md file.
 */

if ( ! defined( 'WP_CLI' ) ) {
    return;
}

WP_CLI::log( "Starting project population..." );

// ============================================================================
// PROJECT 1: UAE Shrimp Farm RAS Design
// ============================================================================

WP_CLI::log( "Creating UAE Shrimp Farm project..." );

// Prepare post data
$post_data = array(
    'post_title'   => 'UAE Shrimp Farm RAS Design',
    'post_content' => 'Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.',
    'post_status'  => 'publish',
    'post_type'    => 'project',
    'post_excerpt' => 'Super-intensive indoor RAS facility producing 250 tonnes of Pacific White Shrimp annually in UAE desert climate.',
);

// Create the post
$post_id = wp_insert_post( $post_data );

if ( is_wp_error( $post_id ) ) {
    WP_CLI::error( "Failed to create post: " . $post_id->get_error_message() );
}

WP_CLI::log( "Created post with ID: $post_id" );

// ============================================================================
// BASIC INFORMATION
// ============================================================================

update_field( 'projectClient', 'Aqua Bridge / Confidential Client, United Arab Emirates', $post_id );
update_field( 'projectLocation', 'United Arab Emirates', $post_id );
update_field( 'projectYear', '2022', $post_id );
update_field( 'projectStatus', 'Design Completed, Construction Phase', $post_id );
update_field( 'projectSubtitle', 'Aqua Bridge - 250 MT Annual Production', $post_id );
update_field( 'projectFeatured', true, $post_id );

// ============================================================================
// TECHNICAL SPECIFICATIONS
// ============================================================================

update_field( 'projectSystemType', 'Super-Intensive Indoor RAS', $post_id );
update_field( 'projectSpeciesText', 'Pacific White Shrimp (Litopenaeus vannamei)', $post_id );
update_field( 'projectAnnualProduction', '250', $post_id );
update_field( 'projectProductionUnit', 'tonnes', $post_id );
update_field( 'projectFacilitySize', '2,000 m² per production unit', $post_id );
update_field( 'projectProductionCycles', '6 cycles per year', $post_id );
update_field( 'projectGrowthPeriod', '12 weeks from PL12 to market size', $post_id );
update_field( 'projectSurvivalRate', '57% (after culling)', $post_id );
update_field( 'projectMarketSize', '16-25g average', $post_id );
update_field( 'projectStandingBiomass', '45 tonnes', $post_id );
update_field( 'projectWaterVolume', '4,000 m³ total', $post_id );
update_field( 'projectWaterExchange', '<5% per day', $post_id );
update_field( 'projectFcr', '≤1.55', $post_id );
update_field( 'projectEnergyDemand', '250 kW constant', $post_id );
update_field( 'projectOxygenConsumption', '750g per kg feed', $post_id );

// ============================================================================
// PERFORMANCE METRICS BLOCK (formatted text)
// ============================================================================

$metrics_block = "Footprint: 2,000 m² per production unit\n";
$metrics_block .= "Water Volume: 4,000 m³ total\n";
$metrics_block .= "Water Exchange: <5% per day\n";
$metrics_block .= "Oxygen Consumption: 750g per kg feed\n";
$metrics_block .= "Feed Conversion Ratio: ≤1.55\n";
$metrics_block .= "Survival Rate: 57% (after culling)\n";
$metrics_block .= "Market Size: 16-25g average\n";
$metrics_block .= "Energy Demand: 250 kW constant";

update_field( 'projectMetricsBlock', $metrics_block, $post_id );

// ============================================================================
// FINANCIAL PERFORMANCE
// ============================================================================

update_field( 'projectCapex', '1240000', $post_id );
update_field( 'projectCapexCurrency', 'USD', $post_id );
update_field( 'projectOpexAnnual', '917000', $post_id );
update_field( 'projectProductionCost', '4.60', $post_id );
update_field( 'projectRevenueAnnual', '1690000', $post_id );
update_field( 'projectProfitAnnual', '652000', $post_id );
update_field( 'projectProfitMargin', '38.65', $post_id );
update_field( 'projectRoi', '~2 years', $post_id );
update_field( 'projectFinancialNotes', 'Projected financial performance assumes $7.50/kg sale price. Environmental benefits include minimal water consumption (<125 m³/day discharge), zero environmental impact (closed system), and local food production in food-insecure region.', $post_id );

// ============================================================================
// PROJECT CONTENT SECTIONS
// ============================================================================

// Project Overview
$overview = "Designed a state-of-the-art super-intensive shrimp production facility for the harsh desert climate of the UAE, utilizing advanced biofloc technology and zero-discharge water management.\n\n";
$overview .= "This project represents a comprehensive engineering solution for producing 250 tonnes of Pacific White Shrimp annually in one of the world's most challenging environments. The facility uses a multi-phase RAS approach with biofloc technology to maximize production efficiency while minimizing water consumption and environmental impact.\n\n";
$overview .= "The system includes nursery tanks (2 × 150 m³), intermediate grow-out tanks (2 × 350 m³), and final production tanks (4 × 750 m³), supported by advanced water treatment systems including biofilters, mechanical filtration, ozone treatment, oxygen injection, and UV sterilization.";

update_field( 'projectOverview', $overview, $post_id );

// Challenge
$challenge = "The UAE presents unique challenges for aquaculture:\n\n";
$challenge .= "- Extreme outdoor temperatures reaching 45-50°C in summer\n";
$challenge .= "- Severe water scarcity in a desert environment\n";
$challenge .= "- High biosecurity requirements to prevent disease introduction\n";
$challenge .= "- Critical need for reliable oxygen supply in high-density production\n";
$challenge .= "- Limited local expertise in super-intensive shrimp farming\n\n";
$challenge .= "The client required a facility that could operate year-round in these conditions while maintaining world-class production efficiency and profitability.";

update_field( 'projectChallenge', $challenge, $post_id );

// Solution
$solution = "Our engineering team developed a comprehensive solution addressing each challenge:\n\n";
$solution .= "**Climate Management:** Insulated building design with efficient HVAC systems and energy-efficient cooling to maintain optimal water temperature despite extreme external conditions.\n\n";
$solution .= "**Water Conservation:** 95% water recirculation with minimal discharge, integrated with desalination for makeup water. Total system volume of 4,000 m³ with less than 5% daily exchange.\n\n";
$solution .= "**Biosecurity:** Multi-barrier approach combining ozone treatment, UV sterilization, and advanced filtration. Quarantine protocols for incoming stock.\n\n";
$solution .= "**Oxygen Supply:** On-site oxygen generation (Linde SOLVOX system with 50-60 mg/L capacity) plus emergency LOX backup, with automated monitoring and failsafe systems.\n\n";
$solution .= "**Water Treatment:** 500 kg feed/day capacity biofilter, drum filters (60/80 micron), degassing units for CO₂ and nitrogen removal, and comprehensive support infrastructure including hatchery (4 million larvae/month capacity), automated feeding systems, and wastewater treatment with effluent processing and denitrification.";

update_field( 'projectSolution', $solution, $post_id );

// Results
$results = "**Technical Performance:**\n";
$results .= "- Annual production capacity: 250 tonnes whole shrimp (HOSO)\n";
$results .= "- Standing biomass: 45 tonnes\n";
$results .= "- 6 production cycles per year\n";
$results .= "- Feed Conversion Ratio: ≤1.55\n";
$results .= "- Survival rate: 57% (after culling)\n";
$results .= "- Market size: 16-25g average\n\n";
$results .= "**Financial Performance (Projected):**\n";
$results .= "- CAPEX: $1.24M USD (design + equipment)\n";
$results .= "- OPEX: $917K USD annually\n";
$results .= "- Production cost: $4.60/kg\n";
$results .= "- Annual revenue: $1.69M (at $7.50/kg)\n";
$results .= "- Annual profit: $652K USD\n";
$results .= "- Profit margin: 38.65%\n";
$results .= "- ROI: ~2 years\n\n";
$results .= "**Environmental Benefits:**\n";
$results .= "- Minimal water consumption (<125 m³/day discharge)\n";
$results .= "- Zero environmental impact (closed system)\n";
$results .= "- Reduced reliance on wild-caught shrimp\n";
$results .= "- Local food production in food-insecure region";

update_field( 'projectResults', $results, $post_id );

// Technical Details
$technical = "**System Components:**\n\n";
$technical .= "**Phase I - Nursery (Weeks 1-2):**\n";
$technical .= "- 2 × 150 m³ concrete tanks\n";
$technical .= "- Biofloc establishment phase\n";
$technical .= "- Intensive monitoring and feeding\n\n";
$technical .= "**Phase II - Intermediate (Weeks 3-4):**\n";
$technical .= "- 2 × 350 m³ concrete tanks\n";
$technical .= "- Accelerated growth phase\n";
$technical .= "- Optimized stocking density\n\n";
$technical .= "**Phase III - Growout (Weeks 5-12):**\n";
$technical .= "- 4 × 750 m³ concrete tanks\n";
$technical .= "- Final production phase\n";
$technical .= "- Maximum biomass density: 15.36 kg/m³\n\n";
$technical .= "**Water Treatment Systems:**\n";
$technical .= "- Biofilter: 500 kg feed/day capacity\n";
$technical .= "- Mechanical Filtration: Drum filters (60/80 micron)\n";
$technical .= "- Ozone Treatment: For pathogen control\n";
$technical .= "- Oxygen Injection: Linde SOLVOX system (50-60 mg/L capacity)\n";
$technical .= "- Degassing Units: CO₂ and nitrogen removal\n";
$technical .= "- UV Sterilization: Water disinfection\n\n";
$technical .= "**Support Infrastructure:**\n";
$technical .= "- Hatchery: 4 million larvae/month capacity\n";
$technical .= "- Feed Storage: Automated feeding systems\n";
$technical .= "- Oxygen Generation: On-site PSA system\n";
$technical .= "- Wastewater Treatment: Effluent processing and denitrification\n";
$technical .= "- Desalination Unit: Freshwater production\n";
$technical .= "- Emergency Backup: LOX system + generators";

update_field( 'projectTechnicalDetails', $technical, $post_id );

// ============================================================================
// ENGINEERING CHALLENGES (Repeater Field)
// ============================================================================

$challenges = array(
    array(
        'challengeTitle' => 'Extreme Climate Management',
        'challengeDescription' => 'Outdoor temperatures reaching 45-50°C in summer required specialized insulated building design and efficient HVAC systems. Energy-efficient cooling systems maintain optimal water temperature despite extreme external conditions.',
    ),
    array(
        'challengeTitle' => 'Water Scarcity',
        'challengeDescription' => 'Limited freshwater availability in desert environment necessitated 95% water recirculation with minimal discharge. System integrated with desalination for makeup water to ensure sustainable operations.',
    ),
    array(
        'challengeTitle' => 'Biosecurity',
        'challengeDescription' => 'Prevention of disease introduction and spread achieved through multi-barrier approach with ozone, UV, and advanced filtration. Quarantine protocols established for incoming stock.',
    ),
    array(
        'challengeTitle' => 'Reliable Oxygen Supply',
        'challengeDescription' => 'Critical for high-density production. Solution includes on-site oxygen generation plus emergency LOX backup with automated monitoring and failsafe systems to ensure continuous supply.',
    ),
);

update_field( 'projectChallenges', $challenges, $post_id );

// ============================================================================
// DELIVERABLES (Repeater Field)
// ============================================================================

$deliverables = array(
    array(
        'deliverableTitle' => 'Complete RAS Design Package',
        'deliverableDescription' => 'Preliminary calculations and feasibility study, detailed engineering drawings (50+ sheets), equipment specifications and sourcing, hydraulic calculations and flow diagrams, structural designs for concrete tanks, electrical and automation schematics.',
    ),
    array(
        'deliverableTitle' => 'Technical Documentation',
        'deliverableDescription' => 'Operations manual, maintenance procedures, biosecurity protocols, water quality management guidelines, and troubleshooting guides.',
    ),
    array(
        'deliverableTitle' => 'Project Management Support',
        'deliverableDescription' => 'Equipment procurement assistance, construction supervision, commissioning support, and comprehensive staff training program.',
    ),
);

update_field( 'projectDeliverables', $deliverables, $post_id );

// ============================================================================
// TESTIMONIAL
// ============================================================================

$testimonial = "Vismar Aqua's engineering team demonstrated exceptional expertise in designing our shrimp facility. Their attention to detail, understanding of biofloc technology, and ability to adapt to our local conditions was impressive. The system design is world-class.";

update_field( 'projectTestimonial', $testimonial, $post_id );
update_field( 'projectTestimonialAuthor', 'Project Manager', $post_id );
update_field( 'projectTestimonialTitle', 'Aqua Bridge Project, UAE', $post_id );

// ============================================================================
// COMPLETION MESSAGE
// ============================================================================

WP_CLI::success( "Successfully created UAE Shrimp Farm project with ID: $post_id" );
WP_CLI::log( "Project URL: " . get_permalink( $post_id ) );
WP_CLI::log( "" );
WP_CLI::log( "Fields populated:" );
WP_CLI::log( "  - Basic Information (client, location, year, status, etc.)" );
WP_CLI::log( "  - Technical Specifications (system type, species, production data)" );
WP_CLI::log( "  - Performance Metrics" );
WP_CLI::log( "  - Financial Performance" );
WP_CLI::log( "  - Project Content Sections (overview, challenge, solution, results)" );
WP_CLI::log( "  - Engineering Challenges (4 items)" );
WP_CLI::log( "  - Deliverables (3 items)" );
WP_CLI::log( "  - Testimonial" );
WP_CLI::log( "" );
WP_CLI::log( "Project population complete!" );
