import React from 'react';
import {
  Baby,
  TrendingUp,
  Award,
  CheckCircle2,
  Circle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale,
  Ruler,
  Brain
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  ComposedChart
} from 'recharts';
import { useApp } from '../context/AppContext';
import { whoGrowthData } from '../data/mockData';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const ChildHealth: React.FC = () => {
  const { child, milestones, toggleMilestone, setCurrentTab, showToast } = useApp();

  const completedMilestonesCount = milestones.filter(m => m.completed).length;
  const milestonePercent = Math.round((completedMilestonesCount / milestones.length) * 100);

  const childNarration = `Child Health Profile for Aarav Sharma, 14 months old. Current weight is 9.8 kilograms and height is 78.5 centimeters. Aarav is in the healthy green zone at the 62nd WHO growth percentile. 4 out of 6 major developmental milestones have been achieved.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider">
              WHO Child Growth & Development Standards
            </span>
            <VoiceReaderBtn textToRead={childNarration} label="Listen to Growth" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            {child.name} — 14 Months
          </h1>
          <p className="text-blue-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Tracking longitudinal pediatric anthropometry, cognitive motor milestones, and nutritional vitality.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-blue-200 uppercase font-bold">WHO Percentile</div>
            <div className="text-2xl font-black text-emerald-300 mt-0.5">62nd %ile</div>
            <div className="text-[10px] text-emerald-200 font-medium">Optimal Band (Green)</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-blue-200 uppercase font-bold">Hero XP</div>
            <div className="text-2xl font-black text-amber-300 mt-0.5">{child.heroXp}</div>
            <div className="text-[10px] text-amber-200 font-medium">Level {child.heroLevel} Explorer</div>
          </div>
        </div>
      </div>

      {/* Vitals Anthropometry Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Weight</div>
            <div className="text-lg font-extrabold text-slate-900">{child.currentWeight} kg</div>
            <div className="text-[10px] text-emerald-600 font-bold">+0.4 kg this month</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Height (Length)</div>
            <div className="text-lg font-extrabold text-slate-900">{child.currentHeight} cm</div>
            <div className="text-[10px] text-emerald-600 font-bold">Normal Stature</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Head Circumference</div>
            <div className="text-lg font-extrabold text-slate-900">{child.headCircumference} cm</div>
            <div className="text-[10px] text-slate-500">Brain development on track</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Birth Weight</div>
            <div className="text-lg font-extrabold text-slate-900">{child.birthWeight} kg</div>
            <div className="text-[10px] text-slate-500">Born at full term</div>
          </div>
        </div>
      </div>

      {/* WHO Growth Chart (Recharts) */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <h3 className="font-display font-extrabold text-base text-slate-900">
              WHO Growth Trajectory (Weight-for-Age: Boys 0–18 Months)
            </h3>
            <p className="text-xs text-slate-500">
              Comparing Aarav's real measured weight against WHO international median & standard deviation percentiles.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-blue-600">
              <span className="w-3 h-3 rounded-full bg-blue-600" /> Aarav Actual
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600">
              <span className="w-3 h-1 bg-emerald-500" /> WHO 50th Median
            </span>
          </div>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={whoGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" label={{ value: 'Age (Months)', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft' }} domain={[2, 14]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px', fontSize: '12px' }}
                formatter={(value: any, name: any) => [`${value} kg`, name]}
              />
              <Legend />
              {/* WHO Band */}
              <Line type="monotone" dataKey="weightBoyHigh" stroke="#cbd5e1" strokeDasharray="4 4" name="WHO +2SD (Upper)" dot={false} />
              <Line type="monotone" dataKey="weightBoyMed" stroke="#10b981" strokeWidth={2.5} name="WHO 50th Median" dot={false} />
              <Line type="monotone" dataKey="weightBoyLow" stroke="#cbd5e1" strokeDasharray="4 4" name="WHO -2SD (Lower)" dot={false} />
              {/* Aarav Trajectory */}
              <Line
                type="monotone"
                dataKey="actualWeight"
                stroke="#2563eb"
                strokeWidth={3.5}
                name="Aarav's Weight"
                dot={{ r: 5, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Developmental Milestones Checklist */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-extrabold text-base text-slate-900">
                Developmental Milestones Checklist
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                {completedMilestonesCount} of {milestones.length} Completed ({milestonePercent}%)
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Tap any milestone to record completion and trigger gamified XP celebration.
            </p>
          </div>

          <button
            onClick={() => setCurrentTab('hero')}
            className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-100 font-bold text-xs border border-purple-200 flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>View Hero Badges →</span>
          </button>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {milestones.map((m) => (
            <div
              key={m.id}
              onClick={() => toggleMilestone(m.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                m.completed
                  ? 'bg-emerald-50/70 border-emerald-200 text-slate-900'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    m.category === 'motor' ? 'bg-blue-100 text-blue-800' : m.category === 'language' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {m.category}
                  </span>
                  <span className="text-[11px] text-slate-400">Expected: {m.expectedAgeMonths} Months</span>
                </div>
                <div className="text-xs font-bold text-slate-900">{m.title}</div>
                <p className="text-[11px] text-slate-500">{m.description}</p>
                {m.completedDate && (
                  <div className="text-[10px] text-emerald-700 font-semibold pt-1">
                    ✓ {m.completedDate}
                  </div>
                )}
              </div>

              <div className="shrink-0 mt-1">
                {m.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-300" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
