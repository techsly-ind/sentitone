import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  CalendarCheck,
  CirclePlay,
  FileText,
  Headphones,
  HeartPulse,
  Languages,
  Layers,
  MessageCircle,
  MessageSquareWarning,
  Mic2,
  Network,
  PhoneCall,
  PhoneOff,
  Plug,
  ScrollText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Webhook,
  Workflow,
  Zap,
} from 'lucide-react';
import {
  capabilities,
  compliances,
  heroImages,
  industryMarquee,
  languages,
  languageStats,
  metrics,
  problems,
  services,
  testimonials,
} from '../data';
import type { Route } from '../router';
import { FaqSection, FinalCta, HeroVisual } from '../sections';
import { Marquee, Reveal } from '../animations';
import { faqs } from '../data';
import { VoiceDemo } from '../VoiceDemo';

const problemIcons: Record<string, typeof FileText> = {
  FileText,
  PhoneOff,
  MessageSquareWarning,
  TrendingUp,
};

const serviceIcons: Record<string, typeof Mic2> = {
  Mic2,
  CalendarCheck,
  Languages,
  UserCheck,
  BarChart3,
  Plug,
};

const capabilityIcons: Record<string, typeof Headphones> = {
  Headphones,
  Webhook,
  HeartPulse,
  Network,
  MessageCircle,
  Languages,
  Layers,
  Building2,
  Workflow,
  Brain,
  ScrollText,
  BookOpen,
};

type HomePageProps = {
  navigate: (route: Route) => void;
  onDemo: () => void;
};

