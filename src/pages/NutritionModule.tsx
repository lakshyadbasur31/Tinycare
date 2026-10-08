import React, { useState } from 'react';
import {
  Utensils,
  MapPin,
  Sparkles,
  IndianRupee,
  Flame,
  Dna,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ChevronRight,
  Filter,
  Leaf
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { regionalNutritionData } from '../data/mockData';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const NutritionModule: React.FC = () => {
  const { selectedRegion, setSelectedRegion, showToast } = useApp();
  const [filterLactation, setFilterLactation] = useState(false);
  const [filterBudget, setFilterBudget] = useState(false);

  const currentRegionData = regionalNutritionData.find(r => r.id === selectedRegion) || regionalNutritionData[0];
  const activePlan = currentRegionData.days[0]; // Day 1 Today

  const nutritionNarration = `Regional AI Nutrition for ${currentRegionData.name}. Today's featured meal plan includes Ragi Mudde with Drumstick Leaf Sambar and Curd, delivering 16.2 grams of protein and high bioavailable calcium at an estimated cost of ₹32.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Indigenous Indian Agro-Nutrition Engine
            </span>
            <VoiceReaderBtn textToRead={nutritionNarration} label="Listen to Diet Plan" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Hyper-Local AI Nutrition
          </h1>
          <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Empowering mothers with affordable (&lt;₹35/meal), climate-resilient local millets and postpartum galactagogues.
          </p>
        </div>

        {/* Region Switcher Pills */}
        <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex flex-wrap gap-1.5 shrink-0">
          {regionalNutritionData.map((reg) => (
            <button
              key={reg.id}
              onClick={() => {
                setSelectedRegion(reg.id);
                showToast(`Switched region to ${reg.name}`);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedRegion === reg.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              {reg.state}
            </button>
          ))}
        </div>
      </div>

      {/* Regional Agro Description & Filter Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <h3 className="font-bold text-sm text-slate-900">
                Current Agro-Climatic Zone: <strong>{currentRegionData.name}</strong>
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Key Local Staples: {currentRegionData.staples.join(' • ')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterLactation(!filterLactation)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                filterLactation
                  ? 'bg-rose-100 border-rose-300 text-rose-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Lactation Booster</span>
            </button>

            <button
              onClick={() => setFilterBudget(!filterBudget)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                filterBudget
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              <span>Budget (&lt;₹35)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Meals of the Day Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Breakfast */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                Breakfast (08:30 AM)
              </span>
              <span className="text-xs font-extrabold text-slate-900 flex items-center">
                <IndianRupee className="w-3 h-3" />{activePlan.breakfast.cost}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-sm text-slate-900">
              {activePlan.breakfast.name}
            </h4>

            <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> {activePlan.breakfast.calories} kcal
              </span>
              <span className="flex items-center gap-1">
                <Dna className="w-3.5 h-3.5 text-blue-500" /> {activePlan.breakfast.protein} protein
              </span>
            </div>

            <div className="mt-3 space-y-1">
              {activePlan.breakfast.keyBenefits.map((b, idx) => (
                <div key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400">
            Local: {activePlan.breakfast.localIngredients.join(', ')}
          </div>
        </div>

        {/* Lunch */}
        <div className="p-5 bg-white rounded-3xl border border-emerald-300 shadow-md ring-1 ring-emerald-400/30 flex flex-col justify-between space-y-4 bg-emerald-50/20">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                Lunch • Primary Thali
              </span>
              <span className="text-xs font-extrabold text-slate-900 flex items-center">
                <IndianRupee className="w-3 h-3" />{activePlan.lunch.cost}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-sm text-slate-900">
              {activePlan.lunch.name}
            </h4>

            <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> {activePlan.lunch.calories} kcal
              </span>
              <span className="flex items-center gap-1">
                <Dna className="w-3.5 h-3.5 text-blue-500" /> {activePlan.lunch.protein} protein
              </span>
            </div>

            <div className="mt-3 space-y-1">
              {activePlan.lunch.keyBenefits.map((b, idx) => (
                <div key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-emerald-700 font-semibold">
            ✓ 100% Village Market Sourced
          </div>
        </div>

        {/* Snack */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">
                Snack (04:30 PM)
              </span>
              <span className="text-xs font-extrabold text-slate-900 flex items-center">
                <IndianRupee className="w-3 h-3" />{activePlan.snack.cost}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-sm text-slate-900">
              {activePlan.snack.name}
            </h4>

            <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> {activePlan.snack.calories} kcal
              </span>
              <span className="flex items-center gap-1">
                <Dna className="w-3.5 h-3.5 text-blue-500" /> {activePlan.snack.protein} protein
              </span>
            </div>

            <div className="mt-3 space-y-1">
              {activePlan.snack.keyBenefits.map((b, idx) => (
                <div key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400">
            Local: {activePlan.snack.localIngredients.join(', ')}
          </div>
        </div>

        {/* Dinner */}
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                Dinner (07:30 PM)
              </span>
              <span className="text-xs font-extrabold text-slate-900 flex items-center">
                <IndianRupee className="w-3 h-3" />{activePlan.dinner.cost}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-sm text-slate-900">
              {activePlan.dinner.name}
            </h4>

            <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
              <span className="flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> {activePlan.dinner.calories} kcal
              </span>
              <span className="flex items-center gap-1">
                <Dna className="w-3.5 h-3.5 text-blue-500" /> {activePlan.dinner.protein} protein
              </span>
            </div>

            <div className="mt-3 space-y-1">
              {activePlan.dinner.keyBenefits.map((b, idx) => (
                <div key={idx} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-400">
            Local: {activePlan.dinner.localIngredients.join(', ')}
          </div>
        </div>
      </div>

      {/* AI Explanation Card */}
      <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-3xl border border-emerald-200 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Why This Regional AI Nutrition Plan?
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            "{activePlan.aiExplanation}"
          </p>
        </div>
      </div>
    </div>
  );
};
