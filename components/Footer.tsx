export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/50 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-stone-500 dark:text-slate-500">
            © {new Date().getFullYear()} Ava Ahmadi
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/ava-ahmadi1228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:avahmadii1382@gmail.com"
              className="text-sm text-stone-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300"
            >
              avahmadii1382@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
