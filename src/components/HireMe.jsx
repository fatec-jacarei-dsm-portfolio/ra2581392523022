import { t } from "../i18n/i18n";

export default function HireMe({ lang, link }) {
  return (
    <a
      href={link}
      id="hire"
      aria-label={t(lang, "hire.aria")}
      target="_blank"
      rel="noopener"
    >
      <div className="h-dot" aria-hidden="true"></div>
      {t(lang, "hire.text")}
    </a>
  );
}
