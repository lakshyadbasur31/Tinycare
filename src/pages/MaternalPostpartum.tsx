import React, { useState } from 'react';
import {
  Heart,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Sparkles,
  Smile,
  Meh,
  Frown,
  PhoneCall,
  MapPin,
  Send,
  Info,
  ChevronRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { recoveryStages } from '../data/mockData';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const MaternalPostpartum: React.FC = () => {
  const { mother, updateMotherVitals, showToast, addAlert, setCurrentTab, t } = useApp();
  
  const [selectedStageIdx, setSelectedStageIdx] = useState(2); // Day 15-21 active by default
  const [epdsAnswers, setEpdsAnswers] = useState<number[]>([0, 1, 1, 0, 2]); // sample low answers

  const handleBpChange = (bp: string) => {
    updateMotherVitals({ bloodPressure: bp });
  };

  const handleTempChange = (temp: string) => {
    updateMotherVitals({ temperature: temp });
  };

  const handleLochiaChange = (status: any) => {
    updateMotherVitals({ lochiaStatus: status });
  };

  const handlePainChange = (pain: number) => {
    updateMotherVitals({ painLevel: pain });
  };

  const handleFatigueChange = (fatigue: number) => {
    updateMotherVitals({ fatigueLevel: fatigue });
  };

  const handleMoodChange = (mood: any) => {
    updateMotherVitals({ mood });
  };

  const handleEpdsAnswer = (questionIdx: number, val: number) => {
    const updated = [...epdsAnswers];
    updated[questionIdx] = val;
    setEpdsAnswers(updated);
    const total = updated.reduce((a, b) => a + b, 0);
    updateMotherVitals({ epdsScore: total });
  };

  const isRedFlag = mother.riskStatus === 'high';
  const isModerate = mother.riskStatus === 'moderate';

  const narrationText = `Maternal Recovery Dashboard. Currently on Day 18 of 40 days. Recovery is at 78%. Blood pressure is ${mother.bloodPressure}, temperature is ${mother.temperature}, pain level is ${mother.painLevel} out of 10. ${isRedFlag ? 'Warning: abnormal vitals detected. Please contact your ASHA worker or visit the nearest PHC.' : 'All vitals are within expected postpartum recovery range.'}`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-bold uppercase tracking-wider">
              The 40-Day Postpartum Sanctuary
            </span>
            <VoiceReaderBtn textToRead={narrationText} label="Listen to Vitals" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Maternal Recovery — Day {mother.postpartumDay} of 40
          </h1>
          <p className="text-rose-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Bridging India's 40-day care void through daily vitals telemetry, red-flag triaging, and EPDS emotional screening.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
          <div className="text-[11px] font-bold text-rose-200 uppercase">Recovery Milestone</div>
          <div className="text-3xl font-black text-white mt-0.5">{mother.recoveryPercentage}%</div>
          <div className="text-[10px] text-rose-200 mt-0.5">Stage 3: Pelvic Strengthening</div>
        </div>
      </div>

      {/* 40-Day Visual Progress Timeline */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              40-Day Care Timeline
            </h2>
            <p className="text-xs text-slate-500">
              Interactive clinical milestones across 5 postpartum recovery phases.
            </p>
          </div>
          <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Day 18 Active
          </span>
        </div>

        {/* Progress Track */}
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
          <div
            className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${(mother.postpartumDay / mother.totalDays) * 100}%` }}
          />
        </div>

        {/* 5 Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
          {recoveryStages.map((stg, idx) => {
            const isSelected = selectedStageIdx === idx;
            const isCurrent = idx === 2; // Days 15-21
            return (
              <button
                key={stg.range}
                onClick={() => setSelectedStageIdx(idx)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-rose-50/90 border-rose-300 ring-2 ring-rose-400 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-extrabold text-rose-900">{stg.range}</span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                  )}
                </div>
                <div className="text-[11px] font-semibold text-slate-800 line-clamp-1">
                  {stg.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Drawer */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 grid sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="font-bold text-rose-800 uppercase tracking-wider block mb-1">
              🥗 Postpartum Diet
            </span>
            <p className="text-slate-600 leading-relaxed">
              {recoveryStages[selectedStageIdx].nutrition}
            </p>
          </div>
          <div>
            <span className="font-bold text-teal-800 uppercase tracking-wider block mb-1">
              🧘 Recovery Focus
            </span>
            <p className="text-slate-600 leading-relaxed">
              {recoveryStages[selectedStageIdx].recovery}
            </p>
          </div>
          <div>
            <span className="font-bold text-blue-800 uppercase tracking-wider block mb-1">
              🚶 Safe Activity
            </span>
            <p className="text-slate-600 leading-relaxed">
              {recoveryStages[selectedStageIdx].activity}
            </p>
          </div>
          <div className="bg-rose-100/60 p-2.5 rounded-xl border border-rose-200">
            <span className="font-bold text-rose-900 uppercase tracking-wider block mb-1">
              ⚠️ Warning Signs
            </span>
            <p className="text-rose-950 font-medium leading-relaxed">
              {recoveryStages[selectedStageIdx].warningSigns}
            </p>
          </div>
        </div>
      </div>

      {/* Daily Check-In & Red-Flag Triage Engine */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Daily Check-In Form */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                Daily Maternal Check-In (Interactive)
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">Updates live risk telemetry</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Blood Pressure Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Blood Pressure (Systolic/Diastolic)</span>
                <span className="text-[10px] text-slate-400">Normal: &lt;120/80</span>
              </label>
              <select
                value={mother.bloodPressure}
                onChange={(e) => handleBpChange(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:border-rose-500 outline-none"
              >
                <option value="118/76">118/76 mmHg (Normal Optimal)</option>
                <option value="124/82">124/82 mmHg (Mildly Elevated)</option>
                <option value="142/92">142/92 mmHg (⚠️ Preeclampsia Warning)</option>
                <option value="158/104">158/104 mmHg (🚨 Critical Red Flag)</option>
              </select>
            </div>

            {/* Temperature Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Body Temperature (°F)</span>
                <span className="text-[10px] text-slate-400">Sepsis alert: &gt;100.4°F</span>
              </label>
              <select
                value={mother.temperature}
                onChange={(e) => handleTempChange(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:border-rose-500 outline-none"
              >
                <option value="98.4°F">98.4°F (Normal)</option>
                <option value="99.2°F">99.2°F (Mild Warmth)</option>
                <option value="101.4°F">101.4°F (⚠️ Puerperal Fever / Infection)</option>
              </select>
            </div>

            {/* Lochia Status */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Lochia Bleeding Stage</label>
              <select
                value={mother.lochiaStatus}
                onChange={(e) => handleLochiaChange(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:border-rose-500 outline-none"
              >
                <option value="normal">Lochia Alba (Normal creamy/light - Day 18)</option>
                <option value="moderate">Lochia Serosa (Pink/brownish)</option>
                <option value="heavy">Heavy Flow (&gt;1 pad every 3 hours)</option>
                <option value="concerning">🚨 Soaking &gt;1 pad/hour + Foul Odor</option>
              </select>
            </div>

            {/* Mood Options */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">How are you feeling today?</label>
              <div className="flex gap-1.5">
                {[
                  { id: 'happy', label: '😊 Happy' },
                  { id: 'calm', label: '😌 Calm' },
                  { id: 'anxious', label: '😟 Anxious' },
                  { id: 'exhausted', label: '😴 Tired' },
                  { id: 'sad', label: '😢 Low' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleMoodChange(m.id)}
                    className={`flex-1 py-2 text-[11px] font-semibold rounded-xl border transition-all ${
                      mother.mood === m.id
                        ? 'bg-rose-100 border-rose-400 text-rose-900 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sliders: Pain & Fatigue */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Pelvic / Wound Pain Level:</span>
                <span className="text-rose-600 font-extrabold">{mother.painLevel} / 10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={mother.painLevel}
                onChange={(e) => handlePainChange(parseInt(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>No Pain (0)</span>
                <span>Moderate (5)</span>
                <span>Severe (10)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Fatigue & Exhaustion:</span>
                <span className="text-amber-600 font-extrabold">{mother.fatigueLevel} / 10</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={mother.fatigueLevel}
                onChange={(e) => handleFatigueChange(parseInt(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Energized (0)</span>
                <span>Average (5)</span>
                <span>Bedridden (10)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Simulated Red-Flag Triage Outcome */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className={`p-6 rounded-3xl border transition-all flex-1 flex flex-col justify-between ${
            isRedFlag
              ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-lg ring-2 ring-rose-500 animate-pulse-subtle'
              : isModerate
              ? 'bg-amber-50 border-amber-300 text-amber-950 shadow-md'
              : 'bg-emerald-50 border-emerald-200 text-emerald-950 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/80 shadow-sm">
                  Simulated Triage Engine
                </span>
                <span className={`text-xs font-black px-2.5 py-1 rounded-full ${
                  isRedFlag ? 'bg-rose-600 text-white' : isModerate ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'
                }`}>
                  {isRedFlag ? '🚨 RED FLAG DETECTED' : isModerate ? '⚠️ MODERATE ATTENTION' : '✓ ALL NORMAL'}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-lg">
                {isRedFlag ? 'Attention Required: Clinical Escalation' : isModerate ? 'Advisory: Monitor Symptoms' : 'All Indicators Within Expected Range'}
              </h4>

              <p className="text-xs mt-2 leading-relaxed opacity-90">
                {isRedFlag
                  ? 'Your reported vitals (high BP / fever / severe pain) exceed expected postpartum thresholds. Automated notification ready for ASHA worker Sunita Devi.'
                  : isModerate
                  ? 'Mild discomfort or fatigue detected. Ensure sufficient hydration, ragi porridge, and 30 minutes rest.'
                  : 'Uterine involution, normal blood pressure (118/76), and low infection probability verified.'}
              </p>
            </div>

            {/* Direct Action Escalation Buttons */}
            <div className="space-y-2 pt-4 border-t border-slate-200/60 mt-4">
              <button
                onClick={() => {
                  addAlert({
                    title: 'Urgent Maternal Check-in Triggered',
                    message: `Mother vitals escalated: BP ${mother.bloodPressure}, Temp ${mother.temperature}. Frontline PHC alerted.`,
                    type: 'warning',
                    priority: 'high',
                    channels: { inApp: true, whatsapp: true, sms: true, audio: true }
                  });
                  showToast('🚨 Alert dispatched to ASHA Worker Sunita Devi and Kengeri PHC!');
                }}
                className="w-full py-2.5 px-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Contact Health Worker (ASHA)</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => showToast('📍 Kengeri Primary Health Center located: 1.8 km away (Open 24/7)')}
                  className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>Find PHC (1.8 km)</span>
                </button>

                <button
                  onClick={() => showToast('✓ Daily check-in logged to Digital Health Passport')}
                  className="py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Save Log</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EPDS (Edinburgh Postnatal Depression Screening) Module */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-extrabold text-base text-slate-900">
                {t('epdsTitle')}
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                Score: {mother.epdsScore} / 30
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {t('epdsDisclaimer')}
            </p>
          </div>

          <div className="text-xs text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            Status: <span className="font-bold text-emerald-700">Minimal Depressive Symptoms (Normal)</span>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          {[
            { q: "1. In the past 7 days, I have been able to laugh and see the funny side of things:", opts: ["As much as I always could", "Not quite so much now", "Definitely not so much", "Not at all"] },
            { q: "2. I have looked forward with enjoyment to things:", opts: ["As much as I ever did", "Rather less than I used to", "Definitely less than I used to", "Hardly at all"] },
            { q: "3. I have blamed myself unnecessarily when things went wrong:", opts: ["No, never", "Not very often", "Yes, some of the time", "Yes, most of the time"] },
            { q: "4. I have been anxious or worried for no good reason:", opts: ["No, not at all", "Hardly ever", "Yes, sometimes", "Yes, very often"] },
            { q: "5. Things have been getting on top of me (feeling overwhelmed):", opts: ["No, I am coping as well as ever", "No, most of the time I cope", "Yes, sometimes I haven't been coping", "Yes, most of the time I can't cope"] }
          ].map((item, qIdx) => (
            <div key={qIdx} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-semibold text-slate-800">{item.q}</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {item.opts.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleEpdsAnswer(qIdx, optIdx)}
                    className={`p-2 text-[11px] rounded-xl text-left border transition-all ${
                      epdsAnswers[qIdx] === optIdx
                        ? 'bg-purple-100 border-purple-400 text-purple-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
