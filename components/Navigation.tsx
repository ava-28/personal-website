'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/leadership', label: 'Leadership' },
]

const connectLinks = [
  { href: 'https://github.com/ava-28', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ava-ahmadi1228', label: 'LinkedIn' },
  { href: 'mailto:avahmadii1382@gmail.com', label: 'Email' },
]

function isExternal(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:')
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close the mobile panel on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* ── Desktop: fixed vertical index nav, right-aligned, PW-inspired ── */}
      <motion.nav
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Primary"
        className="fixed right-10 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-6 xl:flex"
      >
        <div className="flex flex-col items-end gap-1.5">
          <span className="label-index text-stone-400 dark:text-slate-500">Index</span>
          {siteLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-right text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-accent-600 dark:text-accent-400'
                    : 'text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="label-index text-stone-400 dark:text-slate-500">Connect</span>
          {connectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={isExternal(link.href) && !link.href.startsWith('mailto:') ? '_blank' : undefined}
              rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
              className="text-right text-sm font-medium text-stone-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-1 border-t border-stone-300 pt-3 dark:border-slate-700">
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* ── Mobile / tablet: compact top bar ── */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-stone-300 bg-stone-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 xl:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3.5">
          <Link
            href="/"
            className="font-display text-sm font-bold uppercase tracking-[0.14em] text-stone-900 dark:text-white"
          >
            Ava Ahmadi
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-stone-300 dark:border-slate-800"
            >
              <div className="mx-auto max-w-3xl px-6 py-5">
                <p className="label-index mb-2 text-stone-400 dark:text-slate-500">Index</p>
                <div className="mb-5 flex flex-col gap-3">
                  {siteLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-base font-medium ${
                          isActive
                            ? 'text-accent-600 dark:text-accent-400'
                            : 'text-stone-700 dark:text-slate-300'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
                <p className="label-index mb-2 text-stone-400 dark:text-slate-500">Connect</p>
                <div className="flex flex-col gap-3">
                  {connectLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={isExternal(link.href) && !link.href.startsWith('mailto:') ? '_blank' : undefined}
                      rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                      className="text-base font-medium text-stone-700 dark:text-slate-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-5 border-t border-stone-200 pt-4 dark:border-slate-800">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
