"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

export default function AboutSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
  };

  return (
    <section className="bg-[#f5f9f6] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Composant Vidéo */}
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-14 rounded-xl overflow-hidden">
          {!videoPlaying ? (
            <>
              <img
                src="/images/OCR.webp"
                alt="Système de numérisation de documents"
                className="w-full h-full object-cover rounded-xl brightness-75"
              />
              <button
                onClick={playVideo}
                className="absolute inset-0 m-auto w-16 h-16 bg-[#8cd139] rounded-full flex items-center justify-center hover:bg-[#79b830] transition-colors"
                aria-label="Lancer la vidéo de démonstration"
              >
                <Play size={28} color="white" className="ml-1" />
              </button>
            </>
          ) : (
            <video
              className="w-full h-full"
              controls
              autoPlay
              onEnded={() => setVideoPlaying(false)} // Réinitialise après la lecture
            >
              <source src="/videos/Optical Character Recognition (OCR).mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéo.
            </video>
          )}
        </div>

        {/* Section À Propos */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-[#333] mb-6">À Propos</h2>

            {/* Graphique simplifié */}
            <div className="relative h-40 w-full">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#4cd964] rounded-md"></div>
              <div className="absolute top-2 left-20 w-12 h-10 bg-[#f0f0f0] rounded-sm transform rotate-45"></div>
              <div className="absolute top-20 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm"></div>
              <div className="absolute top-30 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm"></div>
              <div className="absolute top-40 left-4 w-48 h-6 bg-[#e6e6fa] rounded-sm"></div>
              <div className="absolute top-50 left-4 w-36 h-6 bg-[#e6e6fa] rounded-sm"></div>
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="text-[#444] mb-6 leading-relaxed">
              Notre système de numérisation et d&apos;extraction d&apos;informations est une solution
              hautement conçue pour transformer la manière dont les organisations gèrent leurs
              documents...
            </p>
            <p className="text-[#444] leading-relaxed">
              Grâce à des technologies avancées de reconnaissance optique de caractères (OCR) et d&apos;analyse sémantique...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
