<?php
/**
 * ACF Field Group for Services CPT
 *
 * Defines custom fields for the Services custom post type
 * Fields are exposed via GraphQL for headless frontend
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register ACF field group for Services
 */
add_action( 'acf/init', 'vismar_register_acf_services_fields' );

function vismar_register_acf_services_fields() {

	// Check if ACF function exists
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
		'key' => 'group_services',
		'title' => 'Service Details',
		'fields' => array(
			array(
				'key' => 'field_service_icon',
				'label' => 'Service Icon',
				'name' => 'service_icon',
				'graphql_field_name' => 'serviceIcon',
				'type' => 'image',
				'instructions' => 'Upload an icon or illustration for this service (recommended: 500x500px, SVG or PNG)',
				'required' => 0,
				'return_format' => 'array',
				'preview_size' => 'medium',
				'library' => 'all',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_tagline',
				'label' => 'Service Tagline',
				'name' => 'service_tagline',
				'graphql_field_name' => 'serviceTagline',
				'type' => 'text',
				'instructions' => 'Short, catchy tagline for this service (max 100 characters)',
				'required' => 0,
				'maxlength' => 100,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_description_short',
				'label' => 'Short Description',
				'name' => 'service_description_short',
				'graphql_field_name' => 'serviceDescriptionShort',
				'type' => 'textarea',
				'instructions' => 'Brief description for service cards and previews (2-3 sentences)',
				'required' => 0,
				'rows' => 3,
				'maxlength' => 300,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_features',
				'label' => 'Service Features',
				'name' => 'service_features',
				'graphql_field_name' => 'serviceFeatures',
				'type' => 'textarea',
				'instructions' => 'List key features, one per line. Format: "Feature Title: Description"',
				'required' => 0,
				'rows' => 8,
				'placeholder' => "Advanced Monitoring: Real-time water quality tracking\nAutomation: Automated feeding and temperature control\nData Analytics: Comprehensive reporting and insights",
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_benefits',
				'label' => 'Service Benefits',
				'name' => 'service_benefits',
				'graphql_field_name' => 'serviceBenefits',
				'type' => 'wysiwyg',
				'instructions' => 'Detailed benefits and value proposition of this service',
				'required' => 0,
				'tabs' => 'all',
				'toolbar' => 'full',
				'media_upload' => 1,
				'delay' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_cta_text',
				'label' => 'Call-to-Action Text',
				'name' => 'service_cta_text',
				'graphql_field_name' => 'serviceCtaText',
				'type' => 'text',
				'instructions' => 'Button text for the main call-to-action (e.g., "Learn More", "Get Started")',
				'required' => 0,
				'default_value' => 'Learn More',
				'maxlength' => 50,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_cta_link',
				'label' => 'Call-to-Action Link',
				'name' => 'service_cta_link',
				'graphql_field_name' => 'serviceCtaLink',
				'type' => 'url',
				'instructions' => 'URL for the CTA button (internal or external link)',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_service_related_projects',
				'label' => 'Related Projects',
				'name' => 'service_related_projects',
				'graphql_field_name' => 'serviceRelatedProjects',
				'type' => 'relationship',
				'instructions' => 'Select projects that showcase this service',
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
					'value' => 'service',
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
		'description' => 'Custom fields for Services',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'serviceDetails',
	) );
}
