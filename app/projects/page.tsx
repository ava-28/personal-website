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
  repo?: string
}

const projects: Project[] = [
  {
    title: 'News-Driven Reinforcement Learning Trading Agent',
    subtitle: 'Python · PyTorch · Finnhub API · yfinance',
    visual: 'dqn',
    images: ['/rl-equity-curves.png'],
    description:
      'A research-grade reinforcement learning system that trains a PPO agent to trade a 7-asset portfolio across tech, finance, energy, and ETF markets, combining NLP-driven sentiment analysis with rigorous walk-forward validation, multi-seed testing, and ablation studies to ensure scientific robustness and generalizability.',
    repo: 'https://github.com/ava-28/rl-trading-ppo',
  },
  {
    title: 'Monte Carlo Simulation for Financial Derivatives Pricing',
    subtitle: 'Python · NumPy · SciPy',
    visual: 'montecarlo',
    images: ['/monte-carlo-results.png'],
    description:
      'A Monte Carlo simulation framework in Python for modeling stochastic asset price dynamics under uncertainty. Asset price paths are generated using Geometric Brownian Motion under risk-neutral measure to estimate the fair value of financial derivatives, with sensitivity analysis across volatility and time-to-maturity parameters.',
    repo: 'https://github.com/ava-28/monte-carlo-option-pricing',
  },
  {
    title: 'Reinforcement Learning Agent – Gridworld (PyTorch)',
    subtitle: 'Python · PyTorch',
    visual: 'gridworld',
    images: ['/gridworld-path.png'],
    description:
      'A tabular Q-learning agent implemented in PyTorch, trained on a Gridworld environment using Bellman optimality equations. The project explores policy learning under varying learning rates, evaluates performance via empirical return distributions, and includes hyperparameter sensitivity analysis.',
    repo: 'https://github.com/ava-28/q-learning-gridworld',
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
          <p className="label-index mb-3 text-stone-400 dark:text-slate-500">Index — Projects</p>
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl dark:text-white">
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
                  <h2 className="font-display text-lg font-bold text-stone-900 dark:text-white">
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
    </div>
  )
}
