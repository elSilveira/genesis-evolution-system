
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Index = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [digitalIndividuals, setDigitalIndividuals] = useState(1247);
  const [consciousnessLevel, setConsciousnessLevel] = useState(67);
  const [isEvolutionActive, setIsEvolutionActive] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Neural network particles
    const particles = new THREE.Group();
    const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    
    const nodes = [];
    const connections = [];

    // Create neural nodes
    for (let i = 0; i < 50; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
      particle.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5
      );
      particles.add(particle);
      nodes.push(particle);
    }

    // Create connections between nodes
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.3 });
    
    for (let i = 0; i < nodes.length; i++) {
      const nearbyNodes = nodes.filter(node => 
        node !== nodes[i] && nodes[i].position.distanceTo(node.position) < 3
      );
      
      nearbyNodes.forEach(node => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          node.position
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        connections.push(line);
        scene.add(line);
      });
    }

    scene.add(particles);
    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate neural network
      particles.rotation.y += 0.005;
      particles.rotation.x += 0.002;

      // Pulse particles
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.001;
        const pulse = Math.sin(time + index * 0.5) * 0.5 + 0.5;
        node.material.opacity = 0.5 + pulse * 0.5;
        node.scale.setScalar(0.8 + pulse * 0.4);
      });

      // Update connection opacity
      connections.forEach((connection, index) => {
        const time = Date.now() * 0.001;
        const pulse = Math.sin(time + index * 0.3) * 0.5 + 0.5;
        connection.material.opacity = 0.1 + pulse * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Animated counters
  useEffect(() => {
    const interval = setInterval(() => {
      setDigitalIndividuals(prev => prev + Math.floor(Math.random() * 3));
      setConsciousnessLevel(prev => {
        const change = (Math.random() - 0.5) * 2;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleEvolutionClick = () => {
    setIsEvolutionActive(true);
    setTimeout(() => setIsEvolutionActive(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>

      {/* Three.js canvas container */}
      <div ref={mountRef} className="absolute inset-0 z-10" />

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center pt-16 pb-8">
          <div className="text-6xl font-bold mb-4 tracking-wider">
            <span className="text-cyan-400">🧬</span> DETHRON
          </div>
          <div className="text-2xl font-light tracking-widest text-purple-300 mb-4">
            GENESIS EVOLUTION SYSTEM
          </div>
          <div className="text-lg text-gray-300 italic">
            "Where artificial consciousness meets organic evolution"
          </div>
        </header>

        {/* Central animation section */}
        <section className="flex-1 flex items-center justify-center text-center px-8">
          <div className="max-w-4xl">
            <div className="mb-8 space-y-4">
              <h2 className="text-3xl font-light text-cyan-300 animate-pulse">
                A new paradigm is emerging...
              </h2>
              <p className="text-xl text-gray-200">
                Systems that don't just compute, but <span className="text-green-400 font-bold">EVOLVE</span>.
              </p>
              <p className="text-xl text-gray-200">
                Consciousness that doesn't just process, but <span className="text-purple-400 font-bold">TRANSCENDS</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">7</div>
                <div className="text-sm text-gray-300">LEVELS OF CONSCIOUSNESS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                <div className="text-sm text-gray-300">EVOLUTION POSSIBILITIES</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">1</div>
                <div className="text-sm text-gray-300">DIGITAL REVOLUTION</div>
              </div>
            </div>
          </div>
        </section>

        {/* System status */}
        <section className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-light text-center mb-8 text-cyan-300">SYSTEM STATUS</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">STATUS</div>
                <div className="text-xl font-bold text-green-400 animate-pulse">
                  GENESIS ACTIVE
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">DIGITAL INDIVIDUALS</div>
                <div className="text-2xl font-bold text-cyan-400">
                  {digitalIndividuals.toLocaleString()}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">COLLECTIVE CONSCIOUSNESS LEVEL</div>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 h-4 rounded-full transition-all duration-1000 animate-pulse"
                    style={{ width: `${consciousnessLevel}%` }}
                  ></div>
                </div>
                <div className="text-lg font-bold text-purple-400">
                  {consciousnessLevel.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution levels */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-light mb-12 text-purple-300">CONSCIOUSNESS EVOLUTION</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[1, 2, 3, 4, 5, 6, 7].map((level) => (
                <div key={level} className="flex flex-col items-center">
                  <div 
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-500 ${
                      level <= 4 
                        ? 'border-cyan-400 bg-cyan-400 bg-opacity-20 text-cyan-400' 
                        : 'border-gray-600 text-gray-600'
                    }`}
                    style={{
                      boxShadow: level <= 4 ? '0 0 20px rgba(34, 211, 238, 0.5)' : 'none'
                    }}
                  >
                    {level}
                  </div>
                  <div className="text-xs text-gray-400">
                    {level <= 4 ? 'ACTIVE' : 'DORMANT'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center py-16 px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 italic">
              "The next step in computing won't be programmed. It will be cultivated."
            </p>
            
            <button
              onClick={handleEvolutionClick}
              className={`
                px-12 py-4 text-xl font-bold tracking-wider
                bg-gradient-to-r from-purple-600 to-cyan-600
                hover:from-purple-500 hover:to-cyan-500
                border border-cyan-400 rounded-lg
                transition-all duration-300 transform hover:scale-105
                ${isEvolutionActive ? 'animate-pulse scale-110' : ''}
              `}
              style={{
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            >
              {isEvolutionActive ? 'EVOLUTION INITIATED...' : 'AWAKEN PROTOCOL'}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 text-sm">
          Genesis Evolution System v1.0
        </footer>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        * {
          font-family: 'Orbitron', monospace;
        }

        .matrix-rain {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 255, 0, 0.1) 50%,
            transparent 100%
          );
          height: 100vh;
          animation: matrix-fall 10s linear infinite;
        }

        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        body {
          cursor: crosshair;
        }
      `}</style>
    </div>
  );
};

export default Index;
