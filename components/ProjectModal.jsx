import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Star, Zap, Target, TrendingUp, Calendar, Award } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const renderDifficulty = () => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < project.difficulty ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600 dark:text-gray-600 text-gray-400'}
          />
        ))}
      </div>
    );
  };

  const getXPColor = () => {
    const colors = {
      'Beginner': 'from-green-500 to-emerald-500',
      'Intermediate': 'from-blue-500 to-cyan-500',
      'Advanced': 'from-purple-500 to-pink-500',
      'Expert': 'from-orange-500 to-red-500'
    };
    return colors[project.xpLevel] || colors['Intermediate'];
  };

  const getCategoryColor = () => {
    const colors = {
      'Computer Vision': 'bg-blue-500/20 border-blue-400/50 text-blue-300 dark:text-blue-300 text-blue-600',
      'Deep Learning': 'bg-purple-500/20 border-purple-400/50 text-purple-300 dark:text-purple-300 text-purple-600',
      'Machine Learning': 'bg-green-500/20 border-green-400/50 text-green-300 dark:text-green-300 text-green-600',
      'Data Analysis': 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300 dark:text-yellow-300 text-yellow-600',
      'Full Stack': 'bg-pink-500/20 border-pink-400/50 text-pink-300 dark:text-pink-300 text-pink-600',
      'NLP': 'bg-indigo-500/20 border-indigo-400/50 text-indigo-300 dark:text-indigo-300 text-indigo-600'
    };
    return colors[project.category] || colors['Machine Learning'];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 dark:bg-white/10 bg-gray-200 hover:bg-white/20 dark:hover:bg-white/20 hover:bg-gray-300 rounded-full border border-white/20 dark:border-white/20 border-gray-400 transition-all"
              >
                <X className="text-white dark:text-white text-gray-900" size={24} />
              </button>

              {/* Modal Content */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1f3c] to-[#0f1733] dark:from-[#1a1f3c] dark:to-[#0f1733] from-white to-gray-50 p-1 overflow-hidden shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 dark:opacity-50 opacity-30 blur-xl"></div>
                
                {/* Glass Background */}
                <div className="relative bg-black/20 dark:bg-black/20 bg-white/90 backdrop-blur-md rounded-2xl p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-4 py-1.5 rounded-full text-sm font-bold border ${getCategoryColor()}`}>
                            {project.category}
                          </span>
                          {renderDifficulty()}
                        </div>
                        <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-3">
                          {project.name}
                        </h2>
                        <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* XP Level */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 font-bold uppercase">Experience Level</span>
                        <span className="text-sm text-white dark:text-white text-gray-900 font-bold">{project.xpLevel}</span>
                      </div>
                      <div className="h-3 bg-gray-800 dark:bg-gray-800 bg-gray-300 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${getXPColor()}`}
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Stats Box */}
                    <div className="bg-white/5 dark:bg-white/5 bg-gray-100 rounded-xl p-6 border border-white/10 dark:border-white/10 border-gray-300">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp size={20} className="text-blue-400 dark:text-blue-400 text-blue-600" />
                        <h3 className="text-lg font-bold text-white dark:text-white text-gray-900">Performance Metrics</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="flex flex-col">
                            <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-600 uppercase tracking-wide mb-1">{key}</span>
                            <span className="text-xl font-bold text-white dark:text-white text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-white/5 dark:bg-white/5 bg-gray-100 rounded-xl p-6 border border-white/10 dark:border-white/10 border-gray-300">
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={20} className="text-yellow-400 dark:text-yellow-400 text-yellow-600" />
                        <h3 className="text-lg font-bold text-white dark:text-white text-gray-900">Key Achievements</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-300 text-gray-700">
                            <Target size={16} className="text-green-400 dark:text-green-400 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6 bg-white/5 dark:bg-white/5 bg-gray-100 rounded-xl p-6 border border-white/10 dark:border-white/10 border-gray-300">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap size={20} className="text-purple-400 dark:text-purple-400 text-purple-600" />
                      <h3 className="text-lg font-bold text-white dark:text-white text-gray-900">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 dark:border-blue-400/30 border-blue-400/50 rounded-lg text-sm text-blue-200 dark:text-blue-200 text-blue-700 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubLink || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-bold text-lg transition-all shadow-lg"
                    >
                      <Github size={24} />
                      <span>View on GitHub</span>
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
