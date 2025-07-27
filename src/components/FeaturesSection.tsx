'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Globe,
  Target,
  Brain,
  Database,
  Shield,
  Clock,
  FileText,
  CheckCircle,
  Cpu,
  Eye,
  Layers,
  Activity,
  Sparkles,
  Monitor,
  Binary,
  Orbit
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  benefits: string[];
  color: string;
  gradient: string;
  hologramColor: string;
  coordinates: { x: number; y: number };
  code: string;
}

// Enhanced features with same text content but futuristic styling
const features: Feature[] = [
  {
    title: "Multi-Format Document Processing",
    description: "Process any document type - PDFs, images, handwritten notes, forms - with exceptional accuracy using advanced AI recognition.",
    icon: FileText,
    benefits: ["Supports 200+ file formats", "99.8% accuracy rate", "Batch processing capable"],
    color: "text-cyan-400",
    gradient: "from-blue-500 to-cyan-500",
    hologramColor: "cyan",
    coordinates: { x: 25, y: 20 },
    code: "PDF_PROC"
  },
  {
    title: "Multilingual OCR Technology",
    description: "Extract text in 50+ languages with superior precision, including complex scripts and handwritten content.",
    icon: Globe,
    benefits: ["50+ languages supported", "Handwriting recognition", "Real-time processing"],
    color: "text-emerald-400",
    gradient: "from-green-500 to-emerald-500",
    hologramColor: "emerald",
    coordinates: { x: 75, y: 30 },
    code: "OCR_LANG"
  },
  {
    title: "Smart Entity Extraction",
    description: "Automatically identify and extract key information like names, dates, amounts, and custom entities from your documents.",
    icon: Target,
    benefits: ["Custom entity training", "Context-aware extraction", "API integration ready"],
    color: "text-purple-400",
    gradient: "from-purple-500 to-violet-500",
    hologramColor: "purple",
    coordinates: { x: 45, y: 70 },
    code: "ENT_EXTR"
  },
  {
    title: "AI-Powered Semantic Analysis",
    description: "Deep understanding of document context and meaning through advanced natural language processing and machine learning.",
    icon: Brain,
    benefits: ["Context understanding", "Sentiment analysis", "Content classification"],
    color: "text-orange-400",
    gradient: "from-orange-500 to-red-500",
    hologramColor: "orange",
    coordinates: { x: 80, y: 75 },
    code: "AI_SEMNT"
  },
  {
    title: "Secure Data Management",
    description: "Enterprise-grade security with encrypted storage, audit trails, and compliance with international data protection standards.",
    icon: Shield,
    benefits: ["Bank-level encryption", "GDPR compliant", "Audit trail tracking"],
    color: "text-indigo-400",
    gradient: "from-indigo-500 to-blue-500",
    hologramColor: "indigo",
    coordinates: { x: 15, y: 85 },
    code: "SEC_DATA"
  },
];

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

