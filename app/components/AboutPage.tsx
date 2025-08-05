'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import StatisticalLoader from './Loader'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import HeroSection from './HeroSection'
import WhyPR from './WhyPR'
import OurStoryPage from './OurStoryPage'


const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80'
]

const teamMembers = [
  {
    name: 'Priyansh Yadav',
    role: 'Founder and Technical Director',
    image: '/images/CEO.jpg',
    story: 'Priyansh brings visionary leadership rooted in real-world marketing success. A decade in digital strategy with a mission to empower local businesses through modern tools.',
    links: {
      linkedin: 'https://www.linkedin.com/in/priyansh10/',
      twitter: 'https://x.com/Priyanshx10_',
      email: 'mailto:priyanshyadav1012@gmail.com'
    }
  },
  {
    name: 'Krapansh Sharma',
    role: 'Vice President',
    image: '/images/VP.jpeg',
    story: 'Krapansh specializes in operational efficiency and brand-building. He ensures every client campaign runs smoothly and exceeds expectations.',
    links: {
      linkedin: 'https://www.linkedin.com/in/krapanshu-sharma-491971158/',
      twitter: 'https://x.com/Priyanshx10_',
      email: 'mailto:krapanshusharma30@gmail.com'
    }
  },
  {
    name: 'Rohit Surawat',
    role: 'Chief Operating Officer',
    image: '/images/COO.jpeg',
    story: 'Rohit’s focus is on scalable systems and performance marketing. He’s passionate about helping clients grow their ROI with actionable insights.',
    links: {
      linkedin: 'https://www.linkedin.com/in/rohit-surawat/',
      twitter: 'https://x.com/Priyanshx10_',
      email: 'mailto:rohitsurawat11@gmail.com'
    }
  }
]


export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) return <StatisticalLoader />

  return (
    <div className=" px-6 py-10 md:px-20">
      <HeroSection />

      <section className="space-y-6 py-10">
        <h2 className="text-2xl font-bold text-center text-blue-900">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="text-center shadow-md">
              <Image src={member.image} alt={member.name} width={200} height={200} className="mx-auto rounded-full object-cover h-48 w-48 mt-6" />
              <CardHeader>
                <CardTitle className="text-blue-800">{member.name}</CardTitle>
                <p className="text-sm text-gray-500">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-gray-700 leading-relaxed">{member.story}</p>
                <div className="flex justify-center gap-4">
                  <Link href={member.links.linkedin}><Linkedin className="w-5 h-5 text-blue-600" /></Link>
                  <Link href={member.links.twitter}><Twitter className="w-5 h-5 text-blue-600" /></Link>
                  <Link href={member.links.email}><Mail className="w-5 h-5 text-blue-600" /></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <OurStoryPage />
    </div>
  )
}