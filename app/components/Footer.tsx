import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaFacebookF, href: 'https://priyansh-port-folio.vercel.app/' },
    { Icon: FaTwitter, href: 'https://x.com/Priyanshx10_' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/priyansh_10_/' },
    { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/priyansh10' },
    { Icon: FaGithub, href: 'https://github.com/Priyanshx10' },
  ];

  return (
    <footer className="bg-gradient-to-r  bg-gray-800  text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              Pr-Connect 
            </h3>
            <p className="text-sm text-gray-200">
              Revolutionizing the future with eco-friendly AI solutions.
            </p>
            <p className="text-xs text-gray-300">
              © {currentYear} Pr-Connect. All rights reserved.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-200 hover:text-blue-300 transition duration-300 ease-in-out">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-blue-300">Connect With Us</h4>
            <div className="flex space-x-5">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-300 transition duration-300 ease-in-out"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-3 text-gray-200">Stay updated with our newsletter</h5>
              <form className="flex flex-col sm:flex-row">
                <div className="relative flex-grow mb-2 sm:mb-0 sm:mr-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-blue-800 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-800 px-6 py-3 rounded-md transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-600 text-center">
          <p className="text-sm text-gray-300">
            Committed to sustainable AI solutions for a greener future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;