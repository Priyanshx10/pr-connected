'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, Globe, Zap, LayoutTemplate, Rocket, TrendingUp, BarChart2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

// --- Custom colors for ShadCN ---
// Update your tailwind.config.js to include this palette:
// indigo: {
//   50: '#f0f5ff',
//   100: '#e0eaff',
//   200: '#c7d4ff',
//   300: '#a5b4fc',
//   400: '#818cf8',
//   500: '#6366f1',
//   600: '#4f46e5',
//   700: '#4338ca',
//   800: '#3730a3',
//   900: '#312e81',
// },
// gray: {
//   50: '#f9fafb',
//   100: '#f3f4f6',
//   200: '#e5e7eb',
//   300: '#d1d5db',
//   400: '#9ca3af',
//   500: '#6b7280',
//   600: '#4b5563',
//   700: '#374151',
//   800: '#1f2937',
//   900: '#111827',
// }

// --- Service Data (No fluff, just what matters to clients) ---
const services = [
  {
    id: "web-design",
    label: "Website Design",
    icon: LayoutTemplate,
    description: "Fast, beautiful websites that attract and retain customers—mobile-first, SEO-optimized, and built for your business.",
    highlights: [
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Conversion-focused UX",
      "Launch in 7–14 days"
    ],
    results: [
      "E-commerce site: 10% increase in conversions",
      "Local business: 30% more leads"
    ],
    price: "From $1,500"
  },
  {
    id: "brand-growth",
    label: "Brand Amplification",
    icon: Zap,
    description: "Logos, colors, and style guides that make your business look professional and memorable.",
    highlights: [
      "Custom logo & visual identity",
      "Brand guidelines",
      "Social media assets",
      "Print & digital ready"
    ],
    results: [
      "Café chain: 40% brand recall increase",
      "Startup: 3x investor interest"
    ],
    price: "From $2,500"
  },
  {
    id: "global-seo",
    label: "Local SEO",
    icon: Globe,
    description: "Get found by customers searching for businesses like yours—in your city and beyond.",
    highlights: [
      "Google My Business setup",
      "Local citations & directories",
      "Review management",
      "Multilingual support"
    ],
    results: [
      "Restaurant: #1 in local searches",
      "Gym: 20% more walk-ins"
    ],
    price: "From $1,000"
  },
  {
    id: "performance",
    label: "Ongoing Growth",
    icon: Rocket,
    description: "Monthly support, updates, and digital marketing—so your business keeps growing online.",
    highlights: [
      "Website hosting & security",
      "Content updates",
      "Basic SEO & analytics",
      "Monthly reports"
    ],
    results: [
      "SaaS company: 5.8x ROI",
      "Retailer: $0.31 cost per lead"
    ],
    price: "From $99/month"
  }
]

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Hero: Direct, minimal, confident */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Websites & Branding for Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Modern websites and branding for cafés, restaurants, gyms, SaaS, and startups across Europe.
        </p>
      </div>

      {/* Card: Tabbed services */}
      <Card className="shadow-lg rounded-xl border border-gray-200 bg-white overflow-hidden">
        <CardHeader className="bg-indigo-600 text-white p-8">
          <CardTitle className="text-2xl md:text-3xl font-semibold">Our Services</CardTitle>
          <CardDescription className="text-indigo-100">
            Tailored solutions for local businesses and startups—launch, grow, and dominate.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <ScrollArea className="w-full whitespace-nowrap border-b">
              <TabsList className="h-auto px-2 pt-1 pb-2 md:px-6 bg-white">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800 group transition-all px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center gap-2"
                  >
                    <service.icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-medium text-sm md:text-base">{service.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="p-6 md:p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left: Description & Highlights */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <service.icon className="w-6 h-6 text-indigo-600" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        {service.label}
                      </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        What’s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA: Clear, high-contrast, action-oriented */}
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-indigo-800">
                        Pricing
                      </h3>
                      <p className="text-2xl font-bold text-gray-900 mb-4">
                        {service.price}
                      </p>
                      <Button
                        size="lg"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Right: Results & Trust Signals */}
                  <div>
                    {/* Client Results */}
                    <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        Client Results
                      </h3>
                      <ul className="space-y-3">
                        {service.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-7 h-7 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-3 font-medium flex-shrink-0">
                              {index + 1}
                            </div>
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Trust Signals */}
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg border border-indigo-100">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        Why Choose Us
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <TrendingUp className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">50+ European brands launched</span>
                        </li>
                        <li className="flex items-start">
                          <BarChart2 className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Data-driven, measurable impact</span>
                        </li>
                        <li className="flex items-start">
                          <Globe className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Multilingual & GDPR-compliant</span>
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
