import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-10">
        {experiences.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[30px] top-7 h-3 w-3 rounded-full border-2 border-ink sm:-left-[46px] ${
                job.current ? "bg-accent" : "bg-zinc-600"
              }`}
            />
            <Reveal>
              <article className="card card-hover p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl text-white">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-300">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                          {job.company}
                          <Icon name="external" className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        job.company
                      )}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                      <Icon name="pin" className="h-3.5 w-3.5" />
                      {job.location}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-zinc-500">{job.period}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point.label} className="flex gap-3 text-sm leading-6 text-zinc-400">
                      <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>
                        <strong className="font-semibold text-zinc-200">{point.label}.</strong> {point.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                  {job.tech.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
