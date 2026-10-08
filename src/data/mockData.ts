import {
  MotherProfile,
  ChildProfile,
  Milestone,
  VaccineItem,
  RegionNutrition,
  AlertNotification,
  AshaFamilyRecord,
  BadgeItem,
  OfflineActivity
} from '../types';

export const initialMother: MotherProfile = {
  name: "Ananya Sharma",
  age: 26,
  postpartumDay: 18,
  totalDays: 40,
  bloodPressure: "118/76",
  temperature: "98.4°F",
  recoveryPercentage: 78,
  lochiaStatus: "normal",
  painLevel: 2,
  fatigueLevel: 3,
  mood: "calm",
  epdsScore: 4, // 0-30; <10 is normal screening range
  riskStatus: "low",
  dietPreference: "Vegetarian with dairy & local millets",
  allergies: ["None reported"]
};

export const initialChild: ChildProfile = {
  name: "Aarav Sharma",
  ageMonths: 14,
  gender: "male",
  birthWeight: 3.1,
  currentWeight: 9.8,
  currentHeight: 78.5,
  headCircumference: 46.2,
  growthPercentile: 62, // 50th-85th is healthy green band
  nutritionScore: 86,
  vaccinesCompleted: 8,
  totalVaccines: 9,
  heroLevel: 4,
  heroXp: 680,
  nextMilestone: "Walks independently without support"
};

export const problemCards = [
  {
    id: 1,
    title: "Missed Vaccinations",
    stat: "1 in 3 Children",
    subtitle: "Miss at least one critical NIS dose due to forgotten dates or migrant travel.",
    whatHappensToday: "Paper cards get misplaced; PHC record books lack proactive automated multi-channel SMS/WhatsApp triggers.",
    icon: "ShieldAlert",
    tag: "Immunization Gap"
  },
  {
    id: 2,
    title: "The '40-Day Void'",
    stat: "68% Postpartum Mothers",
    subtitle: "Receive zero structured medical follow-ups between hospital discharge and 6 weeks.",
    whatHappensToday: "Complications like puerperal sepsis, severe anemia, and postpartum depression go completely unnoticed.",
    icon: "HeartCrack",
    tag: "Maternal Neglect"
  },
  {
    id: 3,
    title: "Language & Literacy Barriers",
    stat: "74% Non-English",
    subtitle: "Rural and semi-urban mothers struggle with text-heavy clinical brochures.",
    whatHappensToday: "Crucial newborn warning signs like jaundice or dehydration are missed due to literacy gaps.",
    icon: "Languages",
    tag: "Accessibility Void"
  },
  {
    id: 4,
    title: "Generic / Non-Local Nutrition",
    stat: "₹180/day Diet Traps",
    subtitle: "Apps push expensive imported foods (quinoa, berries) instead of indigenous millets.",
    whatHappensToday: "Families ignore advice because it conflicts with local food traditions and rural household budgets.",
    icon: "UtensilsCrossed",
    tag: "Dietary Mismatch"
  },
  {
    id: 5,
    title: "Fragmented Medical Records",
    stat: "82% Lost History",
    subtitle: "Vaccine slips, lab reports, and growth cards are scattered across clinics.",
    whatHappensToday: "When visiting a new district hospital or PHC, doctors must start diagnoses with zero longitudinal history.",
    icon: "FileWarning",
    tag: "Data Disconnect"
  }
];

