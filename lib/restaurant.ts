/**
 * Central configuration for "NRfood" — a halal street-food delivery brand in
 * Kokshetau: wings, combo sets, pizza, doner & grill. Single source of truth.
 */

export const restaurant = {
  name: 'NRfood',
  city: 'Кокшетау',
  region: 'Акмолинская область',
  country: 'KZ',
  branches: 2,
  address: 'ул. Галыма Елемесова, 45 (вход со стороны офисов), Кокшетау',
  addressFull:
    'ул. Галыма Елемесова, 45 (вход со стороны офисов), Кокшетау, Акмолинская область, Казахстан',

  phone: '+7 708 680 82 54',
  phoneRaw: '77086808254',

  deliveryMinutes: 45,
  halal: true,

  hours: {
    open: '10:00',
    close: '00:45',
    label: 'Ежедневно 10:00–00:45',
  },

  rating: {
    value: 4.9,
    count: 1906,
  },

  // Kokshetau centre — placeholder coordinates for the map embed.
  geo: {
    lat: 53.2833,
    lng: 69.3833,
  },

  social: {
    instagram: 'https://www.instagram.com/nrfood_kokshetau',
    instagramHandle: 'nrfood_kokshetau',
    instagramFollowers: '17,9 тыс.',
  },
} as const;

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const text = message ?? 'Здравствуйте! Хочу сделать заказ.';
  return `https://wa.me/${restaurant.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_DEFAULT = whatsappLink();
