'use client'

import { motion } from 'framer-motion';
import { Book, Video, Download, ArrowRight } from 'lucide-react';

export default function Resources() {
  const resources = [
    { icon: Book, title: "QR Code Mastery Guide", description: "Learn how to create and implement effective QR code strategies in your PR campaigns.", link: "#" },
    { icon: Video, title: "Webinar: The Future of PR", description: "Watch our expert panel discuss emerging trends in PR and how to stay ahead of the curve.", link: "#" },
    { icon: Download, title: "Case Study: Retail Revolution", description: "Download our in-depth case study on how we transformed a retail chain's customer engagement.", link: "#" },
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
          Resources
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          Explore our collection of guides, webinars, and case studies to enhance your PR and QR code knowledge.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <resource.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a href={resource.link} className="text-teal-500 font-semibold hover:text-teal-600 transition duration-300 inline-flex items-center">
                Access Resource
                <ArrowRight className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 bg-teal-500 text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-4">Subscribe to our newsletter for the latest PR insights and QR code strategies.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <button 
              type="submit" 
              className="bg-white text-teal-500 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
}