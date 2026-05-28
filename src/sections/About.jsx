import { getDict } from "../i18n/i18n";

export default function About({ lang }) {
  const copy = getDict(lang);
  const cards = copy.origin.cards;
  const stats = copy.origin.stats;

  return (
    <section
      className="relative z-[2] flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--bg)] pb-[100px] pt-0 will-change-transform"
      id="origem"
      aria-label={copy.sections.origin}
    >
      <div className="relative z-[2] mx-auto max-w-[1100px] px-[60px] max-[900px]:px-6">
        <p className="s-tag rv" data-n="01">
          {copy.sections.origin}
        </p>
        <div className="og-grid rv">
          {cards.map((card, index) => {
            const accentClass = card.accent === "alt" ? "mk2" : "mk";
            return (
              <div key={`${card.line1}-${index}`} className="og-cell">
                <div className="og-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="og-ph">
                  {card.line1 ? (
                    <>
                      {card.line1}
                      <br />
                    </>
                  ) : null}
                  {card.line2Prefix}
                  <span className={accentClass}>{card.highlight}</span>
                  {card.line2Suffix}
                </p>
                <p className="og-sub">{card.subtitle}</p>
              </div>
            );
          })}
        </div>
        <div className="st-row rv">
          {stats.map((stat) => (
            <div key={stat.label} className="st">
              <div className="st-n">{stat.value}</div>
              <div className="st-l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
