import { getDictionary } from "../../../../get-dictionary";
import { type Locale } from "../../../../i18n-config";

export default async function TermsOfService({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">{dict.legal.terms.title}</h1>
        <div className="prose prose-slate max-w-none text-black/70 space-y-6">
          <p className="text-sm text-black/50">{dict.legal.terms.lastUpdated}</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">{dict.legal.terms.sections.acceptance.title}</h2>
            <p>
              {dict.legal.terms.sections.acceptance.content}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">{dict.legal.terms.sections.usage.title}</h2>
            <p>
              {dict.legal.terms.sections.usage.content}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">{dict.legal.terms.sections.ip.title}</h2>
            <p>
              {dict.legal.terms.sections.ip.content}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
