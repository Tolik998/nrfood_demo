/* TODO: заменить на реальный логотип клиента */

/**
 * Text placeholder logo in the brand's spirit — bold "NR" badge in the
 * yellow/black/red palette + "food" wordmark. Does NOT reproduce the
 * client's character mascot (kept as a text/icon placeholder).
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span
      className={`flex select-none items-center gap-2 ${className}`}
      aria-label="NRfood"
    >
      {/* NR badge */}
      <span className="relative inline-flex h-9 items-center justify-center rounded-lg bg-yellow px-2 shadow-[3px_3px_0_0_#E31E24] sm:h-10">
        <span className="font-brand text-xl leading-none text-ink sm:text-2xl">
          NR
        </span>
      </span>
      <span className="font-brand text-2xl leading-none tracking-wide text-cream sm:text-3xl">
        food
      </span>
    </span>
  );
}
