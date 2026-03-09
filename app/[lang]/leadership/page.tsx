import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";

export default async function Leadership({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const leaders = [
    {
      name: "Alexander Vance",
      role: dict.leadership.team.alexander.role,
      bio: dict.leadership.team.alexander.bio,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBtYW58ZW58MXx8fHwxNzcyOTE2OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Sarah Chen",
      role: dict.leadership.team.sarah.role,
      bio: dict.leadership.team.sarah.bio,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB3b21hbnxlbnwxfHx8fDE3NzI5MTY5ODV8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Marcus Thorne",
      role: dict.leadership.team.marcus.role,
      bio: dict.leadership.team.marcus.bio,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzcyOTE2OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-black font-bold">
            {dict.leadership.title}
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
            {dict.leadership.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-4/5 relative rounded-2xl overflow-hidden mb-6 group">
                  <ImageWithFallback
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-1">{leader.name}</h3>
                  <p className="text-[#1e4f8a] font-medium mb-4">{leader.role}</p>
                  <p className="text-black/60 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
