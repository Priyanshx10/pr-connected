'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TEAM_IMAGE from '@/public/images/team.jpg'
import React from 'react'

 const Introduction = () => {
    return (
        <div>
    {/* Introduction */}
    <section className="py-16 sm:py-20 bg-blue-50/20">
    <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="w-full md:w-1/2 md:pr-8">
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
        >
            <Image
            src={TEAM_IMAGE}
            alt="PR-Connect team working together"
            width={800}
            height={500}
            priority
            className="rounded-xl shadow-lg w-full h-auto"
            />
        </motion.div>
        </div>

        <div className="w-full md:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900">Local Expertise, Global Ambition</h2>
        <p className="text-gray-700 mb-6 text-lg">
            PR-Connect is a team of digital experts, designers, and marketers who help local businesses—cafés, restaurants, gyms, SaaS, and startups—launch fast, grow online, and attract more customers with modern websites, apps, and QR code marketing.
        </p>
        <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link href="/about">Learn More About Us</Link>
        </Button>
        </div>
    </div>
    </div>
    </section>
    </div>
    )
    }

    export default Introduction