'use client'


import { motion } from 'framer-motion';
import { Users, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
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
          About PR-Connect
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          We are a team of passionate PR professionals and tech innovators, dedicated to revolutionizing the way brands connect with their audience through QR-powered strategies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: "Expert Team", description: "Our diverse team brings years of experience in PR, marketing, and technology." },
            { icon: Lightbulb, title: "Innovative Approach", description: "We constantly push the boundaries of what's possible in PR with cutting-edge QR solutions." },
            { icon: TrendingUp, title: "Proven Results", description: "Our strategies have helped numerous brands achieve unprecedented engagement and growth." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <item.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-teal-500 text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At PR-Connect, we strive to bridge the gap between traditional PR and modern technology. Our mission is to empower brands with innovative QR-based solutions that create meaningful connections and drive measurable results.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}