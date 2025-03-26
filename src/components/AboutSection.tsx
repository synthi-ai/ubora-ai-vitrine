"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);
  const graphicRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize paragraphs refs
  const addToParagraphsRef = (el: HTMLParagraphElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  const playVideo = () => {
    setVideoPlaying(true);
  };

  useEffect(() => {
    // Auto-play video when component mounts
    setVideoPlaying(true);

    if (!sectionRef.current) return;

    // Clean up previous animations
    animationRef.current?.kill();

    // Create master timeline
    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
        markers: false // Set to true for debugging
      }
    });

    // Video container animation
    animationRef.current.fromTo(
      videoContainerRef.current,
      { 
        autoAlpha: 0,
        y: 40,
        scale: 0.95
      },
      { 
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      0
    );

    // Title animation (character by character)
    if (titleRef.current) {
      const titleText = titleRef.current.textContent;
      titleRef.current.textContent = "";
      
      animationRef.current.to({}, {
        duration: 0.3
      });
      
      if (titleText) {
        titleRef.current.style.opacity = "1";
        const chars = titleText.split("");
        
        chars.forEach((char, i) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.style.display = "inline-block";
          charSpan.style.opacity = "0";
          charSpan.style.transform = "translateY(20px)";
          titleRef.current?.appendChild(charSpan);
          
          animationRef.current?.to(
            charSpan,
            {
              opacity: 1,
              y: 0,
              duration: 0.1,
              ease: "power2.out"
            },
            0.4 + i * 0.03
          );
        });
      }
    }

    // Underline animation
    animationRef.current.fromTo(
      ".title-underline",
      { 
        scaleX: 0,
        transformOrigin: "left center"
      },
      { 
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out"
      },
      0.7
    );

    // Paragraphs animation (word by word)
    paragraphsRef.current.forEach((paragraph, index) => {
      const words = paragraph.textContent?.split(" ") || [];
      paragraph.textContent = "";
      
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + " ";
        wordSpan.style.display = "inline-block";
        wordSpan.style.opacity = "0";
        wordSpan.style.transform = "translateY(10px)";
        paragraph.appendChild(wordSpan);
        
        animationRef.current?.to(
          wordSpan,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          },
          0.8 + index * 0.2 + wordIndex * 0.03
        );
      });
    });

    // Graphic elements animation
    animationRef.current.fromTo(
      graphicRef.current?.children,
      { 
        autoAlpha: 0,
        y: 20,
        rotation: -5
      },
      { 
        autoAlpha: 1,
        y: 0,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      1
    );

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#f5f9f6] py-16 px-4 md:px-8 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Video Component */}
        <div 
          ref={videoContainerRef}
          className="relative w-full aspect-video max-h-[600px] mb-14 md:mb-20 rounded-xl overflow-hidden shadow-lg"
        >
          {!videoPlaying ? (
            <>
              <Image 
                src="/images/OCR.webp" 
                alt="Système de numérisation de documents" 
                width={1920} 
                height={1080} 
                className="w-full h-full object-cover rounded-xl brightness-75"
                priority
              />
              <button
                onClick={playVideo}
                className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-[#8cd139] rounded-full flex items-center justify-center hover:bg-[#79b830] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8cd139] focus:ring-opacity-50"
                aria-label="Lancer la vidéo de démonstration"
              >
                <Play size={28} color="white" className="ml-1" />
              </button>
            </>
          ) : (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              muted // Required for autoplay in most browsers
              loop
              onEnded={() => setVideoPlaying(false)}
            >
              <source src="/videos/Optical Character Recognition (OCR).mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo.
            </video>
          )}
        </div>

        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-1/3">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold text-[#333] mb-6 md:mb-8 opacity-0"
            >
              À Propos
              <span className="title-underline block w-16 h-1 bg-[#8cd139] mt-4"></span>
            </h2>

            {/* Graphic Element */}
            <div 
              ref={graphicRef}
              className="relative h-48 w-full hidden md:block"
            >
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#4cd964] rounded-md shadow-md transform transition-all hover:scale-105"></div>
              <div className="absolute top-2 left-20 w-12 h-10 bg-[#f0f0f0] rounded-sm transform rotate-45 shadow-md transition-all hover:scale-105"></div>
              <div className="absolute top-24 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm shadow-md transition-all hover:scale-105"></div>
              <div className="absolute top-32 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm shadow-md transition-all hover:scale-105"></div>
              <div className="absolute top-40 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm shadow-md transition-all hover:scale-105"></div>
              <div className="absolute top-48 left-4 w-36 h-6 bg-[#e6e6fa] rounded-sm shadow-md transition-all hover:scale-105"></div>
            </div>
          </div>

          <div className="md:w-2/3">
            <p 
              ref={el => addToParagraphsRef(el)}
              className="text-[#444] mb-6 leading-relaxed md:text-lg"
            >
              Notre système de numérisation et d&apos;extraction d&apos;informations est une solution
              hautement conçue pour transformer la manière dont les organisations gèrent leurs
              documents. Nous combinons intelligence artificielle et automatisation pour offrir
              une expérience utilisateur exceptionnelle.
            </p>
            <p 
              ref={el => addToParagraphsRef(el)}
              className="text-[#444] leading-relaxed md:text-lg"
            >
              Grâce à des technologies avancées de reconnaissance optique de caractères (OCR) et d&apos;analyse sémantique,
              notre solution extrait avec précision les données pertinentes de divers formats de documents,
              réduisant ainsi les erreurs humaines et améliorant l&apos;efficacité opérationnelle.
            </p>
          </div>
        </div>
      </div>

      {/* GSAP Styles */}
      <style jsx global>{`
        .play-button::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .graphic-element {
            display: none;
          }
          
          video {
            object-position: center;
          }
        }

        /* Smooth text animation styles */
        span[style*="display: inline-block"] {
          white-space: pre-wrap;
        }
      `}</style>
    </section>
  );
}