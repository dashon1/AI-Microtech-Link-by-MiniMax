import { useState } from 'react'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    service_interest: '', county: '', message: ''
  })
  const [newsletter, setNewsletter] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setErrorMessage('')

    // Construct mailto link
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service_interest}
Location: ${formData.county}

Message:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:dashonmcfarlanemarketing@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoUrl;

    setSubmitStatus('success')
    trackFormSubmission('contact_form', true)
    setFormData({ name: '', email: '', phone: '', company: '', service_interest: '', county: '', message: '' })
  }

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')

    try {
      const response = await fetch(API_CONFIG.NEWSLETTER_SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletter, signup_type: 'newsletter' }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setNewsletterStatus('success')
      trackFormSubmission('newsletter_signup', true)
      setNewsletter('')
    } catch (error) {
      setNewsletterStatus('error')
      trackFormSubmission('newsletter_signup', false)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let us start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-container">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <InfoItem icon={<MapPin />} title="Location" text="Clearwater, Florida" />
              <InfoItem icon={<Clock />} title="Business Hours" text="Monday - Friday, 8 AM - 6 PM EST" />
              <InfoItem icon={<Mail />} title="Email" text="info@aimicrotechlink.com" />
              <InfoItem icon={<Phone />} title="Phone" text="Available upon consultation" />
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Hillsborough", "Pinellas", "Pasco", "Sarasota/Manatee", "Polk"].map(county => (
                  <span key={county} className="text-sm bg-primary-light text-primary px-3 py-1 rounded-full">{county}</span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <SocialIcon icon={<Linkedin size={20} />} href="#" />
                <SocialIcon icon={<Twitter size={20} />} href="#" />
                <SocialIcon icon={<Facebook size={20} />} href="#" />
                <SocialIcon icon={<Instagram size={20} />} href="#" />
                <SocialIcon icon={<Youtube size={20} />} href="#" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-success mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">Message Received!</h3>
                  <p className="text-neutral-gray-dark">Thank you for reaching out. We will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input label="Name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    <Input label="Email" type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    <Input label="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    <Input label="Company" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Select
                      label="Service Interest"
                      value={formData.service_interest}
                      onChange={e => setFormData({ ...formData, service_interest: e.target.value })}
                      options={["ARA M5 AI Super Assistant", "Custom AI Development", "Business Process Automation", "App Gallery Solutions", "General Consultation"]}
                    />
                    <Select
                      label="County/Location"
                      value={formData.county}
                      onChange={e => setFormData({ ...formData, county: e.target.value })}
                      options={["Hillsborough County", "Pinellas County", "Pasco County", "Sarasota/Manatee County", "Polk County", "Other Florida County", "Outside Florida"]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, challenges, or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>{submitStatus === 'loading' ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                  {submitStatus === 'error' && (
                    <p className="text-error text-center">{errorMessage || 'Something went wrong. Please try again.'}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-gray-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="space-y-6">
            <FAQItem q="How much do your AI solutions cost?" a="Pricing varies based on the scope and complexity of your project. We offer flexible pricing models including project-based, subscription, and custom enterprise solutions. Contact us for a free consultation." />
            <FAQItem q="Do you work with businesses outside of Florida?" a="Yes! While we are based in Clearwater, Florida, we serve clients worldwide. Our remote-first approach allows us to provide high-quality service regardless of location." />
            <FAQItem q="How long does it typically take to develop an AI solution?" a="Timeline varies depending on complexity. Simple automation tools can be developed in 2-4 weeks, while complex custom applications may take 2-6 months." />
            <FAQItem q="What kind of support do you provide after deployment?" a="We offer comprehensive support including technical assistance, maintenance, updates, and optimization to ensure your AI solutions continue to perform optimally." />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-container">
        <div className="bg-primary-dark text-white rounded-2xl p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated on AI Innovations</h2>
            <p className="text-gray-300 mb-8">
              Subscribe for AI industry trends, company news, and exclusive resources.
            </p>
            {newsletterStatus === 'success' ? (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <CheckCircle size={24} />
                <span className="font-semibold">Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletter}
                  onChange={e => setNewsletter(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-lg text-neutral-black"
                />
                <button type="submit" disabled={newsletterStatus === 'loading'} className="btn-accent">
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-red-400 mt-4">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-primary">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-neutral-gray-dark">{text}</p>
      </div>
    </div>
  )
}

function Input({ label, type = 'text', required = false, value, onChange }: { label: string; type?: string; required?: boolean; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label} {required && '*'}</label>
      <input type={type} required={required} value={value} onChange={onChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
    </div>
  )
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select value={value} onChange={onChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
        <option value="">Select...</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a href={href} className="w-10 h-10 bg-primary-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
      {icon}
    </a>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h4 className="font-semibold mb-2">{q}</h4>
      <p className="text-neutral-gray-dark">{a}</p>
    </div>
  )
}