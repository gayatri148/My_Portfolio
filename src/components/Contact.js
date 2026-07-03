"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  return (
    <section id="contact" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-ink shadow-glow">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left: invitation */}
            <div className="bg-mesh relative p-7 sm:p-12">
              <div className="grid-overlay absolute inset-0 opacity-50" />
              <div className="relative">
                <span className="kicker text-xs font-semibold text-teal">
                  Contact
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  Let&apos;s build something
                  <span className="text-gradient"> remarkable.</span>
                </h2>
                <p className="mt-4 max-w-sm text-slatey">
                  Have a role, a project, or just an idea worth chasing? My inbox
                  is always open.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 rounded-2xl bg-white/60 p-3.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-white"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal to-azure text-white">
                      <Mail size={18} />
                    </span>
                    {profile.email}
                  </a>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/40 p-3.5 text-sm font-medium text-ink backdrop-blur">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/70 text-teal">
                      <MapPin size={18} />
                    </span>
                    {profile.location}
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  <SocialBtn href={profile.socials.github} label="GitHub">
                    <Github size={18} />
                  </SocialBtn>
                  <SocialBtn href={profile.socials.linkedin} label="LinkedIn">
                    <Linkedin size={18} />
                  </SocialBtn>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="p-7 sm:p-12">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-teal/20 text-teal">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-sky/80">
                    Thanks for reaching out - I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    label="Name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    required
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-sky/80">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell me about it…"
                      required
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-azure"
                    />
                  </div>

                  {status === "error" && (
                    <p className="flex items-center gap-2 text-sm text-red-300">
                      <AlertCircle size={15} /> {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal to-azure px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-sky/80">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-azure"
      />
    </div>
  );
}

function SocialBtn({ href, label, children }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-11 w-11 place-items-center rounded-xl bg-white/60 text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
    >
      {children}
    </a>
  );
}
