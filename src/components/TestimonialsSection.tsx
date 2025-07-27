'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp, Clock, Users, Award, Play } from 'lucide-react';
import gsap from 'gsap';

interface Testimonial {
  id: number;
  quote: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  metrics: Record<string, string>;
  industry: string;
  videoUrl?: string;
  featured: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Revolutionary document processing power",
    text: "UboraAI transformed our invoice processing workflow completely. What used to take our team 8 hours now takes just 45 minutes. The accuracy is phenomenal and the AI learns from our specific business requirements.",
    author: "Dr. Amara Koné",
    role: "Chief Technology Officer",
    company: "AfricaTech Solutions",
    avatar: "/api/placeholder/120/120",
    rating: 5,
    metrics: {
      efficiency: "+650%",
      accuracy: "99.8%",
      timeSaved: "7h/day"
    },
    industry: "Technology",
    videoUrl: "/testimonials/video1.mp4",
    featured: true
  },
  {
    id: 2,
    quote: "Game-changing automation for African businesses",
    text: "Implementing UboraAI was the best decision we made this year. Our document processing is now fully automated, allowing our staff to focus on strategic initiatives. The ROI was realized within just 3 months.",
    author: "Samuel Mbeki",
    role: "Operations Director",
    company: "Central Bank of Cameroon",
    avatar: "/api/placeholder/120/120",
    rating: 5,
    metrics: {
      roi: "+340%",
      processing: "-85%",
      satisfaction: "98%"
    },
    industry: "Banking",
    featured: false
  },
  {
    id: 3,
    quote: "Unparalleled accuracy and speed",
    text: "The multilingual capabilities of UboraAI are exceptional. Processing documents in French, English, and local languages with the same high accuracy has revolutionized our customer onboarding process.",
    author: "Fatima Al-Rashid",
    role: "Digital Innovation Lead",
    company: "Maghreb Insurance Group",
    avatar: "/api/placeholder/120/120",
    rating: 5,
    metrics: {
      languages: "12+",
      speed: "+500%",
      errors: "-95%"
    },
    industry: "Insurance",
    featured: false
  },
  {
    id: 4,
    quote: "The future of document management",
    text: "UboraAI's intelligent extraction capabilities have streamlined our entire supply chain documentation. From customs forms to shipping manifests, everything is processed automatically with incredible precision.",
    author: "Jean-Claude Ndong",
    role: "Supply Chain Manager",
    company: "Port Authority of Douala",
    avatar: "/api/placeholder/120/120",
    rating: 5,
    metrics: {
      automation: "100%",
      compliance: "99.9%",
      throughput: "+400%"
    },
    industry: "Logistics",
    featured: true
  },
  {
    id: 5,
    quote: "Exceptional AI-powered solutions",
    text: "The seamless integration with our existing ERP system and the quality of customer support made the transition smooth. UboraAI continues to exceed our expectations every day.",
    author: "Marie Dubois",
    role: "Chief Financial Officer",
    company: "Tropical Foods Ltd",
    avatar: "/api/placeholder/120/120",
    rating: 5,
    metrics: {
      integration: "100%",
      uptime: "99.9%",
      support: "5-star"
    },
    industry: "Agriculture",
    featured: false
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isActive: boolean;
  isVisible: boolean;
}

const TestimonialCard = ({ testimonial, index, isActive, isVisible }: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isVisible && cardRef.current) {
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [isVisible, index]);

  const industryColors = {
    Technology: "from-blue-500 to-cyan-500",
    Banking: "from-green-500 to-emerald-500",
    Insurance: "from-purple-500 to-violet-500",
    Logistics: "from-orange-500 to-red-500",
    Agriculture: "from-yellow-500 to-green-500"
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-500 ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-[1.02] hover:shadow-xl'
        }`}
      whileHover={{ y: -8 }}
      layout
    >
      {/* Featured Badge */}
      {testimonial.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#8cd139] to-[#6ab526]">
            <Award size={12} />
            Featured
          </span>
        </div>
      )}

      {/* Industry Tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${industryColors[testimonial.industry as keyof typeof industryColors]}`}>
          {testimonial.industry}
        </span>
      </div>

      <div className="p-8">
        {/* Quote Icon & Quote */}
        <div className="relative mb-6">
          <Quote size={32} className="text-[#8cd139]/20 mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
            {testimonial.quote}
          </h3>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 mb-8 leading-relaxed text-base">
          {testimonial.text}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
            <motion.div
              key={key}
              className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + metricIndex * 0.1 }}
            >
              <div className="text-[#8cd139] font-bold text-lg">{value}</div>
              <div className="text-xs text-gray-500 capitalize font-medium">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative w-14 h-14 mr-4">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="rounded-full object-cover border-2 border-gray-100"
              />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
              <p className="text-[#8cd139] text-sm font-medium">{testimonial.company}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              {testimonial.rating}.0/5.0
            </span>
          </div>
        </div>

        {/* Video Testimonial Button */}
        {testimonial.videoUrl && (
          <motion.button
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#8cd139] to-[#6ab526] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowVideo(true)}
          >
            <Play size={16} />
            Watch Video Testimonial
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, isInView]);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setAutoPlay(false);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);

    // Resume autoplay after 10 seconds
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // Calculate visible testimonials (show 3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visibleCount = windowWidth >= 1024 ? 3 : 1;
    const visibleTestimonials = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push({
        ...testimonials[index],
        displayIndex: i,
        isActive: i === 1 || visibleCount === 1
      });
    }

    return visibleTestimonials;
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      id="testimonials"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8cd139]/20 to-[#6ab526]/20 px-4 py-2 rounded-full text-sm font-medium text-[#2d5016] mb-6"
            variants={itemVariants}
          >
            <Users size={16} className="text-[#8cd139]" />
            Customer Success Stories
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={itemVariants}
          >
            Trusted by leading{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#8cd139] to-[#6ab526] bg-clip-text text-transparent">
                African businesses
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,2 100,8 T200,8" stroke="#8cd139" strokeWidth="3" fill="none" opacity="0.6" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover how organizations across Africa are transforming their document workflows
            and achieving remarkable results with UboraAI&apos;s intelligent automation platform.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${currentIndex}`}
                  testimonial={testimonial}
                  index={index}
                  isActive={testimonial.isActive}
                  isVisible={isInView}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <motion.button
              onClick={() => handleNavigation('prev')}
              className="p-3 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} className="text-gray-600 group-hover:text-[#8cd139] transition-colors" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-[#8cd139] scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>

            <motion.button
              onClick={() => handleNavigation('next')}
              className="p-3 rounded-full bg-[#8cd139] shadow-lg hover:shadow-xl hover:bg-[#7bc234] transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} className="text-white" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${autoPlay
                  ? 'bg-[#8cd139]/10 text-[#2d5016] border border-[#8cd139]/20'
                  : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}
            >
              <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-[#8cd139]' : 'bg-gray-400'}`} />
              {autoPlay ? 'Auto-play ON' : 'Auto-play OFF'}
            </button>
          </div>
        </div>

        {/* Stats Section 
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: TrendingUp, value: "500%", label: "Average ROI", color: "text-green-600" },
            { icon: Clock, value: "85%", label: "Time Reduction", color: "text-blue-600" },
            { icon: Users, value: "200+", label: "Happy Customers", color: "text-purple-600" },
            { icon: Award, value: "99.8%", label: "Satisfaction Rate", color: "text-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 mb-4">
                <stat.icon size={24} className={stat.color} />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}