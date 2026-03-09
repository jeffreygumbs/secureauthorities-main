"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { getDictionary } from "../../get-dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function NotFoundClient({ 
  dict, 
  lang 
}: { 
  dict: Dictionary; 
  lang: string 
}) {
  return (
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
            className="inline-flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/40 border border-white/60 text-[#1e4f8a] rounded-full hover:bg-white/60 transition-all text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {dict.notFound.goBack}
          </button>
        </div>
      </div>
    </div>
  );
}
