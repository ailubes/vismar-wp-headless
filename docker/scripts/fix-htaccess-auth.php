#!/usr/bin/env php
<?php
/**
 * Fix .htaccess to support Basic Auth headers
 *
 * This script adds the necessary Apache configuration to pass
 * Authorization headers to PHP for Application Passwords
 */

$htaccess_path = '/var/www/html/.htaccess';

// Read the current .htaccess
if (!file_exists($htaccess_path)) {
    echo "❌ ERROR: .htaccess file not found at $htaccess_path\n";
    exit(1);
}

$htaccess_content = file_get_contents($htaccess_path);

if ($htaccess_content === false) {
    echo "❌ ERROR: Could not read .htaccess\n";
    exit(1);
}

// Check if the rule already exists
if (strpos($htaccess_content, 'HTTP_AUTHORIZATION') !== false ||
    strpos($htaccess_content, 'Authorization') !== false) {
    echo "✅ Authorization headers are already configured in .htaccess\n";
    exit(0);
}

// Backup the original .htaccess
$backup_path = $htaccess_path . '.backup-' . date('Y-m-d-H-i-s');
if (!copy($htaccess_path, $backup_path)) {
    echo "⚠️  WARNING: Could not create backup file\n";
}

// Add the Authorization header rules at the beginning of the file
$new_rules = "# Allow Authorization header for Application Passwords\n";
$new_rules .= "<IfModule mod_rewrite.c>\n";
$new_rules .= "RewriteEngine On\n";
$new_rules .= "RewriteCond %{HTTP:Authorization} ^(.*)\n";
$new_rules .= "RewriteRule .* - [e=HTTP_AUTHORIZATION:%1]\n";
$new_rules .= "</IfModule>\n\n";
$new_rules .= "# Alternative for CGI/FastCGI\n";
$new_rules .= "SetEnvIf Authorization \"(.*)\" HTTP_AUTHORIZATION=\$1\n\n";

$new_htaccess = $new_rules . $htaccess_content;

// Write the new .htaccess
if (file_put_contents($htaccess_path, $new_htaccess) === false) {
    echo "❌ ERROR: Could not write to .htaccess\n";
    exit(1);
}

echo "========================================\n";
echo "✅ .htaccess updated successfully!\n";
echo "========================================\n\n";
echo "Added Authorization header support:\n";
echo "  - RewriteRule for mod_rewrite\n";
echo "  - SetEnvIf for CGI/FastCGI\n\n";
echo "Backup created at:\n";
echo "  $backup_path\n\n";

exit(0);