export function HomePage({ navigate, onDemo }: HomePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> More than a voice</p>
          <h1>Automate Your Calls with<br /><em>Sentitone AI Voice Agents</em></h1>
          <p className="hero-text">
            Explore how teams use AI Call Automation for reminders, outreach, surveys, and support
            — from first plan to ongoing scale. Now live in English, Hindi, and Odia.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onDemo}>
              Let's Try <ArrowRight size={17} />
            </button>
            <button className="button button-quiet" onClick={() => navigate('how-it-works')}>
              <CirclePlay size={18} /> See how it works
            </button>
          </div>
          <div className="hero-trust">
            <div className="avatar-stack"><span>AM</span><span>JR</span><span>SK</span></div>
            <span>Trusted by teams<br />who care about the details</span>
          </div>
        </div>
        <HeroVisual />
      </section>

      {/* Industry Marquee */}
      <section className="marquee-section">
        <Marquee speed={35}>
          {industryMarquee.map((item) => (
            <span className="marquee-item" key={item}>
              <PhoneCall size={16} /> {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Problem Section */}
      <section className="problem-section container">
        <Reveal className="section-kicker">The problem</Reveal>
        <Reveal as="h2" className="problem-heading">
          Your team shouldn't<br /><em>live on the phone.</em>
        </Reveal>
        <Reveal className="problem-sub">
          Manual calls. Missed leads. Burnt-out reps. Sentitone changes the equation.
        </Reveal>
        <div className="problem-grid">
          {problems.map((problem, index) => {
            const Icon = problemIcons[problem.icon] ?? FileText;
            return (
              <Reveal className="problem-card" key={problem.title} delay={index * 100}>
                <div className="problem-icon"><Icon size={22} /></div>
                <span className="problem-stat">{problem.stat}</span>
                <h3>{problem.title}</h3>
                <p>{problem.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <Reveal className="section-kicker">Everything You Need</Reveal>
          <Reveal as="h2" className="services-heading">
            Transform Business Communication<br /><em>with Sentitone AI Voice Agents</em>
          </Reveal>
          <Reveal className="services-sub">
            One AI agent. Every call handled — inbound, outbound, 24/7.
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Mic2;
              return (
                <Reveal className="service-card" key={service.title} delay={index * 80}>
                  <span className="service-tag">{service.tag}</span>
                  <div className="service-icon"><Icon size={26} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showcase Images */}
      <section className="showcase-section">
        <div className="container">
          <Reveal className="section-kicker">See it in action</Reveal>
          <Reveal as="h2" className="services-heading">
            Real teams.<br /><em>Real conversations.</em>
          </Reveal>
          <Reveal className="services-sub">
            From call centers to clinics, Sentitone powers the moments that matter.
          </Reveal>
          <div className="showcase-grid">
            <Reveal className="showcase-tile" delay={0}>
              <img src={heroImages.callCenter} alt="Customer service team with headsets" />
              <span className="showcase-tile-label">24/7 call coverage</span>
            </Reveal>
            <Reveal className="showcase-tile" delay={80}>
              <img src={heroImages.womanHeadset} alt="Professional on a phone call" />
              <span className="showcase-tile-label">Natural conversations</span>
            </Reveal>
            <Reveal className="showcase-tile" delay={160}>
              <img src={heroImages.meeting} alt="Team collaboration in office" />
              <span className="showcase-tile-label">Seamless handoffs</span>
            </Reveal>
            <Reveal className="showcase-tile" delay={240}>
              <img src={heroImages.agents} alt="Call center agents at work" />
              <span className="showcase-tile-label">Scale without limits</span>
            </Reveal>
            <Reveal className="showcase-tile" delay={320}>
              <img src={heroImages.analytics} alt="Business analytics on tablet" />
              <span className="showcase-tile-label">Actionable insights</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Voice Demo */}
      <VoiceDemo />

      {/* Platform Capabilities */}
      <section className="capabilities-section container">
        <Reveal className="section-kicker">Platform capabilities</Reveal>
        <Reveal as="h2" className="capabilities-heading">
          Built for Real<br /><em>Enterprise Conversations</em>
        </Reveal>
        <Reveal className="capabilities-sub">
          Beyond scripted call flows — Sentitone understands context, integrates with your
          systems, and knows when to bring in a human.
        </Reveal>
        <div className="capabilities-grid">
          {capabilities.map((cap, index) => {
            const Icon = capabilityIcons[cap.icon] ?? Headphones;
            return (
              <Reveal className="capability-card" key={cap.title} delay={(index % 4) * 80}>
                <div className="capability-icon"><Icon size={22} /></div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="compliance-section">
        <div className="container compliance-inner">
          <Reveal className="section-kicker">Compliance & security</Reveal>
          <Reveal as="h2" className="compliance-heading">
            Enterprise-grade security<br /><em>for AI voice agents</em>
          </Reveal>
          <Reveal className="compliance-sub">
            Protect every AI-powered conversation with enterprise-grade security, privacy, and
            compliance. Sentitone meets global standards so regulated teams can deploy with
            confidence.
          </Reveal>
          <div className="compliance-grid">
            {compliances.map((comp, index) => (
              <Reveal className="compliance-card" key={comp.label} delay={index * 80}>
                <ShieldCheck size={28} />
                <strong>{comp.label}</strong>
                <p>{comp.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Language Coverage */}
      <section className="language-section container">
        <Reveal className="section-kicker">Global Voice Coverage</Reveal>
        <Reveal as="h2" className="language-heading">
          Connect in Every<br /><em>Language & Region</em>
        </Reveal>
        <Reveal className="language-sub">
          Bridge linguistic divides with AI Voice Agents that speak 100+ languages fluently
          so every customer feels understood.
        </Reveal>

        <div className="language-stats">
          {languageStats.map((stat, index) => (
            <Reveal className="lang-stat" key={stat.label} delay={index * 80}>
              <strong>{stat.value}</strong>
              <small>{stat.label}</small>
            </Reveal>
          ))}
        </div>

        <div className="language-grid">
          {languages.map((lang, index) => (
            <Reveal
              className={`lang-card lang-${lang.status}`}
              key={lang.name}
              delay={index * 50}
            >
              <div className="lang-info">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-native">{lang.native}</span>
              </div>
              {lang.status === 'live' && <span className="lang-badge live">Live</span>}
              {lang.status === 'launching' && (
                <span className="lang-badge launching">
                  <Sparkles size={12} /> Launching
                </span>
              )}
              {lang.status === 'soon' && <span className="lang-badge soon">Soon</span>}
            </Reveal>
          ))}
        </div>
        <Reveal className="lang-note">
          Showing {languages.length} of 100+ languages — more Indian languages coming soon
        </Reveal>
      </section>

      {/* Testimonials Marquee */}
      <section className="testimonials-section">
        <div className="container">
          <Reveal className="section-kicker">Trusted by leaders</Reveal>
          <Reveal as="h2" className="testimonials-heading">
            Trusted by leaders<br /><em>from various industries</em>
          </Reveal>
        </div>
        <Marquee speed={45} className="testimonials-marquee">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-person">
                <span className="person-avatar">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <span>
                  <b>{testimonial.name}</b>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee speed={45} reverse className="testimonials-marquee">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.name}>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-person">
                <span className="person-avatar">
                  {testimonial.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <span>
                  <b>{testimonial.name}</b>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Proof Metrics */}
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
