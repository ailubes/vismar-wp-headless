#!/bin/bash
# Vismar Aqua - Start Development Environment

set -e

echo "======================================"
echo "Starting Vismar Aqua Docker Environment"
echo "======================================"

# Check if .env exists
if [ ! -f "../.env" ]; then
    echo "⚠️  No .env file found. Copying from .env.example..."
    cp ../.env.example ../.env
    echo "✅ Created .env file. Please review and update the values."
    echo ""
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p ../wordpress/wp-content/plugins
mkdir -p ../wordpress/wp-content/themes
mkdir -p ../wordpress/wp-content/uploads

# Start Docker containers
echo "🐳 Starting Docker containers..."
cd ..
docker-compose -f docker/docker-compose.yml up -d

echo ""
echo "✅ Docker containers started successfully!"
echo ""
echo "======================================"
echo "SERVICES AVAILABLE:"
echo "======================================"
echo "🌐 WordPress:     http://localhost:8080"
echo "🔧 phpMyAdmin:    http://localhost:8081"
echo "⚛️  Next.js:       http://localhost:3000"
echo "🔄 Nginx Proxy:   http://localhost"
echo ""
echo "======================================"
echo "USEFUL COMMANDS:"
echo "======================================"
echo "View logs:        docker-compose -f docker/docker-compose.yml logs -f"
echo "Stop services:    docker-compose -f docker/docker-compose.yml down"
echo "Restart:          docker-compose -f docker/docker-compose.yml restart"
echo "Shell (WP):       docker-compose -f docker/docker-compose.yml exec wordpress bash"
echo "Shell (Frontend): docker-compose -f docker/docker-compose.yml exec frontend sh"
echo ""
echo "📖 First time setup:"
echo "   1. Visit http://localhost:8080 to complete WordPress installation"
echo "   2. Install required plugins (WPGraphQL, Polylang, ACF)"
echo "   3. Configure permalinks to 'Post name'"
echo "   4. Set up your Next.js frontend in the /frontend directory"
echo ""
