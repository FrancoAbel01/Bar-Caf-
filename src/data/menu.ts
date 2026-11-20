import { Coffee, Croissant, Cake, Cookie, CupSoda, IceCream2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'espresso',
    label: 'Espresso',
    icon: Coffee,
    items: [
      { name: 'Espresso', description: 'Shot puro de granos Barú, cuerpo intenso.', price: '$2.50', tag: 'Clásico' },
      { name: 'Americano', description: 'Espresso alargado con agua caliente.', price: '$3.00' },
      { name: 'Cappuccino', description: 'Espresso, leche vaporizada y espuma sedosa.', price: '$3.80', tag: 'Favorito' },
      { name: 'Latte', description: 'Espresso suave con leche cremosa y arte latte.', price: '$4.20' },
      { name: 'Flat White', description: 'Doble ristretto con microespuma aterciopelada.', price: '$4.50' },
      { name: 'Mocha', description: 'Espresso, chocolate belga y leche vaporizada.', price: '$4.80', tag: 'Dulce' },
    ],
  },
  {
    id: 'cold',
    label: 'Fríos',
    icon: CupSoda,
    items: [
      { name: 'Cold Brew', description: '18 horas de extracción en frío, suave y refrescante.', price: '$4.50', tag: 'Casa' },
      { name: 'Iced Latte', description: 'Espresso, leche fría y hielo sobre arte latte.', price: '$4.80' },
      { name: 'Affogato', description: 'Gelato de vainilla ahogado en espresso caliente.', price: '$5.50' },
      { name: 'Frappé Barú', description: 'Café helado batido con crema y cacao.', price: '$5.80', tag: 'Especial' },
    ],
  },
  {
    id: 'pastries',
    label: 'Panadería',
    icon: Croissant,
    items: [
      { name: 'Croissant de Mantequilla', description: 'Hojaldre francés, 36 capas, mantequilla normanda.', price: '$3.20', tag: 'Recién hecho' },
      { name: 'Pain au Chocolat', description: 'Croissant relleno de chocolate negro 70%.', price: '$3.60' },
      { name: 'Almond Croissant', description: 'Croissant relleno de crema de almendras.', price: '$4.00', tag: 'Premium' },
      { name: 'Cinnamon Roll', description: 'Enrollado de canela con glaseado de queso.', price: '$3.80' },
    ],
  },
  {
    id: 'desserts',
    label: 'Postres',
    icon: Cake,
    items: [
      { name: 'Tiramisú', description: 'Bizcocho espresso, mascarpone y cacao. Receta italiana.', price: '$6.00', tag: 'Firma' },
      { name: 'Cheesecake de Café', description: 'Cheesecake cremoso con coulis de café Barú.', price: '$5.80' },
      { name: 'Tarta de Chocolate', description: 'Ganache de chocolate 70% sobre base crujiente.', price: '$5.50' },
    ],
  },
  {
    id: 'snacks',
    label: 'Bocadillos',
    icon: Cookie,
    items: [
      { name: 'Cookie de Chocochips', description: 'Galleta gigante con chips de chocolate belga.', price: '$2.80' },
      { name: 'Brownie Barú', description: 'Brownie denso con nueces y núcleo de chocolate.', price: '$3.50', tag: 'Sin gluten' },
    ],
  },
  {
    id: 'specials',
    label: 'Especiales',
    icon: IceCream2,
    items: [
      { name: 'Barú Signature', description: 'Doble espresso, miel de agave, canela y espuma de vainilla.', price: '$6.50', tag: 'Único' },
      { name: 'Lavender Latte', description: 'Latte con infusión de lavanda orgánica.', price: '$5.80' },
      { name: 'Cardamom Brew', description: 'Cold brew especiado con cardamomo y naranja.', price: '$5.50', tag: 'Otoño' },
    ],
  },
];

export type CatalogProduct = {
  name: string;
  origin: string;
  notes: string;
  roast: string;
  price: string;
  gradient: string;
  emoji: string;
};

export const catalogProducts: CatalogProduct[] = [
  { name: 'Barú Reserva', origin: 'Boquete, Panamá', notes: 'Chocolate · Caramelo · Naranja', roast: 'Media', price: '$18.00', gradient: 'from-coffee-500 to-coffee-700', emoji: '☕' },
  { name: 'Geisha Premium', origin: 'Cerro Punta, Panamá', notes: 'Jazmín · Melocotón · Miel', roast: 'Clara', price: '$32.00', gradient: 'from-accent-500 to-coffee-600', emoji: '🌸' },
  { name: 'Caturra Natural', origin: 'Volcán, Panamá', notes: 'Frutos rojos · Vainilla · Cacao', roast: 'Media-oscura', price: '$22.00', gradient: 'from-coffee-600 to-coffee-800', emoji: '🫐' },
  { name: 'Catuai Honey', origin: 'Renacimiento, Panamá', notes: 'Almendra · Miel · Cítricos', roast: 'Media', price: '$20.00', gradient: 'from-cream-500 to-accent-600', emoji: '🍯' },
  { name: 'Pacamara Natural', origin: 'Tierras Altas, Panamá', notes: 'Frutos secos · Chocolate amargo', roast: 'Oscura', price: '$24.00', gradient: 'from-coffee-700 to-coffee-900', emoji: '🍫' },
  { name: 'Typica Legacy', origin: 'Boquete, Panamá', notes: 'Café clásico · Floral · Limón', roast: 'Clara', price: '$26.00', gradient: 'from-accent-400 to-coffee-500', emoji: '🍋' },
];
