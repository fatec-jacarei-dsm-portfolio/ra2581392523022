import { useEffect, useState } from "react";

export default function Loader({ messages, welcomeText }) {
  const [text, setText] = useState(messages?.[0] ?? "");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!messages || messages.length === 0) {
      setText(welcomeText);
      setDone(true);
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
      hideTimer = setTimeout(() => setDone(true), 100);
    }, 1200);

    return () => {
      clearInterval(intervalId);
      clearTimeout(doneTimer);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [messages, welcomeText]);

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
          <line x1="75" y1="75" x2="425" y2="425" />
          <line x1="425" y1="75" x2="75" y2="425" />
          <line x1="14" y1="165" x2="486" y2="335" />
          <line x1="486" y1="165" x2="14" y2="335" />
        </g>
      </svg>
      <div className="ll" aria-hidden="true">
        CECON
      </div>
      <div className="l-bar">
        <div className="l-fill"></div>
      </div>
      <div className="l-txt" id="ltxt" aria-live="polite">
        {text}
      </div>
    </div>
  );
}
