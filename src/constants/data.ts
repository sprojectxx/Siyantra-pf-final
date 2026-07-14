import { Project, ServiceItem, FAQItem } from '../types';

export const TECHNOLOGIES = [
  { name: 'React', category: 'Frontend', desc: 'Component-driven interactive UI layouts.' },
  { name: 'Next.js', category: 'Meta-Framework', desc: 'High-performance SSR & routing.' },
  { name: 'Node.js', category: 'Backend Runtime', desc: 'Scalable event-driven server runtime.' },
  { name: 'Python', category: 'AI & Data Science', desc: 'Powerful processing and LLM scripting.' },
  { name: 'OpenAI', category: 'Intelligence API', desc: 'GPT integration for complex reasoning.' },
  { name: 'Supabase', category: 'Database & Auth', desc: 'Realtime database and instant user auth.' },
  { name: 'MongoDB', category: 'NoSQL Database', desc: 'Flexible, high-scale document storage.' },
  { name: 'Postgres', category: 'Relational Database', desc: 'Enterprise-grade structured databases.' },
  { name: 'Docker', category: 'DevOps Containerization', desc: 'Isolated system runtime environments.' },
  { name: 'AWS', category: 'Cloud Infrastructure', desc: 'High-availability global server hosting.' },
  { name: 'Vercel', category: 'Edge Deployment', desc: 'Instant serverless deployment architecture.' },
  { name: 'GitHub', category: 'Version Control', desc: 'Collaborative development and CI/CD pipelines.' },
  { name: 'Tailwind CSS', category: 'Styling Engine', desc: 'Atomic responsive utility class styling.' },
  { name: 'Framer Motion', category: 'Interaction & Physics', desc: 'Fluid spring physics component animation.' },
  { name: 'n8n', category: 'Workflow Automation', desc: 'Self-hosted flexible node workflow engines.' },
  { name: 'Make', category: 'Cloud Integration', desc: 'Visual cloud service API triggers.' },
  { name: 'Zapier', category: 'SaaS Connectors', desc: 'Quick multi-app event triggers.' },
  { name: 'LangChain', category: 'AI Orchestration', desc: 'Chaining prompt flows and document stores.' },
  { name: 'Stripe', category: 'Payment API', desc: 'Subscription Billing & global commerce gateway.' },
  { name: 'Firebase', category: 'App Engine', desc: 'Firestore database & cloud sync triggers.' },
  { name: 'Redis', category: 'Memory Cache', desc: 'Sub-millisecond read caching.' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'We build high-performance, visually stunning, custom-coded web architectures engineered for speed, SEO, and engagement.',
    path: '/services/web-development',
    features: ['Custom 3D & WebGL Experiences', 'Headless CMS Architectures', 'Optimized Landing Pages', 'Fully Responsive 12-Column Grids'],
    highlightColor: 'from-orange-500 to-amber-500'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Eliminate manual friction. We design agentic systems, autonomous bots, and automated data pipelines that run 24/7.',
    path: '/services/ai-automation',
    features: ['Autonomous AI Agent Workflows', 'n8n & Zapier Orchestrations', 'RAG Document Analysis Systems', 'Intelligent Chatbots & Assistances'],
    highlightColor: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    description: 'A customized system tailored precisely to your team. Manage sales funnels, support SLAs, and automate lead tracking.',
    path: '/services/crm-development',
    features: ['Custom Sales Pipeline Pipelines', 'Role-Based Permission Matrix', 'Real-Time Inventory & Accounting', 'In-App Automated Reports'],
    highlightColor: 'from-red-500 to-orange-500'
  },
  {
    id: 'saas-development',
    title: 'SaaS Products',
    description: 'Turn your idea into a multi-tenant cloud subscription product. Secure, scalable, and ready to capture recurring revenue.',
    path: '/services/saas-development',
    features: ['Multi-Tenant Database Design', 'Stripe Customer Subscription Gateways', 'Secure Auth & Session Management', 'Highly Available Node Servers'],
    highlightColor: 'from-orange-600 to-red-500'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Increase high-intent traffic and optimize your acquisition channels with modern performance engineering.',
    path: '/services/digital-marketing',
    features: ['Technical SEO & Keyword Strategies', 'Targeted Google & Meta Campaigns', 'Full-Funnel Analytics Reporting', 'Brand Positioning & Narratives'],
    highlightColor: 'from-yellow-500 to-orange-500'
  }
];

