<?php
/**
 * Polylang Configuration Script
 *
 * This script configures Polylang for bilingual content (English and Ukrainian)
 * when WP-CLI Polylang commands are not available.
 */

// Load WordPress
require_once('/var/www/html/wp-load.php');

if (!function_exists('pll_languages_list')) {
    die("Error: Polylang is not active or pll_languages_list function is not available.\n");
}

// Color output functions
function color_output($text, $color = 'green') {
    $colors = [
        'red' => "\033[0;31m",
        'green' => "\033[0;32m",
        'yellow' => "\033[0;33m",
        'blue' => "\033[0;34m",
        'reset' => "\033[0m"
    ];
    return $colors[$color] . $text . $colors['reset'] . "\n";
}

echo color_output("=== Polylang Configuration Script ===", 'blue');
echo "\n";

// Step 1: Add languages
echo color_output("Step 1: Adding languages...", 'yellow');

$polylang_model_languages = new PLL_Admin_Model(PLL());

// Check if English already exists
$existing_langs = pll_languages_list();
$en_exists = in_array('en', $existing_langs);
$uk_exists = in_array('uk', $existing_langs);

// Add English
if (!$en_exists) {
    $en_args = [
        'name'       => 'English',
        'slug'       => 'en',
        'locale'     => 'en_US',
        'rtl'        => 0,
        'flag'       => 'us',
        'term_group' => 0, // Default language
    ];

    $en_lang = $polylang_model_languages->add_language($en_args);

    if (is_wp_error($en_lang)) {
        echo color_output("Error adding English: " . $en_lang->get_error_message(), 'red');
    } else {
        echo color_output("✓ English language added successfully", 'green');

        // Set as default language
        $options = get_option('polylang');
        $options['default_lang'] = 'en';
        update_option('polylang', $options);
        echo color_output("✓ English set as default language", 'green');
    }
} else {
    echo color_output("✓ English language already exists", 'green');
}

// Add Ukrainian
if (!$uk_exists) {
    $uk_args = [
        'name'       => 'Українська',
        'slug'       => 'uk',
        'locale'     => 'uk',
        'rtl'        => 0,
        'flag'       => 'ua',
        'term_group' => 1,
    ];

    $uk_lang = $polylang_model_languages->add_language($uk_args);

    if (is_wp_error($uk_lang)) {
        echo color_output("Error adding Ukrainian: " . $uk_lang->get_error_message(), 'red');
    } else {
        echo color_output("✓ Ukrainian language added successfully", 'green');
    }
} else {
    echo color_output("✓ Ukrainian language already exists", 'green');
}

echo "\n";

// Step 2: Configure Polylang settings
echo color_output("Step 2: Configuring Polylang settings...", 'yellow');

$options = get_option('polylang');

// Enable URL modifications (language slug in URL)
$options['force_lang'] = 1;

// Enable rewrite rules
$options['rewrite'] = 1;

// Keep default language shown in URL (false = hide, true = show)
$options['hide_default'] = false;

// Enable media translation
$options['media_support'] = 1;

// Disable browser language detection
$options['browser'] = 0;

// Disable redirect based on browser language
$options['redirect_lang'] = 0;

// Enable post types for translation
$options['post_types'] = [
    'page',
    'post',
    'service',
    'project',
    'software',
    'species',
];

// Enable taxonomies for translation
$options['taxonomies'] = [
    'category',
    'post_tag',
];

// Update options
update_option('polylang', $options);
echo color_output("✓ Polylang settings configured", 'green');

echo "\n";

// Step 3: Verify configuration
echo color_output("Step 3: Verifying configuration...", 'yellow');

$languages = pll_languages_list(['fields' => 'all']);

if (empty($languages)) {
    echo color_output("✗ No languages configured!", 'red');
} else {
    echo color_output("Configured languages:", 'blue');
    foreach ($languages as $lang) {
        $default_marker = ($lang->slug === $options['default_lang']) ? ' [DEFAULT]' : '';
        echo "  - {$lang->name} ({$lang->slug}) - Locale: {$lang->locale} - Flag: {$lang->flag}{$default_marker}\n";
    }
}

echo "\n";

// Display enabled post types
echo color_output("Enabled post types for translation:", 'blue');
foreach ($options['post_types'] as $post_type) {
    echo "  - {$post_type}\n";
}

echo "\n";

// Display enabled taxonomies
echo color_output("Enabled taxonomies for translation:", 'blue');
foreach ($options['taxonomies'] as $taxonomy) {
    echo "  - {$taxonomy}\n";
}

echo "\n";

// Step 4: Flush rewrite rules
echo color_output("Step 4: Flushing rewrite rules...", 'yellow');
flush_rewrite_rules();
echo color_output("✓ Rewrite rules flushed", 'green');

echo "\n";
echo color_output("=== Polylang configuration complete! ===", 'green');
echo "\n";

// Display language codes info
echo color_output("Language Code Mapping:", 'yellow');
echo "  Polylang uses ISO 639-1 codes:\n";
echo "    - English: 'en'\n";
echo "    - Ukrainian: 'uk'\n";
echo "\n";
echo "  Frontend URL slugs (can be customized):\n";
echo "    - English: /en/\n";
echo "    - Ukrainian: /ua/ (if needed, map 'uk' to 'ua' in frontend)\n";
echo "\n";
