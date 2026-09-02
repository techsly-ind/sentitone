import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { navItems } from './data';
import type { NavItem } from './data';
import type { Route } from './router';

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Sentitone">
      <span className="brand-icon"><i /><i /><i /><i /></span>
      <span className="brand-name">Sentitone</span>
    </div>
  );
}

type LayoutProps = { children: ReactNode; route: Route; navigate: (route: Route) => void; onDemo: () => void };

function NavMenu({ item, route, go, setMobileOpen }: { item: NavItem; route: Route; go: (route: Route) => void; setMobileOpen: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children?.length);

  return (
    <div className={`nav-menu ${open ? 'is-open' : ''} ${hasChildren ? 'has-children' : ''}`}>
      <button
        className={route === item.route ? 'nav-link active' : 'nav-link'}
        onClick={() => (hasChildren ? setOpen(!open) : go(item.route))}
        aria-expanded={hasChildren ? open : undefined}
        aria-label={item.label}
      >
        {item.label}{hasChildren && <ChevronDown size={14} />}
      </button>
      {hasChildren && item.children && (
        <div className={`mega-menu mega-${item.label.toLowerCase()}`}>
          <div className="mega-heading">
            <span className="section-kicker">Explore Sentitone</span>
            <strong>
              {item.label === 'Services'
                ? 'Everything you need to move calls forward.'
                : item.label === 'Industries'
                  ? 'Built for the way your world works.'
                  : 'Ideas, updates, and proof.'}
            </strong>
          </div>
          <div className="mega-grid">
            {item.children.map((child) => (
              <button
                className="mega-link"
                key={`${child.label}-${child.route}`}
                onClick={() => { go(child.route); setMobileOpen(false); }}
              >
                <span>{child.label}</span>
                {child.description && <small>{child.description}</small>}
              </button>
            ))}
          </div>
          <button className="mega-all" onClick={() => go(item.route)}>
            Explore all {item.label.toLowerCase()} <ArrowRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}

export function Layout({ children, route, navigate, onDemo }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (next: Route) => { navigate(next); setMenuOpen(false); };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <div className="app-shell">
      <div className="announcement"><span>Odia is launching next — bring every conversation closer. <strong style={{ fontWeight: 600 }}>ଓଡ଼ିଆ ଆସୁଛି</strong></span><ArrowRight size={14} /></div>
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand-button" onClick={() => go('home')}><BrandMark /></button>
          <nav className={menuOpen ? 'desktop-nav is-open' : 'desktop-nav'} aria-label="Main navigation">
            {navItems.map((item) => (
              <NavMenu key={item.route} item={item} route={route} go={go} setMobileOpen={setMenuOpen} />
            ))}
            <button className="mobile-cta" onClick={onDemo}>Start free trial <ArrowRight size={15} /></button>
          </nav>
          <button className="nav-cta" onClick={onDemo}>Start free trial <ArrowRight size={15} /></button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
      <main>{children}</main>
      <footer>
        <div className="container footer-top">
          <div><BrandMark /><p>Voice technology with<br />a human point of view.</p></div>
          <div className="footer-links"><strong>Explore</strong>{navItems.slice(0, 5).map((item) => <button key={item.route} onClick={() => go(item.route)}>{item.label}</button>)}</div>
          <div className="footer-links"><strong>Company</strong><button onClick={() => go('about')}>About</button><button onClick={() => go('resources')}>Resources</button><button onClick={() => go('contact')}>Contact Us</button><button onClick={onDemo}>Start free trial</button></div>
          <div className="footer-links"><strong>Languages</strong><button onClick={() => go('home')}>English · Live</button><button onClick={() => go('home')}>हिन्दी · Live</button><button onClick={() => go('home')}>ଓଡ଼ିଆ · Launching</button><button onClick={() => go('home')}>More coming soon</button></div>
        </div>
        <div className="container footer-bottom"><span>&copy; 2026 Sentitone. All rights reserved.</span><span>Built for better conversations.</span></div>
      </footer>
    </div>
  );
}

export { BrandMark };
