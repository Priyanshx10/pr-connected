'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  QrCode,
  Globe,
  Smartphone,
  Megaphone,
  Bot,
  Code2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SERVICES = [
  {
    icon: Megaphone,
    title: 'Branding & Identity Design',
    description:
      'We craft memorable, conversion-driven brands that resonate across digital platforms and drive consistent growth.',
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description:
      'SEO-optimized, lightning-fast, responsive websites built to attract, engage, and convert your audience effortlessly.',
  },
  {
    icon: QrCode,
    title: 'QR Code Integration',
    description:
      'Smart QR codes for menus, ads, payments, and tracking – boost engagement and ROI with measurable interaction.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description:
      'Our mobile-first approach ensures flawless, high-speed performance across all smartphone and tablet devices.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Chatbot Development',
    description:
      'Enhance customer experience 24/7 with smart, conversational AI bots tailored to your business goals.',
  },
  {
    icon: Code2,
    title: 'Custom Development Solutions',
    description:
      'Need something unique? From portals to integrations, we build scalable custom solutions tailored to your needs.',
  },
]

const ServiceSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900">
            Expert Digital Solutions to Grow Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our full-suite services are designed to elevate your brand, convert visitors, and deliver results—fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Card className="h-full hover:shadow-lg group transition-all hover:-translate-y-2 rounded-2xl">
                <CardHeader>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-800" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-base">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services" className="flex items-center justify-center gap-2">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
