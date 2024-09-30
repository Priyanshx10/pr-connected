'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md hover:bg-teal-600 transition duration-300 disabled:opacity-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-teal-500 mr-4" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600"> Nexus Treasure Island Mall, Indore, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-teal-500 mr-4" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">+91 (700) 056-6395</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-teal-500 mr-4" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">priyanshyadav1012@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919355!2d-74.00425878459418!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80da61087cc12a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621436591560!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}