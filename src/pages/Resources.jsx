import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBook, FiPlay, FiUsers, FiStar, FiArrowRight, FiDownload, FiExternalLink } = FiIcons;

const Resources = () => {
  const [activeTab, setActiveTab] = useState('guides');

  const tabs = [
    { id: 'guides', label: 'Guides', icon: FiBook },
    { id: 'videos', label: 'Videos', icon: FiPlay },
    { id: 'glossary', label: 'Glossary', icon: FiStar },
    { id: 'community', label: 'Community', icon: FiUsers },
  ];

  const guides = [
    {
      title: 'Understanding Your Human Design Type',
      description: 'Learn about the five energy types and how they shape your life experience.',
      level: 'Beginner',
      readTime: '10 min',
      category: 'Types'
    },
    {
      title: 'Decision Making with Your Authority',
      description: 'Discover how to make aligned decisions based on your inner authority.',
      level: 'Intermediate',
      readTime: '15 min',
      category: 'Authority'
    },
    {
      title: 'Centers and Energy Flow',
      description: 'Explore the nine centers and how they influence your energy dynamics.',
      level: 'Advanced',
      readTime: '20 min',
      category: 'Centers'
    },
    {
      title: 'Living Your Strategy',
      description: 'Practical ways to implement your Human Design strategy in daily life.',
      level: 'Intermediate',
      readTime: '12 min',
      category: 'Strategy'
    }
  ];

  const videos = [
    {
      title: 'Human Design Basics: What You Need to Know',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      description: 'An introduction to Human Design fundamentals.'
    },
    {
      title: 'Reading Your Bodygraph Chart',
      duration: '22:45',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop',
      description: 'Learn how to interpret the key elements of your chart.'
    },
    {
      title: 'The Five Energy Types Explained',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
      description: 'Deep dive into Manifestor, Generator, MG, Projector, and Reflector types.'
    }
  ];

  const glossaryTerms = [
    {
      term: 'Authority',
      definition: 'Your inner decision-making mechanism that guides you to make correct choices.',
      category: 'Core Concepts'
    },
    {
      term: 'Bodygraph',
      definition: 'The visual representation of your Human Design chart showing centers, channels, and gates.',
      category: 'Chart Elements'
    },
    {
      term: 'Generator',
      definition: 'One of the five types, representing about 70% of the population with sustainable life force energy.',
      category: 'Types'
    },
    {
      term: 'Defined Centers',
      definition: 'Centers that are colored in your chart, representing consistent and reliable energy.',
      category: 'Centers'
    },
    {
      term: 'Profile',
      definition: 'Your conscious and unconscious personality themes, shown as two numbers (e.g., 1/3, 2/4).',
      category: 'Profile'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'guides':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    guide.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    guide.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {guide.level}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-600">{guide.category}</span>
                  <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                    <span>Read More</span>
                    <SafeIcon icon={FiArrowRight} className="text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'videos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <SafeIcon icon={FiPlay} className="text-white text-4xl" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'glossary':
        return (
          <div className="space-y-4">
            {glossaryTerms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.term}</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        );

      case 'community':
        return (
          <div className="text-center py-12">
            <SafeIcon icon={FiUsers} className="text-6xl text-gray-400 mb-6 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with fellow Human Design enthusiasts, share experiences, and learn from each other's journeys.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Discussion Forum</h4>
                <p className="text-gray-600 mb-4">Ask questions, share insights, and engage in meaningful conversations.</p>
                <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                  <span>Join Forum</span>
                  <SafeIcon icon={FiExternalLink} className="text-sm" />
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Live Events</h4>
                <p className="text-gray-600 mb-4">Attend workshops, webinars, and community gatherings.</p>
                <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                  <span>View Events</span>
                  <SafeIcon icon={FiExternalLink} className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deepen your understanding of Human Design with our comprehensive collection of guides, videos, and community resources.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-2 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <SafeIcon icon={tab.icon} className="text-lg" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;