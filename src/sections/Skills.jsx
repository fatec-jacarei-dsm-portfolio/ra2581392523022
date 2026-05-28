import { skills } from "../data/skills";
import { getDict } from "../i18n/i18n";

export default function Skills({ lang }) {
  const copy = getDict(lang);
  const softSkills = copy.skills.soft;
  const clients = copy.skills.clients;

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--bg)] py-[100px]"
      id="arsenal"
      aria-label={copy.sections.arsenal}
    >
      <div className="relative z-[2] mx-auto max-w-[1100px] px-[60px] max-[900px]:px-6">
        <p className="s-tag rv" data-n="03">
          {copy.sections.arsenal}
        </p>
        <div className="ars-g rv">
          {skills.map((skill) => (
            <div key={skill.label} className="ars-c">
              <div className="t-ico">{skill.short}</div>
              <span className="t-nm">{skill.label}</span>
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
