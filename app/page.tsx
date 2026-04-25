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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-24 pt-12"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-8 h-36 w-36 rounded-2xl bg-accent-300/30 blur-3xl dark:bg-accent-700/25"
            animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <p className="text-base font-medium text-stone-500 dark:text-slate-400">
            Hey, I&apos;m
          </p>
          <h1 className="mt-1 font-sans text-6xl font-black tracking-tight text-stone-900 md:text-8xl dark:text-white">
            Ava Ahmadi
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-slate-400">
            Mathematics × Machine Learning × UBC
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/ava-ahmadi1228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              LinkedIn →
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
            >
              CV →
            </a>
          </div>
        </motion.div>

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
