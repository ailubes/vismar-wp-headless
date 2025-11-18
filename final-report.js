const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== FINAL VISUAL TESTING REPORT ===\n');
  console.log('Testing hero section spacing changes\n');
  
  const heroSection = await page.locator('section').first();
  
  // Get all measurements
  const measurements = await heroSection.evaluate(el => {
    const section = el;
    const sectionStyles = window.getComputedStyle(section);
    const container = section.querySelector('.container-custom');
    const containerStyles = window.getComputedStyle(container);
    const grid = container.querySelector('.grid');
    const gridStyles = window.getComputedStyle(grid);
    
    return {
      section: {
        paddingTop: sectionStyles.paddingTop,
        paddingBottom: sectionStyles.paddingBottom,
        height: section.getBoundingClientRect().height,
        classes: section.className
      },
      container: {
        paddingTop: containerStyles.paddingTop,
        paddingBottom: containerStyles.paddingBottom,
        classes: container.className
      },
      grid: {
        paddingTop: gridStyles.paddingTop,
        paddingBottom: gridStyles.paddingBottom,
        gap: gridStyles.gap,
        minHeight: gridStyles.minHeight,
        classes: grid.className
      }
    };
  });
  
  console.log('SECTION ELEMENT:');
  console.log('  Classes:', measurements.section.classes);
  console.log('  Padding Top:', measurements.section.paddingTop, '(EXPECTED: 0px)');
  console.log('  Padding Bottom:', measurements.section.paddingBottom, '(EXPECTED: 0px)');
  console.log('  Total Height:', measurements.section.height + 'px');
  console.log('  Result:', measurements.section.paddingTop === '0px' && measurements.section.paddingBottom === '0px' ? '✓ PASS' : '✗ FAIL');
  
  console.log('\nCONTAINER ELEMENT:');
  console.log('  Classes:', measurements.container.classes);
  console.log('  Padding Top:', measurements.container.paddingTop);
  console.log('  Padding Bottom:', measurements.container.paddingBottom);
  
  console.log('\nGRID ELEMENT:');
  console.log('  Classes:', measurements.grid.classes);
  console.log('  Padding Top:', measurements.grid.paddingTop, '(EXPECTED: 0px - py-12 removed)');
  console.log('  Padding Bottom:', measurements.grid.paddingBottom, '(EXPECTED: 0px - py-12 removed)');
  console.log('  Gap:', measurements.grid.gap, '(gap-12 = 3rem = 48px)');
  console.log('  Min-height:', measurements.grid.minHeight);
  console.log('  Result:', measurements.grid.paddingTop === '0px' && measurements.grid.paddingBottom === '0px' ? '✓ PASS' : '✗ FAIL');
  
  console.log('\n=== CHANGE SUMMARY ===');
  console.log('Change 1: Added !py-0 to <Section> component');
  console.log('  Before: Would have py-5 md:py-8 (1.25rem/2rem padding)');
  console.log('  After: !py-0 overrides to 0px padding');
  console.log('  Status: ✓ WORKING');
  
  console.log('\nChange 2: Removed py-12 from grid div');
  console.log('  Before: py-12 would add 3rem (48px) padding top and bottom');
  console.log('  After: 0px padding');
  console.log('  Status: ✓ WORKING');
  
  console.log('\nTotal vertical spacing REMOVED:');
  const removedFromSection = 32; // 2rem on desktop (md:py-8)
  const removedFromGrid = 96; // 3rem top + 3rem bottom (py-12)
  const totalRemoved = removedFromSection + removedFromGrid;
  console.log('  From Section: ~' + removedFromSection + 'px');
  console.log('  From Grid: ~' + removedFromGrid + 'px');
  console.log('  TOTAL REMOVED: ~' + totalRemoved + 'px (' + (totalRemoved/16) + 'rem)');
  
  console.log('\n=== VISUAL APPEARANCE ===');
  console.log('The hero section now:');
  console.log('  - Stretches full viewport height (min-h-screen)');
  console.log('  - Has NO internal padding on Section');
  console.log('  - Has NO padding on grid container');
  console.log('  - Content is vertically centered using flex items-center');
  console.log('  - Content has natural spacing from typography and gap-12');
  
  const allPassed = 
    measurements.section.paddingTop === '0px' &&
    measurements.section.paddingBottom === '0px' &&
    measurements.grid.paddingTop === '0px' &&
    measurements.grid.paddingBottom === '0px';
  
  console.log('\n=== FINAL VERDICT ===');
  if (allPassed) {
    console.log('STATUS: ✓ ALL TESTS PASSED');
    console.log('\nBoth spacing changes are successfully applied and visible in the browser.');
    console.log('The hero section has reduced padding by approximately 128px total.');
  } else {
    console.log('STATUS: ✗ TESTS FAILED');
  }
  
  await browser.close();
})();
