import appsData from './apps.json';

export const apps = appsData;

export const categories = [
  "All",
  "Business",
  "Health",
  "Food Business",
  "Social Media",
  "Logistics",
  "Professional",
  "Web App",
  "AI Tool",
  "Tool",
  "Real Estate",
  "Education",
  "Finance",
  "Entertainment"
];

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

export const counties: { name: string; city: string; focus: string[] }[] = [];

export const heroContent = {
  title: "AI Microtech Link",
  subtitle: "Your Gateway to the Future of AI Micro-Solutions",
  description: "Explore our curated collection of AI-powered applications designed to streamline your business and personal workflows.",
};
