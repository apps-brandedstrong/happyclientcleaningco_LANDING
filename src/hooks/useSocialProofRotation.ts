import { useState, useEffect } from "react";
import { SOCIAL_PROOF_ITEMS, type SocialProofItem } from "@/data/socialProof";

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useSocialProofRotation(intervalMs = 5000): SocialProofItem {
  const [items] = useState(() => shuffleArray(SOCIAL_PROOF_ITEMS));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items, intervalMs]);

  return items[index];
}
