'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Info, MessageCircle } from 'lucide-react';
import { menu } from '@/lib/menu';
import { whatsappLink } from '@/lib/restaurant';
import { formatPrice } from '@/lib/format';
import Reveal from './ui/Reveal';

export default function Menu() {
  const t = useTranslations('menu');
  const [active, setActive] = useState(menu[0].id);
  const cur = t('currency');

  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="section">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
          <p className="mt-5 text-base text-cream/60 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        {/* Demo notice */}
        <Reveal className="mx-auto mt-6 max-w-3xl">
          <p className="flex items-start gap-2.5 rounded-2xl border border-yellow/30 bg-yellow/10 px-5 py-3.5 text-sm text-yellow">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{t('demoBadge')}</span>
          </p>
        </Reveal>

        {/* Tabs */}
        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                active === c.id
                  ? 'bg-yellow text-ink'
                  : 'border border-white/15 bg-white/5 text-cream/70 hover:text-cream'
              }`}
            >
              {t(`categories.${c.id}`)}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {category.items.map((item) => (
              <div
                key={item.id}
                className={`group flex items-center justify-between gap-4 rounded-2xl border p-4 transition-colors ${
                  item.star
                    ? 'border-yellow/40 bg-yellow/5'
                    : 'border-white/10 bg-ink-800 hover:border-yellow/30'
                }`}
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-semibold text-cream">
                    {t(`items.${item.id}`)}
                    {item.star && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-yellow px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-ink">
                        <Star className="h-2.5 w-2.5 fill-ink" />
                        {t('hit')}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="price-tag">
                    {formatPrice(item.price)} {cur}
                  </span>
                  <a
                    href={whatsappLink(
                      `Здравствуйте! Хочу заказать ${t(`items.${item.id}`)}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream/60 transition-colors hover:bg-yellow hover:text-ink"
                    aria-label={t('order')}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
