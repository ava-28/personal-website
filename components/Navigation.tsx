'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/research', label: 'research' },
  { href: '/projects', label: 'projects' },
  { href: '/leadership', label: 'leadership' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-5">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-0.5 rounded-full border border-stone-200/80 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/90 dark:shadow-none"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-stone-100 text-stone-900 dark:bg-white/10 dark:text-white'
                  : 'text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
        <div className="mx-2 h-4 w-px bg-stone-200 dark:bg-white/20" />
        <ThemeToggle />
      </motion.nav>
    </div>
  )
}
