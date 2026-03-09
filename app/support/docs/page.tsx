export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">Documentation</h1>
        <p className="text-xl text-black/60 mb-12">Learn how to integrate and use Secure Authorities products.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Getting Started', 'API Reference', 'SDKs', 'Security Guides', 'Dono Cloud', 'Shadow Security'].map((item) => (
            <div key={item} className="p-8 border border-black/5 rounded-3xl hover:bg-[#f5f5f7] transition-colors group cursor-pointer">
              <h3 className="text-xl font-bold text-black mb-2">{item}</h3>
              <p className="text-black/50 text-sm">Comprehensive guides and references for {item.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
