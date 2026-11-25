import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & training">
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((item, index) => (
          <li key={item.degree}>
            <Reveal delay={index * 100} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-white/10 p-2.5 text-accent">
                    <Icon name="cap" />
                  </span>
                  <p className="font-mono text-xs text-zinc-500">{item.period}</p>
                </div>
                <h3 className="mt-5 font-display text-lg text-white">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-zinc-300">{item.school}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="link mt-auto pt-5">
                  {item.linkLabel}
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
