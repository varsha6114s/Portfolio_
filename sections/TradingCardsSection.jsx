import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TradingCard from '../components/TradingCard';
import ProjectModal from '../components/ProjectModal';

const TradingCardsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  const projects = [
    {
      name: 'Yoga Pose Detection & Correction',
      type: 'Computer Vision',
      category: 'Computer Vision',
      difficulty: 4,
      xpLevel: 'Advanced',
      description: 'Real-time yoga pose detection and correction system using deep learning',
      achievements: [
        'Achieved 90% accuracy in pose detection',
        'Real-time processing capabilities',
        'Automated correction feedback system',
        'Multi-pose recognition support'
      ],
      metrics: {
        Accuracy: '90%',
        Speed: 'Real-time',
        Model: 'CNN',
        Dataset: 'Custom'
      },
      tech: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Deep Learning'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Cybersecurity Threat Classification',
      type: 'Machine Learning',
      category: 'Machine Learning',
      difficulty: 5,
      xpLevel: 'Expert',
      description: 'Advanced ML system for identifying and classifying cybersecurity threats',
      achievements: [
        'Multi-class threat classification',
        'High precision threat detection',
        'Imbalanced data handling',
        'Production-ready model'
      ],
      metrics: {
        Accuracy: '94%',
        Classes: 'Multi',
        Model: 'Ensemble',
        'F1-Score': '0.92'
      },
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Hand Gesture Recognition',
      type: 'Computer Vision',
      category: 'Computer Vision',
      difficulty: 4,
      xpLevel: 'Advanced',
      description: 'Ultra-fast hand gesture recognition system with 95% accuracy',
      achievements: [
        'Achieved 95% accuracy',
        '20ms inference time',
        'Real-time gesture tracking',
        'Multi-gesture support'
      ],
      metrics: {
        Accuracy: '95%',
        Inference: '20ms',
        FPS: '50',
        Model: 'CNN'
      },
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Computer Vision'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Cats vs Dogs Classification',
      type: 'Deep Learning',
      category: 'Deep Learning',
      difficulty: 3,
      xpLevel: 'Intermediate',
      description: 'Image classification model using convolutional neural networks',
      achievements: [
        'Achieved 92% accuracy',
        'Transfer learning implementation',
        'Data augmentation techniques',
        'Optimized model architecture'
      ],
      metrics: {
        Accuracy: '92%',
        Model: 'CNN',
        Epochs: '50',
        Dataset: '25K'
      },
      tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Transfer Learning'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Customer Segmentation',
      type: 'Data Analysis',
      category: 'Data Analysis',
      difficulty: 3,
      xpLevel: 'Intermediate',
      description: 'K-Means clustering for customer behavior analysis and segmentation',
      achievements: [
        'Optimal cluster identification',
        'Customer behavior insights',
        'Silhouette score optimization',
        'Actionable business insights'
      ],
      metrics: {
        Algorithm: 'K-Means',
        Clusters: '5',
        Score: '0.68',
        Features: '8'
      },
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Iris Classification',
      type: 'Machine Learning',
      category: 'Machine Learning',
      difficulty: 2,
      xpLevel: 'Beginner',
      description: 'Classic iris flower classification using multiple ML algorithms',
      achievements: [
        'Achieved 96% accuracy',
        'Multiple algorithm comparison',
        'Feature importance analysis',
        'Cross-validation implementation'
      ],
      metrics: {
        Accuracy: '96%',
        Model: 'SVM',
        Features: '4',
        Classes: '3'
      },
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'House Price Prediction',
      type: 'Machine Learning',
      category: 'Machine Learning',
      difficulty: 3,
      xpLevel: 'Intermediate',
      description: 'Regression model for accurate house price prediction',
      achievements: [
        'Feature engineering',
        'Outlier detection & handling',
        'Model ensemble techniques',
        'High prediction accuracy'
      ],
      metrics: {
        'R² Score': '0.87',
        RMSE: 'Low',
        Model: 'Ensemble',
        Features: '15'
      },
      tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost', 'Regression'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Smart Inventory System',
      type: 'Full Stack',
      category: 'Full Stack',
      difficulty: 4,
      xpLevel: 'Advanced',
      description: 'TypeScript-based inventory management system with real-time updates',
      achievements: [
        'Real-time inventory tracking',
        'RESTful API implementation',
        'Type-safe codebase',
        'Responsive UI design'
      ],
      metrics: {
        Language: 'TypeScript',
        Backend: 'Node.js',
        Database: 'MongoDB',
        Frontend: 'React'
      },
      tech: ['TypeScript', 'Node.js', 'React', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/varsha6114s'
    },
    {
      name: 'Portfolio Website',
      type: 'Full Stack',
      category: 'Full Stack',
      difficulty: 3,
      xpLevel: 'Intermediate',
      description: 'Modern, responsive portfolio website with interactive elements',
      achievements: [
        'Responsive design',
        'Smooth animations',
        'SEO optimized',
        'Fast loading times'
      ],
      metrics: {
        Framework: 'React',
        Styling: 'Tailwind',
        Animation: 'Framer',
        Performance: 'A+'
      },
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      githubLink: 'https://github.com/varsha6114s'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-[#1a1f3c] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Developer{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Trading Cards
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Collect them all! Each project is a unique card showcasing skills, achievements, and tech mastery.
          </p>
        </motion.div>

        {/* Cards Grid - Desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <TradingCard {...project} onClick={() => handleCardClick(project)} />
            </motion.div>
          ))}
        </motion.div>

        {/* Cards Carousel - Mobile */}
        <div className="md:hidden overflow-x-auto pb-8 -mx-4 px-4">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <TradingCard key={index} {...project} onClick={() => handleCardClick(project)} />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{projects.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10 shadow-lg">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">90%+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Accuracy</div>
          </div>
          <div className="text-center p-6 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-gray-300 dark:border-white/10 shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Passion</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingCardsSection;
