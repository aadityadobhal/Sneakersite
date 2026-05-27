import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Marathon Runner',
    rating: 5,
    review: 'After 300km in these shoes, I can confidently say they\'re game-changing. The energy return is noticeable on long runs, and my recovery time has improved significantly.',
    verified: true,
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Jessica Chen',
    role: 'Basketball Pro',
    rating: 5,
    review: 'The court feel is incredible. Quick cuts, explosive jumps - these shoes deliver. The support system kept me stable throughout the entire season without any issues.',
    verified: true,
    date: 'February 2025',
  },
  {
    id: 3,
    name: 'David Miller',
    role: 'Fitness Enthusiast',
    rating: 5,
    review: 'Best athletic shoes I\'ve ever owned. From HIIT sessions to casual runs, they handle everything. The futuristic design definitely turns heads at the gym too.',
    verified: true,
    date: 'February 2025',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'CrossFit Coach',
    rating: 5,
    review: 'My entire team switched to AERO X. The versatility is unmatched - Olympic lifts, box jumps, and rope climbs, all in one shoe. Worth every penny.',
    verified: true,
    date: 'January 2025',
  },
];

const overallStats = {
  rating: 4.9,
  totalReviews: 2847,
  breakdown: [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 6 },
    { stars: 3, percentage: 1 },
    { stars: 2, percentage: 0.5 },
    { stars: 1, percentage: 0.5 },
  ],
};

export function CustomerReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <section id="reviews" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-red mb-4 block">Customer Reviews</span>
          <h2 className="section-title mb-6">
            <span className="text-white">What Athletes </span>
            <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glass-effect rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-7xl font-black text-gradient mb-2">{overallStats.rating}</div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-neon-red text-neon-red" />
                ))}
              </div>
              <p className="text-gray-400">Based on {overallStats.totalReviews.toLocaleString()} reviews</p>
            </div>

            <div className="space-y-2">
              {overallStats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-400 w-8">{item.stars}★</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-neon-red to-neon-blue"
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage).map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-6 h-full card-hover">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-red/20" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-red to-neon-blue flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-neon-red text-neon-red" />
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4">"{review.review}"</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs text-gray-500">{review.date}</span>
                    {review.verified && <span className="text-xs text-neon-blue">✓ Verified Purchase</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded-full bg-white/5 disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-gray-400">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-full bg-white/5 disabled:opacity-30 hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
