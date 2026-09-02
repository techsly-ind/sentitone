import { useState } from 'react';
import { ArrowRight, Check, PhoneCall } from 'lucide-react';
import { industries } from '../data';
import type { Route } from '../router';
import { FinalCta } from '../sections';

type IndustriesPageProps = {
  navigate: (route: Route) => void;
  onDemo: () => void;
};

export function IndustriesPage({ navigate, onDemo }: IndustriesPageProps) {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-dot" /> Industries</p>
        <h1>One voice.<br /><em>Many possibilities.</em></h1>
        <p className="page-hero-text">
          From the first hello to the final follow-up, Sentitone adapts to the way your business
          works. Explore how teams across industries put AI voice to work.
        </p>
      </section>

      <section className="industry-section container">
        <div className="industry-tabs">
          {industries.map((industry, index) => (
            <button
              className={active === index ? 'industry-tab active' : 'industry-tab'}
              key={industry.label}
              onClick={() => setActive(index)}
            >
              <span>{`0${index + 1}`}</span>{industry.label}
            </button>
          ))}
        </div>
        <div className={`industry-panel panel-${current.accent}`}>
          <div className="panel-shape shape-one" />
          <div className="panel-shape shape-two" />
          <div className="panel-content">
            <span className="panel-label">{current.label}</span>
            <h3>{current.title}</h3>
            <p>{current.detail}</p>
            <ul className="industry-use-cases">
              {current.points.map((point) => (
                <li key={point}><Check size={16} /> {point}</li>
              ))}
            </ul>
            <button className="panel-link" onClick={onDemo}>
              Explore the solution <ArrowRight size={16} />
            </button>
          </div>
          <div className="panel-illustration">
            <div className="illustration-phone">
              <PhoneCall size={27} />
              <div className="phone-lines"><span /><span /><span /></div>
            </div>
            <div className="illustration-orb" />
          </div>
        </div>
      </section>

      <section className="industry-grid-section container">
        <div className="section-kicker">All industries</div>
        <div className="industry-preview-grid">
          {industries.map((industry, index) => (
            <button
              key={industry.label}
              className={`industry-card card-${industry.accent}`}
              onClick={() => {
                setActive(index);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="card-glow" />
              <span className="panel-label">{industry.label}</span>
              <h3>{industry.title}</h3>
              <p>{industry.detail}</p>
              <span className="panel-link">View details <ArrowRight size={15} /></span>
            </button>
          ))}
        </div>
      </section>

      <FinalCta onDemo={onDemo} />
    </>
  );
}
