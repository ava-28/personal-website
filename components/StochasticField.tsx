'use client'

/**
 * Faint, deterministic line-art backdrop for the hero: a few sample paths
 * (à la Brownian motion / GBM), an axis, and a scatter — standing in for
 * the full-bleed photograph a more conventional academic site would use,
 * built instead from the math she actually works with.
 */

const pathA =
  'M0,140 L20,132 L40,148 L60,120 L80,138 L100,96 L120,114 L140,80 L160,102 ' +
  'L180,66 L200,88 L220,58 L240,74 L260,40 L280,62 L300,30 L320,48 L340,18 ' +
  'L360,36 L380,10 L400,26'

const pathB =
  'M0,168 L20,176 L40,160 L60,182 L80,158 L100,190 L120,164 L140,196 L160,172 ' +
  'L180,204 L200,178 L220,208 L240,186 L260,214 L280,192 L300,220 L320,198 ' +
  'L340,224 L360,204 L380,230 L400,208'

const pathC =
  'M0,110 L20,104 L40,116 L60,100 L80,118 L100,96 L120,122 L140,94 L160,126 ' +
  'L180,98 L200,130 L220,102 L240,134 L260,106 L280,138 L300,110 L320,142 ' +
  'L340,112 L360,146 L380,116 L400,150'

const scatter: [number, number][] = [
  [24, 150], [58, 128], [96, 168], [134, 100], [172, 186],
  [210, 118], [248, 160], [286, 96], [324, 176], [362, 132],
]

export function StochasticField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 400 240"
        preserveAspectRatio="none"
        className="absolute -right-24 top-6 h-[280px] w-[440px] opacity-[0.35] dark:opacity-[0.22] sm:-right-16 sm:h-[360px] sm:w-[600px]"
      >
        {/* axes */}
        <line x1="0" y1="230" x2="400" y2="230" stroke="currentColor" strokeWidth="0.75" className="text-stone-400 dark:text-slate-500" />
        <line x1="2" y1="0" x2="2" y2="240" stroke="currentColor" strokeWidth="0.75" className="text-stone-400 dark:text-slate-500" />
        {/* sample paths */}
        <path d={pathA} fill="none" stroke="currentColor" strokeWidth="1.1" className="text-stone-500 dark:text-slate-400" />
        <path d={pathC} fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400 dark:text-slate-500" opacity="0.7" />
        <path d={pathB} fill="none" stroke="currentColor" strokeWidth="1.3" className="text-accent-600 dark:text-accent-400" opacity="0.8" />
        {/* scatter */}
        {scatter.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2} fill="currentColor" className="text-accent-600 dark:text-accent-400" opacity="0.55" />
        ))}
      </svg>
    </div>
  )
}
