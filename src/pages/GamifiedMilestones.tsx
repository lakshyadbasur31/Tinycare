import React, { useState } from 'react';
import {
  Trophy,
  Sparkles,
  Award,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { heroBadges, offlineActivities } from '../data/mockData';
import { OfflineActivity } from '../types';
import confetti from 'canvas-confetti';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const GamifiedMilestones: React.FC = () => {
  const { child, setChild, showToast } = useApp();
  const [activeActivity, setActiveActivity] = useState<OfflineActivity | null>(null);

  const handleCompleteActivity = (act: OfflineActivity) => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setChild(prev => {
      const newXp = prev.heroXp + 150;
      return {
        ...prev,
        heroXp: newXp,
        heroLevel: Math.floor(newXp / 200) + 1
      };
    });

    showToast(`🌟 Activity Completed: "${act.title}"! +150 Health Hero XP awarded to Aarav!`);
    setActiveActivity(null);
  };

  const heroNarration = `Little Hero Journey. Aarav is currently Level 4 Health Hero with 680 XP. 5 protective badges have been unlocked. Completing daily offline developmental activities stimulates brain growth and awards badges.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-bold uppercase tracking-wider">
              Gamified Pediatric Development
            </span>
            <VoiceReaderBtn textToRead={heroNarration} label="Listen to Journey" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Aarav's Little Hero Journey 🦸‍♂️
          </h1>
          <p className="text-purple-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Transforming mundane health checks into empowering superhero milestones and screen-free family offline play.
          </p>
        </div>

        {/* Level Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0 min-w-44">
          <div className="text-[11px] font-bold text-amber-300 uppercase">Current Status</div>
          <div className="text-2xl font-black text-white mt-0.5">Level {child.heroLevel} Guardian</div>
          <div className="text-xs text-purple-200 mt-1 font-semibold">{child.heroXp} / 800 XP</div>
          <div className="w-full bg-black/30 rounded-full h-2 mt-2 overflow-hidden border border-white/10">
            <div
              className="bg-gradient-to-r from-amber-400 to-purple-400 h-full rounded-full"
              style={{ width: `${((child.heroXp % 200) / 200) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-extrabold text-base text-slate-900">
              Protective Health Badges (Unlocked: 5 / 6)
            </h3>
            <p className="text-xs text-slate-500">
              Each badge celebrates a critical immunization, nutrition habit, or developmental milestone.
            </p>
          </div>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            5 Badges Active
          </span>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {heroBadges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col justify-between ${
                b.unlocked
                  ? 'bg-gradient-to-b from-purple-50/60 to-white border-purple-200 shadow-sm hover:scale-105'
                  : 'bg-slate-50 border-slate-200 opacity-60'
              }`}
            >
              <div>
                <div className="text-3xl mb-2">{b.icon}</div>
                <div className="text-xs font-extrabold text-slate-900">{b.title}</div>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug">{b.description}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold">
                {b.unlocked ? (
                  <span className="text-emerald-700">✓ Unlocked (+{b.xpValue} XP)</span>
                ) : (
                  <span className="text-slate-400 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Offline Developmental Activities */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-extrabold text-base text-slate-900">
              Today's Offline Developmental Activities (Screen-Free)
            </h3>
            <p className="text-xs text-slate-500">
              Short 8–12 minute bonding exercises using common Indian household items.
            </p>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            +150 XP per Activity
          </span>
        </div>

        {/* Activities List */}
        <div className="grid md:grid-cols-3 gap-4">
          {offlineActivities.map((act) => (
            <div
              key={act.id}
              className="p-5 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col justify-between space-y-4 hover:bg-white hover:border-purple-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-2">
                  <span>👶 {act.ageRange}</span>
                  <span className="flex items-center gap-1 text-purple-700">
                    <Clock className="w-3 h-3" /> {act.duration}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-sm text-slate-900 mb-1">
                  {act.title}
                </h4>

                <div className="text-[11px] text-teal-800 font-semibold mb-2">
                  Skill Focus: {act.skill}
                </div>

                <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-700">Materials:</span> {act.materials}
                </div>
              </div>

              <button
                onClick={() => setActiveActivity(act)}
                className="w-full py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Start Activity</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Instructions & Complete Modal */}
      {activeActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                  Screen-Free Offline Activity
                </span>
                <h3 className="font-bold text-base text-slate-900">
                  {activeActivity.title}
                </h3>
              </div>
              <button onClick={() => setActiveActivity(null)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-700 block">Step-by-Step Parent Guide:</span>
              {activeActivity.instructions.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleCompleteActivity(activeActivity)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Mark Done & Claim +150 XP!</span>
              </button>
              <button
                onClick={() => setActiveActivity(null)}
                className="py-3 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
