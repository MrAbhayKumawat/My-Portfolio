import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { skillGroups } from "../data/portfolio";

function Skill({ name, icon, invert }) {
  return (
    <li className="flex items-center gap-2 rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-white">
      {icon ? (
        <img
          src={icon}
          alt=""
          width="18"
          height="18"
          loading="lazy"
          className={`h-[18px] w-[18px] object-contain ${invert ? "invert" : ""}`}
          // If the icon CDN is unreachable, the name still reads fine on its own
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      )}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech I work with">
      <div className="grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group) => (
          // Larger groups span the full row
          <Reveal key={group.title} className={group.wide ? "xl:col-span-2" : ""}>
            <div className="card h-full p-5 sm:p-6">
              <h3 className="flex items-center gap-3 font-display text-lg text-white">
                <span className="rounded-lg border border-white/10 p-2 text-accent">
                  <Icon name={group.icon} />
                </span>
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <Skill key={skill.name} {...skill} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
