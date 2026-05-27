import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gauge, Wind, Shield, Feather } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Adaptive Velocity',
    description: 'Revolutionary sole technology that adjusts grip and responsiveness based on your movement speed.',
    stat: '40% Faster',
    color: 'from-neon-red to-red-600',
  },
  {
    icon: Wind,
    title: 'AeroCore Cushion',
    description: 'Nitrogen-infused foam provides unprecedented energy return with every step you take.',
    stat: '85% Energy Return',
    color: 'from-neon-blue to-blue-600',
  },
  {
    icon: Shield,
    title: 'HyperShield Tech',
    description: 'Military-grade nano-coating repels water, dirt, and debris while maintaining breathability.',
    stat: '100% Protection',
    color: 'from-white to-gray-400',
  },
  {
    icon: Feather,
    title: 'CarbonLite Frame',
    description: 'Aerospace-derived carbon fiber chassis that delivers maximum support at minimum weight.',
    stat: '185 Grams',
    color: 'from-red-500 to-orange-500',
  },
];

export function ProductFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="text-sm uppercase tracking-[0.3em] text-neon-red mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Performance Innovation
          </motion.span>
          <h2 className="section-title mb-6">
            <span className="text-white">Built for </span>
            <span className="text-gradient">Speed</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Every element engineered to push the boundaries of athletic performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl p-8 card-hover h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>

                  <div className="flex items-center justify-between">
                    <span className={`text-3xl font-black bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </span>
                    <motion.div
                      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={`text-sm font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>→</span>
                    </motion.div>
                  </div>

                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${feature.color} opacity-10 rounded-tr-2xl rounded-bl-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