export const PROJECTS: Project[] = [
  {
    slug: 'pulse-crm',
    title: 'PulseCRM AI',
    client: 'Pulse Systems Inc',
    industry: 'Enterprise Software',
    category: 'CRM Development',
    challenge: 'A global logistics client with 120+ sales representatives was losing 35% of qualified leads due to slow manual entry and lack of predictive prioritization in their legacy spreadsheets.',
    solution: 'Designed and engineered an automated lead scoring CRM with custom role management, interactive drag-and-drop kanban boards, and a server-side OpenAI recommendation engine that analyzes client emails and flags urgent tickets.',
    technology: ['React', 'Node.js', 'Postgres', 'OpenAI', 'Tailwind CSS'],
    result: 'Replaced manual tracking with automated pipeline triggers, boosting representative productivity by 40% and cutting response times to under 5 minutes.',
    metrics: [
      { label: 'Lead Scoring Accuracy', value: '94%' },
      { label: 'Team Productivity', value: '+40%' },
      { label: 'Sales Velocity Increase', value: '2.4x' }
    ],
    problemDetails: 'The client’s operations were severely hindered by data silos, manual CRM updates, and cold handoffs between marketing and account reps. Lead routing was arbitrary, leading to client fatigue and lost high-value deals.',
    researchDetails: 'We interviewed sales leads, mapped the pipeline stages, and audited legacy databases. We recognized that incorporating direct context from client email inquiries using LLMs would streamline qualification.',
    developmentDetails: 'Built using React 19 and custom Tailwind layouts. We integrated Express APIs and a Postgres backend, secured with OAuth, and created complex role permissions separating regional team leaders and individual representatives.',
    images: ['crm_dash_preview.png']
  },
  {
    slug: 'flowsync-automation',
    title: 'FlowSync Automation Suite',
    client: 'Apex Capital Partners',
    industry: 'Financial Services',
    category: 'AI Automation',
    challenge: 'Apex analysts spent a collective 450 hours per month copying invoice data, compiling compliance checklists, and updating slack channels manually from scanned PDF files.',
    solution: 'Configured a self-hosted n8n system linked with LangChain and Python OCR scripts to process all incoming financial assets automatically. The workflow qualifies documents, extracts key values, updates CRM accounts, drafts replies, and notifies team leads.',
    technology: ['Python', 'n8n', 'LangChain', 'OpenAI', 'Postgres'],
    result: 'Automated 92% of invoice triage operations, leading to instant financial reporting and over $18,000 saved monthly in operational overhead.',
    metrics: [
      { label: 'Manual Effort Reduced', value: '92%' },
      { label: 'Average Processing Time', value: '12s' },
      { label: 'Monthly Operations Saved', value: '450hrs' }
    ],
    problemDetails: 'Financial audits require strict compliance verification. Re-keying transactions from scans led to human errors and regulatory risks, keeping senior analysts stuck doing routine data entry.',
    researchDetails: 'We mapped the flow of documents from shared folders, emails, and client portals, and engineered a fail-safe exception circuit where anomalies are flagged to a human supervisor.',
    developmentDetails: 'Developed Python agents running on AWS utilizing LangChain with secure vector embeddings. Created a custom dashboard widget to monitor pipeline queue health in real time.',
    images: ['automation_preview.png']
  },
  {
    slug: 'retail-engine-saas',
    title: 'RetailEngine SaaS',
    client: 'Nova Commerce Corp',
    industry: 'E-Commerce / Retail',
    category: 'SaaS Products',
    challenge: 'Legacy e-commerce subscription managers suffered high subscriber churn due to laggy multi-tenant portals, failed Stripe retry logic, and opaque billing histories.',
    solution: 'Engineered a lightning-fast custom subscription SaaS platform built with server-side caching, fully modular Stripe billing customer portals, and a detailed usage analytics panel.',
    technology: ['React', 'Next.js', 'Stripe', 'Redis', 'Supabase'],
    result: 'Reduced customer subscription checkout completion time from 18 seconds to 1.8 seconds, driving a substantial decline in churn and cart drop-offs.',
    metrics: [
      { label: 'Checkout Load Time', value: '1.8s' },
      { label: 'Subscriber Churn Drop', value: '-22%' },
      { label: 'API Response Speed', value: '45ms' }
    ],
    problemDetails: 'Subscription retail relies on frictionless transactional portals. Any delay in loading portal pages or billing update forms triggers active customer drop-offs and customer support queues.',
    researchDetails: 'We optimized critical path rendering, utilized sub-millisecond key-value caching, and designed a custom modern account layout supporting instant, self-service cancellation/upgrades.',
    developmentDetails: 'Crafted with React functional hooks and Framer Motion layouts. Leveraged PostgreSQL with Supabase for fast, modern multi-tenant authorization rules.',
    images: ['saas_portal_preview.png']
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is your typical project engagement timeframe?',
    answer: 'For focused high-performance web systems and AI automations, we typical design, build, and deploy within 4 to 8 weeks. Larger full-stack enterprise CRMs and comprehensive SaaS platforms typically require 8 to 14 weeks from architectural design to deployment.'
  },
  {
    id: 'faq-2',
    question: 'Do we own the full intellectual property rights of the software?',
    answer: 'Yes. Upon final delivery and project completion, all intellectual property, source code, data pipelines, design assets, and database schemas are transferred 100% to your company under standard enterprise contracts.'
  },
  {
    id: 'faq-3',
    question: 'How do you handle hosting, cloud configuration, and maintenance?',
    answer: 'We architect and package all codebases inside standardized Docker containers and deploy them to leading high-availability clouds such as GCP (Cloud Run), AWS, or Vercel. We offer tiered ongoing SLA support packages covering API updates, model fine-tuning, security audits, and scale monitoring.'
  },
  {
    id: 'faq-4',
    question: 'Can you integrate AI workflows into our existing CRM and ERP solutions?',
    answer: 'Absolutely. We specialize in building custom middleware and orchestration layers that connect legacy structures (Salesforce, SAP, Hubspot, custom databases) with cutting-edge AI models using self-hosted pipeline orchestrators like n8n, custom Python scripts, or serverless Express APIs.'
  },
  {
    id: 'faq-5',
    question: 'What makes Siyantra different from a standard web agency?',
    answer: 'Siyantra does not build generic, template-driven marketing sites. We are software engineers first. We integrate genuine, production-ready AI pipelines, automated database triggers, complex multi-tenant architectures, and bespoke user interfaces designed to scale transactional volume.'
  }
];
