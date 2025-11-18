/**
 * Image URL Utilities
 *
 * Functions to handle image URLs from WordPress, including rewriting
 * localhost URLs for Docker container compatibility.
 */

/**
 * Rewrites localhost URLs to host.docker.internal when running in Docker.
 * This allows the Next.js container to fetch images from WordPress via the host.
 *
 * @param url - The original image URL from WordPress
 * @returns The rewritten URL suitable for the current environment
 */
export function getOptimizedImageUrl(url: string | undefined): string {
  if (!url) return '';

  // When running in Docker, rewrite localhost URLs to host.docker.internal
  // This is needed because Next.js image optimization happens server-side
  // and the server can't reach "localhost" from inside the container
  if (typeof window === 'undefined' && url.includes('localhost:8080')) {
    return url.replace('localhost:8080', 'host.docker.internal:8080');
  }

  return url;
}

/**
 * Alternative approach: detect if we're in Docker and rewrite accordingly
 */
export function normalizeWordPressImageUrl(url: string | undefined): string {
  if (!url) return '';

  // Check if we're in a container environment (no window + Node.js environment check)
  const isDocker = typeof window === 'undefined' && process.env.DOCKER_CONTAINER === 'true';

  if (isDocker && url.includes('localhost:8080')) {
    return url.replace('localhost:8080', 'host.docker.internal:8080');
  }

  return url;
}
