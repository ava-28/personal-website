'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

function C({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[0.85em] text-accent-700 dark:bg-slate-800 dark:text-accent-300">
      {children}
    </code>
  )
}

function Figure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="mx-auto h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm italic text-stone-500 dark:text-slate-400">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function AirbnbPopularityPost() {
  return (
    <div className="relative overflow-hidden">
      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 pt-12"
        >
          <Link
            href="/blog"
            className="text-sm text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
          >
            ← Blog
          </Link>
          <h1 className="mt-4 font-sans text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white">
            Can You Predict an Airbnb Listing&rsquo;s Popularity Before It Ever Hosts a Guest?
          </h1>
          <p className="mt-3 text-sm text-accent-600 dark:text-accent-400">
            Python · scikit-learn · LightGBM
          </p>
          <p className="mt-1 text-xs text-stone-400 dark:text-slate-500">
            CPSC 330 · 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5 text-base leading-relaxed text-stone-700 dark:text-slate-300"
        >
          <p>
            One of Airbnb&rsquo;s major problems is figuring out whether a listing will take off or just sit there ignored. My project for CPSC 330 was to try to predict that: given everything we know about a New York City Airbnb listing (its price, location, room type), can a model predict how popular that listing would be? Since Airbnb doesn&rsquo;t make booking data public, <C>reviews_per_month</C> is the closest available factor to a listing&rsquo;s popularity, and if we have a model that can predict it well, it would help hosts understand what&rsquo;s working against them before they post a listing.
          </p>

          <h2 className="!mt-12 !mb-2 font-sans text-xl font-semibold text-stone-900 dark:text-white">
            The data
          </h2>
          <p>
            I used the public New York City Airbnb Open Data set on Kaggle, roughly 48,900 listings scraped in 2019. It includes columns like price, room type, minimum nights, location, and host listing count. The first surprise in EDA: about one in five listings (10,052 of them) have no value for <C>reviews_per_month</C>. The reason for that is that they have zero reviews. I dropped those rows, leaving roughly 38,800 listings for a 70/30 train/test split.
          </p>
          <p>
            The target is right-skewed, meaning most listings get under one review a month, and only a long tail gets more, as Figure 1 shows.
          </p>

          <Figure
            src="/airbnb-reviews-distribution.png"
            alt="Histogram of reviews per month in the training set"
            caption="Figure 1. Distribution of reviews_per_month in the training set (clipped at 10 for readability)."
            width={704}
            height={393}
          />

          <p>
            The skew matters because RMSE ends up being dominated by how well the model handles low-activity listings rather than the rare hot ones. Another observation is that Manhattan and Brooklyn listings average noticeably fewer reviews per month than Queens, Bronx, or Staten Island listings (Figure 2), even though Manhattan is the most expensive and most-listed borough.
          </p>

          <Figure
            src="/airbnb-borough-comparison.png"
            alt="Bar chart of average reviews per month by NYC borough"
            caption="Figure 2. Average reviews_per_month by NYC borough."
            width={630}
            height={470}
          />

          <h2 className="!mt-12 !mb-2 font-sans text-xl font-semibold text-stone-900 dark:text-white">
            The model
          </h2>
          <p>
            The <C>ColumnTransformer</C> pipeline that I built has the numerical features of price, minimum nights, latitude and longitude, availability, host listing count, plus a couple of engineered review-month and review-year fields. These features were median-imputed and standardized. The categorical features were room type, neighbourhood, borough. They were one-hot encoded. A <C>DummyRegressor</C> predicting the training mean set the floor at an RMSE of 1.70. Ridge regression has the same score 1.70. This can mean that the relationship between these features and popularity is not linear.
          </p>
          <p>
            Then I compared LightGBM, k-nearest neighbors, and a small random forest. The KNN run never finished. Computing pairwise distances became too slow as the data had hundreds of one-hot-encoded neighbourhood columns, which made me interrupt the model. This led my project to have a two model comparison rather than a three model comparison. LightGBM was the winner of the models I ran. Therefore I tuned it with <C>RandomizedSearchCV</C> over tree depth, number of estimators, learning rate and leaf count. The best cross-validated RMSE of 1.016 was achieved from the ten combinations and three-fold cross-validation of this model.
          </p>

          <h2 className="!mt-12 !mb-2 font-sans text-xl font-semibold text-stone-900 dark:text-white">
            Results
          </h2>
          <p>
            The tuned LightGBM model scored an RMSE of 0.970 on the held-out test set, which is close to its cross-validation score. As we can see, there is a real improvement over the 1.70 dummy baseline. In Figure 3 we can see that <C>number_of_reviews</C> and <C>availability_365</C> are dominating. After these two we have longitude, latitude, and price as the most effective features. Then the categorical features (ie. room type and specific neighbourhood) matter less compared to the numerical ones.
          </p>

          <Figure
            src="/airbnb-feature-importance.png"
            alt="Bar chart of top 10 features by LightGBM importance"
            caption="Figure 3. Top 10 features by LightGBM importance."
            width={989}
            height={390}
          />

          <p>
            The answer to the original question (whether you can size up a listing&rsquo;s popularity from what&rsquo;s knowable about it) is SOMEWHAT. Mostly by knowing how much it has been booked and reviewed, and then knowing about its price and exactly where in the city it is located.
          </p>

          <h2 className="!mt-12 !mb-2 font-sans text-xl font-semibold text-stone-900 dark:text-white">
            Caveats
          </h2>
          <p>
            Three things make me less confident in this result than the headline numbers suggest:
          </p>
          <ol className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-accent-600 dark:marker:text-accent-400">
            <li>
              The 20% of the data that I have dropped is not a random part of the data. Those were the listings with zero reviews, the least popular outcomes possible. The model has not seen that part of the listings at all, as the entire tail has been excluded from both test and training data. This means that the model has never scored on the worst performing listings, which affects how good it looks relative to the full population of listings Airbnb actually hosts.
            </li>
            <li>
              The most effective feature, <C>number_of_reviews</C>, is showing us how popular the listing was in the past. This is almost the same information as the target. In this way, a brand new listing would not have this feature, and therefore the model&rsquo;s strongest signal would suggest that this case is not as popular and would pass on it.
            </li>
            <li>
              The model comparison that caused me to pick LightGBM was incomplete: KNN never finished a cross-validation fold before I interrupted it, so I can&rsquo;t claim that LightGBM beats KNN here. To have a more accurate and more fair comparison, I have to run KNN with a more compact neighbourhood encoding, or considerably more compute time, before drawing conclusions about the algorithm family.
            </li>
          </ol>
        </motion.div>
      </article>
    </div>
  )
}
