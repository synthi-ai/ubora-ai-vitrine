"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Heart,
  Scale,
  BookOpen,
  Banknote,
  ArrowRight,
  Shield,
  Bot,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface UseCase {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  stats: Record<string, string>;
  capabilities: { name: string; description: string; icon: React.ComponentType<{ size?: number; className?: string }> }[];
  workflows: string[];
  industry: string;
  example: string;
}

const useCases: UseCase[] = [
  {
    id: 1,
    icon: Heart,
    title: "Healthcare & Medical",
    description:
      "AI-powered automation for patient records, medical imaging analysis, and clinical documentation with intelligent workflow orchestration.",
    stats: { automation: "95%", efficiency: "+400%", accuracy: "99.7%", roi: "+320%" },
    capabilities: [
      { name: "Intelligent Triage", description: "Automatically prioritize urgent medical documents and route them to specialists", icon: Bot },
      { name: "Clinical Decision Support", description: "Analysis of medical records to suggest treatments and flag risks", icon: Sparkles },
      { name: "Compliance Monitoring", description: "Continuous monitoring and automated reporting for healthcare regulations", icon: Shield },
    ],
    workflows: [
      "Patient admission form processing",
      "Medical imaging report generation",
      "Insurance claim automation",
      "Prescription verification and tracking",
      "Medical record digitization",
    ],
    industry: "Healthcare",
    example:
      "Central Hospital of Yaoundé reduced patient processing time by 75% using AI agents for automated document triage and medical record analysis.",
  },
  {
    id: 2,
    icon: Scale,
    title: "Legal & Compliance",
    description:
      "Automated contract analysis, legal document review, and regulatory compliance with intelligent case management.",
    stats: { automation: "88%", efficiency: "+350%", accuracy: "99.2%", roi: "+280%" },
    capabilities: [
      { name: "Contract Intelligence", description: "Extract, analyze, and summarize key contract terms and obligations", icon: Bot },
      { name: "Legal Research", description: "Automated case law research and precedent analysis", icon: Sparkles },
      { name: "Compliance Tracking", description: "Real-time monitoring of regulatory changes and compliance status", icon: Shield },
    ],
    workflows: [
      "Contract review and red-flag detection",
      "Legal document classification",
      "Regulatory compliance reporting",
      "Case file organization",
      "Client onboarding and KYC",
    ],
    industry: "Legal Services",
    example:
      "Maître Bello & Associates automated 90% of contract reviews, reducing turnaround from 3 days to 2 hours.",
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Education & Research",
    description:
      "Intelligent automation for academic administration, research documentation, and student services with adaptive learning support.",
    stats: { automation: "92%", efficiency: "+450%", accuracy: "98.9%", roi: "+380%" },
    capabilities: [
      { name: "Academic Analytics", description: "Analyze student performance and provide personalized recommendations", icon: Bot },
      { name: "Research Acceleration", description: "Automated literature review, citation analysis, and categorization", icon: Sparkles },
      { name: "Admin Automation", description: "Intelligent handling of enrollment, grading, and workflows", icon: Shield },
    ],
    workflows: [
      "Student enrollment and registration",
      "Academic transcript processing",
      "Research paper classification",
      "Examination automation",
      "Library resource management",
    ],
    industry: "Education",
    example:
      "University of Douala implemented AI for student services, achieving 24/7 automated support and 80% less admin workload.",
  },
  {
    id: 4,
    icon: Banknote,
    title: "Banking & Finance",
    description:
      "Advanced automation for financial document processing, risk assessment, and regulatory compliance with real-time fraud detection.",
    stats: { automation: "97%", efficiency: "+500%", accuracy: "99.9%", roi: "+420%" },
    capabilities: [
      { name: "Fraud Detection", description: "Continuously monitor transactions and documents for suspicious patterns", icon: Bot },
      { name: "Risk Assessment", description: "AI-powered credit scoring and loan processing with automated decisions", icon: Sparkles },
      { name: "Regulatory Compliance", description: "Automated AML/KYC processes and real-time regulatory reporting", icon: Shield },
    ],
    workflows: [
      "Loan application processing",
      "KYC/AML document verification",
      "Financial statement analysis",
      "Insurance claim processing",
      "Portfolio reporting",
    ],
    industry: "Financial Services",
    example:
      "Afriland First Bank deployed AI for loan processing, reducing approval time from 5 days to 30 minutes with 99.9% accuracy.",
  },
];

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selected, setSelected] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || !isInView) return;
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % useCases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, isInView]);

  const current = useCases[selected];

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="relative bg-gray-950 py-20 lg:py-28 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(140,209,57,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8cd139]/30 bg-[#8cd139]/10 mb-4">
            <Bot size={14} className="text-[#8cd139]" />
            <span className="text-sm font-medium text-[#8cd139]">
              Use Cases
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            AI agents{" "}
            <span className="text-[#8cd139]">revolutionizing</span> industries
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            See how organizations across Africa are transforming their document
            workflows with our AI-powered automation platform.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {useCases.map((uc, index) => (
            <button
              key={uc.id}
              onClick={() => {
                setSelected(index);
                setAutoPlay(false);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                index === selected
                  ? "bg-[#8cd139] text-white"
                  : "bg-gray-900 text-gray-400 border border-gray-800 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              <uc.icon size={16} />
              {uc.industry}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#8cd139] flex items-center justify-center">
                  <current.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                  <p className="text-sm text-gray-400">{current.industry}</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(current.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-800"
                  >
                    <div className="text-xl font-bold text-[#8cd139]">
                      {value}
                    </div>
                    <div className="text-xs text-gray-500 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Success story */}
              <div className="bg-[#8cd139]/10 rounded-xl p-5 border border-[#8cd139]/20">
                <h4 className="text-sm font-semibold text-[#8cd139] mb-2">
                  Success Story
                </h4>
                <p className="text-sm text-gray-300">{current.example}</p>
              </div>
            </div>

            {/* Right: Capabilities + Workflows */}
            <div className="space-y-8">
              {/* Capabilities */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  AI Capabilities
                </h4>
                <div className="space-y-3">
                  {current.capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="bg-gray-900 rounded-xl p-4 border border-gray-800"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <cap.icon size={16} className="text-[#8cd139]" />
                        <span className="font-semibold text-white text-sm">
                          {cap.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflows */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Automation Workflows
                </h4>
                <ul className="space-y-2">
                  {current.workflows.map((workflow) => (
                    <li
                      key={workflow}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <ChevronRight size={14} className="text-[#8cd139]" />
                      {workflow}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#8cd139] hover:bg-[#7bc234] text-white font-semibold rounded-lg transition-colors">
                Explore Solutions
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(index);
                setAutoPlay(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selected
                  ? "bg-[#8cd139] scale-125"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
