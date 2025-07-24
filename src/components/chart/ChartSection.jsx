import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiInfo, FiZap, FiHeart, FiCompass, FiGrid } = FiIcons;

const ChartSection = ({ section, chartData }) => {
  const getSectionContent = () => {
    switch (section) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Welcome to Your Human Design</h3>
              <p className="text-purple-700 leading-relaxed mb-4">
                Your Human Design chart reveals your unique energetic blueprint. As a <strong>{chartData.type}</strong> with 
                a <strong>{chartData.profile}</strong> profile, you have specific ways of engaging with the world that are 
                naturally aligned with who you are.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Energy Type</h4>
                  <p className="text-gray-600">{chartData.type}</p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Profile</h4>
                  <p className="text-gray-600">{chartData.profile}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiZap} className="text-yellow-500 mt-1" />
                  <div>
                    <strong>Strategy:</strong> {chartData.strategy}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiHeart} className="text-red-500 mt-1" />
                  <div>
                    <strong>Authority:</strong> {chartData.authority}
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <SafeIcon icon={FiGrid} className="text-blue-500 mt-1" />
                  <div>
                    <strong>Defined Centers:</strong> {chartData.definedCenters?.length || 0} of 9
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'type':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <SafeIcon icon={FiZap} className="text-2xl text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{chartData.type}</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About Your Type</h4>
                <p className="text-gray-600 leading-relaxed">
                  {getTypeDescription(chartData.type)}
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Characteristics</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {getTypeCharacteristics(chartData.type).map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Living as a {chartData.type}</h4>
                <p className="text-yellow-800">
                  {getTypeLivingTips(chartData.type)}
                </p>
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <SafeIcon icon={FiCompass} className="text-2xl text-blue-500" />
              <h3 className="text-2xl font-bold text-gray-900">Strategy: {chartData.strategy}</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What This Means</h4>
                <p className="text-gray-600 leading-relaxed">
                  {getStrategyDescription(chartData.strategy)}
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">How to Apply Your Strategy</h4>
                <p className="text-blue-800">
                  {getStrategyApplication(chartData.strategy)}
                </p>
              </div>
            </div>
          </div>
        );

      case 'authority':
        return (
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <SafeIcon icon={FiHeart} className="text-2xl text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900">Authority: {chartData.authority}</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Your Decision-Making Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  {getAuthorityDescription(chartData.authority)}
                </p>
              </div>
              
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Making Decisions</h4>
                <p className="text-red-800">
                  {getAuthorityGuidance(chartData.authority)}
                </p>
              </div>
            </div>
          </div>
        );

      case 'centers':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <SafeIcon icon={FiGrid} className="text-2xl text-purple-500" />
                <h3 className="text-2xl font-bold text-gray-900">Your Centers</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">
                    Defined Centers ({chartData.definedCenters?.length || 0})
                  </h4>
                  <p className="text-green-800 text-sm mb-3">
                    These centers provide you with consistent, reliable energy and themes.
                  </p>
                  <ul className="space-y-1">
                    {(chartData.definedCenters || []).map((center, index) => (
                      <li key={index} className="text-green-700 capitalize">{center}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <h4 className="text-lg font-semibold text-orange-900 mb-3">
                    Undefined Centers ({9 - (chartData.definedCenters?.length || 0)})
                  </h4>
                  <p className="text-orange-800 text-sm mb-3">
                    These centers are areas of openness and wisdom through others.
                  </p>
                  <p className="text-orange-700 text-sm">
                    Your undefined centers are places where you take in and amplify the energy of others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {getSectionContent()}
    </motion.div>
  );
};

// Helper functions for content
const getTypeDescription = (type) => {
  const descriptions = {
    'Manifestor': 'Manifestors are the initiators of the Human Design system. You have the energy to start things and make things happen. You are designed to act independently and inform others of your actions.',
    'Generator': 'Generators are the life force of the planet. You have sustainable energy when you are engaged in work that you love. Your sacral center provides you with gut responses to guide your decisions.',
    'Manifesting Generator': 'Manifesting Generators combine the initiating power of Manifestors with the sustainable energy of Generators. You can start things and see them through, often taking shortcuts and multi-tasking effectively.',
    'Projector': 'Projectors are natural guides and leaders. You have a gift for seeing the big picture and guiding others efficiently. You are designed to wait for recognition and invitations before sharing your wisdom.',
    'Reflector': 'Reflectors are the mirrors of society. You reflect the health and energy of your environment. You are designed to wait a full lunar cycle before making major decisions, sampling the energy around you.'
  };
  return descriptions[type] || 'Information about your type is being updated.';
};

const getTypeCharacteristics = (type) => {
  const characteristics = {
    'Manifestor': [
      'Natural initiators and leaders',
      'Can act independently without needing permission',
      'Have the energy to start new projects and ventures',
      'Work best when they inform others of their actions'
    ],
    'Generator': [
      'Have sustainable life force energy',
      'Respond to life rather than initiate',
      'Find satisfaction in work they love',
      'Have a strong gut response system'
    ],
    'Manifesting Generator': [
      'Can initiate and respond to opportunities',
      'Multi-talented and efficient',
      'Often take shortcuts to get things done',
      'Need to inform others like Manifestors'
    ],
    'Projector': [
      'Natural guides and managers',
      'See the big picture and inefficiencies',
      'Work best with recognition and invitations',
      'Need to manage their energy carefully'
    ],
    'Reflector': [
      'Highly sensitive to their environment',
      'Reflect the health of their community',
      'Need time to make major decisions',
      'Benefit from spending time in different environments'
    ]
  };
  return characteristics[type] || ['Your characteristics are being updated.'];
};

const getTypeLivingTips = (type) => {
  const tips = {
    'Manifestor': 'Remember to inform others before you act. This creates peace and reduces resistance to your initiatives.',
    'Generator': 'Follow your gut responses and engage in work that lights you up. Avoid forcing things that don\'t feel right.',
    'Manifesting Generator': 'Trust your multi-passionate nature and don\'t be afraid to pivot when something no longer excites you.',
    'Projector': 'Wait for recognition and invitations. Focus on mastering your gifts and being seen for your unique talents.',
    'Reflector': 'Take your time with decisions and surround yourself with healthy people and environments.'
  };
  return tips[type] || 'Living tips for your type are being updated.';
};

const getStrategyDescription = (strategy) => {
  const descriptions = {
    'To Inform': 'Your strategy is to inform others before you act. This creates peace and reduces resistance in your relationships and endeavors.',
    'To Respond': 'Your strategy is to respond to life rather than initiate. Wait for something to respond to, then follow your gut feeling.',
    'To Wait for the Invitation': 'Your strategy is to wait for recognition and invitations. This ensures you\'re valued and your gifts are appreciated.',
    'To Wait a Lunar Cycle': 'Your strategy is to wait approximately 28 days before making major decisions, sampling different environments and energies.'
  };
  return descriptions[strategy] || 'Information about your strategy is being updated.';
};

const getStrategyApplication = (strategy) => {
  const applications = {
    'To Inform': 'Before starting new projects, changing directions, or making moves, let the people who will be affected know what you\'re planning.',
    'To Respond': 'Pay attention to what excites you and what you feel drawn to. Your sacral response will guide you toward what\'s correct for you.',
    'To Wait for the Invitation': 'Focus on developing your skills and being visible in your expertise. The right invitations will come when you\'re recognized.',
    'To Wait a Lunar Cycle': 'For major decisions, give yourself time to experience different perspectives and environments before committing.'
  };
  return applications[strategy] || 'Application guidance for your strategy is being updated.';
};

const getAuthorityDescription = (authority) => {
  const descriptions = {
    'Sacral Authority': 'Your sacral center provides you with gut responses - yes/no feelings that guide your decisions. Trust these immediate responses.',
    'Emotional Authority': 'You need to ride your emotional wave before making decisions. No decision should be made in the heat of emotion.',
    'Splenic Authority': 'Your spleen provides you with intuitive, in-the-moment awareness. Trust your first instinct and spontaneous knowing.',
    'Ego Authority': 'Your heart center guides your decisions through what you have the willpower and resources to commit to.',
    'Self-Projected Authority': 'You need to talk through your decisions and hear your own voice to know what\'s correct for you.',
    'Mental Authority': 'You process decisions through discussion with others, gaining clarity through external sounding boards.',
    'Lunar Authority': 'You need a full lunar cycle to make major decisions, experiencing different perspectives over time.'
  };
  return descriptions[authority] || 'Information about your authority is being updated.';
};

const getAuthorityGuidance = (authority) => {
  const guidance = {
    'Sacral Authority': 'Listen for the "uh-huh" (yes) or "unh-unh" (no) sounds from your gut. Don\'t override these responses with your mind.',
    'Emotional Authority': 'Sleep on it. Give yourself time to feel into decisions and notice how your emotions change over time.',
    'Splenic Authority': 'Trust your first instinct. Your spleen speaks once and quietly - don\'t second-guess yourself.',
    'Ego Authority': 'Ask yourself: "Do I have the energy and willpower to see this through?" Only commit to what you can truly deliver.',
    'Self-Projected Authority': 'Talk out loud about your decisions. Pay attention to how you sound and what feels right when you speak.',
    'Mental Authority': 'Discuss your decisions with trusted friends or advisors. Clarity comes through external processing.',
    'Lunar Authority': 'For major decisions, wait 28 days and notice how you feel about it in different environments and moods.'
  };
  return guidance[authority] || 'Guidance for your authority is being updated.';
};

export default ChartSection;