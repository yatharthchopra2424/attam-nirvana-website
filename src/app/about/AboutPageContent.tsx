'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { 
  FadeInUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  FloatingElement 
} from '@/components/animations'
import { 
  Heart, 
  Sparkles, 
  Star, 
  Shield, 
  Users, 
  Award,
  Quote,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const journeyMilestones = [
  {
    year: '27 Years',
    title: 'The Silent Struggle',
    description: 'Endured domestic violence and emotional, verbal, and psychological abuse while wearing a mask of contentment.',
  },
  {
    year: 'Age 51',
    title: 'The Turning Point',
    description: 'With unwavering support from a mentor and compassionate network, embarked on a transformative journey of healing.',
  },
  {
    year: 'Discovery',
    title: 'Safe Space for Healing',
    description: 'Realized the vital importance of having a safe space to heal, grow, and understand life patterns.',
  },
  {
    year: 'Today',
    title: 'Rising Like a Phoenix',
    description: 'Transformed pain into strength, now empowering women worldwide to break free and reclaim their power.',
  },
]

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Every healing journey is unique. I meet you where you are with understanding and empathy.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Creating a confidential, judgment-free space where you can be vulnerable and authentic.',
  },
  {
    icon: Sparkles,
    title: 'Transformation',
    description: 'Guiding you to turn your pain into power and discover your true eternal self.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building connections with women on similar journeys, because healing is stronger together.',
  },
]

