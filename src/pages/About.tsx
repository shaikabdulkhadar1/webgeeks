import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Rocket } from 'lucide-react';
import TeamMember from '../components/TeamMember';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Web Development',
    description: 'Building scalable web applications using cutting-edge technologies.'
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Strategy',
    description: 'Developing comprehensive digital transformation strategies.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Innovation',
    description: 'Pushing boundaries with emerging technologies.'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'With 15 years of experience in digital transformation.'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in cloud architecture and scalable systems.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Award-winning designer with a passion for user experience.'
  },
  {
    name: 'David Wilson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    bio: 'Full-stack developer specialized in React and Node.js.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About DigitalCraft</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate digital craftsmen, dedicated to creating exceptional 
              digital experiences that drive business growth and user engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-3xl mx-auto text-gray-600"
          >
            <p className="mb-6">
              Founded in 2020, DigitalCraft has been at the forefront of digital innovation, 
              helping businesses transform their digital presence and create meaningful 
              connections with their audiences.
            </p>
            <p>
              Our approach combines technical excellence with creative innovation, 
              ensuring that every project we deliver not only meets but exceeds 
              our clients' expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Our comprehensive range of services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the experts behind DigitalCraft</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;