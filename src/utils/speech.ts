// Web Speech API wrapper for accessibility & voice narration in Bharat languages

export const speakText = (text: string, lang: string = 'en-IN') => {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported by this browser.');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95; // Slightly slower for clear Indian public health readability
  utterance.pitch = 1.0;

  // Map language codes to BCP 47 tags
  const langMap: Record<string, string> = {
    en: 'en-IN',
    hi: 'hi-IN',
    kn: 'kn-IN',
    te: 'te-IN',
    ta: 'ta-IN',
  };

  const targetLang = langMap[lang] || 'en-IN';
  utterance.lang = targetLang;

  // Try to find matching voice
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.includes(targetLang) || v.lang.includes(targetLang.split('-')[0]));
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
