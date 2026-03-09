import Link from "next/link";

import { getDictionary } from "../../../../get-dictionary";
import { i18n, type Locale } from "../../../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function HelpCenter({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams) return null;
  const { lang } = resolvedParams;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">{dict.support.help.title}</h1>
        <p className="text-xl text-black/60 mb-12">{dict.support.help.subtitle}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-black/5 rounded-3xl">
            <h2 className="text-2xl font-bold text-black mb-4">{dict.support.help.faqs.title}</h2>
            <ul className="space-y-4">
              {[
                dict.support.help.faqs.q1,
                dict.support.help.faqs.q2,
                dict.support.help.faqs.q3,
                dict.support.help.faqs.q4
              ].map((q) => (
                <li key={q} className="pb-4 border-b border-black/5 last:border-0">
                  <button className="text-left font-medium text-black hover:text-[#1e4f8a] transition-colors w-full">{q}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-[#1e4f8a]/5 border border-[#1e4f8a]/10 rounded-3xl flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold text-black mb-4">{dict.support.help.cta.title}</h2>
            <p className="text-black/60 mb-8">{dict.support.help.cta.subtitle}</p>
            <Link href={`/${lang}/contact`} className="inline-block px-8 py-4 bg-[#1e4f8a] text-white rounded-full font-bold hover:bg-[#4b8ebe] transition-all">
              {dict.support.help.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
