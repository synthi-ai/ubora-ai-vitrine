"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const solutions = [
  {
    label: "Intelligent OCR",
    title: "Documents scanned. Data extracted. Insights unlocked.",
    description:
      "From invoices to contracts, our AI-powered OCR engine reads, understands, and extracts structured data with 99.5% accuracy — even from handwritten text and low-quality scans.",
    cta: "Explore intelligent OCR capabilities",
    ctaHref: "#",
    sponsor: {
      company: "AfricaTech Solutions",
      text: "See how AfricaTech reduced invoice processing time by 85% with UboraAI's intelligent extraction",
    },
  },
  {
    label: "Smart Classification",
    title: "Documents sorted. Workflows triggered. Teams focused.",
    description:
      "Stop manual sorting. Our classification engine identifies 200+ document types in real-time and routes them to the right pipeline — no matter the volume or variety.",
    cta: "Explore smart classification",
    ctaHref: "#",
    sponsor: {
      company: "Central Bank of Cameroon",
      text: "Discover how the Central Bank automated document routing across 40+ branch offices",
    },
  },
  {
    label: "Data Validation",
    title: "Exceptions flagged. Corrections applied. Accuracy guaranteed.",
    description:
      "Combine AI speed with human judgment. Low-confidence results are flagged for review, and every correction feeds back into the model for continuous improvement.",
    cta: "Explore human-in-the-loop validation",
    ctaHref: "#",
    sponsor: {
      company: "Maghreb Insurance Group",
      text: "Learn how Maghreb Insurance achieved 99.7% accuracy on claims processing with AI-assisted validation",
    },
  },
  {
    label: "Workflow Automation",
    title: "Processes designed. Approvals routed. Compliance met.",
    description:
      "Build end-to-end document processing pipelines with branching logic, parallel processing, approval chains, and exception handling — all in a visual designer.",
    cta: "Explore workflow automation",
    ctaHref: "#",
    sponsor: {
      company: "Port Authority of Douala",
      text: "From customs forms to shipping manifests — how the Port Authority automated 100% of document workflows",
    },
  },
  {
    label: "Enterprise Integration",
    title: "Systems connected. Data flowing. Silos eliminated.",
    description:
      "Connect UboraAI with your ERP, CRM, DMS, or any system. Our APIs, webhooks, and pre-built connectors ensure seamless data flow across your entire technology stack.",
    cta: "Explore integration capabilities",
    ctaHref: "#",
    sponsor: {
      company: "Tropical Foods Ltd",
      text: "Discover how Tropical Foods integrated UboraAI with SAP for seamless end-to-end document processing",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function ProductGrid() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % solutions.length);
    }, 6000);
  }, []);

  useEffect(() => {
    if (isInView) startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, startAutoplay]);

  const handleTabClick = (index: number) => {
    setActive(index);
    startAutoplay();
  };

  const current = solutions[active];

  return (
    <section ref={ref} className="bg-[#0a0a0a]/95 py-16 lg:py-24 text-white overflow-hidden">
      {/* -------- Heading with decorative lines -------- */}
      <motion.div
        className="flex items-center justify-center gap-6 mb-16 lg:mb-24 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Left decorative line */}
        <div className="hidden lg:block flex-1 max-w-[240px]">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-gray-600" />
        </div>

        <h2 className="text-3xl lg:text-[44px] font-bold text-center leading-tight max-w-2xl">
          Platform <span className="text-[#8cd139]">capabilities</span>
        </h2>

        {/* Right decorative line */}
        <div className="hidden lg:block flex-1 max-w-[240px]">
          <div className="h-px bg-gradient-to-l from-transparent via-gray-700 to-gray-600" />
        </div>
      </motion.div>

      {/* -------- Main panel: Left tabs + Right content -------- */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ---------- Left panel: vertical tabs ---------- */}
          <motion.div
            className="lg:flex-[0_0_33%] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Scrollable row on mobile, vertical list on desktop */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 pt-4 lg:pt-[7%]">
              {solutions.map((sol, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={sol.label}
                    onClick={() => handleTabClick(index)}
                    className={`group flex items-center gap-3 px-5 py-4 text-left rounded-none transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                      isActive
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {/* Arrow icon */}
                    <span className="flex-shrink-0">
                      {isActive ? (
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#8cd139]">
                          <ChevronRight size={20} className="text-white" />
                        </span>
                      ) : (
                        <ChevronRight
                          size={16}
                          className="text-[#8cd139] group-hover:translate-x-0.5 transition-transform"
                        />
                      )}
                    </span>
                    <span
                      className={`text-base lg:text-lg font-medium transition-all ${
                        isActive ? "font-semibold" : ""
                      }`}
                    >
                      {sol.label}
                    </span>
                  </button>
                );
              })}

              {/* See all */}
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-4 text-[#8cd139] text-sm font-medium hover:underline whitespace-nowrap"
              >
                See all capabilities
              </a>
            </div>
          </motion.div>

          {/* ---------- Right panel: content ---------- */}
          <div className="lg:flex-[0_0_67%] relative min-h-[400px] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="flex flex-col lg:flex-row h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main content area with green border */}
                <div className="flex-1 bg-[#8cd139] border-[3px] border-[#8cd139] lg:border-[48px] p-6 lg:p-10 flex flex-col justify-center">
                  <div className="max-w-xl">
                    {/* Industry/capability label */}
                    <p className="text-sm font-medium text-white/70 mb-6 uppercase tracking-wider">
                      {current.label}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-[36px] font-bold text-white mb-4 leading-tight">
                      {current.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                      {current.description}
                    </p>

                    {/* CTA link */}
                    <a
                      href={current.ctaHref}
                      className="inline-flex items-center gap-3 text-white font-medium group/cta hover:gap-4 transition-all duration-300"
                    >
                      <span>{current.cta}</span>
                      <ArrowRight
                        size={20}
                        className="transition-transform group-hover/cta:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                {/* Sponsor / case study card */}
                <div className="lg:w-[220px] xl:w-[260px] bg-black border-[3px] border-black lg:border-[48px] flex flex-col items-center justify-center p-6 lg:p-8 text-center relative">
                  {/* Company initial / logo placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-lg">
                      {current.sponsor.company
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {current.sponsor.text}
                  </p>

                  {/* Arrow button */}
                  <a
                    href="#"
                    className="absolute bottom-3 right-3 lg:bottom-[-12px] lg:right-[-12px] w-10 h-10 bg-[#8cd139] rounded flex items-center justify-center hover:bg-[#7bc234] transition-colors"
                  >
                    <ArrowRight size={16} className="text-white" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
