'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useUser, UserButton, SignInButton } from "@clerk/nextjs";

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
];

const NavLinks = ({ onClick }) => (
  <>
    {navItems.map((item) => (
      <Link 
        key={item.href} 
        href={item.href} 
        className="text-gray-800 hover:text-teal-600 transition duration-300"
        onClick={onClick}
      >
        {item.label}
      </Link>
    ))}
  </>
);

export default function Header() {
  const { isSignedIn, user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const AuthButton = () => {
    if (isSignedIn) {
      return (
        <div className="flex items-center space-x-2">
          <UserButton afterSignOutUrl="/" />
          <span className="text-sm font-medium text-gray-700">{user.fullName}</span>
        </div>
      );
    }
    return (
      <SignInButton mode="modal">
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300">
          Sign in
        </button>
      </SignInButton>
    );
  };

  return (
    <>
      <header className="bg-white shadow-md relative z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600">PR-Connect</Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <NavLinks onClick={undefined} />
            </div>

            {/* Authentication Button */}
            <div className="hidden md:block">
              <AuthButton />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800 hover:text-teal-600 transition duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md"
            >
              <div className="container mx-auto px-6 py-3">
                <NavLinks onClick={() => setIsOpen(false)} />
                <div className="py-2">
                  <AuthButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section with Video */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-20 relative text-center text-white">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Revolutionize Your PR with QR
          </motion.h1>
          <motion.p 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl mb-8"
          >
            Seamlessly integrate QR codes into your marketing strategy for unparalleled engagement.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/contact" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-full hover:bg-teal-600 transition duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Instant Engagement", description: "Connect with your audience instantly through QR-powered campaigns." },
              // Add other features here as needed
              // Example:
              // { icon: Target, title: "Targeted Marketing", description: "Reach your ideal customers with precision-targeted QR strategies." },
              // { icon: Megaphone, title: "Amplified Reach", description: "Extend your brand's reach with our innovative PR techniques." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your PR Strategy?</h2>
          <p className="text-xl mb-8 text-teal-100">Let's create a customized QR-powered campaign for your brand.</p>
          <Link href="/contact" className="bg-white text-teal-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration=300 inline-flex items-center">
            Contact Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}