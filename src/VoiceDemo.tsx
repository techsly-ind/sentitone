import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowLeftRight,
  Check,
  Languages,
  Loader2,
  Mic2,
  Pause,
  Play,
  Sparkles,
  Square,
  Type,
  Volume2,
} from 'lucide-react';
import { Reveal } from './animations';

type DemoTab = 'tts' | 'translate';

const ttsSamples = [
  { label: 'English greeting', text: "Hello! Thanks for calling Sentitone. How can I help you today?", lang: 'en-IN' },
  { label: 'Hindi greeting', text: 'नमस्ते! सेंटीटोन में आपका स्वागत है। मैं आपकी कैसे मदद कर सकता हूँ?', lang: 'hi-IN' },
  { label: 'Odia greeting', text: 'ନମସ୍କାର! ସେଣ୍ଟିଟୋନ୍‌କୁ ଆପଣଙ୍କ ସ୍ୱାଗତ। ମୁଁ ଆପଣଙ୍କୁ କିପରି ସାହାଯ୍ୟ କରିପାରିବି?', lang: 'or-IN' },
  { label: 'Appointment reminder', text: "This is a friendly reminder about your appointment tomorrow at 10 AM. Please call us back if you need to reschedule.", lang: 'en-IN' },
];

const translateSamples = [
  { from: 'English', fromCode: 'en', fromText: "I'd like to book an appointment for tomorrow.", to: 'Hindi', toCode: 'hi', toText: 'मैं कल के लिए एक अपॉइंटमेंट बुक करना चाहता हूँ।' },
  { from: 'English', fromCode: 'en', fromText: "Thank you for your patience, your call is important to us.", to: 'Odia', toCode: 'or', toText: 'ଆପଣଙ୍କ ଧୈର୍ଯ୍ୟ ପାଇଁ ଧନ୍ୟବାଦ, ଆପଣଙ୍କ କଲ୍ ଆମ୍ର ପାଇଁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।' },
  { from: 'Hindi', fromCode: 'hi', fromText: 'नमस्ते, मुझे आपके सेवाओं के बारे में जानकारी चाहिए।', to: 'English', toCode: 'en', toText: "Hello, I need information about your services." },
  { from: 'English', fromCode: 'en', fromText: "Your order has been confirmed and will arrive in two days.", to: 'Hindi', toCode: 'hi', toText: 'आपका ऑर्डर पुष्टि हो गई है और दो दिनों में पहुंच जाएगा।' },
  { from: 'Odia', fromCode: 'or', fromText: 'ସେଣ୍ଟିଟୋନ୍ କଣ ପ୍ରଦାନ କରେ?', to: 'English', toCode: 'en', toText: "What does Sentitone provide?" },
];

const voiceLangMap: Record<string, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  or: 'or-IN',
};

