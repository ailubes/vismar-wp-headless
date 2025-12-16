<?php
/**
 * Verify Sample Content Creation
 */

require_once('/var/www/html/wp-load.php');

echo "===========================================\n";
echo "CONTENT VERIFICATION REPORT\n";
echo "===========================================\n\n";

// Count content by type
$post_types = ['page', 'service', 'project', 'software', 'species'];

foreach ($post_types as $post_type) {
    $posts_en = get_posts([
        'post_type' => $post_type,
        'numberposts' => -1,
        'post_status' => 'publish',
        'lang' => 'en'
    ]);

    $posts_uk = get_posts([
        'post_type' => $post_type,
        'numberposts' => -1,
        'post_status' => 'publish',
        'lang' => 'uk'
    ]);

    echo strtoupper($post_type) . "S:\n";
    echo "  English: " . count($posts_en) . "\n";
    echo "  Ukrainian: " . count($posts_uk) . "\n";
    echo "  Total: " . (count($posts_en) + count($posts_uk)) . "\n\n";

    // Show titles
    if (count($posts_en) > 0) {
        echo "  English titles:\n";
        foreach ($posts_en as $post) {
            echo "    - {$post->post_title} (ID: {$post->ID})\n";
        }
    }

    if (count($posts_uk) > 0) {
        echo "  Ukrainian titles:\n";
        foreach ($posts_uk as $post) {
            echo "    - {$post->post_title} (ID: {$post->ID})\n";
        }
    }

    echo "\n";
}

// Check menus
echo "MENUS:\n";
$menus = wp_get_nav_menus();
foreach ($menus as $menu) {
    $items = wp_get_nav_menu_items($menu->term_id);
    echo "  {$menu->name} (ID: {$menu->term_id}) - " . count($items) . " items\n";
}

echo "\n";

// Check front page
$front_page_id = get_option('page_on_front');
$show_on_front = get_option('show_on_front');
echo "FRONT PAGE SETTINGS:\n";
echo "  Show on front: {$show_on_front}\n";
echo "  Front page ID: {$front_page_id}\n";

if ($front_page_id) {
    $front_page = get_post($front_page_id);
    echo "  Front page title: {$front_page->post_title}\n";
}

echo "\n===========================================\n";
echo "Verification complete!\n";
echo "===========================================\n";
