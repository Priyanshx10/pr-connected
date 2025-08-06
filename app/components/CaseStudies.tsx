'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle, Users, Zap, Star, TrendingUp, Clock, Target } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// --- Hero images (Unsplash, with descriptive alt text) ---
const IMAGES = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Café/restaurant
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80', // SaaS/tech
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80', // Fitness/gym
];

const caseStudies = [
  { 
    title: "Café Chain Engagement Surge", 
    subtitle: "QR-powered menus and loyalty increased repeat visits by 40%",
    description: "A European café chain transformed their customer experience with dynamic QR menus and digital loyalty programs.", 
    image: IMAGES[0],
    industry: "Hospitality",
    duration: "8 weeks",
    results: [
      { metric: "40%", label: "increase in repeat visits" },
      { metric: "2.5x", label: "social media engagement" },
      { metric: "500%", label: "growth in loyalty sign-ups" }
    ],
    testimonial: "PR-Connect&apos;s QR menus turned our regulars into ambassadors. The results exceeded our expectations.",
    author: "Sarah Chen",
    role: "Marketing Director",
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
    subtitle: "QR-driven demos and sign-ups helped a SaaS startup triple inbound leads",
    description: "A B2B SaaS company leveraged QR technology to streamline their demo booking process and boost lead generation.", 
    image: IMAGES[1],
    industry: "SaaS",
    duration: "6 weeks",
    results: [
      { metric: "300%", label: "increase in inbound leads" },
      { metric: "50%", label: "faster demo bookings" },
      { metric: "75%", label: "higher webinar attendance" }
    ],
    testimonial: "The QR + landing page combo made our product accessible in the real world. We&apos;re closing more deals than ever.",
    author: "Marcus Rodriguez",
    role: "VP of Sales",
    challenge: "The SaaS company&apos;s product was complex, and demo booking was a multi-step process that deterred prospects.",
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
    subtitle: "A gym chain doubled new memberships and boosted class bookings",
    description: "A fitness studio chain implemented QR-based booking systems to streamline operations and increase member engagement.", 
    image: IMAGES[2],
    industry: "Fitness",
    duration: "10 weeks",
    results: [
      { metric: "2x", label: "new member sign-ups" },
      { metric: "90%", label: "class occupancy" },
      { metric: "75%", label: "fewer no-shows" }
    ],
    testimonial: "Our front desk used to be chaotic—now QR codes handle check-in, payments, and waitlists. It&apos;s a game-changer.",
    author: "Emma Thompson",
    role: "Studio Manager",
    challenge: "The gym&apos;s front desk was overloaded, online bookings were low, and no-shows depleted class revenue.",
    solution: "We launched QR-based class booking and waitlists, auto-send reminders and confirmation, and integrated Apple/Google Pay for instant payments.",
    implementation: [
      "QR kiosks at entry and in studios",
      "Automated SMS/email reminders",
      "Waitlist management with instant upgrades",
      "Contactless payment options"
    ],
    impact: "Staff could focus on members, not paperwork. New members said signing up was &apos;effortless,&apos; and no-shows became rare."
  }
]

