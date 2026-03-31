export const apps = [
  // ── Real Available Apps ──────────────────────────────────────────────────
  {
    id: 'revenueforge',
    name: "RevenueForge",
    category: "Business",
    description: "Missed call text-back and lead management. Turn missed calls into booked appointments automatically.",
    icon: "TrendingUp",
    status: "Live" as const,
    available: true,
    setupFee: 97,
    monthlyPrice: 47,
    longDescription: "RevenueForge automatically sends a personalized text to every caller you miss. When someone calls and hangs up, they instantly receive an SMS from your business — keeping them engaged and giving you a second chance to win their business.\n\nIncludes a full lead management dashboard to track every prospect from first contact to closed deal. Move leads through NEW → CONTACTED → BOOKED → WON with one click.",
  },
  {
    id: 'reachrecover',
    name: "ReachRecover AI",
    category: "Business",
    description: "AI-powered missed call recovery with automated SMS responses and intelligent lead tracking.",
    icon: "Sparkles",
    status: "Live" as const,
    available: true,
    setupFee: 97,
    monthlyPrice: 97,
    longDescription: "ReachRecover AI goes beyond basic text-back. It uses AI to craft personalized responses, qualify leads automatically, and route hot prospects directly to your calendar.\n\nBuilt for service businesses that can't afford to lose a single lead. Every missed call triggers an instant, professional follow-up that sounds like it came from you — not a bot.",
  },
  {
    id: 'pridereach',
    name: "PrideReach",
    category: "Social Media",
    description: "Inclusive community management and multi-tier marketing platform for modern businesses.",
    icon: "Heart",
    status: "Live" as const,
    available: true,
    monthlyPrice: 299,
    priceLabel: "From $299/mo",
    longDescription: "PrideReach is a comprehensive community management and marketing platform with tiered plans for every stage of growth.\n\nGetting Started ($299–$599/mo): Core community tools, basic campaigns, standard analytics.\n\nGrowth Focused ($699–$1,199/mo): Advanced automation, A/B testing, priority support, expanded reach.\n\nMarket Leadership ($1,499–$2,199/mo): Full white-glove service, dedicated account manager, enterprise integrations, unlimited campaigns.\n\nAdd-ons available for all tiers.",
  },
  {
    id: 'kaloscan',
    name: "KaloriScan",
    category: "Health",
    description: "AI food scanning and calorie tracking with personalized nutrition insights and meal planning.",
    icon: "Activity",
    status: "Beta" as const,
    available: true,
    priceLabel: "Contact for pricing",
    longDescription: "KaloriScan uses AI-powered image recognition to instantly identify food items and calculate nutritional content. Just snap a photo of your meal and get detailed calories, macros, and personalized recommendations.\n\nPerfect for health-conscious users, dietitians, and wellness apps looking for an accurate, effortless nutrition tracking experience.",
  },
  {
    id: 'yieldflow',
    name: "YieldFlow",
    category: "Finance",
    description: "Revenue optimization and financial forecasting platform for modern businesses.",
    icon: "LineChart",
    status: "Beta" as const,
    available: true,
    priceLabel: "Contact for pricing",
    longDescription: "YieldFlow gives you real-time visibility into your revenue streams, cash flow, and growth opportunities. Connect your existing tools and let AI identify the fastest path to increased profitability.\n\nBuilt for small to mid-size businesses ready to stop guessing and start growing with data-driven decisions.",
  },
  {
    id: 'haullogic',
    name: "HaulLogic",
    category: "Logistics",
    description: "Hauling and logistics management with route optimization, job tracking, and customer management.",
    icon: "Map",
    status: "Live" as const,
    available: true,
    priceLabel: "Contact for pricing",
    longDescription: "HaulLogic is purpose-built for hauling and dump trailer businesses. Manage jobs, optimize routes, track drivers, and invoice customers — all in one platform designed for the way you actually work.\n\nNo more spreadsheets, no more missed jobs. HaulLogic keeps your operation running tight.",
  },
  {
    id: 'lawprep',
    name: "LawPrep AI",
    category: "Professional",
    description: "AI-powered legal research assistance and document preparation for legal professionals.",
    icon: "Scale",
    status: "Beta" as const,
    available: true,
    priceLabel: "Contact for pricing",
    longDescription: "LawPrep AI accelerates legal research and document drafting. Search case law, generate document templates, and get AI-assisted analysis — saving hours on every matter.\n\nBuilt for solo practitioners, small firms, and paralegals who need the power of a full research team without the overhead.",
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
