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
  Radio
} from 'lucide-react';
import { Reveal } from './animations';

// Added 'live' to your tabs
type DemoTab = 'tts' | 'translate' | 'live';

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
  const [tab, setTab] = useState<DemoTab>('live'); // Defaulting to the new Live Agent!
  const [selectedSample, setSelectedSample] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [translated, setTranslated] = useState(false);
  const [translating, setTranslating] = useState(false);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  // --- LIVE BACKEND STATE ---
  const [isRecording, setIsRecording] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);

  // Browser TTS setup
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

  // WebSocket Live Connection Setup
  useEffect(() => {
    if (tab === 'live') {
      const ws = new WebSocket('wss://sentitone.techsly.co.in/ws/voice-agent');
      
      ws.onopen = () => setIsConnected(true);
      ws.onclose = () => setIsConnected(false);
      
      ws.onmessage = (event) => {
        // Play the human-level empathetic voice returning from your GPU
        const audioBlob = new Blob([event.data], { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      };
      
      wsRef.current = ws;
      return () => { ws.close(); setIsConnected(false); };
    }
  }, [tab]);

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

  // Live Agent Recording Logic
  const toggleRecording = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          wsRef.current.send(audioBlob);
        }
        audioChunksRef.current = [];
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access denied", err);
      alert("Please allow microphone access to talk to the AI.");
    }
  };

  return (
    <section className="voice-demo-section">
      <div className="container">
        <Reveal className="section-kicker">Try it yourself</Reveal>
        <Reveal as="h2" className="voice-demo-heading">
          Hear the difference.<br /><em>Right now.</em>
        </Reveal>
        <Reveal className="voice-demo-sub">
          Talk directly to our empathetic AI using your microphone, or test our static Odia and Hindi text translation capabilities below.
        </Reveal>

        <Reveal className="voice-demo-card">
          <div className="voice-demo-tabs">
            {/* NEW LIVE AGENT TAB */}
            <button
              className={tab === 'live' ? 'voice-demo-tab active' : 'voice-demo-tab'}
              onClick={() => { stopSpeaking(); setTab('live'); }}
            >
              <Radio size={16} /> Live AI Agent
            </button>
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
            
            {/* STATIC TABS LOGIC */}
            {tab !== 'live' && (
              <div className="voice-demo-samples">
                <span className="voice-demo-samples-label">Sample phrases</span>
                {(tab === 'tts' ? ttsSamples : translateSamples).map((sample, i) => (
                  <button
                    key={i}
                    className={selectedSample === i ? 'voice-sample-chip selected' : 'voice-sample-chip'}
                    onClick={() => { stopSpeaking(); setSelectedSample(i); setTranslated(false); }}
                  >
                    {tab === 'tts' ? ttsSamples[i].label : `${(translateSamples[i] as typeof translateSamples[number]).from} → ${(translateSamples[i] as typeof translateSamples[number]).to}`}
                  </button>
                ))}
              </div>
            )}

            <div className="voice-demo-stage">
              
              {/* THE LIVE AGENT UI */}
              {tab === 'live' && (
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                    <span style={{ 
                      width: '10px', height: '10px', borderRadius: '50%', 
                      backgroundColor: isConnected ? '#10b981' : '#ef4444',
                      boxShadow: isConnected ? '0 0 10px #10b981' : 'none'
                    }}></span>
                    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6b7280' }}>
                      {isConnected ? 'GPU Backend Connected' : 'Connecting to Server...'}
                    </span>
                  </div>

                  <button 
                    onClick={toggleRecording}
                    disabled={!isConnected}
                    style={{
                      width: '140px', height: '140px', borderRadius: '50%', border: 'none', cursor: isConnected ? 'pointer' : 'not-allowed',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
                      backgroundColor: isRecording ? '#4c1d95' : '#1f2937',
                      color: 'white', transition: 'all 0.3s ease',
                      boxShadow: isRecording ? '0 0 40px rgba(139, 92, 246, 0.6)' : '0 0 0 rgba(0,0,0,0)',
                      transform: isRecording ? 'scale(1.05)' : 'scale(1)',
                      border: isRecording ? '2px solid #8b5cf6' : '1px solid #374151'
                    }}
                  >
                    {isRecording ? <Square size={32} /> : <Mic2 size={32} />}
                    <span style={{ fontWeight: 500, fontSize: '14px' }}>
                      {isRecording ? 'Tap to Send' : 'Tap to Speak'}
                    </span>
                  </button>

                  <p style={{ marginTop: '2rem', fontSize: '14px', color: '#9ca3af', textAlign: 'center', maxWidth: '300px' }}>
                    Speak naturally in Odia, Hindi, or English. The AI will instantly detect your language and respond.
                  </p>
                </div>
              )}

              {/* EXISTING TTS TAB */}
              {tab === 'tts' && (
                <div className="tts-panel">
                  <div className="tts-text-wrap">
                    <Type size={18} />
                    <p className="tts-text">{ttsSamples[selectedSample].text}</p>
                  </div>
                  <div className="tts-visualizer">
                    {speaking ? (
                      Array.from({ length: 24 }).map((_, i) => (
                        <span key={i} className="viz-bar viz-active" style={{ animationDelay: `${i * 40}ms` }} />
                      ))
                    ) : (
                      Array.from({ length: 24 }).map((_, i) => (
                        <span key={i} className="viz-bar" />
                      ))
                    )}
                  </div>
                  <div className="tts-controls">
                    <button className={speaking ? 'tts-play speaking' : 'tts-play'} onClick={handleTtsPlay} disabled={!supported}>
                      {speaking ? <Square size={18} /> : <Play size={18} />}
                      {speaking ? 'Stop' : 'Play'}
                    </button>
                    <span className="tts-lang-badge">
                      <Languages size={14} /> {ttsSamples[selectedSample].label.includes('Hindi') ? 'Hindi' : ttsSamples[selectedSample].label.includes('Odia') ? 'Odia' : 'English'}
                    </span>
                  </div>
                </div>
              )}

              {/* EXISTING TRANSLATE TAB */}
              {tab === 'translate' && (
                <div className="translate-panel">
                  <div className="translate-side translate-source">
                    <div className="translate-side-header">
                      <span className="translate-lang-tag">{translateSamples[selectedSample].from}</span>
                      <Volume2 size={16} />
                    </div>
                    <p className="translate-text">{translateSamples[selectedSample].fromText}</p>
                    <button className="translate-mini-play" onClick={() => speak(translateSamples[selectedSample].fromText, voiceLangMap[translateSamples[selectedSample].fromCode] ?? 'en-IN')} disabled={!supported}>
                      <Play size={13} /> Listen
                    </button>
                  </div>
                  <div className="translate-arrow">
                    {translating ? <Loader2 size={22} className="spin" /> : <ArrowLeftRight size={22} />}
                    <button className="translate-go" onClick={handleTranslate} disabled={translating}>Translate</button>
                  </div>
                  <div className="translate-side translate-target">
                    <div className="translate-side-header">
                      <span className="translate-lang-tag">{translateSamples[selectedSample].to}</span>
                      <Sparkles size={14} />
                    </div>
                    {translated ? (
                      <>
                        <p className="translate-text translated">{translateSamples[selectedSample].toText}</p>
                        <button className="translate-mini-play" onClick={handleTranslatePlay} disabled={!supported}>
                          <Play size={13} /> Listen
                        </button>
                        <span className="translate-success"><Check size={12} /> Translated</span>
                      </>
                    ) : (
                      <div className="translate-placeholder">
                        {translating ? <><Loader2 size={16} className="spin" /> Translating…</> : <>Press "Translate" to see the result</>}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

          {!supported && tab !== 'live' && (
            <div className="voice-demo-notice">
              Your browser doesn't support speech playback. Try Chrome, Edge, or Safari.
            </div>
          )}
        </Reveal>

        <Reveal className="voice-demo-features">
          <div className="voice-demo-feature">
            <Mic2 size={20} />
            <div><strong>Natural voices</strong><span>Powered by ultra-low latency Indic AI models</span></div>
          </div>
          <div className="voice-demo-feature">
            <Languages size={20} />
            <div><strong>3 languages live</strong><span>English, Hindi, and Odia native support</span></div>
          </div>
          <div className="voice-demo-feature">
            <Sparkles size={20} />
            <div><strong>Emotionally Aware</strong><span>Matches user sentiment and tone dynamically</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
