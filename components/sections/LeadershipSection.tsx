import Image from 'next/image'

const awmLinks = [
  { label: 'Instagram', handle: '@awm.ubc', href: 'https://www.instagram.com/awm.ubc' },
  { label: 'Website', handle: 'awm.math.ubc.ca', href: 'https://awm.math.ubc.ca/' },
]

const accomplishments = [
  {
    category: 'Building the organization',
    items: [
      'Founded the undergraduate AWM chapter at UBC from the ground up — the first chapter of its kind at the university',
      'Built out an executive team with clear roles across events, finance, outreach, and tech',
      'Set up a sign-up and intake system to understand what members were looking for and match people to the right roles',
      'Got AWM UBC onto Instagram and built a website so people could find the chapter',
      'Brought the UBC Mathematics Department and the Pacific Institute for the Mathematical Sciences (PIMS) on board as institutional supporters',
    ],
  },
  {
    category: 'Community & faculty engagement',
    items: [
      'Works directly with faculty and the department’s Equity Committee to keep programming aligned with the department’s inclusion goals',
      'Runs a mentorship program pairing undergrads with grad students and faculty in math and related fields',
      'Hosts panels and Q&As with researchers so undergrads have a place to ask questions about research and grad school',
    ],
  },
  {
    category: 'Events & academic programming',
    items: [
      'Runs social events that bring students together across different areas of math to build community',
      'Runs workshops covering mathematical methods, research tools, and career prep',
      'Puts support in place for students in math-heavy programs, with a focus on accessibility and retention',
      'Builds programming for students thinking about research, grad school, or quantitative careers',
    ],
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-block mb-16">
      <h2 className="mb-6 text-lg font-bold text-stone-900 dark:text-white">Leadership</h2>

      <article className="entry-row grid grid-cols-[64px_1fr] gap-5">
        <Image
          src="/awm-logo-circle.png"
          alt="Association for Women in Mathematics at UBC logo"
          width={480}
          height={480}
          className="h-16 w-16 rounded-full ring-1 ring-stone-300 dark:ring-slate-600"
        />
        <div>
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-stone-500 dark:text-slate-400">
            <span>Association for Women in Mathematics (AWM) @ UBC</span>
            <span>Jan 2026 – Present</span>
          </div>
          <h3 className="mb-2 text-base font-bold text-stone-900 dark:text-white">Founder &amp; President</h3>
          <p className="mb-3 text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
            Started the AWM chapter at UBC in January 2026 to build a real community for women studying math
            at UBC. It has grown into a full executive team spanning communications, events, finance,
            mentorship, and technology, with backing from the UBC Mathematics Department and PIMS.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {awmLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:underline dark:text-accent-400"
              >
                {link.label} &middot; {link.handle}
              </a>
            ))}
          </div>
        </div>
      </article>

      <div className="mt-8 space-y-6">
        {accomplishments.map((section) => (
          <div key={section.category}>
            <h4 className="mb-2 text-[15px] font-bold text-stone-900 dark:text-white">{section.category}</h4>
            <ul
              className="space-y-1.5 pl-4 text-[15px] text-stone-600 marker:text-stone-400 dark:text-slate-300 dark:marker:text-slate-500"
              style={{ listStyleType: 'disc' }}
            >
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
