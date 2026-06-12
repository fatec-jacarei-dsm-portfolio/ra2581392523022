import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import ScrollProgress from "../components/ScrollProgress";
import { projects } from "../data/projects";
import { getDict, t } from "../i18n/i18n";

export default function ProjectDetail({ lang, onToggleLang }) {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const copy = getDict(lang);
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projectIndex >= 0 ? projects[projectIndex] : null;
  const projectCopy = projectIndex >= 0 ? copy.projects?.[projectIndex] : null;
  const gallery = project?.gallery ?? [];
  const title = projectCopy?.titleLines?.join(" ") ?? "";

  if (!project || !projectCopy) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <ScrollProgress />
        <Header lang={lang} onToggleLang={onToggleLang} />
        <main className="mx-auto max-w-4xl px-8 pt-28 pb-20">
          <h1 className="text-3xl font-light tracking-wide">
            {t(lang, "projectDetail.notFoundTitle")}
          </h1>
          <p className="mt-3 text-[var(--text2)]">
            {t(lang, "projectDetail.notFoundBody")}
          </p>
          <Link className="mt-8 inline-block h-btn" to="/">
            {t(lang, "projectDetail.back")}
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <ScrollProgress />
      <Header lang={lang} onToggleLang={onToggleLang} />
      <main className="mx-auto max-w-5xl px-8 pt-28 pb-20">
        <div className="flex flex-wrap items-center gap-3 text-[var(--text3)]">
          <span className="s-tag" data-n="00">
            {t(lang, "projectDetail.tag")}
          </span>
          <span className="text-xs uppercase tracking-[0.35em]">
            {projectCopy.mission}
          </span>
        </div>
        <h1 className="mt-6 font-['Unbounded'] text-4xl tracking-[0.2em] text-[var(--text)]">
          {projectCopy.titleLines?.join(" ")}
        </h1>
        <p className="mt-4 text-lg text-[var(--text2)]">{projectCopy.detail}</p>

        {/* CAIXA DE CONTRIBUIÇÃO PESSOAL */}
        {projectCopy?.contribution && (
          <div className="mt-10 p-8 border border-[var(--border2)] bg-[var(--bg2)] relative overflow-hidden">
            {/* Efeito visual no canto da caixa */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]"></div>

            <h3
              className="mb-4 text-xs uppercase tracking-[0.2em]"
              style={{
                color: "var(--accent)",
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              {t(lang, "projectDetail.contributionTitle")}
            </h3>

            <p className="text-[15px] leading-relaxed text-[var(--text)]">
              {projectCopy.contribution}
            </p>
          </div>
        )}

        <div className="mt-10 grid gap-6 border border-[var(--border)] bg-[var(--bg2)] p-6 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[var(--text3)]">
              {t(lang, "projectDetail.year")}
            </div>
            <div className="mt-2 font-['Unbounded'] text-3xl text-[var(--accent)]">
              {project.year}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[var(--text3)]">
              {t(lang, "projectDetail.stack")}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="cp-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-[var(--text3)]">
              {t(lang, "projectDetail.links")}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.links.live ? (
                <a
                  className="ct-l"
                  href={project.links.live}
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "projectDetail.live")}
                </a>
              ) : null}
              {project.links.repo ? (
                <a
                  className="ct-l"
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener"
                >
                  {t(lang, "projectDetail.repo")}
                </a>
              ) : null}
              {!project.links.live && !project.links.repo ? (
                <span className="text-sm text-[var(--text3)]">
                  {t(lang, "projectDetail.noLinks")}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        {gallery.length ? (
          <div className="pd-gallery">
            {gallery.map((src, index) => (
              <div key={`${src}-${index}`} className="pd-img">
                <img
                  src={src}
                  alt={`${title} image ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : null}

        <Link className="mt-10 inline-block h-btn" to="/">
          {t(lang, "projectDetail.back")}
        </Link>
      </main>
    </div>
  );
}
