'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section } from '@/components/Section'

const awmLinks = [
  {
    label: 'Instagram',
    handle: '@awm.ubc',
    href: 'https://www.instagram.com/awm.ubc',
    color: 'bg-accent-100 text-accent-700 border-accent-200 dark:bg-accent-900/30 dark:text-accent-300 dark:border-accent-700/50',
  },
  {
    label: 'Website',
    handle: 'awm.math.ubc.ca',
    href: 'https://awm.math.ubc.ca/',
    color: 'bg-stone-100 text-stone-700 border-stone-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  },
]

const accomplishments = [
  {
    category: 'Building the Organization',
    items: [
      'Founded the undergraduate AWM chapter at UBC from the ground up — the first chapter of its kind at the university',
      'Built out an executive team with clear roles across events, finance, outreach, and tech',
      'Set up a sign-up and intake system to understand what members were looking for and match people to the right roles',
      'Got AWM UBC onto Instagram and built our website so people could actually find us',
      'Brought the UBC Mathematics Department and the Pacific Institute for the Mathematical Sciences (PIMS) on board as institutional supporters',
    ],
  },
  {
    category: 'Community & Faculty Engagement',
    items: [
      'Work directly with faculty and the department’s Equity Committee to keep our programming aligned with the department’s inclusion goals',
      'Run a mentorship program pairing undergrads with grad students and faculty in math and related fields',
      'Host panels and Q&As with researchers so undergrads have a real place to ask questions about research and grad school',
    ],
  },
  {
    category: 'Events & Academic Programming',
    items: [
      'Run social events that bring students together across different areas of math, just to build community',
      'Run workshops covering everything from mathematical methods to research tools to career prep',
      'Put support in place for students in math-heavy programs, with a focus on accessibility and retention',
      'Build programming for students thinking about research, grad school, or quantitative careers',
    ],
  },
]

const overview =
  'I started the AWM chapter at UBC in January 2026 because I wanted a real community for women studying math here, not just a club that exists on paper. It began with nothing, and has grown into a full executive team spanning communications, events, finance, mentorship, and technology, with real backing from the UBC Mathematics Department and PIMS. I try to run it with the same care I bring to research: thinking a few steps ahead, not just getting through the next event.'

const reflection =
  'Math gave me a language for making sense of the world. AWM at UBC is how I make sure more women get to learn to speak it too.'

export function LeadershipSection() {
  return (
    <section id="leadership" className="scroll-mt-24 border-t border-stone-300 pt-20 dark:border-slate-800 xl:scroll-mt-10">
      <div className="mx-auto max-w-3xl px-6 pb-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label-index mb-3 text-stone-400 dark:text-slate-500">Index — Leadership</p>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Leadership
          </h2>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Founding the Association for Women in Mathematics at UBC
          </p>
        </motion.div>

        {/* Hero */}
        <Section className="border-b border-stone-300 pb-10 dark:border-slate-800">
          <div className="space-y-6">

            {/* Logo + role info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-5"
            >
              <Image
                src="/awm-logo-circle.png"
                alt="Association for Women in Mathematics at UBC logo"
                width={480}
                height={480}
                className="h-16 w-16 shrink-0 rounded-full ring-1 ring-stone-300 dark:ring-slate-600 sm:h-20 sm:w-20"
              />
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-stone-900 dark:text-white">
                  Founder &amp; President
                </h3>
                <p className="mt-1 font-medium text-accent-600 dark:text-accent-400">
                  Association for Women in Mathematics (AWM) @ UBC
                </p>
                <p className="text-sm text-stone-500 dark:text-slate-400">
                  Jan 2026 – Present
                </p>
              </div>
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
        </Section>

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
              <h4 className="mb-4 font-sans text-base font-bold text-stone-900 dark:text-white">
                {section.category}
              </h4>
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
    </section>
  )
}
