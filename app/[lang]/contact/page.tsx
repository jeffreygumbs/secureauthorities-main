"use client";

import { useState, use } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default function Contact({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-black font-bold">
              {dict.contact.title}
            </h1>
            <p className="text-xl text-black/60 mb-12 leading-relaxed">
              {dict.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.email}</h3>
                  <p className="text-black/60">support@secureauthorities.com</p>
                  <p className="text-black/60">sales@secureauthorities.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.phone}</h3>
                  <p className="text-black/60">+1 (555) 123-4567</p>
                  <p className="text-black/60">+44 20 7946 0000</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.office}</h3>
                  <p className="text-black/60">London • New York • Singapore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-[#1e4f8a]/10 to-[#4b8ebe]/10 rounded-[40px] blur-2xl -z-10" />
            <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-[32px] p-8 md:p-12 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">{dict.contact.form.success}</h2>
                  <p className="text-black/60 mb-8">
                    {dict.contact.form.success}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 bg-[#1e4f8a] text-white rounded-full font-medium hover:bg-[#4b8ebe] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.firstName}</label>
                      <input
                        required
                        type="text"
                        id="firstName"
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.lastName}</label>
                      <input
                        required
                        type="text"
                        id="lastName"
                        className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.email}</label>
                    <input
                      required
                      type="email"
                      id="email"
                      className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.subject}</label>
                    <select
                      id="subject"
                      className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all appearance-none"
                    >
                      <option>Product Inquiry</option>
                      <option>General Support</option>
                      <option>Security Consultation</option>
                      <option>Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.message}</label>
                    <textarea
                      required
                      id="message"
                      rows={4}
                      className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-full font-bold hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    {dict.contact.form.send}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
