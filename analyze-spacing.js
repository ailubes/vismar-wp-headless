const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== ANALYZING SPACING ISSUE ===\n');
  
  const heroSection = await page.locator('section').first();
  const gridDiv = await heroSection.locator('> div > div.grid').first();
  
  // Get the grid's min-height
  const gridMinHeight = await gridDiv.evaluate(el => window.getComputedStyle(el).minHeight);
  const gridActualHeight = await gridDiv.evaluate(el => el.getBoundingClientRect().height);
  
  console.log('Grid element:');
  console.log('  Min-height:', gridMinHeight);
  console.log('  Actual height:', gridActualHeight, 'px');
  
  // Get section details
  const sectionHeight = await heroSection.evaluate(el => el.getBoundingClientRect().height);
  const sectionMinHeight = await heroSection.evaluate(el => window.getComputedStyle(el).minHeight);
  
  console.log('\nSection element:');
  console.log('  Min-height:', sectionMinHeight);
  console.log('  Actual height:', sectionHeight, 'px');
  console.log('  Has class "min-h-screen":', await heroSection.evaluate(el => el.classList.contains('min-h-screen')));
  console.log('  Has class "!py-0":', await heroSection.evaluate(el => el.classList.contains('!py-0')));
  
  // Check if py-12 class is anywhere
  const hasPy12 = await page.evaluate(() => {
    const allElements = document.querySelectorAll('*');
    for (let el of allElements) {
      if (el.classList.contains('py-12')) {
        return {
          found: true,
          element: el.tagName,
          classes: el.className
        };
      }
    }
    return { found: false };
  });
  
  console.log('\nSearching for py-12 class:', hasPy12);
  
  // Calculate the effective spacing
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  console.log('\nViewport height:', viewportHeight, 'px');
  console.log('Section takes up:', sectionHeight, 'px');
  console.log('Difference from viewport:', sectionHeight - viewportHeight, 'px');
  
  await browser.close();
})();
