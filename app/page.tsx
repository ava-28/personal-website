import Image from 'next/image'
import { ResearchSection } from '@/components/sections/ResearchSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { AwardsSection } from '@/components/sections/AwardsSection'

function IconLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-1.5 text-sm text-stone-700 transition-colors hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
    >
      <span className="inline-grid h-[22px] w-[22px] place-items-center rounded-full border border-stone-300 text-[10px] font-bold dark:border-slate-700">
        {label[0]}
      </span>
      {label}
    </a>
  )
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* ── About / profile ── */}
      <section id="about" className="grid gap-8 pb-14 pt-14 sm:grid-cols-[168px_1fr] sm:items-center">
        <div className="border-2 border-stone-900 bg-white p-1 dark:border-white dark:bg-slate-900">
          <Image
            src="/ava-ahmadi.png"
            alt="Ava Ahmadi"
            width={400}
            height={400}
            priority
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <p className="label-index mb-2 text-stone-400 dark:text-slate-500">
            Mathematics — University of British Columbia
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.1] text-stone-900 dark:text-white sm:text-5xl">
            Ava Ahmadi
          </h1>

          <div className="max-w-2xl space-y-3 text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
            <p>
              I&apos;m a Mathematics undergraduate at the University of British Columbia (BSc, expected
              2027&ndash;2028). My current focus is robotics: I&apos;m working on an independent robotics
              project with a hardware component and pursuing a research position in the field. I previously
              worked as a research assistant on transformer-based neural retrieval with{' '}
              <a href="#research" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">
                Dr. Jian Zhu
              </a>{' '}
              and on multilingual transformer representation alignment with{' '}
              <a href="#research" className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400">
                Dr. Isabel Papadimitriou
              </a>
              , both at UBC.
            </p>
            <p>
              My interests span linear algebra, stochastic processes, optimization, and reinforcement
              learning, with a growing interest in robotics and quantitative finance: the mathematics of
              uncertainty, risk, and how rigorous modeling translates into real decisions.
            </p>
            <p>
              Alongside my technical work, I founded and lead the{' '}
              <a
                href="#leadership"
                className="font-medium text-accent-600 underline-offset-2 hover:underline dark:text-accent-400"
              >
                AWM chapter at UBC
              </a>
              , the first undergraduate chapter of the Association for Women in Mathematics at this
              institution.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <IconLink href="mailto:avahmadii1382@gmail.com" label="Email" />
            <IconLink href="https://github.com/ava-28" label="GitHub" external />
            <IconLink href="https://www.linkedin.com/in/ava-ahmadi1228" label="LinkedIn" external />
          </div>
        </div>
      </section>

      <ResearchSection />
      <EducationSection />
      <ProjectsSection />
      <LeadershipSection />
      <SkillsSection />
      <AwardsSection />

      {/* ── Contact ── */}
      <section id="contact" className="section-block mb-16">
        <h2 className="mb-2 text-lg font-bold text-stone-900 dark:text-white">Contact</h2>
        <p className="mb-4 text-[15px] text-stone-600 dark:text-slate-400">
          Feel free to reach out about research, collaborations, or anything in between.
        </p>
        <IconLink href="mailto:avahmadii1382@gmail.com" label="Email" />
      </section>
    </div>
  )
}
