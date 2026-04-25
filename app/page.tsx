'use client'

import { motion } from 'framer-motion'
import { DecorativeShapes } from '@/components/DecorativeShapes'
import { Section } from '@/components/Section'

const researchInterests = [
  'Transformer-based retrieval',
  'Multilingual representation learning',
  'Reinforcement learning',
  'Mathematical optimization',
  'Stochastic processes',
  'HPC & large-scale training',
  'Quantitative finance',
]

const personalInterests = [
  'Watching stars and reading about astrophysics',
  'Oil painting',
  'Solving puzzles',
  'Formula 1',
]

const education = [
  {
    institution: 'University of British Columbia',
    detail: 'BSc Mathematics · Expected 2027',
  },
  {
    institution: 'Farznegan High School (SAMPAD)',
    detail: 'Secondary School Education',
  },
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <DecorativeShapes />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20">

        {/* Hero */}
        <div className="relative mb-24 pt-12">
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

          {/* Name — gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-1 font-sans text-6xl font-black tracking-tight md:text-8xl"
          >
            <span className="bg-gradient-to-r from-accent-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent dark:from-accent-400 dark:via-violet-400 dark:to-indigo-300">
              Ava Ahmadi
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.38 }}
            className="mt-4 text-lg text-stone-600 dark:text-slate-400"
          >
            Mathematics × Machine Learning × UBC
          </motion.p>

          {/* Identity tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {[
              { label: 'ML Research', color: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/50' },
              { label: 'UBC Math · 2027', color: 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700/50' },
              { label: 'AWM Founder', color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-700/50' },
              { label: 'Optimization · Stochastics · NLP', color: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700/50' },
            ].map((tag, i) => (
              <motion.span
                key={tag.label}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${tag.color}`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.3 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
              >
                {tag.label}
              </motion.span>
            ))}
          </motion.div>

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
              className="rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold text-stone-700 shadow-sm transition-all hover:border-stone-400 hover:shadow-md dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-400"
            >
              CV
            </a>
          </motion.div>
        </div>

        {/* About */}
        <Section className="mb-20">
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            About
          </h2>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              I&apos;m a Mathematics undergraduate at UBC working at the intersection of machine learning, natural language processing, and mathematical theory. I hold two active research positions — one studying transformer architectures and retrieval systems with Dr. Jian Zhu, and another investigating cross-lingual representation alignment with Dr. Isabel Papadimitriou.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="leading-relaxed text-stone-600 dark:text-slate-300"
            >
              I&apos;m also drawn to the mathematical underpinnings of complex systems — stochastic processes, optimization, and reinforcement learning — and how these connect to quantitative finance and astrophysics. Outside of research, I founded and lead the AWM chapter at UBC.
            </motion.p>
          </div>
        </Section>

        {/* Education */}
        <Section className="mb-20">
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-5">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="font-medium text-stone-900 dark:text-slate-100">
                  {item.institution}
                </p>
                <p className="text-sm text-stone-500 dark:text-slate-400">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Research Interests */}
        <Section className="mb-20">
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Outside of Research */}
        <Section>
          <h2 className="mb-6 font-sans text-2xl font-bold text-stone-900 dark:text-white">
            Outside of Research
          </h2>
          <ul className="space-y-3">
            {personalInterests.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-stone-600 dark:text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </Section>

      </div>
    </div>
  )
}
