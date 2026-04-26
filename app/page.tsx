'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MathBackground } from '@/components/MathBackground'
import { Section } from '@/components/Section'

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

          {/* Hero content: portrait + intro */}
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="relative shrink-0"
            >
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-br from-accent-400/40 via-violet-400/30 to-indigo-300/30 blur-2xl dark:from-accent-500/30 dark:via-violet-500/25 dark:to-indigo-400/25"
              />
              <Image
                src="/ava.png"
                alt="Ava Ahmadi"
                width={400}
                height={400}
                priority
                className="h-32 w-32 rounded-full object-cover ring-2 ring-white shadow-lg shadow-stone-900/10 dark:ring-slate-700 dark:shadow-black/40 md:h-40 md:w-40"
              />
            </motion.div>

            {/* Intro text + social icons */}
            <div className="min-w-0 flex-1">
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

              {/* Social icon links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-8 flex items-center gap-3"
              >
            {/* GitHub */}
            <a
              href="https://github.com/avaahmadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white transition-all hover:bg-accent-600 hover:scale-105 dark:bg-slate-700 dark:hover:bg-accent-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ava-ahmadi1228"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white transition-all hover:bg-accent-600 hover:scale-105 dark:bg-slate-700 dark:hover:bg-accent-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:avahmadii1382@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 text-white transition-all hover:bg-accent-600 hover:scale-105 dark:bg-slate-700 dark:hover:bg-accent-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* About me */}
        <Section className="mb-20">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              I&apos;m a Mathematics undergraduate at UBC (BSc, expected 2027), working on transformer-based retrieval with{' '}
              <a href="/research/retrieval" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">Dr. Jian Zhu</a>
              , specifically on Reason-ModernColBERT and neural retrieval systems, and on multilingual transformer mapping and cross-lingual representation alignment with{' '}
              <a href="/research/multilingual" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">Dr. Isabel Papadimitriou</a>
              , both at UBC.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              My interests span NLP, linear algebra, stochastic processes, optimization, and reinforcement learning, with a growing focus on <span className="font-medium text-stone-800 dark:text-slate-200">responsible AI</span>. I&apos;m also drawn to <span className="font-medium text-stone-800 dark:text-slate-200">quantitative finance</span>: the mathematics of uncertainty, risk, and how rigorous modeling translates into real market decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              Alongside my research, I founded and lead the{' '}
              <a href="https://awmubc.github.io" target="_blank" rel="noopener noreferrer" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">AWM chapter at UBC</a>
              , the first undergraduate chapter of the Association for Women in Mathematics at this institution, with a focus on building community, mentorship, and access for women across the mathematical sciences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400"
              >
                Full profile
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </Section>


        {/* Contact */}
        <Section className="mb-8">
          <h2 className="mb-4 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            Contact
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="leading-relaxed text-stone-600 dark:text-slate-300"
          >
            Feel free to reach out — I&apos;m always happy to connect about research, collaborations, or anything in between.
          </motion.p>
          <motion.a
            href="mailto:avahmadii1382@gmail.com"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-3 inline-block font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400"
          >
            avahmadii1382@gmail.com
          </motion.a>
        </Section>

      </div>
    </div>
  )
}
