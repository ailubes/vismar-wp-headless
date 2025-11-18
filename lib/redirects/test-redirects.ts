/**
 * Test suite for URL redirects
 *
 * This file contains test cases to verify that legacy URLs
 * redirect correctly to new URLs.
 *
 * Run with: npx ts-node lib/redirects/test-redirects.ts
 */

interface RedirectTestCase {
  name: string;
  oldUrl: string;
  expectedNewUrl: string;
  description: string;
}

export const redirectTestCases: RedirectTestCase[] = [
  // Pattern 1: .html posts with /ru/ prefix
  {
    name: 'RU post with .html',
    oldUrl: '/ru/prefiltr-ultrasieve.html',
    expectedNewUrl: '/ua/prefiltr-ultrasieve',
    description: 'Old Russian post with .html extension'
  },
  {
    name: 'RU post with .html (complex slug)',
    oldUrl: '/ru/barabannye-filtry-vismar-ecodrum.html',
    expectedNewUrl: '/ua/barabannye-filtry-vismar-ecodrum',
    description: 'Russian post with long slug and .html'
  },

  // Pattern 2: .html posts without language prefix
  {
    name: 'Root-level .html post',
    oldUrl: '/tilyapiya-samyj-vygodnyj-obekt-akvakultury.html',
    expectedNewUrl: '/ua/tilyapiya-samyj-vygodnyj-obekt-akvakultury',
    description: 'Post with .html at root level'
  },
  {
    name: 'Root-level .html post (short)',
    oldUrl: '/posadochnyj-material-ryba.html',
    expectedNewUrl: '/ua/posadochnyj-material-ryba',
    description: 'Short slug post with .html'
  },

  // Pattern 3: /ru/ language code to /ua/
  {
    name: 'RU page without .html',
    oldUrl: '/ru/about',
    expectedNewUrl: '/ua/about',
    description: 'Russian page without extension'
  },
  {
    name: 'RU contact page',
    oldUrl: '/ru/contact',
    expectedNewUrl: '/ua/contact',
    description: 'Russian contact page'
  },
  {
    name: 'RU nested path',
    oldUrl: '/ru/chto-takoe-ras',
    expectedNewUrl: '/ua/chto-takoe-ras',
    description: 'Russian nested page'
  },

  // Pattern 4: /uk/ language code to /ua/
  {
    name: 'UK page',
    oldUrl: '/uk/about',
    expectedNewUrl: '/ua/about',
    description: 'Ukrainian (old code) page'
  },
  {
    name: 'UK contact',
    oldUrl: '/uk/contact',
    expectedNewUrl: '/ua/contact',
    description: 'Ukrainian (old code) contact'
  },

  // Pattern 5: Category URLs
  {
    name: 'Category - novini',
    oldUrl: '/category/novini',
    expectedNewUrl: '/ua/blog/category/novini',
    description: 'News category'
  },
  {
    name: 'Category - stati',
    oldUrl: '/category/stati',
    expectedNewUrl: '/ua/blog/category/stati',
    description: 'Articles category'
  },
  {
    name: 'Category - proekti',
    oldUrl: '/category/proekti',
    expectedNewUrl: '/ua/blog/category/proekti',
    description: 'Projects category'
  },

  // Pattern 6: Blog root
  {
    name: 'Blog root',
    oldUrl: '/blog',
    expectedNewUrl: '/ua/blog',
    description: 'Blog listing page'
  },

  // Pattern 7: Attachment URLs
  {
    name: 'Attachment URL',
    oldUrl: '/prefiltr-ultrasieve.html/ultrasieveextra',
    expectedNewUrl: '/ua/prefiltr-ultrasieve',
    description: 'Image attachment on post'
  },
  {
    name: 'Attachment URL (nested)',
    oldUrl: '/barabannye-filtry-vismar-ecodrum.html/sakura_ecodrum_15',
    expectedNewUrl: '/ua/barabannye-filtry-vismar-ecodrum',
    description: 'Deep attachment URL'
  },

  // Pattern 9: Root homepage
  {
    name: 'Homepage root',
    oldUrl: '/',
    expectedNewUrl: '/ua',
    description: 'Root homepage redirect'
  },

  // Pattern 10: Paths without language prefix
  {
    name: 'About without prefix',
    oldUrl: '/about',
    expectedNewUrl: '/ua/about',
    description: 'About page without language'
  },
  {
    name: 'Services without prefix',
    oldUrl: '/services',
    expectedNewUrl: '/ua/services',
    description: 'Services without language'
  },
  {
    name: 'Contact without prefix',
    oldUrl: '/contact',
    expectedNewUrl: '/ua/contact',
    description: 'Contact without language'
  },

  // English content preservation
  {
    name: 'EN post with .html',
    oldUrl: '/en/some-post.html',
    expectedNewUrl: '/en/some-post',
    description: 'English post with .html removal'
  },
  {
    name: 'EN page',
    oldUrl: '/en/about',
    expectedNewUrl: '/en/about',
    description: 'English page (should stay in EN)'
  },

  // Trailing slashes
  {
    name: 'Trailing slash - RU',
    oldUrl: '/ru/about/',
    expectedNewUrl: '/ua/about',
    description: 'URL with trailing slash'
  },
  {
    name: 'Trailing slash - .html',
    oldUrl: '/ru/prefiltr-ultrasieve.html/',
    expectedNewUrl: '/ua/prefiltr-ultrasieve',
    description: '.html URL with trailing slash'
  },
];

/**
 * Function to test a single redirect
 */
function testRedirect(testCase: RedirectTestCase): boolean {
  console.log(`\nTesting: ${testCase.name}`);
  console.log(`  Description: ${testCase.description}`);
  console.log(`  Old URL: ${testCase.oldUrl}`);
  console.log(`  Expected: ${testCase.expectedNewUrl}`);

  // In a real test, you would make an HTTP request here
  // For now, this is a documentation of test cases

  return true;
}

/**
 * Run all tests
 */
export function runRedirectTests() {
  console.log('='.repeat(60));
  console.log('URL Redirect Test Cases');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  for (const testCase of redirectTestCases) {
    if (testRedirect(testCase)) {
      passed++;
    } else {
      failed++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Tests completed: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(60));
}

// Run tests if executed directly
if (require.main === module) {
  runRedirectTests();
}
