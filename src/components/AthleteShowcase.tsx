import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Trophy, Clock, Timer } from 'lucide-react';

const athletes = [
  {
    name: 'Marcus Speed',
    sport: 'Track & Field',
    quote: '"The AERO X helped me shatter my personal best by 0.3 seconds. It\'s like running on clouds that push back."',
    achievement: 'World Record Holder - 100m',
    stats: { speed: '10.2m/s', records: 12, medals: 24 },
  },
  {
    name: 'Zara Lightning',
    sport: 'Professional Basketball',
    quote: '"Explosive acceleration and lockdown support. I\'ve never felt more confident on court."',
    achievement: 'MVP - Championship 2026',
    stats: { points: '32.5', rebounds: 8.2, assists: 11.4 },
  },
  {
    name: 'Kai Storm',
    sport: 'Urban Running',
    quote: '"From pavement to trail, the adaptability is unreal. It feels like a different shoe for every surface."',
    achievement: 'Ultra Marathon Champion',
    stats: { distance: '250km', time: '18:42:15', climbs: 12 },
  },
];

export function AthleteShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeAthlete, setActiveAthlete] = useState(0);

  return (
    <section id="athletes" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-red/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-red mb-4 block">Elite Athletes</span>
          <h2 className="section-title mb-6">
            <span className="text-white">Proven by </span>
            <span className="text-gradient">Champions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            World-class athletes trust AERO X to deliver peak performance when it matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {athletes.map((athlete, index) => (
            <button
              key={index}
              onClick={() => setActiveAthlete(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeAthlete === index
                  ? 'bg-gradient-to-r from-neon-red to-neon-blue text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {athlete.name}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeAthlete}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            className="relative aspect-square rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-[200px] font-black text-white/5 select-none"
                >
                  {athletes[activeAthlete].name.charAt(0)}
                </motion.div>
              </div>

              <motion.div
                className="absolute top-4 right-4 px-4 py-2 rounded-full bg-neon-red/20 backdrop-blur-sm"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-neon-red text-sm font-semibold">{athletes[activeAthlete].achievement}</span>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-black text-white mb-2">{athletes[activeAthlete].name}</h3>
              <p className="text-neon-blue uppercase tracking-widest text-sm">{athletes[activeAthlete].sport}</p>
            </div>

            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed italic">
              {athletes[activeAthlete].quote}
            </blockquote>

            <div className="grid grid-cols-3 gap-4">
              {Object.entries(athletes[activeAthlete].stats).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-neon-red/30 transition-colors"
                >
                  <div className="text-2xl font-black text-gradient mb-1">{value}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 capitalize">{key}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: Trophy, label: 'Champion' },
                { icon: Clock, label: 'Record Breaker' },
                { icon: Timer, label: 'Speed Elite' },
              ].map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <Icon className="w-4 h-4 text-neon-red" />
                    <span className="text-sm text-gray-300">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
