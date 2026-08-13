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
      className={`rounded-md border border-stone-300 bg-white p-6 shadow-none transition-colors hover:border-accent-500 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-accent-500 ${className}`}
    >
      {children}
    </motion.div>
  )
}