export const recoveryStages = [
  {
    range: "Days 1–7",
    title: "Immediate Healing & Colostrum Feeding",
    nutrition: "Warm cumin water, moong dal khichdi, soaked almonds, easily digestible warm soups.",
    recovery: "Uterine involution monitoring, active latch support, wound hygiene, pelvic rest.",
    activity: "Deep belly breathing, gentle ankle rotations, slow supported room walking.",
    warningSigns: "Heavy bleeding soaking >1 pad/hour, fever >100.4°F, severe foul odor."
  },
  {
    range: "Days 8–14",
    title: "Lactation Stabilization & Energy Recovery",
    nutrition: "Methi (fenugreek) laddus, ragi porridge, drumstick leaves (moringa), garlic broth.",
    recovery: "Lochia serosa transition (pinkish/brownish), breast engorgement relief, sleep catch-up.",
    activity: "Pelvic tilts in bed, shoulder roll stretches, light seated posture realignment.",
    warningSigns: "Sudden bright red heavy clotting, localized hard red painful breast lump with chills."
  },
  {
    range: "Days 15–21",
    title: "Pelvic Floor Strengthening (Current Stage)",
    nutrition: "Sesame (til) chikki, bajra roti with ghee, curd, sprouted pulses, spinach stew.",
    recovery: "Abdominal wall healing (diastasis recti check), lochia alba (creamy light discharge).",
    activity: "Gentle Kegel holds (5 seconds x 10 reps), 15-minute shaded garden walk.",
    warningSigns: "Severe calf pain/swelling, sharp lower pelvic stabbing pain, continuous mood hopelessness."
  },
  {
    range: "Days 22–30",
    title: "Vitality & Emotional Resilience",
    nutrition: "Mixed millet rotis, soaked walnuts, lentils with lemon (iron absorption), stewed apples.",
    recovery: "Hormonal rebalancing, increased stamina, established feeding routine.",
    activity: "Cat-cow spinal mobility stretches, core engagement without crunching.",
    warningSigns: "Extreme anxiety, inability to bond with baby, sleep deprivation hallucinations."
  },
  {
    range: "Days 31–40",
    title: "Full 40-Day Transition & Long-Term Vitality",
    nutrition: "Complete family thali, diverse regional greens, roasted chana, continuous hydration.",
    recovery: "Comprehensive 6-week postnatal checkup, contraception counseling, wellness celebration.",
    activity: "Brisk 25-minute walks, gentle modified sun salutations (Surya Namaskar).",
    warningSigns: "Persistent urinary incontinence, untreated chronic back spasms."
  }
];

export const whoGrowthData = [
  { month: 0, weightBoyMed: 3.3, weightBoyLow: 2.5, weightBoyHigh: 4.4, actualWeight: 3.1, heightMed: 49.9, actualHeight: 50.0 },
  { month: 2, weightBoyMed: 5.6, weightBoyLow: 4.5, weightBoyHigh: 7.1, actualWeight: 5.4, heightMed: 58.4, actualHeight: 58.0 },
  { month: 4, weightBoyMed: 7.0, weightBoyLow: 5.7, weightBoyHigh: 8.7, actualWeight: 6.9, heightMed: 63.9, actualHeight: 63.5 },
  { month: 6, weightBoyMed: 7.9, weightBoyLow: 6.4, weightBoyHigh: 9.8, actualWeight: 7.8, heightMed: 67.6, actualHeight: 67.2 },
  { month: 8, weightBoyMed: 8.6, weightBoyLow: 7.0, weightBoyHigh: 10.5, actualWeight: 8.5, heightMed: 70.6, actualHeight: 70.1 },
  { month: 10, weightBoyMed: 9.2, weightBoyLow: 7.5, weightBoyHigh: 11.2, actualWeight: 9.0, heightMed: 73.3, actualHeight: 73.0 },
  { month: 12, weightBoyMed: 9.6, weightBoyLow: 7.8, weightBoyHigh: 11.8, actualWeight: 9.4, heightMed: 75.7, actualHeight: 75.5 },
  { month: 14, weightBoyMed: 10.1, weightBoyLow: 8.2, weightBoyHigh: 12.4, actualWeight: 9.8, heightMed: 78.0, actualHeight: 78.5 },
  { month: 16, weightBoyMed: 10.5, weightBoyLow: 8.5, weightBoyHigh: 12.9, actualWeight: null, heightMed: 80.2, actualHeight: null },
  { month: 18, weightBoyMed: 10.9, weightBoyLow: 8.8, weightBoyHigh: 13.5, actualWeight: null, heightMed: 82.3, actualHeight: null },
];

export const childMilestones: Milestone[] = [
  {
    id: "m1",
    title: "Crawls comfortably across floor",
    category: "motor",
    expectedAgeMonths: 9,
    completed: true,
    completedDate: "At 8.5 months",
    description: "Moves forward on hands and knees steadily."
  },
  {
    id: "m2",
    title: "Stands with support / furniture cruise",
    category: "motor",
    expectedAgeMonths: 11,
    completed: true,
    completedDate: "At 11 months",
    description: "Pulls up to standing position holding crib or sofa."
  },
  {
    id: "m3",
    title: "Says 3+ simple words (Amma, Dada, Paani)",
    category: "language",
    expectedAgeMonths: 12,
    completed: true,
    completedDate: "At 12.5 months",
    description: "Meaningfully addresses parents and points to objects."
  },
  {
    id: "m4",
    title: "Pincer grasp (picks small raisins with 2 fingers)",
    category: "cognitive",
    expectedAgeMonths: 12,
    completed: true,
    completedDate: "At 13 months",
    description: "Uses thumb and index finger to pick tiny objects safely."
  },
  {
    id: "m5",
    title: "Walks independently without support",
    category: "motor",
    expectedAgeMonths: 14,
    completed: false,
    description: "Takes 5+ steps without holding any hands or walls."
  },
  {
    id: "m6",
    title: "Drinks from an open cup with assistance",
    category: "social",
    expectedAgeMonths: 15,
    completed: false,
    description: "Holds small tumbler and drinks water with minimal spilling."
  }
];

