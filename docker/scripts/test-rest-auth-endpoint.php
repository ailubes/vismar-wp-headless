#!/usr/bin/env php
<?php
/**
 * Test REST API Authentication Endpoint
 *
 * This script simulates a REST API request with Application Password
 */

// Simulate REST API environment
$_SERVER['REQUEST_METHOD'] = 'GET';
$_SERVER['REQUEST_URI'] = '/wp-json/wp/v2/users/me';
$_SERVER['HTTP_HOST'] = 'localhost:8080';
$_SERVER['SERVER_PROTOCOL'] = 'HTTP/1.1';

// Set Basic Auth header
$username = 'admin';
$password = 'jw1MoSEmttU80K3UcschEJuy';
$auth_string = base64_encode("$username:$password");
$_SERVER['HTTP_AUTHORIZATION'] = "Basic $auth_string";

// Load WordPress
define('WP_USE_THEMES', false);
require_once('/var/www/html/wp-load.php');

echo "========================================\n";
echo "REST API Authentication Test\n";
echo "========================================\n\n";

echo "Request Details:\n";
echo "  Method: {$_SERVER['REQUEST_METHOD']}\n";
echo "  URI: {$_SERVER['REQUEST_URI']}\n";
echo "  Auth Header: Basic ***\n\n";

// Check if REST API is available
if (!function_exists('rest_get_server')) {
    echo "❌ REST API functions not available\n";
    exit(1);
}

// Initialize REST API
rest_get_server();

// Check authentication
echo "Authentication Check:\n";

// Simulate REST authentication
$wp_rest_server = rest_get_server();
$auth_result = apply_filters('rest_authentication_errors', null);

if (is_wp_error($auth_result)) {
    echo "  ❌ Authentication Error:\n";
    echo "     Code: " . $auth_result->get_error_code() . "\n";
    echo "     Message: " . $auth_result->get_error_message() . "\n";
} elseif ($auth_result === true) {
    echo "  ✅ Authentication SUCCESSFUL!\n";
    $current_user = wp_get_current_user();
    if ($current_user->ID > 0) {
        echo "     User ID: {$current_user->ID}\n";
        echo "     Username: {$current_user->user_login}\n";
    }
} elseif ($auth_result === null || $auth_result === false) {
    echo "  ⚠️  No authentication method applied\n";
    echo "     This might mean the auth filter isn't working\n";

    // Try manual authentication
    echo "\n  Trying manual authentication...\n";
    $user = wp_authenticate_application_password(null, $username, $password);

    if (is_wp_error($user)) {
        echo "  ❌ Manual auth failed: " . $user->get_error_message() . "\n";
    } elseif ($user instanceof WP_User) {
        echo "  ✅ Manual authentication SUCCESSFUL!\n";
        echo "     User ID: {$user->ID}\n";
        echo "     Username: {$user->user_login}\n";
        wp_set_current_user($user->ID);
    } else {
        echo "  ⚠️  Unexpected result from manual auth\n";
        var_dump($user);
    }
}

echo "\n";
exit(0);
