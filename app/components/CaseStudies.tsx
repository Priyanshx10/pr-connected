'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    { title: "Tech Giant's QR Revolution", description: "How we helped a leading tech company increase engagement by 250% with QR-powered product packaging.", image: "/images/case-study-1.jpg" },
    { title: "Retail Chain's In-Store Magic", description: "Our QR strategy transformed the in-store experience for a major retail chain, boosting sales by 30%.", image: "/images/case-study-2.jpg" },
    { title: "Non-Profit's Donation Surge", description: "We helped a non-profit organization increase donations by 180% through an innovative QR campaign.", image: "/images/case-study-3.jpg" },
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
          Case Studies
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          Explore how we&apos;ve helped businesses achieve remarkable results through our innovative QR-powered PR strategies.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image src={study.image} alt={study.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a href="#" className="text-teal-500 font-semibold hover:text-teal-600 transition duration-300 inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to be our next success story?</h2>
          <a href="/contact" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition duration-300 inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2" />
          </a>
        </motion.div>
      </motion.section>
    </div>
  );
}