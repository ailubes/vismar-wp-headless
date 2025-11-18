const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './lib/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'wordpress',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'host.docker.internal',
        port: '8080',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'vismaraqua.com.ua',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },

  // Environment variables available to the browser
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'http://wordpress/graphql',
  },

  // Static redirects (handled by middleware for more complex patterns)
  // These are backup redirects for critical pages
  async redirects() {
    return [
      // WordPress admin redirects (block access)
      {
        source: '/wp-admin/:path*',
        destination: '/uk',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/uk',
        permanent: true,
      },
      // Old feed URLs
      {
        source: '/feed',
        destination: '/uk/blog',
        permanent: true,
      },
      {
        source: '/feed/:path*',
        destination: '/uk/blog',
        permanent: true,
      },
      // Old sitemap URLs
      {
        source: '/sitemap.xml',
        destination: '/uk/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_index.xml',
        destination: '/uk/sitemap.xml',
        permanent: true,
      },
      // robots.txt should be at root (no redirect needed)
      // Old language variants that might be missed by middleware
      {
        source: '/ar/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = withNextIntl(nextConfig)
