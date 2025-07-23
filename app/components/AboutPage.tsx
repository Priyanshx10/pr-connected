'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Users, Lightbulb, TrendingUp, Award, Star } from 'lucide-react'
import StatisticalLoader from './Loader'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// --- Team photos — replace with your actual images in /public/images/
const CEO = '/images/CEO.jpg'
const COO = '/images/COO.jpeg'
const VP = '/images/VP.jpeg'

// --- Hero images (the first image is a high-quality, relevant café photo)
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Replace with your actual café/coffee hero image (e.g., a local café scene, barista at work, or coffee cup with branding)
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Restaurant
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Gym
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // SaaS
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Startup
]

// --- Team data
const teamMembers = [
  { name: 'Priyansh Yadav', role: 'CEO', image: CEO },
  { name: 'Krapansh Sharma', role: 'Vice President', image: VP },
  { name: 'Rohit Surawat', role: 'Chief Operating Officer', image: COO },
]

// --- Features — real, business-owner–focused benefits
const features = [
  { icon: Users, title: 'Expert Team', description: 'Years of experience in PR, marketing, and technology.' },
  { icon: Lightbulb, title: 'Innovative Approach', description: 'Cutting-edge QR solutions for modern PR.' },
  { icon: TrendingUp, title: 'Proven Results', description: 'Driving real brand engagement and growth.' },
  { icon: Award, title: 'Recognition', description: 'Award-winning campaigns setting new standards.' },
]

// --- Milestones — accurate for a company founded in 2024
const milestones = [
  { year: '2024', event: 'PR-Connect Founded', icon: Star },
  { year: '2024', event: 'First Client Onboarded', icon: Star },
  { year: '2025', event: 'European Expansion', icon: Star },
  { year: '2025', event: '10+ Brands Served', icon: Star },
]

// --- Animation variants
const containerVariant = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
const itemVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <StatisticalLoader />}</AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-slate-50">
          {/* Hero + Carousel */}
          <section className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={6000}
                transitionTime={800}
                emulateTouch={true}
                useKeyboardArrows={true}
                swipeable={true}
                dynamicHeight={false}
                className="w-full h-full"
                stopOnHover={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => (
                  <li
                    onClick={onClickHandler}
                    className={`mx-1 inline-block w-2 h-2 rounded-full transition-all ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`}
                    aria-label={label}
                    key={index}
                  />
                )}
              >
                {HERO_IMAGES.map((img, index) => (
                  <div key={index} className="relative w-full h-[60vh]">
                    <Image
                      src={img}
                      alt={`PR-Connect client industry: ${index === 0 ? 'café' : index === 1 ? 'restaurant' : index === 2 ? 'gym' : index === 3 ? 'SaaS' : 'startup'}`}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/40" />
                  </div>
                ))}
              </Carousel>
            </div>
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
              className="max-w-6xl mx-auto text-center z-10 px-6"
            >
              <motion.h1
                variants={itemVariant}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white"
              >
                About PR-Connect
              </motion.h1>
              <motion.p
                variants={itemVariant}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto"
              >
                Helping cafés, restaurants, gyms, SaaS, and startups launch, grow, and transform with QR-powered digital marketing.
              </motion.p>
            </motion.div>
          </section>

          {/* Features */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all hover:border-blue-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Journey (Timeline) — Modern, clean, easy-to-scan */}
          <section className="py-16 bg-white border-y border-slate-100">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                Our Journey So Far
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.1, duration: 0.7 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-24 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600 group-hover:bg-blue-700 transition-all shadow-md">
                        <milestone.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-200">
                      <div className="text-blue-600 font-semibold">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mt-1">
                        {milestone.event}
                      </h3>
                      {index < milestones.length - 1 && (
                        <div className="-ml-16 mt-2 pl-24 border-l-4 border-blue-100 h-6 group-hover:border-blue-200 transition-colors"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Meet Our Team</h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-full aspect-square relative rounded-2xl overflow-hidden group">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:opacity-90 transition-opacity"
                      quality={85}
                      priority
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-center text-slate-800">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-slate-600 text-center text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Case Studies & Testimonials */}
          <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Case Studies</h3>
                  <Card className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-xl font-semibold mb-2 text-slate-900">
                        Café Brand Amplification
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-0">
                      <p className="text-slate-700 mb-4">
                        A local café increased bookings by 40% and social engagement by 3x after launching a QR-driven menu and digital loyalty program.
                      </p>
                      <Button asChild variant="link" className="p-0 text-blue-600 hover:underline">
                        <Link href="/case-studies">Read the full story →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-xl font-semibold mb-2 text-slate-900">
                        SaaS Lead Machine
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-0">
                      <p className="text-slate-700 mb-4">
                        A European SaaS startup doubled inbound leads and reduced customer acquisition cost by 35% with a targeted PR and SEO campaign.
                      </p>
                      <Button asChild variant="link" className="p-0 text-blue-600 hover:underline">
                        <Link href="/case-studies">Read the full story →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-4">Client Testimonials</h3>
                  <Card className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-xl font-semibold mb-2 text-slate-900">
                        “PR-Connect delivered real results—fast.”
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-0">
                      <p className="text-slate-700 italic mb-3">
                        “Their team understood our business from day one. We now get more bookings and our brand feels modern and professional. Highly recommended for any local business looking to grow online.”
                      </p>
                      <p className="text-sm text-slate-600">— Maria S., Café Owner, Lisbon</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-xl font-semibold mb-2 text-slate-900">
                        “A true partner for growth”
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0 py-0">
                      <p className="text-slate-700 italic mb-3">
                        “Their QR and digital PR strategy helped our gym attract new members and streamline class bookings. The ongoing support has been invaluable as we expand across Europe.”
                      </p>
                      <p className="text-sm text-slate-600">— Jonas B., Gym Founder, Berlin</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="py-16 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: '25+ Brands Amplified', description: 'From cafés to SaaS, we’ve helped businesses launch and grow across Europe.' },
                  { title: '95% Client Retention', description: 'Our ongoing support and results keep clients coming back year after year.' },
                  { title: '4.8/5 Satisfaction', description: 'Rated by clients for clarity, speed, and measurable impact.' },
                ].map((item, index) => (
                  <Card key={index} className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-blue-50">
                    <CardContent>
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
                      <p className="text-slate-700">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let’s discuss your goals and build a plan tailored to your café, restaurant, gym, SaaS, or startup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50 font-semibold">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-blue-800 border-white hover:bg-white/10">
                  <Link href="/case-studies">blue Success Stories</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
