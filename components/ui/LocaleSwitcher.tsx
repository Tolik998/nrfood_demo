'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

const locales = [
  { code: 'ru', label: 'RU' },
  { code: 'kk', label: 'KZ' },
] as const;

export default function LocaleSwitcher() {
  const active = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className="flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-bold"
      role="group"
      aria-label="Язык / Тіл"
    >
      {locales.map((l) => {
        const isActive = active === l.code;
        return (
          <button
            key={l.code}
            disabled={isPending}
            onClick={() =>
              startTransition(() => {
                router.replace(pathname, { locale: l.code });
              })
            }
            className={`rounded-full px-3 py-1 transition-colors ${
              isActive
                ? 'bg-yellow text-ink'
                : 'text-cream/60 hover:text-cream'
            }`}
            aria-pressed={isActive}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
