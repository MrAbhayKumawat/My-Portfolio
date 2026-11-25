import React, { useEffect, useState } from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { profile, socials } from "../data/portfolio";

const ENDPOINT = "https://my-portfolio-39fc5-default-rtdb.firebaseio.com/My-Portfolio.json";
const emptyForm = { name: "", email: "", message: "" };

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the address stays visible to copy by hand
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      title="Copy email address"
      className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:border-accent/50 hover:text-accent"
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
      <span className="sr-only" role="status">{copied ? "Email copied" : ""}</span>
    </button>
  );
}

function ContactDetail({ icon, label, value, href, action }) {
  return (
    <li className="card flex items-center gap-4 p-4">
      <span className="rounded-lg border border-white/10 p-2.5 text-accent">
        <Icon name={icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-zinc-500">{label}</span>
        {href ? (
          <a href={href} className="block text-sm text-zinc-100 [overflow-wrap:anywhere] hover:text-accent">{value}</a>
        ) : (
          <span className="block text-sm text-zinc-100">{value}</span>
        )}
      </span>
      {action}
    </li>
  );
}

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status !== "sending") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Hidden field that only bots fill in
    if (trap) {
      setForm(emptyForm);
      setStatus("success");
      return;
    }

    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setForm(emptyForm);
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error.message);
      setStatus("error");
    } finally {
      clearTimeout(timeout);
    }
  };

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${form.name}`
  )}&body=${encodeURIComponent(form.message)}`;

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-5 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-zinc-300">
          Name
          <input className="input mt-1.5" type="text" name="name" autoComplete="name" maxLength={100} pattern=".*\S.*" required value={form.name} onChange={handleChange} placeholder="Your name" />
        </label>
        <label className="block text-sm text-zinc-300">
          Email
          <input className="input mt-1.5" type="email" name="email" autoComplete="email" maxLength={150} required value={form.email} onChange={handleChange} placeholder="you@example.com" />
        </label>
      </div>
      <label className="block text-sm text-zinc-300">
        Message
        <textarea className="input mt-1.5 min-h-[9rem] resize-y" name="message" maxLength={3000} required value={form.message} onChange={handleChange} placeholder="Tell me about the role or project" />
      </label>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(event) => setTrap(event.target.value)} />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-60">
        <Icon name="send" className="h-4 w-4" />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-200">
            Thank you for reaching out. I&apos;ll get in touch with you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">
            Your message couldn&apos;t be sent.{" "}
            <a href={mailto} className="font-semibold underline">Email it to me directly</a> instead.
          </p>
        )}
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Have a role or a project in mind? Send a message or reach me directly."
    >
      <div className="grid items-start gap-6 xl:grid-cols-[1fr_1.4fr]">
        <Reveal className="min-w-0">
          <ul className="space-y-3">
            <ContactDetail icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} action={<CopyEmail />} />
            <ContactDetail icon="phone" label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/-/g, "")}`} />
            <ContactDetail icon="pin" label="Location" value={profile.location} />
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:border-accent/50 hover:text-accent"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="min-w-0">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
