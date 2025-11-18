'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import Button from '../ui/Button';
import { Dropdown } from '@/components/ui/Dropdown';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const common = useTranslations('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const fontClass = locale === 'en' ? 'font-poppins' : 'font-montserrat';

  const navigationItems = [
    {
      name: common('home'),
      href: `/${locale}`,
      hasDropdown: false
    },
    {
      name: common('about'),
      href: `/${locale}/about`,
      hasDropdown: false
    },
    {
      name: common('services'),
      hasDropdown: true,
      groups: [
        {
          label: common('engineeringServices'),
          items: [
            { label: common('rasSystemsDesign'), href: `/${locale}/services/ras-systems` },
            { label: common('hftsTechnology'), href: `/${locale}/services/hfts` },
            { label: common('hatcheryEngineering'), href: `/${locale}/services/hatchery` },
            { label: common('waterTreatment'), href: `/${locale}/services/water-treatment` },
            { label: common('processingFacility'), href: `/${locale}/services/processing` },
            { label: common('feedMill'), href: `/${locale}/services/feed-mill` },
            { label: common('customEquipment'), href: `/${locale}/services/custom-design-equipment` },
            { label: common('recreationalWaterSystems'), href: `/${locale}/services/recreational-water-systems` },
          ]
        },
        {
          label: common('businessServices'),
          items: [
            { label: common('feasibilityStudies'), href: `/${locale}/services/feasibility-studies` },
          ]
        },
        {
          label: common('digitalServices'),
          items: [
            { label: 'Software Solutions', href: `/${locale}/software` },
            { label: 'AI Fish Counting', href: `/${locale}/software/ai-counting` },
            { label: 'IoT Monitoring', href: `/${locale}/software/iot-monitoring` },
            { label: 'Farm Management', href: `/${locale}/software/farm-management` },
            { label: 'Data Analytics', href: `/${locale}/software/analytics` },
            { label: 'Biofloc Control', href: `/${locale}/software/biofloc` },
            { label: 'Custom Development', href: `/${locale}/software/custom-apps` },
          ]
        }
      ]
    },
    {
      name: common('projects'),
      hasDropdown: true,
      items: [
        { label: common('allProjects'), href: `/${locale}/projects` },
      ]
    },
    {
      name: common('ourImpact'),
      hasDropdown: true,
      items: [
        { label: common('innovation'), href: `/${locale}/innovation` },
        { label: common('sustainability'), href: `/${locale}/sustainability` },
        { label: common('partnerships'), href: `/${locale}/partnerships` },
        { label: common('community'), href: `/${locale}/community` },
        { label: common('genderEquality'), href: `/${locale}/gender-equality` },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
          <Image
            src="/images/vismar-logo-horizontal-text.png"
            alt="Vismar Aqua"
            width={160}
            height={40}
            className="h-10 lg:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          {/* Nav items */}
          <div className="flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              item.hasDropdown ? (
                <Dropdown
                  key={item.name}
                  trigger={item.name}
                  items={item.items}
                  groups={item.groups}
                  locale={locale}
                  className="whitespace-nowrap"
                />
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`px-3 py-2 text-gray-700 hover:text-brand-primary transition-colors whitespace-nowrap ${fontClass}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA buttons - fixed width */}
          <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
            <Link href={`/${locale}/contact`}>
              <Button variant="accent" size="sm" className="text-white">
                {common('contact')}
              </Button>
            </Link>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <LanguageSwitcher locale={locale} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-primary-500 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="container-custom py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-2 text-gray-700 cursor-pointer hover:bg-gray-50 rounded-lg">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-6 pt-2 space-y-1">
                      {item.groups?.map((group) => (
                        <div key={group.label}>
                          <div className="text-xs font-semibold text-gray-500 uppercase px-3 py-1">
                            {group.label}
                          </div>
                          {group.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link href={`/${locale}/contact`}>
                <Button variant="accent" size="sm" className="w-full text-white">
                  {common('contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
