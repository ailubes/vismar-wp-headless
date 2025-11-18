import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, FileCheck, Scale, AlertTriangle, Briefcase, Shield, RefreshCw } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'Terms of Service - Vismar Aqua'
      : 'Умови надання послуг - Vismar Aqua',
    description: locale === 'en'
      ? 'Terms and conditions for using Vismar Aqua services. Read our service agreement, responsibilities, and legal terms.'
      : 'Умови використання послуг Vismar Aqua. Ознайомтеся з нашою угодою про надання послуг, відповідальністю та юридичними умовами.',
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const isEnglish = locale === 'en';

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: November 17, 2025',
      breadcrumb: 'Terms of Service',
      intro: 'These Terms of Service govern your use of Vismar Aqua\'s website and services. By accessing our website or engaging our services, you agree to be bound by these terms.',
      sections: [
        {
          icon: FileCheck,
          title: 'Acceptance of Terms',
          content: [
            'By accessing and using Vismar Aqua\'s website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.',
            '',
            'If you do not agree with any part of these terms, you may not access our website or use our services.',
            '',
            'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.',
          ]
        },
        {
          icon: Briefcase,
          title: 'Services Description',
          content: [
            'Vismar Aqua provides aquaculture engineering services, including but not limited to:',
            '• Design and engineering of recirculating aquaculture systems (RAS)',
            '• Hybrid flow-through systems (HFTS) design',
            '• Hatchery and nursery facility planning',
            '• Processing facility engineering',
            '• Water treatment system design',
            '• Equipment specification and procurement support',
            '• Digital solutions and software development',
            '• Consulting and technical advisory services',
            '',
            'Specific service terms, deliverables, timelines, and pricing are outlined in individual project proposals and contracts.',
          ]
        },
        {
          icon: Scale,
          title: 'User Responsibilities',
          content: [
            'When using our website and services, you agree to:',
            '• Provide accurate and complete information',
            '• Maintain the confidentiality of any account credentials',
            '• Use our services only for lawful purposes',
            '• Not interfere with or disrupt our services or servers',
            '• Not attempt to gain unauthorized access to any part of our services',
            '• Respect intellectual property rights',
            '• Comply with all applicable laws and regulations',
            '',
            'You are responsible for maintaining the confidentiality of information we provide to you and for all activities that occur under your account.',
          ]
        },
        {
          icon: Shield,
          title: 'Intellectual Property',
          content: [
            'All content on our website, including text, graphics, logos, images, software, and documentation, is the property of Vismar Aqua or its content suppliers and is protected by international copyright laws.',
            '',
            'Project deliverables and intellectual property rights are defined in individual project contracts. Unless otherwise specified in writing:',
            '• Design documents and drawings created for your project become your property upon full payment',
            '• Vismar Aqua retains the right to use project methodologies, techniques, and general approaches in future projects',
            '• Proprietary software and tools remain the property of Vismar Aqua',
            '• We may showcase completed projects in our portfolio with your permission',
            '',
            'You may not reproduce, distribute, modify, or create derivative works from our website content without express written permission.',
          ]
        },
        {
          icon: AlertTriangle,
          title: 'Limitation of Liability',
          content: [
            'TO THE MAXIMUM EXTENT PERMITTED BY LAW:',
            '',
            'Vismar Aqua provides services "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free from viruses or other harmful components.',
            '',
            'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, or other intangible losses, resulting from:',
            '• Your use or inability to use our services',
            '• Unauthorized access to or alteration of your data',
            '• Third-party conduct or content',
            '• Any other matter relating to our services',
            '',
            'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.',
            '',
            'Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.',
          ]
        },
        {
          icon: Scale,
          title: 'Dispute Resolution',
          content: [
            'We strive to resolve disputes amicably through direct communication. If you have a concern about our services:',
            '',
            '1. Contact us immediately at info@vismaraqua.com.ua',
            '2. We will investigate and respond within 10 business days',
            '3. We will work collaboratively to find a mutually acceptable solution',
            '',
            'If we cannot resolve a dispute through direct communication, the following shall apply:',
            '• Disputes shall first be attempted to be resolved through mediation',
            '• Any unresolved disputes shall be subject to the jurisdiction of Ukrainian courts',
            '• These terms shall be governed by the laws of Ukraine',
            '',
            'Individual project contracts may contain specific dispute resolution procedures that supersede these general terms.',
          ]
        },
        {
          icon: RefreshCw,
          title: 'Modifications to Terms',
          content: [
            'We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by:',
            '• Posting the updated terms on our website',
            '• Updating the "Last updated" date',
            '• Sending email notifications to registered users for significant changes',
            '',
            'Your continued use of our services after changes are posted constitutes acceptance of the modified terms. If you do not agree with the modified terms, you should discontinue use of our services.',
            '',
            'For active projects, existing contracts will generally remain governed by the terms in effect when the contract was signed, unless both parties agree to updated terms.',
          ]
        },
      ],
      contact: {
        title: 'Contact',
        description: 'If you have questions about these Terms of Service, please contact us:',
        email: 'info@vismaraqua.com.ua',
        company: 'Vismar Aqua',
        location: 'Kyiv, Ukraine',
      }
    },
    uk: {
      title: 'Умови надання послуг',
      lastUpdated: 'Останнє оновлення: 17 листопада 2025',
      breadcrumb: 'Умови надання послуг',
      intro: 'Ці Умови надання послуг регулюють використання веб-сайту та послуг Vismar Aqua. Отримуючи доступ до нашого веб-сайту або користуючись нашими послугами, ви погоджуєтеся дотримуватися цих умов.',
      sections: [
        {
          icon: FileCheck,
          title: 'Прийняття умов',
          content: [
            'Отримуючи доступ та використовуючи веб-сайт і послуги Vismar Aqua, ви приймаєте та погоджуєтеся дотримуватися цих Умов надання послуг та нашої Політики конфіденційності.',
            '',
            'Якщо ви не погоджуєтеся з будь-якою частиною цих умов, ви не можете отримувати доступ до нашого веб-сайту або використовувати наші послуги.',
            '',
            'Ми залишаємо за собою право змінювати ці умови в будь-який час. Зміни набувають чинності негайно після публікації на нашому веб-сайті. Ваше продовження використання наших послуг після публікації змін означає прийняття змінених умов.',
          ]
        },
        {
          icon: Briefcase,
          title: 'Опис послуг',
          content: [
            'Vismar Aqua надає інженерні послуги в галузі аквакультури, включаючи, але не обмежуючись:',
            '• Проектування та інжиніринг систем рециркуляційної аквакультури (RAS)',
            '• Проектування гібридних проточних систем (HFTS)',
            '• Планування інкубаторіїв та розплідників',
            '• Інжиніринг переробних підприємств',
            '• Проектування систем водопідготовки',
            '• Специфікація обладнання та підтримка закупівель',
            '• Цифрові рішення та розробка програмного забезпечення',
            '• Консалтингові та технічні консультаційні послуги',
            '',
            'Конкретні умови послуг, результати, терміни та ціни викладені в індивідуальних пропозиціях проектів та контрактах.',
          ]
        },
        {
          icon: Scale,
          title: 'Обов\'язки користувача',
          content: [
            'Використовуючи наш веб-сайт та послуги, ви погоджуєтеся:',
            '• Надавати точну та повну інформацію',
            '• Зберігати конфіденційність будь-яких облікових даних',
            '• Використовувати наші послуги лише для законних цілей',
            '• Не втручатися або не порушувати роботу наших послуг чи серверів',
            '• Не намагатися отримати несанкціонований доступ до будь-якої частини наших послуг',
            '• Поважати права інтелектуальної власності',
            '• Дотримуватися всіх застосовних законів та правил',
            '',
            'Ви несете відповідальність за збереження конфіденційності інформації, яку ми вам надаємо, та за всі дії, що відбуваються під вашим обліковим записом.',
          ]
        },
        {
          icon: Shield,
          title: 'Інтелектуальна власність',
          content: [
            'Весь вміст нашого веб-сайту, включаючи тексти, графіку, логотипи, зображення, програмне забезпечення та документацію, є власністю Vismar Aqua або її постачальників контенту та захищений міжнародними законами про авторське право.',
            '',
            'Результати проекту та права інтелектуальної власності визначаються в індивідуальних контрактах на проект. Якщо інше не зазначено в письмовій формі:',
            '• Проектна документація та креслення, створені для вашого проекту, стають вашою власністю після повної оплати',
            '• Vismar Aqua зберігає право використовувати методології проекту, техніки та загальні підходи в майбутніх проектах',
            '• Пропрієтарне програмне забезпечення та інструменти залишаються власністю Vismar Aqua',
            '• Ми можемо демонструвати завершені проекти в нашому портфоліо з вашого дозволу',
            '',
            'Ви не можете відтворювати, розповсюджувати, змінювати або створювати похідні роботи з вмісту нашого веб-сайту без чіткого письмового дозволу.',
          ]
        },
        {
          icon: AlertTriangle,
          title: 'Обмеження відповідальності',
          content: [
            'В МАКСИМАЛЬНО ДОПУСТИМИХ ЗАКОНОМ МЕЖАХ:',
            '',
            'Vismar Aqua надає послуги "як є" без будь-яких гарантій, явних чи непрямих. Ми не гарантуємо, що наші послуги будуть безперервними, безпомилковими або вільними від вірусів чи інших шкідливих компонентів.',
            '',
            'Ми не несемо відповідальності за будь-які непрямі, випадкові, спеціальні, наслідкові або штрафні збитки, включаючи втрату прибутку, даних, використання або інших нематеріальних втрат, що виникли внаслідок:',
            '• Вашого використання або неможливості використання наших послуг',
            '• Несанкціонованого доступу до ваших даних або їх зміни',
            '• Поведінки або вмісту третіх сторін',
            '• Будь-якої іншої справи, пов\'язаної з нашими послугами',
            '',
            'Наша загальна відповідальність за будь-які претензії, що виникають з наших послуг, не повинна перевищувати суму, яку ви сплатили за конкретну послугу, яка призвела до претензії.',
            '',
            'Ніщо в цих умовах не виключає та не обмежує нашу відповідальність за смерть або тілесні ушкодження, спричинені недбалістю, шахрайством або будь-якою іншою відповідальністю, яка не може бути виключена за законом.',
          ]
        },
        {
          icon: Scale,
          title: 'Вирішення спорів',
          content: [
            'Ми прагнемо вирішувати спори полюбовно шляхом прямого спілкування. Якщо у вас є занепокоєння щодо наших послуг:',
            '',
            '1. Негайно зв\'яжіться з нами за адресою info@vismaraqua.com.ua',
            '2. Ми розглянемо та відповімо протягом 10 робочих днів',
            '3. Ми будемо працювати спільно, щоб знайти взаємоприйнятне рішення',
            '',
            'Якщо ми не можемо вирішити спір шляхом прямого спілкування, застосовується наступне:',
            '• Спори спочатку намагаються вирішити через медіацію',
            '• Будь-які невирішені спори підлягають юрисдикції українських судів',
            '• Ці умови регулюються законами України',
            '',
            'Індивідуальні контракти на проекти можуть містити конкретні процедури вирішення спорів, які замінюють ці загальні умови.',
          ]
        },
        {
          icon: RefreshCw,
          title: 'Зміни до умов',
          content: [
            'Ми залишаємо за собою право змінювати ці Умови надання послуг в будь-який час. Ми повідомимо користувачів про будь-які суттєві зміни через:',
            '• Публікацію оновлених умов на нашому веб-сайті',
            '• Оновлення дати "Останнє оновлення"',
            '• Надсилання електронних повідомлень зареєстрованим користувачам для значних змін',
            '',
            'Ваше продовження використання наших послуг після публікації змін означає прийняття змінених умов. Якщо ви не погоджуєтеся зі зміненими умовами, ви повинні припинити використання наших послуг.',
            '',
            'Для активних проектів існуючі контракти, як правило, залишаються регульованими умовами, що діяли на момент підписання контракту, якщо обидві сторони не погодяться на оновлені умови.',
          ]
        },
      ],
      contact: {
        title: 'Контакти',
        description: 'Якщо у вас є питання щодо цих Умов надання послуг, будь ласка, зв\'яжіться з нами:',
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

      {/* Terms Sections */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {t.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0">
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
      <Section background="transparent" spacing="xl" className="bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
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
