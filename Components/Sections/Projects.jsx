import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import ProjectCover from "../ui/ProjectCover";
import { featuredProjects, sideProjects } from "../data/portfolio";

function FeaturedCard({ project }) {
  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <ProjectCover type={project.cover} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-accent">
          {[project.role, project.period].filter(Boolean).join("  ·  ")}
        </p>
        <h3 className="mt-2 font-display text-xl text-white">{project.title}</h3>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-5">
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item} className="chip">{item}</li>
            ))}
          </ul>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="link mt-4">
              Visit live site
              <span className="sr-only">: {project.title}</span>
              <Icon name="external" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Real-time platforms, finance portals and commerce — plus side projects you can try."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <li key={project.title}>
            <Reveal delay={(index % 2) * 100} className="h-full">
              <FeaturedCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-display text-xl text-white">Side projects</h3>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {sideProjects.map((project, index) => (
          <li key={project.title}>
            <Reveal delay={index * 80} className="h-full">
              <a href={project.link} target="_blank" rel="noreferrer" className="card card-hover group flex h-full flex-col p-5">
                <span className="flex items-center justify-between">
                  <span className="rounded-lg border border-white/10 p-2.5 text-accent">
                    <Icon name={project.icon} />
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-accent">
                    Live demo
                    <Icon name="external" className="h-3.5 w-3.5" />
                  </span>
                </span>
                <span className="mt-4 font-semibold text-white">{project.title}</span>
                <span className="mt-2 text-sm text-zinc-400">{project.tech.join(" · ")}</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
