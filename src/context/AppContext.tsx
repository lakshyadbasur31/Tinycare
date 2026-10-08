import React, { createContext, useContext, useState } from 'react';
import {
  TabType,
  Language,
  UserRole,
  MotherProfile,
  ChildProfile,
  VaccineItem,
  Milestone,
  AlertNotification,
  AshaFamilyRecord
} from '../types';
import {
  initialMother,
  initialChild,
  immunizationSchedule as defaultVaccines,
  childMilestones as defaultMilestones,
  initialAlerts,
  ashaWorkerData
} from '../data/mockData';
import { translations } from '../data/translations';
import { speakText, stopSpeech } from '../utils/speech';

interface AppContextType {
  currentTab: TabType;
  setCurrentTab: (tab: TabType) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  role: UserRole;
  setRole: (role: UserRole) => void;
  
  // Data States
  mother: MotherProfile;
  setMother: React.Dispatch<React.SetStateAction<MotherProfile>>;
  updateMotherVitals: (updates: Partial<MotherProfile>) => void;
  
  child: ChildProfile;
  setChild: React.Dispatch<React.SetStateAction<ChildProfile>>;
  
  vaccines: VaccineItem[];
  markVaccineCompleted: (id: string) => void;
  
  milestones: Milestone[];
  toggleMilestone: (id: string) => void;
  
  alerts: AlertNotification[];
  addAlert: (alert: Omit<AlertNotification, 'id' | 'timestamp' | 'read'>) => void;
  markAlertRead: (id: string) => void;
  
  // Modals & Tools
  isHealthCheckOpen: boolean;
  setIsHealthCheckOpen: (open: boolean) => void;
  selectedAshaFamily: AshaFamilyRecord | null;
  setSelectedAshaFamily: (family: AshaFamilyRecord | null) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  
  // Accessibility
  isHighContrast: boolean;
  setIsHighContrast: React.Dispatch<React.SetStateAction<boolean>>;
  isLargeText: boolean;
  setIsLargeText: React.Dispatch<React.SetStateAction<boolean>>;
  isSpeaking: boolean;
  speakCurrent: (text: string) => void;
  stopCurrentSpeech: () => void;
  
  // Demo Mode
  isDemoMode: boolean;
  resetToDemoPersona: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<TabType>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [role, setRole] = useState<UserRole>('mother');
  
  const [mother, setMother] = useState<MotherProfile>(initialMother);
  const [child, setChild] = useState<ChildProfile>(initialChild);
  const [vaccines, setVaccines] = useState<VaccineItem[]>(defaultVaccines);
  const [milestones, setMilestones] = useState<Milestone[]>(defaultMilestones);
  const [alerts, setAlerts] = useState<AlertNotification[]>(initialAlerts);
  
  const [isHealthCheckOpen, setIsHealthCheckOpen] = useState(false);
  const [selectedAshaFamily, setSelectedAshaFamily] = useState<AshaFamilyRecord | null>(null);
  const [selectedRegion, setSelectedRegion] = useState('karnataka');
  
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(true);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const updateMotherVitals = (updates: Partial<MotherProfile>) => {
    setMother(prev => {
      const next = { ...prev, ...updates };
      // Check red-flags
      const isBpHigh = next.bloodPressure.includes('14') || next.bloodPressure.includes('15') || next.bloodPressure.includes('16');
      const isTempHigh = parseFloat(next.temperature) > 100.2;
      const isPainHigh = next.painLevel >= 7;
      const isLochiaAbnormal = next.lochiaStatus === 'concerning';
      const isEpdsHigh = next.epdsScore >= 12;

      if (isBpHigh || isTempHigh || isPainHigh || isLochiaAbnormal || isEpdsHigh) {
        next.riskStatus = 'high';
      } else if (next.painLevel >= 5 || next.fatigueLevel >= 7 || next.lochiaStatus === 'heavy' || next.epdsScore >= 9) {
        next.riskStatus = 'moderate';
      } else {
        next.riskStatus = 'low';
      }
      return next;
    });
  };

  const markVaccineCompleted = (id: string) => {
    setVaccines(prev => prev.map(v => {
      if (v.id === id) {
        return {
          ...v,
          status: 'completed',
          dueDate: `Completed on ${new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}`
        };
      }
      return v;
    }));
    setChild(prev => {
      const completed = prev.vaccinesCompleted + 1;
      const newXp = prev.heroXp + 120;
      return {
        ...prev,
        vaccinesCompleted: Math.min(completed, prev.totalVaccines),
        heroXp: newXp,
        heroLevel: Math.floor(newXp / 200) + 1
      };
    });
    showToast('✓ Vaccine marked completed! 120 Hero XP added to Aarav.');
  };

  const toggleMilestone = (id: string) => {
    setMilestones(prev => prev.map(m => {
      if (m.id === id) {
        const nextState = !m.completed;
        if (nextState) {
          showToast(`🌟 Milestone achieved: "${m.title}"!`);
        }
        return {
          ...m,
          completed: nextState,
          completedDate: nextState ? `Achieved on ${new Date().toLocaleDateString('en-GB')}` : undefined
        };
      }
      return m;
    }));
  };

  const addAlert = (newAlert: Omit<AlertNotification, 'id' | 'timestamp' | 'read'>) => {
    const created: AlertNotification = {
      ...newAlert,
      id: `alt_${Date.now()}`,
      timestamp: 'Just now',
      read: false
    };
    setAlerts(prev => [created, ...prev]);
    showToast(`🔔 Multi-Channel Alert Dispatched: ${newAlert.title}`);
  };

  const markAlertRead = (id: string) => {
    setAlerts(prev => prev.map(a => a.id === id ? { ...a, read: true } : a));
  };

  const speakCurrent = (text: string) => {
    setIsSpeaking(true);
    speakText(text, language);
    setTimeout(() => {
      setIsSpeaking(false);
    }, 7000);
  };

  const stopCurrentSpeech = () => {
    stopSpeech();
    setIsSpeaking(false);
  };

  const resetToDemoPersona = () => {
    setMother(initialMother);
    setChild(initialChild);
    setVaccines(defaultVaccines);
    setMilestones(defaultMilestones);
    setAlerts(initialAlerts);
    setIsDemoMode(true);
    setSelectedRegion('karnataka');
    showToast('✨ Demo persona (Ananya & Aarav, Bengaluru, Postpartum Day 18) loaded!');
  };

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        language,
        setLanguage,
        t,
        role,
        setRole,
        mother,
        setMother,
        updateMotherVitals,
        child,
        setChild,
        vaccines,
        markVaccineCompleted,
        milestones,
        toggleMilestone,
        alerts,
        addAlert,
        markAlertRead,
        isHealthCheckOpen,
        setIsHealthCheckOpen,
        selectedAshaFamily,
        setSelectedAshaFamily,
        selectedRegion,
        setSelectedRegion,
        isHighContrast,
        setIsHighContrast,
        isLargeText,
        setIsLargeText,
        isSpeaking,
        speakCurrent,
        stopCurrentSpeech,
        isDemoMode,
        resetToDemoPersona,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
