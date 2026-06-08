"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bg-gray-950 py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Left heading */}
          <div className="lg:max-w-[60%]">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Ready to transform your{" "}
              <span className="text-[#8cd139]">document workflows</span>?
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Join 200+ organizations already using UboraAI to automate document
              processing.
            </p>
          </div>

          {/* Right CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8cd139] hover:bg-[#7bc234] text-white font-semibold rounded-lg transition-colors text-base"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 font-semibold rounded-lg transition-colors text-base"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
