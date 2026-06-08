"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-950 overflow-hidden"
    >
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(140,209,57,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform{" "}
              <span className="text-[#8cd139]">
                <TypeAnimation
                  sequence={[
                    "invoices",
                    2000,
                    "contracts",
                    2000,
                    "ID documents",
                    2000,
                    "medical records",
                    2000,
                  ]}
                  speed={40}
                  repeat={Infinity}
                  wrapper="span"
                />
              </span>
              <br />
              into actionable data
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8">
              Automate document workflows with AI-powered extraction, classification,
              and validation. Reduce manual processing by 90% while achieving
              best-in-class accuracy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#8cd139] hover:bg-[#7bc234] rounded-lg transition-colors"
              >
                Get Started Free
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white rounded-lg transition-colors"
              >
                <Play size={18} />
                Watch Demo
              </Link>
            </div>
          </motion.div>

          {/* Right: Process flow image */}
          <motion.div
            className="flex-1 w-full max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl border border-gray-800 shadow-2xl overflow-hidden">
              <Image
                src="/photo_2026-06-07 17.36.44.jpeg"
                alt="UboraAI intelligent document processing pipeline"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Trust logos bar */}
        <motion.div
          className="mt-16 pt-10 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading organizations across Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-40">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"].map(
              (name) => (
                <div
                  key={name}
                  className="px-6 py-2 text-sm font-medium text-gray-500 border border-gray-800 rounded-lg"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
