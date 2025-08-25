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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm font-medium mb-4">
                ✨ {motivationalQuotes[currentQuote]}
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Your Fitness
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Journey Starts
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Here
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl">
              Transform your body and mind with personalized workouts, nutrition plans, 
              and expert guidance. Join thousands who've already achieved their goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl transition-all"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold flex items-center justify-center space-x-2 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-purple-200 text-sm">{stat.label}</div>
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
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20"
              />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg"
                  alt="Fitness Training"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                <div className="absolute top-12 right-12 bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Exercises</div>
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