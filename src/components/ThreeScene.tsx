import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Setup Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Subtle lighting - soft purple & silver highlights
    const ambientLight = new THREE.AmbientLight(0x1a1226, 2.5);
    scene.add(ambientLight);

    const purpleLight1 = new THREE.PointLight(0xa855f7, 50, 50);
    purpleLight1.position.set(10, 8, 10);
    scene.add(purpleLight1);

    const purpleLight2 = new THREE.PointLight(0x7c3aed, 40, 40);
    purpleLight2.position.set(-10, -6, 8);
    scene.add(purpleLight2);

    const topWhiteLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topWhiteLight.position.set(0, 12, 10);
    scene.add(topWhiteLight);

    // Chrome/Iridescent Soft Materials
    const chromePurpleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x221338,
      emissive: 0x120722,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });

    const softLavenderMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4c1d95,
      emissive: 0x2e1065,
      metalness: 0.6,
      roughness: 0.25,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });

    // 3D Objects Group
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // 1. Floating Torus Knot (Futuristic accent, top right)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.4, 0.45, 100, 16);
    const torusKnot = new THREE.Mesh(torusKnotGeo, chromePurpleMaterial);
    torusKnot.position.set(7.5, 4.5, -2);
    torusKnot.scale.set(0.85, 0.85, 0.85);
    objectsGroup.add(torusKnot);

    // 2. Smooth Floating Capsule (Pill accent, bottom left)
    const capsuleGeo = new THREE.CapsuleGeometry(0.8, 1.8, 16, 32);
    const capsule = new THREE.Mesh(capsuleGeo, softLavenderMaterial);
    capsule.position.set(-8, -4, -1);
    capsule.rotation.z = Math.PI / 4;
    capsule.scale.set(0.9, 0.9, 0.9);
    objectsGroup.add(capsule);

    // 3. Faceted Gem / Icosahedron (Top left subtle accent)
    const icosaGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const icosa = new THREE.Mesh(icosaGeo, chromePurpleMaterial);
    icosa.position.set(-7.5, 5, -3);
    icosa.scale.set(0.7, 0.7, 0.7);
    objectsGroup.add(icosa);

    // 4. Smooth floating ring (Bottom right accent)
    const ringGeo = new THREE.TorusGeometry(1.6, 0.22, 24, 64);
    const ring = new THREE.Mesh(ringGeo, softLavenderMaterial);
    ring.position.set(8, -5, -2);
    ring.rotation.x = Math.PI / 3;
    objectsGroup.add(ring);

    // Mouse coordinates tracking with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize with ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      objectsGroup.rotation.y = targetX * 1.5;
      objectsGroup.rotation.x = targetY * 1.2;

      // Soft natural floating oscillations
      torusKnot.rotation.x = elapsedTime * 0.25;
      torusKnot.rotation.y = elapsedTime * 0.35;
      torusKnot.position.y = 4.5 + Math.sin(elapsedTime * 1.2) * 0.35;

      capsule.rotation.x = elapsedTime * 0.2;
      capsule.rotation.z = Math.PI / 4 + Math.sin(elapsedTime * 0.8) * 0.2;
      capsule.position.y = -4 + Math.cos(elapsedTime * 1.1) * 0.3;

      icosa.rotation.x = elapsedTime * 0.3;
      icosa.rotation.y = elapsedTime * 0.2;
      icosa.position.y = 5 + Math.sin(elapsedTime * 0.9 + 1) * 0.25;

      ring.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.7) * 0.2;
      ring.rotation.y = elapsedTime * 0.3;
      ring.position.y = -5 + Math.cos(elapsedTime * 1.3) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusKnotGeo.dispose();
      capsuleGeo.dispose();
      icosaGeo.dispose();
      ringGeo.dispose();
      chromePurpleMaterial.dispose();
      softLavenderMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
