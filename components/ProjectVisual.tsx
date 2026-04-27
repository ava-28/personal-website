'use client'

import { motion } from 'framer-motion'

export type ProjectVisualKind =
  | 'montecarlo'
  | 'gridworld'
  | 'hydro'
  | 'transformer'
  | 'dqn'

interface ProjectVisualProps {
  kind: ProjectVisualKind
}

function MonteCarloVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f8fafc" />
      <rect x="48" y="36" width="356" height="200" rx="10" fill="#ffffff" />
      <g stroke="#cbd5e1" strokeWidth="1.5">
        <line x1="82" y1="58" x2="82" y2="214" />
        <line x1="140" y1="58" x2="140" y2="214" />
        <line x1="198" y1="58" x2="198" y2="214" />
        <line x1="256" y1="58" x2="256" y2="214" />
        <line x1="314" y1="58" x2="314" y2="214" />
        <line x1="372" y1="58" x2="372" y2="214" />
        <line x1="60" y1="76" x2="386" y2="76" />
        <line x1="60" y1="114" x2="386" y2="114" />
        <line x1="60" y1="152" x2="386" y2="152" />
        <line x1="60" y1="190" x2="386" y2="190" />
      </g>
      <path
        d="M60 192 C95 175, 120 144, 148 157 C175 169, 205 122, 238 136 C268 147, 302 96, 334 109 C357 119, 372 86, 386 78"
        stroke="#2563eb"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M60 198 C95 171, 126 180, 150 145 C181 103, 210 137, 241 115 C274 93, 304 122, 332 97 C356 76, 372 82, 386 72"
        stroke="#7c3aed"
        strokeWidth="3"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M60 203 C88 200, 122 162, 150 171 C181 182, 206 141, 238 149 C268 157, 304 113, 333 122 C359 130, 373 110, 386 96"
        stroke="#0ea5e9"
        strokeWidth="3"
        fill="none"
        opacity="0.78"
      />
      <rect x="436" y="58" width="122" height="152" rx="12" fill="#e2e8f0" />
      <text x="448" y="88" fill="#1e293b" fontSize="15" fontFamily="Georgia, serif">
        Monte Carlo
      </text>
      <text x="448" y="114" fill="#334155" fontSize="13">
        GBM paths
      </text>
      <text x="448" y="136" fill="#334155" fontSize="13">
        Option pricing
      </text>
      <text x="448" y="158" fill="#334155" fontSize="13">
        Risk-neutral
      </text>
      <circle cx="470" cy="184" r="9" fill="#7c3aed" />
      <circle cx="500" cy="184" r="9" fill="#2563eb" />
      <circle cx="530" cy="184" r="9" fill="#0ea5e9" />
      <text x="58" y="252" fill="#334155" fontSize="16">
        Financial derivatives pricing under uncertainty
      </text>
    </svg>
  )
}

function GridworldVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f5f3ff" />
      <g stroke="#c4b5fd" strokeWidth="2">
        <rect x="60" y="40" width="320" height="200" fill="#ffffff" />
        <line x1="140" y1="40" x2="140" y2="240" />
        <line x1="220" y1="40" x2="220" y2="240" />
        <line x1="300" y1="40" x2="300" y2="240" />
        <line x1="60" y1="90" x2="380" y2="90" />
        <line x1="60" y1="140" x2="380" y2="140" />
        <line x1="60" y1="190" x2="380" y2="190" />
      </g>
      <rect x="60" y="190" width="80" height="50" fill="#ddd6fe" />
      <rect x="300" y="40" width="80" height="50" fill="#a78bfa" />
      <path d="M100 210 L180 210 L180 160 L260 160 L260 110 L340 110 L340 65" stroke="#7c3aed" strokeWidth="7" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="210" r="8" fill="#6d28d9" />
      <circle cx="340" cy="65" r="8" fill="#6d28d9" />
      <text x="420" y="118" fill="#4c1d95" fontSize="20" fontFamily="Georgia, serif">
        Gridworld RL
      </text>
      <text x="420" y="148" fill="#7c3aed" fontSize="15">
        Q-learning policy path
      </text>
    </svg>
  )
}

function HydroVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#f8fafc" />
      <polygon points="40,190 170,60 290,190" fill="#e2e8f0" />
      <polygon points="200,190 330,50 460,190" fill="#cbd5e1" />
      <rect x="250" y="90" width="64" height="130" fill="#94a3b8" />
      <rect x="312" y="100" width="22" height="120" fill="#64748b" />
      <path d="M334 120 C390 120, 440 150, 560 150 L560 220 L334 220 Z" fill="#bfdbfe" />
      <path d="M334 150 C390 150, 450 180, 560 180" stroke="#60a5fa" strokeWidth="4" fill="none" />
      <path d="M334 170 C395 170, 455 200, 560 200" stroke="#93c5fd" strokeWidth="4" fill="none" />
      <circle cx="360" cy="150" r="20" fill="#475569" />
      <circle cx="360" cy="150" r="8" fill="#f8fafc" />
      <text x="38" y="250" fill="#334155" fontSize="20" fontFamily="Georgia, serif">
        Hydroelectric Feasibility
      </text>
    </svg>
  )
}

function TransformerVisual() {
  return (
    <svg viewBox="0 0 600 280" className="h-full w-full">
      <rect x="0" y="0" width="600" height="280" fill="#faf5ff" />
      <rect x="65" y="52" width="140" height="44" rx="10" fill="#ddd6fe" />
      <rect x="65" y="118" width="140" height="44" rx="10" fill="#c4b5fd" />
      <rect x="65" y="184" width="140" height="44" rx="10" fill="#a78bfa" />
      <rect x="250" y="52" width="140" height="44" rx="10" fill="#c4b5fd" />
      <rect x="250" y="118" width="140" height="44" rx="10" fill="#a78bfa" />
      <rect x="250" y="184" width="140" height="44" rx="10" fill="#8b5cf6" />
      <rect x="435" y="85" width="100" height="110" rx="12" fill="#7c3aed" />
      <g stroke="#7c3aed" strokeWidth="2.5" opacity="0.75">
        <line x1="205" y1="74" x2="250" y2="74" />
        <line x1="205" y1="140" x2="250" y2="140" />
        <line x1="205" y1="206" x2="250" y2="206" />
        <line x1="390" y1="74" x2="435" y2="106" />
        <line x1="390" y1="140" x2="435" y2="140" />
        <line x1="390" y1="206" x2="435" y2="174" />
      </g>
      <text x="75" y="34" fill="#6d28d9" fontSize="20" fontFamily="Georgia, serif">
        Transformer / BERT / ALBERT
      </text>
      <text x="456" y="146" fill="#ffffff" fontSize="16">
        Review
      </text>
    </svg>
  )
}

