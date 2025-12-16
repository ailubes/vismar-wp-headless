<?php
/**
 * Create test pages in both languages to verify Polylang
 */

// Create English test page
WP_CLI::log('Creating English test page...');

$en_page_id = wp_insert_post([
    'post_title'   => 'Test Page English',
    'post_content' => 'This is English test content for Polylang verification.',
    'post_status'  => 'publish',
    'post_type'    => 'page',
]);

if (is_wp_error($en_page_id)) {
    WP_CLI::error('Failed to create English page: ' . $en_page_id->get_error_message());
}

// Set language to English
pll_set_post_language($en_page_id, 'en');
WP_CLI::success("Created English test page (ID: $en_page_id)");

// Create Ukrainian test page
WP_CLI::log('Creating Ukrainian test page...');

$uk_page_id = wp_insert_post([
    'post_title'   => 'Тестова сторінка',
    'post_content' => 'Це український тестовий контент для перевірки Polylang.',
    'post_status'  => 'publish',
    'post_type'    => 'page',
]);

if (is_wp_error($uk_page_id)) {
    WP_CLI::error('Failed to create Ukrainian page: ' . $uk_page_id->get_error_message());
}

// Set language to Ukrainian
pll_set_post_language($uk_page_id, 'uk');
WP_CLI::success("Created Ukrainian test page (ID: $uk_page_id)");

// Link the pages as translations
WP_CLI::log('Linking pages as translations...');
pll_save_post_translations([
    'en' => $en_page_id,
    'uk' => $uk_page_id,
]);
WP_CLI::success('Pages linked as translations');

WP_CLI::log('');
WP_CLI::log('Test pages created:');
WP_CLI::log("  - English: ID $en_page_id - " . get_permalink($en_page_id));
WP_CLI::log("  - Ukrainian: ID $uk_page_id - " . get_permalink($uk_page_id));
