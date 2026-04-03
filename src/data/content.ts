export const apps = [
  // ── Live — Early Access Lifetime Deal ────────────────────────────────────
  {
    id: 'kaloscan',
    name: "KaloriScan",
    link: "https://kaloriscan-app.vercel.app",
    category: "Health",
    description: "AI food scanning and calorie tracking with personalized nutrition insights and meal planning.",
    icon: "Activity",
    status: "Beta" as const,
    available: true,
    priceLabel: "From $49 lifetime",
    stripePrices: [
      { label: "Monthly", price: "$9.99/mo", priceId: "price_1TF3X50xw5o9mCvnzt3wvbhF", mode: "subscription" as const },
      { label: "Annual", price: "$95.90/yr", savings: "Save 20%", priceId: "price_1TF3d70xw5o9mCvnNSGmCZfv", mode: "subscription" as const },
    ],
    longDescription: "KaloriScan uses AI-powered image recognition to instantly identify food items and calculate nutritional content. Just snap a photo of your meal and get detailed calories, macros, and personalized recommendations.\n\nStarter ($49 one-time): Photo-based calorie tracking, instant nutrition breakdowns, basic AI insights, 30-day food journal history.\n\nPro ($99 one-time): Personalized calorie and macro goals, real-time progress tracking, advanced AI insights, 1-year food journal, basic AI coaching.\n\nElite ($199 one-time): Unlimited food journal history, advanced AI Nutrition Coach with custom advice and weekly tips, detailed analytics, priority support.\n\nEarly access pricing — limited spots available.",
  },
  {
    id: 'batchright',
    name: "BatchRight",
    link: "https://batchright-app.vercel.app",
    category: "Food Business",
    description: "AI-powered yield tracking and ingredient cost calculator for food businesses. Know your true cost per plate and maximize profit margins.",
    icon: "Wand2",
    status: "Beta" as const,
    available: true,
    priceLabel: "From $49 lifetime",
    stripePrices: [
      { label: "Monthly", price: "$9.99/mo", priceId: "price_1THzJL0xw5o9mCvnPKQ9EW4z", mode: "subscription" as const },
      { label: "Annual", price: "$95.90/yr", savings: "Save 20%", priceId: "price_1THzJL0xw5o9mCvnTK14O74J", mode: "subscription" as const },
    ],
    longDescription: "BatchRight is built for food businesses that need to know their real numbers. Track ingredient costs, calculate true cost per plate, and scale recipes from 2 to 200 servings instantly — so you always know your margins before you price a menu or take a catering job.\n\nStarter ($49 one-time): Core yield tracker, cost-per-plate calculator, save up to 50 recipes, PDF export.\n\nFood Business ($79 one-time): Unlimited recipes, full ingredient cost tracking, shopping list generator, AI Recipe Assistant.\n\nCommercial Pro ($149 one-time): Full profit margin analysis, white-label PDF exports with your branding, multi-location support, priority support.\n\nEarly access pricing — limited spots available.",
  },

  {
    id: 'hit',
    name: "HIT — Health Intelligence Tracker",
    link: "https://hit-real.vercel.app",
    category: "Health",
    description: "Emergency-ready AI health platform. Track symptoms, meds, and mood — with one-tap Safety Beacon and AI-powered pattern insights.",
    icon: "Activity",
    status: "Beta" as const,
    available: true,
    priceLabel: "From $9.99/mo",
    stripePrices: [
      { label: "Monthly", price: "$14.99/mo", priceId: "price_1THzJL0xw5o9mCvn8IbOsm3P", mode: "subscription" as const },
      { label: "Annual", price: "$143.90/yr", savings: "Save 20%", priceId: "price_1THzJL0xw5o9mCvnlk8Xq4oO", mode: "subscription" as const },
    ],
    longDescription: "HIT is the first comprehensive health platform combining AI-powered insights, emergency response protocols, and sonic therapy for total well-being.\n\nPersonal ($9.99/mo): Medication + symptom tracking, Safety Beacon emergency alerts with GPS, basic AI health insights, Sonic Therapy sessions.\n\nPremium ($19.99/mo): Full AI correlation engine (sleep vs pain vs meds vs weather), unlimited history, all soundscapes, family sharing up to 3 members.\n\nPro ($34.99/mo): Caregiver dashboard, exportable health reports, unlimited family members, priority support, Home Alone check-in mode.\n\nYour data stays on your device — nothing is stored on external servers.",
  },

  // ── Coming Soon ───────────────────────────────────────────────────────────
  {
    id: 'revenueforge',
    name: "RevenueForge",
    category: "Business",
    description: "Missed call text-back and lead management. Turn missed calls into booked appointments automatically.",
    icon: "TrendingUp",
    status: "Coming Soon" as const,
    available: false,
    longDescription: "RevenueForge automatically sends a personalized text to every caller you miss. When someone calls and hangs up, they instantly receive an SMS from your business — keeping them engaged and giving you a second chance to win their business.\n\nIncludes a full lead management dashboard to track every prospect from first contact to closed deal. Move leads through NEW → CONTACTED → BOOKED → WON with one click.",
  },
  {
    id: 'reachrecover',
    name: "ReachRecover AI",
    link: "https://reachrecover-ai-779952728668.us-west1.run.app",
    category: "Business",
    description: "AI-powered missed call recovery with automated SMS responses and intelligent lead tracking.",
    icon: "Sparkles",
    status: "Beta" as const,
    available: true,
    priceLabel: "Contact for pricing",
    longDescription: "ReachRecover AI goes beyond basic text-back. It uses AI to craft personalized responses, qualify leads automatically, and route hot prospects directly to your calendar.\n\nBuilt for service businesses that can't afford to lose a single lead. Every missed call triggers an instant, professional follow-up that sounds like it came from you — not a bot.",
  },
  {
    id: 'pridereach',
    name: "PrideReach",
    link: "https://pridereach-app.vercel.app",
    category: "Social Media",
    description: "Inclusive community management and multi-tier marketing platform for modern businesses.",
    icon: "Heart",
    status: "Beta" as const,
    available: true,
    priceLabel: "From $97/mo",
    pricingTabs: [
      {
        label: "Self-Service",
        description: "You run it. We give you the platform.",
        stripePrices: [
          { label: "Starter Monthly", price: "$97/mo", priceId: "price_1THzJM0xw5o9mCvneOXvxZM6", mode: "subscription" as const },
          { label: "Starter Annual", price: "$931.20/yr", savings: "Save 20%", priceId: "price_1THzJM0xw5o9mCvnzJKA2jYI", mode: "subscription" as const },
          { label: "Growth Monthly", price: "$197/mo", priceId: "price_1THzJN0xw5o9mCvnacmMCW98", mode: "subscription" as const },
          { label: "Growth Annual", price: "$1,891.20/yr", savings: "Save 20%", priceId: "price_1THzJN0xw5o9mCvnUIkeCZXj", mode: "subscription" as const },
          { label: "Scale Monthly", price: "$397/mo", priceId: "price_1THzJO0xw5o9mCvnSeiV5AOU", mode: "subscription" as const },
          { label: "Scale Annual", price: "$3,811.20/yr", savings: "Save 20%", priceId: "price_1THzJO0xw5o9mCvn6zlUCDNB", mode: "subscription" as const },
        ],
      },
      {
        label: "Done-For-You",
        description: "We manage everything. You get results.",
        contactOnly: true,
        stripePrices: [
          { label: "Getting Started", price: "$1,499/mo", description: "Up to 12 platforms, 25 posts/mo, mixed content types, advanced strategy", priceId: "price_PRIDEREACH_DFY_START", mode: "subscription" as const },
          { label: "Market Leader", price: "$1,699/mo", description: "Up to 15 platforms, 30+ posts/mo, advanced content, strategic planning, dedicated support", priceId: "price_PRIDEREACH_DFY_LEADER", mode: "subscription" as const },
          { label: "Brand Authority", price: "$1,899/mo", description: "Up to 16 platforms, thought leadership, executive positioning, premium support", priceId: "price_PRIDEREACH_DFY_BRAND", mode: "subscription" as const },
          { label: "Integrated Powerhouse", price: "$2,199/mo", description: "Up to 17 platforms, integrated campaigns, full-service management, dedicated account manager", priceId: "price_PRIDEREACH_DFY_POWER", mode: "subscription" as const },
        ],
      },
    ],
    longDescription: "PrideReach is a comprehensive community management and marketing platform — use it yourself or let our team run it for you.\n\nSelf-Service plans give you full access to the platform to manage your own community, campaigns, and analytics.\n\nDone-For-You plans put our team to work — we handle content creation, platform management, strategy, and reporting across up to 17 platforms.",
  },
  {
    id: 'haullogic',
    name: "HaulLogic",
    category: "Logistics",
    description: "Hauling and logistics management with route optimization, job tracking, and customer management.",
    icon: "Map",
    status: "Coming Soon" as const,
    available: false,
    longDescription: "HaulLogic is purpose-built for hauling and dump trailer businesses. Manage jobs, optimize routes, track drivers, and invoice customers — all in one platform designed for the way you actually work.\n\nNo more spreadsheets, no more missed jobs. HaulLogic keeps your operation running tight.",
  },
  {
    id: 'lawprep',
    name: "LawPrep AI",
    link: "https://lawprep-ai-app.vercel.app",
    category: "Professional",
    description: "AI-powered legal research assistance and document preparation for legal professionals.",
    icon: "Scale",
    status: "Beta" as const,
    available: true,
    priceLabel: "From $29/mo",
    stripePrices: [
      { label: "Monthly", price: "$29/mo", priceId: "price_1TFMr70xw5o9mCvnVBQl1VPE", mode: "subscription" as const },
      { label: "Annual", price: "$278.40/yr", savings: "Save 20%", priceId: "price_1THzJM0xw5o9mCvnRMuBHaAV", mode: "subscription" as const },
    ],
    longDescription: "LawPrep AI accelerates legal research and document drafting. Search case law, generate document templates, and get AI-assisted analysis — saving hours on every matter.\n\nSolo ($29/mo): Case law search, 10 document templates/month, basic AI drafting assistance.\n\nFirm ($79/mo): Unlimited templates, advanced AI analysis, team access up to 3 seats.\n\nBuilt for solo practitioners, small firms, and paralegals who need the power of a full research team without the overhead.",
  },

  // ── Placeholder / Future Apps ────────────────────────────────────────────
  { id: 'santa-tracker', name: "Santa Tracker", category: "Holiday", description: "Real-time Santa tracking dashboard with holiday games and countdown", icon: "Map", status: "Live" as const, link: "https://santatracker.google.com" },
  { id: 1, name: "Directors Studio", category: "Creative", description: "AI-powered creative production and content planning platform", icon: "Film" },
  { id: 2, name: "Math Hero", category: "Education", description: "Intelligent math tutoring with adaptive learning pathways", icon: "Calculator" },
  { id: 3, name: "PixQR", category: "Social Media", description: "Smart QR code generation with analytics and custom branding", icon: "QrCode" },
  { id: 5, name: "SaaS Genie", category: "Business", description: "Business automation platform with workflow optimization", icon: "Sparkles" },
  { id: 6, name: "WeatherShield", category: "Logistics", description: "Predictive weather analysis and risk assessment", icon: "CloudRain" },
  { id: 7, name: "CityLink", category: "Logistics", description: "Urban planning, route optimization, and transportation analytics", icon: "Map" },
  { id: 8, name: "Rehab-E-Cam", category: "Health", description: "Rehabilitation therapy assistance with progress tracking", icon: "Activity" },
  { id: 10, name: "LinguaConnect", category: "Education", description: "Language learning platform with real-time translation", icon: "Languages" },
  { id: 11, name: "Tempo Tutor", category: "Education", description: "Music education, rhythm training, and performance analysis", icon: "Music" },
  { id: 12, name: "InvestSmart", category: "Finance", description: "AI-driven investment guidance and portfolio optimization", icon: "LineChart" },
  { id: 13, name: "FamilyHub", category: "Business", description: "Family organization, schedule management, and communication", icon: "Users" },
  { id: 14, name: "SubScribe", category: "Business", description: "Subscription management and billing automation", icon: "CreditCard" },
  { id: 15, name: "U Code", category: "Professional", description: "Coding assistance, code review, and development workflow", icon: "Code" },
  { id: 16, name: "PawRentals", category: "Property", description: "Pet-friendly rental management and tenant matching", icon: "Home" },
  { id: 17, name: "LegalEase", category: "Professional", description: "Legal document automation and contract analysis", icon: "Scale" },
  { id: 18, name: "Prompt Foundry", category: "Social Media", description: "AI prompt generation and content strategy planning", icon: "Wand2" },
  { id: 19, name: "BrightSeason", category: "Creative", description: "Seasonal marketing optimization and campaign planning", icon: "Sun" },
  { id: 20, name: "GridFlow", category: "Business", description: "Data visualization, process mapping, and performance monitoring", icon: "LayoutGrid" },
  { id: 21, name: "ChargeGuard", category: "Finance", description: "Payment security, fraud prevention, and transaction monitoring", icon: "Shield" }
];

export const categories = ["All", "Business", "Social Media", "Health", "Finance", "Professional", "Logistics", "Education", "Creative", "Property", "Holiday"];

export const services = [
  {
    title: "Autonomous Enterprise Infrastructure",
    description: "Deployable AI Agents for Enterprise Scale.",
    features: ["Autonomous Agent Orchestration", "LLM integration", "Multi-agent systems", "API development"]
  },
  {
    title: "Enterprise Workflow Orchestration",
    description: "Transform operations with AI solutions that streamline workflows and reduce costs.",
    features: ["Process automation", "Customer analysis", "Inventory management", "Marketing automation"]
  },
  {
    title: "Strategic AI Implementation",
    description: "Expert guidance on AI implementation and digital transformation.",
    features: ["AI roadmap planning", "Technology assessment", "ROI analysis", "Training programs"]
  }
];

export const counties = [];
