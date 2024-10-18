'use client'

import { useState } from 'react'
import { CheckCircle2, ArrowRight, QrCode, BarChart2, Megaphone, Smartphone, Zap, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const tabsData = [
  { id: "qr-code", label: "QR Code Integration", icon: QrCode, 
    description: "Seamlessly integrate QR codes into your marketing materials for instant engagement.",
    features: [
      "Custom QR code design that aligns with your brand",
      "Dynamic QR codes for real-time content updates",
      "Analytics integration for tracking scan rates and user behavior",
      "Multi-channel campaign integration (print, digital, outdoor)"
    ],
    caseStudy: "Increased engagement by 250% for a retail client"
  },
  { id: "analytics", label: "Analytics & Reporting", icon: BarChart2,
    description: "Gain deep insights into your marketing performance with comprehensive analytics.",
    features: [
      "Real-time dashboard with key performance indicators",
      "Custom report generation for stakeholders",
      "Advanced data visualization tools",
      "Integration with major analytics platforms"
    ],
    caseStudy: "Improved ROI by 180% for an e-commerce brand"
  },
  { id: "digital-pr", label: "Digital PR Strategies", icon: Megaphone,
    description: "Boost your online presence and reputation with targeted digital PR campaigns.",
    features: [
      "Influencer partnership management",
      "Press release distribution and tracking",
      "Social media crisis management",
      "Online reputation monitoring and improvement"
    ],
    caseStudy: "Achieved 500% increase in positive brand mentions for a tech startup"
  },
  { id: "mobile", label: "Mobile-Optimized Campaigns", icon: Smartphone,
    description: "Create engaging mobile-first marketing campaigns that resonate with on-the-go audiences.",
    features: [
      "Responsive design for all mobile devices",
      "App-based marketing integration",
      "SMS and push notification campaigns",
      "Location-based targeting and geofencing"
    ],
    caseStudy: "Drove 300% increase in mobile conversions for a travel app"
  },
  { id: "brand", label: "Brand Amplification", icon: Zap,
    description: "Elevate your brand presence and reach new heights with strategic amplification tactics.",
    features: [
      "Cross-platform brand consistency",
      "User-generated content campaigns",
      "Brand storytelling and narrative development",
      "Partnerships and co-branding opportunities"
    ],
    caseStudy: "Expanded brand reach by 400% for a CPG company"
  },
  { id: "outreach", label: "Targeted Outreach", icon: Target,
    description: "Connect with your ideal audience through precision-targeted outreach campaigns.",
    features: [
      "Audience segmentation and persona development",
      "Multi-channel outreach automation",
      "Personalized content delivery",
      "A/B testing for outreach optimization"
    ],
    caseStudy: "Increased qualified leads by 200% for a B2B SaaS company"
  }
]

export default function Component() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id)

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Marketing Dashboard</CardTitle>
        <CardDescription>Explore our comprehensive marketing solutions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <TabsList className="w-full justify-start">
              {tabsData.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>
          {tabsData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">{tab.label}</h2>
                <p className="text-muted-foreground">{tab.description}</p>
                <h3 className="text-xl font-semibold">Key Features:</h3>
                <ul className="space-y-3">
                  {tab.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle className="text-lg">Case Study Highlight:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="italic">{tab.caseStudy}</p>
                  </CardContent>
                </Card>
                <Button className="w-full sm:w-auto">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}