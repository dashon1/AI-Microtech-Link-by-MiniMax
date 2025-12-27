import { Link } from 'react-router-dom'
import { ArrowRight, Code, Cog, TrendingUp, Users, Brain, Cloud, Shield, Zap, CheckCircle } from 'lucide-react'
import { services } from '../data/content'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Platform Features & Capabilities</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From autonomous agents to enterprise scale - our platform solves real problems and drives real results.
          </p>
        </div>
      </section>

      {/* AI Development Services */}
      <section id="business" className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Scalable AI Infrastructure</h2>
            <p className="text-neutral-gray-dark mb-6">
              Deploy tailored AI agents using the most advanced language models and AI technologies. From simple automation tools to complex multi-agent systems, our platform adapts to your specific needs.
            </p>
            <div className="space-y-4">
              {["Autonomous Agent Orchestration", "LLM integration and optimization", "Multi-agent system architecture", "API development and integration", "Proprietary Model Fine-tuning"].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary-light rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <IconBox icon={<Code />} label="Agent Core" />
              <IconBox icon={<Brain />} label="AI Models" />
              <IconBox icon={<Cloud />} label="Cloud Deploy" />
              <IconBox icon={<Shield />} label="Security" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section id="creative" className="bg-neutral-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-primary">Industry Verticals</h3>
              <div className="space-y-4">
                {["Healthcare and medical practices", "Financial services and consulting", "Education and training organizations", "Manufacturing and logistics", "Retail and e-commerce"].map((item) => (
                  <div key={item} className="flex items-center space-x-3 p-3 bg-primary-light/50 rounded-lg">
                    <TrendingUp className="text-primary" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Business Optimization</h2>
              <p className="text-neutral-gray-dark mb-6">
                Transform your business operations with AI solutions that streamline workflows, reduce costs, and increase efficiency. Our business-focused AI applications are designed to deliver measurable results.
              </p>
              <div className="space-y-4">
                {["Process automation and optimization", "Customer behavior analysis", "Financial planning and forecasting", "Marketing automation"].map((item) => (
                  <div key={item} className="flex items-start space-x-3">
                    <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="problem-solving" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our "Small But Mighty" Methodology</h2>
          <p className="text-neutral-gray-dark max-w-2xl mx-auto">
            Just like our company philosophy, we approach every project with intensity and focus. We may be small, but we deliver big results through intelligent design and cutting-edge AI technology.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { step: "1", title: "Discovery", desc: "Understanding your challenges" },
            { step: "2", title: "Strategy", desc: "Creating AI roadmap" },
            { step: "3", title: "Development", desc: "Building solutions" },
            { step: "4", title: "Testing", desc: "Ensuring performance" },
            { step: "5", title: "Deployment", desc: "Seamless integration" }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-gray-dark">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Powered by the World's Best AI</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            We use all the top AI models and LLMs to ensure your solutions are built on the most advanced foundations available.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <TechCard title="Large Language Models" desc="GPT, Claude, Gemini, and other leading LLMs" icon={<Brain size={32} />} />
            <TechCard title="Specialized AI Agents" desc="Custom agents for specific tasks and domains" icon={<Users size={32} />} />
            <TechCard title="Cloud Infrastructure" desc="Scalable, secure, and reliable deployment" icon={<Cloud size={32} />} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join the waitlist to discuss your enterprise needs and discover how our platform can orchestrate your success.
          </p>
          <Link to="/signup" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Join Waitlist</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function IconBox({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-md">
      <div className="text-primary mb-2 flex justify-center">{icon}</div>
      <span className="font-medium text-sm">{label}</span>
    </div>
  )
}

function TechCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  )
}
