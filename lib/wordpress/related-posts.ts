/**
 * Related Posts Algorithm
 *
 * Calculates related posts based on shared categories and tags.
 * Uses a scoring system to rank post relevance.
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  date: string;
  uri: string;
  author?: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
  categories?: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  };
  tags?: {
    nodes: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  };
  language?: {
    code: string;
  };
}

interface PostScore {
  post: BlogPost;
  score: number;
}

/**
 * Calculate relevance score between current post and another post
 *
 * Scoring logic:
 * - Same primary category (first category): +3 points
 * - Shared secondary categories: +2 points each
 * - Shared tags: +1 point each
 * - Same language: required (filter out if different)
 */
function scorePostRelevance(currentPost: BlogPost, otherPost: BlogPost): number {
  let score = 0;

  const currentCategories = currentPost.categories?.nodes || [];
  const otherCategories = otherPost.categories?.nodes || [];
  const currentTags = currentPost.tags?.nodes || [];
  const otherTags = otherPost.tags?.nodes || [];

  // Check if same primary category (first category)
  if (currentCategories.length > 0 && otherCategories.length > 0) {
    if (currentCategories[0].id === otherCategories[0].id) {
      score += 3;
    }
  }

  // Check for shared secondary categories
  const currentCategoryIds = new Set(currentCategories.map(cat => cat.id));
  const otherCategoryIds = new Set(otherCategories.map(cat => cat.id));

  // Count shared categories (excluding the primary one we already counted)
  let sharedCategories = 0;
  otherCategoryIds.forEach(id => {
    if (currentCategoryIds.has(id)) {
      sharedCategories++;
    }
  });

  // If we already counted the primary category, subtract 1
  if (currentCategories.length > 0 && otherCategories.length > 0 &&
      currentCategories[0].id === otherCategories[0].id) {
    sharedCategories = Math.max(0, sharedCategories - 1);
  }

  score += sharedCategories * 2;

  // Check for shared tags
  const currentTagIds = new Set(currentTags.map(tag => tag.id));
  let sharedTags = 0;
  otherTags.forEach(tag => {
    if (currentTagIds.has(tag.id)) {
      sharedTags++;
    }
  });

  score += sharedTags;

  return score;
}

/**
 * Get related posts for a given post
 *
 * @param currentPost - The current blog post
 * @param allPosts - Array of all available posts in the same language
 * @param limit - Maximum number of related posts to return (default: 4)
 * @returns Array of related blog posts, sorted by relevance
 */
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 4
): BlogPost[] {
  // Filter out the current post and ensure same language
  const candidatePosts = allPosts.filter(post => {
    if (post.id === currentPost.id) return false;
    if (post.language?.code !== currentPost.language?.code) return false;
    return true;
  });

  // Score each candidate post
  const scoredPosts: PostScore[] = candidatePosts.map(post => ({
    post,
    score: scorePostRelevance(currentPost, post)
  }));

  // Sort by score (highest first), then by date (newest first) as tiebreaker
  scoredPosts.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // Tiebreaker: newer posts first
    return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
  });

  // Get top N posts
  const relatedPosts = scoredPosts.slice(0, limit).map(item => item.post);

  // If we don't have enough related posts with good scores,
  // backfill with recent posts from the same primary category
  if (relatedPosts.length < limit && currentPost.categories?.nodes?.[0]) {
    const primaryCategoryId = currentPost.categories.nodes[0].id;

    const sameCategoryPosts = candidatePosts.filter(post => {
      // Not already in related posts
      if (relatedPosts.some(rp => rp.id === post.id)) return false;
      // Has same primary category
      return post.categories?.nodes?.[0]?.id === primaryCategoryId;
    });

    // Sort by date (newest first)
    sameCategoryPosts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Add to related posts until we reach the limit
    const needed = limit - relatedPosts.length;
    relatedPosts.push(...sameCategoryPosts.slice(0, needed));
  }

  // Final fallback: if still not enough, add recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = candidatePosts
      .filter(post => !relatedPosts.some(rp => rp.id === post.id))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const needed = limit - relatedPosts.length;
    relatedPosts.push(...recentPosts.slice(0, needed));
  }

  return relatedPosts;
}

/**
 * Get related posts by category slug
 * Useful for category pages to show related content
 *
 * @param categorySlug - The category slug to filter by
 * @param allPosts - Array of all available posts
 * @param languageCode - Language code (EN or UK)
 * @param limit - Maximum number of posts to return
 * @returns Array of posts in the specified category
 */
export function getPostsByCategory(
  categorySlug: string,
  allPosts: BlogPost[],
  languageCode: string,
  limit: number = 6
): BlogPost[] {
  const filteredPosts = allPosts.filter(post => {
    if (post.language?.code !== languageCode) return false;

    const hasCategory = post.categories?.nodes?.some(
      cat => cat.slug === categorySlug
    );

    return hasCategory;
  });

  // Sort by date (newest first)
  filteredPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return filteredPosts.slice(0, limit);
}

/**
 * Get related posts by tag slug
 *
 * @param tagSlug - The tag slug to filter by
 * @param allPosts - Array of all available posts
 * @param languageCode - Language code (EN or UK)
 * @param limit - Maximum number of posts to return
 * @returns Array of posts with the specified tag
 */
export function getPostsByTag(
  tagSlug: string,
  allPosts: BlogPost[],
  languageCode: string,
  limit: number = 6
): BlogPost[] {
  const filteredPosts = allPosts.filter(post => {
    if (post.language?.code !== languageCode) return false;

    const hasTag = post.tags?.nodes?.some(
      tag => tag.slug === tagSlug
    );

    return hasTag;
  });

  // Sort by date (newest first)
  filteredPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return filteredPosts.slice(0, limit);
}
