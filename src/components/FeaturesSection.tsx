'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TiLocationArrow } from 'react-icons/ti';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
  image: string;
}

// Configuration des fonctionnalités
const features: Feature[] = [
  {
    title: "Numérisation polyvalente",
    description: "Numérisez tout type de document (PDF, images, documents manuscrits) avec une précision exceptionnelle.",
    icon: "📄",
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="70" height="90" x="15" y="5" fill="#8cd139" rx="4"/>
        <rect width="50" height="10" x="25" y="20" fill="white" rx="2"/>
        <rect width="50" height="10" x="25" y="40" fill="white" rx="2"/>
        <rect width="50" height="10" x="25" y="60" fill="white" rx="2"/>
      </svg>
    `)}`,
  },
  {
    title: "OCR multilingue",
    description: "Reconnaissance de caractères dans plus de 190 langues avec un taux de précision supérieur à 99%.",
    icon: "🌍",
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="#8cd139"/>
        <text x="50" y="45" font-size="12" fill="white" text-anchor="middle">ABC</text>
        <text x="50" y="65" font-size="12" fill="white" text-anchor="middle">文字</text>
      </svg>
    `)}`,
  },
  {
    title: "Extraction d'entités nommées",
    description: "Identification automatique des noms, dates, montants et autres informations cruciales.",
    icon: "🎯",
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#8cd139" stroke-width="4"/>
        <circle cx="50" cy="50" r="20" fill="#8cd139"/>
        <circle cx="50" cy="50" r="10" fill="white"/>
      </svg>
    `)}`,
  },
  {
    title: "Analyse sémantique",
    description: "Compréhension approfondie du contexte et du sens des documents traités.",
    icon: "🧠",
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M30,50 Q50,20 70,50" fill="none" stroke="#8cd139" stroke-width="4"/>
        <circle cx="30" cy="50" r="10" fill="#8cd139"/>
        <circle cx="70" cy="50" r="10" fill="#8cd139"/>
      </svg>
    `)}`,
  },
  {
    title: "Gestion des données",
    description: "Stockage sécurisé et organisation intelligente de vos documents numérisés.",
    icon: "💾",
    image: `data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="60" height="70" x="20" y="15" fill="#8cd139" rx="4"/>
        <circle cx="50" cy="35" r="10" fill="white"/>
        <rect width="40" height="6" x="30" y="55" fill="white" rx="2"/>
        <rect width="40" height="6" x="30" y="65" fill="white" rx="2"/>
      </svg>
    `)}`,
  },
];

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

// Composant BentoTilt avec animations 3D
const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`transform-gpu transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
  className?: string;
}

// Composant FeatureCard avec animations
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation d'entrée
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      delay: index * 0.1,
    });
  }, [index]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-lg overflow-hidden relative group ${className}`}
    >
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 flex-shrink-0 relative">
          <Image
            src={feature.image}
            alt={feature.title}
            width={96}
            height={96}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mt-4 relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-green-600 px-5 py-2 text-xs uppercase text-white"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.3), transparent)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">En savoir plus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant Visualization avec animations 3D
const Visualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animation de fond
    const particles = [...Array(15)].map((_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-green-500 rounded-full';
      containerRef.current?.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * 400 - 200,
        y: Math.random() * 400 - 200,
        opacity: 0,
      });

      gsap.to(particle, {
        duration: 3 + Math.random() * 3,
        x: "+=100",
        y: "+=100",
        opacity: 0.6,
        scale: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return particle;
    });

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <BentoTilt 
      className="relative w-full h-[600px] bg-gradient-to-br from-green-700 to-green-900 rounded-2xl overflow-hidden border border-green-300/20"
    >
      <div ref={containerRef} className="absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <h4 className="text-3xl font-bold text-white mb-4">
              Exploration 3D
            </h4>
            <p className="text-green-200 max-w-md mx-auto">
              Interagissez avec notre plateforme pour découvrir toutes ses fonctionnalités
            </p>
          </div>
        </div>
      </div>
    </BentoTilt>
  );
};

// Composant principal
const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation du titre
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Animation des éléments
    const featureItems = gsap.utils.toArray<HTMLElement>(".feature-item");
    featureItems.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "back.out(1.7)",
      });
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#edf8ee] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Fonctionnalités immersives
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez notre suite complète avec une expérience interactive 3D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                index={index}
                className="feature-item"
              />
            ))}
          </div>
          
          <div className="sticky top-8">
            <Visualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;