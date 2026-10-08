import React from 'react';
import {
  Heart,
  Baby,
  Syringe,
  Utensils,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Activity,
  Calendar,
  PhoneCall,
  FileCheck,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const DashboardOverview: React.FC = () => {
  const {
    mother,
    child,
    vaccines,
    setCurrentTab,
    setIsHealthCheckOpen,
    t,
    language
  } = useApp();

  const nextVaccine = vaccines.find(v => v.status === 'upcoming') || vaccines[vaccines.length - 1];
  const summaryNarration = `Good morning. Here is your family's health snapshot. Mother Ananya is on Postpartum Day 18 with 78% recovery and normal blood pressure 118 over 76. Child Aarav is 14 months old with healthy growth at the 62nd WHO percentile. Next vaccination is MMR Dose 1 due in 12 days. Today's nutrition score is 86%. Health risk status is low and safe.`;

  return (
    <div className="space-y-6 pb-12">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-navy-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-200 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                Bharat-Health Guardian
              </span>
              <VoiceReaderBtn textToRead={summaryNarration} label="Listen to Summary" />
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              {t('goodMorning')}, Lakshya & Ananya 👋
            </h1>
            <p className="text-teal-100/90 text-xs sm:text-sm max-w-xl">
              {t('snapshotText')} Both mother and child health parameters are synchronized with Kengeri PHC.
            </p>
          </div>

          {/* Quick CTA */}
          <button
            onClick={() => setIsHealthCheckOpen(true)}
            className="px-5 py-3 rounded-2xl bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 shrink-0"
          >
            <Activity className="w-4 h-4 text-teal-600 animate-pulse" />
            <span>{t('oneTapCheck')}</span>
          </button>
        </div>
      </div>

      {/* 4 Core Health Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Mother Health */}
        <div
          onClick={() => setCurrentTab('maternal')}
          className="p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                Day {mother.postpartumDay} of {mother.totalDays}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('motherHealth')}
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-1">
              {mother.recoveryPercentage}% Recovery
            </div>
            <div className="text-xs text-slate-600 mt-1">
              BP: <span className="font-semibold text-slate-800">{mother.bloodPressure}</span> • Temp: <span className="font-semibold text-slate-800">{mother.temperature}</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-rose-700 font-semibold group-hover:translate-x-1 transition-transform">
            <span>Daily Vitals & EPDS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 2: Child Health */}
        <div
          onClick={() => setCurrentTab('child')}
          className="p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Baby className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Healthy (62nd %ile)
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('childHealth')}
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-1">
              {child.name}
            </div>
            <div className="text-xs text-slate-600 mt-1">
              {child.ageMonths} months • <span className="font-semibold text-slate-800">{child.currentWeight} kg</span> / <span className="font-semibold text-slate-800">{child.currentHeight} cm</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-semibold group-hover:translate-x-1 transition-transform">
            <span>WHO Growth & Milestones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 3: Vaccination Status */}
        <div
          onClick={() => setCurrentTab('vaccinations')}
          className="p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Syringe className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                8 / 9 Done
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('vaccinationStatus')}
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-1">
              MMR Booster 1
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Due in <span className="font-bold text-amber-700">12 Days</span> • Kengeri PHC
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-700 font-semibold group-hover:translate-x-1 transition-transform">
            <span>NIS Immunization Schedule</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 4: Nutrition Status */}
        <div
          onClick={() => setCurrentTab('nutrition')}
          className="p-5 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Score: {child.nutritionScore}%
              </span>
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('nutritionScore')}
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-1">
              Ragi Mudde Thali
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Karnataka Regional • <span className="font-bold text-emerald-700">₹32 / meal</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform">
            <span>Hyper-Local AI Diet Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Middle Section: Health Risk Monitor & Gamified Hero Teaser */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Health Risk Monitor */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">{t('healthRiskMonitor')}</h3>
                <span className="text-[11px] text-slate-400">Automated Grassroots Decision Support</span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-xs">
              {t('lowRisk')}
            </span>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {t('lowRiskDesc')}
          </p>

          <div className="grid grid-cols-3 gap-3 text-center pt-2">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Postpartum Sepsis</div>
              <div className="text-xs font-extrabold text-emerald-700 mt-0.5">0 Risk</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] text-slate-400 font-bold uppercase">EPDS Mental Score</div>
              <div className="text-xs font-extrabold text-emerald-700 mt-0.5">4 / 30 (Normal)</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-[10px] text-slate-400 font-bold uppercase">Child Stunting Risk</div>
              <div className="text-xs font-extrabold text-emerald-700 mt-0.5">Optimal Band</div>
            </div>
          </div>

          {/* Connected ASHA Worker Contact */}
          <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-bold">
                SD
              </div>
              <div>
                <div className="text-xs font-bold text-teal-950">Assigned ASHA: Sunita Devi</div>
                <div className="text-[11px] text-teal-700">Next monthly home visit: Saturday 11:30 AM</div>
              </div>
            </div>
            <button
              onClick={() => setCurrentTab('asha')}
              className="px-3 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Connect</span>
            </button>
          </div>
        </div>

        {/* Right: Little Hero Journey & Passport Shortcut */}
        <div className="lg:col-span-5 space-y-4">
          {/* Little Hero Progress */}
          <div
            onClick={() => setCurrentTab('hero')}
            className="p-6 bg-gradient-to-br from-purple-900 to-indigo-950 text-white rounded-3xl shadow-md cursor-pointer hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-500/30 text-purple-200 border border-purple-400/30">
                Gamified Health Hero
              </span>
              <span className="text-xs font-extrabold text-amber-300">Level 4 • 680 XP</span>
            </div>

            <h4 className="font-display font-extrabold text-lg group-hover:text-purple-200 transition-colors">
              Aarav's Little Hero Journey 🦸‍♂️
            </h4>
            <p className="text-xs text-purple-200/80 mt-1">
              5 Badges unlocked! Next unlock at 800 XP: "Champion of 1000 Days".
            </p>

            <div className="w-full bg-purple-950/60 rounded-full h-2.5 mt-4 overflow-hidden border border-purple-800/40">
              <div className="bg-gradient-to-r from-amber-400 to-purple-400 h-full rounded-full w-[85%]" />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-purple-300 font-semibold">
              <span>Today's Activity: Household Treasure Hunt</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Digital Health Passport Shortcut */}
          <div
            onClick={() => setCurrentTab('passport')}
            className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-blue-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                  Digital Health Passport (ABHA Verified)
                </div>
                <div className="text-[11px] text-slate-500">QR Code • Longitudinal Clinical Card</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};
