'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { useUser } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts'
import { Loader2, Users, QrCode } from "lucide-react"
import {  ToastProvider, ToastViewport } from "@/components/ui/toast"
import { useToast } from "../../hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const campaignData = [
    { name: 'Jan', value: 1 },
    { name: 'Feb', value: 2 },
    { name: 'Mar', value: 3 },
    { name: 'Apr', value: 2 },
    { name: 'May', value: 3 },
    { name: 'Jun', value: 5 },
  ]
  
  const qrCodeData = [
    { name: 'Mon', value: 3 },
    { name: 'Tue', value: 5 },
    { name: 'Wed', value: 8 },
    { name: 'Thu', value: 7 },
    { name: 'Fri', value: 10 },
    { name: 'Sat', value: 12 },
    { name: 'Sun', value: 9 },
  ]
  
  export default function DashboardPage() {
    const router = useRouter()
    const { isLoaded, isSignedIn, user } = useUser()
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()
  
    useEffect(() => {
      if (isLoaded && !isSignedIn) {
        router.push('/sign-in')
      } else if (isLoaded && isSignedIn) {
        setLoading(false)
        toast({
          title: "Welcome back!",
          description: "Your dashboard is ready.",
        })
      }
    }, [isLoaded, isSignedIn, router, toast])
  
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      )
    }
  
    return (
      <ToastProvider>
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">Welcome to your Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground backdrop-blur-lg border-primary/10">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">User Profile</CardTitle>
                <Avatar>
                  <AvatarImage src={user?.imageUrl} alt={user?.username ?? ''} />
                  <AvatarFallback>{user?.username?.[0] ?? 'U'}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user?.username ?? 'User'}</div>
                <p className="text-xs text-muted-foreground">
                  {user?.primaryEmailAddress?.emailAddress}
                </p>
              </CardContent>
            </Card>
  
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-card text-card-foreground backdrop-blur-lg border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">+2 since last month</p>
                      <ResponsiveContainer width="100%" height={100}>
                        <LineChart data={campaignData}>
                          <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <RechartsTooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background p-2 rounded shadow">
                                    <p className="text-sm">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your active marketing campaigns</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
  
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-card text-card-foreground backdrop-blur-lg border-primary/10">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">QR Codes Generated</CardTitle>
                      <QrCode className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">+4 since last week</p>
                      <ResponsiveContainer width="100%" height={100}>
                        <LineChart data={qrCodeData}>
                          <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                          <XAxis dataKey="name" hide />
                          <YAxis hide />
                          <RechartsTooltip 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                return (
                                  <div className="bg-background p-2 rounded shadow">
                                    <p className="text-sm">{`${payload[0].payload.name}: ${payload[0].value}`}</p>
                                  </div>
                                )
                              }
                              return null
                            }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total QR codes generated for your campaigns</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
  
            <Card className="md:col-span-2 lg:col-span-3 bg-card text-card-foreground backdrop-blur-lg border-primary/10">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={[...Array(30)].map((_, i) => ({ day: i + 1, engagement: Math.floor(Math.random() * 100) }))}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="engagement" stroke="#3b82f6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
        <ToastViewport />
      </ToastProvider>
    )
  }
  