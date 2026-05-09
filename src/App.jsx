import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { defaultLang, t } from "./i18n/i18n";

export default function App() {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t(lang, "meta.title");
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home lang={lang} onToggleLang={handleToggleLang} />}
      />
      <Route
        path="/projects/:slug"
        element={<ProjectDetail lang={lang} onToggleLang={handleToggleLang} />}
      />
    </Routes>
  );
}
