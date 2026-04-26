'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/Card'

/* ─── animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}

/* ─── data ─── */
const multilingualConcepts = [
  {
    title: 'Multilingual Transformers',
    tag: 'mBERT · XLM-R',
    color: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-700/40',
    tagColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-800/50 dark:text-indigo-300',
    description:
      'Models like mBERT and XLM-RoBERTa are trained on multilingual corpora and develop internal representations that appear to generalise across languages — even without explicit cross-lingual supervision. Understanding how and why this happens motivates this research.',
    properties: ['Shared vocabulary across languages', 'Zero-shot cross-lingual transfer', 'Emergent alignment without explicit supervision', 'Language-neutral vs. language-specific subspaces'],
  },
  {
    title: 'Representation Alignment',
    tag: 'CKA · Probing',
    color: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-700/40',
    tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-800/50 dark:text-emerald-300',
    description:
      'Cross-lingual representation alignment studies how semantically equivalent content in different languages maps to similar positions in the shared embedding space. Techniques such as Centred Kernel Alignment (CKA) and linear probing classifiers reveal the degree and nature of this alignment.',
    properties: ['CKA similarity between language subspaces', 'Probing for syntactic and semantic structure', 'Layer-wise alignment analysis', 'Mapping functions between language spaces'],
  },
  {
    title: 'Linguistic Structure in Embeddings',
    tag: 'Syntax · Morphology',
    color: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-700/40',
    tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-800/50 dark:text-amber-300',
    description:
      'Beyond semantics, multilingual models encode syntactic structures such as dependency relations and morphological features. Probing experiments disentangle which layers encode what kinds of linguistic information, and whether these representations generalise across typologically distant languages.',
    properties: ['Dependency structure in hidden states', 'Morphological feature encoding', 'Layer specialisation (lower = syntax, upper = semantics)', 'Cross-typological generalisation'],
  },
]

const pipelineSteps = [
  {
    step: '01',
    title: 'Model Selection',
    description: 'Select multilingual transformer checkpoints (mBERT, XLM-R) across multiple sizes and training regimes for controlled comparison.',
    tech: 'HuggingFace Transformers',
  },
  {
    step: '02',
    title: 'Representation Extraction',
    description: 'Extract hidden-state representations from each encoder layer for parallel sentence pairs across target language pairs.',
    tech: 'Python · PyTorch · NumPy',
  },
  {
    step: '03',
    title: 'Alignment Analysis',
    description: 'Apply CKA, mutual nearest-neighbour retrieval, and learned linear maps to quantify how well language representations align at each layer.',
    tech: 'SciPy · sklearn',
  },
  {
    step: '04',
    title: 'Probing Experiments',
    description: 'Train lightweight probing classifiers on frozen representations to determine what linguistic features (POS, dependency, morphology) are encoded and where.',
    tech: 'Probing suite · multilingual UD treebanks',
  },
  {
    step: '05',
    title: 'Mapping & Transfer',
    description: 'Learn explicit mapping functions between language-specific subspaces and evaluate zero-shot cross-lingual transfer on downstream classification tasks.',
    tech: 'XNLI · MLQA · XTREME',
  },
]

const researchQuestions = [
  { q: 'Are cross-lingual representations truly language-neutral, or do they retain language-specific structure that is implicitly mapped?', layer: 'Representation geometry' },
  { q: 'Which layers of a multilingual transformer encode syntactic vs. semantic information, and does this vary across languages?', layer: 'Layer specialisation' },
  { q: 'Can we learn explicit linear mappings between language subspaces and use them to improve zero-shot transfer?', layer: 'Mapping & transfer' },
  { q: 'How do typological features (morphology, word order) affect the quality of cross-lingual alignment?', layer: 'Typological diversity' },
]

