'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Real, specific reasons tailored for local business owners
const reasons = [
  {
    title: "For Cafés & Restaurants",
    description: "We help local food businesses attract more customers, manage reviews, and stand out online.",
    details: [
      "QR menus and table bookings",
      "Google Maps & local SEO",
      "Social media content that gets shares"
    ]
  },
  {
    title: "For Gyms & Fitness Studios",
    description: "Turn curious locals into loyal members with digital campaigns and class booking tools.",
    details: [
      "Website with online scheduling",
      "Membership signup forms",
      "Email & SMS marketing"
    ]
  },
  {
    title: "For SaaS & Tech Startups",
    description: "Scale your user base with targeted campaigns and conversion-optimized websites.",
    details: [
      "Homepage and demo optimized for conversions",
      "Inbound lead nurturing",
      "Investor-friendly case studies"
    ]
  },
  {
    title: "Local SEO & Discoverability",
    description: "We ensure your business appears at the top when customers search for what you offer.",
    details: [
      "Google My Business setup",
      "Local directory listings",
      "Review management"
    ]
  },
  {
    title: "Branding That Connects",
    description: "A professional logo, color palette, and style guide—so your business looks memorable and trustworthy.",
    details: [
      "Custom logo and visual identity",
      "Brand guidelines for consistency",
      "Social media & print-ready assets"
    ]
  },
  {
    title: "Real Support, Real People",
    description: "We’re here for you, month after month—not just at launch.",
    details: [
      "Hosting, security, and updates",
      "Content changes within 24 hours",
      "No long-term contracts"
    ]
  }
]

export default function WhyPR() {
  // Animation presets
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Why Choose PR-Connect?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We help local businesses like yours launch, grow, and transform with websites, digital marketing, and QR solutions.
          </motion.p>
        </div>
      </section>

      {/* Reasons section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4 text-blue-600">{reason.title}</h2>
                  <p className="text-gray-700 mb-4">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
          >
            Ready to See What We Can Do?
          </motion.h2>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact" className="font-medium">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
