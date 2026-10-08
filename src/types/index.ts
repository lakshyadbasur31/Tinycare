export type Language = 'en' | 'hi' | 'kn' | 'te' | 'ta';

export type UserRole = 'mother' | 'asha' | 'admin';

export type TabType = 
  | 'landing'
  | 'overview'
  | 'maternal'
  | 'child'
  | 'vaccinations'
  | 'nutrition'
  | 'growth'
  | 'hero'
  | 'passport'
  | 'alerts'
  | 'asha'
  | 'triage'
  | 'family'
  | 'impact'
  | 'architecture'
  | 'security'
  | 'comparison';

export interface MotherProfile {
  name: string;
  age: number;
  postpartumDay: number;
  totalDays: number;
  bloodPressure: string;
  temperature: string;
  recoveryPercentage: number;
  lochiaStatus: 'normal' | 'moderate' | 'heavy' | 'concerning';
  painLevel: number; // 0 to 10
  fatigueLevel: number; // 0 to 10
  mood: 'happy' | 'calm' | 'anxious' | 'exhausted' | 'sad';
  epdsScore: number;
  riskStatus: 'low' | 'moderate' | 'high';
  dietPreference: string;
  allergies: string[];
}

export interface ChildProfile {
  name: string;
  ageMonths: number;
  gender: 'male' | 'female';
  birthWeight: number; // kg
  currentWeight: number; // kg
  currentHeight: number; // cm
  headCircumference: number; // cm
  growthPercentile: number;
  nutritionScore: number;
  vaccinesCompleted: number;
  totalVaccines: number;
  heroLevel: number;
  heroXp: number;
  nextMilestone: string;
}

export interface Milestone {
  id: string;
  title: string;
  category: 'motor' | 'cognitive' | 'language' | 'social';
  expectedAgeMonths: number;
  completed: boolean;
  completedDate?: string;
  description: string;
}

export interface VaccineItem {
  id: string;
  name: string;
  dose: string;
  targetDisease: string;
  timeline: string;
  ageGroup: string;
  dueDate: string;
  status: 'completed' | 'upcoming' | 'overdue';
  whyItMatters: string;
  sideEffects: string;
  routeOfAdmin: string;
}

export interface MealItem {
  name: string;
  calories: number;
  protein: string;
  cost: number; // INR
  isLocal: boolean;
  isBudget: boolean;
  lactationFriendly: boolean;
  keyBenefits: string[];
  localIngredients: string[];
}

export interface DailyMealPlan {
  day: string;
  breakfast: MealItem;
  lunch: MealItem;
  snack: MealItem;
  dinner: MealItem;
  aiExplanation: string;
}

export interface RegionNutrition {
  id: string;
  name: string;
  state: string;
  staples: string[];
  description: string;
  days: DailyMealPlan[];
}

export interface AlertNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'vaccine' | 'maternal' | 'nutrition' | 'asha' | 'warning';
  priority: 'low' | 'medium' | 'high';
  read: boolean;
  channels: {
    inApp: boolean;
    whatsapp: boolean;
    sms: boolean;
    audio: boolean;
  };
}

export interface AshaFamilyRecord {
  id: string;
  motherName: string;
  childName: string;
  childAge: string;
  location: string;
  village: string;
  riskStatus: 'high' | 'followup' | 'healthy';
  lastVisit: string;
  nextTask: string;
  postpartumDay: number;
  vaccinesPending: number;
  phone: string;
  notes: string;
}

export interface BadgeItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  unlocked: boolean;
  xpValue: number;
  category: string;
}

export interface OfflineActivity {
  id: string;
  title: string;
  ageRange: string;
  duration: string;
  materials: string;
  skill: string;
  instructions: string[];
  badgeId: string;
}
