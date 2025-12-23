import { useState } from 'react'
import { ArrowRight, Mail, User, CheckCircle, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SantaSignupPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-green-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🎅 Welcome to the Magic!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for joining our AI Santa Tracker community! 
            Get ready to follow Santa's magical journey around the world.
          </p>
          <a 
            href="https://santa-s-ai-journey-tracker-779952728668.us-west1.run.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent w-full flex items-center justify-center space-x-2"
          >
            <span>🎄 Start Tracking Santa Now</span>
            <ArrowRight size={18} />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            The link will open in a new window
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-green-600 text-white p-8 text-center">
          <div className="text-4xl mb-4">🎅✨</div>
          <h1 className="text-3xl font-bold mb-2">
            AI Santa Tracker
          </h1>
          <p className="text-red-100">
            Get exclusive access to track Santa's magical journey in real-time!
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Christmas Magic
            </h2>
            <p className="text-gray-600">
              Be the first to know where Santa is every moment of Christmas Eve. 
              Get exclusive updates and AI-powered insights into his journey!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <div className="text-green-600 mt-1">✨</div>
                <div>
                  <h4 className="font-medium text-green-800">What You'll Get:</h4>
                  <ul className="text-sm text-green-700 mt-1 space-y-1">
                    <li>• Real-time Santa tracking updates</li>
                    <li>• AI-powered journey insights</li>
                    <li>• Exclusive Christmas content</li>
                    <li>• Early access to new AI apps</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Joining the Magic...</span>
                </>
              ) : (
                <>
                  <span>🎁 Get Santa Access Now</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              By signing up, you agree to receive updates about Santa's journey and our latest AI innovations.
              We respect your privacy and you can unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
