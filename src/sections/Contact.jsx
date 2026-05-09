import { contactInfo } from "../data/contact";
import { getDict } from "../i18n/i18n";

export default function Contact({ lang }) {
  const copy = getDict(lang);
  const lines = copy.contact.headlineLines;
  const highlightIndex =
    copy.contact.headlineHighlightIndex ?? lines.length - 1;

  return (
    <footer id="contact" aria-label={copy.contact.aria}>
      <div className="ct-bg" aria-hidden="true">
        CECON
      </div>
      <div className="ct-w rv">
        <div>
          <h2 className="ct-ph">
            {lines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className={index === highlightIndex ? "hi" : ""}
              >
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>
          <div className="ct-ls">
            <a className="ct-l p" href={`mailto:${contactInfo.email}`}>
              {copy.contact.ctaEmail}
            </a>
            <a
              className="ct-l"
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener"
            >
              {copy.contact.ctaLinkedIn}
            </a>
            <a
              className="ct-l"
              href={contactInfo.github}
              target="_blank"
              rel="noopener"
            >
              {copy.contact.ctaGithub}
            </a>
            <a className="ct-cv" href={contactInfo.resume} download>
              {copy.contact.ctaResume}
            </a>
          </div>
        </div>
        <div className="ct-m rv">
          <span>{copy.contact.locationLabel}</span>
          <span>
            <strong>{copy.contact.location}</strong>
          </span>
          <span style={{ marginTop: "12px" }}>{copy.contact.statusLabel}</span>
          <span>
            <strong>{copy.contact.status}</strong>
          </span>
          <span style={{ marginTop: "12px" }}>{copy.contact.replyLabel}</span>
          <span>
            <strong>{copy.contact.reply}</strong>
          </span>
        </div>
      </div>
      <div className="ft">
        <span>{copy.contact.footerLeft}</span>
        <span>{copy.contact.footerMid}</span>
        <span>{copy.contact.footerRight}</span>
      </div>
    </footer>
  );
}
