# Redirect Test Samples

This document provides sample URLs from the old WordPress site and their expected redirects in the new Next.js site.

## Test with curl

```bash
# Change localhost:3000 to your actual domain when testing in production
BASE_URL="http://localhost:3000"

# Test 1: .html post removal (Russian)
curl -I "$BASE_URL/ru/prefiltr-ultrasieve.html"
# Expected: 301 → /ua/prefiltr-ultrasieve

# Test 2: .html post removal (root level)
curl -I "$BASE_URL/tilyapiya-samyj-vygodnyj-obekt-akvakultury.html"
# Expected: 301 → /ua/tilyapiya-samyj-vygodnyj-obekt-akvakultury

# Test 3: Language code migration (ru → ua)
curl -I "$BASE_URL/ru/about"
# Expected: 301 → /ua/about

# Test 4: Language code migration (uk → ua)
curl -I "$BASE_URL/uk/contact"
# Expected: 301 → /ua/contact

# Test 5: Category redirect
curl -I "$BASE_URL/category/novini"
# Expected: 301 → /ua/blog/category/novini

# Test 6: Attachment URL
curl -I "$BASE_URL/prefiltr-ultrasieve.html/ultrasieveextra"
# Expected: 301 → /ua/prefiltr-ultrasieve

# Test 7: Root homepage
curl -I "$BASE_URL/"
# Expected: 301 → /ua

# Test 8: Blog root
curl -I "$BASE_URL/blog"
# Expected: 301 → /ua/blog

# Test 9: No language prefix
curl -I "$BASE_URL/services"
# Expected: 301 → /ua/services

# Test 10: English content (should preserve EN)
curl -I "$BASE_URL/en/about"
# Expected: 200 OK (or 301 if .html → /en/about)

# Test 11: WordPress admin (should block)
curl -I "$BASE_URL/wp-admin/"
# Expected: 301 → /ua

# Test 12: Feed URLs
curl -I "$BASE_URL/feed"
# Expected: 301 → /ua/blog
```

## Sample Old URLs from WordPress Export

### Posts with .html Extension

1. `/ru/prefiltr-ultrasieve.html` → `/ua/prefiltr-ultrasieve`
2. `/ru/barabannye-filtry-vismar-ecodrum.html` → `/ua/barabannye-filtry-vismar-ecodrum`
3. `/ru/barabannye-filtry-vismar-aquadrum.html` → `/ua/barabannye-filtry-vismar-aquadrum`
4. `/ru/vysoproizvoditelnye-nasosy-flowfriend.html` → `/ua/vysoproizvoditelnye-nasosy-flowfriend`
5. `/ru/sovremennaya-uzv-chto-eto-takoe.html` → `/ua/sovremennaya-uzv-chto-eto-takoe`
6. `/ru/tilyapiya-samyj-vygodnyj-obekt-akvakultury.html` → `/ua/tilyapiya-samyj-vygodnyj-obekt-akvakultury`
7. `/ru/raschet-kolichestva-plavayushhej-zagruzki.html` → `/ua/raschet-kolichestva-plavayushhej-zagruzki`
8. `/ru/forel_micro_uzv.html` → `/ua/forel_micro_uzv`
9. `/ru/posadochnyj-material-ryba.html` → `/ua/posadochnyj-material-ryba`
10. `/ru/komanda-vismar-aqua-na-vystavke-fishexpo-2015.html` → `/ua/komanda-vismar-aqua-na-vystavke-fishexpo-2015`

### Pages without .html

1. `/ru/about` → `/ua/about`
2. `/ru/contact` → `/ua/contact`
3. `/ru/chto-takoe-ras` → `/ua/chto-takoe-ras`
4. `/ru/tilyapiya` → `/ua/tilyapiya`
5. `/ru/proekt-barramundi-20` → `/ua/proekt-barramundi-20`

### Categories

1. `/category/novini` → `/ua/blog/category/novini`
2. `/category/stati` → `/ua/blog/category/stati`
3. `/category/proekti` → `/ua/blog/category/proekti`
4. `/category/ras-uk` → `/ua/blog/category/ras-uk`
5. `/category/ryba` → `/ua/blog/category/ryba`
6. `/category/barabanni-filtri` → `/ua/blog/category/barabanni-filtri`

### Attachment URLs (Images on Posts)

1. `/prefiltr-ultrasieve.html/ultrasieveextra` → `/ua/prefiltr-ultrasieve`
2. `/barabannye-filtry-vismar-ecodrum.html/sakura_ecodrum_15` → `/ua/barabannye-filtry-vismar-ecodrum`
3. `/barabannye-filtry-vismar-aquadrum.html/drumfilter_sakura_200_rama` → `/ua/barabannye-filtry-vismar-aquadrum`
4. `/tilyapiya-samyj-vygodnyj-obekt-akvakultury.html/red_tilapia` → `/ua/tilyapiya-samyj-vygodnyj-obekt-akvakultury`

## Automated Testing Script

Create a file `test-redirects.sh`:

