"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "90%", label: "Reduction in manual processing" },
  { value: "200+", label: "Document types supported" },
  { value: "50+", label: "Languages recognized" },
  { value: "3x", label: "Faster than industry average" },
];

export default function MetricsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 lg:py-28 text-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left text (60%) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Measurable impact on{" "}
              <span className="text-[#8cd139]">every workflow</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Organizations using UboraAI see dramatic improvements in
              processing speed, accuracy, and cost reduction from day one.
              Our AI models are trained on millions of African business
              documents to deliver unmatched performance.
            </p>
          </motion.div>

          {/* Right stats grid (40%) */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-gray-800/50 border-l-4 border-[#8cd139] rounded-xl p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
