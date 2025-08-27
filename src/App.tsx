import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExerciseLibrary } from './components/ExerciseLibrary';
import { CalorieCalculator } from './components/CalorieCalculator';
import { Dashboard } from './components/Dashboard';
import { Nutrition } from './components/Nutrition';
import { Trainers } from './components/Trainers';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleGetStarted = () => {
    setCurrentPage('dashboard');
  };

  const handleLoginClick = (mode: 'sign-in' | 'sign-up' = 'sign-in') => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const handleSearchNavigate = (page: string, id: string) => {
    setCurrentPage(page);
    setSelectedItemId(id);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedItemId(null); // Reset selected item when navigating manually
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onGetStarted={handleGetStarted} />;
      case 'exercises':
        return <ExerciseLibrary selectedExerciseId={selectedItemId} />;
      case 'calculator':
        return <CalorieCalculator />;
      case 'dashboard':
        return <Dashboard />;
      case 'nutrition':
        return <Nutrition selectedPlanId={selectedItemId} />;
      case 'trainers':
        return <Trainers />;
      default:
        return <Hero onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onPageChange={handlePageChange} onLoginClick={handleLoginClick} onSearchNavigate={handleSearchNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onPageChange={handlePageChange} />

      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={(m) => setAuthMode(m)}
      />
    </div>
  );
}

export default App;