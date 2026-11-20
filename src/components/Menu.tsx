import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '@/data/menu';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const current = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-28 bg-coffee-900 overflow-hidden">
      <div className="absolute inset-0 bg-coffee-grain opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent-400 font-semibold text-sm uppercase tracking-[0.2em]"
          >
            Carta
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-cream-50 mt-3"
          >
            Nuestro menú
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cream-200/60 mt-4 max-w-lg mx-auto"
          >
            Bebidas, panadería y postres preparados cada día con ingredientes frescos y nuestro café de especialidad.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuCategories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-coffee-950' : 'text-cream-200/70 hover:text-cream-50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menuTab"
                    className="absolute inset-0 rounded-full bg-accent-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <cat.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {current.items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-coffee-800/50 border border-coffee-700/50 hover:border-accent-500/40 hover:bg-coffee-800 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-cream-50">{item.name}</h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-cream-200/60 mt-1 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-1 text-cream-200/30">
                  <span className="w-8 h-px bg-cream-200/20 hidden sm:block" />
                </div>
                <div className="font-display text-xl font-bold text-accent-400 whitespace-nowrap">{item.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
