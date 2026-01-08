'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { FadeInUp } from '@/components/animations'
import { Heart, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
      
      {/* Decorative Elements - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
        />
      </div>

      <div className="container-main relative z-10 w-full max-w-5xl mx-auto">
        {/* Main CTA Content */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <FadeInUp>
                <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 
                              px-3 py-1.5 rounded-full mb-5">
                  <Sparkles className="w-3 h-3 text-accent-purple" />
                  <span className="text-white/90 text-xs font-semibold">Your Healing Journey Starts Here</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-poppins font-bold text-white mb-5 leading-tight">
                  Ready to Reclaim Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                    Power
                  </span>?
                </h2>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                  To every woman who has been told she is not enough: Your power is not lost; 
                  it is waiting to be reclaimed. I am here to guide and walk beside you.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button href="/contact" size="md" className="bg-white text-primary-900 hover:bg-primary-100 group">
                    START YOUR JOURNEY
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button href="/services" variant="outline" size="md">
                    EXPLORE PROGRAMS
                  </Button>
                </div>
              </FadeInUp>
            </div>

              {/* Right - Static Feature Cards */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative h-80">
                {/* Card 1 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute top-0 right-0 bg-white rounded-xl p-4 shadow-2xl max-w-[165px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary-600 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Free</p>
                      <p className="text-base font-bold text-primary-600 font-poppins">Discovery</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">No pressure conversation</p>
                </motion.div>

                {/* Card 2 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute bottom-16 left-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-4 shadow-2xl max-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/80 font-medium">100%</p>
                      <p className="text-base font-bold text-white font-poppins">Private</p>
                    </div>
                  </div>
                  <p className="text-xs text-white/80">Safe space</p>
                </motion.div>

                {/* Card 3 - 25% smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 right-10 bg-white rounded-xl p-4 shadow-2xl max-w-[150px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-9 h-9 bg-accent-cyan/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Online</p>
                      <p className="text-base font-bold text-gray-900 font-poppins">Sessions</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">Worldwide</p>
                </motion.div>
              </div>
            </div>
          </div>

        {/* Trust Badges - Mobile Friendly */}
        <FadeInUp delay={0.4}>
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Heart, value: 'Free', label: 'Discovery Call' },
                { icon: Shield, value: '100%', label: 'Confidential' },
                { icon: Clock, value: 'Online', label: 'Sessions' },
                { icon: Sparkles, value: '500+', label: 'Lives Changed' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <item.icon className="w-6 h-6 text-accent-purple mx-auto mb-1.5" />
                  <p className="text-lg md:text-xl font-bold text-white mb-0.5">{item.value}</p>
                  <p className="text-[10px] md:text-xs text-white/70">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}