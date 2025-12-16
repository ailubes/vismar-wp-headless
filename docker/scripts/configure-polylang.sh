#!/bin/bash

# Polylang Configuration Script
# This script configures Polylang for bilingual content (English and Ukrainian)

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Polylang Configuration Script ===${NC}"
echo ""

# Check if Docker container is running
if ! docker ps | grep -q vismar-wordpress; then
    echo -e "${RED}Error: WordPress container 'vismar-wordpress' is not running${NC}"
    exit 1
fi

echo -e "${YELLOW}Copying configuration script to container...${NC}"
docker cp "$(dirname "$0")/configure-polylang-eval.php" vismar-wordpress:/tmp/configure-polylang-eval.php

echo -e "${YELLOW}Executing Polylang configuration...${NC}"
echo ""

# Execute the configuration
docker exec vismar-wordpress wp eval-file /tmp/configure-polylang-eval.php --allow-root

echo ""
echo -e "${GREEN}=== Configuration Summary ===${NC}"
echo ""

# Display language list
echo -e "${BLUE}Configured Languages:${NC}"
docker exec vismar-wordpress wp term list language --format=table --allow-root 2>/dev/null || echo "  (Use WP admin to view languages)"

echo ""
echo -e "${BLUE}Polylang Settings:${NC}"
docker exec vismar-wordpress wp option get polylang --format=json --allow-root | python3 -m json.tool 2>/dev/null || echo "  Settings updated successfully"

echo ""
echo -e "${GREEN}=== Language Code Reference ===${NC}"
echo ""
echo "Polylang uses ISO 639-1 language codes:"
echo "  - English:   'en' (locale: en_US, flag: us)"
echo "  - Ukrainian: 'uk' (locale: uk, flag: ua)"
echo ""
echo "URL Structure:"
echo "  - English:   http://example.com/en/page-slug/"
echo "  - Ukrainian: http://example.com/uk/page-slug/"
echo ""
echo "Note: If frontend needs /ua/ instead of /uk/, handle URL mapping in Next.js"
echo ""
echo -e "${GREEN}Configuration complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Create content in WordPress admin"
echo "  2. Use language switcher to create translations"
echo "  3. Query via GraphQL: { pages { nodes { language { code } } } }"
echo ""
