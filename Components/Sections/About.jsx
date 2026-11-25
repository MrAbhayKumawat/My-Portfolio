import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { highlights, profile } from "../data/portfolio";

const glance = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Based in", value: "Ujjain, India · Remote" },
  { label: "Focus", value: "AI-powered apps" },
  { label: "Core stack", value: "MERN · Next.js · TypeScript" },
  { label: "Open to", value: "Full-stack & AI roles" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Building software that stays in sync">
      <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="min-w-0 space-y-4 leading-7 text-zinc-400">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <dl className="card divide-y divide-white/5">
            {glance.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 px-5 py-3.5">
                <dt className="text-xs uppercase tracking-wider text-zinc-500">{row.label}</dt>
                <dd className="text-right text-sm font-medium text-zinc-200">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 80} className="h-full">
              <div className="card card-hover h-full p-5">
                <span className="inline-flex rounded-lg border border-white/10 p-2.5 text-accent">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
