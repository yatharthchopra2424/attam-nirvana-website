'use client'

import { usePathname } from 'next/navigation'

interface CalendlyWidgetProps {
  url: string
  height?: string
  iframeSrc?: string
}

export default function CalendlyWidget({ url, height = '700px', iframeSrc }: CalendlyWidgetProps) {
  const pathname = usePathname()

  // If an iframe source is provided, use that instead of Calendly
  if (iframeSrc) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
        <iframe
          key={pathname} // Force reload on pathname change
          src={iframeSrc}
          style={{
            width: '100%',
            height: height,
            border: 'none',
            borderRadius: '1rem',
          }}
          title="Booking Form"
          allow="geolocation; microphone; camera"
          allowFullScreen
        />
      </div>
    )
  }

  // Fallback to Calendly link
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8 text-center"
      style={{ minHeight: height }}
    >
      <p className="text-lg text-gray-700 mb-4">
        Click below to book your session
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
      >
        Book Now
      </a>
    </div>
  )
}

