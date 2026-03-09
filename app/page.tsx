import Link from "next/link";
import { ArrowRight, Shield, Globe, Zap, Cloud, Database, Lock, CheckCircle, BarChart } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#1e4f8a]/5 via-white to-[#4b8ebe]/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(75,140,190,0.08),transparent_50%)]" />
        
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-black font-bold">
            Secure Your
            <br />
            Digital Future
          </h1>
          <p className="text-lg md:text-2xl text-black/60 mb-10 max-w-[700px] mx-auto leading-relaxed">
            Enterprise cybersecurity and application development for global organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-medium"
            >
              Explore Products
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 border border-[#1e4f8a] text-[#1e4f8a] rounded-full hover:bg-[#1e4f8a] hover:text-white transition-all text-sm font-medium"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {[
              { number: "150+", label: "Enterprise Clients", icon: Globe },
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "24/7", label: "Global Support", icon: Zap },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.15)] transition-all duration-500 hover:-translate-y-1">
                  <stat.icon className="w-12 h-12 text-[#1e4f8a] mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-4xl md:text-5xl mb-2 text-black tracking-tight font-bold">{stat.number}</div>
                  <div className="text-sm text-black/60 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dono Section */}
      <section id="dono" className="py-32 relative overflow-hidden border-t border-black/5">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-linear-to-br from-[#f1b24b]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="text-center md:text-left">
              <div className="text-xs font-bold text-[#f1b24b] mb-2 tracking-widest uppercase">The Super App</div>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-black font-bold">Dono</h2>
              <p className="text-lg md:text-xl text-black/60 mb-8 leading-relaxed">
                The all-in-one super app for the modern enterprise. 
                Communication, data management, and security in a single, seamless platform.
              </p>
              <Link
                href="/products#dono"
                className="inline-flex items-center gap-2 text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors group font-medium"
              >
                Learn more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-[#f1b24b]/20 to-[#1e4f8a]/20 rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcyODQyNzk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dono Platform"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shadow Section */}
      <section id="shadow" className="py-32 bg-linear-to-br from-[#f5f5f7] via-white to-[#f5f5f7] relative overflow-hidden border-y border-black/5">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-linear-to-br from-[#d67d4c]/10 to-transparent rounded-full blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="md:order-2 text-center md:text-left">
              <div className="text-xs font-bold text-[#d67d4c] mb-2 tracking-widest uppercase">Security Platform</div>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-black font-bold">Shadow</h2>
              <p className="text-lg md:text-xl text-black/60 mb-8 leading-relaxed">
                AI-powered threat detection and automated response. 
                Protect your organization with real-time security intelligence.
              </p>
              <Link
                href="/products#shadow"
                className="inline-flex items-center gap-2 text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors group font-medium"
              >
                Learn more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative md:order-1">
              <div className="absolute -inset-4 bg-linear-to-r from-[#d67d4c]/20 to-[#1e4f8a]/20 rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652148555073-4b1d2ecd664c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGllbGQlMjBzZWN1cml0eSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzcyOTE2OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shadow Security"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-black font-bold">
              Development Services
            </h2>
            <p className="text-lg md:text-xl text-black/60 max-w-[700px] mx-auto font-light">
              Full-stack development expertise for web, mobile, and desktop applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                description: "Modern web applications built with React, Vue, and Angular",
                image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2lnbmVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MjkxNjk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Mobile Apps",
                description: "Native iOS and Android applications",
                image: "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NzI4NDEyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Desktop Software",
                description: "Cross-platform desktop applications",
                image: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3RhdGlvbnxlbnwxfHx8fDE3NzI5MTEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                title: "Cyber Security",
                description: "Comprehensive security solutions and audits",
                image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyODE2MTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="backdrop-blur-xl bg-white/30 border border-white/60 rounded-2xl p-6 shadow-xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.1)] transition-all duration-500 hover:-translate-y-2">
                  <div className="mb-6 overflow-hidden rounded-xl relative">
                    <div className="absolute inset-0 bg-linear-to-t from-[#1e4f8a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl mb-2 text-black font-bold">{service.title}</h3>
                  <p className="text-sm text-black/60 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#1e4f8a] hover:text-[#4b8ebe] transition-colors group font-medium"
            >
              View all services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-linear-to-br from-black via-[#1e4f8a]/90 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,140,190,0.2),transparent_70%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight font-bold">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-[600px] mx-auto leading-relaxed">
            Join 150+ global enterprises protecting their digital infrastructure with Secure Authorities
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all text-sm font-bold"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
