'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from './ui/Reveal';

// Wings, pizza, doner, fries, burgers, takeaway packaging.
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=900&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=700&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=700&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1619881590738-a111d176d906?w=700&q=80', span: '' },
  { src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=80', span: '' },
] as const;

export default function Gallery() {
  const t = useTranslations('gallery');
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="section bg-ink-800/60">
      <div className="container-x">
        <Reveal className="mb-12 text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/60">{t('subtitle')}</p>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt="NRfood — еда и доставка"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
