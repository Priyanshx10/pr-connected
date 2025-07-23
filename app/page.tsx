'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Coffee, Utensils, Dumbbell, Cpu, Rocket, Zap, Layout, PenTool, Headphones, CheckCircle, Clock, Users, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Unsplash API key — register at https://unsplash.com/developers
const UNSPLASH_KEY = 'YOUR_UNSPLASH_API_KEY'

// Industry configuration
const INDUSTRIES = [
  { name: 'Cafés', icon: Coffee, query: 'european+cafe' },
  { name: 'Restaurants', icon: Utensils, query: 'european+restaurant' },
  { name: 'Gyms', icon: Dumbbell, query: 'gym' },
  { name: 'SaaS', icon: Cpu, query: 'startup+office' },
  { name: 'Startups', icon: Rocket, query: 'startup+office' }
]

const SERVICES = [
  { name: 'Website Design', icon: Layout, href: '/services/website', description: 'Fast, beautiful, mobile-first sites—designed for your business and your customers.' },
  { name: 'Branding', icon: PenTool, href: '/services/branding', description: 'Logos, colors, fonts, and style guides—professional, memorable, ready for Europe.' },
  { name: 'Ongoing Support', icon: Headphones, href: '/services/support', description: 'Hosting, updates, security, and real help—whenever you need it.' }
]

const TRUST_SIGNALS = [
  { label: '50+ European Clients', icon: CheckCircle },
  { label: 'Launch in 7–14 Days', icon: Clock },
  { label: 'Multilingual & GDPR', icon: Globe },
  { label: '24/7 Support', icon: Users }
]

// API fetch: Get an Unsplash image by query
async function fetchUnsplashImage(query: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_KEY}`
    )
    if (!res.ok) throw new Error('Failed to fetch image')
    const data = await res.json()
    return data.urls.regular
  } catch (error) {
    console.error('Unsplash API error:', error)
    return null
  }
}

// Main component
export default function Home() {
  const [industryImages, setIndustryImages] = useState<Record<string, string>>({})

  // Fetch Unsplash images for each industry on mount
  useEffect(() => {
    Promise.all(
      INDUSTRIES.map(async (industry) => {
        const url = await fetchUnsplashImage(industry.query)
        return { [industry.name]: url }
      })
    ).then((results) => {
      const images = results.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      setIndustryImages(images)
    })
  }, [])

  return (
    <div
      className="bg-white"
      style={{
        // Modern, branded color scheme — modify to match your brand
        '--color-primary': '#1e40af',
        '--color-primary-light': '#3b82f6',
        '--color-primary-dark': '#1e3a8a',
        '--color-gray': '#374151',
        '--color-gray-light': '#e5e7eb',
      }}
    >
      {/* Hero: No header, direct to content */}
      <section className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center md:pt-32 md:pb-24">
        <h1
          className="text-[2.5rem] md:text-[3.25rem] font-black leading-tight tracking-tight mb-6"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.025em',
            color: 'var(--color-primary)',
            lineHeight: '1.1',
          }}
        >
          Websites & Branding
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(45deg, var(--color-primary-light), var(--color-primary-dark))',
            }}
          >
            Built for European Businesses
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          style={{
            color: 'var(--color-gray)',
            fontWeight: 400,
            lineHeight: '1.5',
          }}
        >
          Get a fast, affordable, beautiful website and branding—tailored for cafés, restaurants, gyms, SaaS, and startups. Launch in days, not weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="button-gradient">
            <Link href="/get-started">Get My Website</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="button-outline">
            <Link href="/case-studies">See Our Work</Link>
          </Button>
        </div>
      </section>

      {/* Industry Showcase */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ color: 'var(--color-primary)' }}
            >
              Designed for Your Industry
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: 'var(--color-gray)' }}
            >
              We know what works for your business—because we build it every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {INDUSTRIES.map((industry, i) => (
              <Link
                key={i}
                href={`/industries/${industry.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl border border-gray-200/80 hover:border-blue-200 transition-all shadow-sm hover:shadow-md"
              >
                {industryImages[industry.name] ? (
                  <div className="aspect-square relative bg-gray-100">
                    <Image
                      src={industryImages[industry.name]}
                      alt={`${industry.name} client site by PR-Connect`}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                ) : (
                  <div className="aspect-square flex items-center justify-center bg-gray-100">
                    <industry.icon className="w-12 h-12 text-gray-400 opacity-70" />
                  </div>
                )}
                <div className="p-5 text-center">
                  <h3
                    className="font-bold text-lg group-hover:text-blue-600 transition-colors"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {industry.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Everything You Need to Succeed Online
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-200/70 hover:border-blue-200/70 transition-all group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <service.icon
                    className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors"
                  />
                </div>
                <h3
                  className="font-bold text-lg mb-3 text-center"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-center"
                  style={{ color: 'var(--color-gray)' }}
                >
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Trusted by Local Businesses
          </h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mb-2 bg-blue-50">
                  <signal.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span
                  className="font-medium text-center"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {signal.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Noticed?</h2>
          <p className="text-lg md:text-xl mb-8">
            Launch your website and branding in days—built for cafés, restaurants, gyms, SaaS, and startups in Europe.
          </p>
          <Button asChild size="lg" className="button-gradient text-white">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Global CSS — drop this in globals.css */}
      <style jsx>{`
        .button-gradient {
          background: linear-gradient(
            45deg,
            var(--color-primary-light),
            var(--color-primary-dark)
          );
          border: none;
          color: white;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .button-gradient:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.15);
        }
        .button-outline {
          color: var(--color-primary);
          border-color: var(--color-primary);
          transition: all 0.15s;
        }
        .button-outline:hover {
          color: white;
          background: var(--color-primary-light);
          border-color: var(--color-primary-light);
        }
      `}</style>
    </div>
  )
}