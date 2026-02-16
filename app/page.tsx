'use client'

import { motion } from 'framer-motion'
import { DecorativeShapes } from '@/components/DecorativeShapes'
import { Section } from '@/components/Section'

const researchAreas = [
  'Natural Language Processing',
  'Transformer-based Retrieval Systems',
  'Multilingual Representation Learning',
  'Reinforcement Learning',
  'Mathematical Optimization',
]

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

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <DecorativeShapes />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="font-serif text-3xl font-semibold text-stone-900 md:text-4xl dark:text-stone-100">
            Ava Ahmadi
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            BSc Mathematics · University of British Columbia
          </p>
        </motion.div>

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

        <Section className="mb-20">
          <h2 className="mb-6 font-serif text-xl font-semibold text-stone-900 dark:text-stone-100">
            About
          </h2>
          <p className="mb-6 leading-relaxed text-stone-700 dark:text-stone-300">
            I am an undergraduate Mathematics student at the University of
            British Columbia working at the intersection of:
          </p>
          <ul className="mb-6 space-y-2">
            {researchAreas.map((area, i) => (
              <motion.li
                key={area}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 text-stone-700 dark:text-stone-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                {area}
              </motion.li>
            ))}
          </ul>
          <p className="leading-relaxed text-stone-700 dark:text-stone-300">
            My work focuses on understanding how modern AI models learn
            representations, reason across languages, and scale efficiently in
            high-performance computing environments.
          </p>
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
