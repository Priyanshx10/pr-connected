"use client";

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
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">Innovative solutions to transform your brand</p>
        </div>
      </section>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
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
    </div>
  );
}