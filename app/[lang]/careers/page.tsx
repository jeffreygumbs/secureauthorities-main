import { ArrowRight, Briefcase, Globe, Users } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default async function Careers({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const positions = [
    {
      title: "Senior Security Engineer",
      location: "London, UK / Remote",
      type: "Full-time",
      department: "Engineering",
    },
    {
      title: "Full-stack Developer (React/Node)",
      location: "New York, USA / Remote",
      type: "Full-time",
      department: "Product",
    },
    {
      title: "Security Operations Analyst",
      location: "Singapore",
      type: "Full-time",
      department: "Security",
    },
    {
      title: "Cloud Infrastructure Architect",
      location: "Remote",
      type: "Full-time",
      department: "Infrastructure",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-black font-bold">
            {dict.careers.title}
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            {dict.careers.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Globe,
              title: dict.careers.benefits.global.title,
              description: dict.careers.benefits.global.description,
            },
            {
              icon: Users,
              title: dict.careers.benefits.team.title,
              description: dict.careers.benefits.team.description,
            },
            {
              icon: Briefcase,
              title: dict.careers.benefits.growth.title,
              description: dict.careers.benefits.growth.description,
            },
          ].map((benefit, index) => (
            <div key={index} className="p-8 backdrop-blur-xl bg-[#f5f5f7]/50 border border-black/5 rounded-3xl">
              <benefit.icon className="w-10 h-10 text-[#1e4f8a] mb-6" />
              <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-black/5 rounded-[32px] overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 border-b border-black/5">
            <h2 className="text-3xl font-bold text-black">{dict.careers.openPositions}</h2>
          </div>
          <div className="divide-y divide-black/5">
            {positions.map((job, index) => (
              <div key={index} className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#f5f5f7]/50 transition-colors">
                <div>
                  <div className="text-xs font-bold text-[#1e4f8a] mb-2 tracking-widest uppercase">{job.department}</div>
                  <h3 className="text-2xl font-bold text-black mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-black/50">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all text-sm font-medium">
                  {dict.careers.applyNow}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
