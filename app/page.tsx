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
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20"
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-8 h-28 w-28 rounded-2xl bg-accent-300/45 blur-2xl dark:bg-accent-700/35"
            animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <h1 className="font-serif text-3xl font-semibold text-stone-900 md:text-4xl dark:text-stone-100">
            Ava Ahmadi
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Mathematics, machine learning, and the structure of things.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ava-ahmadi1228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200"
            >
              LinkedIn
            </a>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200"
            >
              CV
            </a>
          </div>
        </motion.div>

        {/* About */}
        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            About
          </h2>
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="leading-relaxed text-stone-700 dark:text-stone-300"
            >
              I&apos;m a Mathematics undergraduate at UBC working at the intersection of machine learning, natural language processing, and mathematical theory. I hold two active research positions — one studying transformer architectures and retrieval systems with Dr. Jian Zhu, and another investigating cross-lingual representation alignment with Dr. Isabel Papadimitriou.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="leading-relaxed text-stone-700 dark:text-stone-300"
            >
              I&apos;m also drawn to the mathematical underpinnings of complex systems — stochastic processes, optimization, and reinforcement learning — and how these connect to areas like quantitative finance and astrophysics, where rigorous modeling meets real-world uncertainty. Outside of research, I founded and lead the AWM chapter at UBC.
            </motion.p>
          </div>
        </Section>

        {/* Education */}
        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
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
                <p className="text-stone-900 dark:text-stone-100">
                  {item.institution}
                </p>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Research Interests */}
        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
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
                className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Outside of Research */}
        <Section>
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
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
                className="flex items-center gap-3 text-stone-700 dark:text-stone-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </Section>

      </div>
    </div>
  )
}
