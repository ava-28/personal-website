'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { DecorativeShapes } from '@/components/DecorativeShapes'
import { ProjectVisual } from '@/components/ProjectVisual'
import type { ProjectVisualKind } from '@/components/ProjectVisual'

interface Project {
  title: string
  subtitle?: string
  visual: ProjectVisualKind
  highlights: string[]
}

const projects: Project[] = [
  {
    title: 'Monte Carlo Simulation for Financial Derivatives Pricing',
    visual: 'montecarlo',
    highlights: [
      'Developed a Monte Carlo simulation framework in Python to model stochastic asset price dynamics under uncertainty',
      'Implemented risk-neutral sampling techniques to estimate the fair value of financial derivatives',
      'Simulated asset price paths using Geometric Brownian Motion to approximate expected option payoffs',
      'Applied probabilistic modeling to evaluate pricing sensitivity across varying volatility and time-to-maturity parameters',
      'Explored the role of randomness and statistical convergence in financial decision-making systems',
      'Investigated connections between simulation-based pricing methods and reinforcement learning approaches to sequential decision-making under uncertainty',
    ],
  },
  {
    title: 'Reinforcement Learning Agent – Gridworld (PyTorch)',
    visual: 'gridworld',
    highlights: [
      'Implemented Q-learning agent using Bellman optimality equations',
      'Trained policies under different learning rates',
      'Evaluated performance via empirical return distributions',
      'Conducted hyperparameter sensitivity analysis',
    ],
  },
  {
    title: 'Hydroelectric Power Plant Feasibility Study',
    visual: 'hydro',
    highlights: [
      'Modeled hydroelectric output under stochastic river-flow dynamics',
      'Performed sensitivity and scenario analysis',
      'Used flow-duration curves and HYDAT data',
      'Evaluated economic viability and tail-risk',
    ],
  },
  {
    title: 'Research Paper – EEML 2025 Submission',
    subtitle: 'A Comparative Review of Transformer, BERT, and ALBERT',
    visual: 'transformer',
    highlights: [
      'Analyzed attention mechanisms',
      'Studied bidirectional pretraining',
      'Evaluated parameter efficiency',
      'Compared architectural evolution in LLMs',
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <DecorativeShapes />
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

        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="space-y-4">
                <ProjectVisual kind={project.visual} />
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
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-stone-700 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
