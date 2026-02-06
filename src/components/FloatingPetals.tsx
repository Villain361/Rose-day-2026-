import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = () => {
      const petal: Petal = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: 14 + Math.random() * 10,
        duration: 8 + Math.random() * 6,
      };
      setPetals((prev) => [...prev.slice(-8), petal]);
    };

    const interval = setInterval(createPetal, 2000);
    const timeout = setTimeout(createPetal, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute top-[-50px] opacity-60"
          style={{
            left: `${petal.left}vw`,
            fontSize: `${petal.size}px`,
            animation: `fall ${petal.duration}s linear forwards`,
            color: "hsl(0 60% 40% / 0.7)",
          }}
        >
          ❀
        </span>
      ))}
    </div>
  );
};

export default FloatingPetals;
