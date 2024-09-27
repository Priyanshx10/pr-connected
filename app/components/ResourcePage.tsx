'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'The Power of QR Codes in Modern Marketing',
    excerpt: 'Discover how QR codes are revolutionizing marketing strategies and enhancing customer engagement.',
    date: '2023-05-15',
    author: 'Jane Doe',
    category: 'Marketing Trends'
  },
  {
    title: 'SEO Best Practices for 2023',
    excerpt: 'Stay ahead of the curve with these essential SEO strategies to boost your online presence.',
    date: '2023-05-10',
    author: 'John Smith',
    category: 'SEO'
  },
  {
    title: 'Creating Compelling Content for Social Media',
    excerpt: 'Learn how to craft engaging content that resonates with your audience and drives social media success.',
    date: '2023-05-05',
    author: 'Emily Brown',
    category: 'Content Creation'
  }
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl mb-8">Insights and tips to elevate your marketing strategy</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.title}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="text-sm text-teal-500 font-semibold mb-1">{post.category}</div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <Link href="#" className="text-teal-500 hover:text-teal-600 font-semibold">
                    Read More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}