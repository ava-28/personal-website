export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/50 dark:border-stone-800 dark:bg-stone-900/60">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            © {new Date().getFullYear()} Ava Ahmadi
          </p>
          <a
            href="mailto:avahmadii1382@gmail.com"
            className="text-sm text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200"
          >
            avahmadii1382@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
