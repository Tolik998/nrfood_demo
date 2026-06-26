import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Map locale -> message file. The Kazakh file is named `kz.json` per brief,
// while the locale segment is `kk` (ISO 639-1).
const messageFiles: Record<string, string> = {
  ru: 'ru',
  kk: 'kz',
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'ru' | 'kk')) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${messageFiles[locale]}.json`)).default,
  };
});
