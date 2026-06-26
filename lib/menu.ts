/**
 * DEMO menu structure for NRfood.
 *
 * Built from the real item names visible in the client's Instagram content;
 * prices here are indicative demo values. Item display names live in
 * messages/*.json under `menu.items.<id>`.
 *
 * NOTE (shown in UI): "Демо-меню для презентации. Итоговый ассортимент и цены
 * согласовываются с заведением."
 */

export interface MenuItem {
  id: string;
  price: number;
  /** highlighted hit / bestseller */
  star?: boolean;
}

export interface MenuCategory {
  id: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'wings',
    items: [
      { id: 'wings300', price: 1500 },
      { id: 'wings1000', price: 4500 },
      { id: 'wings1500', price: 6500, star: true },
    ],
  },
  {
    id: 'combos',
    items: [
      { id: 'comboHit', price: 3200, star: true },
      { id: 'comboBasket', price: 4500, star: true },
      { id: 'comboFamily', price: 8900, star: true },
      { id: 'comboKids', price: 1900 },
    ],
  },
  {
    id: 'pizza',
    items: [
      { id: 'margarita', price: 2800 },
      { id: 'pepperoni', price: 3200 },
      { id: 'fourCheese', price: 3500 },
      { id: 'meat', price: 3600 },
    ],
  },
  {
    id: 'doner',
    items: [
      { id: 'donerClassic', price: 1200 },
      { id: 'donerChicken', price: 1300 },
      { id: 'donerBig', price: 1600 },
      { id: 'shawarma', price: 1100 },
    ],
  },
  {
    id: 'snacks',
    items: [
      { id: 'fries', price: 900 },
      { id: 'nuggets', price: 1400 },
      { id: 'onionRings', price: 1000 },
      { id: 'cheeseSticks', price: 1200 },
    ],
  },
  {
    id: 'sauces',
    items: [
      { id: 'ketchup', price: 300 },
      { id: 'bbq', price: 300 },
      { id: 'garlic', price: 300 },
      { id: 'spicy', price: 300 },
      { id: 'cheese', price: 300 },
    ],
  },
  {
    id: 'drinks',
    items: [
      { id: 'water', price: 350 },
      { id: 'soda', price: 600 },
      { id: 'juice', price: 700 },
    ],
  },
];

/** The four signature combo sets, surfaced in the ComboSets showcase. */
export interface ComboSet {
  id: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const combos: ComboSet[] = [
  {
    id: 'comboHit',
    price: 3200,
    image:
      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=1000&q=80',
    featured: true,
  },
  {
    id: 'comboBasket',
    price: 4500,
    image:
      'https://images.unsplash.com/photo-1562967914-608f82629710?w=1000&q=80',
  },
  {
    id: 'comboFamily',
    price: 8900,
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&q=80',
    featured: true,
  },
  {
    id: 'comboKids',
    price: 1900,
    image:
      'https://images.unsplash.com/photo-1619881590738-a111d176d906?w=1000&q=80',
  },
];
