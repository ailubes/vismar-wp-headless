'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Youtube, Building2 } from 'lucide-react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');
  const common = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Company & About */}
          <div className="space-y-6">
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/images/vismar-logo-horizontal-text.png"
                alt="Vismar Aqua"
                width={180}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <p className="text-gray-200 font-medium leading-relaxed">
              Engineering Excellence in Aquaculture
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design and build cutting-edge aquaculture systems, combining decades of engineering expertise with innovative digital solutions.
            </p>

            {/* Estonia Office Badge */}
            <div className="pt-2">
              <div className="flex items-start space-x-2 text-emerald-400">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-xs leading-relaxed">
                  <div className="font-semibold text-white mb-1">European Office</div>
                  <div className="text-gray-400">
                    Vismar Aquaculture OÜ<br />
                    Ahtri tn 12<br />
                    Tallinn, Estonia 15551
                  </div>
                </div>
              </div>
            </div>

            {/* Ukraine Badge */}
            <div className="flex items-center space-x-2 text-brand-secondary pt-2">
              <span className="text-2xl">🇺🇦</span>
              <span className="text-xs font-medium text-gray-400">
                Engineering from Ukraine since 2007
              </span>
            </div>
          </div>

          {/* Column 2: Engineering Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Engineering
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/services/ras-systems`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  RAS Systems Design
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/hfts-technology`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  HFTS Technology
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/hatchery`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Hatchery Engineering
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/water-treatment`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Water Treatment
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/processing`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Processing Facilities
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/feed-mill`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Feed Mill Design
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/custom-design-equipment`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Custom Equipment
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services/recreational-water-systems`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Recreational Water Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business & Digital Services */}
          <div>
            {/* Business Services */}
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Business Services
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href={`/${locale}/services/feasibility-studies`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                >
                  Feasibility Studies
                </Link>
              </li>
            </ul>

            {/* Digital Solutions */}
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Digital Solutions
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={`/${locale}/software/ai-counting`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  AI Fish Counting
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/software/iot-monitoring`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  IoT Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/software/farm-management`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Farm Management
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/software/biofloc`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Biofloc Control
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/software/custom-apps`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Custom Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/case-studies`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/careers`}
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start group">
                <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-secondary" />
                <a
                  href="mailto:vismaraqua@gmail.com"
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm break-all"
                >
                  vismaraqua@gmail.com
                </a>
              </li>
              <li className="flex items-start group">
                <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-secondary" />
                <a
                  href="tel:+380675024730"
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  +380 67 502 47 30
                </a>
              </li>
              <li className="flex items-start group">
                <Globe className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-brand-secondary" />
                <a
                  href="https://vismar-aqua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-secondary transition-colors duration-200 text-sm"
                >
                  vismar-aqua.com
                </a>
              </li>
            </ul>

            <Link
              href={`/${locale}/contact`}
              className="inline-block mt-6 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-400">
              <p>
                © {currentYear} Vismar Aquaculture OÜ. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:text-brand-secondary transition-colors duration-200"
                >
                  Privacy
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href={`/${locale}/terms`}
                  className="hover:text-brand-secondary transition-colors duration-200"
                >
                  Terms
                </Link>
                <span className="text-gray-600">•</span>
                <span className="text-gray-500">REG 565762496683-03</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/vismaraqua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/vismaraqua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@vismaraqua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