export const immunizationSchedule: VaccineItem[] = [
  {
    id: "v1",
    name: "BCG",
    dose: "Single Dose",
    targetDisease: "Tuberculosis (TB)",
    timeline: "At Birth",
    ageGroup: "Birth",
    dueDate: "Completed on 14 Aug 2025",
    status: "completed",
    whyItMatters: "Protects infants against severe forms of childhood tuberculosis including tubercular meningitis.",
    sideEffects: "Small red nodule at injection site that heals into a small permanent scar within 6-12 weeks.",
    routeOfAdmin: "Intradermal (Left upper arm)"
  },
  {
    id: "v2",
    name: "OPV - 0 Dose",
    dose: "Dose 0",
    targetDisease: "Poliomyelitis",
    timeline: "At Birth",
    ageGroup: "Birth",
    dueDate: "Completed on 14 Aug 2025",
    status: "completed",
    whyItMatters: "Provides initial mucosal gut immunity against wild poliovirus transmission.",
    sideEffects: "Virtually no side effects; safe oral drop.",
    routeOfAdmin: "Oral (2 drops)"
  },
  {
    id: "v3",
    name: "Hepatitis B - Birth Dose",
    dose: "Birth Dose",
    targetDisease: "Hepatitis B Virus",
    timeline: "Within 24 Hours",
    ageGroup: "Birth",
    dueDate: "Completed on 15 Aug 2025",
    status: "completed",
    whyItMatters: "Prevents vertical mother-to-child transmission of chronic hepatitis B liver disease.",
    sideEffects: "Mild soreness at injection site for 24 hours.",
    routeOfAdmin: "Intramuscular (Anterolateral mid-thigh)"
  },
  {
    id: "v4",
    name: "Pentavalent 1 + OPV 1 + Rotavirus 1",
    dose: "Primary Dose 1",
    targetDisease: "DPT + Hep B + Hib + Polio + Diarrhea",
    timeline: "6 Weeks",
    ageGroup: "6 Weeks",
    dueDate: "Completed on 28 Sep 2025",
    status: "completed",
    whyItMatters: "5-in-1 vaccine shields against Diphtheria, Pertussis (Whooping cough), Tetanus, Hep B & Haemophilus Influenzae type B.",
    sideEffects: "Mild fever (99-100°F), local swelling. Paracetamol drops recommended if irritable.",
    routeOfAdmin: "IM Thigh + Oral drops"
  },
  {
    id: "v5",
    name: "Pentavalent 2 + OPV 2 + Rotavirus 2",
    dose: "Primary Dose 2",
    targetDisease: "DPT + Hep B + Hib + Polio + Diarrhea",
    timeline: "10 Weeks",
    ageGroup: "10 Weeks",
    dueDate: "Completed on 02 Nov 2025",
    status: "completed",
    whyItMatters: "Boosts antibody titers for sustained immune memory against life-threatening infant respiratory infections.",
    sideEffects: "Mild fussiness for 1-2 days.",
    routeOfAdmin: "IM Thigh + Oral drops"
  },
  {
    id: "v6",
    name: "Pentavalent 3 + fIPV 1 + Rotavirus 3",
    dose: "Primary Dose 3",
    targetDisease: "DPT + Hep B + Hib + Polio + Diarrhea",
    timeline: "14 Weeks",
    ageGroup: "14 Weeks",
    dueDate: "Completed on 07 Dec 2025",
    status: "completed",
    whyItMatters: "Completes the primary infant immunization series protecting over 95% of recipients.",
    sideEffects: "Low-grade fever; resolve within 36 hours.",
    routeOfAdmin: "IM Thigh + Fractional Intradermal"
  },
  {
    id: "v7",
    name: "MR 1st Dose (Measles & Rubella) + Vit A",
    dose: "Dose 1",
    targetDisease: "Measles, Rubella & Night Blindness",
    timeline: "9–12 Months",
    ageGroup: "9 Months",
    dueDate: "Completed on 18 May 2026",
    status: "completed",
    whyItMatters: "Critical defense against measles complications (pneumonia, encephalitis) and congenital rubella.",
    sideEffects: "Mild rash or slight fever may appear 6-10 days after vaccination.",
    routeOfAdmin: "Subcutaneous (Right upper arm) + Oral Vit A"
  },
  {
    id: "v8",
    name: "JE 1st Dose (Japanese Encephalitis)",
    dose: "Dose 1 (Endemic Districts)",
    targetDisease: "Brain Fever (JE Virus)",
    timeline: "9–12 Months",
    ageGroup: "12 Months",
    dueDate: "Completed on 15 Aug 2026",
    status: "completed",
    whyItMatters: "Prevents acute encephalitis syndrome prevalent in rural and paddy agricultural clusters.",
    sideEffects: "Mild local tenderness.",
    routeOfAdmin: "Subcutaneous (Left upper arm)"
  },
  {
    id: "v9",
    name: "MMR / MR 2nd Dose + DPT Booster 1",
    dose: "Booster Dose 1",
    targetDisease: "Measles, Mumps, Rubella + DPT Booster",
    timeline: "16–24 Months",
    ageGroup: "16 Months",
    dueDate: "Due in 12 Days (20 Oct 2026)",
    status: "upcoming",
    whyItMatters: "Reinforces long-term immunity throughout early childhood before preschool entry.",
    sideEffects: "Local swelling at injection site; mild fever.",
    routeOfAdmin: "Intramuscular (Left anterolateral thigh)"
  }
];

