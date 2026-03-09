export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Security</h1>
        <div className="prose prose-slate max-w-none text-black/70 space-y-6">
          <p className="text-sm text-black/50">Last Updated: March 2026</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Our Commitment to Security</h2>
            <p>
              At Secure Authorities, security is at the core of everything we do. We employ multiple layers of protection to ensure the safety and integrity of your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Data Encryption</h2>
            <p>
              All data transmitted to and from our services is encrypted using industry-standard TLS protocols. Data at rest is protected using AES-256 encryption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Infrastructure Security</h2>
            <p>
              Our infrastructure is hosted in world-class data centers with rigorous physical and digital security controls. We perform regular security audits and vulnerability assessments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Compliance</h2>
            <p>
              We maintain compliance with major security standards and regulations, ensuring that our security practices meet the highest industry benchmarks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-black">Reporting Vulnerabilities</h2>
            <p>
              If you believe you have found a security vulnerability in our services, please contact our security team at security@secureauthorities.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
