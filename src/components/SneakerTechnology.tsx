import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Cpu, Layers, Activity, Thermometer } from 'lucide-react';

const techSpecs = [
  { icon: Cpu, label: 'Smart Sensors', value: 24, unit: 'Embedded', description: 'Real-time biomechanical analysis' },
  { icon: Layers, label: 'Composite Layers', value: 7, unit: 'Layers', description: 'Advanced material fusion' },
  { icon: Activity, label: 'Impact Absorption', value: 92, unit: '%', description: 'Shock dissipation rate' },
  { icon: Thermometer, label: 'Thermal Regulation', value: 15, unit: '°C', description: 'Climate control range' },
];

const animatedStats = [
  { label: 'Top Speed', value: 45, unit: 'km/h', color: 'neon-red' },
  { label: 'Air Time', value: 0.8, unit: 'sec', color: 'neon-blue' },
  { label: 'Propulsion', value: 120, unit: '%', color: 'white' },
];

export function SneakerTechnology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % animatedStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technology" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-neon-red/30 to-transparent"
            style={{ top: `${i * 10 + 5}%`, left: '-10%', right: '-10%' }}
            animate={{ x: ['-10%', '110%'], opacity: [0, 0.3, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-4 block">Advanced Engineering</span>
          <h2 className="section-title mb-6">
            <span className="text-white">Future </span>
            <span className="text-gradient">Technology</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Where science meets performance. Every component designed for optimal athletic output.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20 py-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/50 to-black rounded-3xl p-12 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-red/5 via-transparent to-neon-blue/5" />

            <div className="relative text-center">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">
                  {animatedStats[currentStat].label}
                </p>
                <div className="text-7xl md:text-9xl font-black text-white mb-2">
                  {animatedStats[currentStat].value}
                  <span className="text-3xl md:text-4xl text-gray-500 ml-2">
                    {animatedStats[currentStat].unit}
                  </span>
                </div>
              </motion.div>

              <div className="flex justify-center gap-3 mt-8">
                {animatedStats.map((stat, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStat ? 'bg-neon-red scale-125' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {techSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/30 to-black rounded-2xl p-6 border border-white/5 hover:border-neon-red/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-neon-red mb-4 group-hover:scale-110 transition-transform" />

                <motion.p
                  className="text-4xl font-black text-white mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {spec.value}
                  <span className="text-lg text-gray-500 ml-1">{spec.unit}</span>
                </motion.p>

                <h4 className="text-lg font-semibold text-white mb-2">{spec.label}</h4>
                <p className="text-sm text-gray-500">{spec.description}</p>

                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-neon-red' : 'from-neon-blue'}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 relative"
        >
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/20 to-black rounded-3xl p-8 border border-white/5">
            <div className="flex flex-wrap justify-center gap-4">
              {['AeroSole™', 'CarbonPlate™', 'FlexMesh™', 'ReactFoam™', 'SmartLink™'].map((tech, i) => (
                <motion.div
                  key={i}
                  className="px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-gray-300 hover:border-neon-red hover:text-white transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
