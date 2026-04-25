'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/Card'

/* ─────────────────────────────────────────────
   TAB DEFINITIONS
───────────────────────────────────────────── */
const TABS = [
  { id: 'retrieval', label: 'Transformer Retrieval', supervisor: 'Dr. Jian Zhu' },
  { id: 'multilingual', label: 'Multilingual NLP', supervisor: 'Dr. Isabel Papadimitriou' },
]

/* ─────────────────────────────────────────────
   RETRIEVAL BACKGROUND CONCEPTS
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   PIPELINE STEPS
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   MULTILINGUAL BACKGROUND CONCEPTS
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   MULTILINGUAL PIPELINE
───────────────────────────────────────────── */
const multilingualSteps = [
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

/* ─────────────────────────────────────────────
   SECTION ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}

/* ─────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-sans text-xl font-bold text-stone-900 dark:text-white">
      {children}
    </h2>
  )
}

function ConceptCard({
  concept,
  index,
}: {
  concept: (typeof retrievalConcepts)[0]
  index: number
}) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`rounded-xl border p-5 transition-all cursor-pointer ${concept.color} ${open ? 'shadow-sm' : ''}`}
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
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
              {concept.description}
            </p>
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

function PipelineStep({ step, index }: { step: (typeof pipelineSteps)[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {/* step number + line */}
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs font-bold text-white dark:bg-accent-500">
          {step.step}
        </div>
        {index < pipelineSteps.length - 1 && (
          <div className="mt-1 w-px flex-1 bg-stone-200 dark:bg-slate-700" />
        )}
      </div>
      {/* content */}
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

