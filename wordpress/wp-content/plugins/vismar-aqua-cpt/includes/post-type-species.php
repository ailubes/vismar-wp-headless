<?php
/**
 * Species Custom Post Type
 *
 * @package Vismar_Aqua_CPT
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Species Custom Post Type
 */
function vismar_register_species_post_type() {
	$labels = array(
		'name'                     => _x( 'Species', 'Post type general name', 'vismar-aqua-cpt' ),
		'singular_name'            => _x( 'Species', 'Post type singular name', 'vismar-aqua-cpt' ),
		'menu_name'                => _x( 'Species', 'Admin Menu text', 'vismar-aqua-cpt' ),
		'name_admin_bar'           => _x( 'Species', 'Add New on Toolbar', 'vismar-aqua-cpt' ),
		'add_new'                  => __( 'Add New', 'vismar-aqua-cpt' ),
		'add_new_item'             => __( 'Add New Species', 'vismar-aqua-cpt' ),
		'new_item'                 => __( 'New Species', 'vismar-aqua-cpt' ),
		'edit_item'                => __( 'Edit Species', 'vismar-aqua-cpt' ),
		'view_item'                => __( 'View Species', 'vismar-aqua-cpt' ),
		'all_items'                => __( 'All Species', 'vismar-aqua-cpt' ),
		'search_items'             => __( 'Search Species', 'vismar-aqua-cpt' ),
		'parent_item_colon'        => __( 'Parent Species:', 'vismar-aqua-cpt' ),
		'not_found'                => __( 'No species found.', 'vismar-aqua-cpt' ),
		'not_found_in_trash'       => __( 'No species found in Trash.', 'vismar-aqua-cpt' ),
		'featured_image'           => _x( 'Species Cover Image', 'Overrides the "Featured Image" phrase', 'vismar-aqua-cpt' ),
		'set_featured_image'       => _x( 'Set cover image', 'Overrides the "Set featured image" phrase', 'vismar-aqua-cpt' ),
		'remove_featured_image'    => _x( 'Remove cover image', 'Overrides the "Remove featured image" phrase', 'vismar-aqua-cpt' ),
		'use_featured_image'       => _x( 'Use as cover image', 'Overrides the "Use as featured image" phrase', 'vismar-aqua-cpt' ),
		'archives'                 => _x( 'Species archives', 'The post type archive label used in nav menus', 'vismar-aqua-cpt' ),
		'insert_into_item'         => _x( 'Insert into species', 'Overrides the "Insert into post"/"Insert into page" phrase', 'vismar-aqua-cpt' ),
		'uploaded_to_this_item'    => _x( 'Uploaded to this species', 'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase', 'vismar-aqua-cpt' ),
		'filter_items_list'        => _x( 'Filter species list', 'Screen reader text for the filter links', 'vismar-aqua-cpt' ),
		'items_list_navigation'    => _x( 'Species list navigation', 'Screen reader text for the pagination', 'vismar-aqua-cpt' ),
		'items_list'               => _x( 'Species list', 'Screen reader text for the items list', 'vismar-aqua-cpt' ),
	);

	$args = array(
		'labels'             => $labels,
		'description'        => 'Aquaculture species information',
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'species' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 23,
		'menu_icon'          => 'dashicons-pets',
		'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
		'show_in_rest'       => true,
		'show_in_graphql'    => true,
		'graphql_single_name' => 'Species',
		'graphql_plural_name' => 'SpeciesTypes',
	);

	register_post_type( 'species', $args );
}

add_action( 'init', 'vismar_register_species_post_type' );
