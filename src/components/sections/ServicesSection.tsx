'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Heart, Star } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80',
    title: 'Trauma Healing Sessions',
    description: 'One-on-one personalized sessions to help you process and heal from past trauma with compassionate guidance.',
    price: '$150',
    duration: '60 mins',
    rating: 5,
    href: '/services#trauma-healing',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    title: 'Aattam 12-Week Program',
    description: 'A comprehensive transformative journey to reclaim your voice, rediscover inner strength, and embrace your true self.',
    price: '$1,200',
    duration: '12 weeks',
    rating: 5,
    href: '/services#aattam-program',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    title: 'Group Workshops',
    description: 'Connect with a supportive community of women on similar healing journeys through facilitated group sessions.',
    price: '$75',
    duration: '2 hours',
    rating: 4.9,
    href: '/services#workshops',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-primary-800 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Editorial Style - Mobile Optimized */}
        <FadeInUp>
          <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <div className="h-px w-8 sm:w-10 bg-primary-600" />
            <p className="text-accent-purple font-semibold text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-2">
                Our Services
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-poppins font-bold text-white leading-tight mb-4 sm:mb-5">
              Tailored Programs for Your{' '}
              <span className="text-accent-purple">
                Healing Journey
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              Compassionate, personalized guidance designed to help you break free and reclaim your authentic self.
            </p>
          </div>
        </FadeInUp>

        {/* Uniform Card Grid - Mobile Responsive */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-primary-900 rounded-2xl overflow-hidden shadow-purple-sm hover:shadow-purple-md 
                         border border-primary-700 h-full flex flex-col"
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-accent-gold to-yellow-500 
                                text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    FEATURED
                  </div>
                )}

                {/* Image - Mobile Responsive */}
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/40" />
                </div>

                {/* Content - Mobile Responsive */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg font-poppins font-bold text-white mb-1.5 sm:mb-2 
                               group-hover:text-accent-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Pricing - Mobile Responsive */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 pt-2.5 sm:pt-3 border-t border-primary-700">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl font-bold text-accent-purple font-poppins">{service.price}</span>
                      <span className="text-[10px] sm:text-xs text-white/60">/ {service.duration}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${
                          i < service.rating ? 'text-accent-gold fill-current' : 'text-primary-700'
                        }`} />
                      ))}
                    </div>
                  </div>

                  {/* CTA - Mobile Responsive */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white font-semibold 
                             bg-accent-purple hover:bg-accent-purple/80 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all group/link min-h-[44px]">
                  >
                    LEARN MORE
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA Card - Mobile Responsive */}
        <FadeInUp delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-primary-600 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 
                     shadow-purple-lg text-white relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
              <div className="text-center md:text-left">
                <p className="text-white/90 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5">Not sure which is right for you?</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-poppins font-bold mb-1 sm:mb-1.5">
                  Book a Free Discovery Call
                </h3>
                <p className="text-xs sm:text-sm text-white/80">Let's discuss your healing journey and find the perfect fit together.</p>
              </div>
              <Link
                href="/free-clarity-call"
                className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-white text-primary-800 rounded-lg 
                         text-xs sm:text-sm font-semibold w-full md:w-auto
                         hover:bg-primary-100 transition-all hover:shadow-lg flex items-center justify-center gap-1.5 group whitespace-nowrap min-h-[44px]"
              >
                SCHEDULE NOW
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  )
}