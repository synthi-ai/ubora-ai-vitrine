"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  {
    eyebrow: "Intelligent Extraction",
    title: "Extract data from any document with AI precision",
    description:
      "Our advanced AI engine reads and understands documents like a human — but faster and with greater accuracy. From invoices to contracts, extract structured data automatically.",
    bullets: [
      "Multi-format support: PDF, images, scans, handwriting",
      "99.5% field-level extraction accuracy",
      "Automatic table and key-value pair detection",
      "Contextual understanding of document layout",
    ],
    image: "/photo_2026-06-07 17.36.44.jpeg",
  },
  {
    eyebrow: "Smart Classification",
    title: "Automatically sort and route documents at scale",
    description:
      "Stop manual sorting. UboraAI classifies incoming documents in real-time, routing them to the right workflow instantly — no matter the volume or variety.",
    bullets: [
      "200+ document types recognized out of the box",
      "Custom classification models for your business",
      "Real-time processing with sub-second latency",
      "Confidence scoring and exception handling",
    ],
    image: "/photo_2026-06-07 17.36.53.jpeg",
  },
  {
    eyebrow: "Human-in-the-Loop",
    title: "AI-assisted validation with human oversight",
    description:
      "Combine the speed of AI with the judgment of your team. Low-confidence results are flagged for human review, creating a feedback loop that continuously improves accuracy.",
    bullets: [
      "Smart exception queues for flagged documents",
      "One-click approval and correction interface",
      "Continuous model improvement from corrections",
      "Audit trail and compliance tracking",
    ],
    image: "/photo_2026-06-07 17.37.04.jpeg",
  },
];

export default function SplitFeatures() {
  return (
    <div>
      {features.map((feature, index) => (
        <SplitBlock key={index} feature={feature} index={index} />
      ))}
    </div>
  );
}

function SplitBlock({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isReversed = index % 2 !== 0;

  return (
    <section
      ref={ref}
      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Text column */}
          <motion.div
            className={isReversed ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-[#8cd139] text-sm font-semibold uppercase tracking-wider mb-4">
              {feature.eyebrow}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              {feature.description}
            </p>
            <ul className="space-y-3 mb-8">
              {feature.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#8cd139] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600">{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#8cd139] font-semibold hover:underline"
            >
              Learn more
              <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

          {/* Image column */}
          <motion.div
            className={isReversed ? "lg:order-1" : "lg:order-2"}
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative rounded-2xl shadow-xl overflow-hidden aspect-[4/3]">
              <Image
                src={feature.image}
                alt={feature.eyebrow}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
