
import React from 'react';

const TrustSection = () => {
  const companies = [
    { name: "Global Bank", industry: "Financial Services" },
    { name: "TechCorp", industry: "Technology" },
    { name: "MedSystems", industry: "Healthcare" },
    { name: "AutoMotive Inc", industry: "Manufacturing" },
    { name: "RetailChain", industry: "Retail" },
    { name: "EnergyFlow", industry: "Energy" }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "50PB", label: "Data Processed Monthly" },
    { value: "150+", label: "Countries Served" },
    { value: "99.99%", label: "Uptime SLA" }
  ];

  return (
    <section className="py-24 px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Fortune 500 companies rely on DETHRON to power their mission-critical applications 
            and drive digital transformation at enterprise scale.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Company grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div key={index} className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="text-xl font-bold text-slate-300">
                  {company.name.charAt(0)}
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-1">
                {company.name}
              </div>
              <div className="text-xs text-slate-500">
                {company.industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
