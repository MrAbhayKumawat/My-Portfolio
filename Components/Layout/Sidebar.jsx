import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import useActiveSection from "./useActiveSection";
import { navItems, profile, socials } from "../data/portfolio";
import DevProfile from "../../assets/img/DevProfile.jpeg";

const sectionIds = navItems.map((item) => item.id);

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // and close if the window grows to the desktop layout
  useEffect(() => {
    if (!open) return undefined;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    const onKey = (event) => event.key === "Escape" && close();

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-ink/80 px-4 backdrop-blur-md lg:hidden print:hidden">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 font-display text-sm font-semibold text-accent">
            AK
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-white">{profile.name}</span>
            <span className="text-[11px] text-accent">{profile.title}</span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="sidebar"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-200 transition-colors hover:bg-white/10 hover:text-accent"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 top-16 z-30 bg-black/60 lg:hidden" onClick={() => setOpen(false)} />
      )}

      <aside
        id="sidebar"
        className={`fixed bottom-0 left-0 top-16 z-40 flex w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-white/10 bg-surface p-5 transition-all duration-300 lg:visible lg:top-0 lg:w-64 lg:translate-x-0 print:hidden ${
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <a href="#home" onClick={() => setOpen(false)} className="hidden items-center gap-3 lg:flex">
          <img src={DevProfile} alt="" width="48" height="48" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/50" />
          <span>
            <span className="block font-bold text-white">{profile.name}</span>
            <span className="block text-xs text-zinc-400">{profile.title}</span>
          </span>
        </a>

        <nav aria-label="Main" className="lg:mt-8">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "bg-accent/10 font-semibold text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon name={item.icon} className={`h-[18px] w-[18px] ${isActive ? "text-accent" : ""}`} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto pt-6">
          <a href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download className="btn btn-primary w-full">
            <Icon name="download" className="h-4 w-4" />
            Download Résumé
          </a>
          <ul className="mt-4 flex justify-between">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="block rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-accent"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