export const regionalNutritionData: RegionNutrition[] = [
  {
    id: "karnataka",
    name: "Karnataka & Deccan",
    state: "Karnataka",
    staples: ["Ragi (Finger Millet)", "Jowar (Sorghum)", "Toor Dal", "Moringa (Drumstick leaves)", "Curd"],
    description: "Rich in calcium from indigenous Ragi and high bio-available iron from drumstick leaves.",
    days: [
      {
        day: "Day 1 (Today)",
        breakfast: {
          name: "Ragi Malt with Jaggery & Soaked Peanuts",
          calories: 280,
          protein: "8.5g",
          cost: 18,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["340mg Calcium", "Natural iron from organic jaggery", "Galactagogue booster"],
          localIngredients: ["Finger millet flour", "Cow milk/water", "Peanuts"]
        },
        lunch: {
          name: "Ragi Mudde + Drumstick Leaf (Moringa) Sambar + Curd",
          calories: 520,
          protein: "16.2g",
          cost: 32,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Rich in Vitamin A & Iron", "Sustained slow-release carbs", "Probiotics for gut health"],
          localIngredients: ["Ragi flour", "Drumstick leaves", "Toor dal", "Curd"]
        },
        snack: {
          name: "Roasted Makhana & Sesame Til Laddu",
          calories: 190,
          protein: "5.1g",
          cost: 15,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Magnesium for postpartum sleep", "Zinc & Healthy Fats"],
          localIngredients: ["Foxnuts", "Sesame seeds", "Jaggery"]
        },
        dinner: {
          name: "Jowar Roti + Methi Dal + Stewed Bottle Gourd",
          calories: 410,
          protein: "13.4g",
          cost: 26,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Gluten-free sorghum fiber", "Anti-inflammatory fenugreek", "Easy hydration"],
          localIngredients: ["Jowar flour", "Fresh fenugreek", "Moong dal", "Lauki"]
        },
        aiExplanation: "Ragi mudde with moringa sambar provides over 70% of a lactating mother's daily calcium and iron needs at just ₹32 per plate, utilizing locally abundant village market ingredients."
      },
      {
        day: "Day 2",
        breakfast: {
          name: "Steamed Foxtail Millet Idli + Coconut Chutney",
          calories: 310,
          protein: "9.0g",
          cost: 22,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Low glycemic index", "Easy morning digestion"],
          localIngredients: ["Navane (Foxtail)", "Urad dal", "Fresh coconut"]
        },
        lunch: {
          name: "Brown Rice + Sprouted Horse Gram (Hurali) Saaru + Boiled Egg",
          calories: 540,
          protein: "21.0g",
          cost: 38,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Complete amino acid profile", "High dietary fiber"],
          localIngredients: ["Horse gram", "Local spices", "Country egg"]
        },
        snack: {
          name: "Boiled Sweet Corn with Lemon & Cumin",
          calories: 160,
          protein: "4.2g",
          cost: 12,
          isLocal: true,
          isBudget: true,
          lactationFriendly: false,
          keyBenefits: ["Lutein for eye health", "Dietary fiber"],
          localIngredients: ["Sweet corn", "Lemon", "Rock salt"]
        },
        dinner: {
          name: "Ragi Dosa + Mixed Veggie Stew + Chaas",
          calories: 380,
          protein: "11.5g",
          cost: 25,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Restful sleep digestion", "High hydration"],
          localIngredients: ["Ragi flour", "Carrots", "Beans", "Buttermilk"]
        },
        aiExplanation: "Sprouted horse gram saaru is a traditional Karnataka postpartum tonic proven to stimulate red blood cell regeneration following delivery blood loss."
      }
    ]
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu",
    state: "Tamil Nadu",
    staples: ["Kambu (Pearl Millet)", "Varagu (Kodo)", "Murungai Keerai", "Sundal (Chickpeas)", "Poondu (Garlic) Rasam"],
    description: "Famous for traditional Poondu Rasam (garlic-pepper digestive tonic) and Kambu Koozh.",
    days: [
      {
        day: "Day 1 (Today)",
        breakfast: {
          name: "Kambu Koozh with Buttermilk & Small Onions",
          calories: 290,
          protein: "8.0g",
          cost: 16,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Cooling body electrolyte balance", "High bioavailable iron"],
          localIngredients: ["Pearl millet", "Buttermilk", "Shallots"]
        },
        lunch: {
          name: "Parboiled Rice + Garlic Pepper Rasam + Murungai Keerai Poriyal",
          calories: 490,
          protein: "14.8g",
          cost: 28,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Poondu stimulates lactation", "Moringa leaves combat anemia"],
          localIngredients: ["Local garlic", "Black pepper", "Drumstick leaves"]
        },
        snack: {
          name: "Sprouted Kala Chana Sundal",
          calories: 180,
          protein: "7.5g",
          cost: 14,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Plant-based clean protein", "Zero refined sugar"],
          localIngredients: ["Black chickpeas", "Mustard seeds", "Curry leaves"]
        },
        dinner: {
          name: "Varagu (Kodo Millet) Khichdi + Coconut Podi + Moong Dal",
          calories: 390,
          protein: "12.0g",
          cost: 24,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Easy night assimilation", "B-Complex vitamins"],
          localIngredients: ["Kodo millet", "Moong dal", "Ghee"]
        },
        aiExplanation: "Traditional Tamil Poondu Rasam contains allicin and piperine, which clinically accelerate uterine recovery and stimulate prolactin for breast milk synthesis."
      }
    ]
  },
  {
    id: "andhra_telangana",
    name: "Andhra Pradesh & Telangana",
    state: "Andhra/Telangana",
    staples: ["Jonnalu (Sorghum)", "Sajjalu (Bajra)", "Gongura / Palakura", "Pesarattu (Green Gram)", "Nuvvula Laddu"],
    description: "High iron from Gongura leaves and easily digestible whole moong Pesarattu.",
    days: [
      {
        day: "Day 1 (Today)",
        breakfast: {
          name: "Whole Moong Pesarattu + Ginger Chutney (Allam Pachadi)",
          calories: 320,
          protein: "13.0g",
          cost: 22,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Zero fermentation needed", "Ginger eases postpartum bloating"],
          localIngredients: ["Whole green gram", "Fresh ginger", "Cumin"]
        },
        lunch: {
          name: "Jonna Rotte + Palakura Pappu (Spinach Dal) + Ghee + Curd",
          calories: 510,
          protein: "17.0g",
          cost: 30,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Spinach iron boosted with Vitamin C", "High fiber sorghum"],
          localIngredients: ["Jowar flour", "Fresh spinach", "Toor dal", "Desi ghee"]
        },
        snack: {
          name: "Nuvvula Undalu (Sesame & Jaggery Laddu)",
          calories: 200,
          protein: "5.5g",
          cost: 14,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Concentrated calcium", "Natural energy booster"],
          localIngredients: ["Sesame seeds", "Jaggery", "Cardamom"]
        },
        dinner: {
          name: "Sajjala (Bajra) Kichidi + Tomato Rasam",
          calories: 400,
          protein: "11.2g",
          cost: 25,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Warming postpartum grain", "High phosphorus"],
          localIngredients: ["Pearl millet", "Moong dal", "Tomatoes"]
        },
        aiExplanation: "Jonna Rotte paired with Palakura Pappu delivers 17g of clean protein and 5.8mg iron, preventing common micro-nutrient deficiency in lactating mothers."
      }
    ]
  },
  {
    id: "maharashtra",
    name: "Maharashtra & Western India",
    state: "Maharashtra",
    staples: ["Jowar Bhakri", "Bajra Bhakri", "Matki Usal (Sprouted Moth Beans)", "Methi Che Laddu", "Solkadhi"],
    description: "Bhakri with sprouted pulse usal and digestive Solkadhi (Kokum & coconut milk).",
    days: [
      {
        day: "Day 1 (Today)",
        breakfast: {
          name: "Poha with Roasted Peanuts & Squeezed Lemon",
          calories: 290,
          protein: "7.0g",
          cost: 16,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Iron-fortified flattened rice", "Vitamin C from fresh lemon"],
          localIngredients: ["Poha", "Peanuts", "Curry leaves", "Lemon"]
        },
        lunch: {
          name: "Jowar Bhakri + Sprouted Matki Usal + Solkadhi",
          calories: 520,
          protein: "18.0g",
          cost: 34,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Kokum solkadhi soothes gut acidity", "Sprouted legumes give zinc"],
          localIngredients: ["Jowar flour", "Moth beans", "Kokum", "Fresh coconut milk"]
        },
        snack: {
          name: "Methi Dink (Edible Gum) Laddu",
          calories: 210,
          protein: "4.8g",
          cost: 20,
          isLocal: true,
          isBudget: false,
          lactationFriendly: true,
          keyBenefits: ["Dink strengthens pelvic lumbar bone", "Fenugreek galactagogue"],
          localIngredients: ["Gond (edible gum)", "Fenugreek", "Ghee", "Dry fruits"]
        },
        dinner: {
          name: "Moong Dal Khichdi + Ghee + Roasted Papad",
          calories: 380,
          protein: "12.5g",
          cost: 22,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Gentle bowel transit", "Easy protein assimilation"],
          localIngredients: ["Split yellow moong", "Rice", "Cumin"]
        },
        aiExplanation: "Traditional Dink Laddus (edible gum) have been verified by modern nutritionists for restoring bone mineral density and joint flexibility during the postpartum recovery phase."
      }
    ]
  },
  {
    id: "northindia",
    name: "North India (UP, Bihar, MP, Punjab)",
    state: "North India",
    staples: ["Dalia (Broken Wheat)", "Besan Cheela", "Bathua / Sarson Saag", "Panjiri", "Moong Dal Khichdi"],
    description: "Ayurvedic warm postpartum nutrition with carom (ajwain) water, Panjiri, and lentils.",
    days: [
      {
        day: "Day 1 (Today)",
        breakfast: {
          name: "Vegetable Dalia Porridge + Ajwain (Carom) Water",
          calories: 310,
          protein: "8.5g",
          cost: 20,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Ajwain relieves gas & promotes cleansing", "High fiber broken wheat"],
          localIngredients: ["Broken wheat", "Carrots", "Beans", "Carom seeds"]
        },
        lunch: {
          name: "Missi Roti (Gram Flour) + Palak Toor Dal + Jeera Chaas",
          calories: 500,
          protein: "18.5g",
          cost: 32,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["High protein gram flour", "Spinach dietary folate"],
          localIngredients: ["Besan", "Wheat flour", "Spinach", "Buttermilk"]
        },
        snack: {
          name: "Traditional Whole Wheat Panjiri (2 Spoons)",
          calories: 220,
          protein: "4.0g",
          cost: 18,
          isLocal: true,
          isBudget: false,
          lactationFriendly: true,
          keyBenefits: ["Ghee & dry ginger (sonth) for joint health", "Energy sustenance"],
          localIngredients: ["Whole wheat flour", "Desi ghee", "Dry ginger", "Jaggery"]
        },
        dinner: {
          name: "Moong Dal & Rice Khichdi with Heeng Tadka + Curd",
          calories: 390,
          protein: "13.0g",
          cost: 24,
          isLocal: true,
          isBudget: true,
          lactationFriendly: true,
          keyBenefits: ["Asafoetida (heeng) eliminates colic", "Complete gentle nutrition"],
          localIngredients: ["Moong dal", "Rice", "Heeng", "Cumin"]
        },
        aiExplanation: "Missi roti combined with palak dal provides both iron and non-animal protein, satisfying 82% of RDA recommendations for Indian lactating mothers."
      }
    ]
  }
];

