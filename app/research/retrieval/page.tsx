'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/Card'

/* ─── animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}



/* ─── page ─── */
export default function RetrievalPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24">

        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="pt-12">
          <Link href="/research" className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-accent-600 transition-colors dark:text-slate-500 dark:hover:text-accent-400">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M10 4L6 8l4 4" />
            </svg>
            Research
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-12 mt-4"
        >
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Transformer-Based Retrieval
          </h1>
          <p className="mt-2 text-stone-500 dark:text-slate-400">
            Supervisor: Dr. Jian Zhu · UBC · Dec 2025 – Present
          </p>
        </motion.div>

        <div className="space-y-14">

          {/* Overview */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Card>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  This project investigates how reasoning can be integrated into late-interaction retrieval models.
                  Working from the ColBERT family of architectures, the goal is to improve retrieval quality on complex,
                  multi-hop, and reason-requiring queries — settings where standard bi-encoder and sparse models fall short.
                  The work involves model implementation, HPC-based training on GPU clusters, and systematic evaluation
                  across standard retrieval benchmarks.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['ColBERT', 'SPLADE', 'Neural IR', 'PyTorch', 'HPC / H100', 'BEIR', 'MS MARCO'].map((tag) => (
                    <span key={tag} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Presentations */}
          <section>
            <h2 className="mb-5 font-sans text-xl font-bold text-stone-900 dark:text-white">
              Presentations
            </h2>
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-sans text-sm font-bold text-stone-900 dark:text-slate-100">
                    Sparse-to-Dense Retrieval on BRIGHT: SPLADE Retrieval with ColBERT Reranking
                  </p>
                  <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                    Canadian AI 2026 · Responsible AI Track · Poster / 3MT
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                    NSERC CREATE Scholarship
                  </span>
                  <span className="text-xs text-stone-400 dark:text-slate-500">May 2026</span>
                </div>
              </div>
              <div className="my-4 border-t border-stone-100 dark:border-slate-700/60" />
              <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                This work evaluates a sparse-to-dense retrieval pipeline on the BRIGHT benchmark, a challenging
                reasoning-intensive retrieval dataset. We use SPLADE as a first-stage retriever over the biology domain,
                followed by ColBERT as a late-interaction reranker. Our work reproduces and stress-tests this pipeline
                under realistic evaluation conditions, examining where sparse retrieval succeeds and where denser
                reranking is necessary to close the performance gap. The study contributes a reproducibility perspective
                on the interaction between sparse and dense retrieval in complex, knowledge-intensive tasks.
              </p>

              {/* ── Results ── */}
              <div className="mt-6 space-y-5">

                {/* KPI summary cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Best Recall@10', value: '0.348', system: 'ColBERT', accent: false },
                    { label: 'Best nDCG@10', value: '0.309', system: 'SPLADE + ColBERT', accent: true },
                    { label: 'Best MRR', value: '0.419', system: 'ColBERT', accent: false },
                  ].map((kpi) => (
                    <div key={kpi.label} className={`rounded-xl border p-4 text-center ${kpi.accent ? 'border-accent-200 bg-accent-50 dark:border-accent-700/40 dark:bg-accent-900/20' : 'border-stone-200 bg-stone-50 dark:border-slate-700 dark:bg-slate-800/60'}`}>
                      <p className="text-xs text-stone-400 dark:text-slate-500">{kpi.label}</p>
                      <p className={`mt-1 text-2xl font-bold tabular-nums ${kpi.accent ? 'text-accent-600 dark:text-accent-400' : 'text-stone-900 dark:text-white'}`}>{kpi.value}</p>
                      <p className="mt-0.5 text-xs text-stone-500 dark:text-slate-400">{kpi.system}</p>
                    </div>
                  ))}
                </div>

                {/* Results table */}
                <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-slate-700">
                  <div className="border-b border-stone-200 bg-stone-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-800/60">
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-slate-500">
                      Results — BRIGHT Biology · 103 Queries
                    </p>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-slate-800 text-white dark:bg-slate-900">
                        <th className="px-4 py-2.5 text-left font-semibold">Pipeline</th>
                        <th className="px-3 py-2.5 text-center font-semibold">nDCG@10</th>
                        <th className="px-3 py-2.5 text-center font-semibold">Recall@10</th>
                        <th className="px-3 py-2.5 text-center font-semibold">MRR</th>
                        <th className="px-3 py-2.5 text-center font-semibold">MAP</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white dark:divide-slate-700/60 dark:bg-slate-800/40">
                      {/* SPLADE baseline */}
                      <tr>
                        <td className="px-4 py-3">
                          <p className="font-bold text-stone-800 dark:text-slate-200">SPLADE</p>
                          <p className="text-stone-400 dark:text-slate-500">First-stage only, no reranking</p>
                        </td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.218</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.254</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.291</td>
                        <td className="px-3 py-3 text-center text-stone-300 dark:text-slate-600">—</td>
                      </tr>
                      {/* Two-stage pipeline — highlighted */}
                      <tr className="bg-accent-50 dark:bg-accent-900/20">
                        <td className="px-4 py-3">
                          <div className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0 text-accent-500">★</span>
                            <div>
                              <p className="font-bold text-stone-800 dark:text-slate-200">Two-stage pipeline</p>
                              <p className="text-stone-400 dark:text-slate-500">SPLADE + ColBERT (sparse → dense reranker)</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-center tabular-nums font-bold text-accent-600 dark:text-accent-400 underline decoration-dotted underline-offset-2">0.309</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.345</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.411</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.255</td>
                      </tr>
                      {/* Dense baseline */}
                      <tr>
                        <td className="px-4 py-3">
                          <p className="font-bold text-stone-800 dark:text-slate-200">Dense baseline</p>
                          <p className="text-stone-400 dark:text-slate-500">ColBERT dense only (full corpus, no filter)</p>
                        </td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.308</td>
                        <td className="px-3 py-3 text-center tabular-nums font-bold text-accent-600 dark:text-accent-400">0.348</td>
                        <td className="px-3 py-3 text-center tabular-nums font-bold text-accent-600 dark:text-accent-400">0.419</td>
                        <td className="px-3 py-3 text-center tabular-nums text-stone-600 dark:text-slate-300">0.255</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="border-t border-stone-100 px-5 py-2 text-xs text-stone-400 dark:border-slate-700/60 dark:text-slate-500">
                    Best values per metric are in <strong>bold</strong>. ★ marks the proposed pipeline.
                  </p>
                </div>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['SPLADE', 'ColBERT', 'BRIGHT Benchmark', 'Sparse-to-Dense', 'Reranking', 'Reproducibility'].map((tag) => (
                  <span key={tag} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </div>
  )
}
