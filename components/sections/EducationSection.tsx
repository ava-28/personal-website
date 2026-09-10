export function EducationSection() {
  return (
    <section id="education" className="section-block mb-16">
      <h2 className="mb-6 text-lg font-bold text-stone-900 dark:text-white">Education</h2>
      <div className="space-y-6">
        <article className="entry-row">
          <p className="mb-1 text-[13px] text-stone-500 dark:text-slate-400">2023 – 2027/2028 (expected)</p>
          <h3 className="mb-1 text-base font-bold text-stone-900 dark:text-white">
            University of British Columbia
          </h3>
          <p className="text-[15px] text-stone-600 dark:text-slate-300">
            BSc, Mathematics. Coursework in proof-based mathematics, linear algebra, stochastic processes,
            optimization, numerical methods, and logic. Founding President of the Association for Women in
            Mathematics (AWM) chapter.
          </p>
        </article>
        <article className="entry-row opacity-80">
          <p className="mb-1 text-[13px] text-stone-500 dark:text-slate-400">Prior</p>
          <h3 className="mb-1 text-base font-bold text-stone-900 dark:text-white">
            NODET (National Organization for Development of Exceptional Talents)
          </h3>
          <p className="text-[15px] text-stone-600 dark:text-slate-300">
            Competitive physics background: Gold Medal, IBSKC.
          </p>
        </article>
      </div>
    </section>
  )
}
