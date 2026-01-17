'use client'

import { useEffect } from 'react'

export default function BookSessionPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-primary-800 pt-24 pb-12">
      <div className="container-main">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
              90-Minute Coaching Session
            </h1>
            <p className="text-xl text-white/80">
              Schedule your personalized 90-minute coaching session
            </p>
          </div>

          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget bg-white rounded-2xl overflow-hidden shadow-2xl" 
            data-url="https://calendly.com/rupika2020-aattamnirvana/90-minute-coaching-session"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </div>
  )
}
