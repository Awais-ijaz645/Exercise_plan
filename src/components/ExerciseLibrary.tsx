import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Clock, Flame, Target, ChevronRight } from 'lucide-react';
import { exercises } from '../data/exercises';
import { Exercise } from '../types';

export const ExerciseLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const categories = ['All', 'Cardio', 'Strength', 'Flexibility', 'Yoga', 'HIIT'];

  const filteredExercises = selectedCategory === 'All' 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Exercise Library
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover hundreds of exercises with detailed instructions, target muscles, and calorie burn estimates
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Exercise Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence>
            {filteredExercises.map((exercise) => (
              <motion.div
                key={exercise.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedExercise(exercise)}
              >
                <div className="relative">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2">
                    <span className="text-white text-sm font-medium">{exercise.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{exercise.duration}s</span>
                    </div>
                    <div className="flex items-center space-x-1 text-red-600">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm">{exercise.caloriesPerMinute}/min</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-1 text-gray-600 mb-2">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-medium">Target Muscles:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {exercise.musclesTargeted.slice(0, 3).map((muscle, index) => (
                        <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {muscle}
                        </span>
                      ))}
                      {exercise.musclesTargeted.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{exercise.musclesTargeted.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Exercise Detail Modal */}
        <AnimatePresence>
          {selectedExercise && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedExercise(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedExercise.image}
                    alt={selectedExercise.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedExercise(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedExercise.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {selectedExercise.difficulty}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <Clock className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-bold text-purple-600">{selectedExercise.duration}s</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <Flame className="w-6 h-6 text-red-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Calories/min</div>
                      <div className="font-bold text-red-600">{selectedExercise.caloriesPerMinute}</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Target className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm text-gray-600">Category</div>
                      <div className="font-bold text-blue-600">{selectedExercise.category}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Target Muscles</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExercise.musclesTargeted.map((muscle, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {selectedExercise.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-600">{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};