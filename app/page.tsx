'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle, QrCode, BarChart, Globe, Smartphone, Megaphone, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const unsplashITImages = [
  'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1484136199491-6603c473c88b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const services = [
  { icon: QrCode, title: "QR Code Integration", description: "Seamlessly integrate QR codes into your marketing materials for instant engagement." },
  { icon: BarChart, title: "Analytics & Reporting", description: "Get detailed insights into your campaign performance with our advanced analytics." },
  { icon: Globe, title: "Digital PR Strategies", description: "Boost your online presence with our cutting-edge digital PR techniques." },
  { icon: Smartphone, title: "Mobile-Optimized Campaigns", description: "Create campaigns that are perfectly tailored for mobile users." },
  { icon: Megaphone, title: "Brand Amplification", description: "Amplify your brand's voice across multiple channels for maximum impact." },
  { icon: Target, title: "Targeted Outreach", description: "Reach your ideal audience with precision-targeted PR campaigns." },
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [images, setImages] = useState(unsplashITImages)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images])

  useEffect(() => {
    setImages(unsplashITImages.map(url => `${url}&t=${Date.now()}`))
  }, [])

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image src={img} alt={`IT Slide ${index + 1}`} layout="fill" objectFit="cover" />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            Transform Your Brand with PR-Connect
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-center max-w-2xl"
          >
            Innovative Marketing Solutions & QR Code Integration for the Digital Age
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-teal-600" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        >
          <ChevronRight className="w-6 h-6 text-teal-600" />
        </button>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image src="/images/team.jpg" alt="PR-Connect Team" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to PR-Connect</h2>
              <p className="text-gray-600 mb-6">
                At PR-Connect, we specialize in enhancing your online presence, automating your marketing with QR codes, and creating compelling content that resonates with your audience. Our unique blend of innovative strategies and cutting-edge technology helps your brand thrive in the digital landscape.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-teal-500 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose PR-Connect?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-teal-600">Innovative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Cutting-edge QR code integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Data-driven strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Continuous optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-teal-600">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Years of PR experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Tech-savvy professionals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Cross-industry knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-teal-600">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Measurable ROI</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Increased brand engagement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                    <span>Success across industries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your PR Strategy?</h2>
          <p className="text-xl mb-8 text-teal-100">Let's create a customized QR-powered campaign for your brand.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}