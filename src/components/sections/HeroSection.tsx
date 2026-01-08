'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Sparkles, Users, Clock, Shield } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Decorative Elements - Static, No Floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        
        {/* Static Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-white/5 rounded-full"
        />
      </div>

      <div className="container-main relative z-10 w-full py-20">
        {/* Asymmetric Layout with Floating Cards */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Headline with Editorial Typography - 20% smaller */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-white leading-[1.1] mb-5"
            >
              <span className="block text-4xl md:text-5xl lg:text-[3.5rem] mb-2">
                Reclaim Your
              </span>
              <span className="block text-5xl md:text-6xl lg:text-[4rem] text-transparent bg-clip-text 
                           bg-gradient-to-r from-accent-purple via-primary-400 to-accent-cyan">
                Inner Strength
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-white/90">
                & Find Your True Self
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-light-text leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
            >
              A transformative journey designed to help women break free from trauma, 
              cultural conditioning, and self-doubt. Discover your power with 
              personalized guidance from <span className="text-white font-medium">Rupinder Dhillon</span>.
            </motion.p>

            {/* CTAs - 20% smaller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <Button href="/services" size="md" variant="primary" className="group">
                EXPLORE THE JOURNEY
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </Button>
              <Button href="/contact" variant="outline" size="md">
                BOOK A SESSION
              </Button>
            </motion.div>

            {/* Social Proof - Horizontal Cards - 20% smaller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white mb-1">500+</p>
                <p className="text-[10px] text-light-text">Lives Transformed</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white mb-1">27+</p>
                <p className="text-[10px] text-light-text">Years Insight</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white mb-1">12</p>
                <p className="text-[10px] text-light-text">Week Program</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 5 columns with Image - 20% smaller, no floating cards */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image with Asymmetric Frame - 20% smaller */}
              <div className="relative z-10 ml-auto max-w-sm">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hero border-4 border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80"
                    alt="Rupinder Dhillon - Trauma Healing Expert"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
                </div>

                {/* Decorative Border */}
                <div className="absolute -inset-3 border-2 border-dashed border-accent-purple/30 rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}