// Enhanced BentoTilt with quantum effects
const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);


  const [windowWidth, setWindowWidth] = useState(1200); // valeur par défaut raisonnable

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 12;
    const tiltY = (relativeX - 0.5) * -12;

    setTransformStyle(`perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`transform-gpu transition-transform duration-500 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// Holographic Feature Node Component
const HolographicFeatureNode: React.FC<{
  feature: Feature;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}> = ({ feature, index, isActive, onActivate }) => {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${feature.coordinates.x}%`,
        top: `${feature.coordinates.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      onClick={onActivate}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isActive ? 1.2 : 1,
        opacity: 1,
        filter: isActive ? 'brightness(1.3)' : 'brightness(1)'
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: isActive ? 1.3 : 1.1 }}
    >
      {/* Quantum Ring */}
      <div className={`absolute inset-0 w-24 h-24 rounded-full transition-all duration-500 ${isActive
        ? `border-2 border-[#8cd139] shadow-lg shadow-[#8cd139]/50`
        : 'border border-slate-600'
        }`}>
        {/* Scanning Effect */}
        {isScanning && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#8cd139]"
            animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Central Node */}
      <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
        ? `bg-gradient-to-br ${feature.gradient} shadow-2xl`
        : 'bg-slate-900/80 border border-slate-700'
        }`}>
        {/* Orbiting Particles */}
        {isActive && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#8cd139] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0'
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * 120) * Math.PI / 180) * 40,
                  y: Math.sin((i * 120) * Math.PI / 180) * 40
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </>
        )}

        <feature.icon size={32} className="text-white relative z-10" />
      </div>

      {/* Feature Code */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`text-xs font-mono px-2 py-1 rounded border transition-all duration-300 ${isActive
          ? 'bg-[#8cd139] text-black border-[#8cd139]'
          : 'bg-slate-800 text-slate-300 border-slate-600'
          }`}>
          {feature.code}
        </div>
      </div>

      {/* Connection Lines */}
      {isActive && (
        <svg className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos((i * 60) * Math.PI / 180) * 40}%`}
              y2={`${50 + Math.sin((i * 60) * Math.PI / 180) * 40}%`}
              stroke="#8cd139"
              strokeWidth="1"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </svg>
      )}
    </motion.div>
  );
};

// Neural Network Visualization
const NeuralNetworkViz: React.FC<{ activeFeature: number }> = ({ activeFeature }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-3xl overflow-hidden border border-[#8cd139]/30">
      {/* Neural Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#8cd139" />
              <path d="M0,25 L50,25 M25,0 L25,50" stroke="#8cd139" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Feature Nodes */}
      {features.map((feature, index) => (
        <HolographicFeatureNode
          key={index}
          feature={feature}
          index={index}
          isActive={activeFeature === index}
          onActivate={() => { }} // Handled by parent
        />
      ))}

      {/* Central Hub */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#8cd139] to-[#6ab526] flex items-center justify-center border-4 border-white/20"
        animate={{
          rotate: 360,
          boxShadow: [
            '0 0 30px rgba(140, 209, 57, 0.3)',
            '0 0 60px rgba(140, 209, 57, 0.6)',
            '0 0 30px rgba(140, 209, 57, 0.3)'
          ]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          boxShadow: { duration: 3, repeat: Infinity }
        }}
      >
        <Cpu size={48} className="text-white" />
      </motion.div>

      {/* Scanning Lines */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8cd139]/20 to-transparent"
        style={{ width: '3px' }}
        animate={{
          x: [-50, 550, -50]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Status Display */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-[#8cd139]/30">
          <div className="flex justify-between items-center text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#8cd139] rounded-full animate-pulse" />
              <span className="text-[#8cd139]">NEURAL_NETWORK_ACTIVE</span>
            </div>
            <div className="text-white">
              NODE_{String(activeFeature + 1).padStart(2, '0')}_PROCESSING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Feature Card for sidebar
const FuturisticFeatureCard: React.FC<{
  feature: Feature;
  index: number;
  isActive: boolean;
  onHover: () => void;
}> = ({ feature, index, isActive, onHover }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer transition-all duration-700 ${isActive ? 'scale-105 z-20' : 'scale-100 z-10'
        }`}
      onMouseEnter={() => {
        setHoverOpacity(1);
        onHover();
      }}
      onMouseLeave={() => setHoverOpacity(0)}
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      animate={{
        opacity: 1,
        x: 0,
        rotateY: 0,
        filter: isActive ? 'brightness(1.1)' : 'brightness(1)'
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -5, rotateY: 2 }}
    >
      {/* Holographic Border */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${isActive
        ? `bg-gradient-to-r ${feature.gradient} p-[2px]`
        : 'bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 p-[1px]'
        }`}>
        <div className="w-full h-full bg-slate-900/95 backdrop-blur-xl rounded-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative p-6 lg:p-8">
        {/* Scanning Effect */}
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8cd139]/20 to-transparent"
            style={{ width: '2px' }}
            animate={{
              x: [-20, 280, -20]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}

        {/* Icon Section */}
        <div className="relative mb-6">
          <motion.div
            className={`relative w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden ${isActive
              ? `bg-gradient-to-br ${feature.gradient}`
              : 'bg-slate-800/80'
              }`}
            animate={{
              boxShadow: isActive
                ? [
                  `0 0 20px rgba(140, 209, 57, 0.3)`,
                  `0 0 40px rgba(140, 209, 57, 0.6)`,
                  `0 0 20px rgba(140, 209, 57, 0.3)`
                ]
                : '0 0 0px rgba(0, 0, 0, 0)'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Digital Particles */}
            {isActive && (
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${15 + i * 8}%`,
                      top: `${15 + i * 8}%`
                    }}
                    animate={{
                      y: [-3, 3, -3],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            )}

            <feature.icon size={28} className="text-white relative z-10" />
          </motion.div>

          {/* Feature ID */}
          <div className="absolute -top-2 -right-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold ${isActive
              ? 'bg-[#8cd139] text-black'
              : 'bg-slate-700 text-slate-300'
              }`}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-200'
            }`}>
            {feature.title}
          </h3>

          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-slate-300' : 'text-slate-400'
            }`}>
            {feature.description}
          </p>

          {/* Benefits */}
          <ul className="space-y-2">
            {feature.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-2 text-xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + (i * 0.1) }}
              >
                <CheckCircle size={12} className="text-[#8cd139] flex-shrink-0" />
                <span className="text-slate-400">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          className={`mt-6 relative overflow-hidden rounded-lg transition-all duration-300 ${isActive
            ? 'bg-gradient-to-r from-[#8cd139] to-[#6ab526] p-[1px]'
            : 'bg-slate-700 p-[1px]'
            }`}
        >
          <div className="bg-slate-900 rounded-lg px-4 py-3 text-center relative group">
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
              style={{
                opacity: hoverOpacity * 0.3,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(140, 209, 57, 0.3), transparent)`,
              }}
            />
            <div className="relative flex items-center justify-center gap-2">
              <ArrowRight size={16} className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'
                } group-hover:translate-x-1 transition-transform`} />
              <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'
                }`}>
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic Corner Effects */}
      {isActive && (
        <>
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#8cd139] rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#8cd139] rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#8cd139] rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#8cd139] rounded-br-lg" />
        </>
      )}
    </motion.div>
  );
};

