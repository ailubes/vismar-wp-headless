const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3001/en...');
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('\n=== TAKING SCREENSHOT ===');
  await page.screenshot({ path: '/tmp/hero-section.png', fullPage: false });
  console.log('Screenshot saved to /tmp/hero-section.png');
  
  console.log('\n=== INSPECTING HERO SECTION ===');
  
  // Find the hero section - it should be the first Section component
  const heroSection = await page.locator('section').first();
  
  // Get all classes on the section
  const classes = await heroSection.getAttribute('class');
  console.log('Classes on hero section:');
  console.log(classes);
  
  // Get computed styles
  const paddingTop = await heroSection.evaluate(el => window.getComputedStyle(el).paddingTop);
  const paddingBottom = await heroSection.evaluate(el => window.getComputedStyle(el).paddingBottom);
  const marginTop = await heroSection.evaluate(el => window.getComputedStyle(el).marginTop);
  const marginBottom = await heroSection.evaluate(el => window.getComputedStyle(el).marginBottom);
  
  console.log('\nComputed styles on hero section:');
  console.log('Padding Top:', paddingTop);
  console.log('Padding Bottom:', paddingBottom);
  console.log('Margin Top:', marginTop);
  console.log('Margin Bottom:', marginBottom);
  
  // Check for inline styles
  const inlineStyle = await heroSection.getAttribute('style');
  console.log('\nInline styles:', inlineStyle || 'None');
  
  // Get the HTML structure
  const outerHTML = await heroSection.evaluate(el => el.outerHTML.substring(0, 500));
  console.log('\nFirst 500 chars of section HTML:');
  console.log(outerHTML);
  
  // Check the inner content div
  const contentDiv = await heroSection.locator('> div').first();
  const contentClasses = await contentDiv.getAttribute('class');
  console.log('\n=== INNER CONTENT DIV ===');
  console.log('Classes:', contentClasses);
  
  const contentPaddingTop = await contentDiv.evaluate(el => window.getComputedStyle(el).paddingTop);
  const contentPaddingBottom = await contentDiv.evaluate(el => window.getComputedStyle(el).paddingBottom);
  console.log('Padding Top:', contentPaddingTop);
  console.log('Padding Bottom:', contentPaddingBottom);
  
  await browser.close();
})();
