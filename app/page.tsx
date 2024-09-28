'use client'

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, Megaphone } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
        >
          Revolutionize Your PR with QR
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-8 text-gray-600"
        >
          Seamlessly integrate QR codes into your marketing strategy for unparalleled engagement.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="/contact" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition duration-300 inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Engagement", description: "Connect with your audience instantly through QR-powered campaigns." },
              { icon: Target, title: "Targeted Marketing", description: "Reach your ideal customers with precision-targeted QR strategies." },
              { icon: Megaphone, title: "Amplified Reach", description: "Extend your brand's reach with our innovative PR techniques." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your PR Strategy?</h2>
          <p className="text-xl mb-8 text-teal-100">Let&apos;s create a customized QR-powered campaign for your brand.</p>
          <Link href="/contact" className="bg-white text-teal-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 inline-flex items-center">
            Contact Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}