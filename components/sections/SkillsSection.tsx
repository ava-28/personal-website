const skillGroups = [
  {
    title: 'Mathematics & statistics',
    items: [
      'Proof-based mathematics',
      'Linear algebra',
      'Stochastic processes & Markov chains',
      'Optimization & duality (linear programming)',
      'Numerical methods / scientific computing',
      'Mathematical logic',
    ],
  },
  {
    title: 'Machine learning & computing',
    items: [
      'Python (PyTorch)',
      'Transformer-based retrieval (SPLADE, ColBERT)',
      'Reinforcement learning',
      'MATLAB / numerical computing',
      'LaTeX / Overleaf',
      'Git & command-line workflows',
    ],
  },
  {
    title: 'HPC & research infrastructure',
    items: [
      'UBC / Alliance clusters (Sockeye, Fir, Rorqual, Narval)',
      'Apptainer / Singularity',
      'Slurm (sbatch / salloc) GPU job scheduling',
      'Environment & dependency management',
      'Dataset caching & model snapshot workflows',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-block mb-16">
      <h2 className="mb-6 text-lg font-bold text-stone-900 dark:text-white">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-base font-bold text-stone-900 dark:text-white">{group.title}</h3>
            <ul className="space-y-1.5 pl-4 text-[15px] text-stone-600 marker:text-stone-400 dark:text-slate-300 dark:marker:text-slate-500" style={{ listStyleType: 'disc' }}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
