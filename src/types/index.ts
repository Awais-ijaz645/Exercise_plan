export interface Exercise {
  id: string;
  name: string;
  category: 'Cardio' | 'Strength' | 'Flexibility' | 'Yoga' | 'HIIT';
  musclesTargeted: string[];
  caloriesPerMinute: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  instructions: string[];
  image: string;
  duration: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  goals: FitnessGoal[];
  stats: UserStats;
}

export interface FitnessGoal {
  id: string;
  type: 'weight_loss' | 'muscle_gain' | 'endurance' | 'strength';
  target: number;
  current: number;
  deadline: string;
  achieved: boolean;
}

export interface UserStats {
  totalWorkouts: number;
  totalCaloriesBurned: number;
  currentStreak: number;
  longestStreak: number;
  weeklyProgress: number[];
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string[];
  experience: number;
  rating: number;
  image: string;
  bio: string;
  programs: TrainerProgram[];
}

export interface TrainerProgram {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
}

export interface MealPlan {
  id: string;
  name: string;
  goal: 'weight_loss' | 'muscle_gain' | 'balanced';
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  meals: Meal[];
}

export interface Meal {
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  calories: number;
  ingredients: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  transformation: string;
  rating: number;
}