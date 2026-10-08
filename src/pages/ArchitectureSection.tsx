import React from 'react';
import {
  Cpu,
  Layers,
  Database,
  Smartphone,
  MessageCircle,
  MessageSquare,
  Volume2,
  HeartPulse,
  Users,
  ShieldCheck,
  FileCheck,
  Server,
  ArrowDown,
  ArrowRight,
  Code
} from 'lucide-react';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const ArchitectureSection: React.FC = () => {
  const archNarration = `How Tiny Care Works. A multi-layered architecture connecting rural and semi-urban families across mobile web, WhatsApp, 2G SMS, and vernacular audio to a centralized Python service layer, AI clinical intelligence, and frontline ASHA health workers.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-navy-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              Technical Architecture & System Design
            </span>
            <VoiceReaderBtn textToRead={archNarration} label="Listen to Architecture" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            "How Tiny Care Works"
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
            Enterprise-grade, scalable public health infrastructure combining modern React frontend with Python/Django service architecture.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-right shrink-0">
          <div className="text-[10px] text-slate-300 uppercase font-bold">Tech Stack</div>
          <div className="text-xs font-mono font-bold text-teal-300 mt-0.5">Django • React • PostgreSQL</div>
          <div className="text-[9px] text-slate-400">ReportLab • WhatsApp Gateway</div>
        </div>
      </div>

      {/* Visual End-to-End System Pipeline */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 text-center">
          End-to-End Bharat Health Intelligence Pipeline
        </h3>

        {/* Pipeline Step 1: Ingestion */}
        <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-extrabold text-teal-800 uppercase tracking-wider mb-2">
            <Smartphone className="w-4 h-4" />
            <span>Layer 1: Multi-Channel Patient Ingestion</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              📱 PWA Mobile App
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              💬 WhatsApp Chatbot
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              📩 2G SMS Two-Way
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              🔊 Vernacular Voice IVR
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shadow-sm z-10">
            ↓
          </div>
        </div>

        {/* Pipeline Step 2: Core Platform Hub */}
        <div className="p-5 bg-gradient-to-r from-teal-900 to-navy-900 text-white rounded-3xl shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-extrabold text-teal-300 uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>Layer 2: Tiny Care Core Engine (Django & Python Backend)</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-700/60 text-teal-200 font-mono">
              RESTful Service Architecture
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-slate-900">
            <div className="p-3 bg-white rounded-2xl font-extrabold">
              Service Layer
            </div>
            <div className="p-3 bg-white rounded-2xl font-extrabold">
              Translation Engine (5 Lang)
            </div>
            <div className="p-3 bg-white rounded-2xl font-extrabold">
              RBAC Security Matrix
            </div>
            <div className="p-3 bg-white rounded-2xl font-extrabold">
              ReportLab PDF Generator
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shadow-sm z-10">
            ↓
          </div>
        </div>

        {/* Pipeline Step 3: Domain Clinical Engines */}
        <div className="p-5 bg-slate-50 rounded-3xl border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Layer 3: Clinical Intelligence & Logic Engines</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              💉 NIS Scheduler Engine
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              🍲 Regional Agro-Nutrition AI
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              🩺 40-Day Red-Flag Triage
            </div>
            <div className="p-3 bg-white rounded-2xl border border-slate-200 font-bold text-slate-800">
              📈 WHO Growth & Milestones
            </div>
          </div>
        </div>

        <div className="flex justify-center -my-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shadow-sm z-10">
            ↓
          </div>
        </div>

        {/* Pipeline Step 4: Frontline & Health Outcomes */}
        <div className="p-5 bg-emerald-50/80 rounded-3xl border border-emerald-200">
          <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-900 uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Layer 4: Grassroots Public Health Action</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs">
            <div className="p-3 bg-white rounded-2xl border border-emerald-200 font-bold text-emerald-900">
              👩‍⚕️ ASHA / ANM Worker Triage
            </div>
            <div className="p-3 bg-white rounded-2xl border border-emerald-200 font-bold text-emerald-900">
              🏥 Primary Health Center (PHC) Sync
            </div>
            <div className="p-3 bg-white rounded-2xl border border-emerald-200 font-bold text-emerald-900">
              📄 ABHA Verifiable Health Passport
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Badges */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-display font-extrabold text-base text-slate-900">
          Enterprise Technology Stack Summary
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 uppercase text-[10px]">Backend Framework</span>
            <div className="font-extrabold text-slate-900">Django 5.0 (Python)</div>
            <p className="text-[11px] text-slate-500">Service-layer modular architecture</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 uppercase text-[10px]">Frontend UI</span>
            <div className="font-extrabold text-slate-900">React + TypeScript</div>
            <p className="text-[11px] text-slate-500">Tailwind CSS + Recharts + Web Speech</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-purple-700 uppercase text-[10px]">Database</span>
            <div className="font-extrabold text-slate-900">PostgreSQL (Relational)</div>
            <p className="text-[11px] text-slate-500">Normalized schema & audit logs</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-emerald-700 uppercase text-[10px]">Gateways</span>
            <div className="font-extrabold text-slate-900">WhatsApp & DLT SMS</div>
            <p className="text-[11px] text-slate-500">Node.js gateway & IVR telephony</p>
          </div>
        </div>
      </div>
    </div>
  );
};
