<?php
/**
 * Plugin Name: Vismar Aqua ACF Fields
 * Description: Loads ACF field configurations for custom post types
 * Version: 1.0
 * Author: Vismar Aqua
 */

if (!defined('ABSPATH')) {
    exit;
}

// Load ACF field configurations
add_action('acf/init', 'vismar_load_acf_fields');

function vismar_load_acf_fields() {
    // Path to ACF fields file (inside Docker container)
    $acf_fields_file = '/var/www/html/wp-content/scripts/acf-fields-projects.php';

    if (file_exists($acf_fields_file)) {
        require_once($acf_fields_file);
    }
}
