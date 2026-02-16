import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getClient } from '@/lib/wordpress/client';
import { GET_PAGE_BY_SLUG } from '@/lib/wordpress/queries';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, renderJsonLd } from '@/lib/seo/structured-data';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageCircle, Sparkles, ArrowRight, Send, Headphones, Globe, Zap, MessageSquare } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'contact' },
    });

    const page = data?.page;

    return {
      title: page?.seo?.title || page?.title || (locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами"),
      description: page?.seo?.metaDesc || (locale === 'en'
        ? 'Contact Vismar Aqua for aquaculture engineering consultation. Email or call +380 67 502 4730. Response within 4 hours. Mon–Sat.'
        : "Зв'яжіться з Vismar Aqua для консультації з інжинірингу аквакультури. Відповідь протягом 4 годин. Пн–Сб."),
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: locale === 'en' ? 'Contact Us' : "Зв'яжіться з нами",
    };
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('common');

  let pageData: any = null;

  try {
    const client = getClient();
    const { data } = await client.query({
      query: GET_PAGE_BY_SLUG,
      variables: { slug: 'contact' },
    });
    pageData = data;
  } catch (error) {
    console.log('Contact page content not found, using default content');
  }

  const page = pageData?.page;

  // Generate JSON-LD structured data
  const localBusinessSchema = generateLocalBusinessSchema(locale);

  const breadcrumbSchema = generateBreadcrumbSchema(locale, [
    { name: locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
    { name: locale === 'en' ? 'Contact' : 'Контакти' },
  ]);

  // Hero stats
  const heroStats = [
    {
      icon: Zap,
      value: '<4h',
      label: { en: 'Response Time', uk: 'Час відповіді' }
    },
    {
      icon: Clock,
      value: '9-21',
      label: { en: 'Working Hours', uk: 'Робочі години' }
    },
    {
      icon: Globe,
      value: '20+',
      label: { en: 'Countries Served', uk: 'Країн обслуговування' }
    },
    {
      icon: Headphones,
      value: '6',
      label: { en: 'Days/Week', uk: 'Днів/тиждень' }
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: Mail,
      title: { en: 'Email Us', uk: 'Напишіть нам' },
      description: { en: 'For general inquiries and project discussions', uk: 'Для загальних запитів та обговорення проектів' },
      value: 'info@vismar-aqua.com',
      href: 'mailto:info@vismar-aqua.com',
      color: 'blue',
      platforms: []
    },
    {
      icon: Phone,
      title: { en: 'WhatsApp / Viber', uk: 'WhatsApp / Viber' },
      description: { en: 'Voice calls & messaging', uk: 'Голосові дзвінки та повідомлення' },
      value: '+380 67 502 4730',
      href: 'tel:+380675024730',
      color: 'green',
      platforms: [
        { name: 'WhatsApp', href: 'https://wa.me/380675024730', color: '#25D366' },
        { name: 'Viber', href: 'viber://chat?number=%2B380675024730', color: '#7360F2' }
      ]
    },
    {
      icon: MessageSquare,
      title: { en: 'Telegram', uk: 'Telegram' },
      description: { en: 'Quick messaging & voice calls', uk: 'Швидкі повідомлення та дзвінки' },
      value: '+380 50 879 6803',
      href: 'tel:+380508796803',
      color: 'purple',
      platforms: [
        { name: 'Telegram', href: 'https://t.me/+380508796803', color: '#0088cc' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; iconBg: string; text: string }> = {
      blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-500', text: 'text-blue-600' },
      green: { bg: 'bg-green-50', iconBg: 'bg-green-500', text: 'text-green-600' },
      purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-500', text: 'text-purple-600' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbSchema) }}
      />

      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center py-16 md:py-24 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />

        {/* Decorative gradient circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#35a87a]/10 to-transparent blur-2xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-20">
            <Mail className="w-12 h-12 text-[#42c997]" />
          </div>
          <div className="absolute top-[25%] right-[12%] animate-float-medium opacity-15">
            <MessageCircle className="w-16 h-16 text-[#00A8B5]" />
          </div>
          <div className="absolute bottom-[30%] left-[15%] animate-float-fast opacity-20">
            <Phone className="w-10 h-10 text-[#35a87a]" />
          </div>
          <div className="absolute bottom-[20%] right-[8%] animate-float-slow opacity-15">
            <Send className="w-14 h-14 text-[#42c997]" />
          </div>
          <div className="absolute top-[60%] left-[5%] animate-float-medium opacity-10">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-[40%] right-[5%] animate-float-fast opacity-15">
            <Headphones className="w-10 h-10 text-[#00A8B5]" />
          </div>
        </div>

        {/* Hero content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-[#42c997]" />
              <span className="text-sm font-medium text-white/90">
                {locale === 'en' ? 'Get In Touch' : "Зв'яжіться з нами"}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              {locale === 'en' ? (
                <>
                  Let&apos;s Build Your{' '}
                  <span className="text-[#42c997]">Aquaculture Success</span>
                </>
              ) : (
                <>
                  Давайте побудуємо ваш{' '}
                  <span className="text-[#42c997]">успіх в аквакультурі</span>
                </>
              )}
            </h1>

            {/* Subheader */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              {locale === 'en'
                ? 'Whether you\'re planning a new facility, upgrading existing systems, or exploring digital solutions — our team is ready to help you achieve your aquaculture goals. Fast response, expert guidance, personalized solutions.'
                : 'Незалежно від того, чи плануєте ви новий об\'єкт, модернізуєте існуючі системи чи досліджуєте цифрові рішення — наша команда готова допомогти вам досягти ваших цілей в аквакультурі.'}
            </p>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {heroStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300"
                  >
                    <StatIcon className="w-6 h-6 md:w-8 md:h-8 text-[#42c997] mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-white/70">
                      {locale === 'en' ? stat.label.en : stat.label.uk}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section bg-white -mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const MethodIcon = method.icon;
              const colors = getColorClasses(method.color);
              return (
                <div
                  key={index}
                  className={`group p-6 md:p-8 ${colors.bg} rounded-2xl border border-neutral-100 hover:border-[#42c997]/30 hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-xl ${colors.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <MethodIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {locale === 'en' ? method.title.en : method.title.uk}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {locale === 'en' ? method.description.en : method.description.uk}
                  </p>
                  <a href={method.href} className={`${colors.text} font-semibold hover:underline inline-block mb-4`}>
                    {method.value}
                  </a>

                  {/* Platform badges */}
                  {method.platforms && method.platforms.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center mt-4 pt-4 border-t border-neutral-200">
                      {method.platforms.map((platform, pIdx) => (
                        <a
                          key={pIdx}
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium text-sm hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: platform.color }}
                        >
                          <MessageCircle className="w-4 h-4" />
                          {platform.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
                {locale === 'en' ? 'Contact Details' : 'Контактні дані'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
                {locale === 'en' ? 'Get in Touch' : "Зв'яжіться з нами"}
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                {locale === 'en'
                  ? 'Have questions about our aquaculture engineering or software solutions? Our team of experts is ready to assist you with personalized guidance for your project.'
                  : 'Маєте питання щодо наших рішень з інжинірингу аквакультури чи програмного забезпечення? Наша команда експертів готова допомогти вам з персоналізованими рекомендаціями для вашого проекту.'}
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-[#42c997]/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#35a87a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {locale === 'en' ? 'Email' : 'Електронна пошта'}
                    </h3>
                    <a href="mailto:info@vismar-aqua.com" className="text-[#35a87a] hover:text-[#2a8a63]">
                      info@vismar-aqua.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-[#42c997]/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#35a87a]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {locale === 'en' ? 'Phone Numbers' : 'Телефони'}
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <a href="tel:+380675024730" className="text-[#35a87a] hover:text-[#2a8a63] font-medium block">
                          +380 67 502 4730
                        </a>
                        <p className="text-xs text-neutral-500 mt-0.5">WhatsApp, Viber, Voice</p>
                      </div>
                      <div>
                        <a href="tel:+380508796803" className="text-[#35a87a] hover:text-[#2a8a63] font-medium block">
                          +380 50 879 6803
                        </a>
                        <p className="text-xs text-neutral-500 mt-0.5">Telegram, Voice</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:border-[#42c997]/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#42c997]/20 to-[#00A8B5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#35a87a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {locale === 'en' ? 'Address' : 'Адреса'}
                    </h3>
                    <p className="text-neutral-700">
                      {locale === 'en' ? 'Kyiv, Ukraine' : 'Київ, Україна'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/5 border border-[#42c997]/20">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#35a87a]" />
                  <h3 className="font-semibold text-neutral-900">
                    {locale === 'en' ? 'Business Hours' : 'Години роботи'}
                  </h3>
                </div>
                <div className="space-y-2 text-neutral-700">
                  <div className="flex justify-between">
                    <span>{locale === 'en' ? 'Monday - Friday' : 'Понеділок - П\'ятниця'}</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{locale === 'en' ? 'Saturday' : 'Субота'}</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{locale === 'en' ? 'Sunday' : 'Неділя'}</span>
                    <span className="text-neutral-500">{locale === 'en' ? 'Closed' : 'Вихідний'}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#35a87a]">
                  {locale === 'en'
                    ? '* Response time typically under 4 hours during business hours'
                    : '* Час відповіді зазвичай менше 4 годин у робочі години'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-100">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                {locale === 'en' ? 'Send Us a Message' : 'Надішліть нам повідомлення'}
              </h3>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[#42c997] uppercase tracking-wider mb-3">
              {locale === 'en' ? 'Our Location' : 'Наше розташування'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading">
              {locale === 'en' ? 'Find Us on the Map' : 'Знайдіть нас на карті'}
            </h2>
          </div>
          <div className="aspect-video bg-neutral-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325519.8056278236!2d30.239899249999998!3d50.4016991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2sKyiv%2C%20Ukraine!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={locale === 'en' ? 'Vismar-Aqua Location Map' : 'Карта розташування Vismar-Aqua'}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#42c997]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-2xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {locale === 'en'
                ? 'Ready to Start Your Project?'
                : 'Готові розпочати свій проект?'}
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              {locale === 'en'
                ? 'Explore our services, browse completed projects, or learn more about how we can help transform your aquaculture operation.'
                : 'Ознайомтеся з нашими послугами, переглянувши завершені проекти, або дізнайтеся більше про те, як ми можемо допомогти трансформувати вашу операцію аквакультури.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#42c997] hover:bg-[#35a87a] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#42c997]/25"
              >
                {locale === 'en' ? 'Our Services' : 'Наші послуги'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {locale === 'en' ? 'View Projects' : 'Переглянути проекти'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
