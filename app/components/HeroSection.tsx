'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1935&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2070&auto=format&fit=crop',
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)

  return (
    <section className="relative h-[85vh] min-h-[550px] overflow-hidden bg-black font-sans">
      {HERO_IMAGES.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          aria-hidden={index !== currentImage}
        >
          <Image
            src={img}
            alt={`Premium web design and AI solutions - PR Connect Europe`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-16">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl mb-5 "
        >
          Digital Solutions That Scale with You
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 font-semibold "
        >
          Fully responsive websites, intelligent AI chatbots, QR-enabled menus, and SEO-first strategies crafted for premium European brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
            <Link href="/contact">Request a Proposal</Link>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
            <Link href="/case-studies">See Client Results</Link>
          </Button>
        </motion.div>
      </div>

      {/* Slide Controls */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 z-20">
        <button
          onClick={prevImage}
          className="bg-white/80 hover:bg-white p-2 rounded-full transition"
          aria-label="Previous"
        >
          <ChevronLeft className="text-primary w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="bg-white/80 hover:bg-white p-2 rounded-full transition"
          aria-label="Next"
        >
          <ChevronRight className="text-primary w-5 h-5" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-2 h-2 rounded-full ${i === currentImage ? 'bg-white w-4' : 'bg-white/50'} transition-all`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
