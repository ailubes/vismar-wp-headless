<?php
/**
 * Plugin Name: REST API Basic Auth for Application Passwords
 * Description: Enables Basic Authentication with Application Passwords for REST API requests
 * Version: 1.0
 * Author: Vismar Aqua
 */

// Add filter to allow Basic Auth for REST API
add_filter('determine_current_user', 'rest_api_app_password_auth', 20);

function rest_api_app_password_auth($user_id) {
    // If we already have a user, return it
    if ($user_id) {
        return $user_id;
    }

    // Only apply to REST API requests
    if (!defined('REST_REQUEST') || !REST_REQUEST) {
        return $user_id;
    }

    // Get the Authorization header
    $auth_header = null;
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('getallheaders')) {
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $auth_header = $headers['Authorization'];
        }
    }

    if (!$auth_header) {
        return $user_id;
    }

    // Check if it's Basic Auth
    if (strpos($auth_header, 'Basic ') !== 0) {
        return $user_id;
    }

    // Decode the credentials
    $encoded = substr($auth_header, 6);
    $decoded = base64_decode($encoded);

    if (!$decoded) {
        return $user_id;
    }

    list($username, $password) = explode(':', $decoded, 2);

    if (!$username || !$password) {
        return $user_id;
    }

    // Get the user
    $user = get_user_by('login', $username);

    if (!$user) {
        return $user_id;
    }

    // Check if the password is an Application Password
    $app_passwords = WP_Application_Passwords::get_user_application_passwords($user->ID);

    if (empty($app_passwords)) {
        return $user_id;
    }

    // Check each application password
    foreach ($app_passwords as $item) {
        if (wp_check_password($password, $item['password'])) {
            // Update the last_used timestamp
            WP_Application_Passwords::record_application_password_usage($user->ID, $item['uuid']);

            // Return the user ID
            return $user->ID;
        }
    }

    return $user_id;
}

// Add a test endpoint to verify authentication
add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/auth-test', array(
        'methods' => 'GET',
        'callback' => function () {
            $current_user = wp_get_current_user();
            if ($current_user->ID > 0) {
                return new WP_REST_Response(array(
                    'authenticated' => true,
                    'user_id' => $current_user->ID,
                    'username' => $current_user->user_login,
                    'email' => $current_user->user_email,
                ), 200);
            } else {
                return new WP_REST_Response(array(
                    'authenticated' => false,
                    'message' => 'Not logged in',
                ), 401);
            }
        },
    ));
});
