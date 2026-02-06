import { useState, useRef, useEffect } from "react";

const AUDIO_FOLDER = "./Music/Chennai Express (Sad Theme) - Emrose Percussion.mp3";

const AudioToggle = ({ visible }: { visible: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(AUDIO_FOLDER);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  if (!visible) return null;

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-foreground/20 bg-transparent backdrop-blur-md text-foreground text-base cursor-pointer transition-all duration-300 hover:border-foreground/40"
      aria-label={playing ? "Pause audio" : "Play audio"}
      style={{ animation: "text-reveal 1s ease-out forwards", animationDelay: "2s", opacity: 0 }}
    >
      {playing ? "❚❚" : "♡"}
    </button>
  );
};

export default AudioToggle;
