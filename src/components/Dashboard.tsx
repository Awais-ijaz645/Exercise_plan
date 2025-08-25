import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Flame, Activity, TrendingUp, Calendar, Award, Users } from 'lucide-react';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
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
  BarElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, BarElement);

export const Dashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Mock user data
  const userData = {
    name: 'Alex Johnson',
    avatar: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
    currentStreak: 7,
    totalWorkouts: 45,
    caloriesBurned: 12450,
    goals: {
      dailyCalories: 400,
      weeklyWorkouts: 5,
      weightLoss: 10
    },
    progress: {
      todayCalories: 320,
      weekWorkouts: 4,
      currentWeight: 75
    }
  };

  const weeklyData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Calories Burned',
      data: [450, 320, 580, 400, 620, 350, 480],
      borderColor: 'rgba(168, 85, 247, 1)',
      backgroundColor: 'rgba(168, 85, 247, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  };

  const workoutTypes = {
    labels: ['Cardio', 'Strength', 'Yoga', 'HIIT'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: [
        'rgba(168, 85, 247, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)'
      ],
      borderColor: [
        'rgba(168, 85, 247, 1)',
        'rgba(236, 72, 153, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(16, 185, 129, 1)'
      ],
      borderWidth: 2
    }]
  };

  const monthlyProgress = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Workouts Completed',
      data: [4, 5, 6, 4],
      backgroundColor: 'rgba(168, 85, 247, 0.8)',
      borderColor: 'rgba(168, 85, 247, 1)',
      borderWidth: 2,
      borderRadius: 8
    }]
  };

  const achievements = [
    { id: 1, name: 'First Workout', icon: '🏃‍♀️', earned: true, date: '2024-01-15' },
    { id: 2, name: '7-Day Streak', icon: '🔥', earned: true, date: '2024-01-22' },
    { id: 3, name: 'Calorie Crusher', icon: '⚡', earned: true, date: '2024-01-20' },
    { id: 4, name: '30-Day Challenge', icon: '🏆', earned: false, date: null },
    { id: 5, name: 'Strength Master', icon: '💪', earned: false, date: null },
    { id: 6, name: 'Yoga Guru', icon: '🧘‍♀️', earned: false, date: null }
  ];

  const statsCards = [
    {
      title: 'Current Streak',
      value: userData.currentStreak,
      unit: 'days',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Total Workouts',
      value: userData.totalWorkouts,
      unit: 'sessions',
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Calories Burned',
      value: userData.caloriesBurned.toLocaleString(),
      unit: 'kcal',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Days',
      value: 28,
      unit: 'this month',
      icon: Calendar,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600">Ready to crush your fitness goals today?</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {['week', 'month', 'year'].map((period) => (
              <motion.button
                key={period}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                  selectedPeriod === period
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {period}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.unit}</div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-700">{stat.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Goal Progress */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span>Today's Goals</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Calories Burned</span>
                  <span>{userData.progress.todayCalories}/{userData.goals.dailyCalories}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(userData.progress.todayCalories / userData.goals.dailyCalories) * 100}%` }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Weekly Workouts</span>
                  <span>{userData.progress.weekWorkouts}/{userData.goals.weeklyWorkouts}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(userData.progress.weekWorkouts / userData.goals.weeklyWorkouts) * 100}%` }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Workout Distribution</h3>
            <div className="h-48">
              <Doughnut
                data={workoutTypes}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        padding: 10,
                        font: {
                          size: 12
                        }
                      }
                    }
                  }
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span>Achievements</span>
            </h3>
            
            <div className="space-y-3">
              {achievements.slice(0, 4).map((achievement) => (
                <div
                  key={achievement.id}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    achievement.earned ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className={`font-medium ${achievement.earned ? 'text-green-800' : 'text-gray-500'}`}>
                      {achievement.name}
                    </div>
                    {achievement.earned && achievement.date && (
                      <div className="text-xs text-green-600">{achievement.date}</div>
                    )}
                  </div>
                  {achievement.earned && (
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Progress</h3>
            <div className="h-64">
              <Line
                data={weeklyData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Summary</h3>
            <div className="h-64">
              <Bar
                data={monthlyProgress}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 7
                    }
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};