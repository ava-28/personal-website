'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { ProjectVisual } from '@/components/ProjectVisual'
import type { ProjectVisualKind } from '@/components/ProjectVisual'

/* ─── on-palette (navy/cream) fallback illustrations for projects without a screenshot ─── */

function StatArbVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      <g stroke="#d2d0ca" strokeWidth="1">
        {[70, 110, 150, 190].map((y) => <line key={y} x1="40" y1={y} x2="560" y2={y} />)}
      </g>
      {/* two cointegrated price lines */}
      <path d="M40 150 C110 130,150 160,200 140 C260 118,300 150,360 128 C420 108,470 138,560 112"
        stroke="#111b30" strokeWidth="2.5" fill="none" />
      <path d="M40 158 C110 142,150 168,200 150 C260 130,300 158,360 138 C420 120,470 146,560 122"
        stroke="#a4894f" strokeWidth="2.5" fill="none" />
      {/* z-score band */}
      <rect x="40" y="212" width="520" height="48" rx="6" fill="#ecf0f9" stroke="#bfc5d2" strokeWidth="1" />
      <path d="M40 236 C90 220,130 252,180 236 C230 220,270 250,320 236 C370 222,410 248,460 234 C500 224,530 240,560 232"
        stroke="#404c66" strokeWidth="1.75" fill="none" />
      <line x1="40" y1="236" x2="560" y2="236" stroke="#9b9d9e" strokeWidth="1" strokeDasharray="3 3" />
      <text x="48" y="38" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">Statistical Arbitrage</text>
      <text x="48" y="60" fill="#57617a" fontSize="13">Cointegrated pair · rolling z-score</text>
    </svg>
  )
}

function AttentionVisual() {
  const cols = [90, 150, 210]
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      {/* Q K V blocks */}
      {['Q', 'K', 'V'].map((label, i) => (
        <g key={label}>
          <rect x={cols[i] - 24} y={40} width={48} height={40} rx={6} fill="#ecf0f9" stroke="#8991a4" strokeWidth="1.2" />
          <text x={cols[i]} y={65} textAnchor="middle" fontSize="15" fontWeight="700" fill="#111b30">{label}</text>
        </g>
      ))}
      {/* attention weight grid */}
      <g>
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => {
            const w = 0.15 + ((r * 5 + c) % 7) / 9
            return (
              <rect key={`${r}-${c}`} x={90 + c * 24} y={120 + r * 22} width={22} height={20}
                fill="#0a1838" opacity={w * 0.7} />
            )
          })
        )}
        <rect x={90} y={120} width={5 * 24} height={5 * 22} fill="none" stroke="#5f646e" strokeWidth="1" />
      </g>
      <text x="90" y="112" fontSize="11" fill="#5f646e">attention weights</text>
      <line x1="150" y1="80" x2="200" y2="118" stroke="#5f646e" strokeWidth="1" opacity="0.5" />
      <text x="330" y="60" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">Transformer from Scratch</text>
      <text x="330" y="82" fill="#57617a" fontSize="13">Multi-head attention · PyTorch</text>
    </svg>
  )
}

function TradingVisual() {
  const pts: [number, number][] = [
    [40, 180], [90, 168], [140, 175], [190, 150], [240, 158],
    [290, 132], [340, 140], [390, 116], [440, 122], [490, 100], [560, 88],
  ]
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const markers: [number, number, 'B' | 'S'][] = [[90, 168, 'B'], [190, 150, 'S'], [340, 140, 'B'], [490, 100, 'S']]
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      <g stroke="#d2d0ca" strokeWidth="1">
        {[70, 110, 150, 190].map((y) => <line key={y} x1="40" y1={y} x2="560" y2={y} />)}
      </g>
      <path d={`${line} L560,220 L40,220 Z`} fill="#111b30" opacity="0.06" />
      <path d={line} stroke="#111b30" strokeWidth="2.5" fill="none" />
      {markers.map(([x, y, t], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill={t === 'B' ? '#111b30' : '#a4894f'} />
          <text x={x} y={y + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#f7f3e7">{t}</text>
        </g>
      ))}
      <rect x="40" y="234" width="80" height="10" rx="2" fill="#a4894f" opacity="0.6" />
      <rect x="130" y="234" width="140" height="10" rx="2" fill="#a4894f" opacity="0.3" />
      <rect x="280" y="234" width="100" height="10" rx="2" fill="#a4894f" opacity="0.6" />
      <rect x="390" y="234" width="170" height="10" rx="2" fill="#a4894f" opacity="0.3" />
      <text x="48" y="38" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">News-Driven RL Trading</text>
      <text x="48" y="60" fill="#57617a" fontSize="13">PPO agent · 7-asset portfolio</text>
    </svg>
  )
}

