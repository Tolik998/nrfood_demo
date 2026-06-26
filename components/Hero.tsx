'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star, BadgeCheck, Clock, MessageCircle, Timer } from 'lucide-react';
import { WHATSAPP_DEFAULT } from '@/lib/restaurant';

export default function Hero() {
  const t = useTranslations('hero');

  const badges = [
    { icon: Star, label: t('badgeRating'), star: true },
    { icon: BadgeCheck, label: t('badgeHalal'), star: false },
    { icon: Clock, label: t('badgeHours'), star: false },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background food photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1920&q=80"
          alt="Сочные жареные крылышки NRfood"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      </div>

      {/* Yellow glow accent */}
      <div className="pointer-events-none absolute -right-24 top-1/3 -z-[5] h-[26rem] w-[26rem] rounded-full bg-yellow/20 blur-[130px]" />

      <div className="container-x relative z-10 pt-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="kicker"
        >
          {t('kicker')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading max-w-3xl text-5xl sm:text-7xl lg:text-8xl"
        >
          {t('title')}{' '}
          <span className="text-yellow">{t('titleAccent')}!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-cream/75 sm:text-lg"
        >
          {t('subtitle')}
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-2.5"
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className={`chip ${b.star ? '!border-yellow/50 !text-yellow' : ''}`}
            >
              <b.icon className={`h-3.5 w-3.5 ${b.star ? 'fill-yellow' : ''}`} />
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs + pulsing timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-8 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {t('cta')}
          </a>
          <a href="#menu" className="btn-ghost !px-8 !py-4 text-base">
            {t('ctaMenu')}
          </a>

          <div className="flex animate-pulse-ring items-center gap-3 rounded-full border-2 border-yellow/60 bg-yellow/10 px-5 py-3">
            <Timer className="h-6 w-6 text-yellow" />
            <span className="leading-none">
              <span className="block font-heading text-2xl font-bold text-yellow">
                {t('timer')}
              </span>
              <span className="text-[11px] uppercase tracking-wide text-cream/60">
                {t('timerLabel')}
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
