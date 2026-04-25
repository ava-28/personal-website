'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { DecorativeShapes } from '@/components/DecorativeShapes'

const researchPositions = [
  {
    title: 'Research Assistant — Transformer Models (NLP)',
    supervisor: 'Dr. Jian Zhu',
    institution: 'University of British Columbia',
    period: 'Dec 2025 – Present',
    highlights: [
      'Studied Transformer architectures with attention-based representation learning',
      'Implemented and evaluated models in PyTorch',
      'Built simplified Transformer architectures from scratch',
      'Explored alternative training objectives such as energy-distance–based methods',
      'Conducted sensitivity analyses on architectural parameters',
    ],
  },
  {
    title: 'Research Assistant — Multilingual NLP',
    supervisor: 'Dr. Isabel Papadimitriou',
    institution: 'University of British Columbia',
    period: 'Jan 2025 – Present',
    highlights: [
      'Analyzed multilingual Transformer models',
      'Studied cross-lingual representation alignment',
      'Investigated encoding of linguistic structure in embeddings',
      'Implemented experiments in Python and PyTorch',
    ],
  },
]

export default function ResearchPage() {
  return (
    <div className="relative overflow-hidden">
      <DecorativeShapes />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="font-serif text-3xl font-semibold text-stone-900 md:text-4xl dark:text-stone-100">
            Research
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Two active research positions at the University of British Columbia
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchPositions.map((position) => (
            <Card key={position.title}>
              <div className="space-y-4">
                <div>
                  <h2 className="font-serif text-lg font-semibold text-stone-900 dark:text-stone-100">
                    {position.title}
                  </h2>
                  <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                    Supervisor: {position.supervisor}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {position.institution} · {position.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {position.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-stone-700 dark:text-stone-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
