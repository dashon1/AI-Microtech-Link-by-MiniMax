import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Building2, Stethoscope, TrendingUp, Factory, Users, CheckCircle, Star } from 'lucide-react'
import { counties } from '../data/content'

export default function FloridaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin size={24} className="text-secondary" />
            <span className="font-semibold">Based in Clearwater</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Your Local AI Partner in Florida</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Serving Hillsborough, Pinellas, Pasco, Sarasota/Manatee, and Polk Counties with AI solutions that understand local needs.
          </p>
        </div>
      </section>

      {/* Counties Grid */}
      <section className="section-container">
        <h2 className="text-3xl font-bold text-center mb-4">Serving Five Key Florida Counties</h2>
        <p className="text-neutral-gray-dark text-center mb-12 max-w-2xl mx-auto">
          We provide AI development and consulting services throughout the Tampa Bay region and Central Florida.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counties.map((county, i) => (
            <CountyCard key={i} county={county} />
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-neutral-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Florida Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="AI Microtech Link helped us streamline our patient scheduling and billing processes, saving us 15 hours per week and improving patient satisfaction."
              type="Healthcare Practice Automation"
              location="Pinellas County"
            />
            <TestimonialCard 
              quote="Their AI solutions helped us reduce waste by 23% and improve our production efficiency. The ROI was evident within the first quarter."
              type="Manufacturing Optimization"
              location="Polk County"
            />
            <TestimonialCard 
              quote="ARA M5 helped us create engaging social media content consistently, increasing our engagement by 340% and driving more bookings."
              type="Tourism Marketing"
              location="Hillsborough County"
            />
            <TestimonialCard 
              quote="Their property management AI solutions reduced our administrative overhead by 40% while improving tenant satisfaction."
              type="Real Estate Management"
              location="Sarasota County"
            />
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Advantage of Local AI Service</h2>
            <p className="text-neutral-gray-dark mb-8">
              Working with a local AI company means personal service, cultural understanding, and rapid response when you need it.
            </p>
            <div className="space-y-4">
              {[
                "Personal service - direct access to our team",
                "Cultural understanding - we know Florida business",
                "Rapid response - quick turnaround for urgent projects",
                "Local networking - connections with other businesses",
                "Community investment - your success grows Florida"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary-dark text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Florida AI Market Insights</h3>
            <div className="space-y-4">
              <StatItem value="58%" label="of Florida small businesses using AI" />
              <StatItem value="Top 10" label="Tampa Bay ranks among emerging AI hubs" />
              <StatItem value="30%" label="IT job growth in Tampa over 5 years" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Florida's AI Experts?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation about how AI can benefit your Florida business.
          </p>
          <Link to="/contact" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Schedule Free Consultation</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function CountyCard({ county }: { county: { name: string; city: string; focus: string[] } }) {
  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <MapPin className="text-primary" size={24} />
        <div>
          <h3 className="font-semibold text-lg">{county.name}</h3>
          <p className="text-sm text-neutral-gray">{county.city}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-neutral-gray-dark mb-3">Focus Areas:</p>
      <div className="flex flex-wrap gap-2">
        {county.focus.map((item, i) => (
          <span key={i} className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ quote, type, location }: { quote: string; type: string; location: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center space-x-1 mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} className="text-secondary fill-secondary" size={16} />)}
      </div>
      <p className="text-neutral-gray-dark mb-4 italic">"{quote}"</p>
      <div className="border-t pt-4">
        <p className="font-semibold">{type}</p>
        <p className="text-sm text-neutral-gray">{location}</p>
      </div>
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/10 rounded-lg p-4">
      <p className="text-2xl font-bold text-secondary">{value}</p>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  )
}
