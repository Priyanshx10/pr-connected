'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, BarChart, Users, Zap, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Using common image paths that would exist in a Next.js project
const defaultImages = [
  'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  // Common placeholder image name
  "/images/hero-background.jpg", // Typical hero image
  "/images/cta-background.jpg"   // Common CTA background
];

const caseStudies = [
  { 
    title: "Tech Company's Digital Transformation", 
    description: "How we amplified brand visibility and drove 250% engagement growth", 
    image: defaultImages[0],
    industry: "Technology",
    results: [
      "10% increase in digital engagement",
      "25% boost in lead generation",
      "2k+ new customer interactions"
    ],
    testimonial: "The PR-Connect team transformed our digital presence. Their innovative approach delivered measurable results that exceeded our expectations.",
    author: "Sarah Chen, CMO at TechCorp",
    challenge: "Struggling with low digital engagement and outdated marketing channels.",
    solution: "Implemented an integrated digital PR strategy with measurable KPIs.",
    implementation: [
      "Comprehensive brand audit and positioning",
      "Multi-channel digital campaign",
      "Data-driven content strategy",
      "Ongoing performance optimization"
    ],
    impact: "Established as market leader with 300% ROI on PR spend"
  },
  { 
    title: "Retail Brand Expansion", 
    description: "Omnichannel strategy that increased sales by 10%", 
    image: defaultImages[1],
    industry: "Retail",
    results: [
      "10% sales growth",
      "2x customer engagement",
      "16% increase in repeat purchases"
    ],
    testimonial: "Their strategic approach helped us dominate our market segment within 6 months.",
    author: "Michael Rodriguez, CEO"
  }
];

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0);

  const nextStudy = useCallback(() => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  }, []);

  const prevStudy = useCallback(() => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Brand Amplification Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl mx-auto mb-8"
          >
            See how we've helped brands achieve remarkable growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold">
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            Proven Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Clients, Measurable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data-driven approach delivers tangible business outcomes
          </p>
        </motion.div>

        {/* Case Study Carousel */}
        <div className="relative mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full max-w-5xl mx-auto overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={caseStudies[currentStudy].image}
                      alt={caseStudies[currentStudy].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{caseStudies[currentStudy].industry}</Badge>
                      <CardTitle className="text-2xl font-bold">{caseStudies[currentStudy].title}</CardTitle>
                      <CardDescription>{caseStudies[currentStudy].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Key Results
                        </h4>
                        <ul className="space-y-2">
                          {caseStudies[currentStudy].results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-2 bg-blue-500 rounded-full"></span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Tabs defaultValue="challenge" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="challenge">Challenge</TabsTrigger>
                          <TabsTrigger value="solution">Solution</TabsTrigger>
                          <TabsTrigger value="implementation">Approach</TabsTrigger>
                          <TabsTrigger value="impact">Impact</TabsTrigger>
                        </TabsList>
                        <TabsContent value="challenge" className="pt-4">
                          <p>{caseStudies[currentStudy].challenge}</p>
                        </TabsContent>
                        <TabsContent value="solution" className="pt-4">
                          <p>{caseStudies[currentStudy].solution}</p>
                        </TabsContent>
                        <TabsContent value="implementation" className="pt-4">
                          <ul className="space-y-3">
                            {caseStudies[currentStudy].implementation?.map((step, index) => (
                              <li key={index} className="flex">
                                <span className="flex-shrink-0 mt-1 mr-3">
                                  <ChevronRight className="w-4 h-4 text-blue-500" />
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="impact" className="pt-4">
                          <p>{caseStudies[currentStudy].impact}</p>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <Button variant="outline" onClick={prevStudy}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                      </Button>
                      <Button variant="outline" onClick={nextStudy}>
                        Next <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 sm:p-12 text-white text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Amplify Your Brand?</h2>
          <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a custom PR strategy for you.
          </p>
          <Button size="lg" variant="secondary" className="font-bold">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}