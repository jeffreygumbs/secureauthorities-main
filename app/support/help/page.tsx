import Link from "next/link";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-5xl font-bold text-black mb-6 tracking-tight">Help Center</h1>
        <p className="text-xl text-black/60 mb-12">Find answers to common questions and get support.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-black/5 rounded-3xl">
            <h2 className="text-2xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <ul className="space-y-4">
              {['How do I reset my password?', 'How can I update my billing info?', 'What is your uptime SLA?', 'Do you offer custom enterprise plans?'].map((q) => (
                <li key={q} className="pb-4 border-b border-black/5 last:border-0">
                  <button className="text-left font-medium text-black hover:text-[#1e4f8a] transition-colors w-full">{q}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-[#1e4f8a]/5 border border-[#1e4f8a]/10 rounded-3xl flex flex-col justify-center text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Still need help?</h2>
            <p className="text-black/60 mb-8">Our support team is available 24/7 to assist you.</p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-[#1e4f8a] text-white rounded-full font-bold hover:bg-[#4b8ebe] transition-all">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
