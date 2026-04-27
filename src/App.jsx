import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Star, ShieldCheck, Droplets, Clock, MapPin, CheckCircle2, Send, Sparkles, Camera } from "lucide-react";

export default function JackedLandingPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", address: "", message: "" });

  const phoneNumber = "(202) 759-3580";
  const emailAddress = "jackedspecialtyservices@gmail.com";

  const services = [
    "Power Washing",
    "Pressure Washing",
    "Concrete Cleaning",
    "Walkway & Entryway Cleaning",
    "Residential Exterior Cleaning",
    "Dryer Vent Cleaning",
  ];

  const reviews = [
    {
      name: "Thom V.",
      text: "They did a great job for me. My concrete is like new. Reasonably priced, great service.",
    },
    {
      name: "A M.",
      text: "The team was prompt and efficient. The result looks great. I'd call them for future projects.",
    },
    {
      name: "Anna W.",
      text: "Amazing response time and price. Very professional and highly recommended. Sent me pictures while I was out of town and got the job done within a few days!",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Free Quote Request - Jacked Specialty Services");
    const body = encodeURIComponent(
      `New quote request from the landing page

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Service Needed: ${form.service}
Property Address/Area: ${form.address}
Message: ${form.message}

Reminder: Customer was told they will receive a response within the hour during business hours.`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Jacked Specialty Services logo"
              className="h-12 w-12 rounded-2xl border border-orange-500/30 bg-white object-contain p-1"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div>
              <p className="text-lg font-black tracking-tight">Jacked Specialty Services</p>
              <p className="text-xs uppercase tracking-[0.25em] text-orange-400">Power Washing • Dryer Vent Cleaning</p>
            </div>
          </div>

          <div className="hidden gap-3 md:flex">
            <a href={`mailto:${emailAddress}`} className="rounded-2xl border border-zinc-700 px-5 py-3 text-sm font-bold text-zinc-100 transition hover:border-orange-500 hover:bg-zinc-900">
              Email Us
            </a>
            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`} className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-black shadow-lg shadow-orange-950/40 transition hover:bg-orange-400">
              Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero with immediate CTA and quote form */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.25),transparent_35%),linear-gradient(to_bottom,#18181b,#09090b)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-16">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-200">
              <Sparkles className="h-4 w-4" />
              Free On-Site Quotes + $100 First-Time Customer Voucher
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Get a Fast Quote for <span className="text-orange-400">Power Washing</span> & Dryer Vent Cleaning.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Serving DC, Maryland, and Northern Virginia with professional pressure washing, power washing, concrete cleaning, and dryer vent cleaning.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-black text-black shadow-xl shadow-orange-950/50 transition hover:bg-orange-400">
                <Phone className="h-5 w-5" />
                Call {phoneNumber}
              </a>
              <a href={`mailto:${emailAddress}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-white px-7 py-4 text-base font-black text-black transition hover:bg-zinc-200">
                <Mail className="h-5 w-5" />
                Email for Quote
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["$100 First-Time Voucher", "Free On-Site Quotes", "Response Within the Hour*"].map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-sm font-bold text-zinc-200">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-orange-400" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-500">*During business hours. After-hours requests are answered as soon as possible.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-orange-500/30 bg-zinc-900 p-6 shadow-2xl shadow-black/40">
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Request Your Free Quote</p>
                <h2 className="mt-2 text-3xl font-black">Tell us what needs cleaning.</h2>
                <p className="mt-2 text-sm text-zinc-400">Submit this form and we’ll respond within the hour if the business is open.</p>
              </div>

              <div className="grid gap-4">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone number" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500" />
                </div>
                <select name="service" value={form.service} onChange={handleChange} required className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500">
                  <option value="">Service needed</option>
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
                <input name="address" value={form.address} onChange={handleChange} placeholder="Property address or city" className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500" />
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell us about the job, timeline, and any problem areas..." className="rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-4 text-white outline-none transition focus:border-orange-500" />
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-base font-black text-black shadow-xl shadow-orange-950/50 transition hover:bg-orange-400">
                  <Send className="h-5 w-5" />
                  Send My Quote Request
                </button>
                <p className="text-center text-xs text-zinc-500">Your request opens in your email app so you can send it directly to our company inbox.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Offer/Services */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Our Offer</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Free on-site quotes and $100 off your first service.</h2>
            <p className="mt-5 text-zinc-300">Whether you need concrete cleaned, exterior areas refreshed, or dryer vents serviced, we make it easy to get a professional quote fast.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                <Droplets className="h-8 w-8 text-orange-400" />
                <h3 className="mt-4 text-xl font-black">{service}</h3>
                <p className="mt-2 text-sm text-zinc-400">Professional service, clean results, and a simple quote process.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="bg-zinc-100 px-5 py-16 text-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-600">Before & After</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Real results you can see immediately.</h2>
            <p className="mt-4 text-zinc-600">A cleaner entryway, brighter concrete, and a better first impression for your home or business.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-300 bg-white p-4 shadow-xl shadow-zinc-300/40">
              <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-zinc-500"><Camera className="h-4 w-4" /> Before</div>
              <img src="/before.jpg" alt="Before power washing front steps" className="h-[32rem] w-full rounded-2xl object-cover" />
              <p className="mt-4 font-bold">Stained concrete entryway and walkway</p>
            </div>
            <div className="rounded-3xl border border-orange-300 bg-white p-4 shadow-xl shadow-orange-200/50">
              <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-orange-600"><Camera className="h-4 w-4" /> After</div>
              <img src="/after.jpg" alt="After power washing front steps" className="h-[32rem] w-full rounded-2xl object-cover" />
              <p className="mt-4 font-bold">Cleaner, brighter, and ready to impress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">Yelp Reviews</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Trusted by customers who needed the job done right.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/20">
              <div className="mb-4 flex gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-orange-400" />)}
              </div>
              <p className="text-lg font-semibold text-zinc-100">“{review.text}”</p>
              <p className="mt-5 font-black text-orange-300">{review.name}</p>
              <p className="text-sm text-zinc-500">Yelp customer review</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-500 px-5 py-12 text-black">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Ready for your free on-site quote?</h2>
            <p className="mt-2 font-semibold">Call, email, or submit the form above. First-time customers can receive $100 off qualifying services.</p>
          </div>
          <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-7 py-4 text-base font-black text-white transition hover:bg-zinc-800">
            <Phone className="h-5 w-5" />
            Call {phoneNumber}
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Jacked Specialty Services. All rights reserved.</p>
          <p>DC • Maryland • Northern Virginia</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 py-4 text-sm font-black text-black shadow-2xl shadow-black/50">
          <Phone className="h-5 w-5" /> Call
        </a>
        <a href={`mailto:${emailAddress}`} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-4 text-sm font-black text-black shadow-2xl shadow-black/50">
          <Mail className="h-5 w-5" /> Email
        </a>
      </div>
    </div>
  );
}
