import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const intlMiddleware = createIntlMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uk'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always use locale prefix
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle legacy URL redirects before intl middleware
  const redirect = handleLegacyRedirects(request);
  if (redirect) {
    return redirect;
  }

  // Continue with intl middleware for normal requests
  return intlMiddleware(request);
}

function handleLegacyRedirects(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;

  // Remove trailing slash for consistent matching
  const cleanPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname;

  // Pattern 1: Old posts with .html extension
  // Old: /ru/{slug}.html -> New: /uk/{slug}
  // Old: /en/{slug}.html -> New: /en/{slug}
  // Old: /ua/{slug}.html -> New: /uk/{slug} (legacy locale code)
  const htmlPostMatch = cleanPath.match(/^\/(ru|en|uk|ua)\/([^\/]+)\.html$/);
  if (htmlPostMatch) {
    const [, oldLang, slug] = htmlPostMatch;
    // Map ru/ua to uk (uk stays uk, en stays en)
    const newLang = oldLang === 'ru' || oldLang === 'ua' ? 'uk' : oldLang === 'uk' ? 'uk' : 'en';
    const newUrl = new URL(`/${newLang}/${slug}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 2: Root-level .html posts (no language prefix)
  // Old: /{slug}.html -> New: /uk/{slug} (default to Ukrainian)
  const rootHtmlMatch = cleanPath.match(/^\/([^\/]+)\.html$/);
  if (rootHtmlMatch) {
    const [, slug] = rootHtmlMatch;
    // Skip if it's a special file (not a post slug)
    if (!slug.includes('.') && slug !== 'index') {
      const newUrl = new URL(`/uk/${slug}`, request.url);
      return NextResponse.redirect(newUrl, 301);
    }
  }

  // Pattern 3: Old language code /ru/ -> /uk/
  // Old: /ru/{anything} -> New: /uk/{anything}
  if (cleanPath.startsWith('/ru/') || cleanPath.startsWith('/ru')) {
    const pathWithoutLang = cleanPath.replace(/^\/ru\/?/, '');
    const newUrl = new URL(`/uk/${pathWithoutLang}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 4: Old language code /ua/ -> /uk/ (legacy locale code)
  if (cleanPath.startsWith('/ua/') || cleanPath.startsWith('/ua')) {
    const pathWithoutLang = cleanPath.replace(/^\/ua\/?/, '');
    const newUrl = new URL(`/uk/${pathWithoutLang}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 5: Old category URLs
  // Old: /category/{slug} -> New: /uk/blog/category/{slug}
  const categoryMatch = cleanPath.match(/^\/category\/(.+)$/);
  if (categoryMatch) {
    const [, slug] = categoryMatch;
    const newUrl = new URL(`/uk/blog/category/${slug}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 6: Old blog root
  // Old: /blog -> New: /uk/blog
  if (cleanPath === '/blog') {
    const newUrl = new URL('/uk/blog', request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 7: Attachment URLs (images with parent post)
  // Old: /{post-slug}.html/{image-slug} -> New: /uk/{post-slug}
  const attachmentMatch = cleanPath.match(/^\/([^\/]+)\.html\/(.+)$/);
  if (attachmentMatch) {
    const [, slug] = attachmentMatch;
    const newUrl = new URL(`/uk/${slug}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 8: Old WordPress query parameters (contact forms, etc.)
  // Old: /?post_type=... -> New: /uk/contact (or homepage)
  if (pathname === '/' && request.nextUrl.search.includes('post_type=')) {
    const newUrl = new URL('/uk/', request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 9: Root without language -> default to /uk
  // Old: / -> New: /uk
  if (pathname === '/' && !request.nextUrl.search) {
    const newUrl = new URL('/uk', request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  // Pattern 10: Any path without language prefix that isn't an API or asset
  // This catches legacy URLs without language codes
  const hasLangPrefix = /^\/(en|uk)(\/|$)/.test(cleanPath);
  const isSpecialPath = /^\/(api|_next|_vercel|wp-content|wp-admin)/.test(cleanPath);
  const hasExtension = /\.[a-z0-9]+$/i.test(cleanPath);

  if (!hasLangPrefix && !isSpecialPath && !hasExtension && pathname !== '/') {
    // Default to Ukrainian for legacy URLs without language
    const newUrl = new URL(`/uk${cleanPath}`, request.url);
    return NextResponse.redirect(newUrl, 301);
  }

  return null;
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (images, fonts, etc.)
  // - Next.js internals
  matcher: [
    '/((?!api|_next|_vercel|favicon.ico|.*\\..*$).*)',
  ]
};
