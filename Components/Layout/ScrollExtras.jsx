import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";

// Reading-progress bar and back-to-top button
export default function ScrollExtras() {
  const [scroll, setScroll] = useState({ progress: 0, showTop: false });

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll({
        progress: max > 0 ? Math.min(window.scrollY / max, 1) : 0,
        showTop: window.scrollY > 600,
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="print:hidden">
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-accent"
        style={{ transform: `scaleX(${scroll.progress})` }}
      />
      {scroll.showTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-20 rounded-full border border-white/15 bg-surface/95 p-3 text-zinc-200 shadow-lg transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name="arrowUp" />
        </a>
      )}
    </div>
  );
}