function DQNTradingVisual() {
  // Price line: x 50→390, rough AAPL-like volatile upward drift
  const pts: [number, number][] = [
    [50, 186], [80, 170], [112, 179], [143, 157], [172, 166],
    [202, 147], [232, 155], [262, 137], [292, 131], [322, 143], [352, 120], [390, 112],
  ]
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  const area = `${line} L390,216 L50,216 Z`

  // Action markers: [x, y, type]
  const actions: [number, number, 'buy' | 'hold' | 'sell'][] = [
    [80, 170, 'buy'], [143, 157, 'hold'], [172, 166, 'sell'],
    [232, 155, 'buy'], [292, 131, 'hold'], [352, 120, 'buy'],
  ]

  // Sentiment bars below chart: [x, positive?]
  const sentiments: [number, boolean][] = [
    [80, true], [112, false], [143, true], [172, false],
    [202, true], [232, true], [262, false], [292, true], [322, false], [352, true],
  ]

  const actionColor = { buy: '#22c55e', hold: '#94a3b8', sell: '#f87171' }
  const actionLabel = { buy: 'B', hold: 'H', sell: 'S' }

  return (
    <svg viewBox="0 0 600 280" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="600" height="280" fill="#f0fdf4" />

      {/* Grid */}
      <g stroke="#d1fae5" strokeWidth="1">
        {[70, 110, 150, 190].map(y => <line key={y} x1="50" y1={y} x2="390" y2={y} />)}
        {[50, 130, 210, 290, 370].map(x => <line key={x} x1={x} y1="60" x2={x} y2="216" />)}
      </g>

      {/* Price area fill */}
      <path d={area} fill="#86efac" opacity="0.18" />
      {/* Price line */}
      <path d={line} fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

      {/* Sentiment bars (mini, below chart) */}
      {sentiments.map(([x, pos], i) => (
        <rect
          key={i}
          x={x - 5} y={pos ? 220 : 228}
          width={10} height={pos ? 8 : 8}
          rx={2}
          fill={pos ? '#4ade80' : '#f87171'}
          opacity={0.8}
        />
      ))}
      <text x="50" y="248" fontSize="9" fill="#86efac" fontFamily="system-ui,sans-serif" letterSpacing="0.5">NEWS SENTIMENT</text>

      {/* Action markers on price line */}
      {actions.map(([x, y, type], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={10} fill={actionColor[type]} opacity={0.92} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui,sans-serif">
            {actionLabel[type]}
          </text>
        </g>
      ))}

      {/* Right panel */}
      <rect x="412" y="48" width="168" height="172" rx="12" fill="#dcfce7" stroke="#86efac" strokeWidth="1" />
      <text x="496" y="74" textAnchor="middle" fontSize="13" fontWeight="700" fill="#14532d" fontFamily="system-ui,sans-serif">DQN Agent</text>
      <text x="496" y="90" textAnchor="middle" fontSize="10" fill="#15803d" fontFamily="system-ui,sans-serif">AAPL · Buy / Hold / Sell</text>

      {/* NN nodes (3 input → 2 hidden → 3 output) */}
      {/* inputs */}
      {[112, 136, 160].map((y, i) => (
        <circle key={i} cx="432" cy={y} r="7" fill="#bbf7d0" stroke="#4ade80" strokeWidth="1.2" />
      ))}
      {/* hidden */}
      {[124, 148].map((y, i) => (
        <circle key={i} cx="468" cy={y} r="7" fill="#86efac" stroke="#22c55e" strokeWidth="1.2" />
      ))}
      {/* output */}
      {[112, 136, 160].map((y, i) => (
        <circle key={i} cx="504" cy={y} r="7"
          fill={['#86efac', '#d1fae5', '#fca5a5'][i]}
          stroke={['#22c55e', '#94a3b8', '#f87171'][i]}
          strokeWidth="1.2"
        />
      ))}
      {/* edges input→hidden */}
      {[112, 136, 160].flatMap((iy, ii) =>
        [124, 148].map((hy, hi) => (
          <line key={`${ii}-${hi}`} x1="439" y1={iy} x2="461" y2={hy} stroke="#4ade80" strokeWidth="0.6" opacity="0.5" />
        ))
      )}
      {/* edges hidden→output */}
      {[124, 148].flatMap((hy, hi) =>
        [112, 136, 160].map((oy, oi) => (
          <line key={`${hi}-${oi}`} x1="475" y1={hy} x2="497" y2={oy} stroke="#4ade80" strokeWidth="0.6" opacity="0.5" />
        ))
      )}
      {/* output labels */}
      <text x="518" y="116" fontSize="9" fontWeight="700" fill="#16a34a" fontFamily="system-ui,sans-serif">BUY</text>
      <text x="518" y="140" fontSize="9" fontWeight="700" fill="#64748b" fontFamily="system-ui,sans-serif">HOLD</text>
      <text x="518" y="164" fontSize="9" fontWeight="700" fill="#dc2626" fontFamily="system-ui,sans-serif">SELL</text>

      {/* Bottom legend */}
      <g fontFamily="system-ui,sans-serif" fontSize="9">
        <circle cx="424" cy="200" r="5" fill="#22c55e" />
        <text x="432" y="204" fill="#14532d">Buy</text>
        <circle cx="457" cy="200" r="5" fill="#94a3b8" />
        <text x="465" y="204" fill="#475569">Hold</text>
        <circle cx="494" cy="200" r="5" fill="#f87171" />
        <text x="502" y="204" fill="#991b1b">Sell</text>
      </g>

      <text x="50" y="38" fontSize="13" fontWeight="700" fill="#14532d" fontFamily="system-ui,sans-serif">
        News-Driven DQN Trading · AAPL Equity
      </text>
    </svg>
  )
}

export function ProjectVisual({ kind }: ProjectVisualProps) {
  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg border border-accent-100 bg-white dark:border-slate-700 dark:bg-slate-800"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-36 w-full">
        {kind === 'dqn' && <DQNTradingVisual />}
        {kind === 'montecarlo' && <MonteCarloVisual />}
        {kind === 'gridworld' && <GridworldVisual />}
        {kind === 'hydro' && <HydroVisual />}
        {kind === 'transformer' && <TransformerVisual />}
      </div>
    </motion.div>
  )
}
