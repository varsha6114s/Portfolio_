import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Amilo AI Pvt Ltd',
      role: 'Data Science Intern',
      duration: 'February 2025 - May 2025',
      location: 'Remote',
      description: 'Working on cutting-edge AI/ML projects, developing intelligent systems and implementing machine learning solutions for real-world applications.',
      achievements: [
        'Developed and deployed multiple ML models with high accuracy',
        'Implemented computer vision solutions for real-time applications',
        'Collaborated with cross-functional teams on AI projects',
        'Contributed to research and development of deep learning models'
      ]
    }
  ];

  const virtualInternships = [
    {
      company: 'AICTE - EduSkills',
      role: 'AWS Academy Cloud Foundations',
      duration: '2024',
      type: 'Virtual Internship'
    },
    {
      company: 'Cisco',
      role: 'Cybersecurity Essentials',
      duration: '2024',
      type: 'Virtual Internship'
    },
    {
      company: 'Google',
      role: 'Data Analytics',
      duration: '2024',
      type: 'Virtual Internship'
    },
    {
      company: 'IBM',
      role: 'AI & Machine Learning',
      duration: '2024',
      type: 'Virtual Internship'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-[#1a1f3c] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building the future with AI and Machine Learning
          </p>
        </motion.div>

        {/* Main Experience Cards */}
        <div className="space-y-6 mb-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>

        {/* Virtual Internships Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Virtual{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Internships & Certifications
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {virtualInternships.map((internship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
                
                {/* Card */}
                <div className="relative rounded-xl bg-white dark:bg-gradient-to-br dark:from-[#1a1f3c] dark:to-[#0f1733] p-4 border border-gray-300 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/20 transition-all shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                        <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">{internship.type}</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {internship.role}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{internship.company}</p>
                      <p className="text-xs text-gray-500">{internship.duration}</p>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
