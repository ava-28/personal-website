'use client'

import { motion } from 'framer-motion'
import { DecorativeShapes } from '@/components/DecorativeShapes'
import { Section } from '@/components/Section'

const enjoyItems = [
  'Watching stars and reading about them',
  'Mathematical modeling of real-world systems',
  'Understanding how large-scale AI systems learn',
  'Representation learning in multilingual models',
  'Reinforcement learning & decision processes',
  'Optimization & stochastic modeling',
  'GPU-based large-scale experimentation',
  'Oil painting',
  'Solving puzzles',
  'Reading about Formula 1 (F1) news',
]

const education = [
  {
    institution: 'University of British Columbia',
    detail: 'BSc Mathematics',
  },
  {
    institution: 'Farznegan High School (SAMPAD)',
    detail: 'Secondary School Education',
  },
]

const aboutParagraphs = [
  "I'm an undergraduate Mathematics student at the University of British Columbia with a strong interest in how modern AI systems learn, represent, and reason with information.",
  "My work sits at the intersection of natural language processing, transformer-based retrieval models, multilingual representation learning, reinforcement learning, and mathematical optimization. I'm particularly interested in understanding how large-scale AI models develop meaningful representations across languages, and how these systems can be designed to scale efficiently in high-performance computing environments.",
  "Alongside my work in AI, I'm deeply interested in reinforcement learning and its applications in finance, especially in the design and analysis of data-driven financial models and decision-making systems under uncertainty.",
  "Beyond machine learning, I've always been fascinated by astrophysics and the mathematical structure of the universe. I previously participated in the National Astrophysics Olympiad, which sparked my ongoing interest in studying stars and complex physical systems through a mathematical lens.",
  'Through my research, I explore both the theoretical foundations and practical implementations of machine learning models, from studying their mathematical behavior to working with large-scale training and retrieval systems on HPC clusters.',
]

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <DecorativeShapes />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
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
            BSc Mathematics · University of British Columbia
          </p>
        </motion.div>

        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            About
          </h2>
          <div className="space-y-4">
            {aboutParagraphs.map((paragraph, i) => (
              <motion.p
                key={paragraph.slice(0, 40)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="leading-relaxed text-stone-700 dark:text-stone-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </Section>

        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            Education
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <p className="font-serif text-base text-stone-900 dark:text-stone-100">
                  {item.institution}
                </p>
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            What I Enjoy Working On
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {enjoyItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-300" />
                <span className="text-stone-700 dark:text-stone-200">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  )
}
