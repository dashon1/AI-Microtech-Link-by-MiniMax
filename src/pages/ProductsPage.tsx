import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Code, Palette, Briefcase, GraduationCap, MessageSquare, Zap, Shield, TrendingUp, CheckCircle, Clock, Bell, Mail } from 'lucide-react'
import { API_CONFIG } from '../config/api'

// Track form submission for analytics
const trackFormSubmission = (formType: string, success: boolean) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', success ? 'form_submission_success' : 'form_submission_error', {
      event_category: 'Forms',
      event_label: formType,
    });
  }
}

export default function ProductsPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleEarlyAccess = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch(API_CONFIG.NEWSLETTER_SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          signup_type: 'ara_m5_early_access' 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sign up')
      }

      setStatus('success')
      trackFormSubmission('ara_m5_early_access', true)
      setEmail('')
    } catch {
      setStatus('error')
      trackFormSubmission('ara_m5_early_access', false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full mb-6">
                <Clock size={16} />
                <span className="text-sm font-semibold">Coming Soon - In Production</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                ARA M5: The AI Super Assistant That Will Change Everything
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                One AI system. Infinite possibilities. Specialized agents that will handle any task you throw at them. Be the first to know when ARA M5 launches.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-semibold mb-4 flex items-center space-x-2">
                  <Bell size={18} />
                  <span>Join the Early Access List</span>
                </h3>
                {status === 'success' ? (
                  <div className="flex items-center space-x-2 text-green-300">
                    <CheckCircle size={20} />
                    <span>You are on the list! We will notify you when ARA M5 launches.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email for early access"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="flex-grow px-4 py-3 rounded-lg text-neutral-black"
                    />
                    <button type="submit" disabled={status === 'loading'} className="btn-accent whitespace-nowrap">
                      {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                    </button>
                  </form>
                )}
                {status === 'error' && <p className="text-red-300 mt-2 text-sm">Something went wrong. Please try again.</p>}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary px-6 py-2 rounded-full">
                  <span className="font-bold">COMING SOON</span>
                </div>
                <img src="/images/ara_m5_logo.png" alt="ARA M5" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ARA M5 */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What is ARA M5?</h2>
          <p className="text-neutral-gray-dark max-w-3xl mx-auto text-lg">
            ARA M5 is our flagship AI Super Assistant currently in development. It will use specialized AI agents, each designed and trained for specific types of tasks, ensuring optimal performance across all domains.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AgentCard icon={<Code />} title="Development Agents" desc="App building, coding, technical solutions" color="bg-blue-50" iconColor="text-blue-600" />
          <AgentCard icon={<Palette />} title="Creative Agents" desc="Content creation, design, marketing materials" color="bg-purple-50" iconColor="text-purple-600" />
          <AgentCard icon={<Briefcase />} title="Business Agents" desc="Strategy, analysis, process optimization" color="bg-green-50" iconColor="text-green-600" />
          <AgentCard icon={<GraduationCap />} title="Learning Agents" desc="Education, training, skill development" color="bg-yellow-50" iconColor="text-yellow-600" />
          <AgentCard icon={<MessageSquare />} title="Communication Agents" desc="Customer service, outreach, social media" color="bg-pink-50" iconColor="text-pink-600" />
          <AgentCard icon={<Zap />} title="Automation Agents" desc="Workflow automation, integration, optimization" color="bg-orange-50" iconColor="text-orange-600" />
        </div>
      </section>

      {/* Planned Capabilities */}
      <section className="bg-neutral-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Clock size={16} />
              <span className="text-sm font-semibold">Planned Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">What ARA M5 Will Do For You</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <CapabilityCard 
              title="Build Applications"
              items={["Create web applications and mobile apps", "Develop custom business software", "Design user interfaces and experiences", "Integrate with existing systems"]}
            />
            <CapabilityCard 
              title="Create Content"
              items={["Generate viral social media content", "Write marketing materials and copy", "Produce educational content", "Develop creative writing and stories"]}
            />
            <CapabilityCard 
              title="Solve Business Problems"
              items={["Analyze data and generate insights", "Optimize business processes", "Strategic planning and decision support", "Market research and competitive analysis"]}
            />
            <CapabilityCard 
              title="Handle Complex Tasks"
              items={["Multi-step project management", "Research and information synthesis", "Workflow automation", "Integration with multiple systems"]}
            />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Built on the World's Most Advanced AI</h2>
            <p className="text-neutral-gray-dark mb-8">
              ARA M5 will leverage cutting-edge AI technologies including the latest LLMs and our proprietary agent orchestration system to deliver unparalleled performance.
            </p>
            <div className="space-y-4">
              {[
                { icon: <TrendingUp />, text: "Multi-Model Integration" },
                { icon: <Bot />, text: "Context Awareness" },
                { icon: <Zap />, text: "Learning Capabilities" },
                { icon: <Shield />, text: "Safety & Reliability" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-primary-light/50 rounded-lg">
                  <div className="text-primary">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Use Cases We Are Building For</h3>
            <div className="space-y-4">
              <ExampleItem text="Build me a customer feedback app for my restaurant chain" />
              <ExampleItem text="Create a viral social media campaign for our product launch" />
              <ExampleItem text="Analyze our sales data and identify growth opportunities" />
              <ExampleItem text="Streamline our customer onboarding process" />
            </div>
          </div>
        </div>
      </section>

      {/* Development Updates */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on ARA M5 Development</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are working hard to bring ARA M5 to life. Join our early access list to get development updates, beta testing opportunities, and launch notifications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <UpdateCard icon={<Mail />} title="Development Updates" desc="Get monthly updates on our progress and new features" />
            <UpdateCard icon={<Bot />} title="Beta Access" desc="Be among the first to test ARA M5 before public launch" />
            <UpdateCard icon={<Bell />} title="Launch Notification" desc="Get notified the moment ARA M5 goes live" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 lg:p-12 text-white text-center">
          <Clock size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Do Not Miss the ARA M5 Launch</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            ARA M5 is currently in production and will be available soon. Sign up now to secure your spot on the early access list.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
              <span>Join Early Access List</span>
              <ArrowRight size={18} />
            </a>
            <Link to="/apps" className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors">
              Explore Our 100+ Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function AgentCard({ icon, title, desc, color, iconColor }: { icon: React.ReactNode; title: string; desc: string; color: string; iconColor: string }) {
  return (
    <div className={`${color} rounded-xl p-6 hover:shadow-lg transition-all`}>
      <div className={`${iconColor} mb-4`}>{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-neutral-gray-dark text-sm">{desc}</p>
    </div>
  )
}

function CapabilityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="font-bold text-xl mb-4 text-primary">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
            <span className="text-neutral-gray-dark">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ExampleItem({ text }: { text: string }) {
  return (
    <div className="bg-white/10 rounded-lg p-3">
      <p className="text-sm italic">"{text}"</p>
    </div>
  )
}

function UpdateCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  )
}