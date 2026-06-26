import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { restaurantJsonLd } from '@/lib/schema';
import '../globals.css';

// Self-hosted fonts via @fontsource — bundled from node_modules, no Google CDN.
import '@fontsource/anton/400.css';
import '@fontsource/oswald/500.css';
import '@fontsource/oswald/600.css';
import '@fontsource/oswald/700.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://nrfood.kz'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'kk_KZ',
    },
    icons: {
      icon: '/favicon.svg',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as 'ru' | 'kk')) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
      </head>
      <body className="bg-ink text-cream antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
