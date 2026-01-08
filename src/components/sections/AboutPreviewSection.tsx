'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/components/animations'
import { Heart, Sparkles, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutPreviewSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{backgroundImage: 'radial-gradient(circle, #6B47A1 1px, transparent 1px)', backgroundSize: '30px 30px'}} />

      <div className="container-main relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header - Editorial Style - 25% smaller */}
        <FadeInUp className="mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-primary-600 font-semibold text-xs uppercase tracking-[0.3em] mb-2">
              The Story Behind Aattam
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-poppins font-bold text-dark-text leading-tight">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan">Darkness</span> to Light
            </h2>
          </div>
        </FadeInUp>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column - Image + Floating Stats */}
          <SlideInLeft className="lg:col-span-5">
            <div className="relative">
              {/* Main Photo with Creative Frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-hero">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80"
                  alt="Rupinder Dhillon - Rupi"
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent-purple/10 rounded-full -z-10" />

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-purple-lg border border-primary-100 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary-600 font-poppins">27+</p>
                    <p className="text-[10px] text-gray-500">Years</p>
                  </div>
                </div>
                <p className="text-[10px] text-gray-600">Of lived experience & deep insight</p>
              </motion.div>
            </div>
          </SlideInLeft>

          {/* Right Column - Content with Creative Typography */}
          <SlideInRight className="lg:col-span-7">
            <div className="space-y-6">
              {/* Name Badge - 25% smaller */}
              <div className="inline-flex items-center gap-2 bg-light-bg border border-primary-200 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <div>
                  <p className="text-base font-poppins font-bold text-dark-text">Rupinder Dhillon</p>
                  <p className="text-xs text-primary-600 font-medium">fondly known as Rupi</p>
                </div>
              </div>

              {/* Role Tag - 25% smaller */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  Trauma Healing Coach
                </span>
                <span className="px-3 py-1.5 bg-accent-purple/10 text-primary-700 rounded-full text-xs font-semibold">
                  Survivor Advocate
                </span>
              </div>

              {/* Story Text - 25% smaller */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                  For over <span className="font-bold text-primary-600">27 years</span>, I endured 
                  the harrowing trials of domestic violence and emotional, verbal, and psychological abuse.
                </p>
                
                <p className="text-sm md:text-base">
                  Despite the dark times and the constant undermining of my worth and intelligence, 
                  I wore a <span className="italic text-primary-600">mask of contentment</span> and 
                  became a people pleaser, sacrificing my dreams and living life on others' terms.
                </p>

                <p className="text-sm md:text-base">
                  At the age of <span className="font-bold text-primary-600">51</span>, with unwavering 
                  support from a mentor and compassionate network, I embarked on a 
                  <span className="font-semibold text-primary-600"> transformative journey of healing 
                  and self-discovery</span>.
                </p>
              </div>

              {/* Pull Quote - 25% smaller */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-5 py-3 border-l-3 border-primary-600 bg-light-bg rounded-r-lg"
              >
                <Heart className="absolute -left-2.5 top-3 w-5 h-5 text-primary-600 fill-current bg-white rounded-full" />
                <p className="italic text-gray-800 text-base font-medium">
                  "From the ashes of my past, I have risen like a phoenix, ready to soar. 
                  My journey is proof that healing is possible and that freedom awaits."
                </p>
              </motion.div>

              {/* CTA - 25% smaller */}
              <div className="pt-3">
                <Button href="/about" size="md" className="group">
                  DISCOVER MY FULL JOURNEY
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Trust Indicators - 25% smaller */}
              <div className="flex items-center gap-4 pt-3">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary-200" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">500+ women transformed</p>
                  <p className="text-[10px] text-gray-500">Join our healing community</p>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}