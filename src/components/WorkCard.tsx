import React from 'react';
import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, imageUrl, category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-gray-500 uppercase tracking-wider">{category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkCard;