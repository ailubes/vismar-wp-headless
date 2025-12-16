<?php
/**
 * Test Authentication Headers
 *
 * Access this file directly to see what headers WordPress is receiving
 * Usage: curl -H "Authorization: Basic [base64]" http://localhost:8080/test-auth-headers.php
 */

// Load WordPress
require_once('wp-load.php');

header('Content-Type: application/json');

$response = [
    'headers' => [
        'HTTP_AUTHORIZATION' => $_SERVER['HTTP_AUTHORIZATION'] ?? 'NOT SET',
        'Authorization' => $_SERVER['Authorization'] ?? 'NOT SET',
        'REDIRECT_HTTP_AUTHORIZATION' => $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ?? 'NOT SET',
    ],
    'server_vars' => [
        'PHP_AUTH_USER' => $_SERVER['PHP_AUTH_USER'] ?? 'NOT SET',
        'PHP_AUTH_PW' => $_SERVER['PHP_AUTH_PW'] ?? 'NOT SET',
    ],
    'all_headers' => getallheaders(),
];

// Try to authenticate
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $auth_header = $_SERVER['HTTP_AUTHORIZATION'];
    if (strpos($auth_header, 'Basic ') === 0) {
        $encoded = substr($auth_header, 6);
        $decoded = base64_decode($encoded);
        list($username, $password) = explode(':', $decoded, 2);

        // Get the user first
        $wp_user = get_user_by('login', $username);
        $response['user_lookup'] = [
            'username' => $username,
            'found' => $wp_user ? true : false,
            'user_id' => $wp_user ? $wp_user->ID : null,
        ];

        // Check if the password matches any application password
        if ($wp_user) {
            $passwords = WP_Application_Passwords::get_user_application_passwords($wp_user->ID);
            $response['app_passwords'] = [
                'count' => count($passwords),
            ];

            if (!empty($passwords)) {
                foreach ($passwords as $item) {
                    if (wp_check_password($password, $item['password'])) {
                        $response['auth_test'] = [
                            'status' => 'success',
                            'method' => 'manual_check',
                            'user_id' => $wp_user->ID,
                            'username' => $wp_user->user_login,
                            'app_name' => $item['name'],
                        ];
                        break;
                    }
                }
            }
        }

        // Also try the built-in function
        $user = wp_authenticate_application_password(null, $username, $password);

        if (is_wp_error($user)) {
            $response['wp_auth_result'] = [
                'status' => 'error',
                'code' => $user->get_error_code(),
                'message' => $user->get_error_message(),
            ];
        } elseif ($user instanceof WP_User) {
            $response['wp_auth_result'] = [
                'status' => 'success',
                'user_id' => $user->ID,
                'username' => $user->user_login,
            ];
        } else {
            $response['wp_auth_result'] = [
                'status' => 'null_or_false',
                'result' => gettype($user),
                'value' => $user,
            ];
        }
    }
}

echo json_encode($response, JSON_PRETTY_PRINT);
