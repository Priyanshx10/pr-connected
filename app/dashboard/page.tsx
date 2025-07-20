'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts'
import { Loader2, Rocket, Users, QrCode, BarChart4, ArrowUpRight, ShieldCheck } from "lucide-react"
import { ToastProvider, ToastViewport } from "@/components/ui/toast"
import { useToast } from "../../hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

const performanceData = [
  { month: 'Jan', campaigns: 45, conversions: 1200, revenue: 42000 },
  { month: 'Feb', campaigns: 52, conversions: 1500, revenue: 48000 },
  { month: 'Mar', campaigns: 48, conversions: 1350, revenue: 45000 },
  { month: 'Apr', campaigns: 60, conversions: 1800, revenue: 54000 },
  { month: 'May', campaigns: 65, conversions: 2100, revenue: 63000 },
  { month: 'Jun', campaigns: 73, conversions: 2400, revenue: 72000 },
]

const channelData = [
  { name: 'Social Media', value: 45 },
  { name: 'Email', value: 25 },
  { name: 'Direct', value: 15 },
  { name: 'Referral', value: 10 },
  { name: 'Organic', value: 5 },
]

export default function DashboardPage() {
  const router = useRouter()
  const { isLoaded, isSignedIn, user } = useUser()
  const [loading, setLoading] = useState(true)
  const [accessGranted, setAccessGranted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoaded) return

    // Strict access control - only authorized users
    const authorizedEmails = [
      'priyanshyadav1012@gmail.com',
      'admin@pr-connect.com'
    ]

    if (!isSignedIn) {
      router.push('/sign-in')
    } else if (!authorizedEmails.includes(user?.primaryEmailAddress?.emailAddress || '')) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to view this dashboard.",
        variant: "destructive"
      })
      router.push('/')
    } else {
      setAccessGranted(true)
      setLoading(false)
      toast({
        title: "Welcome back!",
        description: "Your brand performance dashboard is ready.",
      })
    }
  }, [isLoaded, isSignedIn, router, toast, user])

  if (loading || !accessGranted) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <ToastProvider>
      <div className="container mx-auto py-8 px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Brand Amplification Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Real-time insights to power your marketing strategy
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-emerald-500 text-emerald-600">
              <ShieldCheck className="h-4 w-4 mr-1" />
              Verified Account
            </Badge>
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback className="bg-primary text-white">
                {user?.username?.[0]?.toUpperCase() || 'A'}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                    <Rocket className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">24</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      <span>12% from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Currently running brand amplification campaigns</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Audience Reach</CardTitle>
                    <Users className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">1.2M</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      <span>8% growth</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total unique users reached this quarter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                    <BarChart4 className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">4.8%</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      <span>1.2% improvement</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Average engagement across all channels</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">QR Scans</CardTitle>
                    <QrCode className="h-5 w-5 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">8,742</div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                      <span>23% increase</span>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total scans of your campaign QR codes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Performance Charts */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Last 6 months growth metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: 'none'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="#3b82f6" 
                    strokeWidth={2} 
                    activeDot={{ r: 6 }} 
                    name="Conversions"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#8b5cf6" 
                    strokeWidth={2} 
                    activeDot={{ r: 6 }} 
                    name="Revenue ($)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle>Channel Distribution</CardTitle>
              <CardDescription>Top performing marketing channels</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={channelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <RechartsTooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: 'none'
                    }}
                    formatter={(value) => [`${value}%`, 'Contribution']}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#10b981" 
                    radius={[4, 4, 0, 0]}
                    name="Contribution %"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}