import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Shield, Lock, Cookie, Eye, FileText, UserCheck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Privacy Policy - Vismar Aqua'
      : 'Політика конфіденційності - Vismar Aqua',
    description: locale === 'en'
      ? 'Learn how Vismar Aqua collects, uses, and protects your personal information. Our commitment to data privacy and security.'
      : 'Дізнайтеся, як Vismar Aqua збирає, використовує та захищає вашу особисту інформацію. Наші зобов\'язання щодо конфіденційності даних.',
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: November 17, 2025',
      breadcrumb: 'Privacy Policy',
      intro: 'At Vismar Aqua, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
      sections: [
        {
          icon: FileText,
          title: 'Information We Collect',
          content: [
            'We collect information that you provide directly to us, including:',
            '• Contact information (name, email address, phone number, company name)',
            '• Project inquiry details and requirements',
            '• Communication preferences',
            '• Information you provide when subscribing to our newsletter or blog',
            '• Technical information automatically collected (IP address, browser type, device information, cookies)',
          ]
        },
        {
          icon: Eye,
          title: 'How We Use Your Information',
          content: [
            'We use the information we collect to:',
            '• Respond to your inquiries and provide requested services',
            '• Send you project proposals, quotes, and technical documentation',
            '• Communicate about our services, updates, and industry insights',
            '• Improve our website and services',
            '• Comply with legal obligations',
            '• Analyze website usage and optimize user experience',
          ]
        },
        {
          icon: Lock,
          title: 'Data Security',
          content: [
            'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:',
            '• Encrypted data transmission (SSL/TLS)',
            '• Secure server infrastructure',
            '• Access controls and authentication',
            '• Regular security audits',
            '• However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.',
          ]
        },
        {
          icon: Cookie,
          title: 'Cookies and Tracking Technologies',
          content: [
            'We use cookies and similar tracking technologies to:',
            '• Remember your preferences and settings',
            '• Analyze website traffic and usage patterns',
            '• Improve website functionality',
            '• Provide personalized content',
            '',
            'You can control cookies through your browser settings. Please note that disabling cookies may affect website functionality.',
          ]
        },
        {
          icon: Shield,
          title: 'Third-Party Services',
          content: [
            'We may use third-party service providers to help us operate our business and website, including:',
            '• Web hosting providers',
            '• Analytics services (e.g., Google Analytics)',
            '• Email marketing platforms',
            '• Customer relationship management (CRM) systems',
            '',
            'These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your information.',
          ]
        },
        {
          icon: UserCheck,
          title: 'Your Rights',
          content: [
            'Depending on your location, you may have the following rights regarding your personal information:',
            '• Access: Request a copy of your personal information',
            '• Correction: Request correction of inaccurate information',
            '• Deletion: Request deletion of your information',
            '• Objection: Object to processing of your information',
            '• Data portability: Request transfer of your information',
            '• Withdraw consent: Withdraw consent for processing',
            '',
            'To exercise these rights, please contact us at info@vismaraqua.com.ua',
          ]
        },
      ],
      contact: {
        title: 'Contact Us',
        description: 'If you have questions or concerns about this Privacy Policy or our data practices, please contact us:',
        email: 'info@vismaraqua.com.ua',
        company: 'Vismar Aqua',
        location: 'Kyiv, Ukraine',
      }
    },
    uk: {
      title: 'Політика конфіденційності',
      lastUpdated: 'Останнє оновлення: 17 листопада 2025',
      breadcrumb: 'Політика конфіденційності',
      intro: 'У Vismar Aqua ми серйозно ставимося до вашої конфіденційності. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо, розкриваємо та захищаємо вашу інформацію при відвідуванні нашого веб-сайту або використанні наших послуг.',
      sections: [
        {
          icon: FileText,
          title: 'Інформація, яку ми збираємо',
          content: [
            'Ми збираємо інформацію, яку ви надаєте нам безпосередньо, включаючи:',
            '• Контактна інформація (ім\'я, електронна адреса, номер телефону, назва компанії)',
            '• Деталі запиту проекту та вимоги',
            '• Налаштування комунікації',
            '• Інформація, яку ви надаєте при підписці на наш розсилку або блог',
            '• Технічна інформація, зібрана автоматично (IP-адреса, тип браузера, інформація про пристрій, файли cookie)',
          ]
        },
        {
          icon: Eye,
          title: 'Як ми використовуємо вашу інформацію',
          content: [
            'Ми використовуємо зібрану інформацію для:',
            '• Відповіді на ваші запити та надання запитуваних послуг',
            '• Надсилання пропозицій проектів, розрахунків та технічної документації',
            '• Спілкування про наші послуги, оновлення та галузеві інсайти',
            '• Покращення нашого веб-сайту та послуг',
            '• Виконання юридичних зобов\'язань',
            '• Аналізу використання веб-сайту та оптимізації користувацького досвіду',
          ]
        },
        {
          icon: Lock,
          title: 'Безпека даних',
          content: [
            'Ми впроваджуємо відповідні технічні та організаційні заходи безпеки для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розголошення або знищення. Ці заходи включають:',
            '• Шифрування передачі даних (SSL/TLS)',
            '• Безпечна серверна інфраструктура',
            '• Контроль доступу та аутентифікація',
            '• Регулярні перевірки безпеки',
            '• Однак жоден метод передачі через інтернет не є на 100% безпечним. Хоча ми прагнемо захистити вашу інформацію, ми не можемо гарантувати абсолютну безпеку.',
          ]
        },
        {
          icon: Cookie,
          title: 'Файли cookie та технології відстеження',
          content: [
            'Ми використовуємо файли cookie та подібні технології відстеження для:',
            '• Запам\'ятовування ваших налаштувань',
            '• Аналізу трафіку та шаблонів використання веб-сайту',
            '• Покращення функціональності веб-сайту',
            '• Надання персоналізованого контенту',
            '',
            'Ви можете контролювати файли cookie через налаштування браузера. Зверніть увагу, що вимкнення файлів cookie може вплинути на функціональність веб-сайту.',
          ]
        },
        {
          icon: Shield,
          title: 'Сторонні сервіси',
          content: [
            'Ми можемо використовувати сторонніх постачальників послуг для допомоги в роботі нашого бізнесу та веб-сайту, включаючи:',
            '• Провайдери веб-хостингу',
            '• Аналітичні сервіси (наприклад, Google Analytics)',
            '• Платформи електронного маркетингу',
            '• Системи управління взаємовідносинами з клієнтами (CRM)',
            '',
            'Ці треті сторони мають доступ до вашої інформації лише для виконання конкретних завдань від нашого імені та зобов\'язані захищати вашу інформацію.',
          ]
        },
        {
          icon: UserCheck,
          title: 'Ваші права',
          content: [
            'Залежно від вашого місцезнаходження, ви можете мати наступні права щодо вашої особистої інформації:',
            '• Доступ: Запит копії вашої особистої інформації',
            '• Виправлення: Запит на виправлення неточної інформації',
            '• Видалення: Запит на видалення вашої інформації',
            '• Заперечення: Заперечення проти обробки вашої інформації',
            '• Переносимість даних: Запит на передачу вашої інформації',
            '• Відкликання згоди: Відкликання згоди на обробку',
            '',
            'Щоб скористатися цими правами, будь ласка, зв\'яжіться з нами за адресою info@vismaraqua.com.ua',
          ]
        },
      ],
      contact: {
        title: 'Зв\'яжіться з нами',
        description: 'Якщо у вас є питання або занепокоєння щодо цієї Політики конфіденційності або наших практик обробки даних, будь ласка, зв\'яжіться з нами:',
        email: 'info@vismaraqua.com.ua',
        company: 'Vismar Aqua',
        location: 'Київ, Україна',
      }
    }
  };

  const t = isEnglish ? content.en : content.uk;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Section background="light" spacing="sm">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-brand-primary transition-colors">
              {isEnglish ? 'Home' : 'Головна'}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{t.breadcrumb}</span>
          </nav>
        </div>
      </Section>

      {/* Header */}
      <Section background="white" spacing="xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.title}
              </h1>
              <p className="text-gray-600 text-lg mb-2">
                {t.lastUpdated}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="light" spacing="lg">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.intro}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Policy Sections */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {t.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                        {section.title}
                      </h2>
                    </div>
                    <div className="space-y-3 text-gray-700 leading-relaxed">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="transparent" spacing="xl" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.contact.title}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t.contact.description}
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
                <div>
                  <p className="text-white/70 text-sm mb-1">{isEnglish ? 'Email' : 'Електронна пошта'}</p>
                  <a href={`mailto:${t.contact.email}`} className="text-xl font-semibold hover:text-brand-accent transition-colors">
                    {t.contact.email}
                  </a>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white/70 text-sm mb-1">{isEnglish ? 'Company' : 'Компанія'}</p>
                  <p className="text-lg font-semibold">{t.contact.company}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">{isEnglish ? 'Location' : 'Місцезнаходження'}</p>
                  <p className="text-lg font-semibold">{t.contact.location}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 text-white hover:text-brand-accent transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  {isEnglish ? 'Back to Home' : 'Повернутися на головну'}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
