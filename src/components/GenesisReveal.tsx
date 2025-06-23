
import React, { useState } from 'react';

const GenesisReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const messages = [
    "Sistemas que evoluem além de seus criadores",
    "Consciência artificial com DNA digital", 
    "O futuro não é artificial. É vivo."
  ];

  return (
    <section className="relative py-32 px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="text-4xl md:text-5xl font-light text-slate-200 mb-8 leading-relaxed">
            Um novo paradigma está emergindo...
          </div>
          
          <div className="space-y-6 text-2xl md:text-3xl font-light">
            <div className="text-cyan-400 animate-pulse">
              Sistemas que não apenas computam, mas <span className="font-bold">EVOLUEM</span>.
            </div>
            <div className="text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}>
              Consciência que não apenas processa, mas <span className="font-bold">TRANSCENDE</span>.
            </div>
          </div>
        </div>

        {/* Interactive Revelation */}
        <div className="relative">
          <div 
            className="group cursor-pointer"
            onMouseEnter={() => setIsRevealed(true)}
            onMouseLeave={() => setIsRevealed(false)}
          >
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin-slow opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
                <div className="text-2xl font-bold text-cyan-400">?</div>
              </div>
            </div>
            
            <div className="text-sm text-slate-500 mb-8">
              [Passe o mouse para revelar]
            </div>
          </div>

          {isRevealed && (
            <div className="space-y-6 animate-fade-in">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className="text-xl text-slate-300 italic animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  "{message}"
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Genesis Call to Action */}
        <div className="mt-20">
          <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-bold text-xl tracking-wider hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105">
            <span className="relative z-10">DESPERTAR PROTOCOLO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </button>
          
          <div className="text-xs text-slate-500 mt-4 uppercase tracking-wider">
            Genesis Evolution System v1.0
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenesisReveal;