/* ─── components ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-xl font-bold text-stone-900 dark:text-white">
      {children}
    </h2>
  )
}

function ConceptCard({ concept, index }: { concept: typeof multilingualConcepts[0]; index: number }) {
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
          <h3 className="font-sans text-base font-bold text-stone-900 dark:text-slate-100">{concept.title}</h3>
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

/* ─── architecture diagram ─── */
function ModelArchDiagram() {
  // Column x-centers (shared by attention lines, layer sub-rects, and circles)
  const colXs = [71, 130, 189, 249]

  // Input token positions (6 tokens, evenly spaced, aligned with layer width)
  const tokenLefts   = [40,  82, 124, 166, 208, 250]
  const tokenCenters = [55,  97, 139, 181, 223, 265]
  const tokenW = 30, tokenH = 26, tokenY = 297

  // Transformer layer rectangles
  const upperLayer = { x: 28, y: 120, w: 264, h: 46 }
  const lowerLayer = { x: 28, y: 210, w: 264, h: 46 }

  // Sub-rect left edges inside each layer (centered on colXs, width=45)
  const subRectLefts = colXs.map(cx => cx - 22)
  const subRectW = 44, subRectH = 40

  // Circle geometry
  const circleY = 82, circleR = 20

  const models = [
    {
      ox: 10, label: 'mBERT',
      boxFill: '#EFF6FF', boxStroke: '#93C5FD',
      circleFill: '#BFDBFE', circleStroke: '#60A5FA',
      layerBg: '#DBEAFE', layerFill: '#BFDBFE', layerStroke: '#93C5FD',
      tokenFill: '#DBEAFE', titleFill: '#1E3A5F',
    },
    {
      ox: 415, label: 'XLM-R',
      boxFill: '#F0FDF4', boxStroke: '#86EFAC',
      circleFill: '#BBF7D0', circleStroke: '#4ADE80',
      layerBg: '#DCFCE7', layerFill: '#BBF7D0', layerStroke: '#86EFAC',
      tokenFill: '#DCFCE7', titleFill: '#14532D',
    },
  ]

  return (
    <svg viewBox="0 0 745 370" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Separator */}
      <text x="372" y="195" textAnchor="middle" fontSize="20" fill="#94A3B8" letterSpacing="6">•••</text>

      {models.map((m) => (
        <g key={m.label} transform={`translate(${m.ox}, 9)`}>
          {/* Outer box */}
          <rect x={0} y={0} width={320} height={352} rx={14}
            fill={m.boxFill} stroke={m.boxStroke} strokeWidth={1.5} />

          {/* Title */}
          <text x={160} y={43} textAnchor="middle"
            fontFamily="system-ui,sans-serif" fontWeight="700" fontSize="18" fill={m.titleFill}>
            {m.label}
          </text>

          {/* Attention lines: circle bottoms → upper layer top */}
          {colXs.flatMap(from => colXs.map(to => (
            <line key={`cu-${from}-${to}`}
              x1={from} y1={circleY + circleR} x2={to} y2={upperLayer.y}
              stroke="#334155" strokeWidth={0.55} opacity={0.2} />
          )))}

          {/* Output circles (drawn after lines so they appear on top) */}
          {colXs.map((cx, i) => (
            <circle key={i} cx={cx} cy={circleY} r={circleR}
              fill={m.circleFill} stroke={m.circleStroke} strokeWidth={1.5} />
          ))}

          {/* Upper layer background */}
          <rect x={upperLayer.x} y={upperLayer.y} width={upperLayer.w} height={upperLayer.h}
            rx={5} fill={m.layerBg} stroke={m.layerStroke} strokeWidth={0.6} />
          {/* Upper layer sub-rects */}
          {subRectLefts.map((sx, i) => (
            <rect key={i} x={sx} y={upperLayer.y + 3} width={subRectW} height={subRectH}
              rx={4} fill={m.layerFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}

          {/* Attention lines: upper layer bottom → lower layer top */}
          {colXs.flatMap(from => colXs.map(to => (
            <line key={`ul-${from}-${to}`}
              x1={from} y1={upperLayer.y + upperLayer.h} x2={to} y2={lowerLayer.y}
              stroke="#334155" strokeWidth={0.55} opacity={0.2} />
          )))}

          {/* Lower layer background */}
          <rect x={lowerLayer.x} y={lowerLayer.y} width={lowerLayer.w} height={lowerLayer.h}
            rx={5} fill={m.layerBg} stroke={m.layerStroke} strokeWidth={0.6} />
          {/* Lower layer sub-rects */}
          {subRectLefts.map((sx, i) => (
            <rect key={i} x={sx} y={lowerLayer.y + 3} width={subRectW} height={subRectH}
              rx={4} fill={m.layerFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}

          {/* Attention lines: lower layer bottom → token tops */}
          {colXs.flatMap(from => tokenCenters.map(to => (
            <line key={`lt-${from}-${to}`}
              x1={from} y1={lowerLayer.y + lowerLayer.h} x2={to} y2={tokenY}
              stroke="#334155" strokeWidth={0.55} opacity={0.2} />
          )))}

          {/* Input token boxes */}
          {tokenLefts.map((tx, i) => (
            <rect key={i} x={tx} y={tokenY} width={tokenW} height={tokenH}
              rx={4} fill={m.tokenFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}
        </g>
      ))}
    </svg>
  )
}

/* ─── page ─── */
export default function MultilingualPage() {
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
            Multilingual Transformer Mapping
          </h1>
          <p className="mt-2 text-stone-500 dark:text-slate-400">
            Supervisor: Dr. Isabel Papadimitriou · UBC · Jan 2025 – Present
          </p>
        </motion.div>

        <div className="space-y-14">

          {/* Overview */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Card>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  This project investigates how multilingual transformer models represent and align linguistic structure
                  across languages. The central question is whether the cross-lingual generalisation observed in models
                  like mBERT and XLM-R arises from learned language-neutral representations, or from implicit mapping
                  functions between language-specific subspaces — and what this implies for transfer learning across
                  typologically diverse languages.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['mBERT', 'XLM-R', 'CKA', 'Probing', 'Cross-lingual Transfer', 'PyTorch', 'Universal Dependencies'].map((tag) => (
                    <span key={tag} className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Architecture diagram */}
          <motion.div custom={0.5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <figure className="overflow-hidden rounded-xl border border-stone-200 bg-white p-4 dark:border-slate-700">
              <ModelArchDiagram />
              <figcaption className="mt-2 text-center text-xs text-stone-400 dark:text-slate-500">
                mBERT and XLM-R transformer architectures — input tokens (bottom) flow through stacked self-attention layers to produce contextual token representations (top).
              </figcaption>
            </figure>
          </motion.div>

          {/* Background */}
          <section>
            <SectionHeading>Background — Key Concepts</SectionHeading>
            <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-slate-400">
              Click each card to expand.
            </p>
            <div className="space-y-3">
              {multilingualConcepts.map((c, i) => <ConceptCard key={c.title} concept={c} index={i} />)}
            </div>
          </section>

          {/* Research Questions */}
          <section>
            <SectionHeading>Core Research Questions</SectionHeading>
            <div className="space-y-3">
              {researchQuestions.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-4 rounded-xl border border-stone-200 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800/60"
                >
                  <span className="mt-0.5 text-lg text-accent-400 dark:text-accent-500 select-none">?</span>
                  <div>
                    <p className="text-sm leading-relaxed text-stone-700 dark:text-slate-200">{item.q}</p>
                    <span className="mt-1.5 inline-block rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                      {item.layer}
                    </span>
                  </div>
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

        </div>
      </div>
    </div>
  )
}