/* ─────────────────────────────────────────────
   MAXSIM VISUALISATION
───────────────────────────────────────────── */
function MaxSimViz() {
  const queryTokens = ['what', 'is', 'retrieval', '?']
  const docTokens = ['information', 'retrieval', 'finds', 'documents']

  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-stone-50 p-5 dark:border-slate-700 dark:bg-slate-800/60">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-slate-500">
        MaxSim — Late Interaction Scoring
      </p>

      {/* Query tokens */}
      <div className="mb-2 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">query</span>
        <div className="flex gap-2">
          {queryTokens.map((t) => (
            <div
              key={t}
              className="rounded-lg bg-fuchsia-100 px-3 py-1.5 text-xs font-bold text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300"
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow row */}
      <div className="my-2 flex items-center gap-2">
        <span className="w-16 shrink-0" />
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-stone-400 dark:text-slate-500">
            each query token → max dot-product with all document tokens
          </p>
          <div className="flex gap-6 text-stone-300 dark:text-slate-600 text-sm select-none">
            {queryTokens.map((t) => (
              <span key={t}>↓</span>
            ))}
          </div>
        </div>
      </div>

      {/* Doc tokens */}
      <div className="mb-3 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">doc</span>
        <div className="flex gap-2">
          {docTokens.map((t) => (
            <div
              key={t}
              className="rounded-lg bg-sky-100 px-3 py-1.5 text-xs font-bold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* Score formula */}
      <div className="mt-4 flex items-center gap-2">
        <span className="w-16 shrink-0 text-right text-xs text-stone-400 dark:text-slate-500">score</span>
        <div className="rounded-lg bg-accent-50 px-4 py-2 font-mono text-sm font-bold text-accent-700 dark:bg-accent-900/30 dark:text-accent-300">
          S(q, d) = Σᵢ max<sub>j</sub> ( q<sub>i</sub> · d<sub>j</sub> )
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   TAB CONTENT — RETRIEVAL
───────────────────────────────────────────── */
function RetrievalContent() {
  return (
    <div className="space-y-14">

      {/* Overview */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Card>
          <div className="space-y-3">
            <div>
              <h2 className="font-sans text-lg font-bold text-stone-900 dark:text-white">
                Reason-ModernColBERT & Neural Retrieval
              </h2>
              <p className="mt-0.5 text-sm text-accent-600 dark:text-accent-400">
                Supervisor: Dr. Jian Zhu · UBC · Dec 2025 – Present
              </p>
            </div>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
              This project investigates how reasoning can be integrated into late-interaction retrieval models.
              Working from the ColBERT family of architectures, the goal is to improve retrieval quality on complex,
              multi-hop, and reason-requiring queries — settings where standard bi-encoder and sparse models fall short.
              The work involves model implementation, HPC-based training on GPU clusters, and systematic evaluation
              across standard retrieval benchmarks.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['ColBERT', 'SPLADE', 'Neural IR', 'PyTorch', 'HPC / H100', 'BEIR', 'MS MARCO'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400"
                >
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
          {retrievalConcepts.map((c, i) => (
            <ConceptCard key={c.title} concept={c} index={i} />
          ))}
        </div>
      </section>

      {/* MaxSim Viz */}
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
              items: [
                'Residual compression of token embeddings (reduces index size)',
                'Denoised supervision from cross-encoder teacher',
                'Updated backbone (more recent BERT variants)',
                'Improved PLAID retrieval engine integration',
              ],
            },
            {
              title: 'What Reasoning adds',
              items: [
                'Chain-of-thought signals integrated into the encoder',
                'Latent reasoning traces attend before final embedding projection',
                'Better handling of multi-hop and compositional queries',
                'Training signal from both retrieval labels and reasoning outputs',
              ],
            },
          ].map((box, i) => (
            <motion.div
              key={box.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-stone-200 bg-white/60 p-5 dark:border-slate-700 dark:bg-slate-800/60"
            >
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
          {pipelineSteps.map((s, i) => (
            <PipelineStep key={s.step} step={s} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}

/* ─────────────────────────────────────────────
   TAB CONTENT — MULTILINGUAL
───────────────────────────────────────────── */
function MultilingualContent() {
  return (
    <div className="space-y-14">

      {/* Overview */}
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Card>
          <div className="space-y-3">
            <div>
              <h2 className="font-sans text-lg font-bold text-stone-900 dark:text-white">
                Multilingual Transformer Mapping & Cross-Lingual Alignment
              </h2>
              <p className="mt-0.5 text-sm text-accent-600 dark:text-accent-400">
                Supervisor: Dr. Isabel Papadimitriou · UBC · Jan 2025 – Present
              </p>
            </div>
            <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
              This project investigates how multilingual transformer models represent and align linguistic structure
              across languages. The central question is whether the cross-lingual generalisation observed in models
              like mBERT and XLM-R arises from learned language-neutral representations, or from implicit mapping
              functions between language-specific subspaces — and what this implies for transfer learning across
              typologically diverse languages.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['mBERT', 'XLM-R', 'CKA', 'Probing', 'Cross-lingual Transfer', 'PyTorch', 'Universal Dependencies'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Background */}
      <section>
        <SectionHeading>Background — Key Concepts</SectionHeading>
        <p className="mb-4 text-sm leading-relaxed text-stone-500 dark:text-slate-400">
          Click each card to expand.
        </p>
        <div className="space-y-3">
          {multilingualConcepts.map((c, i) => (
            <ConceptCard key={c.title} concept={c} index={i} />
          ))}
        </div>
      </section>

      {/* Research Questions */}
      <section>
        <SectionHeading>Core Research Questions</SectionHeading>
        <div className="space-y-3">
          {[
            {
              q: 'Are cross-lingual representations truly language-neutral, or do they retain language-specific structure that is implicitly mapped?',
              layer: 'Representation geometry',
            },
            {
              q: 'Which layers of a multilingual transformer encode syntactic vs. semantic information, and does this vary across languages?',
              layer: 'Layer specialisation',
            },
            {
              q: 'Can we learn explicit linear mappings between language subspaces and use them to improve zero-shot transfer?',
              layer: 'Mapping & transfer',
            },
            {
              q: 'How do typological features (morphology, word order) affect the quality of cross-lingual alignment?',
              layer: 'Typological diversity',
            },
          ].map((item, i) => (
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
          {multilingualSteps.map((s, i) => (
            <PipelineStep key={s.step} step={{ ...s, step: s.step } as any} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<'retrieval' | 'multilingual'>('retrieval')

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 pt-12"
        >
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Research
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Two active research positions at the University of British Columbia
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-10 flex gap-2"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'retrieval' | 'multilingual')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-accent-600 text-white shadow-sm dark:bg-accent-500'
                  : 'bg-stone-100 text-stone-500 hover:text-stone-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.supervisor}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'retrieval' ? <RetrievalContent /> : <MultilingualContent />}
          </motion.div>
        </AnimatePresence>

        {/* Presentations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h2 className="mb-6 font-sans text-xl font-bold text-stone-900 dark:text-white">
            Presentations
          </h2>

          <div className="rounded-xl border border-stone-200 bg-white/60 p-6 dark:border-slate-700 dark:bg-slate-800/60">
            {/* Header row */}
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

            {/* Divider */}
            <div className="my-4 border-t border-stone-100 dark:border-slate-700/60" />

            {/* Abstract */}
            <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
              This work evaluates a sparse-to-dense retrieval pipeline on the BRIGHT benchmark, a challenging
              reasoning-intensive retrieval dataset. We use SPLADE, a learned sparse retrieval model, as a first-stage
              retriever over the biology domain, followed by ColBERT as a late-interaction reranker. Our work
              reproduces and stress-tests this pipeline under realistic evaluation conditions, examining where sparse
              retrieval succeeds and where denser reranking is necessary to close the performance gap. The study
              contributes a reproducibility perspective on the interaction between sparse and dense retrieval in
              complex, knowledge-intensive tasks.
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['SPLADE', 'ColBERT', 'BRIGHT Benchmark', 'Sparse-to-Dense', 'Reranking', 'Reproducibility'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
