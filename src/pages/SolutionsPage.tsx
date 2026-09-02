import {
  ArrowRight,
  BarChart3,
  Check,
  Headphones,
  PhoneCall,
  Zap,
} from 'lucide-react';
import { solutions } from '../data';
import type { Route } from '../router';
import { FinalCta } from '../sections';

const iconMap: Record<string, typeof Headphones> = {
  Headphones,
  Zap,
  BarChart3,
};

type SolutionsPageProps = {
  navigate: (route: Route) => void;
  onDemo: () => void;
};

export function SolutionsPage({ navigate, onDemo }: SolutionsPageProps) {
  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-dot" /> Solutions</p>
        <h1>Everything your calls<br /><em>have been waiting for.</em></h1>
        <p className="page-hero-text">
          Sentitone turns every phone call into a moment of clarity. From the first hello to the
          final follow-up, your AI voice agent handles the conversation the way you would — only
          faster, and at any hour.
        </p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onDemo}>
            Book a demo <ArrowRight size={17} />
          </button>
          <button className="button button-quiet" onClick={() => navigate('how-it-works')}>
            <PhoneCall size={18} /> See how it works
          </button>
        </div>
      </section>

      <section className="solutions-list container">
        {solutions.map((solution, index) => {
          const Icon = iconMap[solution.icon] ?? Headphones;
          return (
            <div className="solution-row" key={solution.title}>
              <div className="solution-number">{`0${index + 1}`}</div>
              <div className="solution-icon"><Icon size={24} /></div>
              <div className="solution-body">
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
                <ul className="solution-points">
                  {solution.points.map((point) => (
                    <li key={point}><Check size={16} /> {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      <FinalCta onDemo={onDemo} />
    </>
  );
}
