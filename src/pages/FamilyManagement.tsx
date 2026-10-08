import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Heart,
  Baby,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
  Sparkles,
  Home
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const FamilyManagement: React.FC = () => {
  const { mother, child, showToast } = useApp();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState('Grandparent');

  const familyMembers = [
    {
      name: mother.name,
      role: "Mother (Primary Patient)",
      age: `${mother.age} Years`,
      status: "Postpartum Day 18 / 40",
      vitals: `BP: ${mother.bloodPressure} • Temp: ${mother.temperature}`,
      nextTask: "Pelvic floor exercise & ragi nutrition check",
      badge: "Active Telemetry",
      avatar: "👩‍🍼",
      color: "from-rose-500 to-pink-600"
    },
    {
      name: child.name,
      role: "Infant (Patient)",
      age: "14 Months",
      status: "62nd Percentile (Optimal)",
      vitals: `Weight: ${child.currentWeight} kg • Height: ${child.currentHeight} cm`,
      nextTask: "MMR Booster 1 Due in 12 days",
      badge: "Level 4 Hero",
      avatar: "👶",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Lakshya Sharma",
      role: "Father (Care Partner)",
      age: "28 Years",
      status: "Connected via WhatsApp",
      vitals: "Health alerts synced • SMS backup enabled",
      nextTask: "Pickup iron & calcium supplements from PHC",
      badge: "Partner Mode",
      avatar: "👨‍💼",
      color: "from-teal-500 to-emerald-600"
    },
    {
      name: "Savitri Devi",
      role: "Grandmother (Home Caregiver)",
      age: "58 Years",
      status: "Traditional Diet Lead",
      vitals: "Vernacular Voice Audio Alerts enabled (Hindi/Kannada)",
      nextTask: "Prepare morning methi laddu & moringa broth",
      badge: "Elder Caregiver",
      avatar: "👵",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;
    showToast(`✓ Family member "${newName}" (${newRelation}) added to Tiny Care portal!`);
    setIsAddModalOpen(false);
    setNewName('');
  };

  const familyNarration = `My Family Dashboard. 4 family members are connected under Lakshya and Ananya Sharma's household. Care partner and grandmother accounts receive automated vernacular voice and WhatsApp reminders.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-navy-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold uppercase tracking-wider">
              Connected Household Care Circle
            </span>
            <VoiceReaderBtn textToRead={familyNarration} label="Listen to Family Brief" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            My Family Ecosystem
          </h1>
          <p className="text-teal-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Empowering fathers, mothers, and grandmothers with synchronized multi-channel updates and shared health tasks.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Family Member</span>
        </button>
      </div>

      {/* Family Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {familyMembers.map((mem, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md hover:border-teal-300 transition-all"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl shadow-inner">
                    {mem.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-900">{mem.name}</h3>
                    <div className="text-xs font-semibold text-teal-700">{mem.role} • {mem.age}</div>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {mem.badge}
                </span>
              </div>

              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="text-slate-700">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Status:</span> {mem.status}
                </div>
                <div className="text-slate-600">
                  <span className="font-bold text-slate-500 uppercase text-[10px]">Vitals:</span> {mem.vitals}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">
                <strong className="text-slate-900">Upcoming:</strong> {mem.nextTask}
              </span>
              <button
                onClick={() => showToast(`📲 Synced WhatsApp status sent to ${mem.name}`)}
                className="text-teal-700 font-bold hover:underline shrink-0 ml-2"
              >
                Sync
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Member Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Add Family Member to Care Circle
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Relationship</label>
                <select
                  value={newRelation}
                  onChange={(e) => setNewRelation(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium"
                >
                  <option value="Father">Father / Husband</option>
                  <option value="Grandparent">Grandparent (Dadi / Nani)</option>
                  <option value="Sibling">Sibling / Elder Child</option>
                  <option value="Guardian">Extended Family Guardian</option>
                </select>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  Confirm & Link Notifications
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
