import React, { useState } from 'react';
import {
  AlertOctagon,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Activity,
  Cpu,
  Sparkles,
  PhoneCall,
  Send,
  Building2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const RiskTriage: React.FC = () => {
  const { showToast, addAlert } = useApp();

  const [triageTarget, setTriageTarget] = useState<'mother' | 'child'>('mother');
  const [symptomFever, setSymptomFever] = useState(false);
  const [symptomPain, setSymptomPain] = useState(false);
  const [symptomBleeding, setSymptomBleeding] = useState(false);
  const [symptomJaundice, setSymptomJaundice] = useState(false);
  const [symptomBreathing, setSymptomBreathing] = useState(false);
  const [systolicBp, setSystolicBp] = useState(118);
  const [temperatureVal, setTemperatureVal] = useState(98.4);

  // Compute live triage status
  let riskLevel: 'low' | 'moderate' | 'high' = 'low';
  let recommendation = "All reported vitals and symptoms are within expected parameters. Continue standard postpartum ragi & moringa nutrition.";

  if (symptomBleeding || symptomBreathing || systolicBp >= 140 || temperatureVal >= 101.0) {
    riskLevel = 'high';
    recommendation = "POTENTIAL RED FLAG: Immediate clinical evaluation recommended. Frontline ASHA worker and nearest 24/7 PHC should be alerted.";
  } else if (symptomFever || symptomPain || symptomJaundice || systolicBp >= 130 || temperatureVal >= 99.5) {
    riskLevel = 'moderate';
    recommendation = "ADVISORY: Mild symptoms detected. Increase maternal hydration, monitor hourly temperature, and schedule routine tele-consultation.";
  }

  const triageNarration = `Smart Risk Triage Engine. Based on active symptoms and vitals input, the system classifies risk level as ${riskLevel.toUpperCase()}. Recommendation: ${recommendation}`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              Grassroots Clinical Decision-Support Prototype
            </span>
            <VoiceReaderBtn textToRead={triageNarration} label="Listen to Triage" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Automated Alert & Risk Triage Engine
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
            Simulated rule-based triage converting home vitals into immediate risk classifications for frontline healthcare escalation.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-right">
          <div className="text-[10px] text-slate-300 uppercase font-bold">Disclaimer</div>
          <div className="text-xs text-amber-300 font-semibold mt-0.5">Clinical Decision-Support Only</div>
          <div className="text-[9px] text-slate-400">Not a formal medical diagnosis</div>
        </div>
      </div>

      {/* Visual Triage Architecture Flowchart */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
          Decision Support Pipeline
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-[10px] font-bold text-slate-400 uppercase">1. Input</div>
            <div className="font-extrabold text-slate-900 mt-1">Vitals & Symptoms</div>
          </div>
          <div className="p-3 bg-teal-50 rounded-2xl border border-teal-200">
            <div className="text-[10px] font-bold text-teal-700 uppercase">2. Rule Engine</div>
            <div className="font-extrabold text-teal-950 mt-1">WHO/FOGSI Rules</div>
          </div>
          <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-200">
            <div className="text-[10px] font-bold text-indigo-700 uppercase">3. Classification</div>
            <div className="font-extrabold text-indigo-950 mt-1">Risk Triage Level</div>
          </div>
          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200">
            <div className="text-[10px] font-bold text-amber-700 uppercase">4. Action Plan</div>
            <div className="font-extrabold text-amber-950 mt-1">Recommended Care</div>
          </div>
          <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
            <div className="text-[10px] font-bold text-rose-700 uppercase">5. Frontline Alert</div>
            <div className="font-extrabold text-rose-950 mt-1">ASHA Dispatch</div>
          </div>
        </div>
      </div>

      {/* Interactive Triage Simulator Form + Output */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left: Input Controller */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">
              Interactive Symptom & Vital Inputs
            </h3>
            <div className="flex bg-slate-100 p-0.5 rounded-xl text-xs font-bold">
              <button
                onClick={() => setTriageTarget('mother')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  triageTarget === 'mother' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Mother
              </button>
              <button
                onClick={() => setTriageTarget('child')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  triageTarget === 'child' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                Child
              </button>
            </div>
          </div>

          {/* Vitals Sliders */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Systolic Blood Pressure:</span>
                <span className="text-teal-700 font-extrabold">{systolicBp} mmHg</span>
              </div>
              <input
                type="range"
                min="90"
                max="170"
                value={systolicBp}
                onChange={(e) => setSystolicBp(parseInt(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Normal (118)</span>
                <span>Pre-hypertension (130)</span>
                <span>Critical (160+)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Body Temperature:</span>
                <span className="text-rose-700 font-extrabold">{temperatureVal}°F</span>
              </div>
              <input
                type="range"
                min="97.0"
                max="103.0"
                step="0.1"
                value={temperatureVal}
                onChange={(e) => setTemperatureVal(parseFloat(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Normal (98.4°F)</span>
                <span>Mild (100°F)</span>
                <span>High Sepsis (&gt;101°F)</span>
              </div>
            </div>
          </div>

          {/* Warning Symptom Toggles */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              Observed Symptoms (Click to Toggle):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSymptomFever(!symptomFever)}
                className={`p-2.5 text-left text-xs font-semibold rounded-2xl border transition-all ${
                  symptomFever ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                🌡️ Chills / Shivering
              </button>

              <button
                type="button"
                onClick={() => setSymptomPain(!symptomPain)}
                className={`p-2.5 text-left text-xs font-semibold rounded-2xl border transition-all ${
                  symptomPain ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                💥 Severe Pelvic Stabbing
              </button>

              <button
                type="button"
                onClick={() => setSymptomBleeding(!symptomBleeding)}
                className={`p-2.5 text-left text-xs font-semibold rounded-2xl border transition-all ${
                  symptomBleeding ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                🩸 Heavy Clotting / Lochia
              </button>

              <button
                type="button"
                onClick={() => setSymptomJaundice(!symptomJaundice)}
                className={`p-2.5 text-left text-xs font-semibold rounded-2xl border transition-all ${
                  symptomJaundice ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                👀 Yellowing Eyes / Skin
              </button>

              <button
                type="button"
                onClick={() => setSymptomBreathing(!symptomBreathing)}
                className={`p-2.5 text-left text-xs font-semibold rounded-2xl border transition-all ${
                  symptomBreathing ? 'bg-rose-100 border-rose-300 text-rose-900 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                🫁 Rapid Chest In-drawing
              </button>
            </div>
          </div>
        </div>

        {/* Right: Real-Time Risk Classification Result */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className={`p-6 rounded-3xl border transition-all flex-1 flex flex-col justify-between ${
            riskLevel === 'high'
              ? 'bg-rose-50 border-rose-300 text-rose-950 shadow-xl ring-2 ring-rose-500'
              : riskLevel === 'moderate'
              ? 'bg-amber-50 border-amber-300 text-amber-950 shadow-md'
              : 'bg-emerald-50 border-emerald-200 text-emerald-950 shadow-sm'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white shadow-sm">
                  Triage Classification
                </span>
                <span className={`text-xs font-black px-3 py-1 rounded-full ${
                  riskLevel === 'high' ? 'bg-rose-600 text-white animate-pulse' : riskLevel === 'moderate' ? 'bg-amber-600 text-white' : 'bg-emerald-600 text-white'
                }`}>
                  {riskLevel === 'high' ? 'HIGH RISK (RED)' : riskLevel === 'moderate' ? 'MODERATE RISK (AMBER)' : 'LOW RISK (GREEN)'}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-lg mt-2">
                {riskLevel === 'high' ? 'Immediate Healthcare Referral Required' : riskLevel === 'moderate' ? 'Early Advisory Monitoring' : 'Stable Health Indicators'}
              </h4>

              <p className="text-xs mt-3 leading-relaxed font-medium">
                {recommendation}
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-slate-200/60 mt-4">
              <button
                onClick={() => {
                  addAlert({
                    title: `Triage Escalation: ${riskLevel.toUpperCase()} Risk`,
                    message: recommendation,
                    type: 'warning',
                    priority: riskLevel === 'high' ? 'high' : 'medium',
                    channels: { inApp: true, whatsapp: true, sms: true, audio: true }
                  });
                  showToast('🚨 Multi-channel escalation broadcast sent to ASHA worker and PHC!');
                }}
                className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Simulate Automated ASHA Dispatch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
