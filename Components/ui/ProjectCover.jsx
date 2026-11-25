import React from "react";
import Icon from "./Icon";

// Cover art drawn in code, in one restrained neutral + accent palette

const ACCENT = "#dca45c";

function Realtime() {
  const line = "M0 96 L40 80 L70 90 L110 52 L150 66 L190 34 L230 48 L270 22 L320 36";
  return (
    <svg viewBox="0 0 320 130" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
      {[30, 60, 90].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="white" strokeOpacity="0.06" />
      ))}
      <path d={`${line} L320 130 L0 130 Z`} fill={ACCENT} fillOpacity="0.08" />
      <path d={line} fill="none" stroke={ACCENT} strokeWidth="2" pathLength="1" className="draw-line" />
    </svg>
  );
}

function Commerce() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 px-6">
      {[0, 1, 2].map((item) => (
        <div key={item} className={`w-16 rounded-lg border border-white/10 bg-white/[0.04] p-2 ${item === 1 ? "-translate-y-2" : "translate-y-1"}`}>
          <div className="h-12 rounded bg-white/[0.06]" />
          <div className="mt-2 h-1 w-full rounded bg-white/15" />
          <div className="mt-1 h-1 w-2/3 rounded bg-white/10" />
        </div>
      ))}
      <span className="absolute right-4 top-4 rounded-md border border-accent/30 p-1.5 text-accent">
        <Icon name="cart" className="h-4 w-4" />
      </span>
    </div>
  );
}

function Fintech() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-52 rounded-lg border border-white/10 bg-white/[0.03] p-4">
        {["w-11/12", "w-2/3", "w-2/5"].map((width, index) => (
          <div key={width} className={index ? "mt-3" : ""}>
            <div className="mb-1 h-1 w-14 rounded bg-white/20" />
            <div className="h-2 rounded-full bg-white/10">
              <div className={`h-full rounded-full bg-accent/70 ${width}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Portals() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2.5 px-5">
      {["Admin", "Panel", "Agent"].map((portal, index) => (
        <div key={portal} className={`w-24 overflow-hidden rounded-md border border-white/10 bg-white/[0.03] ${index === 1 ? "-translate-y-2" : "translate-y-1"}`}>
          <div className="border-b border-white/10 px-2 py-1 font-mono text-[10px] text-accent">{portal}</div>
          <div className="flex gap-1.5 p-2">
            <div className="h-10 w-3.5 rounded bg-white/10" />
            <div className="flex-1 space-y-1.5">
              <div className="h-1 rounded bg-white/20" />
              <div className="h-1 rounded bg-white/10" />
              <div className="h-1 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const arts = { realtime: Realtime, commerce: Commerce, fintech: Fintech, portals: Portals };

export default function ProjectCover({ type }) {
  const Art = arts[type];
  return (
    <div aria-hidden="true" className="relative h-40 overflow-hidden border-b border-white/10 bg-[#121217]">
      <Art />
    </div>
  );
}
