'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/Card'

/* ─── animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}

/* ─── data ─── */
const retrievalConcepts = [
  {
    title: 'Sparse Retrieval',
    tag: 'SPLADE · BM25',
    color: 'bg-sky-50 border-sky-200 dark:bg-sky-900/20 dark:border-sky-700/40',
    tagColor: 'bg-sky-100 text-sky-700 dark:bg-sky-800/50 dark:text-sky-300',
    description:
      'Sparse methods represent queries and documents as high-dimensional but sparse vectors over a vocabulary. BM25 uses exact term matching with TF-IDF weighting. SPLADE extends this by learning soft lexical expansions through a masked language model head, allowing unseen but semantically related terms to receive non-zero weights.',
    properties: ['Interpretable term weights', 'Vocabulary-sized vectors', 'Efficient inverted-index lookup', 'SPLADE learns lexical expansion'],
  },
  {
    title: 'Dense Retrieval',
    tag: 'DPR · bi-encoder',
    color: 'bg-violet-50 border-violet-200 dark:bg-violet-900/20 dark:border-violet-700/40',
    tagColor: 'bg-violet-100 text-violet-700 dark:bg-violet-800/50 dark:text-violet-300',
    description:
      'Dense retrievers encode queries and documents into single fixed-size vectors using dual BERT encoders. Relevance is computed as a dot product between the two vectors. While highly semantic, a single vector must compress all document meaning, which loses fine-grained token-level information.',
    properties: ['Single [CLS] vector per text', 'Semantic similarity via dot product', 'Fast approximate nearest-neighbour search', 'Can miss exact term matches'],
  },
  {
    title: 'Late Interaction',
    tag: 'ColBERT · MaxSim',
    color: 'bg-fuchsia-50 border-fuchsia-200 dark:bg-fuchsia-900/20 dark:border-fuchsia-700/40',
    tagColor: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-800/50 dark:text-fuchsia-300',
    description:
      'ColBERT retains a full token-level embedding for every query and document token. Relevance is computed via MaxSim: for each query token embedding, find its maximum dot-product similarity across all document token embeddings, then sum these per-token scores. This preserves expressive token-level interaction while remaining efficient.',
    properties: ['Token-level embeddings for q and d', 'MaxSim: Σᵢ maxⱼ(qᵢ · dⱼ)', 'Deferred interaction after encoding', 'Balances expressiveness and efficiency'],
  },
]

const pipelineSteps = [
  {
    step: '01',
    title: 'Data Preparation',
    description: 'Curate and preprocess retrieval corpora. Clean document collections, construct query–passage pairs, and set up evaluation splits (BEIR, MS MARCO).',
    tech: 'Python · HuggingFace Datasets',
  },
  {
    step: '02',
    title: 'Model Architecture',
    description: 'Load ModernColBERT backbone (BERT-based). Add query and document projection heads producing L2-normalized token embeddings of dimension 128.',
    tech: 'PyTorch · Transformers',
  },
  {
    step: '03',
    title: 'Reasoning Integration',
    description: 'Reason-ModernColBERT augments the encoder with chain-of-thought reasoning signals, enabling the model to attend over latent reasoning traces before producing retrieval embeddings.',
    tech: 'Custom training objective',
  },
  {
    step: '04',
    title: 'Training',
    description: 'Fine-tune with in-batch negatives and hard negatives mined from BM25. Use knowledge distillation from a cross-encoder teacher to improve ranking calibration.',
    tech: 'H100 GPUs · Sockeye HPC · Fir',
  },
  {
    step: '05',
    title: 'Indexing & Retrieval',
    description: 'Pre-compute and compress document token embeddings into an approximate nearest-neighbour index. At query time, compute MaxSim scores against top candidates.',
    tech: 'FAISS · PLAID engine',
  },
  {
    step: '06',
    title: 'Evaluation',
    description: 'Benchmark on BEIR zero-shot generalization and MS MARCO in-domain MRR@10 and Recall@100. Analyse trade-offs between latency, index size, and accuracy.',
    tech: 'BEIR · MS MARCO · TREC',
  },
]

