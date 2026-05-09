import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { t } from "../i18n/i18n";

export default function Header({ lang, onToggleLang }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const langLabel = lang === "pt" ? "PT / EN" : "EN / PT";

  return (
    <header id="hd" className={isScrolled ? "on" : ""}>
      <Link className="h-logo font-['Unbounded']" to="/">
        {t(lang, "header.logo")}
      </Link>
      <div className="h-btns">
        <button className="h-btn" type="button" onClick={onToggleLang}>
          {langLabel}
        </button>
      </div>
    </header>
  );
}
