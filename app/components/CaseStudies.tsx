'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Case from '../../public/images/casestudy.jpg'

const caseStudies = [
  {
    title: 'Boosting Brand Engagement with QR Codes',
    client: 'TechCorp Inc.',
    description: 'Implemented a QR code campaign that increased customer engagement by 150% and drove a 30% increase in sales.',
    image: Case ,
    metrics: ['150% increase in engagement', '30% increase in sales', '50,000 QR code scans'],
    testimonial: 'PR-Connect transformed our marketing strategy. The QR code campaign they designed exceeded our expectations and significantly boosted our sales.',
    author: 'John Doe, CEO of TechCorp Inc.'
  },
  {
    title: 'Revamping Online Presence for Local Business',
    client: 'Green Leaf Cafe',
    description: 'Redesigned website and implemented SEO strategies, resulting in a 200% increase in organic traffic and 50% boost in online orders.',
    image: Case,
    metrics: ['200% increase in organic traffic', '50% increase in online orders', '1st page Google ranking for key terms'],
    testimonial: 'The team at PR-Connect completely transformed our online presence. We\'ve seen a dramatic increase in customers finding us online.',
    author: 'Jane Smith, Owner of Green Leaf Cafe'
  }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl mb-8">Discover how we&apos;ve helped businesses achieve their goals</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.title}
              className="mb-16 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image src={study.image} alt={study.title} width={400} height={300} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">{study.client}</div>
                  <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">{study.title}</h2>
                  <p className="mt-2 text-gray-600">{study.description}</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">Key Metrics:</h3>
                    <ul className="mt-2 space-y-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <motion.li 
                          key={metricIndex}
                          className="flex items-center text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (metricIndex * 0.1) }}
                        >
                          <svg className="h-4 w-4 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {metric}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <blockquote className="mt-6 italic text-gray-600">&quot;{study.testimonial}&quot;</blockquote>
                  <p className="mt-2 text-sm text-gray-500">- {study.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}