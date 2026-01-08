import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aattam Nirvana | Rupinder Dhillon - Trauma Healing & Empowerment',
  description: 'Transform your life with Rupinder Dhillon. A 12-week program to break free from trauma, domestic abuse, and cultural conditioning. Reclaim your voice and inner strength.',
  keywords: ['trauma healing', 'domestic abuse recovery', 'women empowerment', 'life coaching', 'Rupinder Dhillon', 'Aattam Nirvana'],
  authors: [{ name: 'Rupinder Dhillon' }],
  openGraph: {
    title: 'Aattam Nirvana | Soul Transformation Journey',
    description: 'Break free from trauma and reclaim your authentic self with personalized guidance.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter custom-scrollbar">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
