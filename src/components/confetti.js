import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  const ref = useRef(null);

  useEffect(() => {
    const shootConfetti = () => {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
      });
    };

    // Listen for custom event
    window.addEventListener("fireConfetti", shootConfetti);

    return () => {
      window.removeEventListener("fireConfetti", shootConfetti);
    };
  }, []);

  return null;
}