import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Toggle clicked, current isDark:', isDark);
    toggleTheme();
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Debug indicator */}
      <div className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-md">
        {isDark ? 'DARK MODE' : 'LIGHT MODE'}
      </div>
      
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-3 rounded-full backdrop-blur-md border transition-all shadow-lg bg-gray-200 border-gray-400 dark:bg-white/10 dark:border-white/20 hover:border-white/40"
        aria-label="Toggle theme"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Sun className="text-yellow-400" size={24} />
          ) : (
            <Moon className="text-blue-700" size={24} />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
