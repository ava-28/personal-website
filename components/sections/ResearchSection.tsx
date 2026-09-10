'use client'

/* ─── Inline SVG thumbnail for the multilingual research entry ─── */
function MultilingualThumbnail() {
  const colXs = [40, 60, 80, 100]
  return (
    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <rect width="140" height="140" fill="#EEF1F6" />
      {colXs.map((cx, i) => (
        <circle key={i} cx={cx} cy={30} r={8} fill="#C7CEDC" stroke="#5B6B87" strokeWidth={1.2} />
      ))}
      <rect x={28} y={58} width={84} height={16} rx={3} fill="#DCE1EA" stroke="#8B96AC" strokeWidth={0.8} />
      <rect x={28} y={86} width={84} height={16} rx={3} fill="#DCE1EA" stroke="#8B96AC" strokeWidth={0.8} />
      {colXs.map((cx, i) => (
        <rect key={i} x={cx - 8} y={114} width={16} height={12} rx={2} fill="#DCE1EA" stroke="#8B96AC" strokeWidth={0.8} />
      ))}
    </svg>
  )
}

const researchEntries = [
  {
    title: 'Transformer-Based Neural Retrieval',
    org: 'Research Assistant to Dr. Jian Zhu, UBC',
    period: 'Dec 2025 – Apr 2026',
    image: '/colbert-heatmap.png',
    description:
      'Worked on Reason-ModernColBERT and SPLADE within a two-stage neural retrieval pipeline, evaluated on the BRIGHT benchmark. HPC engineering across Sockeye, Fir, Rorqual, and Narval using Apptainer/Singularity and Slurm-managed GPU jobs. Presented a poster and 3-minute thesis at Canadian AI 2026 (Responsible AI Track) on fairness and representational gaps in transformer-based retrieval.',
  },
  {
    title: 'Multilingual Transformer Representations',
    org: 'Research Assistant to Dr. Isabel Papadimitriou, UBC',
    period: 'Jan 2025 – 2026',
    image: null,
    description:
      'Studied how multilingual transformers (mBERT, XLM-R) represent and align linguistic structure across languages, and what drives cross-lingual generalization, using probing and representational-similarity methods.',
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="section-block mb-16">
      <h2 className="mb-6 text-lg font-bold text-stone-900 dark:text-white">Research</h2>
      <div className="space-y-6">
        {researchEntries.map((entry) => (
          <article key={entry.title} className="entry-row grid grid-cols-[96px_1fr] gap-5 sm:grid-cols-[124px_1fr]">
            <div className="aspect-square w-full overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              {entry.image ? (
                <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
              ) : (
                <MultilingualThumbnail />
              )}
            </div>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-stone-500 dark:text-slate-400">
                <span>{entry.org}</span>
                <span>{entry.period}</span>
              </div>
              <h3 className="mb-2 text-base font-bold text-stone-900 dark:text-white">{entry.title}</h3>
              <p className="text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
