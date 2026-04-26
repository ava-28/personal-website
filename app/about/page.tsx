import type { Metadata } from 'next'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'Ava Ahmadi – About',
  description:
    'About Ava Ahmadi — Mathematics undergraduate at UBC researching transformer-based retrieval, multilingual NLP, and responsible AI. Founder of AWM at UBC.',
  openGraph: {
    title: 'Ava Ahmadi – About',
    description:
      'About Ava Ahmadi — Mathematics undergraduate at UBC researching transformer-based retrieval, multilingual NLP, and responsible AI.',
    images: [{ url: '/ava.png', width: 1080, height: 1080, alt: 'Portrait of Ava Ahmadi' }],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
