import { getDictionary } from "../../../../get-dictionary";
import { type Locale } from "../../../../i18n-config";

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">{dict.support.community.title}</h1>
        <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
          {dict.support.community.subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: dict.support.community.items.forums.title, 
              desc: dict.support.community.items.forums.description 
            },
            { 
              name: dict.support.community.items.events.title, 
              desc: dict.support.community.items.events.description 
            },
            { 
              name: dict.support.community.items.oss.title, 
              desc: dict.support.community.items.oss.description 
            }
          ].map((item) => (
            <div key={item.name} className="p-8 border border-black/5 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-4">{item.name}</h3>
              <p className="text-black/60 mb-8">{item.desc}</p>
              <button className="text-[#1e4f8a] font-bold hover:underline">Join Now →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
