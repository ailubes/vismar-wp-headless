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
      {
        protocol: 'https',
        hostname: 'wp.vismar-aqua.com',
        pathname: '/wp-content/**',
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
      // Old sitemap URLs (sitemap_index.xml from old WordPress)
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      // robots.txt should be at root (no redirect needed)
      // Old language variants that might be missed by middleware
      {
        source: '/ar/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
      // Old site URL redirects (vismar-aqua.com -> new structure)
      {
        source: '/pro-kompaniyu',
        destination: '/uk/about',
        permanent: true,
      },
      {
        source: '/obladnannya',
        destination: '/uk/services',
        permanent: true,
      },
      {
        source: '/info',
        destination: '/uk/blog',
        permanent: true,
      },
      {
        source: '/hfts-technology-can-be-a-game-changer.html',
        destination: '/uk/services/hfts',
        permanent: true,
      },
      // Redirect old hfts-technology URLs to hfts
      {
        source: '/:locale/services/hfts-technology',
        destination: '/:locale/services/hfts',
        permanent: true,
      },
      {
        source: '/services/hfts-technology',
        destination: '/en/services/hfts',
        permanent: true,
      },
    ];
  },
}

module.exports = withNextIntl(nextConfig)
