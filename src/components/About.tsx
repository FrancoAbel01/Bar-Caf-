import { motion } from 'framer-motion';
import { Leaf, HandHeart, Globe2, Award } from 'lucide-react';

const values = [
  { icon: Leaf, title: 'Cultivo Sostenible', text: 'Prácticas orgánicas que respetan el suelo y la biodiversidad del bosque nuboso.' },
  { icon: HandHeart, title: 'Tueste Artesanal', text: 'Cada lote se tuesta a mano en pequeños perfiles para realzar su carácter único.' },
  { icon: Globe2, title: 'Comercio Justo', text: 'Trabajo directo con productores locales, pagando precios justos por su cosecha.' },
  { icon: Award, title: 'Café de Especialidad', text: 'Granos clasificados por encima de 86 puntos en la escala SCA.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-cream-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-coffee-grain opacity-50" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-900 overflow-hidden shadow-2xl shadow-coffee-900/30">
              {/* Decorative circles resembling coffee farm */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-cream-200/20"
                    style={{ width: `${30 + i * 15}%`, height: `${30 + i * 15}%`, left: `${50 - (30 + i * 15) / 2}%`, top: `${50 - (30 + i * 15) / 2}%` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
                  />
                ))}
              </div>
              {/* Center medallion */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-40 h-40 rounded-full bg-cream-50/10 backdrop-blur-md border border-cream-200/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-accent-400">10</div>
                    <div className="text-cream-200/70 text-xs uppercase tracking-widest mt-1">Años de<br />pasión</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] border border-coffee-100"
            >
              <div className="text-3xl font-display font-bold text-coffee-800">100%</div>
              <div className="text-sm text-coffee-600 mt-1">Café panameño de altura, cultivado sobre 1,200 msnm.</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent-600 font-semibold text-sm uppercase tracking-[0.2em]"
            >
              Nuestra historia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mt-3 leading-tight"
            >
              Del bosque nuboso<br />a tu taza
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-coffee-700 leading-relaxed text-lg"
            >
              Barú Café nació en las faldas del volcán Barú, donde el microclima único produce
              algunos de los mejores cafés del mundo. Trabajamos mano a mano con familias
              cafetaleras para llevar grano de especialidad directamente a tu mesa.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center group-hover:bg-accent-500 transition-colors">
                    <v.icon className="w-6 h-6 text-coffee-700 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-900">{v.title}</h3>
                    <p className="text-sm text-coffee-600 mt-1 leading-relaxed">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
