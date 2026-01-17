'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeInUp } from '@/components/animations'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMessage('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An error occurred. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-primary-800 pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent-purple/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-accent-purple text-sm font-semibold uppercase tracking-widest mb-4">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
                Start Your{' '}
                <span className="text-accent-purple">Healing Journey</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Reach out to discuss how we can support your transformation
              </p>
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <FadeInUp delay={0.1}>
              <div className="bg-primary-900 rounded-2xl p-8 border border-primary-700">
                <h2 className="text-2xl font-poppins font-bold text-white mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-accent-purple 
                               transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-accent-purple 
                               transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-accent-purple 
                               transition-colors"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg 
                               text-white placeholder-white/40 focus:outline-none focus:border-accent-purple 
                               transition-colors resize-none"
                      placeholder="Tell us about your healing journey..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-green-400 text-sm">Message sent successfully! We'll be in touch soon.</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 
                             text-white font-semibold rounded-lg transition-all 
                             disabled:opacity-50 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeInUp>

            {/* Contact Information */}
            <FadeInUp delay={0.2}>
              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="bg-primary-900 rounded-2xl p-8 border border-primary-700">
                  <h2 className="text-2xl font-poppins font-bold text-white mb-6">
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent-purple" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Email</h3>
                        <a href="mailto:connect@aattamnirvana.com" 
                           className="text-white/70 hover:text-accent-purple transition-colors">
                          connect@aattamnirvana.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent-purple" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">Location</h3>
                        <p className="text-white/70">
                          Harrow HA3, UK<br />
                          Online sessions available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links Card */}
                <div className="bg-primary-900 rounded-2xl p-8 border border-primary-700">
                  <h3 className="text-xl font-poppins font-bold text-white mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-white/70 mb-6">
                    Schedule a free clarity call to discuss your healing journey and discover how we can help.
                  </p>
                  <a
                    href="/free-clarity-call"
                    className="inline-flex items-center justify-center w-full px-6 py-3 
                             bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold 
                             rounded-lg transition-all group"
                  >
                    Book Free Clarity Call
                    <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  )
}
