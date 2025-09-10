"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", hearAbout: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const FORM_ENDPOINT = "https://formspree.io/f/mwpqgnrk";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage("");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatusMessage("Mahalo! Your message has been submitted.");
        setForm({ name: "", email: "", phone: "", hearAbout: "", message: "" });
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch {
      setStatusMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  const dummyReviews = [
    { name: "Lani K.", review: "Amazing irrigation work! Highly recommend Aloha Service HI." },
    { name: "Kai M.", review: "Our yard has never looked better. Excellent cleanup service." },
    { name: "Leilani P.", review: "Professional, punctual, and very thorough. Will use again." },
  ];

  const scrollToContact = () =>
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });

  // Replace these URLs with your Hawaiian images
  const heroImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=crop&w=1200&q=80"; // Hawaiian shore
  const aboutImage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=crop&w=1200&q=80"; // Hawaiian landscape

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-6 bg-gradient-to-r from-green-700 via-teal-500 to-green-600 text-white overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-full h-full opacity-40">
          <Image src={heroImage} alt="Hawaiian shore" fill style={{ objectFit: "cover" }} />
        </motion.div>
        <motion.h1
          className="relative text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Aloha Service HI
        </motion.h1>
        <p className="relative text-xl md:text-2xl font-medium mb-10 text-yellow-100 max-w-3xl mx-auto leading-relaxed">
          Irrigation & Landscape Solutions for Hawaii Island
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="relative rounded-full shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-5 transition-transform transform hover:-translate-y-1 hover:scale-105"
        >
          Get a Free Estimate
        </Button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">Decades of Experience</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            At Aloha Service HI, we specialize in <strong className="text-teal-700">irrigation solutions</strong> and{" "}
            <strong className="text-emerald-700">landscape cleanups</strong> across the west side of the Big Island. With
            decades of experience, our mission is to &quot;keep your outdoor spaces thriving and beautiful,&quot; while
            also offering reliable yard maintenance services tailored to your property.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-green-300">
            <Image
              src={aboutImage}
              alt="Hawaiian landscape"
              width={1200}
              height={800}
              style={{ objectFit: "cover" }}
              className="transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "Irrigation Systems", desc: "Design, installation, and repair to keep landscapes healthy." },
            { title: "Landscape Cleanups", desc: "From overgrown yards to full property cleanups, we handle it all." },
            { title: "Yard Maintenance", desc: "Consistent, reliable upkeep to keep your property looking its best." },
          ].map((service, i) => (
            <motion.div key={i} whileHover={{ scale: 1.08 }}>
              <Card className="rounded-3xl shadow-2xl hover:shadow-3xl transition-transform bg-white border-l-4 border-teal-400">
                <CardContent className="p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-5">{service.title}</h3>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-yellow-100 via-green-50 to-blue-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-green-900">What Our Clients Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {dummyReviews.map((r, i) => (
            <Card
              key={i}
              className="rounded-3xl shadow-2xl bg-white p-10 border-l-4 border-green-400 hover:scale-105 hover:shadow-3xl transition-transform"
            >
              <CardContent>
                <p className="italic text-gray-800 text-lg md:text-xl leading-relaxed">&quot;{r.review}&quot;</p>
                <p className="mt-6 font-semibold text-right text-teal-700">- {r.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-24 px-6 bg-gradient-to-b from-green-50 via-blue-50 to-green-100">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-900">Get in Touch</h2>
        <form className="max-w-2xl mx-auto grid gap-6" onSubmit={handleSubmit}>
          <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="rounded-full px-6 py-4" />
          <Input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="rounded-full px-6 py-4" />
          <Input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="rounded-full px-6 py-4" />
          <Input name="hearAbout" placeholder="How did you hear about us?" value={form.hearAbout} onChange={handleChange} className="rounded-full px-6 py-4" />
          <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="rounded-2xl px-6 py-4" />
          <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full px-10 py-5">
            Send Message
          </Button>
          {statusMessage && <p className="text-center mt-4 text-green-800">{statusMessage}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-green-900 text-white text-center">
        <p>© 2025 Aloha Service HI — Irrigation & Landscape Solutions</p>
      </footer>
    </div>
  );
}