import { useState } from "react";

const AnimatedAvatar = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 shrink-0 group">
      {/* Brutalist offset shadow */}
      <div className="absolute inset-0 border-2 border-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />

      {/* Main frame */}
      <div className="relative w-full h-full border-2 border-black bg-white overflow-hidden group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
        <div className="w-full h-full animate-[float_6s_ease-in-out_infinite]">
          {!imageError ? (
            <img
              src="/profile.jpeg"
              alt="Aaruhya Kumar"
              className="w-full h-full object-cover object-top"
              loading="eager"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center p-4">
              {/* Stylistic Code Fallback */}
              <div className="text-[8px] font-mono text-green-500/40 leading-tight select-none overflow-hidden">
                {`{
  name: "Aaruhya",
  role: "CSE Student",
  status: "Building",
  origin: "Chennai",
  passion: "AI/Web",
  code: "Clean",
  mindset: "Purposeful"
}`}
              </div>
            </div>
          )}
        </div>

        {/* Subtle scan line overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)",
          }}
        />
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-3 -right-3 bg-black text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-black z-10">
        <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
        Available
      </div>
    </div>
  );
};

export default AnimatedAvatar;