export function VoiceDemo() {
  const [tab, setTab] = useState<DemoTab>('tts');
  const [selectedSample, setSelectedSample] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [translated, setTranslated] = useState(false);
  const [translating, setTranslating] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setSupported(false);
      return;
    }
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  };

  const speak = (text: string, lang: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.95;
    utter.pitch = 1;

    const match = voices.find((v) => v.lang === lang) ?? voices.find((v) => v.lang.startsWith(lang.split('-')[0]));
    if (match) utter.voice = match;

    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    utterRef.current = utter;

    setSpeaking(true);
    window.speechSynthesis.speak(utter);
  };

  const handleTtsPlay = () => {
    if (speaking) {
      stopSpeaking();
      return;
    }
    const sample = ttsSamples[selectedSample];
    speak(sample.text, sample.lang);
  };

  const handleTranslatePlay = () => {
    if (speaking) {
      stopSpeaking();
      return;
    }
    const sample = translateSamples[selectedSample];
    const targetLang = voiceLangMap[sample.toCode] ?? 'en-IN';
    speak(sample.toText, targetLang);
  };

  const handleTranslate = () => {
    setTranslating(true);
    setTranslated(false);
    window.setTimeout(() => {
      setTranslating(false);
      setTranslated(true);
    }, 1100);
  };

  return (
    <section className="voice-demo-section">
      <div className="container">
        <Reveal className="section-kicker">Try it yourself</Reveal>
        <Reveal as="h2" className="voice-demo-heading">
          Hear the difference.<br /><em>Right now.</em>
        </Reveal>
        <Reveal className="voice-demo-sub">
          Pick a sample and press play. Your browser speaks it out loud — no signup, no install.
          Then switch to translation to see how conversations move across languages.
        </Reveal>

        <Reveal className="voice-demo-card">
          <div className="voice-demo-tabs">
            <button
              className={tab === 'tts' ? 'voice-demo-tab active' : 'voice-demo-tab'}
              onClick={() => { stopSpeaking(); setTab('tts'); setSelectedSample(0); setTranslated(false); }}
            >
              <Type size={16} /> Text to Speech
            </button>
            <button
              className={tab === 'translate' ? 'voice-demo-tab active' : 'voice-demo-tab'}
              onClick={() => { stopSpeaking(); setTab('translate'); setSelectedSample(0); setTranslated(false); }}
            >
              <ArrowLeftRight size={16} /> Audio Translation
            </button>
          </div>

          <div className="voice-demo-body">
            <div className="voice-demo-samples">
              <span className="voice-demo-samples-label">Sample phrases</span>
              {(tab === 'tts' ? ttsSamples : translateSamples).map((sample, i) => (
                <button
                  key={i}
                  className={selectedSample === i ? 'voice-sample-chip selected' : 'voice-sample-chip'}
                  onClick={() => { stopSpeaking(); setSelectedSample(i); setTranslated(false); }}
                >
                  {tab === 'tts' ? ttsSamples[selectedSample].label : `${(translateSamples[selectedSample] as typeof translateSamples[number]).from} → ${(translateSamples[selectedSample] as typeof translateSamples[number]).to}`}
                </button>
              ))}
            </div>

            <div className="voice-demo-stage">
              {tab === 'tts' && (
                <div className="tts-panel">
                  <div className="tts-text-wrap">
                    <Type size={18} />
                    <p className="tts-text">{ttsSamples[selectedSample].text}</p>
                  </div>
                  <div className="tts-visualizer">
                    {speaking ? (
                      Array.from({ length: 24 }).map((_, i) => (
                        <span
                          key={i}
                          className="viz-bar viz-active"
                          style={{ animationDelay: `${i * 40}ms` }}
                        />
                      ))
                    ) : (
                      Array.from({ length: 24 }).map((_, i) => (
                        <span key={i} className="viz-bar" />
                      ))
                    )}
                  </div>
                  <div className="tts-controls">
                    <button
                      className={speaking ? 'tts-play speaking' : 'tts-play'}
                      onClick={handleTtsPlay}
                      disabled={!supported}
                    >
                      {speaking ? <Square size={18} /> : <Play size={18} />}
                      {speaking ? 'Stop' : 'Play'}
                    </button>
                    <span className="tts-lang-badge">
                      <Languages size={14} /> {ttsSamples[selectedSample].label.includes('Hindi') ? 'Hindi' : ttsSamples[selectedSample].label.includes('Odia') ? 'Odia' : 'English'}
                    </span>
                  </div>
                </div>
              )}

              {tab === 'translate' && (
                <div className="translate-panel">
                  <div className="translate-side translate-source">
                    <div className="translate-side-header">
                      <span className="translate-lang-tag">{translateSamples[selectedSample].from}</span>
                      <Volume2 size={16} />
                    </div>
                    <p className="translate-text">{translateSamples[selectedSample].fromText}</p>
                    <button
                      className="translate-mini-play"
                      onClick={() => speak(translateSamples[selectedSample].fromText, voiceLangMap[translateSamples[selectedSample].fromCode] ?? 'en-IN')}
                      disabled={!supported}
                    >
                      <Play size={13} /> Listen
                    </button>
                  </div>

                  <div className="translate-arrow">
                    {translating ? <Loader2 size={22} className="spin" /> : <ArrowLeftRight size={22} />}
                    <button
                      className="translate-go"
                      onClick={handleTranslate}
                      disabled={translating}
                    >
                      Translate
                    </button>
                  </div>

                  <div className="translate-side translate-target">
                    <div className="translate-side-header">
                      <span className="translate-lang-tag">{translateSamples[selectedSample].to}</span>
                      <Sparkles size={14} />
                    </div>
                    {translated ? (
                      <>
                        <p className="translate-text translated">{translateSamples[selectedSample].toText}</p>
                        <button
                          className="translate-mini-play"
                          onClick={handleTranslatePlay}
                          disabled={!supported}
                        >
                          <Play size={13} /> Listen
                        </button>
                        <span className="translate-success"><Check size={12} /> Translated</span>
                      </>
                    ) : (
                      <div className="translate-placeholder">
                        {translating
                          ? <><Loader2 size={16} className="spin" /> Translating…</>
                          : <>Press "Translate" to see the result</>}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {!supported && (
            <div className="voice-demo-notice">
              Your browser doesn't support speech playback. Try Chrome, Edge, or Safari.
            </div>
          )}
        </Reveal>

        <Reveal className="voice-demo-features">
          <div className="voice-demo-feature">
            <Mic2 size={20} />
            <div><strong>Natural voices</strong><span>Powered by your browser's built-in speech engine</span></div>
          </div>
          <div className="voice-demo-feature">
            <Languages size={20} />
            <div><strong>3 languages live</strong><span>English, Hindi, and Odia — more coming soon</span></div>
          </div>
          <div className="voice-demo-feature">
            <Sparkles size={20} />
            <div><strong>No setup needed</strong><span>Works instantly — no API keys, no downloads</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
