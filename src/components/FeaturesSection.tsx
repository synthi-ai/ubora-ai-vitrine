"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Globe,
  Target,
  Brain,
  Shield,
  CheckCircle,
  Clock,
  Database,
  FileText,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  benefits: string[];
}

const features: Feature[] = [
  {
    title: "Multi-Format Document Processing",
    description:
      "Process any document type — PDFs, images, handwritten notes, forms — with exceptional accuracy using advanced AI recognition.",
    icon: FileText,
    benefits: [
      "Supports 200+ file formats",
      "99.8% accuracy rate",
      "Batch processing capable",
    ],
  },
  {
    title: "Multilingual OCR Technology",
    description:
      "Extract text in 50+ languages with superior precision, including complex scripts and handwritten content.",
    icon: Globe,
    benefits: [
      "50+ languages supported",
      "Handwriting recognition",
      "Real-time processing",
    ],
  },
  {
    title: "Smart Entity Extraction",
    description:
      "Automatically identify and extract key information like names, dates, amounts, and custom entities from your documents.",
    icon: Target,
    benefits: [
      "Custom entity training",
      "Context-aware extraction",
      "API integration ready",
    ],
  },
  {
    title: "AI-Powered Semantic Analysis",
    description:
      "Deep understanding of document context and meaning through advanced natural language processing and machine learning.",
    icon: Brain,
    benefits: [
      "Context understanding",
      "Sentiment analysis",
      "Content classification",
    ],
  },
  {
    title: "Secure Data Management",
    description:
      "Enterprise-grade security with encrypted storage, audit trails, and compliance with international data protection standards.",
    icon: Shield,
    benefits: [
      "Bank-level encryption",
      "GDPR compliant",
      "Audit trail tracking",
    ],
  },
];

const metrics = [
  { icon: Clock, value: "10x", label: "Faster Processing" },
  { icon: Target, value: "99.8%", label: "Accuracy Rate" },
  { icon: Globe, value: "50+", label: "Languages" },
  { icon: Database, value: "200+", label: "File Formats" },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 mb-4">
            <Zap size={14} className="text-[#8cd139]" />
            <span className="text-sm font-medium text-gray-600">
              Powerful Features
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience the future of{" "}
            <span className="text-[#8cd139]">document processing</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered features designed to
            transform your document workflows with unprecedented accuracy and
            efficiency.
          </p>
        </motion.div>

        {/* Features grid: sidebar + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Feature cards — left sidebar */}
          <div className="lg:col-span-1 space-y-3">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;
              return (
                <motion.button
                  key={feature.title}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#8cd139]/5 border-[#8cd139]/30 shadow-md"
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#8cd139] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-sm transition-colors ${
                          isActive ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Feature detail — right panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 lg:p-10 h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#8cd139] flex items-center justify-center flex-shrink-0">
                  {React.createElement(features[activeFeature].icon, {
                    size: 28,
                    className: "text-white",
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {features[activeFeature].benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#8cd139] flex-shrink-0"
                    />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="inline-flex items-center gap-2 text-[#8cd139] font-semibold hover:underline">
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="inline-flex p-3 rounded-xl bg-[#8cd139]/10 mb-3">
                <metric.icon size={24} className="text-[#8cd139]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#8cd139] hover:bg-[#7bc234] text-white font-semibold rounded-lg transition-colors">
            Explore All Features
            <ArrowRight size={20} />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Try all features free for 14 days — No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
