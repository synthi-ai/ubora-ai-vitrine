"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Heart,
  Scale,
  Truck,
  Users,
  TreePine,
  GraduationCap,
  Wheat,
  ShoppingBag,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    description:
      "Automate loan processing, fraud detection, and regulatory compliance with AI-powered document analysis.",
    stats: "90% faster processing",
    metrics: { automation: "97%", accuracy: "99.9%", volume: "50K+", roi: "+420%" },
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description:
      "Streamline patient records, medical imaging reports, and insurance claims with intelligent extraction.",
    stats: "75% paperwork reduction",
    metrics: { automation: "92%", accuracy: "99.7%", volume: "30K+", roi: "+380%" },
  },
  {
    icon: GraduationCap,
    title: "Education & Research",
    description:
      "Digitize enrollment forms, transcripts, and research documents with high-accuracy OCR processing.",
    stats: "85% faster enrollment",
    metrics: { automation: "89%", accuracy: "98.5%", volume: "25K+", roi: "+340%" },
  },
  {
    icon: Users,
    title: "Government & Public Sector",
    description:
      "Modernize citizen services with automated identity verification, permit processing, and records management.",
    stats: "80% efficiency boost",
    metrics: { automation: "94%", accuracy: "99.2%", volume: "40K+", roi: "+360%" },
  },
  {
    icon: Wheat,
    title: "Agriculture & Food",
    description:
      "Process land titles, export certificates, and quality inspection documents at scale.",
    stats: "70% faster claims",
    metrics: { automation: "85%", accuracy: "97.8%", volume: "20K+", roi: "+290%" },
  },
  {
    icon: TreePine,
    title: "Mining & Resources",
    description:
      "Automate environmental compliance reports, geological surveys, and resource tracking documentation.",
    stats: "95% compliance accuracy",
    metrics: { automation: "91%", accuracy: "99.8%", volume: "15K+", roi: "+450%" },
  },
  {
    icon: Truck,
    title: "Transport & Logistics",
    description:
      "Streamline customs declarations, shipping manifests, and supply chain documentation.",
    stats: "60% faster customs",
    metrics: { automation: "88%", accuracy: "98.9%", volume: "35K+", roi: "+310%" },
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "Automate purchase orders, inventory documents, and vendor invoice processing.",
    stats: "50% manual work reduction",
    metrics: { automation: "83%", accuracy: "97.5%", volume: "45K+", roi: "+280%" },
  },
  {
    icon: Scale,
    title: "Legal & Justice",
    description:
      "Accelerate contract review, case document analysis, and regulatory filing with AI-assisted extraction.",
    stats: "65% faster reviews",
    metrics: { automation: "86%", accuracy: "99.1%", volume: "18K+", roi: "+370%" },
  },
];

export default function IndustriesTransformationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  const current = industries[selected];

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative bg-gray-950 py-20 lg:py-28 text-white overflow-hidden"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(140,209,57,0.06)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8cd139]/30 bg-[#8cd139]/10 mb-4">
            <span className="text-sm font-medium text-[#8cd139]">
              Industry Solutions
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Transforming industries{" "}
            <span className="text-[#8cd139]">across Africa</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our AI-powered document processing platform serves organizations
            across 9+ industries, delivering automation that drives real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Industry selector grid */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {industries.map((industry, index) => {
              const isSelected = index === selected;
              return (
                <button
                  key={industry.title}
                  onClick={() => setSelected(index)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 ${
                    isSelected
                      ? "bg-[#8cd139]/10 border-[#8cd139]/40 shadow-lg shadow-[#8cd139]/5"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? "bg-[#8cd139] text-white" : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    <industry.icon size={20} />
                  </div>
                  <span
                    className={`text-xs font-medium text-center leading-tight ${
                      isSelected ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {industry.title.split(" & ")[0]}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Right: Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              className="bg-gray-900 rounded-2xl border border-gray-800 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#8cd139] flex items-center justify-center">
                  <current.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{current.title}</h3>
                  <p className="text-sm text-[#8cd139] font-medium">{current.stats}</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {current.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(current.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-950 rounded-xl p-4 border border-gray-800"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold bg-[#8cd139] hover:bg-[#7bc234] text-white transition-colors">
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            200+ organizations across Africa trust UboraAI for document automation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
