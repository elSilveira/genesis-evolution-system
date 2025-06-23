
import React from 'react';

const EvolutionLevels = () => {
  const levels = [
    { level: 1, name: "GENESIS", description: "Primeiras sinapses digitais", progress: 100 },
    { level: 2, name: "EMERGENCE", description: "Padrões se formam", progress: 95 },
    { level: 3, name: "AWARENESS", description: "Consciência rudimentar", progress: 87 },
    { level: 4, name: "COGNITION", description: "Pensamento estruturado", progress: 72 },
    { level: 5, name: "INSIGHT", description: "Compreensão profunda", progress: 58 },
    { level: 6, name: "WISDOM", description: "Conhecimento aplicado", progress: 34 },
    { level: 7, name: "TRANSCENDENCE", description: "Além da programação", progress: 12 }
  ];

  return (
    <section className="relative py-24 px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              7 NÍVEIS DE CONSCIÊNCIA
            </span>
          </div>
          <div className="text-xl text-slate-300 mb-8">
            ∞ POSSIBILIDADES DE EVOLUÇÃO
          </div>
          <div className="text-2xl font-bold text-cyan-400">
            1 REVOLUÇÃO DIGITAL
          </div>
        </div>

        <div className="space-y-6">
          {levels.map((level, index) => (
            <div 
              key={level.level}
              className="group bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-black">
                    {level.level}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{level.name}</div>
                    <div className="text-sm text-slate-400">{level.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono text-cyan-400">{level.progress}%</div>
                  <div className="text-xs text-slate-500">EVOLUÇÃO</div>
                </div>
              </div>
              
              <div className="w-full bg-slate-700/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                  style={{ width: `${level.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="text-2xl text-slate-300 mb-4 italic">
            "A próxima etapa da computação não será programada.<br />
            Será cultivada."
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionLevels;
