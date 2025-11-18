import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, Zap, Rocket, Shield, ArrowRight, CheckCircle, Clock, Globe2, Wifi, Laptop, Brain, Cloud, Database, Cpu, Gauge, Award } from 'lucide-react';
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
      ? 'Why Choose Vismar Aqua - The Ukrainian Advantage in Aquaculture Engineering'
      : 'Чому Vismar Aqua - Українська перевага в аквакультурній інженерії',
    description: locale === 'en'
      ? 'World-class expertise at 50% lower cost. 9-9 availability, AI-accelerated engineering, and war-proven reliability. Discover the Ukrainian advantage.'
      : 'Світовий досвід за 50% нижчою ціною. Доступність 9-9, AI-прискорена інженерія та перевірена надійність. Відкрийте для себе українську перевагу.',
  };
}

export default async function WhyVismarAquaPage({ params }: Props) {
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
                The Ukrainian Advantage in Aquaculture Engineering
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                World-class expertise. Ukrainian efficiency. War-proven reliability.
              </p>
              <Button
                as="a"
                href="#value"
                variant="accent"
                size="lg"
                className="text-lg px-8 py-4"
              >
                Discover Our Advantages
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose a Ukrainian Firm in 2025?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                While established aquaculture engineering firms charge premium rates and operate on leisurely European schedules,
                Vismar Aqua offers world-class expertise at unprecedented value. We&apos;ve built our practice in one of the most
                challenging business environments on Earth—and that has made us sharper, faster, and more resilient than our competitors.
              </p>
              <p className="text-xl font-semibold text-brand-primary mt-6">
                We deliver Western expertise at Eastern European efficiency, backed by crisis-tested operational resilience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Advantage #1: Exceptional Value */}
      <Section id="value" background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-12">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Exceptional Value: World-Class Engineering at Smart Prices
              </h2>
              <p className="text-xl text-gray-600">
                World-class aquaculture engineering at roughly half the cost of premium Western European firms
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* The Cost Advantage */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Cost Advantage</h3>
                <p className="text-lg text-gray-700 mb-6">
                  When you work with Vismar Aqua, you&apos;re accessing the same level of expertise as premium Western European
                  engineering firms—but at roughly <strong>half the cost</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Why? Simple economics:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Lower overhead costs</strong> - No expensive London or Amsterdam offices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Competitive salaries</strong> - Attracting top talent without Silicon Valley price tags</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Direct operations</strong> - No layers of expensive intermediaries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-success mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Efficient structure</strong> - Lean team, minimal bureaucracy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">But here&apos;s what we don&apos;t cut:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Quality</strong> - Same international standards, ISO 9001 certified</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Experience</strong> - 15+ years, same senior engineers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Technology</strong> - Latest software and tools</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Support</strong> - Comprehensive service, not just cheap drawings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Results</strong> - Proven track record across 50+ projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Cost Comparison */}
            <ScrollReveal delay={300}>
              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">For a $5M Aquaculture Project:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Traditional European Firm</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Engineering fees: $500,000 - $750,000 (10-15%)</li>
                      <li>• Timeline: 6-9 months</li>
                      <li>• Responsiveness: Business hours only</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded-xl p-6 border-2 border-blue-400">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Vismar Aqua</h4>
                    <ul className="space-y-2 text-blue-900">
                      <li>• Engineering fees: $250,000 - $375,000 (5-7.5%)</li>
                      <li>• Timeline: 4-6 months</li>
                      <li>• Responsiveness: Extended hours, 6 days/week</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-brand-primary">
                    Your Savings: $250,000+
                  </p>
                  <p className="text-gray-700 mt-2">
                    That&apos;s budget you can reinvest in better equipment, larger facility footprint, or faster project timeline.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Advantage #2: Rapid Response */}
      <Section id="response" background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-12">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Rapid Response: Your Schedule, Not Ours
              </h2>
              <p className="text-xl text-gray-600">
                9 AM - 9 PM, six days a week. Same-day meetings and &lt;4 hour email response.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Comparison */}
            <ScrollReveal delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Typical European Engineering Firm</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span>Office hours: 9 AM - 5 PM (6 PM if you&apos;re lucky)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span>Email response: 24-48 hours (longer on Fridays)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span>Weekend calls: &quot;We&apos;ll discuss Monday&quot;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span>August: Entire team on vacation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <span>Next available meeting: &quot;How about two weeks from Thursday?&quot;</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">How Vismar Aqua Works</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span><strong>9 AM - 9 PM</strong>, Monday - Saturday</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span><strong>&lt;4 hour</strong> average email response</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span><strong>Same-day</strong> meeting availability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span><strong>Weekend support</strong> when you need it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <span><strong>All timezones</strong> accommodated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Real Client Scenarios */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Real Client Scenarios</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Scenario 1: Last-Minute Investor Presentation</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Friday, 3 PM:</strong> &quot;We have potential investors Monday. Can you update our facility renderings?&quot;
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Friday, 9 PM:</strong> Updated renderings delivered.
                    </p>
                    <p className="text-green-700 font-semibold">
                      Result: Client secured $3M investment.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Scenario 2: Regulatory Submission Deadline</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Tuesday:</strong> &quot;Environmental review due Thursday. Need water discharge calculations.&quot;
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Wednesday AM:</strong> Calculations complete with supporting documentation.
                    </p>
                    <p className="text-blue-700 font-semibold">
                      Result: Timely regulatory submission, no delays.
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-6 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">Scenario 3: Construction Question</h4>
                    <p className="text-gray-700 mb-2">
                      <strong>Saturday morning:</strong> &quot;Installation team confused about biofilter connection.&quot;
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Saturday, 11 AM:</strong> Video call with construction crew, issue resolved.
                    </p>
                    <p className="text-amber-700 font-semibold">
                      Result: No work stoppage, project stays on schedule.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Advantage #3: Advanced Technology */}
      <Section id="technology" background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-12">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Advanced Technology: Engineering with Tomorrow&apos;s Tools
              </h2>
              <p className="text-xl text-gray-600">
                Latest 3D CAD, AI-assisted design, and real-time cloud collaboration for better results faster
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            {/* Technology Stack Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Laptop className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3D CAD & BIM</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Autodesk Revit & SolidWorks</li>
                    <li>• Full 3D spatial design</li>
                    <li>• Automatic clash detection</li>
                    <li>• Realistic visualizations</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Brain className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Assisted Engineering</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Hydraulic optimization</li>
                    <li>• Automated calculations</li>
                    <li>• Energy modeling</li>
                    <li>• 50+ iterations in minutes</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Cloud className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Collaboration</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Real-time project access</li>
                    <li>• Comment on 3D models</li>
                    <li>• Full version history</li>
                    <li>• No emailed PDFs</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Gauge className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">CFD Simulation</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• ANSYS Fluent modeling</li>
                    <li>• Tank circulation optimization</li>
                    <li>• Biofilter hydraulics</li>
                    <li>• Energy efficiency analysis</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Database className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Twin</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Virtual facility replica</li>
                    <li>• Real-time data sync</li>
                    <li>• Performance prediction</li>
                    <li>• What-if testing</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Cpu className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Parametric Design</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Automatic model updates</li>
                    <li>• Change propagation</li>
                    <li>• Design iterations in hours</li>
                    <li>• Reduced errors</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Comparison Table */}
            <ScrollReveal delay={500}>
              <div className="bg-white rounded-2xl p-8 shadow-lg overflow-x-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Better Tools = Better Results</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 text-gray-900">Outcome</th>
                      <th className="text-left py-3 px-4 text-gray-900">Traditional Methods</th>
                      <th className="text-left py-3 px-4 text-purple-700">With Advanced Tech</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Design iterations</td>
                      <td className="py-3 px-4">3-5</td>
                      <td className="py-3 px-4 font-semibold text-purple-700">15-20</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Calculation time</td>
                      <td className="py-3 px-4">Hours-days</td>
                      <td className="py-3 px-4 font-semibold text-purple-700">Minutes-hours</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Error rate</td>
                      <td className="py-3 px-4">2-5%</td>
                      <td className="py-3 px-4 font-semibold text-purple-700">&lt;0.5%</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Revision turnaround</td>
                      <td className="py-3 px-4">1-2 weeks</td>
                      <td className="py-3 px-4 font-semibold text-purple-700">1-3 days</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">Client visualization</td>
                      <td className="py-3 px-4">2D drawings</td>
                      <td className="py-3 px-4 font-semibold text-purple-700">3D models + VR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Advantage #4: Battle-Tested Resilience */}
      <Section id="resilience" background="white" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-center mb-12">
              <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Battle-Tested Resilience: Engineering Under Fire
              </h2>
              <p className="text-xl text-gray-600">
                Zero project cancellations since 2022. 99.8% meeting commitment rate. War-proven reliability.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* What We've Delivered Through */}
            <ScrollReveal delay={200}>
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We&apos;ve Delivered Through</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Missile Strikes & Air Raids</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Conference calls interrupted by sirens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Design sessions in bomb shelters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Zero missed deadlines</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Power Grid Attacks</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Nationwide blackouts (Oct 2022 - Mar 2023)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Rolling electricity cuts (4-12 hours daily)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>&gt;95% project delivery adherence</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Communication Disruptions</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Internet outages from strikes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Starlink terminals as backup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>99.8% meeting commitment rate</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Staff Displacement</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Team members relocated multiple times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Distributed team collaboration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Zero loss of technical capability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Resilience Systems */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Resilience Systems</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <Zap className="w-8 h-8 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Redundant Power</h4>
                        <p className="text-gray-700 text-sm">
                          Backup generators, UPS systems, power banks, and alternative work locations with different grid zones.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <Wifi className="w-8 h-8 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Multiple Internet Connections</h4>
                        <p className="text-gray-700 text-sm">
                          Fiber optic, 4G/5G hotspots, Starlink satellite, and alternative ISP locations with automatic switching.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <Globe2 className="w-8 h-8 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Distributed Team</h4>
                        <p className="text-gray-700 text-sm">
                          Core team in Kyiv, satellite in Lviv, remote in EU. No single point of failure with seamless handoff protocols.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <Database className="w-8 h-8 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
                        <p className="text-gray-700 text-sm">
                          Real-time cloud backup, encrypted local backups, offline archives, and full version control for all files.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Statistics */}
            <ScrollReveal delay={400}>
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Operational Statistics (Feb 2022 - Present)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">23</div>
                    <div className="text-sm text-gray-300">Projects Started</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                    <div className="text-sm text-gray-300">Projects Cancelled</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
                    <div className="text-sm text-gray-300">Meetings Held</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-sm text-gray-300">Completion Rate</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Comparison Table Section */}
      <Section background="light" spacing="2xl">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vismar Aqua vs. Traditional Aquaculture Engineering Firms
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-900 font-bold">Factor</th>
                    <th className="text-left py-4 px-6 text-gray-900 font-bold">Traditional EU Firm</th>
                    <th className="text-left py-4 px-6 text-brand-primary font-bold">Vismar Aqua</th>
                    <th className="text-left py-4 px-6 text-green-700 font-bold">Your Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Engineering Fees</td>
                    <td className="py-4 px-6 text-gray-700">10-15% of project</td>
                    <td className="py-4 px-6 text-gray-700">5-7.5% of project</td>
                    <td className="py-4 px-6 text-green-700">Save $250K+ on $5M project</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Response Time</td>
                    <td className="py-4 px-6 text-gray-700">24-48 hours</td>
                    <td className="py-4 px-6 text-gray-700">&lt;4 hours</td>
                    <td className="py-4 px-6 text-green-700">Faster decisions</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Meeting Availability</td>
                    <td className="py-4 px-6 text-gray-700">2+ weeks wait</td>
                    <td className="py-4 px-6 text-gray-700">Same-day possible</td>
                    <td className="py-4 px-6 text-green-700">No schedule delays</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Working Hours</td>
                    <td className="py-4 px-6 text-gray-700">9-5 Mon-Fri</td>
                    <td className="py-4 px-6 text-gray-700">9-9 Mon-Sat</td>
                    <td className="py-4 px-6 text-green-700">Extended availability</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">Technology</td>
                    <td className="py-4 px-6 text-gray-700">Mixed (some legacy)</td>
                    <td className="py-4 px-6 text-gray-700">Latest AI & 3D</td>
                    <td className="py-4 px-6 text-green-700">Better designs</td>
                  </tr>
                  <tr className="border-t border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">Crisis Resilience</td>
                    <td className="py-4 px-6 text-gray-700">Standard continuity</td>
                    <td className="py-4 px-6 text-gray-700">War-proven systems</td>
                    <td className="py-4 px-6 text-green-700">Unshakeable reliability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="transparent" spacing="2xl" className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Experience the Vismar Aqua Difference
              </h2>
              <p className="text-xl mb-10 text-white/90">
                World-class engineering at exceptional value. War-proven reliability. Your project success guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <Button variant="accent" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={`/${locale}/contact`}>
                  <Button variant="secondary" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                    Get a Quote
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
