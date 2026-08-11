"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    quote:
      "UboraAI transformed our invoice processing workflow completely. What used to take our team 8 hours now takes just 45 minutes. The accuracy is phenomenal.",
    author: "Dr. Amara Kone",
    role: "Chief Technology Officer",
    company: "AfricaTech Solutions",
    initials: "AK",
    metrics: [
      { value: "+650%", label: "Efficiency gain" },
      { value: "99.8%", label: "Accuracy" },
      { value: "7h/day", label: "Time saved" },
    ],
  },
  {
    id: 2,
    quote:
      "Implementing UboraAI was the best decision we made this year. Our document processing is now fully automated, and the ROI was realized within just 3 months.",
    author: "Samuel Mbeki",
    role: "Operations Director",
    company: "Central Bank of Cameroon",
    initials: "SM",
    metrics: [
      { value: "+340%", label: "ROI" },
      { value: "-85%", label: "Processing time" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    id: 3,
    quote:
      "The multilingual capabilities of UboraAI are exceptional. Processing documents in French, English, and local languages with the same high accuracy has revolutionized our onboarding.",
    author: "Fatima Al-Rashid",
    role: "Digital Innovation Lead",
    company: "Maghreb Insurance Group",
    initials: "FA",
    metrics: [
      { value: "12+", label: "Languages" },
      { value: "+500%", label: "Speed" },
      { value: "-95%", label: "Errors" },
    ],
  },
  {
    id: 4,
    quote:
      "UboraAI's intelligent extraction capabilities have streamlined our entire supply chain documentation. From customs forms to shipping manifests, everything is processed automatically.",
    author: "Jean-Claude Ndong",
    role: "Supply Chain Manager",
    company: "Port Authority of Douala",
    initials: "JN",
    metrics: [
      { value: "100%", label: "Automation" },
      { value: "99.9%", label: "Compliance" },
      { value: "+400%", label: "Throughput" },
    ],
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (autoPlay && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % caseStudies.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, isInView]);

  const navigate = (dir: "prev" | "next") => {
    setAutoPlay(false);
    setCurrent((prev) =>
      dir === "next"
        ? (prev + 1) % caseStudies.length
        : (prev - 1 + caseStudies.length) % caseStudies.length
    );
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const study = caseStudies[current];

  return (
    <section ref={ref} className="bg-white/95 py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customer <span className="text-[#8cd139]">success stories</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            See how organizations across Africa are transforming their document
            workflows with UboraAI.
          </p>
        </motion.div>

        {/* Slide */}
        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo placeholder + Quote */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-full bg-[#8cd139]/10 flex items-center justify-center mb-6">
                <Quote size={20} className="text-[#8cd139]" />
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {study.metrics.map((m) => (
                <div
                  key={m.label}
                  className="text-center p-4 bg-white rounded-xl border border-gray-100"
                >
                  <div className="text-2xl lg:text-3xl font-bold text-[#8cd139]">
                    {m.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                {study.initials}
              </div>
              <div>
                <p className="font-bold text-gray-900">{study.author}</p>
                <p className="text-sm text-gray-500">
                  {study.role}, {study.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => navigate("prev")}
            className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <div className="flex gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-[#8cd139] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate("next")}
            className="p-3 rounded-full bg-[#8cd139] shadow-md hover:bg-[#7bc234] transition-colors"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
