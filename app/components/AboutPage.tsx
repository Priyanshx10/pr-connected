"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CEO from "../../public/images/CEO.jpg";
import COO from "../../public/images/COO.jpeg";
import VP from "../../public/images/VP.jpeg";
import { Users, Lightbulb, TrendingUp, Award } from "lucide-react";
import StatisticalLoader from "./Loader";

const teamMembers = [
  { name: "Priyansh Yadav", role: "CEO", image: CEO },
  { name: "Krapanshu Sharma", role: "Vice President", image: VP },
  { name: "Rohit Surawat", role: "Chief Operating Officer", image: COO },
];

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

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <StatisticalLoader />}</AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <motion.h1
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-center text-gray-800"
            >
              About PR-Connect
            </motion.h1>
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
            >
              Revolutionizing brand connections through innovative QR-powered
              strategies.
            </motion.p>

            {/* Features Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
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
          </motion.section>
        </div>
      )}
    </>
  );
}
