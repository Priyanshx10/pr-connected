'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, BarChart, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import Unsplash images
const unsplashImages = [
  "https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // Example image for Tech Giant's QR Revolution
  "https://images.unsplash.com/photo-1725088819905-058e8dd6a6e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEFJfGVufDB8fDB8fHww",     // Example image for Retail Chain's In-Store Magic
  "https://images.unsplash.com/photo-1532178324009-6b6adeca1741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fEFJfGVufDB8fDB8fHww" // Example image for Non-Profit's Donation Surge
];

const caseStudies = [
  { 
    title: "Tech Giant's QR Revolution", 
    description: "How we helped a leading tech company increase engagement by 250% with QR-powered product packaging.", 
    image: unsplashImages[0],
    industry: "Technology",
    results: ["250% increase in engagement", "45% boost in product registrations", "2M+ QR scans in first month"],
    testimonial: "PR-Connect's QR strategy completely transformed how we interact with our customers. The results speak for themselves.",
    challenge: "The tech giant was struggling to connect their physical products with their digital ecosystem, resulting in low customer engagement and missed opportunities for data collection.",
    solution: "We implemented a comprehensive QR code strategy that seamlessly integrated their product packaging with their digital platforms. Each QR code led to a personalized digital experience based on the product and user data.",
    implementation: [
      "Designed visually appealing QR codes that blended with product packaging",
      "Created a robust backend system to handle millions of scans and data points",
      "Developed a series of engaging micro-sites tailored to each product line",
      "Implemented real-time analytics to track user engagement and behavior"
    ],
    longTermImpact: "The QR campaign not only boosted immediate engagement but also provided valuable data insights, allowing the company to refine their product offerings and marketing strategies. This led to a 20% increase in customer retention over the following year."
  },
  { 
    title: "Retail Chain's In-Store Magic", 
    description: "Our QR strategy transformed the in-store experience for a major retail chain, boosting sales by 30%.", 
    image: unsplashImages[1],
    industry: "Retail",
    results: ["30% increase in sales", "50% higher customer satisfaction", "20% increase in repeat visits"],
    testimonial: "The innovative QR campaign by PR-Connect brought our stores to life. Our customers love the interactive experience.",
    challenge: "The retail chain was facing declining foot traffic and struggling to compete with online retailers. They needed a way to enhance the in-store experience and bridge the gap between physical and digital shopping.",
    solution: "We created an immersive in-store QR experience that gamified shopping, provided instant product information, and offered personalized discounts.",
    implementation: [
      "Placed QR codes strategically throughout stores, on product displays, and even on price tags",
      "Developed a mobile app that integrated with the QR system for a seamless customer experience",
      "Implemented a points-based reward system for QR scans to encourage engagement",
      "Created virtual try-on experiences for clothing and cosmetics using AR technology"
    ],
    longTermImpact: "The QR strategy not only boosted immediate sales but also significantly increased customer loyalty. The chain saw a 40% increase in their loyalty program sign-ups and a 25% increase in average customer lifetime value within 18 months of implementation."
  },
  { 
    title: "Non-Profit's Donation Surge", 
    description: "We helped a non-profit organization increase donations by 180% through an innovative QR campaign.", 
    image: unsplashImages[2],
    industry: "Non-Profit",
    results: ["180% increase in donations", "300% growth in volunteer sign-ups", "1M+ social media impressions"],
    testimonial: "PR-Connect's QR campaign not only boosted our donations but also significantly increased our visibility and volunteer base.",
    challenge: "The non-profit was struggling to reach younger donors and volunteers. Their traditional fundraising methods were becoming less effective, and they needed a way to tell their story more engagingly.",
    solution: "We developed a city-wide QR scavenger hunt that educated participants about the non-profit's mission while encouraging donations and volunteer sign-ups.",
    implementation: [
      "Placed QR codes at key locations around the city, each revealing a part of the non-profit's story",
      "Created an interactive map and progress tracker for participants",
      "Integrated one-click donation and volunteer sign-up options at each QR checkpoint",
      "Leveraged social media sharing to amplify reach and engagement"
    ],
    longTermImpact: "The campaign's success extended beyond the initial donation surge. The non-profit saw a 70% increase in long-term recurring donations and a 150% increase in their social media following, providing a sustainable base for future campaigns."
  }
];

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0);

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        {/* Header */}
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          Case Studies
        </motion.h1>

        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          Explore how we've helped businesses achieve remarkable results through our innovative QR-powered PR strategies.
        </motion.p>

        {/* Case Study Carousel */}
        <div className="relative mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{caseStudies[currentStudy].title}</CardTitle>
                  <CardDescription>{caseStudies[currentStudy].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Image
                        src={caseStudies[currentStudy].image}
                        alt={caseStudies[currentStudy].title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <Badge className="mb-2">{caseStudies[currentStudy].industry}</Badge>
                      <h4 className="text-lg font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc pl-5 mb-4">
                        {caseStudies[currentStudy].results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                      <blockquote className="italic border-l-4 border-teal-500 pl-4">
                        "{caseStudies[currentStudy].testimonial}"
                      </blockquote>
                    </div>
                  </div>
                  <Tabs defaultValue="challenge" className="w-full">
                    <TabsList>
                      <TabsTrigger value="challenge">Challenge</TabsTrigger>
                      <TabsTrigger value="solution">Solution</TabsTrigger>
                      <TabsTrigger value="implementation">Implementation</TabsTrigger>
                      <TabsTrigger value="impact">Long-Term Impact</TabsTrigger>
                    </TabsList>
                    <TabsContent value="challenge">
                      <p>{caseStudies[currentStudy].challenge}</p>
                    </TabsContent>
                    <TabsContent value="solution">
                      <p>{caseStudies[currentStudy].solution}</p>
                    </TabsContent>
                    <TabsContent value="implementation">
                      <ul className="list-disc pl-5">
                        {caseStudies[currentStudy].implementation.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="impact">
                      <p>{caseStudies[currentStudy].longTermImpact}</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="justify-between">
                  <Button variant="outline" onClick={prevStudy}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button variant="outline" onClick={nextStudy}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Our Approach Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "Tailored Strategies", description: "We craft unique QR campaigns that align perfectly with your brand and objectives." },
              { icon: BarChart, title: "Data-Driven Decisions", description: "Our strategies are backed by robust analytics and real-time data insights." },
              { icon: Users, title: "User-Centric Design", description: "We prioritize user experience to ensure maximum engagement and conversion." },
              { icon: Zap, title: "Rapid Implementation", description: "Our agile approach allows for quick deployment and iterative improvements." }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <item.icon className="w-12 h-12 mx-auto text-teal-500 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { question: "How long does it typically take to see results from a QR campaign?", answer: "While results can vary, many of our clients see significant engagement within the first month of launching a campaign. Long-term benefits often become apparent within 3-6 months." },
              { question: "Can QR strategies work for any industry?", answer: "Yes! We've successfully implemented QR campaigns across various industries, from tech and retail to non-profits and healthcare. The key is in tailoring the strategy to your specific audience and goals." },
              { question: "How do you measure the success of a QR campaign?", answer: "We use a combination of metrics including scan rates, engagement time, conversion rates, and ROI. We also consider qualitative feedback and long-term impact on brand perception and customer loyalty." },
              { question: "What makes your QR strategies different from others?", answer: "Our approach goes beyond just generating QR codes. We create comprehensive, data-driven strategies that integrate seamlessly with your overall marketing and PR efforts, ensuring maximum impact and long-term value." }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center bg-teal-600 text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Revolutionize Your PR Strategy?
          </h2>
          <p className="mb-6 text-lg">
            Let's create innovative, QR-powered campaigns that will set your brand apart and drive unprecedented engagement.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}