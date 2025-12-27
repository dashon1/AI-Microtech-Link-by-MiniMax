import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Briefcase, Lightbulb, Puzzle, MapPin, Zap, Bot, Code, LineChart, Clock } from 'lucide-react'
import { apps } from '../data/content'

export default function HomePage() {
  const featuredApps = apps.slice(0, 8)

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20 lg:py-32">
        {/* ... existing hero content ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-secondary" />
                <span className="text-sm">Small But Mighty</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                ARA M5: The Operating System for Autonomous Agents
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8">
                Orchestrate your enterprise with the world's first multi-agent neural network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-accent flex items-center justify-center space-x-2">
                  <span>ARA M5 - Coming Soon</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/apps" className="btn-secondary">
                  See Our 100+ Apps
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary px-4 py-1 rounded-full">
                  <span className="text-sm font-semibold flex items-center space-x-1">
                    <Clock size={14} />
                    <span>Coming Soon</span>
                  </span>
                </div>
                <img src="/images/ara_m5_logo.png" alt="ARA M5 AI Super Assistant" className="w-full max-w-md mx-auto" />
                <p className="text-center text-lg font-medium mt-4">ARA M5 AI Super Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Feature Banner */}
      <section className="bg-red-600 text-white py-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 mb-2 sm:mb-0">
            <span className="text-2xl">🎅</span>
            <div>
              <span className="font-bold text-lg">Holiday Special:</span>
              <span className="ml-2">Track Santa in Real-Time with our AI Tracker!</span>
            </div>
          </div>
          <a
            href="https://santa-s-ai-journey-tracker-779952728668.us-west1.run.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <span>Track Santa Now</span>
            <ArrowRight size={16} />
          </a>
        </div>
        {/* Snowflakes effect could be added here */}
      </section>

      {/* Mission Section */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-dark">
            Our Mission: Giving You Your Life Back
          </h2>
          <p className="text-lg text-neutral-gray-dark mb-8">
            We believe AI should enhance your life, not complicate it. Our mission is simple: create AI solutions that give you and your business the freedom to focus on what matters most.
          </p>
          <p className="text-xl font-semibold text-secondary">
            "Small but mighty. AI that allows us to do very big things."
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-neutral-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Platform Capabilities</h2>
          <p className="text-neutral-gray-dark text-center mb-12 max-w-2xl mx-auto">
            From pre-built agents to business automation, our platform transforms how you work.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Briefcase className="text-primary" size={32} />}
              title="Streamline Your Business"
              description="Pre-built AI Agents that automate processes, optimize workflows, and boost productivity across your organization."
              link="/services#business"
            />
            <ServiceCard
              icon={<Lightbulb className="text-secondary" size={32} />}
              title="Unleash Your Creativity"
              description="AI-powered tools for content creation, design automation, and innovative solutions that push creative boundaries."
              link="/services#creative"
            />
            <ServiceCard
              icon={<Puzzle className="text-primary" size={32} />}
              title="Solve Complex Challenges"
              description="Tailored AI applications that tackle your unique challenges with intelligent, adaptive solutions."
              link="/services#problem-solving"
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>Explore Platform</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARA M5 Feature - Coming Soon */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Clock size={16} />
              <span className="text-sm font-semibold">In Production - Coming Soon</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ARA M5: Your AI Super Assistant
            </h2>
            <p className="text-lg text-neutral-gray-dark mb-8">
              We are building ARA M5, our flagship AI Super Assistant powered by specialized agents. This will not be just another chatbot - it will be a comprehensive AI system that can build apps, create social media content, solve business problems, and handle complex tasks across multiple domains.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <FeatureItem icon={<Bot size={20} />} text="Specialized Agents" />
              <FeatureItem icon={<Code size={20} />} text="App Development" />
              <FeatureItem icon={<LineChart size={20} />} text="Business Intelligence" />
              <FeatureItem icon={<Zap size={20} />} text="Continuous Learning" />
            </div>
            <Link to="/products" className="btn-accent inline-flex items-center space-x-2">
              <span>Join Early Access List</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-gradient-to-br from-primary-light to-white rounded-2xl p-8 shadow-xl relative">
            <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
              Coming Soon
            </div>
            <img src="/images/ara_m5_logo.png" alt="ARA M5" className="w-full max-w-sm mx-auto" />
          </div>
        </div>
      </section>

      {/* Apps Gallery Preview */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">The ARA Ecosystem</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            From social media management to financial planning - our ecosystem has modules for every aspect of your enterprise.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredApps.map((app) => (
              <div key={app.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                <h4 className="font-semibold mb-1">{app.name}</h4>
                <p className="text-sm text-gray-300">{app.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/apps" className="btn-accent inline-flex items-center space-x-2">
              <span>Browse All Apps</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Florida Section Removed */}

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join the waitlist and discover how ARA M5 can orchestrate your success.
          </p>
          <Link to="/signup" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Join Waitlist
          </Link>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <Link to={link} className="card hover:scale-105 group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-neutral-gray-dark">{description}</p>
    </Link>
  )
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 text-neutral-gray-dark">
      <div className="text-primary">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  )
}
