import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, Droplets, Home, Building2, Clock, MapPin, CheckCircle2, Sparkles, Send } from "lucide-react";

export default function JackedLandingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

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

  const trustPoints = [
    "5-Star Rated on Yelp",
    "Local DMV Service Area",
    "Free Quotes",
    "Residential & Commercial",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Quote Request - Jacked Specialty Services");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService Needed: ${form.service}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 border-b border-red-900/40 bg-neutral-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-700 shadow-lg shadow-red-900/40">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">Jacked Specialty Services</p>
              <p className="text-xs uppercase tracking-[0.3em] text-red-400">Power Washing • Pressure Washing • DMV</p>
            </div>
          </div>

          <a
            href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
            className="hidden rounded-2xl bg-red-700 px-5 py-3 text-sm font-bold shadow-lg shadow-red-950/40 transition hover:bg-red-600 md:inline-flex"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,28,28,0.35),transparent_35%),linear-gradient(to_bottom,rgba(23,23,23,0),rgba(10,10,10,1))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-800/60 bg-red-950/40 px-4 py-2 text-sm font-semibold text-red-200">
              <Sparkles className="h-4 w-4" />
              5-Star Rated Local Exterior Cleaning
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Make Your Property Look <span className="text-red-500">Fresh, Clean & Jacked.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              Professional power washing, pressure washing, and dryer vent cleaning for homes and businesses across the DMV. Get a free on-site quote, clear pricing, and serious curb appeal without the hassle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-7 py-4 text-base font-black shadow-xl shadow-red-950/50 transition hover:bg-red-600"
              >
                <Phone className="h-5 w-5" />
                Call For Free Quote
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-900 px-7 py-4 text-base font-bold transition hover:border-red-700 hover:bg-neutral-800"
              >
                Get Online Quote
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-3 text-sm font-semibold text-neutral-200">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-red-500" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-red-900/50 bg-neutral-900 p-4 shadow-2xl shadow-red-950/30">
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-neutral-800 to-neutral-950 p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-red-400">Limited Starter Offer</p>
                  <h2 className="mt-3 text-3xl font-black">Free On-Site Quotes + $100 Off First-Time Customers</h2>
                  <p className="mt-3 text-neutral-300">Book your first service with Jacked Specialty Services and get $100 off as a first-time customer. We provide free on-site quotes for power washing, pressure washing, and dryer vent cleaning.</p>
                  <p className="mt-4 text-xs text-neutral-500">Offer applies to qualifying first-time customer jobs. Final pricing depends on size, condition, location, and access.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5">
                    <Star className="h-7 w-7 fill-red-500 text-red-500" />
                    <p className="mt-3 text-2xl font-black">5.0</p>
                    <p className="text-sm text-neutral-400">Yelp rating</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-neutral-800 bg-neutral-950 p-5">
                    <Clock className="h-7 w-7 text-red-500" />
                    <p className="mt-3 text-2xl font-black">Fast</p>
                    <p className="text-sm text-neutral-400">Quote response</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Services</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Exterior cleaning that makes your property stand out.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={service} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg shadow-black/20">
              {index % 2 === 0 ? <Home className="h-8 w-8 text-red-500" /> : <Building2 className="h-8 w-8 text-red-500" />}
              <h3 className="mt-4 text-xl font-black">{service}</h3>
              <p className="mt-3 text-neutral-400">Clean results, professional service, and a simple quote process from start to finish.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before After Placeholder */}
      <section className="bg-neutral-900/70 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Results</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Show customers the difference before they call.</h2>
            <p className="mt-4 text-neutral-300">Replace these boxes with your real before-and-after photos. This section is huge for Google Ads conversions.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-5">
              <img src="/before.jpg" alt="Before power washing front steps" className="h-72 w-full rounded-2xl object-cover" />
              <p className="mt-4 font-bold">Before: stained concrete entryway and walkway</p>
            </div>
            <div className="rounded-3xl border border-red-900/60 bg-neutral-950 p-5">
              <img src="/after.jpg" alt="After power washing front steps" className="h-72 w-full rounded-2xl object-cover" />
              <p className="mt-4 font-bold">After: cleaner, brighter, and ready to impress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">Reviews</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Your Yelp reviews should work for you here.</h2>
            <p className="mt-5 text-neutral-300">Add your real Yelp review quotes here. Keep them short, strong, and focused on trust: fast response, great results, fair pricing, and professionalism.</p>
          </div>

          <div className="grid gap-4">
            {[
              "They did a great job for me. My concrete is like new. Reasonably priced, great service. — Thom V.",
              "The team was prompt and efficient. The result looks great. I'd call them for future projects. — A M.",
              "Amazing response time and price. Very professional and highly recommended. Sent me pictures while I was out of town and got the job done within a few days! — Anna W."
            ].map((review) => (
              <div key={review} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="mb-3 flex gap-1 text-red-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-red-500" />)}
                </div>
                <p className="text-lg font-semibold text-neutral-200">“{review}”</p>
                <p className="mt-3 text-sm text-neutral-500">Verified customer review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-gradient-to-b from-neutral-950 to-red-950/40 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">Free Quote</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Ready to clean it up?</h2>
            <p className="mt-5 text-neutral-300">Call now or send a quick request. For best results, include the service needed, property location, and a few photos if possible.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                <Phone className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-sm text-neutral-500">Call/Text</p>
                  <p className="font-black">{phoneNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                <MapPin className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-sm text-neutral-500">Service Area</p>
                  <p className="font-black">DC • Maryland • Northern Virginia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-4">
                <ShieldCheck className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-sm text-neutral-500">Best For</p>
                  <p className="font-black">Homes, driveways, patios, walkways, and small commercial jobs</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-neutral-800 bg-neutral-900 p-6 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-red-600"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone number"
                className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-red-600"
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-red-600"
              >
                <option value="">What do you need cleaned?</option>
                {services.map((service) => <option key={service} value={service}>{service}</option>)}
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about the job, location, and timeline..."
                className="rounded-2xl border border-neutral-700 bg-neutral-950 px-4 py-4 text-white outline-none transition focus:border-red-600"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-7 py-4 text-base font-black shadow-xl shadow-red-950/50 transition hover:bg-red-600">
                <Send className="h-5 w-5" />
                Request My Free Quote
              </button>
              <p className="text-center text-xs text-neutral-500">No pressure. Just a fast quote and clean results.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Jacked Specialty Services. All rights reserved.</p>
          <p>Power Washing • Pressure Washing • Dryer Vent Cleaning • DMV Area</p>
        </div>
      </footer>

      {/* Mobile Call Button */}
      <a
        href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
        className="fixed bottom-5 left-5 right-5 z-50 inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-7 py-4 text-base font-black shadow-2xl shadow-red-950/60 md:hidden"
      >
        <Phone className="h-5 w-5" />
        Tap to Call for Free Quote
      </a>
    </div>
  );
}
