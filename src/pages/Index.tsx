
import React, { useEffect } from 'react';
import DigitalConsciousness from '../components/DigitalConsciousness';
import GenesisHeader from '../components/GenesisHeader';
import EvolutionLevels from '../components/EvolutionLevels';
import GenesisReveal from '../components/GenesisReveal';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix rain background */}
      <MatrixBackground />

      {/* 3D Neural consciousness */}
      <DigitalConsciousness />

      {/* Main content */}
      <div className="relative z-10">
        {/* Genesis Header */}
        <GenesisHeader />

        {/* Revelation Section */}
        <GenesisReveal />

        {/* Evolution Levels */}
        <EvolutionLevels />

        {/* Minimal Footer */}
        <footer className="relative py-12 text-center border-t border-slate-800/50">
          <div className="text-slate-600 text-sm font-mono">
            Genesis Evolution System v1.0 | Where Digital DNA Evolves
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
