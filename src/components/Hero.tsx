"use client";

import React, { useEffect, useRef } from 'react';
import { Play, FileCheck } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 1.5 }
    });

    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1 }
    ).fromTo('.hero-chart', 
      { scaleY: 0, transformOrigin: 'bottom' }, 
      { scaleY: 1 }, '-=0.5'
    ).fromTo('.hero-image', 
      { x: 50, opacity: 0 }, 
      { x: 0, opacity: 1 }, '-=0.5'
    ).fromTo('.floating-element', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1 }, '-=0.5'
    );

    // Parallax effect
    if (heroRef.current) {
      heroRef.current.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gsap.to('.hero-image', {
          x: x * 20 - 10,
          y: y * 20 - 10,
          duration: 1.5
        });

        gsap.to('.floating-element', {
          x: x * 10 - 5,
          y: y * 10 - 5,
          stagger: 0.1,
          duration: 1.5
        });
      });
    }

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', () => {});
      }
    };
  }, []);

  // 3D Document Component (using primitive shapes)
  const DocumentModel = () => {
    const ref = useRef<THREE.Group>(null);
    
    useFrame((state) => {
      if (ref.current) {
        ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
        ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      }
    });

    return (
      <group ref={ref} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh>
          <boxGeometry args={[3, 4, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 3.8]} />
          <meshStandardMaterial color="#8cd139" emissive="#8cd139" emissiveIntensity={0.3} />
        </mesh>
      </group>
    );
  };

  const FloatingShapes = () => {
    const ref = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();
    
    useFrame((state) => {
      if (ref.current) {
        ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
        ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      }
    });

    return (
      <group position={[viewport.width * 0.2, viewport.height * 0.1, 0]}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh ref={ref}>
            <torusGeometry args={[1, 0.4, 16, 32]} />
            <meshStandardMaterial color="#8cd139" emissive="#8cd139" emissiveIntensity={0.5} />
          </mesh>
        </Float>
      </group>
    );
  };

  return (
    <section 
      id="accueil" 
      ref={heroRef}
      className="relative bg-[#edf8ee] w-full h-[900px] py-16 px-4 sm:px-8 overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0" ref={canvasRef}>
        <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingShapes />
          <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          {/* Left side - Text content */}
          <div className="md:w-1/2 z-10" ref={textRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-8 md:mb-14 leading-tight">
              Transformez vos documents en données exploitables!
            </h1>

            {/* Chart visualization */}
            <div className="relative h-16 mb-12 md:mb-16 hero-chart">
              <div className="absolute bottom-0 left-0 right-0 h-full">
                <div className="relative h-full w-full">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0,40 L5,35 L10,38 L15,30 L20,32 L25,28 L30,25 L35,15 L40,20 L45,18 L50,10 L55,15 L60,12 L65,18 L70,15 L75,20 L80,18 L85,22 L90,20 L95,15 L100,10"
                      stroke="#8cd139"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0,40 L5,35 L10,38 L15,30 L20,32 L25,28 L30,25 L35,15 L40,20 L45,18 L50,10 L55,15 L60,12 L65,18 L70,15 L75,20 L80,18 L85,22 L90,20 L95,15 L100,10 L100,40 L0,40"
                      fill="url(#gradient)"
                      fillOpacity="0.2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8cd139" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8cd139" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-[#333] mb-6 md:mb-8 text-lg">
              Un système de numérisation et d&apos;extraction d&apos;informations adapté à tous les secteurs.
            </p>

            <div className="flex gap-4 mt-8 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-full flex items-center gap-2">
                <Play size={16} fill="white" />
                <span className="font-bold">Demander une démo gratuite</span>
              </button>
            </div>
          </div>

          {/* Right side - Image and 3D elements */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative h-full flex items-center hero-image">
            <div className="relative w-full max-w-md mx-auto">
              {/* 3D Document */}
              <div className="absolute -top-20 right-0 w-64 h-64 z-10">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <DocumentModel />
                </Canvas>
              </div>

              {/* Image principale */}
              <div className="bg-green-600 rounded-lg p-3 absolute top-0 left-0 w-full h-full -z-10 transform rotate-2"></div>
              <Image
                src="/images/ocr.svg"
                alt="Dashboard"
                width={500}
                height={350}
                className="rounded-lg shadow-xl hero-image"
              />

              {/* Floating UI elements */}
              <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 bg-white shadow-lg px-4 py-3 rounded-lg flex flex-col space-y-1 w-44 floating-element">
                <span className="text-gray-400 text-xs">Sélectionnez</span>
                <span className="text-black font-bold">Document 1</span>
                <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white text-xs font-semibold px-3 py-1 rounded-full self-end">
                  Numériser
                </button>
              </div>

              <div className="absolute bottom-12 -left-12 translate-x-6 translate-y-6 bg-white shadow-lg px-4 py-3 rounded-lg flex flex-col border-b-4 border-green-500 space-y-1 floating-element">
                <span className="text-gray-500 text-xs">Vitesse de traitement</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-600 text-lg font-bold">45s</span>
                </div>
              </div>

              <div className="absolute top-11 right-8 w-12 h-12 bg-[#6366f1] rounded-lg flex items-center justify-center z-20 shadow-lg floating-element hover:scale-110 transition-transform">
                <FileCheck size={20} color="white" />
              </div>

              <div className="absolute -bottom-5 right-2 w-12 h-12 bg-[#6366f1] rounded-lg flex items-center justify-center z-20 shadow-lg floating-element hover:scale-110 transition-transform">
                <FileCheck size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;