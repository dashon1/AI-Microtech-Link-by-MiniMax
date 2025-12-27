import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Platform', path: '/services' },
  { name: 'ARA M5', path: '/products', badge: 'Soon' },
  { name: 'Apps', path: '/apps' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
] as const

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Holiday Special Banner */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm">🎄</span>
              <span className="text-sm font-medium">Holiday Special: Track Santa in Real-Time with our AI Tracker!</span>
            </div>
            <Link
              to="/santa-signup"
              className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Track Santa Now →
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/ai_microtech_logo_main.png" alt="AI Microtech Link" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${location.pathname === link.path
                  ? 'text-primary'
                  : 'text-neutral-black hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-neutral-black'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
