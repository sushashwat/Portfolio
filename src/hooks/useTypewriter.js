import { useEffect, useState } from "react";

export default function useTypewriter(text, speed = 55, delay = 400) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let typingId;

    const startId = setTimeout(function type() {
      if (i <= text.length) {
        setDisplay(text.slice(0, i));
        i++;
        typingId = setTimeout(type, speed);
      }
    }, delay);

    return () => {
      clearTimeout(startId);
      clearTimeout(typingId);
    };
  }, [text, speed, delay]);

  return display;
}
