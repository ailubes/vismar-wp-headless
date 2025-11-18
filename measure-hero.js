const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== FULL PAGE SCREENSHOT ===');
  await page.screenshot({ path: '/tmp/hero-full-page.png', fullPage: true });
  console.log('Full page screenshot saved to /tmp/hero-full-page.png');
  
  console.log('\n=== MEASURING HERO SECTION HEIGHT ===');
  const heroSection = await page.locator('section').first();
  
  const boundingBox = await heroSection.boundingBox();
  console.log('Hero section bounding box:', boundingBox);
  console.log('Height:', boundingBox.height, 'px');
  
  const minHeight = await heroSection.evaluate(el => window.getComputedStyle(el).minHeight);
  console.log('Min-height CSS:', minHeight);
  
  // Check viewport height for comparison
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  console.log('Viewport height:', viewportHeight, 'px');
  
  console.log('\n=== COMPARISON ===');
  console.log('Hero section takes', Math.round((boundingBox.height / viewportHeight) * 100), '% of viewport');
  
  await browser.close();
})();
