/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';

const blogPosts = [
  {
    title: '12 SEO Best Practices to Improve Rankings in 2023',
    excerpt: 'Learn essential strategies like mobile-first optimization and quality content creation to enhance your site’s visibility.',
    date: '2023-09-10',
    author: 'Wadood Amir',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This blog post covers the best practices for improving SEO rankings in 2023, including insights on mobile-first strategies, quality content creation, and the importance of user experience in search engine optimization.'
  },
  {
    title: 'Effective Techniques for Long-Tail Keyword Targeting',
    excerpt: 'Discover how targeting long-tail keywords can help you rank higher and attract more relevant traffic to your site.',
    date: '2023-08-25',
    author: 'Neil Patel',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This article explores effective techniques for targeting long-tail keywords, which can lead to higher search engine rankings and more qualified traffic. It provides practical tips for keyword research and content strategy.'
  },
  {
    title: 'Optimizing for Voice Search: Strategies for 2023',
    excerpt: 'Explore techniques to optimize your content for voice search, focusing on conversational keywords and user intent.',
    date: '2023-07-15',
    author: 'Ahrefs Team',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'In this blog post, we discuss strategies for optimizing content for voice search, highlighting the importance of understanding user intent and using natural language in your content.'
  },
  {
    title: 'The Importance of Mobile Optimization in SEO',
    excerpt: 'Understand why mobile optimization is crucial for improving your search rankings and user experience.',
    date: '2023-06-30',
    author: 'Jane Doe',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This article emphasizes the importance of mobile optimization in SEO, discussing how mobile-friendly websites can improve user experience and increase search rankings.'
  },
  {
    title: 'How to Create SEO-Friendly Content',
    excerpt: 'Tips on crafting content that not only engages readers but also ranks well on search engines.',
    date: '2023-05-20',
    author: 'Content Team',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'Learn how to create SEO-friendly content that captivates your audience while also improving your website’s visibility in search engine results.'
  },
  {
    title: 'Building Quality Backlinks in 2023',
    excerpt: 'Learn effective strategies for acquiring high-quality backlinks to boost your website’s authority.',
    date: '2023-04-15',
    author: 'Link Building Guru',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This post outlines the importance of backlinks in SEO and provides actionable strategies for building high-quality backlinks to enhance your website’s authority.'
  },
  {
    title: 'Using Analytics to Drive Your SEO Strategy',
    excerpt: 'Discover how to leverage analytics tools to refine your SEO efforts and improve performance.',
    date: '2023-03-10',
    author: 'Data Analyst',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'Learn how to use analytics tools effectively to track your SEO performance and make data-driven decisions for your SEO strategy.'
  },
  {
    title: 'Local SEO Tips for Small Businesses',
    excerpt: 'Explore strategies that can help local businesses improve their visibility in local search results.',
    date: '2023-02-05',
    author: 'Local SEO Expert',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This article offers valuable local SEO tips tailored for small businesses, highlighting tactics to improve visibility and attract local customers.'
  },
  {
    title: 'The Role of Social Media in SEO',
    excerpt: "Understand how social media can impact your SEO efforts and drive organic traffic.",
    date: '2023-01-25',
    author: 'Social Media Specialist',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'Explore the connection between social media and SEO, and learn how effective social media strategies can enhance your organic search efforts.'
  },
  {
    title: "Keyword Research Tools You Should Use",
    excerpt: "A review of the best keyword research tools available for effective SEO planning.",
    date: "2022-12-15",
    author: "SEO Specialist",
    category: "SEO",
    image: 'https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEFJfGVufDB8fDB8fHww',
    description: 'This blog post reviews the most effective keyword research tools, providing insights on how to use them to enhance your SEO strategy and improve content planning.'
  },
  // Add more blog posts as needed
];


export default function Resources() {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Open the dialog with the selected post
  const handleOpenModal = (post: any) => {
    setSelectedPost(post);
  };

  // Close the dialog
  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-background">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="text-sm text-primary font-semibold mb-1">{post.category}</div>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" onClick={() => handleOpenModal(post)}>
                      Read More &rarr;
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog to display selected post */}
      {selectedPost && (
        <Dialog open={!!selectedPost} onOpenChange={handleCloseModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedPost.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                className="w-full h-48 object-cover mb-4"
                src={selectedPost.image}
                alt={`Image for ${selectedPost.title}`}
              />
              <p>{selectedPost.description}</p>
              <div className="text-sm text-muted-foreground">
                <span>{selectedPost.author}</span> - <span>{selectedPost.date}</span>
              </div>
            </div>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}