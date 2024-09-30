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
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About PR-Connect</h1>
          <p className="text-xl mb-8">Transforming brands through innovative marketing solutions</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            At PR-Connect, we are committed to helping brands thrive in the digital landscape through creative and innovative marketing solutions. Our unique blend of online presence enhancement, QR automation, and content creation empowers businesses to connect with their audience in meaningful ways.
          </motion.p>
        </div>
      </section>

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