"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const resources = [
  {
    category: "Case Study",
    categoryColor: "bg-[#8cd139] text-white",
    title: "How Central Bank of Cameroon reduced processing time by 85%",
    excerpt:
      "Learn how one of Africa's leading financial institutions automated their document workflows and achieved a 340% ROI in just three months.",
    date: "May 2025",
    image: "/photo_2026-06-07 17.36.44.jpeg",
  },
  {
    category: "Blog Post",
    categoryColor: "bg-blue-500 text-white",
    title: "The state of intelligent document processing in Africa",
    excerpt:
      "A comprehensive look at how IDP technology is transforming businesses across the continent and what trends to watch in the coming years.",
    date: "April 2025",
    image: "/photo_2026-06-07 17.36.53.jpeg",
  },
  {
    category: "Whitepaper",
    categoryColor: "bg-purple-500 text-white",
    title: "Building a multilingual OCR pipeline for African documents",
    excerpt:
      "Technical deep-dive into the challenges and solutions for processing documents in 50+ African languages with high accuracy.",
    date: "March 2025",
    image: "/photo_2026-06-07 17.37.04.jpeg",
  },
];

export default function ResourcesGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-white py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
              Resources
            </h2>
            <p className="text-lg text-gray-500">
              Insights, guides, and case studies from the UboraAI team.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#8cd139] font-semibold mt-4 sm:mt-0 hover:underline"
          >
            View all <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.article
              key={res.title}
              className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <Image
                  src={res.image}
                  alt={res.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${res.categoryColor}`}
                >
                  {res.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#8cd139] transition-colors">
                  {res.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                  {res.excerpt}
                </p>
                <span className="text-xs text-gray-400">{res.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
