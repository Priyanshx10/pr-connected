import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Brand-focused social links
  const socialLinks = [
    { 
      Icon: FaFacebookF, 
      href: 'https://facebook.com/pr-connect',
      label: 'Connect on Facebook'
    },
    { 
      Icon: FaTwitter, 
      href: 'https://x.com/pr-connect',
      label: 'Follow us on Twitter'
    },
    { 
      Icon: FaLinkedinIn, 
      href: 'https://linkedin.com/company/pr-connect',
      label: 'Network on LinkedIn'
    },
    { 
      Icon: FaInstagram, 
      href: 'https://instagram.com/pr-connect',
      label: 'Follow on Instagram'
    },
  ];

  // Conversion-focused footer links
  const footerLinks = [
    {
      title: "Brand Services",
      links: [
        { name: "Brand Strategy", href: "/services/strategy" },
        { name: "Digital PR", href: "/services/digital-pr" },
        { name: "Media Placement", href: "/services/media" },
        { name: "Influencer Marketing", href: "/services/influencers" },
      ]
    },
    {
      title: "Success Stories",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Client Results", href: "/results" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Our Approach", href: "/approach" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Brand Guides", href: "/resources/guides" },
        { name: "Webinars", href: "/webinars" },
        { name: "Industry Reports", href: "/reports" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Column - Conversion Focused */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100 group-hover:from-blue-200 group-hover:to-white transition-all duration-300">
                PR-Connect
              </span>
              <span className="ml-2 text-xs font-medium bg-blue-600 text-white px-2 py-1 rounded-full">
                Amplify Your Brand
              </span>
            </Link>
            
            <p className="text-blue-100">
              We transform brands into industry leaders through strategic PR and digital amplification.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-200">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="flex items-center text-blue-100 hover:text-white transition duration-300 group"
                    >
                      <span>{link.name}</span>
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-3 h-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column - Lead Generation */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-200">Get Brand Growth Tips</h4>
            <p className="text-blue-100">
              Join 10,000+ marketers receiving our exclusive brand amplification strategies.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your professional email"
                  className="w-full bg-blue-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-700 placeholder-blue-300"
                  required
                />
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 text-blue-900 font-bold px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
              >
                Get Free Insights
                <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - Trust Signals */}
        <div className="mt-16 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-blue-300 text-sm">
              © {currentYear} PR-Connect. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <span className="text-blue-300 text-sm">Trusted by 500+ brands worldwide</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-300 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-300 hover:text-white text-sm transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-blue-300 hover:text-white text-sm transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;