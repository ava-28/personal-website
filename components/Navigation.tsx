'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/leadership', label: 'Leadership' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-sm dark:border-stone-800/80 dark:bg-stone-950/90"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg font-medium text-stone-800 transition-colors hover:text-accent-600 dark:text-stone-100 dark:hover:text-accent-300"
        >
          Ava Ahmadi
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-accent-600 dark:text-accent-300'
                        : 'text-stone-600 hover:text-accent-600 dark:text-stone-300 dark:hover:text-accent-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
