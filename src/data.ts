export type NavChild = { label: string; route: string; description?: string };
export type NavItem = { label: string; route: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: 'Home', route: 'home' },
  {
    label: 'Services',
    route: 'services',
    children: [
      { label: 'AI Voice Agents', route: 'ai-voice-agents', description: 'Answer instantly, speak naturally, log everything.' },
      { label: 'Appointment Scheduling', route: 'appointment-scheduling', description: 'Check availability and confirm bookings automatically.' },
      { label: 'Lead Qualification', route: 'lead-qualification', description: 'Ask the right questions, route hot leads instantly.' },
      { label: 'Call Analytics', route: 'call-analytics', description: 'Sentiment, CSAT, resolution rate in one dashboard.' },
      { label: 'CRM Integration', route: 'crm-integration', description: 'Connect to your CRM, calendar, and tools in minutes.' },
      { label: 'Finance and Lending', route: 'finance-and-lending', description: 'Handle loan inquiries and pre-qualification calls.' },
      { label: 'Sales and Pipeline', route: 'sales-and-pipeline', description: 'Move deals forward with every conversation.' },
      { label: 'Notifications & Alerts', route: 'notifications-and-alerts', description: 'Send reminders and alerts automatically.' },
      { label: 'Surveys & Feedback', route: 'surveys-and-feedback', description: 'Collect feedback with natural voice surveys.' },
      { label: 'Customer Retention', route: 'customer-retention', description: 'Proactively engage and retain at-risk customers.' },
    ],
  },
  {
    label: 'Industries',
    route: 'industries',
    children: [
      { label: 'Healthcare', route: 'industries' },
      { label: 'Insurance', route: 'industries' },
      { label: 'Finance & Banking', route: 'industries' },
      { label: 'Real Estate', route: 'industries' },
      { label: 'Call Center & BPO', route: 'industries' },
      { label: 'Travel & Tourism', route: 'industries' },
      { label: 'Transportation & Logistics', route: 'industries' },
      { label: 'Retail & E-commerce', route: 'industries' },
      { label: 'Telecommunications', route: 'industries' },
      { label: 'Automotive', route: 'industries' },
      { label: 'Education', route: 'industries' },
      { label: 'Hospitality', route: 'industries' },
      { label: 'Legal', route: 'industries' },
      { label: 'Government', route: 'industries' },
      { label: 'Manufacturing', route: 'industries' },
      { label: 'Non-Profit Organizations', route: 'industries' },
      { label: 'Event Management', route: 'industries' },
      { label: 'Consultation', route: 'industries' },
      { label: 'Pharmaceuticals', route: 'industries' },
      { label: 'Sales & Lead Generation', route: 'industries' },
      { label: 'Utilities', route: 'industries' },
      { label: 'Construction', route: 'industries' },
      { label: 'Agriculture', route: 'industries' },
    ],
  },
  { label: 'API', route: 'api' },
  { label: 'Pricing', route: 'pricing' },
  {
    label: 'Resources',
    route: 'resources',
    children: [
      { label: 'Blogs', route: 'resources', description: 'Insights on AI voice and automation.' },
      { label: 'News', route: 'resources', description: 'Latest updates and announcements.' },
      { label: 'Case Studies', route: 'resources', description: 'Real results from real teams.' },
    ],
  },
  { label: 'Contact Us', route: 'contact' },
  { label: 'About', route: 'about' },
];

export type Industry = {
  label: string;
  title: string;
  detail: string;
  points: string[];
  accent: 'rose' | 'amber' | 'blue' | 'green';
  image?: string;
};

