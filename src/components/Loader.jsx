import { useEffect, useState } from "react";

export default function Loader({ messages, welcomeText }) {
  // 1. Verifica se a animação já rodou nesta sessão do navegador
  const isLoaded = sessionStorage.getItem("cecon_loaded") === "true";

  // 2. Se já foi executado, o estado inicial já começa no fim
  const [text, setText] = useState(
    isLoaded ? welcomeText : (messages?.[0] ?? ""),
  );
  const [done, setDone] = useState(isLoaded);

  useEffect(() => {
    // 3. Se já rodou antes, bloqueia a execução dos timers de animação
    if (isLoaded) return;

    if (!messages || messages.length === 0) {
      setText(welcomeText);
      setDone(true);
      sessionStorage.setItem("cecon_loaded", "true");
      return undefined;
    }

    let index = 0;
    let hideTimer;
    const intervalId = setInterval(() => {
      index += 1;
      if (index < messages.length) {
        setText(messages[index]);
      }
    }, 580);

    const doneTimer = setTimeout(() => {
      clearInterval(intervalId);
      setText(welcomeText);
      hideTimer = setTimeout(() => {
        setDone(true);
        // 4. Salva a flag no navegador quando a animação termina pela primeira vez
        sessionStorage.setItem("cecon_loaded", "true");
      }, 100);
    }, 1200);

    return () => {
      clearInterval(intervalId);
      clearTimeout(doneTimer);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [messages, welcomeText, isLoaded]);

  // 5. O SEGREDO: Se já carregou, retorna "null" para remover a tela preta instantaneamente
  if (isLoaded) return null;

  return (
    <div
      id="loader"
      className={done ? "done" : ""}
      role="status"
      aria-label="Loading"
    >
      <svg
        style={{
          position: "absolute",
          opacity: 0.05,
          animation: "rspin 20s linear infinite",
        }}
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <style>
          {
            "@keyframes rspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}"
          }
        </style>
        <g stroke="white" strokeWidth="0.5">
          <circle cx="250" cy="250" r="50" />
          <circle cx="250" cy="250" r="100" />
          <circle cx="250" cy="250" r="150" />
          <circle cx="250" cy="250" r="200" />
          <circle cx="250" cy="250" r="244" />
          <line x1="250" y1="6" x2="250" y2="494" />
          <line x1="6" y1="250" x2="494" y2="250" />
        </g>
      </svg>

      <div className="ll" aria-hidden="true">
        CECON
      </div>
      <div className="l-bar" aria-hidden="true">
        <div className="l-fill"></div>
      </div>
      <div className="l-txt" aria-live="polite">
        {text}
      </div>
    </div>
  );
}
