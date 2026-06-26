'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Reveal from './ui/Reveal';

const DISHES = [
  {
    key: 'wings',
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900&q=80',
  },
  {
    key: 'doner',
    img: 'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=900&q=80',
  },
  {
    key: 'pizza',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80',
  },
  {
    key: 'grill',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80',
  },
] as const;

export default function SignatureDishes() {
  const t = useTranslations('signature');

  return (
    <section id="signature" className="section bg-grid">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
          <p className="mt-5 text-base text-cream/60 sm:text-lg">{t('subtitle')}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((dish, i) => (
            <Reveal key={dish.key} delay={i * 0.08}>
              <article className="group relative h-80 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={dish.img}
                  alt={t(`items.${dish.key}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-yellow">
                    {t(`items.${dish.key}.name`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/75">
                    {t(`items.${dish.key}.desc`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
