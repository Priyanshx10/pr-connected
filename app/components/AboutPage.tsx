'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, Phone, TrendingUp, Award, Star, Coffee, Utensils, Dumbbell, Cpu, Rocket } from 'lucide-react';
import Script from 'next/script';

// Placeholder team images (replace with your actual team photos)
import CEO from '../../public/images/CEO.jpg';
import COO from '../../public/images/COO.jpeg';
import VP from '../../public/images/VP.jpeg';

// Local metadata for this page
const pageMetadata = {
  title: 'About PR-Connect | Websites & Branding for Local European Businesses',
  description: 'Meet the team behind PR-Connect, building fast, affordable websites and branding for cafés, restaurants, gyms, SaaS, and startups across Europe since 2022.',
};

// Team members data with SEO-optimized properties
const teamMembers = [
  {
    name: 'Priyansh Yadav',
    role: 'CEO & Founder',
    image: CEO,
    alt: 'Priyansh Yadav, Full-stack developer and CEO of PR-Connect',
    bio: 'Full-stack developer with 4+ years building high-converting websites for European SMEs. Fluent in web performance and SEO.',
    linkedin: '#',
  },
  {
    name: 'Krapanshu Sharma',
    role: 'Vice President',
    image: VP,
    alt: 'Krapanshu Sharma, VP of Technology at PR-Connect',
    bio: 'Cloud engineer specializing in fast, secure hosting for European businesses. Expert in GDPR compliance and multilingual sites.',
    linkedin: '#',
  },
  {
    name: 'Rohit Surawat',
    role: 'Chief Operating Officer',
    image: COO,
    alt: 'Rohit Surawat, COO of PR-Connect',
    bio: 'Operations leader streamlining website launches for cafés, restaurants, and gyms across Europe.',
    linkedin: '#',
  },
];

// Industry focus – exactly matches your project scope
const industries = [
  { name: 'Cafés', icon: Coffee, href: '/industries/cafes' },
  { name: 'Restaurants', icon: Utensils, href: '/industries/restaurants' },
  { name: 'Gyms', icon: Dumbbell, href: '/industries/gyms' },
  { name: 'SaaS', icon: Cpu, href: '/industries/saas' },
  { name: 'Startups', icon: Rocket, href: '/industries/startups' },
];

// Feature cards with schema.org compatibility and Europe-focused value props
const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: '10+ years combined experience helping local businesses grow online.',
    stat: '87% client retention rate',
    schema: 'https://schema.org/OrganizationRole',
  },
  {
    icon: Coffee,
    title: 'Local Focus',
    description: 'Websites tailored for cafés, restaurants, gyms, SaaS, and startups in Europe.',
    stat: 'Launch in as little as 7 days',
    schema: 'https://schema.org/LocalBusiness',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Clients average 1.5x more bookings, visits, and inquiries after launch.',
    stat: '50+ success stories',
    schema: 'https://schema.org/Review',
  },
  {
    icon: Award,
    title: 'Trusted Partner',
    description: 'Fast, affordable, beautiful websites with real support and GDPR-compliant hosting.',
    stat: 'Recognized by 50+ brands',
    schema: 'https://schema.org/Award',
  },
];

// Company milestones with real EU/local achievements
const milestones = [
  {
    year: '2022',
    event: 'Founded in Europe',
    icon: Star,
    achievement: 'First client: Local café in Manchester',
    highlight: true,
  },
  {
    year: '2023',
    event: 'Launched SaaS & Startup Solutions',
    icon: Star,
    achievement: '20+ tech clients onboarded',
  },
  {
    year: '2024',
    event: 'Expanded to Germany, France, Spain',
    icon: Star,
    achievement: '100+ websites live',
    highlight: true,
  },
  {
    year: '2025',
    event: '50+ European Brands',
    icon: Star,
    achievement: 'Serving clients in 5+ countries',
  },
];

