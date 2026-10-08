import React, { useState } from 'react';
import {
  Users,
  AlertOctagon,
  Calendar,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Search,
  Check,
  Send,
  Building2,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ashaWorkerData } from '../data/mockData';
import { AshaFamilyRecord } from '../types';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const AshaDashboard: React.FC = () => {
  const { showToast } = useApp();
  const [families, setFamilies] = useState<AshaFamilyRecord[]>(ashaWorkerData.families);
  const [selectedFamily, setSelectedFamily] = useState<AshaFamilyRecord | null>(ashaWorkerData.families[1]); // Geeta Rani selected by default for demo
  const [filterRisk, setFilterRisk] = useState<'all' | 'high' | 'followup' | 'healthy'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visitNote, setVisitNote] = useState('');

  const filteredFamilies = families.filter(f => {
    if (filterRisk !== 'all' && f.riskStatus !== filterRisk) return false;
    if (searchQuery && !f.motherName.toLowerCase().includes(searchQuery.toLowerCase()) && !f.childName.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleMarkResolved = (id: string) => {
    setFamilies(prev => prev.map(f => {
      if (f.id === id) {
        return {
          ...f,
          riskStatus: 'healthy',
          notes: 'Marked resolved by ASHA Worker Sunita Devi after clinical follow-up.'
        };
      }
      return f;
    }));
    if (selectedFamily?.id === id) {
      setSelectedFamily(prev => prev ? { ...prev, riskStatus: 'healthy' } : null);
    }
    showToast('✓ Family status updated to Healthy (Resolved)');
  };

  const handleAddVisitNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitNote || !selectedFamily) return;
    showToast(`📝 Visit note logged for ${selectedFamily.motherName}: "${visitNote}"`);
    setVisitNote('');
  };

  const ashaNarration = `ASHA Worker Dashboard for Sunita Devi, assigned to 124 families at Kengeri PHC. 7 high priority cases identified by the triage engine. Geeta Rani reported persistent fever and newborn jaundice requiring immediate home visit.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-xs font-bold uppercase tracking-wider">
              Frontline Health Worker Portal
            </span>
            <VoiceReaderBtn textToRead={ashaNarration} label="Listen to ASHA Brief" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            {ashaWorkerData.workerName}
          </h1>
          <p className="text-teal-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            {ashaWorkerData.workerId} • {ashaWorkerData.primaryHealthCenter}
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-teal-200 uppercase font-bold">Assigned</div>
            <div className="text-2xl font-black text-white">{ashaWorkerData.assignedFamilies}</div>
            <div className="text-[9px] text-teal-200">Families</div>
          </div>

          <div className="bg-rose-500/20 backdrop-blur-md p-3 rounded-2xl border border-rose-400/40 text-center">
            <div className="text-[10px] text-rose-200 uppercase font-bold">High Risk</div>
            <div className="text-2xl font-black text-rose-300">{ashaWorkerData.highPriorityCount}</div>
            <div className="text-[9px] text-rose-200">Urgent Triage</div>
          </div>

          <div className="bg-amber-500/20 backdrop-blur-md p-3 rounded-2xl border border-amber-400/40 text-center">
            <div className="text-[10px] text-amber-200 uppercase font-bold">Vaccines Due</div>
            <div className="text-2xl font-black text-amber-300">{ashaWorkerData.vaccinationsDueThisWeek}</div>
            <div className="text-[9px] text-amber-200">This Week</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-center">
            <div className="text-[10px] text-teal-200 uppercase font-bold">Follow-ups</div>
            <div className="text-2xl font-black text-white">{ashaWorkerData.followUpsPending}</div>
            <div className="text-[9px] text-teal-200">Pending</div>
          </div>
        </div>
      </div>

      {/* Main Split: Family List + Active Case Detail Drawer */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column: Triage Family List */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Assigned Village Case Registry
              </h3>
              <p className="text-xs text-slate-400">
                Real-time risk triaging powered by family daily check-ins
              </p>
            </div>

            {/* Risk Filters */}
            <div className="flex gap-1">
              <button
                onClick={() => setFilterRisk('all')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterRisk === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterRisk('high')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterRisk === 'high' ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-700'
                }`}
              >
                🔴 High Risk
              </button>
              <button
                onClick={() => setFilterRisk('followup')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterRisk === 'followup' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700'
                }`}
              >
                🟠 Follow-up
              </button>
              <button
                onClick={() => setFilterRisk('healthy')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterRisk === 'healthy' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'
                }`}
              >
                🟢 Healthy
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by mother or child name..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-teal-500"
            />
          </div>

          {/* Family Cards */}
          <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
            {filteredFamilies.map((fam) => {
              const isSelected = selectedFamily?.id === fam.id;
              const isHigh = fam.riskStatus === 'high';
              const isFollow = fam.riskStatus === 'followup';

              return (
                <div
                  key={fam.id}
                  onClick={() => setSelectedFamily(fam)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50/70 border-teal-400 shadow-md ring-1 ring-teal-400'
                      : isHigh
                      ? 'bg-rose-50/40 border-rose-200 hover:border-rose-300'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        isHigh ? 'bg-rose-600 animate-ping' : isFollow ? 'bg-amber-500' : 'bg-emerald-500'
                      }`} />
                      <span className="font-extrabold text-xs text-slate-900">{fam.motherName}</span>
                      <span className="text-slate-400 text-xs">•</span>
                      <span className="text-xs font-semibold text-slate-700">{fam.childName} ({fam.childAge})</span>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      isHigh ? 'bg-rose-100 text-rose-800' : isFollow ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {fam.riskStatus}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{fam.location}</span>
                  </div>

                  <div className="mt-2 text-xs font-medium text-slate-800 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <span className="font-bold text-teal-800">Next Action:</span> {fam.nextTask}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Case Deep-Dive & Action Controls */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          {selectedFamily ? (
            <div className="space-y-6">
              {/* Selected Family Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-extrabold text-lg text-slate-900">
                      {selectedFamily.motherName} & {selectedFamily.childName}
                    </h3>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                      selectedFamily.riskStatus === 'high' ? 'bg-rose-100 text-rose-800 font-extrabold' : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {selectedFamily.riskStatus}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {selectedFamily.village} • Postpartum Day {selectedFamily.postpartumDay} • Child Age: {selectedFamily.childAge}
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Contact Phone</div>
                  <div className="text-xs font-mono font-bold text-slate-800">{selectedFamily.phone}</div>
                </div>
              </div>

              {/* Clinical Triaging Note */}
              <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                selectedFamily.riskStatus === 'high'
                  ? 'bg-rose-50 border-rose-300 text-rose-950'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}>
                <div className="font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5 text-rose-600" />
                  <span>Clinical Assessment & Warning Flags:</span>
                </div>
                <p className="leading-relaxed font-medium">
                  {selectedFamily.notes}
                </p>
              </div>

              {/* 4 Direct Action Buttons for ASHA Worker */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => showToast(`📞 Dialing ${selectedFamily.motherName} (${selectedFamily.phone})...`)}
                  className="py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Family</span>
                </button>

                <button
                  onClick={() => showToast(`💬 WhatsApp health guidance sent to ${selectedFamily.phone}`)}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send WhatsApp</span>
                </button>

                <button
                  onClick={() => showToast(`📅 In-person home visit scheduled for ${selectedFamily.motherName}`)}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Schedule Visit</span>
                </button>

                <button
                  onClick={() => handleMarkResolved(selectedFamily.id)}
                  className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mark Resolved</span>
                </button>
              </div>

              {/* Record Home Visit Form */}
              <form onSubmit={handleAddVisitNote} className="space-y-2 pt-4 border-t border-slate-100">
                <label className="text-xs font-bold text-slate-700 block">
                  Log Field Visit / Tele-Counseling Note
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={visitNote}
                    onChange={(e) => setVisitNote(e.target.value)}
                    placeholder="Enter observations e.g. checked latch, advised ORS..."
                    className="flex-1 p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                  >
                    Save Note
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400 text-xs">
              Select a family from the left registry to view clinical details and trigger frontline actions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
