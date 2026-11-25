import React from "react";
import Icon from "../ui/Icon";
import { profile, socials, stats } from "../data/portfolio";
import DevProfile from "../../assets/img/DevProfile.jpeg";

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative scroll-mt-16 lg:scroll-mt-0">
      <div className="container-page pb-16 pt-28 sm:pb-24 lg:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="order-2 md:order-1">
            <p className="flex items-center gap-2 text-sm text-zinc-400">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.status}
            </p>

            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.03] text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg text-zinc-200 sm:text-xl">
              Full-stack developer building <span className="text-accent">real-time, AI-powered</span> web products.
            </p>
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View my work
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <Icon name="mail" className="h-4 w-4" />
                Hire me
              </a>
              <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download className="btn btn-ghost">
                <Icon name="download" className="h-4 w-4" />
                Résumé
              </a>
            </div>

            <ul className="mt-8 flex gap-2">
              {socials.slice(0, 4).map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="block rounded-lg border border-white/10 p-2.5 text-zinc-400 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 mx-auto w-full max-w-[17rem] md:order-2 md:max-w-xs">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={DevProfile}
                  alt={`Portrait of ${profile.name}`}
                  width="640"
                  height="640"
                  className="aspect-square w-full object-cover"
                />
              </div>
              {/* Offset outline frame for an editorial, hand-placed feel */}
              <div aria-hidden="true" className="absolute -bottom-3 -right-3 z-0 h-full w-full rounded-xl border border-accent/40" />
            </div>
          </div>
        </div>

        {/* Stats as one ruled strip rather than four floating cards */}
        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] sm:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="bg-surface p-5">
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
