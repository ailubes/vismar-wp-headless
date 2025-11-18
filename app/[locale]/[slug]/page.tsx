import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_CONTENT_BY_URI, GET_ALL_PAGES, GET_ALL_POSTS } from '@/lib/wordpress/queries';
import Image from 'next/image';
import { BlogPostTemplate } from '@/components/BlogPostTemplate';

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

    // Extract slugs from URIs for pages
    const pageParams = pages
      .map((page: any) => {
        const uri = page.uri as string;
        // Extract locale and slug from URI like "/en/about/" or "/ua/about-3/"
        const match = uri.match(/^\/(en|ua)\/([^\/]+)\/?$/);
        if (match) {
          return {
            locale: match[1],
            slug: match[2],
          };
        }
        return null;
      })
      .filter(Boolean);

    // Add post params (posts use slug directly)
    const postParams = [
      ...enPosts.map((post: any) => ({
        locale: 'en',
        slug: post.slug,
      })),
      ...ukPosts.map((post: any) => ({
        locale: 'uk',
        slug: post.slug,
      }))
    ];

    return [...pageParams, ...postParams];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const client = getClient();
    // Construct URI for WordPress query
    const uri = `/${locale}/${slug}`;

    const { data } = await client.query({
      query: GET_CONTENT_BY_URI,
      variables: { uri },
    });

    const content = data?.nodeByUri;

    if (!content) {
      return {
        title: 'Not Found',
      };
    }

    // Handle both Page and Post types
    if (content.__typename === 'Page') {
      return {
        title: content.title,
        description: '', // Could extract from content if needed
      };
    } else if (content.__typename === 'Post') {
      // Strip HTML tags from excerpt for description
      const cleanExcerpt = content.excerpt?.replace(/<[^>]*>/g, '').trim() || '';
      return {
        title: content.title,
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

  let contentData: any = null;

  try {
    const client = getClient();
    // Construct URI for WordPress query
    const uri = `/${locale}/${slug}`;

    const result = await client.query({
      query: GET_CONTENT_BY_URI,
      variables: { uri },
    });
    contentData = result.data;
  } catch (error) {
    console.error('Error fetching content data:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
    }
    notFound();
  }

  const content = contentData?.nodeByUri;

  if (!content) {
    notFound();
  }

  // Detect content type and render appropriate template
  if (content.__typename === 'Post') {
    // Render blog post using BlogPostTemplate
    return <BlogPostTemplate post={content} locale={locale} getQuoteText={t('getQuote')} />;
  }

  // Render page (default)
  const page = content;

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
