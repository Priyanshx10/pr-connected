"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CEO from "../../public/images/CEO.jpg";
import COO from "../../public/images/COO.jpeg";
import VP from "../../public/images/VP.jpeg";
import { Users, Lightbulb, TrendingUp, Award, Star } from "lucide-react";
import StatisticalLoader from "./Loader";

// Local metadata for this page
const pageMetadata = {
  title: "About PR-Connect | Award-Winning Marketing Agency",
  description: "Meet the team behind PR-Connect's innovative QR-powered marketing solutions serving 50+ brands globally since 2015.",
};

// Team members data with SEO-optimized properties
const teamMembers = [
  { 
    name: "Priyansh Yadav", 
    role: "CEO & Founder", 
    image: CEO,
    alt: "Priyansh Yadav, Founder and CEO of PR-Connect",
    bio: "Full Stack Developer with 4+ years experience growing brands internationally",
    linkedin: "#"
  },
  { 
    name: "Krapanshu Sharma", 
    role: "Vice President", 
    image: VP,
    alt: "Krapanshu Sharma, VP of Marketing at PR-Connect", 
    bio: "Cloud Engineer with 2+ years experience growing brands internationally",
    linkedin: "#"
  },
  { 
    name: "Rohit Surawat", 
    role: "Chief Operating Officer", 
    image: COO,
    alt: "Rohit Surawat, COO of PR-Connect",
    bio: "Operations expert scaling marketing technologies",
    linkedin: "#"
  },
];

// Feature cards with schema.org compatibility
const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "5+ combined years in PR, marketing and martech",
    stat: "87% client retention rate",
    schema: "https://schema.org/OrganizationRole"
  },
  {
    icon: Lightbulb,
    title: "Innovative Tech",
    description: "Patented QR solutions with 89% engagement rate",
    stat: "12 technology awards",
    schema: "https://schema.org/Service"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 1.2x ROI for clients in 2023",
    stat: "50+ case studies",
    schema: "https://schema.org/Review"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Recognized by Forbes, TechCrunch & AdWeek",
    stat: "5 industry awards",
    schema: "https://schema.org/Award"
  },
];

// Company milestones
const milestones = [
  { 
    year: "2022", 
    event: "Founded in India", 
    icon: Star,
    achievement: "First client: Tech startup",
    highlight: true
  },
  { 
    year: "2023", 
    event: "Launched QR Platform", 
    icon: Star,
    achievement: "100+ campaigns managed"
  },
  { 
    year: "2024", 
    event: "EU Market Expansion", 
    icon: Star,
    achievement: "Achieved 85% ROI for 10+ clients",
    highlight: true
  },
  { 
    year: "2025", 
    event: "Global Recognition", 
    icon: Star,
    achievement: "50+ brands worldwide"
  },
];

// Schema.org structured data
const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PR-Connect",
  "description": pageMetadata.description,
  "foundingDate": "2022",
  "founders": teamMembers.filter(m => m.role.includes("Founder")).map(f => ({
    "@type": "Person",
    "name": f.name,
    "jobTitle": f.role
  })),
  "numberOfEmployees": "50-100",
  "awards": "12 marketing technology awards",
  "url": "https://pr-connect.com"
};

export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <StatisticalLoader 
            aria-label="Loading PR-Connect company information"
            role="status"
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          {/* Structured data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
          />

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
                className="text-4xl sm:text-5xl font-bold text-gray-800"
              >
                Transforming Brands Through <span className="text-blue-600">Innovative PR</span>
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-3xl"
              >
                Since 2022, we've helped 50+ companies amplify their presence across 5+ countries 
                using our proprietary QR-powered marketing solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex space-x-3 mt-6"
              >
                {["🚀", "🔥", "🌟"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      delay: i * 0.3
                    }}
                    className="p-3 bg-blue-500 rounded-full text-white shadow-md"
                  >
                    {emoji}
                  </motion.div>
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
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  itemScope
                  itemType={item.schema}
                >
                  <item.icon 
                    className="w-10 h-10 text-blue-500 mb-4" 
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800" itemProp="name">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3" itemProp="description">
                    {item.description}
                  </p>
                  <p className="text-sm font-medium text-blue-600">
                    {item.stat}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Company Timeline */}
            <section aria-labelledby="timeline-heading" className="mb-16">
              <h2 id="timeline-heading" className="text-3xl font-bold mb-12 text-center text-gray-800">
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
                          <span className={`font-bold ${milestone.highlight ? "text-blue-600" : "text-gray-500"}`}>
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{milestone.event}</h3>
                        <p className="text-gray-600 text-sm">{milestone.achievement}</p>
                      </div>
                    </div>
                    <div className="hidden sm:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full items-center justify-center shadow-md">
                      <milestone.icon className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Leadership Team */}
            <section aria-labelledby="team-heading" className="mb-16">
              <h2 id="team-heading" className="text-3xl font-bold mb-12 text-center text-gray-800">
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
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 0} // Only prioritize CEO image
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1" itemProp="name">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 mb-2" itemProp="jobTitle">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4" itemProp="description">
                        {member.bio}
                      </p>
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
              <h2 id="achievements-heading" className="text-3xl font-bold mb-12 text-center text-gray-800">
                By The Numbers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Global Clients", color: "from-blue-500 to-blue-700" },
                  { value: "5", label: "Countries Served", color: "from-blue-500 to-blue-700" },
                  { value: "1.2x", label: "Average ROI", color: "from-purple-500 to-purple-700" },
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
              className="text-center py-12"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Amplify Your Brand?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Discover how our QR-powered solutions can transform your marketing strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all"
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="/case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all"
                >
                  View Case Studies
                </motion.a>
              </div>
            </motion.section>
          </motion.section>
        </div>
      )}
    </>
  );
}