/** Format a tenge price with a thin non-breaking space as thousands separator. */
export function formatPrice(value: number): string {
  return value.toLocaleString('ru-RU').replace(/ /g, ' ');
}
