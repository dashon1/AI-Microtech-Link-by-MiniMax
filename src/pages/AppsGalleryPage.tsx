import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, Film, Calculator, QrCode, Heart, Sparkles, CloudRain, Map, Activity, TrendingUp, Languages, Music, LineChart, Users, CreditCard, Code, Home, Scale, Wand2, Sun, LayoutGrid, Shield } from 'lucide-react'
import { apps, categories } from '../data/content'

const iconMap: Record<string, React.ReactNode> = {
  Film: <Film size={24} />,
  Calculator: <Calculator size={24} />,
  QrCode: <QrCode size={24} />,
  Heart: <Heart size={24} />,
  Sparkles: <Sparkles size={24} />,
  CloudRain: <CloudRain size={24} />,
  Map: <Map size={24} />,
  Activity: <Activity size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Languages: <Languages size={24} />,
  Music: <Music size={24} />,
  LineChart: <LineChart size={24} />,
  Users: <Users size={24} />,
  CreditCard: <CreditCard size={24} />,
  Code: <Code size={24} />,
  Home: <Home size={24} />,
  Scale: <Scale size={24} />,
  Wand2: <Wand2 size={24} />,
  Sun: <Sun size={24} />,
  LayoutGrid: <LayoutGrid size={24} />,
  Shield: <Shield size={24} />
}

export default function AppsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredApps = apps.filter(app => {
    const matchesCategory = selectedCategory === "All" || app.category === selectedCategory
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">100+ AI Applications</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Explore our comprehensive library of AI applications designed for businesses, individuals, and organizations across all industries.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-gray" size={20} />
              <input
                type="text"
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-neutral-gray-dark hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="section-container">
        <p className="text-neutral-gray-dark mb-8">{filteredApps.length} applications found</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div key={app.id} className="card group hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary">
                  {iconMap[app.icon] || <Sparkles size={24} />}
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{app.name}</h3>
                  <span className="text-sm text-secondary">{app.category}</span>
                </div>
              </div>
              <p className="text-sm text-neutral-gray-dark">{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Solution CTA */}
      <section className="bg-neutral-gray-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-neutral-gray-dark mb-8">
            Do not see exactly what you are looking for? We specialize in creating custom AI applications tailored to your specific needs and requirements.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Request Custom Development</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
