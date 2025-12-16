#!/bin/bash
# WordPress Plugin Installation Script
# This script installs WP-CLI and all required plugins for the headless WordPress setup

set -e  # Exit on error

CONTAINER_NAME="vismar-wordpress"
WP_CLI_VERSION="2.10.0"

echo "=========================================="
echo "WordPress Plugin Installation Script"
echo "=========================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}→ $1${NC}"
}

# Check if container is running
print_info "Checking if WordPress container is running..."
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    print_error "WordPress container '${CONTAINER_NAME}' is not running!"
    echo "Please start the container first with: cd docker && docker-compose up -d"
    exit 1
fi
print_success "Container is running"

# Step 1: Install WP-CLI in the container
print_info "Installing WP-CLI in container..."
docker exec ${CONTAINER_NAME} bash -c "
    if ! command -v wp &> /dev/null; then
        curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
        chmod +x wp-cli.phar
        mv wp-cli.phar /usr/local/bin/wp
        echo 'WP-CLI installed successfully'
    else
        echo 'WP-CLI already installed'
    fi
" || {
    print_error "Failed to install WP-CLI"
    exit 1
}
print_success "WP-CLI is ready"

# Step 2: Verify WordPress is installed
print_info "Checking WordPress installation status..."
if ! docker exec ${CONTAINER_NAME} wp core is-installed --allow-root 2>/dev/null; then
    print_error "WordPress is not installed yet!"
    echo ""
    echo "Please complete WordPress installation first by visiting:"
    echo "http://localhost:8080/wp-admin/install.php"
    echo ""
    echo "Or run the automated installation:"
    echo "docker exec ${CONTAINER_NAME} wp core install --url='http://localhost:8080' --title='Vismar Aqua' --admin_user='admin' --admin_email='admin@vismaraqua.com' --allow-root"
    exit 1
fi
print_success "WordPress is installed"

# Step 3: Configure Permalinks (required for GraphQL)
print_info "Configuring permalinks to 'Post name' structure..."
docker exec ${CONTAINER_NAME} wp rewrite structure '/%postname%/' --allow-root
docker exec ${CONTAINER_NAME} wp rewrite flush --allow-root
print_success "Permalinks configured"

# Step 4: Install WPGraphQL
print_info "Installing WPGraphQL plugin..."
docker exec ${CONTAINER_NAME} wp plugin install wp-graphql --activate --allow-root || {
    print_error "Failed to install WPGraphQL"
    exit 1
}
print_success "WPGraphQL installed and activated"

# Step 5: Install WPGraphQL IDE (GraphQL IDE)
print_info "Installing WPGraphQL IDE (GraphQL IDE)..."
docker exec ${CONTAINER_NAME} wp plugin install wpgraphql-ide --activate --allow-root || {
    print_error "Failed to install WPGraphQL IDE"
    exit 1
}
print_success "WPGraphQL IDE installed and activated"

# Step 6: Install Advanced Custom Fields (Free version)
print_info "Installing Advanced Custom Fields (ACF)..."
docker exec ${CONTAINER_NAME} wp plugin install advanced-custom-fields --activate --allow-root || {
    print_error "Failed to install ACF"
    exit 1
}
print_success "ACF installed and activated"

# Step 7: Install WPGraphQL for ACF
print_info "Installing WPGraphQL for Advanced Custom Fields..."
docker exec ${CONTAINER_NAME} wp plugin install wpgraphql-acf --activate --allow-root || {
    print_error "Failed to install WPGraphQL for ACF"
    exit 1
}
print_success "WPGraphQL for ACF installed and activated"

# Step 8: Install Polylang
print_info "Installing Polylang (multilingual support)..."
docker exec ${CONTAINER_NAME} wp plugin install polylang --activate --allow-root || {
    print_error "Failed to install Polylang"
    exit 1
}
print_success "Polylang installed and activated"

# Step 9: Install WPGraphQL Polylang Extension (from GitHub)
print_info "Installing WPGraphQL Polylang Extension..."
docker exec ${CONTAINER_NAME} bash -c "
    cd /var/www/html/wp-content/plugins
    if [ ! -d 'wp-graphql-polylang' ]; then
        curl -L https://github.com/valu-digital/wp-graphql-polylang/archive/refs/heads/master.zip -o wp-graphql-polylang.zip
        unzip -q wp-graphql-polylang.zip
        mv wp-graphql-polylang-master wp-graphql-polylang
        rm wp-graphql-polylang.zip
        echo 'WPGraphQL Polylang Extension downloaded'
    else
        echo 'WPGraphQL Polylang Extension already exists'
    fi
" || {
    print_error "Failed to install WPGraphQL Polylang Extension"
    echo "This plugin may need to be installed manually from: https://github.com/valu-digital/wp-graphql-polylang"
}

# Try to activate the plugin
docker exec ${CONTAINER_NAME} wp plugin activate wp-graphql-polylang --allow-root 2>/dev/null && {
    print_success "WPGraphQL Polylang Extension activated"
} || {
    print_error "Could not activate WPGraphQL Polylang Extension automatically"
    echo "This plugin may need manual activation from WordPress admin panel"
}

# Step 10: List all installed plugins
echo ""
print_info "Listing all installed plugins..."
docker exec ${CONTAINER_NAME} wp plugin list --allow-root

# Step 11: Print GraphQL endpoint
echo ""
echo "=========================================="
echo "Installation Complete!"
echo "=========================================="
echo ""
print_success "All plugins have been installed"
echo ""
echo "GraphQL Endpoint: http://localhost:8080/graphql"
echo "GraphiQL IDE:     http://localhost:8080/wp-admin/admin.php?page=graphiql-ide"
echo "WordPress Admin:  http://localhost:8080/wp-admin"
echo ""
echo "MANUAL CONFIGURATION REQUIRED:"
echo "----------------------------------------"
echo "1. ACF Pro License (if needed):"
echo "   - Upload ACF Pro zip manually via WordPress admin"
echo "   - Deactivate ACF Free first, then upload Pro version"
echo ""
echo "2. Polylang Language Setup:"
echo "   - Go to: Settings > Languages"
echo "   - Add languages: Norwegian (no) and English (en)"
echo "   - Set default language"
echo "   - Configure language switcher"
echo ""
echo "3. WPGraphQL Settings:"
echo "   - Go to: GraphQL > Settings"
echo "   - Review and configure GraphQL schema settings"
echo "   - Enable any additional post types/taxonomies as needed"
echo ""
echo "4. Test GraphQL:"
echo "   - Visit the GraphiQL IDE"
echo "   - Run a test query to verify everything works"
echo ""
echo "=========================================="