const furtherReadingPapers = [
  {
    title: 'ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT',
    venue: 'SIGIR 2020 · Khattab & Zaharia',
    why: 'Introduces the late-interaction paradigm and MaxSim scoring that Reason-ModernColBERT builds directly upon.',
    abstract: 'https://arxiv.org/abs/2004.12832',
    sections: [
      { label: 'Introduction', url: 'https://arxiv.org/pdf/2004.12832#page=1' },
      { label: 'ColBERT Architecture', url: 'https://arxiv.org/pdf/2004.12832#page=3' },
      { label: 'Offline Indexing', url: 'https://arxiv.org/pdf/2004.12832#page=4' },
      { label: 'Experiments', url: 'https://arxiv.org/pdf/2004.12832#page=5' },
    ],
  },
  {
    title: 'SPLADE: Sparse Lexical and Expansion Model for First Stage Retrieval',
    venue: 'SIGIR 2021 · Formal et al.',
    why: 'Defines the SPLADE sparse retrieval model used as first-stage retriever in the Canadian AI 2026 poster work.',
    abstract: 'https://arxiv.org/abs/2107.05720',
    sections: [
      { label: 'Introduction', url: 'https://arxiv.org/pdf/2107.05720#page=1' },
      { label: 'SPLADE Model', url: 'https://arxiv.org/pdf/2107.05720#page=2' },
      { label: 'Regularisation', url: 'https://arxiv.org/pdf/2107.05720#page=3' },
      { label: 'Results', url: 'https://arxiv.org/pdf/2107.05720#page=4' },
    ],
  },
  {
    title: 'BRIGHT: A Realistic and Challenging Benchmark for Reasoning-Intensive Retrieval',
    venue: 'arXiv 2024 · Su et al.',
    why: 'The evaluation benchmark used in the poster — tests retrieval on queries that require real-world reasoning rather than surface-level matching.',
    abstract: 'https://arxiv.org/abs/2406.07882',
    sections: [
      { label: 'Introduction', url: 'https://arxiv.org/pdf/2406.07882#page=1' },
      { label: 'Benchmark Design', url: 'https://arxiv.org/pdf/2406.07882#page=3' },
      { label: 'Biology Domain', url: 'https://arxiv.org/pdf/2406.07882#page=5' },
      { label: 'Baseline Results', url: 'https://arxiv.org/pdf/2406.07882#page=7' },
    ],
  },
  {
    title: 'ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction',
    venue: 'NAACL 2022 · Santhanam et al.',
    why: 'Introduces residual compression and denoised supervision — key components that ModernColBERT inherits.',
    abstract: 'https://arxiv.org/abs/2112.01488',
    sections: [
      { label: 'Introduction', url: 'https://arxiv.org/pdf/2112.01488#page=1' },
      { label: 'Denoised Supervision', url: 'https://arxiv.org/pdf/2112.01488#page=3' },
      { label: 'Residual Compression', url: 'https://arxiv.org/pdf/2112.01488#page=4' },
      { label: 'Experiments', url: 'https://arxiv.org/pdf/2112.01488#page=6' },
    ],
  },
]

