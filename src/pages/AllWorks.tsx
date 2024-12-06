import React from 'react';
import WorkCard from '../components/WorkCard';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with seamless payment integration and inventory management.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development'
  },
  {
    title: 'Financial Dashboard',
    description: 'Real-time analytics dashboard for monitoring market trends and portfolio performance.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Data Visualization'
  },
  {
    title: 'Healthcare App',
    description: 'Patient management system with telemedicine capabilities and health tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    category: 'Mobile App'
  },
  {
    title: 'Social Network Platform',
    description: 'Community-driven platform with real-time messaging and content sharing.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    category: 'Web Development'
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning solution for predictive business analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Personalized workout tracking and nutrition planning application.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    category: 'Mobile App'
  }
];

const AllWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600">Explore our complete collection of work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllWorks;