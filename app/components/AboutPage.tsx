"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CEO from "../../public/images/CEO.jpg";
import COO from "../../public/images/COO.jpeg";
import VP from "../../public/images/VP.jpeg";
import { Users, Lightbulb, TrendingUp, Award, Star } from "lucide-react"; // Added Star icon for milestones
import StatisticalLoader from "./Loader";

// Team members data
const teamMembers = [
  { name: "Priyansh Yadav", role: "CEO", image: CEO },
  { name: "Krapanshu Sharma", role: "Vice President", image: VP },
  { name: "Rohit Surawat", role: "Chief Operating Officer", image: COO },
];

// Features data
const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Years of experience in PR, marketing, and technology.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "Cutting-edge QR solutions for modern PR.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Driving unprecedented brand engagement and growth.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Award-winning campaigns setting new industry standards.",
  },
];

// Milestones data for the journey section
const milestones = [
  { year: "2015", event: "Company Founded", icon: Star },
  { year: "2018", event: "First Major Campaign", icon: Star },
  { year: "2020", event: "Global Expansion", icon: Star },
  { year: "2023", event: "100+ Successful Campaigns", icon: Star },
];

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>{isLoading && <StatisticalLoader />}</AnimatePresence>

      {/* Main content */}
      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            {/* Animated Hero Section */}
            <motion.div
              className="flex flex-col items-center justify-center min-h-[60vh] space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl font-bold text-gray-800"
              >
                About PR-Connect
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 text-center max-w-3xl"
              >
                Revolutionizing brand connections through innovative QR-powered
                strategies and cutting-edge marketing solutions.
              </motion.p>

              {/* Add a moving SVG or text-based animation */}
              <motion.div
                className="flex space-x-3 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="p-2 bg-teal-500 rounded-full text-white"
                >
                  🚀
                </motion.div>
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="p-2 bg-teal-500 rounded-full text-white"
                >
                  🔥
                </motion.div>
                <motion.div
                  animate={{ x: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="p-2 bg-teal-500 rounded-full text-white"
                >
                  🌟
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                >
                  <item.icon className="w-10 h-10 text-teal-500 mb-3" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Our Journey Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Our Journey
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200" />
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`flex items-center mb-8 ${
                      index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : ""}`}>
                      <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">{milestone.year}</h3>
                        <p>{milestone.event}</p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Meet Our Leadership Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={member.image}
                      alt={`Image of ${member.name}`}
                      width={300}
                      height={300}
                      className="w-full h-56 object-cover"
                      priority
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-semibold mb-1 text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  className="p-6 bg-gray-50 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Our services span across multiple countries, establishing a global footprint.
                  </p>
                </motion.div>
                <motion.div
                  className="p-6 bg-gray-50 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">
                    We have received numerous awards and accolades for our innovative campaigns.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="flex flex-col items-center mt-12">
              <motion.a
                href="/contact"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-md shadow-lg hover:bg-teal-600 transition-all"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.section>
        </div>
      )}
    </>
  );
}
