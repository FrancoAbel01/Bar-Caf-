import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const info = [
  { icon: MapPin, title: 'Dirección', text: 'Av. Balboa 1234, Ciudad de Panamá' },
  { icon: Phone, title: 'Teléfono', text: '+507 200-1234' },
  { icon: Mail, title: 'Email', text: 'hola@barucafe.com' },
  { icon: Clock, title: 'Horario', text: 'Lun–Vie 7am–8pm · Sáb–Dom 8am–10pm' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28 bg-cream-50 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent-600 font-semibold text-sm uppercase tracking-[0.2em]"
          >
            Visítanos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mt-3"
          >
            Ponte en contacto
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {info.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-md shadow-coffee-900/5 border border-coffee-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-coffee-100 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-coffee-700" />
                </div>
                <h3 className="font-semibold text-coffee-900">{item.title}</h3>
                <p className="text-sm text-coffee-600 mt-1">{item.text}</p>
              </motion.div>
            ))}

            {/* Map-like visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 h-48 rounded-2xl bg-gradient-to-br from-coffee-200 to-coffee-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(0deg,transparent_24%,rgba(139,94,59,0.4)_25%,rgba(139,94,59,0.4)_26%,transparent_27%,transparent_74%,rgba(139,94,59,0.4)_75%,rgba(139,94,59,0.4)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(139,94,59,0.4)_25%,rgba(139,94,59,0.4)_26%,transparent_27%,transparent_74%,rgba(139,94,59,0.4)_75%,rgba(139,94,59,0.4)_76%,transparent_77%,transparent)] bg-[size:60px_60px]" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <MapPin className="w-10 h-10 text-coffee-900 fill-accent-500 drop-shadow-lg" />
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500/40 animate-ping" />
                </div>
              </motion.div>
              <div className="absolute bottom-3 left-4 text-coffee-900 font-semibold text-sm bg-cream-50/80 px-3 py-1 rounded-full">
                Barú Café — Ciudad de Panamá
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-coffee-900 text-cream-50 shadow-xl"
          >
            <h3 className="font-display text-2xl font-bold mb-1">Reserva una mesa</h3>
            <p className="text-cream-200/60 text-sm mb-6">Cuéntanos cuándo nos visitas y te prepararemos todo.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream-200/60 mb-1.5">Nombre</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-coffee-800/60 border border-coffee-700/50 text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream-200/60 mb-1.5">Teléfono</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-coffee-800/60 border border-coffee-700/50 text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-accent-500 transition-colors"
                    placeholder="+507 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/60 mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-coffee-800/60 border border-coffee-700/50 text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-accent-500 transition-colors"
                  placeholder="tucorreo@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-cream-200/60 mb-1.5">Mensaje</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-coffee-800/60 border border-coffee-700/50 text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-accent-500 transition-colors resize-none"
                  placeholder="Fecha, número de personas, comentarios..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 text-coffee-950 font-semibold hover:bg-accent-400 transition-colors"
              >
                {sent ? (
                  <>
                    <Check className="w-5 h-5" /> ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Enviar reserva
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
