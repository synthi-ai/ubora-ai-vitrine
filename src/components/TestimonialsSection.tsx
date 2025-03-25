'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Le meilleur système de numérisation",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Sophia Moore",
    role: "CEO AZERTY Agency",
    avatar: "/images/woman.jpeg" 
  },
  {
    quote: "Du jamais vu auparavant",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Adam Smith",
    role: "CEO Synthi AI",
    avatar: "/images/man.png" 
  },
  {
    quote: "Incroyable",
    text: "Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat",
    author: "Mike Johnson",
    role: "International Corp",
    avatar: "/images/man.png"
  },
  {
    quote: "Le meilleur système de numérisation",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Sophia Moore",
    role: "CEO AZERTY Agency",
    avatar: "/images/woman.jpeg" 
  },
  {
    quote: "Du jamais vu auparavant",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    author: "Adam Smith",
    role: "CEO Synthi AI",
    avatar: "/images/man.png" 
  },
  
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='temoignages' className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Nos avis</h2>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.slice(index, index + 3).map((item, i) => {
                      const testimonialIndex = (index + i) % testimonials.length;
                      const testimonial = testimonials[testimonialIndex];
                      
                      return (
                        <div key={i} className="bg-white p-6">
                          <p className="text-purple-600 font-bold text-lg mb-2">&quot;{testimonial.quote}&quot;</p>
                          <p className="text-gray-500 mb-6">{testimonial.text}</p>
                          <div className="flex items-center">
                            <div className="mr-4">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <Image 
                                  src={testimonial.avatar} 
                                  alt={testimonial.author}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{testimonial.author}</p>
                              <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}