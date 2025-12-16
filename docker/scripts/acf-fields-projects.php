<?php
/**
 * ACF Field Groups for Projects Custom Post Type
 *
 * This file defines all Advanced Custom Fields for the 'project' post type.
 * Fields are registered programmatically using acf_add_local_field_group().
 *
 * @package Vismar_Aqua
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

add_action('acf/init', 'vismar_register_enhanced_project_fields');

function vismar_register_enhanced_project_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    /**
     * Group 1: Basic Information
     * Key: group_project_basic
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_basic',
    'title' => 'Project Basic Information',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'projectDetails',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_client',
            'label' => 'Client',
            'name' => 'project_client',
            'type' => 'text',
            'instructions' => 'Enter the client or company name for this project',
            'required' => 1,
            'placeholder' => 'e.g., Acme Aquaculture Ltd.',
        ),
        array(
            'key' => 'field_project_location',
            'label' => 'Location',
            'name' => 'project_location',
            'type' => 'text',
            'instructions' => 'Project location (city, country)',
            'required' => 1,
            'placeholder' => 'e.g., Bergen, Norway',
        ),
        array(
            'key' => 'field_project_year',
            'label' => 'Year',
            'name' => 'project_year',
            'type' => 'number',
            'instructions' => 'Year the project was completed or started',
            'required' => 1,
            'min' => 2000,
            'max' => 2100,
            'step' => 1,
            'placeholder' => date('Y'),
        ),
        array(
            'key' => 'field_project_status',
            'label' => 'Status',
            'name' => 'project_status',
            'type' => 'select',
            'instructions' => 'Current status of the project',
            'required' => 1,
            'choices' => array(
                'planning' => 'Planning',
                'design' => 'Design',
                'construction' => 'Construction',
                'operational' => 'Operational',
                'completed' => 'Completed',
            ),
            'default_value' => 'planning',
            'allow_null' => 0,
            'multiple' => 0,
            'ui' => 1,
            'return_format' => 'value',
        ),
        array(
            'key' => 'field_project_featured',
            'label' => 'Featured Project',
            'name' => 'project_featured',
            'type' => 'true_false',
            'instructions' => 'Mark this as a featured project to highlight it',
            'default_value' => 0,
            'ui' => 1,
            'ui_on_text' => 'Yes',
            'ui_off_text' => 'No',
        ),
        array(
            'key' => 'field_project_subtitle',
            'label' => 'Project Subtitle/Tagline',
            'name' => 'project_subtitle',
            'type' => 'text',
            'instructions' => 'Brief project description or tagline',
            'required' => 0,
            'placeholder' => 'e.g., Aqua Bridge - 250 MT Annual Production',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 2: Technical Specifications
     * Key: group_project_technical
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_technical',
    'title' => 'Technical Specifications',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'technicalSpecifications',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_system_type',
            'label' => 'System Type',
            'name' => 'project_system_type',
            'type' => 'select',
            'instructions' => 'Select the aquaculture system type',
            'required' => 1,
            'choices' => array(
                'ras' => 'RAS (Recirculating Aquaculture System)',
                'flow-through' => 'Flow-through',
                'hybrid' => 'Hybrid',
                'biofloc' => 'Biofloc',
                'imta' => 'IMTA (Integrated Multi-Trophic Aquaculture)',
                'other' => 'Other',
            ),
            'default_value' => 'ras',
            'allow_null' => 0,
            'multiple' => 0,
            'ui' => 1,
            'return_format' => 'value',
        ),
        array(
            'key' => 'field_project_species',
            'label' => 'Species',
            'name' => 'project_species',
            'type' => 'relationship',
            'instructions' => 'Select the species cultured in this project',
            'required' => 0,
            'post_type' => array('species'),
            'filters' => array('search', 'post_type'),
            'elements' => array('featured_image'),
            'min' => 0,
            'max' => '',
            'return_format' => 'id',
        ),
        array(
            'key' => 'field_project_species_text',
            'label' => 'Species',
            'name' => 'project_species_text',
            'type' => 'text',
            'instructions' => 'Enter species name with scientific name (e.g., Pacific White Shrimp (*Litopenaeus vannamei*))',
            'required' => 0,
            'placeholder' => 'e.g., Pacific White Shrimp (*Litopenaeus vannamei*)',
        ),
        array(
            'key' => 'field_project_annual_production',
            'label' => 'Annual Production',
            'name' => 'project_annual_production',
            'type' => 'number',
            'instructions' => 'Expected or actual annual production volume',
            'required' => 0,
            'min' => 0,
            'step' => 0.01,
            'placeholder' => 'e.g., 500',
        ),
        array(
            'key' => 'field_project_production_unit',
            'label' => 'Production Unit',
            'name' => 'project_production_unit',
            'type' => 'text',
            'instructions' => 'Unit of measurement for production',
            'required' => 0,
            'placeholder' => 'tonnes, kg, etc.',
            'default_value' => 'tonnes',
        ),
        array(
            'key' => 'field_project_facility_size',
            'label' => 'Facility Size',
            'name' => 'project_facility_size',
            'type' => 'number',
            'instructions' => 'Total facility size',
            'required' => 0,
            'min' => 0,
            'step' => 0.01,
            'placeholder' => 'e.g., 5000',
        ),
        array(
            'key' => 'field_project_facility_size_unit',
            'label' => 'Facility Size Unit',
            'name' => 'project_facility_size_unit',
            'type' => 'text',
            'instructions' => 'Unit of measurement for facility size',
            'required' => 0,
            'placeholder' => 'm², hectares, etc.',
            'default_value' => 'm²',
        ),
        array(
            'key' => 'field_project_standing_biomass',
            'label' => 'Standing Biomass',
            'name' => 'project_standing_biomass',
            'type' => 'number',
            'instructions' => 'Maximum standing biomass capacity',
            'required' => 0,
            'min' => 0,
            'step' => 0.01,
            'placeholder' => 'e.g., 150',
        ),
        array(
            'key' => 'field_project_biomass_unit',
            'label' => 'Biomass Unit',
            'name' => 'project_biomass_unit',
            'type' => 'text',
            'instructions' => 'Unit of measurement for biomass',
            'required' => 0,
            'placeholder' => 'tonnes, kg, etc.',
            'default_value' => 'tonnes',
        ),
        array(
            'key' => 'field_project_water_volume',
            'label' => 'Water Volume',
            'name' => 'project_water_volume',
            'type' => 'number',
            'instructions' => 'Total water volume in the system',
            'required' => 0,
            'min' => 0,
            'step' => 0.01,
            'placeholder' => 'e.g., 2000',
        ),
        array(
            'key' => 'field_project_water_volume_unit',
            'label' => 'Water Volume Unit',
            'name' => 'project_water_volume_unit',
            'type' => 'text',
            'instructions' => 'Unit of measurement for water volume',
            'required' => 0,
            'placeholder' => 'm³, liters, etc.',
            'default_value' => 'm³',
        ),
        array(
            'key' => 'field_project_production_cycles',
            'label' => 'Production Cycles per Year',
            'name' => 'project_production_cycles',
            'type' => 'number',
            'instructions' => 'Number of production cycles per year',
            'required' => 0,
            'min' => 0,
            'step' => 1,
            'placeholder' => 'e.g., 3',
        ),
        array(
            'key' => 'field_project_growth_period',
            'label' => 'Growth Period',
            'name' => 'project_growth_period',
            'type' => 'text',
            'instructions' => 'e.g., \'12 weeks from PL12 to market size\'',
            'required' => 0,
            'placeholder' => 'e.g., 12 weeks from PL12 to market size',
        ),
        array(
            'key' => 'field_project_survival_rate',
            'label' => 'Survival Rate',
            'name' => 'project_survival_rate',
            'type' => 'text',
            'instructions' => 'e.g., \'57% (after culling)\'',
            'required' => 0,
            'placeholder' => 'e.g., 57% (after culling)',
        ),
        array(
            'key' => 'field_project_market_size',
            'label' => 'Market Size',
            'name' => 'project_market_size',
            'type' => 'text',
            'instructions' => 'e.g., \'16-25g average\'',
            'required' => 0,
            'placeholder' => 'e.g., 16-25g average',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 1,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 3: Performance Metrics
     * Key: group_project_metrics
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_metrics',
    'title' => 'Performance Metrics',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'performanceMetrics',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_metrics_block',
            'label' => 'Key Performance Metrics',
            'name' => 'project_metrics_block',
            'type' => 'textarea',
            'instructions' => 'Enter performance metrics in plain text format (one per line)',
            'required' => 0,
            'rows' => 10,
            'placeholder' => 'Enter performance metrics here...',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 2,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 4: Financial Performance
     * Key: group_project_financial
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_financial',
    'title' => 'Financial Performance',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'financialPerformance',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_capex',
            'label' => 'CAPEX (Capital Expenditure)',
            'name' => 'project_capex',
            'type' => 'number',
            'instructions' => 'Total capital expenditure amount',
            'step' => 0.01,
        ),
        array(
            'key' => 'field_project_capex_currency',
            'label' => 'CAPEX Currency',
            'name' => 'project_capex_currency',
            'type' => 'text',
            'instructions' => 'Currency code (e.g., USD, EUR)',
            'default_value' => 'USD',
            'maxlength' => 3,
        ),
        array(
            'key' => 'field_project_opex_annual',
            'label' => 'Annual OPEX (Operating Expenses)',
            'name' => 'project_opex_annual',
            'type' => 'number',
            'instructions' => 'Annual operating expenses',
            'step' => 0.01,
        ),
        array(
            'key' => 'field_project_production_cost',
            'label' => 'Production Cost per Unit',
            'name' => 'project_production_cost',
            'type' => 'text',
            'instructions' => 'Cost per unit (e.g., "$4.60/kg")',
        ),
        array(
            'key' => 'field_project_revenue_annual',
            'label' => 'Annual Revenue',
            'name' => 'project_revenue_annual',
            'type' => 'number',
            'instructions' => 'Projected or actual annual revenue',
            'step' => 0.01,
        ),
        array(
            'key' => 'field_project_profit_annual',
            'label' => 'Annual Profit',
            'name' => 'project_profit_annual',
            'type' => 'number',
            'instructions' => 'Annual profit (revenue - operating costs)',
            'step' => 0.01,
        ),
        array(
            'key' => 'field_project_profit_margin',
            'label' => 'Profit Margin',
            'name' => 'project_profit_margin',
            'type' => 'text',
            'instructions' => 'Profit margin percentage (e.g., "38.65%")',
        ),
        array(
            'key' => 'field_project_roi',
            'label' => 'ROI (Return on Investment)',
            'name' => 'project_roi',
            'type' => 'text',
            'instructions' => 'Return on investment period (e.g., "~2 years")',
        ),
        array(
            'key' => 'field_project_financial_notes',
            'label' => 'Financial Notes',
            'name' => 'project_financial_notes',
            'type' => 'wysiwyg',
            'instructions' => 'Additional financial details or assumptions',
            'tabs' => 'all',
            'toolbar' => 'basic',
            'media_upload' => 0,
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 3,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 5: Project Content Sections
     * Key: group_project_content
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_content',
    'title' => 'Project Content Sections',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'projectContentSections',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_overview',
            'label' => 'Overview',
            'name' => 'project_overview',
            'type' => 'wysiwyg',
            'instructions' => 'General project overview and introduction',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_challenge',
            'label' => 'Challenge',
            'name' => 'project_challenge',
            'type' => 'wysiwyg',
            'instructions' => 'Describe the challenges or problems this project addressed',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_solution',
            'label' => 'Solution',
            'name' => 'project_solution',
            'type' => 'wysiwyg',
            'instructions' => 'Explain the solution or approach implemented',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_results',
            'label' => 'Results',
            'name' => 'project_results',
            'type' => 'wysiwyg',
            'instructions' => 'Document the results and outcomes achieved',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_technical_details',
            'label' => 'Technical Details',
            'name' => 'project_technical_details',
            'type' => 'wysiwyg',
            'instructions' => 'Detailed technical information about the project',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_impact',
            'label' => 'Impact',
            'name' => 'project_impact',
            'type' => 'wysiwyg',
            'instructions' => 'Environmental, social, and industry impact of the project',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_system_components',
            'label' => 'System Components',
            'name' => 'project_system_components',
            'type' => 'wysiwyg',
            'instructions' => 'Detailed breakdown of system phases and components',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_water_treatment',
            'label' => 'Water Treatment Systems',
            'name' => 'project_water_treatment',
            'type' => 'wysiwyg',
            'instructions' => 'Detailed water treatment system specifications',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_support_infrastructure',
            'label' => 'Support Infrastructure',
            'name' => 'project_support_infrastructure',
            'type' => 'wysiwyg',
            'instructions' => 'Supporting systems (hatchery, feed, oxygen, etc.)',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 4,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 6: Engineering Details
     * Key: group_project_engineering
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_engineering',
    'title' => 'Engineering Details',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'engineeringDetails',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_technologies',
            'label' => 'Technologies Used',
            'name' => 'project_technologies',
            'type' => 'repeater',
            'instructions' => 'Add technologies and equipment used in this project',
            'required' => 0,
            'layout' => 'table',
            'button_label' => 'Add Technology',
            'min' => 0,
            'max' => 0,
            'sub_fields' => array(
                array(
                    'key' => 'field_project_technology_name',
                    'label' => 'Technology Name',
                    'name' => 'technology_name',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., Drum Filter System',
                ),
                array(
                    'key' => 'field_project_technology_description',
                    'label' => 'Description',
                    'name' => 'technology_description',
                    'type' => 'textarea',
                    'required' => 0,
                    'rows' => 3,
                    'placeholder' => 'Brief description of the technology and its role',
                ),
            ),
        ),
        array(
            'key' => 'field_project_innovations',
            'label' => 'Innovations',
            'name' => 'project_innovations',
            'type' => 'wysiwyg',
            'instructions' => 'Describe any innovative approaches or novel solutions implemented',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
        array(
            'key' => 'field_project_performance_metrics',
            'label' => 'Performance Metrics',
            'name' => 'project_performance_metrics',
            'type' => 'repeater',
            'instructions' => 'Add key performance indicators and metrics',
            'required' => 0,
            'layout' => 'table',
            'button_label' => 'Add Metric',
            'min' => 0,
            'max' => 0,
            'sub_fields' => array(
                array(
                    'key' => 'field_project_metric_name',
                    'label' => 'Metric Name',
                    'name' => 'metric_name',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., Water Usage Efficiency',
                ),
                array(
                    'key' => 'field_project_metric_value',
                    'label' => 'Value',
                    'name' => 'metric_value',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., 95',
                ),
                array(
                    'key' => 'field_project_metric_unit',
                    'label' => 'Unit',
                    'name' => 'metric_unit',
                    'type' => 'text',
                    'required' => 0,
                    'placeholder' => 'e.g., %, L/kg, etc.',
                ),
            ),
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 5,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 7: Media & Testimonials
     * Key: group_project_media
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_media',
    'title' => 'Media & Testimonials',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'media',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_gallery',
            'label' => 'Project Gallery',
            'name' => 'project_gallery',
            'type' => 'gallery',
            'instructions' => 'Upload project images (maximum 10 images)',
            'required' => 0,
            'min' => 0,
            'max' => 10,
            'insert' => 'append',
            'library' => 'all',
            'min_width' => 800,
            'min_height' => 600,
            'mime_types' => 'jpg,jpeg,png,webp',
            'preview_size' => 'medium',
        ),
        array(
            'key' => 'field_project_testimonial',
            'label' => 'Testimonial',
            'name' => 'project_testimonial',
            'type' => 'textarea',
            'instructions' => 'Client testimonial or feedback about the project',
            'required' => 0,
            'rows' => 5,
            'placeholder' => 'Enter client testimonial here...',
        ),
        array(
            'key' => 'field_project_testimonial_author',
            'label' => 'Testimonial Author',
            'name' => 'project_testimonial_author',
            'type' => 'text',
            'instructions' => 'Name of the person providing the testimonial',
            'required' => 0,
            'placeholder' => 'e.g., John Smith',
        ),
        array(
            'key' => 'field_project_testimonial_title',
            'label' => 'Testimonial Author Title',
            'name' => 'project_testimonial_title',
            'type' => 'text',
            'instructions' => 'Job title or position of the testimonial author',
            'required' => 0,
            'placeholder' => 'e.g., CEO, Acme Aquaculture Ltd.',
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 6,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 8: Timeline
     * Key: group_project_timeline
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_timeline',
    'title' => 'Project Timeline',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'projectTimeline',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_start_date',
            'label' => 'Start Date',
            'name' => 'project_start_date',
            'type' => 'date_picker',
            'instructions' => 'When did the project start?',
            'required' => 0,
            'display_format' => 'F j, Y',
            'return_format' => 'Y-m-d',
            'first_day' => 1,
        ),
        array(
            'key' => 'field_project_completion_date',
            'label' => 'Completion Date',
            'name' => 'project_completion_date',
            'type' => 'date_picker',
            'instructions' => 'When was/will the project be completed?',
            'required' => 0,
            'display_format' => 'F j, Y',
            'return_format' => 'Y-m-d',
            'first_day' => 1,
        ),
        array(
            'key' => 'field_project_phases',
            'label' => 'Project Phases',
            'name' => 'project_phases',
            'type' => 'repeater',
            'instructions' => 'Define the different phases of the project',
            'required' => 0,
            'layout' => 'block',
            'button_label' => 'Add Phase',
            'min' => 0,
            'max' => 0,
            'sub_fields' => array(
                array(
                    'key' => 'field_project_phase_name',
                    'label' => 'Phase Name',
                    'name' => 'phase_name',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., Design & Engineering',
                ),
                array(
                    'key' => 'field_project_phase_description',
                    'label' => 'Description',
                    'name' => 'phase_description',
                    'type' => 'textarea',
                    'required' => 0,
                    'rows' => 3,
                    'placeholder' => 'Brief description of this phase',
                ),
                array(
                    'key' => 'field_project_phase_status',
                    'label' => 'Status',
                    'name' => 'phase_status',
                    'type' => 'select',
                    'required' => 1,
                    'choices' => array(
                        'planned' => 'Planned',
                        'in_progress' => 'In Progress',
                        'completed' => 'Completed',
                    ),
                    'default_value' => 'planned',
                    'allow_null' => 0,
                    'multiple' => 0,
                    'ui' => 1,
                    'return_format' => 'value',
                ),
            ),
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 7,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 9: Engineering Challenges
     * Key: group_project_challenges
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_challenges',
    'title' => 'Engineering Challenges',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'engineeringChallenges',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_challenges',
            'label' => 'Project Challenges',
            'name' => 'project_challenges',
            'type' => 'repeater',
            'instructions' => 'Add engineering challenges and solutions for this project',
            'required' => 0,
            'layout' => 'block',
            'button_label' => 'Add Challenge',
            'min' => 0,
            'max' => 0,
            'sub_fields' => array(
                array(
                    'key' => 'field_project_challenge_title',
                    'label' => 'Challenge Title',
                    'name' => 'challenge_title',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., Extreme Climate Management',
                ),
                array(
                    'key' => 'field_project_challenge_problem',
                    'label' => 'Problem Description',
                    'name' => 'challenge_problem',
                    'type' => 'textarea',
                    'required' => 0,
                    'rows' => 4,
                    'placeholder' => 'Describe the problem or challenge faced',
                ),
                array(
                    'key' => 'field_project_challenge_solution',
                    'label' => 'Solution Description',
                    'name' => 'challenge_solution',
                    'type' => 'textarea',
                    'required' => 0,
                    'rows' => 4,
                    'placeholder' => 'Describe the solution implemented',
                ),
            ),
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 8,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 10: Project Deliverables
     * Key: group_project_deliverables
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_deliverables',
    'title' => 'Project Deliverables',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'projectDeliverables',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_deliverables',
            'label' => 'Deliverables',
            'name' => 'project_deliverables',
            'type' => 'repeater',
            'instructions' => 'Add project deliverables by category',
            'required' => 0,
            'layout' => 'block',
            'button_label' => 'Add Deliverable Category',
            'min' => 0,
            'max' => 0,
            'sub_fields' => array(
                array(
                    'key' => 'field_project_deliverable_category',
                    'label' => 'Deliverable Category',
                    'name' => 'deliverable_category',
                    'type' => 'text',
                    'required' => 1,
                    'placeholder' => 'e.g., Design Package, Technical Documentation',
                ),
                array(
                    'key' => 'field_project_deliverable_items',
                    'label' => 'Deliverable Items',
                    'name' => 'deliverable_items',
                    'type' => 'textarea',
                    'required' => 0,
                    'rows' => 6,
                    'placeholder' => 'Enter deliverable items (one per line or bullet list)',
                ),
            ),
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 9,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));

    /**
     * Group 11: Environmental Impact
     * Key: group_project_impact
     */
    acf_add_local_field_group(array(
    'key' => 'group_project_environmental_impact',
    'title' => 'Environmental Impact',
    'show_in_rest' => 1,
    'show_in_graphql' => 1,
    'graphql_field_name' => 'environmentalImpact',
    'map_graphql_types_from_location_rules' => 0,
    'fields' => array(
        array(
            'key' => 'field_project_environmental_benefits',
            'label' => 'Environmental Benefits',
            'name' => 'project_environmental_benefits',
            'type' => 'wysiwyg',
            'instructions' => 'Describe environmental and sustainability benefits',
            'required' => 0,
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
        ),
    ),
    'location' => array(
        array(
            array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'project',
            ),
        ),
    ),
    'menu_order' => 10,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
));
}
