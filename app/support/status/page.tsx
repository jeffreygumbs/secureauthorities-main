export default function StatusPage() {
  const services = [
    { name: 'API Gateway', status: 'Operational' },
    { name: 'Dono Cloud Platform', status: 'Operational' },
    { name: 'Shadow Threat Detection', status: 'Operational' },
    { name: 'Authentication Services', status: 'Operational' },
    { name: 'Website & Console', status: 'Operational' }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-black tracking-tight">System Status</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            All Systems Operational
          </div>
        </div>

        <div className="bg-white border border-black/5 rounded-[32px] overflow-hidden shadow-xl">
          <div className="divide-y divide-black/5">
            {services.map((service) => (
              <div key={service.name} className="p-8 flex items-center justify-between">
                <span className="font-medium text-black">{service.name}</span>
                <span className="text-green-600 font-bold">{service.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-[#f5f5f7] rounded-3xl">
          <h3 className="font-bold text-black mb-2">About our uptime</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            We provide a 99.9% uptime SLA for all enterprise customers. Our status page is updated in real-time to reflect the current health of our global infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
