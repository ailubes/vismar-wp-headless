<?php
/**
 * ACF Field Group for Software CPT
 *
 * Defines custom fields for the Software custom post type
 * Fields are exposed via GraphQL for headless frontend
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register ACF field group for Software
 */
add_action( 'acf/init', 'vismar_register_acf_software_fields' );

function vismar_register_acf_software_fields() {

	// Check if ACF function exists
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
		'key' => 'group_software',
		'title' => 'Software Details',
		'fields' => array(
			array(
				'key' => 'field_software_icon',
				'label' => 'Software Icon',
				'name' => 'software_icon',
				'graphql_field_name' => 'softwareIcon',
				'type' => 'image',
				'instructions' => 'Upload an icon for this software product (recommended: 500x500px, SVG or PNG)',
				'required' => 0,
				'return_format' => 'array',
				'preview_size' => 'medium',
				'library' => 'all',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_tagline',
				'label' => 'Software Tagline',
				'name' => 'software_tagline',
				'graphql_field_name' => 'softwareTagline',
				'type' => 'text',
				'instructions' => 'Short, catchy tagline for this software (max 100 characters)',
				'required' => 0,
				'maxlength' => 100,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_description_short',
				'label' => 'Short Description',
				'name' => 'software_description_short',
				'graphql_field_name' => 'softwareDescriptionShort',
				'type' => 'textarea',
				'instructions' => 'Brief description for software cards and previews (2-3 sentences)',
				'required' => 0,
				'rows' => 3,
				'maxlength' => 300,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_key_features',
				'label' => 'Key Features',
				'name' => 'software_key_features',
				'graphql_field_name' => 'softwareKeyFeatures',
				'type' => 'wysiwyg',
				'instructions' => 'List and describe the key features of this software',
				'required' => 0,
				'tabs' => 'all',
				'toolbar' => 'full',
				'media_upload' => 1,
				'delay' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_technology_stack',
				'label' => 'Technology Stack',
				'name' => 'software_technology_stack',
				'graphql_field_name' => 'softwareTechnologyStack',
				'type' => 'text',
				'instructions' => 'Technologies and frameworks used (e.g., "React, Node.js, PostgreSQL")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_pricing',
				'label' => 'Pricing Information',
				'name' => 'software_pricing',
				'graphql_field_name' => 'softwarePricing',
				'type' => 'text',
				'instructions' => 'Pricing details or model (e.g., "From $99/month", "Contact for pricing")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_demo_url',
				'label' => 'Demo/Trial URL',
				'name' => 'software_demo_url',
				'graphql_field_name' => 'softwareDemoUrl',
				'type' => 'url',
				'instructions' => 'Link to demo or trial version',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_documentation_url',
				'label' => 'Documentation URL',
				'name' => 'software_documentation_url',
				'graphql_field_name' => 'softwareDocumentationUrl',
				'type' => 'url',
				'instructions' => 'Link to software documentation',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_software_case_studies',
				'label' => 'Case Studies',
				'name' => 'software_case_studies',
				'graphql_field_name' => 'softwareCaseStudies',
				'type' => 'relationship',
				'instructions' => 'Select projects that showcase this software in use',
				'required' => 0,
				'post_type' => array(
					0 => 'project',
				),
				'taxonomy' => '',
				'filters' => array(
					0 => 'search',
					1 => 'taxonomy',
				),
				'elements' => '',
				'min' => '',
				'max' => '',
				'return_format' => 'object',
				'show_in_graphql' => 1,
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'software',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => 'Custom fields for Software',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'softwareDetails',
	) );
}
