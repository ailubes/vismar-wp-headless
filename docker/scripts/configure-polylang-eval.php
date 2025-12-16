<?php
/**
 * Polylang Configuration via WP-CLI eval
 */

// Check if Polylang is available
if (!class_exists('Polylang')) {
    WP_CLI::error('Polylang plugin is not active');
}

WP_CLI::log(WP_CLI::colorize('%BConfiguring Polylang...%n'));

// Get Polylang instance
$polylang = PLL();

if (!$polylang) {
    WP_CLI::error('Could not get Polylang instance');
}

// Initialize the model
$model = $polylang->model;

if (!$model) {
    WP_CLI::error('Could not get Polylang model');
}

// Add English language
WP_CLI::log('Adding English language...');

$languages = $model->get_languages_list();
$en_exists = false;
$uk_exists = false;

foreach ($languages as $lang) {
    if ($lang->slug === 'en') {
        $en_exists = true;
    }
    if ($lang->slug === 'uk') {
        $uk_exists = true;
    }
}

if (!$en_exists) {
    $args = array(
        'name'       => 'English',
        'slug'       => 'en',
        'locale'     => 'en_US',
        'rtl'        => 0,
        'flag'       => 'us',
        'term_group' => 0,
    );

    $result = $model->add_language($args);

    if (is_wp_error($result)) {
        WP_CLI::error('Failed to add English: ' . $result->get_error_message());
    } else {
        WP_CLI::success('English language added');

        // Set as default
        $options = get_option('polylang');
        $options['default_lang'] = 'en';
        update_option('polylang', $options);
        WP_CLI::success('English set as default language');
    }
} else {
    WP_CLI::log('English language already exists');
}

// Add Ukrainian language
WP_CLI::log('Adding Ukrainian language...');

if (!$uk_exists) {
    $args = array(
        'name'       => 'Українська',
        'slug'       => 'uk',
        'locale'     => 'uk',
        'rtl'        => 0,
        'flag'       => 'ua',
        'term_group' => 1,
    );

    $result = $model->add_language($args);

    if (is_wp_error($result)) {
        WP_CLI::error('Failed to add Ukrainian: ' . $result->get_error_message());
    } else {
        WP_CLI::success('Ukrainian language added');
    }
} else {
    WP_CLI::log('Ukrainian language already exists');
}

// Update Polylang settings
WP_CLI::log('Configuring Polylang settings...');

$options = get_option('polylang');

$options['force_lang'] = 1;          // Language slug in URL
$options['rewrite'] = 1;              // Enable rewrite
$options['hide_default'] = 0;         // Show default language in URL
$options['media_support'] = 1;        // Enable media translation
$options['browser'] = 0;              // Disable browser detection
$options['redirect_lang'] = 0;        // Disable redirect

// Enable post types
$options['post_types'] = array(
    'page',
    'post',
    'service',
    'project',
    'software',
    'species',
);

// Enable taxonomies
$options['taxonomies'] = array(
    'category',
    'post_tag',
);

update_option('polylang', $options);
WP_CLI::success('Polylang settings configured');

// Flush rewrite rules
flush_rewrite_rules();
WP_CLI::success('Rewrite rules flushed');

// Display configured languages
WP_CLI::log('');
WP_CLI::log(WP_CLI::colorize('%GConfigured languages:%n'));

$languages = $model->get_languages_list();
foreach ($languages as $lang) {
    $default = ($lang->slug === $options['default_lang']) ? ' [DEFAULT]' : '';
    WP_CLI::log("  - {$lang->name} ({$lang->slug}) - Locale: {$lang->locale} - Flag: {$lang->flag}{$default}");
}

WP_CLI::log('');
WP_CLI::log(WP_CLI::colorize('%GEnabled post types:%n'));
foreach ($options['post_types'] as $pt) {
    WP_CLI::log("  - {$pt}");
}

WP_CLI::log('');
WP_CLI::log(WP_CLI::colorize('%GEnabled taxonomies:%n'));
foreach ($options['taxonomies'] as $tax) {
    WP_CLI::log("  - {$tax}");
}

WP_CLI::success('Polylang configuration complete!');
