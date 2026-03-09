import { getDictionary } from "../../../../get-dictionary";
import { type Locale } from "../../../../i18n-config";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">{dict.support.docs.title}</h1>
        <p className="text-xl text-black/60 mb-12">{dict.support.docs.subtitle}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: dict.support.docs.items.guides.title, description: dict.support.docs.items.guides.description },
            { title: dict.support.docs.items.api.title, description: dict.support.docs.items.api.description },
            { title: dict.support.docs.items.sdks.title, description: dict.support.docs.items.sdks.description },
            { title: "Security Guides", description: "Learn how to keep your applications secure." },
            { title: "Dono Cloud", description: "Deep dive into our cloud infrastructure." },
            { title: "Shadow Security", description: "Configuration and best practices for Shadow." },
          ].map((item) => (
            <div key={item.title} className="p-8 border border-black/5 rounded-3xl hover:bg-[#f5f5f7] transition-colors group cursor-pointer">
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-black/50 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
