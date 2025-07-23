'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, BarChart, Users, Zap } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// --- Hero images (Unsplash, with descriptive alt text) ---
const IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Café/restaurant (new working Unsplash image)
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', // SaaS/tech
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80', // Fitness/gym
];

const caseStudies = [
  { 
    title: "Café Chain Engagement Surge", 
    description: "QR-powered menus and loyalty increased repeat visits by 40% for a European café chain.", 
    image: IMAGES[0],
    industry: "Hospitality",
    results: [
      "40% increase in repeat visits",
      "2.5x social media engagement",
      "500% growth in loyalty sign-ups"
    ],
    testimonial: "PR-Connect’s QR menus turned our regulars into ambassadors. The results exceeded our expectations.",
    challenge: "The café chain struggled with low customer retention, inconsistent social buzz, and no digital loyalty program.",
    solution: "We replaced printed menus with dynamic QR codes linking to mobile-friendly, multilingual menus, and launched a point-based digital loyalty program.",
    implementation: [
      "Custom QR code menus at each table",
      "Instant loyalty sign-up and rewards via QR scan",
      "Social sharing incentives for discounts",
      "Live menu updates (daily specials, seasonal items)"
    ],
    impact: "Customers loved the tech-forward experience, and staff onboarding was seamless. Social media mentions became a daily occurrence."
  },
  { 
    title: "SaaS Growth Engine", 
    description: "QR-driven demos and sign-ups helped a SaaS startup triple inbound leads in 8 weeks.", 
    image: IMAGES[1],
    industry: "SaaS",
    results: [
      "300% increase in inbound leads",
      "50% faster demo bookings",
      "75% higher webinar attendance"
    ],
    testimonial: "The QR + landing page combo made our product accessible in the real world. We’re closing more deals than ever.",
    challenge: "The SaaS company’s product was complex, and demo booking was a multi-step process that deterred prospects.",
    solution: "We distributed branded QR codes at trade shows, conferences, and in direct mail, linking instantly to personalized demo sessions with pre-filled contact info.",
    implementation: [
      "Easy scan-to-demo landing pages with calendar integration",
      "Chatbot support for pre-Q&A",
      "Retargeting ads for scanned users",
      "Post-event email/SMS nurture sequence"
    ],
    impact: "Lead quality soared, sales cycle shortened, and the team had real-time visibility into event ROI."
  },
  { 
    title: "Fitness Studio Member Growth", 
    description: "A gym chain doubled new memberships and boosted class bookings with QR-based sign-up and waitlists.", 
    image: IMAGES[2],
    industry: "Fitness",
    results: [
      "2x new member sign-ups",
      "90% class occupancy",
      "75% fewer no-shows"
    ],
    testimonial: "Our front desk used to be chaotic—now QR codes handle check-in, payments, and waitlists. It’s a game-changer.",
    challenge: "The gym’s front desk was overloaded, online bookings were low, and no-shows depleted class revenue.",
    solution: "We launched QR-based class booking and waitlists, auto-send reminders and confirmation, and integrated Apple/Google Pay for instant payments.",
    implementation: [
      "QR kiosks at entry and in studios",
      "Automated SMS/email reminders",
      "Waitlist management with instant upgrades",
      "Contactless payment options"
    ],
    impact: "Staff could focus on members, not paperwork. New members said signing up was “effortless,” and no-shows became rare."
  }
]

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0)

  const nextStudy = useCallback(() => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length)
  }, [])

  const prevStudy = useCallback(() => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Hero */}
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-slate-800"
        >
          Featured Case Studies
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl mb-6 md:mb-8 text-center text-slate-600 max-w-3xl mx-auto"
        >
          See how we’ve helped cafés, SaaS, gyms, and nonprofits connect, engage, and grow with QR-powered campaigns.
        </motion.p>

        {/* Carousel (Card + Navigation) */}
        <div className="relative mb-12 sm:mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full max-w-4xl mx-auto overflow-hidden border-slate-200 shadow-sm hover:shadow-md">
                <CardHeader className="px-6 pt-6 pb-4">
                  <Badge className="mb-2 w-fit capitalize">{caseStudies[currentStudy].industry}</Badge>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">{caseStudies[currentStudy].title}</CardTitle>
                  <CardDescription>{caseStudies[currentStudy].description}</CardDescription>
                </CardHeader>
                <CardContent className="px-0 pt-0 pb-6">
                  <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 p-6 bg-white">
                    {/* Image — Replace with Next.js Image */}
                    <div className="md:w-1/2 lg:w-2/5">
                      <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                        <Image
                          src={caseStudies[currentStudy].image}
                          alt={`Case study: ${caseStudies[currentStudy].title}`}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 lg:w-3/5 space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Results</h4>
                        <ul className="space-y-2 pl-5">
                          {caseStudies[currentStudy].results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Testimonial</h4>
                        <blockquote className="text-slate-700 pl-3 border-l-4 border-blue-500">
                          “{caseStudies[currentStudy].testimonial}”
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <Tabs defaultValue="challenge" className="w-full px-6">
                    <ScrollArea className="w-full whitespace-nowrap border-b">
                      <TabsList className="w-auto h-auto px-2">
                        <TabsTrigger value="challenge" className="px-3 py-2 text-sm font-medium">
                          Challenge
                        </TabsTrigger>
                        <TabsTrigger value="solution" className="px-3 py-2 text-sm font-medium">
                          Solution
                        </TabsTrigger>
                        <TabsTrigger value="implementation" className="px-3 py-2 text-sm font-medium">
                          Implementation
                        </TabsTrigger>
                        <TabsTrigger value="impact" className="px-3 py-2 text-sm font-medium">
                          Impact
                        </TabsTrigger>
                      </TabsList>
                    </ScrollArea>
                    <TabsContent value="challenge" className="p-6 text-slate-700">
                      <p>{caseStudies[currentStudy].challenge}</p>
                    </TabsContent>
                    <TabsContent value="solution" className="p-6 text-slate-700">
                      <p>{caseStudies[currentStudy].solution}</p>
                    </TabsContent>
                    <TabsContent value="implementation" className="p-6 text-slate-700">
                      <ul className="space-y-2 pl-5 list-disc">
                        {caseStudies[currentStudy].implementation.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="impact" className="p-6 text-slate-700">
                      <p>{caseStudies[currentStudy].impact}</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="justify-between px-6 py-4">
                  <Button
                    variant="outline"
                    onClick={prevStudy}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={nextStudy}
                    className="flex items-center"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Our Approach */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-800">Why We Succeed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Tailored Strategies",
                description: "We fit QR campaigns to your business, not the other way around."
              },
              {
                icon: BarChart,
                title: "Data-Driven",
                description: "Real-time analytics inform every decision and refinement."
              },
              {
                icon: Users,
                title: "User-First",
                description: "Smooth, intuitive experiences mean higher adoption and results."
              },
              {
                icon: Zap,
                title: "Fast Execution",
                description: "Launch in days, not weeks—keep your momentum."
              }
            ].map((item, i) => (
              <Card key={i} className="h-full text-center bg-white">
                <CardHeader>
                  <item.icon className="w-10 h-10 mx-auto mb-3 text-blue-600" />
                  <CardTitle className="text-lg sm:text-xl font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-slate-800">Frequently Asked</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                question: "How quickly do you see results?",
                answer: "Most clients see measurable engagement within 2–4 weeks; larger strategic goals often mature in 3–6 months."
              },
              {
                question: "Can QR campaigns work offline (e.g., menus, posters)?",
                answer: "Absolutely. Our best results often come from blending physical touchpoints with digital engagement."
              },
              {
                question: "Is QR tech secure?",
                answer: "We use enterprise-standard encryption, tracking, and analytics. No personal data is stored in the QR code itself."
              },
              {
                question: "How do you measure ROI?",
                answer: "We track scan rates, conversions, repeat visits, social shares, and direct revenue impact—all transparently reported."
              }
            ].map((item, i) => (
              <Card key={i} className="border border-slate-200 bg-white">
                <CardHeader className="px-6 py-4">
                  <CardTitle className="text-base sm:text-lg font-medium">{item.question}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <p className="text-sm sm:text-base text-slate-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center bg-blue-600 text-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to launch your QR-powered campaign?</h2>
          <p className="mb-6 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Let’s create a solution tailored to your café, gym, SaaS, or startup.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-50 font-semibold"
            asChild
          >
            <a href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
