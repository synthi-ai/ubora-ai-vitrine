"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "AfricaTech",
  "Central Bank",
  "Maghreb Group",
  "Port Authority",
  "Tropical Foods",
  "MediCare Africa",
  "EduConnect",
  "GovDigital",
];

export default function LogoStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bg-white py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Trusted by 200+ organizations across Africa
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-8 lg:mx-12"
            >
              <span className="text-xl lg:text-2xl font-bold text-gray-300 select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
