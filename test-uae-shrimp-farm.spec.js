const { test, expect } = require('@playwright/test');

test('UAE Shrimp Farm Project - Complete Visual Verification', async ({ page }) => {
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
  
  console.log('\n=== STEP 1: Projects Listing Page ===');
  
  // Navigate to the projects listing page
  console.log('Navigating to http://localhost:3005/en/projects...');
  await page.goto('http://localhost:3005/en/projects', { 
    waitUntil: 'networkidle',
    timeout: 30000 
  });
  
  // Wait for content to load
  await page.waitForTimeout(2000);
  
  // Take screenshot of projects listing
  await page.screenshot({ 
    path: '/tmp/01-projects-listing-full.png', 
    fullPage: true 
  });
  console.log('✓ Screenshot saved: /tmp/01-projects-listing-full.png');
  
  // Check for UAE Shrimp Farm project
  const uaeProjectVisible = await page.locator('text=/UAE Shrimp Farm/i').isVisible().catch(() => false);
  console.log('UAE Shrimp Farm project visible:', uaeProjectVisible);
  
  // Check for species information in cards
  const speciesInfoVisible = await page.locator('text=/Litopenaeus vannamei/i').isVisible().catch(() => false);
  console.log('Species info visible on cards:', speciesInfoVisible);
  
  // Check for production capacity with TrendingUp icon
  const capacityVisible = await page.locator('text=/250 MT/i').isVisible().catch(() => false);
  console.log('Production capacity visible:', capacityVisible);
  
  console.log('\n=== STEP 2: Navigate to UAE Shrimp Farm Detail Page ===');
  
  // Click on UAE Shrimp Farm project
  const uaeProjectLink = page.locator('a:has-text("UAE Shrimp Farm")').first();
  if (await uaeProjectLink.isVisible().catch(() => false)) {
    await uaeProjectLink.click();
    console.log('✓ Clicked on UAE Shrimp Farm project');
    
    // Wait for navigation and content
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Take full page screenshot of detail page
    await page.screenshot({ 
      path: '/tmp/02-project-detail-full.png', 
      fullPage: true 
    });
    console.log('✓ Screenshot saved: /tmp/02-project-detail-full.png');
    
    console.log('\n=== STEP 3: Verify Title and Client Info ===');
    
    // Check title
    const titleVisible = await page.locator('text=/UAE Shrimp Farm RAS Design/i').isVisible().catch(() => false);
    console.log('Title "UAE Shrimp Farm RAS Design" visible:', titleVisible);
    
    // Check client info
    const clientVisible = await page.locator('text=/United Arab Emirates/i').isVisible().catch(() => false);
    console.log('Client location "United Arab Emirates" visible:', clientVisible);
    
    console.log('\n=== STEP 4: Technical Specifications Section ===');
    
    // Check for species with scientific name
    const speciesSection = await page.locator('text=/Litopenaeus vannamei/i').isVisible().catch(() => false);
    console.log('Species with scientific name visible:', speciesSection);
    
    // Check production capacity
    const prodCapacity = await page.locator('text=/250 MT/i').isVisible().catch(() => false);
    console.log('Production capacity (250 MT/year) visible:', prodCapacity);
    
    // Check new fields
    const productionCycles = await page.locator('text=/Production Cycles/i').isVisible().catch(() => false);
    console.log('Production Cycles field visible:', productionCycles);
    
    const growthPeriod = await page.locator('text=/Growth Period/i').isVisible().catch(() => false);
    console.log('Growth Period field visible:', growthPeriod);
    
    const survivalRate = await page.locator('text=/Survival Rate/i').isVisible().catch(() => false);
    console.log('Survival Rate field visible:', survivalRate);
    
    const marketSize = await page.locator('text=/Market Size/i').isVisible().catch(() => false);
    console.log('Market Size field visible:', marketSize);
    
    console.log('\n=== STEP 5: Financial Performance Section ===');
    
    // Scroll to financial section
    const financialSection = page.locator('text=/Financial Performance/i').first();
    if (await financialSection.isVisible().catch(() => false)) {
      await financialSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      // Take close-up screenshot of financial section
      const financialBox = await financialSection.locator('..').boundingBox();
      if (financialBox) {
        await page.screenshot({ 
          path: '/tmp/03-financial-performance-section.png',
          clip: {
            x: 0,
            y: financialBox.y - 50,
            width: page.viewportSize().width,
            height: 600
          }
        });
        console.log('✓ Screenshot saved: /tmp/03-financial-performance-section.png');
      }
      
      console.log('Financial Performance section visible: true');
      
      // Check for green gradient background (via class or style)
      const hasGradient = await page.locator('[class*="bg-gradient"], [class*="bg-green"]').count() > 0;
      console.log('Section has gradient background:', hasGradient);
      
      // Check for DollarSign icon
      const dollarIcon = await page.locator('svg').filter({ hasText: '' }).count() > 0;
      console.log('DollarSign icon present (check visual):', dollarIcon);
      
      // Check financial metrics cards
      const capexVisible = await page.locator('text=/\\$1,240,000/i').isVisible().catch(() => false);
      console.log('CAPEX card ($1,240,000 USD) visible:', capexVisible);
      
      const opexVisible = await page.locator('text=/\\$917,000/i').isVisible().catch(() => false);
      console.log('OPEX card ($917,000/year) visible:', opexVisible);
      
      const revenueVisible = await page.locator('text=/\\$1,690,000/i').isVisible().catch(() => false);
      console.log('Revenue card ($1,690,000/year) visible:', revenueVisible);
      
      const profitVisible = await page.locator('text=/\\$652,000/i').isVisible().catch(() => false);
      console.log('Profit card ($652,000/year) visible:', profitVisible);
      
      const roiVisible = await page.locator('text=/~2 years/i').isVisible().catch(() => false);
      console.log('ROI card (~2 years) visible:', roiVisible);
      
    } else {
      console.log('⚠ Financial Performance section NOT FOUND');
    }
    
    console.log('\n=== STEP 6: Performance Metrics Block ===');
    
    // Check for Performance Metrics block
    const metricsBlock = page.locator('text=/Performance Metrics/i').first();
    if (await metricsBlock.isVisible().catch(() => false)) {
      await metricsBlock.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      // Take close-up screenshot of metrics block
      const metricsBox = await metricsBlock.locator('..').boundingBox();
      if (metricsBox) {
        await page.screenshot({ 
          path: '/tmp/04-performance-metrics-block.png',
          clip: {
            x: 0,
            y: metricsBox.y - 50,
            width: page.viewportSize().width,
            height: 400
          }
        });
        console.log('✓ Screenshot saved: /tmp/04-performance-metrics-block.png');
      }
      
      console.log('Performance Metrics block visible: true');
      
      // Check for dark background
      const hasDarkBg = await page.locator('[class*="bg-gray"], [class*="bg-slate"]').count() > 0;
      console.log('Block has dark background:', hasDarkBg);
      
      // Check for BarChart3 icon (visual check needed)
      console.log('BarChart3 icon present (check screenshot)');
      
    } else {
      console.log('⚠ Performance Metrics block NOT FOUND');
    }
    
    console.log('\n=== STEP 7: Other Content Sections ===');
    
    const overviewVisible = await page.locator('text=/Overview/i').isVisible().catch(() => false);
    console.log('Overview section visible:', overviewVisible);
    
    const challengeVisible = await page.locator('text=/Challenge/i').isVisible().catch(() => false);
    console.log('Challenge section visible:', challengeVisible);
    
    const solutionVisible = await page.locator('text=/Solution/i').isVisible().catch(() => false);
    console.log('Solution section visible:', solutionVisible);
    
    const resultsVisible = await page.locator('text=/Results/i').isVisible().catch(() => false);
    console.log('Results section visible:', resultsVisible);
    
    console.log('\n=== STEP 8: Mobile Responsive Design ===');
    
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(1000);
    
    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    
    // Take mobile screenshot
    await page.screenshot({ 
      path: '/tmp/05-mobile-view-full.png', 
      fullPage: true 
    });
    console.log('✓ Screenshot saved: /tmp/05-mobile-view-full.png');
    
    // Check if financial cards stack in single column (height check)
    const financialCards = page.locator('[class*="grid"]').filter({ hasText: 'CAPEX' });
    if (await financialCards.isVisible().catch(() => false)) {
      const box = await financialCards.boundingBox();
      console.log('Financial cards layout on mobile (check screenshot for stacking)');
    }
    
  } else {
    console.log('⚠ UAE Shrimp Farm project NOT FOUND on listing page');
  }
  
  // Log console messages
  console.log('\n=== Console Messages ===');
  if (consoleMessages.length > 0) {
    consoleMessages.slice(-20).forEach(msg => {
      console.log(`[${msg.type}] ${msg.text}`);
    });
  } else {
    console.log('No console messages');
  }
  
  // Log page errors
  if (pageErrors.length > 0) {
    console.log('\n=== Page Errors ===');
    pageErrors.forEach(err => {
      console.log('ERROR:', err);
    });
  } else {
    console.log('\n✓ No page errors detected');
  }
  
  console.log('\n=== Test Complete ===');
  console.log('Screenshots saved to /tmp/');
  console.log('- 01-projects-listing-full.png');
  console.log('- 02-project-detail-full.png');
  console.log('- 03-financial-performance-section.png');
  console.log('- 04-performance-metrics-block.png');
  console.log('- 05-mobile-view-full.png');
});
