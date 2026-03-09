"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { getDictionary } from "../../get-dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
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
          {dict.contact.form.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.firstName}</label>
          <input
            required
            type="text"
            id="firstName"
            className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all"
            placeholder={dict.contact.form.placeholders.firstName}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.lastName}</label>
          <input
            required
            type="text"
            id="lastName"
            className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all"
            placeholder={dict.contact.form.placeholders.lastName}
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
          placeholder={dict.contact.form.placeholders.email}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.subject}</label>
        <select
          id="subject"
          className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all appearance-none"
        >
          <option>{dict.contact.form.subjects.product}</option>
          <option>{dict.contact.form.subjects.support}</option>
          <option>{dict.contact.form.subjects.security}</option>
          <option>{dict.contact.form.subjects.partnership}</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-black/60 ml-1">{dict.contact.form.message}</label>
        <textarea
          required
          id="message"
          rows={4}
          className="w-full px-6 py-4 bg-white border border-black/5 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all resize-none"
          placeholder={dict.contact.form.placeholders.message}
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
  );
}
