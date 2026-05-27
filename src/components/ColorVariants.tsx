import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SneakerModel } from './SneakerModel';
import { Palette } from 'lucide-react';

const variants = [
  { id: 'default', name: 'Inferno Red', primary: '#ff0a0a', secondary: '#ff4444' },
  { id: 'blue', name: 'Electric Blue', primary: '#0088ff', secondary: '#00d4ff' },
  { id: 'black', name: 'Stealth Black', primary: '#1a1a1a', secondary: '#333333' },
  { id: 'white', name: 'Arctic White', primary: '#ffffff', secondary: '#cccccc' },
  { id: 'red', name: 'Plasma Red', primary: '#ff0000', secondary: '#00d4ff' },
];

export function ColorVariants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedVariant, setSelectedVariant] = useState('default');

  return (
    <section id="colors" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Palette className="w-5 h-5 text-neon-red" />
            <span className="text-sm uppercase tracking-[0.3em] text-neon-red">Colorways</span>
          </div>
          <h2 className="section-title mb-6">
            <span className="text-white">Choose Your </span>
            <span className="text-gradient">Style</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Five stunning colorways engineered to match your unique style and personality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <SneakerModel variant={selectedVariant} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {variants.map((variant) => (
              <motion.button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-16 h-16 rounded-full transition-all duration-300 ${
                  selectedVariant === variant.id ? 'ring-2 ring-white ring-offset-4 ring-offset-black scale-110' : ''
                }`}
                style={{ background: `linear-gradient(135deg, ${variant.primary}, ${variant.secondary})` }}
              >
                {selectedVariant === variant.id && (
                  <motion.div
                    layoutId="selectedIndicator"
                    className="absolute inset-0 rounded-full ring-2 ring-white"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedVariant}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-2xl font-bold text-white">{variants.find((v) => v.id === selectedVariant)?.name}</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16"
        >
          {variants.map((variant, index) => (
            <motion.button
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              onClick={() => setSelectedVariant(variant.id)}
              className={`group relative p-4 rounded-xl border transition-all duration-300 ${
                selectedVariant === variant.id ? 'border-white bg-white/10' : 'border-white/10 bg-white/5 hover:border-white/30'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full mx-auto mb-3"
                style={{ background: `linear-gradient(135deg, ${variant.primary}, ${variant.secondary})` }}
              />
              <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{variant.name}</p>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">All colorways available now. Limited edition releases monthly.</p>
        </motion.div>
      </div>
    </section>
  );
}
