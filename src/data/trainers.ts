import { Trainer } from '../types';

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    specialty: ['HIIT', 'Weight Loss', 'Cardio'],
    experience: 8,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg',
    bio: 'Certified personal trainer specializing in high-intensity workouts and sustainable weight loss programs.',
    programs: [
      {
        id: '1',
        name: 'HIIT Transformation',
        duration: '12 weeks',
        price: 299,
        description: 'Complete body transformation through high-intensity interval training',
        features: ['3 workouts/week', 'Nutrition guide', 'Progress tracking', '24/7 support']
      }
    ]
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    specialty: ['Strength Training', 'Muscle Building'],
    experience: 12,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg',
    bio: 'Former competitive bodybuilder with expertise in strength training and muscle development.',
    programs: [
      {
        id: '2',
        name: 'Strength Builder',
        duration: '16 weeks',
        price: 399,
        description: 'Progressive strength training program for serious muscle gains',
        features: ['4 workouts/week', 'Custom meal plans', 'Form coaching', 'Supplement guide']
      }
    ]
  },
  {
    id: '3',
    name: 'Emma Chen',
    specialty: ['Yoga', 'Flexibility', 'Mindfulness'],
    experience: 6,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg',
    bio: 'Yoga instructor focused on mindful movement, flexibility, and mental wellness.',
    programs: [
      {
        id: '3',
        name: 'Mindful Movement',
        duration: '8 weeks',
        price: 199,
        description: 'Transform your body and mind through yoga and meditation',
        features: ['Daily sessions', 'Meditation guide', 'Flexibility tracking', 'Community access']
      }
    ]
  }
];