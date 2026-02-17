'use client'

import { motion } from 'framer-motion'

export type ProjectVisualKind =
  | 'montecarlo'
  | 'gridworld'
  | 'hydro'
  | 'transformer'

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

export function ProjectVisual({ kind }: ProjectVisualProps) {
  return (
    <motion.div
      className="mb-4 overflow-hidden rounded-lg border border-accent-100 bg-white dark:border-stone-700 dark:bg-stone-950"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-44 w-full">
        {kind === 'montecarlo' && <MonteCarloVisual />}
        {kind === 'gridworld' && <GridworldVisual />}
        {kind === 'hydro' && <HydroVisual />}
        {kind === 'transformer' && <TransformerVisual />}
      </div>
    </motion.div>
  )
}
