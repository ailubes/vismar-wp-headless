#!/bin/bash

# Vismar Aqua - Quick SSH Deployment Script
# Usage: Run this on your production server after cloning the repository

set -e  # Exit on error

echo "========================================"
echo "Vismar Aqua - Production Deployment"
echo "========================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ ERROR: .env file not found!"
    echo "Please create .env from .env.example and update with your production values"
    exit 1
fi

echo "📦 Starting deployment..."
echo ""

# 1. Verify Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

echo "✅ Docker found"

# 2. Check if database dump exists
if [ ! -f wordpress-production.sql ]; then
    echo "❌ ERROR: wordpress-production.sql not found!"
    echo "Please transfer the database dump to this directory"
    exit 1
fi

echo "✅ Database dump found ($(du -h wordpress-production.sql | cut -f1))"
echo ""

# 3. Start services
echo "🚀 Starting Docker services..."
docker-compose up --build -d

echo "⏳ Waiting for MySQL to be ready..."
sleep 30

# 4. Import database
echo "📥 Importing WordPress database..."
docker exec vismar-mysql mysql -u root -p${MYSQL_ROOT_PASSWORD} wordpress < wordpress-production.sql

echo "✅ Database imported successfully"
echo ""

# 5. Verify services
echo "🔍 Verifying services..."
echo ""

echo "Checking running containers:"
docker ps --format "table {{.Names}}\t{{.Status}}"
echo ""

# 6. Test GraphQL API
echo "🧪 Testing GraphQL API..."
if curl -s -X POST http://localhost:8080/graphql \
    -H "Content-Type: application/json" \
    -d '{"query":"{ posts(first: 1) { nodes { id title } } }"}' | grep -q "title"; then
    echo "✅ GraphQL API is responding with posts"
else
    echo "⚠️  GraphQL API response - check manually"
fi

echo ""
echo "========================================"
echo "✅ Deployment Complete!"
echo "========================================"
echo ""
echo "🌐 Access your application:"
echo "   Frontend:       http://localhost:3001"
echo "   WordPress:      http://localhost:8080"
echo "   WordPress Admin: http://localhost:8080/wp-admin"
echo "   phpMyAdmin:     http://localhost:8081"
echo "   GraphQL:        http://localhost:8080/graphql"
echo ""
echo "📝 Next steps:"
echo "   1. Configure SSL/HTTPS (certbot)"
echo "   2. Update URLs in WordPress settings"
echo "   3. Configure Nginx for production"
echo "   4. Set up backups"
echo "   5. Enable firewall rules"
echo ""
echo "📚 For detailed guide, see: DEPLOYMENT-SSH.md"
echo ""
