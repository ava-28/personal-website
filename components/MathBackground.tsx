'use client'

import { motion } from 'framer-motion'

const mathElements = [
  { text: '∇f(x) = 0',         top: '6%',  left: '4%',   size: 13, delay: 0,   dur: 12 },
  { text: '∑',                  top: '3%',  left: '42%',  size: 42, delay: 1,   dur: 15 },
  { text: 'E[X] = μ',           top: '11%', left: '78%',  size: 12, delay: 2.5, dur: 11 },
  { text: '∫',                  top: '20%', left: '88%',  size: 50, delay: 0.5, dur: 14 },
  { text: 'Ax = λx',            top: '25%', left: '6%',   size: 12, delay: 3,   dur: 10 },
  { text: '∂L/∂θ = 0',          top: '32%', left: '68%',  size: 11, delay: 4,   dur: 13 },
  { text: 'ℝⁿ',                 top: '38%', left: '48%',  size: 28, delay: 1.5, dur: 9  },
  { text: 'σ(z) = 1/(1+e⁻ᶻ)',  top: '44%', left: '2%',   size: 11, delay: 5,   dur: 16 },
  { text: 'det(A) ≠ 0',         top: '50%', left: '80%',  size: 12, delay: 2,   dur: 12 },
  { text: '∞',                  top: '55%', left: '22%',  size: 38, delay: 3.5, dur: 18 },
  { text: 'Q(s,a) ← r + γ·V',  top: '60%', left: '58%',  size: 10, delay: 1,   dur: 14 },
  { text: 'P(A|B)',              top: '68%', left: '12%',  size: 14, delay: 4.5, dur: 11 },
  { text: 'x* = argmin f(x)',   top: '72%', left: '74%',  size: 11, delay: 0.8, dur: 13 },
  { text: '∂',                  top: '78%', left: '36%',  size: 44, delay: 2.2, dur: 10 },
  { text: '∑ aₙxⁿ = eˣ',       top: '83%', left: '5%',   size: 12, delay: 3.8, dur: 15 },
  { text: 'ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ',    top: '88%', left: '60%',  size: 11, delay: 1.3, dur: 12 },
  { text: '∇²f ≻ 0',            top: '93%', left: '28%',  size: 12, delay: 5.5, dur: 14 },
]

export function MathBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {mathElements.map((el, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-serif text-stone-400/[0.07] dark:text-slate-300/[0.07]"
          style={{
            top: el.top,
            left: el.left,
            fontSize: el.size,
            fontFamily: 'Georgia, "Times New Roman", serif',
            whiteSpace: 'nowrap',
          }}
          animate={{
            y: [0, i % 2 === 0 ? -10 : 10, 0],
            x: [0, i % 3 === 0 ? 6 : -6, 0],
            opacity: [0.07, 0.13, 0.07],
          }}
          transition={{
            duration: el.dur,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {el.text}
        </motion.span>
      ))}
    </div>
  )
}
