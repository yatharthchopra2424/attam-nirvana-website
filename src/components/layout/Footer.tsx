import Link from 'next/link'
import { Sparkles, Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Rupi' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services#healing', label: 'Trauma Healing' },
    { href: '/services#coaching', label: '1-on-1 Coaching' },
    { href: '/services#aattam', label: 'Aattam Program' },
    { href: '/services#workshops', label: 'Workshops' },
  ],
}

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-hero-gradient text-white">
      {/* Main Footer Content */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-accent-purple" />
              <span className="text-xl font-poppins font-bold">
                Aattam<span className="text-primary-400">Nirvana</span>
              </span>
            </Link>
            <p className="text-light-text text-sm leading-relaxed mb-6">
              Empowering women to break free from trauma, cultural conditioning, and self-doubt. 
              Your journey to healing and self-discovery starts here.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                           transition-all duration-300 hover:bg-primary-500 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light-text text-sm hover:text-white transition-colors duration-300
                             hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light-text text-sm hover:text-white transition-colors duration-300
                             hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@aattamnirvana.com"
                  className="text-light-text text-sm hover:text-white transition-colors"
                >
                  hello@aattamnirvana.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-light-text text-sm hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <span className="text-light-text text-sm">
                  Available Worldwide<br />
                  Online Sessions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-light-text text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aattam Nirvana. All rights reserved.
            </p>
            <p className="text-light-text text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for healing souls
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
