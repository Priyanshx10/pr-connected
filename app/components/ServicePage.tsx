"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  QrCode,
  BarChart,
  Globe,
  Smartphone,
  Megaphone,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Image links for the carousel
const unsplashImages = [
  "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29kaW5nJTIwYXJ0fGVufDB8fDB8fHww",
];

// Service icons and details
const services = [
  {
    icon: QrCode,
    title: "QR Code Integration",
    description: "Seamlessly integrate QR codes into your marketing materials for instant engagement.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Get detailed insights into your campaign performance with our advanced analytics.",
  },
  {
    icon: Globe,
    title: "Digital PR Strategies",
    description: "Boost your online presence with our cutting-edge digital PR techniques.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimized Campaigns",
    description: "Create campaigns that are perfectly tailored for mobile users.",
  },
  {
    icon: Megaphone,
    title: "Brand Amplification",
    description: "Amplify your brand's voice across multiple channels for maximum impact.",
  },
  {
    icon: Target,
    title: "Targeted Outreach",
    description: "Reach your ideal audience with precision-targeted PR campaigns.",
  },
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);

  // Carousel effect for the background images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % unsplashImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % unsplashImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + unsplashImages.length) % unsplashImages.length);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Carousel Section */}
      <section className="relative h-96 overflow-hidden">
        {unsplashImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt={`Marketing image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>
        ))}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl mb-8">Innovative solutions to transform your brand</p>
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <service.icon className="w-12 h-12 text-teal-500" />
                <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
              </div>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
