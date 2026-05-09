import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import HireMe from "../components/HireMe";
import Loader from "../components/Loader";
import ScrollProgress from "../components/ScrollProgress";
import Intro from "../sections/Intro";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import { getDict } from "../i18n/i18n";
import { contactInfo } from "../data/contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ lang, onToggleLang }) {
  const copy = getDict(lang);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".rv");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      const intro = document.querySelector("#entry");
      const origin = document.querySelector("#origem");
      if (intro && origin) {
        gsap.set(origin, { yPercent: 100 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: intro,
              start: "top top",
              scrub: true,
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
            },
          })
          .to(origin, { yPercent: 0, ease: "none" }, 0)
          .to(intro, { yPercent: -18, autoAlpha: 0, ease: "none" }, 0);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <div className="dots" aria-hidden="true"></div>
      <ScrollProgress />
      <Loader
        messages={copy.loader.messages}
        welcomeText={copy.loader.welcome}
      />
      <Header lang={lang} onToggleLang={onToggleLang} />
      <HireMe lang={lang} email={contactInfo.email} />

      <main className="relative z-[1]">
        <Intro lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
}
