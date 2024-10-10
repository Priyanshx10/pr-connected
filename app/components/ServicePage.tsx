'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  QrCode,
  BarChart,
  Globe,
  Smartphone,
  Megaphone,
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const services = [
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Seamlessly integrate QR codes into your marketing materials for instant engagement.",
    details: [
      "Custom QR code design that aligns with your brand",
      "Dynamic QR codes for real-time content updates",
      "Analytics integration for tracking scan rates and user behavior",
      "Multi-channel campaign integration (print, digital, outdoor)"
    ],
    caseStudy: "Increased engagement by 250% for a tech giant's product packaging campaign."
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Get detailed insights into your campaign performance with our advanced analytics.",
    details: [
      "Real-time dashboard for campaign performance metrics",
      "Custom report generation for stakeholder presentations",
      "A/B testing capabilities for campaign optimization",
      "Predictive analytics for future campaign planning"
    ],
    caseStudy: "Helped a retail chain optimize their in-store QR placements, resulting in a 30% increase in sales."
  },
  {
    icon: Globe,
    title: "Digital PR Strategies",
    description: "Boost your online presence with our cutting-edge digital PR techniques.",
    details: [
      "SEO-optimized press release distribution",
      "Influencer partnership programs",
      "Social media crisis management",
      "Online reputation management and monitoring"
    ],
    caseStudy: "Increased online visibility by 400% for a B2B software company within 6 months."
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimized Campaigns",
    description: "Create campaigns that are perfectly tailored for mobile users.",
    details: [
      "Responsive design for all mobile devices and screen sizes",
      "App-less AR experiences triggered by QR codes",
      "Mobile-first landing page design and optimization",
      "Integration with popular mobile wallets and payment systems"
    ],
    caseStudy: "Developed a mobile-first campaign that increased app downloads by 180% for a fintech startup."
  },
  {
    icon: Megaphone,
    title: "Brand Amplification",
    description: "Amplify your brand's voice across multiple channels for maximum impact.",
    details: [
      "Cross-channel campaign coordination",
      "Brand storytelling and narrative development",
      "User-generated content campaigns",
      "Brand partnership and co-marketing strategies"
    ],
    caseStudy: "Amplified a non-profit's message, resulting in a 300% increase in donations and volunteer sign-ups."
  },
  {
    icon: Target,
    title: "Targeted Outreach",
    description: "Reach your ideal audience with precision-targeted PR campaigns.",
    details: [
      "Audience segmentation and persona development",
      "Geo-targeted QR campaigns",
      "Personalized content delivery based on user behavior",
      "Retargeting strategies for maximum conversion"
    ],
    caseStudy: "Increased qualified leads by 150% for a B2B services company through targeted LinkedIn campaigns."
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          Innovative PR solutions powered by cutting-edge QR technology to transform your brand's engagement and reach.
        </motion.p>

        <Tabs defaultValue={services[0].title} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {services.map((service) => (
              <TabsTrigger
                key={service.title}
                value={service.title}
                onClick={() => setSelectedService(service)}
                className="w-full"
              >
                <service.icon className="w-6 h-6 mr-2" />
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.title} value={service.title}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-8 h-8 mr-2 text-teal-500" />
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold mb-2">Case Study Highlight:</h3>
                    <p className="text-gray-600 italic">{service.caseStudy}</p>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your PR Strategy?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let's discuss how our innovative QR-powered solutions can elevate your brand's engagement and reach.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Additional Sections */}
        <div className="mt-24 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Approach</h2>
            <p className="text-gray-600 mb-4">
              At PR-Connect, we believe in a holistic approach to PR that leverages the power of QR technology. Our strategies are:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-teal-500" />
                <span>Data-driven for measurable results</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-teal-500" />
                <span>Tailored to your unique brand voice</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-teal-500" />
                <span>Designed for seamless online-offline integration</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-teal-500" />
                <span>Focused on creating engaging user experiences</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Choose PR-Connect?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Globe className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Industry Expertise</h3>
                  <p className="text-gray-600">With years of experience across various sectors, we bring deep industry knowledge to every campaign.</p>
                </div>
              </li>
              <li className="flex items-start">
                <BarChart className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Proven Results</h3>
                  <p className="text-gray-600">Our track record speaks for itself, with numerous success stories and satisfied clients.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Smartphone className="w-6 h-6 mr-2 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Cutting-Edge Technology</h3>
                  <p className="text-gray-600">We stay ahead of the curve, utilizing the latest in QR and digital marketing technologies.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}