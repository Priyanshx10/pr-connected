'use client'

import { motion } from 'framer-motion';
import { QrCode, BarChart, Globe, Smartphone, Megaphone, Target } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: QrCode, title: "QR Code Integration", description: "Seamlessly integrate QR codes into your marketing materials for instant engagement." },
    { icon: BarChart, title: "Analytics & Reporting", description: "Get detailed insights into your campaign performance with our advanced analytics." },
    { icon: Globe, title: "Digital PR Strategies", description: "Boost your online presence with our cutting-edge digital PR techniques." },
    { icon: Smartphone, title: "Mobile-Optimized Campaigns", description: "Create campaigns that are perfectly tailored for mobile users." },
    { icon: Megaphone, title: "Brand Amplification", description: "Amplify your brand's voice across multiple channels for maximum impact." },
    { icon: Target, title: "Targeted Outreach", description: "Reach your ideal audience with precision-targeted PR campaigns." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          Discover our range of innovative PR services designed to elevate your brand and engage your audience like never before.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to elevate your PR strategy?</h2>
          <a href="/contact" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition duration-300 inline-flex items-center">
            Get Started
            <QrCode className="ml-2" />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}