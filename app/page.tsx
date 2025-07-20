'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Megaphone, Globe, BarChart, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const unsplashITImages = [
  'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
].map(url => `${url}&t=${Date.now()}`)

const brandingServices = [
  {
    icon: Megaphone,
    title: "Brand Amplification",
    description: "360° brand visibility across digital and traditional channels",
    features: [
      "Social media dominance strategy",
      "Influencer partnership programs", 
      "Content syndication network"
    ]
  },
  {
    icon: Globe,
    title: "Global Branding",
    description: "Cultural adaptation for international markets",
    features: [
      "Market-specific messaging",
      "Localization services",
      "Cross-cultural PR"
    ]
  },
  {
    icon: BarChart,
    title: "Performance Branding",
    description: "Data-driven brand growth strategies",
    features: [
      "Brand lift measurement",
      "Competitive benchmarking",
      "ROI-focused campaigns"
    ]
  }
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % unsplashITImages.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {unsplashITImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={index === 0 ? "Brand amplification experts" : "Global marketing solutions"}
              fill
              priority={index < 2}
              quality={index === currentImage ? 90 : 30}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white [text-shadow:_0_2px_8px_rgba(0,0,0,0.5)]"
          >
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Brand Dominance
            </span><br />
            Across Borders
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100"
          >
            We amplify brands globally through strategic positioning, cultural adaptation, and measurable impact
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100 shadow-lg">
              <Link href="/contact">
                Amplify Your Brand Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/20">
              <Link href="/success-stories">
                Brand Transformations
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 text-sm text-white/80">
          <span>50+ brands amplified</span>
          <span>•</span>
          <span>Avg. 1.2x brand lift</span>
          <span>•</span>
          <span>5+ markets covered</span>
        </div>
      </section>

      {/* Branding Amplification Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              <span className="text-blue-600">Brand Amplification</span> Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology for building dominant brands in competitive markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {brandingServices.map((service, index) => (
              <Card key={index} className="group transition-all hover:shadow-xl hover:-translate-y-2 h-full">
                <CardHeader>
                  <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for <span className="text-blue-300">Brand Transformation</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our flexible pricing options tailored to your brand's growth stage
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100 shadow-lg">
              <Link href="/pricing">
                View Pricing Plans
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/20">
              <Link href="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}