import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, company }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-sm relative"
    >
      <Quote className="w-8 h-8 text-black/10 absolute top-6 left-6" />
      <div className="pl-8">
        <p className="text-gray-600 mb-6 italic">{quote}</p>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-500">{role} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;