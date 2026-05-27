import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Grid3X3, LayoutGrid } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Side Profile', angle: '0°' },
  { id: 2, title: 'Top View', angle: '90°' },
  { id: 3, title: 'Detail Shot', angle: 'Close-up' },
  { id: 4, title: 'Sole Tech', angle: 'Bottom' },
  { id: 5, title: 'Action Shot', angle: 'Motion' },
  { id: 6, title: 'Studio Light', angle: 'Hero' },
];

export function ProductGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  return (
    <section id="gallery" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-neon-red/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-neon-blue mb-4 block">Visual Gallery</span>
            <h2 className="section-title">
              <span className="text-white">Every </span>
              <span className="text-gradient">Angle</span>
            </h2>
          </div>

          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-neon-red text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-3 rounded-lg transition-all ${
                viewMode === 'masonry' ? 'bg-neon-red text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-3'}`}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/5 hover:border-neon-red/30 transition-all duration-500 cursor-pointer ${
                viewMode === 'masonry' && index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ height: viewMode === 'masonry' && index === 0 ? '500px' : '250px' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-6xl font-black text-white/10"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {index + 1}
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${50 + (index % 2 === 0 ? 20 : -20)}% 50%, rgba(255, 10, 10, 0.2), transparent 60%)`,
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{image.title}</p>
                    <p className="text-gray-400 text-sm">{image.angle}</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.2 }} className="p-2 bg-white/10 rounded-full">
                    <Search className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1 bg-neon-red/20 backdrop-blur-sm rounded-full">
                  <span className="text-neon-red text-xs font-semibold">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white/5 rounded-full border border-white/10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 border-2 border-dashed border-neon-red rounded-full"
            />
            <span className="text-gray-300">Interactive 360° View Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
