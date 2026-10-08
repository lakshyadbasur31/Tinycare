import React from 'react';
import {
  LayoutDashboard,
  Heart,
  Baby,
  Syringe,
  Utensils,
  Trophy,
  FileText,
  BellRing,
  Users,
  AlertOctagon,
  Home,
  BarChart3,
  Cpu,
  ShieldCheck,
  Scale,
  Sparkles,
  Layers,
  HeartPulse
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TabType } from '../../types';

interface NavItem {
  id: TabType;
  label: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: string;
}

export const Sidebar: React.FC = () => {
  const { currentTab, setCurrentTab, role } = useApp();

  const primaryNav: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'maternal', label: 'Maternal Care (40-Day)', icon: Heart, badge: 'Day 18', badgeColor: 'bg-rose-100 text-rose-700' },
    { id: 'child', label: 'Child Health & WHO', icon: Baby },
    { id: 'vaccinations', label: 'NIS Vaccinations', icon: Syringe, badge: '8/9 Due', badgeColor: 'bg-amber-100 text-amber-800' },
    { id: 'nutrition', label: 'Regional AI Nutrition', icon: Utensils, badge: '₹32 Thali', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'hero', label: 'Little Hero Journey', icon: Trophy, badge: 'Lvl 4', badgeColor: 'bg-purple-100 text-purple-700' },
    { id: 'passport', label: 'Health Passport', icon: FileText, badge: 'ABHA', badgeColor: 'bg-blue-100 text-blue-800' },
    { id: 'alerts', label: 'Multi-Channel Alerts', icon: BellRing },
    { id: 'asha', label: 'ASHA Health Worker', icon: Users, badge: '124 Fam', badgeColor: 'bg-teal-100 text-teal-800' },
    { id: 'triage', label: 'Smart Risk Triage', icon: AlertOctagon },
    { id: 'family', label: 'My Family', icon: Home },
  ];

  const presentationNav: NavItem[] = [
    { id: 'impact', label: 'Impact & SDGs', icon: BarChart3 },
    { id: 'architecture', label: 'Architecture & Tech', icon: Cpu },
    { id: 'security', label: 'Privacy by Design', icon: ShieldCheck },
    { id: 'comparison', label: 'Competitive Matrix', icon: Scale },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col h-screen shrink-0 sticky top-0 overflow-y-auto">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
          <HeartPulse className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-lg tracking-tight text-slate-900">
              Tiny<span className="text-teal-600">Care</span>
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-saffron-100 text-saffron-800 font-bold tracking-wide uppercase border border-saffron-200">
              Bharat
            </span>
          </div>
          <div className="text-[10px] text-slate-500 font-medium tracking-tight">
            Maternal & Child Guardian
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 py-4 space-y-6">
        <div>
          <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Family & Clinical Core
          </div>
          <nav className="space-y-1">
            {primaryNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-800 border border-teal-200 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${item.badgeColor || 'bg-slate-100 text-slate-600'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Pitch & Ideathon Sections */}
        <div>
          <div className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-saffron-500" />
            <span>Judge & Pitch Views</span>
          </div>
          <nav className="space-y-1">
            {presentationNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-saffron-50 text-saffron-900 border border-saffron-200 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-saffron-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer / Landing Shortcut */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50 space-y-2">
        <button
          onClick={() => setCurrentTab('landing')}
          className="w-full py-2 px-3 rounded-xl text-xs font-bold text-slate-700 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
        >
          <Layers className="w-3.5 h-3.5 text-teal-600" />
          <span>Back to Landing Page</span>
        </button>
        <div className="text-[10px] text-slate-400 text-center leading-tight">
          Ideathon Prototype • Simulated Data
        </div>
      </div>
    </aside>
  );
};
