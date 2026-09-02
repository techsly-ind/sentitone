import { useEffect, useRef, useState, useCallback, type CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { Layout } from './Layout';
import { useRouter } from './router';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CompanyPage } from './pages/CompanyPage';
import { DetailPage } from './pages/DetailPage';

type LaunchMode = 'signup' | 'login' | 'trial';

const trialSteps = [
  { key: 'email', label: 'Account', icon: Mail },
  { key: 'company', label: 'Company', icon: Users },
  { key: 'usecase', label: 'Use case', icon: Zap },
];

const companySizes = ['1–10', '11–50', '51–200', '201–500', '500+'];
const useCases = [
  { label: 'Inbound support', icon: Headphones },
  { label: 'Outbound sales', icon: TrendingUp },
  { label: 'Appointment booking', icon: Clock },
  { label: 'Surveys & feedback', icon: Star },
  { label: 'Lead qualification', icon: UserCheck },
  { label: 'Notifications', icon: PhoneCall },
];

const trialFeatures = [
  { icon: Zap, title: 'Deploy in minutes', detail: 'No code. No telephony setup.' },
  { icon: ShieldCheck, title: 'Enterprise security', detail: 'HIPAA, GDPR, SOC 2 ready.' },
  { icon: Sparkles, title: '14-day free trial', detail: 'Full access. No card needed.' },
];

