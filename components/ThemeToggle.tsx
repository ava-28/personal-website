'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_KEY = 'ava-theme'

function getPreferredTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(THEME_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const initialTheme = getPreferredTheme()
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    window.localStorage.setItem(THEME_KEY, nextTheme)
    applyTheme(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      disabled={!isMounted}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-stone-600 transition-colors hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:text-accent-400"
    >
      {theme === 'dark' ? (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M4.22 4.22l1.42 1.42" />
          <path d="M18.36 18.36l1.42 1.42" />
          <path d="M1 12h2" />
          <path d="M21 12h2" />
          <path d="M4.22 19.78l1.42-1.42" />
          <path d="M18.36 5.64l1.42-1.42" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        <span className="relative inline-flex items-center justify-center">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3c0.08 0 0.16 0 0.24 0A7 7 0 0 0 21 12.79Z" />
          </svg>
          {/* tiny star */}
          <svg
            aria-hidden
            viewBox="0 0 10 10"
            className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 fill-current"
          >
            <path d="M5 0l.9 2.8H8.5L6.2 4.5l.9 2.8L5 5.6l-2.1 1.7.9-2.8L1.5 2.8H4.1z" />
          </svg>
        </span>
      )}
    </button>
  )
}
