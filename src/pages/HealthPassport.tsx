import React, { useState } from 'react';
import {
  FileText,
  Download,
  Share2,
  Printer,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Calendar,
  Building2,
  Phone,
  User,
  Heart,
  Baby
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const HealthPassport: React.FC = () => {
  const { child, mother, vaccines, showToast } = useApp();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(true);
  const [genProgress, setGenProgress] = useState(100);

  const handleGeneratePdf = () => {
    setIsGenerating(true);
    setIsGenerated(false);
    setGenProgress(0);

    const interval = setInterval(() => {
      setGenProgress(prev => {
        if (prev < 100) {
          return prev + 25;
        } else {
          clearInterval(interval);
          setIsGenerating(false);
          setIsGenerated(true);
          showToast('✓ Official ABHA-aligned Digital Health Passport PDF Generated!');
          return 100;
        }
      });
    }, 350);
  };

  const passportNarration = `Digital Health Passport for Aarav Sharma, ABHA ID 91-4829-1038-4421. Blood group B Positive. Contains complete verified immunization history, WHO growth curve records, and emergency PHC contacts.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-teal-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider">
              ABHA & NDHM Compliant Record
            </span>
            <VoiceReaderBtn textToRead={passportNarration} label="Listen to Passport" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Digital Health Passport
          </h1>
          <p className="text-blue-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            A single, portable, cryptographically verifiable health card eliminating lost paper records across district hospitals and PHCs.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            onClick={handleGeneratePdf}
            disabled={isGenerating}
            className="px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? `Generating (${genProgress}%)...` : 'Regenerate Verified PDF'}</span>
          </button>
        </div>
      </div>

      {/* Generation Progress Alert */}
      {isGenerating && (
        <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl animate-pulse space-y-2">
          <div className="flex justify-between text-xs font-bold text-teal-900">
            <span>Compiling ReportLab PDF & Digital Signatures...</span>
            <span>{genProgress}%</span>
          </div>
          <div className="w-full bg-teal-200 rounded-full h-2 overflow-hidden">
            <div className="bg-teal-600 h-full rounded-full transition-all duration-300" style={{ width: `${genProgress}%` }} />
          </div>
        </div>
      )}

      {/* Realistic Document Preview Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-slate-300 shadow-2xl overflow-hidden">
        {/* Document Header Bar */}
        <div className="bg-gradient-to-r from-teal-800 via-slate-900 to-navy-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-2xl">
              🇮🇳
            </div>
            <div>
              <div className="text-[10px] font-extrabold tracking-widest uppercase text-saffron-300">
                Ministry of Health & Family Welfare • Tiny Care
              </div>
              <h2 className="font-display font-black text-xl tracking-tight">
                NATIONAL CHILD HEALTH PASSPORT (ABHA)
              </h2>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <div className="text-[10px] text-teal-200 uppercase font-bold">Ayushman Bharat ID</div>
            <div className="text-xs font-mono font-bold text-white tracking-wider">
              91-4829-1038-4421
            </div>
          </div>
        </div>

        {/* Document Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-800">
          {/* Identity & Basic Bio Grid */}
          <div className="grid sm:grid-cols-3 gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Child Full Name</div>
              <div className="text-base font-extrabold text-slate-900">{child.name}</div>
              <div className="text-xs text-slate-500">Gender: Male • Age: 14 Months</div>
            </div>

            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Date of Birth & Blood Group</div>
              <div className="text-base font-extrabold text-slate-900">14 Aug 2025 • <span className="text-rose-600">B+ Positive</span></div>
              <div className="text-xs text-slate-500">Birth Weight: 3.1 kg (Normal)</div>
            </div>

            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Parents & Guardians</div>
              <div className="text-base font-extrabold text-slate-900">Ananya & Lakshya Sharma</div>
              <div className="text-xs text-slate-500">+91 98765 43210 • Bengaluru Rural</div>
            </div>
          </div>

          {/* Growth Summary Ribbon */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Current Weight</span>
              <div className="text-base font-extrabold text-slate-900">{child.currentWeight} kg</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Current Height</span>
              <div className="text-base font-extrabold text-slate-900">{child.currentHeight} cm</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">WHO Percentile</span>
              <div className="text-base font-extrabold text-emerald-600">62nd (Healthy)</div>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Nutrition Score</span>
              <div className="text-base font-extrabold text-teal-600">86% Score</div>
            </div>
          </div>

          {/* Immunization History Table */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                Verified Immunization Series (NIS Tracked)
              </h3>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                8 / 9 Doses Completed
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 font-bold">
                  <tr>
                    <th className="p-3">Vaccine Name</th>
                    <th className="p-3">Dose / Age</th>
                    <th className="p-3">Administration Date</th>
                    <th className="p-3">Administering Center</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {vaccines.slice(0, 6).map((vac) => (
                    <tr key={vac.id} className="hover:bg-slate-50/60">
                      <td className="p-3 font-bold text-slate-900">{vac.name}</td>
                      <td className="p-3 text-slate-600">{vac.timeline}</td>
                      <td className="p-3 text-slate-600">{vac.dueDate}</td>
                      <td className="p-3 text-slate-600">Kengeri PHC #0412</td>
                      <td className="p-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          ✓ Verified
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Emergency & PHC Stamp Section with QR Code */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Building2 className="w-4 h-4 text-teal-600" />
                <span>Primary Health Center: Kengeri PHC (Bengaluru Rural)</span>
              </div>
              <div className="text-slate-500">
                Assigned Medical Officer: Dr. B. R. Rao • Frontline ASHA: Sunita Devi
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Digitally signed via Bharat Health Registry API</span>
              </div>
            </div>

            {/* QR Code Container */}
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 shrink-0">
              <div className="w-16 h-16 bg-white border border-slate-300 rounded-xl flex items-center justify-center p-1 shadow-sm">
                <QrCode className="w-14 h-14 text-slate-900" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-extrabold uppercase text-slate-900">Scan to Verify</div>
                <div className="text-[10px] text-slate-500">Instant offline PHC audit</div>
                <div className="text-[9px] font-mono text-teal-700 mt-0.5">tinycare.gov.in/v/8a2f</div>
              </div>
            </div>
          </div>
        </div>

        {/* Print & Share Bar */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-medium">
            Generated with ReportLab Engine • Valid across all state health missions
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast('📥 PDF Downloaded: Aarav_Sharma_Health_Passport.pdf')}
              className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={() => showToast('📲 Passport share link sent via WhatsApp!')}
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
