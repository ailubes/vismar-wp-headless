# Quick Reference: URL Redirects

**Status**: ✅ Implemented | **Build**: ✅ Passing | **Date**: 2025-11-14

## 📋 Quick Summary

All old WordPress URLs now redirect with **301 permanent** status to new Next.js URLs.

## 🔄 Main Redirect Patterns

| Old URL Pattern | New URL Pattern | Example |
|----------------|-----------------|---------|
| `/ru/{slug}.html` | `/ua/{slug}` | `/ru/prefiltr-ultrasieve.html` → `/ua/prefiltr-ultrasieve` |
| `/{slug}.html` | `/ua/{slug}` | `/posadochnyj-material-ryba.html` → `/ua/posadochnyj-material-ryba` |
| `/ru/{path}` | `/ua/{path}` | `/ru/about` → `/ua/about` |
| `/uk/{path}` | `/ua/{path}` | `/uk/contact` → `/ua/contact` |
| `/category/{slug}` | `/ua/blog/category/{slug}` | `/category/novini` → `/ua/blog/category/novini` |
| `/blog` | `/ua/blog` | `/blog` → `/ua/blog` |
| `/{slug}.html/{att}` | `/ua/{slug}` | `/post.html/image` → `/ua/post` |
| `/` | `/ua` | Root redirects to Ukrainian |
| `/{slug}` | `/ua/{slug}` | `/services` → `/ua/services` |

## 🧪 Quick Test Commands

```bash
# Replace localhost:3000 with your domain
BASE="http://localhost:3000"

# Test 1: .html removal
curl -I $BASE/ru/prefiltr-ultrasieve.html

# Test 2: Language migration
curl -I $BASE/ru/about

# Test 3: Category
curl -I $BASE/category/novini

# Test 4: Root
curl -I $BASE/

# Expected: All return "301 Moved Permanently"
```

## 📁 Files Changed

**Modified**:
- `/frontend/middleware.ts` - Main redirect logic (39.8 kB)
- `/frontend/next.config.js` - Static redirects

**Created**:
- `/REDIRECT_MAPPING.md` - Complete documentation
- `/frontend/lib/redirects/` - Redirect library
- `/frontend/REDIRECT_TEST_SAMPLES.md` - Test samples
- `/frontend/REDIRECTS_IMPLEMENTATION_SUMMARY.md` - Summary

## 🌍 Language Mapping

| Old Code | New Code | Note |
|----------|----------|------|
| `ru` | `ua` | Russian → Ukrainian |
| `uk` | `ua` | Old Ukrainian code |
| `en` | `en` | English preserved |
| `ar` | `en` | Arabic → English |

## 📊 Statistics from WordPress Export

- **Posts**: ~92 (mostly `.html`)
- **Pages**: ~38 (no `.html`)
- **Categories**: 10
- **Attachments**: Many (redirect to parent post)

## ✅ What Works

- [x] .html extension removal
- [x] Language code migration (ru/uk → ua)
- [x] Category URL restructuring
- [x] Attachment URL handling
- [x] Root homepage redirect
- [x] Paths without language prefix
- [x] Trailing slash normalization
- [x] English content preservation

## ⚠️ Known Limitations

- Media files (`/wp-content/uploads/`) are NOT redirected (preserved)
- WordPress admin (`/wp-admin/`) redirects to homepage
- Complex query parameters redirect to homepage
- If redirected URL doesn't exist → 404

## 🚀 Next Steps

1. **Local Testing**:
   ```bash
   npm run dev
   # Visit old URLs in browser
   ```

2. **Deploy to Staging**:
   - Test with real old URLs
   - Verify 301 status codes

3. **Production**:
   - Update Google Search Console
   - Submit new sitemap
   - Monitor 404 errors

## 📚 Full Documentation

- **Complete Guide**: `/REDIRECT_MAPPING.md`
- **Implementation Details**: `/frontend/REDIRECTS_IMPLEMENTATION_SUMMARY.md`
- **Test Samples**: `/frontend/REDIRECT_TEST_SAMPLES.md`
- **Technical Docs**: `/frontend/lib/redirects/README.md`

## 🆘 Troubleshooting

**Redirect loop?**
→ Check middleware logic, ensure new URLs don't match patterns

**404 after redirect?**
→ Verify content exists in WordPress and is fetched by GraphQL

**Slow redirects?**
→ Check middleware performance, optimize pattern matching

## 📞 Quick Support

1. Read `/REDIRECT_MAPPING.md`
2. Check middleware logs
3. Test with curl commands above
4. Review `/frontend/middleware.ts`

---

**Ready for Testing** ✅
