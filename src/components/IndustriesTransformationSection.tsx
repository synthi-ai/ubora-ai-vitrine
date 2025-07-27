"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  Heart, 
  Scale, 
  Truck, 
  Users, 
  Zap, 
  TreePine, 
  GraduationCap, 
  Wheat, 
  ShoppingBag,
  TrendingUp,
  Globe,
  Sparkles,
  Eye,
  Monitor
} from 'lucide-react';
import gsap from 'gsap';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin();
}

const IndustriesTransformationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isHologramActive, setIsHologramActive] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [windowWidth, setWindowWidth] = useState(1200); // valeur par défaut raisonnable

useEffect(() => {
  if (typeof window !== "undefined") {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }
}, []);

  // Industries with enhanced data for futuristic display
  const industries = [
    {
      id: 0,
      icon: Building2,
      title: "Banking & Financial Services",
      subtitle: "Digital Finance Revolution",
      description: "Quantum-encrypted loan processing, AI-driven fraud detection, and blockchain-verified transactions",
      stats: "90% faster processing",
      efficiency: 95,
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      glowColor: "cyan",
      coordinates: { x: 20, y: 15 },
      metrics: {
        automation: "97%",
        accuracy: "99.9%",
        volume: "50K+",
        roi: "+420%"
      }
    },
    {
      id: 1,
      icon: Heart,
      title: "Healthcare & Medical",
      subtitle: "Biometric Health Analytics",
      description: "AI-powered diagnostics, neural patient monitoring, and quantum medical imaging analysis",
      stats: "75% paperwork reduction",
      efficiency: 88,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      glowColor: "emerald",
      coordinates: { x: 85, y: 25 },
      metrics: {
        automation: "92%",
        accuracy: "99.7%",
        volume: "30K+",
        roi: "+380%"
      }
    },
    {
      id: 2,
      icon: GraduationCap,
      title: "Education & Research",
      subtitle: "Neural Learning Networks",
      description: "Adaptive AI tutoring, quantum research analytics, and biometric student authentication",
      stats: "85% faster enrollment",
      efficiency: 82,
      gradient: "from-purple-400 via-violet-500 to-purple-600",
      glowColor: "purple",
      coordinates: { x: 15, y: 70 },
      metrics: {
        automation: "89%",
        accuracy: "98.5%",
        volume: "25K+",
        roi: "+340%"
      }
    },
    {
      id: 3,
      icon: Users,
      title: "Government & Public",
      subtitle: "Quantum Governance",
      description: "Blockchain citizen services, AI policy analysis, and neural administrative workflows",
      stats: "80% efficiency boost",
      efficiency: 91,
      gradient: "from-indigo-400 via-blue-500 to-cyan-600",
      glowColor: "indigo",
      coordinates: { x: 75, y: 80 },
      metrics: {
        automation: "94%",
        accuracy: "99.2%",
        volume: "40K+",
        roi: "+360%"
      }
    },
    {
      id: 4,
      icon: Wheat,
      title: "Agriculture & Food",
      subtitle: "BioTech Farming Matrix",
      description: "Satellite crop monitoring, AI weather prediction, and quantum soil analysis",
      stats: "70% faster claims",
      efficiency: 86,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "yellow",
      coordinates: { x: 50, y: 45 },
      metrics: {
        automation: "85%",
        accuracy: "97.8%",
        volume: "20K+",
        roi: "+290%"
      }
    },
    {
      id: 5,
      icon: TreePine,
      title: "Mining & Resources",
      subtitle: "Geo-Quantum Extraction",
      description: "Neural geological mapping, AI environmental compliance, and quantum resource tracking",
      stats: "95% compliance accuracy",
      efficiency: 93,
      gradient: "from-stone-400 via-gray-500 to-slate-600",
      glowColor: "stone",
      coordinates: { x: 90, y: 55 },
      metrics: {
        automation: "91%",
        accuracy: "99.8%",
        volume: "15K+",
        roi: "+450%"
      }
    },
    {
      id: 6,
      icon: Truck,
      title: "Transport & Logistics",
      subtitle: "Quantum Supply Chain",
      description: "AI route optimization, neural cargo tracking, and quantum customs processing",
      stats: "60% faster customs",
      efficiency: 89,
      gradient: "from-red-400 via-pink-500 to-rose-600",
      glowColor: "red",
      coordinates: { x: 25, y: 35 },
      metrics: {
        automation: "88%",
        accuracy: "98.9%",
        volume: "35K+",
        roi: "+310%"
      }
    },
    {
      id: 7,
      icon: ShoppingBag,
      title: "Retail & Commerce",
      subtitle: "Neural Commerce Grid",
      description: "AI customer analytics, quantum inventory management, and biometric payments",
      stats: "50% manual work reduction",
      efficiency: 84,
      gradient: "from-pink-400 via-fuchsia-500 to-purple-600",
      glowColor: "pink",
      coordinates: { x: 80, y: 10 },
      metrics: {
        automation: "83%",
        accuracy: "97.5%",
        volume: "45K+",
        roi: "+280%"
      }
    },
    {
      id: 8,
      icon: Scale,
      title: "Legal & Justice",
      subtitle: "Quantum Legal Matrix",
      description: "AI jurisprudence analysis, neural contract review, and blockchain evidence tracking",
      stats: "65% faster reviews",
      efficiency: 87,
      gradient: "from-violet-400 via-purple-500 to-indigo-600",
      glowColor: "violet",
      coordinates: { x: 60, y: 75 },
      metrics: {
        automation: "86%",
        accuracy: "99.1%",
        volume: "18K+",
        roi: "+370%"
      }
    }
  ];

  // Auto-cycle through industries
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setSelectedIndustry(prev => (prev + 1) % industries.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, industries.length]);

  // Scanning animation
  useEffect(() => {
    if (isInView) {
      const scanInterval = setInterval(() => {
        setScanProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 50);
      return () => clearInterval(scanInterval);
    }
  }, [isInView]);

  const selectedData = industries[selectedIndustry];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white overflow-hidden"
      id="industries"
    >
      {/* Animated Background Matrix */}
      <div className="absolute inset-0">
        {/* Digital Rain Effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                left: `${(i * 2) % 100}%`,
                height: '100px'
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Hexagonal Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                <polygon 
                  points="25,0 45,12.5 45,37.5 25,50 5,37.5 5,12.5" 
                  fill="none" 
                  stroke="#8cd139" 
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{ width: '2px' }}
          animate={{
            x: [-100, windowWidth + 100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Holographic Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative inline-block mb-8">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-slate-900/50 backdrop-blur-sm px-8 py-4 rounded-full border border-cyan-400/30">
              <span className="text-cyan-400 font-mono text-sm">
                [SYSTEM] NEURAL_MATRIX_ACTIVATED
              </span>
            </div>
          </div>

          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              QUANTUM INDUSTRIES
            </span>
            <span className="block text-2xl lg:text-4xl text-gray-300 font-light mt-4">
              Neural Automation Matrix
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experience the convergence of artificial intelligence and quantum processing 
            as we revolutionize African industries through neural automation protocols.
          </motion.p>
        </motion.div>

        {/* Main Holographic Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Interactive Radar/Map */}
          <div className="relative">
            <motion.div 
              className="relative w-[500px] h-[500px] mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Radar Background */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 bg-gradient-radial from-cyan-400/5 to-transparent">
                {/* Radar Rings */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full border border-cyan-400/20`}
                    style={{
                      width: `${(i + 1) * 25}%`,
                      height: `${(i + 1) * 25}%`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}

                {/* Radar Sweep */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gradient-to-r from-cyan-400 to-transparent origin-left"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Scanning Progress */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-cyan-400/30">
                    <div className="text-xs text-cyan-400 font-mono mb-1">SCAN PROGRESS</div>
                    <div className="w-32 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Nodes */}
              {industries.map((industry, index) => {
                const isSelected = index === selectedIndustry;
                const angle = (index * 40) * (Math.PI / 180);
                const radius = 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={industry.id}
                    className={`absolute cursor-pointer group ${isSelected ? 'z-20' : 'z-10'}`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                    }}
                    onClick={() => setSelectedIndustry(index)}
                    whileHover={{ scale: 1.2 }}
                    animate={{
                      scale: isSelected ? 1.3 : 1,
                      filter: isSelected ? 'brightness(1.5)' : 'brightness(1)'
                    }}
                  >
                    {/* Node Glow */}
                    <div className={`absolute inset-0 rounded-full blur-lg opacity-60 ${
                      isSelected ? 'bg-cyan-400' : 'bg-blue-400'
                    }`} />
                    
                    {/* Node Core */}
                    <div className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 border-white shadow-2xl' 
                        : 'bg-slate-800/80 border-slate-600 group-hover:border-cyan-400/50'
                    }`}>
                      <industry.icon size={24} className="text-white" />
                    </div>
                    
                    {/* Pulsing Ring */}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-cyan-400"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Industry Label */}
                    <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}>
                      <div className="text-xs font-mono whitespace-nowrap bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded border border-cyan-400/30 text-cyan-300">
                        {industry.title.split(' ')[0]}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center Core */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center border-4 border-white/20"
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    '0 0 20px rgba(34, 211, 238, 0.3)',
                    '0 0 40px rgba(34, 211, 238, 0.6)',
                    '0 0 20px rgba(34, 211, 238, 0.3)'
                  ]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles size={32} className="text-white" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Data Terminal */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30"
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: 15 }}
                transition={{ duration: 0.5 }}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6 border-b border-cyan-400/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedData.gradient} flex items-center justify-center`}>
                      <selectedData.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedData.title}</h3>
                      <p className="text-cyan-400 text-sm font-mono">{selectedData.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedData.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(selectedData.metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-400/20">
                      <div className="text-xs text-cyan-400 font-mono mb-1 uppercase">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${selectedData.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Efficiency Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-cyan-400 font-mono">EFFICIENCY_RATING</span>
                    <span className="text-white font-bold">{selectedData.efficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${selectedData.gradient}`}
                      initial={{ width: "0%" }}
                      animate={{ width: `${selectedData.efficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold bg-gradient-to-r ${selectedData.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Monitor size={20} />
                  INITIALIZE_PROTOCOL
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Status Panel */}
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 font-mono text-sm">SYSTEM_STATUS: OPERATIONAL</span>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-400">ACTIVE_INDUSTRIES:</span>
                  <span className="text-white">{industries.length}/9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">NEURAL_EFFICIENCY:</span>
                  <span className="text-cyan-400">97.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">QUANTUM_SYNC:</span>
                  <span className="text-green-400">ENABLED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Panel */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-slate-900/40 backdrop-blur-xl rounded-full p-4 border border-cyan-400/30">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndustry(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndustry 
                    ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <motion.button 
            className="mt-8 group bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} className="inline-block mr-2" />
            EXPLORE_NEURAL_MATRIX
            <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <p className="text-blue-200 mt-4 font-mono text-sm">
            [CLASSIFIED] 200+ African organizations operating in the neural grid
          </p>
        </motion.div>
      </div>

      {/* CSS for Gradient Radial */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default IndustriesTransformationSection;