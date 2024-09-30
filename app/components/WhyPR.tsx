'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    title: "Expertise",
    description: "Our team consists of seasoned professionals with years of experience in public relations, ensuring your brand is in capable hands.",
    details: [
      "With a proven track record in various industries, we tailor our strategies to meet your specific needs."
    ]
  },
  {
    title: "Innovation",
    description: "We leverage the latest technologies and strategies to ensure your brand stands out in a crowded market.",
    details: [
      "From AI-driven analytics to cutting-edge social media campaigns, we keep you ahead of the curve."
    ]
  },
  {
    title: "Results-Driven",
    description: "Our strategies are focused on delivering measurable results for your business, ensuring a solid return on investment.",
    details: [
      "We use data analytics to refine our approach and maximize your campaign's effectiveness."
    ]
  },
  {
    title: "Custom Solutions",
    description: "We create personalized PR strategies that align with your business goals and target audience.",
    details: [
      "No two businesses are the same, and we ensure your strategy reflects your unique brand voice."
    ]
  },
  {
    title: "Comprehensive Support",
    description: "From media training to crisis management, we offer comprehensive support that covers all aspects of PR.",
    details: [
      "Our dedicated team is with you at every step, ensuring you are empowered and informed."
    ]
  },
  {
    title: "Network Access",
    description: "Gain access to our extensive network of media contacts and influencers to amplify your reach.",
    details: [
      "We help in getting your story heard by the right audience through our strategic connections."
    ]
  },
  {
    title: "Brand Storytelling",
    description: "We excel at crafting compelling stories that resonate with your audience and enhance your brand's image.",
    details: [
      "Our team knows how to convey your message in a way that captures your audience's attention and drives engagement."
    ]
  },
  {
    title: "Crisis Management",
    description: "We specialize in managing crises effectively to protect your brand's reputation.",
    details: [
      "Our proactive approach ensures that we are prepared for any situation that may arise."
    ]
  },
  {
    title: "Social Media Strategy",
    description: "We develop tailored social media strategies that engage and grow your audience.",
    details: [
      "Our innovative tactics ensure your brand remains relevant in the fast-paced digital landscape."
    ]
  },
];

export default function WhyPR() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Why Choose PR Connected?</h1>
          <p className="text-xl mb-8">Transforming your brand through strategic PR solutions</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title}
              className="mb-16 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex items-center justify-center bg-teal-500 text-white p-6">
                  <h2 className="text-xl font-semibold">{reason.title}</h2>
                </div>
                <div className="p-8">
                  <p className="mt-2 text-gray-600">{reason.description}</p>
                  <ul className="mt-4 space-y-2">
                    {reason.details.map((detail, detailIndex) => (
                      <motion.li 
                        key={detailIndex}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.1) }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-teal-500" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}