export const heroBadges: BadgeItem[] = [
  {
    id: "b1",
    title: "Shield of BCG",
    icon: "🛡️",
    description: "Protected against Tuberculosis right from birth.",
    unlocked: true,
    xpValue: 100,
    category: "Immunization"
  },
  {
    id: "b2",
    title: "Vitamin A Warrior",
    icon: "⚡",
    description: "Completed 9-month Vitamin A dose for crystal clear vision.",
    unlocked: true,
    xpValue: 120,
    category: "Nutrition"
  },
  {
    id: "b3",
    title: "Brain Builder",
    icon: "🧠",
    description: "Completed 5 fine motor sensory play exercises.",
    unlocked: true,
    xpValue: 150,
    category: "Milestone"
  },
  {
    id: "b4",
    title: "Nutrition Hero",
    icon: "🥕",
    description: "Consistently consumed regional millet & green veggie thalis for 14 days.",
    unlocked: true,
    xpValue: 160,
    category: "Nutrition"
  },
  {
    id: "b5",
    title: "Active Explorer",
    icon: "🏃",
    description: "Completed indoor household obstacle course with parents.",
    unlocked: true,
    xpValue: 150,
    category: "Activity"
  },
  {
    id: "b6",
    title: "Champion of 1000 Days",
    icon: "👑",
    description: "Achieve 100% on-time milestone tracking up to age 2.",
    unlocked: false,
    xpValue: 250,
    category: "Ecosystem"
  }
];

