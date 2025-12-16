#!/usr/bin/env ts-node

/**
 * Stub Post Content Optimizer
 *
 * Converts 37 stub English posts from placeholders to SEO-optimized summaries
 * by extracting content from their Ukrainian counterparts.
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

interface StubPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  categories: string[];
  tags: string[];
}

interface UkrainianPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
}

interface OptimizedContent {
  title: string;
  excerpt: string;
  content: string;
}

const WP_PATH = '/var/www/wp.vismar-aqua.com';

/**
 * Execute wp-cli command
 */
function wpCli(command: string): string {
  try {
    const result = execSync(
      `sudo -u www-data wp ${command} --path=${WP_PATH}`,
      { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
    );
    return result.trim();
  } catch (error: any) {
    console.error(`WP-CLI Error: ${error.message}`);
    throw error;
  }
}

/**
 * Get all stub posts (English posts with "English translation pending")
 */
function getStubPosts(): StubPost[] {
  console.log('🔍 Finding stub posts...');

  const postsJson = wpCli(
    'post list --post_type=post --post_status=publish --lang=en --format=json --fields=ID,post_title,post_name,post_content,post_excerpt,post_date'
  );

  const allPosts = JSON.parse(postsJson);

  const stubPosts = allPosts.filter((post: any) =>
    post.post_title.includes('English translation pending')
  );

  console.log(`✓ Found ${stubPosts.length} stub posts\n`);

  return stubPosts.map((post: any) => ({
    id: parseInt(post.ID),
    title: post.post_title,
    slug: post.post_name,
    content: post.post_content,
    excerpt: post.post_excerpt || '',
    date: post.post_date,
    categories: [],
    tags: []
  }));
}

/**
 * Get Ukrainian translation for a post using Polylang
 */
function getUkrainianVersion(enPostId: number): UkrainianPost | null {
  try {
    // Use Polylang function via wp-cli eval-file
    const script = `
      $en_id = ${enPostId};
      $uk_id = pll_get_post($en_id, 'uk');
      if ($uk_id) {
        $post = get_post($uk_id);
        if ($post) {
          echo json_encode([
            'id' => $post->ID,
            'title' => $post->post_title,
            'slug' => $post->post_name,
            'content' => $post->post_content,
            'excerpt' => $post->post_excerpt
          ]);
        }
      }
    `;

    const tempFile = `/tmp/get-uk-post-${enPostId}.php`;
    fs.writeFileSync(tempFile, `<?php\n${script}\n`);

    const result = wpCli(`eval-file ${tempFile}`);
    fs.unlinkSync(tempFile);

    if (!result) return null;

    const ukPost = JSON.parse(result);
    return {
      id: ukPost.id,
      title: ukPost.title,
      slug: ukPost.slug,
      content: ukPost.content || '',
      excerpt: ukPost.excerpt || ''
    };
  } catch (error) {
    console.error(`  ⚠️  Could not get Ukrainian version for post ${enPostId}`);
    return null;
  }
}

/**
 * Extract clean text from HTML
 */
function stripHtml(html: string): string {
  if (!html) return '';

  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, ' ');

  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

  // Remove extra whitespace
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

/**
 * Extract key points from Ukrainian content (first 3-5 sentences or list items)
 */
function extractKeyPoints(content: string): string[] {
  const cleanText = stripHtml(content);

  // Try to find list items first
  const listMatches = content.match(/<li[^>]*>(.*?)<\/li>/gi);
  if (listMatches && listMatches.length >= 3) {
    return listMatches.slice(0, 5).map(item => stripHtml(item));
  }

  // Otherwise, extract first few sentences
  const sentences = cleanText.match(/[^.!?]+[.!?]+/g) || [];
  return sentences.slice(0, 3).map(s => s.trim());
}

/**
 * Generate SEO-optimized English title from Ukrainian title
 */
function generateEnglishTitle(ukTitle: string): string {
  // This is a placeholder - ideally you'd use a translation API
  // For now, we'll create a descriptive title based on common patterns

  const titleMap: Record<string, string> = {
    'HFTS': 'HFTS Technology',
    'Технологія': 'Technology',
    'Вирощування': 'Cultivation of',
    'Використання': 'Use of',
    'тиляпії': 'Tilapia',
    'сома': 'Catfish',
    'креветок': 'Shrimp',
    'ваннамей': 'Vannamei',
    'кларієвого': 'Clarias',
    'форелівництво': 'Trout Farming',
    'аквакультури': 'Aquaculture',
    'України': 'Ukraine',
    'в Україні': 'in Ukraine',
    'хлораміну': 'Chloramine',
    'кефалівництва': 'Mullet Farming',
    'водоростей': 'Seaweed',
    'креветка': 'Shrimp',
    'Перспективи': 'Prospects for',
    'Сезонне': 'Seasonal',
    'Інтенсивна': 'Intensive',
    'ставкова': 'Pond',
    'біофлокуляції': 'Biofloc',
    'Розчинений': 'Dissolved',
    'кисень': 'Oxygen',
    'Ірані': 'Iran',
    'Триплоїдність': 'Triploidy',
    'прісноводна': 'Freshwater',
    'Гігантська': 'Giant',
    'нереїс': 'Nereis',
    'черв\'як': 'Worm',
    'минь': 'Burbot',
    'річкова': 'River',
    'тріска': 'Cod',
    'Шримс': 'Shrimp',
    'піщана': 'Sand'
  };

  let enTitle = ukTitle;

  // Replace known terms
  for (const [uk, en] of Object.entries(titleMap)) {
    const regex = new RegExp(uk, 'gi');
    enTitle = enTitle.replace(regex, en);
  }

  // If title still looks very Ukrainian, add a prefix
  if (/[а-яА-ЯіІїЇєЄ]/.test(enTitle)) {
    return `Aquaculture in Ukraine: ${ukTitle}`;
  }

  return enTitle;
}

/**
 * Generate SEO-optimized English content from Ukrainian post
 */
function generateOptimizedContent(stubPost: StubPost, ukPost: UkrainianPost): OptimizedContent {
  console.log(`  📝 Generating content for: ${stubPost.title}`);

  // Generate English title
  const originalTitle = stubPost.title.replace('English translation pending: ', '');
  const enTitle = generateEnglishTitle(ukPost.title);

  // Extract excerpt/summary
  const ukExcerpt = stripHtml(ukPost.excerpt || ukPost.content.substring(0, 500));
  const excerptSentences = ukExcerpt.match(/[^.!?]+[.!?]+/g) || [];
  const summary = excerptSentences.slice(0, 2).join(' ').trim();

  // Extract key points
  const keyPoints = extractKeyPoints(ukPost.content);

  // Build SEO-optimized content
  let content = `<div class="stub-post-summary">`;

  // Summary paragraphs
  content += `<h2>Overview</h2>\n`;
  content += `<p><strong>Note:</strong> This article provides a summary of the key insights. The full detailed article is available in Ukrainian.</p>\n\n`;

  if (summary) {
    content += `<p>${summary}</p>\n\n`;
  }

  content += `<p>This article covers important aspects of aquaculture technology and practices relevant to fish farming operations in Ukraine and Eastern Europe.</p>\n\n`;

  // Key points section
  if (keyPoints.length > 0) {
    content += `<h3>Key Topics Covered:</h3>\n`;
    content += `<ul>\n`;
    for (const point of keyPoints) {
      if (point.length > 10) {
        content += `  <li>${point.substring(0, 200)}${point.length > 200 ? '...' : ''}</li>\n`;
      }
    }
    content += `</ul>\n\n`;
  }

  // Add link to Ukrainian version
  content += `<h3>Full Article</h3>\n`;
  content += `<p>The complete, detailed article is available in Ukrainian: `;
  content += `<a href="/uk/${ukPost.slug}"><strong>${ukPost.title}</strong></a></p>\n\n`;

  // Call to action
  content += `<h3>Need Expert Guidance?</h3>\n`;
  content += `<p>Vismar Aqua provides comprehensive aquaculture consulting services, including:</p>\n`;
  content += `<ul>\n`;
  content += `  <li>RAS (Recirculating Aquaculture Systems) design and implementation</li>\n`;
  content += `  <li>Water treatment and quality management solutions</li>\n`;
  content += `  <li>Fish farm feasibility studies and project planning</li>\n`;
  content += `  <li>Species-specific cultivation techniques and best practices</li>\n`;
  content += `</ul>\n\n`;
  content += `<p><a href="/en/contact" class="button">Contact Our Experts</a> | `;
  content += `<a href="/en/services">View Our Services</a></p>\n`;

  content += `</div>`;

  // Generate excerpt (150-160 characters for SEO)
  let excerpt = summary.substring(0, 150);
  if (excerpt.length < 150) {
    excerpt += '. Aquaculture technology and fish farming insights for Ukraine.';
  }
  excerpt = excerpt.substring(0, 157) + '...';

  return {
    title: enTitle,
    excerpt,
    content
  };
}

/**
 * Update WordPress post with optimized content
 */
function updateWordPressPost(postId: number, optimized: OptimizedContent): boolean {
  try {
    console.log(`  💾 Updating post ${postId}...`);

    // Escape content for shell
    const titleFile = `/tmp/wp-title-${postId}.txt`;
    const excerptFile = `/tmp/wp-excerpt-${postId}.txt`;
    const contentFile = `/tmp/wp-content-${postId}.txt`;

    fs.writeFileSync(titleFile, optimized.title);
    fs.writeFileSync(excerptFile, optimized.excerpt);
    fs.writeFileSync(contentFile, optimized.content);

    // Update post
    wpCli(`post update ${postId} --post_title="$(cat ${titleFile})" --post_excerpt="$(cat ${excerptFile})" --post_content="$(cat ${contentFile})"`);

    // Cleanup temp files
    fs.unlinkSync(titleFile);
    fs.unlinkSync(excerptFile);
    fs.unlinkSync(contentFile);

    console.log(`  ✓ Updated successfully\n`);
    return true;
  } catch (error: any) {
    console.error(`  ✗ Failed to update post ${postId}: ${error.message}\n`);
    return false;
  }
}

/**
 * Generate report
 */
function generateReport(results: { postId: number, success: boolean, title: string }[]) {
  const reportPath = path.join(__dirname, '../logs/stub-post-optimization-report.txt');
  const reportDir = path.dirname(reportPath);

  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  let report = `Stub Post Optimization Report\n`;
  report += `Generated: ${new Date().toISOString()}\n`;
  report += `${'='.repeat(70)}\n\n`;
  report += `Summary:\n`;
  report += `  Total processed: ${results.length}\n`;
  report += `  Successful: ${successful}\n`;
  report += `  Failed: ${failed}\n\n`;
  report += `${'='.repeat(70)}\n\n`;

  report += `Detailed Results:\n\n`;
  results.forEach((result, index) => {
    report += `${index + 1}. Post ID: ${result.postId}\n`;
    report += `   Title: ${result.title}\n`;
    report += `   Status: ${result.success ? '✓ SUCCESS' : '✗ FAILED'}\n\n`;
  });

  fs.writeFileSync(reportPath, report);
  console.log(`\n📄 Report saved to: ${reportPath}`);
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Stub Post Optimization\n');
  console.log('This script will:\n');
  console.log('  1. Find all stub posts (English posts with "translation pending")');
  console.log('  2. Fetch their Ukrainian counterparts');
  console.log('  3. Generate SEO-optimized English summaries');
  console.log('  4. Update WordPress posts\n');
  console.log('='.repeat(70) + '\n');

  // Get all stub posts
  const stubPosts = getStubPosts();

  if (stubPosts.length === 0) {
    console.log('✓ No stub posts found. All posts are already optimized!');
    return;
  }

  const results: { postId: number, success: boolean, title: string }[] = [];

  // Process each stub post
  for (let i = 0; i < stubPosts.length; i++) {
    const stub = stubPosts[i];

    console.log(`\n[${i + 1}/${stubPosts.length}] Processing: ${stub.title}`);
    console.log(`  Post ID: ${stub.id}`);
    console.log(`  Slug: ${stub.slug}`);

    // Get Ukrainian version
    const ukPost = getUkrainianVersion(stub.id);

    if (!ukPost) {
      console.log(`  ⚠️  No Ukrainian version found - skipping\n`);
      results.push({ postId: stub.id, success: false, title: stub.title });
      continue;
    }

    console.log(`  ✓ Found Ukrainian version: ${ukPost.title}`);

    // Generate optimized content
    const optimized = generateOptimizedContent(stub, ukPost);

    // Update WordPress
    const success = updateWordPressPost(stub.id, optimized);

    results.push({
      postId: stub.id,
      success,
      title: optimized.title
    });

    // Add delay to avoid overwhelming the system
    if (i < stubPosts.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  // Generate report
  console.log('\n' + '='.repeat(70));
  console.log('\n📊 FINAL RESULTS\n');
  console.log(`  Total processed: ${results.length}`);
  console.log(`  Successful: ${results.filter(r => r.success).length}`);
  console.log(`  Failed: ${results.filter(r => !r.success).length}`);

  generateReport(results);

  console.log('\n✅ Optimization complete!');
  console.log('\nNext steps:');
  console.log('  1. Review the updated posts at /en/blog/');
  console.log('  2. Rebuild Next.js site: npm run build');
  console.log('  3. Deploy changes to production');
  console.log('  4. Monitor Google Search Console for indexing updates\n');
}

// Run the script
main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
