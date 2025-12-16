#!/bin/bash
# Vismar Aqua - View Docker Logs

set -e

SERVICE=${1:-""}

cd ..

if [ -z "$SERVICE" ]; then
    echo "======================================"
    echo "Viewing logs for all services..."
    echo "======================================"
    echo "Tip: Use 'logs.sh [service]' to view specific service"
    echo "Services: wordpress, db, phpmyadmin, frontend, nginx"
    echo ""
    docker-compose -f docker/docker-compose.yml logs -f
else
    echo "======================================"
    echo "Viewing logs for: $SERVICE"
    echo "======================================"
    docker-compose -f docker/docker-compose.yml logs -f "$SERVICE"
fi
