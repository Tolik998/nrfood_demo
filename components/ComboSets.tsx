'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, MessageCircle, Scale } from 'lucide-react';
import { combos } from '@/lib/menu';
import { whatsappLink } from '@/lib/restaurant';
import { formatPrice } from '@/lib/format';
import Reveal from './ui/Reveal';

export default function ComboSets() {
  const t = useTranslations('combos');
  const reduce = useReducedMotion();
  const cur = t('currency');

  return (
    <section id="combos" className="section bg-ink-800/60">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
          <p className="mt-5 text-base text-cream/60 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {combos.map((combo, i) => (
            <motion.article
              key={combo.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: [0.34, 1.4, 0.64, 1],
              }}
              className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-ink-800 ${
                combo.featured ? 'border-yellow/50' : 'border-white/10'
              }`}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={combo.image}
                  alt={t(`items.${combo.id}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-red px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cream">
                  {t('benefit')}
                </span>
                {combo.featured && (
                  <Star className="absolute right-3 top-3 h-5 w-5 fill-yellow text-yellow drop-shadow" />
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-cream">
                  {t(`items.${combo.id}.name`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/55">
                  {t(`items.${combo.id}.desc`)}
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow">
                  <Scale className="h-3.5 w-3.5" />
                  {t(`items.${combo.id}.weight`)}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="font-heading text-2xl font-bold text-cream">
                    {formatPrice(combo.price)}{' '}
                    <span className="text-base text-yellow">{cur}</span>
                  </span>
                  <a
                    href={whatsappLink(
                      `Здравствуйте! Хочу заказать ${t(`items.${combo.id}.name`)}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow text-ink transition-transform hover:scale-110"
                    aria-label={t('order')}
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
