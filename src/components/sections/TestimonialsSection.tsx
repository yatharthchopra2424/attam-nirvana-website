'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations'
import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'

const testimonials = [
  {
    quote: "Rupi's guidance has been nothing short of life-changing. After years of feeling lost and broken, I finally found my voice and the strength to start living authentically.",
    author: 'Priya Sharma',
    title: 'Program Graduate',
    rating: 5,
    featured: true,
  },
  {
    quote: "The Aattam program gave me the tools to understand my patterns and break free from them. Rupi's compassion and wisdom made me feel safe throughout my healing journey.",
    author: 'Sarah Mitchell',
    title: 'Trauma Healing Client',
    rating: 5,
  },
  {
    quote: "I came to Rupi feeling worthless after years of emotional abuse. Today, I run my own business and help other women. She showed me my power was never lost.",
    author: 'Anita Patel',
    title: 'Workshop Attendee',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{backgroundImage: 'radial-gradient(circle, #6B47A1 1px, transparent 1px)', backgroundSize: '40px 40px'}} />

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - 25% smaller */}
        <FadeInUp>
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-6 h-6 text-primary-600" />
              <p className="text-primary-600 font-semibold text-xs uppercase tracking-[0.3em]">
                Testimonials
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-poppins font-bold text-dark-text leading-tight mb-5">
              Stories of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan">
                Transformation
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Real women sharing their journeys of healing, growth, and reclaiming their power.
            </p>
          </div>
        </FadeInUp>

        {/* Masonry-style Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Large Featured Testimonial - Left */}
          <StaggerContainer className="lg:col-span-7" staggerDelay={0.1}>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 
                              rounded-3xl p-10 md:p-12 text-white h-full shadow-purple-lg relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-purple/20 rounded-full blur-3xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Badge - 25% smaller */}
                    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 
                                  px-3 py-1.5 rounded-full mb-5">
                      <Star className="w-3 h-3 text-accent-gold fill-current" />
                      <span className="text-xs font-semibold">Featured Story</span>
                    </div>

                    {/* Quote - 25% smaller */}
                    <Quote className="w-12 h-12 text-accent-purple/50 mb-5" />
                    <blockquote className="text-xl md:text-2xl font-poppins font-medium leading-relaxed mb-6">
                      "{testimonials[0].quote}"
                    </blockquote>

                    {/* Rating - 25% smaller */}
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                      ))}
                    </div>

                    {/* Author - 25% smaller */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white fill-current" />
                      </div>
                      <div>
                        <p className="text-lg font-poppins font-bold text-white">
                          {testimonials[0].author}
                        </p>
                        <p className="text-sm text-accent-purple font-medium">
                          {testimonials[0].title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>

          {/* Stacked Testimonials - Right */}
          <StaggerContainer className="lg:col-span-5 space-y-8" staggerDelay={0.15}>
            {[testimonials[1], testimonials[2]].map((testimonial, index) => (
              <StaggerItem key={testimonial.author}>
                <motion.div
                  whileHover={{ x: 8, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-primary-100 rounded-xl p-6 shadow-purple-sm hover:shadow-purple-md 
                           transition-shadow"
                >
                  {/* Rating - 25% smaller */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                    ))}
                  </div>

                  {/* Quote - 25% smaller */}
                  <blockquote className="text-sm text-gray-700 leading-relaxed mb-5">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author - 25% smaller */}
                  <div className="flex items-center gap-2 pt-3 border-t border-primary-100">
                    <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 font-bold font-poppins text-base">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-poppins font-bold text-dark-text">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-primary-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom Stats Bar */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '5.0', label: 'Average Rating', icon: Star },
              { value: '500+', label: 'Happy Clients', icon: Heart },
              { value: '98%', label: 'Success Rate', icon: null },
              { value: '100%', label: 'Confidential', icon: null },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="text-center p-4 bg-light-bg rounded-xl border border-primary-100"
              >
                <div className="flex items-center justify-center gap-1.5 mb-1.5">
                  {stat.icon && <stat.icon className="w-4 h-4 text-accent-gold fill-current" />}
                  <p className="text-2xl md:text-3xl font-bold text-primary-600 font-poppins">
                    {stat.value}
                  </p>
                </div>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}