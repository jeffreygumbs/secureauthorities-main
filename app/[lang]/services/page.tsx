import Link from "next/link";
import { Code, Smartphone, Monitor, Shield, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { getDictionary } from "../../../get-dictionary";
import { i18n, type Locale } from "../../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Services({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams) return null;
  const { lang } = resolvedParams;
  const dict = await getDictionary(lang);

  const services = [
    {
      id: "web",
      title: dict.services.items.web.title,
      icon: Code,
      description: dict.services.items.web.description,
      image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjkxNjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: dict.services.items.web.features,
    },
    {
      id: "mobile",
      title: dict.services.items.mobile.title,
      icon: Smartphone,
      description: dict.services.items.mobile.description,
      image: "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI4NDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: dict.services.items.mobile.features,
    },
    {
      id: "desktop",
      title: dict.services.items.desktop.title,
      icon: Monitor,
      description: dict.services.items.desktop.description,
      image: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxt2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3RhdGlvbnxlbnwxfHx8fDE3NzI5MTEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: dict.services.items.desktop.features,
    },
    {
      id: "security",
      title: dict.services.items.security.title,
      icon: Shield,
      description: dict.services.items.security.description,
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyODE2MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: dict.services.items.security.features,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#1e4f8a]/5 via-white to-[#4b8ebe]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,79,138,0.08),transparent_50%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight text-black font-bold">
            {dict.services.hero.title.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-xl text-black/60 max-w-[700px] mx-auto leading-relaxed">
            {dict.services.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-20 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex p-3 bg-linear-to-br from-[#1e4f8a]/10 to-[#4b8ebe]/10 rounded-xl mb-6">
                    <service.icon className="w-8 h-8 text-[#1e4f8a]" />
                  </div>
                  <h2 className="text-5xl mb-6 tracking-tight text-black font-bold">{service.title}</h2>
                  <p className="text-lg text-black/60 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1e4f8a] shrink-0" />
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="absolute -inset-4 bg-linear-to-r from-[#1e4f8a]/10 to-[#4b8ebe]/10 rounded-2xl blur-2xl" />
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="relative rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-linear-to-br from-[#f5f5f7] via-white to-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl mb-6 tracking-tight text-black font-bold">{dict.services.process.title}</h2>
            <p className="text-xl text-black/60">
              {dict.services.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: dict.services.process.steps.discovery.title,
                description: dict.services.process.steps.discovery.description,
              },
              {
                step: "02",
                title: dict.services.process.steps.design.title,
                description: dict.services.process.steps.design.description,
              },
              {
                step: "03",
                title: dict.services.process.steps.development.title,
                description: dict.services.process.steps.development.description,
              },
              {
                step: "04",
                title: dict.services.process.steps.launch.title,
                description: dict.services.process.steps.launch.description,
              },
            ].map((process, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.1)] transition-all duration-500 hover:-translate-y-1 group">
                <div className="text-6xl bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] bg-clip-text text-transparent mb-6 tracking-tight group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl mb-3 text-black font-bold">{process.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-linear-to-br from-black via-[#1e4f8a]/90 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,140,190,0.2),transparent_70%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight font-bold">
            {dict.services.cta.title}
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-[600px] mx-auto leading-relaxed">
            {dict.services.cta.subtitle}
          </p>
          <Link
            href={`/${lang}/signup`}
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all text-sm font-bold"
          >
            {dict.navigation.getStarted}
          </Link>
        </div>
      </section>
    </div>
  );
}