/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Team from '../public/images/team.jpg'
import WhyPRConnected from './components/WhyPR'
import AboutPage from './about/page'
import ServicePage from './services/page'
import { SignInButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const unsplashITImages = [
  'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1484136199491-6603c473c88b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661765192121-f398fd1e8fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573496130103-a442a3754d0e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1573165759995-5865a394a1aa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState(unsplashITImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  useEffect(() => {
    // Refresh images when the component mounts
    setImages(unsplashITImages.map(url => `${url}&t=${Date.now()}`));
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={img} alt={`IT Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Transform Your Brand with PR-Connect
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Innovative Marketing Solutions & QR Code Integration for the Digital Age
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/contact"
            className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300"
          >
            Get Started
          </Link>
          <button className="bg-white text-teal-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            <SignInButton />
          </button>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-teal-600" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRight className="w-6 h-6 text-teal-600" />
      </button>
    </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image src={Team} alt="PR-Connect Team" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">Welcome to PR-Connect</h2>
              <p className="text-gray-600 mb-6">
                At PR-Connect, we specialize in enhancing your online presence, automating your marketing with QR codes, and creating compelling content that resonates with your audience. Our unique blend of innovative strategies and cutting-edge technology helps your brand thrive in the digital landscape.
              </p>
              <Link href="/about" className="text-teal-600 font-semibold hover:text-teal-800">
                Learn More About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AboutPage/>
      <ServicePage/>
      <WhyPRConnected />

      {/* CTA Section */}
      <section className="bg-teal-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your PR Strategy?</h2>
          <p className="text-xl mb-8 text-teal-100">Let&apos;s create a customized QR-powered campaign for your brand.</p>
          <Link href="/contact" className="bg-white text-teal-500 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 inline-flex items-center">
            Contact Us
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}