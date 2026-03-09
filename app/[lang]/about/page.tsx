import Link from "next/link";
import { Globe, Users, Award, Target, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default async function About({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const leaders = [
    {
      name: "Alexander Vance",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW58ZW58MXx8fHwxNzcyOTE2OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB3b21hbnxlbnwxfHx8fDE3NzI5MTY5ODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Marcus Thorne",
      role: "Chief Information Security Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzcyOTE2OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#4b8ebe]/5 via-white to-[#1e4f8a]/5" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-8xl mb-8 tracking-tight text-black font-bold">
            {dict.about.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-black/60 max-w-[700px] mx-auto leading-relaxed">
            {dict.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-32 bg-linear-to-b from-[#f5f5f7] to-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs font-bold text-[#1e4f8a] mb-4 tracking-widest uppercase">{dict.about.mission.label}</div>
              <h2 className="text-5xl md:text-6xl mb-8 tracking-tight text-black font-bold">{dict.about.mission.title}</h2>
              <p className="text-lg text-black/60 leading-relaxed mb-6">
                {dict.about.mission.p1}
              </p>
              <p className="text-lg text-black/60 leading-relaxed">
                {dict.about.mission.p2}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-[#1e4f8a]/10 to-[#4b8ebe]/10 rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3RhdGlvbnxlbnwxfHx8fDE3NzI5MTEyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-[#1e4f8a] mb-4 tracking-widest uppercase">{dict.about.leadership.label}</div>
              <h2 className="text-5xl md:text-6xl tracking-tight text-black font-bold">{dict.about.leadership.title}</h2>
            </div>
            <Link 
              href={`/${lang}/leadership`}
              className="inline-flex items-center gap-2 text-[#1e4f8a] font-bold hover:underline group"
            >
              {dict.about.leadership.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="aspect-4/5 relative rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-1">{leader.name}</h3>
                <p className="text-[#1e4f8a] font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs font-bold text-[#1e4f8a] mb-4 tracking-widest uppercase">{dict.about.values.label}</div>
            <h2 className="text-5xl md:text-6xl tracking-tight text-black font-bold">{dict.about.values.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: dict.about.values.items.global.title,
                description: dict.about.values.items.global.description,
              },
              {
                icon: Users,
                title: dict.about.values.items.team.title,
                description: dict.about.values.items.team.description,
              },
              {
                icon: Award,
                title: dict.about.values.items.leader.title,
                description: dict.about.values.items.leader.description,
              },
              {
                icon: Target,
                title: dict.about.values.items.client.title,
                description: dict.about.values.items.client.description,
              },
            ].map((value, index) => (
              <div key={index} className="backdrop-blur-xl bg-white border border-black/5 rounded-[32px] p-8 shadow-xl hover:shadow-[0_20px_60px_rgba(30,79,138,0.1)] transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-[#1e4f8a]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-[980px] mx-auto px-8">
          <div className="text-center mb-20">
            <div className="text-xs font-bold text-[#1e4f8a] mb-4 tracking-widest uppercase">{dict.about.history.label}</div>
            <h2 className="text-5xl md:text-6xl tracking-tight text-black font-bold">{dict.about.history.title}</h2>
          </div>
          <div className="space-y-16">
            {[
              {
                year: "2010",
                title: dict.about.history.milestones["2010"].title,
                description: dict.about.history.milestones["2010"].description,
              },
              {
                year: "2015",
                title: dict.about.history.milestones["2015"].title,
                description: dict.about.history.milestones["2015"].description,
              },
              {
                year: "2020",
                title: dict.about.history.milestones["2020"].title,
                description: dict.about.history.milestones["2020"].description,
              },
              {
                year: "2026",
                title: dict.about.history.milestones["2026"].title,
                description: dict.about.history.milestones["2026"].description,
              },
            ].map((milestone, index) => (
              <div key={index} className="grid md:grid-cols-4 gap-8 group">
                <div className="text-5xl font-bold bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] bg-clip-text text-transparent tracking-tight group-hover:scale-110 transition-transform origin-left">
                  {milestone.year}
                </div>
                <div className="md:col-span-3 border-l border-black/5 pl-8 md:pl-12 pb-8">
                  <h3 className="text-2xl font-bold mb-3 text-black">{milestone.title}</h3>
                  <p className="text-lg text-black/60 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="py-32 bg-linear-to-br from-black via-[#1e4f8a]/90 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(241,178,75,0.15),transparent_50%)]" />
        <div className="relative max-w-[980px] mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-7xl mb-8 tracking-tight font-bold">{dict.about.presence.title}</h2>
          <p className="text-xl text-white/70 mb-16 max-w-[700px] mx-auto leading-relaxed">
            {dict.about.presence.subtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm font-bold tracking-widest uppercase text-white/50">
            {["North America", "Europe", "Asia Pacific", "Middle East", "Latin America"].map((region, index) => (
              <div key={index} className="hover:text-white transition-colors cursor-default">
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}