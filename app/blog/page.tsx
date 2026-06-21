'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/Card'

interface BlogPost {
  slug: string
  title: string
  subtitle?: string
  date: string
  description: string
  image?: string
}

const posts: BlogPost[] = [
  {
    slug: 'airbnb-popularity',
    title:
      "Can You Predict an Airbnb Listing's Popularity Before It Ever Hosts a Guest?",
    subtitle: 'Python · scikit-learn · LightGBM',
    date: 'CPSC 330 · 2026',
    description:
      "A LightGBM model that predicts an Airbnb listing's reviews per month from price, location, and room type — and what its feature importances reveal about why some listings take off and others sit idle.",
    image: '/airbnb-reviews-distribution.png',
  },
]

export default function BlogPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 pt-12"
        >
          <h1 className="font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Blog
          </h1>
          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Notes and write-ups on machine learning experiments and class projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <Card>
                <div className="space-y-4">
                  {post.image && (
                    <div className="mb-2">
                      <motion.div
                        className="overflow-hidden rounded-lg border border-accent-100 bg-white dark:border-slate-700 dark:bg-slate-800"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-36 w-full object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                  <div>
                    <h2 className="font-sans text-lg font-bold text-stone-900 dark:text-white">
                      {post.title}
                    </h2>
                    {post.subtitle && (
                      <p className="mt-1 text-sm text-accent-600 dark:text-accent-400">
                        {post.subtitle}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-stone-400 dark:text-slate-500">
                      {post.date}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300">
                    {post.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
