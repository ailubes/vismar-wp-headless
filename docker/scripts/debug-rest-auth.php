#!/usr/bin/env php
<?php
/**
 * Debug REST API Authentication
 *
 * This script checks for any filters or plugins that might be blocking
 * Application Password authentication
 */

// Load WordPress
require_once('/var/www/html/wp-load.php');

echo "========================================\n";
echo "REST API Authentication Debug\n";
echo "========================================\n\n";

// Check for authentication filters
echo "Authentication Filters:\n";
global $wp_filter;

if (isset($wp_filter['rest_authentication_errors'])) {
    echo "  rest_authentication_errors filters:\n";
    foreach ($wp_filter['rest_authentication_errors']->callbacks as $priority => $callbacks) {
        foreach ($callbacks as $callback) {
            $function_name = 'Unknown';
            if (is_string($callback['function'])) {
                $function_name = $callback['function'];
            } elseif (is_array($callback['function']) && count($callback['function']) == 2) {
                if (is_object($callback['function'][0])) {
                    $function_name = get_class($callback['function'][0]) . '::' . $callback['function'][1];
                } else {
                    $function_name = $callback['function'][0] . '::' . $callback['function'][1];
                }
            }
            echo "    Priority $priority: $function_name\n";
        }
    }
} else {
    echo "  No custom filters found\n";
}

// Check for JWT plugins
echo "\nJWT Authentication Plugins:\n";
$active_plugins = get_option('active_plugins');
foreach ($active_plugins as $plugin) {
    if (stripos($plugin, 'jwt') !== false || stripos($plugin, 'auth') !== false) {
        echo "  - $plugin\n";
    }
}

// Check if Basic Auth is being filtered
echo "\nBasic Auth Test:\n";
if (function_exists('wp_authenticate_application_password')) {
    echo "  ✅ wp_authenticate_application_password() exists\n";

    // Test with actual credentials
    $username = 'admin';
    $password = 'jw1MoSEmttU80K3UcschEJuy';

    $user = wp_authenticate_application_password(null, $username, $password);

    if (is_wp_error($user)) {
        echo "  ❌ Authentication failed: " . $user->get_error_message() . "\n";
        echo "     Error code: " . $user->get_error_code() . "\n";
    } elseif ($user instanceof WP_User) {
        echo "  ✅ Authentication SUCCESSFUL!\n";
        echo "     User ID: {$user->ID}\n";
        echo "     Username: {$user->user_login}\n";
    } else {
        echo "  ❌ Authentication returned unexpected result\n";
    }
} else {
    echo "  ❌ wp_authenticate_application_password() does not exist\n";
}

// Check application password in database
echo "\nApplication Password in Database:\n";
$user = get_user_by('login', 'admin');
$passwords = WP_Application_Passwords::get_user_application_passwords($user->ID);

if (!empty($passwords)) {
    $app_pass = $passwords[0];
    echo "  Name: {$app_pass['name']}\n";
    echo "  UUID: {$app_pass['uuid']}\n";
    echo "  Password hash: {$app_pass['password']}\n";

    // Verify the password
    $test_password = 'jw1MoSEmttU80K3UcschEJuy';
    $is_valid = wp_check_password($test_password, $app_pass['password']);
    echo "  Password verification: " . ($is_valid ? "✅ VALID" : "❌ INVALID") . "\n";
}

echo "\n";
exit(0);
