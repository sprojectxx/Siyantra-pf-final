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
    slug: 'land-registry-transfers',
    title: 'LandRegistryTransfers',
    client: 'Land Registry Transfers',
    industry: 'LEGAL SERVICES',
    category: 'PROPERTY TRANSFERS',
    challenge: 'Property owners were experiencing delays and complex legal procedures when transferring property ownership and updating Land Registry records, resulting in inefficient and time-consuming processes.',
    solution: 'Designed and engineered a secure digital property transfer platform with simplified Land Registry applications, transfer of equity services, and efficient document management to streamline the entire ownership transfer process.',
    technology: ['React', 'Node.js', 'Postgres', 'Tailwind CSS'],
    result: 'Reduced processing times by 85% and manual paperwork by 60% with a 95% customer satisfaction rate.',
    metrics: [
      { label: 'FASTER PROCESSING', value: '85%' },
      { label: 'LESS MANUAL PAPERWORK', value: '60%' },
      { label: 'CUSTOMER SATISFACTION', value: '95%' }
    ],
    problemDetails: 'Property owners were experiencing delays and complex legal procedures when transferring property ownership and updating Land Registry records, resulting in inefficient and time-consuming processes.',
    researchDetails: 'Audited manual forms and workflows to design a digital-first submission system.',
    developmentDetails: 'Built with React, secure Postgres storage, and PDF generation tools.',
    images: ['crm_dash_preview.png'],
    externalLink: 'https://www.landregistrytransfers.com/'
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
