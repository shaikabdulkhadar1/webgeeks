import React from 'react';
import { Code2, Palette, Globe, Rocket } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience.'
  },
  {
    icon: <Globe size={32} />,
    title: 'Digital Strategy',
    description: 'Strategic planning to maximize your online presence and reach.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Performance Optimization',
    description: 'Speed up your applications for better user engagement.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;