/* ─── components ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-xl font-bold text-stone-900 dark:text-white">
      {children}
    </h2>
  )
}

function ConceptCard({ concept, index }: { concept: typeof retrievalConcepts[0]; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`rounded-xl border p-5 cursor-pointer transition-all ${concept.color} ${open ? 'shadow-sm' : ''}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className={`mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${concept.tagColor}`}>
            {concept.tag}
          </span>
          <h3 className="font-sans text-base font-bold text-stone-900 dark:text-slate-100">
            {concept.title}
          </h3>
        </div>
        <span className="mt-1 shrink-0 text-stone-400 dark:text-slate-500 text-sm select-none">
          {open ? '▲' : '▼'}
        </span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-slate-300">{concept.description}</p>
            <ul className="mt-3 space-y-1.5">
              {concept.properties.map((p) => (
                <li key={p} className="flex items-start gap-2 text-xs text-stone-600 dark:text-slate-400">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-50" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function PipelineStep({ step, index, total }: { step: typeof pipelineSteps[0]; index: number; total: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white dark:bg-accent-500">
          {step.step}
        </div>
        {index < total - 1 && <div className="mt-1 w-px flex-1 bg-stone-200 dark:bg-slate-700" />}
      </div>
      <div className="pb-8">
        <p className="font-sans text-sm font-bold text-stone-900 dark:text-slate-100">{step.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-stone-600 dark:text-slate-300">{step.description}</p>
        <span className="mt-2 inline-block rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400">
          {step.tech}
        </span>
      </div>
    </motion.div>
  )
}

function MaxSimViz() {
  const queryTokens = ['what', 'is', 'retrieval', '?']
  const docTokens = ['information', 'retrieval', 'finds', 'documents']
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-stone-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-slate-500">
        MaxSim — Late Interaction Scoring
      </p>
      <div className="mb-2 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">query</span>
        <div className="flex gap-2">
          {queryTokens.map((t) => (
            <div key={t} className="rounded-lg bg-fuchsia-100 px-3 py-1.5 text-xs font-bold text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300">{t}</div>
          ))}
        </div>
      </div>
      <div className="my-2 flex items-center gap-2">
        <span className="w-16 shrink-0" />
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-stone-400 dark:text-slate-500">each query token → max dot-product with all document tokens</p>
          <div className="flex gap-6 text-stone-300 dark:text-slate-600 text-sm select-none">
            {queryTokens.map((t) => <span key={t}>↓</span>)}
          </div>
        </div>
      </div>
      <div className="mb-3 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">doc</span>
        <div className="flex gap-2">
          {docTokens.map((t) => (
            <div key={t} className="rounded-lg bg-sky-100 px-3 py-1.5 text-xs font-bold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">{t}</div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">score</span>
        <div className="rounded-lg bg-accent-50 px-4 py-2 font-mono text-sm font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
          S(q, d) = Σᵢ max<sub>j</sub> ( q<sub>i</sub> · d<sub>j</sub> )
        </div>
      </div>
    </div>
  )
}

function FurtherReading() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <section>
      <SectionHeading>Further Reading</SectionHeading>
      <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-slate-400">
        Key papers behind this work — click a paper to jump to specific sections.
      </p>
      <div className="space-y-2">
        {furtherReadingPapers.map((paper, i) => (
          <div key={paper.title} className="overflow-hidden rounded-xl border border-stone-200 bg-white/60 dark:border-slate-700 dark:bg-slate-800/60">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="flex w-full items-start justify-between gap-3 p-4 text-left"
            >
              <div>
                <p className="text-sm font-bold text-stone-900 dark:text-slate-100 leading-snug">{paper.title}</p>
                <p className="mt-0.5 text-xs text-stone-400 dark:text-slate-500">{paper.venue}</p>
              </div>
              <span className="mt-0.5 shrink-0 text-stone-400 dark:text-slate-500 text-xs select-none">
                {openIdx === i ? '▲' : '▼'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIdx === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-stone-100 px-4 pb-4 pt-3 dark:border-slate-700/60">
                    <p className="mb-3 text-xs leading-relaxed text-stone-500 dark:text-slate-400">{paper.why}</p>
                    <div className="flex flex-wrap gap-2">
                      <a href={paper.abstract} target="_blank" rel="noopener noreferrer"
                        className="rounded-full bg-accent-600 px-3 py-1 text-xs font-bold text-white hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-400 transition-colors">
                        Abstract
                      </a>
                      {paper.sections.map((s) => (
                        <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                          className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 hover:bg-stone-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors">
                          {s.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
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

          {/* Background */}
          <section>
            <SectionHeading>Background — Retrieval Paradigms</SectionHeading>
            <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-slate-400">
              Click each card to expand. Modern neural retrieval sits at the intersection of three paradigms — understanding their trade-offs motivates the late-interaction approach.
            </p>
            <div className="space-y-3">
              {retrievalConcepts.map((c, i) => <ConceptCard key={c.title} concept={c} index={i} />)}
            </div>
          </section>

          {/* MaxSim */}
          <section>
            <SectionHeading>The MaxSim Operation</SectionHeading>
            <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-slate-400">
              ColBERT&apos;s key insight: keep token-level embeddings for both query and document, then score using a
              sum-of-max-similarities. This retains fine-grained matching without requiring a costly cross-attention pass
              over all query–document pairs at retrieval time.
            </p>
            <MaxSimViz />
          </section>

          {/* Reason-ModernColBERT */}
          <section>
            <SectionHeading>Reason-ModernColBERT</SectionHeading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'What ModernColBERT adds',
                  items: ['Residual compression of token embeddings (reduces index size)', 'Denoised supervision from cross-encoder teacher', 'Updated backbone (more recent BERT variants)', 'Improved PLAID retrieval engine integration'],
                },
                {
                  title: 'What Reasoning adds',
                  items: ['Chain-of-thought signals integrated into the encoder', 'Latent reasoning traces attend before final embedding projection', 'Better handling of multi-hop and compositional queries', 'Training signal from both retrieval labels and reasoning outputs'],
                },
              ].map((box, i) => (
                <motion.div key={box.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-xl border border-stone-200 bg-white/60 p-5 dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="mb-3 font-sans text-sm font-bold text-stone-900 dark:text-slate-100">{box.title}</p>
                  <ul className="space-y-2">
                    {box.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-stone-600 dark:text-slate-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Pipeline */}
          <section>
            <SectionHeading>Research Pipeline</SectionHeading>
            <div className="pl-1">
              {pipelineSteps.map((s, i) => <PipelineStep key={s.step} step={s} index={i} total={pipelineSteps.length} />)}
            </div>
          </section>

          {/* Further Reading */}
          <FurtherReading />

          {/* Presentations */}
          <section>
            <SectionHeading>Presentations</SectionHeading>
            <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="rounded-xl border border-stone-200 bg-white/60 p-6 dark:border-slate-700 dark:bg-slate-800/60">
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

              {/* Result figure: ColBERT MaxSim heatmap */}
              <figure className="mt-5 overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src="/colbert-heatmap.png"
                  alt="ColBERT MaxSim heatmap showing token-level similarity between a BRIGHT biology query and an irrelevant document, with red dots marking the per-query-token argmax."
                  width={1600}
                  height={820}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-stone-100 px-4 py-2 text-xs leading-relaxed text-stone-500 dark:border-slate-700/60 dark:text-slate-400">
                  ColBERT MaxSim heatmap on a BRIGHT biology query (id 5) against an irrelevant document.
                  Rows are query tokens, columns are document tokens; brighter cells indicate higher dot-product
                  similarity, and red dots mark each query token&apos;s argmax — the per-token contribution that
                  MaxSim sums to produce the final relevance score.
                </figcaption>
              </figure>

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
