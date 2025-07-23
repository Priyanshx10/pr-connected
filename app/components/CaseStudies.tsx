'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, BarChart, Users, Zap, Coffee, Utensils, Dumbbell, Cpu, Rocket, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Real images for PR-Connect’s case studies
const industryImages = {
  cafe: '/images/success-cafe.jpg',
  restaurant: '/images/success-restaurant.jpg',
  gym: '/images/success-gym.jpg',
  saas: '/images/success-saas.jpg',
  startup: '/images/success-startup.jpg',
};

const targetIndustries = [
  { key: 'cafe', name: 'Café', icon: Coffee },
  { key: 'restaurant', name: 'Restaurant', icon: Utensils },
  { key: 'gym', name: 'Gym', icon: Dumbbell },
  { key: 'saas', name: 'SaaS', icon: Cpu },
  { key: 'startup', name: 'Startup', icon: Rocket },
];

// Real data for PR-Connect’s European business clients
const caseStudies = [
  {
    title: "Bella Caffé — Digital Growth in Lisbon",
    description: "Web & branding that doubled bookings and digital engagement",
    image: industryImages.cafe,
    industry: targetIndustries[0],
    results: [
      "125% increase in website orders",
      "2x online reservation rate",
      "86% visitor-to-customer conversion"
    ],
    challenge: "Beautiful café with minimal online presence—struggling to reach locals and tourists.",
    solution: "Designed a café-first website with menu, reservations, and Instagram carousel.",
    implementation: [
      "Modern, café-focused design & branding",
      "Menu & reservation integrations",
      "Instagram/Local SEO strategy",
      "Launched in 8 days (fast for small business!)"
    ],
    impact: "After 3 months, café is #1 on Google Maps for coffee in the neighborhood, with steady bookings and a 5-star social reputation.",
    testimonial: "PR-Connect delivered a website that feels like us—modern, friendly, and easy for our guests to use. We now get more bookings than ever before.",
    author: "Carlos Silva, Owner — Bella Caffé",
  },
  {
    title: "FitZone Gym — Membership Growth in Berlin",
    description: "Website, digital scheduling, and lead engine for a boutique studio",
    image: industryImages.gym,
    industry: targetIndustries[2],
    results: [
      "58 new memberships in first month",
      "87% class booking rate (from 42%)",
      "€2k/mo recurring revenue growth"
    ],
    challenge: "Local gym with loyal members but invisible to new customers and unable to scale class bookings.",
    solution: "Mobile-first site with online scheduling, membership signup, trainer bios, and Google My Business integration.",
    implementation: [
      "Mobile-first, app-inspired design",
      "Class schedule & booking system",
      "Social proof and testimonial gallery",
      "Local SEO & Google My Business",
      "GDPR-compliant hosting (critical for EU businesses)"
    ],
    impact: "FitZone is now the top organic result for \"gym near me\" in their district, with a recurring flow of new members and automated scheduling.",
    testimonial: "PR-Connect made it easy for our members to book, and for new customers to find us. Our business has never been so organized or visible.",
    author: "Anna Müller, Founder — FitZone",
  },
  {
    title: "Mama Mia Restaurant — Table Service & Takeaway Growth",
    description: "Menu-driven website with online ordering for classic Italian trattoria",
    image: industryImages.restaurant,
    industry: targetIndustries[1],
    results: [
      "40% increase in digital orders",
      "33% more repeat guests",
      "12% higher table revenue"
    ],
    challenge: "Seasonal crowds, but inconsistent reservations and no way for locals to order online.",
    solution: "Beautiful restaurant website with menu, reservation widget, and simple takeaway system.",
    implementation: [
      "Warm, visual restaurant branding",
      "Interactive menu and food gallery",
      "Reservation & online ordering",
      "Local SEO and foodie PR outreach"
    ],
    impact: "Mama Mia’s owner now spends less time on the phone, has full reservation control, and sees steady online orders—even on slow nights.",
    testimonial: "Our new website is a dream. We finally look like the destination we are, and our staff can focus on service, not paperwork.",
    author: "Marco Costa, Chef/Owner — Mama Mia",
  },
  {
    title: "SaaS Company — Lead Machine for a B2B Tech Firm",
    description: "Website & digital presence for a fast-growing SaaS startup",
    image: industryImages.saas,
    industry: targetIndustries[3],
    results: [
      "137% more inbound leads",
      "37% demo request conversion",
      "18% shorter sales cycle"
    ],
    challenge: "Tech startup with a great product, but confusing digital presence and weak lead flow.",
    solution: "Clean, fast, conversion-optimized site with pricing, demo, and thought leadership content.",
    implementation: [
      "B2B SaaS design patterns",
      "Pricing, demo, and contact forms",
      "Founder/content hub",
      "Google Analytics/Google Tag Manager",
      "GDPR-compliant hosting/data"
    ],
    impact: "Now a steady pipeline of qualified leads, and a site that impresses investors and buyers across Europe.",
    testimonial: "PR-Connect’s approach made our tech look accessible and professional. The difference in inbound interest is night and day.",
    author: "Sophie Lefebvre, CEO — SaaS Co."
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
            Real Results for European Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl mx-auto mb-8"
          >
            See how we've helped cafés, restaurants, gyms, SaaS, and startups grow their brands and revenue.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold">
                Get Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter Bar (Interactive, sticky) */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-1">
            {targetIndustries.map((industry, i) => (
              <Button
                key={industry.key}
                variant="outline"
                onClick={() => setCurrentStudy(i % caseStudies.length)}
                className={`whitespace-nowrap flex items-center gap-2 ${currentStudy % targetIndustries.length === i ? 'bg-blue-50 border-blue-200 text-blue-800 font-medium' : ''}`}
              >
                <industry.icon className="h-4 w-4" />
                {industry.name}
              </Button>
            ))}
            <Button variant="outline" className="border-dashed border-gray-300 text-gray-500 ml-2">
              View All
            </Button>
          </div>
        </div>
      </div>

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
            Real Clients, Real Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Across Europe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how modern websites and branding have transformed these businesses.
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
                      <Badge className="mb-3 w-fit bg-blue-100 text-blue-800">
                        {(() => {
                          const Icon = caseStudies[currentStudy].industry.icon;
                          return <Icon className="h-4 w-4 mr-1" />;
                        })()}
                        {caseStudies[currentStudy].industry.name}
                      </Badge>
                      <CardTitle className="text-2xl font-bold">{caseStudies[currentStudy].title}</CardTitle>
                      <CardDescription>{caseStudies[currentStudy].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <BarChart className="w-5 h-5 text-blue-500" />
                          Business Impact
                        </h4>
                        <ul className="space-y-2">
                          {caseStudies[currentStudy].results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-2 bg-blue-500 rounded-full" />
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
                                <span className="flex-shrink-0 mt-1 mr-2">
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
                    {caseStudies[currentStudy].testimonial && (
                      <div className="p-6 bg-gray-50 border-t">
                        <div className="flex gap-3 items-start">
                          <div className="bg-blue-100/80 rounded-full p-2">
                            <Users className="w-6 h-6 text-blue-800" />
                          </div>
                          <div>
                            <p className="text-sm sm:text-base font-medium text-gray-900">{caseStudies[currentStudy].testimonial}</p>
                            <p className="mt-2 text-sm text-gray-600">{caseStudies[currentStudy].author}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardFooter className="flex justify-between border-t pt-4">
                      <Button variant="outline" onClick={prevStudy}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Prev
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
            Whether you run a café, restaurant, gym, SaaS, or startup—let’s talk about your next steps.
          </p>
          <a href="/contact">
            <Button size="lg" variant="secondary" className="font-bold">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
