import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_PAGE_BY_SLUG_AND_LANGUAGE, GET_POST_BY_SLUG, GET_ALL_PAGES, GET_ALL_POSTS } from '@/lib/wordpress/queries';
import Image from 'next/image';
import { BlogPostTemplate } from '@/components/BlogPostTemplate';

// Helper to fetch content with proper language filtering and translation fallback
async function fetchContentBySlugAndLanguage(slug: string, locale: string) {
  const client = getClient();
  const languageCode = locale === 'en' ? 'EN' : 'UK';
  const otherLanguageCode = locale === 'en' ? 'UK' : 'EN';

  // First, try to fetch as a page in the target language
  try {
    const pageResult = await client.query({
      query: GET_PAGE_BY_SLUG_AND_LANGUAGE,
      variables: { slug, language: languageCode },
    });

    const page = pageResult.data?.pages?.nodes?.[0];
    if (page) {
      return { type: 'Page' as const, data: page };
    }
  } catch (error) {
    console.error('Error fetching page:', error);
  }

  // If not a page, try to fetch as a post in the target language
  try {
    const postResult = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug, language: languageCode },
    });

    const post = postResult.data?.posts?.nodes?.[0];
    if (post) {
      return { type: 'Post' as const, data: post };
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  // Translation fallback: if not found in target language,
  // try to find in the other language and get its translation
  try {
    // Try as page in other language
    const otherPageResult = await client.query({
      query: GET_PAGE_BY_SLUG_AND_LANGUAGE,
      variables: { slug, language: otherLanguageCode },
    });

    const otherPage = otherPageResult.data?.pages?.nodes?.[0];
    if (otherPage?.translations) {
      // Find translation for target language
      const translation = otherPage.translations.find(
        (t: any) => t.language?.code === languageCode
      );
      if (translation?.slug) {
        // Fetch the actual translated page
        const translatedPageResult = await client.query({
          query: GET_PAGE_BY_SLUG_AND_LANGUAGE,
          variables: { slug: translation.slug, language: languageCode },
        });
        const translatedPage = translatedPageResult.data?.pages?.nodes?.[0];
        if (translatedPage) {
          return { type: 'Page' as const, data: translatedPage };
        }
      }
    }
  } catch (error) {
    console.error('Error fetching page translation:', error);
  }

  // Try as post in other language
  try {
    const otherPostResult = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { slug, language: otherLanguageCode },
    });

    const otherPost = otherPostResult.data?.posts?.nodes?.[0];
    if (otherPost?.translations) {
      // Find translation for target language
      const translation = otherPost.translations.find(
        (t: any) => t.language?.code === languageCode
      );
      if (translation?.slug) {
        // Fetch the actual translated post
        const translatedPostResult = await client.query({
          query: GET_POST_BY_SLUG,
          variables: { slug: translation.slug, language: languageCode },
        });
        const translatedPost = translatedPostResult.data?.posts?.nodes?.[0];
        if (translatedPost) {
          return { type: 'Post' as const, data: translatedPost };
        }
      }
    }
  } catch (error) {
    console.error('Error fetching post translation:', error);
  }

  return null;
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const client = getClient();

  try {
    // Get pages for both languages
    const pagesResult = await client.query({
      query: GET_ALL_PAGES,
      variables: { first: 100 }
    });

    // Get posts for both languages
    const enPostsResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: 'EN' }
    });

    const ukPostsResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: 'UK' }
    });

    const pages = pagesResult.data?.pages?.nodes || [];
    const enPosts = enPostsResult.data?.posts?.nodes || [];
    const ukPosts = ukPostsResult.data?.posts?.nodes || [];

    // Extract slugs from URIs for pages (both actual slugs and canonical slugs)
    const pageParams: { locale: string; slug: string }[] = [];
    const seenParams = new Set<string>();

    pages.forEach((page: any) => {
      const uri = page.uri as string;
      // Extract locale and slug from URI like "/en/about/" or "/uk/about-6/"
      const match = uri.match(/^\/(en|uk)\/([^\/]+)\/?$/);
      if (match) {
        const locale = match[1];
        const slug = match[2];
        const key = `${locale}:${slug}`;
        if (!seenParams.has(key)) {
          seenParams.add(key);
          pageParams.push({ locale, slug });
        }
      }
    });

    // For each English page, also generate a Ukrainian path with the same slug
    // This enables /uk/about to work (will use translation fallback)
    pages.forEach((page: any) => {
      const uri = page.uri as string;
      const match = uri.match(/^\/(en)\/([^\/]+)\/?$/);
      if (match) {
        const enSlug = match[2];
        const ukKey = `uk:${enSlug}`;
        if (!seenParams.has(ukKey)) {
          seenParams.add(ukKey);
          pageParams.push({ locale: 'uk', slug: enSlug });
        }
      }
    });

    // Add post params - both actual and canonical slugs
    const postParams: { locale: string; slug: string }[] = [];

    enPosts.forEach((post: any) => {
      const key = `en:${post.slug}`;
      if (!seenParams.has(key)) {
        seenParams.add(key);
        postParams.push({ locale: 'en', slug: post.slug });
      }
      // Also add Ukrainian path with English slug for fallback
      const ukKey = `uk:${post.slug}`;
      if (!seenParams.has(ukKey)) {
        seenParams.add(ukKey);
        postParams.push({ locale: 'uk', slug: post.slug });
      }
    });

    ukPosts.forEach((post: any) => {
      const key = `uk:${post.slug}`;
      if (!seenParams.has(key)) {
        seenParams.add(key);
        postParams.push({ locale: 'uk', slug: post.slug });
      }
    });

    return [...pageParams, ...postParams];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const result = await fetchContentBySlugAndLanguage(slug, locale);

    if (!result) {
      return {
        title: 'Not Found',
      };
    }

    // Handle both Page and Post types
    if (result.type === 'Page') {
      return {
        title: result.data.title,
        description: '', // Could extract from content if needed
      };
    } else if (result.type === 'Post') {
      // Strip HTML tags from excerpt for description
      const cleanExcerpt = result.data.excerpt?.replace(/<[^>]*>/g, '').trim() || '';
      return {
        title: result.data.title,
        description: cleanExcerpt || '',
      };
    }

    return {
      title: 'Not Found',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Not Found',
    };
  }
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');

  // Fetch content using language-aware query
  const result = await fetchContentBySlugAndLanguage(slug, locale);

  if (!result) {
    notFound();
  }

  // Detect content type and render appropriate template
  if (result.type === 'Post') {
    // Render blog post using BlogPostTemplate
    return <BlogPostTemplate post={result.data} locale={locale} getQuoteText={t('getQuote')} />;
  }

  // Render page (default)
  const page = result.data;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      {page.featuredImage?.node?.sourceUrl && (
        <div className="relative h-64 md:h-96 bg-gradient-primary">
          <Image
            src={page.featuredImage.node.sourceUrl}
            alt={page.featuredImage.node.altText || page.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-900/80 flex items-center justify-center">
            <div className="container-custom text-center">
              <h1 className="text-white font-bold">{page.title}</h1>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <section className="section">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            {!page.featuredImage?.node?.sourceUrl && (
              <h1 className="mb-8">{page.title}</h1>
            )}

            {/* WordPress Content */}
            <div
              className="prose prose-lg prose-primary max-w-none
                prose-headings:font-semibold
                prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-neutral-700 prose-p:mb-4 prose-p:leading-relaxed
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-neutral-700 prose-li:mb-2
                prose-strong:text-neutral-900 prose-strong:font-semibold
                prose-img:rounded-lg prose-img:shadow-md"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />

            {/* Page Meta */}
            {page.modified && (
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  {locale === 'en' ? 'Last updated: ' : 'Останнє оновлення: '}
                  {new Date(page.modified).toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
}
