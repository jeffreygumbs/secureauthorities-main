"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default function SignUp({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempted with:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f7] to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-[#1e4f8a]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-[#4b8ebe]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative w-full max-w-md mx-auto px-8 pt-20">
        <div className="backdrop-blur-2xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <h1 className="text-5xl mb-3 tracking-tight text-black font-bold">{dict.navigation.signUp}</h1>
            <p className="text-black/60">{dict.contact.info.email}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-black/80 font-medium">
                {dict.contact.form.firstName} {dict.contact.form.lastName}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all text-black placeholder:text-black/40"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-black/80 font-medium">
                {dict.contact.form.email}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/30" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all text-black placeholder:text-black/40"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm mb-2 text-black/80 font-medium">
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
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/50 border border-white/60 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1e4f8a]/20 transition-all text-black placeholder:text-black/40"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div className="text-xs text-black/60 leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link href={`/${lang}/legal/terms`} className="text-[#1e4f8a] hover:underline">Terms of Service</Link> and{" "}
              <Link href={`/${lang}/legal/privacy-policy`} className="text-[#1e4f8a] hover:underline">Privacy Policy</Link>.
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all text-sm font-bold flex items-center justify-center gap-2"
            >
              {dict.navigation.signUp}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/60 text-black/50">Or sign up with</span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="py-3 backdrop-blur-xl bg-white/40 border border-white/60 rounded-xl hover:bg-white/60 transition-all text-sm text-black font-medium">
              Google
            </button>
            <button className="py-3 backdrop-blur-xl bg-white/40 border border-white/60 rounded-xl hover:bg-white/60 transition-all text-sm text-black font-medium">
              Microsoft
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-black/60">
            Already have an account?{" "}
            <Link href={`/${lang}/signin`} className="text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors font-bold">
              {dict.navigation.signIn}
            </Link>
          </p>

          <p className="text-center mt-8 text-xs text-black/40">
            Demo page - No registration performed
          </p>
        </div>
      </div>
    </div>
  );
}
