'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send, Check, AlertCircle, Clock, Users } from 'lucide-react'
import Head from 'next/head' // Optional for meta tags

// Trust Badges — real trust signals for European businesses
const trustBadges = [
  "50+ European Brands",
  "3x Average Growth Rate",
  "24/7 Support",
  "GDPR Compliant",
  "Multilingual Support"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Simulate API call (replace with your real submission logic)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', business: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    }
  }

  // European business hours (CET)
  const businessHours = "Monday–Friday: 9:00–18:00 CET"

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Optionally, add SEO meta tags here or in your layout */}
      <Head>
        <title>Contact | PR-Connect — Websites & Branding for Local European Businesses</title>
        <meta
          name="description"
          content="Get started with PR-Connect for fast, affordable websites and branding for your café, restaurant, gym, SaaS, or startup. Contact our European team today."
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Let’s Amplify Your Business Online
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Contact our European team to discuss your café, restaurant, gym, SaaS, or startup website and branding needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Conversion-Optimized Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200/50"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Get Started Now</h2>
            <p className="text-gray-600 mb-6">Fill out this form and we’ll respond within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    placeholder="Your café, restaurant, gym, etc."
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                    placeholder="+44 20 7123 4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  How Can We Help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                  placeholder="Tell us about your project, goals, and any questions..."
                  required
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <button
                  type="submit"
                  className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg disabled:opacity-80 w-full sm:w-auto"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Request
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <div className="flex items-center text-green-600">
                    <Check className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm">Message sent!</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-sm">Error sending message</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-3">
                We’ll use your data only to respond to your inquiry. View our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>

          {/* Premium Contact & Trust Signals */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200/50">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-2.5 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-800 mt-1">
                      <a href="mailto:hello@pr-connect.com" className="hover:underline">hello@pr-connect.com</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-2.5 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-800 mt-1">
                      <a href="tel:+9107000566395" className="hover:underline">+91 700 056 6395</a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{businessHours}</span>
                    </p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-100 p-2.5 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office</h3>
                    <p className="text-gray-800 mt-1">Treasure Island Mall, Indore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="bg-white rounded-xl shadow-lg p-0 border border-gray-200/50 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328502555182!2d75.8577203153359!3d22.75386453177203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963027b9e5a0a0d%3A0x5a5a5a5a5a5a5a5a!2sTreasure%20Island%20Mall!5e0!3m2!1sen!2sin!4v1621436591560!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
                title="PR-Connect Office Location"
              ></iframe>
            </div>

            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-xl p-6 border border-blue-100/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-700" />
                <span>Trusted by Cafés, Restaurants, Gyms, SaaS & Startups</span>
              </h3>
              <ul className="space-y-2 p-1">
                {trustBadges.map((badge, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">{badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
