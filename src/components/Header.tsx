import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, Home, Dumbbell, Calculator, Apple, Trophy, Users } from 'lucide-react';
import { useUser, UserButton } from '@clerk/clerk-react';
import { Search } from './Search';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLoginClick?: (mode?: 'sign-in' | 'sign-up') => void;
  onSearchNavigate: (page: string, id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, onLoginClick, onSearchNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'exercises', label: 'Exercises', icon: Dumbbell },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'nutrition', label: 'Nutrition', icon: Apple },
    { id: 'dashboard', label: 'Dashboard', icon: Trophy },
    { id: 'trainers', label: 'Trainers', icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
              FitPro
            </h1>
          </motion.div>

          <div className="hidden md:flex flex-1 justify-center px-4 lg:px-8">
            <div className="w-full max-w-md">
              <Search onNavigate={onSearchNavigate} />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPageChange(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </motion.button>
              ))}
            </nav>

            {isSignedIn ? (
              <div className="flex items-center">
                <UserButton afterSignOutUrl="/" appearance={{ variables: { colorPrimary: '#a855f7' } }} />
              </div>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onLoginClick?.('sign-in')}
                  className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onLoginClick?.('sign-up')}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition"
                >
                  <span>Sign up</span>
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20"
          >
            <div className="mb-4">
              <Search onNavigate={(page, id) => { onSearchNavigate(page, id); setIsMenuOpen(false); }} />
            </div>
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 mb-2 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/20'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </motion.button>
            ))}

            {!isSignedIn && (
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => { onLoginClick?.('sign-in'); setIsMenuOpen(false); }}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20"
                >
                  Login
                </button>
                <button
                  onClick={() => { onLoginClick?.('sign-up'); setIsMenuOpen(false); }}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Sign up
                </button>
              </div>
            )}
          </motion.nav>
        )}
      </div>
    </header>
  );
};