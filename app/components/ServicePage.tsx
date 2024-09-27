'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, QrCode, PenTool } from 'lucide-react'

const services = [
  {
    title: 'Online Presence Development',
    description: 'Enhance your digital visibility with our expert website design and SEO strategies.',
    icon: Globe,
    details: [
      'Custom website design and development',
      'Search engine optimization (SEO)',
      'Social media profile optimization',
      'Online reputation management'
    ]
  },
  {
    title: 'QR Automation Solutions',
    description: 'Bridge physical and digital experiences with our innovative QR code integration.',
    icon: QrCode,
    details: [
      'Custom QR code generation',
      'QR code tracking and analytics',
      'Dynamic QR code campaigns',
      'Integration with existing marketing materials'
    ]
  },
  {
    title: 'Content Creation',
    description: 'Engage your audience with our professional content creation services.',
    icon: PenTool,
    details: [
      'Blog writing and management',
      'Social media content creation',
      'Video production and editing',
      'Infographic and visual content design'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">Innovative solutions to transform your brand</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="mb-16 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center bg-teal-500 text-white p-6">
                  <service.icon size={48} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">{service.title}</div>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.1) }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-teal-500" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}