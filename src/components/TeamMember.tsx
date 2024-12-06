import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-200 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p>
        <p className="text-gray-500 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;