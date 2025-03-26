'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface Testimonial {
  quote: string;
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  metrics: Record<string, string>;
}

const testimonials: Testimonial[] = [
  {
    quote: "Le meilleur système de numérisation",
    text: "Notre productivité a augmenté de 300% depuis que nous utilisons cette solution. L'interface est intuitive et la précision de reconnaissance est impressionnante.",
    author: "Sophia Moore",
    role: "CEO AZERTY Agency",
    avatar: "/images/woman.jpeg",
    rating: 5,
    metrics: {
      productivity: "+300%",
      accuracy: "99.9%",
      satisfaction: "5/5"
    }
  },
  {
    quote: "Du jamais vu auparavant",
    text: "L'intelligence artificielle derrière ce système est vraiment remarquable. Nos équipes peuvent maintenant se concentrer sur des tâches à plus haute valeur ajoutée.",
    author: "Adam Smith",
    role: "CEO Synthi AI",
    avatar: "/images/man.png",
    rating: 5,
    metrics: {
      timeSpared: "4h/jour",
      roi: "+250%",
      adoption: "100%"
    }
  },
  {
    quote: "Incroyable",
    text: "La facilité d'intégration et la qualité du support technique nous ont particulièrement impressionnés. Un investissement qui a rapidement porté ses fruits.",
    author: "Mike Johnson",
    role: "International Corp",
    avatar: "/images/man.png",
    rating: 5,
    metrics: {
      efficiency: "+180%",
      costs: "-40%",
      growth: "+125%"
    }
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, index, isActive }: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && cardRef.current && metricsRef.current) {
      // Animation d'entrée de la carte
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          y: 50,
          rotationX: -30,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Animation des métriques
      gsap.fromTo(Array.from(metricsRef.current.children),
        {
          opacity: 0,
          y: 20,
          rotationX: -30,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.3,
        }
      );
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105"
      style={{ perspective: "1000px" }}
    >
      {/* Quote */}
      <div className="relative mb-6">
        <svg className="absolute -top-4 -left-4 w-8 h-8 text-purple-200" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
        </svg>
        <p className="text-purple-600 font-bold text-2xl ml-6">{testimonial.quote}</p>
      </div>

      {/* Text */}
      <p className="text-gray-600 mb-8 leading-relaxed">{testimonial.text}</p>

      {/* Metrics */}
      <div ref={metricsRef} className="grid grid-cols-3 gap-4 mb-8">
        {Object.entries(testimonial.metrics).map(([key, value]) => (
          <div key={key} className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-purple-600 font-bold text-xl">{value}</div>
            <div className="text-sm text-gray-500 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center">
        <div className="relative w-16 h-16 mr-4">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900">{testimonial.author}</p>
          <p className="text-gray-500">{testimonial.role}</p>
          <div className="flex items-center mt-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (direction: 'prev' | 'next') => {
    if (isAnimating || !containerRef.current) return;
    setIsAnimating(true);

    const newIndex = direction === 'next'
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length;

    gsap.to(containerRef.current, {
      opacity: 0,
      y: direction === 'next' ? -50 : 50,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.to(containerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          onComplete: () => setIsAnimating(false)
        });
      }
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-gray-600">Découvrez l&apos;impact de notre solution sur leurs activités</p>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => handleNavigation('prev')}
            className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all hover:scale-110"
            disabled={isAnimating}
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => handleNavigation('next')}
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-purple-600 p-4 rounded-full shadow-lg hover:shadow-xl transform transition-all hover:scale-110"
            disabled={isAnimating}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}