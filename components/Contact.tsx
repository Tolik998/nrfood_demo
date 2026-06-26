'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Clock, Star, MessageCircle } from 'lucide-react';
import Reveal from './ui/Reveal';
import { restaurant, whatsappLink } from '@/lib/restaurant';

export default function Contact() {
  const t = useTranslations('contact');

  const rows = [
    { Icon: MapPin, label: t('addressLabel'), value: t('address'), note: t('branchesNote') },
    {
      Icon: Phone,
      label: t('phoneLabel'),
      value: restaurant.phone,
      href: `tel:+${restaurant.phoneRaw}`,
    },
    { Icon: Clock, label: t('hoursLabel'), value: t('hoursValue') },
    {
      Icon: Star,
      label: t('ratingLabel'),
      value: `${restaurant.rating.value} · ${restaurant.rating.count}`,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <Reveal className="mb-12 text-center">
          <span className="kicker justify-center">{t('kicker')}</span>
          <h2 className="heading text-4xl sm:text-6xl">{t('title')}</h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-surface flex h-full flex-col p-7 sm:p-9">
              <ul className="space-y-5">
                {rows.map(({ Icon, label, value, href, note }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow/15 text-yellow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/40">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-base font-semibold text-cream hover:text-yellow"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-cream">{value}</p>
                      )}
                      {note && (
                        <p className="mt-0.5 text-xs font-semibold text-yellow">{note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                {t('order')}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface relative h-full min-h-[22rem] overflow-hidden">
              {/* TODO: заменить на реальный iframe карты */}
              <iframe
                title={t('mapTitle')}
                className="absolute inset-0 h-full w-full grayscale invert-[0.9] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${restaurant.geo.lat},${restaurant.geo.lng}&z=13&output=embed`}
              />
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2 backdrop-blur">
                <MapPin className="h-4 w-4 shrink-0 text-yellow" />
                <span className="truncate text-sm font-semibold text-cream">
                  {restaurant.address}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
