import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, Trophy, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const motivationalQuotes = [
    "Transform your body, transform your life",
    "Every workout is progress",
    "Stronger than yesterday",
    "Your only limit is you"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Members' },
    { icon: Trophy, value: '50K+', label: 'Goals Achieved' },
    { icon: Star, value: '4.9', label: 'App Rating' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b12]">
      {/* Neon gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-purple-500/30 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 py-24 sm:py-28 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium mb-4 border border-white/10">
                ✨ {motivationalQuotes[currentQuote]}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-purple-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]">
                Your Fitness
                <span className="absolute inset-0 -z-10 blur-xl opacity-30 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
              </span>
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_18px_rgba(236,72,153,0.45)]">
                Journey Starts
                <span className="absolute inset-0 -z-10 blur-xl opacity-25 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500" />
              </span>
              <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow-[0_0_14px_rgba(168,85,247,0.5)]">
                Here
                <span className="absolute inset-0 -z-10 blur-xl opacity-25 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500" />
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-purple-100/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              Transform your body and mind with personalized workouts, nutrition plans, 
              and expert guidance. Join thousands who've already achieved their goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:items-center sm:justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(236,72,153,0.45), 0 0 54px rgba(168,85,247,0.35)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold flex items-center justify-center space-x-2 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_18px_rgba(168,85,247,0.45)]">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-purple-200 text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20"
              />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 sm:p-3 lg:p-4 border border-white/20 shadow-[0_0_40px_rgba(168,85,247,0.25)]">
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(168,85,247,.25)' }} />
                <img
                  src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg"
                  alt="Fitness Training"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                />
                
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-white/20 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
                  <div className="text-white text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">500+</div>
                    <div className="text-xs sm:text-sm">Exercises</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};