#!/usr/bin/env php
<?php
/**
 * Check Application Password Authentication
 *
 * This script tests if Application Passwords are working correctly
 */

// Load WordPress
require_once('/var/www/html/wp-load.php');

echo "========================================\n";
echo "Application Password Status Check\n";
echo "========================================\n\n";

// Check WordPress version
echo "WordPress Version: " . get_bloginfo('version') . "\n";

// Check if Application Passwords are available
if (class_exists('WP_Application_Passwords')) {
    echo "✅ WP_Application_Passwords class is available\n";
} else {
    echo "❌ WP_Application_Passwords class NOT available\n";
    echo "   (Requires WordPress 5.6+)\n";
    exit(1);
}

// Check if Application Passwords are enabled
if (wp_is_application_passwords_available()) {
    echo "✅ Application Passwords are enabled\n";
} else {
    echo "❌ Application Passwords are NOT enabled\n";
    echo "   Checking why...\n";

    // Check for SSL requirement
    if (!is_ssl()) {
        echo "   ⚠️  SSL is not enabled (this might be required)\n";
        echo "   You may need to add this to wp-config.php:\n";
        echo "   define('WP_ENVIRONMENT_TYPE', 'local');\n";
    }
}

// Get admin user
$user = get_user_by('login', 'admin');
if (!$user) {
    echo "❌ Admin user not found\n";
    exit(1);
}

echo "✅ Admin user found (ID: {$user->ID})\n";

// List existing Application Passwords
$passwords = WP_Application_Passwords::get_user_application_passwords($user->ID);

echo "\nExisting Application Passwords:\n";
if (empty($passwords)) {
    echo "   (none)\n";
} else {
    foreach ($passwords as $password) {
        echo "   - {$password['name']} (UUID: {$password['uuid']})\n";
        echo "     Created: " . date('Y-m-d H:i:s', $password['created']) . "\n";
        if (isset($password['last_used'])) {
            echo "     Last used: " . date('Y-m-d H:i:s', $password['last_used']) . "\n";
        }
    }
}

// Check REST API
echo "\nREST API Status:\n";
$rest_enabled = get_option('rest_api_enabled', true);
echo "   REST API enabled: " . ($rest_enabled ? 'Yes' : 'No') . "\n";

// Check for REST API filters
if (has_filter('rest_authentication_errors')) {
    echo "   ⚠️  Custom REST authentication filters detected\n";
}

echo "\n========================================\n";
echo "Configuration Recommendations:\n";
echo "========================================\n";

// Check if HTTPS is required
if (!is_ssl()) {
    echo "\nFor local development without SSL, add to wp-config.php:\n";
    echo "  define('WP_ENVIRONMENT_TYPE', 'local');\n";
}

echo "\nTo test authentication manually:\n";
echo "  curl -X GET 'http://localhost:8080/wp-json/wp/v2/users/me' \\\n";
echo "    -H 'Authorization: Basic " . base64_encode('admin:YOUR_APP_PASSWORD') . "'\n\n";

exit(0);
