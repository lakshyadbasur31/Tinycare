import React from 'react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  UserCheck,
  FileCheck2,
  AlertCircle,
  Key,
  Database,
  CheckCircle2
} from 'lucide-react';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const SecurityPrivacy: React.FC = () => {
  const securityNarration = `Privacy and Security by Design. Tiny Care implements strict Role-Based Access Control, client-side data sanitization, consent-driven ASHA sharing, and alignment with India's Digital Personal Data Protection Act.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-navy-950 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              DPDP Act 2023 & ABHA Guidelines Compliant
            </span>
            <VoiceReaderBtn textToRead={securityNarration} label="Listen to Security Principles" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            "Healthcare Should Be Private by Design"
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
            Building trustworthy maternal and pediatric care through minimal data collection, granular consent, and robust access governance.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-center shrink-0">
          <ShieldCheck className="w-8 h-8 text-teal-300 mx-auto mb-1" />
          <div className="text-xs font-bold text-white">Trust Architecture</div>
          <div className="text-[10px] text-teal-200">Zero Commercial Ad Tracking</div>
        </div>
      </div>

      {/* Security Pillars Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Key className="w-5 h-5" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Role-Based Access Control (RBAC)
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Strict separation between Mother/Family personal health views and ASHA Worker clinical triage portals. Health workers only access assigned village households.
          </p>
          <div className="text-[11px] font-bold text-teal-700 flex items-center gap-1 pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Scoped Token Permissions</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <EyeOff className="w-5 h-5" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Sanitized Telemetry
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            AI nutrition and EPDS mental health evaluation engines receive stripped physiological tokens without exposing full names or government identity numbers.
          </p>
          <div className="text-[11px] font-bold text-blue-700 flex items-center gap-1 pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Zero PII Leakage in Prompts</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Controlled Consent Sharing
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Mothers retain full ownership of their health records. Sharing data with a new PHC doctor or private pediatrician requires explicit OTP verification.
          </p>
          <div className="text-[11px] font-bold text-purple-700 flex items-center gap-1 pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Time-Limited Audit Access</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            Verifiable Health Passport
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Offline QR codes contain digitally signed cryptographic checksums, preventing forged vaccination certificates while enabling instant PHC scans.
          </p>
          <div className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tamper-Resistant QR</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="font-display font-extrabold text-base text-slate-900">
            CSRF & Transport Encryption
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All API communications leverage TLS 1.3 encryption with strict CSRF tokens, anti-replay nonces, and secure HTTP-only session cookies.
          </p>
          <div className="text-[11px] font-bold text-amber-700 flex items-center gap-1 pt-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Encrypted at Rest & In-Transit</span>
          </div>
        </div>

        <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-sm space-y-3 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-white/10 text-teal-300 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-extrabold text-base">
              Honest Public Health Guarantee
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              We do NOT make impossible marketing claims like "100% unhackable". Instead, we build defense-in-depth compliant with India's DPDP Act.
            </p>
          </div>
          <div className="text-[10px] text-teal-300 font-mono">
            Audit-Ready Architecture
          </div>
        </div>
      </div>
    </div>
  );
};
