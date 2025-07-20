'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, Globe, Zap, LayoutTemplate, BarChart2, Rocket, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// Laser-focused on website services and brand amplification
const services = [
  { 
    id: "web-design", 
    label: "Website Design", 
    icon: LayoutTemplate,
    description: "High-converting websites that attract and retain customers",
    highlights: [
      "Mobile-first responsive design",
      "90+ PageSpeed scores guaranteed",
      "SEO-optimized architecture",
      "Conversion-focused UX"
    ],
    results: [
      "E-commerce site: 10% conversion increase",
      "Service business: 30% more leads"
    ],
    price: "From $1,500"
  },
  { 
    id: "brand-growth", 
    label: "Brand Amplification", 
    icon: Zap,
    description: "360° brand visibility across all digital channels",
    highlights: [
      "Social media dominance strategy",
      "New Logo Design",
      "Content syndication network",
      "Co-branding opportunities"
    ],
    results: [
      "CPG brand: 40% reach expansion",
      "B2B service: 3x lead quality"
    ],
    price: "From $2,500/mo"
  },
  { 
    id: "global-seo", 
    label: "Global SEO", 
    icon: Globe,
    description: "Dominate search results in your target markets",
    highlights: [
      "Multi-language optimization",
      "Local search domination",
      "Enterprise SEO architecture",
      "Competitor displacement"
    ],
    results: [
      "SaaS company: 20% organic traffic",
      "Brand: #1 rankings in 3 countries"
    ],
    price: "From $4,500/mo"
  },
  { 
    id: "performance", 
    label: "Performance Marketing", 
    icon: Rocket,
    description: "Data-driven campaigns that deliver measurable ROI",
    highlights: [
      "Meta/Google/TikTok advertising",
      "Retargeting automation",
      "Conversion rate optimization",
      "ROI tracking dashboard"
    ],
    results: [
      "DTC brand: 5.8x ROAS",
      "App: $0.23 cost per install"
    ],
    price: "From $2,500/mo + ad spend"
  }
]

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Website & Brand Growth Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We build high-performing websites and amplify brands for businesses scaling globally
        </p>
      </div>

      <Card className="shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
          <CardTitle className="text-3xl font-bold">Our Solutions</CardTitle>
          <CardDescription className="text-indigo-100">
            Tailored packages for established brands and fast-growing startups
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <ScrollArea className="w-full whitespace-nowrap border-b">
              <TabsList className="w-auto h-auto p-2 bg-white">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
                  >
                    <service.icon className="h-5 w-5" />
                    <span className="font-medium">{service.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {services.map((service) => (
              <TabsContent 
                key={service.id} 
                value={service.id} 
                className="p-8"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.label}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        What's Included
                      </h3>
                      <ul className="space-y-4">
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3 text-indigo-800">
                        Pricing
                      </h3>
                      <p className="text-2xl font-bold text-gray-900 mb-4">
                        {service.price}
                      </p>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 h-12 text-lg">
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                          Client Results
                      </h3>
                      <ul className="space-y-4">
                        {service.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-800 rounded-full mr-3 font-bold">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        Why Choose Us
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                          <span>Proven track record with 50+ brands</span>
                        </li>
                        <li className="flex items-start">
                          <BarChart2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                          <span>Data-driven approach with clear metrics</span>
                        </li>
                        <li className="flex items-start">
                          <Globe className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                          <span>Global expertise across 5 markets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}