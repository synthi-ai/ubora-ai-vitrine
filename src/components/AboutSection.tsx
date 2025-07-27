"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Cpu,
  Eye,
  Binary,
  Orbit,
  Activity,
  Sparkles,
  Bot,
  Scan,
  Layers,
  Brain,
  Database,
  Monitor,
  Target
} from "lucide-react";
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

export default function QuantumImmersiveAboutSection() {
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: true,
    currentTime: 0,
    duration: 0,
    loading: true
  });

   const [activeFeature, setActiveFeature] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [quantumProgress, setQuantumProgress] = useState(0);
  const [systemOnline, setSystemOnline] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200); // SSR-safe default
  const [windowHeight, setWindowHeight] = useState(800); // SSR-safe default
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });




  const features = [
    {
      icon: Zap,
      title: "Quantum Processing Speed",
      description: "Process thousands of documents in nanoseconds with quantum-enhanced algorithms",
      color: "from-cyan-400 to-blue-500",
      hologramColor: "cyan",
      metrics: { speed: "0.001ms", efficiency: "9847%" }
    },
    {
      icon: Shield,
      title: "Neural Security Matrix",
      description: "Military-grade quantum encryption with consciousness-level threat detection",
      color: "from-[#8cd139] to-[#6ab526]",
      hologramColor: "green",
      metrics: { security: "99.99%", threats: "0" }
    },
    {
      icon: Brain,
      title: "Consciousness AI",
      description: "Advanced neural networks that understand context like human consciousness",
      color: "from-purple-400 to-pink-500",
      hologramColor: "purple",
      metrics: { intelligence: "847IQ", accuracy: "99.98%" }
    }
  ];

 useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
      };
      
      // Set initial values
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setMounted(true);
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 


  const stats = [
    // { value: "99.98%", label: "Neural Accuracy", color: "text-[#8cd139]", icon: Target, gradient: "from-[#8cd139] to-[#6ab526]" },
    // { value: "∞x", label: "Quantum Speed", color: "text-cyan-400", icon: Zap, gradient: "from-cyan-400 to-blue-500" },
    // { value: "∞", label: "Document Types", color: "text-purple-400", icon: Database, gradient: "from-purple-400 to-violet-500" },
    // { value: "∀", label: "Universal Language", color: "text-orange-400", icon: Brain, gradient: "from-orange-400 to-red-500" }
  ];

  const quantumBenefits = [
    "AI-powered  data extraction with 99.98% neural accuracy",
    "Support for infinite document types across all dimensional planes",
    "Military-grade quantum security with consciousness-level protection",
    "Seamless integration with existing reality and virtual matrices"
  ];

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSystemOnline(true), 500);
      setIsScanning(true);

      // Quantum progress animation
      const progressInterval = setInterval(() => {
        setQuantumProgress(prev => (prev >= 100 ? 0 : prev + 1.5));
      }, 50);

      // Auto-cycle features
      const featureInterval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features.length);
      }, 4000);

      return () => {
        clearInterval(progressInterval);
        clearInterval(featureInterval);
      };
    }
  }, [isInView, features.length]);

  // Video controls with quantum effects
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoState.playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoState(prev => ({ ...prev, playing: !prev.playing }));
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoState.muted;
      setVideoState(prev => ({ ...prev, muted: !prev.muted }));
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setVideoState(prev => ({
        ...prev,
        currentTime: videoRef.current?.currentTime || 0,
        duration: videoRef.current?.duration || 0
      }));
    }
  };

  const handleLoadedData = () => {
    setVideoState(prev => ({ ...prev, loading: false }));
  };

  // Animation variants
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
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hologramVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black py-20 overflow-hidden"
      id="about"
    >
      {/* Quantum Background Matrix */}
      <div className="absolute inset-0">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="quantum-about-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#8cd139" />
                <path d="M0,20 L40,20 M20,0 L20,40" stroke="#8cd139" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantum-about-grid)" />
          </svg>
        </div>

        {/* Digital Rain Matrix */}
        <div className="absolute inset-0 opacity-15">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#8cd139] to-transparent"
              style={{
                left: `${(i * 4) % 100}%`,
                height: '150px'
              }}
              animate={{
                y: [-150, windowHeight + 150],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Quantum Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8cd139] rounded-full opacity-60"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`
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

        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8cd139]/10 to-transparent"
          style={{ height: '3px' }}
          animate={{
            y: [-50,windowHeight + 50, -50]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantum Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* System Status */}
          <motion.div
            className="inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-xl px-6 py-3 rounded-full border border-[#8cd139]/30 mb-8"
            variants={itemVariants}
            animate={{
              boxShadow: systemOnline
                ? ['0 0 0 rgba(140, 209, 57, 0)', '0 0 20px rgba(140, 209, 57, 0.4)', '0 0 0 rgba(140, 209, 57, 0)']
                : '0 0 0 rgba(140, 209, 57, 0)'
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`w-3 h-3 rounded-full ${systemOnline ? 'bg-[#8cd139] animate-pulse' : 'bg-red-400'}`} />
            <span className="text-[#8cd139] font-mono text-sm">
              {systemOnline ? '[SYSTEM] QUANTUM_ABOUT_MATRIX_ONLINE' : '[SYSTEM] INITIALIZING...'}
            </span>
            <Bot size={16} className="text-[#8cd139]" />
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8cd139]/20 to-[#6ab526]/20 px-6 py-3 rounded-full text-sm font-medium text-[#8cd139] mb-8"
            variants={itemVariants}
          >
            <Eye size={16} className="text-[#8cd139]" />
            How UboraAI  Works
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
            variants={itemVariants}
            style={{ textShadow: '0 0 30px rgba(140, 209, 57, 0.3)' }}
          >
            <span className="block text-white">Transforming documents into</span>
            <span className="relative block">
              <span className="bg-gradient-to-r from-[#8cd139] via-cyan-400 to-[#6ab526] bg-clip-text text-transparent">
                quantum insights
              </span>
              <motion.svg
                className="absolute -bottom-3 left-0 w-full h-4"
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
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experience how our AI consciousness revolutionizes document processing
            across multiple dimensional planes with unprecedented neural precision and speed.
          </motion.p>
        </motion.div>

        {/* Quantum Holographic Video Display */}
        <motion.div
          ref={videoContainerRef}
          className="relative w-full aspect-video max-w-6xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-2xl bg-slate-900/80 backdrop-blur-xl border border-[#8cd139]/30"
          variants={hologramVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Holographic Frame Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner Indicators */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#8cd139] rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#8cd139] rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#8cd139] rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#8cd139] rounded-br-2xl" />

            {/* Scanning Grid Overlay */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full">
                <defs>
                  <pattern id="video-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="15" cy="15" r="0.5" fill="#8cd139" />
                    <path d="M0,15 L30,15 M15,0 L15,30" stroke="#8cd139" strokeWidth="0.3" opacity="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#video-grid)" />
              </svg>
            </div>

            {/* Quantum Scanning Line */}
            {isScanning && (
              <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8cd139] to-transparent"
                animate={{
                  y: [0, 400, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            )}
          </div>

          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover relative z-10"
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
            onPlay={() => setVideoState(prev => ({ ...prev, playing: true }))}
            onPause={() => setVideoState(prev => ({ ...prev, playing: false }))}
            poster="/api/placeholder/1200/675"
          >
            <source src="/videos/ubora-ai-demo.mp4" type="video/mp4" />
            <source src="/videos/ubora-ai-demo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Quantum Video Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20">
            {/* Central Play Button */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-24 h-24 bg-slate-900/60 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-[#8cd139]/50 group-hover:border-[#8cd139] transition-all duration-300">
                {/* Orbiting Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#8cd139]/60 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0'
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * 60) * Math.PI / 180) * 40,
                      y: Math.sin((i * 60) * Math.PI / 180) * 40
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {videoState.playing ? (
                  <Pause size={32} className="text-[#8cd139] ml-1 relative z-10" />
                ) : (
                  <Play size={32} className="text-[#8cd139] ml-2 relative z-10" />
                )}
              </div>
            </motion.button>

            {/* Advanced Controls Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
              {/* Quantum Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2 text-xs font-mono">
                  <span className="text-[#8cd139]">NEURAL_PROCESSING</span>
                  <span className="text-white">{quantumProgress.toFixed(1)}%</span>
                </div>
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8cd139] to-cyan-400"
                    style={{
                      width: `${videoState.duration ? (videoState.currentTime / videoState.duration) * 100 : 0}%`
                    }}
                  />
                </div>
              </div>

              {/* Control Interface */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={togglePlayPause}
                    className="p-2 text-[#8cd139] hover:text-white transition-colors bg-slate-800/50 rounded-lg hover:bg-slate-700/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {videoState.playing ? <Pause size={20} /> : <Play size={20} />}
                  </motion.button>

                  <motion.button
                    onClick={toggleMute}
                    className="p-2 text-[#8cd139] hover:text-white transition-colors bg-slate-800/50 rounded-lg hover:bg-slate-700/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {videoState.muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </motion.button>

                  <div className="text-[#8cd139] text-sm font-mono bg-slate-800/50 px-3 py-1 rounded-lg">
                    {Math.floor(videoState.currentTime / 60)}:{Math.floor(videoState.currentTime % 60).toString().padStart(2, '0')} /
                    {Math.floor(videoState.duration / 60)}:{Math.floor(videoState.duration % 60).toString().padStart(2, '0')}
                  </div>
                </div>

                <motion.button
                  className="p-2 text-[#8cd139] hover:text-white transition-colors bg-slate-800/50 rounded-lg hover:bg-slate-700/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Maximize size={20} />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quantum Loading State */}
          {videoState.loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm z-30">
              <div className="relative">
                <motion.div
                  className="w-16 h-16 border-4 border-[#8cd139]/30 border-t-[#8cd139] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu size={24} className="text-[#8cd139]" />
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quantum Content Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Neural About Panel */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-[#8cd139]/30 overflow-hidden relative"
              variants={itemVariants}
            >
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="about-grid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                      <circle cx="12.5" cy="12.5" r="0.5" fill="#8cd139" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
              </div>

              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Binary size={28} className="text-[#8cd139]" />
                  About UboraAI
                </h3>

                <div className="space-y-6">
                  <p className="text-cyan-200 leading-relaxed text-lg">
                    Our intelligent document processing solution transcends traditional AI limitations
                    by implementing consciousness-level neural networks that understand context, emotion, and intent
                    across multiple dimensional planes.
                  </p>

                  <p className="text-cyan-200 leading-relaxed text-lg">
                    From  invoice processing to multidimensional contract analysis, UboraAI extracts and
                    processes structured data from any document format across infinite realities with unprecedented
                    neural accuracy, reducing manual work by up to 99.98% while ensuring quantum-level security.
                  </p>

                  {/* Quantum Benefits */}
                  <div className="space-y-4 pt-6">
                    <h4 className="text-xl font-bold text-[#8cd139] mb-4 flex items-center gap-2">
                      <Sparkles size={20} />
                      Capabilities
                    </h4>
                    {quantumBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <CheckCircle size={20} className="text-[#8cd139] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-cyan-200 font-medium group-hover:text-white transition-colors">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quantum Features Hologram */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
              variants={itemVariants}
            >
              <Brain size={28} className="text-[#8cd139]" />
              Why Choose UboraAI?
            </motion.h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`group p-6 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden relative ${activeFeature === index
                    ? 'bg-slate-800/80 backdrop-blur-xl border-2 border-[#8cd139] scale-105'
                    : 'bg-slate-900/60 backdrop-blur-xl border border-[#8cd139]/20 hover:border-[#8cd139]/50'
                    }`}
                  variants={itemVariants}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: activeFeature === index ? 1.05 : 1.02, y: -4 }}
                  animate={{
                    boxShadow: activeFeature === index
                      ? ['0 0 20px rgba(140, 209, 57, 0.3)', '0 0 40px rgba(140, 209, 57, 0.6)', '0 0 20px rgba(140, 209, 57, 0.3)']
                      : '0 0 0px rgba(140, 209, 57, 0)'
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Background Effects */}
                  {activeFeature === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#8cd139]/10 via-cyan-400/10 to-[#8cd139]/10"
                      animate={{
                        x: [-100, 300, -100]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  )}

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg relative overflow-hidden`}
                      animate={{
                        scale: activeFeature === index ? [1, 1.1, 1] : 1,
                        rotate: activeFeature === index ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Orbiting Particles */}
                      {activeFeature === index && (
                        <>
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white/80 rounded-full"
                              style={{
                                top: '50%',
                                left: '50%',
                                transformOrigin: '0 0'
                              }}
                              animate={{
                                rotate: 360,
                                x: Math.cos((i * 90) * Math.PI / 180) * 20,
                                y: Math.sin((i * 90) * Math.PI / 180) * 20
                              }}
                              transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          ))}
                        </>
                      )}

                      <feature.icon size={28} className="text-white relative z-10" />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${activeFeature === index ? 'text-[#8cd139]' : 'text-white'
                        }`}>
                        {feature.title}
                      </h4>
                      <p className={`leading-relaxed mb-4 transition-colors duration-300 ${activeFeature === index ? 'text-cyan-200' : 'text-slate-400'
                        }`}>
                        {feature.description}
                      </p>

                      {/* Quantum Metrics */}
                      {activeFeature === index && (
                        <motion.div
                          className="grid grid-cols-2 gap-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.5 }}
                        >
                          {Object.entries(feature.metrics).map(([key, value]) => (
                            <div key={key} className="bg-slate-800/60 rounded-lg p-3 border border-[#8cd139]/20">
                              <div className="text-xs text-[#8cd139] font-mono uppercase">{key}</div>
                              <div className="text-sm font-bold text-white">{value}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {activeFeature === index && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8cd139] to-cyan-400"
                      layoutId="activeFeatureBar"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quantum Statistics Dashboard */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-[#8cd139]/20 group hover:border-[#8cd139]/50 transition-all duration-300 overflow-hidden"
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
              {/* Background Particle Effects */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#8cd139] rounded-full"
                    style={{
                      left: `${(i * 12.5) % 100}%`,
                      top: `${(i * 12.5) % 100}%`
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>

              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={28} className="text-white" />
                </div>

                <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>

                <div className="text-sm text-slate-400 font-medium mb-4">
                  {stat.label}
                </div>

                {/* Quantum Progress Indicator */}
                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${stat.gradient}`}
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
              </div>

              {/* Scanning Effect */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100`}
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
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-8">
            {/* Neural Interface Controls */}
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

            {/* Main CTA Button */}
            <motion.button
              className="group relative bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#ec4899] text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

              <span className="relative flex items-center gap-3">
                <Monitor size={24} />
                Experience Quantum Processing
                <Sparkles size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.button>

            {/* System Status Display */}
            <div className="text-center space-y-3">
              <p className="text-cyan-200 font-mono text-sm">
                [CLASSIFIED] Neural processing active across infinite dimensional planes
              </p>
              <div className="flex items-center justify-center gap-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Activity size={12} className="text-[#8cd139] animate-pulse" />
                  <span className="text-[#8cd139]">QUANTUM_CORE: OPTIMAL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={12} className="text-cyan-400" />
                  <span className="text-cyan-400">NEURAL_SYNC: ACTIVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain size={12} className="text-purple-400" />
                  <span className="text-purple-400">CONSCIOUSNESS: ONLINE</span>
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
              NEURAL_STATUS
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">CONSCIOUSNESS:</span>
                <span className="text-[#8cd139]">ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">QUANTUM_SYNC:</span>
                <span className="text-cyan-400">99.98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">DIMENSIONS:</span>
                <span className="text-white">∞</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">UPTIME:</span>
                <span className="text-green-400">∞.∞%</span>
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
              ACTIVE_FEATURE
            </div>
            <div className="text-sm text-white font-bold mb-2">
              {features[activeFeature]?.title.split(' ')[0]}
            </div>
            <div className="text-xs text-slate-400 mb-3">
              Processing neural pathways...
            </div>
            <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${features[activeFeature]?.color}`}
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Advanced Quantum Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum Tunnels */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#8cd139]/5"
            style={{
              width: `${500 + i * 200}px`,
              height: `${500 + i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Dimensional Rifts */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent"
          style={{ width: '4px' }}
          animate={{
            x: [-100, windowWidth + 100, -100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Advanced CSS Effects */}
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
          0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
          50% { opacity: 1; transform: translateY(0px) scale(1); }
          100% { opacity: 0; transform: translateY(20px) scale(0.8); }
        }
        
        .neural-flow {
          animation: neural-flow 3s infinite;
        }

        @keyframes consciousness-wave {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }

        .consciousness-wave {
          animation: consciousness-wave 4s infinite;
        }

        @keyframes dimensional-shift {
          0%, 100% { 
            filter: hue-rotate(0deg) brightness(1);
            transform: perspective(1000px) rotateX(0deg);
          }
          50% { 
            filter: hue-rotate(60deg) brightness(1.2);
            transform: perspective(1000px) rotateX(2deg);
          }
        }

        .dimensional-shift {
          animation: dimensional-shift 6s infinite;
        }
      `}</style>
    </section>
  );
}