'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const storyMilestones = [
  {
    year: '2021',
    title: 'PR-Connect Founded',
    image: 'https://images.unsplash.com/photo-1593427995298-cad6731716d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxmb3VuZGVkfGVufDB8fDB8fHww',
    description:
      'In a cramped dorm room with a whiteboard and wild ambition, PR-Connect was born. Built by storytellers and techies, our mission was clear: make public relations, marketing, and brand growth more human, digital, and data-driven.',
  },
  {
    year: '2022',
    title: 'First Client Onboarded',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJ1c2luZXNzfGVufDB8fDB8fHww',
    description:
      "Our first client—a cozy café tucked away in Lisbon—sparked our fire. We replaced paper menus with dynamic QR codes, collaborated with local influencers, and generated a 1.5x engagement spike in just 30 days. That's when we knew: we were onto something transformative.",
  },
  {
    year: '2023',
    title: 'European Expansion',
    image: 'https://images.unsplash.com/photo-1507840771025-26e8ececa04c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'We crossed borders, partnering with SaaS startups in Berlin, fitness studios in Copenhagen, and wellness brands in Paris. Our playbook adapted fast, delivering multilingual campaigns and region-specific branding tailored for B2B performance.',
  },
  {
    year: '2024',
    title: '5+ Brands Served',
    image: 'https://images.unsplash.com/photo-1532795986-dbef1643a596?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmQlMjBkZWFsc3xlbnwwfHwwfHx8MA%3D%3D',
    description:
      'With a solid foundation, we scaled fast—rolling out a customizable content + QR engine. From indie gyms to enterprise platforms, our clients saw up to 40% higher retention, proving that growth isn’t just about reach—it’s about relevance.',
  },
]

export default function OurStoryPage() {
  return (
    <div className="px-6 py-12 md:px-20 space-y-16 bg-gradient-to-br from-white to-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-900"
      >
        Our Story
      </motion.h1>

      <section className="grid md:grid-cols-2 gap-10">
        {storyMilestones.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="shadow-lg border border-blue-100 bg-white">
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-800">
                  {item.year} - {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
