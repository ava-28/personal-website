'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MathBackground } from '@/components/MathBackground'
import { Section } from '@/components/Section'



const heroTags = [
  {
    label: 'ML Research',
    href: '/research',
    external: false,
    color: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  },
  {
    label: 'UBC Math · 2027',
    href: '/projects',
    external: false,
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  },
  {
    label: 'AWM Founder',
    href: 'https://awmubc.github.io',
    external: true,
    color: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
  },
  {
    label: 'Optimization · Stochastics · NLP',
    href: '/research',
    external: false,
    color: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  },
]

const TAGLINE = 'Mathematics × Machine Learning × UBC'

export default function HomePage() {
  const [typed, setTyped] = useState('')
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>
    // Start after the name has animated in (~0.8s)
    const delayId = setTimeout(() => {
      let i = 0
      intervalId = setInterval(() => {
        i++
        setTyped(TAGLINE.slice(0, i))
        if (i >= TAGLINE.length) {
          clearInterval(intervalId)
          setTypingDone(true)
        }
      }, 52)
    }, 820)
    return () => {
      clearTimeout(delayId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <MathBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20">

        {/* Hero */}
        <div className="relative mb-14 pt-4">
          {/* Animated background blobs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-12 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/20"
            animate={{ x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-4 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20"
            animate={{ x: [0, -10, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/3 top-6 h-40 w-40 rounded-full bg-fuchsia-400/15 blur-2xl dark:bg-fuchsia-600/15"
            animate={{ x: [0, 8, -5, 0], y: [0, -12, 6, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-sky-400/15 blur-2xl dark:bg-sky-600/15"
            animate={{ x: [0, -6, 0], y: [0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-base font-medium text-stone-500 dark:text-slate-400"
          >
            Hey, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-1 font-sans text-3xl font-semibold tracking-tight md:text-4xl"
          >
            <span className="bg-gradient-to-r from-accent-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent dark:from-accent-400 dark:via-violet-400 dark:to-indigo-300">
              Ava Ahmadi
            </span>
          </motion.h1>

          {/* Tagline */}
          <p className="mt-4 min-h-[1.75rem] text-lg text-stone-600 dark:text-slate-400">
            {typed}
            {!typingDone && (
              <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse rounded-sm bg-accent-500 align-middle dark:bg-accent-400" />
            )}
          </p>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="https://www.linkedin.com/in/ava-ahmadi1228"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md dark:bg-accent-500 dark:hover:bg-accent-400"
            >
              LinkedIn
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-stone-100 px-5 py-2 text-sm font-bold text-stone-700 shadow-sm transition-all hover:bg-stone-200 hover:shadow-md dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              CV
            </a>
          </motion.div>
        </div>

        {/* About me */}
        <Section className="mb-20">
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            about me
          </h2>
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              I&apos;m a Mathematics undergraduate at UBC (BSc, expected 2027), working on NLP and transformer-based retrieval systems with{' '}
              <a href="/research" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">Dr. Jian Zhu</a>
              {' '}and on cross-lingual representation alignment with{' '}
              <a href="/research" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">Dr. Isabel Papadimitriou</a>
              , both at UBC.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              Broadly interested in stochastic processes, optimization, and reinforcement learning — with a growing focus on <span className="font-medium text-stone-800 dark:text-slate-200">RL and robotics</span> as research areas. I also founded and lead the{' '}
              <a href="https://awmubc.github.io" target="_blank" rel="noopener noreferrer" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">AWM chapter at UBC</a>
              .
            </motion.p>

            {/* Identity tags — moved from hero */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {heroTags.map((tag, i) => {
                const pill = (
                  <motion.span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold cursor-pointer ${tag.color}`}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.25 }}
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  >
                    {tag.label}
                  </motion.span>
                )
                return tag.external ? (
                  <a key={tag.label} href={tag.href} target="_blank" rel="noopener noreferrer">
                    {pill}
                  </a>
                ) : (
                  <Link key={tag.label} href={tag.href}>
                    {pill}
                  </Link>
                )
              })}
            </motion.div>
          </div>
        </Section>

        {/* Education */}
        <Section className="mb-20">
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            Education
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* UBC */}
            <motion.a
              href="https://www.math.ubc.ca"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -2 }}
              className="group block rounded-xl border border-stone-200 bg-white/60 p-5 transition-all hover:border-accent-300 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-accent-600"
            >
              <p className="font-medium text-stone-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                University of British Columbia
              </p>
              <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
                BSc Mathematics · Expected 2027
              </p>
              <p className="mt-3 text-xs text-accent-500 opacity-0 transition-opacity group-hover:opacity-100 dark:text-accent-400">
                math.ubc.ca →
              </p>
            </motion.a>

            {/* SAMPAD */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="rounded-xl border border-stone-200 bg-white/60 p-5 dark:border-slate-700 dark:bg-slate-800/60"
            >
              <p className="font-medium text-stone-900 dark:text-slate-100">
                Farznegan High School (SAMPAD)
              </p>
              <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
                Secondary School Education
              </p>
              {/* placeholder to keep same height as UBC card */}
              <p className="mt-3 text-xs text-transparent select-none">·</p>
            </motion.div>

          </div>
        </Section>



      </div>
    </div>
  )
}
