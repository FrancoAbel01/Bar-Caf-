import { motion } from 'framer-motion';
import { Coffee, Star, ArrowDown } from 'lucide-react';

function SteamCup() {
  return (
    <div className="relative flex items-end justify-center">
      {/* Steam */}
      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex gap-4 z-10 pointer-events-none">
        <span className="block w-1.5 h-16 bg-gradient-to-t from-white/0 via-white/40 to-white/0 rounded-full animate-steam" />
        <span className="block w-1.5 h-20 bg-gradient-to-t from-white/0 via-white/40 to-white/0 rounded-full animate-steam-delay" />
        <span className="block w-1.5 h-16 bg-gradient-to-t from-white/0 via-white/40 to-white/0 rounded-full animate-steam-delay-2" />
      </div>

      {/* Cup */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="relative"
      >
        <div className="w-56 h-48 rounded-b-[3rem] rounded-t-2xl bg-gradient-to-b from-cream-100 to-cream-300 shadow-2xl shadow-coffee-900/40 relative overflow-hidden">
          {/* coffee surface */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-coffee-600 to-coffee-700 rounded-t-2xl">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent_60%)]" />
          </div>
          {/* cup shine */}
          <div className="absolute top-4 left-6 w-3 h-32 bg-white/30 rounded-full blur-sm" />
        </div>
        {/* handle */}
        <div className="absolute -right-8 top-12 w-10 h-20 border-4 border-cream-300 rounded-r-full" />
        {/* saucer */}
        <div className="absolute -bottom-3 -left-4 right-[-4rem] h-3 rounded-full bg-coffee-800/20 blur-md" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-coffee-900 via-coffee-800 to-coffee-950 pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-coffee-grain opacity-60" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-coffee-500/15 rounded-full blur-3xl animate-float-slow" />

      {/* Floating beans */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-coffee-600/30"
          style={{ left: `${8 + i * 16}%`, top: `${15 + (i % 3) * 28}%` }}
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Coffee className="w-6 h-6" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full py-20">
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50/10 border border-cream-200/20 text-cream-200 text-sm mb-6"
          >
            <Star className="w-4 h-4 fill-accent-400 text-accent-400" />
            Tostado en Boquete · Desde 2015
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-50 leading-[1.05]"
          >
            Cada taza,<br />
            <span className="text-shimmer">una experiencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-cream-200/80 max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Café de especialidad cultivado en las tierras altas de Panamá. Tostado artesanal, recién molido y preparado con pasión en cada taza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-500 text-coffee-950 font-semibold hover:bg-accent-400 transition-all hover:scale-105 shadow-lg shadow-accent-500/30"
            >
              <Coffee className="w-5 h-5" />
              Ver el menú
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-cream-200/30 text-cream-50 font-semibold hover:bg-cream-50/10 transition-colors"
            >
              Comprar café
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {[
              { num: '10+', label: 'Orígenes' },
              { num: '8k+', label: 'Tazas servidas' },
              { num: '4.9', label: 'Calificación' },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-accent-400">{s.num}</div>
                <div className="text-xs text-cream-200/60 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent-500/20 blur-3xl rounded-full scale-110" />
            <div className="relative">
              <SteamCup />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-200/60"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
