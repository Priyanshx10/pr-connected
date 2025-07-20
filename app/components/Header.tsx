'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Button } from "@/components/ui/button"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Brand Amplification', featured: true },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Insights' },
  { href: '/contact', label: 'Get Results', cta: true },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Premium Logo with Micro-Interaction */}
          <Link 
            href="/" 
            className="flex items-center group"
            aria-label="PR-Connect - Brand Amplification Experts"
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              PR-Connect
            </motion.span>
            <span className="hidden sm:inline-flex items-center ml-3 text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full group-hover:bg-blue-200 transition-colors">
              Amplify Your Brand <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>

          {/* Desktop Navigation - Conversion Optimized */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      hoveredItem === item.href 
                        ? item.featured ? 'text-purple-600' : 
                          item.cta ? 'text-white' : 'text-blue-600'
                        : item.cta ? 'text-gray-900' : 'text-gray-700 hover:text-blue-500'
                    } ${item.cta ? 'bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm' : ''}`}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.label}
                    {hoveredItem === item.href && !item.cta && (
                      <motion.div 
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          item.featured ? 'bg-purple-600' : 'bg-blue-600'
                        }`}
                        layoutId="underline"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="ml-6 pl-6 border-l border-gray-200">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button 
                    variant="default" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center space-x-4">
                  <UserButton afterSignOutUrl="/" />
                  <Link 
                    href="/dashboard" 
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                </div>
              </SignedIn>
            </div>
          </nav>

          {/* Mobile Menu Button - Enhanced */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Premium Experience */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2 bg-white">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      item.cta 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    {item.cta && <ArrowRight className="ml-2 h-4 w-4 inline" />}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-200">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button 
                        variant="default" 
                        className="w-full bg-blue-600 hover:bg-blue-700 shadow-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-50">
                      <span className="text-base font-medium text-gray-700">My Account</span>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Dashboard
                    </Link>
                  </SignedIn>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}