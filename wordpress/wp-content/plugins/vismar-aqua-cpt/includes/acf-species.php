<?php
/**
 * ACF Field Group for Species CPT
 *
 * Defines custom fields for the Species custom post type
 * Fields are exposed via GraphQL for headless frontend
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register ACF field group for Species
 */
add_action( 'acf/init', 'vismar_register_acf_species_fields' );

function vismar_register_acf_species_fields() {

	// Check if ACF function exists
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
		'key' => 'group_species',
		'title' => 'Species Details',
		'fields' => array(
			array(
				'key' => 'field_species_scientific_name',
				'label' => 'Scientific Name',
				'name' => 'species_scientific_name',
				'graphql_field_name' => 'speciesScientificName',
				'type' => 'text',
				'instructions' => 'Latin/scientific name of the species (e.g., "Salmo salar")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_common_names',
				'label' => 'Common Names',
				'name' => 'species_common_names',
				'graphql_field_name' => 'speciesCommonNames',
				'type' => 'text',
				'instructions' => 'Common names in different languages, comma-separated (e.g., "Atlantic Salmon, Laks, Lax")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_image',
				'label' => 'Species Image',
				'name' => 'species_image',
				'graphql_field_name' => 'speciesImage',
				'type' => 'image',
				'instructions' => 'High-quality photo of the species',
				'required' => 0,
				'return_format' => 'array',
				'preview_size' => 'medium',
				'library' => 'all',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_optimal_temp',
				'label' => 'Optimal Temperature',
				'name' => 'species_optimal_temp',
				'graphql_field_name' => 'speciesOptimalTemp',
				'type' => 'text',
				'instructions' => 'Optimal temperature range (e.g., "14-18°C")',
				'required' => 0,
				'placeholder' => '14-18°C',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_optimal_ph',
				'label' => 'Optimal pH',
				'name' => 'species_optimal_ph',
				'graphql_field_name' => 'speciesOptimalPh',
				'type' => 'text',
				'instructions' => 'Optimal pH range (e.g., "6.5-7.5")',
				'required' => 0,
				'placeholder' => '6.5-7.5',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_optimal_salinity',
				'label' => 'Optimal Salinity',
				'name' => 'species_optimal_salinity',
				'graphql_field_name' => 'speciesOptimalSalinity',
				'type' => 'text',
				'instructions' => 'Salinity requirements (e.g., "30-35 ppt", "Freshwater", "Euryhaline")',
				'required' => 0,
				'placeholder' => '30-35 ppt',
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_growth_rate',
				'label' => 'Growth Rate',
				'name' => 'species_growth_rate',
				'graphql_field_name' => 'speciesGrowthRate',
				'type' => 'text',
				'instructions' => 'Growth characteristics (e.g., "Fast-growing, 1kg in 18 months")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_market_size',
				'label' => 'Market Size',
				'name' => 'species_market_size',
				'graphql_field_name' => 'speciesMarketSize',
				'type' => 'text',
				'instructions' => 'Typical market size (e.g., "4-6 kg", "300-500g")',
				'required' => 0,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_feeding',
				'label' => 'Feeding Requirements',
				'name' => 'species_feeding',
				'graphql_field_name' => 'speciesFeeding',
				'type' => 'textarea',
				'instructions' => 'Dietary needs and feeding practices',
				'required' => 0,
				'rows' => 4,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_systems',
				'label' => 'Recommended Systems',
				'name' => 'species_systems',
				'graphql_field_name' => 'speciesSystems',
				'type' => 'textarea',
				'instructions' => 'Aquaculture systems suitable for this species (e.g., "RAS, Flow-through, Sea cages")',
				'required' => 0,
				'rows' => 3,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_challenges',
				'label' => 'Common Challenges',
				'name' => 'species_challenges',
				'graphql_field_name' => 'speciesChallenges',
				'type' => 'textarea',
				'instructions' => 'Common challenges in farming this species',
				'required' => 0,
				'rows' => 4,
				'show_in_graphql' => 1,
			),
			array(
				'key' => 'field_species_related_projects',
				'label' => 'Related Projects',
				'name' => 'species_related_projects',
				'graphql_field_name' => 'speciesRelatedProjects',
				'type' => 'relationship',
				'instructions' => 'Select projects that involve this species',
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
					'value' => 'species',
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
		'description' => 'Custom fields for Species',
		'show_in_graphql' => 1,
		'graphql_field_name' => 'speciesDetails',
	) );
}