const preloaderBars = [18, 34, 52, 30, 44, 66, 38, 25, 48, 32, 58, 22];

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1350;
    let exitTimer: number | undefined;

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onComplete();
        setExiting(true);
        exitTimer = window.setTimeout(() => setVisible(false), 720);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (exitTimer) window.clearTimeout(exitTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`preloader ${exiting ? 'preloader--exiting' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="preloader__topline">
        <span className="preloader__brand">Sentitone</span>
        <span className="preloader__edition">Odia voice infrastructure / 2026</span>
      </div>
      <div className="preloader__center">
        <div className="preloader__mark" aria-hidden="true">
          {preloaderBars.map((height, index) => (
            <span
              key={index}
              style={{ '--bar-height': `${height}%`, '--bar-delay': `${index * 55}ms` } as CSSProperties}
            />
          ))}
        </div>
        <p className="preloader__odia">ଓଡ଼ିଆ</p>
        <p className="preloader__label">Making language audible</p>
      </div>
      <div className="preloader__bottom">
        <div className="preloader__bottomline">
          <span>Loading the signal</span>
          <span className="preloader__percentage">{String(progress).padStart(3, '0')}%</span>
        </div>
        <div className="preloader__progress" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

function TrialModal({ onClose, mode, setMode }: { onClose: () => void; mode: LaunchMode; setMode: (m: LaunchMode) => void }) {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isLogin = mode === 'login';

  const handleNext = () => {
    if (step < trialSteps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const canProceed = isLogin
    ? email.trim().length > 0
    : step === 0
      ? email.trim().length > 0
      : step === 1
        ? companySize.length > 0
        : useCase.length > 0;

  return (
    <div className="launch-modal-content">
      <button className="launch-close" onClick={onClose} aria-label="Close"><X size={19} /></button>

      {submitted ? (
        <div className="trial-success">
          <div className="trial-success-icon"><CheckCircle2 size={48} strokeWidth={1.5} /></div>
          <h2>You're all set!</h2>
          <p>We've sent a confirmation to <strong>{email}</strong>. Check your inbox to activate your account.</p>
          <button className="launch-trial" onClick={onClose}>Get started <ArrowRight size={16} /></button>
        </div>
      ) : (
        <div className="launch-copy">
          <div className="launch-mode-tabs">
            <button className={mode === 'trial' ? 'active' : ''} onClick={() => { setMode('trial'); setStep(0); }}>Start trial</button>
            <button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setStep(0); }}>Log in</button>
          </div>

          <span className="launch-kicker">Your calls. Your team.</span>
          <h2>{isLogin ? 'Welcome back.' : <>Never miss<br /><em>another call.</em></>}</h2>
          <p>{isLogin
            ? 'Log in to manage your AI voice agents and monitor live calls.'
            : 'Build, launch, and improve AI voice agents that work around the clock.'}</p>

          {!isLogin && step === 0 && (
            <div className="trial-features">
              {trialFeatures.map((f) => (
                <div className="trial-feature" key={f.title}>
                  <f.icon size={18} />
                  <div><strong>{f.title}</strong><span>{f.detail}</span></div>
                </div>
              ))}
            </div>
          )}

          {!isLogin && (
            <div className="trial-progress">
              {trialSteps.map((s, i) => (
                <div key={s.key} className={`trial-step-dot ${i <= step ? 'done' : ''} ${i === step ? 'current' : ''}`}>
                  <span className="trial-dot-num">{i < step ? <Check size={12} /> : i + 1}</span>
                  <span className="trial-dot-label">{s.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="trial-form">
            {(isLogin || step === 0) && (
              <div className="trial-field">
                <label>Work email</label>
                <div className="trial-input-wrap">
                  <Mail size={16} />
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && canProceed) handleNext(); }}
                  />
                </div>
              </div>
            )}

            {!isLogin && step === 1 && (
              <div className="trial-field">
                <label>Company size</label>
                <div className="trial-options">
                  {companySizes.map((size) => (
                    <button
                      key={size}
                      className={`trial-option ${companySize === size ? 'selected' : ''}`}
                      onClick={() => setCompanySize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLogin && step === 2 && (
              <div className="trial-field">
                <label>Primary use case</label>
                <div className="trial-options trial-use-cases">
                  {useCases.map((uc) => (
                    <button
                      key={uc.label}
                      className={`trial-option trial-use-case ${useCase === uc.label ? 'selected' : ''}`}
                      onClick={() => setUseCase(uc.label)}
                    >
                      <uc.icon size={18} />
                      <span>{uc.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="launch-actions">
            {!isLogin && step > 0 && (
              <button className="launch-back" onClick={handleBack}><ArrowLeft size={15} /> Back</button>
            )}
            <button className="launch-trial" disabled={!canProceed} onClick={handleNext}>
              {isLogin ? 'Log in' : step === trialSteps.length - 1 ? 'Create account' : 'Continue'}
              <ArrowRight size={15} />
            </button>
          </div>

          {!isLogin && (
            <button className="launch-later" onClick={onClose}>Maybe later</button>
          )}
        </div>
      )}

      <div className="launch-grid-art">
        <span /><span /><span /><span /><span /><span />
        <div className="launch-art-content">
          <PhoneCall size={40} strokeWidth={1.2} />
          <div className="launch-art-stats">
            <div><strong>100+</strong><span>Languages</span></div>
            <div><strong>24/7</strong><span>Available</span></div>
            <div><strong>99.9%</strong><span>Uptime</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { route, navigate } = useRouter();
  const [launchOpen, setLaunchOpen] = useState(false);
  const [launchMode, setLaunchMode] = useState<LaunchMode>('trial');
  const [contentVisible, setContentVisible] = useState(false);

  const openLaunch = useCallback(() => { setLaunchMode('trial'); setLaunchOpen(true); }, []);

  useEffect(() => {
    if (!contentVisible) return;
    const timer = window.setTimeout(() => setLaunchOpen(true), 500);
    return () => window.clearTimeout(timer);
  }, [contentVisible]);

  return (
    <>
      <Preloader onComplete={() => setContentVisible(true)} />
      <div className={contentVisible ? 'app-content app-content--visible' : 'app-content'}>
      <Layout route={route} navigate={navigate} onDemo={openLaunch}>
        {route === 'home' && <HomePage navigate={navigate} onDemo={openLaunch} />}
        {route === 'solutions' && <SolutionsPage navigate={navigate} onDemo={openLaunch} />}
        {route === 'industries' && <IndustriesPage navigate={navigate} onDemo={openLaunch} />}
        {route === 'how-it-works' && <HowItWorksPage navigate={navigate} onDemo={openLaunch} />}
        {route === 'company' && <CompanyPage navigate={navigate} onDemo={openLaunch} />}
        {route !== 'home' && route !== 'solutions' && route !== 'industries' && route !== 'how-it-works' && route !== 'company' && (
          <DetailPage route={route} navigate={navigate} onDemo={openLaunch} />
        )}
      </Layout>
      </div>
      {launchOpen && (
        <div
          className="launch-backdrop"
          role="presentation"
          onClick={(event) => { if (event.target === event.currentTarget) setLaunchOpen(false); }}
        >
          <div className="launch-modal">
            <TrialModal
              onClose={() => setLaunchOpen(false)}
              mode={launchMode}
              setMode={setLaunchMode}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
