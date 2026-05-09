import { getDict } from "../i18n/i18n";

export default function Intro({ lang }) {
  const copy = getDict(lang);
  const entry = copy.entry;
  const name = entry.name;
  const marqueeItems = Array.from({ length: 4 }, () => name);
  const marqueeLoop = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="entry"
      className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]"
      aria-label={entry.aria}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-60"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]"
        aria-hidden="true"
      ></div>

      <div
        className="pointer-events-none absolute inset-0 flex items-center"
        aria-hidden="true"
      >
        <div className="w-full overflow-hidden -translate-y-20">
          <div className="inline-flex min-w-full items-center gap-[6vw] pr-[6vw] font-['Unbounded'] font-extralight uppercase tracking-[0.18em] text-[var(--text)]/90 animate-[marquee_50s_linear_infinite] will-change-transform">
            {marqueeLoop.map((text, index) => (
              <span
                key={`${text}-${index}`}
                className="whitespace-nowrap marquee-name text-[clamp(120px,22vw,320px)]"
                data-t={text}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-end gap-4 px-6 pt-12 pb-0">
        {/* Desktop: three columns (left text, square, right text) */}
        <div className="w-full flex items-end justify-center">
          <div className="flex w-full items-end justify-center gap-3 md:gap-4">
            {/* Left: fixed width, closer to the center */}
            <div className="intro-side hidden md:flex flex-none w-[180px] lg:w-[220px] items-center justify-end pb-3">
              <div className="whitespace-nowrap text-[12px] md:text-[13px] uppercase tracking-[0.35em] text-[var(--accent)] text-right">
                {entry.roleLeft} &nbsp; {entry.roleRight}
              </div>
            </div>

            {/* Center avatar slot to preserve layout spacing */}
            <div className="intro-center">
              <div className="intro-avatar">
                <img src="/img/avatar.png" alt={entry.name} />
              </div>
            </div>

            {/* Right: fixed width, closer to the center */}
            <div className="intro-side hidden md:flex flex-none w-[180px] lg:w-[220px] items-center justify-start pb-3">
              <div className="whitespace-nowrap text-[12px] md:text-[13px] uppercase tracking-[0.35em] text-[var(--accent2)] text-left">
                {entry.roleLine}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked labels below the square */}
        <div className="mt-4 block md:hidden text-center text-[11px] uppercase tracking-[0.5em] text-[var(--text3)]">
          <div>
            {entry.roleLeft} &nbsp; {entry.roleRight}
          </div>
          <div className="mt-1">{entry.roleLine}</div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[var(--text3)]"></div>
    </section>
  );
}
