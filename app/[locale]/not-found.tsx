import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl font-bold text-gradient mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4">{t('notFound')}</h1>
          <p className="text-xl text-neutral-600 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/en" className="btn-primary">
            {t('home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
