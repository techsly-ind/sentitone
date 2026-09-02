import { ArrowRight, CircleCheck, Plug } from 'lucide-react';
import { integrations, steps } from '../data';
import type { Route } from '../router';
import { FinalCta } from '../sections';

type HowItWorksPageProps = {
  navigate: (route: Route) => void;
  onDemo: () => void;
};

export function HowItWorksPage({ navigate, onDemo }: HowItWorksPageProps) {
  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-dot" /> How it works</p>
        <h1>From idea to<br /><em>first call</em> in days.</h1>
        <p className="page-hero-text">
          Getting started with Sentitone is simple. We start with one workflow, one number, and one
          clear outcome — then grow from there.
        </p>
      </section>

      <section className="steps-section container">
        <div className="steps-list">
          {steps.map((step, index) => (
            <div className="step-row" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-body">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </section>

      <section className="integrations-section container">
        <div className="section-kicker">Connects to what you already use</div>
        <div className="integrations-grid">
          <div className="integrations-copy">
            <h2>Fits into<br /><em>your stack.</em></h2>
            <p>
              Sentitone works alongside the tools your team relies on every day. No rip-and-replace,
              no complicated migrations — just a voice agent that plugs in and gets to work.
            </p>
            <button className="button button-primary" onClick={onDemo}>
              See it in action <ArrowRight size={17} />
            </button>
          </div>
          <ul className="integrations-list">
            {integrations.map((item) => (
              <li key={item}><Plug size={18} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="checklist-section container">
        <div className="section-kicker">What you get from day one</div>
        <div className="checklist-grid">
          {[
            'A voice agent trained on your conversations',
            'Live call handling on your dedicated number',
            'Real-time analytics and call summaries',
            'Handoff to your team when a human is needed',
            'Connections to your calendar and CRM',
            'Ongoing tuning as your needs evolve',
          ].map((item) => (
            <div className="checklist-item" key={item}>
              <CircleCheck size={20} /> <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <FinalCta onDemo={onDemo} />
    </>
  );
}
