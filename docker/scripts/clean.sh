#!/bin/bash
# Vismar Aqua - Clean Docker Environment (Remove all data)

set -e

echo "======================================"
echo "⚠️  WARNING: Clean Docker Environment"
echo "======================================"
echo "This will remove ALL Docker volumes and data!"
echo "This includes:"
echo "  - Database data"
echo "  - WordPress uploads"
echo "  - All containers and networks"
echo ""
read -p "Are you sure? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Cancelled."
    exit 0
fi

echo ""
echo "🗑️  Stopping and removing containers..."
cd ..
docker-compose -f docker/docker-compose.yml down -v

echo ""
echo "🗑️  Removing volumes..."
docker volume rm vismar-db-data 2>/dev/null || true
docker volume rm vismar-wordpress-data 2>/dev/null || true

echo ""
echo "✅ Environment cleaned successfully!"
echo ""
echo "To start fresh, run: ./docker/scripts/start.sh"
echo ""
