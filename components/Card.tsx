'use client'

import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.35 }}
      className={`rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-stone-950/40 ${className}`}
    >
      {children}
    </motion.div>
  )
}
