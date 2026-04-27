'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ─── Inline SVG banner for the multilingual card ─── */
function MultilingualBanner() {
  const colXs = [71, 130, 189, 249]
  const tokenLefts   = [40,  82, 124, 166, 208, 250]
  const tokenCenters = [55,  97, 139, 181, 223, 265]
  const tokenW = 30, tokenH = 22, tokenY = 270

  const upperLayer = { x: 28, y: 108, w: 264, h: 40 }
  const lowerLayer = { x: 28, y: 190, w: 264, h: 40 }
  const subRectLefts = colXs.map(cx => cx - 22)
  const subRectW = 44, subRectH = 34

  const circleY = 72, circleR = 18

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
    <svg viewBox="0 0 745 318" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="372" y="162" textAnchor="middle" fontSize="18" fill="#94A3B8" letterSpacing="6">•••</text>
      {models.map((m) => (
        <g key={m.label} transform={`translate(${m.ox}, 8)`}>
          <rect x={0} y={0} width={320} height={302} rx={14}
            fill={m.boxFill} stroke={m.boxStroke} strokeWidth={1.5} />
          <text x={160} y={38} textAnchor="middle"
            fontFamily="system-ui,sans-serif" fontWeight="700" fontSize="16" fill={m.titleFill}>
            {m.label}
          </text>
          {/* Lines: circles → upper layer */}
          {colXs.flatMap(from => colXs.map(to => (
            <line key={`cu-${from}-${to}`}
              x1={from} y1={circleY + circleR} x2={to} y2={upperLayer.y}
              stroke="#334155" strokeWidth={0.5} opacity={0.18} />
          )))}
          {/* Circles */}
          {colXs.map((cx, i) => (
            <circle key={i} cx={cx} cy={circleY} r={circleR}
              fill={m.circleFill} stroke={m.circleStroke} strokeWidth={1.5} />
          ))}
          {/* Upper layer */}
          <rect x={upperLayer.x} y={upperLayer.y} width={upperLayer.w} height={upperLayer.h}
            rx={4} fill={m.layerBg} stroke={m.layerStroke} strokeWidth={0.6} />
          {subRectLefts.map((sx, i) => (
            <rect key={i} x={sx} y={upperLayer.y + 3} width={subRectW} height={subRectH}
              rx={4} fill={m.layerFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}
          {/* Lines: upper → lower layer */}
          {colXs.flatMap(from => colXs.map(to => (
            <line key={`ul-${from}-${to}`}
              x1={from} y1={upperLayer.y + upperLayer.h} x2={to} y2={lowerLayer.y}
              stroke="#334155" strokeWidth={0.5} opacity={0.18} />
          )))}
          {/* Lower layer */}
          <rect x={lowerLayer.x} y={lowerLayer.y} width={lowerLayer.w} height={lowerLayer.h}
            rx={4} fill={m.layerBg} stroke={m.layerStroke} strokeWidth={0.6} />
          {subRectLefts.map((sx, i) => (
            <rect key={i} x={sx} y={lowerLayer.y + 3} width={subRectW} height={subRectH}
              rx={4} fill={m.layerFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}
          {/* Lines: lower layer → tokens */}
          {colXs.flatMap(from => tokenCenters.map(to => (
            <line key={`lt-${from}-${to}`}
              x1={from} y1={lowerLayer.y + lowerLayer.h} x2={to} y2={tokenY}
              stroke="#334155" strokeWidth={0.5} opacity={0.18} />
          )))}
          {/* Input tokens */}
          {tokenLefts.map((tx, i) => (
            <rect key={i} x={tx} y={tokenY} width={tokenW} height={tokenH}
              rx={3} fill={m.tokenFill} stroke={m.layerStroke} strokeWidth={0.8} />
          ))}
        </g>
      ))}
    </svg>
  )
}

/* ─── data ─── */
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
    sections: [] as string[],
    linked: true,
    bannerImage: '/colbert-heatmap.png',
    bannerSvg: false,
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
    sections: [] as string[],
    linked: false,
    bannerImage: null,
    bannerSvg: true,
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
              {area.linked ? (
                <Link href={area.href} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/60 transition-all hover:border-accent-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-accent-600">

                    {/* Visual banner */}
                    <div className={`relative h-40 overflow-hidden ${(!area.bannerImage && !area.bannerSvg) ? `bg-gradient-to-br ${area.gradientFrom} ${area.gradientVia} ${area.gradientTo}` : 'bg-white'}`}>
                      {area.bannerImage ? (
                        <>
                          <img
                            src={area.bannerImage}
                            alt={`${area.title} research visualization`}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                        </>
                      ) : area.bannerSvg ? (
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                          <MultilingualBanner />
                        </div>
                      ) : (
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

                      {area.sections.length > 0 && (
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
                      )}
                    </div>

                  </div>
                </Link>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white/60 dark:border-slate-700 dark:bg-slate-800/60">

                  {/* Visual banner */}
                  <div className={`relative h-40 overflow-hidden ${(!area.bannerImage && !area.bannerSvg) ? `bg-gradient-to-br ${area.gradientFrom} ${area.gradientVia} ${area.gradientTo}` : 'bg-white'}`}>
                    {area.bannerImage ? (
                      <>
                        <img
                          src={area.bannerImage}
                          alt={`${area.title} research visualization`}
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                      </>
                    ) : area.bannerSvg ? (
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <MultilingualBanner />
                      </div>
                    ) : (
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
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h2 className="font-sans text-base font-bold text-stone-900 dark:text-slate-100">
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

                    {area.sections.length > 0 && (
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
                    )}
                  </div>

                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