const achievements = [
  { number: '500+', label: 'Women Empowered' },
  { number: '27+', label: 'Years of Insight' },
  { number: '12', label: 'Week Program' },
  { number: '100%', label: 'Confidential' },
]

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[80vh] bg-hero-gradient overflow-hidden pt-32 pb-24">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement className="absolute top-20 right-20 w-80 h-80 rounded-full bg-accent-purple/15 blur-3xl">
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-primary-500/15 blur-3xl" duration={8}>
            <div />
          </FloatingElement>
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />
        </div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content - 7 columns */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 
                          px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-accent-purple" />
                <span className="text-accent-purple text-sm font-semibold tracking-wide">
                  My Story of Transformation
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-poppins font-bold text-white leading-[1.1] mb-6"
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl mb-3">
                  From
                </span>
                <span className="block text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text 
                             bg-gradient-to-r from-accent-purple via-primary-400 to-accent-cyan mb-3">
                  Survivor
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90">
                  to Advocate
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-light-text leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                A journey of <span className="text-white font-semibold">27 years</span> of darkness 
                transformed into a beacon of hope for women seeking freedom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4 justify-center lg:justify-start text-white/70"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-gold" />
                  <span className="text-sm">Certified Coach</span>
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent-cyan" />
                  <span className="text-sm">500+ Lives Changed</span>
                </div>
              </motion.div>
            </div>

            {/* Image - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] max-w-md ml-auto rounded-3xl overflow-hidden shadow-hero border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80"
                  alt="Rupinder Dhillon - Rupi"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -inset-4 border-2 border-dashed border-accent-purple/30 rounded-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-200/30 rounded-full -z-20" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent-purple/20 rounded-full -z-20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Bento Style */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{backgroundImage: 'radial-gradient(circle, #6B47A1 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-7">
              <FadeInUp>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 bg-light-bg border border-primary-200 rounded-full px-6 py-3 mb-6">
                    <Quote className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="text-xl font-poppins font-bold text-dark-text">Rupinder Dhillon</p>
                      <p className="text-sm text-primary-600 font-medium">fondly known as Rupi</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <div className="space-y-6 text-gray-700">
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-dark-text">
                    For over <span className="font-bold text-primary-600">27 years</span>, I endured 
                    the harrowing trials of domestic violence and emotional, verbal, and psychological abuse.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed">
                    Despite the dark times and the constant undermining of my worth and intelligence, 
                    I wore a <span className="italic font-semibold text-primary-600">mask of contentment</span> and 
                    became a people pleaser, sacrificing my dreams and living life on others' terms.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed">
                    At the age of <span className="font-bold text-primary-600">51</span>, with the 
                    unwavering support of a mentor and a network of compassionate individuals, I embarked 
                    on a <span className="font-semibold text-primary-600">transformative journey of healing 
                    and self-discovery</span>.
                  </p>

                  <div className="relative pl-8 py-6 border-l-4 border-primary-600 bg-light-bg rounded-r-2xl mt-8">
                    <Heart className="absolute -left-4 top-6 w-8 h-8 text-primary-600 fill-current bg-white rounded-full p-1" />
                    <p className="text-lg md:text-xl font-medium text-gray-800 italic leading-relaxed">
                      My pain and trauma became my greatest sources of strength, leading me to a place of 
                      confidence, worthiness, and alignment with my true self.
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right - Stats & Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <FadeInUp delay={0.2}>
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white shadow-purple-lg">
                  <Sparkles className="w-10 h-10 text-accent-purple mb-4" />
                  <h3 className="text-2xl font-poppins font-bold mb-3">The Turning Point</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Age 51 marked the beginning of my transformation—from victim to survivor to advocate.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-3xl font-bold">27</p>
                      <p className="text-sm text-white/80">Years of Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-sm text-white/80">Lives Transformed</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="bg-white border border-primary-100 rounded-2xl p-6 shadow-purple-sm">
                  <h4 className="font-poppins font-bold text-lg mb-4 text-dark-text">Core Values</h4>
                  <div className="space-y-3">
                    {[
                      { icon: Heart, label: 'Compassion', color: 'text-red-500' },
                      { icon: Shield, label: 'Safety', color: 'text-primary-600' },
                      { icon: Sparkles, label: 'Transformation', color: 'text-accent-cyan' },
                    ].map((value) => (
                      <div key={value.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <value.icon className={`w-5 h-5 ${value.color}`} />
                        </div>
                        <span className="font-medium text-gray-700">{value.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Creative Layout */}
      <section className="section-padding bg-light-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl" />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-16 bg-primary-600" />
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-[0.3em]">
                  The Journey
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-dark-text leading-tight">
                My Path to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan">
                  Healing & Freedom
                </span>
              </h2>
            </div>
          </FadeInUp>

          <div className="max-w-5xl mx-auto">
            {/* Vertical Timeline with Cards */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-600 to-accent-cyan rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {journeyMilestones.map((milestone, index) => (
                  <FadeInUp key={milestone.title} delay={index * 0.12}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="relative pl-20 md:pl-28"
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-9 top-8 w-7 h-7 bg-gradient-to-br from-primary-600 to-primary-700 
                                    rounded-full ring-4 ring-white shadow-lg z-10 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>

                      {/* Card */}
                      <div className="bg-white border border-primary-100 rounded-2xl p-6 md:p-8 shadow-purple-sm 
                                    hover:shadow-purple-md transition-all group">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white 
                                       text-sm font-bold rounded-full shadow-sm">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-poppins font-bold text-dark-text 
                                       group-hover:text-primary-600 transition-colors">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <span className="inline-block text-accent-purple text-sm font-semibold uppercase tracking-widest mb-4">
                My Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-8 leading-tight">
                Empowering Women to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                  Break Free
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <p className="text-lg text-light-text leading-relaxed mb-8">
                Now, I am on a mission to empower women to break free from the chains of cultural conditioning, 
                self-doubt, and domestic abuse. Through my <span className="text-accent-purple font-semibold">12-week 
                program, Aattam</span>, which means <span className="italic">&ldquo;Soul, Your True Eternal 
                Self&rdquo;</span>, I provide personalised guidance tailored for trauma healing, helping women 
                reclaim their voices and rediscover their inner strength.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
                <Quote className="w-10 h-10 text-accent-purple mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-white font-poppins italic leading-relaxed">
                  &ldquo;From the ashes of my past, I have risen like a phoenix, ready to soar. 
                  My journey is proof that healing is possible and that freedom awaits.&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Message to Women - Asymmetric Layout */}
      <section className="section-padding bg-light-bg">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <SlideInLeft className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-hero">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80"
                    alt="Empowering women through healing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-red-500 to-red-600 
                           text-white p-8 rounded-2xl shadow-2xl max-w-[200px]"
                >
                  <Heart className="w-10 h-10 mb-3 fill-current" />
                  <p className="font-poppins font-bold text-xl mb-1">You Are Enough</p>
                  <p className="text-sm text-white/90">Always have been</p>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-200/40 rounded-full -z-10" />
              </div>
            </SlideInLeft>

            <SlideInRight className="lg:col-span-7">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-primary-600 fill-current" />
                  <p className="text-primary-600 font-semibold text-sm uppercase tracking-[0.3em]">
                    A Message For You
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-dark-text leading-tight mb-8">
                  Your Power Is Waiting to Be{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-cyan">
                    Reclaimed
                  </span>
                </h2>
                
                <div className="space-y-6 text-gray-700 mb-8">
                  <p className="text-lg md:text-xl leading-relaxed">
                    To every woman who has been told she is not enough, who has silenced her voice:
                  </p>
                  
                  <div className="relative pl-6 py-4 border-l-4 border-primary-600 bg-white rounded-r-xl">
                    <p className="text-xl md:text-2xl font-semibold text-primary-600 leading-relaxed">
                      Your power is not lost; it is waiting to be reclaimed.
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed">
                    I am here to guide and walk beside you as you break free from the chains that bind you. 
                    Together, we will uncover the strength that has always been within you.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Heart, text: 'Personalized healing guidance' },
                    { icon: Shield, text: 'Safe and confidential space' },
                    { icon: Sparkles, text: '12-week transformation program' },
                    { icon: Users, text: 'Ongoing support & community' }
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-primary-100">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" size="lg" className="group">
                  START YOUR HEALING JOURNEY
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{backgroundImage: 'radial-gradient(circle, #6B47A1 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
        
        <div className="container-main relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary-600" />
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-[0.3em]">
                  Core Values
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-dark-text leading-tight">
                What Guides My Work
              </h2>
            </div>
          </FadeInUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-2xl p-8 border border-primary-100 shadow-purple-sm hover:shadow-purple-md 
                            h-full group ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    index === 0 ? 'from-red-500 to-red-600' :
                    index === 1 ? 'from-primary-600 to-primary-700' :
                    index === 2 ? 'from-accent-cyan to-blue-500' :
                    'from-purple-500 to-purple-600'
                  } rounded-2xl flex items-center justify-center mb-6 shadow-lg 
                  group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-dark-text mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Creative Stats Bar */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-white to-primary-50" />
        
        <div className="container-main relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((stat, index) => (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-8 bg-white rounded-2xl border border-primary-100 shadow-purple-sm 
                             hover:shadow-purple-md transition-all group"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                      index === 0 ? 'from-primary-600 to-primary-700' :
                      index === 1 ? 'from-accent-cyan to-blue-500' :
                      index === 2 ? 'from-purple-500 to-purple-600' :
                      'from-green-500 to-green-600'
                    } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl font-bold text-white">{stat.number.charAt(0)}</span>
                    </div>
                    <p className="text-4xl md:text-5xl font-poppins font-bold text-primary-600 mb-2 
                               group-hover:text-primary-700 transition-colors">
                      {stat.number}
                    </p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced Design */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingElement className="absolute top-10 right-10 w-64 h-64 rounded-full bg-accent-purple/20 blur-3xl">
            <div />
          </FloatingElement>
          <FloatingElement className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary-500/20 blur-3xl" duration={7}>
            <div />
          </FloatingElement>
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"
          />
        </div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 
                              px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5 text-accent-gold" />
                  <span className="text-white/90 text-sm font-semibold">Begin Your Transformation</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight">
                  Ready to Reclaim Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                    True Self
                  </span>?
                </h2>
                
                <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Your healing journey starts with a single step. Let's take it together.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  href="/contact" 
                  size="lg" 
                  className="bg-white text-primary-900 hover:bg-primary-100 group text-lg px-10"
                >
                  BOOK A FREE DISCOVERY CALL
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="/services" variant="outline" size="lg" className="text-lg px-10">
                  EXPLORE AATTAM PROGRAM
                </Button>
              </div>
            </FadeInUp>

            {/* Trust Indicators */}
            <FadeInUp delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
                {[
                  { icon: Heart, value: 'Free', label: 'Discovery Call' },
                  { icon: Shield, value: '100%', label: 'Confidential' },
                  { icon: Users, value: '500+', label: 'Women Helped' },
                  { icon: Sparkles, value: '12', label: 'Week Journey' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4 }}
                    className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <item.icon className="w-8 h-8 text-accent-purple mx-auto mb-2" />
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-sm text-white/70">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </>
  )
}
