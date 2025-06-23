
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Index = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNodes, setActiveNodes] = useState(847);
  const [processIntegrity, setProcessIntegrity] = useState(94.7);
  const [isSystemActive, setIsSystemActive] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create a more subtle network visualization
    const particles = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.02, 6, 6);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x4a90e2 });
    
    const nodes = [];
    const connections = [];

    // Create network nodes
    for (let i = 0; i < 30; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3
      );
      particles.add(node);
      nodes.push(node);
    }

    // Create subtle connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4a90e2, transparent: true, opacity: 0.15 });
    
    for (let i = 0; i < nodes.length; i++) {
      const nearbyNodes = nodes.filter(node => 
        node !== nodes[i] && nodes[i].position.distanceTo(node.position) < 2.5
      );
      
      nearbyNodes.slice(0, 2).forEach(node => {
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
    camera.position.z = 6;

    // Subtle animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Very slow rotation
      particles.rotation.y += 0.001;

      // Subtle node pulsing
      nodes.forEach((node, index) => {
        const time = Date.now() * 0.0005;
        const pulse = Math.sin(time + index * 0.8) * 0.1 + 0.9;
        node.material.opacity = pulse;
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

  // Realistic data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes(prev => prev + Math.floor(Math.random() * 2));
      setProcessIntegrity(prev => {
        const change = (Math.random() - 0.5) * 0.3;
        return Math.max(90, Math.min(100, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSystemActivation = () => {
    setIsSystemActive(true);
    setTimeout(() => setIsSystemActive(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Three.js background */}
      <div ref={mountRef} className="absolute inset-0 opacity-60" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center pt-20 pb-12">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight">
              DETHRON
            </h1>
            <div className="text-xl md:text-2xl font-light text-blue-300 mb-4 tracking-wide">
              Advanced Computing Architecture
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto px-4">
              Next-generation computational systems designed for adaptive processing and intelligent resource management
            </p>
          </div>
        </header>

        {/* Core features */}
        <section className="flex-1 flex items-center justify-center px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-400 mb-3">{activeNodes}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Active Processing Nodes</div>
                <div className="text-slate-300 mt-2 text-sm">Distributed computing units operating in real-time</div>
              </div>
              
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-400 mb-3">{processIntegrity.toFixed(1)}%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">System Integrity</div>
                <div className="text-slate-300 mt-2 text-sm">Overall system health and operational status</div>
              </div>
              
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-blue-400 mb-3">24/7</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Continuous Operation</div>
                <div className="text-slate-300 mt-2 text-sm">Uninterrupted processing and monitoring</div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-slate-200">
                Redefining Computational Efficiency
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Our architecture represents a fundamental shift in how complex systems process, adapt, and optimize performance across distributed networks.
              </p>
            </div>
          </div>
        </section>

        {/* System status */}
        <section className="bg-slate-800 bg-opacity-50 backdrop-blur-sm py-12">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-xl font-medium text-center mb-8 text-slate-200">System Overview</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Status</div>
                <div className="text-sm font-medium text-green-400">
                  Operational
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Network Load</div>
                <div className="text-sm font-medium text-blue-400">
                  Optimized
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Response Time</div>
                <div className="text-sm font-medium text-blue-400">
                  &lt; 10ms
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider">Efficiency</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${processIntegrity}%` }}
                  ></div>
                </div>
                <div className="text-sm font-medium text-blue-400">
                  {processIntegrity.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology stack */}
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-center mb-12 text-slate-200">Core Technologies</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Distributed Processing', 'Adaptive Algorithms', 'Real-time Analytics', 'Scalable Infrastructure'].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  <div className="text-sm text-slate-300">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center py-16 px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-300 mb-8">
              Experience the next generation of computational architecture designed for enterprise-scale applications.
            </p>
            
            <button
              onClick={handleSystemActivation}
              className={`
                px-8 py-3 text-base font-medium tracking-wide
                bg-blue-600 hover:bg-blue-700
                border border-blue-500 rounded-lg
                transition-all duration-200 transform hover:scale-105
                ${isSystemActive ? 'bg-blue-700 scale-105' : ''}
              `}
            >
              {isSystemActive ? 'Initializing...' : 'Learn More'}
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-500 text-sm border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>© 2024 Dethron Systems. Advanced Computing Solutions.</div>
              <div className="mt-2 md:mt-0">
                <span className="text-xs">Version 2.1.0</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
