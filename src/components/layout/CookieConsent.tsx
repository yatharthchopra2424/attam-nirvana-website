'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'none')
    setIsVisible(false)
  }

  const handleCustomize = () => {
    setShowCustomize(!showCustomize)
  }

  const handleSavePreferences = (preferences: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-50 max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Main Content */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-lg text-dark-text mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>
              </div>

              {/* Customize Options */}
              <AnimatePresence>
                {showCustomize && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4 space-y-3 overflow-hidden"
                  >
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-semibold text-dark-text">Essential</p>
                        <p className="text-xs text-gray-500">Required for the website to function</p>
                      </div>
                      <input type="checkbox" checked disabled className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-semibold text-dark-text">Analytics</p>
                        <p className="text-xs text-gray-500">Help us improve our website</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-semibold text-dark-text">Marketing</p>
                        <p className="text-xs text-gray-500">Personalized ads and content</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 accent-primary-600" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                {showCustomize && (
                  <button
                    onClick={() => handleSavePreferences({ essential: true, analytics: true, marketing: true })}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Save Preferences
                  </button>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={handleCustomize}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                  >
                    Customise
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
