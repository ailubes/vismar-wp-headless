import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_POSTS_BY_CATEGORY, GET_ALL_CATEGORIES } from '@/lib/wordpress/queries';
import BlogCard from '@/components/BlogCard';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateStaticParams() {
  const client = getClient();

  try {
    // Get categories for both languages
    const enResult = await client.query({
      query: GET_ALL_CATEGORIES,
      variables: { language: 'EN' }
    });

    const ukResult = await client.query({
      query: GET_ALL_CATEGORIES,
      variables: { language: 'UK' }
    });

    const enCategories = enResult.data?.categories?.nodes || [];
    const ukCategories = ukResult.data?.categories?.nodes || [];

    return [
      ...enCategories.map((category: any) => ({
        locale: 'en',
        slug: category.slug,
      })),
      ...ukCategories.map((category: any) => ({
        locale: 'uk',
        slug: category.slug,
      }))
    ];
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  try {
    const client = getClient();

    // Get category details
    const categoriesResult = await client.query({
      query: GET_ALL_CATEGORIES,
      variables: { language: languageCode },
    });

    const categories = categoriesResult.data?.categories?.nodes || [];
    const category = categories.find((cat: any) => cat.slug === slug);

    if (!category) {
      return {
        title: 'Category Not Found',
      };
    }

    return {
      title: `${category.name} - ${locale === 'en' ? 'Blog' : 'Блог'}`,
      description: category.description || `Posts in ${category.name} category`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Category Not Found',
    };
  }
}

export default async function CategoryArchivePage({ params, searchParams }: Props) {
  const { locale, slug } = await params;
  const { page: pageParam } = await searchParams;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  // Pagination settings
  const postsPerPage = 10;
  const currentPage = parseInt(pageParam || '1', 10);

  let postsData: any = null;
  let categoriesData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch posts by category
    const postsResult = await client.query({
      query: GET_POSTS_BY_CATEGORY,
      variables: {
        language: languageCode,
        categorySlug: slug,
        first: 100, // Fetch more for pagination
      },
    });
    postsData = postsResult.data;

    // Fetch category details
    const categoriesResult = await client.query({
      query: GET_ALL_CATEGORIES,
      variables: { language: languageCode },
    });
    categoriesData = categoriesResult.data;
  } catch (error) {
    console.error('Error fetching category posts:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load category posts. Please try again later.'
      : 'Не вдалося завантажити статті категорії. Будь ласка, спробуйте пізніше.';
  }

  const allPosts = postsData?.posts?.nodes || [];
  const categories = categoriesData?.categories?.nodes || [];
  const category = categories.find((cat: any) => cat.slug === slug);

  if (!category && !errorMessage) {
    notFound();
  }

  // Client-side pagination
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
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
      <section className="section bg-gradient-primary text-white">
        <div className="container-custom text-center">
          {/* Back to Blog Link */}
          <a
            href={`/${locale}/blog`}
            className="inline-flex items-center text-white/90 hover:text-white mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'en' ? 'Back to Blog' : 'Назад до блогу'}
          </a>

          <h1 className="mb-4 font-bold">
            {category?.name || slug}
          </h1>

          {category?.description && (
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {category.description}
            </p>
          )}

          {category?.count !== undefined && (
            <p className="text-white/80 mt-4">
              {category.count} {locale === 'en' ? 'posts' : 'статей'}
            </p>
          )}
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
                      href={`/${locale}/blog/category/${slug}?page=${currentPage - 1}`}
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

                      return (
                        <a
                          key={pageNum}
                          href={`/${locale}/blog/category/${slug}?page=${pageNum}`}
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
                      href={`/${locale}/blog/category/${slug}?page=${currentPage + 1}`}
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
                {locale === 'en'
                  ? 'No posts found in this category.'
                  : 'У цій категорії не знайдено статей.'}
              </p>
              <a
                href={`/${locale}/blog`}
                className="inline-block mt-6 text-primary-600 hover:text-primary-700 font-medium"
              >
                {locale === 'en' ? 'View all posts' : 'Переглянути всі статті'}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      {categories.length > 1 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <h2 className="text-center mb-8">
              {locale === 'en' ? 'Explore Other Categories' : 'Інші категорії'}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((cat: any) => cat.slug !== slug)
                .map((cat: any) => (
                  <a
                    key={cat.id}
                    href={`/${locale}/blog/category/${cat.slug}`}
                    className="px-6 py-3 bg-white border border-neutral-200 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors font-medium"
                  >
                    {cat.name} ({cat.count})
                  </a>
                ))}
            </div>
          </div>
        </section>
      )}

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
