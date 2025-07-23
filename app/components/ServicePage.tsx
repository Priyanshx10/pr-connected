'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, QrCode, BarChart2, Megaphone, Smartphone, Zap, Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// --- Real, business-focused value — no stock jargon, no fluff.
// Replace placeholders with your actual client results.
const services = [
  {
    id: 'qr-code',
    label: 'QR Code Integration',
    icon: QrCode,
    description: 'Seamlessly integrate QR codes into your marketing for instant engagement and real-time updates.',
    features: [
      'Custom QR design—matches your brand, not generic',
      'Dynamic QR codes for instant content updates',
      'Track scans, user behavior, and campaign impact',
      'Works on menus, posters, packaging, and more'
    ],
    caseStudy: 'Retail client boosted engagement by 250% in 3 months'
  },
  {
    id: 'analytics',
    label: 'Analytics & Reporting',
    icon: BarChart2,
    description: 'Clear, actionable insights into every campaign—see what works, refine what doesn’t.',
    features: [
      'Live dashboard: bookings, leads, sales, traffic',
      'Monthly, weekly, or real-time reports',
      'Export to PDF, Excel, or Google Sheets',
      'Secure, GDPR-compliant data'
    ],
    caseStudy: 'E-commerce brand increased ROI by 180% in 6 months'
  },
  {
    id: 'digital-pr',
    label: 'Digital PR Strategies',
    icon: Megaphone,
    description: 'Build your reputation, attract media, and amplify your message across the web.',
    features: [
      'Local and national press outreach',
      'Crisis management (before you need it)',
      'Google News, Apple News, and social syndication',
      'Clear metrics: reach, engagement, sentiment'
    ],
    caseStudy: 'Tech startup grew positive mentions by 500% in 4 months'
  },
  {
    id: 'mobile',
    label: 'Mobile Campaigns',
    icon: Smartphone,
    description: 'Reach customers where they are—on phones, tablets, and apps.',
    features: [
      'One-click reservations, orders, or bookings',
      'SMS/WhatsApp loyalty and promotions',
      'App store optimization (ASO)',
      'Geo-targeted offers and push notifications'
    ],
    caseStudy: 'Travel app tripled mobile conversions in 8 weeks'
  },
  {
    id: 'brand',
    label: 'Brand Amplification',
    icon: Zap,
    description: 'Make your café, gym, or startup the go-to destination in your city.',
    features: [
      'Logo, colors, fonts—unified across all channels',
      'Customer stories, reviews, and testimonials',
      'Instagram, TikTok, YouTube content plans',
      'Partnerships with local influencers and businesses'
    ],
    caseStudy: 'Local café chain expanded reach by 400% in a year'
  },
  {
    id: 'outreach',
    label: 'Targeted Outreach',
    icon: Target,
    description: 'Connect with your ideal audience through precision-targeted outreach campaigns.',
    features: [
      'Local SEO, Google Maps, and directory listings',
      'Email and SMS nurturing campaigns',
      'Retargeting ads (Facebook, Instagram, Google)',
      'A/B testing for headlines, images, offers'
    ],
    caseStudy: 'B2B SaaS doubled qualified leads in 12 weeks'
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mobile/Tablet: Horizontal scrollable nav */}
        <nav className="flex md:hidden gap-3 mb-8 pb-2 -mx-4 px-4 overflow-x-auto scrolling-touch">
          {services.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveService(idx)}
              className={`min-w-fit shrink-0 rounded-lg px-4 py-3 border-2 flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300
                ${
                  activeService === idx
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                    : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-100'
                }`}
              aria-current={activeService === idx}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row gap-6 xl:gap-8 w-full">
          {/* Desktop: Vertical, sticky nav */}
          <nav className="hidden md:flex flex-col gap-3 w-full md:w-60 lg:w-72 xl:w-80 sticky top-28 self-start min-h-0">
            {services.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveService(idx)}
                className={`rounded-lg px-4 py-3 border-2 flex items-center gap-3 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-blue-300
                  ${
                    activeService === idx
                      ? 'bg-blue-700 text-white border-blue-700 shadow-md'
                      : 'bg-white text-blue-900 border-blue-200 hover:bg-blue-100'
                  }`}
                aria-current={activeService === idx}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Main content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={services[activeService].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="rounded-full p-3 bg-blue-100 flex-shrink-0">
                      {(() => {
                        const Icon = services[activeService].icon
                        return <Icon className="w-8 h-8 text-blue-600" />
                      })()}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-800 break-words">
                      {services[activeService].label}
                    </h1>
                  </div>
                  <p className="text-lg text-slate-700 mb-6">
                    {services[activeService].description}
                  </p>
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3 text-blue-700">Key Features</h2>
                    <ul className="space-y-3">
                      {services[activeService].features.map((feature, i) => (
                        <li key={i} className="flex">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Card className="bg-blue-50 border border-blue-100 rounded-xl mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-blue-800">Results</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-blue-900">{services[activeService].caseStudy}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8 w-full flex justify-end">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-lg w-full sm:w-auto"
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
