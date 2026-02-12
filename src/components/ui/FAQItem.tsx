'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
  delay?: number
}

export default function FAQItem({ question, answer, index, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3, delay: delay + index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 
                   rounded-xl p-5 sm:p-6 border border-primary-700 hover:border-primary-600
                   transition-all duration-300 shadow-lg hover:shadow-xl group"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm sm:text-base font-poppins font-bold text-white group-hover:text-[#e0b84d] transition-colors">
            {question}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 mt-0.5"
          >
            <ChevronDown className="w-5 h-5 text-[#c99a1d]" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            marginTop: isOpen ? 12 : 0
          }}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-primary-700">
            {answer.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-sm text-white/90 leading-relaxed mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </button>
    </motion.div>
  )
}
