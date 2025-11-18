const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3001/en...');
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('\n=== INSPECTING GRID DIV (where py-12 was removed) ===');
  
  // Find the grid div inside the hero section
  const gridDiv = await page.locator('section').first().locator('> div > div.grid').first();
  
  const gridClasses = await gridDiv.getAttribute('class');
  console.log('Classes on grid div:');
  console.log(gridClasses);
  
  const gridPaddingTop = await gridDiv.evaluate(el => window.getComputedStyle(el).paddingTop);
  const gridPaddingBottom = await gridDiv.evaluate(el => window.getComputedStyle(el).paddingBottom);
  const gridMarginTop = await gridDiv.evaluate(el => window.getComputedStyle(el).marginTop);
  const gridMarginBottom = await gridDiv.evaluate(el => window.getComputedStyle(el).marginBottom);
  const gridGap = await gridDiv.evaluate(el => window.getComputedStyle(el).gap);
  
  console.log('\nComputed styles on grid div:');
  console.log('Padding Top:', gridPaddingTop);
  console.log('Padding Bottom:', gridPaddingBottom);
  console.log('Margin Top:', gridMarginTop);
  console.log('Margin Bottom:', gridMarginBottom);
  console.log('Gap:', gridGap);
  
  console.log('\n=== CHECKING FIRST CHILD DIV ===');
  const firstChild = await gridDiv.locator('> div').first();
  const firstChildClasses = await firstChild.getAttribute('class');
  console.log('First child classes:', firstChildClasses);
  
  const firstChildPaddingTop = await firstChild.evaluate(el => window.getComputedStyle(el).paddingTop);
  const firstChildPaddingBottom = await firstChild.evaluate(el => window.getComputedStyle(el).paddingBottom);
  console.log('First child Padding Top:', firstChildPaddingTop);
  console.log('First child Padding Bottom:', firstChildPaddingBottom);
  
  await browser.close();
})();
