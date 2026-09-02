import { ArrowRight } from 'lucide-react';
import { faqs, metrics, values } from '../data';
import type { Route } from '../router';
import { FaqSection, FinalCta } from '../sections';

type CompanyPageProps = {
  navigate: (route: Route) => void;
  onDemo: () => void;
};

export function CompanyPage({ navigate, onDemo }: CompanyPageProps) {
  return (
    <>
      <section className="page-hero container">
        <p className="eyebrow"><span className="eyebrow-dot" /> Company</p>
        <h1>Built for better<br /><em>conversations.</em></h1>
        <p className="page-hero-text">
          Sentitone was founded on a simple belief: the best technology doesn't replace human
          connection — it amplifies it. We build voice agents that listen, understand, and respond
          with the care your callers deserve.
        </p>
      </section>

      <section className="values-section container">
        <div className="section-kicker">What we believe</div>
        <div className="values-grid">
          {values.map((value) => (
            <div className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="container proof-grid">
          <div className="proof-quote">
            <div className="quote-mark">&ldquo;</div>
            <blockquote>
              Sentitone helped us give time back to our team — without making our customers feel
              like they were talking to a machine.
            </blockquote>
            <div className="quote-person">
              <span className="person-avatar">MP</span>
              <span><b>Maya Patel</b><small>Head of Operations, Northstar</small></span>
            </div>
          </div>
          <div className="proof-metrics">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <strong>{metric.value}<span>{metric.suffix}</span></strong>
                <small>{metric.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <FinalCta onDemo={onDemo} />
    </>
  );
}
