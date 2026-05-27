import { motion } from 'framer-motion';
import { ChevronDown, Zap, ArrowRight } from 'lucide-react';
import { SneakerModel } from './SneakerModel';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{
              y: [-50, -200],
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              scale: [1, 1.5],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-neon-red" />
          <span className="text-sm md:text-base uppercase tracking-[0.4em] text-gray-400">
            Introducing the Future
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-neon-blue" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-none mb-4"
        >
          <span className="text-gradient">AERO</span>
          <br />
          <span className="text-white neon-text">X</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl font-light text-gray-300 mb-8 tracking-tight"
        >
          Engineered for the <span className="text-neon-red font-semibold">Impossible</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="my-12"
        >
          <SneakerModel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm md:text-base"
          >
            <span className="flex items-center gap-2">
              Shop Now <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-sm md:text-base"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" /> Explore Technology
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '30%', label: 'Lighter' },
            { value: '50%', label: 'More Cushion' },
            { value: '2x', label: 'Durability' },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.1 }}>
              <div className="text-2xl md:text-4xl font-black text-gradient">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-40 left-10 w-24 h-24 border border-neon-red/20 rounded-full"
      />
    </section>
  );
}
