import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ChartInput from './pages/ChartInput';
import ChartViewer from './pages/ChartViewer';
import AIChat from './pages/AIChat';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import { useUserStore } from './store/userStore';

function App() {
  const { currentUser } = useUserStore();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart-input" element={<ChartInput />} />
            <Route path="/chart" element={<ChartViewer />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '12px',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;