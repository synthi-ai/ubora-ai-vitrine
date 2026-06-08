"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  CheckCircle,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const checklistItems = [
  "End-to-end document automation pipeline",
  "Human-in-the-loop validation for edge cases",
  "Pre-trained models for 200+ document types",
  "Real-time analytics and processing dashboards",
];

const featureCards = [
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description:
      "Process thousands of documents per hour with parallel AI pipelines and optimized workflows.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2, ISO 27001, and GDPR compliant. Your data is encrypted at rest and in transit.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description:
      "Built on redundant cloud infrastructure with automatic failover and 24/7 monitoring.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setVideoPlaying(!videoPlaying);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-20 lg:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transforming documents into{" "}
            <span className="text-[#8cd139]">actionable insights</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our AI-powered pipeline handles the entire document lifecycle — from
            ingestion and classification to extraction, validation, and export.
          </p>
        </motion.div>

        {/* Process Flow Illustration */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <Image
              src="/photo_2026-06-07 17.37.04.jpeg"
              alt="UboraAI document processing pipeline: Input, Classification, Extraction, Review, Validation, Output"
              width={1400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Dark variant of the process illustration */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <Image
                src="/photo_2026-06-07 17.36.53.jpeg"
                alt="IDP processing flow - dark variant with document classification steps"
                width={700}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
              <Image
                src="/photo_2026-06-07 17.36.47.jpeg"
                alt="Document extraction and validation pipeline overview"
                width={700}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900">
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="/photo_2026-06-07 17.36.44.jpeg"
              onEnded={() => setVideoPlaying(false)}
              playsInline
            >
              <source src="/videos/demo-video.mp4" type="video/mp4" />
            </video>
            <button
              onClick={toggleVideo}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors group"
              aria-label={videoPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                {videoPlaying ? (
                  <Pause size={28} className="text-gray-900" />
                ) : (
                  <Play size={28} className="text-gray-900 ml-1" />
                )}
              </div>
            </button>
          </div>
        </motion.div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              About UboraAI
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              UboraAI is an intelligent document processing platform built for
              enterprises that need to extract, classify, and validate data from
              documents at scale. Our AI models are pre-trained on millions of
              documents and continuously learn from your corrections, delivering
              industry-leading accuracy from day one.
            </p>
            <ul className="space-y-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#8cd139] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose UboraAI?
            </h3>
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8cd139]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-[#8cd139]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
