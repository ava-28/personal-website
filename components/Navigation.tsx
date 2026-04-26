'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/research', label: 'research' },
  { href: '/projects', label: 'projects' },
  { href: '/leadership', label: 'leadership' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-0.5 rounded-full border border-white/30 bg-white/20 px-3 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/[0.12] dark:bg-white/[0.06] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-stone-900/10 text-stone-900 dark:bg-white/15 dark:text-white'
                  : 'text-stone-500 hover:text-stone-800 dark:text-white/50 dark:hover:text-white/90'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
        <div className="mx-2 h-4 w-px bg-stone-300/60 dark:bg-white/15" />
        <ThemeToggle />
      </motion.nav>
    </div>
  )
}
