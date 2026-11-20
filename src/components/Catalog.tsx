import { motion } from 'framer-motion';
import { ShoppingBag, Plus } from 'lucide-react';
import { catalogProducts } from '@/data/menu';

export default function Catalog() {
  return (
    <section id="catalog" className="relative py-28 bg-cream-100 overflow-hidden">
      <div className="absolute inset-0 bg-coffee-grain opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent-600 font-semibold text-sm uppercase tracking-[0.2em]"
            >
              Tienda
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mt-3"
            >
              Catálogo de café
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-coffee-600 max-w-sm"
          >
            Granos recién tostados de nuestras fincas en Boquete y Tierras Altas. Envío en 24h.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogProducts.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white shadow-lg shadow-coffee-900/5 overflow-hidden border border-coffee-100"
            >
              {/* Image area (gradient + emoji) */}
              <div className={`relative h-52 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute rounded-full bg-white/20"
                      style={{ width: `${20 + j * 6}px`, height: `${20 + j * 6}px`, left: `${10 + j * 12}%`, top: `${15 + (j % 3) * 25}%` }}
                      animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4 + j, repeat: Infinity, delay: j * 0.3 }}
                    />
                  ))}
                </div>
                <motion.span
                  className="relative text-7xl"
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  {p.emoji}
                </motion.span>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-coffee-800 text-xs font-semibold">
                  {p.roast}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-coffee-900">{p.name}</h3>
                <p className="text-xs text-accent-600 font-medium mt-0.5 uppercase tracking-wider">{p.origin}</p>
                <p className="text-sm text-coffee-600 mt-2">{p.notes}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="font-display text-2xl font-bold text-coffee-800">{p.price}</div>
                  <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-coffee-800 text-cream-50 text-sm font-medium hover:bg-coffee-700 transition-colors group-hover:bg-accent-500 group-hover:text-coffee-950">
                    <Plus className="w-4 h-4" />
                    Añadir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-coffee-800 text-cream-50 font-semibold hover:bg-coffee-700 transition-colors shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            Ver toda la tienda
          </a>
        </motion.div>
      </div>
    </section>
  );
}
