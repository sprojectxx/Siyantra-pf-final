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
    slug: 'online-land-registry',
    title: 'Online Land Registry',
    client: 'Online Land Registry',
    industry: 'PROPERTY SERVICES',
    category: 'LAND REGISTRY PORTAL',
    challenge: 'Property owners and professionals often face complex and time-consuming procedures when obtaining Land Registry documents and managing property-related applications. Accessing accurate property information and legal documentation can be confusing without a streamlined digital process.',
    solution: 'Designed and developed a comprehensive property services portal that provides secure online access to Land Registry documents, conveyancing services, property ownership records, and digital application processing. The platform simplifies property-related transactions through an intuitive and responsive user experience.',
    technology: ['React', 'Node.js', 'Postgres', 'Tailwind CSS'],
    result: 'Enabled 95% digital document access, boosted application processing by 55%, and improved service efficiency by 2.8x.',
    metrics: [
      { label: 'DIGITAL DOCUMENT ACCESS', value: '95%' },
      { label: 'FASTER APPLICATION PROCESSING', value: '+55%' },
      { label: 'IMPROVED SERVICE EFFICIENCY', value: '2.8x' }
    ],
    problemDetails: 'Property owners and professionals often face complex and time-consuming procedures when obtaining Land Registry documents and managing property-related applications.',
    researchDetails: 'Mapped out digital application validation steps and database schemas for property deeds.',
    developmentDetails: 'Built a secure, scalable web portal with React and Postgres backend databases.',
    images: ['saas_portal_preview.png'],
    externalLink: 'https://www.onlinelandregistry.uk'
  },
  {
    slug: 'lexpo-bv',
    title: 'Lexpo BV',
    client: 'Lexpo BV',
    industry: 'LANDING PAGE',
    category: 'CORPORATE WEBSITE',
    challenge: 'The client required a modern and professional digital presence to effectively showcase its services and establish credibility with potential customers. The existing online visibility needed a clean, user-friendly, and responsive solution.',
    solution: 'Designed and developed a high-converting landing page with a modern UI/UX, responsive design, optimized performance, and strategically placed call-to-action sections to improve customer engagement and drive business inquiries.',
    technology: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    result: 'Improved mobile responsiveness to 95%, boosted user engagement by 50%, and doubled lead generation potential.',
    metrics: [
      { label: 'MOBILE RESPONSIVENESS', value: '95%' },
      { label: 'USER ENGAGEMENT', value: '+50%' },
      { label: 'LEAD GENERATION POTENTIAL', value: '2x' }
    ],
    problemDetails: 'The client required a modern and professional digital presence to effectively showcase its services and establish credibility with potential customers.',
    researchDetails: 'Audited user journey mapping and responsive screen flows.',
    developmentDetails: 'Developed custom, optimized layouts with fluid transition triggers.',
    images: ['automation_preview.png'],
    externalLink: 'https://lexpobv.com/'
  },
  {
    slug: 'rentora',
    title: 'Rentora',
    client: 'Rentora Technologies',
    industry: 'SAAS PLATFORM',
    category: 'RENTAL MANAGEMENT',
    challenge: 'Rental businesses needed a modern, scalable solution to manage fleets, bookings, payments, and customer data from a single dashboard while reducing operational complexity.',
    solution: 'We built a SaaS platform that automates rental operations, provides real-time fleet visibility, simplifies reservations, and enables businesses to scale efficiently through a cloud-based management system.',
    technology: ['React', 'Node.js', 'Postgres', 'Tailwind CSS'],
    result: 'Operational efficiency improved by 92%, administrative work reduced by 75%, and achieved 98% platform reliability.',
    metrics: [
      { label: 'OPERATIONAL EFFICIENCY', value: '92%' },
      { label: 'REDUCED ADMIN WORK', value: '75%' },
      { label: 'PLATFORM RELIABILITY', value: '98%' }
    ],
    problemDetails: 'Rental businesses needed a modern, scalable solution to manage fleets, bookings, payments, and customer data from a single dashboard while reducing operational complexity.',
    researchDetails: 'Mapped out end-to-end booking life cycles and real-time fleet tracking requirements.',
    developmentDetails: 'Developed custom web portal with reactive components, scalable backend data models, and secure Stripe payment hooks.',
    images: ['saas_portal_preview.png'],
    externalLink: 'https://rentora-spx.vercel.app/'
  },
  {
    slug: 'kws-portal',
    title: 'KWS Portal',
    client: 'KWS Management Services',
    industry: 'MANAGEMENT PORTAL',
    category: 'OPERATIONAL DASHBOARD',
    challenge: 'The client needed a consolidated operational dashboard to manage tasks, user roles, security audits, and automated service tracking across multiple departments.',
    solution: 'We engineered an enterprise management portal utilizing secure single-sign-on (SSO), real-time task logs, automated workflow compliance, and structured role hierarchies.',
    technology: ['React', 'TypeScript', 'Node.js', 'Postgres'],
    result: 'Improved task resolution speed by 88%, saved 40% in administrative overhead, and achieved 100% security SLA compliance.',
    metrics: [
      { label: 'TASK RESOLUTION', value: '88%' },
      { label: 'ADMIN OVERHEAD SAVED', value: '40%' },
      { label: 'SECURITY COMPLIANCE', value: '100%' }
    ],
    problemDetails: 'The client needed a consolidated operational dashboard to manage tasks, user roles, security audits, and automated service tracking across multiple departments.',
    researchDetails: 'Audited user management roles, access control mechanisms, and logs requirements.',
    developmentDetails: 'Built a secure dashboard with React, Node.js, and Postgres, integrating advanced middleware authentication.',
    images: ['crm_dash_preview.png'],
    externalLink: 'https://kws-managementservices.online/login'
  },
  {
    slug: 'glow-cosmetics',
    title: 'Glow Cosmetics',
    client: 'Glow Premium Brands',
    industry: 'E-COMMERCE',
    category: 'DIGITAL COMMERCE',
    challenge: 'A premium cosmetics brand needed a fast, high-converting digital storefront with immersive product visuals, seamless checkout flows, and automated inventory sync.',
    solution: 'We built an ultra-fast headless e-commerce store with optimized page load speeds, curated animations, a custom cart system, and Stripe/Shopify sync hooks.',
    technology: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    result: 'Achieved a 4.2x speed boost on page transitions, contributing directly to a 32% growth in mobile checkouts.',
    metrics: [
      { label: 'LOAD SPEED BOOST', value: '4.2x' },
      { label: 'MOBILE CHECKOUTS', value: '+32%' },
      { label: 'MONTHLY ORDERS', value: '15k+' }
    ],
    problemDetails: 'A premium cosmetics brand needed a fast, high-converting digital storefront with immersive product visuals, seamless checkout flows, and automated inventory sync.',
    researchDetails: 'Mapped checkout funnel friction points and user flow paths.',
    developmentDetails: 'Built dynamic e-commerce frontend with responsive cart state and payment gateways.',
    images: ['automation_preview.png']
  },
  {
    slug: 'fleetos',
    title: 'FleetOS',
    client: 'Siyantra Flagship',
    industry: 'SAAS PRODUCT',
    category: 'FLEET COMPLIANCE',
    challenge: 'Logistics operators struggled with manual compliance spreadsheets, missing critical tax, insurance, and MOT renewal deadlines, leading to costly vehicle groundings.',
    solution: 'We engineered an AI-powered fleet management dashboard tracking vehicle compliance records, generating automated SMS/Email reminders, and utilizing OCR for instant document uploads.',
    technology: ['React', 'TypeScript', 'Node.js', 'Postgres', 'Docker'],
    result: 'Eliminated compliance overhead with automated alerts, ensuring zero missed MOT/insurance deadlines across active fleets.',
    metrics: [
      { label: 'MISSED DEADLINES', value: '0%' },
      { label: 'REDUCTION IN FINES', value: '65%' },
      { label: 'ACTIVE VEHICLES', value: '500+' }
    ],
    problemDetails: 'Logistics operators struggled with manual compliance spreadsheets, missing critical tax, insurance, and MOT renewal deadlines, leading to costly vehicle groundings.',
    researchDetails: 'Analyzed MOT and compliance certificate schemas and logistics workflows.',
    developmentDetails: 'Built vehicle tracking and scheduler reminder services connected with Postgres storage.',
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
