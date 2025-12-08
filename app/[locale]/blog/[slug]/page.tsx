import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_POST_BY_SLUG, GET_ALL_POSTS } from '@/lib/wordpress/queries';
import { generatePostMetadata } from '@/lib/seo/metadata';
import { generateArticleSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import { getOptimizedImageUrl } from '@/lib/image-url';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const client = getClient();

  try {
    // Get posts for both languages
    const enResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: 'EN' }
    });

    const ukResult = await client.query({
      query: GET_ALL_POSTS,
      variables: { language: 'UK' }
    });

    const enPosts = enResult.data?.posts?.nodes || [];
    const ukPosts = ukResult.data?.posts?.nodes || [];

    return [
      ...enPosts.map((post: any) => ({
        locale: 'en',
        slug: post.slug,
      })),
      ...ukPosts.map((post: any) => ({
        locale: 'uk',
        slug: post.slug,
      }))
    ];
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: {
        slug,
        language: languageCode
      },
    });

    const post = data?.posts?.nodes?.[0];

    if (!post) {
      return {
        title: 'Post Not Found',
      };
    }

    // Verify the returned post language matches the requested language
    if (post.language?.code !== languageCode) {
      return {
        title: 'Post Not Found',
      };
    }

    return generatePostMetadata(locale, slug, post);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let postData: any = null;

  try {
    const client = getClient();
    const result = await client.query({
      query: GET_POST_BY_SLUG,
      variables: {
        slug,
        language: languageCode
      },
    });
    postData = result.data;
  } catch (error) {
    console.error('Error fetching post data:', error);
    notFound();
  }

  const post = postData?.posts?.nodes?.[0];

  if (!post) {
    notFound();
  }

  // Verify the returned post language matches the requested language
  if (post.language?.code !== languageCode) {
    notFound();
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate JSON-LD structured data
  const articleSchema = generateArticleSchema(locale, {
    title: post.title,
    slug,
    excerpt: post.excerpt?.replace(/<[^>]*>/g, ''),
    content: post.content,
    author: post.author?.node?.name,
    publishedDate: post.date,
    featuredImage: post.featuredImage?.node?.sourceUrl,
    categories: post.categories?.nodes?.map((cat: any) => cat.name),
  });

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Blog' : 'Блог', url: `/${locale}/blog` },
    { name: post.title },
  ]);

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Featured Image Hero */}
      {post.featuredImage?.node?.sourceUrl ? (
        <div className="relative h-96 md:h-[500px]">
          {/* Background Image */}
          <Image
            src="/bg-hero-blog.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Featured Image Overlay */}
          <div className="absolute inset-0">
            <Image
              src={getOptimizedImageUrl(post.featuredImage.node.sourceUrl)}
              alt={post.featuredImage.node.altText || post.title}
              fill
              sizes="100vw"
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 to-neutral-900/70 flex items-end">
            <div className="container-custom pb-12">
              {/* Categories */}
              {post.categories?.nodes && post.categories.nodes.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.nodes.map((category: any) => (
                    <Link
                      key={category.id}
                      href={`/${locale}/blog/category/${category.slug}`}
                      className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              <h1 className="text-white font-bold mb-4">{post.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                {post.author?.node?.name && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{post.author.node.name}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section className="relative section text-white">
          {/* Background Image */}
          <Image
            src="/bg-hero-blog.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900/70" />
          <div className="container-custom relative z-10">
            {/* Categories */}
            {post.categories?.nodes && post.categories.nodes.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.nodes.map((category: any) => (
                  <Link
                    key={category.id}
                    href={`/${locale}/blog/category/${category.slug}`}
                    className="text-sm font-medium text-white bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="mb-4 font-bold text-white">{post.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              {post.author?.node?.name && (
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{post.author.node.name}</span>
                </div>
              )}
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Content */}
      <section className="section">
        <div className="container-custom">
          <article className="max-w-4xl mx-auto">
            {/* WordPress Content */}
            {post.content && (
              <div
                className="prose max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            {/* Tags */}
            {post.tags?.nodes && post.tags.nodes.length > 0 && (
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold mb-4 text-neutral-900">
                  {locale === 'en' ? 'Tags:' : 'Теги:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.nodes.map((tag: any) => (
                    <span
                      key={tag.id}
                      className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Navigation - Back to Blog */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href={`/${locale}/blog`}
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'en' ? 'Back to Blog' : 'Назад до блогу'}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">
              {locale === 'en'
                ? 'Interested in Our Solutions?'
                : 'Зацікавлені в наших рішеннях?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Contact us to discuss how we can help with your aquaculture project.'
                : 'Зв\'яжіться з нами, щоб обговорити, як ми можемо допомогти з вашим проектом аквакультури.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}/contact`} className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors">
                {t('getQuote')}
              </a>
              <a href={`/${locale}/services`} className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                {locale === 'en' ? 'View Our Services' : 'Наші послуги'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
