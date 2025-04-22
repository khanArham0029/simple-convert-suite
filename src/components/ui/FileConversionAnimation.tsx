import React, { useEffect, useRef } from "react";
import { Upload, ArrowRight, Download } from "lucide-react";

const icons = [
  { Component: Upload, color: "#8B5CF6" },
  { Component: ArrowRight, color: "#0EA5E9" },
  { Component: Download, color: "#F97316" },
];

const ANIMATION_COUNT = 7;

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const AnimatedIcon: React.FC<{
  iconIdx: number;
  idx: number;
}> = ({ iconIdx, idx }) => {
  const Icon = icons[iconIdx].Component;
  const color = icons[iconIdx].color;
  const top = `${random(10, 85)}%`;
  const duration = random(8, 16);
  const size = random(38, 64);
  const delay = random(0, 8);

  return (
    <span
      className="pointer-events-none absolute opacity-50"
      style={{
        top,
        left: "-60px",
        animation: `file-move-right ${duration}s linear ${delay}s infinite`,
        zIndex: 0,
      }}
    >
      <Icon size={size} color={color} strokeWidth={2.2} className="drop-shadow-md" />
    </span>
  );
};

const FileConversionAnimation: React.FC = () => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    if (styleRef.current) return;
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes file-move-right {
        0% { transform: translateX(0) scale(0.95) rotate(-4deg); opacity: 0.2; }
        5% { opacity: 0.42; }
        10% { opacity: 0.9; }
        90% { opacity: 0.9; }
        100% { transform: translateX(110vw) scale(1.05) rotate(6deg); opacity: 0.15; }
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => {
      if (styleRef.current) document.head.removeChild(styleRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {Array.from({ length: ANIMATION_COUNT }).map((_, i) => (
        <AnimatedIcon
          key={i}
          iconIdx={i % icons.length}
          idx={i}
        />
      ))}
    </div>
  );
};

export default FileConversionAnimation;
