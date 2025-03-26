'use client';

import React, { useEffect, useRef } from 'react';
import { Stethoscope, Gavel, BookOpen, Banknote, Check } from "lucide-react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface UseCaseStats {
  efficiency: string;
  timeReduction: string;
  satisfaction: string;
}

interface UseCase {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: UseCaseStats;
  features: string[];
  color: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Médical",
    description: "Idéal pour la gestion et l'archivage des dossiers médicaux et administratifs en milieu hospitalier ou cabinet médical.",
    stats: {
      efficiency: "95%",
      timeReduction: "75%",
      satisfaction: "4.8/5"
    },
    features: [
      "Reconnaissance automatique des ordonnances",
      "Classification des dossiers patients",
      "Extraction des données médicales"
    ],
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 2,
    icon: <Gavel className="w-8 h-8" />,
    title: "Juridique",
    description: "Solution complète pour les cabinets d'avocats et les études notariales qui ont besoin de traiter de grandes quantités de documents.",
    stats: {
      efficiency: "90%",
      timeReduction: "65%",
      satisfaction: "4.7/5"
    },
    features: [
      "Analyse des contrats juridiques",
      "Extraction des clauses importantes",
      "Archivage légal sécurisé"
    ],
    color: "from-blue-400 to-indigo-600"
  },
  {
    id: 3,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Éducation",
    description: "Parfait pour les établissements d'enseignement qui souhaitent numériser et organiser leurs archives pédagogiques.",
    stats: {
      efficiency: "88%",
      timeReduction: "70%",
      satisfaction: "4.6/5"
    },
    features: [
      "Gestion des dossiers étudiants",
      "Organisation des ressources pédagogiques",
      "Suivi des évaluations"
    ],
    color: "from-yellow-400 to-orange-600"
  },
  {
    id: 4,
    icon: <Banknote className="w-8 h-8" />,
    title: "Financier",
    description: "Permet aux institutions financières de traiter efficacement les formulaires, contrats et autres documents administratifs.",
    stats: {
      efficiency: "93%",
      timeReduction: "80%",
      satisfaction: "4.9/5"
    },
    features: [
      "Traitement des relevés bancaires",
      "Analyse des documents financiers",
      "Détection des fraudes"
    ],
    color: "from-purple-400 to-pink-600"
  }
];

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
}

const UseCaseCard = ({ useCase, index }: UseCaseCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !iconRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Animation initiale de la carte
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      rotationX: -30,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out"
    });

    // Animation de l'icône
    gsap.to(iconRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top center",
        scrub: 1
      },
      rotateY: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    });

    // Animation au hover
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        rotateY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative bg-white rounded-xl overflow-hidden shadow-xl transform-gpu"
      style={{ perspective: "1000px" }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-10`} />

      <div className="relative p-6 z-10">
        {/* Icon Section */}
        <div ref={iconRef} className="mb-6">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${useCase.color} p-3 flex items-center justify-center text-white`}>
            {useCase.icon}
          </div>
        </div>

        {/* Content Section */}
        <div ref={contentRef}>
          <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
          <p className="text-gray-600 mb-6">{useCase.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(useCase.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-xl font-bold text-gray-900">{value}</div>
                <div className="text-sm text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <ul className="space-y-2">
            {useCase.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <Check className="w-5 h-5 mr-2 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=100",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 section-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions adaptées à votre secteur
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Notre technologie s&apos;adapte aux besoins spécifiques de chaque industrie,
            offrant des solutions personnalisées et efficaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.id} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}