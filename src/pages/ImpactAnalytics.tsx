import React from 'react';
import {
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Heart,
  Globe2,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  Activity
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line
} from 'recharts';
import { impactStatistics } from '../data/mockData';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const ImpactAnalytics: React.FC = () => {
  const adherenceComparisonData = [
    { month: 'Jan', baselineIndia: 62, tinyCareAdherence: 91 },
    { month: 'Feb', baselineIndia: 64, tinyCareAdherence: 93 },
    { month: 'Mar', baselineIndia: 61, tinyCareAdherence: 94 },
    { month: 'Apr', baselineIndia: 65, tinyCareAdherence: 95 },
    { month: 'May', baselineIndia: 63, tinyCareAdherence: 94 },
    { month: 'Jun', baselineIndia: 66, tinyCareAdherence: 96 },
  ];

  const regionalCoverageData = [
    { region: 'Bengaluru Rural', mothers: 3400, adherence: 94 },
    { region: 'Mysuru District', mothers: 2800, adherence: 92 },
    { region: 'Raichur North', mothers: 2100, adherence: 88 },
    { region: 'Belagavi Cluster', mothers: 2450, adherence: 90 },
    { region: 'Kolar Agro', mothers: 1500, adherence: 93 },
  ];

  const impactNarration = `Public Health Impact and SDG Alignment. Tiny Care achieves a 94% immunization adherence rate and an 87% maternal check-in rate across 340 villages, directly advancing United Nations Sustainable Development Goals 3 and 2.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              Grassroots Public-Health Outcomes
            </span>
            <VoiceReaderBtn textToRead={impactNarration} label="Listen to Impact" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Public Health Impact & SDGs
          </h1>
          <p className="text-emerald-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Quantifiable health system improvements scaling across maternal health, neonatal mortality, and regional malnutrition.
          </p>
        </div>

        <div className="flex gap-2 shrink-0">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Vaccine Adherence</div>
            <div className="text-2xl font-black text-emerald-300 mt-0.5">{impactStatistics.vaccineAdherence}%</div>
            <div className="text-[9px] text-emerald-200">+31% vs National Avg</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-teal-200 uppercase font-bold">Maternal Void Closed</div>
            <div className="text-2xl font-black text-teal-300 mt-0.5">{impactStatistics.postpartumAdherence}%</div>
            <div className="text-[9px] text-teal-200">Daily Telemetry Rate</div>
          </div>
        </div>
      </div>

      {/* 4 Animated KPI Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Children Protected</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{impactStatistics.totalChildrenProtected}</div>
          <div className="text-xs text-emerald-600 font-bold mt-1">NIS Series Tracked</div>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Mothers Monitored</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{impactStatistics.mothersMonitored}</div>
          <div className="text-xs text-rose-600 font-bold mt-1">40-Day Care Telemetry</div>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Villages Covered</div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{impactStatistics.villagesCovered}</div>
          <div className="text-xs text-teal-600 font-bold mt-1">Grassroots PHC Clusters</div>
        </div>

        <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm text-center">
          <div className="text-[11px] font-bold text-slate-400 uppercase">Complications Prevented</div>
          <div className="text-2xl sm:text-3xl font-black text-rose-600 mt-1">{impactStatistics.severeComplicationsPrevented}</div>
          <div className="text-xs text-slate-500 font-bold mt-1">Early Red-Flag Triage</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Chart: Vaccine Adherence Comparison */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Immunization Adherence Rate (%)
              </h3>
              <p className="text-xs text-slate-400">Tiny Care Multi-Channel vs Traditional Paper Cards</p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              94% Adherence
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adherenceComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" />
                <YAxis domain={[50, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Legend />
                <Line type="monotone" dataKey="tinyCareAdherence" stroke="#0d9488" strokeWidth={3} name="Tiny Care Adherence (%)" />
                <Line type="monotone" dataKey="baselineIndia" stroke="#94a3b8" strokeDasharray="4 4" strokeWidth={2} name="India Baseline (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Chart: District Coverage */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Regional Mother Registry Penetration
              </h3>
              <p className="text-xs text-slate-400">Active Households Enrolled Across Karnataka Districts</p>
            </div>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
              5 Districts
            </span>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalCoverageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="region" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="mothers" fill="#14b8a6" radius={[8, 8, 0, 0]} name="Active Mothers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SDG Goals Deep Dive */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-display font-extrabold text-base text-slate-900">
              United Nations Sustainable Development Goals (SDG) Alignment
            </h3>
            <p className="text-xs text-slate-500">
              How Tiny Care supports India's National Health Mission and NITI Aayog Aspirational Districts goals.
            </p>
          </div>
          <span className="text-xs font-bold text-saffron-800 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200">
            SDG 3 • SDG 2 • SDG 10
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {impactStatistics.sdgGoals.map((sdg, idx) => (
            <div key={idx} className="p-5 bg-slate-50 rounded-3xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-teal-700 text-white font-extrabold text-xs">
                  {sdg.code}
                </span>
                <Globe2 className="w-4 h-4 text-teal-600" />
              </div>

              <h4 className="font-display font-extrabold text-sm text-slate-900 pt-1">
                {sdg.title}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {sdg.target}
              </p>

              <div className="pt-2 border-t border-slate-200/80 text-[11px] text-teal-900 font-semibold">
                <strong>Tiny Care Impact:</strong> {sdg.tinyCareContribution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
