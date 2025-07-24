import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useUserStore } from '../store/userStore';

const { FiStar, FiZap, FiHeart, FiEye, FiArrowRight, FiUsers, FiTrendingUp, FiShield } = FiIcons;

const Home = () => {
  const { chartData } = useUserStore();

  const features = [
    {
      icon: FiZap,
      title: 'Instant AI Readings',
      description: 'Get personalized Human Design interpretations powered by advanced AI technology.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiEye,
      title: 'Interactive Charts',
      description: 'Explore your bodygraph with clickable centers, channels, and gates for detailed insights.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FiHeart,
      title: 'Personalized Guidance',
      description: 'Receive tailored advice based on your unique Human Design configuration.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Community Insights',
      description: 'Connect with others and share experiences in your Human Design journey.',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Charts Generated', icon: FiStar },
    { value: '95%', label: 'User Satisfaction', icon: FiTrendingUp },
    { value: '24/7', label: 'AI Availability', icon: FiShield },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Discover Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Human Design
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Unlock the secrets of your unique blueprint with AI-powered Human Design readings. 
                Get instant, personalized insights into your energy type, strategy, and life purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to={chartData ? "/chart" : "/chart-input"}
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
              >
                <span>{chartData ? 'View My Chart' : 'Generate My Chart'}</span>
                <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/resources"
                className="text-purple-600 hover:text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:bg-purple-50"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 opacity-20">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            />
          </div>
          <div className="absolute top-40 right-20 opacity-20">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4">
                  <SafeIcon icon={stat.icon} className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Human Design like never before with our advanced AI-powered platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have discovered their authentic self through Human Design
            </p>
            <Link
              to="/chart-input"
              className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Reading</span>
              <SafeIcon icon={FiArrowRight} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;