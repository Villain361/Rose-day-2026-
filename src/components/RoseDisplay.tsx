import roseImage from "@/assets/rose.png";

interface RoseDisplayProps {
  visible: boolean;
}

const RoseDisplay = ({ visible }: RoseDisplayProps) => {
  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center mb-4 sm:mb-6">
      {/* Soft ambient glow behind rose */}
      <div
        className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsla(0,60%,30%,0.25), transparent 70%)" }}
      />

      {/* Rose image */}
      <div className="relative" style={{ animation: "page-fade-in 2s ease-out forwards, breathe 6s ease-in-out 2s infinite" }}>
        <img
          src={roseImage}
          alt="A single red rose"
          className="w-[140px] sm:w-[170px] md:w-[180px] object-contain"
          style={{ filter: "drop-shadow(0 0 25px rgba(255, 80, 80, 0.25))" }}
        />
        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 animate-shimmer rounded-full"
          style={{
            background: "linear-gradient(135deg, transparent 30%, hsla(0,70%,70%,0.12) 50%, transparent 70%)",
            animationDelay: "3s",
          }}
        />
      </div>
    </div>
  );
};

export default RoseDisplay;
