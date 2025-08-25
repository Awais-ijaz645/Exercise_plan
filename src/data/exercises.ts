import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Burpees',
    category: 'HIIT',
    musclesTargeted: ['Full Body', 'Core', 'Legs', 'Arms'],
    caloriesPerMinute: 12,
    difficulty: 'Advanced',
    duration: 30,
    instructions: [
      'Start in a standing position',
      'Drop into a squat and place hands on the ground',
      'Jump feet back into a plank position',
      'Do a push-up',
      'Jump feet back to squat position',
      'Explode up with arms overhead'
    ],
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg'
  },
  {
    id: '2',
    name: 'Mountain Climbers',
    category: 'Cardio',
    musclesTargeted: ['Core', 'Shoulders', 'Legs'],
    caloriesPerMinute: 10,
    difficulty: 'Intermediate',
    duration: 45,
    instructions: [
      'Start in plank position',
      'Alternate bringing knees to chest',
      'Keep core engaged',
      'Maintain steady rhythm'
    ],
    image: 'https://images.pexels.com/photos/4162438/pexels-photo-4162438.jpeg'
  },
  {
    id: '3',
    name: 'Deadlifts',
    category: 'Strength',
    musclesTargeted: ['Hamstrings', 'Glutes', 'Lower Back'],
    caloriesPerMinute: 8,
    difficulty: 'Intermediate',
    duration: 60,
    instructions: [
      'Stand with feet hip-width apart',
      'Hold barbell with overhand grip',
      'Keep back straight, chest up',
      'Hinge at hips, lower bar to shins',
      'Drive hips forward to return to standing'
    ],
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg'
  },
  {
    id: '4',
    name: 'Yoga Flow',
    category: 'Yoga',
    musclesTargeted: ['Full Body', 'Core', 'Flexibility'],
    caloriesPerMinute: 4,
    difficulty: 'Beginner',
    duration: 120,
    instructions: [
      'Start in mountain pose',
      'Flow through sun salutations',
      'Hold each pose for 30 seconds',
      'Focus on breath and alignment'
    ],
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
  },
  {
    id: '5',
    name: 'Plank Hold',
    category: 'Strength',
    musclesTargeted: ['Core', 'Shoulders', 'Arms'],
    caloriesPerMinute: 6,
    difficulty: 'Beginner',
    duration: 60,
    instructions: [
      'Start in push-up position',
      'Hold body straight',
      'Engage core muscles',
      'Keep breathing steady'
    ],
    image: 'https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg'
  },
  {
    id: '6',
    name: 'Stretching Routine',
    category: 'Flexibility',
    musclesTargeted: ['Full Body', 'Hamstrings', 'Hip Flexors'],
    caloriesPerMinute: 3,
    difficulty: 'Beginner',
    duration: 90,
    instructions: [
      'Start with gentle neck rolls',
      'Stretch each muscle group',
      'Hold stretches for 30 seconds',
      'Focus on relaxation and breathing'
    ],
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg'
  }
];