function MonteCarloGenVisual() {
  const bars = [8, 16, 28, 44, 62, 80, 94, 100, 92, 78, 58, 40, 26, 14, 7]
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      <g>
        {bars.map((h, i) => (
          <rect key={i} x={48 + i * 20} y={210 - h * 1.4} width={16} height={h * 1.4}
            fill={i >= 5 && i <= 9 ? '#111b30' : '#a4abbb'} opacity={i >= 5 && i <= 9 ? 0.9 : 0.55} />
        ))}
        <line x1="40" y1="210" x2="368" y2="210" stroke="#57617a" strokeWidth="1.5" />
      </g>
      <path d="M400 200 C420 160,440 190,460 150 C480 118,500 145,520 105 C540 80,550 95,560 70"
        stroke="#a4894f" strokeWidth="2.25" fill="none" />
      <path d="M400 208 C420 195,440 205,460 180 C480 160,500 175,520 150 C540 132,550 140,560 120"
        stroke="#111b30" strokeWidth="2.25" fill="none" opacity="0.6" />
      <text x="48" y="38" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">Monte Carlo Pricing</text>
      <text x="48" y="60" fill="#57617a" fontSize="13">GBM paths · risk-neutral valuation</text>
    </svg>
  )
}

function GridworldGenVisual() {
  const cell = 44
  const ox = 60, oy = 50
  const walls = [[1, 0], [1, 1], [3, 2], [3, 3]]
  const path: [number, number][] = [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 1], [2, 0], [3, 0], [4, 0]]
  const toXY = (c: number, r: number) => [ox + c * cell + cell / 2, oy + r * cell + cell / 2]
  const pathLine = path.map(([c, r], i) => {
    const [x, y] = toXY(c, r)
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ')
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      <g stroke="#b9b9b6" strokeWidth="1.5">
        {Array.from({ length: 6 }).map((_, i) => <line key={`v${i}`} x1={ox + i * cell} y1={oy} x2={ox + i * cell} y2={oy + 4 * cell} />)}
        {Array.from({ length: 5 }).map((_, i) => <line key={`h${i}`} x1={ox} y1={oy + i * cell} x2={ox + 5 * cell} y2={oy + i * cell} />)}
      </g>
      {walls.map(([c, r], i) => (
        <rect key={i} x={ox + c * cell + 2} y={oy + r * cell + 2} width={cell - 4} height={cell - 4} fill="#8991a4" opacity="0.55" />
      ))}
      <path d={pathLine} stroke="#111b30" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="1 10" />
      <circle cx={toXY(0, 0)[0]} cy={toXY(0, 0)[1]} r="8" fill="#a4894f" />
      <circle cx={toXY(4, 0)[0]} cy={toXY(4, 0)[1]} r="8" fill="#111b30" />
      <text x="330" y="90" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">Gridworld Q-Learning</text>
      <text x="330" y="112" fill="#57617a" fontSize="13">Tabular RL · Bellman optimality</text>
      <text x="330" y="140" fill="#57617a" fontSize="12">PyTorch implementation</text>
    </svg>
  )
}

function HydroGenVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f7f3e7" />
      <polygon points="30,220 150,90 260,220" fill="#d2d0ca" />
      <polygon points="180,220 300,70 420,220" fill="#b9b9b6" />
      <rect x="330" y="120" width="70" height="100" fill="#8991a4" />
      <rect x="395" y="130" width="24" height="90" fill="#57617a" />
      <path d="M419 150 C470 150,510 175,560 175 L560 220 L419 220 Z" fill="#a4abbb" opacity="0.55" />
      <path d="M419 172 C465 172,515 195,560 195" stroke="#111b30" strokeWidth="2.5" fill="none" opacity="0.5" />
      <path d="M419 190 C470 190,520 205,560 205" stroke="#a4894f" strokeWidth="2.5" fill="none" opacity="0.6" />
      <circle cx="440" cy="170" r="16" fill="#111b30" />
      <circle cx="440" cy="170" r="6" fill="#f7f3e7" />
      <text x="30" y="38" fill="#111b30" fontSize="17" fontFamily="Georgia, serif">Hydroelectric Feasibility</text>
      <text x="30" y="60" fill="#57617a" fontSize="13">Flow-duration curves · HYDAT data</text>
    </svg>
  )
}

type CustomVisualKind = 'statarb' | 'attention' | 'trading' | 'montecarlo-gen' | 'gridworld-gen' | 'hydro-gen'

function GeneratedVisual({ kind }: { kind: CustomVisualKind }) {
  return (
    <div className="mb-2 overflow-hidden rounded-lg border border-accent-100 dark:border-slate-700">
      {kind === 'statarb' && <StatArbVisual />}
      {kind === 'attention' && <AttentionVisual />}
      {kind === 'trading' && <TradingVisual />}
      {kind === 'montecarlo-gen' && <MonteCarloGenVisual />}
      {kind === 'gridworld-gen' && <GridworldGenVisual />}
      {kind === 'hydro-gen' && <HydroGenVisual />}
    </div>
  )
}

