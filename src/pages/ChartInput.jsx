import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useUserStore } from '../store/userStore';
import { generateHumanDesignChart } from '../utils/chartGenerator';
import "react-datepicker/dist/react-datepicker.css";

const { FiUser, FiCalendar, FiClock, FiMapPin, FiArrowRight, FiInfo } = FiIcons;

const ChartInput = () => {
  const navigate = useNavigate();
  const { setChartData } = useUserStore();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: new Date(),
    birthTime: '',
    birthPlace: '',
    timezone: 'UTC'
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.birthTime || !formData.birthPlace) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Simulate chart generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const chartData = generateHumanDesignChart(formData);
      setChartData(chartData);
      
      toast.success('Your Human Design chart has been generated!');
      navigate('/chart');
    } catch (error) {
      toast.error('Failed to generate chart. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Generate Your Chart
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Enter your birth information to create your personalized Human Design bodygraph
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start space-x-3">
              <SafeIcon icon={FiInfo} className="text-blue-600 text-lg mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Accurate Birth Information Required</h3>
                <p className="text-blue-700 text-sm">
                  For the most accurate reading, please provide your exact birth time and location. 
                  Even a few minutes can change your Human Design configuration.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <SafeIcon icon={FiUser} className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <SafeIcon icon={FiCalendar} className="inline mr-2" />
                Birth Date *
              </label>
              <DatePicker
                selected={formData.birthDate}
                onChange={(date) => handleInputChange('birthDate', date)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                dateFormat="MMMM d, yyyy"
                showYearDropdown
                yearDropdownItemNumber={100}
                scrollableYearDropdown
                required
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <SafeIcon icon={FiClock} className="inline mr-2" />
                Birth Time *
              </label>
              <input
                type="time"
                value={formData.birthTime}
                onChange={(e) => handleInputChange('birthTime', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Use 24-hour format (e.g., 14:30 for 2:30 PM)
              </p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <SafeIcon icon={FiMapPin} className="inline mr-2" />
                Birth Location *
              </label>
              <input
                type="text"
                value={formData.birthPlace}
                onChange={(e) => handleInputChange('birthPlace', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="City, State/Province, Country"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Be as specific as possible (e.g., "New York, NY, USA")
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isGenerating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generating Chart...</span>
                </>
              ) : (
                <>
                  <span>Generate My Chart</span>
                  <SafeIcon icon={FiArrowRight} />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Your personal information is secure and used only to generate your chart.
              We respect your privacy and never share your data.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChartInput;