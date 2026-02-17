'use client'

import { motion } from 'framer-motion'

export function DecorativeShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-8 top-20 h-24 w-24 rounded-lg border border-accent-300/60 bg-white/55 dark:border-accent-700/60 dark:bg-stone-900/65"
        animate={{ x: [0, -10, 0], y: [0, 10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-2rem] top-[28%] h-28 w-28 rounded-xl border border-accent-300/60 bg-white/70 dark:border-accent-700/55 dark:bg-stone-900/70"
        animate={{ rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[22%] top-[46%] h-16 w-16 rounded-lg border border-accent-300/65 bg-accent-100/35 dark:border-accent-700/60 dark:bg-accent-900/20"
        animate={{ y: [0, -7, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-[18%] h-20 w-20 rounded-lg border border-accent-300/60 bg-white/60 dark:border-accent-700/55 dark:bg-stone-900/65"
        animate={{ y: [0, 9, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-24 right-10 h-14 w-14 rounded-md border border-accent-300/60 bg-accent-100/35 dark:border-accent-700/55 dark:bg-accent-900/20"
        animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[36%] top-[14%] h-12 w-12 rounded-md border border-accent-300/55 bg-white/45 dark:border-accent-700/50 dark:bg-stone-900/60"
        animate={{ y: [0, 6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
