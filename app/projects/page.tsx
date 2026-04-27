'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { ProjectVisual } from '@/components/ProjectVisual'
import type { ProjectVisualKind } from '@/components/ProjectVisual'

interface Project {
  title: string
  subtitle?: string
  visual: ProjectVisualKind
  images?: string[]
  description: string
}

const projects: Project[] = [
  {
    title: 'News-Driven Reinforcement Learning Trading Agent',
    subtitle: 'Python · PyTorch · Finnhub API · yfinance',
    visual: 'dqn',
    images: ['/rl-equity-curves.png'],
    description:
      'A research-grade reinforcement learning system that trains a PPO agent to trade a 7-asset portfolio across tech, finance, energy, and ETF markets, combining NLP-driven sentiment analysis with rigorous walk-forward validation, multi-seed testing, and ablation studies to ensure scientific robustness and generalizability.',
  },
  {
    title: 'Monte Carlo Simulation for Financial Derivatives Pricing',
    subtitle: 'Python · NumPy · SciPy',
    visual: 'montecarlo',
    images: ['/monte-carlo-results.png'],
    description:
      'A Monte Carlo simulation framework in Python for modeling stochastic asset price dynamics under uncertainty. Asset price paths are generated using Geometric Brownian Motion under risk-neutral measure to estimate the fair value of financial derivatives, with sensitivity analysis across volatility and time-to-maturity parameters.',
  },
  {
    title: 'Reinforcement Learning Agent – Gridworld (PyTorch)',
    subtitle: 'Python · PyTorch',
    visual: 'gridworld',
    images: ['/gridworld-path.png'],
    description:
      'A tabular Q-learning agent implemented in PyTorch, trained on a Gridworld environment using Bellman optimality equations. The project explores policy learning under varying learning rates, evaluates performance via empirical return distributions, and includes hyperparameter sensitivity analysis.',
  },
  {
    title: 'Hydroelectric Power Plant Feasibility Study',
    subtitle: 'Python · pandas · HYDAT',
    visual: 'hydro',
    images: ['/hydro-dam.jpg'],
    description:
      'A quantitative feasibility study modeling hydroelectric output under stochastic river-flow dynamics using flow-duration curves and HYDAT data. The analysis includes scenario and sensitivity analysis, tail-risk evaluation, and assessment of long-run economic viability.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 pt-12"
        >
          <h1 className="font-sans text-5xl font-black tracking-tight text-stone-900 md:text-7xl dark:text-white">
            Projects
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Quantitative, machine learning, and NLP projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="space-y-4">
                {project.images && project.images.length > 0 ? (
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
                ) : (
                  <ProjectVisual kind={project.visual} />
                )}
                <div>
                  <h2 className="font-sans text-lg font-bold text-stone-900 dark:text-white">
                    {project.title}
                  </h2>
                  {project.subtitle && (
                    <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
