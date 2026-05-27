import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What makes AERO X different from other performance sneakers?',
    answer: 'AERO X features our proprietary AeroCore™ cushioning technology that provides unmatched energy return, combined with a CarbonLite frame for stability. The adaptive sole technology adjusts grip based on movement speed, something no other athletic shoe offers.',
  },
  {
    question: 'How does the sizing fit?',
    answer: 'AERO X fits true to size. We recommend ordering your standard athletic shoe size. For those with wider feet, going half a size up may provide additional comfort. Our 30-day return policy ensures you can try them risk-free.',
  },
  {
    question: 'What\'s included in the warranty?',
    answer: 'Standard models come with a 3-year warranty covering manufacturing defects and component failures. Elite models include a 5-year warranty, and Limited Edition models feature a lifetime warranty. All warranties cover sole separation, material defects, and structural integrity issues.',
  },
  {
    question: 'Can I use AERO X for multiple sports?',
    answer: 'Absolutely! AERO X is designed as a multi-sport performance shoe. The adaptive technology makes it suitable for running, basketball, training, and various other athletic activities. The versatility is one of our key innovations.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days within the US. Priority shipping (included with Elite and Limited editions) takes 2-3 business days. International shipping typically takes 10-14 business days depending on destination.',
  },
  {
    question: 'Are the materials sustainable?',
    answer: 'Yes! We use 40% recycled materials in the upper construction and our manufacturing process is carbon-neutral. The HyperShield coating is water-based, and all packaging is made from 100% recycled and recyclable materials.',
  },
  {
    question: 'Can I customize my AERO X?',
    answer: 'Custom colorways are available exclusively with the Limited Edition. This includes choosing primary and secondary colors, custom stitching colors, and personalized text on the heel. Custom orders take an additional 5-7 days to manufacture.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-red/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-neon-red" />
            <span className="text-sm uppercase tracking-[0.3em] text-neon-red">Common Questions</span>
          </div>
          <h2 className="section-title mb-6">
            <span className="text-white">Frequently </span>
            <span className="text-gradient">Asked</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left glass-effect rounded-xl p-6 transition-all duration-300 ${
                  openIndex === index ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white pr-8">{faq.question}</span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-red/20 flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-neon-red" />
                    ) : (
                      <Plus className="w-4 h-4 text-neon-red" />
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 leading-relaxed pt-4 mt-4 border-t border-white/10">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
            Contact Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
