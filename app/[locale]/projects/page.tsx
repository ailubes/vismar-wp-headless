import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getClient } from '@/lib/wordpress/client';
import { GET_ALL_PROJECTS } from '@/lib/wordpress/queries';
import ProjectsClient from './ProjectsClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const languageCode = locale === 'en' ? 'EN' : 'UK';

  let projectsData: any = null;
  let errorMessage: string | null = null;

  try {
    const client = getClient();

    // Fetch projects server-side
    const projectsResult = await client.query({
      query: GET_ALL_PROJECTS,
      variables: { language: languageCode },
    });
    projectsData = projectsResult.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    errorMessage = locale === 'en'
      ? 'Failed to load projects. Please try again later.'
      : 'Не вдалося завантажити проекти. Будь ласка, спробуйте пізніше.';
  }

  const projects = projectsData?.projects?.nodes || [];

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
      <section className="section bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 font-bold">
            {locale === 'en' ? 'Our Projects' : 'Наші проекти'}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {locale === 'en'
              ? 'Successful aquaculture installations worldwide'
              : 'Успішні аквакультурні установки по всьому світу'}
          </p>
        </div>
      </section>

      {/* Client Component with Filters and Projects Grid */}
      <ProjectsClient projects={projects} locale={locale} />

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">
              {locale === 'en'
                ? 'Ready to Start Your Project?'
                : 'Готові розпочати свій проект?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {locale === 'en'
                ? 'Let us help you achieve success with our proven aquaculture solutions.'
                : 'Дозвольте нам допомогти вам досягти успіху з нашими перевіреними рішеннями для аквакультури.'}
            </p>
            <a href={`/${locale}/contact`} className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors">
              {t('getQuote')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
