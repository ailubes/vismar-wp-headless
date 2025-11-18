const { test, expect } = require('@playwright/test');

test('Projects page visual verification', async ({ page }) => {
  // Listen to console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({
      type: msg.type(),
      text: msg.text()
    });
  });
  
  // Listen to page errors
  const pageErrors = [];
  page.on('pageerror', error => {
    pageErrors.push(error.message);
  });
  
  // Navigate to the projects page
  console.log('Navigating to http://localhost:3001/en/projects...');
  await page.goto('http://localhost:3001/en/projects', { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
  
  // Wait a bit for any dynamic content
  await page.waitForTimeout(2000);
  
  // Take a full page screenshot
  await page.screenshot({ 
    path: '/tmp/projects-page-full.png', 
    fullPage: true 
  });
  console.log('Screenshot saved to /tmp/projects-page-full.png');
  
  // Take a viewport screenshot
  await page.screenshot({ 
    path: '/tmp/projects-page-viewport.png'
  });
  console.log('Screenshot saved to /tmp/projects-page-viewport.png');
  
  // Get the project count text
  const countText = await page.locator('text=/Showing \\d+ of \\d+ projects/').textContent().catch(() => 'Not found');
  console.log('Project count text:', countText);
  
  // Check if "No projects found" message is visible
  const noProjectsVisible = await page.locator('text=No projects found').isVisible().catch(() => false);
  console.log('No projects message visible:', noProjectsVisible);
  
  // Check if any project cards are visible
  const projectLinks = await page.locator('a[href*="/en/projects/"]').count();
  console.log('Number of project links found:', projectLinks);
  
  // Log console messages
  console.log('\n=== Console Messages ===');
  consoleMessages.forEach(msg => {
    console.log(`[${msg.type}] ${msg.text}`);
  });
  
  // Log page errors
  if (pageErrors.length > 0) {
    console.log('\n=== Page Errors ===');
    pageErrors.forEach(err => {
      console.log(err);
    });
  } else {
    console.log('\nNo page errors detected');
  }
});
