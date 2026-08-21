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
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Lighting - purple, lavender, iridescent accents
    const ambientLight = new THREE.AmbientLight(0x180c28, 2.8);
    scene.add(ambientLight);

    const purpleLight1 = new THREE.PointLight(0xa855f7, 45, 60);
    purpleLight1.position.set(12, 10, 12);
    scene.add(purpleLight1);

    const fuchsiaLight = new THREE.PointLight(0xd946ef, 35, 50);
    fuchsiaLight.position.set(-12, -8, 10);
    scene.add(fuchsiaLight);

    const cyanAccent = new THREE.PointLight(0x818cf8, 25, 40);
    cyanAccent.position.set(0, -12, 8);
    scene.add(cyanAccent);

    const topDirectional = new THREE.DirectionalLight(0xffffff, 1.4);
    topDirectional.position.set(5, 15, 12);
    scene.add(topDirectional);

    // Premium 3D Physical Materials (Iridescent Chrome & Deep Glass)
    const chromePurpleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2e1065,
      emissive: 0x17072e,
      metalness: 0.9,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      transmission: 0.1,
    });

    const glossyLavenderMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x581c87,
      emissive: 0x3b0764,
      metalness: 0.65,
      roughness: 0.2,
      clearcoat: 0.9,
      clearcoatRoughness: 0.15,
    });

    const iridescentAccentMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4338ca,
      emissive: 0x1e1b4b,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });

    // 3D Objects Group
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // 1. Floating Torus Knot (Creative Energy, top-right background)
    const torusKnotGeo = new THREE.TorusKnotGeometry(1.6, 0.45, 120, 20);
    const torusKnot = new THREE.Mesh(torusKnotGeo, chromePurpleMaterial);
    torusKnot.position.set(9.5, 5.5, -4);
    torusKnot.scale.set(0.9, 0.9, 0.9);
    objectsGroup.add(torusKnot);

    // 2. 3D Rounded Phone / Card Slab (Floating on the left)
    const cardShape = new THREE.BoxGeometry(2.4, 4.2, 0.3);
    const cardMesh = new THREE.Mesh(cardShape, glossyLavenderMaterial);
    cardMesh.position.set(-10.5, 2.5, -3);
    cardMesh.rotation.set(0.3, 0.6, -0.2);
    objectsGroup.add(cardMesh);

    // 3. 3D Camera Aperture / Lens Ring (Floating bottom right)
    const lensRingGeo = new THREE.TorusGeometry(2.0, 0.3, 30, 80);
    const lensRing = new THREE.Mesh(lensRingGeo, iridescentAccentMaterial);
    lensRing.position.set(10, -6, -3);
    lensRing.rotation.set(Math.PI / 3, 0.4, 0);
    objectsGroup.add(lensRing);

    // 4. Floating 3D Capsule Pill (Creative brand token, bottom left)
    const capsuleGeo = new THREE.CapsuleGeometry(0.85, 2.0, 16, 32);
    const capsule = new THREE.Mesh(capsuleGeo, chromePurpleMaterial);
    capsule.position.set(-9, -5.5, -2);
    capsule.rotation.z = Math.PI / 3.5;
    objectsGroup.add(capsule);

    // 5. 3D Notification / Engagement Orb (Top left)
    const sphereGeo = new THREE.SphereGeometry(1.1, 32, 32);
    const sphere = new THREE.Mesh(sphereGeo, glossyLavenderMaterial);
    sphere.position.set(-8, 6.5, -4);
    objectsGroup.add(sphere);

    // 6. Subtle Floating Chrome Icosahedron (Geometric spark, center top)
    const icosaGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const icosa = new THREE.Mesh(icosaGeo, iridescentAccentMaterial);
    icosa.position.set(4, 7, -5);
    objectsGroup.add(icosa);

    // Mouse coordinates tracking with smooth damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0006;
      mouseY = (e.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Scroll Parallax
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.003;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

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

      objectsGroup.rotation.y = targetX * 1.4;
      objectsGroup.rotation.x = targetY * 1.1;
      objectsGroup.position.y = -scrollY * 0.5;

      // Soft natural floating oscillations
      torusKnot.rotation.x = elapsedTime * 0.22;
      torusKnot.rotation.y = elapsedTime * 0.32;
      torusKnot.position.y = 5.5 + Math.sin(elapsedTime * 1.2) * 0.4;

      cardMesh.rotation.y = 0.6 + Math.sin(elapsedTime * 0.8) * 0.25;
      cardMesh.rotation.x = 0.3 + Math.cos(elapsedTime * 0.9) * 0.15;
      cardMesh.position.y = 2.5 + Math.sin(elapsedTime * 1.0) * 0.3;

      lensRing.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.7) * 0.2;
      lensRing.rotation.y = elapsedTime * 0.25;
      lensRing.position.y = -6 + Math.cos(elapsedTime * 1.3) * 0.35;

      capsule.rotation.x = elapsedTime * 0.2;
      capsule.rotation.z = Math.PI / 3.5 + Math.sin(elapsedTime * 0.8) * 0.2;
      capsule.position.y = -5.5 + Math.cos(elapsedTime * 1.1) * 0.3;

      sphere.position.y = 6.5 + Math.sin(elapsedTime * 1.4) * 0.3;
      sphere.position.x = -8 + Math.cos(elapsedTime * 1.1) * 0.2;

      icosa.rotation.x = elapsedTime * 0.35;
      icosa.rotation.y = elapsedTime * 0.25;
      icosa.position.y = 7 + Math.sin(elapsedTime * 0.9 + 1) * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusKnotGeo.dispose();
      cardShape.dispose();
      lensRingGeo.dispose();
      capsuleGeo.dispose();
      sphereGeo.dispose();
      icosaGeo.dispose();
      chromePurpleMaterial.dispose();
      glossyLavenderMaterial.dispose();
      iridescentAccentMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="three-canvas-container"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-75 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
