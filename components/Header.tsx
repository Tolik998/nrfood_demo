'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu as MenuIcon, X, BadgeCheck } from 'lucide-react';
import Logo from './ui/Logo';
import LocaleSwitcher from './ui/LocaleSwitcher';
import { WHATSAPP_DEFAULT } from '@/lib/restaurant';

const NAV = ['about', 'menu', 'combos', 'signature', 'gallery', 'contact'] as const;

export default function Header() {
  const t = useTranslations('nav');
  const th = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/90 backdrop-blur-xl'
          : 'bg-gradient-to-b from-ink/80 to-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-bold uppercase tracking-wide text-cream/70 transition-colors hover:text-yellow"
            >
              {t(item)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="badge-halal hidden xl:inline-flex">
            <BadgeCheck className="h-3.5 w-3.5" />
            {th('halal')}
          </span>
          <LocaleSwitcher />
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden md:inline">{t('order')}</span>
            <span className="md:hidden">{t('orderShort')}</span>
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-ink/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-bold uppercase tracking-wide text-cream/80 transition-colors hover:bg-white/5 hover:text-yellow"
                >
                  {t(item)}
                </a>
              ))}
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                {t('order')}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
