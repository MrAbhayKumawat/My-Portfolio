import React from "react";
import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-16 border-t border-white/5 py-16 sm:py-24 lg:scroll-mt-0"
    >
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-3 max-w-2xl leading-7 text-zinc-400">{description}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
