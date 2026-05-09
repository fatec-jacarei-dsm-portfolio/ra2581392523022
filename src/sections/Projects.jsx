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
      <div className="panels rv" role="list" ref={panelsRef}>
        {projects.map((project, index) => {
          const projectCopy = items?.[index];
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
              {project.cover ? (
                <div className="cp-media" aria-hidden="true">
                  <img src={project.cover} alt="" loading="lazy" />
                </div>
              ) : null}
              <div className="cp-clip" aria-hidden="true"></div>
              <div className="cp-body">
                <div>
                  <div className="cp-num">{projectCopy?.mission}</div>
                  <div className="cp-name">
                    {titleLines[0]}
                    <br />
                    {titleLines[1]}
                  </div>
                  <div className="cp-desc">{projectCopy?.desc}</div>
                  <div className="cp-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="cp-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cp-r">
                  <div className="cp-yr" aria-hidden="true">
                    {project.year}
                  </div>
                  <div className="cp-arr" aria-hidden="true">
                    -&gt;
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// Hook animations
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
  }, [ref]);
}

// wire the hook inside the component via ref
// (exported component will call this automatically when rendered)
// To avoid duplicate registrations, we call it here using a noop wrapper
// The actual effect will run when the component is mounted.
// (This file declares the hook but we still need to call it from the component.)
