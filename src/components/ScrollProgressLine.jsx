import { useEffect, useState } from "react";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function ScrollProgressLine({ startAfterId }) {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function updateProgress() {
      const target = document.getElementById(startAfterId);

      if (!target) {
        return;
      }

      const startOffset = target.offsetTop + target.offsetHeight;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const activeRange = Math.max(maxScroll - startOffset, 1);
      const nextProgress = clamp(
        (window.scrollY - startOffset) / activeRange,
        0,
        1,
      );

      setProgress(nextProgress);
      setIsActive(window.scrollY >= startOffset);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [startAfterId]);

  const markerY = 16 + progress * 224;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-3 transition-opacity duration-300 xl:flex ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="origin-center -rotate-90 text-[11px] font-semibold uppercase tracking-[0.35em] text-[rgba(10,34,68,0.4)]">
        Scroll
      </span>

      <svg
        className="overflow-visible"
        fill="none"
        height="256"
        viewBox="0 0 24 256"
        width="24"
      >
        <line
          pathLength="100"
          stroke="rgba(10, 34, 68, 0.18)"
          strokeLinecap="round"
          strokeWidth="2"
          x1="12"
          x2="12"
          y1="16"
          y2="240"
        />
        <line
          pathLength="100"
          stroke="url(#scroll-progress-gradient)"
          strokeDasharray={`${progress * 100} 100`}
          strokeLinecap="round"
          strokeWidth="2.75"
          x1="12"
          x2="12"
          y1="16"
          y2="240"
        />
        <circle
          cx="12"
          cy={markerY}
          fill="#e28b17"
          r="5"
          stroke="#0a2244"
          strokeOpacity="0.24"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            id="scroll-progress-gradient"
            x1="12"
            x2="12"
            y1="16"
            y2="240"
          >
            <stop stopColor="#0057ad" />
            <stop offset="1" stopColor="#e28b17" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
