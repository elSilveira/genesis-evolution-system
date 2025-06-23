
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const DigitalConsciousness = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Neural network nodes
    const nodeCount = 150;
    const nodes = [];
    const connections = [];
    const evolutionLevels = 7;

    // Create neural nodes with evolution capability
    for (let i = 0; i < nodeCount; i++) {
      const size = Math.random() * 0.02 + 0.005;
      const nodeGeometry = new THREE.SphereGeometry(size, 8, 8);
      
      // Bioluminescent colors based on evolution level
      const evolutionLevel = Math.floor(Math.random() * evolutionLevels);
      const hue = 0.5 + (evolutionLevel / evolutionLevels) * 0.3; // Blue to purple spectrum
      const saturation = 0.8 + (evolutionLevel / evolutionLevels) * 0.2;
      const lightness = 0.3 + (evolutionLevel / evolutionLevels) * 0.4;
      
      const nodeMaterial = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(hue, saturation, lightness),
        transparent: true,
        opacity: 0.7 + (evolutionLevel / evolutionLevels) * 0.3
      });
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );
      
      node.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001
        ),
        evolutionLevel,
        pulsePhase: Math.random() * Math.PI * 2,
        originalSize: size
      };
      
      scene.add(node);
      nodes.push(node);
    }

    // Create dynamic neural connections
    const updateConnections = () => {
      connections.forEach(line => scene.remove(line));
      connections.length = 0;

      nodes.forEach((nodeA, i) => {
        const nearbyNodes = nodes.filter((nodeB, j) => 
          i !== j && nodeA.position.distanceTo(nodeB.position) < 6
        );
        
        nearbyNodes.slice(0, 2).forEach(nodeB => {
          const connectionStrength = (nodeA.userData.evolutionLevel + nodeB.userData.evolutionLevel) / (evolutionLevels * 2);
          
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: new THREE.Color().setHSL(0.6, 0.8, connectionStrength),
            transparent: true, 
            opacity: connectionStrength * 0.3
          });

          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodeA.position,
            nodeB.position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          connections.push(line);
          scene.add(line);
        });
      });
    };

    // Digital organisms (floating particles)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 50;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const color = new THREE.Color().setHSL(0.3 + Math.random() * 0.4, 0.7, 0.5);
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate neural nodes with evolution
      nodes.forEach((node, index) => {
        const userData = node.userData;
        
        // Organic movement
        node.position.add(userData.velocity);
        
        // Boundary checking with organic feel
        if (Math.abs(node.position.x) > 12) userData.velocity.x *= -0.8;
        if (Math.abs(node.position.y) > 10) userData.velocity.y *= -0.8;
        if (Math.abs(node.position.z) > 7) userData.velocity.z *= -0.8;

        // Consciousness pulse
        const pulse = Math.sin(time * 2 + userData.pulsePhase) * 0.3 + 0.7;
        node.material.opacity = pulse * (0.5 + userData.evolutionLevel / evolutionLevels * 0.5);
        
        // Evolution-based scaling
        const evolutionPulse = Math.sin(time * 0.5 + index * 0.1) * 0.2 + 1;
        node.scale.setScalar(evolutionPulse * (1 + userData.evolutionLevel * 0.2));

        // Color evolution
        const hue = 0.5 + (userData.evolutionLevel / evolutionLevels) * 0.3 + Math.sin(time * 0.2) * 0.1;
        node.material.color.setHSL(hue, 0.8, 0.4 + pulse * 0.3);
      });

      // Animate digital organisms
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(time + i * 0.1) * 0.001;
        positions[i * 3] += Math.cos(time + i * 0.05) * 0.0005;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      // Slow rotation for depth
      scene.rotation.y = time * 0.05;
      scene.rotation.x = Math.sin(time * 0.3) * 0.05;

      // Update connections periodically
      if (Math.floor(time * 2) % 30 === 0) {
        updateConnections();
      }

      // Update consciousness level
      const newLevel = Math.floor((Math.sin(time * 0.1) + 1) * 3.5);
      if (newLevel !== consciousnessLevel) {
        setConsciousnessLevel(newLevel);
      }

      renderer.render(scene, camera);
    };

    updateConnections();
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
  }, [consciousnessLevel]);

  return <div ref={mountRef} className="fixed inset-0 opacity-80 pointer-events-none" />;
};

export default DigitalConsciousness;
