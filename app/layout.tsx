import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://avaahmadi.com'),
  title: {
    default: 'Ava Ahmadi',
    template: '%s | Ava Ahmadi',
  },
  description:
    'Ava Ahmadi is a Mathematics undergraduate at the University of British Columbia working on NLP, Transformer-based Retrieval Systems, Reinforcement Learning, and Responsible AI.',
  keywords: [
    'Ava Ahmadi',
    'Mathematics UBC',
    'NLP research',
    'transformer retrieval',
    'multilingual NLP',
    'responsible AI',
    'NSERC CREATE',
    'ColBERT',
    'AWM UBC',
  ],
  authors: [{ name: 'Ava Ahmadi' }],
  creator: 'Ava Ahmadi',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://avaahmadi.com',
    siteName: 'Ava Ahmadi',
    title: 'Ava Ahmadi – Mathematics & ML Research',
    description:
      'Ava Ahmadi is a Mathematics undergraduate at UBC researching transformer-based retrieval, multilingual NLP, and responsible AI.',
    images: [
      {
        url: '/ava.png',
        width: 1080,
        height: 1080,
        alt: 'Portrait of Ava Ahmadi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ava Ahmadi – Mathematics & ML Research',
    description:
      'Mathematics undergraduate at UBC researching transformer-based retrieval, multilingual NLP, and responsible AI.',
    images: ['/ava.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'rX6bvGcU7DdSXfpYBVL6oIZwbAEsNC1uL3XxKj1DiGY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeScript = `
    (function () {
      try {
        var stored = localStorage.getItem('ava-theme');
        var isDark = stored === 'light' ? false : true;
        document.documentElement.classList.toggle('dark', isDark);
      } catch (e) {}
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning className={`${openSans.variable} ${playfair.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
