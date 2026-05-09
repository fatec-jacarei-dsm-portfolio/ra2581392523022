import { skills } from "../data/skills";
import { getDict } from "../i18n/i18n";

export default function Skills({ lang }) {
  const copy = getDict(lang);
  const softSkills = copy.skills.soft;
  const clients = copy.skills.clients;

  return (
    <section className="sec" id="arsenal" aria-label={copy.sections.arsenal}>
      <div className="wrap">
        <p className="s-tag rv" data-n="03">
          {copy.sections.arsenal}
        </p>
        <div className="ars-g rv">
          {skills.map((skill) => (
            <div key={skill.label} className="ars-c">
              <div className="t-ico">{skill.short}</div>
              <span className="t-nm">{skill.label}</span>
              <div className="t-br" style={{ "--l": `${skill.level}%` }}></div>
            </div>
          ))}
        </div>
        <div className="sf-row rv">
          {softSkills.map((item) => (
            <span key={item} className="sf-t">
              {item}
            </span>
          ))}
        </div>
        <div className="cl-box rv">
          <div className="cl-lbl">{copy.skills.clientsLabel}</div>
          <div className="cl-row">
            {clients.map((client) => (
              <span key={client} className="cl-b">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
