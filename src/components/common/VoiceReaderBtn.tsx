import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface VoiceReaderBtnProps {
  textToRead: string;
  className?: string;
  label?: string;
}

export const VoiceReaderBtn: React.FC<VoiceReaderBtnProps> = ({ textToRead, className = '', label = 'Listen' }) => {
  const { isSpeaking, speakCurrent, stopCurrentSpeech } = useApp();

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpeaking) {
      stopCurrentSpeech();
    } else {
      speakCurrent(textToRead);
    }
  };

  return (
    <button
      onClick={handleToggle}
      title={isSpeaking ? "Stop Voice Narration" : "Listen in Vernacular Voice (Web Speech API)"}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 border ${
        isSpeaking
          ? 'bg-saffron-500 text-white border-saffron-600 animate-pulse'
          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200'
      } ${className}`}
    >
      {isSpeaking ? (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span>Stop</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
