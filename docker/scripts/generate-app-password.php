#!/usr/bin/env php
<?php
/**
 * Generate WordPress Application Password
 *
 * This script creates an Application Password for REST API authentication
 * by directly using WordPress functions.
 *
 * Usage:
 *   docker exec vismar-wordpress php /var/www/html/generate-app-password.php
 */

// Load WordPress
require_once('/var/www/html/wp-load.php');

// Configuration
$username = 'admin';
$app_name = 'REST API Script';

// Get user by username
$user = get_user_by('login', $username);

if (!$user) {
    echo "❌ ERROR: User '$username' not found\n";
    exit(1);
}

// Check if Application Passwords are available
if (!class_exists('WP_Application_Passwords')) {
    echo "❌ ERROR: Application Passwords not available (WordPress 5.6+ required)\n";
    exit(1);
}

// Create a new Application Password
$created = WP_Application_Passwords::create_new_application_password($user->ID, array(
    'name' => $app_name,
));

if (is_wp_error($created)) {
    echo "❌ ERROR: Failed to create Application Password\n";
    echo "   Reason: " . $created->get_error_message() . "\n";
    exit(1);
}

// Extract the password (first element of the returned array)
$password = $created[0];
$formatted_password = WP_Application_Passwords::chunk_password($password);

echo "========================================\n";
echo "✅ Application Password Created Successfully!\n";
echo "========================================\n\n";
echo "Username: $username\n";
echo "App Name: $app_name\n";
echo "Password (formatted): $formatted_password\n";
echo "Password (no spaces):  $password\n\n";
echo "========================================\n";
echo "To use with the populate script:\n";
echo "========================================\n";
echo "export WP_APP_PASSWORD='$password'\n";
echo "node /mnt/g/www/vismar-aqua-wp-headless/docker/scripts/populate-projects-api.js\n\n";
echo "Or run in one line:\n";
echo "WP_APP_PASSWORD='$password' node /mnt/g/www/vismar-aqua-wp-headless/docker/scripts/populate-projects-api.js\n\n";

exit(0);
