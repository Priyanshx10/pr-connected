'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, Bot, LayoutDashboard, Globe, QrCode, Brain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import WhyPR from './WhyPR'

const services = [
  {
    id: 'ai-chatbots',
    label: 'Custom AI Chatbots & Assistants',
    icon: Bot,
    description: 'Lead generation, support, or e-commerce bots built with Python, LLMs, and OpenAI APIs.',
    features: [
      'Multilingual capability (optional)',
      'Custom workflows, logic, and tone',
      'Integrates with websites or WhatsApp',
      'Advanced: data retrieval, analytics, and memory'
    ],
    caseStudy: 'Clients across EU closed 3x more leads within 60 days'
  },
  {
    id: 'landing-pages',
    label: 'Conversion-Optimized Landing Pages',
    icon: LayoutDashboard,
    description: 'Optimized for product launches, real estate, coaching, and course sales.',
    features: [
      'High-converting sections (USP, social proof, CTA)',
      'Mobile-first design with fast loading',
      'Tracking: Meta Pixel, Google Analytics',
      'Integrated with forms, calendars, or payments'
    ],
    caseStudy: 'Course creator saw 3.5x sign-ups after launch'
  },
  {
    id: 'websites',
    label: 'Premium Business Websites',
    icon: Globe,
    description: 'Branded, fully responsive websites with animation, testimonials, and care packages.',
    features: [
      'Custom design—no templates',
      'Fast, SEO-friendly, and responsive',
      'Branded visuals, video banners, testimonials',
      'Maintenance add-on: £120–£200/month'
    ],
    caseStudy: 'Startup raised 6-figures after redesign'
  },
  {
    id: 'qr-portals',
    label: 'QR-Integrated Menus & Booking Portals',
    icon: QrCode,
    description: 'Interactive menus and portals for salons, cafes, and clinics with real-time updates.',
    features: [
      'QR menus and appointment booking',
      'WhatsApp/Email notifications',
      'Admin dashboard with edits and insights',
      'Integrated with Google Calendar or Sheets'
    ],
    caseStudy: 'Salon doubled bookings in 5 weeks'
  },
  {
    id: 'internal-tools',
    label: 'LLM-Powered Internal Tools',
    icon: Brain,
    description: 'Custom AI tools like lead analyzers, resume scorers, and LinkedIn assistants.',
    features: [
      'AI scoring and ranking for leads/resumes',
      'Bulk data processing using LLMs',
      'Custom dashboards and filters',
      'Connects with ATS, CRM, or email systems'
    ],
    caseStudy: 'Recruiters processed 10x resumes using custom LLM tool'
  }
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
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

      <WhyPR />
    </div>
  )
}