const approachItems = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every decision is backed by real-time analytics and performance metrics."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "We prioritize user experience to ensure maximum adoption and engagement."
  },
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Launch in weeks, not months—keep your momentum and market advantage."
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Ongoing refinement based on performance data and user feedback."
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Success Stories That
              <span className="block text-blue-200">Drive Results</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              See how we&apos;ve transformed businesses across Europe with innovative digital solutions and measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                <Star className="w-4 h-4 mr-2" />
                Real Results
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                <TrendingUp className="w-4 h-4 mr-2" />
                Measurable Impact
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                <Clock className="w-4 h-4 mr-2" />
                Fast Implementation
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStudy}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl bg-white">
                  {/* Header with Image */}
                  <div className="relative h-64 sm:h-80 lg:h-96">
                    <Image
                      src={caseStudies[currentStudy].image}
                      alt={`Case study: ${caseStudies[currentStudy].title}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                      <Badge className="mb-3 bg-blue-600/90 text-white border-0">
                        {caseStudies[currentStudy].industry}
                      </Badge>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                        {caseStudies[currentStudy].title}
                      </h2>
                      <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
                        {caseStudies[currentStudy].subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Results */}
                      <div className="lg:col-span-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                          Key Results
                        </h3>
                        <div className="space-y-4">
                          {caseStudies[currentStudy].results.map((result, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
                            >
                              <div className="text-2xl font-bold text-blue-700">{result.metric}</div>
                              <div className="text-sm text-blue-600">{result.label}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
                          <div className="flex items-start mb-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                              {caseStudies[currentStudy].author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{caseStudies[currentStudy].author}</div>
                              <div className="text-sm text-gray-600">{caseStudies[currentStudy].role}</div>
                            </div>
                          </div>
                          <blockquote className="text-lg text-gray-700 italic">
                            &ldquo;{caseStudies[currentStudy].testimonial}&rdquo;
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    {/* Process Tabs */}
                    <div className="mt-8">
                      <Tabs defaultValue="challenge" className="w-full">
                        <ScrollArea className="w-full whitespace-nowrap border-b border-gray-200">
                          <TabsList className="w-auto h-auto px-2 bg-transparent border-0">
                            <TabsTrigger 
                              value="challenge" 
                              className="px-4 py-3 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                              Challenge
                            </TabsTrigger>
                            <TabsTrigger 
                              value="solution" 
                              className="px-4 py-3 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                              Solution
                            </TabsTrigger>
                            <TabsTrigger 
                              value="implementation" 
                              className="px-4 py-3 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                              Implementation
                            </TabsTrigger>
                            <TabsTrigger 
                              value="impact" 
                              className="px-4 py-3 text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                            >
                              Impact
                            </TabsTrigger>
                          </TabsList>
                        </ScrollArea>
                        
                        <TabsContent value="challenge" className="p-6 text-gray-700">
                          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                              <Target className="w-5 h-5 mr-2" />
                              The Challenge
                            </h4>
                            <p className="text-red-700">{caseStudies[currentStudy].challenge}</p>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="solution" className="p-6 text-gray-700">
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                              <CheckCircle className="w-5 h-5 mr-2" />
                              Our Solution
                            </h4>
                            <p className="text-blue-700">{caseStudies[currentStudy].solution}</p>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="implementation" className="p-6 text-gray-700">
                          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                              <Zap className="w-5 h-5 mr-2" />
                              Implementation Steps
                            </h4>
                            <ul className="space-y-3">
                              {caseStudies[currentStudy].implementation.map((step, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                    {i + 1}
                                  </div>
                                  <span className="text-green-700">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="impact" className="p-6 text-gray-700">
                          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                              <TrendingUp className="w-5 h-5 mr-2" />
                              The Impact
                            </h4>
                            <p className="text-purple-700">{caseStudies[currentStudy].impact}</p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>

                  {/* Navigation */}
                  <CardFooter className="flex justify-between px-6 py-4 bg-gray-50">
                    <Button
                      variant="outline"
                      onClick={prevStudy}
                      className="flex items-center hover:bg-blue-50 hover:border-blue-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>
                    <div className="flex items-center gap-2">
                      {caseStudies.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStudy(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentStudy ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      onClick={nextStudy}
                      className="flex items-center hover:bg-blue-50 hover:border-blue-300"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Our Approach Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine data-driven strategy with user-centric design to deliver results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all hover:-translate-y-2 border-0 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our process and approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly do you see results?",
                answer: "Most clients see measurable engagement within 2–4 weeks; larger strategic goals often mature in 3–6 months."
              },
              {
                question: "Can QR campaigns work offline?",
                answer: "Absolutely. Our best results often come from blending physical touchpoints with digital engagement."
              },
              {
                question: "Is QR technology secure?",
                answer: "We use enterprise-standard encryption, tracking, and analytics. No personal data is stored in the QR code itself."
              },
              {
                question: "How do you measure ROI?",
                answer: "We track scan rates, conversions, repeat visits, social shares, and direct revenue impact—all transparently reported."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s transform your business with innovative digital solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-50 font-semibold shadow-lg"
                asChild
              >
                <a href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold"
                asChild
              >
                <a href="/services">
                  View All Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
