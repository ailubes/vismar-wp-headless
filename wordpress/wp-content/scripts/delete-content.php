<?php
require_once('/var/www/html/wp-load.php');

echo "Deleting existing content...\n";

// Delete services
$services = get_posts(['post_type' => 'service', 'posts_per_page' => -1]);
foreach ($services as $service) {
    wp_delete_post($service->ID, true);
    echo "Deleted service: {$service->post_title} (ID: {$service->ID})\n";
}

// Delete projects  
$projects = get_posts(['post_type' => 'project', 'posts_per_page' => -1]);
foreach ($projects as $project) {
    wp_delete_post($project->ID, true);
    echo "Deleted project: {$project->post_title} (ID: {$project->ID})\n";
}

// Delete software
$software = get_posts(['post_type' => 'software', 'posts_per_page' => -1]);
foreach ($software as $soft) {
    wp_delete_post($soft->ID, true);
    echo "Deleted software: {$soft->post_title} (ID: {$soft->ID})\n";
}

// Delete species
$species = get_posts(['post_type' => 'species', 'posts_per_page' => -1]);
foreach ($species as $spec) {
    wp_delete_post($spec->ID, true);
    echo "Deleted species: {$spec->post_title} (ID: {$spec->ID})\n";
}

// Delete pages (except existing ones)
$pages = get_posts(['post_type' => 'page', 'posts_per_page' => -1]);
foreach ($pages as $page) {
    wp_delete_post($page->ID, true);
    echo "Deleted page: {$page->post_title} (ID: {$page->ID})\n";
}

echo "\nContent deletion complete!\n";
