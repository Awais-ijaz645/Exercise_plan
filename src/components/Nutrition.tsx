import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Target, Scale, TrendingUp, Coffee, Sun, Moon, Utensils } from 'lucide-react';
import { mealPlans } from '../data/mealPlans';
import { MealPlan } from '../types';

export const Nutrition: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<'weight_loss' | 'muscle_gain' | 'balanced'>('weight_loss');
  const [selectedMealPlan, setSelectedMealPlan] = useState<MealPlan | null>(null);

  const goals = [
    {
      id: 'weight_loss' as const,
      name: 'Weight Loss',
      description: 'Lose weight with balanced, calorie-controlled meals',
      icon: Scale,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 'muscle_gain' as const,
      name: 'Muscle Gain',
      description: 'Build muscle with high-protein, nutrient-rich meals',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'balanced' as const,
      name: 'Balanced Health',
      description: 'Maintain overall health with balanced nutrition',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  const mealIcons = {
    breakfast: Sun,
    lunch: Utensils,
    dinner: Moon,
    snack: Coffee
  };

  const filteredMealPlans = mealPlans.filter(plan => plan.goal === selectedGoal);

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
              Nutrition Plans
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Achieve your fitness goals with personalized meal plans designed by nutrition experts
          </p>
        </motion.div>

        {/* Goal Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Goal</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((goal) => (
              <motion.button
                key={goal.id}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-6 rounded-2xl border-2 transition-colors ${
                  selectedGoal === goal.id
                    ? 'border-purple-500 bg-white shadow-lg'
                    : 'border-gray-200 bg-white/80 hover:border-purple-300'
                }`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${goal.color} flex items-center justify-center mx-auto mb-4`}>
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{goal.name}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Meal Plans */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedGoal}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid lg:grid-cols-2 gap-8 mb-12"
          >
            {filteredMealPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/40 shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{plan.calories}</div>
                      <div className="text-sm text-gray-600">calories/day</div>
                    </div>
                  </div>

                  {/* Macronutrients */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">{plan.protein}g</div>
                      <div className="text-sm text-gray-600">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{plan.carbs}g</div>
                      <div className="text-sm text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{plan.fats}g</div>
                      <div className="text-sm text-gray-600">Fats</div>
                    </div>
                  </div>

                  {/* Meals Preview */}
                  <div className="space-y-3 mb-6">
                    {plan.meals.map((meal, index) => {
                      const MealIcon = mealIcons[meal.type];
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <MealIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 capitalize">{meal.type}</div>
                            <div className="text-sm text-gray-600">{meal.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-gray-800">{meal.calories}</div>
                            <div className="text-xs text-gray-600">kcal</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedMealPlan(plan)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    View Full Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Nutrition Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Apple className="w-6 h-6" />
            <span>Nutrition Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Stay Hydrated</h3>
              <p className="text-purple-100 text-sm">Drink at least 8 glasses of water daily to support metabolism and recovery.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Meal Timing</h3>
              <p className="text-purple-100 text-sm">Eat every 3-4 hours to maintain steady energy levels throughout the day.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold mb-2">Portion Control</h3>
              <p className="text-purple-100 text-sm">Use your hand as a guide: palm for protein, fist for vegetables, cupped hand for carbs.</p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Meal Plan Modal */}
        <AnimatePresence>
          {selectedMealPlan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedMealPlan(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">{selectedMealPlan.name}</h2>
                    <button
                      onClick={() => setSelectedMealPlan(null)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedMealPlan.meals.map((meal, index) => {
                      const MealIcon = mealIcons[meal.type];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-lg overflow-hidden"
                        >
                          <img
                            src={meal.image}
                            alt={meal.name}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <MealIcon className="w-4 h-4 text-purple-600" />
                              <span className="text-sm font-medium text-purple-600 capitalize">{meal.type}</span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{meal.name}</h3>
                            <div className="text-lg font-bold text-purple-600 mb-3">{meal.calories} kcal</div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Ingredients:</h4>
                              <ul className="text-xs text-gray-600 space-y-1">
                                {meal.ingredients.map((ingredient, i) => (
                                  <li key={i}>• {ingredient}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
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