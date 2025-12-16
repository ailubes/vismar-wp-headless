#!/usr/bin/env php
<?php
/**
 * Activate a WordPress plugin
 */

require_once('/var/www/html/wp-load.php');

$plugin_slug = 'rest-api-basic-auth/rest-api-basic-auth.php';

// Check if plugin exists
$plugin_file = WP_PLUGIN_DIR . '/' . $plugin_slug;
if (!file_exists($plugin_file)) {
    echo "❌ Plugin file not found: $plugin_file\n";
    exit(1);
}

// Check if already active
if (is_plugin_active($plugin_slug)) {
    echo "✅ Plugin is already active: $plugin_slug\n";
    exit(0);
}

// Activate the plugin
$result = activate_plugin($plugin_slug);

if (is_wp_error($result)) {
    echo "❌ Failed to activate plugin: " . $result->get_error_message() . "\n";
    exit(1);
}

echo "✅ Plugin activated successfully: $plugin_slug\n";
exit(0);
