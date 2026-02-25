"use client";
import { useState } from "react";

const contactInfo = [
  {
    label: "Phone / WhatsApp",
    value: "+234 915 075 4870",
    sub: "WhatsApp Only",
  },
  { label: "Email", value: "sadeeqs@gmail.com", sub: "Usually replies within 24h" },
  { label: "Location", value: "Nigeria", sub: "Working Globally" },
  { label: "Status", value: "Available for Hire", sub: "Freelance & Full-time" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xkgjoenr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 border-b border-dark-70">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="font-display font-800 text-5xl sm:text-6xl mb-6">
            Contact
          </h1>
          <p className="text-dark-30 max-w-xl text-base leading-relaxed">
            Have a project in mind or want to discuss an opportunity? Send me a
            message and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Info boxes */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="card-glow border border-dark-70 bg-dark-85 p-6"
                >
                  <p className="text-xs font-display tracking-widest uppercase text-dark-40 mb-2">
                    {info.label}
                  </p>
                  <p className="font-display font-600 text-white mb-1">
                    {info.value}
                  </p>
                  <p className="text-xs text-dark-30">{info.sub}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-dark-70 pt-10">
              <p className="text-xs font-display tracking-widest uppercase text-dark-40 mb-5">
                Social
              </p>
              <div className="flex gap-4">
                {[
                  { label: "Twitter / X", href: "https://x.com/svdeeq021/" },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/sadiqshehu/",
                  },
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/svdeeq21/",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-display tracking-widest uppercase text-dark-40 border border-dark-60 px-4 py-2 hover:border-orange hover:text-orange transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-orange bg-dark-85 p-10 text-center">
                <div className="text-orange text-4xl mb-4">✓</div>
                <h3 className="font-display font-700 text-xl mb-2">
                  Message Sent
                </h3>
                <p className="text-dark-30 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase text-dark-40 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      autoComplete="off"
                      className="w-full bg-dark-85 border border-dark-70 focus:border-orange outline-none px-4 py-3 text-sm text-white placeholder-dark-50 font-body transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-display tracking-widest uppercase text-dark-40 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      autoComplete="off"
                      className="w-full bg-dark-85 border border-dark-70 focus:border-orange outline-none px-4 py-3 text-sm text-white placeholder-dark-50 font-body transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display tracking-widest uppercase text-dark-40 mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="What is this about?"
                    autoComplete="off"
                    className="w-full bg-dark-85 border border-dark-70 focus:border-orange outline-none px-4 py-3 text-sm text-white placeholder-dark-50 font-body transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-display tracking-widest uppercase text-dark-40 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Describe your project or opportunity..."
                    rows={6}
                    className="w-full bg-dark-85 border border-dark-70 focus:border-orange outline-none px-4 py-3 text-sm text-white placeholder-dark-50 font-body transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-orange text-white text-xs font-display tracking-widest uppercase hover:bg-orange-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
