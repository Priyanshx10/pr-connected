'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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

const PRDifferent = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </section></div>
  )
}

export default PRDifferent