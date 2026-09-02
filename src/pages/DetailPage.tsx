import { ArrowRight, Check, Code2, Mail, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { allIndustries, heroImages, pricingPlans, resourcePosts, serviceDetails } from '../data';
import type { Route } from '../router';
import { Reveal } from '../animations';

type DetailPageProps = { route: Route; navigate: (route: Route) => void; onDemo: () => void };

const pageCopy: Record<string, { kicker: string; title: string; text: string }> = {
  api: { kicker: 'Developer platform', title: 'Build voice into every workflow.', text: 'A flexible API for creating, launching, and improving AI voice agents that connect to the systems your team already uses.' },
  contact: { kicker: 'Start a conversation', title: 'Let’s make every call count.', text: 'Tell us what your team is trying to accomplish. We’ll show you the fastest path from missed calls to meaningful conversations.' },
  about: { kicker: 'About Sentitone', title: 'Technology with a human point of view.', text: 'We believe the best automation does not feel automated. Sentitone helps teams scale their communication without losing empathy.' },
};

export function DetailPage({ route, navigate, onDemo }: DetailPageProps) {
  const service = serviceDetails[route];
  if (service) return <ServicePage service={service} onDemo={onDemo} />;
  if (route === 'pricing') return <PricingPage onDemo={onDemo} />;
  if (route === 'resources') return <ResourcesPage />;
  if (route === 'industries') return <IndustryDirectory navigate={navigate} />;
  return <StandardPage route={route} navigate={navigate} onDemo={onDemo} />;
}

function ServicePage({ service, onDemo }: { service: (typeof serviceDetails)[string]; onDemo: () => void }) {
  return (
    <>
      <section className="page-hero detail-hero container">
        <Reveal className="section-kicker">Sentitone service</Reveal>
        <Reveal as="h1">{service.title}<br /><em>{service.tagline}</em></Reveal>
        <Reveal className="page-hero-text">{service.description}</Reveal>
        <Reveal className="hero-actions"><button className="button button-primary" onClick={onDemo}>Start a conversation <ArrowRight size={17} /></button></Reveal>
      </section>
      <section className="detail-image-section container"><Reveal className="detail-image-wrap"><img src={heroImages.callCenter} alt="Customer service team using AI voice tools" /><div className="detail-image-caption"><Sparkles size={18} /> Every call handled with context and care.</div></Reveal></section>
      <section className="detail-feature-section container"><Reveal className="section-kicker">What you get</Reveal><Reveal as="h2">One service.<br /><em>Every detail covered.</em></Reveal><div className="detail-feature-grid">{service.features.map((feature, index) => <Reveal className="detail-feature-card" key={feature.title} delay={index * 90}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.detail}</p></Reveal>)}</div></section>
      <section className="detail-cta"><div className="container"><h2>Ready to make the next call<br /><em>feel human?</em></h2><button className="button button-light" onClick={onDemo}>Book a demo <ArrowRight size={17} /></button></div></section>
    </>
  );
}

function PricingPage({ onDemo }: { onDemo: () => void }) {
  return <><section className="page-hero detail-hero container"><span className="section-kicker">Simple, transparent pricing</span><h1>Start small.<br /><em>Scale with confidence.</em></h1><p className="page-hero-text">Choose the plan that fits your call volume today. Upgrade as your team grows, with no hidden fees.</p></section><section className="pricing-section container"><div className="pricing-grid">{pricingPlans.map((plan, index) => <Reveal className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={plan.name} delay={index * 100}>{plan.popular && <span className="pricing-popular">Most popular</span>}<span className="pricing-name">{plan.name}</span><h2>{plan.price}<small>{plan.period}</small></h2><p>{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><Check size={16} />{feature}</li>)}</ul><button className={plan.popular ? 'button button-primary' : 'button button-quiet'} onClick={onDemo}>{plan.cta}<ArrowRight size={16} /></button></Reveal>)}</div></section></>;
}

function ResourcesPage() {
  return <><section className="page-hero detail-hero container"><span className="section-kicker">Resources</span><h1>Ideas for the<br /><em>next conversation.</em></h1><p className="page-hero-text">Practical thinking, product news, and real stories from teams building better customer experiences.</p></section><section className="resources-section container"><div className="resource-grid">{resourcePosts.map((post, index) => <Reveal className="resource-card" key={post.title} delay={(index % 3) * 80}><div className="resource-image" style={{ backgroundImage: `url(${[heroImages.team, heroImages.diverse, heroImages.booths][index % 3]})` }} /><div className="resource-body"><div><span>{post.category}</span><small>{post.date}</small></div><h3>{post.title}</h3><p>{post.excerpt}</p><button className="text-link">Read story <ArrowRight size={15} /></button></div></Reveal>)}</div></section></>;
}

function IndustryDirectory({ navigate }: { navigate: (route: Route) => void }) {
  return <><section className="page-hero detail-hero container"><span className="section-kicker">Industries</span><h1>One voice.<br /><em>Many possibilities.</em></h1><p className="page-hero-text">From the first hello to the final follow-up, Sentitone adapts to the way your business works.</p></section><section className="directory-section container"><div className="directory-intro"><img src={heroImages.callCenter2} alt="Customer service team collaborating" /><div><span className="section-kicker">Made for your world</span><h2>Built around<br /><em>your industry.</em></h2><p>Explore the ways AI voice can support your customers, your team, and your next stage of growth.</p></div></div><div className="directory-grid">{allIndustries.map((industry) => <button key={industry} onClick={() => navigate('industries')}><span>{industry}</span><ArrowRight size={15} /></button>)}</div></section></>;
}

function StandardPage({ route, navigate, onDemo }: DetailPageProps) {
  const copy = pageCopy[route] ?? pageCopy.about;
  return <><section className="page-hero detail-hero container"><span className="section-kicker">{copy.kicker}</span><h1>{copy.title}</h1><p className="page-hero-text">{copy.text}</p><div className="hero-actions"><button className="button button-primary" onClick={onDemo}>Talk to our team <ArrowRight size={17} /></button><button className="button button-quiet" onClick={() => navigate('home')}>Explore Sentitone</button></div></section><section className="standard-grid container"><div className="standard-panel"><Code2 size={28} /><h2>Designed to work<br /><em>the way you do.</em></h2><p>Connect your tools, train your agent, and start creating better outcomes from every interaction.</p></div><div className="standard-panel"><ShieldCheck size={28} /><h2>Built for trust<br /><em>at every scale.</em></h2><p>Privacy, security, and transparent experiences are part of every Sentitone conversation.</p></div><div className="standard-panel"><PhoneCall size={28} /><h2>More than a call.<br /><em>A relationship.</em></h2><p>Give customers a voice that listens, responds naturally, and keeps moving things forward.</p></div></section><section className="contact-strip"><div><Mail size={22} /><span>Ready to start a conversation?</span></div><button className="button button-light" onClick={onDemo}>Get in touch <ArrowRight size={17} /></button></section></>;
}
