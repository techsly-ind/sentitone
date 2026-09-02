import { useEffect, useState } from 'react';

export type Route = string;

function parseHash(): Route {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const valid = ['home', 'solutions', 'industries', 'how-it-works', 'company', 'api', 'pricing', 'resources', 'contact', 'about',
    'ai-voice-agents', 'appointment-scheduling', 'lead-qualification', 'call-analytics', 'crm-integration', 'finance-and-lending', 'sales-and-pipeline', 'notifications-and-alerts', 'surveys-and-feedback', 'customer-retention'];
  return (valid.includes(hash as Route) ? hash : 'home') as Route;
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (next: Route) => {
    window.location.hash = `/${next}`;
  };

  return { route, navigate };
}
