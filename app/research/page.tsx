'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const researchAreas = [
  {
    href: '/research/retrieval',
    title: 'Transformer-Based Retrieval',
    supervisor: 'Dr. Jian Zhu',
    period: 'Dec 2025 – Present',
    description:
      'Investigating how reasoning integrates into late-interaction retrieval models, building on the ColBERT family of architectures to improve performance on complex, reasoning-intensive queries.',
    badge: 'NSERC CREATE Scholarship',
    presentation: 'Canadian AI 2026 · Responsible AI Track · Poster / 3MT',
    tags: ['ColBERT', 'SPLADE', 'Neural IR', 'BRIGHT'],
    sections: ['Background', 'MaxSim Operation', 'Reason-ModernColBERT', 'Pipeline', 'Further Reading', 'Presentations'],
    bannerImage: '/colbert-heatmap.png',
    gradientFrom: 'from-violet-400/30',
    gradientVia: 'via-fuchsia-400/20',
    gradientTo: 'to-indigo-400/25',
    termColor: 'text-violet-400/40 dark:text-violet-300/20',
    terms: ['SPLADE', 'ColBERT', 'MaxSim', 'BRIGHT', 'PLAID', 'BM25', 'BEIR'],
  },
  {
    href: '/research/multilingual',
    title: 'Multilingual Transformer Mapping',
    supervisor: 'Dr. Isabel Papadimitriou',
    period: 'Jan 2025 – Present',
    description:
      'Studying how multilingual transformers represent and align linguistic structure across languages — and what drives cross-lingual generalisation in models like mBERT and XLM-R.',
    badge: null,
    presentation: null,
    tags: ['mBERT', 'XLM-R', 'CKA', 'Probing', 'Cross-lingual Transfer'],
    sections: ['Background', 'Research Questions', 'Pipeline'],
    bannerImage: null,
    gradientFrom: 'from-indigo-400/30',
    gradientVia: 'via-sky-400/20',
    gradientTo: 'to-emerald-400/25',
    termColor: 'text-indigo-400/40 dark:text-indigo-300/20',
    terms: ['mBERT', 'XLM-R', 'CKA', 'Probing', 'UD', 'XNLI', 'XTREME'],
  },
]

export default function ResearchPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 pt-12"
        >
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Research
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Two active research positions at the University of British Columbia
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link href={area.href} className="group block">
                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/60 transition-all hover:border-accent-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-accent-600">

                  {/* Visual banner */}
                  <div className={`relative h-40 overflow-hidden ${area.bannerImage ? '' : `bg-gradient-to-br ${area.gradientFrom} ${area.gradientVia} ${area.gradientTo}`}`}>
                    {area.bannerImage ? (
                      <>
                        {/* Heatmap image */}
                        <img
                          src={area.bannerImage}
                          alt="ColBERT MaxSim similarity heatmap"
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        {/* Subtle dark overlay so the arrow stays visible */}
                        <div className="absolute inset-0 bg-black/20" />
                      </>
                    ) : (
                      /* Floating terms (gradient cards only) */
                      <div className="absolute inset-0 flex flex-wrap items-center justify-around gap-x-6 gap-y-3 px-8 py-6 select-none">
                        {area.terms.map((term, ti) => (
                          <span
                            key={term}
                            className={`font-mono text-sm font-bold ${area.termColor}`}
                            style={{ transform: `rotate(${(ti % 3 - 1) * 4}deg)` }}
                          >
                            {term}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Arrow hint */}
                    <div className="absolute bottom-4 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-all group-hover:bg-accent-600/80 group-hover:scale-110">
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h2 className="font-sans text-base font-bold text-stone-900 transition-colors group-hover:text-accent-600 dark:text-slate-100 dark:group-hover:text-accent-400">
                          {area.title}
                        </h2>
                        <p className="mt-0.5 text-sm text-accent-600 dark:text-accent-400">
                          {area.supervisor} · UBC · {area.period}
                        </p>
                        {area.presentation && (
                          <p className="mt-1 text-xs text-stone-400 dark:text-slate-500">
                            {area.presentation}
                          </p>
                        )}
                      </div>
                      {area.badge && (
                        <span className="shrink-0 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                          {area.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                      {area.description}
                    </p>

                    {/* Section preview */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {area.sections.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
