const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== VERIFICATION REPORT ===\n');
  
  const heroSection = await page.locator('section').first();
  
  // Check if our changes are applied
  const hasImportantPy0 = await heroSection.evaluate(el => el.classList.contains('!py-0'));
  const sectionPaddingTop = await heroSection.evaluate(el => window.getComputedStyle(el).paddingTop);
  const sectionPaddingBottom = await heroSection.evaluate(el => window.getComputedStyle(el).paddingBottom);
  
  console.log('CHANGE #1: Added !py-0 to Section component');
  console.log('  - Class present:', hasImportantPy0 ? 'YES ✓' : 'NO ✗');
  console.log('  - Padding top:', sectionPaddingTop);
  console.log('  - Padding bottom:', sectionPaddingBottom);
  console.log('  - STATUS:', sectionPaddingTop === '0px' && sectionPaddingBottom === '0px' ? 'WORKING ✓' : 'NOT WORKING ✗');
  
  const gridDiv = await heroSection.locator('> div > div.grid').first();
  const gridClasses = await gridDiv.getAttribute('class');
  const hasPy12 = gridClasses.includes('py-12');
  const gridPaddingTop = await gridDiv.evaluate(el => window.getComputedStyle(el).paddingTop);
  const gridPaddingBottom = await gridDiv.evaluate(el => window.getComputedStyle(el).paddingBottom);
  
  console.log('\nCHANGE #2: Removed py-12 from grid div');
  console.log('  - py-12 class present:', hasPy12 ? 'YES ✗' : 'NO ✓');
  console.log('  - Grid classes:', gridClasses);
  console.log('  - Padding top:', gridPaddingTop);
  console.log('  - Padding bottom:', gridPaddingBottom);
  console.log('  - STATUS:', !hasPy12 && gridPaddingTop === '0px' && gridPaddingBottom === '0px' ? 'WORKING ✓' : 'NOT WORKING ✗');
  
  console.log('\n=== OVERALL ASSESSMENT ===');
  
  const allChangesWorking = hasImportantPy0 && !hasPy12 && 
                            sectionPaddingTop === '0px' && sectionPaddingBottom === '0px' &&
                            gridPaddingTop === '0px' && gridPaddingBottom === '0px';
  
  if (allChangesWorking) {
    console.log('STATUS: ALL CHANGES SUCCESSFULLY APPLIED ✓');
    console.log('\nThe code changes are working as expected.');
    console.log('The hero section now has:');
    console.log('  - Zero padding on the Section component');
    console.log('  - Zero padding on the grid container');
    console.log('  - Content positioned using min-h-screen and flex items-center');
  } else {
    console.log('STATUS: CHANGES NOT APPLIED CORRECTLY ✗');
  }
  
  // Take a focused screenshot of just the hero section
  const heroBox = await heroSection.boundingBox();
  await page.screenshot({ 
    path: '/tmp/hero-section-focused.png',
    clip: {
      x: 0,
      y: heroBox.y,
      width: 1280,
      height: Math.min(heroBox.height, 800)
    }
  });
  console.log('\nScreenshot saved to: /tmp/hero-section-focused.png');
  
  await browser.close();
})();
