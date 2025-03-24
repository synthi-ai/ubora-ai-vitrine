"use client";

import React from 'react';
import { Play, FileCheck, FileX, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="accueil" className="relative bg-[#edf8ee] w-full py-16 px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-14">
              Transformez vos documents en données exploitables!
            </h1>
            
                {/* Chart visualization */}
                <div className="relative h-16 mb-16">
                  <div className="absolute bottom-0 left-0 right-0 h-full">
                    <div className="relative h-full w-full">
                      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,40 L5,35 L10,38 L15,30 L20,32 L25,28 L30,25 L35,15 L40,20 L45,18 L50,10 L55,15 L60,12 L65,18 L70,15 L75,20 L80,18 L85,22 L90,20 L95,15 L100,10" 
                              stroke="#8cd139" 
                              strokeWidth="2" 
                              fill="none" />
                        <path d="M0,40 L5,35 L10,38 L15,30 L20,32 L25,28 L30,25 L35,15 L40,20 L45,18 L50,10 L55,15 L60,12 L65,18 L70,15 L75,20 L80,18 L85,22 L90,20 L95,15 L100,10 L100,40 L0,40" 
                              fill="url(#gradient)" 
                              fillOpacity="0.2" />
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
                
            
            <p className="text-[#333] mb-8">
              Un système de numérisation et d&apos;extraction 
              d&apos;informations adapté à tous les secteurs.
            </p>
            
        <div className='flex gap-2 mt-8 items-center'>
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
          ▶
          </span>  
          <span className='font-bold'>Demander une démo gratuite</span>
        </div>
 
          </div>
          
      {/* Image et UI mockup à droite */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative">
        <div className="relative w-full max-w-md mx-auto">
          {/* Image principale */}
          <div className="bg-green-600 rounded-lg p-3 absolute top-0 left-0 w-full h-full -z-10"></div>
          <Image
            src="/images/ocr.svg"
            alt="Dashboard"
            width={400}
            height={250}
            className="rounded-lg shadow-lg"
          />

          {/* Éléments flottants */}


  <div className="absolute top-0 left-0 -translate-x-6 -translate-y-6 bg-white  shadow-md px-4 py-2 rounded-lg flex flex-col space-y-1 w-44">
  <span className="text-gray-400 text-xs">Sélectionnez</span>
  <span className="text-black font-bold">Document 1</span>
  <button className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full self-end">
    Numériser
  </button>
</div>


  <div className="absolute bottom-12 -left-12 translate-x-6 translate-y-6 bg-white shadow-md px-4 py-2 rounded-lg flex flex-col border-b-2 space-y-1">
  <span className="text-gray-500 text-xs">Vitesse de traitement</span>
  <div className="flex items-center space-x-1">
    <span className="text-green-600 text-lg font-bold">45s</span>
  </div>
</div>
<div className="absolute top-11 right-8 w-10 h-10 bg-[#6366f1] rounded-lg flex items-center justify-center z-20 shadow-md">
              <FileCheck size={20} color="white" />
 </div>

<div className="absolute -bottom-5 right-2 w-10 h-10 bg-[#6366f1] rounded-lg flex items-center justify-center z-20 shadow-md">
    <FileCheck size={20} color="white" />
</div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}