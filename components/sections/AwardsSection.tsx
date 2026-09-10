const awards = ['Gold Medal, IBSKC', 'Silver Medal, National Physics Olympiad']

export function AwardsSection() {
  return (
    <section id="awards" className="section-block mb-16">
      <h2 className="mb-4 text-lg font-bold text-stone-900 dark:text-white">Awards</h2>
      <ul className="space-y-1.5 pl-4 text-[15px] text-stone-600 marker:text-stone-400 dark:text-slate-300 dark:marker:text-slate-500" style={{ listStyleType: 'disc' }}>
        {awards.map((award) => (
          <li key={award}>{award}</li>
        ))}
      </ul>
    </section>
  )
}
