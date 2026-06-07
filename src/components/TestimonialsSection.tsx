"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Users,
  Award,
  Play,
} from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  text: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  metrics: Record<string, string>;
  industry: string;
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
    initials: "AK",
    rating: 5,
    metrics: { efficiency: "+650%", accuracy: "99.8%", timeSaved: "7h/day" },
    industry: "Technology",
    featured: true,
  },
  {
    id: 2,
    quote: "Game-changing automation for African businesses",
    text: "Implementing UboraAI was the best decision we made this year. Our document processing is now fully automated, allowing our staff to focus on strategic initiatives. The ROI was realized within just 3 months.",
    author: "Samuel Mbeki",
    role: "Operations Director",
    company: "Central Bank of Cameroon",
    initials: "SM",
    rating: 5,
    metrics: { roi: "+340%", processing: "-85%", satisfaction: "98%" },
    industry: "Banking",
    featured: false,
  },
  {
    id: 3,
    quote: "Unparalleled accuracy and speed",
    text: "The multilingual capabilities of UboraAI are exceptional. Processing documents in French, English, and local languages with the same high accuracy has revolutionized our customer onboarding process.",
    author: "Fatima Al-Rashid",
    role: "Digital Innovation Lead",
    company: "Maghreb Insurance Group",
    initials: "FA",
    rating: 5,
    metrics: { languages: "12+", speed: "+500%", errors: "-95%" },
    industry: "Insurance",
    featured: false,
  },
  {
    id: 4,
    quote: "The future of document management",
    text: "UboraAI's intelligent extraction capabilities have streamlined our entire supply chain documentation. From customs forms to shipping manifests, everything is processed automatically with incredible precision.",
    author: "Jean-Claude Ndong",
    role: "Supply Chain Manager",
    company: "Port Authority of Douala",
    initials: "JN",
    rating: 5,
    metrics: { automation: "100%", compliance: "99.9%", throughput: "+400%" },
    industry: "Logistics",
    featured: true,
  },
  {
    id: 5,
    quote: "Exceptional AI-powered solutions",
    text: "The seamless integration with our existing ERP system and the quality of customer support made the transition smooth. UboraAI continues to exceed our expectations every day.",
    author: "Marie Dubois",
    role: "Chief Financial Officer",
    company: "Tropical Foods Ltd",
    initials: "MD",
    rating: 5,
    metrics: { integration: "100%", uptime: "99.9%", support: "5-star" },
    industry: "Agriculture",
    featured: false,
  },
];

const industryColors: Record<string, string> = {
  Technology: "bg-blue-500",
  Banking: "bg-green-500",
  Insurance: "bg-purple-500",
  Logistics: "bg-orange-500",
  Agriculture: "bg-yellow-500",
};

function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) {
  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-shadow duration-300 ${
        isActive ? "shadow-xl" : "hover:shadow-xl"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Featured badge */}
      {testimonial.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#8cd139]">
            <Award size={12} />
            Featured
          </span>
        </div>
      )}

      {/* Industry tag */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${
            industryColors[testimonial.industry] || "bg-gray-500"
          }`}
        >
          {testimonial.industry}
        </span>
      </div>

      <div className="p-8 pt-14">
        {/* Quote */}
        <div className="mb-6">
          <Quote size={28} className="text-[#8cd139]/20 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
            {testimonial.quote}
          </h3>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">
          {testimonial.text}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {Object.entries(testimonial.metrics).map(([key, value]) => (
            <div
              key={key}
              className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100"
            >
              <div className="text-[#8cd139] font-bold text-lg">{value}</div>
              <div className="text-xs text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </div>
            </div>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 text-gray-600 font-semibold text-sm">
              {testimonial.initials}
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">
                {testimonial.author}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
              <p className="text-[#8cd139] text-sm font-medium">
                {testimonial.company}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>
            <span className="text-xs text-gray-400 mt-1">
              {testimonial.rating}.0/5.0
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (autoPlay && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, isInView]);

  const handleNav = (direction: "prev" | "next") => {
    setAutoPlay(false);
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setAutoPlay(false);
    setCurrentIndex(index);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // Show 3 on desktop, 1 on mobile — handled via CSS grid
  const getVisible = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[idx], isActive: i === 1 });
    }
    return result;
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-4">
            <Users size={14} className="text-[#8cd139]" />
            <span className="text-sm font-medium text-gray-600">
              Customer Success Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by leading{" "}
            <span className="text-[#8cd139]">African businesses</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Discover how organizations across Africa are transforming their
            document workflows and achieving remarkable results with UboraAI.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {getVisible().map((t) => (
              <TestimonialCard
                key={`${t.id}-${currentIndex}`}
                testimonial={t}
                isActive={t.isActive}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => handleNav("prev")}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#8cd139] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNav("next")}
              className="p-3 rounded-full bg-[#8cd139] shadow-md hover:bg-[#7bc234] transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                autoPlay
                  ? "bg-[#8cd139]/10 text-[#2d5016] border border-[#8cd139]/20"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  autoPlay ? "bg-[#8cd139]" : "bg-gray-400"
                }`}
              />
              {autoPlay ? "Auto-play ON" : "Auto-play OFF"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
