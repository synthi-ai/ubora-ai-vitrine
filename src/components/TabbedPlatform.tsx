"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    label: "Document Capture",
    title: "Ingest documents from any source",
    description:
      "Capture documents from email, scanners, mobile apps, cloud storage, and APIs. Our multi-channel ingestion engine handles any format at any volume.",
    bullets: [
      "Email attachment monitoring",
      "Mobile capture with auto-crop",
      "Batch upload and API ingestion",
      "Cloud storage connectors (S3, Azure, GCS)",
    ],
    image: "/photo_2026-06-07 17.36.44.jpeg",
  },
  {
    label: "AI Extraction",
    title: "Intelligent data extraction powered by deep learning",
    description:
      "Our transformer-based models extract structured data from unstructured documents with industry-leading accuracy — even from handwritten text and poor-quality scans.",
    bullets: [
      "Named entity recognition",
      "Table and line-item extraction",
      "Handwriting recognition (ICR)",
      "Multi-language OCR engine",
    ],
    image: "/photo_2026-06-07 17.36.47.jpeg",
  },
  {
    label: "Classification",
    title: "Automatic document classification and routing",
    description:
      "Our classification engine identifies document types instantly and routes them to the appropriate processing pipeline — no manual sorting required.",
    bullets: [
      "200+ pre-trained document types",
      "Custom model training in minutes",
      "Confidence scoring with thresholds",
      "Automatic workflow routing",
    ],
    image: "/photo_2026-06-07 17.36.53.jpeg",
  },
  {
    label: "Validation",
    title: "Human-in-the-loop validation and quality assurance",
    description:
      "Combine AI speed with human accuracy. Low-confidence extractions are flagged for review, and corrections feed back into the model for continuous improvement.",
    bullets: [
      "Smart exception queues",
      "Side-by-side document viewer",
      "One-click correction interface",
      "Continuous learning pipeline",
    ],
    image: "/photo_2026-06-07 17.36.58.jpeg",
  },
  {
    label: "Integration",
    title: "Seamless integration with your existing systems",
    description:
      "Connect UboraAI with your ERP, CRM, DMS, or any business system. Our flexible APIs and pre-built connectors ensure smooth data flow across your stack.",
    bullets: [
      "RESTful APIs and webhooks",
      "Pre-built SAP, Oracle, Salesforce connectors",
      "Custom integration toolkit",
      "Real-time data synchronization",
    ],
    image: "/photo_2026-06-07 17.37.04.jpeg",
  },
];

export default function TabbedPlatform() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 6000);
  }, []);

  useEffect(() => {
    if (isInView && !paused) {
      startAutoplay();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, paused, startAutoplay]);

  const handleTabClick = (index: number) => {
    setActive(index);
    setPaused(false);
    startAutoplay();
  };

  const current = tabs[active];

  return (
    <section
      ref={ref}
      className="bg-gray-950 py-20 lg:py-28 text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            The complete <span className="text-[#8cd139]">IDP platform</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            End-to-end intelligent document processing — from capture to
            integration, powered by AI at every step.
          </p>
        </motion.div>

        {/* Tabs bar */}
        <div className="flex flex-wrap justify-center gap-1 mb-12 border-b border-gray-800">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => handleTabClick(index)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                index === active
                  ? "text-[#8cd139]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab.label}
              {index === active && (
                <motion.div
                  layoutId="tabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8cd139]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image (60%) */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden border border-gray-800 aspect-[16/10]">
                <Image
                  src={current.image}
                  alt={current.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>

            {/* Text (40%) */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{current.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {current.description}
              </p>
              <ul className="space-y-3">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8cd139] mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