```bash
#!/bin/bash

# Redirect testing script
# Usage: ./test-redirects.sh [base-url]

BASE_URL="${1:-http://localhost:3000}"
PASS=0
FAIL=0

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

test_redirect() {
    local old_url="$1"
    local expected_location="$2"

    echo -n "Testing: $old_url ... "

    response=$(curl -s -I -L "$BASE_URL$old_url")
    status=$(echo "$response" | grep -i "^HTTP" | head -1 | awk '{print $2}')
    location=$(echo "$response" | grep -i "^Location:" | head -1 | awk '{print $2}' | tr -d '\r')

    if [ "$status" = "301" ] && [[ "$location" == *"$expected_location"* ]]; then
        echo -e "${GREEN}PASS${NC}"
        ((PASS++))
    else
        echo -e "${RED}FAIL${NC}"
        echo "  Expected 301 → $expected_location"
        echo "  Got $status → $location"
        ((FAIL++))
    fi
}

echo "========================================"
echo "Testing Redirects"
echo "Base URL: $BASE_URL"
echo "========================================"
echo ""

# Test cases
test_redirect "/ru/prefiltr-ultrasieve.html" "/ua/prefiltr-ultrasieve"
test_redirect "/ru/about" "/ua/about"
test_redirect "/uk/contact" "/ua/contact"
test_redirect "/category/novini" "/ua/blog/category/novini"
test_redirect "/blog" "/ua/blog"
test_redirect "/prefiltr-ultrasieve.html/ultrasieveextra" "/ua/prefiltr-ultrasieve"
test_redirect "/services" "/ua/services"
test_redirect "/tilyapiya-samyj-vygodnyj-obekt-akvakultury.html" "/ua/tilyapiya-samyj-vygodnyj-obekt-akvakultury"

echo ""
echo "========================================"
echo "Results: $PASS passed, $FAIL failed"
echo "========================================"

if [ $FAIL -eq 0 ]; then
    exit 0
else
    exit 1
fi
```

Make it executable:
```bash
chmod +x test-redirects.sh
```

Run it:
```bash
# Test on localhost
./test-redirects.sh http://localhost:3000

# Test on production
./test-redirects.sh https://vismar-aqua.com
```

## Browser Testing Checklist

Open these URLs in your browser and verify the redirect:

- [ ] `http://localhost:3000/` → `/ua`
- [ ] `http://localhost:3000/ru/about` → `/ua/about`
- [ ] `http://localhost:3000/uk/contact` → `/ua/contact`
- [ ] `http://localhost:3000/prefiltr-ultrasieve.html` → `/ua/prefiltr-ultrasieve`
- [ ] `http://localhost:3000/category/novini` → `/ua/blog/category/novini`
- [ ] `http://localhost:3000/blog` → `/ua/blog`
- [ ] `http://localhost:3000/en/about` → `/en/about` (should stay in EN)

## Expected HTTP Status Codes

All legacy URLs should return:
- **Status**: `301 Moved Permanently`
- **Header**: `Location: /ua/...` or `/en/...`

New URLs should return:
- **Status**: `200 OK` (if page exists)
- **Status**: `404 Not Found` (if page doesn't exist)

## Monitoring Redirects in Production

### Google Search Console
1. Submit new sitemap with new URLs
2. Monitor "Coverage" report for 404 errors
3. Check "Redirects" in "Crawl Stats"

### Server Logs
Monitor your server logs for:
- 301 redirects (expected)
- 404 errors (investigate these)
- 302 temporary redirects (should be 301s)

### Analytics
Track redirected traffic:
- Add event tracking for redirects
- Monitor bounce rate on redirected pages
- Check if users are accessing old URLs

## Common Issues and Solutions

### Issue: Infinite Redirect Loop
**Symptom**: Browser shows "too many redirects"
**Solution**: Check middleware logic, ensure new URLs don't match redirect patterns

### Issue: 404 After Redirect
**Symptom**: Redirect works but new URL returns 404
**Solution**: Verify the content exists in WordPress and is being fetched by GraphQL

### Issue: Slow Redirects
**Symptom**: Redirects take too long
**Solution**: Optimize middleware pattern matching, use early returns

### Issue: Query Parameters Lost
**Symptom**: `?param=value` disappears after redirect
**Solution**: Ensure middleware preserves `request.nextUrl.search`

## Production Deployment Checklist

Before deploying to production:

- [ ] Test all redirect patterns locally
- [ ] Verify 301 status codes
- [ ] Check no redirect loops exist
- [ ] Test with real old URLs from WordPress export
- [ ] Ensure English content stays in `/en/`
- [ ] Verify Ukrainian content goes to `/ua/`
- [ ] Test category redirects
- [ ] Test attachment URL redirects
- [ ] Test root homepage redirect
- [ ] Test without language prefix redirects
- [ ] Update Google Search Console
- [ ] Submit new sitemap
- [ ] Monitor 404 errors for first week
- [ ] Set up redirect monitoring/alerting
