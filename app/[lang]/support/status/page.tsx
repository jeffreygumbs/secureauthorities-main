import { getDictionary } from "../../../../get-dictionary";
import { i18n, type Locale } from "../../../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams) return null;
  const { lang } = resolvedParams;
  const dict = await getDictionary(lang);

  const services = [
    { name: dict.support.status.items.api, status: dict.support.status.operational },
    { name: dict.support.status.items.cloud, status: dict.support.status.operational },
    { name: "Shadow Threat Detection", status: dict.support.status.operational },
    { name: "Authentication Services", status: dict.support.status.operational },
    { name: dict.support.status.items.dashboard, status: dict.support.status.operational }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-black tracking-tight">{dict.support.status.title}</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {dict.support.status.operational}
          </div>
        </div>

        <div className="bg-white border border-black/5 rounded-[32px] overflow-hidden shadow-xl">
          <div className="divide-y divide-black/5">
            {services.map((service) => (
              <div key={service.name} className="p-8 flex items-center justify-between">
                <span className="font-medium text-black">{service.name}</span>
                <span className="text-green-600 font-bold">{service.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-[#f5f5f7] rounded-3xl">
          <h3 className="font-bold text-black mb-2">{dict.support.status.uptime}</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            {dict.support.status.sla}
          </p>
        </div>
      </div>
    </div>
  );
}
