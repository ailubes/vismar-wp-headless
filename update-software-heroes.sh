#!/bin/bash

# Script to update hero sections in software pages with premium template

for file in app/[locale]/software/{ai-counting,iot-monitoring,farm-management,analytics,biofloc,custom-apps}/page.tsx; do
  echo "Updating $file..."

  # Replace old hero section with premium hero
  # This replaces from "Hero Section" comment to end of hero section
  sed -i '/\/\* Hero Section \*\//,/      <\/section>/c\
      {/* Premium Hero Section */}\
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center py-16 md:py-24 overflow-hidden">\
        {/* Dark gradient background */}\
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1B4B63] to-[#0d3a4d]" />\
\
        {/* Decorative gradient circles */}\
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl" />\
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#00A8B5]/15 to-transparent blur-3xl" />\
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#42c997]/10 to-transparent blur-2xl" />\
\
        {/* Grid pattern overlay */}\
        <div\
          className="absolute inset-0 opacity-[0.03]"\
          style={{\
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,\
            backgroundSize: '\''50px 50px'\''\
          }}\
        />\
\
        {/* Hero content */}\
        <div className="container-custom relative z-10">\
          <div className="max-w-4xl mx-auto text-center">\
            {/* Breadcrumb */}\
            <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-6">\
              <Link href={`/${locale}`} className="hover:text-white transition-colors">{isEnglish ? '\''Home'\'' : '\''Головна'\''}</Link>\
              <span>/</span>\
              <Link href={`/${locale}/software`} className="hover:text-white transition-colors">{isEnglish ? '\''Software'\'' : '\''Програми'\''}</Link>\
              <span>/</span>\
              <span className="text-white">{content.hero.title}</span>\
            </div>\
\
            {/* Main headline */}\
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">\
              {content.hero.title}\
            </h1>\
\
            {/* Tagline */}\
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">\
              {content.hero.subtitle}\
            </p>\
\
            {/* CTA buttons */}\
            <div className="flex flex-col sm:flex-row gap-4 justify-center">\
              <Link\
                href={`/${locale}/contact`}\
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25"\
              >\
                {content.hero.cta}\
                <ArrowRight className="w-5 h-5" />\
              </Link>\
              <Link\
                href={`/${locale}/software`}\
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-success hover:bg-brand-success/90 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 backdrop-blur-sm"\
              >\
                {isEnglish ? '\''View All Solutions'\'' : '\''Всі рішення'\''}\
              </Link>\
            </div>\
          </div>\
        </div>\
\
        {/* Wave divider */}\
        <div className="absolute left-0 right-0" style={{ bottom: '\''-1px'\'' }}>\
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block" preserveAspectRatio="none" style={{ display: '\''block'\'' }}>\
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>\
          </svg>\
        </div>\
      </section>\
\
      {/* Hero stats section */}\
      <section className="section bg-white pt-0">\
        <div className="container-custom">\
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-8 md:-mt-12">\
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">\
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">\
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />\
              </div>\
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">95%</div>\
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? '\''Accuracy'\'' : '\''Точність'\''}</div>\
            </div>\
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">\
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">\
                <Clock className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />\
              </div>\
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">50%</div>\
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? '\''Time Saved'\'' : '\''Економія часу'\''}</div>\
            </div>\
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">\
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">\
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />\
              </div>\
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">24/7</div>\
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? '\''Monitoring'\'' : '\''Моніторинг'\''}</div>\
            </div>\
            <div className="text-center p-6 rounded-xl bg-white border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300">\
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#42c997]/10 to-[#00A8B5]/10 mb-3 border border-[#42c997]/20">\
                <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#42c997]" />\
              </div>\
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">30%</div>\
              <div className="text-sm md:text-base text-neutral-600">{isEnglish ? '\''ROI Increase'\'' : '\''Зростання ROI'\''}</div>\
            </div>\
          </div>\
        </div>\
      </section>' "$file"

done

echo "All files updated!"
