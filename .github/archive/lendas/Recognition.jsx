import { awards, testimonials } from "../data/recognition";
import { getDict } from "../i18n/i18n";

export default function Recognition({ lang }) {
  const copy = getDict(lang);

  return (
    <section className="sec" id="lendas" aria-label={copy.sections.lendas}>
      <div className="wrap">
        <p className="s-tag rv" data-n="04">
          {copy.sections.lendas}
        </p>
        <div className="lg rv">
          <div className="aw-col" aria-label={copy.recognition.awardsLabel}>
            <div className="cl-lbl" style={{ marginBottom: "18px" }}>
              {copy.recognition.awardsLabel}
            </div>
            {awards.map((award, index) => {
              const awardCopy = copy.recognition.awards[index];
              return (
                <div key={`${award.year}-${index}`} className="aw">
                  <div className="aw-yr">{award.year}</div>
                  <div className="aw-t">{awardCopy.title}</div>
                  <div className="aw-w">{awardCopy.subtitle}</div>
                </div>
              );
            })}
          </div>
          <div
            className="te-col"
            aria-label={copy.recognition.testimonialsLabel}
          >
            <div className="cl-lbl" style={{ marginBottom: "18px" }}>
              {copy.recognition.testimonialsLabel}
            </div>
            {testimonials.map((testimonial, index) => {
              const quote = copy.recognition.testimonials[index];
              return (
                <div key={testimonial.initials} className="te">
                  <div>
                    <p className="te-q">{quote.quote}</p>
                    <div className="te-w">
                      <strong>{quote.name}</strong>
                      {quote.role} - {quote.company}
                    </div>
                  </div>
                  <div className="te-av" aria-hidden="true">
                    {testimonial.initials}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
