import React, { useState } from 'react';
import {
  BellRing,
  Smartphone,
  MessageSquare,
  MessageCircle,
  Volume2,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Filter,
  Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AlertNotification } from '../types';
import { VoiceReaderBtn } from '../components/common/VoiceReaderBtn';

export const AlertCenter: React.FC = () => {
  const { alerts, addAlert, markAlertRead, showToast } = useApp();
  const [filterType, setFilterType] = useState<string>('all');
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customMsg, setCustomMsg] = useState('');
  const [channelWhatsapp, setChannelWhatsapp] = useState(true);
  const [channelSms, setChannelSms] = useState(true);
  const [channelAudio, setChannelAudio] = useState(true);

  const filteredAlerts = alerts.filter(a => {
    if (filterType === 'all') return true;
    return a.type === filterType;
  });

  const handleSendCustomAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle || !customMsg) return;

    addAlert({
      title: customTitle,
      message: customMsg,
      type: 'asha',
      priority: 'medium',
      channels: {
        inApp: true,
        whatsapp: channelWhatsapp,
        sms: channelSms,
        audio: channelAudio
      }
    });

    setIsSendModalOpen(false);
    setCustomTitle('');
    setCustomMsg('');
  };

  const alertNarration = `Multi-Channel Alert Center. Tiny Care broadcasts synchronized health reminders across In-App, WhatsApp, SMS, and vernacular audio phone calls to ensure zero missed immunizations even without active internet.`;

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-navy-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold uppercase tracking-wider">
              Omni-Channel Broadcast Engine
            </span>
            <VoiceReaderBtn textToRead={alertNarration} label="Listen to Alerts" />
          </div>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl">
            Multi-Channel Alert Center
          </h1>
          <p className="text-teal-100/90 text-xs sm:text-sm mt-1 max-w-xl">
            Delivering critical maternal and child health reminders through WhatsApp, 2G SMS, and IVR voice synthesis.
          </p>
        </div>

        <button
          onClick={() => setIsSendModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all shrink-0"
        >
          <Send className="w-4 h-4" />
          <span>Simulate Broadcast Alert</span>
        </button>
      </div>

      {/* Channel Availability Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">In-App Push</div>
            <div className="text-[10px] text-emerald-600 font-bold">● Active Online</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">WhatsApp Gateway</div>
            <div className="text-[10px] text-emerald-600 font-bold">● Baileys / Meta API</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">2G SMS Fallback</div>
            <div className="text-[10px] text-emerald-600 font-bold">● DLT Registered</div>
          </div>
        </div>

        <div className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-extrabold text-slate-900">Audio IVR Call</div>
            <div className="text-[10px] text-emerald-600 font-bold">● Vernacular TTS</div>
          </div>
        </div>
      </div>

      {/* Alerts Feed */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <h3 className="font-bold text-sm text-slate-900">
            Recent Multi-Channel Broadcasts ({filteredAlerts.length})
          </h3>

          <div className="flex gap-1.5 overflow-x-auto">
            {['all', 'vaccine', 'maternal', 'asha', 'nutrition'].map((tType) => (
              <button
                key={tType}
                onClick={() => setFilterType(tType)}
                className={`px-3 py-1 rounded-xl text-xs font-bold capitalize transition-all ${
                  filterType === tType
                    ? 'bg-teal-100 text-teal-900 border border-teal-300'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tType}
              </button>
            ))}
          </div>
        </div>

        {/* List of Alerts */}
        <div className="space-y-3">
          {filteredAlerts.map((alt) => (
            <div
              key={alt.id}
              onClick={() => markAlertRead(alt.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                alt.read
                  ? 'bg-slate-50/70 border-slate-200 text-slate-700'
                  : 'bg-white border-teal-300 shadow-sm text-slate-900 ring-1 ring-teal-400/20'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${alt.priority === 'high' ? 'bg-rose-500' : 'bg-teal-500'}`} />
                  <span className="font-extrabold text-xs text-slate-900">{alt.title}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${
                    alt.type === 'vaccine' ? 'bg-amber-100 text-amber-800' : alt.type === 'maternal' ? 'bg-rose-100 text-rose-800' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {alt.type}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {alt.timestamp}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pl-4">
                {alt.message}
              </p>

              {/* Delivery Receipt Status */}
              <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400 pl-4">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-600">Delivered via:</span>
                  {alt.channels.inApp && (
                    <span className="flex items-center gap-1 text-teal-700 font-bold">
                      <CheckCircle2 className="w-3 h-3 text-teal-600" /> App
                    </span>
                  )}
                  {alt.channels.whatsapp && (
                    <span className="flex items-center gap-1 text-emerald-700 font-bold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> WhatsApp
                    </span>
                  )}
                  {alt.channels.sms && (
                    <span className="flex items-center gap-1 text-blue-700 font-bold">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" /> 2G SMS
                    </span>
                  )}
                  {alt.channels.audio && (
                    <span className="flex items-center gap-1 text-purple-700 font-bold">
                      <CheckCircle2 className="w-3 h-3 text-purple-600" /> Audio
                    </span>
                  )}
                </div>

                <VoiceReaderBtn textToRead={alt.message} label="Play Voice" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Broadcast Modal */}
      {isSendModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Trigger Simulated Multi-Channel Broadcast
              </h3>
              <button onClick={() => setIsSendModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                ✕
              </button>
            </div>

            <form onSubmit={handleSendCustomAlert} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Alert Title</label>
                <input
                  type="text"
                  required
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g., ASHA Home Visit Tomorrow / Polio Sunday"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Alert Message (Vernacular Ready)</label>
                <textarea
                  required
                  rows={3}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Type health guidance or reminder message..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-teal-500 outline-none font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-2">Select Delivery Gateways</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setChannelWhatsapp(!channelWhatsapp)}
                    className={`p-2 rounded-xl border text-center font-bold transition-all ${
                      channelWhatsapp ? 'bg-emerald-100 border-emerald-300 text-emerald-900' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    💬 WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannelSms(!channelSms)}
                    className={`p-2 rounded-xl border text-center font-bold transition-all ${
                      channelSms ? 'bg-blue-100 border-blue-300 text-blue-900' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    📩 SMS
                  </button>
                  <button
                    type="button"
                    onClick={() => setChannelAudio(!channelAudio)}
                    className={`p-2 rounded-xl border text-center font-bold transition-all ${
                      channelAudio ? 'bg-purple-100 border-purple-300 text-purple-900' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    🔊 Audio IVR
                  </button>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Dispatch Alert</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsSendModalOpen(false)}
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
