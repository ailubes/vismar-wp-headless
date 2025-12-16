#!/bin/bash
# Vismar Aqua - Stop Development Environment

set -e

echo "======================================"
echo "Stopping Vismar Aqua Docker Environment"
echo "======================================"

cd ..
docker-compose -f docker/docker-compose.yml down

echo ""
echo "✅ Docker containers stopped successfully!"
echo ""
echo "To start again, run: ./docker/scripts/start.sh"
echo "To remove all data (including database), run: ./docker/scripts/clean.sh"
echo ""
