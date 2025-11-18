const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
  
  console.log('=== FINDING py-12 CLASS ===\n');
  
  const py12Info = await page.evaluate(() => {
    const elements = document.querySelectorAll('.py-12');
    const results = [];
    
    elements.forEach(el => {
      let parent = el.parentElement;
      const parents = [];
      while (parent && parents.length < 3) {
        parents.push(parent.tagName + ': ' + parent.className);
        parent = parent.parentElement;
      }
      
      results.push({
        tag: el.tagName,
        classes: el.className,
        content: el.innerHTML.substring(0, 100),
        parents: parents
      });
    });
    
    return results;
  });
  
  console.log('Found', py12Info.length, 'elements with py-12 class\n');
  
  py12Info.forEach((info, index) => {
    console.log('Element', index + 1);
    console.log('Tag:', info.tag);
    console.log('Classes:', info.classes);
    console.log('Parents:', info.parents);
    console.log('---');
  });
  
  await browser.close();
})();
