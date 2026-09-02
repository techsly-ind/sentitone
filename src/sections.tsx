import { useState } from 'react';
import { ArrowRight, ChevronDown, CirclePlay, Mic2, Sparkles } from 'lucide-react';

type CtaProps = {
  onDemo: () => void;
};

export function FinalCta({ onDemo }: CtaProps) {
  return (
    <section className="final-cta">
      <div className="cta-circle circle-left" />
      <div className="cta-circle circle-right" />
      <div className="container final-inner">
        <span className="eyebrow light">
          <span className="eyebrow-dot" /> Your next chapter starts here
        </span>
        <h2>
          Let's make it<br /><em>sound better.</em>
        </h2>
        <p>
          Tell us where your business is going. We'll help you get there, one conversation at a time.
        </p>
        <button className="button button-light" onClick={onDemo}>
          Book your demo <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

export function FaqSection({ faqs }: { faqs: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq-section container">
      <div className="section-kicker">04 / Good to know</div>
      <div className="faq-grid">
        <h2>
          Questions,<br /><em>answered.</em>
        </h2>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className={open === index ? 'faq-item open' : 'faq-item'} key={question}>
              <button onClick={() => setOpen(open === index ? null : index)}>
                <span>{question}</span>
                <ChevronDown size={18} />
              </button>
              {open === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="sun-glow" />
      <div className="voice-orbit orbit-one" />
      <div className="voice-orbit orbit-two" />
      <div className="voice-card">
        <div className="voice-card-top">
          <span className="live-pill"><span /> Live voice agent</span>
          <span className="card-time">00:42</span>
        </div>
        <div className="voice-art">
          <div className="sound-ring ring-a" />
          <div className="sound-ring ring-b" />
          <div className="sound-ring ring-c" />
          <div className="voice-core">
            <Mic2 size={31} strokeWidth={1.5} />
          </div>
        </div>
        <div className="voice-card-bottom">
          <div>
            <strong>Sentitone</strong>
            <span>Listening in real time</span>
          </div>
          <button aria-label="Pause">
            <span className="pause-bar" />
            <span className="pause-bar" />
          </button>
        </div>
      </div>
      <div className="floating-note note-top">
        <Sparkles size={15} />
        <span>Natural<br /><b>conversations</b></span>
      </div>
      <div className="floating-note note-bottom">
        <span className="mini-wave">∿</span>
        <span>Always on.<br /><b>Always ready.</b></span>
      </div>
    </div>
  );
}

export { ArrowRight, CirclePlay };
