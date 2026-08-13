import { useState, useEffect } from "react";
import { HIGHLIGHTS, type Highlight } from "@/data/highlights";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useHighlightRotation(intervalMs = 5000): Highlight {
  const [items] = useState(() => shuffleArray(HIGHLIGHTS));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items, intervalMs]);

  return items[index];
}
