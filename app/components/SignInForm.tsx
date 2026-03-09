"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import { getDictionary } from "../../get-dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function SignInForm({ dict, lang }: { dict: Dictionary; lang: string }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in attempted with:", { email, password });
  };

  return (
    <div className="backdrop-blur-2xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl p-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl mb-3 tracking-tight text-black font-bold">{dict.navigation.signIn}</h1>
        <p className="text-black/60">{dict.auth.demoNotice}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-black/80">
            {dict.contact.form.email}
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={dict.contact.form.placeholders.email}
              className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4f8a] transition-all text-black placeholder:text-black/40"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm mb-2 text-black/80">
            {dict.contact.form.password}
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e4f8a] transition-all text-black placeholder:text-black/40"
              required
            />
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-black/20 text-[#1e4f8a]"
            />
            <span className="text-black/70">{dict.auth.rememberMe}</span>
          </label>
          <Link href="#" className="text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors font-medium">
            {dict.auth.forgotPassword}
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all text-sm"
        >
          {dict.navigation.signIn}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-black/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white/60 text-black/50">{dict.auth.orContinueWith}</span>
        </div>
      </div>

      {/* Social */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button className="py-3 backdrop-blur-xl bg-white/40 border border-white/60 rounded-xl hover:bg-white/60 transition-all text-sm text-black">
          {dict.auth.google}
        </button>
        <button className="py-3 backdrop-blur-xl bg-white/40 border border-white/60 rounded-xl hover:bg-white/60 transition-all text-sm text-black">
          {dict.auth.microsoft}
        </button>
      </div>

      {/* Sign Up */}
      <p className="text-center text-sm text-black/60">
        {dict.auth.noAccount}{" "}
        <Link href={`/${lang}/signup`} className="text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors font-bold">
          {dict.navigation.signUp}
        </Link>
      </p>

      <p className="text-center mt-8 text-xs text-black/40">
        {dict.auth.demoNotice}
      </p>
    </div>
  );
}