// Toggle to preview every project card with a generated, on-palette
// illustration instead of its real screenshot/photo. Flip back to
// `false` to instantly restore the original images — nothing about
// the underlying project data is deleted either way.
const SHOW_GENERATED_ART = true

interface Project {
  title: string
  subtitle?: string
  visual: ProjectVisualKind
  images?: string[]
  description: string
  repo?: string
  customVisual?: CustomVisualKind
}

const projects: Project[] = [
  {
    title: 'News-Driven Reinforcement Learning Trading Agent',
    subtitle: 'Python · PyTorch · Finnhub API · yfinance',
    visual: 'dqn',
    images: ['/rl-equity-curves.png'],
    customVisual: 'trading',
    description:
      'A research-grade reinforcement learning system that trains a PPO agent to trade a 7-asset portfolio across tech, finance, energy, and ETF markets, combining NLP-driven sentiment analysis with rigorous walk-forward validation, multi-seed testing, and ablation studies to ensure scientific robustness and generalizability.',
    repo: 'https://github.com/ava-28/rl-trading-ppo',
  },
  {
    title: 'Monte Carlo Simulation for Financial Derivatives Pricing',
    subtitle: 'Python · NumPy · SciPy',
    visual: 'montecarlo',
    images: ['/monte-carlo-results.png'],
    customVisual: 'montecarlo-gen',
    description:
      'A Monte Carlo simulation framework in Python for modeling stochastic asset price dynamics under uncertainty. Asset price paths are generated using Geometric Brownian Motion under risk-neutral measure to estimate the fair value of financial derivatives, with sensitivity analysis across volatility and time-to-maturity parameters.',
    repo: 'https://github.com/ava-28/monte-carlo-option-pricing',
  },
  {
    title: 'Reinforcement Learning Agent – Gridworld (PyTorch)',
    subtitle: 'Python · PyTorch',
    visual: 'gridworld',
    images: ['/gridworld-path.png'],
    customVisual: 'gridworld-gen',
    description:
      'A tabular Q-learning agent implemented in PyTorch, trained on a Gridworld environment using Bellman optimality equations. The project explores policy learning under varying learning rates, evaluates performance via empirical return distributions, and includes hyperparameter sensitivity analysis.',
    repo: 'https://github.com/ava-28/q-learning-gridworld',
  },
  {
    title: 'Hydroelectric Power Plant Feasibility Study',
    subtitle: 'Python · pandas · HYDAT',
    visual: 'hydro',
    images: ['/hydro-dam.jpg'],
    customVisual: 'hydro-gen',
    description:
      'A quantitative feasibility study modeling hydroelectric output under stochastic river-flow dynamics using flow-duration curves and HYDAT data. The analysis includes scenario and sensitivity analysis, tail-risk evaluation, and assessment of long-run economic viability.',
  },
  {
    title: 'Statistical Arbitrage Backtest',
    subtitle: 'Python · pandas · NumPy',
    visual: 'montecarlo',
    customVisual: 'statarb',
    description:
      'A cointegration-based pairs trading strategy with rolling z-score entry and exit signals, realistic transaction costs, and out-of-sample evaluation on pairs selected from unseen data — built to test whether the mean-reversion edge survives outside the sample it was found in.',
    repo: 'https://github.com/ava-28/statistical-arbitrage-backtest',
  },
  {
    title: 'Transformer from Scratch',
    subtitle: 'Python · PyTorch',
    visual: 'dqn',
    customVisual: 'attention',
    description:
      'A transformer architecture implemented from scratch in PyTorch, following Vaswani et al. (2017): multi-head self-attention, sinusoidal positional encoding, and layer normalization, built to understand every moving part of the architecture behind modern NLP.',
    repo: 'https://github.com/ava-28/transformer-from-scratch',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-stone-300 pt-20 dark:border-slate-800 xl:scroll-mt-10">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="label-index mb-3 text-stone-400 dark:text-slate-500">Index — Projects</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Quantitative, machine learning, reinforcement learning, and NLP projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 pb-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="space-y-4">
                {!SHOW_GENERATED_ART && project.images && project.images.length > 0 ? (
                  <div className="mb-2">
                    {project.images.map((src) => (
                      <motion.div
                        key={src}
                        className="overflow-hidden rounded-lg border border-accent-100 bg-white dark:border-slate-700 dark:bg-slate-800"
                      >
                        <img
                          src={src}
                          alt={project.title}
                          className="h-36 w-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : project.customVisual ? (
                  <GeneratedVisual kind={project.customVisual} />
                ) : (
                  <ProjectVisual kind={project.visual} />
                )}
                <div>
                  <h3 className="font-display text-lg font-bold text-stone-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  {project.description}
                </p>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View on GitHub
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                      <path d="M3 3h6M9 3v6M9 3L3 9" />
                    </svg>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
