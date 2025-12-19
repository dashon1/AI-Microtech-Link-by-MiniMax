import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Globe, Heart, Lightbulb, Users, Target, Zap, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Small But Mighty: The AI Microtech Link Story</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Based in Clearwater, Florida, we are a small team doing big things in AI
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-neutral-gray-dark mb-4">
              AI Microtech Link was founded with a simple but powerful vision: to make advanced AI technology accessible and practical for businesses and individuals everywhere. Based in beautiful Clearwater, Florida, we understand that great things often come in small packages.
            </p>
            <p className="text-neutral-gray-dark mb-4">
              Our "small but mighty" philosophy drives everything we do. We are not a massive corporation with endless bureaucracy - we are a focused team of AI experts who believe that intelligence, creativity, and innovation matter more than company size.
            </p>
            <p className="text-secondary font-semibold text-lg">
              AI has allowed us to be small but do very big things.
            </p>
          </div>
          <div className="bg-primary-light rounded-2xl p-8">
            <img src="/images/ai_microtech_logo_main.png" alt="AI Microtech Link" className="w-full max-w-sm mx-auto" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-neutral-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission: Giving You Your Life Back</h2>
            <p className="text-neutral-gray-dark max-w-2xl mx-auto">
              We believe that technology should enhance your life, not complicate it. Our mission is to create AI solutions that free you from routine tasks and complex challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <ValueCard icon={<Target />} title="Accessibility" desc="Making AI technology available to everyone" />
            <ValueCard icon={<Lightbulb />} title="Practicality" desc="Creating solutions that solve real problems" />
            <ValueCard icon={<Zap />} title="Innovation" desc="Pushing the boundaries of what is possible" />
            <ValueCard icon={<MapPin />} title="Local Connection" desc="Maintaining our Florida roots" />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              {[
                { icon: <Users />, title: "Personal Service", desc: "Direct access to our team, no endless support tickets" },
                { icon: <MapPin />, title: "Local Understanding", desc: "We understand Florida business culture and needs" },
                { icon: <Zap />, title: "Rapid Development", desc: "Small team, fast decisions, quick implementation" },
                { icon: <Award />, title: "Quality Focus", desc: "Every project receives our full attention and expertise" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-neutral-gray-dark">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">The "Small But Mighty" Methodology</h2>
            <p className="text-neutral-gray-dark mb-4">
              Our approach combines cutting-edge AI technology with practical, hands-on service. We do not just build AI solutions - we become partners in your success.
            </p>
            <p className="text-neutral-gray-dark">
              We use all the top AI models and LLMs to ensure our solutions are built on the most advanced foundations available.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="bg-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe size={24} className="text-secondary" />
                <span className="font-semibold">Worldwide Service, Florida Roots</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Global Reach, Local Touch</h2>
              <p className="text-gray-300 mb-6">
                Thanks to AI technology, we can serve clients anywhere in the world while maintaining the personal touch of a local Florida company. Our remote-first approach allows us to provide global service with local customer care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold">Primary</p>
                  <p className="text-sm text-gray-300">Florida Counties</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold">Secondary</p>
                  <p className="text-sm text-gray-300">United States</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 col-span-2">
                  <p className="font-semibold">Global</p>
                  <p className="text-sm text-gray-300">Worldwide via remote services</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <MapPin size={64} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">Clearwater, Florida</h3>
                <p className="text-gray-300">Proudly Based in the Sunshine State</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you are looking for AI solutions for your business or want to learn more about how AI can improve your life, we are here to help.
          </p>
          <Link to="/contact" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Start Your AI Journey</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-md">
      <div className="text-primary mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-neutral-gray-dark">{desc}</p>
    </div>
  )
}
