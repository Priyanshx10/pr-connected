'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, BarChart, Rocket, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  description: string;
  readTime: string;
  results?: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: '12 Brand Amplification Strategies for 2025',
    excerpt: 'Proven techniques to increase your brand visibility and market dominance',
    date: '2025-07-22',
    author: 'Alex Johnson',
    category: 'Brand Growth',
    image: '/images/brand-growth.jpg',
    description: 'This comprehensive guide reveals the most effective brand amplification strategies we use with our clients, including digital PR tactics, influencer partnerships, and content syndication methods that deliver measurable results.',
    readTime: '8 min read',
    results: [
      'Increase brand awareness by 3-5x',
      'Improve market positioning',
      'Boost customer engagement'
    ]
  },
  {
    title: 'Digital Domination: Winning the Online Space',
    excerpt: 'How to establish authority in your industry through strategic digital presence',
    date: '2025-07-22',
    author: 'Maria Rodriguez',
    category: 'Digital Strategy',
    image: '/images/digital-domination.jpg',
    description: 'Learn the framework we used to help clients dominate their digital space through strategic content distribution, SEO optimization, and conversion-focused web design that positions them as industry leaders.',
    readTime: '10 min read',
    results: [
      '250% more organic traffic',
      '5x increase in lead generation',
      'Improved search rankings'
    ]
  },
];

export default function Resources() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] bg-[size:40px_40px] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Brand Amplification Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Actionable insights to elevate your brand and outperform competitors
          </motion.p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: "Data-Driven Strategies",
                description: "Metrics-focused approaches that deliver measurable growth"
              },
              {
                icon: Rocket,
                title: "Rapid Implementation",
                description: "Agile frameworks that show results in weeks not months"
              },
              {
                icon: Target,
                title: "Precision Targeting",
                description: "Reaching your ideal audience with surgical precision"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the strategies we use to help clients dominate their markets
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border border-gray-100">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                    {post.category}
                  </span>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    className="text-blue-600 font-medium group"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Amplify Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Let's discuss how we can help you achieve remarkable growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 font-bold shadow-lg">
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-4xl">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap items-center gap-4 pt-2">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {selectedPost.readTime}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg mb-6">{selectedPost.description}</p>
                
                {selectedPost.results && (
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                      Key Results You Can Expect
                    </h3>
                    <ul className="space-y-2">
                      {selectedPost.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 mr-2 bg-blue-500 rounded-full"></span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}