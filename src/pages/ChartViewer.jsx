import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useUserStore } from '../store/userStore';
import BodygraphChart from '../components/chart/BodygraphChart';
import ChartSection from '../components/chart/ChartSection';

const { FiMessageCircle, FiDownload, FiShare2, FiInfo, FiUser, FiZap, FiHeart, FiCompass } = FiIcons;

const ChartViewer = () => {
  const { chartData } = useUserStore();
  const [selectedSection, setSelectedSection] = useState('overview');

  if (!chartData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Chart Data Found</h2>
          <p className="text-gray-600 mb-6">Please generate your chart first to view your Human Design.</p>
          <Link
            to="/chart-input"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Generate Chart
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview', icon: FiUser },
    { id: 'type', label: 'Energy Type', icon: FiZap },
    { id: 'strategy', label: 'Strategy', icon: FiCompass },
    { id: 'authority', label: 'Authority', icon: FiHeart },
    { id: 'centers', label: 'Centers', icon: FiInfo },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {chartData.name}'s Human Design
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {chartData.type} • {chartData.profile}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/ai-chat"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <SafeIcon icon={FiMessageCircle} />
              <span>Ask AI Guide</span>
            </Link>
            
            <button className="flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
              <SafeIcon icon={FiDownload} />
              <span>Download PDF</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
              <SafeIcon icon={FiShare2} />
              <span>Share Chart</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Bodygraph</h3>
              <BodygraphChart chartData={chartData} />
            </div>
          </motion.div>

          {/* Chart Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            {/* Section Navigation */}
            <div className="bg-white rounded-2xl shadow-lg mb-6 p-2">
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setSelectedSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedSection === section.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <SafeIcon icon={section.icon} className="text-sm" />
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Section Content */}
            <ChartSection 
              section={selectedSection} 
              chartData={chartData} 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChartViewer;