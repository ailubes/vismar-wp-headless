'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const t = useTranslations('language');
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;

    // Check if we're on a blog post page
    const isBlogPost = pathname.match(/^\/[a-z]{2}\/blog\/[^/]+$/);

    if (isBlogPost) {
      // For blog posts, redirect to blog homepage in the new language
      // since translations may not exist
      router.push(`/${newLocale}/blog`);
    } else {
      // For other pages, replace the locale in the pathname
      const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPath);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
          locale === 'en'
            ? 'bg-primary-500 text-white'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
        }`}
        aria-label={`${t('switchTo')} ${t('en')}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('uk')}
        className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
          locale === 'uk'
            ? 'bg-primary-500 text-white'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
        }`}
        aria-label={`${t('switchTo')} ${t('uk')}`}
      >
        UK
      </button>
    </div>
  );
}
