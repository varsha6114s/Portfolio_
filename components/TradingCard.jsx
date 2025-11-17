import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Zap, Target, TrendingUp } from 'lucide-react';

const TradingCard = ({
  name,
  type,
  difficulty,
  xpLevel,
  achievements,
  metrics,
  tech,
  description,
  githubLink,
  category,
  onClick
}) => {
  // Difficulty stars
  const renderDifficulty = () => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < difficulty ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
          />
        ))}
      </div>
    );
  };

  // XP Level color
  const getXPColor = () => {
    const colors = {
      'Beginner': 'from-green-500 to-emerald-500',
      'Intermediate': 'from-blue-500 to-cyan-500',
      'Advanced': 'from-purple-500 to-pink-500',
      'Expert': 'from-orange-500 to-red-500'
    };
    return colors[xpLevel] || colors['Intermediate'];
  };

  // Category badge color
  const getCategoryColor = () => {
    const colors = {
      'Computer Vision': 'bg-blue-500/20 border-blue-400/50 text-blue-300',
      'Deep Learning': 'bg-purple-500/20 border-purple-400/50 text-purple-300',
      'Machine Learning': 'bg-green-500/20 border-green-400/50 text-green-300',
      'Data Analysis': 'bg-yellow-500/20 border-yellow-400/50 text-yellow-300',
      'Full Stack': 'bg-pink-500/20 border-pink-400/50 text-pink-300',
      'NLP': 'bg-indigo-500/20 border-indigo-400/50 text-indigo-300'
    };
    return colors[category] || colors['Machine Learning'];
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="relative w-[320px] h-[450px] group cursor-pointer"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-300"></div>
      
      {/* Card Container */}
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-[#1a1f3c] to-[#0f1733] dark:from-[#1a1f3c] dark:to-[#0f1733] from-white to-gray-50 p-1 overflow-hidden shadow-xl">
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {/* Glass Background */}
        <div className="relative h-full bg-black/20 dark:bg-black/20 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/10 dark:border-white/10 border-gray-200 flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getCategoryColor()}`}>
                {category}
              </span>
              {renderDifficulty()}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">
              {name}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          </div>

          {/* XP Level Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">XP LEVEL</span>
              <span className="text-xs text-gray-900 dark:text-white font-bold">{xpLevel}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full bg-gradient-to-r ${getXPColor()}`}
              ></motion.div>
            </div>
          </div>

          {/* Stats Box */}
          <div className="mb-4 p-3 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10">
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">{key}</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-4 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400 font-bold uppercase">Achievements</span>
            </div>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <Target size={12} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400 font-bold uppercase">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/40 dark:border-blue-400/20 rounded text-xs text-blue-800 dark:text-blue-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer - GitHub Link */}
          <div className="mt-auto">
            <motion.a
              href={githubLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg text-white text-sm font-medium transition-all"
            >
              <Github size={16} />
              <span>View Project</span>
              <ExternalLink size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TradingCard;
