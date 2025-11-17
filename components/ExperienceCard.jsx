import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const ExperienceCard = ({ company, role, duration, location, description, achievements }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
      
      {/* Card Container */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1f3c] to-[#0f1733] dark:from-[#1a1f3c] dark:to-[#0f1733] from-white to-gray-50 p-1 overflow-hidden shadow-xl">
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Glass Background */}
        <div className="relative bg-black/20 dark:bg-black/20 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 dark:border-white/10 border-gray-200">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {role}
              </h3>
              <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300 font-medium mb-2">
                <Briefcase size={18} />
                <span>{company}</span>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
              <Briefcase className="text-blue-300" size={24} />
            </div>
          </div>

          {/* Duration & Location */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm">{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin size={16} className="text-pink-600 dark:text-pink-400" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-bold uppercase">Key Achievements</span>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-green-600 dark:text-green-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
