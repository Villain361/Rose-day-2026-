interface LoveMessageProps {
  started: boolean;
}

const paragraphs = [
  {
    delay: 2,
    content: <strong className="font-serif text-lg sm:text-xl md:text-2xl tracking-wide">Happy Rose Day, Nafisa <span className="animate-name-glow">❤️</span></strong>,
    isTitle: true,
  },
  {
    delay: 4,
    content: (
      <>
        I wish I could be there,<br />
        standing in front of you,<br />
        holding a real rose in my hand.
      </>
    ),
  },
  {
    delay: 6,
    content: (
      <>
        Distance stopped my steps <br />
        <em className="font-medium">not my feelings.</em>
      </>
    ),
  },
  {
    delay: 8,
    content: (
      <>
        So this rose lives here,<br />
        carrying everything I couldn't give in person.
      </>
    ),
  },
  {
    delay: 10,
    content: (
      <>
        You are thought of,<br />
        missed,<br />
        <em className="font-medium">and loved… quietly, deeply, always.</em>
      </>
    ),
  },
];

const LoveMessage = ({ started }: LoveMessageProps) => {
  if (!started) return null;

  return (
    <div className="relative z-20 text-center px-4 sm:px-6 max-w-[420px] mx-auto">
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`font-serif text-ivory-soft leading-relaxed mb-3 sm:mb-4 animate-text-reveal ${
            para.isTitle ? "mb-5 sm:mb-6" : ""
          }`}
          style={{
            animationDelay: `${para.delay}s`,
            fontSize: para.isTitle ? undefined : "1.05rem",
            lineHeight: "1.6",
          }}
        >
          {para.content}
        </p>
      ))}

      {/* Signature */}
      <p
        className="font-sans text-sm sm:text-base tracking-[0.15em] mt-2 animate-text-reveal text-muted-foreground font-light"
        style={{ animationDelay: "12s" }}
      >
        (ღˇ◡ˇ)♥ 𝙁𝙖𝙝𝙪𝙪 ♥ℒᵒᵛᵉᵧₒᵤ♥
      </p>
    </div>
  );
};

export default LoveMessage;
