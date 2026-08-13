'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MathBackground } from '@/components/MathBackground'
import { StochasticField } from '@/components/StochasticField'
import { Section } from '@/components/Section'

const TAGLINE = 'Mathematics × Machine Learning × Quantitative Finance'

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
      }, 42)
    }, 700)
    return () => {
      clearTimeout(delayId)
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      <MathBackground />

      {/* ── Hero band ── */}
      <div className="relative overflow-hidden border-b border-stone-300 bg-paper dark:border-slate-800">
        <StochasticField />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-14 pt-16 xl:pt-24">

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="label-index text-accent-600 dark:text-accent-400"
          >
            Mathematics — University of British Columbia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-3 font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-stone-900 dark:text-white sm:text-6xl md:text-7xl"
          >
            Ava
            <br />
            Ahmadi
          </motion.h1>

          <div className="mt-7 flex flex-col-reverse gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.85 }}
              className="min-h-[1.75rem] max-w-md text-lg text-stone-600 dark:text-slate-400"
            >
              {typed}
              {!typingDone && (
                <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse rounded-sm bg-accent-600 align-middle dark:bg-accent-400" />
              )}
            </motion.p>

            {/* Portrait — framed like a figure in a paper, not a soft avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="shrink-0 self-start sm:self-end"
            >
              <div className="border-2 border-stone-900 bg-white p-1 dark:border-white dark:bg-slate-900">
                <Image
                  src="/ava-ahmadi.png"
                  alt="Ava Ahmadi"
                  width={400}
                  height={400}
                  priority
                  className="h-32 w-32 object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
                />
              </div>
            </motion.div>
          </div>

          {/* Social icon links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.05 }}
            className="mt-9 flex items-center gap-3"
          >
            {/* GitHub */}
            <a
              href="https://github.com/ava-28"
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-14">

        {/* About me */}
        <Section className="mb-16">
          <p className="label-index mb-4 text-stone-400 dark:text-slate-500">Index — About</p>
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
          </div>
        </Section>

        {/* Contact */}
        <Section className="mb-8">
          <p className="label-index mb-4 text-stone-400 dark:text-slate-500">Index — Contact</p>
          <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight text-stone-900 dark:text-white">
            Get in touch
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