export const industries: Industry[] = [
  {
    label: 'Healthcare',
    title: 'A more human way to care',
    detail: 'Confirm appointments, answer questions, and give every caller a thoughtful first response.',
    points: ['Appointment reminders', 'Prescription follow-ups', 'Triage and routing'],
    accent: 'rose',
    image: 'https://images.pexels.com/photos/7658369/pexels-photo-7658369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    label: 'Insurance',
    title: 'Every claim, every question',
    detail: 'Handle claims inquiries, policy questions, and renewal reminders with empathy and precision.',
    points: ['Claims intake', 'Policy questions', 'Renewal reminders'],
    accent: 'blue',
    image: 'https://images.pexels.com/photos/7709141/pexels-photo-7709141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    label: 'Finance & Banking',
    title: 'Trust, at every touchpoint',
    detail: 'Handle routine calls with precision while your team focuses on the conversations that matter.',
    points: ['Account inquiries', 'Loan pre-qualification', 'Fraud alert follow-ups'],
    accent: 'amber',
    image: 'https://images.pexels.com/photos/7709227/pexels-photo-7709227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    label: 'Real Estate',
    title: 'Never miss the next move',
    detail: 'Qualify leads, schedule tours, and turn more conversations into signed agreements.',
    points: ['Lead qualification', 'Tour scheduling', 'Listing inquiries'],
    accent: 'green',
    image: 'https://images.pexels.com/photos/7035859/pexels-photo-7035859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    label: 'Call Center & BPO',
    title: 'Scale without the burnout',
    detail: 'Handle high-volume call queues with AI that never tires, never misses, and always sounds professional.',
    points: ['High-volume handling', 'Queue management', 'Agent handoff'],
    accent: 'rose',
    image: 'https://images.pexels.com/photos/8866765/pexels-photo-8866765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    label: 'Travel & Tourism',
    title: 'Every journey starts with a hello',
    detail: 'Book trips, answer destination questions, and handle changes without the wait.',
    points: ['Trip booking', 'Itinerary changes', 'Destination FAQs'],
    accent: 'blue',
    image: 'https://images.pexels.com/photos/7964498/pexels-photo-7964498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const allIndustries = [
  'Healthcare', 'Insurance', 'Finance & Banking', 'Real Estate', 'Call Center & BPO',
  'Travel & Tourism', 'Transportation & Logistics', 'Retail & E-commerce',
  'Telecommunications', 'Automotive', 'Education', 'Hospitality', 'Legal', 'Government',
  'Manufacturing', 'Non-Profit Organizations', 'Event Management', 'Consultation',
  'Pharmaceuticals', 'Sales & Lead Generation', 'Utilities', 'Construction', 'Agriculture',
];

export const industryMarquee = [
  'Healthcare', 'Insurance', 'Finance & Banking', 'Real Estate', 'Manufacturing',
  'Travel & Tourism', 'Transportation & Logistics', 'Retail & E-commerce',
  'Telecommunication', 'Automotive', 'Education', 'Hospitality',
];

export const problems = [
  { stat: '40% time wasted', title: 'Manual call logging', detail: 'Reps copy notes into spreadsheets instead of selling.', icon: 'FileText' },
  { stat: '62% missed after hours', title: 'Overwhelmed call queues', detail: 'Customers wait. Leads go cold. Reps burn out.', icon: 'PhoneOff' },
  { stat: 'Inconsistent', title: 'No consistent script', detail: 'Every rep sounds different. Trust erodes quietly.', icon: 'MessageSquareWarning' },
  { stat: 'Costs climb', title: 'Scaling = more hiring', detail: 'Costs climb. Call quality stays exactly the same.', icon: 'TrendingUp' },
];

export const services = [
  { icon: 'Mic2', title: 'AI Voice Agents', description: 'Answers instantly, speaks like a human, and logs everything to your CRM automatically. No hold music. No missed calls.', tag: 'Handle calls 24/7 instantly' },
  { icon: 'CalendarCheck', title: 'Appointment Scheduling', description: 'Checks availability, schedules appointments, and confirms bookings instantly — no human intervention required.', tag: 'Automate bookings fully' },
  { icon: 'Languages', title: 'Multilingual AI Communication', description: 'AI Voice Agents that auto-detect language, respond naturally, and work instantly with no extra setup.', tag: 'Serve 100+ languages' },
  { icon: 'UserCheck', title: 'Lead Qualification', description: 'Asks the right questions. Routes hot leads to your team instantly so nothing slips through.', tag: 'Prioritize hot leads' },
  { icon: 'BarChart3', title: 'Smart Analytics', description: 'Sentiment, CSAT, resolution rate — all in one AI-powered analytics dashboard.', tag: 'Boost insights & ROI' },
  { icon: 'Plug', title: 'Works with your stack', description: 'Connects to your CRM, calendar, and communication tools in minutes. No engineering required.', tag: 'Plug & Play' },
];

export const serviceDetails: Record<string, { title: string; tagline: string; description: string; features: { title: string; detail: string }[] }> = {
  'ai-voice-agents': {
    title: 'AI Voice Agents',
    tagline: 'Handle calls 24/7 instantly',
    description: 'Sentitone AI Voice Agents answer instantly, speak like a human, and log everything to your CRM automatically. No hold music. No missed calls.',
    features: [
      { title: 'Natural conversation', detail: 'Speaks with the rhythm, tone, and empathy of a real person.' },
      { title: 'Always on', detail: 'Takes calls at any hour, in any volume, without burning out.' },
      { title: 'Automatic logging', detail: 'Every call is transcribed, summarized, and synced to your tools.' },
      { title: 'Smart handoff', detail: 'Transfers to a human with full context when needed.' },
    ],
  },
  'appointment-scheduling': {
    title: 'Appointment Scheduling',
    tagline: 'Automate bookings fully',
    description: 'AI Call Automation checks availability, schedules appointments, and confirms bookings instantly — no human intervention required.',
    features: [
      { title: 'Real-time availability', detail: 'Checks calendars live and books the right slot.' },
      { title: 'Instant confirmation', detail: 'Confirms bookings with callers on the same call.' },
      { title: 'Reminders and follow-ups', detail: 'Sends automated reminders to reduce no-shows.' },
      { title: 'Rescheduling', detail: 'Handles changes and cancellations gracefully.' },
    ],
  },
  'lead-qualification': {
    title: 'Lead Qualification',
    tagline: 'Prioritize hot leads',
    description: 'Asks the right questions. AI Voice Agents that route hot leads to your team instantly.',
    features: [
      { title: 'Smart questions', detail: 'Asks qualifying questions tailored to your criteria.' },
      { title: 'Instant routing', detail: 'Sends hot leads to sales while interest is high.' },
      { title: 'Lead scoring', detail: 'Scores every lead based on configurable rules.' },
      { title: 'CRM sync', detail: 'Updates your pipeline automatically after every call.' },
    ],
  },
  'call-analytics': {
    title: 'Call Analytics',
    tagline: 'Boost insights & ROI',
    description: 'Sentiment, CSAT, resolution rate — all in one AI-powered analytics dashboard.',
    features: [
      { title: 'Sentiment analysis', detail: 'Detects caller emotions in real time.' },
      { title: 'CSAT scoring', detail: 'Measures satisfaction after every call.' },
      { title: 'Resolution rate', detail: 'Tracks how often calls are resolved without handoff.' },
      { title: 'Trend detection', detail: 'Surfaces patterns and opportunities over time.' },
    ],
  },
  'crm-integration': {
    title: 'CRM Integration',
    tagline: 'Plug & Play',
    description: 'Connects to your CRM, calendar, and communication tools with intelligent AI Voice Agents in minutes. No engineering required.',
    features: [
      { title: 'Calendars', detail: 'Two-way sync with Google, Outlook, and more.' },
      { title: 'CRMs', detail: 'Works with Salesforce, HubSpot, Zoho, and custom systems.' },
      { title: 'Help desks', detail: 'Triggers workflows from Zendesk, Freshdesk, and more.' },
      { title: 'Phone systems', detail: 'Connects to your existing telephony infrastructure.' },
    ],
  },
  'finance-and-lending': {
    title: 'Finance and Lending',
    tagline: 'Every call, every compliance',
    description: 'Handle loan inquiries, pre-qualification calls, and follow-ups with precision and full compliance.',
    features: [
      { title: 'Loan pre-qualification', detail: 'Collects info and screens applicants naturally.' },
      { title: 'Account inquiries', detail: 'Answers balance, payment, and account questions.' },
      { title: 'Fraud alerts', detail: 'Follows up on suspicious activity immediately.' },
      { title: 'Compliance-ready', detail: 'Built for regulated environments with encryption.' },
    ],
  },
  'sales-and-pipeline': {
    title: 'Sales and Pipeline',
    tagline: 'Move deals forward',
    description: 'Every conversation is an opportunity. Sentitone moves deals forward with outbound follow-ups and inbound handling.',
    features: [
      { title: 'Outbound outreach', detail: 'Calls prospects with personalized messages.' },
      { title: 'Inbound handling', detail: 'Captures and qualifies inbound interest instantly.' },
      { title: 'Pipeline updates', detail: 'Syncs call outcomes to your CRM automatically.' },
      { title: 'Follow-up automation', detail: 'Schedules and executes follow-ups without manual work.' },
    ],
  },
  'notifications-and-alerts': {
    title: 'Notifications & Alerts',
    tagline: 'Reach everyone, every time',
    description: 'Send reminders, alerts, and notifications automatically with a natural voice that people actually listen to.',
    features: [
      { title: 'Appointment reminders', detail: 'Reduces no-shows with friendly voice reminders.' },
      { title: 'Payment alerts', detail: 'Notifies customers about due and overdue payments.' },
      { title: 'Emergency notifications', detail: 'Reaches people fast with critical updates.' },
      { title: 'Delivery updates', detail: 'Keeps customers informed about order status.' },
    ],
  },
  'surveys-and-feedback': {
    title: 'Surveys & Feedback',
    tagline: 'Listen at scale',
    description: 'Collect feedback with natural voice surveys that feel like a conversation, not a form.',
    features: [
      { title: 'Voice surveys', detail: 'Ask questions conversationally and capture rich responses.' },
      { title: 'CSAT and NPS', detail: 'Measure satisfaction and loyalty after every interaction.' },
      { title: 'Sentiment insights', detail: 'Understand how people feel, not just what they say.' },
      { title: 'Automated reporting', detail: 'Get aggregated insights without manual analysis.' },
    ],
  },
  'customer-retention': {
    title: 'Customer Retention',
    tagline: 'Keep them coming back',
    description: 'Proactively engage at-risk customers with personalized calls that rebuild trust and reduce churn.',
    features: [
      { title: 'Churn detection', detail: 'Identifies at-risk customers from behavior patterns.' },
      { title: 'Win-back calls', detail: 'Reaches out with personalized offers and check-ins.' },
      { title: 'Loyalty outreach', detail: 'Thanks and rewards loyal customers proactively.' },
      { title: 'Resolution', detail: 'Handles complaints before they become cancellations.' },
    ],
  },
};

export const capabilities = [
  { title: 'Context-Aware Live Agent Handoff', description: 'Transfer conversations to human agents instantly with complete context, ensuring uninterrupted customer experiences.', icon: 'Headphones' },
  { title: 'Live API Execution', description: 'Retrieve customer records, order status, appointments, and account information in real time without interrupting the conversation.', icon: 'Webhook' },
  { title: 'Real-Time Sentiment Intelligence', description: 'Detect customer emotions instantly and dynamically adapt AI responses or initiate human escalation when necessary.', icon: 'HeartPulse' },
  { title: 'Enterprise Integration Framework', description: 'Integrate seamlessly with CRM, ERP, ticketing, telephony, and payment systems through enterprise-ready APIs.', icon: 'Network' },
  { title: 'Human-Like Conversation Management', description: 'Handle interruptions, overlapping speech, and natural dialogue with advanced conversational intelligence.', icon: 'MessageCircle' },
  { title: 'Adaptive Language Intelligence', description: 'Switch seamlessly between languages during live conversations while maintaining intent, context, and continuity.', icon: 'Languages' },
  { title: 'True Omnichannel AI Experience', description: 'Power voice, WhatsApp, SMS, email, and web interactions through one intelligent AI agent with shared memory.', icon: 'Layers' },
  { title: 'Built for Enterprise Scale', description: 'Support mission-critical operations across global B2B, B2C, healthcare, finance, logistics, education, and retail.', icon: 'Building2' },
  { title: 'AI Workflow Automation', description: 'Trigger downstream business workflows automatically based on conversation outcomes.', icon: 'Workflow' },
  { title: 'Conversation Intelligence', description: 'Extract actionable insights, buying signals, customer intent, and business trends from every interaction.', icon: 'Brain' },
  { title: 'AI Call Summarization', description: 'Automatically generate concise call summaries, action items, and follow-up recommendations.', icon: 'ScrollText' },
  { title: 'Knowledge-Driven AI Agents', description: 'AI responds using your company documentation, knowledge base, policies, and product information.', icon: 'BookOpen' },
];

export const compliances = [
  { label: 'HIPAA', detail: 'Protected health information on every call' },
  { label: 'GDPR', detail: 'Privacy-by-design for EU data subjects' },
  { label: 'PCI DSS', detail: 'Secure handling of payment conversations' },
  { label: 'SOC 2', detail: 'Audited security, availability & confidentiality' },
  { label: 'ISO 27001', detail: 'Certified security and compliance' },
];

export type Language = { name: string; native: string; status: 'live' | 'launching' | 'soon' };

export const languages: Language[] = [
  { name: 'English', native: 'English', status: 'live' },
  { name: 'Odia', native: 'ଓଡ଼ିଆ', status: 'launching' },
  { name: 'Hindi', native: 'हिन्दी', status: 'live' },
  { name: 'Tamil', native: 'தமிழ்', status: 'soon' },
  { name: 'Telugu', native: 'తెలుగు', status: 'soon' },
  { name: 'Bengali', native: 'বাংলা', status: 'soon' },
  { name: 'Marathi', native: 'मराठी', status: 'soon' },
  { name: 'Gujarati', native: 'ગુજરાતી', status: 'soon' },
  { name: 'Kannada', native: 'ಕನ್ನಡ', status: 'soon' },
  { name: 'Malayalam', native: 'മലയാളം', status: 'soon' },
  { name: 'Punjabi', native: 'ਪੰਜਾਬੀ', status: 'soon' },
  { name: 'Spanish', native: 'Español', status: 'live' },
];

export const languageStats = [
  { value: '100+', label: 'Languages supported' },
  { value: '50+', label: 'Regional accents' },
  { value: '<200ms', label: 'Response latency' },
  { value: '99.4%', label: 'Transcription accuracy' },
];

export const testimonials = [
  { quote: 'Sentitone helped us give time back to our team — without making our customers feel like they were talking to a machine.', name: 'Maya Patel', role: 'Head of Operations, Northstar' },
  { quote: 'We went from missing half our calls after hours to answering every single one. The ROI was immediate.', name: 'Arjun Mehta', role: 'Founder, Greenleaf Realty' },
  { quote: 'The Odia support is a game-changer for our rural health camps. People finally feel understood.', name: 'Dr. Priya Nayak', role: 'Director, CareFirst Clinics' },
  { quote: 'Call quality went up while our costs went down. I did not think both were possible at the same time.', name: 'Rohan Kapoor', role: 'VP Sales, Meridian Logistics' },
  { quote: 'Sentitone feels like a teammate who never sleeps. It books, follows up, and hands off without missing a beat.', name: 'Sneha Reddy', role: 'COO, BrightPath Home Services' },
];

export const solutions = [
  { icon: 'Headphones', title: 'Listens for intent', description: 'Understands what people mean, even when they do not say it perfectly. Sentitone parses natural speech, handles interruptions, and follows context across a full conversation.', points: ['Natural language understanding', 'Context-aware responses', 'Multilingual support'] },
  { icon: 'Zap', title: 'Acts in the moment', description: 'Books, routes, qualifies, and resolves while the conversation is happening. No callbacks, no waiting on hold, no lost momentum.', points: ['Real-time booking', 'Smart call routing', 'Instant qualification'] },
  { icon: 'BarChart3', title: 'Learns your rhythm', description: 'Gets sharper with every interaction and gives your team a clearer picture of what callers need and how your business responds.', points: ['Conversation analytics', 'Trend detection', 'Team performance insights'] },
];

export const steps = [
  { number: '01', title: 'Map your workflow', description: 'We start with one clear outcome — the call you want to handle better. Together we map the conversation, the handoffs, and the tools involved.' },
  { number: '02', title: 'Train your agent', description: 'Your Sentitone agent learns your voice, your answers, and your systems. We test it against real scenarios until it responds the way you would.' },
  { number: '03', title: 'Go live and grow', description: 'Connect a number, start taking calls, and watch the data come in. Add more workflows as your confidence grows — one conversation at a time.' },
];

export const integrations = ['Calendars', 'CRMs', 'Help desks', 'Phone systems', 'Messaging apps', 'Internal databases'];

export const values = [
  { title: 'Empathy first', description: 'Technology should make people feel heard, not processed. Every voice interaction starts with understanding.' },
  { title: 'Clarity always', description: 'We build tools that are transparent, honest, and easy to trust — for your team and for your callers.' },
  { title: 'Momentum matters', description: 'Every call is a chance to move something forward. We design for action, not just answers.' },
];

export const metrics = [
  { value: '3.2', suffix: 'x', label: 'faster response to every inquiry' },
  { value: '24', suffix: '/7', label: 'always-on availability' },
  { value: '89', suffix: '%', label: 'of calls resolved without a handoff' },
];

export const faqs: [string, string][] = [
  ['What is Sentitone?', 'Sentitone is an AI voice platform that helps teams handle calls with a natural, always-on voice. It can answer questions, qualify callers, book appointments, and hand off to your team when a human is needed.'],
  ['Will callers know they are speaking with AI?', 'Sentitone is designed to be clear and conversational. You choose how your agent introduces itself, so every interaction stays transparent and on-brand.'],
  ['Can it connect to our existing tools?', 'Yes. Sentitone fits into the systems your team already uses, from calendars and CRMs to help desks and phone systems.'],
  ['How quickly can we get started?', 'Start with one workflow, one number, and one clear outcome. Most teams can go from first setup to their first live call in a matter of days.'],
  ['What languages does Sentitone support?', 'Sentitone supports English, Hindi, and Odia today, with Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, and Punjabi coming soon. We can switch languages mid-conversation when needed.'],
  ['Is my data secure?', 'Yes. All conversations are encrypted in transit and at rest. You control what is stored, for how long, and who on your team can access it.'],
];

export const pricingPlans = [
  { name: 'Starter', price: '$299', period: '/mo', description: 'For small teams getting started with AI voice.', features: ['1 AI voice agent', '500 minutes / month', '2 languages', 'Email support', 'Basic analytics'], cta: 'Start free trial' },
  { name: 'Growth', price: '$799', period: '/mo', description: 'For growing teams that need more coverage.', features: ['3 AI voice agents', '2,000 minutes / month', '10+ languages', 'Priority support', 'Advanced analytics', 'CRM integration'], cta: 'Start free trial', popular: true },
  { name: 'Enterprise', price: 'Custom', period: '', description: 'For organizations at scale.', features: ['Unlimited agents', 'Custom minutes', 'All 100+ languages', '24/7 dedicated support', 'Custom integrations', 'SLA guarantee', 'Compliance packages'], cta: 'Contact sales' },
];

export const resourcePosts = [
  { title: 'How AI Voice Agents Are Transforming Healthcare', category: 'Blog', date: 'Aug 2026', excerpt: 'From appointment reminders to triage, AI voice is changing how clinics connect with patients.' },
  { title: 'Sentitone Launches Odia Language Support', category: 'News', date: 'Aug 2026', excerpt: 'We are proud to bring AI voice technology to Odia speakers across India and beyond.' },
  { title: 'How Northstar Cut Response Times by 3.2x', category: 'Case Study', date: 'Jul 2026', excerpt: 'A deep dive into how Northstar used Sentitone to transform their call operations.' },
  { title: 'The Future of Multilingual AI Communication', category: 'Blog', date: 'Jul 2026', excerpt: 'Why language adaptability is the key to serving diverse markets.' },
  { title: 'Sentitone Raises Series A to Expand Indian Language Support', category: 'News', date: 'Jun 2026', excerpt: 'New funding will accelerate our mission to serve every Indian language.' },
  { title: 'Greenleaf Realty: From Missed Calls to Closed Deals', category: 'Case Study', date: 'Jun 2026', excerpt: 'How a real estate firm turned missed calls into qualified leads with Sentitone.' },
];

export const heroImages = {
  callCenter: 'https://images.pexels.com/photos/8867405/pexels-photo-8867405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  team: 'https://images.pexels.com/photos/7681562/pexels-photo-7681562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  headset: 'https://images.pexels.com/photos/7035859/pexels-photo-7035859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  callCenter2: 'https://images.pexels.com/photos/7709196/pexels-photo-7709196.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  booths: 'https://images.pexels.com/photos/7682358/pexels-photo-7682358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  diverse: 'https://images.pexels.com/photos/8866802/pexels-photo-8866802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  womanHeadset: 'https://images.pexels.com/photos/7580835/pexels-photo-7580835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  womanDesk: 'https://images.pexels.com/photos/5453929/pexels-photo-5453929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  agents: 'https://images.pexels.com/photos/7689764/pexels-photo-7689764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  meeting: 'https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  strategy: 'https://images.pexels.com/photos/36733315/pexels-photo-36733315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  analytics: 'https://images.pexels.com/photos/7693706/pexels-photo-7693706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};
