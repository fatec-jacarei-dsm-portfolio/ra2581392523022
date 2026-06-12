import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { getDict } from "../i18n/i18n";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects({ lang }) {
  const copy = getDict(lang);
  const items = copy.projects;
  const panelsRef = useRef(null);
  useProjectsReveal(panelsRef);

  // Agrupar os projetos pelas categorias
  const groupedProjects = {
    academic: [],
    professional: [],
    personal: [],
  };

  projects.forEach((proj, index) => {
    // Passamos o index original para encontrar a tradução correta
    const projectCopy = items?.[index];
    if (groupedProjects[proj.category]) {
      // Salva o originalIndex para a numeração (01, 02) continuar correta
      groupedProjects[proj.category].push({
        ...proj,
        projectCopy,
        originalIndex: index,
      });
    }
  });

  // Função auxiliar para renderizar cada secção de categoria
  const renderCategory = (categoryKey, title) => {
    const categoryProjects = groupedProjects[categoryKey];
    if (categoryProjects.length === 0) return null; // Não desenha se estiver vazio

    return (
      <div className="mb-16" key={categoryKey}>
        {/* Título da Categoria */}
        <h3
          className="text-xl tracking-widest uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "14px",
          }}
        >
          {title}
        </h3>

        <div className="panels rv" role="list">
          {categoryProjects.map((project) => {
            const projectCopy = project.projectCopy;
            const titleLines = projectCopy?.titleLines ?? [
              projectCopy?.title ?? "",
              "",
            ];

            return (
              <Link
                key={project.slug}
                className="cp"
                to={`/projects/${project.slug}`}
                role="listitem"
                aria-label={projectCopy?.aria}
              >
                {/* HTML ORIGINAL DO SEU CARD INTACTO ABAIXO */}
                <div className="cp-clip" aria-hidden="true"></div>
                <div className="cp-body">
                  <div>
                    <div className="cp-num" aria-hidden="true">
                      {String(project.originalIndex + 1).padStart(2, "0")}
                    </div>
                    <h3 className="cp-name">
                      {titleLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < titleLines.length - 1 && <br />}
                        </span>
                      ))}
                    </h3>
                    {/* Aqui está a descrição que eu tinha apagado sem querer! */}
                    <p className="cp-desc">{projectCopy?.desc}</p>
                    <div className="cp-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="cp-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="cp-r">
                    <span className="cp-yr">{project.year}</span>
                    <div className="cp-arr" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="cp-media">
                  <img
                    src={project.cover}
                    alt={titleLines.join(" ")}
                    loading="lazy"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      className="sec"
      id="missoes"
      style={{ paddingBottom: 0 }}
      aria-label={copy.sections.missions}
    >
      <div className="wrap" style={{ marginBottom: "32px" }}>
        <p className="s-tag rv" data-n="02">
          {copy.sections.missions}
        </p>
      </div>

      <div className="wrap" ref={panelsRef}>
        {renderCategory("academic", copy.categories?.academic || "Acadêmicos")}
        {renderCategory(
          "professional",
          copy.categories?.professional || "Profissionais",
        )}
        {renderCategory("personal", copy.categories?.personal || "Pessoais")}
      </div>
    </section>
  );
}

// Hook das animações
function useProjectsReveal(ref) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".cp", ref.current);
      items.forEach((el, i) => {
        const tilt = i % 2 === 0 ? -1.2 : 1.2;
        const isLate = i >= 4;
        const baseDelay = i * 0.3;
        const delay = isLate ? baseDelay * 0.6 : baseDelay;
        const duration = isLate ? 1.5 : 1.9;
        gsap.fromTo(
          el,
          { x: -90, opacity: 0, scale: 0.98, rotateZ: tilt },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration,
            ease: "power3.out",
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);
}