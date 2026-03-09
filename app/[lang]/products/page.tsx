import Link from "next/link";
import { Cloud, Shield, Database, Lock, Zap, CheckCircle, BarChart } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default async function Products({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#f1b24b]/5 via-white to-[#d67d4c]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,125,76,0.08),transparent_50%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight text-black">
            {dict.products.hero.title.split('\n').map((line: string, i: number) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-xl text-black/60 max-w-[700px] mx-auto leading-relaxed">
            {dict.products.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Dono Product */}
      <section id="dono" className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-linear-to-bl from-[#f1b24b]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-sm text-[#f1b24b] mb-2 tracking-wide uppercase">{dict.home.dono.label}</div>
              <h2 className="text-6xl mb-6 tracking-tight bg-linear-to-r from-[#f1b24b] to-[#d67d4c] bg-clip-text text-transparent font-bold">{dict.home.dono.title}</h2>
              <p className="text-xl text-black/60 leading-relaxed mb-8">
                {dict.home.dono.description}
              </p>
              <Link
                href={`/${lang}/signup`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#f1b24b] to-[#d67d4c] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-bold"
              >
                {dict.navigation.getStarted}
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-[#f1b24b]/20 to-[#d67d4c]/20 rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyODQyNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dono Platform"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Dono Features */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Cloud,
                title: dict.products.dono.features.unified.title,
                description: dict.products.dono.features.unified.description,
              },
              {
                icon: Database,
                title: dict.products.dono.features.data.title,
                description: dict.products.dono.features.data.description,
              },
              {
                icon: Lock,
                title: dict.products.dono.features.messaging.title,
                description: dict.products.dono.features.messaging.description,
              },
              {
                icon: Zap,
                title: dict.products.dono.features.scaling.title,
                description: dict.products.dono.features.scaling.description,
              },
              {
                icon: BarChart,
                title: dict.products.dono.features.automation.title,
                description: dict.products.dono.features.automation.description,
              },
              {
                icon: CheckCircle,
                title: dict.products.dono.features.ready.title,
                description: dict.products.dono.features.ready.description,
              },
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-[0_20px_60px_rgba(241,178,75,0.1)] transition-all duration-500 hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-[#f1b24b] mb-4" />
                <h3 className="text-lg mb-2 text-black font-bold">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dono Pricing */}
      <section className="py-32 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-4xl text-center mb-16 tracking-tight text-black font-bold">{dict.products.dono.pricing.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: dict.products.dono.pricing.starter.name,
                price: dict.products.dono.pricing.starter.price,
                features: dict.products.dono.pricing.starter.features,
              },
              {
                name: dict.products.dono.pricing.professional.name,
                price: dict.products.dono.pricing.professional.price,
                popular: true,
                features: dict.products.dono.pricing.professional.features,
              },
              {
                name: dict.products.dono.pricing.enterprise.name,
                price: dict.products.dono.pricing.enterprise.price,
                features: dict.products.dono.pricing.enterprise.features,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/60 border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular 
                    ? "border-[#f1b24b]/40 shadow-[0_20px_60px_rgba(241,178,75,0.15)]" 
                    : "border-white/80 shadow-xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.08)]"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs text-[#f1b24b] mb-4 tracking-wide uppercase font-bold">{dict.products.pricing.mostPopular}</div>
                )}
                <h4 className="text-2xl mb-2 text-black font-bold">{plan.name}</h4>
                <div className="text-5xl mb-8 text-black tracking-tight font-bold">
                  {plan.price}
                  {plan.price !== dict.products.pricing.custom && <span className="text-lg text-black/50">/{dict.products.pricing.monthly}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-black/70">
                      <CheckCircle className="w-4 h-4 text-[#f1b24b] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/signin`}
                  className={`block text-center px-6 py-3 rounded-full transition-all text-sm font-bold ${
                    plan.popular
                      ? "bg-linear-to-r from-[#f1b24b] to-[#d67d4c] text-white hover:shadow-xl hover:scale-105"
                      : "bg-black/90 text-white hover:bg-black hover:scale-105"
                  }`}
                >
                  {dict.navigation.getStarted}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadow Product */}
      <section id="shadow" className="py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="md:order-2">
              <div className="text-sm text-[#d67d4c] mb-2 tracking-wide uppercase">{dict.home.shadow.label}</div>
              <h2 className="text-6xl mb-6 tracking-tight text-black font-bold">{dict.home.shadow.title}</h2>
              <p className="text-xl text-black/60 leading-relaxed mb-8">
                {dict.home.shadow.description}
              </p>
              <Link
                href={`/${lang}/signup`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#d67d4c] to-[#f1b24b] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-bold"
              >
                {dict.navigation.getStarted}
              </Link>
            </div>
            <div className="md:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGllbGQlMjBzZWN1cml0eSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzcyOTE2OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shadow Security"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Shadow Features */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: dict.products.shadow.features.ai.title,
                description: dict.products.shadow.features.ai.description,
              },
              {
                icon: Zap,
                title: dict.products.shadow.features.response.title,
                description: dict.products.shadow.features.response.description,
              },
              {
                icon: Lock,
                title: dict.products.shadow.features.trust.title,
                description: dict.products.shadow.features.trust.description,
              },
              {
                icon: BarChart,
                title: dict.products.shadow.features.intelligence.title,
                description: dict.products.shadow.features.intelligence.description,
              },
              {
                icon: Database,
                title: dict.products.shadow.features.compliance.title,
                description: dict.products.shadow.features.compliance.description,
              },
              {
                icon: CheckCircle,
                title: dict.products.shadow.features.monitoring.title,
                description: dict.products.shadow.features.monitoring.description,
              },
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-[0_20px_60px_rgba(214,125,76,0.1)] transition-all duration-500 hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-[#d67d4c] mb-4" />
                <h3 className="text-lg mb-2 text-black font-bold">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadow Pricing */}
      <section className="py-32 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-4xl text-center mb-16 tracking-tight text-black font-bold">{dict.products.shadow.pricing.title}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: dict.products.shadow.pricing.basic.name,
                price: dict.products.shadow.pricing.basic.price,
                features: dict.products.shadow.pricing.basic.features,
              },
              {
                name: dict.products.shadow.pricing.advanced.name,
                price: dict.products.shadow.pricing.advanced.price,
                popular: true,
                features: dict.products.shadow.pricing.advanced.features,
              },
              {
                name: dict.products.shadow.pricing.enterprise.name,
                price: dict.products.shadow.pricing.enterprise.price,
                features: dict.products.shadow.pricing.enterprise.features,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`backdrop-blur-xl bg-white/60 border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular 
                    ? "border-[#d67d4c]/40 shadow-[0_20px_60px_rgba(214,125,76,0.15)]" 
                    : "border-white/80 shadow-xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.08)]"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs text-[#d67d4c] mb-4 tracking-wide uppercase font-bold">{dict.products.pricing.mostPopular}</div>
                )}
                <h4 className="text-2xl mb-2 text-black font-bold">{plan.name}</h4>
                <div className="text-5xl mb-8 text-black tracking-tight font-bold">
                  {plan.price}
                  {plan.price !== dict.products.pricing.custom && <span className="text-lg text-black/50">/{dict.products.pricing.monthly}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-black/70">
                      <CheckCircle className="w-4 h-4 text-[#d67d4c] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${lang}/signin`}
                  className={`block text-center px-6 py-3 rounded-full transition-all text-sm font-bold ${
                    plan.popular
                      ? "bg-linear-to-r from-[#d67d4c] to-[#f1b24b] text-white hover:shadow-xl hover:scale-105"
                      : "bg-black/90 text-white hover:bg-black hover:scale-105"
                  }`}
                >
                  {dict.navigation.getStarted}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}