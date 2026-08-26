"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { waLink, waMessages } from "@/lib/site";
import { Eyebrow, Reveal } from "../ui";
import { ArrowRight, CheckIcon, WhatsAppIcon } from "../icons";

const occasions = [
  "Casual visit",
  "Date night",
  "Birthday",
  "Anniversary",
  "Business",
  "Celebration",
];

function Field({
  label,
  children,
  htmlFor,
}: {
  label: string;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-espresso/60">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-espresso/15 bg-cream-50 px-5 py-3.5 text-base text-espresso outline-none transition-all placeholder:text-espresso/35 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: occasions[0],
    request: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reservationMessage = `Hello Pin & Pan Cafe, I'd like to reserve a table.\nName: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nOccasion: ${form.occasion}\nSpecial request: ${form.request}`;

  return (
    <section id="reserve" className="bg-espresso px-5 py-20 text-cream-50 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow className="text-cream-50/60">Book your spot</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-7xl">
              SAVE <span className="text-terracotta">YOUR</span> TABLE
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-50/70">
              Tell us when you're coming and we'll hold you a seat. We'll confirm availability —
              no instant bookings, just a real human getting back to you.
            </p>
            <div className="mt-8 hidden items-center gap-4 lg:flex">
              <img src="/images/friends-2.jpg" alt="Guests enjoying the café" className="h-20 w-20 rounded-full object-cover ring-2 ring-terracotta" />
              <div>
                <p className="text-sm font-medium text-cream-50">Prefer to chat?</p>
                <a
                  href={waLink(waMessages.reservation)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-butter hover:text-cream-50"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Message us on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-[32px] bg-cream-50 p-6 text-espresso shadow-card sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-500 text-espresso"
                    >
                      <CheckIcon className="h-9 w-9" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-bold">Request received!</h3>
                    <p className="mt-3 max-w-sm text-sm text-espresso/70">
                      Thanks! Your reservation request has been received. The café team will
                      contact you to confirm availability.
                    </p>
                    <a
                      href={waLink(reservationMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-500 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-espresso transition-transform hover:scale-[1.02]"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Also send on WhatsApp
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-xs font-medium text-espresso/50 underline"
                    >
                      Make another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" htmlFor="r-name">
                        <input id="r-name" required value={form.name} onChange={update("name")} placeholder="Your name" className={inputClass} />
                      </Field>
                      <Field label="Phone number" htmlFor="r-phone">
                        <input id="r-phone" type="tel" required value={form.phone} onChange={update("phone")} placeholder="+91" className={inputClass} />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Date" htmlFor="r-date">
                        <input id="r-date" type="date" required value={form.date} onChange={update("date")} className={inputClass} />
                      </Field>
                      <Field label="Time" htmlFor="r-time">
                        <input id="r-time" type="time" required value={form.time} onChange={update("time")} className={inputClass} />
                      </Field>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Number of guests" htmlFor="r-guests">
                        <select id="r-guests" value={form.guests} onChange={update("guests")} className={inputClass}>
                          {["2", "3", "4", "5", "6", "7", "8", "9+"].map((g) => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label="Occasion" htmlFor="r-occasion">
                        <select id="r-occasion" value={form.occasion} onChange={update("occasion")} className={inputClass}>
                          {occasions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <Field label="Special request" htmlFor="r-request">
                      <textarea
                        id="r-request"
                        rows={3}
                        value={form.request}
                        onChange={update("request")}
                        placeholder="Window seat, celebration, dietary needs…"
                        className={inputClass}
                      />
                    </Field>
                    <button
                      type="submit"
                      className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-espresso px-6 py-4 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-all hover:bg-espresso-800"
                    >
                      Request a table
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[11px] text-espresso/40">
                      We'll confirm availability by phone. No payment is taken here.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
