'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from './ui/Reveal';

interface QA {
  q: string;
  a: string;
}

export default function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as QA[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-grid">
      <div className="container-x max-w-3xl">
        <Reveal className="mb-12 text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
        </Reveal>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`card-surface overflow-hidden transition-colors ${
                    isOpen ? 'border-yellow/40' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-bold uppercase tracking-tight text-cream sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 bg-yellow text-ink'
                          : 'bg-white/5 text-yellow'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-cream/60">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
