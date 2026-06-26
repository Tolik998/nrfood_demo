import { restaurant } from './restaurant';

/**
 * JSON-LD structured data (schema.org Restaurant / FoodEstablishment) for SEO.
 */
export function restaurantJsonLd(baseUrl = 'https://nrfood.kz') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description:
      'Доставка халяль стритфуда в Кокшетау: крылышки, комбо-сеты, пицца, донер и гриль. Доставим горячим за 45 минут.',
    url: baseUrl,
    telephone: restaurant.phone,
    servesCuisine: ['Fast Food', 'Halal', 'Pizza', 'Grill', 'Street Food'],
    priceRange: '₸₸',
    image: [
      'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1600&q=80',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Галыма Елемесова, 45',
      addressLocality: restaurant.city,
      addressRegion: restaurant.region,
      addressCountry: restaurant.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.geo.lat,
      longitude: restaurant.geo.lng,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: restaurant.hours.open,
      closes: restaurant.hours.close,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating.value,
      reviewCount: restaurant.rating.count,
      bestRating: 5,
    },
    sameAs: [restaurant.social.instagram],
    hasMenu: `${baseUrl}#menu`,
    potentialAction: {
      '@type': 'OrderAction',
      target: restaurant.social.instagram,
      deliveryMethod: 'https://schema.org/OnSitePickup',
    },
  };
}
