import Link from "next/link";
import { Cloud, Shield, Database, Lock, Zap, CheckCircle, BarChart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#f1b24b]/5 via-white to-[#d67d4c]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,125,76,0.08),transparent_50%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight text-black">
            Enterprise
            <br />
            Products
          </h1>
          <p className="text-xl text-black/60 max-w-[700px] mx-auto leading-relaxed">
            Cloud and security platforms built for scale
          </p>
        </div>
      </section>

      {/* Dono Product */}
      <section id="dono" className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-linear-to-bl from-[#f1b24b]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-sm text-[#f1b24b] mb-2 tracking-wide uppercase">The All-in-One Super App</div>
              <h2 className="text-6xl mb-6 tracking-tight bg-linear-to-r from-[#f1b24b] to-[#d67d4c] bg-clip-text text-transparent font-bold">Dono</h2>
              <p className="text-xl text-black/60 leading-relaxed mb-8">
                Experience the next generation of enterprise productivity. Dono is an integrated super app 
                combining secure messaging, advanced data management, and cloud infrastructure.
              </p>
              <a
                href="/signin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#f1b24b] to-[#d67d4c] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-bold"
              >
                Get Started
              </a>
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
                title: "Unified Ecosystem",
                description: "Connect all your business processes in one powerful super app.",
              },
              {
                icon: Database,
                title: "Data Intelligence",
                description: "Integrated cloud storage with real-time analytics and insights.",
              },
              {
                icon: Lock,
                title: "Secure Messaging",
                description: "Enterprise-grade encrypted communication for your entire team.",
              },
              {
                icon: Zap,
                title: "Instant Scaling",
                description: "Global infrastructure that grows with your organization.",
              },
              {
                icon: BarChart,
                title: "Workflow Automation",
                description: "Streamline operations with built-in productivity tools.",
              },
              {
                icon: CheckCircle,
                title: "Enterprise Ready",
                description: "Compliant with global standards and 99.99% uptime SLA.",
              },
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-[0_20px_60px_rgba(241,178,75,0.1)] transition-all duration-500 hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-[#f1b24b] mb-4" />
                <h3 className="text-lg mb-2 text-black">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dono Pricing */}
      <section className="py-32 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-4xl text-center mb-16 tracking-tight text-black">Dono Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                features: ["100 GB Storage", "Up to 5 Users", "Basic Analytics", "Email Support"],
              },
              {
                name: "Professional",
                price: "$149",
                popular: true,
                features: ["1 TB Storage", "Up to 25 Users", "Advanced Analytics", "24/7 Support", "Integrations"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited Storage", "Unlimited Users", "Enterprise Analytics", "Dedicated Support", "SLA"],
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
                  <div className="text-xs text-[#f1b24b] mb-4 tracking-wide uppercase">Most Popular</div>
                )}
                <h4 className="text-2xl mb-2 text-black">{plan.name}</h4>
                <div className="text-5xl mb-8 text-black tracking-tight">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-black/50">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-black/70">
                      <CheckCircle className="w-4 h-4 text-[#f1b24b] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/signin"
                  className={`block text-center px-6 py-3 rounded-full transition-all text-sm ${
                    plan.popular
                      ? "bg-linear-to-r from-[#f1b24b] to-[#d67d4c] text-white hover:shadow-xl hover:scale-105"
                      : "bg-black/90 text-white hover:bg-black hover:scale-105"
                  }`}
                >
                  Get Started
                </a>
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
              <div className="text-sm text-[#d67d4c] mb-2 tracking-wide uppercase">Security Platform</div>
              <h2 className="text-6xl mb-6 tracking-tight text-black">Shadow</h2>
              <p className="text-xl text-black/60 leading-relaxed mb-8">
                AI-powered threat detection. Automated response. Real-time protection.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#d67d4c] to-[#f1b24b] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-bold"
              >
                Get Started
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
                title: "AI Detection",
                description: "Machine learning with 99.9% accuracy",
              },
              {
                icon: Zap,
                title: "Instant Response",
                description: "Automated threat neutralization",
              },
              {
                icon: Lock,
                title: "Zero-Trust",
                description: "Enterprise-grade security architecture",
              },
              {
                icon: BarChart,
                title: "Intelligence",
                description: "Global threat analytics",
              },
              {
                icon: Database,
                title: "Compliance",
                description: "GDPR, HIPAA reporting",
              },
              {
                icon: CheckCircle,
                title: "24/7 Monitoring",
                description: "SOC monitoring",
              },
            ].map((feature, index) => (
              <div key={index} className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-[0_20px_60px_rgba(214,125,76,0.1)] transition-all duration-500 hover:-translate-y-1">
                <feature.icon className="w-10 h-10 text-[#d67d4c] mb-4" />
                <h3 className="text-lg mb-2 text-black">{feature.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shadow Pricing */}
      <section className="py-32 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h3 className="text-4xl text-center mb-16 tracking-tight text-black">Shadow Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$299",
                features: ["50 Endpoints", "Real-time Monitoring", "Threat Detection", "Email Alerts"],
              },
              {
                name: "Advanced",
                price: "$799",
                popular: true,
                features: ["500 Endpoints", "AI Detection", "Automated Response", "24/7 SOC", "Intelligence"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited Endpoints", "Custom AI", "Dedicated SOC", "Compliance Suite", "SLA"],
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
                  <div className="text-xs text-[#d67d4c] mb-4 tracking-wide uppercase">Most Popular</div>
                )}
                <h4 className="text-2xl mb-2 text-black">{plan.name}</h4>
                <div className="text-5xl mb-8 text-black tracking-tight">
                  {plan.price}
                  {plan.price !== "Custom" && <span className="text-lg text-black/50">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-black/70">
                      <CheckCircle className="w-4 h-4 text-[#d67d4c] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/signin"
                  className={`block text-center px-6 py-3 rounded-full transition-all text-sm ${
                    plan.popular
                      ? "bg-linear-to-r from-[#d67d4c] to-[#f1b24b] text-white hover:shadow-xl hover:scale-105"
                      : "bg-black/90 text-white hover:bg-black hover:scale-105"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}