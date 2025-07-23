'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Check, QrCode, BarChart, Globe, Smartphone, Megaphone, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// --- Config ---
// Replace with your own team image `/public/images/team.jpg`
const TEAM_IMAGE = '/images/team.jpg'

// Unsplash imagery (feel free to update with your brand-specific queries)
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Café
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Restaurant
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Gym
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // SaaS
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Startup
]

// Services (exactly matching your project scope: cafés, restaurants, gyms, SaaS, startups)
const SERVICES = [
  {
    icon: QrCode,
    title: 'QR Code Marketing',
    description: 'Seamless integration of QR codes in print and digital for instant customer engagement.',
  },
  {
    icon: Globe,
    title: 'Local SEO & Discoverability',
    description: 'Get found by local customers searching online for your business.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Websites',
    description: 'Fast, beautiful sites that work perfectly on any device.',
  },
  {
    icon: Megaphone,
    title: 'Brand Amplification',
    description: 'Build your brand with tailored content and social media.',
  },
 
]

// Reasons to choose (tailored for local businesses + tech)
const WHY_CHOOSE = [
  {
    title: 'Innovative Approach',
    items: [
      { text: 'Patented QR solutions', icon: QrCode },
      { text: 'Data-driven strategies', icon: BarChart },
      { text: 'Ongoing optimization', icon: Globe },
    ],
  },
  {
    title: 'Expert Team',
    items: [
      { text: '10+ years in PR & digital', icon: Megaphone },
      { text: 'Technologists at heart', icon: Smartphone },
      { text: 'Proven across industries', icon: Target },
    ],
  },
  {
    title: 'Proven Results',
    items: [
      { text: '90+ client satisfaction', icon: Check },
      { text: '10+ brands amplified', icon: Megaphone },
      { text: '2x average growth*', icon: ArrowRight },
    ],
  },
]

// --- Component ---
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState(HERO_IMAGES)

  // Cycle hero images for visual engagement
  useEffect(() => {
    setImages(HERO_IMAGES.map(url => `${url}&t=${Date.now()}`))
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % HERO_IMAGES.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentImage(prev => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage(prev => (prev - 1 + images.length) % images.length)

  // --- 10/10 UI/UX Principles applied ---
  // - No unnecessary gradients or animations
  // - Clear, benefit-driven copy
  // - Mobile-first, responsive grids
  // - Focused CTAs
  // - Accessible, semantic HTML
  // - Fast-loading images
  // - No stock jargon, just what matters to business owners

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
            aria-hidden={index !== currentImage}
          >
            <Image
              src={img}
              alt={`Showcasing PR-Connect client: ${index === 0 ? 'café' : index === 1 ? 'restaurant' : index === 2 ? 'gym' : index === 3 ? 'SaaS' : 'startup'}`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 py-16">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl"
          >
            Launch. Grow. Transform.
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-4"
          >
            Websites, apps, and QR marketing for cafés, restaurants, gyms, SaaS, and startups across Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-md">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white bg-transparent hover:bg-white/10 border-white">
              <Link href="/case-studies">See Our Work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-blue-800" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all z-20"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-blue-800" />
        </button>

        {/* Bullets */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20 bg-blue-50/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2 md:pr-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Image
                  src={TEAM_IMAGE}
                  alt="PR-Connect team working together"
                  width={800}
                  height={500}
                  priority
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900">Local Expertise, Global Ambition</h2>
              <p className="text-gray-700 mb-6 text-lg">
                PR-Connect is a team of digital experts, designers, and marketers who help local businesses—cafés, restaurants, gyms, SaaS, and startups—launch fast, grow online, and attract more customers with modern websites, apps, and QR code marketing.
              </p>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900">How We Help Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Everything you need to get online, get noticed, and get growing—fast.</p>
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
                <Card className="h-full hover:shadow-lg group transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                      <service.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-800" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{service.description}</p>
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

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-blue-50/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-8">Why Businesses Choose PR-Connect</h2>

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
                    <CardTitle className="text-xl font-semibold text-blue-700 mb-4">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item.text}</span>
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let’s discuss your project and build a plan to launch, grow, and transform your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact" className="font-semibold">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/10">
              <Link href="/case-studies">
                10+ Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
