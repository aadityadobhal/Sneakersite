import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, ShoppingCart, Shield } from 'lucide-react';

const pricingOptions = [
  {
    id: 'standard',
    name: 'AERO X',
    price: 299,
    originalPrice: null,
    features: [
      { text: 'AeroCore™ Cushioning', included: true },
      { text: 'CarbonLite Frame', included: true },
      { text: 'HyperShield Protection', included: true },
      { text: '3-Year Warranty', included: true },
      { text: 'VIP Access to Drops', included: false },
      { text: 'Custom Colorways', included: false },
      { text: 'Priority Shipping', included: false },
    ],
  },
  {
    id: 'elite',
    name: 'AERO X Elite',
    price: 399,
    originalPrice: 449,
    badge: 'Most Popular',
    features: [
      { text: 'AeroCore™ Pro Cushioning', included: true },
      { text: 'CarbonLite Pro Frame', included: true },
      { text: 'HyperShield Max Protection', included: true },
      { text: '5-Year Warranty', included: true },
      { text: 'VIP Access to Drops', included: true },
      { text: 'Custom Colorways', included: false },
      { text: 'Priority Shipping', included: true },
    ],
  },
  {
    id: 'limited',
    name: 'AERO X Limited',
    price: 599,
    originalPrice: null,
    badge: 'Limited Edition',
    features: [
      { text: 'AeroCore™ Ultra Cushioning', included: true },
      { text: 'CarbonLite Gold Frame', included: true },
      { text: 'HyperShield Elite Protection', included: true },
      { text: 'Lifetime Warranty', included: true },
      { text: 'VIP Access to Drops', included: true },
      { text: 'Custom Colorways', included: true },
      { text: 'Priority Shipping', included: true },
    ],
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'];

  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-4 block">Pricing & Options</span>
          <h2 className="section-title mb-6">
            <span className="text-white">Choose Your </span>
            <span className="text-gradient">Edition</span>
          </h2>
          <p className="section-subtitle mx-auto">Three tiers designed for different levels of athletic dedication.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative group ${option.badge ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <div
                className={`relative h-full rounded-2xl p-6 transition-all duration-300 ${
                  option.badge
                    ? 'bg-gradient-to-br from-neon-red/10 via-black to-neon-blue/10 border-2 border-neon-red/30'
                    : 'glass-effect'
                }`}
              >
                {option.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-red to-neon-blue rounded-full text-xs font-bold uppercase tracking-wider">
                    {option.badge}
                  </div>
                )}

                <div className="text-center mb-6 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-black text-white">${option.price}</span>
                    {option.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${option.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included ? <Check className="w-5 h-5 text-neon-red" /> : <X className="w-5 h-5 text-gray-600" />}
                      <span className={feature.included ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                    option.badge
                      ? 'bg-gradient-to-r from-neon-red to-neon-blue text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-effect rounded-2xl p-6">
            <p className="text-center text-gray-400 mb-4 uppercase tracking-wider text-sm">Select Size</p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-neon-red text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-neon-blue" />
                Secure Checkout
              </div>
              <div className="text-gray-400 text-sm">Free Returns - 30 Days</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 py-4 btn-primary text-center"
            >
              <span className="flex items-center justify-center gap-2">Buy Now - Starting at $299</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
