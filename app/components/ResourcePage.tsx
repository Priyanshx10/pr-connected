/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client'


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
    image: 'https://source.unsplash.com/featured/?seo', // Image from Unsplash
  },
  {
    title: 'Effective Techniques for Long-Tail Keyword Targeting',
    excerpt: 'Discover how targeting long-tail keywords can help you rank higher and attract more relevant traffic to your site.',
    date: '2023-08-25',
    author: 'Neil Patel',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?keywords', // Image from Unsplash
  },
  {
    title: 'Optimizing for Voice Search: Strategies for 2023',
    excerpt: 'Explore techniques to optimize your content for voice search, focusing on conversational keywords and user intent.',
    date: '2023-07-15',
    author: 'Ahrefs Team',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?voice-search', // Image from Unsplash
  },
  {
    title: 'The Importance of Mobile Optimization in SEO',
    excerpt: 'Understand why mobile optimization is crucial for improving your search rankings and user experience.',
    date: '2023-06-30',
    author: 'Jane Doe',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?mobile', // Image from Unsplash
  },
  {
    title: 'How to Create SEO-Friendly Content',
    excerpt: 'Tips on crafting content that not only engages readers but also ranks well on search engines.',
    date: '2023-05-20',
    author: 'Content Team',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?content', // Image from Unsplash
  },
  {
    title: 'Building Quality Backlinks in 2023',
    excerpt: 'Learn effective strategies for acquiring high-quality backlinks to boost your website’s authority.',
    date: '2023-04-15',
    author: 'Link Building Guru',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?backlinks', // Image from Unsplash
  },
  {
    title: 'Using Analytics to Drive Your SEO Strategy',
    excerpt: 'Discover how to leverage analytics tools to refine your SEO efforts and improve performance.',
    date: '2023-03-10',
    author: 'Data Analyst',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?analytics', // Image from Unsplash
  },
  {
    title: 'Local SEO Tips for Small Businesses',
    excerpt: 'Explore strategies that can help local businesses improve their visibility in local search results.',
    date: '2023-02-05',
    author: 'Local SEO Expert',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?local-seo', // Image from Unsplash
  },
  {
    title: 'The Role of Social Media in SEO',
    excerpt: "Understand how social media can impact your SEO efforts and drive organic traffic.",
    date: '2023-01-25',
    author: 'Social Media Specialist',
    category: 'SEO',
    image: 'https://source.unsplash.com/featured/?social-media', // Image from Unsplash
  },
  {
      title:"Keyword Research Tools You Should Use",
      excerpt:"A review of the best keyword research tools available for effective SEO planning.",
      date:"2022-12-15",
      author:"SEO Specialist",
      category:"SEO",
      image:'https://source.unsplash.com/featured/?keyword-research' // Image from Unsplash
  },
  {
      title:"The Future of SEO in a Post-Pandemic World",
      excerpt:"How the pandemic has changed the landscape of SEO and what it means for marketers.",
      date:"2022-11-10",
      author:"Market Analyst",
      category:"SEO",
      image:'https://source.unsplash.com/featured/?future-seo' // Image from Unsplash
  },
  {
      title:"On-page vs Off-page SEO Strategies",
      excerpt:"Learn the differences between on-page and off-page SEO and when to use each strategy.",
      date:"2022-10-05",
      author:"SEO Consultant",
      category:"SEO",
      image:'https://source.unsplash.com/featured/?on-page-off-page' // Image from Unsplash
  },
  {
      title:"How to Optimize Your Website's Loading Speed",
      excerpt:"Techniques to improve your website's loading speed for better user experience and SEO.",
      date:"2022-09-20",
      author:"Web Developer",
      category:"SEO",
      image:'https://source.unsplash.com/featured/?loading-speed' // Image from Unsplash
  },
  {
      title:"Understanding Google’s Algorithm Updates",
      excerpt:"Stay updated with the latest Google algorithm changes and how they affect your rankings.",
      date:"2022-08-15",
      author:"Search Engine Expert",
      category:"SEO",
      image:'https://source.unsplash.com/featured/?google-algorithm' // Image from Unsplash
  },
  {
      title:"Creating an Effective Content Marketing Strategy",
      excerpt:"Step-by-step guide to developing a content marketing strategy that enhances your SEO.",
      date:"2022-07-10",
      author:"Marketing Strategist",
      category:"Content Marketing",
      image:'https://source.unsplash.com/featured/?content-marketing' // Image from Unsplash
  },
  {
      title:"Utilizing Video Content for Better SEO Results",
      excerpt:"Learn how video content can enhance your website's SEO performance.",
      date:"2022-06-05",
      author:"Video Marketing Expert",
      category:"Content Marketing",
      image:'https://source.unsplash.com/featured/?video-content' // Image from Unsplash
  },
  {
      title:"The Importance of User Experience (UX) in SEO",
      excerpt:"Explore how UX design impacts your site's search engine rankings.",
      date:"2022-05-01",
      author:"UX Designer",
      category:"UX/UI",
      image:'https://source.unsplash.com/featured/?ux-design' // Image from Unsplash
  },
   {
       title:"Technical SEO Checklist for Your Website",
       excerpt:"A comprehensive checklist to ensure your website meets technical SEO standards.",
       date:"2022-04-15",
       author:"Technical SEO Specialist",
       category:"Technical SEO",
       image:'https://source.unsplash.com/featured/?technical-seo' // Image from Unsplash
   },
   {
       title:"How to Use Google Search Console Effectively",
       excerpt:"Tips on leveraging Google Search Console data to improve your site's performance.",
       date:"2022-03-20",
       author:"Webmaster",
       category:"Analytics",
       image:'https://source.unsplash.com/featured/?google-search-console' // Image from Unsplash
   },
   {
       title:"Creating a Mobile-Friendly Website in 2023",
       excerpt:"Best practices for ensuring your website is mobile-friendly and optimized for search engines.",
       date:"2022-02-10",
       author:"Mobile Developer",
       category:"Mobile Optimization",
       image:'https://source.unsplash.com/featured/?mobile-friendly' // Image from Unsplash
   },
   {
       title:"The Benefits of Schema Markup for SEO",
       excerpt:"How implementing schema markup can improve your site's visibility in search results.",
       date:"2022-01-05",
       author:"SEO Analyst",
       category:"Technical SEO", 
       image:'https://source.unsplash.com/featured/?schema-markup' // Image from Unsplash
   },
   {
       title:"Using A/B Testing to Improve Your Content Strategy",
       excerpt:"Learn how A/B testing can help you refine your content strategy for better engagement.",
       date:"2021-12-15",
       author:"Content Strategist", 
       category:"Content Marketing", 
       image:'https://source.unsplash.com/featured/?ab-testing' // Image from Unsplash
   },
   {
       title:"The Impact of Core Web Vitals on Rankings", 
       excerpt :"Understanding Google's Core Web Vitals and their significance in ranking factors.", 
       date :"2021-11-20", 
       author :"Performance Specialist", 
       category :"Technical SEO", 
       image :'https://source.unsplash.com/featured/?core-web-vitals' // Image from Unsplash
   },
   {
       title :'How to Write Meta Descriptions that Convert', 
       excerpt :'Crafting compelling meta descriptions that increase click-through rates from search results.', 
       date :'2021-10-30', 
       author :'Copywriter', 
       category :'Content Writing', 
       image :'https://source.unsplash.com/featured/?meta-description' // Image from Unsplash
   },
   {
        title :'Understanding Google Analytics for Beginners', 
        excerpt :'A beginner-friendly guide to using Google Analytics for tracking website performance.', 
        date :'2021-09-25', 
        author :'Analytics Expert', 
        category :'Analytics', 
        image :'https://source.unsplash.com/featured/?google-analytics' // Image from Unsplash
   },
   {
        title :'Building an Effective Link Building Strategy', 
        excerpt :'Strategies for creating a successful link-building campaign that boosts authority.', 
        date :'2021-08-15', 
        author :'Link Building Specialist', 
        category :'Link Building', 
        image :'https://source.unsplash.com/featured/?link-building' // Image from Unsplash
   }
];

export default function Resources() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpenModal = (post: SetStateAction<null>) => {
    setSelectedPost(post);
  };

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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="link">Read More &rarr;</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{post.title}</DialogTitle>
                          </DialogHeader>
                          <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg mb-4" />
                          <p className="text-sm text-muted-foreground mb-2">{post.date} | {post.author}</p>
                          <p>{post.excerpt}</p>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

