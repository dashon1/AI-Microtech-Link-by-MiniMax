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
      { label: "Starter", price: "$49", description: "Photo calorie tracking, basic AI insights, 30-day history", priceId: "price_KALORISCAN_STARTER", mode: "payment" as const },
      { label: "Pro", price: "$99", description: "Personalized goals, real-time tracking, 1-year history, AI coaching", priceId: "price_KALORISCAN_PRO", mode: "payment" as const },
      { label: "Elite", price: "$199", description: "Unlimited history, advanced AI Nutrition Coach, detailed analytics, priority support", priceId: "price_KALORISCAN_ELITE", mode: "payment" as const },
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
      { label: "Home Cook", price: "$49", description: "Core recipe scaler, 50 saved recipes, PDF export, basic meal planner", priceId: "price_BATCHRIGHT_HOME", mode: "payment" as const },
      { label: "Meal Prepper", price: "$79", description: "Unlimited recipes, shopping list generator, full meal planner, AI Recipe Assistant", priceId: "price_BATCHRIGHT_PREP", mode: "payment" as const },
      { label: "Caterer", price: "$149", description: "Nutrition tracking, white-label PDF exports, recipe sharing, priority support", priceId: "price_BATCHRIGHT_CATER", mode: "payment" as const },
    ],
    longDescription: "BatchRight eliminates the guesswork of recipe math. Scale any recipe from 2 servings to 200 with one tap — ingredients, quantities, and nutrition all update instantly.\n\nHome Cook ($49 one-time): Core recipe scaler, save up to 50 recipes, PDF export, basic meal planner.\n\nMeal Prepper ($79 one-time): Unlimited recipes, automated shopping list generation, full meal planner, AI Recipe Assistant (find recipes by ingredients you already have).\n\nCaterer ($149 one-time): Nutrition tracking per scaled serving, white-label PDF exports with your branding, recipe sharing and collaboration links, priority support.\n\nEarly access pricing — limited spots available.",
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
      { label: "Personal", price: "$9.99/mo", description: "Medication + symptom tracking, Safety Beacon, basic AI insights, Sonic Therapy", priceId: "price_HIT_PERSONAL", mode: "subscription" as const },
      { label: "Premium", price: "$19.99/mo", description: "Full AI correlation engine, unlimited history, all soundscapes, family sharing (3 members)", priceId: "price_HIT_PREMIUM", mode: "subscription" as const },
      { label: "Pro", price: "$34.99/mo", description: "Caregiver dashboard, exportable health reports, unlimited family members, Home Alone check-in, priority support", priceId: "price_HIT_PRO", mode: "subscription" as const },
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
          { label: "Starter", price: "$97/mo", description: "Core community tools, basic campaigns, standard analytics, up to 1,000 members", priceId: "price_PRIDEREACH_START", mode: "subscription" as const },
          { label: "Growth", price: "$197/mo", description: "Advanced automation, A/B testing, priority support, up to 10,000 members", priceId: "price_PRIDEREACH_GROWTH", mode: "subscription" as const },
          { label: "Scale", price: "$397/mo", description: "Unlimited members, enterprise integrations, unlimited campaigns, white-label ready", priceId: "price_PRIDEREACH_SCALE", mode: "subscription" as const },
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
      { label: "Solo", price: "$29/mo", description: "Case law search, 10 document templates/mo, basic AI drafting", priceId: "price_LAWPREP_SOLO", mode: "subscription" as const },
      { label: "Firm", price: "$79/mo", description: "Unlimited templates, advanced AI analysis, team access (3 seats)", priceId: "price_LAWPREP_FIRM", mode: "subscription" as const },
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
