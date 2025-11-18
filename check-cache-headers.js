const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Intercept network requests to check cache headers
  const resources = [];
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('localhost:3001') && (url.includes('.js') || url.includes('.css') || url === 'http://localhost:3001/en' || url === 'http://localhost:3001/en/')) {
      const headers = response.headers();
      resources.push({
        url: url.replace('http://localhost:3001', ''),
        status: response.status(),
        cacheControl: headers['cache-control'] || 'none',
        etag: headers['etag'] || 'none'
      });
    }
  });
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== CACHE HEADERS CHECK ===\n');
  console.log('Checking if browser caching might be preventing updates...\n');
  
  resources.forEach(r => {
    console.log('Resource:', r.url);
    console.log('  Status:', r.status);
    console.log('  Cache-Control:', r.cacheControl);
    console.log('  ETag:', r.etag);
    console.log('');
  });
  
  // Check the actual HTML source for our changes
  const htmlSource = await page.content();
  const has_py0_in_source = htmlSource.includes('!py-0');
  const has_py12_in_hero = htmlSource.includes('py-12') && htmlSource.indexOf('py-12') < htmlSource.indexOf('</section>');
  
  console.log('=== HTML SOURCE CHECK ===');
  console.log('!py-0 found in source:', has_py0_in_source ? 'YES ✓' : 'NO ✗');
  console.log('py-12 in hero section:', has_py12_in_hero ? 'YES ✗' : 'NO ✓');
  
  await browser.close();
})();
