import { MealPlan } from '../types';

export const mealPlans: MealPlan[] = [
  {
    id: '1',
    name: 'Weight Loss Plan',
    goal: 'weight_loss',
    calories: 1600,
    protein: 120,
    carbs: 150,
    fats: 60,
    meals: [
      {
        type: 'breakfast',
        name: 'Greek Yogurt Bowl',
        calories: 300,
        ingredients: ['Greek yogurt', 'Berries', 'Granola', 'Honey'],
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
      },
      {
        type: 'lunch',
        name: 'Grilled Chicken Salad',
        calories: 450,
        ingredients: ['Grilled chicken', 'Mixed greens', 'Tomatoes', 'Avocado', 'Olive oil'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
      },
      {
        type: 'dinner',
        name: 'Salmon with Vegetables',
        calories: 500,
        ingredients: ['Salmon fillet', 'Broccoli', 'Sweet potato', 'Lemon'],
        image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg'
      },
      {
        type: 'snack',
        name: 'Protein Smoothie',
        calories: 350,
        ingredients: ['Protein powder', 'Banana', 'Spinach', 'Almond milk'],
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
      }
    ]
  },
  {
    id: '2',
    name: 'Muscle Gain Plan',
    goal: 'muscle_gain',
    calories: 2800,
    protein: 200,
    carbs: 300,
    fats: 100,
    meals: [
      {
        type: 'breakfast',
        name: 'Protein Pancakes',
        calories: 600,
        ingredients: ['Oats', 'Protein powder', 'Eggs', 'Banana', 'Maple syrup'],
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
      },
      {
        type: 'lunch',
        name: 'Quinoa Power Bowl',
        calories: 750,
        ingredients: ['Quinoa', 'Chicken breast', 'Black beans', 'Avocado', 'Nuts'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
      },
      {
        type: 'dinner',
        name: 'Steak & Rice',
        calories: 900,
        ingredients: ['Lean steak', 'Brown rice', 'Asparagus', 'Sweet potato'],
        image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg'
      },
      {
        type: 'snack',
        name: 'Post-Workout Shake',
        calories: 550,
        ingredients: ['Whey protein', 'Banana', 'Oats', 'Peanut butter', 'Milk'],
        image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
      }
    ]
  }
];