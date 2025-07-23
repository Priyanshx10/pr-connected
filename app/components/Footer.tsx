'use client'

import React from 'react'
import Link from 'next/link'
import { FaCoffee, FaUtensils, FaDumbbell, FaLaptopCode, FaRocket, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Social Links — opens in new tab, semantic, accessible
  const socialLinks = [
    { Icon: FaFacebookF, href: 'https://facebook.com/pr-connect', label: 'Connect on Facebook' },
    { Icon: FaTwitter, href: 'https://x.com/pr-connect', label: 'Follow on X/Twitter' },
    { Icon: FaLinkedinIn, href: 'https://linkedin.com/company/pr-connect', label: 'Network on LinkedIn' },
    { Icon: FaInstagram, href: 'https://instagram.com/pr-connect', label: 'Follow on Instagram' },
    { Icon: FaEnvelope, href: 'mailto:hello@pr-connect.com', label: 'Email us' },
    { Icon: FaPhoneAlt, href: 'tel:+1234567890', label: 'Call us' }
  ]

  // Industry services — exactly matches pr-connect project scope
  const industryServices = [
    { 
      title: 'Cafés',
      icon: <FaCoffee className="mr-2" />,
      href: '/industries/cafes',
      description: 'Affordable, fast-loading websites for coffee shops and bakeries across Europe.'
    },
    { 
      title: 'Restaurants', 
      icon: <FaUtensils className="mr-2" />,
      href: '/industries/restaurants',
      description: 'Menu-driven, reservation-ready sites with local SEO for restaurants.'
    },
    { 
      title: 'Gyms & Fitness', 
      icon: <FaDumbbell className="mr-2" />,
      href: '/industries/gyms',
      description: 'Class schedules, membership signup, and trainer profiles for studios.'
    },
    { 
      title: 'SaaS', 
      icon: <FaLaptopCode className="mr-2" />,
      href: '/industries/saas',
      description: 'Scalable, conversion-optimized sites for European SaaS startups.'
    },
    { 
      title: 'Startups', 
      icon: <FaRocket className="mr-2" />,
      href: '/industries/startups',
      description: 'Launch fast, look pro, and scale with investors and customers.'
    }
  ]

  // Core service links for SEO and conversion
  const serviceLinks = [
    { name: 'Website Design', href: '/services/website' },
    { name: 'Brand Identity', href: '/services/branding' },
    { name: 'SEO & Marketing', href: '/services/seo' },
    { name: 'Ongoing Support', href: '/services/support' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Studies', href: '/case-studies' }
  ]

  // Resource & compliance links
  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'How-To Guides', href: '/resources/guides' },
    { name: 'GDPR Compliance', href: '/compliance' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-16">
          {/* Brand & Value Prop */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group w-min">
              <motion.span 
                whileHover={{ scale: 1.03 }}
                className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100"
              >
                PR-Connect
              </motion.span>
              <span className="ml-2 text-xs font-medium bg-blue-600 text-white px-2 py-1 rounded-full group-hover:bg-blue-500 transition-all">
                Amplify Your Brand
              </span>
            </Link>
            <p className="text-blue-100/90 max-w-[300px]">
              Websites, branding, and digital growth for local cafés, restaurants, gyms, SaaS, and startups in Europe.
            </p>
            {/* Social & contact row */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800/60 hover:bg-blue-700/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Industry Services Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-200/80 uppercase tracking-wide">
              For Your Business
            </h3>
            <ul className="space-y-3">
              {industryServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="flex items-center text-blue-100/90 hover:text-white transition-colors duration-200 group"
                  >
                    {service.icon}
                    <span>{service.title}</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-200/80 uppercase tracking-wide">
              Services & Tools
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="flex items-center text-blue-100/90 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-blue-200/80 uppercase tracking-wide mt-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="flex items-center text-blue-100/90 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 w-3 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter CTA */}
          <div className="space-y-6 max-w-xs">
            <h3 className="text-lg font-semibold text-blue-200/80 uppercase tracking-wide">
              Get Digital Growth Tips
            </h3>
            <p className="text-blue-100/90">
              Join 8,000+ European businesses getting actionable insights every month.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full bg-blue-800/60 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700/60 placeholder-blue-300/70"
                  required
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300/70" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 hover:shadow-lg text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <FaArrowRight className="w-3 h-3" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Trust & Compliance Bar */}
        <div className="mt-20 pt-8 border-t border-blue-800/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-blue-300/80 text-sm">
                &copy; {currentYear} PR-Connect. All rights reserved.
              </p>
              <ul className="flex flex-wrap items-center gap-4">
                <li className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center bg-white bg-opacity-10 rounded-full w-6 h-6 text-xs font-bold">
                    10+
                  </span>
                  <span className="text-blue-300/80 text-sm">Brands Transformed</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-blue-300/80 text-sm">GDPR Compliant</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm">
              <Link href="/privacy" className="text-blue-300/80 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-blue-300/80 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-blue-300/80 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/compliance" className="text-blue-300/80 hover:text-white transition-colors">
                Compliance
              </Link>
              <Link href="/contact" className="text-blue-300/80 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
