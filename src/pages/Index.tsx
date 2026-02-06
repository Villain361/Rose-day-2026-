import { useState, useEffect } from "react";
import RoseDisplay from "@/components/RoseDisplay";
import LoveMessage from "@/components/LoveMessage";
import FloatingPetals from "@/components/FloatingPetals";
import AudioToggle from "@/components/AudioToggle";

const Index = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Background gradient */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, #3a0d16 0%, #0a0303 50%, #050505 100%)",
        }}
      />

      {/* Subtle horizontal light accent */}
      <div
        className="fixed z-[1] left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] opacity-[0.06]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(0 60% 50%), transparent)" }}
      />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Vignette */}
      <div className="vignette" />

      {/* Floating petals */}
      {started && <FloatingPetals />}

      {/* Main content */}
      <main
        className={`relative z-20 h-[100dvh] flex flex-col items-center justify-center px-4 py-6 sm:py-8 transition-opacity duration-[2000ms] ${
          started ? "opacity-100" : "opacity-0"
        }`}
      >
        <RoseDisplay visible={started} />
        <LoveMessage started={started} />
      </main>

      {/* Audio toggle */}
      <AudioToggle visible={started} />
    </>
  );
};

export default Index;
