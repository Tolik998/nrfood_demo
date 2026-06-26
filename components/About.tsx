'use client';

import { useTranslations } from 'next-intl';
import { Timer, BadgeCheck, Heart, MapPin } from 'lucide-react';
import Reveal from './ui/Reveal';

const CARDS = [
  { key: 'fast', icon: Timer, accent: true },
  { key: 'halal', icon: BadgeCheck, accent: false },
  { key: 'love', icon: Heart, accent: false },
  { key: 'branches', icon: MapPin, accent: false },
] as const;

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section bg-grid">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
          <p className="mt-5 text-base text-cream/60 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.key} delay={i * 0.08}>
              <article
                className={`group h-full rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  card.accent
                    ? 'border-yellow/40 bg-gradient-to-b from-yellow/15 to-ink-800'
                    : 'border-white/10 bg-ink-800 hover:border-yellow/40'
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    card.accent ? 'bg-yellow text-ink' : 'bg-white/5 text-yellow'
                  }`}
                >
                  <card.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-cream">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/55">
                  {t(`cards.${card.key}.text`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
