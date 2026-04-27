'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

const awmLinks = [
  {
    label: 'Instagram',
    handle: '@awm.ubc',
    href: 'https://www.instagram.com/awm.ubc',
    color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-700/50',
  },
  {
    label: 'Website',
    handle: 'awmubc.github.io',
    href: 'https://awmubc.github.io',
    color: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/50',
  },
]

const accomplishments = [
  {
    category: 'Building the Organization',
    items: [
      'Founded the undergraduate AWM chapter at UBC from the ground up, becoming the first such chapter at this institution',
      'Structured an operational framework with clearly defined executive roles across events, finance, outreach, and technology',
      'Designed and deployed a data-driven membership intake system to assess student interest, allocate roles, and track participation patterns',
      'Established AWM UBC on Instagram and launched our website to grow our digital presence and outreach reach',
      'Secured support from the UBC Mathematics Department and the Pacific Institute for the Mathematical Sciences (PIMS)',
    ],
  },
  {
    category: 'Community & Faculty Engagement',
    items: [
      'Collaborate directly with faculty members and the Departmental Equity Committee to align our programming with broader inclusion goals',
      'Coordinate mentorship programs pairing undergraduate students with graduate students and faculty in mathematics and related fields',
      'Facilitate academic panels and Q&A sessions with researchers to help undergraduates navigate research and graduate school',
    ],
  },
  {
    category: 'Events & Academic Programming',
    items: [
      'Organize social and networking events that bring together students across mathematical disciplines to foster community and belonging',
      'Run technical workshops on topics spanning mathematical methods, research tools, and career development',
      'Build support structures for students pursuing mathematically intensive disciplines, with a focus on accessibility and retention',
      'Develop programming aimed at students interested in research, graduate studies, and quantitative careers',
    ],
  },
]

const overview =
  'I founded AWM at UBC in January 2026 because I believe mathematics is more powerful when the room includes everyone capable of doing it. Starting from nothing, I built an organization with a full executive team spanning communications, events, finance, mentorship, external relations, and technology, and secured institutional backing from the UBC Mathematics Department and the Pacific Institute for the Mathematical Sciences. I lead this chapter the same way I approach my research: with precision, intention, and a long view.'

const reflection =
  'Mathematics gave me a language for the world. AWM at UBC is my way of making sure more women get to speak it.'

export default function LeadershipPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-24">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 pt-12"
        >
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Leadership
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Founding the Association for Women in Mathematics at UBC
          </p>
        </motion.div>

        {/* Hero card */}
        <Card>
          <div className="space-y-6">

            {/* Banner image */}
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

            {/* Role info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-sans text-xl font-bold text-stone-900 dark:text-white">
                Founder &amp; President
              </h2>
              <p className="mt-1 font-medium text-accent-600 dark:text-accent-400">
                Association for Women in Mathematics (AWM) @ UBC
              </p>
              <p className="text-sm text-stone-500 dark:text-slate-400">
                Jan 2026 – Present
              </p>
            </motion.div>

            {/* Overview */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-sm leading-relaxed text-stone-700 dark:text-slate-300"
            >
              {overview}
            </motion.p>

            {/* AWM links */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {awmLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:shadow-sm hover:-translate-y-0.5 ${link.color}`}
                >
                  <span>{link.label}</span>
                  <span className="opacity-70">{link.handle}</span>
                </a>
              ))}
            </motion.div>

          </div>
        </Card>

        {/* Accomplishments */}
        <div className="mt-10 space-y-8">
          {accomplishments.map((section, si) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: si * 0.07 }}
            >
              <h3 className="mb-4 font-sans text-base font-bold text-stone-900 dark:text-white">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, ii) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: si * 0.07 + ii * 0.06 }}
                    className="flex items-start gap-3 text-stone-700 dark:text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Reflection */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 border-l-2 border-accent-400 pl-5 text-sm italic leading-relaxed text-stone-600 dark:text-slate-400"
        >
          {reflection}
        </motion.blockquote>

      </div>
    </div>
  )
}