// Main Ultra Futuristic Features Section
const UltraFuturisticFeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsSystemOnline(true);

      // Auto-rotate active feature
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden"
      id="features"
    >
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(25)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${(i * 4) % 100}%`}
              y1={`${(i * 7) % 100}%`}
              x2={`${((i + 7) * 4) % 100}%`}
              y2={`${((i + 3) * 7) % 100}%`}
              stroke="#8cd139"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>

        {/* Floating Quantum Dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8cd139] rounded-full opacity-60"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra Futuristic Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* System Status */}
          <motion.div
            className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm px-8 py-4 rounded-full border border-[#8cd139]/30 mb-8"
            variants={itemVariants}
            animate={{
              boxShadow: isSystemOnline
                ? ['0 0 0 rgba(140, 209, 57, 0)', '0 0 30px rgba(140, 209, 57, 0.4)', '0 0 0 rgba(140, 209, 57, 0)']
                : '0 0 0 rgba(140, 209, 57, 0)'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`w-4 h-4 rounded-full ${isSystemOnline ? 'bg-[#8cd139] animate-pulse' : 'bg-red-400'}`} />
            <span className="text-[#8cd139] font-mono text-sm">
              {isSystemOnline ? '[SYSTEM] QUANTUM_FEATURES_ONLINE' : '[SYSTEM] INITIALIZING...'}
            </span>
            <Binary size={16} className="text-[#8cd139]" />
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8cd139]/20 to-[#6ab526]/20 px-6 py-3 rounded-full text-sm font-medium text-[#8cd139] mb-8"
            variants={itemVariants}
          >
            <Zap size={16} className="text-[#8cd139]" />
            Powerful Features
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-none"
            variants={itemVariants}
          >
            Experience the future of{' '}
            <span className="relative block">
              <span className="bg-gradient-to-r from-[#8cd139] to-[#6ab526] bg-clip-text text-transparent">
                document processing
              </span>
              <motion.svg
                className="absolute -bottom-4 left-0 w-full h-4"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <path d="M0,8 Q50,2 100,8 T200,8" stroke="#8cd139" strokeWidth="3" fill="none" opacity="0.8" />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover our comprehensive suite of AI-powered features designed to transform
            your document workflows with unprecedented accuracy and efficiency through quantum-enhanced processing.
          </motion.p>
        </motion.div>

        {/* Main Layout: Network Viz + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Neural Network Visualization - Takes 2 columns */}
          <div className="lg:col-span-2">
            <BentoTilt>
              <NeuralNetworkViz activeFeature={activeFeature} />
            </BentoTilt>
          </div>

          {/* Features Sidebar - Takes 1 column */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FuturisticFeatureCard
                key={index}
                feature={feature}
                index={index}
                isActive={activeFeature === index}
                onHover={() => setActiveFeature(index)}
              />
            ))}
          </div>
        </div>

        {/* Quantum Metrics Dashboard */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: Clock, value: "10x", label: "Faster Processing", color: "text-cyan-400", gradient: "from-cyan-400 to-blue-500" },
            { icon: Target, value: "99.8%", label: "Accuracy Rate", color: "text-[#8cd139]", gradient: "from-[#8cd139] to-[#6ab526]" },
            { icon: Globe, value: "50+", label: "Languages", color: "text-purple-400", gradient: "from-purple-400 to-violet-500" },
            { icon: Database, value: "200+", label: "File Formats", color: "text-orange-400", gradient: "from-orange-400 to-red-500" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-[#8cd139]/20 group hover:border-[#8cd139]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                boxShadow: [
                  '0 0 0 rgba(140, 209, 57, 0)',
                  '0 0 20px rgba(140, 209, 57, 0.1)',
                  '0 0 0 rgba(140, 209, 57, 0)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
            >
              {/* Holographic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${metric.gradient} mb-4 shadow-lg`}>
                <metric.icon size={28} className="text-white" />
              </div>

              <div className={`relative text-3xl lg:text-4xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>

              <div className="relative text-sm text-slate-400 font-medium mb-4">
                {metric.label}
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${metric.gradient}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>

              {/* Scanning Effect */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-100`}
                animate={{ x: [-100, 300, -100] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quantum Command Center */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-8">
            {/* Feature Navigation */}
            <div className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-xl rounded-full p-4 border border-[#8cd139]/30">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${index === activeFeature
                    ? 'bg-[#8cd139] scale-125 shadow-lg shadow-[#8cd139]/50'
                    : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === activeFeature && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#8cd139]"
                        animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#8cd139]"
                        animate={{ scale: [1, 0.7, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Main CTA */}
            <motion.button
              className="group relative bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5855eb] hover:to-[#7c3aed] text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              <span className="relative flex items-center gap-3">
                <Eye size={24} />
                Explore All Features
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* System Info */}
            <div className="text-center space-y-3">
              <p className="text-blue-200 font-mono text-sm">
                Try all features free for 14 days • No credit card required
              </p>
              <div className="flex items-center justify-center gap-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Activity size={12} className="text-[#8cd139] animate-pulse" />
                  <span className="text-[#8cd139]">QUANTUM_CORE: OPTIMAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={12} className="text-cyan-400" />
                  <span className="text-cyan-400">NEURAL_LAYERS: {features.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor size={12} className="text-purple-400" />
                  <span className="text-purple-400">PROCESSING_NODES: {features.length * 10}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Status Panels */}
        <div className="absolute top-20 right-8 hidden xl:block">
          <motion.div
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 border border-[#8cd139]/20"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="text-xs font-mono text-[#8cd139] mb-3 flex items-center gap-2">
              <Cpu size={12} />
              QUANTUM_STATUS
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">CPU_QUANTUM:</span>
                <span className="text-[#8cd139]">98.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">NEURAL_SYNC:</span>
                <span className="text-cyan-400">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">FEATURES:</span>
                <span className="text-white">{features.length}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">UPTIME:</span>
                <span className="text-green-400">99.9%</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-8 hidden xl:block">
          <motion.div
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-4 border border-purple-400/20"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <div className="text-xs font-mono text-purple-400 mb-3 flex items-center gap-2">
              <Orbit size={12} />
              ACTIVE_PROTOCOL
            </div>
            <div className="text-sm text-white font-bold mb-2">
              {features[activeFeature]?.title.split(' ')[0]}
            </div>
            <div className="text-xs text-slate-400 mb-3">
              Processing neural pathways...
            </div>
            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${features[activeFeature]?.gradient}`}
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Tunnels */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#8cd139]/5"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Scanning Grid */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8cd139]/3 to-transparent"
          style={{ height: '3px' }}
          animate={{
            y: [-100, window.innerHeight + 100, -100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Vertical Scanning Line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
          style={{ width: '2px' }}
          animate={{
            x: [-100, windowWidth + 100, -100]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Advanced CSS Effects */}
      <style jsx>{`
        @keyframes quantum-pulse {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(140, 209, 57, 0.3);
            border-color: rgba(140, 209, 57, 0.3);
          }
          50% { 
            box-shadow: 0 0 25px rgba(140, 209, 57, 0.8), 0 0 50px rgba(140, 209, 57, 0.4);
            border-color: rgba(140, 209, 57, 0.8);
          }
        }
        
        .quantum-active {
          animation: quantum-pulse 2s infinite;
        }
        
        @keyframes neural-flow {
          0% { transform: translateX(-100%) translateY(-100%); }
          50% { transform: translateX(50vw) translateY(50vh); }
          100% { transform: translateX(100vw) translateY(100vh); }
        }
        
        .neural-flow {
          animation: neural-flow 8s infinite linear;
        }

        @keyframes hologram-glitch {
          0%, 90%, 100% { transform: translate(0); }
          10% { transform: translate(-1px, 1px); }
          20% { transform: translate(1px, -1px); }
          30% { transform: translate(-1px, -1px); }
          40% { transform: translate(1px, 1px); }
        }

        .hologram-glitch {
          animation: hologram-glitch 0.3s infinite;
        }
      `}</style>
    </section>
  );
};

export default UltraFuturisticFeaturesSection;