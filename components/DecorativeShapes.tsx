'use client'

import { motion } from 'framer-motion'

export function DecorativeShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-16 top-8 h-44 w-44 rounded-full bg-accent-200/50 blur-2xl dark:bg-accent-900/35"
        animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-3rem] top-1/3 h-28 w-28 rounded-xl border border-accent-300/60 bg-white/70 dark:border-accent-700/55 dark:bg-stone-900/70"
        animate={{ rotate: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 h-20 w-20 rounded-full border border-accent-300/70 bg-accent-100/40 dark:border-accent-700/60 dark:bg-accent-900/25"
        animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
