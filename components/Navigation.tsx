'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ThemeToggle'

const siteLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#research', label: 'Research' },
  { href: '/#education', label: 'Education' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#leadership', label: 'Leadership' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#awards', label: 'Awards' },
]

const connectLinks = [
  { href: 'mailto:avahmadii1382@gmail.com', label: 'Email' },
  { href: 'https://github.com/ava-28', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ava-ahmadi1228', label: 'LinkedIn' },
]

function isExternal(href: string) {
  return href.startsWith('http')
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-stone-300 bg-stone-50/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-3.5">
        <Link href="/" className="text-[15px] font-bold text-stone-900 dark:text-white">
          Ava Ahmadi
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 flex-wrap items-center gap-x-5 gap-y-1 text-sm md:flex"
        >
          {siteLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-stone-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 text-sm md:flex">
          {connectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={isExternal(link.href) ? '_blank' : undefined}
              rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
              className="text-stone-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-300 px-6 py-5 dark:border-slate-800 md:hidden">
          <div className="mb-5 flex flex-col gap-3">
            {siteLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-stone-700 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 border-t border-stone-200 pt-4 dark:border-slate-800">
            {connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={isExternal(link.href) ? '_blank' : undefined}
                rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                className="text-base font-medium text-stone-700 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
