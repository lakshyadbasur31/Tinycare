import React from 'react';
import {
  Scale,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Sparkles,
  Award,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';
import { useApp } from '../context/AppContext';

export const CompetitiveComparison: React.FC = () => {
  const { setCurrentTab } = useApp();

  const comparisonRows = [
    {
      dimension: "Target Audience",
      genericApps: "Urban Tier-1 English parents only",
      govtPortals: "State health departments / Desktop data entry",
      tinyCare: "Universal Bharat: Rural, Semi-Urban & Urban Families",
      isHighlight: true
    },
    {
      dimension: "The '40-Day Void' Maternal Care",
      genericApps: "❌ Ignored or pushed into costly e-commerce ads",
      govtPortals: "⚠️ Fragmented paper cards with no follow-up",
      tinyCare: "✅ Dedicated 40-Day Recovery Timeline + Vitals + EPDS",
      isHighlight: true
    },
    {
      dimension: "Nutrition Strategy",
      genericApps: "Imported quinoa, blueberries & expensive diets (₹180+/day)",
      govtPortals: "Static PDF dietary guidelines",
      tinyCare: "✅ Indigenous Millets (Ragi/Jowar) & Moringa (<₹35/thali)",
      isHighlight: true
    },
    {
      dimension: "Multi-Channel Accessibility",
      genericApps: "High-end 4G smartphone app only",
      govtPortals: "Desktop web portal with server downtime",
      tinyCare: "✅ WhatsApp + 2G SMS + Vernacular Audio + Offline PWA",
      isHighlight: true
    },
    {
      dimension: "Child Engagement & Milestones",
      genericApps: "Passive loggers with excessive screen time",
      govtPortals: "None",
      tinyCare: "✅ Little Hero Journey + Badges + Screen-Free Play",
      isHighlight: false
    },
    {
      dimension: "Frontline Health Worker (ASHA) Sync",
      genericApps: "❌ Zero connection to grassroots ecosystem",
      govtPortals: "⚠️ Clunky monthly manual data collation",
      tinyCare: "✅ Real-Time ASHA Triage Portal & Home Visit Dispatch",
      isHighlight: true
    },
    {
      dimension: "Health Passport & Portability",
      genericApps: "Proprietary locked-in PDFs",
      govtPortals: "Scattered registry numbers",
      tinyCare: "✅ ABHA Compliant, QR-Verifiable Digital Passport",
      isHighlight: false
    }
  ];

  const compNarration = `Competitive Differentiation. Tiny Care bridges the gap between generic urban parenting apps and bureaucratic government portals by providing an integrated maternal and child health ecosystem designed for Bharat with multi-channel WhatsApp, 2G SMS, local millets, and frontline ASHA worker synchronization.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-saffron-900 via-slate-900 to-navy-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-saffron-500 text-white text-xs font-bold uppercase tracking-wider">
              Strategic Ideathon Positioning
            </span>
            <VoiceReaderBtn textToRead={compNarration} label="Listen to Comparison" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Competitive Differentiation Matrix
          </h1>
          <p className="text-saffron-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Why Tiny Care out-innovates isolated commercial apps and legacy government registries through grassroots ecosystem integration.
          </p>
        </div>

        <button
          onClick={() => setCurrentTab('overview')}
          className="px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-saffron-50 font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all shrink-0"
        >
          <span>Explore Live Solution</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="p-4 sm:p-5 font-extrabold text-sm w-1/4">Key Health Dimension</th>
                <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/4">Generic Parenting Apps</th>
                <th className="p-4 sm:p-5 font-bold text-slate-500 w-1/4">Government Portals</th>
                <th className="p-4 sm:p-5 font-extrabold text-teal-800 bg-teal-50/80 w-1/4 border-l-2 border-teal-500">
                  🌿 Tiny Care (Bharat Guardian)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.isHighlight ? 'bg-teal-50/20 hover:bg-teal-50/40' : 'hover:bg-slate-50/60'
                  }`}
                >
                  <td className="p-4 sm:p-5 font-extrabold text-slate-900 flex items-center gap-2">
                    {row.isHighlight && <Sparkles className="w-3.5 h-3.5 text-saffron-500 shrink-0" />}
                    <span>{row.dimension}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 leading-relaxed">
                    {row.genericApps}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 leading-relaxed">
                    {row.govtPortals}
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-teal-950 bg-teal-50/60 border-l-2 border-teal-500 leading-relaxed">
                    {row.tinyCare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
