'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Scale, 
  BookOpen, 
  Banknote, 
  Bot, 
  Zap, 
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Sparkles,
  ChevronRight,
  Play,
  Pause
} from "lucide-react";
import gsap from 'gsap';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin();
}

interface UseCaseStats {
  automation: string;
  efficiency: string;
  accuracy: string;
  roi: string;
}

interface AgenticCapability {
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface UseCase {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  stats: UseCaseStats;
  agenticCapabilities: AgenticCapability[];
  automationWorkflows: string[];
  color: string;
  gradient: string;
  industry: string;
  realWorldExample: string;
  angle: number;
}

const useCases: UseCase[] = [
  {
    id: 1,
    icon: Heart,
    title: "Healthcare & Medical",
    description: "AI-powered automation for patient records, medical imaging analysis, and clinical documentation with intelligent workflow orchestration.",
    stats: {
      automation: "95%",
      efficiency: "+400%",
      accuracy: "99.7%",
      roi: "+320%"
    },
    agenticCapabilities: [
      {
        name: "Intelligent Triage",
        description: "AI agents automatically prioritize urgent medical documents and route them to appropriate specialists",
        icon: Bot
      },
      {
        name: "Clinical Decision Support",
        description: "Automated analysis of medical records to suggest treatment recommendations and flag potential risks",
        icon: Sparkles
      },
      {
        name: "Compliance Monitoring",
        description: "Continuous monitoring and automated reporting for healthcare regulations (HIPAA, medical standards)",
        icon: Shield
      }
    ],
    automationWorkflows: [
      "Patient admission form processing",
      "Medical imaging report generation",
      "Insurance claim automation",
      "Prescription verification and tracking",
      "Medical record digitization and classification"
    ],
    color: "emerald",
    gradient: "from-emerald-400 to-green-500",
    industry: "Healthcare",
    realWorldExample: "Central Hospital of Yaoundé reduced patient processing time by 75% using AI agents for automated document triage and medical record analysis.",
    angle: 0
  },
  {
    id: 2,
    icon: Scale,
    title: "Legal & Compliance",
    description: "Agentic automation for contract analysis, legal document review, and regulatory compliance with intelligent case management.",
    stats: {
      automation: "88%",
      efficiency: "+350%",
      accuracy: "99.2%",
      roi: "+280%"
    },
    agenticCapabilities: [
      {
        name: "Contract Intelligence",
        description: "AI agents extract, analyze, and summarize key contract terms, clauses, and obligations automatically",
        icon: Bot
      },
      {
        name: "Legal Research Automation",
        description: "Automated case law research and precedent analysis with intelligent recommendations",
        icon: Sparkles
      },
      {
        name: "Compliance Tracking",
        description: "Real-time monitoring of regulatory changes and automatic compliance status updates",
        icon: Shield
      }
    ],
    automationWorkflows: [
      "Contract review and red-flag detection",
      "Legal document classification and indexing",
      "Regulatory compliance reporting",
      "Case file organization and tracking",
      "Client onboarding and KYC automation"
    ],
    color: "blue",
    gradient: "from-blue-400 to-indigo-500",
    industry: "Legal Services",
    realWorldExample: "Maître Bello & Associates automated 90% of contract reviews, reducing turnaround time from 3 days to 2 hours with AI-powered legal analysis.",
    angle: 90
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Education & Research",
    description: "Intelligent automation for academic administration, research documentation, and student services with adaptive learning support.",
    stats: {
      automation: "92%",
      efficiency: "+450%",
      accuracy: "98.9%",
      roi: "+380%"
    },
    agenticCapabilities: [
      {
        name: "Academic Analytics",
        description: "AI agents analyze student performance data and provide personalized learning recommendations",
        icon: Bot
      },
      {
        name: "Research Acceleration",
        description: "Automated literature review, citation analysis, and research paper categorization",
        icon: Sparkles
      },
      {
        name: "Administrative Automation",
        description: "Intelligent handling of enrollment, grading, and administrative workflow optimization",
        icon: Shield
      }
    ],
    automationWorkflows: [
      "Student enrollment and registration",
      "Academic transcript processing",
      "Research paper classification and indexing",
      "Examination and assessment automation",
      "Library resource management and cataloging"
    ],
    color: "amber",
    gradient: "from-amber-400 to-orange-500",
    industry: "Education",
    realWorldExample: "University of Douala implemented AI agents for student services, achieving 24/7 automated support and reducing administrative workload by 80%.",
    angle: 180
  },
  {
    id: 4,
    icon: Banknote,
    title: "Banking & Finance",
    description: "Advanced agentic automation for financial document processing, risk assessment, and regulatory compliance with real-time fraud detection.",
    stats: {
      automation: "97%",
      efficiency: "+500%",
      accuracy: "99.9%",
      roi: "+420%"
    },
    agenticCapabilities: [
      {
        name: "Fraud Detection AI",
        description: "Intelligent agents continuously monitor transactions and documents for suspicious patterns and anomalies",
        icon: Bot
      },
      {
        name: "Risk Assessment Automation",
        description: "AI-powered credit scoring and loan processing with automated decision recommendations",
        icon: Sparkles
      },
      {
        name: "Regulatory Compliance",
        description: "Automated AML/KYC processes and real-time regulatory reporting with compliance monitoring",
        icon: Shield
      }
    ],
    automationWorkflows: [
      "Loan application processing and approval",
      "KYC/AML document verification",
      "Financial statement analysis",
      "Insurance claim processing",
      "Investment portfolio management and reporting"
    ],
    color: "purple",
    gradient: "from-purple-400 to-violet-500",
    industry: "Financial Services",
    realWorldExample: "Afriland First Bank deployed AI agents for loan processing, reducing approval time from 5 days to 30 minutes while maintaining 99.9% accuracy.",
    angle: 270
  }
];

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const [selectedCase, setSelectedCase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation logic
 useEffect(() => {
  if (isAutoPlaying && isInView) {
    intervalRef.current = setInterval(() => {
      setSelectedCase(prev => (prev + 1) % useCases.length);
    }, 4000);
  } else if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, [isAutoPlaying, isInView]);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (isInView && centerRef.current) {
      gsap.fromTo('.neural-node',
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "back.out(1.7)" 
        }
      );

      gsap.fromTo('.connection-line',
        { strokeDasharray: "0 1000" },
        { 
          strokeDasharray: "1000 0", 
          duration: 2, 
          stagger: 0.2, 
          ease: "power2.out" 
        }
      );
    }
  }, [isInView]);

  const selectedUseCase = useCases[selectedCase];
  const radius = 280;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden"
      id="use-cases"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 197, 63, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 197, 63, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8cd139] rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.6, 0.2, 0.6]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-blue-100 mb-8 border border-white/10">
            <Bot size={16} className="text-[#8cd139]" />
            Neural Agentic Automation Matrix
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Agents{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#8cd139] to-[#6ab526] bg-clip-text text-transparent">
                Revolutionizing
              </span>
            </span>
            <br />Industries
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience the future of document processing through our interconnected AI ecosystem
          </p>
        </motion.div>

        {/* Central Neural Network Visualization */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          <div ref={centerRef} className="relative w-[600px] h-[600px]">
            {/* Central Core */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-[#8cd139] to-[#6ab526] flex items-center justify-center shadow-2xl border-4 border-white/20"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 30px rgba(139, 197, 63, 0.3)',
                  '0 0 60px rgba(139, 197, 63, 0.6)',
                  '0 0 30px rgba(139, 197, 63, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                transform: `translate(-50%, -50%) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
              }}
            >
              <Bot size={40} className="text-white" />
            </motion.div>

            {/* Neural Nodes */}
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              {useCases.map((useCase, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const x = 300 + Math.cos(angle) * radius;
                const y = 300 + Math.sin(angle) * radius;
                const isSelected = index === selectedCase;
                
                return (
                  <g key={useCase.id}>
                    {/* Connection Line */}
                    <motion.line
                      className="connection-line"
                      x1="300"
                      y1="300"
                      x2={x}
                      y2={y}
                      stroke={isSelected ? "#8cd139" : "rgba(139, 197, 63, 0.3)"}
                      strokeWidth={isSelected ? "3" : "1"}
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -10],
                        stroke: isSelected ? "#8cd139" : "rgba(139, 197, 63, 0.3)"
                      }}
                      transition={{
                        strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
                        stroke: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Data Flow Particles */}
                    {isSelected && (
                      <motion.circle
                        r="3"
                        fill="#8cd139"
                        animate={{
                          cx: [300, x],
                          cy: [300, y],
                          opacity: [1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Industry Nodes */}
            {useCases.map((useCase, index) => {
              const angle = (index * 90) * (Math.PI / 180);
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isSelected = index === selectedCase;
              
              return (
                <motion.div
                  key={useCase.id}
                  className={`neural-node absolute cursor-pointer group ${isSelected ? 'z-20' : 'z-10'}`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                  }}
                  onClick={() => {
                    setSelectedCase(index);
                    setIsAutoPlaying(false);
                  }}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: isSelected ? 1.2 : 1,
                    zIndex: isSelected ? 20 : 10
                  }}
                >
                  {/* Node Glow */}
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-60 ${
                    isSelected ? 'bg-[#8cd139]' : 'bg-blue-400'
                  }`} />
                  
                  {/* Node Core */}
                  <div className={`relative w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isSelected 
                      ? 'bg-gradient-to-r from-[#8cd139] to-[#6ab526] border-white shadow-2xl' 
                      : 'bg-slate-800/80 border-slate-600 group-hover:border-white/50'
                  }`}>
                    <useCase.icon size={28} className="text-white" />
                  </div>
                  
                  {/* Node Label */}
                  <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                  }`}>
                    <div className="text-sm font-semibold whitespace-nowrap bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                      {useCase.industry}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Side Information Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCase}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedUseCase.gradient} flex items-center justify-center`}>
                  <selectedUseCase.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{selectedUseCase.title}</h3>
                  <p className="text-blue-200 text-sm">{selectedUseCase.industry}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedUseCase.description}
              </p>

              {/* Live Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(selectedUseCase.stats).map(([key, value]) => (
                  <motion.div
                    key={key}
                    className="bg-slate-800/50 rounded-xl p-3 border border-white/10"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-lg font-bold bg-gradient-to-r ${selectedUseCase.gradient} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Capabilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                  Agentic Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedUseCase.agenticCapabilities.slice(0, 2).map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <capability.icon size={16} className="text-[#8cd139]" />
                      <span className="text-sm text-gray-300">{capability.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Example */}
              <div className="bg-[#8cd139]/10 rounded-xl p-4 border border-[#8cd139]/20">
                <h4 className="text-sm font-semibold text-[#8cd139] mb-2">Success Story</h4>
                <p className="text-xs text-gray-300">{selectedUseCase.realWorldExample}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Control Panel */}
        <motion.div 
          className="flex items-center justify-center gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-[#8cd139] text-white' 
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAutoPlaying ? 'Auto Mode' : 'Manual Mode'}
          </button>

          {/* Industry Selector */}
          <div className="flex gap-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCase(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedCase 
                    ? 'bg-[#8cd139] scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <motion.button 
            className="group bg-gradient-to-r from-[#8cd139] to-[#6ab526] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
            <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* CSS for Grid Animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}