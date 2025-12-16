#!/usr/bin/env php
<?php
/**
 * Enable Application Passwords in wp-config.php
 *
 * This script adds WP_ENVIRONMENT_TYPE definition to enable
 * Application Passwords in non-SSL environments
 */

$wp_config_path = '/var/www/html/wp-config.php';

// Read the current wp-config.php
$config_content = file_get_contents($wp_config_path);

if ($config_content === false) {
    echo "❌ ERROR: Could not read wp-config.php\n";
    exit(1);
}

// Check if WP_ENVIRONMENT_TYPE is already defined
if (strpos($config_content, "WP_ENVIRONMENT_TYPE") !== false) {
    echo "✅ WP_ENVIRONMENT_TYPE is already defined in wp-config.php\n";
    exit(0);
}

// Find the line that says "/* That's all, stop editing! Happy publishing. */"
$marker = "/* That's all, stop editing! Happy publishing. */";
$marker_pos = strpos($config_content, $marker);

if ($marker_pos === false) {
    echo "❌ ERROR: Could not find insertion point in wp-config.php\n";
    exit(1);
}

// Insert the WP_ENVIRONMENT_TYPE definition before the marker
$new_config = substr($config_content, 0, $marker_pos);
$new_config .= "/* Enable Application Passwords for local development */\n";
$new_config .= "define('WP_ENVIRONMENT_TYPE', 'local');\n\n";
$new_config .= substr($config_content, $marker_pos);

// Backup the original config
$backup_path = $wp_config_path . '.backup-' . date('Y-m-d-H-i-s');
if (!copy($wp_config_path, $backup_path)) {
    echo "⚠️  WARNING: Could not create backup file\n";
}

// Write the new config
if (file_put_contents($wp_config_path, $new_config) === false) {
    echo "❌ ERROR: Could not write to wp-config.php\n";
    exit(1);
}

echo "========================================\n";
echo "✅ wp-config.php updated successfully!\n";
echo "========================================\n\n";
echo "Added:\n";
echo "  define('WP_ENVIRONMENT_TYPE', 'local');\n\n";
echo "Backup created at:\n";
echo "  $backup_path\n\n";
echo "Application Passwords should now be enabled.\n\n";

exit(0);
