<?php
/**
 * Test GraphQL Queries
 */

require_once('/var/www/html/wp-load.php');

echo "===========================================\n";
echo "GRAPHQL QUERY TEST\n";
echo "===========================================\n\n";

// Test 1: Check if WPGraphQL is active
if (!class_exists('WPGraphQL')) {
    echo "❌ ERROR: WPGraphQL plugin is not active!\n";
    exit(1);
}
echo "✓ WPGraphQL is active\n\n";

// Test 2: Check if Polylang integration is working
$languages = pll_languages_list();
echo "Languages configured: " . implode(', ', $languages) . "\n\n";

// Test 3: Sample data check
$services_en = get_posts([
    'post_type' => 'service',
    'numberposts' => 1,
    'lang' => 'en'
]);

if (!empty($services_en)) {
    $service = $services_en[0];
    echo "Sample Service (EN):\n";
    echo "  ID: {$service->ID}\n";
    echo "  Title: {$service->post_title}\n";

    // Check ACF fields
    $tagline = get_field('tagline', $service->ID);
    $features = get_field('features', $service->ID);

    echo "  ACF Tagline: " . ($tagline ? $tagline : 'NOT SET') . "\n";
    echo "  ACF Features: " . ($features ? 'SET (' . strlen($features) . ' chars)' : 'NOT SET') . "\n";
    echo "\n";
}

// Test 4: Check GraphQL schema
try {
    $schema = \WPGraphQL::get_schema();
    if ($schema) {
        echo "✓ GraphQL schema is available\n\n";
    }
} catch (Exception $e) {
    echo "❌ Error getting GraphQL schema: " . $e->getMessage() . "\n\n";
}

// Test 5: Check post types in GraphQL
$graphql_post_types = get_option('wpgraphql_post_types', []);
echo "Post types exposed to GraphQL:\n";
foreach (['page', 'service', 'project', 'software', 'species'] as $pt) {
    $pt_object = get_post_type_object($pt);
    if ($pt_object && isset($pt_object->graphql_single_name)) {
        echo "  ✓ {$pt} → {$pt_object->graphql_single_name}\n";
    } else {
        echo "  ⚠ {$pt} → NOT CONFIGURED\n";
    }
}

echo "\n===========================================\n";
echo "GraphQL Endpoint: http://localhost:8080/graphql\n";
echo "===========================================\n\n";

// Test 6: Example GraphQL query URL
echo "Test this query in GraphQL IDE:\n\n";
echo "query GetServices {\n";
echo "  services(first: 10, where: {language: EN}) {\n";
echo "    nodes {\n";
echo "      id\n";
echo "      title\n";
echo "      serviceFields {\n";
echo "        tagline\n";
echo "        features\n";
echo "      }\n";
echo "    }\n";
echo "  }\n";
echo "}\n\n";

echo "===========================================\n";
echo "Test complete!\n";
echo "===========================================\n";
