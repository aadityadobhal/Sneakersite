import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const navLinks = {
  Product: ['AERO X', 'Elite Edition', 'Limited Edition', 'Accessories', 'Customize'],
  Support: ['Size Guide', 'FAQs', 'Shipping', 'Returns', 'Contact'],
  Company: ['About Us', 'Careers', 'Press', 'Sustainability', 'Blog'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Accessibility'],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-red/50 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 pb-16 border-b border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the <span className="text-gradient">Revolution</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Subscribe for exclusive drops, early access, and member-only deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-red transition-colors"
            />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-3 btn-primary">
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(navLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-gradient">AERO X</span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-red/20 transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2025 AERO X. All rights reserved.</p>
              <p className="text-xs mt-1">Designed for the impossible.</p>
            </div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-neon-red to-neon-blue flex items-center justify-center shadow-lg hover:shadow-neon-red/30 transition-shadow z-50"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      </div>
    </footer>
  );
}
