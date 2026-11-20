import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const sections = [
  { title: 'Explorar', links: ['Inicio', 'Nosotros', 'Menú', 'Catálogo', 'Contacto'] },
  { title: 'Legal', links: ['Términos', 'Privacidad', 'Cookies'] },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-cream-200/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coffee-600 to-coffee-800 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-cream-100" />
              </div>
              <span className="font-display text-2xl font-bold text-cream-50">Barú Café</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Café de especialidad cultivado en las tierras altas de Panamá. Tostado artesanal y servido con pasión desde 2015.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center hover:bg-accent-500 hover:text-coffee-950 transition-colors"
                  aria-label="Red social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-lg font-semibold text-cream-50 mb-3">{s.title}</h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-accent-400 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-coffee-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
          <p>© 2026 Barú Café. Todos los derechos reservados.</p>
          <p>Hecho con café en Panamá.</p>
        </div>
      </div>
    </footer>
  );
}
