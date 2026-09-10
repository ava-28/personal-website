export function Footer() {
  return (
    <footer className="border-t border-stone-300 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-8">
        <p className="label-index text-stone-400 dark:text-slate-500">
          © {new Date().getFullYear()} Ava Ahmadi — Vancouver, BC
        </p>
        <a
          href="#about"
          className="inline-flex h-9 items-center rounded-full border border-stone-300 px-4 text-sm text-stone-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-500 dark:hover:text-accent-400"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
