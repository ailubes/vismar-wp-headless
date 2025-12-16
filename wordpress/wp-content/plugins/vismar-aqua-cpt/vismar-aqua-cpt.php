<?php
/**
 * Plugin Name: Vismar Aqua Custom Post Types
 * Plugin URI: https://vismar.no
 * Description: Custom post types for Services, Projects, Software, and Species
 * Version: 1.0.0
 * Author: Vismar Aqua
 * Author URI: https://vismar.no
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: vismar-aqua-cpt
 * Domain Path: /languages
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main plugin class
 */
class Vismar_Aqua_CPT {

	/**
	 * Plugin version
	 */
	const VERSION = '1.0.0';

	/**
	 * Plugin instance
	 */
	private static $instance = null;

	/**
	 * Get plugin instance
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	private function __construct() {
		$this->define_constants();
		$this->includes();
		$this->init_hooks();
	}

	/**
	 * Define plugin constants
	 */
	private function define_constants() {
		define( 'VISMAR_AQUA_CPT_VERSION', self::VERSION );
		define( 'VISMAR_AQUA_CPT_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
		define( 'VISMAR_AQUA_CPT_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
		define( 'VISMAR_AQUA_CPT_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
	}

	/**
	 * Include required files
	 */
	private function includes() {
		// Register custom post types
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/post-type-services.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/post-type-projects.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/post-type-software.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/post-type-species.php';

		// Register ACF field groups
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/acf-services.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/acf-projects.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/acf-software.php';
		require_once VISMAR_AQUA_CPT_PLUGIN_DIR . 'includes/acf-species.php';
	}

	/**
	 * Initialize hooks
	 */
	private function init_hooks() {
		// Register activation hook
		register_activation_hook( __FILE__, array( $this, 'activate' ) );

		// Register deactivation hook
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

		// Add admin notice if ACF is not active
		add_action( 'admin_notices', array( $this, 'acf_dependency_notice' ) );
	}

	/**
	 * Plugin activation callback
	 */
	public function activate() {
		// Register post types
		$this->register_post_types();

		// Flush rewrite rules
		flush_rewrite_rules();
	}

	/**
	 * Plugin deactivation callback
	 */
	public function deactivate() {
		// Flush rewrite rules
		flush_rewrite_rules();
	}

	/**
	 * Register all post types
	 */
	private function register_post_types() {
		if ( function_exists( 'vismar_register_service_post_type' ) ) {
			vismar_register_service_post_type();
		}
		if ( function_exists( 'vismar_register_project_post_type' ) ) {
			vismar_register_project_post_type();
		}
		if ( function_exists( 'vismar_register_software_post_type' ) ) {
			vismar_register_software_post_type();
		}
		if ( function_exists( 'vismar_register_species_post_type' ) ) {
			vismar_register_species_post_type();
		}
	}

	/**
	 * Display admin notice if ACF is not active
	 */
	public function acf_dependency_notice() {
		if ( ! function_exists( 'acf' ) ) {
			?>
			<div class="notice notice-warning is-dismissible">
				<p>
					<strong>Vismar Aqua Custom Post Types:</strong>
					This plugin requires <a href="<?php echo admin_url( 'plugin-install.php?s=advanced+custom+fields&tab=search&type=term' ); ?>">Advanced Custom Fields</a>
					to be installed and activated for custom fields to work properly.
				</p>
			</div>
			<?php
		}
	}
}

// Initialize the plugin
Vismar_Aqua_CPT::get_instance();
