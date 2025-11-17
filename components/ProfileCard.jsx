import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ProfileCard = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript'] },
    { category: 'AI/ML', items: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'MediaPipe'] },
    { category: 'Web Dev', items: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Git', 'Vite', 'Pandas', 'NumPy', 'XGBoost'] }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-6xl mx-auto mb-12"
    >
      {/* Card Container */}
      <div className="relative rounded-2xl p-8 overflow-hidden shadow-2xl bg-white dark:bg-gradient-to-br dark:from-[#1a1f3c] dark:to-[#0f1733]">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 dark:opacity-75 opacity-30 blur-xl animate-pulse"></div>
        
        {/* Glass Effect Background */}
        <div className="relative backdrop-blur-md rounded-2xl p-8 border bg-white/90 border-gray-300 dark:bg-white/10 dark:border-white/20">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Left Side - Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-lg"></div>
                <div className="relative w-[280px] h-[320px] rounded-2xl overflow-hidden border-4 border-white/50 dark:border-white/30 bg-white dark:bg-gradient-to-br dark:from-purple-900 dark:to-blue-900 shadow-2xl">
                  {/* Profile photo */}
                  <img 
                    src={`${import.meta.env.BASE_URL}varsha.jpg`}
                    alt="Varsha S" 
                    className="w-full h-full object-cover object-center"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 w-full">
              {/* About Me Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400">About</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Name & Title */}
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide">
                  Varsha S
                </h1>
                <p className="text-xl text-purple-700 dark:text-purple-300 font-medium mb-2">
                  AI/ML Engineer & Full Stack Developer
                </p>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin size={18} className="text-pink-600 dark:text-pink-400" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                Passionate about building intelligent systems with expertise in Computer Vision, 
                Deep Learning, and Full Stack Development. I specialize in creating AI-powered 
                solutions that solve real-world problems. With a strong foundation in machine 
                learning algorithms and modern web technologies, I transform innovative ideas 
                into impactful, scalable applications.
              </p>

              {/* Skills Section */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  <span>Technical Skills</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-white/5 rounded-lg p-4 border border-gray-300 dark:border-white/10">
                      <h4 className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2 uppercase tracking-wide">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/50 dark:border-blue-400/30 rounded-full text-xs text-blue-800 dark:text-blue-200 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4">
                <motion.a
                  href="mailto:varshas6114@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg border border-blue-400/50 transition-all"
                >
                  <Mail size={20} />
                  <span className="text-sm font-medium">Email</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/varsha-s-aa90712b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-lg border border-purple-400/50 transition-all"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://github.com/varsha6114s"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 rounded-lg border border-pink-400/50 transition-all"
                >
                  <Github size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
