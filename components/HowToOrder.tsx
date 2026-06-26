'use client';

import { useTranslations } from 'next-intl';
import { UtensilsCrossed, MessageCircle, Timer, ArrowRight } from 'lucide-react';
import { WHATSAPP_DEFAULT } from '@/lib/restaurant';
import Reveal from './ui/Reveal';

const STEPS = [
  { key: 'choose', icon: UtensilsCrossed },
  { key: 'write', icon: MessageCircle },
  { key: 'get', icon: Timer },
] as const;

export default function HowToOrder() {
  const t = useTranslations('how');

  return (
    <section id="how" className="section bg-yellow text-ink">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center !text-red">{t('kicker')}</span>
          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-base font-medium text-ink/70 sm:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.key} delay={i * 0.1} className="relative">
              <div className="relative h-full rounded-3xl border-2 border-ink bg-cream p-7 shadow-hard">
                <span className="absolute -top-4 left-7 flex h-9 items-center justify-center rounded-full bg-red px-3 font-heading text-base font-bold text-cream">
                  0{i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-yellow">
                  <step.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase tracking-tight text-ink">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t(`steps.${step.key}.text`)}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 text-ink md:block" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red !px-9 !py-4 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {t('cta')}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
