'use client';

import { useTranslations } from 'next-intl';
import { AtSign, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import Logo from './ui/Logo';
import LocaleSwitcher from './ui/LocaleSwitcher';
import { restaurant, whatsappLink } from '@/lib/restaurant';

const NAV = ['about', 'menu', 'combos', 'signature', 'gallery', 'contact'] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-800">
      <div className="container-x relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            {t('about')}
          </p>
          <a
            href={restaurant.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 transition-colors hover:border-yellow/50"
          >
            <AtSign className="h-5 w-5 text-yellow" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-cream">
                {restaurant.social.instagramHandle}
              </span>
              <span className="text-[11px] text-cream/45">{t('followers')}</span>
            </span>
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/40">
            {t('nav')}
          </h3>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-sm font-medium text-cream/60 transition-colors hover:text-yellow"
                >
                  {tn(item)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/40">
            {t('contactTitle')}
          </h3>
          <ul className="space-y-3 text-sm text-cream/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
              <span>
                {restaurant.address}
                <span className="mt-0.5 block text-xs font-semibold text-yellow">
                  {t('branches')}
                </span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-yellow" />
              <a href={`tel:+${restaurant.phoneRaw}`} className="hover:text-yellow">
                {restaurant.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-yellow" />
              {restaurant.hours.label}
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <MessageCircle className="h-4 w-4" />
            {t('follow')}
          </a>
          <LocaleSwitcher />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {restaurant.name}. {t('rights')}
          </p>
          <p className="text-xs text-cream/30">{t('tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
