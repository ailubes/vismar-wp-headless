import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Users, Globe, Award, ArrowRight, CheckCircle, DollarSign, Zap, Rocket, Shield, Target, Lightbulb, Heart, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'en'
      ? 'About Vismar Aqua - Engineering Excellence in Aquaculture Since 2007'
      : 'Про Vismar Aqua - Інженерна досконалість в аквакультурі з 2007 року',
    description: locale === 'en'
      ? '15+ years of aquaculture engineering excellence. World-class expertise at 50% lower cost. War-proven reliability. Discover our story, team, and commitment to your success.'
      : '15+ років інженерної досконалості в аквакультурі. Світовий досвід за 50% нижчою ціною. Перевірена надійність. Дізнайтеся нашу історію та прихильність вашому успіху.',
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section
        background="transparent"
        spacing="2xl"
        className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white"
      >
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Engineering Excellence in Aquaculture Since 2007
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                World-class expertise. Ukrainian efficiency. Unmatched dedication.
              </p>
              <Link href={`/${locale}/contact`}>
                <Button
                  variant="accent"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Company Introduction */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Founded in 2007, Vismar Aqua has grown from a small engineering consultancy into a recognized leader in aquaculture facility design and software development. With over 15 years of experience, we&apos;ve delivered 50+ projects across 20+ countries, helping clients build sustainable, profitable aquaculture operations.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our mission is simple: <strong className="text-brand-primary">Deliver world-class aquaculture engineering at exceptional value</strong>. We combine deep technical expertise with modern technology and Ukrainian efficiency to provide services that rival the best European firms—at half the cost.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Values */}
            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Uncompromising quality in every project we deliver
                  </p>
                </div>

                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">
                    Leveraging AI and cutting-edge technology
                  </p>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Reliability</h3>
                  <p className="text-sm text-gray-600">
                    War-proven operational resilience
                  </p>
                </div>

                <div className="text-center p-6 bg-amber-50 rounded-xl">
                  <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Client Success</h3>
                  <p className="text-sm text-gray-600">
                    Your profitability is our success metric
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Our Advantages - 2x2 Grid */}
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Advantages
              </h2>
              <p className="text-xl text-gray-600">
                What sets us apart in the global aquaculture engineering market
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Advantage 1: 50% Lower Costs */}
            <ScrollReveal delay={0}>
              <div className="group p-8 bg-blue-50 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 mb-6 rounded-xl bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  50% Lower Costs
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  Premium Quality, Smart Pricing
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  World-class aquaculture engineering at half the price of Western European firms. Lower operational costs mean exceptional value—without compromising on quality, experience, or results.
                </p>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                    ↓ 50% vs. EU competitors
                  </span>
                </div>
                <Link href={`/${locale}/why-vismar-aqua#value`}>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Advantage 2: 9-9 Availability */}
            <ScrollReveal delay={100}>
              <div className="group p-8 bg-amber-50 rounded-2xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 mb-6 rounded-xl bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  9-9, Six Days a Week
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  Your Timezone, Your Schedule
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  While Western firms close at 5 PM and disappear on weekends, our team operates 9-9, six days a week. Same-day responses, flexible meetings, and genuine commitment to your timeline.
                </p>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full">
                    ⏱️ &lt;4 hours response time
                  </span>
                </div>
                <Link href={`/${locale}/why-vismar-aqua#response`}>
                  <div className="flex items-center text-amber-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Advantage 3: AI-Accelerated Engineering */}
            <ScrollReveal delay={200}>
              <div className="group p-8 bg-purple-50 rounded-2xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 mb-6 rounded-xl bg-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  AI-Accelerated Engineering
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  Next-Gen Tools, Faster Delivery
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Latest 3D CAD software, AI-assisted design, real-time cloud collaboration, and automated optimization. We leverage cutting-edge technology to deliver better results faster.
                </p>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                    🤖 AI-powered design
                  </span>
                </div>
                <Link href={`/${locale}/why-vismar-aqua#technology`}>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Advantage 4: War-Proven Reliability */}
            <ScrollReveal delay={300}>
              <div className="group p-8 bg-green-50 rounded-2xl border-2 border-gray-200 hover:border-green-300 hover:shadow-xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 mb-6 rounded-xl bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  War-Proven Reliability
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  Delivering Under Any Conditions
                </h4>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  We&apos;ve delivered projects during air raids, blackouts, and infrastructure attacks. Crisis-tested resilience ensures your project stays on track—no matter what.
                </p>
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    ✓ Zero cancellations since 2022
                  </span>
                </div>
                <Link href={`/${locale}/why-vismar-aqua#resilience`}>
                  <div className="flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Our Expertise - Stats */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600">
                Proven track record across the global aquaculture industry
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <Building2 className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <div className="text-5xl font-bold text-brand-primary mb-2">15+</div>
                <div className="text-gray-600">Years in Aquaculture Engineering</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="text-center">
                <Award className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <div className="text-5xl font-bold text-brand-primary mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <Globe className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <div className="text-5xl font-bold text-brand-primary mb-2">20+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <Users className="w-12 h-12 text-brand-secondary mx-auto mb-4" />
                <div className="text-5xl font-bold text-brand-primary mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Specializations */}
          <ScrollReveal delay={400}>
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Specializations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Recirculating Aquaculture Systems (RAS)</h4>
                    <p className="text-sm text-gray-600">
                      Complete design, optimization, and commissioning support for land-based RAS facilities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hybrid Flow-Through Systems (HFTS)</h4>
                    <p className="text-sm text-gray-600">
                      Sustainable flow-through designs with biofloc and natural productivity integration
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hatcheries & Nurseries</h4>
                    <p className="text-sm text-gray-600">
                      Specialized breeding and early-stage production facility design
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Processing Facilities</h4>
                    <p className="text-sm text-gray-600">
                      Harvest, processing, packaging, and cold storage facility engineering
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Solutions</h4>
                    <p className="text-sm text-gray-600">
                      AI-powered monitoring, fish counting, and farm management software
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-brand-success mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Equipment Supply</h4>
                    <p className="text-sm text-gray-600">
                      Procurement, specification, and integration of aquaculture equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600">
                Why clients choose Vismar Aqua over traditional engineering firms
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Engineering Excellence with Cost Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We don&apos;t compromise on quality to offer lower prices. Our Ukrainian operational base provides natural cost advantages while maintaining the same engineering standards as top European firms. ISO 9001 certified, internationally experienced team, cutting-edge technology—all at 50% less cost.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Zap className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Rapid Response and Communication
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your project doesn&apos;t wait for business hours. Our 9-9, six-day schedule and &lt;4 hour response time mean you get answers when you need them. Same-day meetings, weekend support, and full timezone accommodation ensure your project keeps moving forward.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Rocket className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Technology Stack
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We invest heavily in the latest engineering tools: 3D CAD and BIM, AI-assisted calculations, computational fluid dynamics, real-time cloud collaboration, and digital twin technology. Better tools mean better designs, delivered faster, with fewer errors.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Resilience and Reliability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Operating through war has made us exceptionally resilient. Redundant power systems, multiple internet connections, distributed team architecture, and comprehensive backup protocols ensure uninterrupted service. Zero project cancellations since 2022 speaks for itself.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
              <p className="text-xl text-gray-600">
                The promises we make to every client, every time
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            <ScrollReveal delay={0}>
              <div className="flex items-start gap-6 p-6 bg-blue-50 rounded-xl">
                <Target className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Engineering</h3>
                  <p className="text-gray-700">
                    Every design meets international standards. Every calculation is verified. Every deliverable is complete. We take professional pride in getting it right the first time.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex items-start gap-6 p-6 bg-green-50 rounded-xl">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Client Success</h3>
                  <p className="text-gray-700">
                    We measure our success by your profitability. Our job isn&apos;t just to deliver drawings—it&apos;s to help you build a facility that makes money, operates efficiently, and meets your business goals.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-xl">
                <Heart className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-gray-700">
                    Aquaculture done right can help feed the world sustainably. We design facilities that minimize environmental impact, optimize resource use, and contribute to sustainable food production.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex items-start gap-6 p-6 bg-amber-50 rounded-xl">
                <Lightbulb className="w-8 h-8 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    The aquaculture industry evolves constantly. We stay at the forefront through continuous learning, technology adoption, and willingness to try new approaches when they serve our clients better.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex items-start gap-6 p-6 bg-red-50 rounded-xl">
                <BookOpen className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Sharing</h3>
                  <p className="text-gray-700">
                    We believe in educating our clients and the broader industry. Through our blog, open-source tools, and transparent communication, we contribute to raising the bar for aquaculture engineering globally.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-brand-accent via-brand-primary to-brand-secondary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-10 text-white/90">
                Let&apos;s discuss how we can help you build a successful, sustainable aquaculture operation. Schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button variant="accent" size="lg" className="!bg-white !text-brand-primary hover:!bg-gray-100 text-lg px-8 py-4 w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/projects`}>
                  <Button variant="secondary" size="lg" className="!bg-transparent !border-white !text-white hover:!bg-white/10 text-lg px-8 py-4 w-full sm:w-auto">
                    View Our Projects
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
}
