'use client'


import Image from 'next/image';
import { motion } from 'framer-motion';
import CEO from '../../public/images/CEO.jpg';
import VP from '../../public/images/VP.jpeg';

const teamMembers = [
  { name: 'Priyansh Yadav', role: 'CEO', image: CEO },
  { name: 'Krapanshu Sharma', role: 'Vice President', image: VP },
];

export default function AboutUs() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
        >
          About PR-Connect
        </motion.h1>
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-12 text-center text-gray-600 max-w-3xl mx-auto"
        >
          We are a team of passionate PR professionals and tech innovators, dedicated to revolutionizing the way brands connect with their audience through QR-powered strategies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: "Expert Team", description: "Our diverse team brings years of experience in PR, marketing, and technology." },
            { icon: Lightbulb, title: "Innovative Approach", description: "We constantly push the boundaries of what's possible in PR with cutting-edge QR solutions." },
            { icon: TrendingUp, title: "Proven Results", description: "Our strategies have helped numerous brands achieve unprecedented engagement and growth." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <item.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}