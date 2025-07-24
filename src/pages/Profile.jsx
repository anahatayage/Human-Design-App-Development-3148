import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useUserStore } from '../store/userStore';

const { FiUser, FiSettings, FiDownload, FiTrash2, FiEdit3, FiSave, FiX } = FiIcons;

const Profile = () => {
  const { currentUser, chartData, clearChatHistory, logout } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: chartData?.name || '',
    email: currentUser?.email || '',
  });

  const handleSave = () => {
    // In a real app, this would update the user data
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: chartData?.name || '',
      email: currentUser?.email || '',
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Profile Settings
          </h1>
          <p className="text-xl text-gray-600">
            Manage your account and Human Design preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                  >
                    <SafeIcon icon={FiEdit3} />
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <SafeIcon icon={FiSave} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      <SafeIcon icon={FiX} />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    />
                  ) : (
                    <p className="text-gray-900 text-lg">{chartData?.name || 'Not provided'}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    />
                  ) : (
                    <p className="text-gray-900 text-lg">{currentUser?.email || 'Not provided'}</p>
                  )}
                </div>

                {chartData && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Birth Date
                      </label>
                      <p className="text-gray-900 text-lg">
                        {chartData.birthDate ? new Date(chartData.birthDate).toLocaleDateString() : 'Not provided'}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Birth Location
                      </label>
                      <p className="text-gray-900 text-lg">{chartData.birthPlace || 'Not provided'}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Chart Summary */}
            {chartData && (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Human Design Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Energy Type</h3>
                    <p className="text-purple-700 text-lg">{chartData.type}</p>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">Strategy</h3>
                    <p className="text-indigo-700 text-lg">{chartData.strategy}</p>
                  </div>
                  <div className="bg-pink-50 rounded-xl p-4">
                    <h3 className="font-semibold text-pink-900 mb-2">Authority</h3>
                    <p className="text-pink-700 text-lg">{chartData.authority}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Profile</h3>
                    <p className="text-blue-700 text-lg">{chartData.profile}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Actions Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Account Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <SafeIcon icon={FiDownload} className="text-purple-600" />
                  <span className="text-gray-700">Download Chart PDF</span>
                </button>
                
                <button 
                  onClick={clearChatHistory}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <SafeIcon icon={FiTrash2} className="text-orange-600" />
                  <span className="text-gray-700">Clear Chat History</span>
                </button>
                
                <button 
                  onClick={logout}
                  className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
                >
                  <SafeIcon icon={FiUser} className="text-red-600" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Email Notifications</span>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Daily Insights</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Weekly Reports</span>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </div>
            </div>

            {/* App Info */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-lg font-bold text-purple-900 mb-2">HD Insights</h3>
              <p className="text-purple-700 text-sm mb-4">
                Your personal Human Design companion powered by AI
              </p>
              <p className="text-purple-600 text-xs">Version 1.0.0</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;