// Schema.org structured data for SEO and local business
const companySchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PR-Connect',
  description: pageMetadata.description,
  url: 'https://pr-connect.com',
  foundingDate: '2022',
  founder: teamMembers.filter(m => m.role.includes('Founder')).map(f => ({
    '@type': 'Person',
    name: f.name,
    jobTitle: f.role,
  })),
  numberOfEmployees: '5-10',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EU',
  },
  department: industries.map(i => ({
    '@type': 'Organization',
    name: i.name,
    url: `https://pr-connect.com${i.href}`,
  })),
};

// Simple loading spinner component (replace with your own if needed)
function StatisticalLoader() {
  return (
    <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" aria-label="Loading content" />
    </div>
  );
}

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
      />

      <AnimatePresence>
        {isLoading && <StatisticalLoader />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
            aria-labelledby="about-heading"
          >
            <h1 id="about-heading" className="sr-only">{pageMetadata.title}</h1>

            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center">
              <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl font-extrabold text-gray-900"
              >
                Modern Websites & Branding for <span className="text-blue-600">Local European Businesses</span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg text-gray-600 max-w-3xl"
              >
                Since 2022, we’ve helped cafés, restaurants, gyms, SaaS, and startups across Europe launch fast, beautiful websites that attract more customers and grow their brands.
              </motion.p>

              {/* Touch-friendly, animated industry list */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-4 w-full max-w-xl mt-8"
              >
                {industries.map((industry, i) => (
                  <motion.a
                    key={industry.name}
                    href={industry.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center sm:flex-col gap-2 p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
                  >
                    <industry.icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-medium">{industry.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-sm font-medium text-blue-600">{item.stat}</p>
                </motion.div>
              ))}
            </div>

            {/* Company Timeline */}
            <section aria-labelledby="timeline-heading" className="mb-16">
              <h2 id="timeline-heading" className="text-3xl font-extrabold mb-12 text-center text-gray-900">
                Our Growth Journey
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100" />
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, type: "spring" }}
                    className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-12`}
                  >
                    <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                      <div className={`p-6 rounded-lg shadow-md border ${milestone.highlight ? "bg-blue-50 border-blue-200" : "bg-white border-gray-100"}`}>
                        <div className="flex items-center mb-2">
                          <milestone.icon className={`w-5 h-5 ${milestone.highlight ? "text-blue-500" : "text-gray-400"} mr-2`} />
                          <span className={`font-semibold ${milestone.highlight ? "text-blue-600" : "text-gray-500"}`}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{milestone.event}</h3>
                        <p className="text-gray-600 text-sm">{milestone.achievement}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center shadow-md">
                      <milestone.icon className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Leadership Team */}
            <section aria-labelledby="team-heading" className="mb-16">
              <h2 id="team-heading" className="text-3xl font-extrabold mb-12 text-center text-gray-900">
                Leadership Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-blue-600 mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                        >
                          Connect on LinkedIn
                        </a>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section aria-labelledby="achievements-heading" className="mb-16">
              <h2 id="achievements-heading" className="text-3xl font-extrabold mb-12 text-center text-gray-900">
                By The Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "European Clients", color: "from-blue-500 to-blue-700" },
                  { value: "5", label: "Countries", color: "from-blue-500 to-blue-700" },
                  { value: "1.5x", label: "Average Growth", color: "from-purple-500 to-purple-700" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${stat.color} p-8 rounded-xl text-white text-center shadow-lg`}
                  >
                    <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to Grow Your Business Online?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get a fast, beautiful, affordable website and branding for your café, restaurant, gym, SaaS, or startup.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all flex items-center justify-center"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="/case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all flex items-center justify-center"
                >
                  See Examples
                </motion.a>
              </div>
            </motion.section>
          </motion.section>

          {/* Bottom trust & contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/60 rounded-xl p-6 sm:p-8 mt-16 max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Contact Us</h3>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4" /> hello@pr-connect.com
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" /> +44 20 7123 4567
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Our Promise</h3>
                <p className="text-gray-700">
                  Fast, affordable, beautiful websites. No surprises. GDPR compliant.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">Trust & Compliance</h3>
                <p className="text-gray-700">
                  <a href="/privacy" className="hover:underline">Privacy</a> |{' '}
                  <a href="/terms" className="hover:underline">Terms</a> |{' '}
                  <a href="/cookies" className="hover:underline">Cookies</a>
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      )}
    </>
  );
}
