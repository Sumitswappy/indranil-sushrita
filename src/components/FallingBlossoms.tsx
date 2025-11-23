"use client";

import React, { useEffect, useState } from "react";

export default function FallingBlossoms() {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate 30 random petals only on the client side to avoid hydration mismatches
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 5,  // Random delay before starting (0-5s)
      duration: 5 + Math.random() * 5, // Random fall speed (5-10s)
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <style jsx>{`
        @keyframes fall {
          0% {
            top: -10%;
            transform: translateX(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            top: 110%;
            transform: translateX(20px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(25px); }
        }
      `}</style>

      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-10%] text-pink-200/80"
          style={{
            left: `${petal.left}%`,
            fontSize: `${Math.random() * 10 + 10}px`, // Random size 10px-20px
            animation: `fall ${petal.duration}s linear infinite, sway 3s ease-in-out infinite alternate`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}