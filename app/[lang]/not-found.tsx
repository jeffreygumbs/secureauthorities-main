"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

import { use } from "react";
import { getDictionary } from "../../get-dictionary";
import { type Locale } from "../../i18n-config";

export default function NotFound({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = use(params);
  const dict = use(getDictionary(lang));

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f7] to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-[#1e4f8a]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-[#4b8ebe]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative text-center px-8">
        <div className="backdrop-blur-2xl bg-white/60 border border-white/80 rounded-3xl shadow-2xl p-16 max-w-2xl mx-auto">
          <div className="text-9xl mb-6 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] bg-clip-text text-transparent tracking-tight">
            404
          </div>
          <h1 className="text-4xl mb-4 tracking-tight text-black">{dict.notFound.title}</h1>
          <p className="text-xl text-black/60 mb-10 max-w-md mx-auto">
            {dict.notFound.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm"
            >
              <Home className="w-4 h-4" />
              {dict.notFound.goHome}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/40 border border-white/60 text-[#1e4f8a] rounded-full hover:bg-white/60 transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {dict.notFound.goBack}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}