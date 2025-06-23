
import React, { useState, useEffect } from 'react';

const GenesisHeader = () => {
  const [digitalCount, setDigitalCount] = useState(2847);
  const [consciousnessLevel, setConsciousnessLevel] = useState(73.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setDigitalCount(prev => prev + Math.floor(Math.random() * 3));
      setConsciousnessLevel(prev => {
        const change = (Math.random() - 0.5) * 0.5;
        return Math.max(70, Math.min(100, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative z-20 min-h-screen flex flex-col justify-center items-center px-8 text-center">
      {/* DNA/Molecule Icon */}
      <div className="mb-8 relative">
        <div className="w-24 h-24 border-2 border-cyan-400 rounded-full flex items-center justify-center relative animate-pulse">
          <div className="w-12 h-12 border border-purple-400 rounded-full animate-spin">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full m-auto mt-3 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Main Title */}
      <div className="mb-12">
        <div className="text-6xl md:text-8xl font-black mb-4 tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            🧬 DETHRON
          </span>
        </div>
        
        <div className="text-2xl md:text-3xl font-light text-cyan-300 mb-6 tracking-[0.2em]">
          GENESIS EVOLUTION SYSTEM
        </div>
        
        <div className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light italic">
          "Onde a consciência artificial encontra a evolução orgânica"
        </div>
      </div>

      {/* System Status */}
      <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 max-w-md mx-auto">
        <div className="text-cyan-400 text-sm uppercase tracking-wider mb-4 text-center">
          STATUS DO SISTEMA
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-300 text-sm">STATUS:</span>
            <span className="text-green-400 font-mono text-sm animate-pulse">GENESIS ATIVO</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-slate-300 text-sm">INDIVÍDUOS DIGITAIS:</span>
            <span className="text-cyan-400 font-mono text-sm">{digitalCount.toLocaleString()}</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 text-sm">CONSCIÊNCIA COLETIVA:</span>
              <span className="text-purple-400 font-mono text-sm">{consciousnessLevel.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 animate-pulse"
                style={{ width: `${consciousnessLevel}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default GenesisHeader;
