"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Intelligent Document Processing (IDP)?",
    a: "IDP combines OCR, natural language processing, and machine learning to automatically extract, classify, and validate data from unstructured documents such as invoices, contracts, forms, and IDs — replacing manual data entry with AI-powered automation.",
  },
  {
    q: "What document formats does UboraAI support?",
    a: "UboraAI processes PDFs, scanned images (JPEG, PNG, TIFF), Microsoft Office documents (Word, Excel), emails, and even handwritten forms. Our multi-format engine handles any document your business encounters.",
  },
  {
    q: "How accurate is UboraAI's data extraction?",
    a: "Our AI models achieve 95-99.5% field-level extraction accuracy depending on document quality and type. The human-in-the-loop validation system catches edge cases, and corrections continuously improve the model's performance.",
  },
  {
    q: "Does UboraAI support African languages?",
    a: "Yes. UboraAI's OCR and NLP engines support 50+ languages including French, English, Arabic, Swahili, Amharic, Hausa, Yoruba, and many more. Our models are specifically trained on African business documents.",
  },
  {
    q: "How does UboraAI integrate with existing systems?",
    a: "UboraAI offers RESTful APIs, webhooks, and pre-built connectors for popular ERP (SAP, Oracle), CRM (Salesforce), and DMS platforms. Our integration toolkit allows custom connections to any system with an API.",
  },
  {
    q: "Is my data secure with UboraAI?",
    a: "Absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. Our platform supports role-based access control, provides full audit trails, and is compliant with GDPR, SOC 2, and local data protection regulations.",
  },
  {
    q: "How long does it take to deploy UboraAI?",
    a: "Most organizations are processing documents within days. Our pre-trained models work out of the box for common document types. Custom model training for your specific documents typically requires a small sample set and minimal configuration.",
  },
  {
    q: "Can UboraAI handle high-volume document processing?",
    a: "Yes. Our cloud-native architecture auto-scales to handle millions of pages per month. Whether you process 100 or 100,000 documents daily, UboraAI maintains consistent speed and accuracy.",
  },
  {
    q: "What industries does UboraAI serve?",
    a: "UboraAI serves banking, healthcare, legal, education, government, logistics, mining, retail, and agriculture sectors. Our platform is adaptable to any industry that processes documents at scale.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes. We offer a free trial that lets you process up to 500 pages and test all platform features. No credit card required. Contact our sales team for enterprise evaluation programs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="bg-gray-50/95 py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked <span className="text-[#8cd139]">questions</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about UboraAI and intelligent document
            processing.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <span className="text-base font-semibold text-gray-900 pr-8">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gray-400" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
