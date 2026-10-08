import React, { useState } from 'react';
import {
  Syringe,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Info,
  Calendar,
  Upload,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Building2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VaccineItem } from '../types';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const VaccinationScheduler: React.FC = () => {
  const { vaccines, markVaccineCompleted, showToast } = useApp();
  const [filter, setFilter] = useState<'all' | 'completed' | 'upcoming'>('all');
  const [expandedVaccineId, setExpandedVaccineId] = useState<string | null>('v9');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeUploadVaccine, setActiveUploadVaccine] = useState<VaccineItem | null>(null);

  const completedCount = vaccines.filter(v => v.status === 'completed').length;
  const adherencePercent = Math.round((completedCount / vaccines.length) * 100);

  const filteredVaccines = vaccines.filter(v => {
    if (filter === 'completed') return v.status === 'completed';
    if (filter === 'upcoming') return v.status === 'upcoming' || v.status === 'overdue';
    return true;
  });

  const vaccineNarration = `National Immunization Schedule NIS. Aarav has completed 8 out of 9 vaccines, representing an 88% adherence rate. The next scheduled vaccine is MMR Booster 1 and DPT Booster, due in 12 days at Kengeri Primary Health Center.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs font-bold uppercase tracking-wider">
              Govt. of India Universal Immunization Programme
            </span>
            <VoiceReaderBtn textToRead={vaccineNarration} label="Listen to Schedule" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            National Immunization Schedule (NIS)
          </h1>
          <p className="text-amber-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Zero missed doses through multi-channel WhatsApp, SMS, and frontline ASHA worker home visits.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
          <div className="text-[11px] font-bold text-amber-200 uppercase">Vaccine Completion</div>
          <div className="text-3xl font-black text-white mt-0.5">{adherencePercent}%</div>
          <div className="text-[10px] text-amber-200 mt-0.5">{completedCount} of {vaccines.length} Doses Logged</div>
        </div>
      </div>

      {/* Progress & Filters Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Doses ({vaccines.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'completed'
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ✓ Completed ({completedCount})
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === 'upcoming'
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ⏳ Upcoming / Due ({vaccines.length - completedCount})
            </button>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-teal-600" />
            <span>Default Center: <strong>Kengeri PHC (09:00 AM - 01:00 PM)</strong></span>
          </div>
        </div>
      </div>

      {/* Vaccine Timeline & Cards */}
      <div className="space-y-4">
        {filteredVaccines.map((v) => {
          const isExpanded = expandedVaccineId === v.id;
          const isDone = v.status === 'completed';

          return (
            <div
              key={v.id}
              className={`bg-white rounded-3xl border transition-all overflow-hidden ${
                isDone
                  ? 'border-slate-200 hover:border-emerald-300 shadow-sm'
                  : 'border-amber-300 shadow-md ring-1 ring-amber-400/40 bg-amber-50/20'
              }`}
            >
              {/* Main Card Summary */}
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                    isDone ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-100 text-amber-700 animate-pulse'
                  }`}>
                    <Syringe className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-extrabold text-slate-900">{v.name}</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {v.dose}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Target: <span className="font-semibold text-slate-800">{v.targetDisease}</span> • Timeline: <span className="font-semibold text-teal-700">{v.timeline}</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{v.dueDate}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badges & Quick Actions */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {isDone ? (
                    <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => markVaccineCompleted(v.id)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Mark Received</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setActiveUploadVaccine(v);
                      setIsUploadModalOpen(true);
                    }}
                    title="Upload physical hospital card photo"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setExpandedVaccineId(isExpanded ? null : v.id)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 text-xs font-semibold"
                  >
                    <span className="hidden sm:inline">Why it matters</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Expandable "Why It Matters" Educational Section */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 bg-slate-50 border-t border-slate-100 grid sm:grid-cols-3 gap-4 text-xs animate-in fade-in">
                  <div>
                    <span className="font-bold text-teal-900 uppercase tracking-wider block mb-1 flex items-center gap-1">
                      <Info className="w-3.5 h-3.5 text-teal-600" /> Clinical Importance:
                    </span>
                    <p className="text-slate-700 leading-relaxed">{v.whyItMatters}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
                      Expected Side Effects:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{v.sideEffects}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 uppercase tracking-wider block mb-1">
                      Administration Method:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{v.routeOfAdmin}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Simulated Certificate Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Upload Certificate / MCP Card Photo
              </h3>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Scan or upload your physical Mother-Child Protection (MCP) card record for <strong>{activeUploadVaccine?.name}</strong>.
            </p>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors">
              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-slate-700">Click to capture / select photo</div>
              <div className="text-[10px] text-slate-400 mt-1">Supports JPG, PNG, PDF up to 10MB</div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  showToast(`✓ Simulated verification completed for ${activeUploadVaccine?.name}!`);
                  setIsUploadModalOpen(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-all"
              >
                Simulate Instant OCR Verification
              </button>
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
