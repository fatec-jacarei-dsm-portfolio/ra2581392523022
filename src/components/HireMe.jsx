import { t } from "../i18n/i18n";

export default function HireMe({ lang, email }) {
  return (
    <a href={`mailto:${email}`} id="hire" aria-label={t(lang, "hire.aria")}>
      <div className="h-dot" aria-hidden="true"></div>
      {t(lang, "hire.text")}
    </a>
  );
}
