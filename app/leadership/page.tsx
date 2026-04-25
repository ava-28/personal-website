'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'
import { DecorativeShapes } from '@/components/DecorativeShapes'

const leadership = {
  title: 'Founder & President',
  organization: 'Association for Women in Mathematics (AWM) @ UBC',
  period: 'Jan 2026 – Present',
  overview:
    'I founded and currently lead the undergraduate chapter of the Association for Women in Mathematics at the University of British Columbia with the goal of strengthening engagement, mentorship, and retention within the mathematics community.',
  focus:
    'This initiative focuses on building accessible academic and professional support structures for undergraduate students pursuing mathematically intensive disciplines.',
  initiatives: [
    'Designed and deployed a data-driven membership intake system to assess student interest, role allocation, and participation patterns',
    'Structured an operational framework defining executive roles across events, finance, outreach, and technology to ensure scalable organizational growth',
    'Collaborate with faculty members and the Departmental Equity Committee to align programming with broader educational and inclusion initiatives',
    'Coordinate technical workshops, mentorship programs, and academic panels aimed at supporting students pursuing research and graduate studies',
  ],
  reflection:
    'Through this work, I am particularly interested in understanding how institutional and community-level infrastructure can influence participation, persistence, and success in mathematically intensive fields.',
}

export default function LeadershipPage() {
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
            Leadership
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Founding the Association for Women in Mathematics at UBC
          </p>
        </motion.div>

        <Card>
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-56 w-full overflow-hidden rounded-md border border-stone-200 bg-stone-100 dark:border-slate-700 dark:bg-slate-800 sm:h-72"
            >
              <Image
                src="/awm-ubc.png"
                alt="Association for Women in Mathematics at UBC"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </motion.div>
            <div>
              <h2 className="font-sans text-lg font-bold text-stone-900 dark:text-white">
                {leadership.title}
              </h2>
              <p className="mt-1 text-accent-600 dark:text-accent-400">{leadership.organization}</p>
              <p className="text-sm text-stone-600 dark:text-slate-400">
                {leadership.period}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-stone-700 dark:text-slate-300">
              {leadership.overview}
            </p>
            <p className="text-sm leading-relaxed text-stone-700 dark:text-slate-300">
              {leadership.focus}
            </p>
            <div>
              <p className="mb-3 text-sm font-medium text-stone-800 dark:text-slate-200">
                As part of this effort, I:
              </p>
              <ul className="space-y-2">
                {leadership.initiatives.map((initiative) => (
                  <li
                    key={initiative}
                    className="flex items-start gap-2 text-stone-700 dark:text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                    <span className="text-sm leading-relaxed">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm leading-relaxed text-stone-700 dark:text-slate-300">
              {leadership.reflection}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
