'use client'

import { ArrowRight, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const reasons = [
  {
    title: 'Cafés & Restaurants',
    description:
      'Drive footfall, boost visibility, and retain customers with modern digital tools for the food & beverage industry.',
    details: [
      'Dynamic QR code menus & scan-to-order UX',
      'Optimized Google Business Profiles with SEO',
      'Instagram-ready content & local offer boosts'
    ]
  },
  {
    title: 'Gyms & Fitness Studios',
    description:
      'Fill classes, increase engagement, and optimize scheduling through responsive and mobile-first digital solutions.',
    details: [
      'Mobile-optimized booking landing pages',
      'Auto-reminders & WhatsApp integrations',
      'Local SEO dominance for search visibility'
    ]
  },
  {
    title: 'SaaS & Tech Startups',
    description:
      'Scale your MVP traction with high-converting websites, branded funnels, and growth-ready infrastructure.',
    details: [
      'Investor-focused UI/UX & landing systems',
      'Onboarding + demo optimization strategies',
      'Technical SEO & content frameworks'
    ]
  },
  {
    title: 'Hyper-Local Discoverability',
    description:
      'Turn nearby users into loyal customers using smart geolocation, content, and map optimization.',
    details: [
      'Google Maps Pack & geo-based SEO',
      'Automated review generation campaigns',
      'Niche directory & citation link building'
    ]
  },
  {
    title: 'Conversion-Focused Branding',
    description:
      'Launch a premium brand identity that drives trust, clicks, and customer acquisition.',
    details: [
      'Logo kits, typography & color systems',
      'Brand books aligned with buyer psychology',
      'Print-ready + digital launch assets'
    ]
  },
  {
    title: 'Continuous Growth Support',
    description:
      'Beyond launch—partner with us to scale your site, optimize funnels, and test growth strategies monthly.',
    details: [
      'Dedicated growth strategist access',
      'Real-time updates via dashboard',
      'Transparent monthly reporting'
    ]
  }
]

const sectionImages = [
  'https://images.unsplash.com/photo-1633944241961-e511ab23455f?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1624291732728-651136d8a3d4?w=600&auto=format&fit=crop&q=60',
  'https://plus.unsplash.com/premium_photo-1680125276650-c0e93a4847fd?w=600&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1572546590745-87c30605415e?w=600&auto=format&fit=crop&q=60'
]

const WHY_CHOOSE = [
  {
    title: 'Blazing Speed & Conversion Performance',
    items: [
      { text: '99+ Lighthouse mobile & desktop scores' },
      { text: 'Vercel-hosted Next.js + Tailwind stack' },
      { text: 'Built-in tracking with conversion goals' }
    ]
  },
  {
    title: 'Mobile-First & SEO-Boosted',
    items: [
      { text: 'Fully responsive UI on all screen sizes' },
      { text: 'Structured data + meta schema integrations' },
      { text: 'Copywriting built around high-intent keywords' }
    ]
  },
  {
    title: 'Elite White-Glove Service',
    items: [
      { text: 'Fast, done-for-you implementation' },
      { text: 'Weekly calls & Slack workspace access' },
      { text: 'Premium uptime, maintenance & debugging' }
    ]
  }
]

export default function WhyPR() {
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
            Why Europe’s Top Startups & Brands Choose PR-Connect 🚀
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We specialize in premium website development, chatbot integration, and QR-powered digital flows. Trusted by startups, cafés, gyms & more across Europe.
          </motion.p>
        </div>
      </section>

      {/* Business Niches */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-6">
                  <Image
                    src={sectionImages[index] || `https://source.unsplash.com/?${reason.title}`}
                    alt={`${reason.title} Hero`}
                    width={500}
                    height={300}
                    className="rounded-lg mb-4 object-cover w-full h-40"
                  />
                  <h2 className="text-xl font-bold mb-4 text-blue-600">{reason.title}</h2>
                  <p className="text-gray-700 mb-4 text-sm">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-500 mt-1 mr-2" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Speed Focus */}
      <section className="py-16 sm:py-20 bg-blue-50/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8">
            What Makes PR-Connect Different?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card className="h-full bg-white border border-blue-100/50 shadow-sm group hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-700 mb-4">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
            Ready to Elevate Your Digital Presence?
          </motion.h2>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact" className="font-medium">
              Book a Free Strategy Call
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
