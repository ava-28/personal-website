# Ava Ahmadi — Academic Personal Website

A minimal academic-style personal website for a Mathematics undergraduate researcher in AI at the University of British Columbia.

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type safety
- **TailwindCSS** — Utility-first styling
- **Framer Motion** — Scroll animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Ensure Node.js 18+ is installed:**
   ```bash
   node --version
   ```
   If not installed: [nodejs.org](https://nodejs.org) or `brew install node`

2. **Install dependencies** (required before first run):
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Troubleshooting

- **"command not found: npm"** — Node.js is not installed or not in your PATH
- **"Cannot find module 'next'"** — Run `npm install` first
- **Build errors** — Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with nav & footer
│   ├── page.tsx        # Home page
│   ├── research/       # Research page
│   ├── projects/       # Projects page
│   └── leadership/     # Leadership page
├── components/
│   ├── Navigation.tsx  # Site navigation
│   ├── Footer.tsx      # Site footer
│   ├── Section.tsx     # Animated section wrapper
│   └── Card.tsx        # Card component for content
└── ...
```

## Pages

- **Home** — Bio and research interests
- **Research** — Research assistant positions
- **Projects** — Academic and research projects
- **Leadership** — AWM @ UBC role
