"use client";
import React, { useEffect, useRef, useState } from 'react';
import {
  Play,
  FileCheck,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Cpu,
  Eye,
  Binary,
  Sparkles,
  Orbit,
  Activity,
  Layers,
  Scan,
  Bot
} from 'lucide-react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

const HyperFuturisticHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [activeDataPoint, setActiveDataPoint] = useState(0);
  const isInView = useInView(heroRef, { once: true });

  const [windowWidth, setWindowWidth] = useState(1200); // valeur par défaut raisonnable

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    if (isInView) {
      setTimeout(() => setIsInitialized(true), 500);

      // Scanning animation
      const scanInterval = setInterval(() => {
        setScanProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 50);

      // Data point cycling
      const dataInterval = setInterval(() => {
        setActiveDataPoint(prev => (prev + 1) % 4);
      }, 2000);

      return () => {
        clearInterval(scanInterval);
        clearInterval(dataInterval);
      };
    }
  }, [isInView]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30, rotateX: -10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const hologramVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -45 },
    animate: { opacity: 1, scale: 1, rotateY: 0 },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center py-16 sm:py-24 lg:py-32"
    >
      {/* Quantum Background Grid */}
      <div className="absolute inset-0">
        {/* Digital Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#8cd139] to-transparent"
              style={{
                left: `${(i * 3.33) % 100}%`,
                height: '120px'
              }}
              animate={{
                y: [-120, windowWidth + 120],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${(i * 5) % 100}%`}
              y1={`${(i * 7) % 100}%`}
              x2={`${((i + 5) * 5) % 100}%`}
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

        {/* Floating Quantum Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8cd139] rounded-full opacity-60"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full">
          {/* Quantum Content Panel */}
          <motion.div
            className="w-full lg:w-1/2 z-10"
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
          >
            {/* System Initialization Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-xl px-6 py-3 rounded-full border border-[#8cd139]/30 mb-8"
              variants={fadeInUp}
              animate={{
                boxShadow: isInitialized
                  ? ['0 0 0 rgba(140, 209, 57, 0)', '0 0 20px rgba(140, 209, 57, 0.4)', '0 0 0 rgba(140, 209, 57, 0)']
                  : '0 0 0 rgba(140, 209, 57, 0)'
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className={`w-3 h-3 rounded-full ${isInitialized ? 'bg-[#8cd139] animate-pulse' : 'bg-red-400'}`} />
              <span className="text-[#8cd139] font-mono text-sm">
                {isInitialized ? '[SYSTEM] QUANTUM_IDP_ONLINE' : '[SYSTEM] INITIALIZING...'}
              </span>
              <Bot size={16} className="text-[#8cd139]" />
            </motion.div>

            {/* Quantum Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[0.9] tracking-tight"
              variants={fadeInUp}
              style={{ textShadow: '0 0 30px rgba(140, 209, 57, 0.3)' }}
            >
              <span className="block text-white">Transform your</span>
              <span className="relative block">
                <span className="bg-gradient-to-r from-[#8cd139] via-cyan-400 to-[#6ab526] bg-clip-text text-transparent">
                  documents
                </span>
                <motion.svg
                  className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-4"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  <path d="M0,8 Q50,2 100,8 T200,8" stroke="#8cd139" strokeWidth="3" fill="none" opacity="0.8" />
                  <path d="M0,8 Q50,2 100,8 T200,8" stroke="cyan" strokeWidth="1" fill="none" opacity="0.6" />
                </motion.svg>
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                into actionable{' '}
                <span className="text-[#6366f1]">data</span>
              </span>
            </motion.h1>

            {/* Quantum Data Visualization */}
            <motion.div
              className="relative h-24 sm:h-28 mb-10 bg-slate-900/40 backdrop-blur-xl rounded-2xl p-4 border border-[#8cd139]/30 overflow-hidden"
              variants={fadeInUp}
            >
              {/* Scanning Line */}
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#8cd139] to-transparent"
                animate={{ x: [-10, 400, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Quantum Chart */}
              <div className="relative h-full w-full">
                <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8cd139" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="quantumGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Neural Network Path */}
                  <motion.path
                    d="M0,35 L8,32 L16,28 L24,30 L32,25 L40,20 L48,15 L56,12 L64,18 L72,14 L80,10 L88,8 L96,5 L100,3"
                    stroke="#8cd139"
                    strokeWidth="3"
                    fill="none"
                    filter="url(#quantumGlow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />

                  {/* Data Nodes */}
                  {[0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 100].map((x, i) => {
                    const y = [35, 32, 28, 30, 25, 20, 15, 12, 18, 14, 10, 8, 5, 3][i];
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="#ffffff"
                        stroke="#8cd139"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      />
                    );
                  })}
                </svg>

                {/* Quantum Efficiency Display */}
                <div className="absolute top-2 right-2 bg-[#8cd139]/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-[#8cd139]/50">
                  <div className="text-xs text-[#8cd139] font-mono">EFFICIENCY_BOOST</div>
                  <div className="text-sm font-bold text-white">+127%</div>
                </div>
              </div>
            </motion.div>

            {/* Quantum Description */}
            <motion.p
              className="text-cyan-200 mb-8 text-lg lg:text-xl leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              AI-powered quantum document processing with neural intelligence adaptation.
              Experience unprecedented automation across all sectors through our consciousness-level AI.
            </motion.p>

            {/* Neural Statistics 
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10"
              variants={fadeInUp}
            >
              {[
                { icon: Clock, value: "85%", label: "Time Saved", color: "text-cyan-400", gradient: "from-cyan-400 to-blue-500" },
                { icon: Shield, value: "99.9%", label: "Accuracy", color: "text-[#8cd139]", gradient: "from-[#8cd139] to-[#6ab526]" },
                { icon: Zap, value: "24/7", label: "Availability", color: "text-purple-400", gradient: "from-purple-400 to-violet-500" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-xl px-4 py-3 rounded-xl border border-[#8cd139]/20 group hover:border-[#8cd139]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(140, 209, 57, 0)',
                      '0 0 15px rgba(140, 209, 57, 0.2)',
                      '0 0 0 rgba(140, 209, 57, 0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <div className={`p-2 bg-gradient-to-br ${stat.gradient} rounded-lg shadow-lg`}>
                    <stat.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className={`font-bold text-lg ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Quantum Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              variants={fadeInUp}
            >
              <motion.button
                className="group relative bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                <span className="relative flex items-center gap-3">
                  <Play size={20} fill="white" />
                  Request Demo
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-[#8cd139] text-[#8cd139] px-8 py-4 rounded-full flex items-center gap-3 font-bold text-lg transition-all duration-300 hover:bg-[#8cd139]/10 hover:shadow-lg hover:shadow-[#8cd139]/25"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye size={20} />
                Explore Matrix
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Quantum Holographic Display */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0 relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center"
            variants={hologramVariants}
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
          >
            <div className="relative w-full max-w-lg mx-auto h-full flex items-center justify-center">
              {/* Central Holographic Core */}
              <motion.div
                className="relative w-80 h-80 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-[#8cd139]/30 overflow-hidden shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(140, 209, 57, 0.3)',
                    '0 0 60px rgba(140, 209, 57, 0.6)',
                    '0 0 30px rgba(140, 209, 57, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* Scanning Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="hologram-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="1" fill="#8cd139" />
                        <path d="M0,15 L30,15 M15,0 L15,30" stroke="#8cd139" strokeWidth="0.5" opacity="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hologram-grid)" />
                  </svg>
                </div>

                {/* Central Processing Unit */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-32 h-32 bg-gradient-to-br from-[#8cd139] to-[#6ab526] rounded-2xl flex items-center justify-center"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {/* Orbiting Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white/80 rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '0 0'
                        }}
                        animate={{
                          rotate: 360,
                          x: Math.cos((i * 60) * Math.PI / 180) * 60,
                          y: Math.sin((i * 60) * Math.PI / 180) * 60
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}

                    <Cpu size={48} className="text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Scanning Progress */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-[#8cd139]/30">
                    <div className="flex justify-between items-center text-xs font-mono mb-2">
                      <span className="text-[#8cd139]">NEURAL_SCAN</span>
                      <span className="text-white">{scanProgress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#8cd139] to-cyan-400"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Quantum Elements */}
              <AnimatePresence>
                {[
                  { icon: Clock, position: { x: -120, y: -80 }, label: "Fast Processing", value: "0.45s", color: "cyan" },
                  { icon: Shield, position: { x: 120, y: -60 }, label: "Quantum Security", value: "99.9%", color: "green" },
                  { icon: FileCheck, position: { x: -100, y: 120 }, label: "Neural Accuracy", value: "98.7%", color: "purple" },
                  { icon: Sparkles, position: { x: 140, y: 100 }, label: "AI Processing", value: "24/7", color: "orange" }
                ].map((element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-[#8cd139]/30 shadow-xl ${activeDataPoint === index ? 'scale-110 border-[#8cd139]' : ''
                      }`}
                    style={{
                      left: `calc(50% + ${element.position.x}px)`,
                      top: `calc(50% + ${element.position.y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                    animate={{
                      opacity: 1,
                      scale: activeDataPoint === index ? 1.1 : 1,
                      rotateY: 0,
                      y: [-5, 5, -5]
                    }}
                    transition={{
                      opacity: { delay: 1 + index * 0.2, duration: 0.8 },
                      scale: { duration: 0.3 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${element.color === 'cyan' ? 'bg-cyan-500/20' :
                          element.color === 'green' ? 'bg-[#8cd139]/20' :
                            element.color === 'purple' ? 'bg-purple-500/20' :
                              'bg-orange-500/20'
                        }`}>
                        <element.icon size={16} className={`${element.color === 'cyan' ? 'text-cyan-400' :
                            element.color === 'green' ? 'text-[#8cd139]' :
                              element.color === 'purple' ? 'text-purple-400' :
                                'text-orange-400'
                          }`} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">{element.label}</div>
                        <div className={`text-sm font-bold ${element.color === 'cyan' ? 'text-cyan-400' :
                            element.color === 'green' ? 'text-[#8cd139]' :
                              element.color === 'purple' ? 'text-purple-400' :
                                'text-orange-400'
                          }`}>
                          {element.value}
                        </div>
                      </div>
                    </div>

                    {/* Quantum Connection Lines */}
                    <svg className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
                      <motion.line
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2="50%"
                        stroke="#8cd139"
                        strokeWidth="1"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: activeDataPoint === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </svg>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Quantum Status Display */}
              <motion.div
                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-slate-900/80 backdrop-blur-xl rounded-xl px-4 py-2 border border-[#8cd139]/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <div className="flex items-center gap-2 text-xs font-mono">
                  <div className="w-2 h-2 bg-[#8cd139] rounded-full animate-pulse" />
                  <span className="text-[#8cd139]">IDP_AGENTIC</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Advanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8cd139]/5 to-transparent"
          style={{ height: '4px' }}
          animate={{
            y: [-50, window.innerHeight + 50, -50]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Vertical Quantum Stream */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent"
          style={{ width: '3px' }}
          animate={{
            x: [-50, windowWidth + 50, -50]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* CSS for additional quantum effects */}
      <style jsx>{`
        @keyframes quantum-pulse {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(140, 209, 57, 0.3), 0 0 20px rgba(140, 209, 57, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(140, 209, 57, 0.8), 0 0 60px rgba(140, 209, 57, 0.4);
          }
        }
        
        .quantum-glow {
          animation: quantum-pulse 3s infinite;
        }
        
        @keyframes neural-flow {
          0% { opacity: 0; transform: translateY(-20px); }
          50% { opacity: 1; transform: translateY(0px); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        
        .neural-flow {
          animation: neural-flow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HyperFuturisticHeroSection;