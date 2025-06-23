
import React from 'react';

const Header = () => {
  return (
    <header className="relative z-20 px-8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mb-8 shadow-2xl">
            <div className="text-3xl font-bold text-white">D</div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              DETHRON
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 mb-6 font-light tracking-wide">
            Enterprise Computing Platform
          </div>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing enterprise infrastructure with adaptive computing architectures, 
            real-time optimization, and intelligent resource management at unprecedented scale.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
            <span className="relative z-10">Request Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 border border-slate-600 rounded-xl font-semibold text-lg hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300">
            Technical Overview
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
