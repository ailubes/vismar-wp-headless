import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_POSTS } from '@/lib/wordpress/queries';
import BlogCard from '@/components/BlogCard';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type Props = {
  params: Promise<{ locale: string; page?: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en' ? 'Blog & Insights' : 'Блог та статті',
    description: locale === 'en'
      ? 'Latest news, insights, and updates from the world of aquaculture and water treatment'
      : 'Останні новини, статті та оновлення зі світу аквакультури та очищення води',
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale, page: pageParam } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  // Get page number from URL path
  // /blog → page 1
  // /blog/2 → page 2
  // /blog/3 → page 3
  const pageNumber = pageParam?.[0];
  const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;

  // Validate page number
  if (pageNumber && (isNaN(currentPage) || currentPage < 1)) {
    notFound();
  }

  // Pagination settings
  const postsPerPage = 12;

  let postsData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch posts with pagination
    const result = await client.query({
      query: GET_ALL_POSTS,
      variables: {
        language: languageCode,
        first: 100, // Fetch all posts for client-side pagination
      },
    });
    postsData = result.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load blog posts. Please try again later.'
      : 'Не вдалося завантажити статті блогу. Будь ласка, спробуйте пізніше.';
  }

  const allPosts = postsData?.posts?.nodes || [];

  // Client-side pagination
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Validate current page is within range
  if (currentPage > totalPages && totalPages > 0) {
    notFound();
  }

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const posts = allPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="container-custom">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Page Header */}
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
        <div className="container-custom text-center relative z-10">
          <h1 className="mb-4 font-bold">
            {locale === 'en' ? 'Blog & Insights' : 'Блог та статті'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Latest news, insights, and updates from the world of aquaculture and water treatment'
              : 'Останні новини, статті та оновлення зі світу аквакультури та очищення води'}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section">
        <div className="container-custom">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: any) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    locale={locale}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-2">
                  {/* Previous Button */}
                  {currentPage > 1 && (
                    <a
                      href={currentPage === 2 ? `/${locale}/blog` : `/${locale}/blog/page/${currentPage - 1}`}
                      className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      {locale === 'en' ? 'Previous' : 'Попередня'}
                    </a>
                  )}

                  {/* Page Numbers */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      // Show first page, last page, current page, and pages around current
                      const showPage =
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

                      if (!showPage && pageNum === 2 && currentPage > 3) {
                        return <span key={pageNum} className="px-2">...</span>;
                      }

                      if (!showPage && pageNum === totalPages - 1 && currentPage < totalPages - 2) {
                        return <span key={pageNum} className="px-2">...</span>;
                      }

                      if (!showPage) return null;

                      const pageUrl = pageNum === 1 ? `/${locale}/blog` : `/${locale}/blog/page/${pageNum}`;

                      return (
                        <a
                          key={pageNum}
                          href={pageUrl}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            pageNum === currentPage
                              ? 'bg-primary-600 text-white font-semibold'
                              : 'border border-neutral-300 hover:bg-neutral-50'
                          }`}
                        >
                          {pageNum}
                        </a>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  {currentPage < totalPages && (
                    <a
                      href={`/${locale}/blog/page/${currentPage + 1}`}
                      className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      {locale === 'en' ? 'Next' : 'Наступна'}
                    </a>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                {locale === 'en' ? 'No blog posts available at the moment.' : 'На даний момент статті відсутні.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">
              {locale === 'en'
                ? 'Stay Updated'
                : 'Будьте в курсі'}
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              {locale === 'en'
                ? 'Subscribe to our newsletter for the latest updates and insights.'
                : 'Підпишіться на нашу розсилку для отримання останніх оновлень та статей.'}
            </p>
            <a href={`/${locale}/contact`} className="btn-primary text-lg px-8 py-4">
              {locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
