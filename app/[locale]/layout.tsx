import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Poppins, Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo/structured-data';
import { generateDefaultMetadata } from '@/lib/seo/metadata';
import '../globals.css';

// Poppins for English/Latin content
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// Montserrat for Ukrainian/Cyrillic content
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const locales = ['en', 'uk'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateDefaultMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Generate JSON-LD structured data
  const organizationSchema = generateOrganizationSchema(locale);
  const websiteSchema = generateWebSiteSchema(locale);

  return (
    <html lang={locale} className={`${poppins.variable} ${montserrat.variable}`}>
      <body className={`flex flex-col min-h-screen ${locale === 'en' ? 'font-poppins' : 'font-montserrat'}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