export const offlineActivities: OfflineActivity[] = [
  {
    id: "act1",
    title: "Household Treasure Hunt & Color Match",
    ageRange: "1–3 Years",
    duration: "10 Minutes",
    materials: "Plastic cups, steel spoons, yellow cloth, safe toy bowl",
    skill: "Cognitive Association & Object Recognition",
    badgeId: "b3",
    instructions: [
      "Place 3 safe kitchen items (a steel katori, a wooden ladle, and a colorful cloth) on the floor.",
      "Call out the item name and guide your child to point or bring it to you.",
      "Celebrate each correct pick with a gentle clap and encouraging praise.",
      "Builds spatial awareness, auditory listening, and vocabulary!"
    ]
  },
  {
    id: "act2",
    title: "Pillow Mountain Obstacle Crawl",
    ageRange: "10–18 Months",
    duration: "12 Minutes",
    materials: "3 Soft bed pillows, blanket, soft ball",
    skill: "Gross Motor Balance & Leg Strength",
    badgeId: "b5",
    instructions: [
      "Place pillows in a safe flat row on a clean floor mat.",
      "Roll a ball to the opposite side of the pillow row.",
      "Encourage your child to climb and step over the soft surface.",
      "Develops vestibular balance, ankle stability, and confidence for independent walking."
    ]
  },
  {
    id: "act3",
    title: "Rhythm Clapping & Animal Sounds",
    ageRange: "12–24 Months",
    duration: "8 Minutes",
    materials: "Your hands, simple clapping or spoon tap",
    skill: "Language Phonetics & Auditory Processing",
    badgeId: "b3",
    instructions: [
      "Clap twice and make a simple animal sound ('Bhow-Bhow' 🐕, 'Moo' 🐄, 'Meow' 🐈).",
      "Encourage the child to mimic the sound and repeat the rhythm.",
      "Expands auditory memory, vocal tract modulation, and social bonding."
    ]
  }
];

