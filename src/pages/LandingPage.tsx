import React from 'react';
import {
  HeartPulse,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HeartCrack,
  Languages,
  UtensilsCrossed,
  FileWarning,
  CheckCircle2,
  Syringe,
  Baby,
  Users,
  Trophy,
  FileText,
  Volume2,
  ChevronRight,
  MapPin,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { problemCards } from '../data/mockData';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const LandingPage: React.FC = () => {
  const { setCurrentTab, t, language, setLanguage, setIsHealthCheckOpen, resetToDemoPersona } = useApp();

  const iconMap: Record<string, React.ElementType> = {
    ShieldAlert,
    HeartCrack,
    Languages,
    UtensilsCrossed,
    FileWarning,
  };

  const heroNarration = "Tiny Care. Bharat-Health Guardian. Every mother deserves care. Every child deserves a healthy start. AI-powered maternal and child healthcare designed for Bharat, from vaccination reminders to postpartum recovery, nutrition, and accessible health guidance.";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-navy-900 to-slate-900 text-white text-xs py-2 px-4 text-center flex items-center justify-center gap-3">
        <span className="bg-saffron-500 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
          National Ideathon Prototype
        </span>
        <span className="hidden sm:inline text-slate-200">
          Tiny Care — Bharat-Health Guardian for Indian Mothers, Children (0–13), and ASHA Workers.
        </span>
        <button
          onClick={resetToDemoPersona}
          className="underline font-semibold text-saffron-300 hover:text-white transition-colors"
        >
          Load Live Demo Persona →
        </button>
      </div>

      {/* Navigation Bar */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-tight text-slate-900">
              Tiny<span className="text-teal-600">Care</span>
            </span>
            <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-saffron-100 text-saffron-800 font-bold border border-saffron-200">
              Bharat Guardian
            </span>
          </div>
        </div>

        {/* Vernacular Switcher & Direct App Access */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center bg-white border border-slate-200 rounded-full px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <Languages className="w-3.5 h-3.5 text-teal-600 mr-1.5" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'en' ? 'bg-teal-600 text-white' : 'hover:text-teal-700'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'hi' ? 'bg-teal-600 text-white' : 'hover:text-teal-700'}`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLanguage('kn')}
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'kn' ? 'bg-teal-600 text-white' : 'hover:text-teal-700'}`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'te' ? 'bg-teal-600 text-white' : 'hover:text-teal-700'}`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => setLanguage('ta')}
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'ta' ? 'bg-teal-600 text-white' : 'hover:text-teal-700'}`}
            >
              தமிழ்
            </button>
          </div>

          <button
            onClick={() => setCurrentTab('overview')}
            className="px-4 py-2 rounded-full text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white shadow-md hover:shadow-lg transition-all"
          >
            Launch Prototype App →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>AI-Driven Maternal & Pediatric Health Ecosystem</span>
              <VoiceReaderBtn textToRead={heroNarration} label="Listen to Pitch" />
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.12]">
              Every mother deserves <span className="text-teal-600">care</span>.<br />
              Every child deserves a <span className="text-saffron-600">healthy start</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentTab('overview')}
                className="px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-800 hover:to-emerald-700 text-white shadow-xl shadow-teal-700/20 hover:shadow-2xl transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>{t('dashboardBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsHealthCheckOpen(true)}
                className="px-6 py-3.5 rounded-2xl text-sm font-bold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <HeartPulse className="w-4 h-4 text-rose-500 animate-pulse" />
                <span>{t('oneTapCheck')}</span>
              </button>

              <button
                onClick={() => setCurrentTab('architecture')}
                className="px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                {t('howItWorksBtn')}
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-2xl font-black text-slate-900">100% NIS</div>
                <div className="text-xs text-slate-500">Immunization Schedule</div>
              </div>
              <div>
                <div className="text-2xl font-black text-teal-700">40-Day Care</div>
                <div className="text-xs text-slate-500">Maternal Recovery Void</div>
              </div>
              <div>
                <div className="text-2xl font-black text-saffron-700">5 Languages</div>
                <div className="text-xs text-slate-500">Voice-First Audio</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Ecosystem Flow Visual */}
          <div className="lg:col-span-5">
            <div className="relative p-6 bg-gradient-to-br from-white via-slate-50 to-teal-50/50 rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden">
              {/* Decorative Indian Accent Emblem */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron-400/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl" />

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                <span>Ecosystem Architecture</span>
                <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-extrabold">
                  Live Flow
                </span>
              </div>

              {/* Node 1: Mother + Child */}
              <div
                onClick={() => setCurrentTab('family')}
                className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-lg">
                    👩‍🍼
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                      Mother (Ananya) + Child (Aarav, 14m)
                    </div>
                    <div className="text-[11px] text-slate-500">Postpartum Day 18 • Bengaluru, KA</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
              </div>

              {/* Flow Connector */}
              <div className="flex justify-center py-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-slate-300 to-teal-500 animate-pulse" />
              </div>

              {/* Node 2: Tiny Care Core Hub */}
              <div
                onClick={() => setCurrentTab('overview')}
                className="p-4 bg-gradient-to-r from-teal-700 via-teal-800 to-navy-900 rounded-2xl text-white shadow-xl shadow-teal-900/20 cursor-pointer hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-teal-300" />
                    <span className="font-extrabold text-sm">Tiny Care Intelligence Engine</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-bold">
                    Multi-Channel
                  </span>
                </div>
                <div className="text-xs text-teal-100/90">
                  Automated Triage • Vernacular Speech • Local Millets • SMS/WhatsApp
                </div>
              </div>

              {/* Flow Connector */}
              <div className="flex justify-center py-2">
                <div className="w-0.5 h-6 bg-gradient-to-b from-teal-500 to-emerald-500 animate-pulse" />
              </div>

              {/* Node 3: Connected Clinical & Frontline Outcomes */}
              <div className="grid grid-cols-2 gap-2">
                <div
                  onClick={() => setCurrentTab('vaccinations')}
                  className="p-2.5 bg-white rounded-xl border border-slate-200 text-left cursor-pointer hover:border-amber-400 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-amber-700 font-bold text-[11px] mb-0.5">
                    <Syringe className="w-3.5 h-3.5" />
                    <span>NIS Vaccines</span>
                  </div>
                  <div className="text-[10px] text-slate-500">8/9 On-Time (88%)</div>
                </div>

                <div
                  onClick={() => setCurrentTab('maternal')}
                  className="p-2.5 bg-white rounded-xl border border-slate-200 text-left cursor-pointer hover:border-rose-400 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-rose-700 font-bold text-[11px] mb-0.5">
                    <HeartCrack className="w-3.5 h-3.5" />
                    <span>40-Day Care</span>
                  </div>
                  <div className="text-[10px] text-slate-500">BP & EPDS Vitals</div>
                </div>

                <div
                  onClick={() => setCurrentTab('nutrition')}
                  className="p-2.5 bg-white rounded-xl border border-slate-200 text-left cursor-pointer hover:border-emerald-400 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-[11px] mb-0.5">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                    <span>Local Millets</span>
                  </div>
                  <div className="text-[10px] text-slate-500">Ragi & Moringa ₹32</div>
                </div>

                <div
                  onClick={() => setCurrentTab('asha')}
                  className="p-2.5 bg-white rounded-xl border border-slate-200 text-left cursor-pointer hover:border-teal-400 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-teal-700 font-bold text-[11px] mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>ASHA Worker</span>
                  </div>
                  <div className="text-[10px] text-slate-500">124 Families Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Problem Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            The Public Health Reality in Bharat
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            5 Critical Gaps Broken Across India's Healthcare
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Why existing generic parenting apps and fragmented paper records fail 90% of rural and semi-urban families.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card) => {
            const Icon = iconMap[card.icon] || ShieldAlert;
            return (
              <div
                key={card.id}
                className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {card.tag}
                    </span>
                  </div>

                  <div className="text-xl font-extrabold text-slate-900 mb-1">
                    {card.title}
                  </div>
                  <div className="text-xs font-bold text-rose-600 mb-2">
                    {card.stat}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <span className="font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    What Happens Today:
                  </span>
                  <span className="text-slate-700 italic">
                    "{card.whatHappensToday}"
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Tiny Care Solution Bridge */}
          <div className="p-6 bg-gradient-to-br from-teal-700 via-teal-800 to-navy-950 text-white rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-teal-300 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-xl font-black mb-2">
                Tiny Care connects the fragmented pieces.
              </div>
              <p className="text-xs text-teal-100/90 leading-relaxed">
                By uniting maternal recovery, NIS vaccination, regional millets, and frontline ASHA workers onto a single vernacular voice platform.
              </p>
            </div>

            <button
              onClick={() => setCurrentTab('overview')}
              className="mt-6 py-3 px-4 rounded-2xl bg-white text-teal-900 font-bold text-xs hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Solution Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-400">
              Complete Connected Ecosystem
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
              Built for Bharat's Diverse Grassroots Needs
            </h3>
            <p className="text-sm text-slate-300">
              Explore the individual interactive modules built into the live prototype:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            <button
              onClick={() => setCurrentTab('maternal')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <HeartCrack className="w-5 h-5 text-rose-400 mb-2" />
              <div className="font-bold text-xs text-white">Maternal 40-Day</div>
              <div className="text-[10px] text-slate-400">BP, Lochia & EPDS</div>
            </button>

            <button
              onClick={() => setCurrentTab('vaccinations')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <Syringe className="w-5 h-5 text-amber-400 mb-2" />
              <div className="font-bold text-xs text-white">NIS Scheduler</div>
              <div className="text-[10px] text-slate-400">National Schedule</div>
            </button>

            <button
              onClick={() => setCurrentTab('nutrition')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <UtensilsCrossed className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="font-bold text-xs text-white">Local Nutrition</div>
              <div className="text-[10px] text-slate-400">6 Indian Regions</div>
            </button>

            <button
              onClick={() => setCurrentTab('hero')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <Trophy className="w-5 h-5 text-purple-400 mb-2" />
              <div className="font-bold text-xs text-white">Little Hero XP</div>
              <div className="text-[10px] text-slate-400">Gamified Badges</div>
            </button>

            <button
              onClick={() => setCurrentTab('asha')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <Users className="w-5 h-5 text-teal-400 mb-2" />
              <div className="font-bold text-xs text-white">ASHA Worker</div>
              <div className="text-[10px] text-slate-400">124 Families Triage</div>
            </button>

            <button
              onClick={() => setCurrentTab('passport')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-left transition-all"
            >
              <FileText className="w-5 h-5 text-blue-400 mb-2" />
              <div className="font-bold text-xs text-white">Health Passport</div>
              <div className="text-[10px] text-slate-400">PDF & QR ABHA</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
