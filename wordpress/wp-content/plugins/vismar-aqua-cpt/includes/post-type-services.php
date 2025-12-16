<?php
/**
 * Services Custom Post Type
 *
 * @package Vismar_Aqua_CPT
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Services Custom Post Type
 */
function vismar_register_service_post_type() {
	$labels = array(
		'name'                     => _x( 'Services', 'Post type general name', 'vismar-aqua-cpt' ),
		'singular_name'            => _x( 'Service', 'Post type singular name', 'vismar-aqua-cpt' ),
		'menu_name'                => _x( 'Services', 'Admin Menu text', 'vismar-aqua-cpt' ),
		'name_admin_bar'           => _x( 'Service', 'Add New on Toolbar', 'vismar-aqua-cpt' ),
		'add_new'                  => __( 'Add New', 'vismar-aqua-cpt' ),
		'add_new_item'             => __( 'Add New Service', 'vismar-aqua-cpt' ),
		'new_item'                 => __( 'New Service', 'vismar-aqua-cpt' ),
		'edit_item'                => __( 'Edit Service', 'vismar-aqua-cpt' ),
		'view_item'                => __( 'View Service', 'vismar-aqua-cpt' ),
		'all_items'                => __( 'All Services', 'vismar-aqua-cpt' ),
		'search_items'             => __( 'Search Services', 'vismar-aqua-cpt' ),
		'parent_item_colon'        => __( 'Parent Services:', 'vismar-aqua-cpt' ),
		'not_found'                => __( 'No services found.', 'vismar-aqua-cpt' ),
		'not_found_in_trash'       => __( 'No services found in Trash.', 'vismar-aqua-cpt' ),
		'featured_image'           => _x( 'Service Cover Image', 'Overrides the "Featured Image" phrase', 'vismar-aqua-cpt' ),
		'set_featured_image'       => _x( 'Set cover image', 'Overrides the "Set featured image" phrase', 'vismar-aqua-cpt' ),
		'remove_featured_image'    => _x( 'Remove cover image', 'Overrides the "Remove featured image" phrase', 'vismar-aqua-cpt' ),
		'use_featured_image'       => _x( 'Use as cover image', 'Overrides the "Use as featured image" phrase', 'vismar-aqua-cpt' ),
		'archives'                 => _x( 'Service archives', 'The post type archive label used in nav menus', 'vismar-aqua-cpt' ),
		'insert_into_item'         => _x( 'Insert into service', 'Overrides the "Insert into post"/"Insert into page" phrase', 'vismar-aqua-cpt' ),
		'uploaded_to_this_item'    => _x( 'Uploaded to this service', 'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase', 'vismar-aqua-cpt' ),
		'filter_items_list'        => _x( 'Filter services list', 'Screen reader text for the filter links', 'vismar-aqua-cpt' ),
		'items_list_navigation'    => _x( 'Services list navigation', 'Screen reader text for the pagination', 'vismar-aqua-cpt' ),
		'items_list'               => _x( 'Services list', 'Screen reader text for the items list', 'vismar-aqua-cpt' ),
	);

	$args = array(
		'labels'             => $labels,
		'description'        => 'Aquaculture engineering services',
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'services' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'menu_icon'          => 'dashicons-hammer',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
		'show_in_rest'       => true,
		'show_in_graphql'    => true,
		'graphql_single_name' => 'Service',
		'graphql_plural_name' => 'Services',
	);

	register_post_type( 'service', $args );
}

add_action( 'init', 'vismar_register_service_post_type' );
