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
        url: '/ava-ahmadi.png',
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
    images: ['/ava-ahmadi.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://avaahmadi.com/#ava-ahmadi',
              name: 'Ava Ahmadi',
              url: 'https://avaahmadi.com',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://avaahmadi.com/ava-ahmadi.png',
                url: 'https://avaahmadi.com/ava-ahmadi.png',
                contentUrl: 'https://avaahmadi.com/ava-ahmadi.png',
                name: 'Ava Ahmadi',
                description:
                  'Portrait photo of Ava Ahmadi, Mathematics undergraduate researcher at the University of British Columbia',
                width: 1080,
                height: 1080,
                encodingFormat: 'image/png',
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://avaahmadi.com',
              },
              jobTitle: 'Mathematics Undergraduate Researcher',
              worksFor: {
                '@type': 'Organization',
                name: 'University of British Columbia',
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'University of British Columbia',
              },
              sameAs: [
                'https://github.com/avaahmadi',
                'https://www.linkedin.com/in/ava-ahmadi1228',
              ],
              knowsAbout: [
                'Mathematics',
                'Machine Learning',
                'Natural Language Processing',
                'Transformer-Based Retrieval',
                'Reinforcement Learning',
                'Responsible AI',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
