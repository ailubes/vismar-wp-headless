# URL Redirects System

This directory contains the URL redirect system for migrating from the old WordPress site to the new headless Next.js architecture.

## Files

### `url-mappings.ts`
Contains explicit URL mappings for:
- Specific pages that don't follow standard patterns
- Category slug changes
- Post slug changes
- Language code mappings
- Helper functions for URL mapping

### `test-redirects.ts`
Test cases for verifying redirect functionality. Contains:
- Sample old URLs
- Expected new URLs
- Test descriptions
- Test runner function

## How It Works

The redirect system operates in the Next.js middleware (`/frontend/middleware.ts`):

1. **Request arrives** at the Next.js server
2. **Middleware intercepts** the request
3. **Pattern matching** checks if URL matches legacy patterns
4. **Redirect issued** if pattern matches (301 permanent)
5. **Normal routing** continues if no redirect needed

## Redirect Patterns

### 1. Remove .html Extensions
```
/ru/post-name.html → /ua/post-name
/post-name.html → /ua/post-name
```

### 2. Language Code Migration
```
/ru/* → /ua/*
/uk/* → /ua/*
/en/* → /en/* (preserved)
```

### 3. Category URLs
```
/category/slug → /ua/blog/category/slug
```

### 4. Add Language Prefix
```
/about → /ua/about
/services → /ua/services
```

### 5. Attachment URLs
```
/post.html/attachment → /ua/post
```

### 6. Special Pages
```
/ → /ua
/blog → /ua/blog
```

## Testing Redirects

### Manual Testing with curl

```bash
# Test .html removal
curl -I http://localhost:3000/ru/prefiltr-ultrasieve.html

# Test language migration
curl -I http://localhost:3000/ru/about

# Test category redirect
curl -I http://localhost:3000/category/novini

# Test root redirect
curl -I http://localhost:3000/
```

Expected response for all:
```
HTTP/1.1 301 Moved Permanently
Location: /ua/...
```

### Automated Testing

Run the test suite:
```bash
cd frontend
npx ts-node lib/redirects/test-redirects.ts
```

### Browser Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit old URLs in browser:
   - `http://localhost:3000/ru/about`
   - `http://localhost:3000/prefiltr-ultrasieve.html`
   - `http://localhost:3000/category/novini`

3. Verify you're redirected to new URLs

## Adding New Redirects

### Pattern-Based Redirects

Edit `/frontend/middleware.ts` and add a new pattern:

```typescript
// Example: Redirect old tag URLs
const tagMatch = cleanPath.match(/^\/tag\/(.+)$/);
if (tagMatch) {
  const [, slug] = tagMatch;
  const newUrl = new URL(`/ua/blog/tag/${slug}`, request.url);
  return NextResponse.redirect(newUrl, 301);
}
```

### Specific URL Mappings

Edit `url-mappings.ts` and add to `specificPageMappings`:

```typescript
export const specificPageMappings: UrlMapping[] = [
  // ... existing mappings
  { from: '/old-url', to: '/ua/new-url', permanent: true },
];
```

## SEO Best Practices

1. **Always use 301**: Permanent redirects preserve SEO rankings
2. **Avoid redirect chains**: Go directly from old to new URL
3. **Update sitemap**: Include new URLs in sitemap.xml
4. **Monitor 404s**: Track which old URLs return 404s
5. **Preserve query params**: Carry over important query parameters

## Common Issues

### Redirect Loop
**Problem**: Page keeps redirecting to itself
**Solution**: Check that new URLs don't match redirect patterns

### 404 After Redirect
**Problem**: Redirect works but new URL returns 404
**Solution**: Verify the new URL exists in your Next.js app structure

### Query Parameters Lost
**Problem**: Query parameters disappear after redirect
**Solution**: Ensure middleware preserves `request.nextUrl.search`

### Media Files Redirecting
**Problem**: Images/CSS/JS files get redirected
**Solution**: Add file extensions to matcher exclusions in middleware config

## Performance Considerations

- Middleware runs on **every request**
- Keep pattern matching **efficient**
- Avoid complex regex when possible
- Use **early returns** for quick checks
- Monitor **redirect latency** in production

## Production Deployment

Before deploying:

1. ✅ Test all redirect patterns
2. ✅ Verify no redirect loops
3. ✅ Check 301 status codes
4. ✅ Test with real old URLs
5. ✅ Update Google Search Console
6. ✅ Submit new sitemap
7. ✅ Monitor crawl errors

## Maintenance

- Review redirect logs monthly
- Remove unused redirects after 1 year
- Update documentation when patterns change
- Keep test cases up to date

## Support

For questions or issues with redirects:
1. Check this README
2. Review `/REDIRECT_MAPPING.md` at project root
3. Test with curl/browser
4. Check Next.js middleware logs
