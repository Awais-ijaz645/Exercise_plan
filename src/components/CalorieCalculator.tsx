import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Flame, Clock, User, Activity } from 'lucide-react';
import { Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

export const CalorieCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    weight: '',
    duration: '',
    activity: 'running',
    intensity: 'moderate'
  });
  const [results, setResults] = useState<{
    calories: number;
    breakdown: { fat: number; carbs: number; protein: number };
    weeklyProjection: number[];
  } | null>(null);

  const activities = {
    running: { name: 'Running', multiplier: 11.4 },
    cycling: { name: 'Cycling', multiplier: 8.0 },
    swimming: { name: 'Swimming', multiplier: 12.1 },
    weightlifting: { name: 'Weight Lifting', multiplier: 6.0 },
    yoga: { name: 'Yoga', multiplier: 3.0 },
    dancing: { name: 'Dancing', multiplier: 7.2 },
    hiking: { name: 'Hiking', multiplier: 7.8 },
    boxing: { name: 'Boxing', multiplier: 13.2 }
  };

  const intensityMultipliers = {
    light: 0.8,
    moderate: 1.0,
    vigorous: 1.3
  };

  const calculateCalories = () => {
    if (!formData.weight || !formData.duration) return;

    const weight = parseFloat(formData.weight);
    const duration = parseFloat(formData.duration);
    const activityMultiplier = activities[formData.activity as keyof typeof activities].multiplier;
    const intensityMultiplier = intensityMultipliers[formData.intensity as keyof typeof intensityMultipliers];

    const caloriesBurned = Math.round((weight * 2.205) * activityMultiplier * intensityMultiplier * (duration / 60));

    const breakdown = {
      fat: Math.round(caloriesBurned * 0.4),
      carbs: Math.round(caloriesBurned * 0.5),
      protein: Math.round(caloriesBurned * 0.1)
    };

    const weeklyProjection = Array.from({ length: 7 }, (_, i) => 
      Math.round(caloriesBurned * (1 + (Math.random() - 0.5) * 0.2))
    );

    setResults({ calories: caloriesBurned, breakdown, weeklyProjection });
  };

  const doughnutData = results ? {
    labels: ['Fat', 'Carbohydrates', 'Protein'],
    datasets: [{
      data: [results.breakdown.fat, results.breakdown.carbs, results.breakdown.protein],
      backgroundColor: [
        'rgba(168, 85, 247, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(59, 130, 246, 0.8)'
      ],
      borderColor: [
        'rgba(168, 85, 247, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(59, 130, 246, 1)'
      ],
      borderWidth: 2
    }]
  } : null;

  const lineData = results ? {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Projected Calories Burned',
      data: results.weeklyProjection,
      borderColor: 'rgba(168, 85, 247, 1)',
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(168, 85, 247, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6
    }]
  } : null;

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
              Calorie Calculator
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate calories burned during your workouts and track your progress with visual charts
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Workout Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                  <User className="w-4 h-4" />
                  <span>Your Weight (kg)</span>
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your weight in kg"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Duration (minutes)</span>
                </label>
                <input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Workout duration in minutes"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                  <Activity className="w-4 h-4" />
                  <span>Activity Type</span>
                </label>
                <select
                  value={formData.activity}
                  onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  {Object.entries(activities).map(([key, activity]) => (
                    <option key={key} value={key}>{activity.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                  <Flame className="w-4 h-4" />
                  <span>Intensity Level</span>
                </label>
                <select
                  value={formData.intensity}
                  onChange={(e) => setFormData({ ...formData, intensity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="vigorous">Vigorous</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateCalories}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Calories</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Results */}
          {results && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Main Result */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Flame className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-3xl font-bold mb-2">Calories Burned</h3>
                  <div className="text-6xl font-bold mb-2">{results.calories}</div>
                  <p className="text-purple-100">
                    {activities[formData.activity as keyof typeof activities].name} • {formData.duration} minutes
                  </p>
                </div>
              </div>

              {/* Breakdown Chart */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Energy Source Breakdown</h3>
                {doughnutData && (
                  <div className="h-64">
                    <Doughnut
                      data={doughnutData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Weekly Projection Chart */}
        {results && lineData && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Weekly Projection</h3>
            <div className="h-80">
              <Line
                data={lineData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: 'Projected Daily Calorie Burn',
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};