export const ashaWorkerData = {
  workerName: "Sunita Devi (ASHA)",
  workerId: "ASHA-KA-BLR-0412",
  primaryHealthCenter: "Kengeri PHC, Bengaluru Rural",
  assignedFamilies: 124,
  highPriorityCount: 7,
  vaccinationsDueThisWeek: 18,
  followUpsPending: 13,
  families: [
    {
      id: "fam1",
      motherName: "Ananya Sharma",
      childName: "Aarav Sharma",
      childAge: "14 months",
      location: "Sector 4, Kengeri, Bengaluru",
      village: "Kengeri Ward 12",
      riskStatus: "healthy" as const,
      lastVisit: "02 Oct 2026",
      nextTask: "MMR Dose 1 Due in 12 days",
      postpartumDay: 18,
      vaccinesPending: 1,
      phone: "+91 98765 43210",
      notes: "Mother recovery on track. Child growth normal at 62nd percentile. Scheduled routine reminder sent via WhatsApp."
    },
    {
      id: "fam2",
      motherName: "Geeta Rani",
      childName: "Rohan (Newborn)",
      childAge: "7 days",
      location: "Ramasandra Village, PHC Sub-center",
      village: "Ramasandra",
      riskStatus: "high" as const,
      lastVisit: "06 Oct 2026",
      nextTask: "Urgent: High fever & jaundice check",
      postpartumDay: 7,
      vaccinesPending: 2,
      phone: "+91 98451 12345",
      notes: "RED FLAG: Mother reported persistent temperature 101.2°F and baby yellowing eyes. Home visit scheduled for today 3:00 PM."
    },
    {
      id: "fam3",
      motherName: "Pooja Venkatesh",
      childName: "Sneha",
      childAge: "9 months",
      location: "Kumbalgodu Industrial Area",
      village: "Kumbalgodu",
      riskStatus: "followup" as const,
      lastVisit: "28 Sep 2026",
      nextTask: "MR 1st Dose overdue by 4 days",
      postpartumDay: 270,
      vaccinesPending: 1,
      phone: "+91 97312 98765",
      notes: "Family recently migrated from Raichur. Language Kannada/Telugu. Need to verify MR dose receipt at sub-center."
    },
    {
      id: "fam4",
      motherName: "Radha Murthy",
      childName: "Varun",
      childAge: "6 months",
      location: "Channasandra Layout",
      village: "Channasandra",
      riskStatus: "followup" as const,
      lastVisit: "01 Oct 2026",
      nextTask: "Complementary feeding counseling",
      postpartumDay: 180,
      vaccinesPending: 0,
      phone: "+91 99001 54321",
      notes: "Mother initiated solid feeding. Advised mashed ragi and boiled dal water. No allergy signs."
    },
    {
      id: "fam5",
      motherName: "Meenakshi Sundaram",
      childName: "Kavya",
      childAge: "3 months",
      location: "Mylasandra Sub-post",
      village: "Mylasandra",
      riskStatus: "healthy" as const,
      lastVisit: "25 Sep 2026",
      nextTask: "Pentavalent 3 upcoming at 14 weeks",
      postpartumDay: 90,
      vaccinesPending: 1,
      phone: "+91 98862 33445",
      notes: "Exclusive breastfeeding on track. Baby gaining 25g/day. Mother feeling confident."
    }
  ]
};

