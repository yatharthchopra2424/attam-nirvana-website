'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Heart, Star } from 'lucide-react'
import Link from 'next/link'
import CardSwap, { Card } from '@/components/ui/CardSwap'

const services = [
  {
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80',
    title: 'Trauma Healing',
    description: 'One-on-one personalized sessions to help you process and heal from past trauma with compassionate guidance.',
    duration: '60 mins',
    rating: 5,
    href: '/services#trauma-healing',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    title: 'Soul Liberation Journey',
    description: 'A six‑week initiation for women ready to return to their voice, boundaries, and inner truth. Begin choosing yourself.',
    duration: '6 weeks',
    rating: 5,
    href: '/services#soul-liberation',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
    title: 'Aattam',
    description: 'A six‑month embodied journey into liberation, identity, and self‑leadership. Come home to self. Not a programme to consume. A return to who you are.',
    duration: '6 months',
    rating: 5,
    href: '/services#aattam-program',
    featured: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    title: 'Group Workshops',
    description: 'Connect with a supportive community of women on similar healing journeys through facilitated group sessions.',
    duration: '2 hours',
    rating: 4.9,
    href: '/services#group-workshops',
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    title: 'Values Workshop',
    description: 'Discover and align with your core values to create a life of authenticity and purpose.',
    duration: '3 hours',
    rating: 5,
    href: '/services#values-workshop',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&auto=format&fit=crop&q=80',
    title: 'Corporate',
    description: 'Tailored wellness and empowerment programs for corporate teams to foster psychological safety and growth.',
    duration: 'Customizable',
    rating: 5,
    href: '/services#corporate',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-12 sm:py-24 overflow-hidden">
      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Section Header - Full Width */}
        <FadeInUp>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-white/90 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#c99a1d] leading-tight">
              Tailored Programs for Your Healing Journey
            </h2>
          </div>
        </FadeInUp>

        {/* Two Column Layout: Text Left, Cards Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Text Content */}
          <FadeInUp delay={0.2}>
            <div className="space-y-5 text-white/90 leading-relaxed text-base md:text-lg">
              <p>
                Compassionate, personalized guidance designed to help you gently break free from the patterns that have kept you in survival.
              </p>
              <p>
                This work is deeply attuned to your story, your nervous system, and the pace at which true change feels safe.
              </p>
              <p>
                Together, we begin to unravel inherited beliefs, emotional imprints, and quiet self-abandonment that no longer serve you.
              </p>
              <p>
                There is no force, no fixing — only steady support and honest reflection.
              </p>
              <p>
                With trauma-informed care and heart-led presence, space is created for real integration, not surface change.
              </p>
              <p className="font-semibold text-[#c99a1d]">
                So you can reclaim your authentic self — grounded in worth, voice, and inner freedom.
              </p>
            </div>
          </FadeInUp>

          {/* Right Column: Card Stack */}
          <div className="relative h-[500px] lg:h-[550px]">
            <CardSwap
              width={350}
              height={450}
              cardDistance={35}
              verticalDistance={45}
              delay={5000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {services.map((service, index) => (
                <Card key={index} customClass="service-card">
                  <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Featured Badge */}
                    {service.featured && (
                      <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#c99a1d] to-[#e0b84d]
                                    text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#c99a1d]/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
                      <h3 className="text-xl font-poppins font-bold text-primary-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Rating and Duration */}
                      <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c99a1d]" />
                          <span className="text-xs font-semibold text-gray-900">{service.duration}</span>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${
                              i < service.rating ? 'text-[#c99a1d] fill-current' : 'text-gray-300'
                            }`} />
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center gap-2 text-xs font-bold
                                 bg-gradient-to-r from-[#c99a1d] to-[#e0b84d] text-white
                                 hover:shadow-lg hover:shadow-[#c99a1d]/30 px-5 py-3 rounded-xl 
                                 transition-all duration-300 group/link"
                      >
                        LEARN MORE
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>

        {/* Bottom CTA Card - Mobile Responsive */}
        <FadeInUp delay={0.4}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-8 md:p-12 
                     shadow-2xl relative overflow-hidden border border-gray-100 mt-16"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c99a1d]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#e0b84d]/5 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-[#c99a1d] text-xs font-bold uppercase tracking-wider mb-2">Not sure which is right for you?</p>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-2 text-primary-900">
                  Book a Free Discovery Call
                </h3>
                <p className="text-base text-gray-700">Let's discuss your healing journey and find the perfect fit together.</p>
              </div>
              <Link
                href="/free-clarity-call"
                className="px-8 py-4 bg-gradient-to-r from-[#c99a1d] to-[#e0b84d] text-white rounded-xl 
                         text-sm font-bold w-full md:w-auto
                         hover:shadow-xl hover:shadow-[#c99a1d]/30 transition-all duration-300 
                         flex items-center justify-center gap-2 group whitespace-nowrap min-h-[52px]
                         hover:scale-[1.02]"
              >
                SCHEDULE NOW
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  )
}