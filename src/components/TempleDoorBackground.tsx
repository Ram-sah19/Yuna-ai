
import React from "react";

/**
 * TempleDoorBackground overlays two "doors" over a background image.
 * Doors can be controlled by providing `doorsOpen` prop.
 */
const TempleDoorBackground: React.FC<{
  imageUrl: string;
  doorsOpen: boolean;
}> = ({ imageUrl, doorsOpen }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden z-0 group"
      tabIndex={-1}
      aria-label="Animated Temple Door Background"
      style={{ transition: "none" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          transition: "none",
        }}
        aria-hidden="true"
      />
      {/* Glow overlay, appears only when open */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 transition-opacity duration-700 ${
          doorsOpen ? "opacity-60" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at 50% 60%, #f5d88b 70%, #f97316 10%, transparent 90%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Door overlays */}
      <div
        className="absolute inset-0 w-full h-full flex z-30 pointer-events-none"
        aria-hidden="true"
      >
        {/* Left Door */}
        <div
          className={`relative h-full w-1/2 transition-transform duration-700 ease-in-out ${
            doorsOpen
              ? "-translate-x-[120%] blur-sm scale-y-105"
              : "translate-x-0"
          }`}
        >
          <div className="absolute left-0 top-0 h-full w-full bg-[#45274d] bg-gradient-to-r from-[#1a1f2c] via-[#45274d] to-[#7d4e39] border-r-4 border-[#d6bcfa] shadow-[8px_0_32px_-8px_#1a1f2c88]">
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-6 rounded-full bg-[#d6bcfa] shadow-inner border-2 border-[#d6bcfa]/70" />
            <div className="absolute bottom-7 left-1 w-full h-2 rounded bg-[#f97316]/60 blur-[2px]" />
          </div>
        </div>
        {/* Right Door */}
        <div
          className={`relative h-full w-1/2 transition-transform duration-700 ease-in-out ${
            doorsOpen
              ? "translate-x-[120%] blur-sm scale-y-105"
              : "translate-x-0"
          }`}
        >
          <div className="absolute right-0 top-0 h-full w-full bg-[#45274d] bg-gradient-to-l from-[#1a1f2c] via-[#45274d] to-[#7d4e39] border-l-4 border-[#d6bcfa] shadow-[-8px_0_32px_-8px_#1a1f2c88]">
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-6 h-6 rounded-full bg-[#d6bcfa] shadow-inner border-2 border-[#d6bcfa]/70" />
            <div className="absolute bottom-7 right-1 w-full h-2 rounded bg-[#f97316]/60 blur-[2px]" />
          </div>
        </div>
      </div>
      <span className="sr-only">
        Temple doors open to reveal background on hover or focus.
      </span>
    </div>
  );
};

export default TempleDoorBackground;
