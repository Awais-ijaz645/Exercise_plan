import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, DollarSign, Users, Award, MessageCircle } from 'lucide-react';
import { trainers } from '../data/trainers';
import { testimonials } from '../data/testimonials';

export const Trainers: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(trainers[0]);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const pricingPlans = [
    {
      name: 'Basic',
      price: 29,
      period: 'month',
      features: [
        'Access to exercise library',
        'Basic workout plans',
        'Progress tracking',
        'Community access'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      name: 'Pro',
      price: 59,
      period: 'month',
      features: [
        'Everything in Basic',
        'Personalized meal plans',
        'Advanced analytics',
        'Priority support',
        '1-on-1 coaching sessions'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      features: [
        'Everything in Pro',
        'Custom workout creation',
        'Nutrition consultation',
        'Weekly video calls',
        'Supplement recommendations'
      ],
      color: 'from-yellow-500 to-orange-500',
      popular: false
    }
  ];

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
              Expert Trainers
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Train with certified professionals who will guide you to achieve your fitness goals
          </p>
        </motion.div>

        {/* Trainers Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Trainer List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Trainers</h2>
            <div className="space-y-4">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={trainer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedTrainer(trainer)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedTrainer.id === trainer.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/80 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold">{trainer.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{trainer.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trainer Details */}
          <motion.div
            key={selectedTrainer.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg"
          >
            <div className="flex items-start space-x-6 mb-6">
              <img
                src={selectedTrainer.image}
                alt={selectedTrainer.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedTrainer.name}</h2>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{selectedTrainer.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>{selectedTrainer.experience} years experience</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedTrainer.specialty.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{selectedTrainer.bio}</p>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Training Programs</h3>
              <div className="space-y-4">
                {selectedTrainer.programs.map((program) => (
                  <motion.div
                    key={program.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-800">{program.name}</h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">${program.price}</div>
                        <div className="text-sm text-gray-600">{program.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {program.features.map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                    >
                      Start Program
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.story}</p>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-600">{testimonial.transformation}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative bg-white rounded-2xl p-8 border shadow-lg ${
                  plan.popular ? 'border-purple-300 ring-2 ring-purple-200' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-shadow ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};