export const initialAlerts: AlertNotification[] = [
  {
    id: "alt1",
    title: "Vaccination Due in 12 Days",
    message: "Aarav is due for MMR Booster 1 + DPT Booster at Kengeri PHC. Tap to view center timings and pre-book.",
    timestamp: "10 mins ago",
    type: "vaccine",
    priority: "medium",
    read: false,
    channels: { inApp: true, whatsapp: true, sms: true, audio: true }
  },
  {
    id: "alt2",
    title: "Maternal Day 18 Check-in Complete",
    message: "Recovery score: 78%. BP (118/76) and temperature are normal. Keep up with your morning ragi malt!",
    timestamp: "2 hours ago",
    type: "maternal",
    priority: "low",
    read: false,
    channels: { inApp: true, whatsapp: false, sms: true, audio: false }
  },
  {
    id: "alt3",
    title: "ASHA Worker Routine Follow-up Scheduled",
    message: "Sunita Devi has confirmed her monthly home wellness check for Saturday, 11:30 AM.",
    timestamp: "Yesterday",
    type: "asha",
    priority: "low",
    read: true,
    channels: { inApp: true, whatsapp: true, sms: true, audio: false }
  },
  {
    id: "alt4",
    title: "New AI Regional Meal Plan Generated",
    message: "Karnataka Day 2 Thali: Foxtail Millet Idli & Sprouted Horse Gram Saaru added to your profile.",
    timestamp: "2 days ago",
    type: "nutrition",
    priority: "low",
    read: true,
    channels: { inApp: true, whatsapp: false, sms: false, audio: false }
  }
];

export const impactStatistics = {
  vaccineAdherence: 94,
  postpartumAdherence: 87,
  nutritionAdherence: 82,
  ashaFollowUpRate: 91,
  totalChildrenProtected: "18,400+",
  mothersMonitored: "12,250+",
  villagesCovered: "340+",
  severeComplicationsPrevented: "148 Cases",
  sdgGoals: [
    {
      code: "SDG 3",
      title: "Good Health and Well-Being",
      target: "Target 3.1 & 3.2: Reduce maternal mortality ratio (<70 per 100k) and end preventable deaths of newborns and children under 5.",
      tinyCareContribution: "Closed the 40-day postpartum monitoring gap and eliminated missed immunization windows across rural clusters."
    },
    {
      code: "SDG 2",
      title: "Zero Hunger & Maternal Malnutrition",
      target: "Target 2.2: End all forms of malnutrition by 2030, addressing stunting and wasting in children under 5 and nutritional needs of lactating mothers.",
      tinyCareContribution: "Hyper-local millet & indigenous green thalis reduce daily diet costs to under ₹35/day while exceeding iron & calcium RDAs."
    },
    {
      code: "SDG 10",
      title: "Reduced Inequalities",
      target: "Target 10.2: Empower and promote social and economic inclusion of rural, tribal, and non-literate populations.",
      tinyCareContribution: "Voice-first Web Speech & vernacular WhatsApp/SMS delivery eliminate literacy barriers in healthcare delivery."
    }
  ]
};
