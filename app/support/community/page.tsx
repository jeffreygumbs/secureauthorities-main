export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">Community</h1>
        <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto">
          Connect with other developers and security experts using Secure Authorities products.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Forums', desc: 'Discuss products, share ideas, and get help from the community.' },
            { name: 'Events', desc: 'Join our webinars, workshops, and meetups around the world.' },
            { name: 'Open Source', desc: 'Contribute to our open source projects and tools.' }
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
