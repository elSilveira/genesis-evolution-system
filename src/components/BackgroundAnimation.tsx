
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create sophisticated particle system
    const particleCount = 100;
    const particles = new THREE.Group();
    const nodes = [];
    const connections = [];

    // Create network nodes with varying sizes
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 0.03 + 0.01;
      const nodeGeometry = new THREE.SphereGeometry(size, 8, 8);
      const nodeMaterial = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.7, 0.5 + Math.random() * 0.3),
        transparent: true,
        opacity: 0.6 + Math.random() * 0.4
      });
      
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      
      // Add velocity for movement
      node.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        ),
        originalPosition: node.position.clone()
      };
      
      particles.add(node);
      nodes.push(node);
    }

    // Create dynamic connections
    const updateConnections = () => {
      // Remove old connections
      connections.forEach(line => scene.remove(line));
      connections.length = 0;

      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x4a90e2, 
        transparent: true, 
        opacity: 0.1 
      });

      nodes.forEach((nodeA, i) => {
        const nearbyNodes = nodes.filter((nodeB, j) => 
          i !== j && nodeA.position.distanceTo(nodeB.position) < 4
        );
        
        nearbyNodes.slice(0, 3).forEach(nodeB => {
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

    scene.add(particles);
    camera.position.z = 8;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.0005;

      // Animate particles
      nodes.forEach((node, index) => {
        // Gentle floating movement
        const userData = node.userData;
        node.position.add(userData.velocity);
        
        // Boundary checking
        if (Math.abs(node.position.x) > 10) userData.velocity.x *= -1;
        if (Math.abs(node.position.y) > 7.5) userData.velocity.y *= -1;
        if (Math.abs(node.position.z) > 5) userData.velocity.z *= -1;

        // Gentle pulsing
        const pulse = Math.sin(time * 2 + index * 0.5) * 0.2 + 0.8;
        node.material.opacity = pulse * 0.6;
        
        // Color cycling
        const hue = (time * 0.5 + index * 0.1) % 1;
        node.material.color.setHSL(0.6 + hue * 0.2, 0.7, 0.5 + pulse * 0.3);
      });

      // Slow rotation
      particles.rotation.y = time * 0.1;
      particles.rotation.x = Math.sin(time * 0.5) * 0.1;

      // Update connections periodically
      if (Math.floor(time * 2) % 10 === 0) {
        updateConnections();
      }

      renderer.render(scene, camera);
    };

    // Initial connections
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
  }, []);

  return <div ref={mountRef} className="fixed inset-0 opacity-40 pointer-events-none" />;
};

export default BackgroundAnimation;
