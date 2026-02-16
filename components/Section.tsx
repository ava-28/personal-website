'use client'

import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
